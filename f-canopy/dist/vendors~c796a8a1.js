(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{KNin:function(t,e,r){var n;
/*!
 * angular-translate - v2.18.2 - 2020-01-04
 * 
 * Copyright (c) 2020 The angular-translate team, Pascal Precht; Licensed MIT
 */void 0===(n=function(){return function(){function t(t){"use strict";var e=t.storageKey(),r=t.storage(),n=function(){var n=t.preferredLanguage();angular.isString(n)?t.use(n):r.put(e,t.use())};n.displayName="fallbackFromIncorrectStorageValue",r?r.get(e)?t.use(r.get(e)).catch(n):n():angular.isString(t.preferredLanguage())&&t.use(t.preferredLanguage())}function e(t,e,r,n){"use strict";var a,i,s,o,l,u,c,f,g,p,h,d,v,m,y,$,b={},w=[],S=t,L=[],C="translate-cloak",j=!1,N=!1,E=".",T=!1,P=!1,A=0,O=!0,k="default",F={default:function(t){return(t||"").split("-").join("_")},java:function(t){var e=(t||"").split("-").join("_"),r=e.split("_");return r.length>1?r[0].toLowerCase()+"_"+r[1].toUpperCase():e},bcp47:function(t){var e=(t||"").split("_").join("-"),r=e.split("-");switch(r.length){case 1:r[0]=r[0].toLowerCase();break;case 2:r[0]=r[0].toLowerCase(),4===r[1].length?r[1]=r[1].charAt(0).toUpperCase()+r[1].slice(1).toLowerCase():r[1]=r[1].toUpperCase();break;case 3:r[0]=r[0].toLowerCase(),r[1]=r[1].charAt(0).toUpperCase()+r[1].slice(1).toLowerCase(),r[2]=r[2].toUpperCase();break;default:return e}return r.join("-")},"iso639-1":function(t){return(t||"").split("_").join("-").split("-")[0].toLowerCase()}},I=function(){if(angular.isFunction(n.getLocale))return n.getLocale();var t,r,a=e.$get().navigator,i=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(a.languages))for(t=0;t<a.languages.length;t++)if((r=a.languages[t])&&r.length)return r;for(t=0;t<i.length;t++)if((r=a[i[t]])&&r.length)return r;return null};I.displayName="angular-translate/service: getFirstBrowserLanguage";var x=function(){var t=I()||"";return F[k]&&(t=F[k](t)),t};x.displayName="angular-translate/service: getLocale";var z=function(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},_=function(){return this.toString().replace(/^\s+|\s+$/g,"")},R=function(t){return angular.isString(t)?t.toLowerCase():t},V=function(t){if(t){for(var e,r=[],n=R(t),a=0,s=w.length;a<s;a++)r.push(R(w[a]));if((a=z(r,n))>-1)return w[a];if(i)for(var o in i)if(i.hasOwnProperty(o)){var l=!1,u=Object.prototype.hasOwnProperty.call(i,o)&&R(o)===R(t);if("*"===o.slice(-1)&&(l=R(o.slice(0,-1))===R(t.slice(0,o.length-1))),(u||l)&&(e=i[o],z(r,R(e))>-1))return e}var c=t.split("_");return c.length>1&&z(r,R(c[0]))>-1?c[0]:void 0}},U=function(t,e){if(!t&&!e)return b;if(t&&!e){if(angular.isString(t))return b[t]}else angular.isObject(b[t])||(b[t]={}),angular.extend(b[t],D(e));return this};this.translations=U,this.cloakClassName=function(t){return t?(C=t,this):C},this.nestedObjectDelimeter=function(t){return t?(E=t,this):E};var D=function(t,e,r,n){var a,i,s;for(a in e||(e=[]),r||(r={}),t)Object.prototype.hasOwnProperty.call(t,a)&&(s=t[a],angular.isObject(s)?D(s,e.concat(a),r,a):(i=e.length?""+e.join(E)+E+a:a,e.length&&a===n&&(r[""+e.join(E)]="@:"+i),r[i]=s));return r};D.displayName="flatObject",this.addInterpolation=function(t){return L.push(t),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(t){return p=t,this},this.useSanitizeValueStrategy=function(t){return r.useStrategy(t),this},this.preferredLanguage=function(t){return t?(K(t),this):a};var K=function(t){return t&&(a=t),a};this.translationNotFoundIndicator=function(t){return this.translationNotFoundIndicatorLeft(t),this.translationNotFoundIndicatorRight(t),this},this.translationNotFoundIndicatorLeft=function(t){return t?(v=t,this):v},this.translationNotFoundIndicatorRight=function(t){return t?(m=t,this):m},this.fallbackLanguage=function(t){return M(t),this};var M=function(t){return t?(angular.isString(t)?(o=!0,s=[t]):angular.isArray(t)&&(o=!1,s=t),angular.isString(a)&&z(s,a)<0&&s.push(a),this):o?s[0]:s};this.use=function(t){if(t){if(!b[t]&&!h)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+t+"'");return l=t,this}return l},this.resolveClientLocale=function(){return x()};var H=function(t){return t?(S=t,this):f?f+S:S};this.storageKey=H,this.useUrlLoader=function(t,e){return this.useLoader("$translateUrlLoader",angular.extend({url:t},e))},this.useStaticFilesLoader=function(t){return this.useLoader("$translateStaticFilesLoader",t)},this.useLoader=function(t,e){return h=t,d=e||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(t){return c=t,this},this.storagePrefix=function(t){return t?(f=t,this):t},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(t){return g=t,this},this.usePostCompiling=function(t){return j=!!t,this},this.forceAsyncReload=function(t){return N=!!t,this},this.uniformLanguageTag=function(t){return t?angular.isString(t)&&(t={standard:t}):t={},k=t.standard,this},this.determinePreferredLanguage=function(t){var e=t&&angular.isFunction(t)?t():x();return a=w.length&&V(e)||e,this},this.registerAvailableLanguageKeys=function(t,e){return t?(w=t,e&&(i=e),this):w},this.useLoaderCache=function(t){return!1===t?y=void 0:!0===t?y=!0:void 0===t?y="$translationCache":t&&(y=t),this},this.directivePriority=function(t){return void 0===t?A:(A=t,this)},this.statefulFilter=function(t){return void 0===t?O:(O=t,this)},this.postProcess=function(t){return $=t||void 0,this},this.keepContent=function(t){return P=!!t,this},this.$get=["$log","$injector","$rootScope","$q",function(t,e,r,n){var i,f,k,F=e.get(p||"$translateDefaultInterpolation"),I=!1,R={},G={},q=function(t,e,r,o,u,g){!l&&a&&(l=a);var p=u&&u!==l?V(u)||u:l;if(u&&it(u),angular.isArray(t))return function(t){for(var a={},i=[],s=function(t){var i=n.defer(),s=function(e){a[t]=e,i.resolve([t,e])};return q(t,e,r,o,u,g).then(s,s),i.promise},l=0,c=t.length;l<c;l++)i.push(s(t[l]));return n.all(i).then((function(){return a}))}(t);var h=n.defer();if(!t)throw new TypeError("translationId must be a not empty string");t=_.apply(t);var d=function(){var t=G[p]||G[a];if(f=0,c&&!t){var e=i.get(S);if(t=G[e],s&&s.length){var r=z(s,e);f=0===r?1:0,z(s,a)<0&&s.push(a)}}return t}();if(d){var v=function(){u||(p=l),rt(t,e,r,o,p,g).then(h.resolve,h.reject)};v.displayName="promiseResolved",d.finally(v).catch(angular.noop)}else rt(t,e,r,o,p,g).then(h.resolve,h.reject);return h.promise},Y=function(t){return v&&(t=[v,t].join(" ")),m&&(t=[t,m].join(" ")),t},Q=function(t){l=t,c&&i.put(q.storageKey(),l),r.$emit("$translateChangeSuccess",{language:t}),F.setLocale(l);var e=function(t,e){R[e].setLocale(l)};e.displayName="eachInterpolatorLocaleSetter",angular.forEach(R,e),r.$emit("$translateChangeEnd",{language:t})},B=function(t){if(!t)throw"No language key specified for loading.";var a=n.defer();r.$emit("$translateLoadingStart",{language:t}),I=!0;var i=y;"string"==typeof i&&(i=e.get(i));var s=angular.extend({},d,{key:t,$http:angular.extend({},{cache:i},d.$http)}),o=function(e){var n={};r.$emit("$translateLoadingSuccess",{language:t}),angular.isArray(e)?angular.forEach(e,(function(t){angular.extend(n,D(t))})):angular.extend(n,D(e)),I=!1,a.resolve({key:t,table:n}),r.$emit("$translateLoadingEnd",{language:t})};o.displayName="onLoaderSuccess";var l=function(t){r.$emit("$translateLoadingError",{language:t}),a.reject(t),r.$emit("$translateLoadingEnd",{language:t})};return l.displayName="onLoaderError",e.get(h)(s).then(o,l),a.promise};if(c&&(!(i=e.get(c)).get||!i.put))throw new Error("Couldn't use storage '"+c+"', missing get() or put() method!");if(L.length){var J=function(t){var r=e.get(t);r.setLocale(a||l),R[r.getInterpolationIdentifier()]=r};J.displayName="interpolationFactoryAdder",angular.forEach(L,J)}var W=function(t,e,r,a,i){var s=n.defer(),o=function(n){if(Object.prototype.hasOwnProperty.call(n,e)&&null!==n[e]){a.setLocale(t);var o=n[e];if("@:"===o.substr(0,2))W(t,o.substr(2),r,a,i).then(s.resolve,s.reject);else{var u=a.interpolate(n[e],r,"service",i,e);u=at(e,n[e],u,r,t),s.resolve(u)}a.setLocale(l)}else s.reject()};return o.displayName="fallbackTranslationResolver",function(t){var e=n.defer();if(Object.prototype.hasOwnProperty.call(b,t))e.resolve(b[t]);else if(G[t]){var r=function(t){U(t.key,t.table),e.resolve(t.table)};r.displayName="translationTableResolver",G[t].then(r,e.reject)}else e.reject();return e.promise}(t).then(o,s.reject),s.promise},X=function(t,e,r,n,a){var i,s=b[t];if(s&&Object.prototype.hasOwnProperty.call(s,e)&&null!==s[e]){if(n.setLocale(t),i=n.interpolate(s[e],r,"filter",a,e),i=at(e,s[e],i,r,t,a),!angular.isString(i)&&angular.isFunction(i.$$unwrapTrustedValue)){var o=i.$$unwrapTrustedValue();if("@:"===o.substr(0,2))return X(t,o.substr(2),r,n,a)}else if("@:"===i.substr(0,2))return X(t,i.substr(2),r,n,a);n.setLocale(l)}return i},Z=function(t,r,n,a){return g?e.get(g)(t,l,r,n,a):t},tt=function(t,e,r,a,i,o){var l=n.defer();if(t<s.length){var u=s[t];W(u,e,r,a,o).then((function(t){l.resolve(t)}),(function(){return tt(t+1,e,r,a,i,o).then(l.resolve,l.reject)}))}else if(i)l.resolve(i);else{var c=Z(e,r,i);g&&c?l.resolve(c):l.reject(Y(e))}return l.promise},et=function(t,e,r,n,a){var i;if(t<s.length){var o=s[t];(i=X(o,e,r,n,a))||""===i||(i=et(t+1,e,r,n))}return i},rt=function(t,e,r,a,i,o){var l=n.defer(),u=i?b[i]:b,c=r?R[r]:F;if(u&&Object.prototype.hasOwnProperty.call(u,t)&&null!==u[t]){var p=u[t];if("@:"===p.substr(0,2))q(p.substr(2),e,r,a,i,o).then(l.resolve,l.reject);else{var h=c.interpolate(p,e,"service",o,t);h=at(t,p,h,e,i),l.resolve(h)}}else{var d;g&&!I&&(d=Z(t,e,a)),i&&s&&s.length?function(t,e,r,n,a){return tt(k>0?k:f,t,e,r,n,a)}(t,e,c,a,o).then((function(t){l.resolve(t)}),(function(t){l.reject(Y(t))})):g&&!I&&d?a?l.resolve(a):l.resolve(d):a?l.resolve(a):l.reject(Y(t))}return l.promise},nt=function(t,e,r,n,a){var i,o=n?b[n]:b,l=F;if(R&&Object.prototype.hasOwnProperty.call(R,r)&&(l=R[r]),o&&Object.prototype.hasOwnProperty.call(o,t)&&null!==o[t]){var u=o[t];"@:"===u.substr(0,2)?i=nt(u.substr(2),e,r,n,a):(i=l.interpolate(u,e,"filter",a,t),i=at(t,u,i,e,n,a))}else{var c;g&&!I&&(c=Z(t,e,a)),n&&s&&s.length?(f=0,i=function(t,e,r,n){return et(k>0?k:f,t,e,r,n)}(t,e,l,a)):i=g&&!I&&c?c:Y(t)}return i},at=function(t,r,n,a,i,s){var o=$;return o&&("string"==typeof o&&(o=e.get(o)),o)?o(t,r,n,a,i,s):n},it=function(t){b[t]||!h||G[t]||(G[t]=B(t).then((function(t){return U(t.key,t.table),t})))};q.preferredLanguage=function(t){return t&&K(t),a},q.cloakClassName=function(){return C},q.nestedObjectDelimeter=function(){return E},q.fallbackLanguage=function(t){if(null!=t){if(M(t),h&&s&&s.length)for(var e=0,r=s.length;e<r;e++)G[s[e]]||(G[s[e]]=B(s[e]));q.use(q.use())}return o?s[0]:s},q.useFallbackLanguage=function(t){if(null!=t)if(t){var e=z(s,t);e>-1&&(k=e)}else k=0},q.proposedLanguage=function(){return u},q.storage=function(){return i},q.negotiateLocale=V,q.use=function(t){if(!t)return l;var e=n.defer();e.promise.then(null,angular.noop),r.$emit("$translateChangeStart",{language:t});var a=V(t);return w.length>0&&!a?n.reject(t):(a&&(t=a),u=t,!N&&b[t]||!h||G[t]?G[t]?G[t].then((function(t){return u===t.key&&Q(t.key),e.resolve(t.key),t}),(function(t){return!l&&s&&s.length>0&&s[0]!==t?q.use(s[0]).then(e.resolve,e.reject):e.reject(t)})):(e.resolve(t),Q(t)):(G[t]=B(t).then((function(r){return U(r.key,r.table),e.resolve(r.key),u===t&&Q(r.key),r}),(function(t){return r.$emit("$translateChangeError",{language:t}),e.reject(t),r.$emit("$translateChangeEnd",{language:t}),n.reject(t)})),G[t].finally((function(){!function(t){u===t&&(u=void 0),G[t]=void 0}(t)})).catch(angular.noop)),e.promise)},q.resolveClientLocale=function(){return x()},q.storageKey=function(){return H()},q.isPostCompilingEnabled=function(){return j},q.isForceAsyncReloadEnabled=function(){return N},q.isKeepContent=function(){return P},q.refresh=function(t){if(!h)throw new Error("Couldn't refresh translation table, no loader registered!");r.$emit("$translateRefreshStart",{language:t});var e=n.defer(),a={};function i(t){var e=B(t);return G[t]=e,e.then((function(e){b[t]={},U(t,e.table),a[t]=!0}),angular.noop),e}if(e.promise.then((function(){for(var t in b)b.hasOwnProperty(t)&&(t in a||delete b[t]);l&&Q(l)}),angular.noop).finally((function(){r.$emit("$translateRefreshEnd",{language:t})})),t)b[t]?i(t).then(e.resolve,e.reject):e.reject();else{var o=s&&s.slice()||[];l&&-1===o.indexOf(l)&&o.push(l),n.all(o.map(i)).then(e.resolve,e.reject)}return e.promise},q.instant=function(t,e,r,n,i){var o=n&&n!==l?V(n)||n:l;if(null===t||angular.isUndefined(t))return t;if(n&&it(n),angular.isArray(t)){for(var u={},c=0,f=t.length;c<f;c++)u[t[c]]=q.instant(t[c],e,r,n,i);return u}if(angular.isString(t)&&t.length<1)return t;t&&(t=_.apply(t));var p,h,d=[];a&&d.push(a),o&&d.push(o),s&&s.length&&(d=d.concat(s));for(var y=0,$=d.length;y<$;y++){var w=d[y];if(b[w]&&void 0!==b[w][t]&&(p=nt(t,e,r,o,i)),void 0!==p)break}return p||""===p||(v||m?p=Y(t):(p=F.interpolate(t,e,"filter",i),g&&!I&&(h=Z(t,e,i)),g&&!I&&h&&(p=h))),p},q.versionInfo=function(){return"2.18.2"},q.loaderCache=function(){return y},q.directivePriority=function(){return A},q.statefulFilter=function(){return O},q.isReady=function(){return T};var st=n.defer();st.promise.then((function(){T=!0})),q.onReady=function(t){var e=n.defer();return angular.isFunction(t)&&e.promise.then(t),T?e.resolve():st.promise.then(e.resolve),e.promise},q.getAvailableLanguageKeys=function(){return w.length>0?w:null},q.getTranslationTable=function(t){return(t=t||q.use())&&b[t]?angular.copy(b[t]):null};var ot=r.$on("$translateReady",(function(){st.resolve(),ot(),ot=null})),lt=r.$on("$translateChangeEnd",(function(){st.resolve(),lt(),lt=null}));if(h){if(angular.equals(b,{})&&q.use()&&q.use(q.use()),s&&s.length)for(var ut=function(t){return U(t.key,t.table),r.$emit("$translateChangeEnd",{language:t.key}),t},ct=0,ft=s.length;ct<ft;ct++){var gt=s[ct];!N&&b[gt]||(G[gt]=B(gt).then(ut))}}else r.$emit("$translateReady",{language:q.use()});return q}]}function r(t,e){"use strict";var r={setLocale:function(t){},getInterpolationIdentifier:function(){return"default"},useSanitizeValueStrategy:function(t){return e.useStrategy(t),this},interpolate:function(r,n,a,i,s){var o;return n=n||{},n=e.sanitize(n,"params",i,a),angular.isNumber(r)?o=""+r:angular.isString(r)?(o=t(r)(n),o=e.sanitize(o,"text",i,a)):o="",o}};return r}function n(t,e,r,n,a){"use strict";var i=function(){return this.toString().replace(/^\s+|\s+$/g,"")},s=function(t){return angular.isString(t)?t.toLowerCase():t};return{restrict:"AE",scope:!0,priority:t.directivePriority(),compile:function(o,l){var u=l.translateValues?l.translateValues:void 0,c=l.translateInterpolation?l.translateInterpolation:void 0,f=l.translateSanitizeStrategy?l.translateSanitizeStrategy:void 0,g=o[0].outerHTML.match(/translate-value-+/i),p="^(.*)("+e.startSymbol()+".*"+e.endSymbol()+")(.*)",h="^(.*)"+e.startSymbol()+"(.*)"+e.endSymbol()+"(.*)";return function(o,d,v){o.interpolateParams={},o.preText="",o.postText="",o.translateNamespace=function t(e){return e.translateNamespace?e.translateNamespace:e.$parent?t(e.$parent):void 0}(o);var m={},y=function(t){if(angular.isFunction(y._unwatchOld)&&(y._unwatchOld(),y._unwatchOld=void 0),angular.equals(t,"")||!angular.isDefined(t)){var r=i.apply(d.text()).replace(/\n/g," "),n=r.match(p);if(angular.isArray(n)){o.preText=n[1],o.postText=n[3],m.translate=e(n[2])(o.$parent);var a=r.match(h);angular.isArray(a)&&a[2]&&a[2].length&&(y._unwatchOld=o.$watch(a[2],(function(t){m.translate=t,C()})))}else m.translate=r||void 0}else m.translate=t;C()},$=function(t){v.$observe(t,(function(e){m[t]=e,C()}))};!function(t,e,r){if(e.translateValues&&angular.extend(t,n(e.translateValues)(o.$parent)),g)for(var a in r)Object.prototype.hasOwnProperty.call(e,a)&&"translateValue"===a.substr(0,14)&&"translateValues"!==a&&(t[s(a.substr(14,1))+a.substr(15)]=r[a])}(o.interpolateParams,v,l);var b=!0;for(var w in v.$observe("translate",(function(t){void 0===t?y(""):""===t&&b||(m.translate=t,C()),b=!1})),v)v.hasOwnProperty(w)&&"translateAttr"===w.substr(0,13)&&w.length>13&&$(w);if(v.$observe("translateDefault",(function(t){o.defaultText=t,C()})),f&&v.$observe("translateSanitizeStrategy",(function(t){o.sanitizeStrategy=n(t)(o.$parent),C()})),u&&v.$observe("translateValues",(function(t){t&&o.$parent.$watch((function(){angular.extend(o.interpolateParams,n(t)(o.$parent))}))})),g){var S=function(t){v.$observe(t,(function(e){var r=s(t.substr(14,1))+t.substr(15);o.interpolateParams[r]=e}))};for(var L in v)Object.prototype.hasOwnProperty.call(v,L)&&"translateValue"===L.substr(0,14)&&"translateValues"!==L&&S(L)}var C=function(){for(var t in m)m.hasOwnProperty(t)&&void 0!==m[t]&&j(t,m[t],o,o.interpolateParams,o.defaultText,o.translateNamespace)},j=function(e,r,n,a,i,s){r?(s&&"."===r.charAt(0)&&(r=s+r),t(r,a,c,i,n.translateLanguage,n.sanitizeStrategy).then((function(t){N(t,n,!0,e)}),(function(t){N(t,n,!1,e)}))):N(r,n,!1,e)},N=function(e,n,a,i){if(a||void 0!==n.defaultText&&(e=n.defaultText),"translate"===i){(a||!a&&!t.isKeepContent()&&void 0===v.translateKeepContent)&&d.empty().append(n.preText+e+n.postText);var s=t.isPostCompilingEnabled(),o=void 0!==l.translateCompile,u=o&&"false"!==l.translateCompile;(s&&!o||u)&&r(d.contents())(n)}else{var c=v.$attr[i];"data-"===c.substr(0,5)&&(c=c.substr(5)),c=c.substr(15),d.attr(c,e)}};(u||g||v.translateDefault)&&o.$watch("interpolateParams",C,!0),o.$on("translateLanguageChanged",C);var E=a.$on("$translateChangeSuccess",C);d.text().length?v.translate?y(v.translate):y(""):v.translate&&y(v.translate),C(),o.$on("$destroy",E)}}}}function a(t,e){"use strict";return{restrict:"A",priority:t.directivePriority(),link:function(r,n,a){var s,o,l,u={},c=function(){angular.forEach(s,(function(e,i){e&&(u[i]=!0,r.translateNamespace&&"."===e.charAt(0)&&(e=r.translateNamespace+e),t(e,o,a.translateInterpolation,void 0,r.translateLanguage,l).then((function(t){n.attr(i,t)}),(function(t){n.attr(i,t)})))})),angular.forEach(u,(function(t,e){s[e]||(n.removeAttr(e),delete u[e])}))};i(r,a.translateAttr,(function(t){s=t}),c),i(r,a.translateValues,(function(t){o=t}),c),i(r,a.translateSanitizeStrategy,(function(t){l=t}),c),a.translateValues&&r.$watch(a.translateValues,c,!0),r.$on("translateLanguageChanged",c);var f=e.$on("$translateChangeSuccess",c);c(),r.$on("$destroy",f)}}}function i(t,e,r,n){"use strict";e&&("::"===e.substr(0,2)?e=e.substr(2):t.$watch(e,(function(t){r(t),n()}),!0),r(t.$eval(e)))}function s(t,e){"use strict";return{compile:function(r){var n=function(e){e.addClass(t.cloakClassName())},a=function(e){e.removeClass(t.cloakClassName())};return n(r),function(r,i,s){var o=a.bind(this,i),l=n.bind(this,i);s.translateCloak&&s.translateCloak.length?(s.$observe("translateCloak",(function(e){t(e).then(o,l)})),e.$on("$translateChangeSuccess",(function(){t(s.translateCloak).then(o,l)}))):t.onReady(o)}}}}function o(){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,e,r){t.translateNamespace=function t(e){return e.translateNamespace?e.translateNamespace:e.$parent?t(e.$parent):void 0}(t),t.translateNamespace&&"."===r.translateNamespace.charAt(0)?t.translateNamespace+=r.translateNamespace:t.translateNamespace=r.translateNamespace}}}}}function l(){"use strict";return{restrict:"A",scope:!0,compile:function(){return function(t,e,r){r.$observe("translateLanguage",(function(e){t.translateLanguage=e})),t.$watch("translateLanguage",(function(){t.$broadcast("translateLanguageChanged")}))}}}}function u(t,e){"use strict";var r=function(r,n,a,i){if(!angular.isObject(n)){var s=this||{__SCOPE_IS_NOT_AVAILABLE:"More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f"};n=t(n)(s)}return e.instant(r,n,a,i)};return e.statefulFilter()&&(r.$stateful=!0),r}function c(t){"use strict";return t("translations")}return t.$inject=["$translate"],e.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],r.$inject=["$interpolate","$translateSanitization"],n.$inject=["$translate","$interpolate","$compile","$parse","$rootScope"],a.$inject=["$translate","$rootScope"],s.$inject=["$translate","$rootScope"],u.$inject=["$parse","$translate"],c.$inject=["$cacheFactory"],angular.module("pascalprecht.translate",["ng"]).run(t),t.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",(function(){"use strict";var t,e,r,n=null,a=!1,i=!1;(r={sanitize:function(t,e){return"text"===e&&(t=o(t)),t},escape:function(t,e){return"text"===e&&(t=s(t)),t},sanitizeParameters:function(t,e){return"params"===e&&(t=u(t,o)),t},escapeParameters:function(t,e){return"params"===e&&(t=u(t,s)),t},sce:function(t,e,r){return"text"===e?t=l(t):"params"===e&&"filter"!==r&&(t=u(t,s)),t},sceParameters:function(t,e){return"params"===e&&(t=u(t,l)),t}}).escaped=r.escapeParameters,this.addStrategy=function(t,e){return r[t]=e,this},this.removeStrategy=function(t){return delete r[t],this},this.useStrategy=function(t){return a=!0,n=t,this},this.$get=["$injector","$log",function(s,o){var l,u={};return s.has("$sanitize")&&(t=s.get("$sanitize")),s.has("$sce")&&(e=s.get("$sce")),{useStrategy:(l=this,function(t){l.useStrategy(t)}),sanitize:function(t,e,l,c){return n||a||i||(o.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),i=!0),l||null===l||(l=n),l?(c||(c="service"),function(t,e,n,a){return angular.forEach(a,(function(a){if(angular.isFunction(a))t=a(t,e,n);else if(angular.isFunction(r[a]))t=r[a](t,e,n);else{if(!angular.isString(r[a]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+a+"'");if(!u[r[a]])try{u[r[a]]=s.get(r[a])}catch(t){throw u[r[a]]=function(){},new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+a+"'")}t=u[r[a]](t,e,n)}})),t}(t,e,c,angular.isArray(l)?l:[l])):t}}}];var s=function(t){var e=angular.element("<div></div>");return e.text(t),e.html()},o=function(e){if(!t)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return t(e)},l=function(t){if(!e)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sce service.");return e.trustAsHtml(t)},u=function(t,e,r){if(angular.isDate(t))return t;if(angular.isObject(t)){var n=angular.isArray(t)?[]:{};if(r){if(r.indexOf(t)>-1)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object")}else r=[];return r.push(t),angular.forEach(t,(function(t,a){angular.isFunction(t)||(n[a]=u(t,e,r))})),r.splice(-1,1),n}return angular.isNumber(t)||!0===t||!1===t||angular.isUndefined(t)||null===t?t:e(t)}})),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",e),e.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",r),r.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",n),n.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateAttr",a),a.displayName="translateAttrDirective",angular.module("pascalprecht.translate").directive("translateCloak",s),s.displayName="translateCloakDirective",angular.module("pascalprecht.translate").directive("translateNamespace",o),o.displayName="translateNamespaceDirective",angular.module("pascalprecht.translate").directive("translateLanguage",l),l.displayName="translateLanguageDirective",angular.module("pascalprecht.translate").filter("translate",u),u.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",c),c.displayName="$translationCache","pascalprecht.translate"}()}.apply(e,[]))||(t.exports=n)},NFdj:function(t,e,r){r("QfrQ"),t.exports=angular},RxAD:function(t,e,r){var n,a;
/*!
 * angular-translate - v2.18.2 - 2020-01-04
 * 
 * Copyright (c) 2020 The angular-translate team, Pascal Precht; Licensed MIT
 */n=[r("RQRI")],void 0===(a=function(t){return function(t){function e(e,r,n,a){"use strict";var i={},s=r.get(n),o=new t("en");return angular.isFunction(a)&&a(o),s||(s=r(n)),s.put("en",o),i.setLocale=function(e){(o=s.get(e))||(o=new t(e),angular.isFunction(a)&&a(o),s.put(e,o))},i.getInterpolationIdentifier=function(){return"messageformat"},i.useSanitizeValueStrategy=function(t){return e.useStrategy(t),this},i.interpolate=function(t,r,n,a){r=r||{},r=e.sanitize(r,"params",a);var i=s.get("mf:"+t);if(!i){for(var l in r)if(r.hasOwnProperty(l)){var u=parseInt(r[l],10);angular.isNumber(u)&&""+u===r[l]&&(r[l]=u)}i=o.compile(t),s.put("mf:"+t,i)}var c=i(r);return e.sanitize(c,"text",a)},i}return angular.module("pascalprecht.translate").constant("TRANSLATE_MF_INTERPOLATION_CACHE","$translateMessageFormatInterpolation").provider("$translateMessageFormatInterpolation",(function(){"use strict";var t;this.messageFormatConfigurer=function(e){t=e},this.$get=["$translateSanitization","$cacheFactory","TRANSLATE_MF_INTERPOLATION_CACHE",function(r,n,a){return e(r,n,a,t)}]})),e.displayName="$translateMessageFormatInterpolation","pascalprecht.translate"}(t)}.apply(e,n))||(t.exports=a)},vUE2:function(t,e,r){var n;
/*!
 * angular-translate - v2.18.2 - 2020-01-04
 * 
 * Copyright (c) 2020 The angular-translate team, Pascal Precht; Licensed MIT
 */void 0===(n=function(){return function(){function t(){"use strict";function t(t,e,r){this.name=t,this.isActive=!0,this.tables={},this.priority=e||0,this.langPromises={},this.urlTemplate=r}t.prototype.parseUrl=function(t,e){return angular.isFunction(t)?t(this.name,e):t.replace(/\{part\}/g,this.name).replace(/\{lang\}/g,e)},t.prototype.getTable=function(t,e,r,n,a,i){var s=this,o=this.langPromises[t],l=e.defer(),u=function(e){s.tables[t]=e,l.resolve(e)},c=function(){l.reject(s.name)},f=function(){r(angular.extend({method:"GET",url:s.parseUrl(s.urlTemplate||a,t)},n)).then((function(t){u(t.data)}),(function(e){i?i(s.name,t,e).then(u,c):c()}))};return this.tables[t]?l.resolve(this.tables[t]):(o?o.then(l.resolve,f):f(),this.langPromises[t]=l.promise),l.promise};var e={};function r(t){return Object.prototype.hasOwnProperty.call(e,t)}function n(t){return angular.isString(t)&&""!==t}function a(t){if(!n(t))throw new TypeError("Invalid type of a first argument, a non-empty string expected.");return r(t)&&e[t].isActive}function i(){var t=[];for(var r in e)e[r].isActive&&t.push(e[r]);return t.sort((function(t,e){return t.priority-e.priority})),t}this.addPart=function(a,i,s){if(!n(a))throw new TypeError("Couldn't add part, part name has to be a string!");return r(a)||(e[a]=new t(a,i,s)),e[a].isActive=!0,this},this.setPart=function(a,i,s){if(!n(a))throw new TypeError("Couldn't set part.`lang` parameter has to be a string!");if(!n(i))throw new TypeError("Couldn't set part.`part` parameter has to be a string!");if("object"!=typeof s||null===s)throw new TypeError("Couldn't set part. `table` parameter has to be an object!");return r(i)||(e[i]=new t(i),e[i].isActive=!1),e[i].tables[a]=s,this},this.deletePart=function(t){if(!n(t))throw new TypeError("Couldn't delete part, first arg has to be string.");return r(t)&&(e[t].isActive=!1),this},this.isPartAvailable=a,this.$get=["$rootScope","$injector","$q","$http","$log",function(s,o,l,u,c){var f=function(t){if(!n(t.key))throw new TypeError("Unable to load data, a key is not a non-empty string.");if(!n(t.urlTemplate)&&!angular.isFunction(t.urlTemplate))throw new TypeError("Unable to load data, a urlTemplate is not a non-empty string or not a function.");var e=t.loadFailureHandler;if(void 0!==e){if(!angular.isString(e))throw new Error("Unable to load data, a loadFailureHandler is not a string.");e=o.get(e)}var r=[],a=i();angular.forEach(a,(function(n){r.push(n.getTable(t.key,l,u,t.$http,t.urlTemplate,e)),n.urlTemplate=n.urlTemplate||t.urlTemplate}));var g=!1,p=s.$on("$translatePartialLoaderStructureChanged",(function(){g=!0}));return l.all(r).then((function(){if(p(),g){if(!t.__retries)return t.__retries=(t.__retries||0)+1,f(t);c.warn("The partial loader has detected a multiple structure change (with addPort/removePart) while loading translations. You should consider using promises of $translate.use(lang) and $translate.refresh(). Also parts should be added/removed right before an explicit refresh if possible.")}var e={};return a=i(),angular.forEach(a,(function(r){!function t(e,r){for(var n in r)r[n]&&r[n].constructor&&r[n].constructor===Object?(e[n]=e[n]||{},t(e[n],r[n])):e[n]=r[n];return e}(e,r.tables[t.key])})),e}),(function(){return p(),l.reject(t.key)}))};return f.addPart=function(a,i,o){if(!n(a))throw new TypeError("Couldn't add part, first arg has to be a string");return r(a)?e[a].isActive||(e[a].isActive=!0,s.$emit("$translatePartialLoaderStructureChanged",a)):(e[a]=new t(a,i,o),s.$emit("$translatePartialLoaderStructureChanged",a)),f},f.deletePart=function(t,a){if(!n(t))throw new TypeError("Couldn't delete part, first arg has to be string");if(void 0===a)a=!1;else if("boolean"!=typeof a)throw new TypeError("Invalid type of a second argument, a boolean expected.");if(r(t)){var i=e[t].isActive;if(a){var l=o.get("$translate").loaderCache();"string"==typeof l&&(l=o.get(l)),"object"==typeof l&&angular.forEach(e[t].tables,(function(r,n){l.remove(e[t].parseUrl(e[t].urlTemplate,n))})),delete e[t]}else e[t].isActive=!1;i&&s.$emit("$translatePartialLoaderStructureChanged",t)}return f},f.isPartLoaded=function(t,r){return angular.isDefined(e[t])&&angular.isDefined(e[t].tables[r])},f.getRegisteredParts=function(){var t=[];return angular.forEach(e,(function(e){e.isActive&&t.push(e.name)})),t},f.isPartAvailable=a,f}]}return angular.module("pascalprecht.translate").provider("$translatePartialLoader",t),t.displayName="$translatePartialLoader","pascalprecht.translate"}()}.apply(e,[]))||(t.exports=n)}}]);