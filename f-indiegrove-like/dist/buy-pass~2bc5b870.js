(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1/Md":function(e,t,r){"use strict";var n=r("NOor"),s=r.n(n),a=r("0zKI"),l=r.n(a);t.a=angular.module("deskworks.dwInvoicePaymentProcessingFee",["deskworks.state","deskworks.helper"]).directive("dwInvoicePaymentProcessingFee",(function(){return{restrict:"A",scope:!0,controller:"DwInvoicePaymentProcessingFeeCtrl as $ctrl",bindToController:{invoice:"<",settings:"<",creditCards:"<",eChecks:"<"}}})).controller("DwInvoicePaymentProcessingFeeCtrl",["$scope","$timeout","state","helper",function(e,t,r,n){var a=this;a.$onChanges=function(){return t((function(){var e,t;if(a.invoice&&a.settings&&a.creditCards&&a.eChecks&&a.settings.enablePaymentProcessingCharges){var r=0;a.creditCards.length?r=a.settings.paymentProcessingRates.cc||0:a.eChecks.length&&(r=a.settings.paymentProcessingRates.ach||0);var i=s()(e=a.invoice.items).call(e,(function(e){return"fake-payment-processing-fee"===e.id}));if(i>=0&&l()(t=a.invoice.items).call(t,i,1),r&&+a.invoice.balance){var o=n.round(r*+a.invoice.balance/100),c={addedBy:"system",amount:o,billedAt:moment(),createdAt:moment(),description:"Payment processing fee",id:"fake-payment-processing-fee",name:"Payment Fee",price:o,quantity:1};a.invoice.items.push(c),angular.isUndefined(a.invoice.chargesTotalInitial)&&(a.invoice.chargesTotalInitial=+a.invoice.chargesTotal),angular.isUndefined(a.invoice.balanceInitial)&&(a.invoice.balanceInitial=+a.invoice.balance),a.invoice.chargesTotal=n.round(a.invoice.chargesTotalInitial+o),a.invoice.balance=n.round(a.invoice.balanceInitial+o)}}}))}}])},"1scS":function(e,t,r){"use strict";r.r(t);r("3dw1"),r("y89P"),r("Muwe");var n=r("yCd9"),s=r.n(n),a=r("lRNC"),l=r.n(a),i=(r("aIjk"),r("5nZu"),r("l7sz")),o=r.n(i),c=r("aE5K"),f=r.n(c),u=["$injector",function(e){var t,n,a=(t=r("TTUl"),s()(n=l()(t).call(t)).call(n,t));e.loadNewModules(s()(a).call(a,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t=r("DwaR");l()(t).call(t).forEach((function(r){return e.put(r.replace(/^\.\//,""),t(r))})),e.put("staff-help/staff-help.tpl.html",o.a),e.put("templates/new-user-profile.tpl.html",f.a)}])}];t.default=u},"5nZu":function(e,t,r){"use strict";r("FdtR"),r("JBxO"),angular.module("deskworks.StaffHelpCtrl",["ngRoute","deskworks.helper","deskworks.config"]).controller("StaffHelpCtrl",["$scope","$timeout","$q","$route","$window","$translate","dwAlerts","helper","state","deskworksConfig",function(e,t,r,n,s,a,l,i,o,c){this.notice=o.getParam("notice"),o.setPageTitle(a.instant("SIMPLE_RES.STAFF_HELP.PAGE_TITLE")),e.$on("$routeChangeStart",(function(e,t,r){!t.$$route||"MemberSignUpBillingCtrl"!==t.$$route.controller&&"MemberSignUpPurchaseCtrl"!==t.$$route.controller&&"SimpleReservationBillingCtrl"!==t.$$route.controller&&"SimpleReservationPurchaseCtrl"!==t.$$route.controller&&"BuyPassBillingCtrl"!==t.$$route.controller&&"BuyPassPurchaseCtrl"!==t.$$route.controller||(l.error(a.instant("SIMPLE_RES.STAFF_HELP.BACK_ERROR")),e.preventDefault())})),this.home=function(){if(o.getParam("redirect"))s.location.href=o.getParam("redirect");else{var e=o.getParam("origin"),n=o.getCurrentCenterId();(e?o.logout():r.when()).finally((function(){return o.resetParams(),e&&o.setCurrentCenterId(n),o.setPath(e||c.getDefaultRoute())}))}return t(1e4)}}])},DwaR:function(e,t,r){var n={"./steps/01-select-pass.tpl.html":"f5iy","./steps/04-purchase.tpl.html":"ZCcb","./steps/06-complete.tpl.html":"fID1"};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id="DwaR"},Ebsd:function(e,t,r){"use strict";r.r(t);r("FdtR"),r("JBxO"),r("y89P"),r("Muwe");var n=r("dLOS"),s=r("aIjk"),a=r("Vtxe"),l=r("1/Md");t.default=angular.module("deskworks.buyPass.purchase",["ngRoute","deskworks.purchase.service","deskworks.userProfile.service",n.a.name,s.a.name,a.a.name,l.a.name]).controller("BuyPassPurchaseCtrl",["$scope","$route","$translate","$timeout","helper","dwAlerts","state","user","purchase","purchaseService","userProfileService",function(e,t,r,n,s,a,l,i,o,c,f){var u=this;l.setPageTitle(r.instant("BUY_PASS.PURCHASE.PAGE_TITLE")),u.purchase=o,u.next=function(){if(!s.pointFirstInvalid("#newBillingProfile"))return u.spin=!0,f.saveBillingProfile(l.getCurrentCenterId(),i).then((function(e){return+u.purchase.balance<=0?l.setPath(l.getPath()+"/complete"):u.createPayment().then((function(e){return u.updatePurchase().then((function(t){return e}))})).then((function(e){return l.replace().setParam("accessCode",e.accessCode),n((function(e){return l.setPath(l.getPath()+"/complete")}))}))})).finally((function(e){u.spin=!1}))},u.createPayment=function(e){return c.createPayment(l.getCurrentCenterId(),t.current.params.userId,t.current.params.purchaseId,{},void 0,l.getParam("pass")).catch((function(e){return a.error(e,"Failed to make payment.")}))},u.updatePurchase=function(e){return c.get(l.getCurrentCenterId(),t.current.params.userId,t.current.params.purchaseId).catch((function(e){return a.error(e,"Failed to get purchase.")})).then((function(e){u.purchase=e}))},u.back=function(){return l.setPath("/buy-pass/user/".concat(i.id))},u.staffHelp=function(){return c.createStaffHelp(l.getCurrentCenterId(),t.current.params.userId,u.purchase.id).catch((function(e){return a.error(e,"Failed to create staff help.")})).then((function(e){return l.setParam("notice",e.notice),l.setPath(l.getPath()+"/staff-help")}))}}])},ONIO:function(e,t,r){"use strict";r.r(t);r("8cZI"),r("FdtR"),r("JBxO"),r("y89P"),r("Muwe");t.default=angular.module("deskworks.buyPass.userProfile",["ngRoute","deskworks.userProfile.service","deskworks.helper","needHelp"]).controller("BuyPassUserProfileCtrl",["$scope","$timeout","$q","$route","$translate","helper","state","center","dwAlerts","userProfile","reg","userProfileService","purchaseService",function(e,t,r,n,s,a,l,i,o,c,f,u,p){var d=this;d.reg=f,d.reg.phone=i.phone,d.userProfile=c,d.schema=c.schema,l.setPageTitle(s.instant(d.reg.new?"USER_PROFILE.NEW_USER.PAGE_TITLE":"USER_PROFILE.PAGE_TITLE",{userName:a.join([d.userProfile.firstName,d.userProfile.lastName]," ")})),u.bindTestUserGenerator(e,d.userProfile,d.reg),d.next=function(){if(!a.pointFirstInvalid("#userProfile"))return r.when(d.reg.new&&u.registerNewUser(0,d.userProfile)).then((function(){if(d.reg.new)return l.login(d.userProfile.login,d.userProfile.password).catch((function(e){return o.error(e,"Failed to log in with created user.")}))})).then((function(){return p.createPurchase(l.getCurrentCenterId(),d.userProfile.id,void 0,l.getParam("pass")).catch((function(e){return o.error(e,"Failed to create purchase.")})).finally((function(){d.reg.new&&(l.replace(),n.updateParams({userId:d.userProfile.id}))}))})).then((function(e){return t((function(){return l.setPath(l.getPath()+"/purchase/"+e.id)}))}))},d.back=function(){return l.setPath("/buy-pass")}}])},QEpw:function(e,t){e.exports='<span translate="BILLING_PROFILE.PAYMENT_METHOD.EMPTY" ng-if="$ctrl.showSwitchCC() && $ctrl.showSwitchACH()"></span> <up-billing-method user="$ctrl.user" settings="$ctrl.settings" ng-if="!$ctrl.isSingleMode()"></up-billing-method> <up-credit-cards user-profile="$ctrl.user" settings="$ctrl.settings" single="$ctrl.isSingleMode()" ng-if="!$ctrl.showSwitchCC()"></up-credit-cards> <up-e-checks user-profile="$ctrl.user" single="$ctrl.isSingleMode()" ng-if="$ctrl.settings.enableEChecks && !$ctrl.showSwitchACH()"></up-e-checks> <ff-btn-group class="ff-btn-full" ng-if="$ctrl.showSwitchCC() || $ctrl.showSwitchACH()"> <ff-btn sense="add" size="sm" ng-if="$ctrl.showSwitchCC()" ff-click="$ctrl.addCC()"> <span translate="BILLING_PROFILE.CREDIT_CARDS.BTN_ADD"></span> </ff-btn> <ff-btn sense="add" size="sm" ng-if="$ctrl.showSwitchACH()" ff-click="$ctrl.addACH()"> <span translate="BILLING_PROFILE.E_CHECKS.BTN_ADD"></span> </ff-btn> </ff-btn-group> '},TTUl:function(e,t,r){var n={"./steps/01-select-pass.controller.js":"iYEM","./steps/02-sign-in.controller.js":"uOUY","./steps/03-user-profile.controller.js":"ONIO","./steps/04-purchase.controller.js":"Ebsd","./steps/05-staff-help.controller.js":"nmaZ","./steps/06-complete.controller.js":"pA0v"};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id="TTUl"},ZCcb:function(e,t){e.exports='<div> <h1 class="page-title flex"> <span>{{state.getPageTitle()}}</span> <need-help phone="$resolve.center.phone"></need-help> </h1> <form id="buyPassPurchase" class="ff-grid gutter-v gutter-h" novalidate ff-dim="$ctrl.spin"> <ff-panel> <ff-panel-header> <span translate="SIMPLE_RES.PURCHASE.ORDER.HEADER" translate-values="{ orderId: $ctrl.purchase.orderId }"></span> </ff-panel-header> <dw-invoice invoice="$ctrl.purchase" center="$resolve.center" allow-remove="false" dw-invoice-payment-processing-fee settings="$resolve.settings" credit-cards="$resolve.user.creditCards" e-checks="$resolve.user.eChecks"></dw-invoice> </ff-panel> <div> <ff-panel-header> <div translate="BILLING_PROFILE.PAGE_TITLE" translate-values="{ userName: $resolve.user.fullNameCompany }"></div> <small translate="GLOBAL.REQUIRED_FIELDS_MARKED_WITH"></small> </ff-panel-header> <new-billing-profile user="$resolve.user" settings="$resolve.settings" id="newBillingProfile" class="ff-grid gutter-v"></new-billing-profile> </div> <ff-btn-group> <ff-btn sense="help" ff-click="$ctrl.staffHelp()"><span translate="GLOBAL.BTN_STAFF_HELP"></span></ff-btn> <ff-btn sense="back" ff-click="$ctrl.back()"><span translate="GLOBAL.BTN_BACK"></span></ff-btn> <ff-btn sense="next" type="submit" ff-click="$ctrl.next()"><span translate="GLOBAL.BTN_NEXT"></span></ff-btn> </ff-btn-group> </form> </div> '},aE5K:function(e,t){e.exports='<div class="user-profile" id="userProfile"> <h1 class="page-title flex"> <span> {{state.getPageTitle()}} <span ng-if="vm.reg.member && !vm.reg.selfRegistration" ng-style="{ color: vm.center.color }">{{vm.center.name}}</span> </span> <need-help phone="vm.reg.phone"></need-help> </h1> <ff-board> <ff-panel role="article" aria-label="{{\'USER_PROFILE.USER_PROFILE\' | translate}}"> <ff-panel-header ng-if="vm.reg"> <span translate="GLOBAL.STEP_X_OF_Y" translate-values="vm.reg" ng-if="vm.reg.stepCount"></span> <small translate="GLOBAL.REQUIRED_FIELDS_MARKED_WITH"></small> </ff-panel-header> <div class="ff-grid ff-gutter-v ff-gutter-h"> <up-personal-info user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-personal-info> <up-addresses flex="{md: \'0 0 50%\'}" user="vm.userProfile" schema="vm.schema" reg="vm.reg" center="vm.center" single="true"></up-addresses> <div flex="{md: \'0 0 50%\'}"> <div class="ff-grid ff-gutter-v"> <up-login-info user="vm.userProfile" schema="vm.schema" reg="vm.reg" member-directory-url="wlLinks.memberDirectoryUrl"></up-login-info> <up-phones user="vm.userProfile" schema="vm.schema" reg="vm.reg" single="true"></up-phones> </div> </div> <up-photo flex="{md: \'0 0 50%\'}" user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-photo> <div flex="{md: \'0 0 50%\'}"> <div class="ff-grid ff-gutter-v"> <up-lead-source user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-lead-source> <up-terms-of-service user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-terms-of-service> </div> </div> </div> </ff-panel> </ff-board> <ff-btn-group class="buttons-bottom" ng-if="vm.reg"> <ff-btn sense="back" ff-click="vm.back()" ng-if="vm.back"><span translate="GLOBAL.BTN_BACK"></span></ff-btn> <ff-btn sense="next" ff-click="vm.next()"><span translate="GLOBAL.BTN_NEXT"></span></ff-btn> </ff-btn-group> </div> '},aIjk:function(e,t,r){"use strict";t.a=angular.module("needHelp",[]).directive("needHelp",(function(){return{restrict:"E",scope:!0,controller:function(){},controllerAs:"$ctrl",template:'<span translate="GLOBAL.NEED_HELP" class="need-help" ng-if="$ctrl.phone" translate-values="{ phone: \'<a href=&quot;tel:\' + $ctrl.phone + \'&quot;>\' + $ctrl.phone + \'</a>\' }"></span>',bindToController:{phone:"<"}}}))},dLOS:function(e,t,r){"use strict";r("3dw1");var n=r("hsT8"),s=r.n(n),a=r("nbuU"),l=r.n(a),i=r("6RpP"),o=r.n(i),c=r("QEpw"),f=r.n(c);t.a=angular.module("newBillingProfile",[]).directive("newBillingProfile",(function(){return{template:f.a,restrict:"E",scope:!0,controller:"NewBillingProfileCtrl as $ctrl",bindToController:{settings:"<",user:"<"}}})).controller("NewBillingProfileCtrl",["$scope","userProfileService",function(e,t){var r=this;r.$onInit=function(){var n;if(r.settings.creditCardTypes=s()(n=r.settings.creditCardTypes).call(n,(function(e){return e.enable})),r.user.creditCards.forEach((function(e){var t;e.type=l()(t=r.settings.creditCardTypes).call(t,(function(t){return t.id===e.type}))||e.type||{}})),r.user.creditCards=r.user.creditCards||[],!r.user.creditCards.length&&!r.user.eChecks.length){var a=t.creditCard.new(r.user);a.type=r.settings.creditCardTypes[0],r.user.creditCards.push(a)}e.$watchCollection((function(e){var t;return o()(t=r.user.creditCards).call(t,r.user.eChecks)}),(function(e){e&&r.user.paymentMethodId&&!l()(e).call(e,(function(e){return e.id===r.user.paymentMethodId}))&&(r.user.billingMethod=null,r.user.paymentMethodId=null)})),t.bindTestBillingGenerator(e,r.user)},r.isSingleMode=function(){var e=r.user,n=e.creditCards,s=e.eChecks;return!n.length&&(!s.length||t.eCheck.isNew(s[0]))||!s.length&&(!n.length||t.creditCard.isNew(n[0]))},r.showSwitchCC=function(){var e=r.user,n=e.creditCards,s=e.eChecks;return!n.length&&(!s.length||t.eCheck.isNew(s[0]))},r.showSwitchACH=function(){var e=r.user,n=e.creditCards,s=e.eChecks;return r.settings.enableEChecks&&!s.length&&(!n.length||t.creditCard.isNew(n[0]))},r.addCC=function(){var e=t.creditCard.new(r.user);r.user.creditCards=[e],r.user.eChecks=[]},r.addACH=function(){var e=t.eCheck.new(r.user);r.user.eChecks=[e],r.user.creditCards=[]}}])},f5iy:function(e,t){e.exports='<form name="formSelectPass" id="selectPass"> <h1 class="page-title flex"> <span>{{state.getPageTitle()}}</span> <need-help phone="$resolve.center.phone"></need-help> </h1> <ff-board class="ff-no-frame"> <div class="ff-grid ff-gutter-v ff-gutter-h"> <ff-panel flex="{md: \'0 0 50%\'}"> <label class="ff-row"> <ff-label flex="1 0 124px" class="em"> <span translate="BUY_PASS.SELECT_PASS.HEADER"></span> </ff-label> <ff-select flex="1 1 70%" name="pass" ff-model="$ctrl.pass" ff-options="pass.name for pass in $ctrl.passes" ff-change="$ctrl.onPassChange()" ff-required="true" ff-validate-alert="{{\'BUY_PASS.SELECT_PASS.PASS\' | translate}}"> </ff-select> </label> <label class="ff-row"> <ff-label flex="1 0 124px" class="em"> <span translate="BUY_PASS.SELECT_PASS.PRICE"></span> </ff-label> <ff-static flex="1 1 100%" ff-bind="$ctrl.pass.price | nd | ncurrency" name="price"></ff-static> </label> </ff-panel> <ff-panel flex="{md: \'0 0 50%\'}"> <span class="pre-description" translate="BUY_PASS.SELECT_PASS.NOTE"></span> </ff-panel> </div> </ff-board> <ff-btn-group class="buttons-bottom"> <ff-btn sense="next" type="submit" ff-click="$ctrl.next()"> <span translate="GLOBAL.BTN_NEXT"></span> </ff-btn> </ff-btn-group> </form> '},fID1:function(e,t){e.exports='<div id="buyPassComplete"> <h1 class="page-title">{{state.getPageTitle()}}</h1> <ff-panel> <span translate="BUY_PASS.COMPLETE.TEXT" translate-values="{ accessCode: $ctrl.accessCode }"></span> </ff-panel> <ff-btn-group class="buttons-bottom" ng-class="{\'ff-center\': !vm.purchase}"> <ff-btn sense="next" type="submit" ff-click="$ctrl.start()"><span translate="BUY_PASS.COMPLETE.BTN_START"></span></ff-btn> </ff-btn-group> </div> '},iYEM:function(e,t,r){"use strict";r.r(t);r("y89P"),r("Muwe");var n=r("nbuU"),s=r.n(n);t.default=angular.module("deskworks.buyPass.selectPass",["ngRoute","deskworks.helper"]).controller("BuyPassSelectPassCtrl",["$scope","$translate","state","helper","passes",function(e,t,r,n,a){var l=this;r.setPageTitle(t.instant("BUY_PASS.SELECT_PASS.PAGE_TITLE")),l.passes=a,l.pass=s()(n).call(n,l.passes,r.getParam("pass")),l.next=function(){if(!n.pointFirstInvalid("#selectPass"))return r.setPath(r.getPath()+"/user")},l.onPassChange=function(){r.replace(),r.setParam("pass",l.pass.id)}}])},l7sz:function(e,t){e.exports='<div id="staffHelp" class="ff-tmargin"> <ff-board> <ff-panel> <span ng-bind="::vm.notice"></span> </ff-panel> </ff-board> <ff-btn-group class="buttons-bottom ff-center"> <ff-btn sense="home" type="submit" ff-click="vm.home()"><span translate="GLOBAL.BTN_HOME"></span></ff-btn> </ff-btn-group> </div> '},nmaZ:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.buyPass.staffHelp",["ngRoute","deskworks.helper","deskworks.config"]).controller("BuyPassStaffHelpCtrl",["$scope","$timeout","$window","$translate","dwAlerts","helper","state",function(e,t,r,n,s,a,l){l.setPageTitle(n.instant("SIMPLE_RES.STAFF_HELP.PAGE_TITLE")),this.notice=l.getParam("notice"),e.$on("$routeChangeStart",(function(e,t,r){var a=t.$$route&&t.$$route.controller;"BuyPassPurchaseCtrl"!==a&&"BuyPassBillingCtrl"!==a||(s.error(n.instant("SIMPLE_RES.STAFF_HELP.BACK_ERROR")),e.preventDefault())})),this.home=function(){return r.location.href=l.getParam("redirect"),t(1e4)}}])},pA0v:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.BuyPassCompleteCtrl",[]).controller("BuyPassCompleteCtrl",["$scope","$timeout","$translate","$window","state","helper","dwAlerts",function(e,t,r,n,s,a,l){var i=this;s.setPageTitle(r.instant("BUY_PASS.COMPLETE.PAGE_TITLE")),i.accessCode=s.getParam("accessCode"),e.$on("$locationChangeStart",(function(e,t){t&&t.indexOf("/buy-pass")>=0&&(e.preventDefault(),l.error(r.instant("BUY_PASS.COMPLETE.BACK_ERROR")))})),i.start=function(){return n.location.href=s.getParam("redirect")+"&accessCode="+i.accessCode,t(15e3)}}])},uOUY:function(e,t,r){"use strict";r.r(t);r("y89P"),r("Muwe");t.default=angular.module("deskworks.buyPass.signIn",["flexForms","deskworks.state","deskworks.config","deskworks.dwSignIn"]).controller("BuyPassSignInCtrl",["$scope","$translate","state",function(e,t,r){r.setPageTitle(t.instant("SIGN_IN.PAGE_TITLE")),e.$on("dwSignIn:SignIn",(function(e){e.stopPropagation(),r.replace(),r.setPath(r.getPath()+"/"+r.getLoggedUserId())})),e.$on("dwSignIn:SignUp",(function(e){e.stopPropagation(),r.setPath(r.getPath()+"/new")}))}])}}]);