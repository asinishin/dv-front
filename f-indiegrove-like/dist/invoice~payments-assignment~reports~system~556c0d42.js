(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"29E8":function(e,t,n){"use strict";var r=n("yCd9"),o=n.n(r),a=n("6RpP"),i=n.n(a);t.a=angular.module("deskworks.reportSort",[]).factory("reportSort",["$filter",function(e){return function(t,n,r){return angular.isArray(n)||(n=[n]),n=o()(n).call(n,(function(e){var t,n;return i()(t=i()(n="".concat(e," || ")).call(n,e," === 0 ? ")).call(t,e,' : "~~~"')})),e("orderBy")(t,n,r)}}])},"5/DJ":function(e,t,n){"use strict";t.a=angular.module("deskworks.reports.reportStyles",["deskworks.helper"]).factory("reportStyles",["helper",function(e){return{pageMargins:[60,25,50,25],headStyles:{fontSize:9,fontStyle:"normal",valign:"middle",fillColor:e.hex2rgbArr("#444444"),textColor:255,textTransform:"uppercase"},bodyStyles:{overflow:"linebreak",textColor:0},header:{textColor:"#949594"},footer:{textColor:"#949594"},rowOdd:{fillColor:[245,245,245]},h1:{fontStyle:"bold",fillColor:e.hex2rgbArr("#949594"),textColor:[255,255,255]},h2:{fontStyle:"bold",textColor:e.hex2rgbArr("#444444"),borderWidth:1,borderColor:e.hex2rgbArr("#444444")},h3:{fontStyle:"bold"}}}])},"5bca":function(e,t,n){"use strict";t.a=angular.module("deskworks.logo",[]).factory("logo",["$window","$http","$q","deskworksConfig",function(e,t,n,r){var o,a;return{getSiteLogo:function(){return o=o||n((function(e){var t=new Image;t.crossOrigin="anonymous",t.src=r.getApiAbsUrl("/white-label/images/logo-print.png"),t.onerror=function(){console.warn("Report failed to load site logo."),e(null),t=null},t.onload=function(){e(t),t=null}})).then(i)},getSiteLogoInv:function(){return a=a||n((function(e){var t=document.querySelector(".sidebar-logo a img");t||console.warn("Report failed to load site logo."),e(t)})).then(i)},resetSiteLogo:function(){o=null},resetSiteLogoInv:function(){a=null}};function i(e){if(!e)return null;var t=e.width/480,n=e.height/171,r=t>n?t:n,o=Math.round(e.width/r),a=Math.round(e.height/r),i=document.createElement("canvas");document.body.appendChild(i),i.width=o,i.height=a,i.getContext("2d").drawImage(e,0,0,o,a);var s=i.toDataURL("image/png");return document.body.removeChild(i),{width:o,height:a,data:s}}}])},"81mT":function(e,t,n){"use strict";n("8cZI");var r=n("nbuU"),o=n.n(r),a=n("5/DJ");t.a=angular.module("deskworks.reports.reportHeader",[a.a.name]).factory("reportHeader",["$filter","$translate","reportStyles",function(e,t,n){return function(){return 3===arguments.length?a.apply(void 0,arguments):r.apply(void 0,arguments)};function r(r){var a,i,s,l,c=r.config,d=r.doc,u=r.data,f=r.resources,p=o()(a=f.centers).call(a,(function(e){return e.id===+c.centerId})),g=d.internal.pageSize.width;d.setFont(d.getFont().fontName,"normal"),d.setTextColor(n.header.textColor),s=n.pageMargins[3],l=40,d.setFontSize(14),i=c.reportName.toUpperCase(),d.text(i,s,l),s+=d.getTextWidth(i)+3,(c.fromDate||c.toDate)&&(d.setFontSize(7),i=t.instant("REPORTS.HEADER.FOR_PERIOD").toUpperCase(),c.fromDate&&(i+=" "+t.instant("REPORTS.HEADER.FROM").toUpperCase()+":"),d.text(i,s,l),s+=d.getTextWidth(i)+3,c.fromDate&&(d.setFontSize(9),i=e("date")(c.fromDate,"mediumDate")||"",d.text(i,s,l),s+=d.getTextWidth(i)+3),d.setFontSize(7),i=t.instant("REPORTS.HEADER.THROUGH").toUpperCase()+":",d.text(i,s,l),s+=d.getTextWidth(i)+3,d.setFontSize(9),i=e("date")(c.toDate,"mediumDate")||"",d.text(i,s,l),s+=d.getTextWidth(i)+3),s=g-n.pageMargins[1],d.setFontSize(9),i=""+u.pageCount,s-=d.getTextWidth(i),d.text(i,s,l),d.setFontSize(7),i=t.instant("REPORTS.HEADER.PAGE").toUpperCase()+":",s-=d.getTextWidth(i+" "),d.text(i,s,l-.6),s=n.pageMargins[3],l+=11,d.setFontSize(7),i=t.instant("REPORTS.HEADER.REPORT_FOR").toUpperCase()+":",d.text(i,s,l-.6),s+=d.getTextWidth(i+" "),d.setFontSize(9),i=c.reportFor||(p?[p.name,p.city,p.state].join(", "):"All Centers"),d.text(i,s,l),s+=d.getTextWidth(i+" "),s=g-n.pageMargins[1],d.setFontSize(9),i=e("date")(moment(),"mediumDate"),s-=d.getTextWidth(i),d.text(i,s,l),d.setFontSize(7),i=t.instant("REPORTS.HEADER.REPORT_DATE").toUpperCase()+":",s-=d.getTextWidth(i+" "),d.text(i,s,l-.6)}function a(r,o,a){var i,s,l,c=o.internal.pageSize.width;o.setFont(o.getFont().fontName,"normal"),o.setTextColor(n.header.textColor),s=n.pageMargins[3],l=40,o.setFontSize(14),i=a.reportName.toUpperCase(),o.text(i,s,l),s+=o.getTextWidth(i)+3,a.reportDates&&(o.setFontSize(7),i=t.instant("REPORTS.HEADER.FOR_PERIOD").toUpperCase(),a.reportDates.fromDate&&(i+=" "+t.instant("REPORTS.HEADER.FROM").toUpperCase()+":"),o.text(i,s,l),s+=o.getTextWidth(i)+3,a.reportDates.fromDate&&(o.setFontSize(9),i=e("date")(a.reportDates.fromDate,"mediumDate")||"",o.text(i,s,l),s+=o.getTextWidth(i)+3),o.setFontSize(7),i=t.instant("REPORTS.HEADER.THROUGH").toUpperCase()+":",o.text(i,s,l),s+=o.getTextWidth(i)+3,o.setFontSize(9),i=e("date")(a.reportDates.toDate,"mediumDate")||"",o.text(i,s,l),s+=o.getTextWidth(i)+3),s=c-n.pageMargins[1],o.setFontSize(9),i=""+r.pageCount,s-=o.getTextWidth(i),o.text(i,s,l),o.setFontSize(7),i=t.instant("REPORTS.HEADER.PAGE").toUpperCase()+":",s-=o.getTextWidth(i+" "),o.text(i,s,l-.6),s=n.pageMargins[3],l+=11,o.setFontSize(7),i=t.instant("REPORTS.HEADER.REPORT_FOR").toUpperCase()+":",o.text(i,s,l-.6),s+=o.getTextWidth(i+" "),o.setFontSize(9),i=a.reportFor||(!1===a.reportOptions.centerId||+a.reportOptions.centerId)&&[a.center.name,a.center.city,a.center.state.name].join(", ")||"All Centers",o.text(i,s,l),s+=o.getTextWidth(i+" "),s=c-n.pageMargins[1],o.setFontSize(9),i=e("date")(moment(),"mediumDate"),s-=o.getTextWidth(i),o.text(i,s,l),o.setFontSize(7),i=t.instant("REPORTS.HEADER.REPORT_DATE").toUpperCase()+":",s-=o.getTextWidth(i+" "),o.text(i,s,l-.6)}}])},G6E5:function(e,t,n){"use strict";var r=n("03wM"),o=n.n(r),a=n("Ekwr"),i=n.n(a),s=n("hsT8"),l=n.n(s),c=n("lvz6"),d=n.n(c),u=n("yKah"),f=n.n(u),p=n("fzuT"),g=n.n(p),h=n("yCd9"),m=n.n(h),y=n("6RpP"),S=n.n(y),v=n("G0Vy"),x=n.n(v),b=n("nbuU"),E=n.n(b),R=(n("3dw1"),n("Muwe"),n("y89P"),n("29E8")),w=n("IE1r"),F=n("UDUI"),C=(n("RKBc"),angular.module("fileSaver",[]).factory("fileSaver",["$window",function(e){return function(t,n,r,o){if(e.cordova&&e.cordova.InAppBrowser&&"ios"===e.cordova.platformId){var a=new FileReader;return a.onloadend=function(){var t=a.result;return e.cordova.InAppBrowser.open(t,"_blank","hidenavigationbuttons=yes,hideurlbar=yes,enableViewportScale=yes,location=no")},void a.readAsDataURL(t)}return e.saveAs(t,n,r,o)}}])),D=n("5bca"),T=n("5/DJ"),O=n("81mT"),z=n("Xjih");function A(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=l()(r).call(r,(function(t){return d()(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):f.a?Object.defineProperties(e,f()(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,d()(n,t))}))}return e}t.a=angular.module("deskworks.reportHelper",[R.a.name,w.a.name,F.a.name,C.name,D.a.name,T.a.name,O.a.name,z.a.name]).factory("reportHelper",["$rootScope","$q","$timeout","$window","$filter","$http","dwAlerts","state","logo","jsPDF","csvMake","centerService","reportStyles","reportHeader","reportFooter","reportSort","fileSaver",function(e,t,n,r,o,a,i,s,l,c,d,u,f,p,g,h,y){return{sort:h,paramsChanged:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n.some((function(n){return moment.isMoment(e[n])?!moment.isMoment(t[n])||!e[n].isSame(t[n]):e[n]!==t[n]}))},loadResources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return t.all(P(P({},e()),{},{centers:u.query().catch((function(e){return i.error(e,"Failed to query centers.")})),logo:l.getSiteLogo()}))},buildPdf:function(e){var t,n=e.config,r=e.report,o=e.resources,a=e.doc,i=void 0===a?new c(n.paperLayout,"pt",n.paperSize):a,s=e.startY,l=angular.copy(r.rows);l.forEach((function(e){var t=0;e.forEach((function(n,o){n&&!angular.isUndefined(n.content)||(e[o]=n={content:n});var a=r.columns[t];if(!1===n.content)n.content="";else{if(a.pdf){var i=a.pdf(n.content);n.content=""===i?n.content:i}n.content=angular.isUndefined(n.content)||null===n.content||""===n.content?"-":n.content}t+=n.colSpan||1}))}));var d={columns:m()(t=r.columns).call(t,(function(e){return n.styles&&"uppercase"!==n.styles.headStyles.textTransform?e.title:e.title.toUpperCase()})),body:l,headStyles:(n.styles||f).headStyles,bodyStyles:(n.styles||f).bodyStyles,columnStyles:(n.styles||f).columnStyles,tableMargin:n.styles&&n.styles.tableMargin||(n.styles||f).pageMargins,startY:s||(n.styles||f).startY||!1,didParseCell:function(e){var t=e.row,n=e.cell,o=e.column;if("body"===e.section){angular.extend(n.styles,{minCellWidth:50,fillColor:!1},r.styles[t.index],r.columns[o.index].styles,l[t.index][o.index]?l[t.index][o.index].styles:null)}else angular.extend(n.styles,r.columns[o.index].styles)},didDrawCell:function(e){return function(e,t){var n=e.cell,r=e.doc;0===e.column.index&&n.styles.borderColor&&n.styles.borderWidth&&(r.setLineWidth(n.styles.borderWidth),r.setDrawColor(n.styles.borderColor[0],n.styles.borderColor[1],n.styles.borderColor[2]),r.rect(e.settings.margin.left+n.styles.borderWidth/2,n.y+n.styles.borderWidth/2,e.table.getWidth(r.internal.pageSize.width)-n.styles.borderWidth,e.row.height-2*n.styles.borderWidth,"S"));return!1}(e,r.columns)},didDrawPage:function(e){(n.header||p)({config:n,doc:i,data:e.table,resources:o}),(n.footer||g)({config:n,doc:i,data:e.table,resources:o})}};return d.margin=d.tableMargin||(n.styles||f).pageMargins,i.autoTable(d),i},buildCsv:function(e){var t,n,r=e.report,o={charset:"utf-8"},a=m()(t=r.rows).call(t,(function(e){return e.reduce((function(e,t){var n;return e.push(t),S()(e).call(e,x()(n=new Array((t&&t.colSpan?t.colSpan:1)-1)).call(n,null))}),[])}));return a.forEach((function(e){e.forEach((function(t,n){e[n]&&angular.isDefined(e[n].content)&&(e[n]=e[n].content);var o=r.columns[n];if(o.csv){var a=o.csv(e[n]);e[n]=""===a?e[n]:a}e[n]=angular.isUndefined(e[n])||null===e[n]||!1===e[n]||""===e[n]?"":e[n]}))})),a.unshift(m()(n=r.columns).call(n,(function(e){return e.title.toUpperCase()}))),new Blob([d.generate(a,o)],{type:"text/csv;charset="+o.charset+";"})},getReportFileName:function(e){var t,n=e.extension,r=void 0===n?"pdf":n,a=e.postfix,i=void 0===a?"":a,s=e.config,l=e.resources,c=s.reportName.toLowerCase().replace(/\s+/g,"-"),d=(E()(t=l.centers).call(t,(function(e){return e.id===+s.centerId}))||{name:"all-centers"}).name.toLowerCase().replace(/\s+/g,"-");return c+"-"+d+"-"+o("date")(moment(),"yyyyMMdd-HHmmss")+i+"."+r.toLowerCase()},download:function(e){var t=e.blob,n=e.fileName;if(!t)return;y(t,n)}}}])},IE1r:function(e,t,n){"use strict";n("Muwe"),n("y89P"),n("JBxO"),n("3dw1"),n("8cZI");t.a=angular.module("csvMake",[]).service("csvMake",["$q",function(e){this.generate=function(e,t){return t.txtDelim=t.txtDelim||'"',t.decimalSep=t.decimalSep||".",t.fieldSep=t.fieldSep||",",t.charset=t.charset||"utf-8",t.fieldSep=this.isSpecialChar(t.fieldSep)?this.getSpecialChar(t.fieldSep):t.fieldSep,this.stringify(e,t)};var t={"\\t":"\t","\\b":"\b","\\v":"\v","\\f":"\f","\\r":"\r"};this.stringifyField=function(e,t){return"locale"===t.decimalSep&&this.isFloat(e)?e.toLocaleString():"."!==t.decimalSep&&this.isFloat(e)?e.toString().replace(".",t.decimalSep):"string"==typeof e?(e=e.replace(/"/g,'""'),(t.quoteStrings||e.indexOf(",")>-1||e.indexOf("\n")>-1||e.indexOf("\r")>-1)&&(e=t.txtDelim+e+t.txtDelim),e):"boolean"==typeof e?e?"TRUE":"FALSE":e},this.isFloat=function(e){return+e===e&&(!isFinite(e)||Boolean(e%1))},this.stringifyAsync=function(t,n){var r=e.defer(),o=this,a="",i="",s=e.when(t).then((function(e){var t,s;angular.isDefined(n.header)&&n.header&&(t=[],angular.forEach(n.header,(function(e,t){this.push(o.stringifyField(e,n))}),t),s=t.join(n.fieldSep?n.fieldSep:","),i+=s+"\r\n");var l,c,d=[];(angular.isArray(e)?d=e:angular.isFunction(e)&&(d=e()),angular.isDefined(n.label)&&n.label&&"boolean"==typeof n.label)&&(l=[],angular.forEach(d[0],(function(e,t){this.push(o.stringifyField(t,n))}),l),c=l.join(n.fieldSep?n.fieldSep:","),i+=c+"\r\n");angular.forEach(d,(function(e,t){var r,a,s=angular.copy(d[t]);a=[];var l=n.columnOrder?n.columnOrder:s;angular.forEach(l,(function(e,t){var r=n.columnOrder?s[e]:e;this.push(o.stringifyField(r,n))}),a),r=a.join(n.fieldSep?n.fieldSep:","),i+=t<d.length?r+"\r\n":r})),n.addByteOrderMarker&&(a+="\ufeff"),a+=i,r.resolve(a)}));return"function"==typeof s.catch&&s.catch((function(e){r.reject(e)})),r.promise},this.stringify=function(e,t){var n,r,o=this,a="",i="";angular.isDefined(t.header)&&t.header&&(n=[],angular.forEach(t.header,(function(e,n){this.push(o.stringifyField(e,t))}),n),r=n.join(t.fieldSep?t.fieldSep:","),i+=r+"\r\n");var s,l,c=e;angular.isDefined(t.label)&&t.label&&"boolean"==typeof t.label&&(s=[],angular.forEach(c[0],(function(e,n){this.push(o.stringifyField(n,t))}),s),l=s.join(t.fieldSep?t.fieldSep:","),i+=l+"\r\n");return angular.forEach(c,(function(e,n){var r,a,s=angular.copy(c[n]);a=[];var l=t.columnOrder?t.columnOrder:s;angular.forEach(l,(function(e,n){var r=t.columnOrder?s[e]:e;this.push(o.stringifyField(r,t))}),a),r=a.join(t.fieldSep?t.fieldSep:","),i+=n<c.length?r+"\r\n":r})),t.addByteOrderMarker&&(a+="\ufeff"),a+=i},this.isSpecialChar=function(e){return void 0!==t[e]},this.getSpecialChar=function(e){return t[e]}}])},UDUI:function(e,t,n){"use strict";var r=n("cgBC");n("dbsv");t.a=angular.module("jsPDF",[]).factory("jsPDF",["$window",function(e){return e.jsPDF=r.default,e.jsPDF}])},Xjih:function(e,t,n){"use strict";n("8cZI");var r=n("nbuU"),o=n.n(r),a=n("5/DJ");t.a=angular.module("deskworks.reports.reportFooter",[a.a.name]).factory("reportFooter",["$filter","reportStyles",function(e,t){return function(){return 3===arguments.length?r.apply(void 0,arguments):n.apply(void 0,arguments)};function n(e){var n,r=e.config,a=e.doc,i=(e.data,e.resources),s=o()(n=i.centers).call(n,(function(e){return e.id===+r.centerId}));if(s){var l,c=a.internal.pageSize.width,d=a.internal.pageSize.height;a.setFont(a.getFont().fontName,"normal"),a.setTextColor(t.footer.textColor),a.setFontSize(9),l=[s.name,s.phone,s.street1],s.street2&&l.push(s.street2),l.push(s.city),l.push(s.state.name||s.state),l.push(s.zip),l=l.join(" / "),a.text(l,(c-a.getTextWidth(l))/2,d-30)}}function r(e,n,r){var o,a=n.internal.pageSize.width,i=n.internal.pageSize.height;n.setFont(n.getFont().fontName,"normal"),n.setTextColor(t.footer.textColor),n.setFontSize(9),o=[r.center.name,r.center.phone,r.center.street1],r.center.street2&&o.push(r.center.street2),o.push(r.center.city),o.push(r.center.state.name||r.center.state),o.push(r.center.zip),o=o.join(" / "),n.text(o,(a-n.getTextWidth(o))/2,i-30)}}])}}]);