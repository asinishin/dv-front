(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"5+k5":function(e,t,r){"use strict";r.r(t);var n=r("yCd9"),o=r.n(n),a=(r("3dw1"),r("Muwe"),r("y89P"),r("29E8")),l=r("IE1r"),s=r("UDUI"),i=r("5bca"),c=r("5/DJ"),d=r("81mT"),f=r("Xjih");t.default=angular.module("deskworks.reports.ReportBuilder",[a.a.name,l.a.name,s.a.name,i.a.name,c.a.name,d.a.name,f.a.name,"deskworks.center.service"]).factory("ReportBuilder",["$rootScope","$q","$timeout","$window","$filter","$http","state","logo","jsPDF","csvMake","centerService","reportStyles","reportHeader","reportFooter","reportSort",function(e,t,r,n,a,l,s,i,c,d,f,u,p,m,g){return function(r){var n=this;e.$watch((function(){return r.reportOptions.centerId}),(function(e,t){e!==t&&(r.reportData=null,r.center=null)})),n.resolve=function(){return t.all({reportData:r.reportData||r.getReportData().catch((function(t){return e.showError(t,"Failed to load report data.")})),center:r.center||f.get(+r.reportOptions.centerId||s.getCurrentCenterId()).catch((function(t){return e.showError(t,"Failed to load center data.")})),logo:r.logo||i.getSiteLogo()}).then((function(e){return r.reportData=e.reportData,r.center=e.center,r.logo=e.logo,r}))},n.buildPdf=function(e,t){return n.generatePdf(e,t).then((function(e){return e.output("blob")}))},n.generatePdf=function(e,t,a){return n.resolve().then((function(n){var l,s=a||new c(r.reportOptions.paperLayout,"pt",r.reportOptions.paperSize),i=e(r);i.rows.forEach((function(e){i.columns.forEach((function(t,r){e[r]&&!angular.isUndefined(e[r].content)||(e[r]={content:e[r]});var n=e[r];!1===n.content?n.content="":(t.pdf&&(n.content=t.pdf(n.content)),n.content=angular.isUndefined(n.content)||null===n.content||""===n.content?"-":n.content)}))}));var d={columns:o()(l=i.columns).call(l,(function(e){return e.title.toUpperCase()})),body:i.rows,headStyles:(t||u).headStyles,bodyStyles:(t||u).bodyStyles,columnStyles:(t||u).columnStyles,tableMargin:t&&t.tableMargin||(t||u).pageMargins,startY:r.startY||(t||u).startY||!1,didParseCell:function(e){var t=e.row,r=e.cell,n=e.column;if("body"===e.section){angular.extend(r.styles,{minCellWidth:50,fillColor:!1},i.styles[t.index],i.columns[n.index].styles)}else angular.extend(r.styles,i.columns[n.index].styles)},didDrawCell:function(e){return function(e,t){var r=e.cell,n=e.doc;return 0===e.column.index&&r.styles.borderColor&&r.styles.borderWidth&&(n.setLineWidth(r.styles.borderWidth),n.setDrawColor(r.styles.borderColor[0],r.styles.borderColor[1],r.styles.borderColor[2]),n.rect(e.settings.margin.left+r.styles.borderWidth/2,r.y+r.styles.borderWidth/2,e.table.getWidth(n.internal.pageSize.width)-r.styles.borderWidth,e.row.height-2*r.styles.borderWidth,"S")),!1}(e,i.columns)},didDrawPage:function(e){(r.reportHeader||p)(e.table,s,r),(r.reportFooter||m)(e.table,s,r)}};return d.margin=d.tableMargin||(t||u).pageMargins,s.autoTable(d),s}))},n.buildCsv=function(e){var t,n={charset:"utf-8"},a=e(r);return a.rows.forEach((function(e){a.columns.forEach((function(t,r){e[r]&&angular.isDefined(e[r].content)&&(e[r]=e[r].content),t.csv&&(e[r]=t.csv(e[r])),e[r]=angular.isUndefined(e[r])||null===e[r]||!1===e[r]||""===e[r]?"":e[r]}))})),a.rows.unshift(o()(t=a.columns).call(t,(function(e){return e.title.toUpperCase()}))),new Blob([d.generate(a.rows,n)],{type:"text/csv;charset="+n.charset+";"})},n.getReportFileName=function(e,t){var n=!1===r.reportOptions.centerId||+r.reportOptions.centerId?r.center.shortName:"all-centers",o=r.reportName;return n=(n||"").toLowerCase().replace(/\s+/g,"-"),o=(o||"").toLowerCase().replace(/\s+/g,"-"),e=(e||"pdf").toLowerCase(),o+"-"+n+"-"+a("date")(moment(),"yyyyMMdd-HHmmss")+(t||"")+"."+e},n.sortData=g}}])},"5ual":function(e,t,r){"use strict";r.r(t);var n=r("yCd9"),o=r.n(n),a=r("KK/u"),l=r.n(a),s=r("6RpP"),i=r.n(s),c=r("WgSX"),d=r("G6E5"),f=r("5/DJ"),u=r("LTMe");t.default=angular.module("deskworks.WriteOffReportCtrl",[c.a.name,d.a.name,f.a.name,u.a.name,"deskworks.state","deskworks.reports.ReportBuilder","deskworks.reports.reportDates","deskworks.WriteOffReport","deskworks.writeOffReportColumns","deskworks.reportOrderBy"]).controller("WriteOffReportCtrl",["$scope","$timeout","$translate","$filter","$location","helper","state","reportHelper","reportStyles","ReportBuilder","WriteOffReport","writeOffReportColumns",function(e,t,r,n,a,s,c,d,f,u,p,m){var g,h=this;function y(e){var t,n,a,c={columns:e.reportColumns,rows:[],styles:[]},u=0;return c.rows=o()(t=l()(d).call(d,e.reportData,e.orderBy)).call(t,(function(e,t){var r;return c.styles.push(t%2?null:f.rowOdd),u+=e.amount,o()(r=c.columns).call(r,(function(t){return e[t.dataKey]}))})),c.rows.push(i()(n=o()(a=Array.apply(null,Array(c.columns.length-2))).call(a,Boolean.prototype.valueOf,!1)).call(n,[r.instant("REPORTS.TOTAL")+":",s.round(u)])),c.styles.push(f.h3),c}h.config={reportName:r.instant("WRITE_OFF_REPORT.REPORT_NAME"),reportOptions:{},reportColumns:m,reportDates:{fromDate:moment().date(1),toDate:moment()},getReportData:function(){return p.query({centerId:h.config.reportOptions.centerId||null,fromDate:n("date")(h.config.reportDates.fromDate,"yyyy-MM-dd"),toDate:n("date")(h.config.reportDates.toDate,"yyyy-MM-dd")})}},c.setPageTitle(h.config.reportName),h.reportBuilder=new u(h.config),e.$watch((function(){return{reportOptions:h.config.reportOptions,reportDates:h.config.reportDates,orderBy:h.config.orderBy,orderSort:h.config.orderSort}}),(function(e,r){g&&(t.cancel(g),g=null),g=t((function(){if(h.pdf=null,!angular.isUndefined(h.config.reportOptions.centerId)&&h.config.reportDates.fromDate&&h.config.reportDates.toDate){var t=e.reportDates.fromDate,n=r.reportDates.fromDate;!moment.isMoment(t)||moment.isMoment(n)&&t.isSame(n)||(h.config.reportData=null),t=e.reportDates.toDate,n=r.reportDates.toDate,!moment.isMoment(t)||moment.isMoment(n)&&t.isSame(n)||(h.config.reportData=null),h.reportBuilder.buildPdf(y).then((function(e){h.pdf=e}))}}),100)}),!0),h.downloadPdf=function(){h.pdf&&d.download({blob:h.pdf,fileName:h.reportBuilder.getReportFileName("pdf")})},h.downloadCsv=function(){h.pdf&&d.download({blob:h.reportBuilder.buildCsv(y),fileName:h.reportBuilder.getReportFileName("csv")})}}])},"8Xq/":function(e,t,r){"use strict";r("3dw1");t.a=angular.module("deskworks.reports.optsReportByPeriod",[]).factory("optsReportByPeriod",["$rootScope","$translate","$filter",function(e,t,r){var n=r("date"),o=[{id:"week",_name:"REPORTS.BY_PERIOD.WEEK",format:function(e,t){return n(e,"MMM d")+" - "+n(t,"MMM d")}},{id:"month",_name:"REPORTS.BY_PERIOD.MONTH",format:function(e,t){return n(e,"MMM")}},{id:"quarter",_name:"REPORTS.BY_PERIOD.QUARTER",format:function(e,t){return n(e,"MMM")+" - "+n(t,"MMM")}},{id:"year",_name:"REPORTS.BY_PERIOD.YEAR",format:function(e,t){return n(e,"yyyy")}}];function a(){o.forEach((function(e){e.name=t.instant(e._name)}))}return a(),e.$on("$setTranslationsSuccess",a),o}])},"92Gs":function(e,t,r){"use strict";r.r(t);var n=r("29E8");t.default=angular.module("deskworks.reportGroupBy",[n.a.name]).factory("reportGroupBy",["reportSort",function(e){return function(t,r){return e(t,r).reduce((function(e,t){var n=e[e.length-1]||[],o=n[0]||{};return o[r]===t[r]||moment.isMoment(o[r])&&moment.isMoment(t[r])&&o[r].isSame(t[r],"day")||(n=[],e.push(n)),n.push(t),e}),[])}}])},CLLE:function(e,t,r){"use strict";r("3dw1");var n=r("03wM"),o=r.n(n),a=r("Ekwr"),l=r.n(a),s=r("hsT8"),i=r.n(s),c=r("lvz6"),d=r.n(c),f=r("yKah"),u=r.n(f),p=r("fzuT"),m=r.n(p),g=r("yCd9"),h=r.n(g),y=r("ipr/"),b=r.n(y),v=(r("S2gh"),r("bG+q"),r("pl6f")),w=r("aGVL"),R=r("bU+R"),C=r.n(R);function O(e,t){var r=o()(e);if(l.a){var n=l()(e);t&&(n=i()(n).call(n,(function(t){return d()(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):u.a?Object.defineProperties(e,u()(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,d()(r,t))}))}return e}t.a=angular.module("chartDirective",["deskworks.helper",v.a.name,w.a.name]).directive("chart",["$window","systemColors",function(e,t){return e.Chart.defaults.global.legend.labels.boxWidth=12,e.Chart.defaults.global.tooltips.cornerRadius=3,e.Chart.defaults.global.tooltips.displayColors=!1,e.Chart.defaults.global.tooltips.backgroundColor="rgba(0,0,0,0.65)",e.Chart.defaults.global.elements.rectangle.borderWidth=1,e.Chart.defaults.global.elements.rectangle.backgroundColor=t.primary,e.Chart.defaults.global.elements.arc.borderWidth=1,e.Chart.plugins.unregister(C.a),{restrict:"E",scope:!0,controller:"ChartCtrl as $ctrl",bindToController:{type:"@chartType",labels:"<chartLabels",data:"<chartData",options:"<chartOptions",config:"<"},template:"<canvas></canvas>"}}]).controller("ChartCtrl",["$scope","$element","$window","chartColors",function(e,t,r,n){var o,a=this,l={maintainAspectRatio:!1},s={backgroundColor:n,hoverBorderWidth:2,hoverBorderColor:"#fff"};a.$onDestroy=function(){o&&o.destroy()},a.$onChanges=function(e){var n;if(a.config){var i;o&&o.destroy();var c=$({},a.config);return c.options=$($({},c.options),l),c.data=$({},c.data),c.data.datasets=h()(i=c.data.datasets).call(i,(function(e){return $($({},s),e)})),void(o=new r.Chart(t.children(),c))}if(a.options){var d={labels:a.labels,datasets:b()(n=a.data).call(n)};d.datasets[0]=angular.extend({},s,d.datasets[0]),!o||e.type&&e.type.currentValue!==e.type.previousValue?(o&&o.destroy(),o=new r.Chart(t.children(),{type:a.type,data:d,options:angular.extend({},l,a.options)})):(angular.extend(o.data,d),angular.extend(o.options,l,a.options),o.update())}}}])},Kh2r:function(e,t,r){},Krgv:function(e,t){e.exports='<ff-panel> <ff-panel-header><span translate="REPORTS.OPTIONS.HEADER"></span></ff-panel-header> <label class="ff-row" ng-if="$ctrl.banks"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.BANK"></span></ff-label> <ff-select ff-model="$ctrl.model.bankId" ff-options="bank.id as bank.name for bank in $ctrl.banks"></ff-select> </label> <label class="ff-row" ng-if="$ctrl.model.centerId !== false && !$ctrl.noCenters && !$ctrl.centers" ng-show="state.getUserCenters().length > 1"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.CENTER"></span></ff-label> <dw-select-center ff-model="$ctrl.model.centerId" ff-option-all="{{$ctrl.allCenters !== false}}"></dw-select-center> </label> <label class="ff-row" ng-if="$ctrl.model.centerId !== false && !$ctrl.noCenters && $ctrl.centers" ng-show="state.getUserCenters().length > 1"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.CENTER"></span></ff-label> <ff-select ff-model="$ctrl.model.centerId" ff-options="center.id as center.name for center in $ctrl.centers"></ff-select> </label> <label class="ff-row"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.SIZE"></span></ff-label> <ff-select ff-model="$ctrl.model.paperSize"> <option ng-repeat="size in $ctrl.optsPaperSize" value="{{size.id}}">{{size.name}}</option> </ff-select> </label> <ff-row> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.LAYOUT"></span></ff-label> <ff-static> <div class="ff-grid gutter-h-half" role="radiogroup" aria-label="{{\'REPORTS.OPTIONS.LAYOUT\' | translate}}"> <label flex="0 0 auto"> <ff-radio name="paperLayout" ff-model="$ctrl.model.paperLayout" ff-value="\'p\'"> <span translate="REPORTS.OPTIONS.LAYOUT.PORTRAIT"></span> </ff-radio> </label> <label flex="0 0 auto"> <ff-radio name="paperLayout" ff-model="$ctrl.model.paperLayout" ff-value="\'l\'"> <span translate="REPORTS.OPTIONS.LAYOUT.LANDSCAPE"></span> </ff-radio> </label> </div> </ff-static> </ff-row> </ff-panel> '},LTMe:function(e,t,r){"use strict";var n=r("nbuU"),o=r.n(n),a=(r("Muwe"),r("X5mX"),r("y89P"),r("9HME")),l=angular.module("deskworks.reports.optsPaperSize",[]).factory("optsPaperSize",(function(){return[{id:"letter",name:"Letter"},{id:"A4",name:"A4"},{id:"A3",name:"A3"},{id:"A2",name:"A2"},{id:"A1",name:"A1"},{id:"A0",name:"A0"}]})),s=r("Krgv"),i=r.n(s);t.a=angular.module("deskworks.reportOptions",["deskworks.helper",l.name,a.a.name]).directive("reportOptions",["$compile",function(e){return{restrict:"EAC",scope:!0,transclude:"element",priority:2,controller:"ReportOptionsCtrl as $ctrl",bindToController:{model:"<",centers:"<",allCenters:"<",banks:"<",noCenters:"<"},link:function(t,r,n,o,a){a((function(n,o){var a=e(i.a)(t);angular.element(a[0].querySelector?a[0].querySelector(".ff-panel-body"):a).append(n),r.after(a)}))}}}]).controller("ReportOptionsCtrl",["$scope","$location","state","helper","optsPaperSize",function(e,t,r,n,a){var l=this;l.optsPaperSize=a,l.$onInit=function(){!1===l.model.centerId||l.noCenters||(e.$watch((function(){return t.search().centerId}),(function(e){l.model.centerId=e||0===e?+e:r.getCurrentCenterId()})),e.$watch("$ctrl.model.centerId",(function(r){r&&e.vm&&e.vm.config&&e.vm.config.reportOwnerRegion&&(e.vm.config.reportOwnerRegion.ownerId=e.vm.config.reportOwnerRegion.regionId=void 0),t.search("centerId",r).replace()}))),l.banks&&(e.$watch((function(){return t.search().bankId}),(function(e){l.model.bankId=e||0===e?+e:l.banks&&l.banks[0]&&l.banks[0].id})),e.$watch("$ctrl.model.bankId",(function(e){t.search("bankId",e).replace()}))),e.$watch((function(){return t.search().paperSize}),(function(e){var t;l.model.paperSize=(o()(t=l.optsPaperSize).call(t,(function(t){return t.id===e}))||l.optsPaperSize[0]).id})),e.$watch("$ctrl.model.paperSize",(function(e){t.search("paperSize",e).replace()})),e.$watch((function(){return t.search().paperLayout}),(function(e){l.model.paperLayout=e||l.model.paperLayout||"l"})),e.$watch("$ctrl.model.paperLayout",(function(e){t.search("paperLayout",e).replace()}))}}])},Tqzu:function(e,t,r){"use strict";r("Muwe"),r("X5mX"),r("y89P");var n=r("8Xq/");t.a=angular.module("deskworks.reportByPeriodDirective",["deskworks.helper",n.a.name]).directive("reportByPeriod",["$compile","$templateCache",function(e,t){return{restrict:"EAC",scope:!0,transclude:"element",priority:2,controller:"ReportByPeriodCtrl as $ctrl",bindToController:{model:"=",opts:"<"},link:function(r,n,o,a,l){l((function(o,a){var l=e(t.get("directives/report-by-period.tpl.html"))(r);angular.element(l[0]&&l[0].querySelector?l[0].querySelector(".ff-panel-body"):l).append(o),n.after(l)}))}}}]).controller("ReportByPeriodCtrl",["$scope","$location","$filter","$translate","state","helper","optsReportByPeriod",function(e,t,r,n,o,a,l){var s=this;s.$onInit=function(){s.optsPeriod=s.opts||l,e.$watch((function(){return t.search().byPeriod}),(function(e){s.model=e||s.model||s.optsPeriod[0].id})),e.$watch("$ctrl.model",(function(e){t.search("byPeriod",e).replace()}))}}])},Vl1O:function(e,t,r){"use strict";t.a=angular.module("deskworks.IncomeByItemReport",["ngResource","datesDeserializer","deskworks.config"]).factory("IncomeByItemReport",["$resource","$filter","datesDeserializer","deskworksConfig",function(e,t,r,n){var o=r(["productCategories.products.date"]),a=e(n.getApiAbsUrl("/centers/:centerId/income-by-item-reports"),{centerId:"@centerId",fromDate:"@fromDate",toDate:"@toDate"},{query:{method:"GET",isArray:!0,transformResponse:[angular.fromJson,o]}});return{query:function(e){return a.query({centerId:e.centerId||0,fromDate:t("date")(e.fromDate,"yyyy-MM-dd"),toDate:t("date")(e.toDate,"yyyy-MM-dd")}).$promise}}}])},WgSX:function(e,t,r){"use strict";r("Kh2r");t.a=angular.module("pdfPreview",["deskworks.helper"]).directive("pdfPreview",["$window","helper",function(e,t){return{restrict:"A",scope:!0,template:'<iframe ng-hide="ie" title="{{\'REPORTS.PREVIEW.HEADER\' | translate}}"></iframe><ff-info class="text-danger" ng-if="ie"><ff-icon sense="warning"></ff-icon> Microsoft Edge & Internet Explorer don\'t support live PDF preview. You can download the PDF or use another browser to have live preview, e.g. Chrome/Firefox/Opera/Safari.</ff-info>',compile:function(r,n){var o=r.parent().parent();return t.isMobile()&&o.hasClass("flex-form")?(r.parent().parent().css("display","none"),function(){}):t.isIE()?function(e,t,r){e.ie=!0}:(r.addClass("pdf-preview"),function(t,r,n){var o,a=r.children(),l=angular.element('<div class="ff-dimmer ff-spin"></div>');l.on("click",(function(e){e.stopPropagation()})),a.on("load",(function(){angular.element(l).remove(),r.removeClass("ff-dim")})),t.$watch(n.pdfPreview,(function(t){r.append(l),r.addClass("ff-dim"),o&&(e.URL.revokeObjectURL(o),o=null),t&&(o=e.URL.createObjectURL(t),a[0].src=o)})),t.$on("$destroy",(function(){o&&(e.URL.revokeObjectURL(o),o=null)}))})}}}])},aGVL:function(e,t,r){"use strict";t.a=angular.module("chartColors",[]).factory("chartColors",(function(){return["#317da3","#e6194b","#3cb44b","#ffe119","#f58231","#911eb4","#aa6e28","#008080","#808080","#800000","#3244a1","#e64c19","#3db372","#d1ff1a","#f5c131","#b31e81","#a89728","#005580","#806659","#804000"]}))},aHVT:function(e,t){e.exports='<div id="writeOffReport" class="gutter-v"> <form name="formWriteOffReport"> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div class="ff-grid gutter-v gutter-h"> <div flex="{lg: \'0 0 61%\', md: \'0 0 50%\'}"> <report-dates model="$ctrl.config.reportDates"></report-dates> </div> <div flex="{lg: \'0 0 39%\', md: \'0 0 50%\'}"> <report-options model="$ctrl.config.reportOptions"> <report-order-by model="$ctrl.config.orderBy" report-columns="$ctrl.config.reportColumns"></report-order-by> </report-options> </div> </div> <ff-btn-group class="buttons-bottom"> <ff-btn sense="download" ff-click="$ctrl.downloadPdf()" ff-disabled="!$ctrl.pdf"> <span translate="REPORTS.BTN_PDF"></span> </ff-btn> <ff-btn sense="download" ff-click="$ctrl.downloadCsv()" ff-disabled="!$ctrl.pdf"> <span translate="REPORTS.BTN_CSV"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate="REPORTS.PREVIEW.HEADER"></span></ff-panel-header> <div pdf-preview="$ctrl.pdf"></div> </ff-panel> </div> '},"bG+q":function(e,t,r){},fKuI:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.WriteOffReport",["ngResource","datesDeserializer","deserializeNumbers","deskworks.config"]).factory("WriteOffReport",["$resource","datesDeserializer","deserializeNumbers","deskworksConfig",function(e,t,r,n){var o=t(["date"]),a=r(["amount"]),l=e(n.getApiAbsUrl("/write-off-report"),{centerId:"@centerId",fromDate:"@fromDate",toDate:"@toDate"},{query:{method:"GET",isArray:!0,transformResponse:[angular.fromJson,o,a]}});return{query:function(e){return l.query(e).$promise}}}])},h0ZB:function(e,t,r){"use strict";r.r(t);r("3dw1");t.default=angular.module("deskworks.writeOffReportColumns",[]).factory("writeOffReportColumns",["$rootScope","$filter","$translate",function(e,t,r){var n=[{dataKey:"userCompany",_title:"WRITE_OFF_REPORT.COLUMNS.COMPANY"},{dataKey:"userName",_title:"WRITE_OFF_REPORT.COLUMNS.NAME",defaultOrder:!0},{dataKey:"orderId",_title:"WRITE_OFF_REPORT.COLUMNS.ORDER_ID",styles:{halign:"right"}},{dataKey:"date",_title:"WRITE_OFF_REPORT.COLUMNS.DATE",styles:{halign:"right"},pdf:function(e){return t("date")(e,"mediumDate")},csv:function(e){return t("date")(e,"shortDate")}},{dataKey:"amount",_title:"WRITE_OFF_REPORT.COLUMNS.AMOUNT",styles:{halign:"right"},pdf:function(e){return t("ncurrency")(e)},csv:function(e){return t("ncurrency")(e)}}];function o(){n.forEach((function(e){e.title=r.instant(e._title)}))}return o(),e.$on("$setTranslationsSuccess",o),n}])},pl6f:function(e,t,r){"use strict";t.a=angular.module("systemColors",["deskworks.helper"]).factory("systemColors",["$window","helper",function(e,t){var r={},n=angular.element('<div style="display: none"></div>');return n.append('<div class="text-text"></div>'),n.append('<div class="text-brand"></div>'),n.append('<div class="text-brand"></div>'),n.append('<div class="text-danger"></div>'),n.append("<div></div>"),n.append('<div class="sidebar-group-header"></div>'),document.body.appendChild(n[0]),r.text=t.rgb2hex(e.getComputedStyle(n.children()[0]).getPropertyValue("color"))||"#444",r.info=t.rgb2hex(e.getComputedStyle(n.children()[4]).getPropertyValue("color"))||"#4d4e4c",r.primary=t.rgb2hex(e.getComputedStyle(n.children()[5]).getPropertyValue("background-color"))||"#949594",r.warning=t.rgb2hex(e.getComputedStyle(n.children()[3]).getPropertyValue("color"))||"#ff9b00",n.remove(),r}])},zvMh:function(e,t,r){"use strict";r.r(t);r("JBxO"),r("kPpV"),r("/usm"),r("HJh7"),r("BqNe"),r("HKDy"),r("OgzJ"),r("lCat"),r("EApN"),r("MFGm"),r("lZgT"),r("JzGb"),r("WH+p"),r("xg3p"),r("soU3"),r("ajWl"),r("s5En"),r("EjQN"),r("36lJ"),r("fD/E"),r("LWud"),r("AxL9"),r("HztR"),r("xmYR"),r("cF0Y"),r("8cZI");t.default=angular.module("b64",[]).factory("b64",["$window",function(e){var t=[],r=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array;return function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=0,o=e.length;n<o;++n)t[n]=e[n],r[e.charCodeAt(n)]=n;r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63}(),{toByteArray:function(e){var t,o,a,l,s,i,c=e.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");s="="===e[c-2]?2:"="===e[c-1]?1:0,i=new n(3*c/4-s),a=s>0?c-4:c;var d=0;for(t=0,o=0;t<a;t+=4,o+=3)l=r[e.charCodeAt(t)]<<18|r[e.charCodeAt(t+1)]<<12|r[e.charCodeAt(t+2)]<<6|r[e.charCodeAt(t+3)],i[d++]=l>>16&255,i[d++]=l>>8&255,i[d++]=255&l;2===s?(l=r[e.charCodeAt(t)]<<2|r[e.charCodeAt(t+1)]>>4,i[d++]=255&l):1===s&&(l=r[e.charCodeAt(t)]<<10|r[e.charCodeAt(t+1)]<<4|r[e.charCodeAt(t+2)]>>2,i[d++]=l>>8&255,i[d++]=255&l);return i},fromByteArray:function(e){for(var r,n=e.length,a=n%3,l="",s=[],i=0,c=n-a;i<c;i+=16383)s.push(o(e,i,i+16383>c?c:i+16383));1===a?(r=e[n-1],l+=t[r>>2],l+=t[r<<4&63],l+="=="):2===a&&(r=(e[n-2]<<8)+e[n-1],l+=t[r>>10],l+=t[r>>4&63],l+=t[r<<2&63],l+="=");return s.push(l),s.join("")}};function o(e,r,n){for(var o,a,l=[],s=r;s<n;s+=3)o=(e[s]<<16)+(e[s+1]<<8)+e[s+2],l.push(t[(a=o)>>18&63]+t[a>>12&63]+t[a>>6&63]+t[63&a]);return l.join("")}}])}}]);