(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"7sMi":function(t,e){angular.module("snap",[]),function(){"use strict";var t=[1,8,5],e={full:t.join("."),major:t[0],minor:t[1],patch:t[2]};angular.module("snap").constant("SNAP_VERSION",e)}(),angular.module("snap").directive("snapClose",["$rootScope","snapRemote",function(t,e){"use strict";return{restrict:"A",link:function(n,r,a){r.bind("click",(function(){e.close(n.$eval(a.snapId)),t.$digest()}))}}}]),angular.module("snap").directive("snapContent",["SnapConstructor","snapRemote",function(t,e){"use strict";return{restrict:"AE",link:function(n,r,a){r.addClass("snap-content");var i=a.snapId;i&&(i=n.$eval(a.snapId));var s=angular.extend({},e.globalOptions);angular.forEach(a,(function(t,r){0===r.indexOf("snapOpt")&&(r=r.substring(7)).length&&(r=r[0].toLowerCase()+r.substring(1),s[r]=n.$eval(t),function(t,r){n.$watch((function(){return n.$eval(t)}),(function(t,n){angular.isDefined(n)&&t!==n&&e.getSnapper(i).then((function(e){var n={};n[r]=t,e.settings(n)}))}))}(t,r))})),s.element=r[0],angular.isDefined(a.snapOptions)&&a.snapOptions&&angular.extend(s,n.$eval(a.snapOptions)),e.register(new t(s),i),angular.isDefined(a.snapOptions)&&a.snapOptions&&n.$watch(a.snapOptions,(function(t){e.getSnapper(i).then((function(e){e.settings(t)}))}),!0),n.$on("$destroy",(function(){e.unregister(i)}))}}}]),angular.module("snap").directive("snapDragger",["snapRemote",function(t){"use strict";return{restrict:"AE",link:function(e,n,r){var a=e.$eval(r.snapId);t.getSnapper(a).then((function(t){t.settings({dragger:n[0]})}))}}}]),angular.module("snap").directive("snapDrawer",(function(){"use strict";return{restrict:"AE",link:function(t,e,n){e.addClass("snap-drawer");var r=e.parent(),a=!0;for("right"===n.snapDrawer?e.addClass("snap-drawer-right"):e.addClass("snap-drawer-left");r.length;)r.hasClass("snap-drawers")&&(a=!1),r=r.parent();a&&e.wrap('<div class="snap-drawers" />')}}})),angular.module("snap").directive("snapDrawers",(function(){"use strict";return{restrict:"AE",compile:function(t,e){t.addClass("snap-drawers")}}})),angular.module("snap").directive("snapToggle",["$rootScope","snapRemote",function(t,e){"use strict";return{restrict:"A",link:function(n,r,a){var i=a.snapId,s=a.snapToggle||"left";if(i&&(i=n.$eval(i)),!a.snapUnsafe){var o=!1;r.bind("mousedown",(function(t){o=!0,t.stopImmediatePropagation()})),r.bind("mouseup",(function(t){o&&t.stopImmediatePropagation(),o=!1}))}r.bind("click",(function(){e.toggle(s,i),t.$digest()}))}}}]),angular.module("snap").provider("SnapConstructor",(function(){"use strict";var t;this.use=function(e){t=e},this.$get=["$window",function(e){var n=t||e.Snap;if(angular.isUndefined(n))throw new Error("Snap constructor is not defined. Make sure window.Snap is defined or supply your own with SnapConstructorProvider.use(MySnap).");return n}]})),angular.module("snap").provider("snapRemote",(function(){"use strict";var t=this;return this.globalOptions={},this.$get=["$q",function(e){var n,r,a={},i="__DEFAULT_SNAPPER_ID__",s={};return s.globalOptions=t.globalOptions,s.getSnapper=function(t){return t=t||i,a.hasOwnProperty(t)||n(t),a[t].deferred.promise},s.register=function(t,e){e=e||i,a.hasOwnProperty(e)||n(e),a[e].isResolved&&n(e),r(t,e)},s.unregister=function(t){t=t||i,a.hasOwnProperty(t)&&delete a[t]},s.toggle=function(t,e){e=e||i,s.getSnapper(e).then((function(n){t===n.state().state?s.close(e):s.open(t,e)}))},s.open=function(t,e){e=e||i,s.getSnapper(e).then((function(e){e.open(t)}))},s.close=function(t){t=t||i,s.getSnapper(t).then((function(t){t.close()}))},s.expand=function(t,e){e=e||i,s.getSnapper(e).then((function(e){e.expand(t)}))},s.enable=function(t){t=t||i,s.getSnapper(t).then((function(t){t.enable()}))},s.disable=function(t){t=t||i,s.getSnapper(t).then((function(t){t.disable()}))},n=function(t){a[t]={deferred:e.defer(),isResolved:!1}},r=function(t,e){a[e].deferred.resolve(t),a[e].isResolved=!0},s}],this}))},KNin:function(t,e,n){var r;
/*!
 * angular-translate - v2.18.4 - 2021-01-14
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */void 0===(r=function(){return function(){function t(t){"use strict";var e=t.storageKey(),n=t.storage(),r=function(){var r=t.preferredLanguage();angular.isString(r)?t.use(r):n.put(e,t.use())};r.displayName="fallbackFromIncorrectStorageValue",n?n.get(e)?t.use(n.get(e)).catch(r):r():angular.isString(t.preferredLanguage())&&t.use(t.preferredLanguage())}function e(t,e,n,r){"use strict";var a,i,s,o,u,l,c,f,p,g,d,h,v,m,$,y,b={},w=[],S=t,L=[],C="translate-cloak",E=!1,j=!1,P=".",N=!1,A=!1,T=0,O=!0,k="default",I={default:function(t){return(t||"").split("-").join("_")},java:function(t){var e=(t||"").split("-").join("_"),n=e.split("_");return n.length>1?n[0].toLowerCase()+"_"+n[1].toUpperCase():e},bcp47:function(t){var e=(t||"").split("_").join("-"),n=e.split("-");switch(n.length){case 1:n[0]=n[0].toLowerCase();break;case 2:n[0]=n[0].toLowerCase(),4===n[1].length?n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase():n[1]=n[1].toUpperCase();break;case 3:n[0]=n[0].toLowerCase(),n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase(),n[2]=n[2].toUpperCase();break;default:return e}return n.join("-")},"iso639-1":function(t){return(t||"").split("_").join("-").split("-")[0].toLowerCase()}},x=function(){if(angular.isFunction(r.getLocale))return r.getLocale();var t,n,a=e.$get().navigator,i=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(a.languages))for(t=0;t<a.languages.length;t++)if((n=a.languages[t])&&n.length)return n;for(t=0;t<i.length;t++)if((n=a[i[t]])&&n.length)return n;return null};x.displayName="angular-translate/service: getFirstBrowserLanguage";var F=function(){var t=x()||"";return I[k]&&(t=I[k](t)),t};F.displayName="angular-translate/service: getLocale";var _=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},z=function(){return this.toString().replace(/^\s+|\s+$/g,"")},R=function(t){return angular.isString(t)?t.toLowerCase():t},D=function(t){if(t){for(var e,n=[],r=R(t),a=0,s=w.length;a<s;a++)n.push(R(w[a]));if((a=_(n,r))>-1)return w[a];if(i)for(var o in i)if(i.hasOwnProperty(o)){var u=!1,l=Object.prototype.hasOwnProperty.call(i,o)&&R(o)===R(t);if("*"===o.slice(-1)&&(u=R(o.slice(0,-1))===R(t.slice(0,o.length-1))),(l||u)&&(e=i[o],_(n,R(e))>-1))return e}var c=t.split("_");return c.length>1&&_(n,R(c[0]))>-1?c[0]:void 0}},U=function(t,e){if(!t&&!e)return b;if(t&&!e){if(angular.isString(t))return b[t]}else angular.isObject(b[t])||(b[t]={}),angular.extend(b[t],V(e));return this};this.translations=U,this.cloakClassName=function(t){return t?(C=t,this):C},this.nestedObjectDelimeter=function(t){return t?(P=t,this):P};var V=function(t,e,n,r){var a,i,s;for(a in e||(e=[]),n||(n={}),t)Object.prototype.hasOwnProperty.call(t,a)&&(s=t[a],angular.isObject(s)?V(s,e.concat(a),n,a):(i=e.length?""+e.join(P)+P+a:a,e.length&&a===r&&(n[""+e.join(P)]="@:"+i),n[i]=s));return n};V.displayName="flatObject",this.addInterpolation=function(t){return L.push(t),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(t){return g=t,this},this.useSanitizeValueStrategy=function(t){return n.useStrategy(t),this},this.preferredLanguage=function(t){return t?(M(t),this):a};var M=function(t){return t&&(a=t),a};this.translationNotFoundIndicator=function(t){return this.translationNotFoundIndicatorLeft(t),this.translationNotFoundIndicatorRight(t),this},this.translationNotFoundIndicatorLeft=function(t){return t?(v=t,this):v},this.translationNotFoundIndicatorRight=function(t){return t?(m=t,this):m},this.fallbackLanguage=function(t){return K(t),this};var K=function(t){return t?(angular.isString(t)?(o=!0,s=[t]):angular.isArray(t)&&(o=!1,s=t),angular.isString(a)&&_(s,a)<0&&s.push(a),this):o?s[0]:s};this.use=function(t){if(t){if(!b[t]&&!d)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+t+"'");return u=t,this}return u},this.resolveClientLocale=function(){return F()};var H=function(t){return t?(S=t,this):f?f+S:S};this.storageKey=H,this.useUrlLoader=function(t,e){return this.useLoader("$translateUrlLoader",angular.extend({url:t},e))},this.useStaticFilesLoader=function(t){return this.useLoader("$translateStaticFilesLoader",t)},this.useLoader=function(t,e){return d=t,h=e||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(t){return c=t,this},this.storagePrefix=function(t){return t?(f=t,this):t},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(t){return p=t,this},this.usePostCompiling=function(t){return E=!!t,this},this.forceAsyncReload=function(t){return j=!!t,this},this.uniformLanguageTag=function(t){return t?angular.isString(t)&&(t={standard:t}):t={},k=t.standard,this},this.determinePreferredLanguage=function(t){var e=t&&angular.isFunction(t)?t():F();return a=w.length&&D(e)||e,this},this.registerAvailableLanguageKeys=function(t,e){return t?(w=t,e&&(i=e),this):w},this.useLoaderCache=function(t){return!1===t?$=void 0:!0===t?$=!0:void 0===t?$="$translationCache":t&&($=t),this},this.directivePriority=function(t){return void 0===t?T:(T=t,this)},this.statefulFilter=function(t){return void 0===t?O:(O=t,this)},this.postProcess=function(t){return y=t||void 0,this},this.keepContent=function(t){return A=!!t,this},this.$get=["$log","$injector","$rootScope","$q",function(t,e,n,r){var i,f,k,I=e.get(g||"$translateDefaultInterpolation"),x=!1,R={},q={},G=function(t,e,n,o,l,p){!u&&a&&(u=a);var g=l&&l!==u?D(l)||l:u;if(l&&it(l),angular.isArray(t))return function(t){for(var a={},i=[],s=function(t){var i=r.defer(),s=function(e){a[t]=e,i.resolve([t,e])};return G(t,e,n,o,l,p).then(s,s),i.promise},u=0,c=t.length;u<c;u++)i.push(s(t[u]));return r.all(i).then((function(){return a}))}(t);var d=r.defer();if(!t)throw new TypeError("translationId must be a not empty string");t=z.apply(t);var h=function(){var t=q[g]||q[a];if(f=0,c&&!t){var e=i.get(S);if(t=q[e],s&&s.length){var n=_(s,e);f=0===n?1:0,_(s,a)<0&&s.push(a)}}return t}();if(h){var v=function(){l||(g=u),nt(t,e,n,o,g,p).then(d.resolve,d.reject)};v.displayName="promiseResolved",h.finally(v).catch(angular.noop)}else nt(t,e,n,o,g,p).then(d.resolve,d.reject);return d.promise},Y=function(t){return v&&(t=[v,t].join(" ")),m&&(t=[t,m].join(" ")),t},Q=function(t){u=t,c&&i.put(G.storageKey(),u),n.$emit("$translateChangeSuccess",{language:t}),I.setLocale(u);var e=function(t,e){R[e].setLocale(u)};e.displayName="eachInterpolatorLocaleSetter",angular.forEach(R,e),n.$emit("$translateChangeEnd",{language:t})},B=function(t){if(!t)throw"No language key specified for loading.";var a=r.defer();n.$emit("$translateLoadingStart",{language:t}),x=!0;var i=$;"string"==typeof i&&(i=e.get(i));var s=angular.extend({},h,{key:t,$http:angular.extend({},{cache:i},h.$http)}),o=function(e){var r={};n.$emit("$translateLoadingSuccess",{language:t}),angular.isArray(e)?angular.forEach(e,(function(t){angular.extend(r,V(t))})):angular.extend(r,V(e)),x=!1,a.resolve({key:t,table:r}),n.$emit("$translateLoadingEnd",{language:t})};o.displayName="onLoaderSuccess";var u=function(t){n.$emit("$translateLoadingError",{language:t}),a.reject(t),n.$emit("$translateLoadingEnd",{language:t})};return u.displayName="onLoaderError",e.get(d)(s).then(o,u),a.promise};if(c&&(!(i=e.get(c)).get||!i.put))throw new Error("Couldn't use storage '"+c+"', missing get() or put() method!");if(L.length){var J=function(t){var n=e.get(t);n.setLocale(a||u),R[n.getInterpolationIdentifier()]=n};J.displayName="interpolationFactoryAdder",angular.forEach(L,J)}var W=function(t,e,n,a,i){var s=r.defer(),o=function(r){if(Object.prototype.hasOwnProperty.call(r,e)&&null!==r[e]){a.setLocale(t);var o=r[e];if("@:"===o.substr(0,2))W(t,o.substr(2),n,a,i).then(s.resolve,s.reject);else{var l=a.interpolate(r[e],n,"service",i,e);l=at(e,r[e],l,n,t),s.resolve(l)}a.setLocale(u)}else s.reject()};return o.displayName="fallbackTranslationResolver",function(t){var e=r.defer();if(Object.prototype.hasOwnProperty.call(b,t))e.resolve(b[t]);else if(q[t]){var n=function(t){U(t.key,t.table),e.resolve(t.table)};n.displayName="translationTableResolver",q[t].then(n,e.reject)}else e.reject();return e.promise}(t).then(o,s.reject),s.promise},X=function(t,e,n,r,a){var i,s=b[t];if(s&&Object.prototype.hasOwnProperty.call(s,e)&&null!==s[e]){if(r.setLocale(t),i=r.interpolate(s[e],n,"filter",a,e),i=at(e,s[e],i,n,t,a),!angular.isString(i)&&angular.isFunction(i.$$unwrapTrustedValue)){var o=i.$$unwrapTrustedValue();if("@:"===o.substr(0,2))return X(t,o.substr(2),n,r,a)}else if("@:"===i.substr(0,2))return X(t,i.substr(2),n,r,a);r.setLocale(u)}return i},Z=function(t,n,r,a){return p?e.get(p)(t,u,n,r,a):t},tt=function(t,e,n,a,i,o){var u=r.defer();if(t<s.length){var l=s[t];W(l,e,n,a,o).then((function(t){u.resolve(t)}),(function(){return tt(t+1,e,n,a,i,o).then(u.resolve,u.reject)}))}else if(i)u.resolve(i);else{var c=Z(e,n,i);p&&c?u.resolve(c):u.reject(Y(e))}return u.promise},et=function(t,e,n,r,a){var i;if(t<s.length){var o=s[t];(i=X(o,e,n,r,a))||""===i||(i=et(t+1,e,n,r))}return i},nt=function(t,e,n,a,i,o){var u=r.defer(),l=i?b[i]:b,c=n?R[n]:I;if(l&&Object.prototype.hasOwnProperty.call(l,t)&&null!==l[t]){var g=l[t];if("@:"===g.substr(0,2))G(g.substr(2),e,n,a,i,o).then(u.resolve,u.reject);else{var d=c.interpolate(g,e,"service",o,t);d=at(t,g,d,e,i),u.resolve(d)}}else{var h;p&&!x&&(h=Z(t,e,a)),i&&s&&s.length?function(t,e,n,r,a){return tt(k>0?k:f,t,e,n,r,a)}(t,e,c,a,o).then((function(t){u.resolve(t)}),(function(t){u.reject(Y(t))})):p&&!x&&h?a?u.resolve(a):u.resolve(h):a?u.resolve(a):u.reject(Y(t))}return u.promise},rt=function(t,e,n,r,a){var i,o=r?b[r]:b,u=I;if(R&&Object.prototype.hasOwnProperty.call(R,n)&&(u=R[n]),o&&Object.prototype.hasOwnProperty.call(o,t)&&null!==o[t]){var l=o[t];"@:"===l.substr(0,2)?i=rt(l.substr(2),e,n,r,a):(i=u.interpolate(l,e,"filter",a,t),i=at(t,l,i,e,r,a))}else{var c;p&&!x&&(c=Z(t,e,a)),r&&s&&s.length?(f=0,i=function(t,e,n,r){return et(k>0?k:f,t,e,n,r)}(t,e,u,a)):i=p&&!x&&c?c:Y(t)}return i},at=function(t,n,r,a,i,s){var o=y;return o&&("string"==typeof o&&(o=e.get(o)),o)?o(t,n,r,a,i,s):r},it=function(t){b[t]||!d||q[t]||(q[t]=B(t).then((function(t){return U(t.key,t.table),t})))};G.preferredLanguage=function(t){return t&&M(t),a},G.cloakClassName=function(){return C},G.nestedObjectDelimeter=function(){return P},G.fallbackLanguage=function(t){if(null!=t){if(K(t),d&&s&&s.length)for(var e=0,n=s.length;e<n;e++)q[s[e]]||(q[s[e]]=B(s[e]));G.use(G.use())}return o?s[0]:s},G.useFallbackLanguage=function(t){if(null!=t)if(t){var e=_(s,t);e>-1&&(k=e)}else k=0},G.proposedLanguage=function(){return l},G.storage=function(){return i},G.negotiateLocale=D,G.use=function(t){if(!t)return u;var e=r.defer();e.promise.then(null,angular.noop),n.$emit("$translateChangeStart",{language:t});var a=D(t);return w.length>0&&!a?r.reject(t):(a&&(t=a),l=t,!j&&b[t]||!d||q[t]?q[t]?q[t].then((function(t){return l===t.key&&Q(t.key),e.resolve(t.key),t}),(function(t){return!u&&s&&s.length>0&&s[0]!==t?G.use(s[0]).then(e.resolve,e.reject):e.reject(t)})):(e.resolve(t),Q(t)):(q[t]=B(t).then((function(n){return U(n.key,n.table),e.resolve(n.key),l===t&&Q(n.key),n}),(function(t){return n.$emit("$translateChangeError",{language:t}),e.reject(t),n.$emit("$translateChangeEnd",{language:t}),r.reject(t)})),q[t].finally((function(){!function(t){l===t&&(l=void 0),q[t]=void 0}(t)})).catch(angular.noop)),e.promise)},G.resolveClientLocale=function(){return F()},G.storageKey=function(){return H()},G.isPostCompilingEnabled=function(){return E},G.isForceAsyncReloadEnabled=function(){return j},G.isKeepContent=function(){return A},G.refresh=function(t){if(!d)throw new Error("Couldn't refresh translation table, no loader registered!");n.$emit("$translateRefreshStart",{language:t});var e=r.defer(),a={};function i(t){var e=B(t);return q[t]=e,e.then((function(e){b[t]={},U(t,e.table),a[t]=!0}),angular.noop),e}if(e.promise.then((function(){for(var t in b)b.hasOwnProperty(t)&&(t in a||delete b[t]);u&&Q(u)}),angular.noop).finally((function(){n.$emit("$translateRefreshEnd",{language:t})})),t)b[t]?i(t).then(e.resolve,e.reject):e.reject();else{var o=s&&s.slice()||[];u&&-1===o.indexOf(u)&&o.push(u),r.all(o.map(i)).then(e.resolve,e.reject)}return e.promise},G.instant=function(t,e,n,r,i){var o=r&&r!==u?D(r)||r:u;if(null===t||angular.isUndefined(t))return t;if(r&&it(r),angular.isArray(t)){for(var l={},c=0,f=t.length;c<f;c++)l[t[c]]=G.instant(t[c],e,n,r,i);return l}if(angular.isString(t)&&t.length<1)return t;t&&(t=z.apply(t));var g,d,h=[];a&&h.push(a),o&&h.push(o),s&&s.length&&(h=h.concat(s));for(var $=0,y=h.length;$<y;$++){var w=h[$];if(b[w]&&void 0!==b[w][t]&&(g=rt(t,e,n,o,i)),void 0!==g)break}return g||""===g||(v||m?g=Y(t):(g=I.interpolate(t,e,"filter",i),p&&!x&&(d=Z(t,e,i)),p&&!x&&d&&(g=d))),g},G.versionInfo=function(){return"2.18.4"},G.loaderCache=function(){return $},G.directivePriority=function(){return T},G.statefulFilter=function(){return O},G.isReady=function(){return N};var st=r.defer();st.promise.then((function(){N=!0})),G.onReady=function(t){var e=r.defer();return angular.isFunction(t)&&e.promise.then(t),N?e.resolve():st.promise.then(e.resolve),e.promise},G.getAvailableLanguageKeys=function(){return w.length>0?w:null},G.getTranslationTable=function(t){return(t=t||G.use())&&b[t]?angular.copy(b[t]):null};var ot=n.$on("$translateReady",(function(){st.resolve(),ot(),ot=null})),ut=n.$on("$translateChangeEnd",(function(){st.resolve(),ut(),ut=null}));if(d){if(angular.equals(b,{})&&G.use()&&G.use(G.use()),s&&s.length)for(var lt=function(t){return U(t.key,t.table),n.$emit("$translateChangeEnd",{language:t.key}),t},ct=0,ft=s.length;ct<ft;ct++){var pt=s[ct];!j&&b[pt]||(q[pt]=B(pt).then(lt))}}else n.$emit("$translateReady",{language:G.use()});return G}]}function n(t,e){"use strict";var n={setLocale:function(t){},getInterpolationIdentifier:function(){return"default"},useSanitizeValueStrategy:function(t){return e.useStrategy(t),this},interpolate:function(n,r,a,i,s){var o;return r=r||{},r=e.sanitize(r,"params",i,a),angular.isNumber(n)?o=""+n:angular.isString(n)?(o=t(n)(r),o=e.sanitize(o,"text",i,a)):o="",o}};return n}function r(t,e,n,r,a){"use strict";var i=function(){return this.toString().replace(/^\s+|\s+$/g,"")},s=function(t){return angular.isString(t)?t.toLowerCase():t};return{restrict:"AE",scope:!0,priority:t.directivePriority(),compile:function(o,u){var l=u.translateValues?u.translateValues:void 0,c=u.translateInterpolation?u.translateInterpolation:void 0,f=u.translateSanitizeStrategy?u.translateSanitizeStrategy:void 0,p=o[0].outerHTML.match(/translate-value-+/i),g="^(.*)("+e.startSymbol()+".*"+e.endSymbol()+")(.*)",d="^(.*)"+e.startSymbol()+"(.*)"+e.endSymbol()+"(.*)";return function(o,h,v){o.interpolateParams={},o.preText="",o.postText="",o.translateNamespace=function t(e){return e.translateNamespace?e.translateNamespace:e.$parent?t(e.$parent):void 0}(o);var m={},$=function(t){if(angular.isFunction($._unwatchOld)&&($._unwatchOld(),$._unwatchOld=void 0),angular.equals(t,"")||!angular.isDefined(t)){var n=i.apply(h.text()).replace(/\n/g," "),r=n.match(g);if(angular.isArray(r)){o.preText=r[1],o.postText=r[3],m.translate=e(r[2])(o.$parent);var a=n.match(d);angular.isArray(a)&&a[2]&&a[2].length&&($._unwatchOld=o.$watch(a[2],(function(t){m.translate=t,C()})))}else m.translate=n||void 0}else m.translate=t;C()},y=function(t){v.$observe(t,(function(e){m[t]=e,C()}))};!function(t,e,n){if(e.translateValues&&angular.extend(t,r(e.translateValues)(o.$parent)),p)for(var a in n)Object.prototype.hasOwnProperty.call(e,a)&&"translateValue"===a.substr(0,14)&&"translateValues"!==a&&(t[s(a.substr(14,1))+a.substr(15)]=n[a])}(o.interpolateParams,v,u);var b=!0;for(var w in v.$observe("translate",(function(t){void 0===t?$(""):""===t&&b||(m.translate=t,C()),b=!1})),v)v.hasOwnProperty(w)&&"translateAttr"===w.substr(0,13)&&w.length>13&&y(w);if(v.$observe("translateDefault",(function(t){o.defaultText=t,C()})),f&&v.$observe("translateSanitizeStrategy",(function(t){o.sanitizeStrategy=r(t)(o.$parent),C()})),l&&v.$observe("translateValues",(function(t){t&&o.$parent.$watch((function(){angular.extend(o.interpolateParams,r(t)(o.$parent))}))})),p){var S=function(t){v.$observe(t,(function(e){var n=s(t.substr(14,1))+t.substr(15);o.interpolateParams[n]=e}))};for(var L in v)Object.prototype.hasOwnProperty.call(v,L)&&"translateValue"===L.substr(0,14)&&"translateValues"!==L&&S(L)}var C=function(){for(var t in m)m.hasOwnProperty(t)&&void 0!==m[t]&&E(t,m[t],o,o.interpolateParams,o.defaultText,o.translateNamespace)},E=function(e,n,r,a,i,s){n?(s&&"."===n.charAt(0)&&(n=s+n),t(n,a,c,i,r.translateLanguage,r.sanitizeStrategy).then((function(t){j(t,r,!0,e)}),(function(t){j(t,r,!1,e)}))):j(n,r,!1,e)},j=function(e,r,a,i){if(a||void 0!==r.defaultText&&(e=r.defaultText),"translate"===i){(a||!a&&!t.isKeepContent()&&void 0===v.translateKeepContent)&&h.empty().append(r.preText+e+r.postText);var s=t.isPostCompilingEnabled(),o=void 0!==u.translateCompile,l=o&&"false"!==u.translateCompile;(s&&!o||l)&&n(h.contents())(r)}else{var c=v.$attr[i];"data-"===c.substr(0,5)&&(c=c.substr(5)),c=c.substr(15),h.attr(c,e)}};(l||p||v.translateDefault)&&o.$watch("interpolateParams",C,!0),o.$on("translateLanguageChanged",C);var P=a.$on("$translateChangeSuccess",C);h.text().length?v.translate?$(v.translate):$(""):v.translate&&$(v.translate),C(),o.$on("$destroy",P)}}}}function a(t,e){"use strict";return{restrict:"A",priority:t.directivePriority(),link:function(n,r,a){var s,o,u,l={},c=function(){angular.forEach(s,(function(e,i){e&&(l[i]=!0,n.translateNamespace&&"."===e.charAt(0)&&(e=n.translateNamespace+e),t(e,o,a.translateInterpolation,void 0,n.translateLanguage,u).then((function(t){r.attr(i,t)}),(function(t){r.attr(i,t)})))})),angular.forEach(l,(function(t,e){s[e]||(r.removeAttr(e),delete l[e])}))};i(n,a.translateAttr,(function(t){s=t}),c),i(n,a.translateValues,(function(t){o=t}),c),i(n,a.translateSanitizeStrategy,(function(t){u=t}),c),a.translateValues&&n.$watch(a.translateValues,c,!0),n.$on("translateLanguageChanged",c);var f=e.$on("$translateChangeSuccess",c);c(),n.$on("$destroy",f)}}}function i(t,e,n,r){"use strict";e&&("::"===e.substr(0,2)?e=e.substr(2):t.$watch(e,(function(t){n(t),r()}),!0),n(t.$eval(e)))}function s(t,e){"use strict";return{compile:function(n){var r=function(e){e.addClass(t.cloakClassName())},a=function(e){e.removeClass(t.cloakClassName())};return r(n),function(n,i,s){var o=a.bind(this,i),u=r.bind(this,i);s.translateCloak&&s.translateCloak.length?(s.$observe("translateCloak",(function(e){t(e).then(o,u)})),e.$on("$translateChangeSuccess",(function(){t(s.translateCloak).then(o,u)}))):t.onReady(o)}}}}function o(){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,e,n){t.translateNamespace=function t(e){return e.translateNamespace?e.translateNamespace:e.$parent?t(e.$parent):void 0}(t),t.translateNamespace&&"."===n.translateNamespace.charAt(0)?t.translateNamespace+=n.translateNamespace:t.translateNamespace=n.translateNamespace}}}}}function u(){"use strict";return{restrict:"A",scope:!0,compile:function(){return function(t,e,n){n.$observe("translateLanguage",(function(e){t.translateLanguage=e})),t.$watch("translateLanguage",(function(){t.$broadcast("translateLanguageChanged")}))}}}}function l(t,e){"use strict";var n=function(n,r,a,i){if(!angular.isObject(r)){var s=this||{__SCOPE_IS_NOT_AVAILABLE:"More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f"};r=t(r)(s)}return e.instant(n,r,a,i)};return e.statefulFilter()&&(n.$stateful=!0),n}function c(t){"use strict";return t("translations")}return t.$inject=["$translate"],e.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],n.$inject=["$interpolate","$translateSanitization"],r.$inject=["$translate","$interpolate","$compile","$parse","$rootScope"],a.$inject=["$translate","$rootScope"],s.$inject=["$translate","$rootScope"],l.$inject=["$parse","$translate"],c.$inject=["$cacheFactory"],angular.module("pascalprecht.translate",["ng"]).run(t),t.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",(function(){"use strict";var t,e,n,r=null,a=!1,i=!1;(n={sanitize:function(t,e){return"text"===e&&(t=o(t)),t},escape:function(t,e){return"text"===e&&(t=s(t)),t},sanitizeParameters:function(t,e){return"params"===e&&(t=l(t,o)),t},escapeParameters:function(t,e){return"params"===e&&(t=l(t,s)),t},sce:function(t,e,n){return"text"===e?t=u(t):"params"===e&&"filter"!==n&&(t=l(t,s)),t},sceParameters:function(t,e){return"params"===e&&(t=l(t,u)),t}}).escaped=n.escapeParameters,this.addStrategy=function(t,e){return n[t]=e,this},this.removeStrategy=function(t){return delete n[t],this},this.useStrategy=function(t){return a=!0,r=t,this},this.$get=["$injector","$log",function(s,o){var u,l={};return s.has("$sanitize")&&(t=s.get("$sanitize")),s.has("$sce")&&(e=s.get("$sce")),{useStrategy:(u=this,function(t){u.useStrategy(t)}),sanitize:function(t,e,u,c){return r||a||i||(o.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),i=!0),u||null===u||(u=r),u?(c||(c="service"),function(t,e,r,a){return angular.forEach(a,(function(a){if(angular.isFunction(a))t=a(t,e,r);else if(angular.isFunction(n[a]))t=n[a](t,e,r);else{if(!angular.isString(n[a]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+a+"'");if(!l[n[a]])try{l[n[a]]=s.get(n[a])}catch(t){throw l[n[a]]=function(){},new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+a+"'")}t=l[n[a]](t,e,r)}})),t}(t,e,c,angular.isArray(u)?u:[u])):t}}}];var s=function(t){var e=angular.element("<div></div>");return e.text(t),e.html()},o=function(e){if(!t)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return t(e)},u=function(t){if(!e)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sce service.");return e.trustAsHtml(t)},l=function(t,e,n){if(angular.isDate(t))return t;if(angular.isObject(t)){var r=angular.isArray(t)?[]:{};if(n){if(n.indexOf(t)>-1)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object")}else n=[];return n.push(t),angular.forEach(t,(function(t,a){angular.isFunction(t)||(r[a]=l(t,e,n))})),n.splice(-1,1),r}return angular.isNumber(t)||!0===t||!1===t||angular.isUndefined(t)||null===t?t:e(t)}})),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",e),e.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",n),n.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",r),r.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateAttr",a),a.displayName="translateAttrDirective",angular.module("pascalprecht.translate").directive("translateCloak",s),s.displayName="translateCloakDirective",angular.module("pascalprecht.translate").directive("translateNamespace",o),o.displayName="translateNamespaceDirective",angular.module("pascalprecht.translate").directive("translateLanguage",u),u.displayName="translateLanguageDirective",angular.module("pascalprecht.translate").filter("translate",l),l.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",c),c.displayName="$translationCache","pascalprecht.translate"}()}.apply(e,[]))||(t.exports=r)},NFdj:function(t,e,n){n("QfrQ"),t.exports=angular},RxAD:function(t,e,n){var r,a;
/*!
 * angular-translate - v2.18.4 - 2021-01-14
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */r=[n("RQRI")],void 0===(a=function(t){return function(t){function e(e,n,r,a){"use strict";var i={},s=n.get(r),o=new t("en");return angular.isFunction(a)&&a(o),s||(s=n(r)),s.put("en",o),i.setLocale=function(e){(o=s.get(e))||(o=new t(e),angular.isFunction(a)&&a(o),s.put(e,o))},i.getInterpolationIdentifier=function(){return"messageformat"},i.useSanitizeValueStrategy=function(t){return e.useStrategy(t),this},i.interpolate=function(t,n,r,a){n=n||{},n=e.sanitize(n,"params",a);var i=s.get("mf:"+t);if(!i){for(var u in n)if(n.hasOwnProperty(u)){var l=parseInt(n[u],10);angular.isNumber(l)&&""+l===n[u]&&(n[u]=l)}i=o.compile(t),s.put("mf:"+t,i)}var c=i(n);return e.sanitize(c,"text",a)},i}return angular.module("pascalprecht.translate").constant("TRANSLATE_MF_INTERPOLATION_CACHE","$translateMessageFormatInterpolation").provider("$translateMessageFormatInterpolation",(function(){"use strict";var t;this.messageFormatConfigurer=function(e){t=e},this.$get=["$translateSanitization","$cacheFactory","TRANSLATE_MF_INTERPOLATION_CACHE",function(n,r,a){return e(n,r,a,t)}]})),e.displayName="$translateMessageFormatInterpolation","pascalprecht.translate"}(t)}.apply(e,r))||(t.exports=a)},vUE2:function(t,e,n){var r;
/*!
 * angular-translate - v2.18.4 - 2021-01-14
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */void 0===(r=function(){return function(){function t(){"use strict";function t(t,e,n){this.name=t,this.isActive=!0,this.tables={},this.priority=e||0,this.langPromises={},this.urlTemplate=n}t.prototype.parseUrl=function(t,e){return angular.isFunction(t)?t(this.name,e):t.replace(/\{part\}/g,this.name).replace(/\{lang\}/g,e)},t.prototype.getTable=function(t,e,n,r,a,i){var s=this,o=this.langPromises[t],u=e.defer(),l=function(e){s.tables[t]=e,u.resolve(e)},c=function(){u.reject(s.name)},f=function(){n(angular.extend({method:"GET",url:s.parseUrl(s.urlTemplate||a,t)},r)).then((function(t){l(t.data)}),(function(e){i?i(s.name,t,e).then(l,c):c()}))};return this.tables[t]?u.resolve(this.tables[t]):(o?o.then(u.resolve,f):f(),this.langPromises[t]=u.promise),u.promise};var e={};function n(t){return Object.prototype.hasOwnProperty.call(e,t)}function r(t){return angular.isString(t)&&""!==t}function a(t){if(!r(t))throw new TypeError("Invalid type of a first argument, a non-empty string expected.");return n(t)&&e[t].isActive}function i(){var t=[];for(var n in e)e[n].isActive&&t.push(e[n]);return t.sort((function(t,e){return t.priority-e.priority})),t}this.addPart=function(a,i,s){if(!r(a))throw new TypeError("Couldn't add part, part name has to be a string!");return n(a)||(e[a]=new t(a,i,s)),e[a].isActive=!0,this},this.setPart=function(a,i,s){if(!r(a))throw new TypeError("Couldn't set part.`lang` parameter has to be a string!");if(!r(i))throw new TypeError("Couldn't set part.`part` parameter has to be a string!");if("object"!=typeof s||null===s)throw new TypeError("Couldn't set part. `table` parameter has to be an object!");return n(i)||(e[i]=new t(i),e[i].isActive=!1),e[i].tables[a]=s,this},this.deletePart=function(t){if(!r(t))throw new TypeError("Couldn't delete part, first arg has to be string.");return n(t)&&(e[t].isActive=!1),this},this.isPartAvailable=a,this.$get=["$rootScope","$injector","$q","$http","$log",function(s,o,u,l,c){var f=function(t){if(!r(t.key))throw new TypeError("Unable to load data, a key is not a non-empty string.");if(!r(t.urlTemplate)&&!angular.isFunction(t.urlTemplate))throw new TypeError("Unable to load data, a urlTemplate is not a non-empty string or not a function.");var e=t.loadFailureHandler;if(void 0!==e){if(!angular.isString(e))throw new Error("Unable to load data, a loadFailureHandler is not a string.");e=o.get(e)}var n=[],a=i();angular.forEach(a,(function(r){n.push(r.getTable(t.key,u,l,t.$http,t.urlTemplate,e)),r.urlTemplate=r.urlTemplate||t.urlTemplate}));var p=!1,g=s.$on("$translatePartialLoaderStructureChanged",(function(){p=!0}));return u.all(n).then((function(){if(g(),p){if(!t.__retries)return t.__retries=(t.__retries||0)+1,f(t);c.warn("The partial loader has detected a multiple structure change (with addPort/removePart) while loading translations. You should consider using promises of $translate.use(lang) and $translate.refresh(). Also parts should be added/removed right before an explicit refresh if possible.")}var e={};return a=i(),angular.forEach(a,(function(n){!function t(e,n){for(var r in n)n[r]&&n[r].constructor&&n[r].constructor===Object?(e[r]=e[r]||{},t(e[r],n[r])):e[r]=n[r];return e}(e,n.tables[t.key])})),e}),(function(){return g(),u.reject(t.key)}))};return f.addPart=function(a,i,o){if(!r(a))throw new TypeError("Couldn't add part, first arg has to be a string");return n(a)?e[a].isActive||(e[a].isActive=!0,s.$emit("$translatePartialLoaderStructureChanged",a)):(e[a]=new t(a,i,o),s.$emit("$translatePartialLoaderStructureChanged",a)),f},f.deletePart=function(t,a){if(!r(t))throw new TypeError("Couldn't delete part, first arg has to be string");if(void 0===a)a=!1;else if("boolean"!=typeof a)throw new TypeError("Invalid type of a second argument, a boolean expected.");if(n(t)){var i=e[t].isActive;if(a){var u=o.get("$translate").loaderCache();"string"==typeof u&&(u=o.get(u)),"object"==typeof u&&angular.forEach(e[t].tables,(function(n,r){u.remove(e[t].parseUrl(e[t].urlTemplate,r))})),delete e[t]}else e[t].isActive=!1;i&&s.$emit("$translatePartialLoaderStructureChanged",t)}return f},f.isPartLoaded=function(t,n){return angular.isDefined(e[t])&&angular.isDefined(e[t].tables[n])},f.getRegisteredParts=function(){var t=[];return angular.forEach(e,(function(e){e.isActive&&t.push(e.name)})),t},f.isPartAvailable=a,f}]}return angular.module("pascalprecht.translate").provider("$translatePartialLoader",t),t.displayName="$translatePartialLoader","pascalprecht.translate"}()}.apply(e,[]))||(t.exports=r)}}]);