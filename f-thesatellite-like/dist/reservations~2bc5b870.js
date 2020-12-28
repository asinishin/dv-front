(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"/qdO":function(e,t,n){"use strict";n.r(t);var r=n("YoJi");t.default=r.a},"2AQp":function(e,t,n){var r={"./reservation-calendar/index.js":"/qdO","./reservation-form/index.js":"yUci","./user-reservations/user-reservations.controller.js":"qNkH"};function a(e){var t=f(e);return n(t)}function f(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=f,e.exports=a,a.id="2AQp"},Khvr:function(e,t){e.exports='<div class=reservations-list ng-show=!$ctrl.editingReservation ff-bulk-read-only> <h1 class=page-title>{{state.getPageTitle()}}</h1> <ff-panel role=article aria-label="{{\'USER_RESERVATIONS.RESERVATIONS\' | translate}}"> <ff-panel-header class=ff-read-only-ignore> <ff-row class=gutter-h-half role=radiogroup aria-label="{{\'USER_RESERVATIONS.FILTER\' | translate}}"> <label ng-repeat="opt in ::$ctrl.optsFilter" flex=none> <ff-radio name=filter ff-model=$ctrl.filter ff-value=::opt.id ff-label={{opt.name}} ff-change=$ctrl.onFilter() style=min-height:1rem></ff-radio> </label> </ff-row> </ff-panel-header> <ff-header> <ff-row role=rowheader> <cell flex="0 1 145px" class=ff-center><span translate=USER_RESERVATIONS.DATE></span></cell> <cell flex="1 1 150px"><span translate=USER_RESERVATIONS.SPACE></span></cell> <cell flex="0 1 145px" class=ff-center><span translate=USER_RESERVATIONS.TIME></span></cell> <cell flex="1 1 200px" class=show-sm><span translate=USER_RESERVATIONS.NOTES></span></cell> <cell flex="0 1 110px" ng-if=::$ctrl.settings.enableAccessCodes> <span translate=USER_RESERVATIONS.ACCESS_CODE></span> </cell> <cell flex="0 1 130px" class=show-md ng-if=::state.isLoggedAdmin()> <span translate=USER_RESERVATIONS.ADDED_BY></span> </cell> <cell flex="0 1 110px" class=show-md ng-if=::state.isLoggedAdmin()> <span translate=USER_RESERVATIONS.UPDATED_ON></span> </cell> </ff-row> </ff-header> <ff-col infinite-scroll=$ctrl.fetch() infinite-scroll-distance=2 infinite-scroll-container="\'.snap-content-scroller\'"> <ff-row ng-repeat="res in $ctrl.reservations" role=row> <ff-static flex="0 1 145px" ff-bind="::res.from | date:\'weekDate\'" class=ff-right></ff-static> <ff-static flex="1 1 150px" ff-bind=::res.reservationUnitName></ff-static> <ff-static flex="0 1 145px" class=ff-center><span><span nice-time=::res.from></span> - <span nice-time=::res.to></span></span></ff-static> <ff-static flex="1 1 200px" class=show-sm> <div> <div>{{::res.reservationNote}}</div> <div ng-repeat="f in res.$$fields"> <small><span>{{f.name}}</span> <strong>{{f.value}}</strong></small> </div> </div> </ff-static> <ff-static flex="0 1 110px" ff-bind="::res.accessCode | nd" ng-if=::$ctrl.settings.enableAccessCodes></ff-static> <ff-static flex="0 1 130px" class=show-md ff-bind=::res.addedBy ng-if=::state.isLoggedAdmin()></ff-static> <ff-static flex="0 1 110px" class=show-md ff-bind="::res.updatedAt | date:\'mediumDate\'" ng-if=::state.isLoggedAdmin()></ff-static> <ff-btn-group class=floating-toolbar> <ff-row> <ff-btn sense=edit size=xs class=ff-btn-icon ff-click=$ctrl.editReservation(res) title="{{\'GLOBAL.BTN_EDIT\' | translate}}" ng-if=::$ctrl.isEditable(res)></ff-btn> <ff-btn sense=delete size=xs class=ff-btn-icon ff-click=$ctrl.cancelReservation(res) title="{{\'GLOBAL.BTN_CANCEL\' | translate}}"></ff-btn> </ff-row> </ff-btn-group> </ff-row> <div class="ff-spin ff-spin-placeholder" ng-if=$ctrl.fetching></div> </ff-col> <ff-row ng-if="!$ctrl.reservations.length && !$ctrl.fetching" class=ff-no-frame> <ff-label>{{\'GLOBAL.NONE\' | translate}}</ff-label> </ff-row> </ff-panel> <ff-btn-group class=buttons-bottom> <ff-btn sense=new ff-click=$ctrl.newReservation()> <span translate=USER_RESERVATIONS.BTN_NEW></span> </ff-btn> </ff-btn-group> </div> <form name=formEditReservation class=reservations-edit ng-if=$ctrl.editingReservation ff-bulk-read-only> <h1 class=page-title>Edit Reservation</h1> <div class="ff-grid ff-gutter-v ff-gutter-h"> <ff-panel flex="{md: \'0 0 50%\'}"> <ff-panel-header>{{\'Center: \' + state.getCurrentCenter().name}}</ff-panel-header> <label class=ff-row> <ff-label flex="0 0 80px">Category</ff-label> <ff-static ff-bind=$ctrl.editingReservation.resCategoryName></ff-static> </label> <label class=ff-row> <ff-label flex="0 0 80px">Unit</ff-label> <ff-static ff-bind=$ctrl.editingReservation.reservationUnitName></ff-static> </label> <dw-date-time name=from ff-label="Start Time" ff-model=$ctrl.editingReservation.from label-flex="0 0 80px" ff-required=true ff-date-diff=23 ff-date-order="{ early: $ctrl.editingReservation.from, late: $ctrl.editingReservation.to }" ff-validate-alert="{ field: \'Start Date\', late: \'End Date\' }"> </dw-date-time> <dw-date-time name=to ff-label="End Time" ff-model=$ctrl.editingReservation.to label-flex="0 0 80px" ff-required=true ff-date-diff=23 ff-date-order="{ early: $ctrl.editingReservation.from, late: $ctrl.editingReservation.to }" ff-validate-alert="{ field: \'End Date\', early: \'Start Date\' }"> </dw-date-time> </ff-panel> <ff-panel flex="{md: \'0 0 50%\'}"> <ff-panel-header>Notes</ff-panel-header> <ff-row> <ff-textarea ff-model=$ctrl.editingReservation.reservationNote rowspan=4></ff-textarea> </ff-row> </ff-panel> </div> <ff-btn-group class=buttons-bottom> <ff-btn sense=save type=submit ff-click=$ctrl.saveReservation() ff-disabled=formEditReservation.$pristine>Save Reservation</ff-btn> <ff-btn sense=back ff-click=$ctrl.back()>Back</ff-btn> </ff-btn-group> </form> '},Lkwn:function(e,t,n){var r={"./user-reservations/user-reservations.tpl.html":"Khvr"};function a(e){var t=f(e);return n(t)}function f(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=f,e.exports=a,a.id="Lkwn"},qNkH:function(e,t,n){"use strict";n.r(t);n("lYjL"),n("JBxO"),n("FdtR");var r=n("yCd9"),a=n.n(r),f=n("nbuU"),i=n.n(f),s=n("WSeP"),l=n.n(s),o=n("0zKI"),d=n.n(o),c=n("NOor"),m=n.n(c),u=n("hsT8"),v=n.n(u),p=n("6RpP"),g=n.n(p),R=n("2/1H"),b=n("vWHn"),E=n("+l1P");t.default=angular.module("deskworks.userReservations",["session","deskworks.reservationService",R.a.name,b.a.name,E.a.name]).controller("UserReservationsCtrl",["$scope","$filter","$route","$translate","$timeout","dwAlerts","reservationService","ReservationUnit","reservationUnits","user","state","session","helper","settings","reservationFields",function(e,t,n,r,f,s,o,c,u,p,R,b,E,h,w){var S=this;R.setPageTitle(r.instant("USER_RESERVATIONS.PAGE_TITLE",{userName:p.fullNameCompany})),S.optsFilter=[{id:"all",name:r.instant("USER_RESERVATIONS.FILTER.ALL")},{id:"upcoming",name:r.instant("USER_RESERVATIONS.FILTER.UPCOMING")},{id:"past",name:r.instant("USER_RESERVATIONS.FILTER.PAST")}],S.filter=S.optsFilter[0].id,S.settings=h,S.reservations=[],S.params={centerId:R.getCurrentCenterId(),userId:R.getCurrentUserId(),offset:0,limit:50},S.fetch=function(){if(S.eof||S.fetching)return S.fetching;S.fetching=o.query(S.params).catch((function(e){return s.error(e,"Failed to query reservations.")})).finally((function(){S.fetching=null})).then((function(e){return function(e){return l()(e).call(e,(function(e){var t,n,r=i()(u).call(u,(function(t){return t.id===e.reservationUnitId}))||{};e.resCategoryName=r.reservationTypeName,e.fields=e.fields||{},e.$$fields=a()(t=v()(n=v()(w).call(w,(function(e){return e.reservationCategoryId===r.reservationTypeId||0===e.reservationCategoryId}))).call(n,(function(t){return e.fields[t.id]||0===e.fields[t.id]||!1===e.fields[t.id]}))).call(t,(function(t){return{name:t.name,value:t.$$filter(t,e.fields[t.id])}}))})),e}(e)})).then((function(e){var t;S.reservations=g()(t=S.reservations).call(t,e),S.params.offset=S.reservations.length,S.eof=e.length<S.params.limit}))},S.onFilter=function(){S.reservations=[],S.params.offset=0,S.eof=!1,S.params.from="upcoming"===v()(S)?moment():null,S.params.to="past"===v()(S)?moment():null,S.fetch()},e.$watch("$ctrl.editingReservation.from",(function(e,t){moment.isMoment(e)&&moment.isMoment(t)&&(e.date()===t.date()&&e.month()===t.month()&&e.year()===t.year()||(S.editingReservation.to=moment([e.year(),e.month(),e.date(),S.editingReservation.to.hour()||e.hour(),S.editingReservation.to.minute()||e.minute(),0,0])))})),S.saveReservation=function(){if(S.editingReservation&&!E.pointFirstInvalid(".reservations-edit")){var e={id:S.editingReservation.id,from:S.editingReservation.from,to:S.editingReservation.to,reservationNote:S.editingReservation.reservationNote};return o.save(R.getCurrentCenterId(),R.getCurrentUserId(),e).catch((function(e){return s.error(e,"Failed to update reservation.")})).then((function(){delete S.editingReservation,S.onFilter()}))}},S.isEditable=function(e){return b.isAdmin()||b.isRole("member")},S.editReservation=function(e){if(b.isRole("member"))return R.setParam("date",t("date")(e.from,"yyyy-MM-ddTHH:mm:00Z")),R.setPath("/edit-reservation/"+e.id);b.isAdmin()&&(S.editingReservation=angular.copy(e))},S.back=function(){delete S.editingReservation},S.cancelReservation=function(e){if(confirm(r.instant("USER_RESERVATIONS.CONFIRM_DELETE")))return o.delete(R.getCurrentCenterId(),R.getCurrentUserId(),e.id).catch((function(e){return s.error(e,"Failed to cancel reservation.")})).then((function(){var t,n=m()(E).call(E,S.reservations,e.id);d()(t=S.reservations).call(t,n,1)}))},S.newReservation=function(){return R.setPath("/new-reservation")}}])},roXK:function(e,t,n){"use strict";n.r(t);n("Muwe"),n("y89P");var r=n("WSeP"),a=n.n(r),f=n("lRNC"),i=n.n(f),s=n("yCd9"),l=n.n(s),o=["$injector",function(e){var t,r,f=(t=n("2AQp"),l()(r=i()(t).call(t)).call(r,t));e.loadNewModules(l()(f).call(f,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,r=n("Lkwn");a()(t=i()(r).call(r)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),r(t))}))}])}];t.default=o},vWHn:function(e,t,n){"use strict";t.a=angular.module("deskworks.dwDateTime",["flexForms"]).directive("dwDateTime",(function(){return{restrict:"E",scope:!0,compile:function(e,t){var n=t.ngDisabled?' ng-disabled="'+t.ngDisabled+'"':"",r=t.ngDisabled?' ff-disabled="'+t.ngDisabled+'"':"",a=t.ffRequired?' ff-required="'+t.ffRequired+'"':"",f=t.ffDateOrder?' ff-date-order="'+t.ffDateOrder+'"':"",i=t.ffDateDiff?' ff-date-diff="'+t.ffDateDiff+'"':"",s=t.ffValidateAlert?' ff-validate-alert="'+t.ffValidateAlert+'"':"",l=t.labelClass?' class="'+t.labelClass+'"':"",o='<ff-row><label flex="1 1 auto"><ff-label flex="'+t.labelFlex+'"'+a+n+l+">"+t.ffLabel+'</ff-label><ff-row flex="1 1 1%"><ff-date name="{{\''+(t.name||t.ffModel)+'date\'}}" flex="1 2 150px" ff-model="inner.date"'+a+r+f+i+s+"></ff-date><ff-time name=\"{{'"+(t.name||t.ffModel)+'time\'}}" flex="1 3 150px" ff-model="inner.time"'+a+r+f+i+s+"></ff-time></ff-row></label></ff-row>";return e.append(o),this.link},link:function(e,t,n){e.inner={};var r=e.$eval(n.ffModel);function a(t,n){!moment.isMoment(t)||moment.isMoment(n)&&t.isSame(n)||(e.inner.date=t.clone().second(0).millisecond(0),e.inner.time=t.clone().second(0).millisecond(0))}r instanceof moment&&a(r),e.$watch(n.ffModel,a),e.$watch("inner.date",(function(t,r){var a=e.$eval(n.ffModel);moment.isMoment(t)&&moment.isMoment(a)&&(moment.isMoment(r)&&t.isSame(r)||(e.newDate=t.clone().hour(a.hour()).minute(a.minute()),e.$eval(n.ffModel+" = newDate")))})),e.$watch("inner.time",(function(t,r){var a=e.$eval(n.ffModel);moment.isMoment(t)&&moment.isMoment(a)&&(moment.isMoment(r)&&t.isSame(r)||(e.newDate=a.clone().hour(t.hour()).minute(t.minute()),e.$eval(n.ffModel+" = newDate")))}))}}}))},yUci:function(e,t,n){"use strict";n.r(t);var r=n("bOPx");t.default=r.a}}]);