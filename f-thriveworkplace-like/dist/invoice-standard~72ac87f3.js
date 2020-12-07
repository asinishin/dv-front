(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{OiyR:function(t,e,n){"use strict";var r=n("WSeP"),o=n.n(r),a=n("YtL8"),i=n.n(a),l=n("hsT8"),s=n.n(l),u=n("nbuU"),c=n.n(u),d=n("xeXu"),m=n.n(d);e.a=angular.module("deskworks.invoiceHelper",[]).factory("invoiceHelper",["$translate","$filter",function(t,e){var n=["recurring","rental","deposit","payment","refund"],r=[{id:"recurring",_name:"INVOICE.RECURRING",filter:function(t){return"recurring"===t.type}},{id:"rental",_name:"INVOICE.RENTAL",filter:function(t){return"rental"===t.type}},{id:"deposit",_name:"INVOICE.DEPOSITS",filter:function(t){return"deposit"===t.type}},{id:"other",_name:"INVOICE.OTHER_CHARGES",filter:function(t){return m()(n).call(n,t.type)<0}},{id:"payment",_name:"INVOICE.PAYMENTS",filter:function(t){return"payment"===t.type}},{id:"refund",_name:"INVOICE.REFUNDS",filter:function(t){return"refund"===t.type}}];return{getGroup:function(e){var n=e.items,o=e.type;return o=c()(r).call(r,(function(t){return t.id===o})),n=s()(n).call(n,(function(t){return t.include&&s()(o).call(o,t)})),{name:t.instant(o._name),items:n,total:i()(n).call(n,(function(t,e){return t+ +e.amount}),0)}},getChargesTotal:function(t){var e;return i()(e=s()(t).call(t,(function(t){return t.include&&"payment"!==t.type&&"refund"!==t.type}))).call(e,(function(t,e){return t+(+e.amount||0)}),0)},getTaxTotals:a,getBalance:function(t){var e,n,r=i()(e=s()(t).call(t,(function(t){return t.include&&"payment"!==t.type&&"refund"!==t.type}))).call(e,(function(t,e){return t+(+e.amount||0)}),0)+i()(t).call(t,(function(t,e){return!e.include||"payment"!==e.type&&"refund"!==e.type?t:t+(+e.amount||0)}),0);return o()(n=a(t)).call(n,(function(t){r+=t.amount||0})),r},getLogoSize:function(t){var e=t.resources,n=0,r=0;if(e.logo){r=80;var o=(n=140)/e.logo.width,a=r/e.logo.height;o<=a?r*=o/a:n*=a/o}return{width:n,height:r}}};function a(t){var e,n=[];return o()(e=s()(t).call(t,(function(t){return t.include&&"payment"!==t.type&&"refund"!==t.type}))).call(e,(function(t){o()(angular).call(angular,t.taxes,(function(t,e){n.length<=e&&n.push({name:t.taxName,amount:0}),n[e].amount+=+t.taxAmount}))})),n}}])},vj9N:function(t,e,n){"use strict";n.r(e);var r=n("5/DJ"),o=angular.module("deskworks.invoiceStyles",["deskworks.helper",r.a.name]).factory("invoiceStyles",["helper","reportStyles",function(t,e){var n=angular.copy(e);return n.pageMargins[0]=50,n.pageMargins[2]=30,n.startY=170,n.header.textColor="#000000",n.headStyles={fontSize:9,fontStyle:"normal",valign:"middle",fillColor:100,textColor:255},n.h1={fontStyle:"bold",textColor:0,borderWidth:1,borderColor:[0,0,0]},n.h2={fontStyle:"bold",textColor:0,borderWidth:1,borderColor:[180,180,180]},n}]),a=n("WSeP"),i=n.n(a),l=angular.module("deskworks.invoiceColumns",[]).factory("invoiceColumns",["$rootScope","$filter","$translate",function(t,e,n){var r=[{dataKey:"date",_title:"INVOICE.COLUMNS.DATE",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("date")(t,"mediumDate")},csv:function(t){return e("date")(t,"shortDate")}},{dataKey:"name",_title:"INVOICE.COLUMNS.ITEM",include:!0,styles:{minCellWidth:150}},{dataKey:"description",_title:"INVOICE.COLUMNS.DESCRIPTION",include:!0,styles:{minCellWidth:150}},{dataKey:"price",_title:"INVOICE.COLUMNS.RATE",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("ncurrency")(t)},csv:function(t){return e("ncurrency")(t)}},{dataKey:"qty",_title:"INVOICE.COLUMNS.QTY",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("round")(t)},csv:function(t){return e("round")(t)}},{dataKey:"amount",_title:"INVOICE.COLUMNS.AMOUNT",include:!0,styles:{cellWidth:"wrap",halign:"right"},pdf:function(t){return e("ncurrency")(t)},csv:function(t){return e("ncurrency")(t)}}];function o(){i()(r).call(r,(function(t){t.title=n.instant(t._title)}))}return o(),t.$on("$setTranslationsSuccess",o),r}]),s=(n("8cZI"),n("nbuU")),u=n.n(s),c=angular.module("deskworks.invoiceHeader",[o.name]).factory("invoiceHeader",["$filter","$translate","invoiceStyles",function(t,e,n){return function(r){var o,a,i,l,s=r.config,c=r.doc,d=r.data,m=r.resources,p=u()(o=m.centers).call(o,(function(t){return t.id===s.centerId})),f=c.internal.pageSize.width;if(c.setFont(c.getFont().fontName,"normal"),c.setTextColor(n.header.textColor),c.setFontSize(14),a=s.reportName.toUpperCase(),i=(f-c.getTextWidth(a))/2,l=40,c.text(a,i,l),1!==d.pageCount)return;c.setFontSize(10),c.setFont(c.getFont().fontName,"normal"),i=d.settings.margin.left,l=60,c.text(p.name,i,l),l+=12,c.text(p.street1||"",i,l),p.street2&&(l+=12,c.text(p.street2||"",i,l));l+=12,c.text([p.city,p.state.name||p.state,p.zip].join(", "),i,l),l+=12,c.text(e.instant("INVOICE.HEADER.PHONE").toUpperCase()+": "+p.phone,i,l),p.taxId&&(l+=12,c.text(e.instant("INVOICE.HEADER.TAX_ID").toUpperCase()+": "+p.taxId,i,l));var g=l+18;if(m.logo){i=f-d.settings.margin.right,l=50;var y=140,h=50,C=y/m.logo.width,I=h/m.logo.height;C<=I?h*=C/I:y*=I/C,c.addImage(m.logo.data,i-y,l,y,h)}c.setFontSize(8),c.setFont(c.getFont().fontName,"bold"),i=d.settings.margin.left,l=g,c.text(e.instant("INVOICE.HEADER.BILL_TO").toUpperCase()+":",i,l),c.setFontSize(10),c.setFont(c.getFont().fontName,"normal"),l+=12,c.text(s.userName||"",i,l),l+=12,c.text(s.userCompany||"",i,l),s.address&&(l+=12,c.text(s.address.street||"",i,l),l+=12,c.text([s.address.city,s.address.state.name||s.address.state,s.address.zip].join(", "),i,l));i=f-d.settings.margin.right,l=g,c.setFontSize(8),c.setFont(c.getFont().fontName,"bold"),a=e.instant("INVOICE.HEADER.DATE").toUpperCase()+":",c.text(a,i-c.getTextWidth(a),l),c.setFontSize(10),c.setFont(c.getFont().fontName,"normal"),l+=12,a=t("date")(s.date||s.endDate,"mediumDate"),c.text(a,i-c.getTextWidth(a),l),l+=12,c.setFontSize(8),c.setFont(c.getFont().fontName,"bold"),a=e.instant("INVOICE.HEADER.DUE_DATE").toUpperCase()+":",c.text(a,i-c.getTextWidth(a),l),c.setFontSize(10),c.setFont(c.getFont().fontName,"normal"),l+=12,a=t("date")(s.dueDate,"mediumDate"),c.text(a,i-c.getTextWidth(a),l)}}]),d=n("yCd9"),m=n.n(d),p=n("hsT8"),f=n.n(p),g=n("OiyR"),y=angular.module("deskworks.invoiceBody",[g.a.name,o.name]).factory("invoiceBody",["$translate","$filter","invoiceHelper","invoiceStyles",function(t,e,n,r){return function(o){o.params;var a=o.data,l=o.columns,s={columns:f()(l).call(l,(function(t){return t.include})),rows:[],styles:[]};c(n.getGroup({items:a.items,type:"recurring"})),c(n.getGroup({items:a.items,type:"rental"})),c(n.getGroup({items:a.items,type:"deposit"})),c(n.getGroup({items:a.items,type:"other"}));var u=n.getTaxTotals(a.items);u.length&&(s.rows.push([{content:t.instant("INVOICE.CHARGES")+":",colSpan:s.columns.length-1},{content:e("ncurrency")(n.getChargesTotal(a.items))}]),s.styles.push(r.h1),i()(u).call(u,(function(t){s.rows.push([{content:t.name+":",colSpan:s.columns.length-1},{content:e("ncurrency")(t.amount)}]),s.styles.push(r.h1)})));return c(n.getGroup({items:a.items,type:"payment"})),c(n.getGroup({items:a.items,type:"refund"})),s.rows.push([{content:t.instant("INVOICE.BALANCE")+":",colSpan:s.columns.length-1},{content:e("ncurrency")(n.getBalance(a.items))}]),s.styles.push(r.h1),s;function c(n){var o;n.items&&n.items.length&&(s.rows.push([{content:n.name,colSpan:s.columns.length,styles:{halign:"left"}}]),s.styles.push(r.h2),i()(o=n.items).call(o,(function(t,e){var n;s.rows.push(m()(n=s.columns).call(n,(function(e){return t[e.dataKey]}))),s.styles.push(e%2?null:r.rowOdd)})),s.rows.push([{content:t.instant("INVOICE.SUBTOTAL")+":",colSpan:s.columns.length-1},{content:e("ncurrency")(n.total)}]),s.styles.push(r.h3))}}}]),h=["$injector",function(t){return t.loadNewModules([o.name,l.name,c.name,y.name]),{styles:t.get("invoiceStyles"),columns:t.get("invoiceColumns"),header:t.get("invoiceHeader"),body:t.get("invoiceBody")}}];e.default=h}}]);