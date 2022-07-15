(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{OiyR:function(t,e,n){"use strict";n("3dw1");var r=n("nbuU"),o=n.n(r),a=n("hsT8"),i=n.n(a);e.a=angular.module("deskworks.invoiceHelper",[]).factory("invoiceHelper",["$translate","$filter",function(t,e){var n=["recurring","rental","deposit","payment","refund"],r=[{id:"recurring",_name:"INVOICE.RECURRING",filter:function(t){return"recurring"===t.type}},{id:"rental",_name:"INVOICE.RENTAL",filter:function(t){return"rental"===t.type}},{id:"deposit",_name:"INVOICE.DEPOSITS",filter:function(t){return"deposit"===t.type}},{id:"other",_name:"INVOICE.OTHER_CHARGES",filter:function(t){return n.indexOf(t.type)<0}},{id:"payment",_name:"INVOICE.PAYMENTS",filter:function(t){return"payment"===t.type}},{id:"refund",_name:"INVOICE.REFUNDS",filter:function(t){return"refund"===t.type}}];return{getGroup:function(e){var n=e.items,a=e.type;return a=o()(r).call(r,(function(t){return t.id===a})),n=i()(n).call(n,(function(t){return t.include&&i()(a).call(a,t)})),{name:t.instant(a._name),items:n,total:n.reduce((function(t,e){return t+ +e.amount}),0)}},getChargesTotal:function(t){return i()(t).call(t,(function(t){return t.include&&"payment"!==t.type&&"refund"!==t.type})).reduce((function(t,e){return t+(+e.amount||0)}),0)},getTaxTotals:a,getBalance:function(t){var e=i()(t).call(t,(function(t){return t.include&&"payment"!==t.type&&"refund"!==t.type})).reduce((function(t,e){return t+(+e.amount||0)}),0)+t.reduce((function(t,e){return!e.include||"payment"!==e.type&&"refund"!==e.type?t:t+(+e.amount||0)}),0);return a(t).forEach((function(t){e+=t.amount||0})),e},getLogoSize:function(t){var e=t.resources,n=0,r=0;if(e.logo){r=80;var o=(n=140)/e.logo.width,a=r/e.logo.height;o<=a?r*=o/a:n*=a/o}return{width:n,height:r}}};function a(t){var e=[];return i()(t).call(t,(function(t){return t.include&&"payment"!==t.type&&"refund"!==t.type})).forEach((function(t){angular.forEach(t.taxes,(function(t,n){e.length<=n&&e.push({name:t.taxName,amount:0}),e[n].amount+=+t.taxAmount}))})),e}}])},uAdW:function(t,e,n){"use strict";n.r(e);var r=n("5/DJ"),o=angular.module("deskworks.alternateInvoiceStyles",["deskworks.helper",r.a.name]).factory("alternateInvoiceStyles",["helper","reportStyles",function(t,e){var n=angular.copy(e);return n.framePadding=[12,12,12,12],n.pageMargins=[52,40,40,40],n.startY=250,n.header.textColor="#000000",n.bodyStyles.lineWidth=1,n.bodyStyles.lineColor=0,n.bodyStyles.cellPadding=8,n.bodyStyles.fontSize=11,n.headStyles={fontSize:11,fontStyle:"bold",valign:"middle",fillColor:null,textColor:0,cellPadding:8,textTransform:null,lineWidth:1,lineColor:0},n.h1={halign:"right",fontStyle:"bold"},n.h2={fontStyle:"bold"},n.h3={halign:"right"},n}]),a=(n("3dw1"),angular.module("deskworks.alternateInvoiceColumns",[]).factory("alternateInvoiceColumns",["$rootScope","$filter","$translate",function(t,e,n){var r=[{dataKey:"date",_title:"INVOICE.COLUMNS.DATE_ADDED",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("date")(t,"mediumDate")},csv:function(t){return e("date")(t,"shortDate")}},{dataKey:"name",_title:"INVOICE.COLUMNS.ITEM",include:!0,styles:{minCellWidth:110}},{dataKey:"description",_title:"INVOICE.COLUMNS.DESCRIPTION",include:!0,styles:{minCellWidth:140}},{dataKey:"price",_title:"INVOICE.COLUMNS.PRICE",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("ncurrency")(t)},csv:function(t){return e("ncurrency")(t)}},{dataKey:"qty",_title:"INVOICE.COLUMNS.QUANTITY",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("round")(t)},csv:function(t){return e("round")(t)}},{dataKey:"amount",_title:"INVOICE.COLUMNS.AMOUNT",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("ncurrency")(t)},csv:function(t){return e("ncurrency")(t)}}];function o(){r.forEach((function(t){t.title=n.instant(t._title)}))}return o(),t.$on("$setTranslationsSuccess",o),r}])),i=(n("8cZI"),n("OiyR")),l=angular.module("deskworks.alternateInvoiceHeader",[i.a.name]).factory("alternateInvoiceHeader",["$rootScope","$filter","$translate","invoiceHelper",function(t,e,n,r){return function(o){var a,i,l,s=o.config,u=o.doc,c=o.data,d=o.resources,m=s.styles,f=u.internal.pageSize.width,p=u.internal.pageSize.height,y=r.getLogoSize({resources:d}),g=y.width,h=y.height,I=c.settings.margin,C=angular.copy(m.framePadding);C[0]+=h,I.top=m.pageMargins[0]+h,u.setFont(u.getFont().fontName,"normal"),u.setTextColor(m.header.textColor),u.setLineWidth(1),u.setDrawColor(0,0,0),u.rect(I.left-C[3],I.top-C[0],f-I.right-I.left+C[3]+C[1],p-I.top-I.bottom+C[0]+C[2],"S"),u.setFillColor(255,255,255),u.rect(f/2-100,I.top-C[0]-1,200,2,"F"),d.logo&&(i=f/2,l=I.top-C[0]-14,u.addImage(d.logo.data,i-g/2,l,g,h));if(u.setFontSize(9),a=n.instant("INVOICE.ALTERNATE.FOOTER",{company:t.wlLinks.companyName}),i=u.getTextWidth(a)+25,u.setFillColor(255,255,255),u.rect(f/2-i/2,p-I.bottom+C[2]-1,i,2,"F"),i=(f-u.getTextWidth(a))/2,l=p-I.bottom+C[2]+3,u.text(a,i,l),1!==c.pageCount)return;i=I.left,l=I.top+10,u.setFontSize(11),u.setFont(u.getFont().fontName,"normal"),a=n.instant("INVOICE.HEADER.DATE")+": "+e("date")(s.date||s.endDate,"mediumDate"),u.text(a,i,l),l+=26,u.text(s.userCompany||"",i,l),l+=13,s.address&&(u.text(s.address.street||"",i,l),l+=13,u.text([s.address.city,s.address.state.name||s.address.state,s.address.zip].join(", "),i,l),l+=26);u.text("Dear "+(s.userName||"")+",",i,l),l+=26,u.text("This is your invoice for membership charges for the coming month.",i,l),l+=26,u.text("Your billing method will be charged in a few days.",i,l),l+=26,u.setFont(u.getFont().fontName,"bold"),u.text("ORDER ID: "+s.orderId,i,l),u.setFont(u.getFont().fontName,"normal")}}]),s=n("hsT8"),u=n.n(s),c=n("yCd9"),d=n.n(c),m=angular.module("deskworks.alternateInvoiceBody",[i.a.name]).factory("alternateInvoiceBody",["$translate","$filter","invoiceHelper",function(t,e,n){return function(r){var o=r.config,a=(r.params,r.data),i=r.columns,l=r.resources,s=o.styles,c={columns:u()(i).call(i,(function(t){return t.include})),rows:[],styles:[]};p(n.getGroup({items:a.items,type:"recurring"})),p(n.getGroup({items:a.items,type:"rental"})),p(n.getGroup({items:a.items,type:"deposit"})),p(n.getGroup({items:a.items,type:"other"}));var m=n.getTaxTotals(a.items);m.length&&(c.rows.push([{content:t.instant("INVOICE.CHARGES")+": "+e("ncurrency")(n.getChargesTotal(a.items)),colSpan:c.columns.length}]),c.styles.push(s.h1),m.forEach((function(t){c.rows.push([{content:t.name+": "+e("ncurrency")(t.amount),colSpan:c.columns.length}]),c.styles.push(s.h1)})));p(n.getGroup({items:a.items,type:"payment"})),p(n.getGroup({items:a.items,type:"refund"})),c.rows.push([{content:t.instant("INVOICE.TOTAL")+": "+e("ncurrency")(n.getBalance(a.items)),colSpan:c.columns.length}]),c.styles.push(s.h1);var f=n.getLogoSize({resources:l}).height;s._startY||(s._startY=s.startY);return s.startY=s._startY+f-25,c;function p(n){n.items&&n.items.length&&(c.rows.push([{content:n.name,colSpan:c.columns.length,styles:{halign:"left"}}]),c.styles.push(s.h2),n.items.forEach((function(t,e){var n;c.rows.push(d()(n=c.columns).call(n,(function(e){return t[e.dataKey]}))),c.styles.push(null)})),c.rows.push([{content:t.instant("INVOICE.TOTAL")+" "+n.name+": "+e("ncurrency")(n.total),colSpan:c.columns.length}]),c.styles.push(s.h3))}}}]),f=["$injector",function(t){return t.loadNewModules([o.name,a.name,l.name,m.name]),{styles:t.get("alternateInvoiceStyles"),columns:t.get("alternateInvoiceColumns"),header:t.get("alternateInvoiceHeader"),body:t.get("alternateInvoiceBody")}}];e.default=f}}]);