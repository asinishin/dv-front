(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"/2Ga":function(e,t){e.exports="<div class=dw-modal-fade ng-click=close()></div> <div class=dw-modal-dialog> <div class=dw-modal-scroll ng-transclude></div> <button class=dw-modal-cross ng-click=close()></button> </div> "},"/uuH":function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.WhiteLabelVars",["ngResource","deskworks.config"]).factory("WhiteLabelVars",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/white-label/vars"),{},{update:{method:"PUT"}});return{get:function(){return n.get().$promise},save:function(e){return n.update({},angular.extend({"dynamic-white-label":1},e)).$promise}}}])},"35x3":function(e,t,n){"use strict";n.r(t);n("JBxO"),n("FdtR"),n("aZFp");var a=n("T/jV"),l=n.n(a),r=n("7pN8"),i=n.n(r),f=n("yCd9"),o=n.n(f),s=n("WSeP"),c=n.n(s),u=n("EDu8"),d=(n("HeNH"),angular.module("ffColor",[]).directive("ffColor",["$timeout",function(e){return{template:"<div></div>",restrict:"E",scope:!0,controller:"ffColorCtrl as $ctrl",bindToController:{ffModel:"="},link:function(t,n,a,l){var r=!1;n.addClass("ff-control");var i=new u.a({parent:n[0],editor:!0,color:l.ffModel,onChange:function(t){return e((function(){r=!0,function(e){l.ffModel=e.rgbaString,n.css("color",e.rgbaString)}(t)}))}});t.$watch("$ctrl.ffModel",(function(e){r||i.setColor(e),r=!1}))}}}]).controller("ffColorCtrl",(function(){}))),p=n("3vCA"),g=n.n(p),m=(n("KzgR"),n("1PCL")),E=n.n(m),T=n("W06D"),L=(n("JQSn"),angular.module("ffCrop",[]).directive("ffCrop",["$timeout",function(e){return{restrict:"A",scope:!0,link:function(t,n,a,l){var r,i=n[0].querySelector("img"),f=t.$watch(a.ffCrop,(function(l){l&&(f(),t.$watchCollection((function(){return[i.getAttribute("src"),l&&l.crop]}),(function(){a.ffSrc&&T.a.load(i).then((function(){return t.$apply((function(){return e((function(){r||(r=T.a.attach(n[0],l));var e=l.crop,a=e.x,f=e.y,o=e.w,s=e.h,c=i.width/i.naturalWidth,u=i.height/i.naturalHeight,d=T.a.Rect.create(a*c,f*u,o*c,s*u);r.active?r.active.render(d):(r.newWidget(d),r.active.listen("crop.update",(function(e){t.$apply((function(){var t=i.naturalWidth/i.width,n=i.naturalHeight/i.height,a=e.pos.normalize();a.x*=t,a.y*=n,a.w*=t,a.h*=n,E()(l.crop,a.round())}))})))}),100)}))}))})))}));t.$on("$destroy",(function(){r&&(r.removeWidget(r.active),r.active=null,r.destroy()),r=null}))}}}])),v=angular.module("EditImageCtrl",[L.name]).controller("EditImageCtrl",["$scope","close","load","save","style",function(e,t,n,a,l){var r=this;e.close=t,r.style=l,n().then((function(e){r.image=e,r.image.url+="?"+i()(),r.initialCrop=angular.copy(r.image.crop)})),r.isPristine=function(){return angular.equals(r.initialCrop,r.image.crop)},r.reset=function(){r.image.crop=angular.copy(r.initialCrop)},r.save=function(){return a(r.image).then((function(){return r.initialCrop=angular.copy(r.image.crop),t(!0)}))}}]),_=n("iAzO"),h=n("/2Ga"),I=n.n(h),b=(n("zyqg"),angular.module("dwModal.directive",[]).directive("dwModal",(function(){return{template:I.a,restrict:"EA",transclude:!0,compile:function(e){return e.addClass("dw-modal"),function(){}}}}))),S=angular.module("editImage",[v.name,_.a.name,b.name]).factory("editImage",["dwModal",function(e){return function(t,n){return e.show({template:g.a,scope:t,inputs:n,controller:"EditImageCtrl as $ctrl"}).then((function(e){return e.close}))}}]),A=n("/uuH"),N=n("Ut0V"),w=n("ADEY"),x=n("OKyM"),R=n("FoaE"),$=(n("DOU/"),n("bHMQ"));t.default=angular.module("deskworks.WhiteLabelSettingsCtrl",[d.name,S.name,A.default.name,N.default.name,w.default.name,x.default.name,R.default.name,"autoSave","deskworks.whitelabel",$.default.name]).controller("WhiteLabelSettingsCtrl",["$scope","$rootScope","$translate","$timeout","dwAlerts","state","whitelabel","helper","WhiteLabelVars","whiteLabelVarsList","editImage","WhiteLabelImageMeta","whiteLabelImageList","WhiteLabelLinks","autoSave","logo",function(e,t,n,a,r,f,s,u,d,p,g,m,E,T,L,v){var _,h=this;function I(e,t){c()(e).call(e,(function(e,n){var a=h.vars[n];s.setProperty("--".concat(a.id),A(a)),e!==t[n]&&angular.isDefined(t[n])&&h.initialVars&&e!==h.initialVars[a.id]&&h.form.$setDirty()}))}function b(e){var t,n=i()();e.url=e.url.split("?")[0]+"?"+n,c()(t=document.querySelectorAll(".white-label-prefix")).call(t,(function(e){e.src&&(e.src=e.src.split("?")[0]+"?"+n),e.href&&(e.href=e.href.split("?")[0]+"?"+n)})),v.resetSiteLogo(),v.resetSiteLogoInv()}function S(e,t){return t=t||s.getProperty("--".concat(e.id)),"px"===e.type?l()(t):"bool"===e.type?"true"===t:t}function A(e,t){return t=angular.isDefined(t)?t:e.value,"px"===e.type?"".concat(t,"px"):"bool"===e.type?"".concat(t):t}f.setPageTitle(n.instant("WHITE_LABEL_SETTINGS.PAGE_TITLE")),T.get().then((function(e){h.links=e})),h.vars=angular.copy(p),c()(_=h.vars).call(_,(function(e){e.value=S(e,null)})),h.images=angular.copy(E),d.get().catch((function(e){return r.error(e,"Failed to get white label vars")})).then((function(e){var t;h.initialVars={},c()(t=h.vars).call(t,(function(t){t.value=S(t,e[t.id]),h.initialVars[t.id]=t.value}))})),e.$watchCollection((function(){var e;return o()(e=h.vars).call(e,(function(e){return e.value}))}),I),h.save=function(){var e;if(!u.pointFirstInvalid("#whiteLabelSetup")){var t={};return c()(e=h.vars).call(e,(function(e){t[e.id]=A(e)})),d.save(t).catch((function(e){return r.error(e,"Failed to save white-label vars")})).then((function(){var e;h.initialVars={},c()(e=h.vars).call(e,(function(e){h.initialVars[e.id]=e.value})),h.form.$setPristine()}))}},h.reset=function(){var e;c()(e=h.vars).call(e,(function(e){e.value=h.initialVars[e.id]})),h.form.$setPristine()},h.editImage=function(t){return g(e,{load:function(){return m.get(t.id).catch((function(e){return r.error(e,"Failed to get ".concat(t.id," image meta"))}))},save:function(e){return m.save(t.id,e).catch((function(e){return r.error(e,"Failed to save ".concat(t.id," image meta"))}))},style:"logo"===t.id?{backgroundColor:"var(--logo-bg-color)"}:null}).then((function(e){e&&b(t)}))},h.uploadImage=function(e,t,a){return a&&a.length?r.error(n.instant("GLOBAL.INVALID_IMAGE_FORMAT")):t&&t.length?(e.$$spin=!0,m.upload(e.id,t[0]).finally((function(){e.$$spin=!1})).catch((function(t){return r.error(t,"Failed to upload ".concat(e.id," image."))})).then((function(t){return b(e),t.data}))):void 0},h.saveLinks=L.wrap((function(){if(u.pointFirstInvalid("#wlLinks")||!h.links)return;return h.spinLinks=!0,T.save(h.links).then((function(){t.wlLinks=h.links})).catch((function(e){return r.error(e,"Failed to save white label links.")})).finally((function(){h.spinLinks=!1}))})),h.uploadTermsOfService=function(e,t){return t&&t.length>0?r.error(n.instant("WHITE_LABEL_SETTINGS.INVALID_FORMAT_PDF")):e&&e.length>0?(h.spinTOS=!0,T.uploadTermsOfService(e[0]).catch((function(e){return r.error(e,"Failed to upload terms of service.")})).then((function(e){return h.links.tosLinkUrl=e.data.termsOfService,T.save(h.links).catch((function(e){return r.error(e,"Failed to save link to uploaded terms of service")}))})).finally((function(){h.spinTOS=!1}))):void 0},h.uploadReservationAgreement=function(e,t){return t&&t.length>0?r.error(n.instant("WHITE_LABEL_SETTINGS.INVALID_FORMAT_PDF")):e&&e.length>0?(h.spinRA=!0,T.uploadReservationAgreement(e[0]).catch((function(e){return r.error(e,"Failed to upload reservation agreement.")})).then((function(e){return h.links.reservationAgreementLinkUrl=e.data.reservationAgreement,T.save(h.links).catch((function(e){return r.error(e,"Failed to save link to uploaded reservation agreement")}))})).finally((function(){h.spinRA=!1}))):void 0}}])},"3vCA":function(e,t){e.exports='<dw-modal> <div class=edit-image ff-dim="!$ctrl.image || !$ctrl.imageLoaded"> <ff-img ff-src={{$ctrl.image.url}} img-placeholder=800x800 ff-crop=$ctrl.image ff-style=$ctrl.style ff-img-loaded=$ctrl.imageLoaded ng-if=$ctrl.image ng-show=$ctrl.imageLoaded></ff-img> <div class="ff-grid edit-image-toolbar" ng-if="$ctrl.image && $ctrl.imageLoaded"> <ff-row flex="0 0 170px"> <ff-col flex="0 0 70px" ng-if=$ctrl.image.url> <div><small>X:</small> {{$ctrl.image.crop.x}}</div> <div><small>Y:</small> {{$ctrl.image.crop.y}}</div> </ff-col> <ff-col flex="0 0 100px" ng-if=$ctrl.image.url> <div><small>WIDTH:</small> {{$ctrl.image.crop.w}}</div> <div><small>HEIGHT:</small> {{$ctrl.image.crop.h}}</div> </ff-col> </ff-row> <ff-btn-group flex=auto> <ff-btn sense=reset size=sm ff-disabled=$ctrl.isPristine() ff-click=$ctrl.reset()> <span translate=GLOBAL.BTN_RESET></span> </ff-btn> <ff-btn sense=save size=sm ff-disabled=$ctrl.isPristine() ff-click=$ctrl.save()> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> </div> </div> </dw-modal> '},"4sI5":function(e,t,n){var a={"./settings/white-label-settings.tpl.html":"O5Ew"};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id="4sI5"},ADEY:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.WhiteLabelImageMeta",["ngResource","deskworks.config"]).factory("WhiteLabelImageMeta",["$resource","$timeout","deskworksConfig","Upload",function(e,t,n,a){var l=e(n.getApiAbsUrl("/white-label/image-meta/:imageId"),{},{update:{method:"PUT"}});return{get:function(e){return l.get({imageId:e}).$promise},save:function(e,t){return l.update({imageId:e},t).$promise},upload:function(e,t){return a.upload({url:n.getApiAbsUrl("/white-label/image-meta/".concat(e)),method:"PUT",withCredentials:!0,data:{file:t}})}}}])},"DOU/":function(e,t,n){},HeNH:function(e,t,n){},KzgR:function(e,t,n){},O5Ew:function(e,t){e.exports='<div id=whiteLabelSetup> <div class="ff-grid gutter-v gutter-h"> <form name=$ctrl.form novalidate ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class="ff-grid gutter-h gutter-v"> <ff-panel flex="{md: \'0 0 50%\'}"> <ff-panel-header><span translate=WHITE_LABEL_SETTINGS.COLORS.HEADER></span></ff-panel-header> <label class=ff-row ng-repeat="v in $ctrl.vars | filter:{ type: \'color\' }"> <ff-label><span translate={{v._name}}></span></ff-label> <ff-color name={{v.id}} ff-model=v.value></ff-color> </label> </ff-panel> <ff-panel flex="{md: \'0 0 50%\'}"> <ff-panel-header><span translate=WHITE_LABEL_SETTINGS.OTHER.HEADER></span></ff-panel-header> <label class=ff-row ng-repeat="v in $ctrl.vars | filter:{ type: \'px\' }"> <ff-label flex="5 1 200px"><req translate={{v._name}}></req></ff-label> <ff-number flex="1 0 36px" name={{v.id}} class=ff-right ff-model=v.value ff-gte=0 ff-lte=30 ff-required=true ff-validate-alert="{{v._name | translate}}"></ff-number> </label> <ff-static ng-repeat="v in $ctrl.vars | filter:{ type: \'bool\' }"> <label> <ff-checkbox name={{v.id}} ff-model=v.value><span translate={{v._name}}></span></ff-checkbox> </label> &nbsp; <ff-hint ng-if=v._hint><span translate={{v._hint}}></span></ff-hint> </ff-static> </ff-panel> <ff-btn-group> <ff-btn sense=reset ff-click=$ctrl.reset() ff-disabled=$ctrl.form.$pristine><span translate=GLOBAL.BTN_RESET></span></ff-btn> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine><span translate=GLOBAL.BTN_SAVE></span></ff-btn> </ff-btn-group> </div> </form> <form novalidate ff-bulk-read-only id=wlLinks ff-dim=!$ctrl.links> <ff-panel> <ff-panel-header ff-spin=$ctrl.spinLinks class=ff-spin-right><span translate=WHITE_LABEL_SETTINGS.LINKS></span></ff-panel-header> <label class=ff-row> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"><req translate=WHITE_LABEL_SETTINGS.COMPANY_NAME></req></ff-label> <ff-text flex="8 1 200px" name=companyName ff-model=$ctrl.links.companyName ff-change=$ctrl.saveLinks() ff-required=true ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.COMPANY_NAME\' | translate}}" placeholder="The Satellite Centers"></ff-text> </label> <label class=ff-row> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"><req translate=WHITE_LABEL_SETTINGS.HOMEPAGE_URL></req></ff-label> <ff-url flex="8 1 200px" name=homepageUrl ff-model=$ctrl.links.homepageUrl ff-change=$ctrl.saveLinks() ff-required=true ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.HOMEPAGE_URL\' | translate}}" placeholder=http://thesatellitecenters.com/ ></ff-url> </label> <label class=ff-row> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"> <span> <span translate=WHITE_LABEL_SETTINGS.MEMBER_DIRECTORY_URL></span> <ff-hint><span translate=WHITE_LABEL_SETTINGS.MEMBER_DIRECTORY_URL.HINT></span></ff-hint> </span> </ff-label> <ff-url flex="8 1 200px" name=memberDirectoryUrl ff-model=$ctrl.links.memberDirectoryUrl ff-change=$ctrl.saveLinks() ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.MEMBER_DIRECTORY_URL\' | translate}}" placeholder=https://the_satellite.townsqua.re/apply></ff-url> </label> <label class=ff-row> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"> <span> <req translate=WHITE_LABEL_SETTINGS.CONTACT_URL></req> <ff-hint><span translate=WHITE_LABEL_SETTINGS.CONTACT_URL.HINT></span></ff-hint> </span> </ff-label> <ff-url flex="8 1 200px" name=contactLinkUrl ff-model=$ctrl.links.contactLinkUrl ff-change=$ctrl.saveLinks() ff-required=true ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.CONTACT_URL\' | translate}}" placeholder=http://thesatellitecenters.com/contact/ ></ff-url> </label> <ff-row> <label flex=auto> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"> <span> <req translate=WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL></req> <ff-hint><span translate=WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL.HINT></span></ff-hint> </span> </ff-label> <ff-url flex="8 1 148px" name=tosLinkUrl ff-model=$ctrl.links.tosLinkUrl ff-change=$ctrl.saveLinks() ff-required=true ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL\' | translate}}" placeholder=http://thesatellitecenters.com/terms-of-service/ ></ff-url> </label> <ff-btn-group flex=none> <ff-btn sense=upload size=sm ngf-select="$ctrl.uploadTermsOfService($files, $invalidFiles)" ngf-pattern="\'application/pdf\'" accept=application/pdf ff-spin=$ctrl.spinTOS title="{{\'WHITE_LABEL_SETTINGS.BTN_UPLOAD_TERMS_OF_SERVICE.HINT\' | translate}}">PDF</ff-btn> </ff-btn-group> </ff-row> <label class=ff-row> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"> <span> <req translate=WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_TEXT></req> <ff-hint><span translate=WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL.HINT></span></ff-hint> </span> </ff-label> <ff-text flex="8 1 200px" name=tosLinkText ff-model=$ctrl.links.tosLinkText ff-change=$ctrl.saveLinks() ff-required=true ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_TEXT\' | translate}}" placeholder="The Satellite’s Terms and Conditions"></ff-text> </label> <ff-row> <label flex=auto> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"> <span> <span translate=WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL></span> <ff-hint><span translate=WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL.HINT></span></ff-hint> </span> </ff-label> <ff-url flex="8 1 148px" name=reservationAgreementLinkUrl ff-model=$ctrl.links.reservationAgreementLinkUrl ff-change=$ctrl.saveLinks() ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL\' | translate}}" placeholder=http://thesatellitecenters.com/reservation-agreement/ ></ff-url> </label> <ff-btn-group flex=none> <ff-btn sense=upload size=sm ngf-select="$ctrl.uploadReservationAgreement($files, $invalidFiles)" ngf-pattern="\'application/pdf\'" accept=application/pdf ff-spin=$ctrl.spinRA title="{{\'WHITE_LABEL_SETTINGS.BTN_UPLOAD_RESERVATION_AGREEMENT.HINT\' | translate}}">PDF</ff-btn> </ff-btn-group> </ff-row> <label class=ff-row> <ff-label flex="{xs: \'0 0 120px\', sm: \'0 0 250px\'}"> <span> <span translate=WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_TEXT></span> <ff-hint><span translate=WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL.HINT></span></ff-hint> </span> </ff-label> <ff-text flex="8 1 200px" name=reservationAgreementLinkText ff-model=$ctrl.links.reservationAgreementLinkText ff-change=$ctrl.saveLinks() ff-validate-alert="{{\'WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_TEXT\' | translate}}" placeholder="The Satellite’s Reservation Agreement"></ff-text> </label> </ff-panel> </form> <ff-panel flex="{md: \'0 0 50%\'}" ng-repeat="img in $ctrl.images" class=wl-image-panel ngf-drop="$ctrl.uploadImage(img, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" ngf-drag-over-class=dragover> <ff-panel-header> <span translate={{img._name}}></span> <ff-hint><span translate={{img._hint}}></span></ff-hint> </ff-panel-header> <ff-img ff-src={{img.url}} ff-style={{img.style}}></ff-img> <ff-btn-group class=ff-section-buttons> <ff-btn sense=crop size=sm ff-click=$ctrl.editImage(img)><span translate=GLOBAL.BTN_CROP></span></ff-btn> <ff-btn sense=upload size=sm ff-spin=img.$$spin ngf-select="$ctrl.uploadImage(img, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" accept=image/png,image/jpeg><span translate=GLOBAL.BTN_UPLOAD></span></ff-btn> </ff-btn-group> </ff-panel> </div> </div> '},OKyM:function(e,t,n){"use strict";n.r(t);var a=n("yCd9"),l=n.n(a);t.default=angular.module("deskworks.whiteLabelImageList",["deskworks.config"]).factory("whiteLabelImageList",["deskworksConfig",function(e){var t;return l()(t=[{id:"logo",_name:"WHITE_LABEL_SETTINGS.LOGO",_hint:"WHITE_LABEL_SETTINGS.LOGO.HINT",url:"logo.png",style:{maxHeight:"130px",maxWidth:"200px",width:"auto",backgroundColor:"var(--logo-bg-color)"}},{id:"logo-print",_name:"WHITE_LABEL_SETTINGS.LOGO_PRINT",_hint:"WHITE_LABEL_SETTINGS.LOGO_PRINT.HINT",url:"logo-print.png",style:{maxHeight:"130px",maxWidth:"200px",width:"auto"}},{id:"icon",_name:"WHITE_LABEL_SETTINGS.ICON",_hint:"WHITE_LABEL_SETTINGS.ICON.HINT",url:"icon-512x512.png",style:{maxHeight:"130px",maxWidth:"130px",width:"auto"}},{id:"banner",_name:"WHITE_LABEL_SETTINGS.BANNER",_hint:"WHITE_LABEL_SETTINGS.BANNER.HINT",url:"banner.jpg",style:{maxHeight:"130px",width:"auto"}}]).call(t,(function(t){return t.url=e.getApiAbsUrl("/white-label/images/".concat(t.url)),t}))}])},Ut0V:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.whiteLabelVarsList",[]).factory("whiteLabelVarsList",(function(){return[{id:"brand-color",_name:"WHITE_LABEL_SETTINGS.BRAND_COLOR",type:"color"},{id:"header-bg-color",_name:"WHITE_LABEL_SETTINGS.HEADER_BG_COLOR",type:"color"},{id:"logo-bg-color",_name:"WHITE_LABEL_SETTINGS.LOGO_BG_COLOR",type:"color"},{id:"sidebar-bg-color",_name:"WHITE_LABEL_SETTINGS.SIDEBAR_BG_COLOR",type:"color"},{id:"sidebar-color",_name:"WHITE_LABEL_SETTINGS.SIDEBAR_COLOR",type:"color"},{id:"panel-border-radius",_name:"WHITE_LABEL_SETTINGS.PANEL_BORDER_RADIUS",type:"px"},{id:"btn-border-radius",_name:"WHITE_LABEL_SETTINGS.BTN_BORDER_RADIUS",type:"px"},{id:"elastic-banner",_name:"WHITE_LABEL_SETTINGS.ELASTIC_BANNER",_hint:"WHITE_LABEL_SETTINGS.ELASTIC_BANNER.HINT",type:"bool"}]}))},bHMQ:function(e,t,n){"use strict";n.r(t);t.default=angular.module("deskworks.logo",[]).factory("logo",["$window","$http","$q","deskworksConfig",function(e,t,n,a){var l,r;return{getSiteLogo:function(){return l=l||n((function(e){var t=new Image;t.crossOrigin="anonymous",t.src=a.getApiAbsUrl("/white-label/images/logo-print.png"),t.onerror=function(){console.warn("Report failed to load site logo."),e(null),t=null},t.onload=function(){e(t),t=null}})).then(i)},getSiteLogoInv:function(){return r=r||n((function(e){var t=document.querySelector(".sidebar-logo a img");t||console.warn("Report failed to load site logo."),e(t)})).then(i)},resetSiteLogo:function(){l=null},resetSiteLogoInv:function(){r=null}};function i(e){if(!e)return null;var t=e.width/480,n=e.height/171,a=t>n?t:n,l=Math.round(e.width/a),r=Math.round(e.height/a),i=document.createElement("canvas");document.body.appendChild(i),i.width=l,i.height=r,i.getContext("2d").drawImage(e,0,0,l,r);var f=i.toDataURL("image/png");return document.body.removeChild(i),{width:l,height:r,data:f}}}])},iSQY:function(e,t,n){"use strict";n.r(t);n("y89P");var a=n("WSeP"),l=n.n(a),r=n("lRNC"),i=n.n(r),f=n("yCd9"),o=n.n(f),s=["$injector",function(e){var t,a,r=(t=n("wEYu"),o()(a=i()(t).call(t)).call(a,t));e.loadNewModules(o()(r).call(r,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,a=n("4sI5");l()(t=i()(a).call(a)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),a(t))}))}])}];t.default=s},wEYu:function(e,t,n){var a={"./services/white-label-image-list.service.js":"OKyM","./services/white-label-image-meta.service.js":"ADEY","./services/white-label-vars-list.service.js":"Ut0V","./services/white-label-vars.service.js":"/uuH","./settings/white-label-settings.controller.js":"35x3"};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id="wEYu"}}]);