(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{FLIh:function(e,n,r){"use strict";r.r(n);r("JBxO"),r("FdtR"),r("p2Ow");var t=r("cPlS");n.default=angular.module("deskworks.checkInForm",["deskworks.center.service","deskworks.checkIn.service",t.default.name]).controller("CheckInFormCtrl",["$scope","$q","state","helper","center","checkInService",function(e,n,r,t,c,o){var a=this;r.setPageTitle("Check-In"),a.center=c,a.auth=function(e){if(!a.busy){if(delete a.error,t.pointFirstInvalid("#checkIn"))return;return a.accessCardNumber||a.login||a.password?(a.busy=!0,(e?o.checkOut(a.center.id,a):o.checkIn(a.center.id,a)).then((function(){a.countdown=3})).catch((function(n){a.error=n.data.error||(e?"Failed to check out.":"Failed to check in.")})).finally((function(){a.busy=!1}))):void(a.error="Please use access number or login/password")}},a.init=function(){delete a.accessCardNumber,delete a.login,delete a.password,delete a.error,delete a.countdown},e.$on("kbw::accessCard",(function(e,n){e.stopPropagation(),a.busy||(a.accessCardNumber=n,delete a.login,delete a.password,delete a.error,delete a.countdown,a.auth())})),a.signUpNonMember=function(){return r.setCurrentCenterId(a.center.id),r.setParam("origin","/check-in"),r.setPath("/simple-reservation/centers/"+a.center.id+"/types")},a.signUpMember=function(){return r.setCurrentCenterId(a.center.id),r.setParam("origin","/check-in"),r.setPath("/member-sign-up")}}])},RTWM:function(e,n,r){var t={"./check-in/check-in.tpl.html":"So6Q"};function c(e){var n=o(e);return r(n)}function o(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=o,e.exports=c,c.id="RTWM"},So6Q:function(e,n){e.exports='<div id="checkIn" ng-if="!vm.countdown"> <h1 class="page-title">Welcome to {{vm.center.name}}!</h1> <form name="formCheckIn" class="check-in" novalidate ff-dim="vm.busy"> <div class="gutter-v"> <ff-board> <ff-panel> <ff-panel> <ff-panel-header> <span ng-if="!vm.error">Please Check In / Out</span> <span ng-if="vm.error" ng-bind="vm.error" class="text-danger"></span> </ff-panel-header> <ff-row> <label> <ff-label flex="0 0 120px">Access Number</ff-label> <ff-text name="accessCardNumber" ff-model="vm.accessCardNumber"></ff-text> </label> </ff-row> <ff-row> <span flex="0 0 120px" class="ff-center" style="padding-top:.5rem;color:var(--brand-color)">&mdash; or &mdash;</span> </ff-row> <ff-row> <label> <ff-label flex="0 0 120px">Login</ff-label> <ff-login name="login" ff-model="vm.login" ff-required="vm.password" ff-maxlength="256" ff-validate-alert="{{\'GLOBAL.LOGIN\' | translate}}"></ff-login> </label> </ff-row> <ff-row> <label> <ff-label flex="0 0 120px">Password</ff-label> <ff-password name="password" ff-model="vm.password" ff-required="vm.login" ff-maxlength="256" ff-validate-alert="{{\'GLOBAL.PASSWORD\' | translate}}"></ff-password> </label> </ff-row> </ff-panel> </ff-panel> </ff-board> <ff-btn-group> <ff-btn type="submit" sense="checkIn" ff-click="vm.auth()">Check In</ff-btn> <ff-btn sense="checkOut" ff-click="vm.auth(true)">Check Out</ff-btn> </ff-btn-group> </div> </form> <kbw-access-card></kbw-access-card> </div> <div id="checkInSuccess" ng-if="vm.countdown" class="check-in"> <h1 class="page-title">Thank You!</h1> <ff-btn-group> <ff-btn sense="ok" ff-click="vm.init()" ff-countdown="vm.countdown">OK</ff-btn> </ff-btn-group> </div> '},cPlS:function(e,n,r){"use strict";r.r(n),n.default=angular.module("deskworks.checkIn.kbwAccessCard",[]).directive("kbwAccessCard",["$timeout",function(e){var n,r,t="PACS"+String.fromCharCode(186),c=0;return{restrict:"EAC",scope:!0,link:function(o){function a(a){16!==a.which&&(e.cancel(r),r=e((function(){n=null,c=0}),1e3),angular.isString(n)?13===a.which?(o.$emit("kbw::accessCard",n),o.$apply(),n=null):n+=String.fromCharCode(a.which):String.fromCharCode(a.which)===t.charAt(c)?++c===t.length&&(n="",c=0):c=0)}document.addEventListener("keydown",a),o.$on("$destroy",(function(){document.removeEventListener("keydown",a)}))}}}])},lhYf:function(e,n,r){"use strict";r.r(n);r("3dw1"),r("Muwe"),r("y89P");var t=r("yCd9"),c=r.n(t),o=r("lRNC"),a=r.n(o),f=["$injector",function(e){var n,t,o=(n=r("sTlS"),c()(t=a()(n).call(n)).call(t,n));e.loadNewModules(c()(o).call(o,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var n=r("RTWM");a()(n).call(n).forEach((function(r){return e.put(r.replace(/^\.\//,""),n(r))}))}])}];n.default=f},p2Ow:function(e,n,r){},sTlS:function(e,n,r){var t={"./check-in/check-in.controller.js":"FLIh","./check-in/kbw-access-card.directive.js":"cPlS"};function c(e){var n=o(e);return r(n)}function o(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=o,e.exports=c,c.id="sTlS"}}]);