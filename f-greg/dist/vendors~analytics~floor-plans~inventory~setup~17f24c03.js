(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RF9M:function(n,e){!function(n){var e="application/x-dnd",a=["move","copy","link"];function t(n,e){return"all"==e?n:n.filter((function(n){return-1!=e.toLowerCase().indexOf(n)}))}n.directive("dndDraggable",["$parse","$timeout",function(n,d){return function(o,i,l){i.attr("draggable","true"),l.dndDisableIf&&o.$watch(l.dndDisableIf,(function(n){i.attr("draggable",!n)})),i.on("dragstart",(function(f){if(f=f.originalEvent||f,"false"==i.attr("draggable"))return!0;r.isDragging=!0,r.itemType=l.dndType&&o.$eval(l.dndType).toLowerCase(),r.dropEffect="none",r.effectAllowed=l.dndEffectAllowed||a[0],f.dataTransfer.effectAllowed=r.effectAllowed;var c=o.$eval(l.dndDraggable),s=e+(r.itemType?"-"+r.itemType:"");try{f.dataTransfer.setData(s,angular.toJson(c))}catch(n){var g=angular.toJson({item:c,type:r.itemType});try{f.dataTransfer.setData("application/json",g)}catch(n){var u=t(a,r.effectAllowed);f.dataTransfer.effectAllowed=u[0],f.dataTransfer.setData("Text",g)}}if(i.addClass("dndDragging"),d((function(){i.addClass("dndDraggingSource")}),0),f._dndHandle&&f.dataTransfer.setDragImage&&f.dataTransfer.setDragImage(i[0],0,0),n(l.dndDragstart)(o,{event:f}),l.dndCallback){var p=n(l.dndCallback);r.callback=function(n){return p(o,n||{})}}f.stopPropagation()})),i.on("dragend",(function(e){e=e.originalEvent||e,o.$apply((function(){var a=r.dropEffect;n(l[{copy:"dndCopied",link:"dndLinked",move:"dndMoved",none:"dndCanceled"}[a]])(o,{event:e}),n(l.dndDragend)(o,{event:e,dropEffect:a})})),r.isDragging=!1,r.callback=void 0,i.removeClass("dndDragging"),i.removeClass("dndDraggingSource"),e.stopPropagation(),d((function(){i.removeClass("dndDraggingSource")}),0)})),i.on("click",(function(e){l.dndSelected&&(e=e.originalEvent||e,o.$apply((function(){n(l.dndSelected)(o,{event:e})})),e.stopPropagation())})),i.on("selectstart",(function(){this.dragDrop&&this.dragDrop()}))}}]),n.directive("dndList",["$parse",function(n){return function(d,o,i){var l=function(){var n;return angular.forEach(o.children(),(function(e){var a=angular.element(e);a.hasClass("dndPlaceholder")&&(n=a)})),n||angular.element("<li class='dndPlaceholder'></li>")}();l.remove();var f=l[0],c=o[0],s={};function g(n){if(!n)return"Text";for(var a=0;a<n.length;a++)if("Text"==n[a]||"application/json"==n[a]||n[a].substr(0,e.length)==e)return n[a];return null}function u(n){return r.isDragging?r.itemType||void 0:"Text"==n||"application/json"==n?null:n&&n.substr(e.length+1)||void 0}function p(n){return!s.disabled&&(!(!s.externalSources&&!r.isDragging)&&(!s.allowedTypes||null===n||n&&-1!=s.allowedTypes.indexOf(n)))}function v(n,e){var d=a;return e||(d=t(d,n.dataTransfer.effectAllowed)),r.isDragging&&(d=t(d,r.effectAllowed)),i.dndEffectAllowed&&(d=t(d,i.dndEffectAllowed)),d.length?n.ctrlKey&&-1!=d.indexOf("copy")?"copy":n.altKey&&-1!=d.indexOf("link")?"link":d[0]:"none"}function D(){return l.remove(),o.removeClass("dndDragover"),!0}function y(e,a,t,o,i,l){return n(e)(d,{callback:r.callback,dropEffect:t,event:a,external:!r.isDragging,index:void 0!==i?i:T(),item:l||void 0,type:o})}function T(){return Array.prototype.indexOf.call(c.children,f)}o.on("dragenter",(function(n){n=n.originalEvent||n;var e=i.dndAllowedTypes&&d.$eval(i.dndAllowedTypes);s={allowedTypes:angular.isArray(e)&&e.join("|").toLowerCase().split("|"),disabled:i.dndDisableIf&&d.$eval(i.dndDisableIf),externalSources:i.dndExternalSources&&d.$eval(i.dndExternalSources),horizontal:i.dndHorizontalList&&d.$eval(i.dndHorizontalList)};var a=g(n.dataTransfer.types);if(!a||!p(u(a)))return!0;n.preventDefault()})),o.on("dragover",(function(n){var e=g((n=n.originalEvent||n).dataTransfer.types),a=u(e);if(!e||!p(a))return!0;if(f.parentNode!=c&&o.append(l),n.target!=c){for(var t=n.target;t.parentNode!=c&&t.parentNode;)t=t.parentNode;if(t.parentNode==c&&t!=f){var r=t.getBoundingClientRect();if(s.horizontal)var d=n.clientX<r.left+r.width/2;else d=n.clientY<r.top+r.height/2;c.insertBefore(f,d?t:t.nextSibling)}}var T="Text"==e,w=v(n,T);return"none"==w||i.dndDragover&&!y(i.dndDragover,n,w,a)?D():(n.preventDefault(),T||(n.dataTransfer.dropEffect=w),o.addClass("dndDragover"),n.stopPropagation(),!1)})),o.on("drop",(function(n){var e=g((n=n.originalEvent||n).dataTransfer.types),a=u(e);if(!e||!p(a))return!0;n.preventDefault();try{var t=JSON.parse(n.dataTransfer.getData(e))}catch(n){return D()}if(("Text"==e||"application/json"==e)&&(a=t.type||void 0,t=t.item,!p(a)))return D();var o="Text"==e,l=v(n,o);if("none"==l)return D();var f=T();return i.dndDrop&&!(t=y(i.dndDrop,n,l,a,f,t))?D():(r.dropEffect=l,o||(n.dataTransfer.dropEffect=l),!0!==t&&d.$apply((function(){d.$eval(i.dndList).splice(f,0,t)})),y(i.dndInserted,n,l,a,f,t),D(),n.stopPropagation(),!1)})),o.on("dragleave",(function(n){n=n.originalEvent||n;var e=document.elementFromPoint(n.clientX,n.clientY);c.contains(e)&&!n._dndPhShown?n._dndPhShown=!0:D()}))}}]),n.directive("dndNodrag",(function(){return function(n,e,a){e.attr("draggable","true"),e.on("dragstart",(function(n){(n=n.originalEvent||n)._dndHandle||(n.dataTransfer.types&&n.dataTransfer.types.length||n.preventDefault(),n.stopPropagation())})),e.on("dragend",(function(n){(n=n.originalEvent||n)._dndHandle||n.stopPropagation()}))}})),n.directive("dndHandle",(function(){return function(n,e,a){e.attr("draggable","true"),e.on("dragstart dragend",(function(n){(n=n.originalEvent||n)._dndHandle=!0}))}}));var r={}}(angular.module("dndLists",[]))}}]);