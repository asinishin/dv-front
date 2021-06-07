(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"/pDC":function(e,t){e.exports='<div id="memberSignUpPurchase"> <h1 class="page-title flex"> <span>{{state.getPageTitle()}}</span> <need-help phone="vm.center.phone"></need-help> </h1> <ff-board ff-dim="vm.spin"> <div class="ff-grid gutter-v gutter-h"> <ff-panel role="article" aria-label="{{\'PURCHASE.INVOICE.HEADER\' | translate: { orderId: vm.purchase.orderId } }}"> <ff-panel-header> <span translate="GLOBAL.STEP_X_OF_Y" translate-values="vm.reg"></span> </ff-panel-header> <div class="em" translate="PURCHASE.INVOICE.HEADER" translate-values="{ orderId: vm.purchase.orderId }" style="margin-bottom:.25rem"></div> <dw-invoice invoice="vm.purchase" center="vm.center" update-invoice="vm.updateInvoice()" dw-invoice-payment-processing-fee settings="$resolve.settings" credit-cards="$resolve.userProfile.creditCards" e-checks="$resolve.userProfile.eChecks"></dw-invoice> </ff-panel> <ff-panel class="ff-bmargin" flex="{sm: \'0 0 85%\', md: \'0 0 70%\', lg: \'0 0 50%\'}"> <form name="form" class="ff-row" id="applyDiscountCode"> <label class="ff-row"> <ff-label flex="0 0 120px"><span translate="PURCHASE.DISCOUNT_CODE"></span></ff-label> <ff-text ff-model="vm.discountCode" ff-required="true" ff-validate-alert="{{\'PURCHASE.DISCOUNT_CODE\' | translate}}"></ff-text> </label> <ff-btn-group flex="none" class="buttons-row"> <ff-btn type="submit" size="sm" sense="save" ff-disabled="form.$pristine" ff-click="vm.applyDiscountCode(form)"> <span translate="PURCHASE.DISCOUNT_CODE.BTN_APPLY"></span> </ff-btn> </ff-btn-group> </form> </ff-panel> <div> <ff-header style="border:0;padding:0 1rem .5rem 1rem"> <div translate="BILLING_PROFILE.PAGE_TITLE" translate-values="{ userName: vm.user.fullNameCompany }"></div> <small translate="GLOBAL.REQUIRED_FIELDS_MARKED_WITH"></small> </ff-header> <new-billing-profile user="vm.user" settings="vm.settings" id="memberSignUpPurchaseValidation" class="ff-grid gutter-v"></new-billing-profile> </div> </div> </ff-board> <ff-header style="border:0" ng-if="$resolve.settings.enableAddOnProductsAtRegistration"> <small translate="MEMBER_SIGN_UP.PURCHASE.ADD_ON_PRODUCTS.HINT"></small> </ff-header> <ff-board ff-dim="vm.spin" ng-if="$resolve.settings.enableAddOnProductsAtRegistration"> <dw-add-charges purchase="vm.purchase" update-invoice="vm.updateInvoice()" no-collapse="true"></dw-add-charges> </ff-board> <ff-btn-group class="buttons-bottom"> <ff-btn sense="help" ff-click="vm.staffHelp()"><span translate="GLOBAL.BTN_STAFF_HELP"></span></ff-btn> <ff-btn sense="back" ff-click="vm.back()"><span translate="GLOBAL.BTN_BACK"></span></ff-btn> <ff-btn sense="next" type="submit" ff-click="vm.next()"><span translate="SIMPLE_RES.BILLING.BTN_PURCHASE"></span></ff-btn> </ff-btn-group> </div> '},"0V8K":function(e,t){e.exports='<form name="vm.form" id="memberSignUpMembership"> <h1 class="page-title flex"> <span>{{state.getPageTitle()}} - <small translate="MEMBER_SIGN_UP.MEMBERSHIP.THANKS"></small></span> <need-help phone="vm.center.phone"></need-help> </h1> <ff-board class="ff-no-frame"> <div class="ff-grid ff-gutter-v ff-gutter-h"> <ff-panel ng-hide="state.getParam(\'origin\') || state.getParam(\'redirect\')" flex="{md: \'0 0 50%\'}" role="article" aria-label="{{\'MEMBER_SIGN_UP.MEMBERSHIP.CENTER.HEADER\' | translate}}"> <ff-panel-header> <span translate="GLOBAL.STEP_X_OF_Y" translate-values="vm.reg"></span> </ff-panel-header> <label class="ff-row"> <ff-label flex="1 0 124px" class="em"> <span translate="MEMBER_SIGN_UP.MEMBERSHIP.CENTER.HEADER"></span> </ff-label> <ff-select flex="1 1 70%" ff-model="vm.center" ff-options="center.name for center in vm.centers" name="center" ff-required="true" ff-validate-alert="{{\'MEMBER_SIGN_UP.MEMBERSHIP.CENTER.CENTER\' | translate}}" ff-change="vm.loadMembershipCategories()"></ff-select> </label> </ff-panel> <div flex="{md: \'0 0 50%\'}" class="no-margin"></div> <ff-panel ng-show="vm.center" flex="{md: \'0 0 50%\'}" ng-if="!vm.settings.skipPlanMemberSignUp"> <ff-panel-header><span translate="MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.HEADER"></span></ff-panel-header> <ff-col ff-dim="vm.updating" role="radiogroup" aria-label="{{\'MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.HEADER\' | translate}}"> <ff-info ng-if="!vm.membershipCategories.length" translate="MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.EMPTY"></ff-info> <label ng-repeat="cat in vm.membershipCategories"> <ff-label> <ff-radio flex="0 0 26px" ff-model="vm.membershipCategory" ff-value="cat" name="membershipCategory" ff-required="true" ff-validate-alert="{{\'MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.MEMB_CATEGORY\' | translate}}" ff-change="vm.membershipCategoryChange()"></ff-radio> {{cat.name}} </ff-label> </label> </ff-col> </ff-panel> <ff-panel ng-show="vm.center" flex="{md: \'0 0 50%\'}" ng-if="!vm.settings.skipPlanMemberSignUp && vm.membershipCategories.length"> <ff-panel-header><span translate="MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.DESCRIPTION"></span></ff-panel-header> <ff-col ff-dim="vm.updating"> <ff-static class="pre-description"> <span translate="MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.HINT" ng-if="!vm.membershipCategory"></span> <span translate="MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.NO_DESCRIPTION" ng-if="vm.membershipCategory && !vm.membershipCategory.note"></span> <span ng-bind="vm.membershipCategory.note" ng-if="vm.membershipCategory && vm.membershipCategory.note"></span> </ff-static> </ff-col> </ff-panel> <ff-panel ng-show="vm.membershipCategory.products.length > 0" flex="{md: \'0 0 50%\'}" ng-if="!vm.settings.skipPlanMemberSignUp"> <ff-panel-header><span translate="MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.HEADER"></span></ff-panel-header> <ff-col ff-dim="vm.updating"> <label class="ff-row"> <ff-label flex="0 0 100px" class="em"> <span translate="MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.SELECT_PLAN"></span> </ff-label> <ff-select ff-model="vm.membershipProduct" ff-options="product.name for product in vm.membershipCategory.products" ff-required="vm.membershipCategory.products.length > 0" name="plan" ff-validate-alert="{{\'MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.PLAN\' | translate}}"></ff-select> </label> <label class="ff-row"> <ff-label flex="0 0 100px" class="em"> <span translate="MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.PRICE"></span> </ff-label> <ff-static ff-bind="vm.membershipProduct.price | nd | ncurrency" name="price"></ff-static> </label> <label class="ff-row"> <ff-label flex="0 0 100px" class="em"> <span translate="MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE"></span> </ff-label> <ff-date ff-model="vm.membershipStartDate" name="membershipStartDate" ff-validate-alert="{{\'MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE\' | translate}}"></ff-date> </label> </ff-col> </ff-panel> <ff-panel flex="{md: \'0 0 50%\'}" ng-if="!vm.settings.skipPlanMemberSignUp && vm.membershipProduct && vm.membershipProduct.description"> <ff-panel-header><span translate="MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.DESCRIPTION"></span></ff-panel-header> <ff-col ff-dim="vm.updating"> <ff-static class="pre-description">{{vm.membershipProduct.description}}</ff-static> </ff-col> </ff-panel> </div> </ff-board> <ff-btn-group class="buttons-bottom"> <ff-btn sense="next" type="submit" ff-click="vm.next()"><span translate="MEMBER_SIGN_UP.MEMBERSHIP.BTN_PROCEED"></span></ff-btn> </ff-btn-group> </form> '},"0k4W":function(e,t,r){"use strict";r.r(t);r("FdtR"),r("JBxO");t.default=angular.module("deskworks.MemberSignUpNoPlanCompleteCtrl",[]).controller("MemberSignUpNoPlanCompleteCtrl",["$scope","$q","$timeout","$translate","state","helper","deskworksConfig",function(e,t,r,n,a,s,i){a.setPageTitle(n.instant("MEMBER_SIGN_UP.COMPLETE.PAGE_TITLE")),this.home=function(){var e=a.getParam("origin"),n=a.getCurrentCenterId();return(e?a.logout():t.when()).finally((function(){a.resetParams(),a.setPath(e||i.getDefaultRoute()),e&&a.setCurrentCenterId(n)})),r(1e4)}}])},"1/Md":function(e,t,r){"use strict";var n=r("NOor"),a=r.n(n),s=r("0zKI"),i=r.n(s);t.a=angular.module("deskworks.dwInvoicePaymentProcessingFee",["deskworks.state","deskworks.helper"]).directive("dwInvoicePaymentProcessingFee",(function(){return{restrict:"A",scope:!0,controller:"DwInvoicePaymentProcessingFeeCtrl as $ctrl",bindToController:{invoice:"<",settings:"<",creditCards:"<",eChecks:"<"}}})).controller("DwInvoicePaymentProcessingFeeCtrl",["$scope","$timeout","state","helper",function(e,t,r,n){var s=this;s.$onChanges=function(){return t((function(){var e,t;if(s.invoice&&s.settings&&s.creditCards&&s.eChecks&&s.settings.enablePaymentProcessingCharges){var r=0;s.creditCards.length?r=s.settings.paymentProcessingRates.cc||0:s.eChecks.length&&(r=s.settings.paymentProcessingRates.ach||0);var l=a()(e=s.invoice.items).call(e,(function(e){return"fake-payment-processing-fee"===e.id}));if(l>=0&&i()(t=s.invoice.items).call(t,l,1),r&&+s.invoice.balance){var o=n.round(r*+s.invoice.balance/100),f={addedBy:"system",amount:o,billedAt:moment(),createdAt:moment(),description:"Payment processing fee",id:"fake-payment-processing-fee",name:"Payment Fee",price:o,quantity:1};s.invoice.items.push(f),angular.isUndefined(s.invoice.chargesTotalInitial)&&(s.invoice.chargesTotalInitial=+s.invoice.chargesTotal),angular.isUndefined(s.invoice.balanceInitial)&&(s.invoice.balanceInitial=+s.invoice.balance),s.invoice.chargesTotal=n.round(s.invoice.chargesTotalInitial+o),s.invoice.balance=n.round(s.invoice.balanceInitial+o)}}}))}}])},"4lIQ":function(e,t,r){"use strict";r.r(t);r("FdtR"),r("JBxO");var n=r("dLOS"),a=r("aIjk"),s=r("Vtxe"),i=r("1/Md");t.default=angular.module("deskworks.MemberSignUpPurchaseCtrl",["ngRoute","deskworks.helper","deskworks.dwAddCharges","deskworks.userProfile.service","deskworks.purchase.service","deskworks.StaffHelpCtrl",n.a.name,a.a.name,s.a.name,i.a.name]).controller("MemberSignUpPurchaseCtrl",["$scope","$route","$translate","$timeout","$window","dwAlerts","helper","state","session","reg","center","settings","purchase","purchaseService","userProfileService","userProfile","affiliatly",function(e,t,r,n,a,s,i,l,o,f,c,p,u,d,m,g,h){var v=this;l.setPageTitle(r.instant("MEMBER_SIGN_UP.PURCHASE.PAGE_TITLE",{centerName:c.name})),v.reg=f,v.center=c,v.settings=p,v.user=g,v.purchase=u,v.next=function(){if(!i.pointFirstInvalid("#memberSignUpPurchaseValidation"))return v.spin=!0,m.saveBillingProfile(l.getCurrentCenterId(),v.user).then((function(e){return+v.purchase.balance>0?v.createPayment():null})).then((function(e){return h.markPurchase({orderId:v.purchase.orderId,total:v.purchase.balance,email:v.user.email})})).then((function(r){return l.getParam("redirect")?(a.location.href=l.getParam("redirect")+"&login="+v.user.login,n(15e3)):(m.resetCache(),m.get(l.getCurrentCenterId(),t.current.params.userId).catch((function(e){return s.error(e,"Failed to get user profile.")})).then((function(t){return o.user.role=t.role,e.$emit("LOGIN"),l.setPath(l.getPath()+"/complete")})))})).finally((function(e){v.spin=!1}))},v.createPayment=function(e){return d.createPayment(l.getCurrentCenterId(),t.current.params.userId,t.current.params.purchaseId,{},!0,l.getParam("productId"),l.getParam("membershipStartDate")).catch((function(e){return s.error(e,"Failed to make payment.")}))},v.back=l.back,v.staffHelp=function(){return d.createStaffHelp(v.center.id,t.current.params.userId,t.current.params.purchaseId,!0,l.getParam("productId")).catch((function(e){return s.error(e,"Failed to create staff help.")})).then((function(r){return m.resetCache(),m.get(l.getCurrentCenterId(),t.current.params.userId).catch((function(e){return s.error(e,"Failed to get user profile.")})).then((function(t){return o.user.role=t.role,e.$emit("LOGIN"),l.setParam("notice",r.notice),l.setPath(l.getPath()+"/staff-help")}))}))},v.updateInvoice=function(){return d.get(l.getCurrentCenterId(),l.getCurrentUserId(),v.purchase.id).catch((function(e){return s.error(e,"Failed to update invoice.")})).then((function(e){v.purchase=e}))},v.applyDiscountCode=function(e){if(!i.pointFirstInvalid("#applyDiscountCode"))return d.createDiscountCode({centerId:l.getCurrentCenterId(),userId:l.getCurrentUserId(),purchaseId:v.purchase.id,code:v.discountCode}).catch((function(e){return s.error(e,"Failed to apply discount code.")})).then((function(){return v.discountCode=null,e.$setPristine(),s.info("Discount code applied."),v.updateInvoice()}))}}])},"5nZu":function(e,t,r){"use strict";r("FdtR"),r("JBxO"),angular.module("deskworks.StaffHelpCtrl",["ngRoute","deskworks.helper","deskworks.config"]).controller("StaffHelpCtrl",["$scope","$timeout","$q","$route","$window","$translate","dwAlerts","helper","state","deskworksConfig",function(e,t,r,n,a,s,i,l,o,f){this.notice=o.getParam("notice"),o.setPageTitle(s.instant("SIMPLE_RES.STAFF_HELP.PAGE_TITLE")),e.$on("$routeChangeStart",(function(e,t,r){!t.$$route||"MemberSignUpBillingCtrl"!==t.$$route.controller&&"MemberSignUpPurchaseCtrl"!==t.$$route.controller&&"SimpleReservationBillingCtrl"!==t.$$route.controller&&"SimpleReservationPurchaseCtrl"!==t.$$route.controller&&"BuyPassBillingCtrl"!==t.$$route.controller&&"BuyPassPurchaseCtrl"!==t.$$route.controller||(i.error(s.instant("SIMPLE_RES.STAFF_HELP.BACK_ERROR")),e.preventDefault())})),this.home=function(){if(o.getParam("redirect"))a.location.href=o.getParam("redirect");else{var e=o.getParam("origin"),n=o.getCurrentCenterId();(e?o.logout():r.when()).finally((function(){return o.resetParams(),e&&o.setCurrentCenterId(n),o.setPath(e||f.getDefaultRoute())}))}return t(1e4)}}])},"5vmx":function(e,t,r){"use strict";r.r(t);var n=r("hsT8"),a=r.n(n),s=r("nbuU"),i=r.n(s),l=(r("8cZI"),r("3dw1"),r("dLOS"));t.default=angular.module("deskworks.MemberSignUpNoPlanBillingCtrl",["ngRoute","deskworks.userProfile.service","deskworks.routeHelper","deskworks.helper","needHelp","deskworks.StaffHelpCtrl",l.a.name]).controller("MemberSignUpNoPlanBillingCtrl",["$scope","$translate","helper","state","userProfile","reg","settings","userProfileService",function(e,t,r,n,s,l,o,f){var c,p=this;if(p.userProfile=s,p.reg=l,p.settings=o,n.setPageTitle(t.instant("BILLING_PROFILE.PAGE_TITLE",{userName:r.join([p.userProfile.firstName,p.userProfile.lastName]," ")})),o.creditCardTypes=a()(c=o.creditCardTypes).call(c,(function(e){return e.enable})),p.userProfile.creditCards.forEach((function(e){e.type=i()(r).call(r,o.creditCardTypes,e.type)||e.type||{}})),p.userProfile.creditCards=p.userProfile.creditCards||[],!p.userProfile.creditCards.length&&!p.userProfile.eChecks.length){var u=f.creditCard.new(p.userProfile);u.type=o.creditCardTypes[0],p.userProfile.creditCards.push(u)}f.bindTestBillingGenerator(e,p.userProfile,p.reg),p.complete=function(){if(!r.pointFirstInvalid("#newBillingProfile"))return f.saveBillingProfile(0,p.userProfile).then((function(){return n.setPath(n.getPath()+"/complete")}))},p.back=n.back}])},"7gqy":function(e,t,r){var n={"./steps/01-landing.controller.js":"Gfdi","./steps/01-membership.controller.js":"b7+Z","./steps/02-profile.controller.js":"Rqj+","./steps/03-purchase.controller.js":"4lIQ","./steps/04-complete.controller.js":"h9bl","./steps/no-plan-billing.controller.js":"5vmx","./steps/no-plan-complete.controller.js":"0k4W"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="7gqy"},"9QnR":function(e,t){e.exports='<div> <h1 class="page-title flex"> <span>{{state.getPageTitle()}}</span> <need-help phone="$resolve.center.phone || vm.reg.phone"></need-help> </h1> <ff-board> <div class="ff-panel-header"> <span translate="GLOBAL.STEP_X_OF_Y" translate-values="vm.reg" ng-if="vm.reg.stepCount"></span> <span ng-if="vm.reg.stepCount">&nbsp;</span> <small translate="GLOBAL.REQUIRED_FIELDS_MARKED_WITH"></small> </div> <new-billing-profile user="vm.userProfile" settings="vm.settings" id="newBillingProfile" class="ff-grid gutter-v"></new-billing-profile> </ff-board> <ff-btn-group class="buttons-bottom"> <ff-btn sense="help" ff-click="vm.staffHelp()" ng-if="vm.staffHelp"><span translate="GLOBAL.BTN_STAFF_HELP"></span></ff-btn> <ff-btn sense="back" ff-click="vm.back()"><span translate="GLOBAL.BTN_BACK"></span></ff-btn> <ff-btn sense="next" ff-click="vm.next()" ng-if="vm.next"><span translate="SIMPLE_RES.BILLING.BTN_PURCHASE"></span></ff-btn> <ff-btn sense="next" ff-click="vm.complete()" ng-if="vm.complete"><span translate="MEMBER_SIGN_UP.BILLING.BTN_COMPLETE"></span></ff-btn> </ff-btn-group> </div> '},Gfdi:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.MemberSignUpLandingCtrl",["ngRoute","deskworks.helper","needHelp"]).controller("MemberSignUpLandingCtrl",["$scope","$translate","$filter","dwAlerts","state","helper","center","product",function(e,t,r,n,a,s,i,l){var o=this;o.center=i,o.product=l,o.membershipStartDate=a.getParam("membershipStartDate"),o.membershipStartDate=o.membershipStartDate?r("toDate")(o.membershipStartDate):moment(),a.setPageTitle(t.instant("MEMBER_SIGN_UP.LANDING.PAGE_TITLE",{centerName:o.center.name})),o.next=function(){return a.setParam("membershipStartDate",r("date")(o.membershipStartDate,"yyyy-MM-dd")),a.setPath("/member-sign-up/"+(a.getCurrentUserId()||"new"))}}])},HKBC:function(e,t,r){"use strict";r.r(t);r("3dw1"),r("y89P"),r("Muwe");var n=r("yCd9"),a=r.n(n),s=r("lRNC"),i=r.n(s),l=(r("aIjk"),r("5nZu"),r("l7sz")),o=r.n(l),f=r("aE5K"),c=r.n(f),p=r("9QnR"),u=r.n(p),d=["$injector",function(e){var t,n,s=(t=r("7gqy"),a()(n=i()(t).call(t)).call(n,t));e.loadNewModules(a()(s).call(s,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t=r("epFx");i()(t).call(t).forEach((function(r){return e.put(r.replace(/^\.\//,""),t(r))})),e.put("staff-help/staff-help.tpl.html",o.a),e.put("templates/new-user-profile.tpl.html",c.a),e.put("templates/new-billing-profile.tpl.html",u.a)}])}];t.default=d},QEpw:function(e,t){e.exports='<span translate="BILLING_PROFILE.PAYMENT_METHOD.EMPTY" ng-if="$ctrl.showSwitchCC() && $ctrl.showSwitchACH()"></span> <up-billing-method user="$ctrl.user" settings="$ctrl.settings" ng-if="!$ctrl.isSingleMode()"></up-billing-method> <up-credit-cards user-profile="$ctrl.user" settings="$ctrl.settings" single="$ctrl.isSingleMode()" ng-if="!$ctrl.showSwitchCC()"></up-credit-cards> <up-e-checks user-profile="$ctrl.user" single="$ctrl.isSingleMode()" ng-if="$ctrl.settings.enableEChecks && !$ctrl.showSwitchACH()"></up-e-checks> <ff-btn-group class="ff-btn-full" ng-if="$ctrl.showSwitchCC() || $ctrl.showSwitchACH()"> <ff-btn sense="add" size="sm" ng-if="$ctrl.showSwitchCC()" ff-click="$ctrl.addCC()"> <span translate="BILLING_PROFILE.CREDIT_CARDS.BTN_ADD"></span> </ff-btn> <ff-btn sense="add" size="sm" ng-if="$ctrl.showSwitchACH()" ff-click="$ctrl.addACH()"> <span translate="BILLING_PROFILE.E_CHECKS.BTN_ADD"></span> </ff-btn> </ff-btn-group> '},"Rqj+":function(e,t,r){"use strict";r.r(t);r("y89P"),r("Muwe"),r("aIjk");t.default=angular.module("deskworks.MemberSignUpProfileCtrl",["ngRoute","deskworks.routeHelper","deskworks.helper","deskworks.userProfile.service","deskworks.userProfile.optsMembershipStatus","needHelp"]).controller("MemberSignUpProfileCtrl",["$scope","$timeout","$q","$translate","dwAlerts","helper","state","userProfile","reg","userProfileService","purchaseService","settings","optsMembershipStatus",function(e,t,r,n,a,s,i,l,o,f,c,p,u){var d=this;d.reg=o,d.schema=l.schema,d.userProfile=l,d.settings=p,i.getParam("productId")||(d.reg.stepCount-=1,d.userProfile.membershipStatus=u[0]),i.setPageTitle(n.instant(d.reg.new?"USER_PROFILE.NEW_MEMBER.PAGE_TITLE":"USER_PROFILE.PAGE_TITLE",{userName:d.userProfile.fullNameCompany})),f.bindTestUserGenerator(e,d.userProfile,d.reg),d.next=function(){if(!s.pointFirstInvalid("#userProfile"))return r.when().then((function(){if(d.reg.new)return f.registerNewUser(i.getCurrentCenterId(),d.userProfile,!0)})).then((function(){if(d.reg.new)return i.login(d.userProfile.login,d.userProfile.password).catch((function(e){return a.error(e,"Failed to login under created user.")}))})).then((function(){if(d.reg.new)return i.replace(),i.setPath(i.getPath().replace(/\/new/,"/"+d.userProfile.id)),t()})).then((function(){if(i.getParam("productId"))return c.createPurchase(i.getCurrentCenterId(),d.userProfile.id,!0,i.getParam("productId"),null,i.getParam("membershipStartDate")).catch((function(e){return a.error(e,"Failed to create purchase.")}))})).then((function(e){return i.getParam("productId")?i.setPath(i.getPath()+"/purchases/"+e.id):i.setPath(i.getPath()+"/billing")}))},d.back=i.back}])},aE5K:function(e,t){e.exports='<div class="user-profile" id="userProfile"> <h1 class="page-title flex"> <span> {{state.getPageTitle()}} <span ng-if="vm.reg.member && !vm.reg.selfRegistration" ng-style="{ color: vm.center.color }">{{vm.center.name}}</span> </span> <need-help phone="vm.reg.phone"></need-help> </h1> <ff-board> <ff-panel role="article" aria-label="{{\'USER_PROFILE.USER_PROFILE\' | translate}}"> <ff-panel-header ng-if="vm.reg"> <span translate="GLOBAL.STEP_X_OF_Y" translate-values="vm.reg" ng-if="vm.reg.stepCount"></span> <small translate="GLOBAL.REQUIRED_FIELDS_MARKED_WITH"></small> </ff-panel-header> <div class="ff-grid ff-gutter-v ff-gutter-h"> <up-personal-info user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-personal-info> <up-addresses flex="{md: \'0 0 50%\'}" user="vm.userProfile" schema="vm.schema" reg="vm.reg" center="vm.center" single="true"></up-addresses> <div flex="{md: \'0 0 50%\'}"> <div class="ff-grid ff-gutter-v"> <up-login-info user="vm.userProfile" schema="vm.schema" reg="vm.reg" member-directory-url="wlLinks.memberDirectoryUrl"></up-login-info> <up-phones user="vm.userProfile" schema="vm.schema" reg="vm.reg" single="true"></up-phones> </div> </div> <up-photo flex="{md: \'0 0 50%\'}" user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-photo> <div flex="{md: \'0 0 50%\'}"> <div class="ff-grid ff-gutter-v"> <up-lead-source user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-lead-source> <up-terms-of-service user="vm.userProfile" schema="vm.schema" reg="vm.reg"></up-terms-of-service> </div> </div> </div> </ff-panel> </ff-board> <ff-btn-group class="buttons-bottom" ng-if="vm.reg"> <ff-btn sense="back" ff-click="vm.back()" ng-if="vm.back"><span translate="GLOBAL.BTN_BACK"></span></ff-btn> <ff-btn sense="next" ff-click="vm.next()"><span translate="GLOBAL.BTN_NEXT"></span></ff-btn> </ff-btn-group> </div> '},aIjk:function(e,t,r){"use strict";t.a=angular.module("needHelp",[]).directive("needHelp",(function(){return{restrict:"E",scope:!0,controller:function(){},controllerAs:"$ctrl",template:'<span translate="GLOBAL.NEED_HELP" class="need-help" ng-if="$ctrl.phone" translate-values="{ phone: \'<a href=&quot;tel:\' + $ctrl.phone + \'&quot;>\' + $ctrl.phone + \'</a>\' }"></span>',bindToController:{phone:"<"}}}))},"b7+Z":function(e,t,r){"use strict";r.r(t);r("FdtR"),r("JBxO"),r("y89P"),r("Muwe");var n=r("nbuU"),a=r.n(n),s=r("hsT8"),i=r.n(s);r("aIjk");t.default=angular.module("deskworks.MemberSignUpMembershipCtrl",["ngRoute","deskworks.center.service","deskworks.membership.service","deskworks.helper","needHelp"]).controller("MemberSignUpMembershipCtrl",["$scope","$route","$timeout","$translate","$filter","dwAlerts","state","helper","reg","data","membershipService",function(e,t,r,n,s,l,o,f,c,p,u){var d=this;o.setPageTitle(n.instant("MEMBER_SIGN_UP.MEMBERSHIP.PAGE_TITLE")),d.centers=p.centers,d.reg=c,d.settings=p.settings,d.settings.skipPlanMemberSignUp&&(d.reg.stepCount-=1),d.center=a()(f).call(f,d.centers,o.getCurrentCenterId()),d.center||1!==d.centers.length||(d.center=d.centers[0]),d.loadMembershipCategories=function(){d.center&&!d.settings.skipPlanMemberSignUp&&(d.updating=!0,u.query(d.center.id).catch((function(e){return l.error(e,"Failed to query membership categories.")})).finally((function(){return d.updating=!1})).then((function(e){d.membershipCategories=i()(e).call(e,(function(e){return e.products.length>0})),delete d.membershipProduct,d.updating=!1,d.membershipStartDate=o.getParam("membershipStartDate"),d.membershipStartDate=d.membershipStartDate?s("toDate")(d.membershipStartDate):moment(),d.membershipCategories.some((function(e){var t=a()(f).call(f,e.products,o.getParam("productId"));return t?(d.membershipCategory=e,d.membershipProduct=t):delete d.membershipCategory,!!t}))})))},d.loadMembershipCategories(),d.membershipCategoryChange=function(){delete d.membershipProduct},d.next=function(){if(!f.pointFirstInvalid("#memberSignUpMembership"))return d.settings.skipPlanMemberSignUp||d.membershipProduct?(o.replace(),o.setCurrentCenterId(d.center.id),d.settings.skipPlanMemberSignUp||o.setParam("productId",d.membershipProduct.id),o.setParam("membershipStartDate",s("date")(d.membershipStartDate,"yyyy-MM-dd")),r((function(){return o.setPath(o.getPath()+"/"+(o.getCurrentUserId()||"new"))}))):l.error("No plan selected.")}}])},dLOS:function(e,t,r){"use strict";r("3dw1");var n=r("hsT8"),a=r.n(n),s=r("nbuU"),i=r.n(s),l=r("6RpP"),o=r.n(l),f=r("QEpw"),c=r.n(f);t.a=angular.module("newBillingProfile",[]).directive("newBillingProfile",(function(){return{template:c.a,restrict:"E",scope:!0,controller:"NewBillingProfileCtrl as $ctrl",bindToController:{settings:"<",user:"<"}}})).controller("NewBillingProfileCtrl",["$scope","userProfileService",function(e,t){var r=this;r.$onInit=function(){var n;if(r.settings.creditCardTypes=a()(n=r.settings.creditCardTypes).call(n,(function(e){return e.enable})),r.user.creditCards.forEach((function(e){var t;e.type=i()(t=r.settings.creditCardTypes).call(t,(function(t){return t.id===e.type}))||e.type||{}})),r.user.creditCards=r.user.creditCards||[],!r.user.creditCards.length&&!r.user.eChecks.length){var s=t.creditCard.new(r.user);s.type=r.settings.creditCardTypes[0],r.user.creditCards.push(s)}e.$watchCollection((function(e){var t;return o()(t=r.user.creditCards).call(t,r.user.eChecks)}),(function(e){e&&r.user.paymentMethodId&&!i()(e).call(e,(function(e){return e.id===r.user.paymentMethodId}))&&(r.user.billingMethod=null,r.user.paymentMethodId=null)})),t.bindTestBillingGenerator(e,r.user)},r.isSingleMode=function(){var e=r.user,n=e.creditCards,a=e.eChecks;return!n.length&&(!a.length||t.eCheck.isNew(a[0]))||!a.length&&(!n.length||t.creditCard.isNew(n[0]))},r.showSwitchCC=function(){var e=r.user,n=e.creditCards,a=e.eChecks;return!n.length&&(!a.length||t.eCheck.isNew(a[0]))},r.showSwitchACH=function(){var e=r.user,n=e.creditCards,a=e.eChecks;return r.settings.enableEChecks&&!a.length&&(!n.length||t.creditCard.isNew(n[0]))},r.addCC=function(){var e=t.creditCard.new(r.user);r.user.creditCards=[e],r.user.eChecks=[]},r.addACH=function(){var e=t.eCheck.new(r.user);r.user.eChecks=[e],r.user.creditCards=[]}}])},epFx:function(e,t,r){var n={"./steps/01-landing.tpl.html":"gv4n","./steps/01-membership.tpl.html":"0V8K","./steps/03-purchase.tpl.html":"/pDC","./steps/04-complete.tpl.html":"fzQs"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="epFx"},fzQs:function(e,t){e.exports='<div id="memberSignUpComplete"> <h1 class="page-title flex"> <span>{{state.getPageTitle()}}</span> <need-help phone="$resolve.center.phone"></need-help> </h1> <ff-info class="ff-center ff-bmargin" ng-if="vm.accessCode && vm.settings.enableAccessCodes" translate="SIMPLE_RES.COMPLETE.ACCESS_CODE" translate-values="{ accessCode: vm.accessCode }"></ff-info> <ff-board> <ff-panel ng-if="vm.purchase"> <ff-panel-header> <span translate="SIMPLE_RES.COMPLETE.ORDER.HEADER" translate-values="{ orderId: vm.purchase.orderId }"></span> </ff-panel-header> <dw-invoice invoice="vm.purchase" center="vm.center" allow-remove="false"></dw-invoice> </ff-panel> <ff-panel ng-if="!vm.purchase && !vm.accessCode"> <ff-info class="ff-center" translate="MEMBER_SIGN_UP.COMPLETE.SUCCESS"></ff-info> </ff-panel> </ff-board> <ff-btn-group class="buttons-bottom" ng-class="{\'ff-center\': !vm.purchase}"> <ff-btn sense="home" type="submit" ff-click="vm.home()"><span translate="GLOBAL.BTN_HOME"></span></ff-btn> </ff-btn-group> </div> '},gv4n:function(e,t){e.exports='<form id="memberSignUpLanding" novalidate> <h1 class="page-title">{{state.getPageTitle()}}</h1> <ff-board> <ff-panel style="max-width:480px;margin:0 auto"> <div class="gutter-v-half"> <ff-header class="ff-grid"> <span flex="0 1 auto">{{::$ctrl.product.name}}&nbsp;</span> <span flex="none" class="text-brand">{{::($ctrl.product.price || 0) | ncurrency}}</span> </ff-header> <div ng-if="::$ctrl.product.description" style="white-space:pre-wrap;line-height:1.4">{{::$ctrl.product.description}}</div> <label class="ff-row" style="max-width:220px;margin-left:auto"> <ff-label flex="0 0 90px"> <span translate="MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE"></span> </ff-label> <ff-date ff-model="$ctrl.membershipStartDate" name="membershipStartDate" ff-validate-alert="{{\'MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE\' | translate}}"></ff-date> </label> </div> </ff-panel> </ff-board> <ff-btn-group> <ff-btn sense="next" type="submit" ff-click="$ctrl.next()"><span translate="MEMBER_SIGN_UP.MEMBERSHIP.BTN_PROCEED"></span></ff-btn> </ff-btn-group> </form> '},h9bl:function(e,t,r){"use strict";r.r(t);r("FdtR"),r("JBxO");var n=r("aIjk"),a=r("Vtxe");t.default=angular.module("deskworks.MemberSignUpCompleteCtrl",[n.a.name,a.a.name]).controller("MemberSignUpCompleteCtrl",["$scope","$q","$timeout","$translate","dwAlerts","state","helper","deskworksConfig","center","purchase",function(e,t,r,n,a,s,i,l,o,f){this.center=o,this.purchase=f,s.setPageTitle(n.instant("MEMBER_SIGN_UP.COMPLETE.PAGE_TITLE")),e.$on("$locationChangeStart",(function(e,t){t&&t.indexOf("/member-sign-up")>=0&&(e.preventDefault(),a.error(n.instant("MEMBER_SIGN_UP.COMPLETE.BACK_ERROR")))})),this.home=function(){var e=s.getParam("origin"),n=s.getCurrentCenterId();return(e?s.logout():t.when()).finally((function(){s.resetParams(),s.setPath(e||l.getDefaultRoute()),e&&s.setCurrentCenterId(n)})),r(15e3)}}])},l7sz:function(e,t){e.exports='<div id="staffHelp" class="ff-tmargin"> <ff-board> <ff-panel> <span ng-bind="::vm.notice"></span> </ff-panel> </ff-board> <ff-btn-group class="buttons-bottom ff-center"> <ff-btn sense="home" type="submit" ff-click="vm.home()"><span translate="GLOBAL.BTN_HOME"></span></ff-btn> </ff-btn-group> </div> '}}]);