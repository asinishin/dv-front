(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{NXKb:function(t,r,e){"use strict";function n(t,r,e,i){this.message=t,this.expected=r,this.found=e,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,n)}!function(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}(n,Error),n.buildMessage=function(t,r){var e={literal:function(t){return'"'+i(t.text)+'"'},class:function(t){var r,e="";for(r=0;r<t.parts.length;r++)e+=t.parts[r]instanceof Array?o(t.parts[r][0])+"-"+o(t.parts[r][1]):o(t.parts[r]);return"["+(t.inverted?"^":"")+e+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function i(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function o(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}return"Expected "+function(t){var r,n,i,o=new Array(t.length);for(r=0;r<t.length;r++)o[r]=(i=t[r],e[i.type](i));if(o.sort(),o.length>0){for(r=1,n=1;r<o.length;r++)o[r-1]!==o[r]&&(o[n]=o[r],n++);o.length=n}switch(o.length){case 1:return o[0];case 2:return o[0]+" or "+o[1];default:return o.slice(0,-1).join(", ")+", or "+o[o.length-1]}}(t)+" but "+function(t){return t?'"'+i(t)+'"':"end of input"}(r)+" found."},t.exports={SyntaxError:n,parse:function(t,r){r=void 0!==r?r:{};var e,i={},o={start:Gt},u=Gt,s="#",a=Dt("#",!1),c=function(){return{type:"octothorpe"}},f=function(t){return t.join("")},l="{",h=Dt("{",!1),p="}",m=Dt("}",!1),y=function(t){return{type:"argument",arg:t}},d=",",g=Dt(",",!1),v="select",A=Dt("select",!1),b=function(t,r){return{type:"select",arg:t,cases:r}},w="plural",k=Dt("plural",!1),x="selectordinal",S=Dt("selectordinal",!1),C=function(t,e,n,i){var o=("selectordinal"===e?r.ordinal:r.cardinal)||["zero","one","two","few","many","other"];return o&&o.length&&i.forEach((function(r){if(isNaN(r.key)&&o.indexOf(r.key)<0)throw new Error("Invalid key `"+r.key+"` for argument `"+t+"`. Valid "+e+" keys for this locale are `"+o.join("`, `")+"`, and explicit keys like `=0`.")})),{type:e,arg:t,offset:n||0,cases:i}},N=function(t,r,e){return{type:"function",arg:t,key:r,params:e}},F=/^[0-9a-zA-Z$_]/,O=Rt([["0","9"],["a","z"],["A","Z"],"$","_"],!1,!1),j=/^[^ \t\n\r,.+={}]/,E=Rt([" ","\t","\n","\r",",",".","+","=","{","}"],!0,!1),J=function(t,r){return{key:t,tokens:r}},P=function(t){return t},$="offset",D=Dt("offset",!1),R=":",_=Dt(":",!1),L=function(t){return t},T="=",z=Dt("=",!1),G=function(t){return r.strictFunctionParams},I=function(t){return t},K=function(t){return t.replace(/^[ \t\n\r]*|[ \t\n\r]*$/g,"")},Z="''",M=Dt("''",!1),U=function(){return"'"},X=/^[^']/,q=Rt(["'"],!0,!1),B="'{",Q=Dt("'{",!1),V="'",W=Dt("'",!1),Y=function(t){return"{"+t.join("")},H="'}",tt=Dt("'}",!1),rt=function(t){return"}"+t.join("")},et=/^[^{}#\\\0-\x08\x0E-\x1F\x7F]/,nt=Rt(["{","}","#","\\",["\0","\b"],["",""],""],!0,!1),it="\\\\",ot=Dt("\\\\",!1),ut=function(){return"\\"},st="\\#",at=Dt("\\#",!1),ct=function(){return"#"},ft="\\{",lt=Dt("\\{",!1),ht=function(){return"{"},pt="\\}",mt=Dt("\\}",!1),yt=function(){return"}"},dt="\\u",gt=Dt("\\u",!1),vt=function(t,r,e,n){return String.fromCharCode(parseInt("0x"+t+r+e+n))},At=/^[^',}]/,bt=Rt(["'",",","}"],!0,!1),wt=/^[^'}]/,kt=Rt(["'","}"],!0,!1),xt=/^[0-9]/,St=Rt([["0","9"]],!1,!1),Ct=/^[0-9a-fA-F]/,Nt=Rt([["0","9"],["a","f"],["A","F"]],!1,!1),Ft=/^[ \t\n\r]/,Ot=Rt([" ","\t","\n","\r"],!1,!1),jt=0,Et=[{line:1,column:1}],Jt=0,Pt=[],$t=0;if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".');u=o[r.startRule]}function Dt(t,r){return{type:"literal",text:t,ignoreCase:r}}function Rt(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function _t(r){var e,n=Et[r];if(n)return n;for(e=r-1;!Et[e];)e--;for(n={line:(n=Et[e]).line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Et[r]=n,n}function Lt(t,r){var e=_t(t),n=_t(r);return{start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function Tt(t){jt<Jt||(jt>Jt&&(Jt=jt,Pt=[]),Pt.push(t))}function zt(t,r,e){return new n(n.buildMessage(t,r),t,r,e)}function Gt(){var t,r;for(t=[],r=It();r!==i;)t.push(r),r=It();return t}function It(){var r,e,n;if((r=function(){var r,e,n,o;r=jt,123===t.charCodeAt(jt)?(e=l,jt++):(e=i,0===$t&&Tt(h));e!==i&&nr()!==i&&(n=Kt())!==i&&nr()!==i?(125===t.charCodeAt(jt)?(o=p,jt++):(o=i,0===$t&&Tt(m)),o!==i?(r,e=y(n),r=e):(jt=r,r=i)):(jt=r,r=i);return r}())===i&&(r=function(){var r,e,n,o,u,s,a,c,f;r=jt,123===t.charCodeAt(jt)?(e=l,jt++):(e=i,0===$t&&Tt(h));if(e!==i)if(nr()!==i)if((n=Kt())!==i)if(nr()!==i)if(44===t.charCodeAt(jt)?(o=d,jt++):(o=i,0===$t&&Tt(g)),o!==i)if(nr()!==i)if(t.substr(jt,6)===v?(u=v,jt+=6):(u=i,0===$t&&Tt(A)),u!==i)if(nr()!==i)if(44===t.charCodeAt(jt)?(s=d,jt++):(s=i,0===$t&&Tt(g)),s!==i)if(nr()!==i){if(a=[],(c=Zt())!==i)for(;c!==i;)a.push(c),c=Zt();else a=i;a!==i&&(c=nr())!==i?(125===t.charCodeAt(jt)?(f=p,jt++):(f=i,0===$t&&Tt(m)),f!==i?(r,e=b(n,a),r=e):(jt=r,r=i)):(jt=r,r=i)}else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;return r}())===i&&(r=function(){var r,e,n,o,u,s,a,c,f,y;r=jt,123===t.charCodeAt(jt)?(e=l,jt++):(e=i,0===$t&&Tt(h));if(e!==i)if(nr()!==i)if((n=Kt())!==i)if(nr()!==i)if(44===t.charCodeAt(jt)?(o=d,jt++):(o=i,0===$t&&Tt(g)),o!==i)if(nr()!==i)if(t.substr(jt,6)===w?(u=w,jt+=6):(u=i,0===$t&&Tt(k)),u===i&&(t.substr(jt,13)===x?(u=x,jt+=13):(u=i,0===$t&&Tt(S))),u!==i)if(nr()!==i)if(44===t.charCodeAt(jt)?(s=d,jt++):(s=i,0===$t&&Tt(g)),s!==i)if(nr()!==i)if((a=function(){var r,e,n,o,u;r=jt,(e=nr())!==i?(t.substr(jt,6)===$?(n=$,jt+=6):(n=i,0===$t&&Tt(D)),n!==i&&nr()!==i?(58===t.charCodeAt(jt)?(o=R,jt++):(o=i,0===$t&&Tt(_)),o!==i&&nr()!==i&&(u=rr())!==i&&nr()!==i?(r,e=L(u),r=e):(jt=r,r=i)):(jt=r,r=i)):(jt=r,r=i);return r}())===i&&(a=null),a!==i){if(c=[],(f=Mt())!==i)for(;f!==i;)c.push(f),f=Mt();else c=i;c!==i&&(f=nr())!==i?(125===t.charCodeAt(jt)?(y=p,jt++):(y=i,0===$t&&Tt(m)),y!==i?(r,e=C(n,u,a,c),r=e):(jt=r,r=i)):(jt=r,r=i)}else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;else jt=r,r=i;return r}())===i&&(r=function(){var r,e,n,o,u,s,a;r=jt,123===t.charCodeAt(jt)?(e=l,jt++):(e=i,0===$t&&Tt(h));e!==i&&nr()!==i&&(n=Kt())!==i&&nr()!==i?(44===t.charCodeAt(jt)?(o=d,jt++):(o=i,0===$t&&Tt(g)),o!==i&&nr()!==i&&(u=Kt())!==i&&nr()!==i&&(s=function(){var t,r,e;t=jt,r=[],e=qt();for(;e!==i;)r.push(e),e=qt();r!==i?(jt,(e=(e=G(r))?i:void 0)!==i?(t,r=I(r),t=r):(jt=t,t=i)):(jt=t,t=i);if(t===i){for(t=jt,r=[],e=Xt();e!==i;)r.push(e),e=Xt();r!==i?(jt,(e=(e=G(r))?void 0:i)!==i?(t,r=I(r),t=r):(jt=t,t=i)):(jt=t,t=i)}return t}())!==i?(125===t.charCodeAt(jt)?(a=p,jt++):(a=i,0===$t&&Tt(m)),a!==i?(r,e=N(n,u,s),r=e):(jt=r,r=i)):(jt=r,r=i)):(jt=r,r=i);return r}())===i&&(r=jt,35===t.charCodeAt(jt)?(e=s,jt++):(e=i,0===$t&&Tt(a)),e!==i&&(r,e=c()),(r=e)===i)){if(r=jt,e=[],(n=Wt())!==i)for(;n!==i;)e.push(n),n=Wt();else e=i;e!==i&&(r,e=f(e)),r=e}return r}function Kt(){var r,e,n,o,u;if(r=jt,e=jt,F.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(O)),n!==i){for(o=[],j.test(t.charAt(jt))?(u=t.charAt(jt),jt++):(u=i,0===$t&&Tt(E));u!==i;)o.push(u),j.test(t.charAt(jt))?(u=t.charAt(jt),jt++):(u=i,0===$t&&Tt(E));o!==i?e=n=[n,o]:(jt=e,e=i)}else jt=e,e=i;return r=e!==i?t.substring(r,jt):e}function Zt(){var t,r,e;return t=jt,nr()!==i&&(r=Kt())!==i&&nr()!==i&&(e=Ut())!==i?(t,t=J(r,e)):(jt=t,t=i),t}function Mt(){var r,e,n;return r=jt,nr()!==i&&(e=function(){var r,e,n;(r=Kt())===i&&(r=jt,61===t.charCodeAt(jt)?(e=T,jt++):(e=i,0===$t&&Tt(z)),e!==i&&(n=rr())!==i?(r,e=L(n),r=e):(jt=r,r=i));return r}())!==i&&nr()!==i&&(n=Ut())!==i?(r,r=J(e,n)):(jt=r,r=i),r}function Ut(){var r,e,n,o,u,s;if(r=jt,123===t.charCodeAt(jt)?(e=l,jt++):(e=i,0===$t&&Tt(h)),e!==i)if(n=jt,(o=nr())!==i?(u=jt,$t++,123===t.charCodeAt(jt)?(s=l,jt++):(s=i,0===$t&&Tt(h)),$t--,s!==i?(jt=u,u=void 0):u=i,u!==i?n=o=[o,u]:(jt=n,n=i)):(jt=n,n=i),n===i&&(n=null),n!==i){for(o=[],u=It();u!==i;)o.push(u),u=It();o!==i&&(u=nr())!==i?(125===t.charCodeAt(jt)?(s=p,jt++):(s=i,0===$t&&Tt(m)),s!==i?(r,r=e=P(o)):(jt=r,r=i)):(jt=r,r=i)}else jt=r,r=i;else jt=r,r=i;return r}function Xt(){var r,e,n;return r=jt,nr()!==i?(44===t.charCodeAt(jt)?(e=d,jt++):(e=i,0===$t&&Tt(g)),e!==i&&(n=function(){var t,r,e;if(t=jt,r=[],(e=tr())!==i)for(;e!==i;)r.push(e),e=tr();else r=i;return r!==i&&(t,r=f(r)),t=r}())!==i?(r,r=I(n)):(jt=r,r=i)):(jt=r,r=i),r}function qt(){var r,e,n;return r=jt,nr()!==i?(44===t.charCodeAt(jt)?(e=d,jt++):(e=i,0===$t&&Tt(g)),e!==i&&nr()!==i&&(n=function(){var t,r,e;if(t=jt,r=[],(e=Ht())!==i)for(;e!==i;)r.push(e),e=Ht();else r=i;return r!==i&&(t,r=f(r)),t=r}())!==i&&nr()!==i?(r,r=K(n)):(jt=r,r=i)):(jt=r,r=i),r}function Bt(){var r,e;return r=jt,t.substr(jt,2)===Z?(e=Z,jt+=2):(e=i,0===$t&&Tt(M)),e!==i&&(r,e=U()),r=e}function Qt(){var r,e,n;if((r=Bt())===i){if(r=jt,e=[],X.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(q)),n!==i)for(;n!==i;)e.push(n),X.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(q));else e=i;e!==i&&(r,e=f(e)),r=e}return r}function Vt(){var r;return(r=function(){var r,e,n,o;if(r=jt,t.substr(jt,2)===B?(e=B,jt+=2):(e=i,0===$t&&Tt(Q)),e!==i){for(n=[],o=Qt();o!==i;)n.push(o),o=Qt();n!==i?(39===t.charCodeAt(jt)?(o=V,jt++):(o=i,0===$t&&Tt(W)),o!==i?(r,r=e=Y(n)):(jt=r,r=i)):(jt=r,r=i)}else jt=r,r=i;if(r===i)if(r=jt,t.substr(jt,2)===H?(e=H,jt+=2):(e=i,0===$t&&Tt(tt)),e!==i){for(n=[],o=Qt();o!==i;)n.push(o),o=Qt();n!==i?(39===t.charCodeAt(jt)?(o=V,jt++):(o=i,0===$t&&Tt(W)),o!==i?(r,r=e=rt(n)):(jt=r,r=i)):(jt=r,r=i)}else jt=r,r=i;return r}())===i&&(39===t.charCodeAt(jt)?(r=V,jt++):(r=i,0===$t&&Tt(W))),r}function Wt(){var r,e,n,o,u,s;return et.test(t.charAt(jt))?(r=t.charAt(jt),jt++):(r=i,0===$t&&Tt(nt)),r===i&&(r=jt,t.substr(jt,2)===it?(e=it,jt+=2):(e=i,0===$t&&Tt(ot)),e!==i&&(r,e=ut()),(r=e)===i&&(r=jt,t.substr(jt,2)===st?(e=st,jt+=2):(e=i,0===$t&&Tt(at)),e!==i&&(r,e=ct()),(r=e)===i&&(r=jt,t.substr(jt,2)===ft?(e=ft,jt+=2):(e=i,0===$t&&Tt(lt)),e!==i&&(r,e=ht()),(r=e)===i&&(r=jt,t.substr(jt,2)===pt?(e=pt,jt+=2):(e=i,0===$t&&Tt(mt)),e!==i&&(r,e=yt()),(r=e)===i&&(r=jt,t.substr(jt,2)===dt?(e=dt,jt+=2):(e=i,0===$t&&Tt(gt)),e!==i&&(n=er())!==i&&(o=er())!==i&&(u=er())!==i&&(s=er())!==i?(r,r=e=vt(n,o,u,s)):(jt=r,r=i)))))),r}function Yt(){var t;return(t=Bt())===i&&(t=Vt()),t}function Ht(){var r,e,n;if((r=Yt())===i){if(r=jt,e=[],At.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(bt)),n!==i)for(;n!==i;)e.push(n),At.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(bt));else e=i;e!==i&&(r,e=f(e)),r=e}return r}function tr(){var r,e,n;if((r=Yt())===i){if(r=jt,e=[],wt.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(kt)),n!==i)for(;n!==i;)e.push(n),wt.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(kt));else e=i;e!==i&&(r,e=f(e)),r=e}return r}function rr(){var r,e,n;if(r=jt,e=[],xt.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(St)),n!==i)for(;n!==i;)e.push(n),xt.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(St));else e=i;return r=e!==i?t.substring(r,jt):e}function er(){var r;return Ct.test(t.charAt(jt))?(r=t.charAt(jt),jt++):(r=i,0===$t&&Tt(Nt)),r}function nr(){var r,e,n;for(r=jt,e=[],Ft.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(Ot));n!==i;)e.push(n),Ft.test(t.charAt(jt))?(n=t.charAt(jt),jt++):(n=i,0===$t&&Tt(Ot));return r=e!==i?t.substring(r,jt):e}if((e=u())!==i&&jt===t.length)return e;throw e!==i&&jt<t.length&&Tt({type:"end"}),zt(Pt,Jt<t.length?t.charAt(Jt):null,Jt<t.length?Lt(Jt,Jt+1):Lt(Jt,Jt))}}},RQRI:function(t,r,e){
/** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript
 *
 * @author Alex Sexton - @SlexAxton, Eemeli Aro
 * @version 1.0.2
 * @copyright 2012-2016 Alex Sexton, Eemeli Aro, and Contributors
 * @license To use or fork, MIT. To contribute back, Dojo CLA
 */
var n=e("ywgP"),i=e("UvcA");function o(t,r){for(var n=e("h8LG"),i=e("NqbY"),o=t;o;o=o.replace(/[-_]?[^-_]*$/,"")){var u=n[o];if(u){var s=r?{cardinal:[],ordinal:[]}:i[o]||{},a=function(){return u.apply(this,arguments)};return a.toString=function(){return u.toString()},a.cardinal=s.cardinal,a.ordinal=s.ordinal,a}}throw new Error("Localisation function not found for locale "+JSON.stringify(t))}function u(t){if(this.pluralFuncs={},t)if("string"==typeof t)this.pluralFuncs[t]=o(t);else if(Array.isArray(t))t.forEach((function(t){this.pluralFuncs[t]=o(t)}),this);else if("object"==typeof t)for(var r in t)if(t.hasOwnProperty(r)){if("function"!=typeof t[r])throw new Error("Expected function value for locale "+JSON.stringify(r));this.pluralFuncs[r]=t[r]}this.fmt={},this.runtime=new i(this)}u.defaultLocale="en",u.escape=function(t){return t.replace(/[#{}\\]/g,"\\$&")},u.formatters={number:function(t){return new Function("v,lc,p","return new Intl.NumberFormat(lc,\n    p=='integer' ? {maximumFractionDigits:0}\n  : p=='percent' ? {style:'percent'}\n  : p=='currency' ? {style:'currency', currency:'"+(t.currency||"USD")+"', minimumFractionDigits:2, maximumFractionDigits:2}\n  : {}).format(v)")},date:function(t,r,e){var n={day:"numeric",month:"short",year:"numeric"};switch(e){case"full":n.weekday="long";case"long":n.month="long";break;case"short":n.month="numeric"}return new Date(t).toLocaleDateString(r,n)},time:function(t,r,e){var n={second:"numeric",minute:"numeric",hour:"numeric"};switch(e){case"full":case"long":n.timeZoneName="short";break;case"short":delete n.second}return new Date(t).toLocaleTimeString(r,n)}},u.prototype.addFormatters=function(t){for(var r in t)t.hasOwnProperty(r)&&(this.fmt[r]=t[r]);return this},u.prototype.disablePluralKeyChecks=function(){for(var t in this.noPluralKeyChecks=!0,this.pluralFuncs)this.pluralFuncs.hasOwnProperty(t)&&(this.pluralFuncs[t].cardinal=[],this.pluralFuncs[t].ordinal=[]);return this},u.prototype.setBiDiSupport=function(t){return this.bidiSupport=!!t||void 0===t,this},u.prototype.setIntlSupport=function(t){return this.intlSupport=!!t||void 0===t,this},u.prototype.setStrictNumberSign=function(t){return this.strictNumberSign=!!t||void 0===t,this.runtime.setStrictNumber(this.strictNumberSign),this},u.prototype.compile=function(t,r){function e(t,r){if(r||(r=0),"object"!=typeof t)return t;for(var i=[],o="",u=0;u<r;++u)o+="  ";for(var s in t)i.push("\n"+o+"  "+n.propname(s)+": "+e(t[s],r+1));return"{"+i.join(",")+"\n"+o+"}"}var i;if(0==Object.keys(this.pluralFuncs).length)r||(r=u.defaultLocale),(i={})[r]=o(r,this.noPluralKeyChecks);else if(r){if((i={})[r]=this.pluralFuncs[r],!i[r])throw new Error("Locale "+JSON.stringify(r)+"not found in "+JSON.stringify(this.pluralFuncs)+"!")}else i=this.pluralFuncs,r=Object.keys(i)[0];var s=new n(this),a=s.compile(t,r,i);if("object"!=typeof t){var c=new Function("number, plural, select, fmt",n.funcname(r),"return "+a),f=this.runtime;return c(f.number,f.plural,f.select,this.fmt,i[r])}var l=this.runtime.toString(i,s)+"\n",h=e(a),p=new Function(l+"return "+h)();if(p.hasOwnProperty("toString"))throw new Error("The top-level message key `toString` is reserved");return p.toString=function(t){switch(t||""){case"exports":var r=[];for(var i in a)r.push(n.propname(i,"exports")+" = "+e(a[i]));return l+r.join(";\n");case"module.exports":return l+"module.exports = "+h;case"export default":return l+"export default "+h;case"":return l+"return "+h;default:return t.indexOf(".")>-1?l+t+" = "+h:l+["(function (root, G) {",'  if (typeof define === "function" && define.amd) { define(G); }','  else if (typeof exports === "object") { module.exports = G; }',"  else { "+n.propname(t,"root")+" = G; }","})(this, "+h+");"].join("\n")}},p},t.exports=u},UvcA:function(t,r,e){var n=e("ywgP");function i(t){this.mf=t,this.setStrictNumber(t.strictNumberSign)}function o(t,r,e){if(!e)return t;if(isNaN(t))throw new Error("Can't apply offset:"+e+" to argument `"+r+"` with non-numerical value "+JSON.stringify(t)+".");return t-e}function u(t,r,e){if(isNaN(t))throw new Error("Argument `"+r+"` has non-numerical value "+JSON.stringify(t)+".");return t-(e||0)}t.exports=i,i.prototype.setStrictNumber=function(t){this.number=t?u:o},i.prototype.plural=function(t,r,e,n,i){if({}.hasOwnProperty.call(n,t))return n[t];r&&(t-=r);var o=e(t,i);return o in n?n[o]:n.other},i.prototype.select=function(t,r){return{}.hasOwnProperty.call(r,t)?r[t]:r.other},i.prototype.toString=function(t,r){var e={};Object.keys(r.locales).forEach((function(r){e[n.funcname(r)]=t[r]})),Object.keys(r.runtime).forEach((function(t){e[t]=this[t]}),this);var i=Object.keys(r.formatters),o=this.mf.fmt;return i.length&&(e.fmt=i.reduce((function(t,r){return t[r]=o[r],t}),{})),function t(r,e){if("object"!=typeof r){var i=r.toString().replace(/^(function )\w*/,"$1");return(s=/([ \t]*)\S.*$/.exec(i))?i.replace(new RegExp("^"+s[1],"mg"),""):i}var o=[];for(var u in r)0==e?o.push("var "+u+" = "+t(r[u],e+1)+";\n"):o.push(n.propname(u)+": "+t(r[u],e+1));if(0==e)return o.join("");if(0==o.length)return"{}";for(var s="  ";--e;)s+="  ";return"{\n"+o.join(",\n").replace(/^/gm,s)+"\n}"}(e,0)}},ywgP:function(t,r,e){var n=e("3vsc"),i=e("NXKb").parse;function o(t){this.mf=t,this.lc=null,this.locales={},this.runtime={},this.formatters={}}t.exports=o,o.propname=function(t,r){if(/^[A-Z_$][0-9A-Z_$]*$/i.test(t)&&["break","continue","delete","else","for","function","if","in","new","return","this","typeof","var","void","while","with","case","catch","default","do","finally","instanceof","switch","throw","try"].indexOf(t)<0)return r?r+"."+t:t;var e=JSON.stringify(t);return r?r+"["+e+"]":e},o.funcname=function(t){var r=t.trim().replace(/\W+/g,"_");return n.check(r,"es2015",!0)||/^\d/.test(r)?"_"+r:r},o.bidiMarkText=function(t,r){var e=JSON.stringify(function(t){return new RegExp("^"+["ar","ckb","fa","he","ks($|[^bfh])","lrc","mzn","pa-Arab","ps","ug","ur","uz-Arab","yi"].join("|^")).test(t)}(r)?"‏":"‎");return e+" + "+t+" + "+e},o.prototype.cases=function(t,r){var e=!0,n=t.cases.map((function(t){"other"===t.key&&(e=!1);var n=t.tokens.map((function(t){return this.token(t,r)}),this);return o.propname(t.key)+": "+(n.join(" + ")||'""')}),this);if(e)throw new Error("No 'other' form found in "+JSON.stringify(t));return"{ "+n.join(", ")+" }"},o.prototype.token=function(t,r){if("string"==typeof t)return JSON.stringify(t);var e,n=[o.propname(t.arg,"d")];switch(t.type){case"argument":return this.mf.bidiSupport?o.bidiMarkText(n[0],this.lc):n[0];case"select":e="select",n.push(this.cases(t,this.mf.strictNumberSign?null:r)),this.runtime.select=!0;break;case"selectordinal":e="plural",n.push(0,o.funcname(this.lc),this.cases(t,t),1),this.locales[this.lc]=!0,this.runtime.plural=!0;break;case"plural":e="plural",n.push(t.offset||0,o.funcname(this.lc),this.cases(t,t)),this.locales[this.lc]=!0,this.runtime.plural=!0;break;case"function":if(this.mf.intlSupport&&!(t.key in this.mf.fmt)&&t.key in this.mf.constructor.formatters){var i=this.mf.constructor.formatters[t.key];this.mf.fmt[t.key]="function"==typeof i(this.mf)?i(this.mf):i}if(!this.mf.fmt[t.key])throw new Error("Formatting function "+JSON.stringify(t.key)+" not found!");if(n.push(JSON.stringify(this.lc)),t.params)switch(t.params.length){case 0:break;case 1:n.push(JSON.stringify(t.params[0]));break;default:n.push(JSON.stringify(t.params))}e=o.propname(t.key,"fmt"),this.formatters[t.key]=!0;break;case"octothorpe":if(!r)return'"#"';e="number",n=[o.propname(r.arg,"d"),JSON.stringify(r.arg)],r.offset&&n.push(r.offset),this.runtime.number=!0}if(!e)throw new Error("Parser error for token "+JSON.stringify(t));return e+"("+n.join(", ")+")"},o.prototype.compile=function(t,r,e){if("object"!=typeof t){this.lc=r;var n=e[r]||{cardinal:[],ordinal:[]};return"function(d) { return "+(i(t,n).map((function(t){return this.token(t)}),this).join(" + ")||'""')+"; }"}var o={};for(var u in t){var s=e.hasOwnProperty(u)?u:r;o[u]=this.compile(t[u],s,e)}return o}}}]);