(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/l8F":function(e,t){e.exports='<ff-panel> <ff-panel-header><span> <span translate=SH_CODES.HEADER></span> <ff-hint><span translate=SH_CODES.HINT></span></ff-hint> </span></ff-panel-header> <ff-row ng-repeat="code in $ctrl.shortCodes"> <ff-label flex="1 0 140px" ff-bind-html=code.id></ff-label> <ff-static flex="1 1 350px">{{code._name | translate}}</ff-static> </ff-row> </ff-panel> '},"3PPX":function(e,t,a){"use strict";a.r(t);a("aJ1N");t.default=angular.module("deskworks.notifications.recurringInvoices",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("RecurringInvoicesEmailCtrl",["$scope","$translate","dwAlerts","state","helper","tpl","Notifications","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.RECURRING_INVOICES.PAGE_TITLE")),o.tpl=n,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{card-number}}",_name:"NOTIFICATIONS.SH_CODES.CARD_NUMBER"},{id:"{{center-phone}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_PHONE"},{id:"{{due-date}}",_name:"NOTIFICATIONS.SH_CODES.DUE_DATE"},{id:"{{website-url}}",_name:"NOTIFICATIONS.SH_CODES.WEBSITE_URL"},{id:"{{year}}",_name:"NOTIFICATIONS.SH_CODES.YEAR"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{month}}",_name:"NOTIFICATIONS.SH_CODES.MONTH"},{id:"{{invoice}}",_name:"NOTIFICATIONS.SH_CODES.INVOICE"},{id:"{{last-month}}",_name:"NOTIFICATIONS.SH_CODES.LAST_MONTH"},{id:"{{pdf-link}}",_name:"NOTIFICATIONS.SH_CODES.PDF_LINK"},{id:"{{last-month-year}}",_name:"NOTIFICATIONS.SH_CODES.LAST_MONTH_YEAR"}],o.save=function(){if(!l.pointFirstInvalid("#recurringInvoicesTpl"))return s.saveRecurringInvoices(o.tpl).catch(function(e){return a.error(e,"Failed to save recurring invoices template.")}).then(function(){o.form.$setPristine()})}}])},"4IO9":function(e,t,a){"use strict";a.r(t);a("aJ1N");t.default=angular.module("deskworks.PassesUsedUpEmailCtrl",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("PassesUsedUpEmailCtrl",["$scope","$translate","dwAlerts","state","helper","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.PASSES_USED_UP.PAGE_TITLE")),o.tpl=s,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{recurring-billing}}",_name:"NOTIFICATIONS.SH_CODES.RECURRING_BILLING"}],o.save=function(){if(!l.pointFirstInvalid("#passesUsedUpEmail"))return n.savePassesUsedUpEmail(o.tpl).catch(function(e){return a.error(e,"Failed to save passes used up email template.")}).then(function(){o.form.$setPristine()})}}])},"53B5":function(e,t,a){var r={"./bulk-invoices/bulk-invoices.tpl.html":"NHtj","./cal-sync-error-email/cal-sync-error-email.tpl.html":"As9G","./declined-card-email/declined-card-email.tpl.html":"nGNk","./expired-card-email/expired-card-email.tpl.html":"M6Di","./message-board-notices/message-board-notices.tpl.html":"lAt0","./passes-used-up-email/passes-used-up-email.tpl.html":"76Lt","./receipt-email/receipt-email.tpl.html":"goU5","./recurring-invoices/recurring-invoices.tpl.html":"r7xs","./renewal-notice-email/renewal-notice-email.tpl.html":"el8R","./reservation-confirmation/reservation-confirmation.tpl.html":"e30G","./reservation-reminder/reservation-reminder.tpl.html":"xkgW","./welcome-letter/welcome-letter.tpl.html":"Iqnr"};function l(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=n,e.exports=l,l.id="53B5"},"76Lt":function(e,t){e.exports='<form name=$ctrl.form id=passesUsedUpEmail ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div class=ff-grid> <div flex="{md: \'0 0 50%\'}" short-codes=$ctrl.shortCodes></div> </div> </div> </form> '},"7OsI":function(e,t,a){"use strict";a.r(t);a("aJ1N"),a("NhWh");t.default=angular.module("deskworks.MessageBoardNoticesTplCtrl",["deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("MessageBoardNoticesTplCtrl",["$scope","$q","$translate","dwAlerts","state","helper","tpls","Notifications","taToolbarEmail",function(e,t,a,r,l,n,s,i,o){var f=this;l.setPageTitle(a.instant("NOTIFICATIONS.MESSAGE_BOARD.PAGE_TITLE")),f.tpls=s,f.toolbar=o,f.shortCodes=[{id:"{{member-name}}",_name:"SH_CODES.MEMBER_NAME"},{id:"{{messages}}",_name:"SH_CODES.MESSAGES"},{id:"{{center-name}}",_name:"SH_CODES.CENTER_NAME"}],f.save=function(){if(!n.pointFirstInvalid("#messageBoardNoticesTpl"))return t.all(f.tpls.map(function(e){return i.saveMessageBoardEmailTemplate(e.$$id,e).catch(function(e){return r.error(e,"Failed to save message board email template.")})})).then(function(){f.form.$setPristine()})}}])},"8/89":function(e,t){e.exports='<ff-panel ngf-drop=$ctrl.attach($files) ngf-multiple=true ngf-drag-over-class=dragover> <ff-panel-header><span translate=ATTACHMENTS.HEADER></span></ff-panel-header> <ff-row ng-repeat="att in $ctrl.attachments" ff-dim=att.$$spin> <ff-static name=attachment><a href="{{att.url || att.$$url}}" target=_blank rel=noopener>{{att.fileName}}</a></ff-static> <ff-btn sense=delete size=xs class=buttons-row ff-click=$ctrl.detach($index) flex=none title="{{\'ATTACHMENTS.BTN_DELETE.HINT\' | translate}}"></ff-btn> </ff-row> <ff-btn-group class=ff-section-buttons> <ff-btn sense=new size=sm ngf-select=$ctrl.attach($files) ngf-multiple=true> <span translate=ATTACHMENTS.BTN_ADD></span> </ff-btn> </ff-btn-group> </ff-panel> '},As9G:function(e,t){e.exports='<form name=$ctrl.form id=calSyncErrorEmail ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div short-codes=$ctrl.shortCodes class=two-columns></div> </div> </form> '},BarI:function(e,t,a){"use strict";a.r(t);a("aJ1N");t.default=angular.module("deskworks.ReceiptEmailTplCtrl",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail"]).controller("ReceiptEmailTplCtrl",["$q","$translate","dwAlerts","state","helper","tpls","Notifications","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.RECEIPT.PAGE_TITLE")),o.tpls=n,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{center-street}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_STREET"},{id:"{{member-company}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_COMPANY"},{id:"{{center-city}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_CITY"},{id:"{{member-street}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_STREET"},{id:"{{center-state}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_STATE"},{id:"{{member-city}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_CITY"},{id:"{{center-zip}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_ZIP"},{id:"{{member-state}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_STATE"},{id:"{{center-email}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_EMAIL"},{id:"{{member-zip}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_ZIP"},{id:"{{center-phone}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_PHONE"},{id:"{{member-country}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_COUNTRY"},{id:"{{website-url}}",_name:"NOTIFICATIONS.SH_CODES.WEBSITE_URL"},{id:"{{member-email}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_EMAIL"},{id:"{{order-id}}",_name:"NOTIFICATIONS.SH_CODES.ORDER_ID"},{id:"{{user-id}}",_name:"NOTIFICATIONS.SH_CODES.USER_ID"},{id:"{{transaction-id}}",_name:"NOTIFICATIONS.SH_CODES.TRANSACTION_ID"},{id:"{{invoice}}",_name:"NOTIFICATIONS.SH_CODES.INVOICE"}],o.save=function(){if(!l.pointFirstInvalid("#receiptEmailTpl"))return e.all(o.tpls.map(function(e){return s.saveEmailTemplate(e.$$id,e).catch(function(e){return a.error(e,"Failed to save receipt email template.")})})).then(function(){o.form.$setPristine()})}}])},GPfp:function(e,t,a){"use strict";var r=a("8/89"),l=a.n(r);angular.module("deskworks.attachments",["deskworks.getAttachments.service"]).directive("attachments",function(){return{template:l.a,restrict:"EAC",scope:!0,controller:"AttachmentsCtrl as $ctrl",bindToController:{attachments:"=",form:"<?",attacher:"<?",detacher:"<?"}}}).controller("AttachmentsCtrl",["$window","dwAlerts","getAttachments",function(e,t,a){var r=this;r.attach=function(l){return a(l).then(function(a){r.attachments=r.attachments.concat(a),r.attacher?a.forEach(function(e,a){e.$$spin=!0,r.attacher(e).then(function(t){e.$$spin=!1,e.id=t.id,e.url=t.url,delete e.fileData}).catch(function(a){return r.attachments.splice(r.attachments.indexOf(e),1),t.error(a,"Failed to attach file.")})}):(a.forEach(function(t,a){t.$$url=e.URL.createObjectURL(l[a])}),r.form&&r.form.$setDirty())})},r.detach=function(a){if(r.detacher){var l=r.attachments[a];return r.detacher(l).then(function(){r.attachments.splice(r.attachments.indexOf(l),1)}).catch(function(e){return t.error(e,"Failed to detach file.")})}e.URL.revokeObjectURL(r.attachments[a].$$url),r.attachments.splice(a,1),r.form&&r.form.$setDirty()},r.$onDestroy=function(){r.attachments.forEach(function(t){return e.URL.revokeObjectURL(t.$$url)})}}])},"I/f7":function(e,t,a){"use strict";a.r(t);a("t91x");var r=["$injector",function(e){var t,r=(t=a("ggHn")).keys().map(t);e.loadNewModules(r.map(function(e){return e.default.name})),e.invoke(["$templateCache",function(e){var t=a("53B5");t.keys().forEach(function(a){return e.put(a.replace(/^\.\//,""),t(a))})}])}];t.default=r},Iqnr:function(e,t){e.exports='<form name=$ctrl.form id=welcomeLetter ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div class="ff-grid gutter-v gutter-h" style=margin-bottom:0> <div flex="{md: \'0 0 50%\'}" short-codes=$ctrl.shortCodes></div> <div flex="{md: \'0 0 50%\'}" class=ff-flex-start attachments=$ctrl.attachments attacher=$ctrl.attacher detacher=$ctrl.detacher></div> </div> </div> </form> '},JvCf:function(e,t,a){"use strict";a.r(t);a("aJ1N");t.default=angular.module("deskworks.ExpiredCardEmailCtrl",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("ExpiredCardEmailCtrl",["$scope","$translate","dwAlerts","state","helper","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.EXPIRED_CARD.PAGE_TITLE")),o.tpl=s,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{center-phone}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_PHONE"},{id:"{{card-number}}",_name:"NOTIFICATIONS.SH_CODES.CARD_NUMBER"},{id:"{{website-url}}",_name:"NOTIFICATIONS.SH_CODES.WEBSITE_URL"},{id:"{{card-expiry}}",_name:"NOTIFICATIONS.SH_CODES.CARD_EXPIRY"}],o.save=function(){if(!l.pointFirstInvalid("#expiredCardEmail"))return n.saveExpiredCardEmail(o.tpl).catch(function(e){return a.error(e,"Failed to save expired card email template.")}).then(function(){o.form.$setPristine()})}}])},M6Di:function(e,t){e.exports='<form name=$ctrl.form id=expiredCardEmail ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div short-codes=$ctrl.shortCodes class=two-columns></div> </div> </form> '},NHtj:function(e,t){e.exports='<form name=$ctrl.form id=bulkInvoicesTpl ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <ff-panel-header><span translate=NOTIFICATIONS.INVOICES.WITH_CREDIT_CARD></span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.withCreditCard.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.withCreditCard.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-panel class=email-template-panel> <ff-panel-header><span translate=NOTIFICATIONS.INVOICES.WITHOUT_CREDIT_CARD></span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.withoutCreditCard.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.withoutCreditCard.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div short-codes=$ctrl.shortCodes class=two-columns></div> </div> </form> '},NhWh:function(e,t,a){"use strict";a("z6HB");var r=a("/l8F"),l=a.n(r);angular.module("deskworks.shortCodes",[]).directive("shortCodes",function(){return{template:l.a,restrict:"EAC",scope:!0,controller:"ShortCodesCtrl as $ctrl",bindToController:{shortCodes:"<"}}}).controller("ShortCodesCtrl",function(){})},NhxO:function(e,t,a){var r=a("X6VK");r(r.P,"String",{repeat:a("p1Jl")})},RJx7:function(e,t,a){"use strict";a.r(t);a("aJ1N"),a("NhWh");t.default=angular.module("deskworks.BulkInvoicesTplCtrl",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("BulkInvoicesTplCtrl",["$scope","$translate","dwAlerts","state","helper","tpl","Notifications","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.BULK_INVOICES.PAGE_TITLE")),o.tpl=n,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{card-number}}",_name:"NOTIFICATIONS.SH_CODES.CARD_NUMBER"},{id:"{{center-phone}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_PHONE"},{id:"{{two-business-days}}",_name:"NOTIFICATIONS.SH_CODES.TWO_BUSINESS_DAYS"},{id:"{{website-url}}",_name:"NOTIFICATIONS.SH_CODES.WEBSITE_URL"},{id:"{{year}}",_name:"NOTIFICATIONS.SH_CODES.YEAR"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{month}}",_name:"NOTIFICATIONS.SH_CODES.MONTH"},{id:"{{invoice}}",_name:"NOTIFICATIONS.SH_CODES.INVOICE"},{id:"{{last-month}}",_name:"NOTIFICATIONS.SH_CODES.LAST_MONTH"},{id:"{{pdf-link}}",_name:"NOTIFICATIONS.SH_CODES.PDF_LINK"},{id:"{{last-month-year}}",_name:"NOTIFICATIONS.SH_CODES.LAST_MONTH_YEAR"}],o.save=function(){if(!l.pointFirstInvalid("#bulkInvoicesTpl"))return s.saveBulkInvoices(o.tpl).catch(function(e){return a.error(e,"Failed to save bulk invoices template.")}).then(function(){o.form.$setPristine()})}}])},X1Y3:function(e,t,a){"use strict";a.r(t);a("NhxO"),a("aJ1N"),a("NhWh"),a("GPfp");t.default=angular.module("deskworks.ReservationConfirmationEmailCtrl",["ffRichtext","deskworks.notifications.service","deskworks.getAttachments.service","deskworks.attachments","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("ReservationConfirmationEmailCtrl",["$scope","$translate","dwAlerts","state","helper","getAttachments","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i,o){var f=this;r.setPageTitle(t.instant("NOTIFICATIONS.RESERVATION_CONFIRMATION.PAGE_TITLE")),f.tabs=[{id:"confirm",title:t.instant("NOTIFICATIONS.RESERVATION_CONFIRMATION.RESERVATION"),tpl:i.confirm},{id:"cancel",title:t.instant("NOTIFICATIONS.RESERVATION_CONFIRMATION.CANCELLATION"),tpl:i.cancel},{id:"repeat",title:t.instant("NOTIFICATIONS.RESERVATION_CONFIRMATION.REPEATING"),tpl:i.repeat}],f.tpl=i,f.toolbar=o,f.attachments=f.tpl.attachments||[],delete f.tpl.attachments,f.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{center-phone}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_PHONE"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{reservation-unit}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_UNIT"},{id:"{{repeat-frequency}}",_name:"NOTIFICATIONS.SH_CODES.REPEAT_FREQUENCY"},{id:"{{access-code}}",_name:"NOTIFICATIONS.SH_CODES.ACCESS_CODE"},{id:"{{reservation-start-time}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_START_TIME"},{id:"{{reservation-end-time}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_END_TIME"},{id:"{{reservation-date}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_DATE"},{id:"{{reservation-start-date}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_START_DATE"},{id:"{{reservation-end-date}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_END_DATE"}],f.save=function(){if(!l.pointFirstInvalid("#reservationConfirmationEmail"))return s.saveReservationConfirmation(f.tpl).catch(function(e){return a.error(e,"Failed to save reservation confirmation template.")}).then(function(){f.form.$setPristine()})},f.attacher=function(e){return s.attachReservationConfirmation(e)},f.detacher=function(e){return s.detachReservationConfirmation(e.id)}}])},aJ1N:function(e,t,a){"use strict";a("T7M0"),a("0rqx");angular.module("ffRichtext",["textAngular"]).directive("ffRichtext",["ffHelper",function(e){return{restrict:"E",scope:!0,compile:function(t,a){var r=angular.element("<text-angular></text-angular>");return e.copyInnerAttrs(t,a,r),t.append(r),this.link},link:function(e,t,a){var r=angular.element(t[0].querySelector("[contenteditable]"));e.$watch("ffBlock.editMode",function(e){angular.isUndefined(e)||(t.toggleClass("ff-read-only",!e),r.attr("contenteditable",e))})}}}])},"bnS/":function(e,t,a){"use strict";a.r(t);a("aJ1N");t.default=angular.module("deskworks.DeclinedCardEmailCtrl",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("DeclinedCardEmailCtrl",["$scope","$translate","dwAlerts","state","helper","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.DECLINED_CARD.PAGE_TITLE")),o.tpl=s,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{center-phone}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_PHONE"},{id:"{{amount}}",_name:"NOTIFICATIONS.SH_CODES.AMOUNT"},{id:"{{website-url}}",_name:"NOTIFICATIONS.SH_CODES.WEBSITE_URL"},{id:"{{card-number}}",_name:"NOTIFICATIONS.SH_CODES.CARD_NUMBER"}],o.save=function(){if(!l.pointFirstInvalid("#declinedCardEmail"))return n.saveDeclinedCardEmail(o.tpl).catch(function(e){return a.error(e,"Failed to save declined card email template.")}).then(function(){o.form.$setPristine()})}}])},e30G:function(e,t){e.exports='<form name=$ctrl.form id=reservationConfirmationEmail ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel ng-repeat="tab in $ctrl.tabs" class=email-template-panel> <ff-panel-header><span>{{tab.title}}</span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=tab.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=tab.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div class="ff-grid gutter-v gutter-h" style=margin-bottom:0> <div flex="{md: \'0 0 50%\'}" short-codes=$ctrl.shortCodes></div> <div flex="{md: \'0 0 50%\'}" class=ff-flex-start attachments=$ctrl.attachments attacher=$ctrl.attacher detacher=$ctrl.detacher></div> </div> </div> </form> '},el8R:function(e,t){e.exports='<form name=$ctrl.form id=renewalNoticeEmail ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div class=ff-grid> <div flex="{md: \'0 0 50%\'}" short-codes=$ctrl.shortCodes></div> </div> </div> </form> '},ggHn:function(e,t,a){var r={"./bulk-invoices/bulk-invoices.controller.js":"RJx7","./cal-sync-error-email/cal-sync-error-email.controller.js":"rSN8","./declined-card-email/declined-card-email.controller.js":"bnS/","./expired-card-email/expired-card-email.controller.js":"JvCf","./message-board-notices/message-board-notices.controller.js":"7OsI","./passes-used-up-email/passes-used-up-email.controller.js":"4IO9","./receipt-email/receipt-email.controller.js":"BarI","./recurring-invoices/recurring-invoices.controller.js":"3PPX","./renewal-notice-email/renewal-notice-email.controller.js":"z2UC","./reservation-confirmation/reservation-confirmation.controller.js":"X1Y3","./reservation-reminder/reservation-reminder.controller.js":"w7hM","./welcome-letter/welcome-letter.controller.js":"ryU+"};function l(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=n,e.exports=l,l.id="ggHn"},goU5:function(e,t){e.exports='<form name=$ctrl.form id=receiptEmailTpl ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel ng-repeat="tpl in $ctrl.tpls" class=email-template-panel> <ff-panel-header> <span translate={{tpl.$$name}}></span> </ff-panel-header> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div short-codes=$ctrl.shortCodes class=two-columns></div> </div> </form> '},lAt0:function(e,t){e.exports='<form name=$ctrl.form id=messageBoardNoticesTpl ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel style=max-width:654px ng-repeat="tpl in $ctrl.tpls"> <ff-panel-header><span translate={{tpl.$$name}}></span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=tpl.body ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div class=ff-grid> <div flex="{md: \'0 0 50%\'}" short-codes=$ctrl.shortCodes></div> </div> </div> </form> '},nGNk:function(e,t){e.exports='<form name=$ctrl.form id=declinedCardEmail ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div short-codes=$ctrl.shortCodes class=two-columns></div> </div> </form> '},p1Jl:function(e,t,a){"use strict";var r=a("mvii"),l=a("GCOZ");e.exports=function(e){var t=String(l(this)),a="",n=r(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(a+=t);return a}},r7xs:function(e,t){e.exports='<form name=$ctrl.form id=recurringInvoicesTpl ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <ff-panel-header><span translate=NOTIFICATIONS.INVOICES.WITH_CREDIT_CARD></span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.withCreditCard.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.withCreditCard.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-panel class=email-template-panel> <ff-panel-header><span translate=NOTIFICATIONS.INVOICES.WITHOUT_CREDIT_CARD></span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.withoutCreditCard.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.withoutCreditCard.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div short-codes=$ctrl.shortCodes class=two-columns></div> </div> </form> '},rSN8:function(e,t,a){"use strict";a.r(t);a("aJ1N");t.default=angular.module("deskworks.CalSyncErrorEmailCtrl",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("CalSyncErrorEmailCtrl",["$scope","$translate","dwAlerts","state","helper","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.CALENDAR_SYNC_ERROR.PAGE_TITLE")),o.tpl=s,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{reservation-unit}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_UNIT"},{id:"{{member-company}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_COMPANY"},{id:"{{reservation-date}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_DATE"},{id:"{{reservation-note}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_NOTE"},{id:"{{reservation-start-time}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_START_TIME"},{id:"{{error}}",_name:"NOTIFICATIONS.SH_CODES.ERROR"},{id:"{{reservation-end-time}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_END_TIME"}],o.save=function(){if(!l.pointFirstInvalid("#calSyncErrorEmail"))return n.saveCalSyncErrorEmail(o.tpl).catch(function(e){return a.error(e,"Failed to save calendar sync error email template.")}).then(function(){o.form.$setPristine()})}}])},"ryU+":function(e,t,a){"use strict";a.r(t);a("aJ1N"),a("NhWh"),a("GPfp");t.default=angular.module("deskworks.WelcomeLetterCtrl",["ffRichtext","deskworks.notifications.service","deskworks.getAttachments.service","deskworks.attachments","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("WelcomeLetterCtrl",["$scope","$translate","dwAlerts","state","helper","getAttachments","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i,o){var f=this;r.setPageTitle(t.instant("NOTIFICATIONS.WELCOME_LETTER.PAGE_TITLE")),f.tpl=i,f.toolbar=o,f.attachments=f.tpl.attachments||[],delete f.tpl.attachments,f.shortCodes=[{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{company-name}}",_name:"NOTIFICATIONS.SH_CODES.COMPANY_NAME"},{id:"{{login}}",_name:"NOTIFICATIONS.SH_CODES.LOGIN"},{id:"{{password}}",_name:"NOTIFICATIONS.SH_CODES.PASSWORD"}],f.save=function(){if(!l.pointFirstInvalid("#welcomeLetter"))return s.saveWelcomeLetter(f.tpl).catch(function(e){return a.error(e,"Failed to save welcome letter template.")}).then(function(){f.form.$setPristine()})},f.attacher=function(e){return s.attachWelcomeLetter(e)},f.detacher=function(e){return s.detachWelcomeLetter(e.id)}}])},w7hM:function(e,t,a){"use strict";a.r(t);a("aJ1N"),a("NhWh"),a("GPfp");t.default=angular.module("deskworks.ReservationReminderEmailCtrl",["ffRichtext","deskworks.notifications.service","deskworks.getAttachments.service","deskworks.attachments","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("ReservationReminderEmailCtrl",["$scope","$translate","dwAlerts","state","helper","getAttachments","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i,o){var f=this;r.setPageTitle(t.instant("NOTIFICATIONS.RESERVATION_REMINDER.PAGE_TITLE")),f.tpl=i,f.toolbar=o,f.attachments=f.tpl.attachments||[],delete f.tpl.attachments,f.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"},{id:"{{reservation-unit}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_UNIT"},{id:"{{reservation-date}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_DATE"},{id:"{{reservation-start-time}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_START_TIME"},{id:"{{reservation-end-time}}",_name:"NOTIFICATIONS.SH_CODES.RESERVATION_END_TIME"},{id:"{{access-code}}",_name:"NOTIFICATIONS.SH_CODES.ACCESS_CODE"}],f.save=function(){if(!l.pointFirstInvalid("#reservationReminderEmail"))return s.saveReservationReminder(f.tpl).catch(function(e){return a.error(e,"Failed to save reservation reminder template.")}).then(function(){f.form.$setPristine()})},f.attacher=function(e){return s.attachReservationReminder(e)},f.detacher=function(e){return s.detachReservationReminder(e.id)}}])},xkgW:function(e,t){e.exports='<form name=$ctrl.form id=reservationReminderEmail ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel class=email-template-panel> <label class=ff-row> <ff-label flex="0 0 70px"><req translate=NOTIFICATIONS.SUBJECT></req></ff-label> <ff-text ff-model=$ctrl.tpl.subject ff-required=true ff-validate-alert="{{\'NOTIFICATIONS.SUBJECT\' | translate}}"></ff-text> </label> <ff-row> <ff-richtext ff-model=$ctrl.tpl.content ta-toolbar={{$ctrl.toolbar}} class=ta-email></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> <div class="ff-grid gutter-v gutter-h" style=margin-bottom:0> <div flex="{md: \'0 0 50%\'}" short-codes=$ctrl.shortCodes></div> <div flex="{md: \'0 0 50%\'}" class=ff-flex-start attachments=$ctrl.attachments attacher=$ctrl.attacher detacher=$ctrl.detacher></div> </div> </div> </form> '},z2UC:function(e,t,a){"use strict";a.r(t);a("aJ1N");t.default=angular.module("deskworks.RenewalNoticeEmailCtrl",["ffRichtext","deskworks.notifications.service","deskworks.taToolbarEmail","deskworks.shortCodes"]).controller("RenewalNoticeEmailCtrl",["$scope","$translate","dwAlerts","state","helper","Notifications","tpl","taToolbarEmail",function(e,t,a,r,l,n,s,i){var o=this;r.setPageTitle(t.instant("NOTIFICATIONS.RENEWAL_NOTICE.PAGE_TITLE")),o.tpl=s,o.toolbar=i,o.shortCodes=[{id:"{{center-name}}",_name:"NOTIFICATIONS.SH_CODES.CENTER_NAME"},{id:"{{member-name}}",_name:"NOTIFICATIONS.SH_CODES.MEMBER_NAME"}],o.save=function(){if(!l.pointFirstInvalid("#renewalNoticeEmail"))return n.saveEmailTemplate("renewal-notice",o.tpl).catch(function(e){return a.error(e,"Failed to save renewal notice email template.")}).then(function(){o.form.$setPristine()})}}])},z6HB:function(e,t,a){}}]);