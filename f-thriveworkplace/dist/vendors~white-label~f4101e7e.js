(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{EDu8:function(t,e,r){"use strict";var i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),s=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],i=!0,n=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(r.push(o.value),!e||r.length!==e);i=!0);}catch(t){n=!0,s=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw s}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};String.prototype.startsWith=String.prototype.startsWith||function(t){return 0===this.indexOf(t)},String.prototype.padStart=String.prototype.padStart||function(t,e){for(var r=this;r.length<t;)r=e+r;return r};var o={cb:"0f8ff",tqw:"aebd7",q:"-ffff",qmrn:"7fffd4",zr:"0ffff",bg:"5f5dc",bsq:"e4c4",bck:"---",nch:"ebcd",b:"--ff",bvt:"8a2be2",brwn:"a52a2a",brw:"deb887",ctb:"5f9ea0",hrt:"7fff-",chcT:"d2691e",cr:"7f50",rnw:"6495ed",crns:"8dc",crms:"dc143c",cn:"-ffff",Db:"--8b",Dcn:"-8b8b",Dgnr:"b8860b",Dgr:"a9a9a9",Dgrn:"-64-",Dkhk:"bdb76b",Dmgn:"8b-8b",Dvgr:"556b2f",Drng:"8c-",Drch:"9932cc",Dr:"8b--",Dsmn:"e9967a",Dsgr:"8fbc8f",DsTb:"483d8b",DsTg:"2f4f4f",Dtrq:"-ced1",Dvt:"94-d3",ppnk:"1493",pskb:"-bfff",mgr:"696969",grb:"1e90ff",rbrc:"b22222",rwht:"af0",stg:"228b22",chs:"-ff",gnsb:"dcdcdc",st:"8f8ff",g:"d7-",gnr:"daa520",gr:"808080",grn:"-8-0",grnw:"adff2f",hnw:"0fff0",htpn:"69b4",nnr:"cd5c5c",ng:"4b-82",vr:"0",khk:"0e68c",vnr:"e6e6fa",nrb:"0f5",wngr:"7cfc-",mnch:"acd",Lb:"add8e6",Lcr:"08080",Lcn:"e0ffff",Lgnr:"afad2",Lgr:"d3d3d3",Lgrn:"90ee90",Lpnk:"b6c1",Lsmn:"a07a",Lsgr:"20b2aa",Lskb:"87cefa",LsTg:"778899",Lstb:"b0c4de",Lw:"e0",m:"-ff-",mgrn:"32cd32",nn:"af0e6",mgnt:"-ff",mrn:"8--0",mqm:"66cdaa",mmb:"--cd",mmrc:"ba55d3",mmpr:"9370db",msg:"3cb371",mmsT:"7b68ee","":"-fa9a",mtr:"48d1cc",mmvt:"c71585",mnLb:"191970",ntc:"5fffa",mstr:"e4e1",mccs:"e4b5",vjw:"dead",nv:"--80",c:"df5e6",v:"808-0",vrb:"6b8e23",rng:"a5-",rngr:"45-",rch:"da70d6",pgnr:"eee8aa",pgrn:"98fb98",ptrq:"afeeee",pvtr:"db7093",ppwh:"efd5",pchp:"dab9",pr:"cd853f",pnk:"c0cb",pm:"dda0dd",pwrb:"b0e0e6",prp:"8-080",cc:"663399",r:"--",sbr:"bc8f8f",rb:"4169e1",sbrw:"8b4513",smn:"a8072",nbr:"4a460",sgrn:"2e8b57",ssh:"5ee",snn:"a0522d",svr:"c0c0c0",skb:"87ceeb",sTb:"6a5acd",sTgr:"708090",snw:"afa",n:"-ff7f",stb:"4682b4",tn:"d2b48c",t:"-8080",thst:"d8bfd8",tmT:"6347",trqs:"40e0d0",vt:"ee82ee",whT:"5deb3",wht:"",hts:"5f5f5",w:"-",wgrn:"9acd32"};function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(e>0?t.toFixed(e).replace(/0+$/,"").replace(/\.$/,""):t.toString())||"0"}var c=function(){function t(e,r,n,o){i(this,t);var a=this;if(void 0===e);else if(Array.isArray(e))this.rgba=e;else if(void 0===n){var c=e&&""+e;c&&function(e){if(e.startsWith("hsl")){var r=e.match(/([\-\d\.e]+)/g).map(Number),i=s(r,4),n=i[0],o=i[1],c=i[2],h=i[3];void 0===h&&(h=1),n/=360,o/=100,c/=100,a.hsla=[n,o,c,h]}else if(e.startsWith("rgb")){var u=e.match(/([\-\d\.e]+)/g).map(Number),l=s(u,4),p=l[0],d=l[1],f=l[2],g=l[3];void 0===g&&(g=1),a.rgba=[p,d,f,g]}else e.startsWith("#")?a.rgba=t.hexToRgb(e):a.rgba=t.nameToRgb(e)||t.hexToRgb(e)}(c.toLowerCase())}else this.rgba=[e,r,n,void 0===o?1:o]}return n(t,[{key:"printRGB",value:function(t){var e=(t?this.rgba:this.rgba.slice(0,3)).map((function(t,e){return a(t,3===e?3:0)}));return t?"rgba("+e+")":"rgb("+e+")"}},{key:"printHSL",value:function(t){var e=[360,100,100,1],r=["","%","%",""],i=(t?this.hsla:this.hsla.slice(0,3)).map((function(t,i){return a(t*e[i],3===i?3:1)+r[i]}));return t?"hsla("+i+")":"hsl("+i+")"}},{key:"printHex",value:function(t){var e=this.hex;return t?e:e.substring(0,7)}},{key:"rgba",get:function(){if(this._rgba)return this._rgba;if(!this._hsla)throw new Error("No color is set");return this._rgba=t.hslToRgb(this._hsla)},set:function(t){3===t.length&&(t[3]=1),this._rgba=t,this._hsla=null}},{key:"rgbString",get:function(){return this.printRGB()}},{key:"rgbaString",get:function(){return this.printRGB(!0)}},{key:"hsla",get:function(){if(this._hsla)return this._hsla;if(!this._rgba)throw new Error("No color is set");return this._hsla=t.rgbToHsl(this._rgba)},set:function(t){3===t.length&&(t[3]=1),this._hsla=t,this._rgba=null}},{key:"hslString",get:function(){return this.printHSL()}},{key:"hslaString",get:function(){return this.printHSL(!0)}},{key:"hex",get:function(){return"#"+this.rgba.map((function(t,e){return e<3?t.toString(16):Math.round(255*t).toString(16)})).map((function(t){return t.padStart(2,"0")})).join("")},set:function(e){this.rgba=t.hexToRgb(e)}}],[{key:"hexToRgb",value:function(t){var e=(t.startsWith("#")?t.slice(1):t).replace(/^(\w{3})$/,"$1F").replace(/^(\w)(\w)(\w)(\w)$/,"$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/,"$1FF");if(!e.match(/^([0-9a-fA-F]{8})$/))throw new Error("Unknown hex color; "+t);var r=e.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map((function(t){return parseInt(t,16)}));return r[3]=r[3]/255,r}},{key:"nameToRgb",value:function(e){var r=e.toLowerCase().replace("at","T").replace(/[aeiouyldf]/g,"").replace("ght","L").replace("rk","D").slice(-5,4),i=o[r];return void 0===i?i:t.hexToRgb(i.replace(/\-/g,"00").padStart(6,"f"))}},{key:"rgbToHsl",value:function(t){var e=s(t,4),r=e[0],i=e[1],n=e[2],o=e[3];r/=255,i/=255,n/=255;var a=Math.max(r,i,n),c=Math.min(r,i,n),h=void 0,u=void 0,l=(a+c)/2;if(a===c)h=u=0;else{var p=a-c;switch(u=l>.5?p/(2-a-c):p/(a+c),a){case r:h=(i-n)/p+(i<n?6:0);break;case i:h=(n-r)/p+2;break;case n:h=(r-i)/p+4}h/=6}return[h,u,l,o]}},{key:"hslToRgb",value:function(t){var e=s(t,4),r=e[0],i=e[1],n=e[2],o=e[3],a=void 0,c=void 0,h=void 0;if(0===i)a=c=h=n;else{var u=function(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t},l=n<.5?n*(1+i):n+i-n*i,p=2*n-l;a=u(p,l,r+1/3),c=u(p,l,r),h=u(p,l,r-1/3)}var d=[255*a,255*c,255*h].map(Math.round);return d[3]=o,d}}]),t}(),h=function(){function t(){i(this,t),this._events=[]}return n(t,[{key:"add",value:function(t,e,r){t.addEventListener(e,r,!1),this._events.push({target:t,type:e,handler:r})}},{key:"remove",value:function(e,r,i){this._events=this._events.filter((function(n){var s=!0;return e&&e!==n.target&&(s=!1),r&&r!==n.type&&(s=!1),i&&i!==n.handler&&(s=!1),s&&t._doRemove(n.target,n.type,n.handler),!s}))}},{key:"destroy",value:function(){this._events.forEach((function(e){return t._doRemove(e.target,e.type,e.handler)})),this._events=[]}}],[{key:"_doRemove",value:function(t,e,r){t.removeEventListener(e,r,!1)}}]),t}();function u(t,e,r){var i=!1;function n(t,e,r){return Math.max(e,Math.min(t,r))}function s(t,s,o){if(o&&(i=!0),i){t.preventDefault();var a=e.getBoundingClientRect(),c=a.width,h=a.height,u=s.clientX,l=s.clientY,p=n(u-a.left,0,c),d=n(l-a.top,0,h);r(p/c,d/h)}}function o(t,e){1===(void 0===t.buttons?t.which:t.buttons)?s(t,t,e):i=!1}function a(t,e){1===t.touches.length?s(t,t.touches[0],e):i=!1}t.add(e,"mousedown",(function(t){o(t,!0)})),t.add(e,"touchstart",(function(t){a(t,!0)})),t.add(window,"mousemove",o),t.add(e,"touchmove",a),t.add(window,"mouseup",(function(t){i=!1})),t.add(e,"touchend",(function(t){i=!1})),t.add(e,"touchcancel",(function(t){i=!1}))}var l="keydown";function p(t,e){return(e||document).querySelector(t)}function d(t){t.preventDefault(),t.stopPropagation()}function f(t,e,r,i,n){t.add(e,l,(function(t){r.indexOf(t.key)>=0&&(n&&d(t),i(t))}))}var g=document.createElement("style");g.textContent=".picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:'';display:block;width:100%;height:0;-webkit-box-ordinal-group:2;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_sl::before{content:'';display:block;padding-bottom:100%}.layout_default .picker_editor{-webkit-box-ordinal-group:2;order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{-webkit-box-ordinal-group:2;order:1;-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{-webkit-box-ordinal-group:2;order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px dodgerblue}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:whitesmoke;background-image:-webkit-gradient(linear, left bottom, left top, from(gainsboro), to(transparent));background-image:-webkit-linear-gradient(bottom, gainsboro, transparent);background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:-webkit-gradient(linear, left bottom, left top, from(transparent), to(gainsboro));background-image:-webkit-linear-gradient(bottom, transparent, gainsboro);background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:white}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid white;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:-webkit-gradient(linear, left top, right top, from(red), color-stop(yellow), color-stop(lime), color-stop(cyan), color-stop(blue), color-stop(magenta), to(red));background-image:-webkit-linear-gradient(left, red, yellow, lime, cyan, blue, magenta, red);background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:-webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, rgba(255,255,255,0))),-webkit-gradient(linear, left bottom, left top, from(black), color-stop(50%, rgba(0,0,0,0))),-webkit-gradient(linear, left top, right top, from(gray), to(rgba(128,128,128,0)));background-image:-webkit-linear-gradient(top, white, rgba(255,255,255,0) 50%),-webkit-linear-gradient(bottom, black, rgba(0,0,0,0) 50%),-webkit-linear-gradient(left, gray, rgba(128,128,128,0));background-image:linear-gradient(180deg, white, rgba(255,255,255,0) 50%),linear-gradient(0deg, black, rgba(0,0,0,0) 50%),linear-gradient(90deg, gray, rgba(128,128,128,0))}.picker_alpha,.picker_sample{position:relative;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\") left top/contain white;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:'';position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,0.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:\"\";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}",document.documentElement.firstElementChild.appendChild(g);var m=function(){function t(e){i(this,t),this.settings={popup:"right",layout:"default",alpha:!0,editor:!0,editorFormat:"hex",cancelButton:!1},this._events=new h,this.onChange=null,this.onDone=null,this.onOpen=null,this.onClose=null,this.setOptions(e)}return n(t,[{key:"setOptions",value:function(t){var e=this;if(t){var r=this.settings;if(t instanceof HTMLElement)r.parent=t;else{r.parent&&t.parent&&r.parent!==t.parent&&(this._events.remove(r.parent),this._popupInited=!1),function(t,e,r){for(var i in t)r&&r.indexOf(i)>=0||(e[i]=t[i])}(t,r),t.onChange&&(this.onChange=t.onChange),t.onDone&&(this.onDone=t.onDone),t.onOpen&&(this.onOpen=t.onOpen),t.onClose&&(this.onClose=t.onClose);var i=t.color||t.colour;i&&this._setColor(i)}var n=r.parent;if(n&&r.popup&&!this._popupInited){var s=function(t){return e.openHandler(t)};this._events.add(n,"click",s),f(this._events,n,[" ","Spacebar","Enter"],s),this._popupInited=!0}else t.parent&&!r.popup&&this.show()}}},{key:"openHandler",value:function(t){if(this.show()){t&&t.preventDefault(),this.settings.parent.style.pointerEvents="none";var e=t&&t.type===l?this._domEdit:this.domElement;setTimeout((function(){return e.focus()}),100),this.onOpen&&this.onOpen(this.colour)}}},{key:"closeHandler",value:function(t){var e=t&&t.type,r=!1;if(t)if("mousedown"===e||"focusin"===e){var i=(this.__containedEvent||0)+100;t.timeStamp>i&&(r=!0)}else d(t),r=!0;else r=!0;r&&this.hide()&&(this.settings.parent.style.pointerEvents="","mousedown"!==e&&this.settings.parent.focus(),this.onClose&&this.onClose(this.colour))}},{key:"movePopup",value:function(t,e){this.closeHandler(),this.setOptions(t),e&&this.openHandler()}},{key:"setColor",value:function(t,e){this._setColor(t,{silent:e})}},{key:"_setColor",value:function(t,e){if("string"==typeof t&&(t=t.trim()),t){e=e||{};var r=void 0;try{r=new c(t)}catch(t){if(e.failSilently)return;throw t}if(!this.settings.alpha){var i=r.hsla;i[3]=1,r.hsla=i}this.colour=this.color=r,this._setHSLA(null,null,null,null,e)}}},{key:"setColour",value:function(t,e){this.setColor(t,e)}},{key:"show",value:function(){if(!this.settings.parent)return!1;if(this.domElement){var t=this._toggleDOM(!0);return this._setPosition(),t}var e,r,i=this.settings.template||'<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>',n=(e=i,(r=document.createElement("div")).innerHTML=e,r.firstElementChild);return this.domElement=n,this._domH=p(".picker_hue",n),this._domSL=p(".picker_sl",n),this._domA=p(".picker_alpha",n),this._domEdit=p(".picker_editor input",n),this._domSample=p(".picker_sample",n),this._domOkay=p(".picker_done button",n),this._domCancel=p(".picker_cancel button",n),n.classList.add("layout_"+this.settings.layout),this.settings.alpha||n.classList.add("no_alpha"),this.settings.editor||n.classList.add("no_editor"),this.settings.cancelButton||n.classList.add("no_cancel"),this._ifPopup((function(){return n.classList.add("popup")})),this._setPosition(),this.colour?this._updateUI():this._setColor("#0cf"),this._bindEvents(),!0}},{key:"hide",value:function(){return this._toggleDOM(!1)}},{key:"destroy",value:function(){this._events.destroy(),this.domElement&&this.settings.parent.removeChild(this.domElement)}},{key:"_bindEvents",value:function(){var t=this,e=this,r=this.domElement,i=this._events;function n(t,e,r){i.add(t,e,r)}n(r,"click",(function(t){return t.preventDefault()})),u(i,this._domH,(function(t,r){return e._setHSLA(t)})),u(i,this._domSL,(function(t,r){return e._setHSLA(null,t,1-r)})),this.settings.alpha&&u(i,this._domA,(function(t,r){return e._setHSLA(null,null,null,1-r)}));var s=this._domEdit;n(s,"input",(function(t){e._setColor(this.value,{fromEditor:!0,failSilently:!0})})),n(s,"focus",(function(t){this.selectionStart===this.selectionEnd&&this.select()})),this._ifPopup((function(){var e=function(e){return t.closeHandler(e)};n(window,"mousedown",e),n(window,"focusin",e),f(i,r,["Esc","Escape"],e);var s=function(e){t.__containedEvent=e.timeStamp};n(r,"mousedown",s),n(r,"focusin",s),n(t._domCancel,"click",e)}));var o=function(e){t._ifPopup((function(){return t.closeHandler(e)})),t.onDone&&t.onDone(t.colour)};n(this._domOkay,"click",o),f(i,r,["Enter"],o)}},{key:"_setPosition",value:function(){var t=this.settings.parent,e=this.domElement;t!==e.parentNode&&t.appendChild(e),this._ifPopup((function(r){"static"===getComputedStyle(t).position&&(t.style.position="relative");var i=!0===r?"popup_right":"popup_"+r;["popup_top","popup_bottom","popup_left","popup_right"].forEach((function(t){t===i?e.classList.add(t):e.classList.remove(t)})),e.classList.add(i)}))}},{key:"_setHSLA",value:function(t,e,r,i,n){n=n||{};var s=this.colour,o=s.hsla;[t,e,r,i].forEach((function(t,e){(t||0===t)&&(o[e]=t)})),s.hsla=o,this._updateUI(n),this.onChange&&!n.silent&&this.onChange(s)}},{key:"_updateUI",value:function(t){if(this.domElement){t=t||{};var e=this.colour,r=e.hsla,i="hsl("+360*r[0]+", 100%, 50%)",n=e.hslString,s=e.hslaString,o=this._domH,a=this._domSL,c=this._domA,h=p(".picker_selector",o),u=p(".picker_selector",a),l=p(".picker_selector",c);w(0,h,r[0]),this._domSL.style.backgroundColor=this._domH.style.color=i,w(0,u,r[1]),k(0,u,1-r[2]),a.style.color=n,k(0,l,1-r[3]);var d=n,f=d.replace("hsl","hsla").replace(")",", 0)"),g="linear-gradient("+[d,f]+")";if(this._domA.style.backgroundImage=g+", url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\")",!t.fromEditor){var m=this.settings.editorFormat,b=this.settings.alpha,v=void 0;switch(m){case"rgb":v=e.printRGB(b);break;case"hsl":v=e.printHSL(b);break;default:v=e.printHex(b)}this._domEdit.value=v}this._domSample.style.color=s}function w(t,e,r){e.style.left=100*r+"%"}function k(t,e,r){e.style.top=100*r+"%"}}},{key:"_ifPopup",value:function(t,e){this.settings.parent&&this.settings.popup?t&&t(this.settings.popup):e&&e()}},{key:"_toggleDOM",value:function(t){var e=this.domElement;if(!e)return!1;var r=t?"":"none",i=e.style.display!==r;return i&&(e.style.display=r),i}}],[{key:"StyleElement",get:function(){return g}}]),t}();e.a=m},JQSn:function(t,e,r){},TvQY:function(t,e,r){"use strict";(function(t){function r(e){return"string"==typeof e&&(e=document.getElementById(e)),new t((function(t,i){if(r.check(e))return t(e);function n(r){e.removeEventListener("load",n),e.removeEventListener("error",n),"load"===r.type?t(e):i(e)}e.addEventListener("load",n),e.addEventListener("error",n)}))}r.check=function(t){return!!t.complete&&0!==t.naturalWidth},e.a=r}).call(this,r("vN7P"))},W06D:function(t,e,r){"use strict";function i(){var t={};for(let r in arguments){var e=arguments[r];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}var n={animateEasingFunction:"swing",animateFrames:30,multi:!1,multiMax:null,multiMin:1,cropperClass:"jcrop-widget",disabledClass:"jcrop-disable",canDrag:!0,canResize:!0,canSelect:!0,canRemove:!0,multiple:!1,autoFront:!0,active:!0,handles:["n","s","e","w","sw","nw","ne","se"],shade:!0,shadeClass:"jcrop-shade",shadeColor:"black",shadeOpacity:.5,widgetConstructor:null,x:0,y:0,w:100,h:100};var s=class{constructor(t){"string"==typeof t&&(t=document.getElementById(t)),this.el=t}appendTo(t){return"string"==typeof t&&(t=document.getElementById(t)),t.appendChild(this.el),this}emit(t){const e=document.createEvent("Event");e.initEvent(t,!0,!0),e.cropTarget=this,this.el.dispatchEvent(e)}removeClass(t){return this.el.className=this.el.className.split(" ").filter(e=>t!==e).join(" "),this}hasClass(t){return this.el.className.split(" ").filter(e=>t===e).length}addClass(t){return this.hasClass(t)||(this.el.className+=" "+t),this}listen(t,e){return this.el.addEventListener(t,t=>e(t.cropTarget,t)),this}};class o extends s{}o.create=function(t){const e=document.createElement("div");return e.className=t,new o(e)};var a=o;var c=function(t,e,r,i){var n,s;function o(t){const r="touchstart"===t.type?t.touches[0]:t;n=r.pageX,s=r.pageY,t.preventDefault(),t.stopPropagation(),e(n,s,r)&&("mousedown"===t.type?(window.addEventListener("mousemove",a),document.addEventListener("mouseup",c)):"touchstart"===t.type&&(document.addEventListener("touchmove",a),document.addEventListener("touchend",c)))}function a(t){const e="touchmove"===t.type?t.changedTouches[0]:t;t.stopPropagation(),r(e.pageX-n,e.pageY-s)}function c(t){const e="touchend"===t.type?t.changedTouches[0]:t;e.pageX&&e.pageY&&r(e.pageX-n,e.pageY-s),document.removeEventListener("mouseup",c),window.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",c),i()}return"string"==typeof t&&(t=document.getElementById(t)),t.addEventListener("mousedown",o),t.addEventListener("touchstart",o),{remove:function(){t.removeEventListener("mousedown",o),t.removeEventListener("touchstart",o)}}};class h{constructor(){this.x=0,this.y=0,this.w=0,this.h=0}set x1(t){this.w=this.x2-t,this.x=t}set y1(t){this.h=this.y2-t,this.y=t}get x2(){return this.x+this.w}set x2(t){this.w=t-this.x}get y2(){return this.y+this.h}get aspect(){return this.w/this.h}set y2(t){this.h=t-this.y}round(){return h.create(Math.round(this.x),Math.round(this.y),Math.round(this.w),Math.round(this.h))}normalize(){const[t,e,r,i]=[Math.min(this.x,this.x2),Math.min(this.y,this.y2),Math.max(this.x,this.x2),Math.max(this.y,this.y2)];return h.create(t,e,r-t,i-e)}rebound(t,e){const r=this.normalize();return r.x<0&&(r.x=0),r.y<0&&(r.y=0),r.x2>t&&(r.x=t-r.w),r.y2>e&&(r.y=e-r.h),r}scale(t,e){return e=e||t,h.create(this.x,this.y,this.w*t,this.h*e)}center(t,e){return h.create((t-this.w)/2,(e-this.h)/2,this.w,this.h)}toArray(){return[this.x,this.y,this.w,this.h]}}h.fromPoints=function(t,e){const[r,i,n,s]=[Math.min(t[0],e[0]),Math.min(t[1],e[1]),Math.max(t[0],e[0]),Math.max(t[1],e[1])];return h.create(r,i,n-r,s-i)},h.create=function(t=0,e=0,r=0,i=0){const n=new h;return n.x=t,n.y=e,n.w=r,n.h=i,n},h.from=function(t){if(Array.isArray(t))return h.fromArray(t);const e=new h;return e.x=t.offsetLeft,e.y=t.offsetTop,e.w=t.offsetWidth,e.h=t.offsetHeight,e},h.fromArray=function(t){if(4===t.length)return h.create.apply(this,t);if(2===t.length)return h.fromPoints(t[0],t[1]);throw"fromArray method problem"},h.sizeOf=function(t,e){if(e)return h.create(0,0,t,e);const r=new h;return r.w=t.offsetWidth,r.h=t.offsetHeight,r},h.getMax=function(t,e,r){return t/e>r?[e*r,e]:[t,t/r]},h.fromPoint=function(t,e,r,i="br"){const n=new h;switch(n.x=t[0],n.y=t[1],i){case"br":n.x2=n.x+e,n.y2=n.y+r;break;case"bl":n.x2=n.x-e,n.y2=n.y+r;break;case"tl":n.x2=n.x-e,n.y2=n.y-r;break;case"tr":n.x2=n.x+e,n.y2=n.y-r}return n};var u=h;class l{constructor(t,e,r,i){this.sw=e,this.sh=r,this.rect=t,this.locked=this.getCornerPoint(this.getOppositeCorner(i)),this.stuck=this.getCornerPoint(i)}move(t,e){return u.fromPoints(this.locked,this.translateStuckPoint(t,e))}getDragQuadrant(t,e){const r=this.locked[0]-t,i=this.locked[1]-e;return r<0&&i<0?"br":r>=0&&i>=0?"tl":r<0&&i>=0?"tr":"bl"}getMaxRect(t,e,r){return u.getMax(Math.abs(this.locked[0]-t),Math.abs(this.locked[1]-e),r)}translateStuckPoint(t,e){const[r,i,n]=this.stuck;var s=null===r?n:r+t,o=null===i?n:i+e;if(s>this.sw&&(s=this.sw),o>this.sh&&(o=this.sh),s<0&&(s=0),o<0&&(o=0),this.aspect){var[a,c]=this.getMaxRect(s,o,this.aspect),h=this.getDragQuadrant(s,o),l=u.fromPoint(this.locked,a,c,h);return[l.x2,l.y2]}return[s,o]}getCornerPoint(t){const e=this.rect;switch(t){case"n":return[null,e.y,e.x];case"s":return[null,e.y2,e.x2];case"e":return[e.x2,null,e.y2];case"w":return[e.x,null,e.y];case"se":return[e.x2,e.y2];case"sw":return[e.x,e.y2];case"ne":return[e.x2,e.y];case"nw":return[e.x,e.y]}}getOppositeCorner(t){switch(t){case"n":return"se";case"s":case"e":return"nw";case"w":return"se";case"se":return"nw";case"sw":return"ne";case"ne":return"sw";case"nw":return"se"}}}l.create=function(t,e,r,i){return new l(t,e,r,i)};var p=l;var d=class extends s{constructor(t,e={}){super(t),this.options={},Object.defineProperty(this,"_optconf",{configurable:!1,enumerable:!1,value:{},writable:!0}),this.initOptions(),this.setOptions(i({},n,e))}setOptions(t){return this.options=i({},this.options,t),Object.keys(t).forEach(e=>{this._optconf[e]&&this._optconf[e](t[e])}),this}initOptions(){}};class f{constructor(t){this.widget=t,this.attach()}attach(){const t=this.widget;t.el.addEventListener("keydown",e=>{const r=e.shiftKey?10:1;switch(e.key){case"ArrowRight":t.nudge(r);break;case"ArrowLeft":t.nudge(-r);break;case"ArrowUp":t.nudge(0,-r);break;case"ArrowDown":t.nudge(0,r);break;case"Delete":case"Backspace":t.stage.removeWidget(t);break;default:return}e.preventDefault()})}}f.attach=function(t){return new f(t)};var g=f,m=r("m/EP");class b extends d{constructor(t,e={}){super(t,e),this.pos=u.from(this.el),this.init()}init(){return this.createHandles(),this.createMover(),this.attachFocus(),g.attach(this),this}initOptions(){this._optconf.aspectRatio=t=>{const e=this.pos;if(this.aspect=t||null,this.aspect&&e){var[r,i]=u.getMax(e.w,e.h,t);this.render(u.fromPoint([e.x,e.y],r,i))}}}attachToStage(t){this.stage=t,this.emit("crop.attach")}attachFocus(){this.el.addEventListener("focus",t=>{this.stage.activate(this),this.emit("crop.update")},!1)}animate(t,e,r){const i=this;return r=r||i.options.animateEasingFunction||"swing",e=e||i.options.animateFrames||30,Object(m.a)(i.el,i.pos,t,t=>i.render(t.normalize()),e,r).then(()=>this.emit("crop.change"))}createMover(){var t,e,r;this.pos=u.from(this.el),c(this.el,()=>{const i=this.el.parentElement;return!!this.stage.enabled&&([t,e]=[i.offsetWidth,i.offsetHeight],r=u.from(this.el),this.el.focus(),this.stage.activate(this),!0)},(i,n)=>{this.pos.x=r.x+i,this.pos.y=r.y+n,this.render(this.pos.rebound(t,e))},()=>{this.emit("crop.change")})}nudge(t=0,e=0){const r=this.el.parentElement,[i,n]=[r.offsetWidth,r.offsetHeight];t&&(this.pos.x+=t),e&&(this.pos.y+=e),this.render(this.pos.rebound(i,n)),this.emit("crop.change")}createHandles(){return this.options.handles.forEach(t=>{const e=a.create("jcrop-handle "+t);var r;e.appendTo(this.el),c(e.el,()=>{if(!this.stage.enabled)return!1;const e=this.el.parentElement,i=e.offsetWidth,n=e.offsetHeight;return r=p.create(u.from(this.el),i,n,t),this.aspect&&(r.aspect=this.aspect),this.el.focus(),this.emit("crop.active"),!0},(t,e)=>this.render(r.move(t,e)),()=>{this.emit("crop.change")})}),this}isActive(){return this.stage&&this.stage.active===this}render(t){return t=t||this.pos,this.el.style.top=Math.round(t.y)+"px",this.el.style.left=Math.round(t.x)+"px",this.el.style.width=Math.round(t.w)+"px",this.el.style.height=Math.round(t.h)+"px",this.pos=t,this.emit("crop.update"),this}doneDragging(){this.pos=u.from(this.el)}}b.create=function(t={}){const e=document.createElement("div"),r=i({},n,t);return e.setAttribute("tabindex","0"),e.className=r.cropperClass||"jcrop-widget",new(t.widgetConstructor||b)(e,r)};var v=b;class w{constructor(t){"string"==typeof t&&(t=document.getElementById(t)),this.el=t,this.shades={}}init(t={}){this.active=void 0===t.shade||t.shade,this.keys().forEach(e=>{this.shades[e]=k.create(t,e)}),this.el.addEventListener("crop.update",t=>{t.cropTarget.isActive()&&t.cropTarget.options.shade&&this.adjust(t.cropTarget.pos)},!1),this.enable()}adjust(t){const e=u.from(this.el),r=this.shades;r.t.h=t.y,r.b.h=e.h-t.y2,r.t.w=r.b.w=Math.floor(t.w),r.l.w=r.t.x=r.b.x=Math.ceil(t.x),r.r.w=e.w-(Math.ceil(t.x)+Math.floor(t.w))}keys(){return["t","l","r","b"]}enable(){const t=this.shades;this.keys().forEach(e=>t[e].insert(this.el))}disable(){const t=this.shades;this.keys().forEach(e=>t[e].remove())}setStyle(t,e){const r=this.shades;this.keys().forEach(i=>r[i].color(t).opacity(e))}}w.attach=function(t){const e=t.el,r=new w(e);return r.init(t.options),t.shades=r,t._optconf.shade=e=>t.updateShades(),t._optconf.shadeColor=t=>r.setStyle(t),t._optconf.shadeOpacity=t=>r.setStyle(null,t),r};class k extends s{insert(t){t.appendChild(this.el)}remove(){this.el.remove()}set w(t){this.el.style.width=t+"px"}set h(t){this.el.style.height=t+"px"}set x(t){this.el.style.left=t+"px"}color(t){return t&&(this.el.style.backgroundColor=t),this}opacity(t){return t&&(this.el.style.opacity=t),this}}k.create=function(t,e){const r=document.createElement("div"),i=t.shadeClass||"jcrop-shade";return r.className=`${i} ${e}`,new k(r).color(t.shadeColor).opacity(t.shadeOpacity)},k.Manager=w;var y=k;var _=class extends d{constructor(t,e){super(t,e),this.crops=new Set,this.active=null,this.enabled=!0,this.init()}init(){this.initStageDrag(),y.Manager.attach(this)}initOptions(){this._optconf.multi=t=>{t||this.limitWidgets()}}setEnabled(t=!0){const e=this.options.disabledClass||"jcrop-disable";return this[t?"removeClass":"addClass"](e),this.enabled=!!t,this}focus(){return!!this.enabled&&(this.active?this.active.el.focus():this.el.focus(),this)}limitWidgets(t=1){if(!this.crops||t<1)return!1;const e=Array.from(this.crops);for(;e.length>t;)this.removeWidget(e.shift());return this}canCreate(){const t=this.crops.size,e=this.options;return!!this.enabled&&(!(null!==e.multiMax&&t>=e.multiMax)&&!(!e.multi&&t>=e.multiMin))}canRemove(){const t=this.crops.size,e=this.options;return!!this.enabled&&(!(this.active&&!this.active.options.canRemove)&&!(!e.canRemove||t<=e.multiMin))}initStageDrag(){var t,e,r,i,n;c(this.el,(s,o,a)=>!!this.canCreate()&&(t=(this.options.widgetConstructor||v).create(this.options),(e=t.pos).x=a.pageX-this.el.offsetParent.offsetLeft-this.el.offsetLeft,e.y=a.pageY-this.el.offsetParent.offsetTop-this.el.offsetTop,r=this.el.offsetWidth,i=this.el.offsetHeight,this.addWidget(t),n=p.create(e,r,i,"se"),this.options.aspectRatio&&(n.aspect=this.options.aspectRatio),t.render(e),this.focus(),!0),(e,r)=>{t.render(n.move(e,r))},()=>{t.emit("crop.change")})}reorderWidgets(){var t=10;this.crops.forEach(e=>{e.el.style.zIndex=t++,this.active===e?e.addClass("active"):e.removeClass("active")}),this.refresh()}activate(t){if(!this.enabled)return this;if(t=t||Array.from(this.crops).pop()){if(this.active===t)return;this.active=t,this.crops.delete(t),this.crops.add(t),this.reorderWidgets(),this.active.el.focus(),this.options.shade&&this.shades.enable(),t.emit("crop.activate")}else this.shades.disable();return this}addWidget(t){return t.attachToStage(this),t.appendTo(this.el),this.activate(t),this}newWidget(t,e={}){e=i({},this.options,e);const r=(this.options.widgetConstructor||v).create(e);return r.render(t),this.addWidget(r),r.el.focus(),r}removeWidget(t){if(!this.canRemove())return!1;t.emit("crop.remove"),t.el.remove(),this.crops.delete(t),this.activate()}refresh(){this.options.shade&&this.active&&this.shades.adjust(this.active.pos)}updateShades(){if(this.shades)return this.options.shade?this.shades.enable():this.shades.disable(),this.options.shade&&this.active&&this.shades.adjust(this.active.pos),this}setOptions(t={}){super.setOptions(t),this.crops&&Array.from(this.crops).forEach(e=>e.setOptions(t))}destroy(){}};var x=class extends _{constructor(t,e){const r=function(t,e=document.createElement("div")){return e.className=t,e}("jcrop-stage jcrop-image-stage");t.parentNode.insertBefore(r,t),r.appendChild(t),super(r,e),this.srcEl=t,t.onload=this.resizeToImage.bind(this),this.resizeToImage()}resizeToImage(){const t=this.srcEl.width,e=this.srcEl.height;this.el.style.width=t+"px",this.el.style.height=e+"px",this.refresh()}destroy(){this.el.parentNode.insertBefore(this.srcEl,this.el),this.el.remove()}},E=r("sKud"),M=r.n(E),C=r("TvQY");e.a={Stage:_,defaults:n,Dragger:c,Widget:v,Rect:u,Handle:a,Sticker:p,easing:M.a,load:C.a,attach:function(t,e={}){return e=i({},n,e),"string"==typeof t&&(t=document.getElementById(t)),"IMG"===t.tagName?new x(t,e):new _(t,e)},Shade:y,DomObj:s}},"m/EP":function(t,e,r){"use strict";(function(t){var i=r("sKud"),n=r.n(i);e.a=function(e,r,i,s,o=30,a="swing"){const c=["x","y","w","h"],h=r.normalize();a="string"==typeof a?n.a[a]:a;var u=0;return new t((t,e)=>{requestAnimationFrame((function e(){u<o?(c.forEach(t=>{h[t]=Math.round(a(u,r[t],i[t]-r[t],o))}),s(h),u++,requestAnimationFrame(e)):(s(i),t())}))})}}).call(this,r("vN7P"))},sKud:function(t,e){const r=t.exports={def:"outQuad",swing:function(t,e,i,n){return r[r.def](t,e,i,n)},inQuad:function(t,e,r,i){return r*(t/=i)*t+e},outQuad:function(t,e,r,i){return-r*(t/=i)*(t-2)+e},inOutQuad:function(t,e,r,i){return(t/=i/2)<1?r/2*t*t+e:-r/2*(--t*(t-2)-1)+e},inCubic:function(t,e,r,i){return r*(t/=i)*t*t+e},outCubic:function(t,e,r,i){return r*((t=t/i-1)*t*t+1)+e},inOutCubic:function(t,e,r,i){return(t/=i/2)<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e},inQuart:function(t,e,r,i){return r*(t/=i)*t*t*t+e},outQuart:function(t,e,r,i){return-r*((t=t/i-1)*t*t*t-1)+e},inOutQuart:function(t,e,r,i){return(t/=i/2)<1?r/2*t*t*t*t+e:-r/2*((t-=2)*t*t*t-2)+e},inQuint:function(t,e,r,i){return r*(t/=i)*t*t*t*t+e},outQuint:function(t,e,r,i){return r*((t=t/i-1)*t*t*t*t+1)+e},inOutQuint:function(t,e,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+e:r/2*((t-=2)*t*t*t*t+2)+e},inSine:function(t,e,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+e},outSine:function(t,e,r,i){return r*Math.sin(t/i*(Math.PI/2))+e},inOutSine:function(t,e,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+e},inExpo:function(t,e,r,i){return 0==t?e:r*Math.pow(2,10*(t/i-1))+e},outExpo:function(t,e,r,i){return t==i?e+r:r*(1-Math.pow(2,-10*t/i))+e},inOutExpo:function(t,e,r,i){return 0==t?e:t==i?e+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+e:r/2*(2-Math.pow(2,-10*--t))+e},inCirc:function(t,e,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+e},outCirc:function(t,e,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+e},inOutCirc:function(t,e,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+e:r/2*(Math.sqrt(1-(t-=2)*t)+1)+e},inElastic:function(t,e,r,i){var n=1.70158,s=0,o=r;if(0==t)return e;if(1==(t/=i))return e+r;if(s||(s=.3*i),o<Math.abs(r)){o=r;n=s/4}else n=s/(2*Math.PI)*Math.asin(r/o);return-o*Math.pow(2,10*(t-=1))*Math.sin((t*i-n)*(2*Math.PI)/s)+e},outElastic:function(t,e,r,i){var n=1.70158,s=0,o=r;if(0==t)return e;if(1==(t/=i))return e+r;if(s||(s=.3*i),o<Math.abs(r)){o=r;n=s/4}else n=s/(2*Math.PI)*Math.asin(r/o);return o*Math.pow(2,-10*t)*Math.sin((t*i-n)*(2*Math.PI)/s)+r+e},inOutElastic:function(t,e,r,i){var n=1.70158,s=0,o=r;if(0==t)return e;if(2==(t/=i/2))return e+r;if(s||(s=i*(.3*1.5)),o<Math.abs(r)){o=r;n=s/4}else n=s/(2*Math.PI)*Math.asin(r/o);return t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*i-n)*(2*Math.PI)/s)*-.5+e:o*Math.pow(2,-10*(t-=1))*Math.sin((t*i-n)*(2*Math.PI)/s)*.5+r+e},inBack:function(t,e,r,i,n){return null==n&&(n=1.70158),r*(t/=i)*t*((n+1)*t-n)+e},outBack:function(t,e,r,i,n){return null==n&&(n=1.70158),r*((t=t/i-1)*t*((n+1)*t+n)+1)+e},inOutBack:function(t,e,r,i,n){return null==n&&(n=1.70158),(t/=i/2)<1?r/2*(t*t*((1+(n*=1.525))*t-n))+e:r/2*((t-=2)*t*((1+(n*=1.525))*t+n)+2)+e},inBounce:function(t,e,i,n){return i-r.outBounce(n-t,0,i,n)+e},outBounce:function(t,e,r,i){return(t/=i)<1/2.75?r*(7.5625*t*t)+e:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+e:r*(7.5625*(t-=2.625/2.75)*t+.984375)+e},inOutBounce:function(t,e,i,n){return t<n/2?.5*r.inBounce(2*t,0,i,n)+e:.5*r.outBounce(2*t-n,0,i,n)+.5*i+e}}}}]);