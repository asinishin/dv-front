/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js":
/*!********************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/array/from */ \"../../../node_modules/core-js-pure/stable/array/from.js\");\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ \"../../../node_modules/core-js-pure/stable/instance/concat.js\");\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/filter */ \"../../../node_modules/core-js-pure/stable/instance/filter.js\");\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/sort */ \"../../../node_modules/core-js-pure/stable/instance/sort.js\");\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/splice */ \"../../../node_modules/core-js-pure/stable/instance/splice.js\");\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/core-js-stable/url.js":
/*!*************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/url.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/url */ \"../../../node_modules/core-js-pure/stable/url/index.js\");\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js-stable/url.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"../../../node_modules/core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../node_modules/@babel/runtime-corejs3/helpers/createClass.js":
/*!**************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/helpers/createClass.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"../../../node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _Object$defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/@babel/runtime-corejs3/helpers/createClass.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/array/from.js":
/*!**********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/from.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.iterator */ \"../../../node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es.array.from */ \"../../../node_modules/core-js-pure/modules/es.array.from.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.from;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/from.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/array/virtual/concat.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.concat */ \"../../../node_modules/core-js-pure/modules/es.array.concat.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../../../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').concat;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/concat.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/array/virtual/filter.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/filter.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.filter */ \"../../../node_modules/core-js-pure/modules/es.array.filter.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../../../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').filter;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/filter.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/array/virtual/sort.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/sort.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.sort */ \"../../../node_modules/core-js-pure/modules/es.array.sort.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../../../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').sort;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/sort.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/array/virtual/splice.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/splice.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.splice */ \"../../../node_modules/core-js-pure/modules/es.array.splice.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"../../../node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').splice;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/array/virtual/splice.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/instance/concat.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/concat.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var concat = __webpack_require__(/*! ../array/virtual/concat */ \"../../../node_modules/core-js-pure/es/array/virtual/concat.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.concat;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/concat.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/instance/filter.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/filter.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var filter = __webpack_require__(/*! ../array/virtual/filter */ \"../../../node_modules/core-js-pure/es/array/virtual/filter.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.filter;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/filter.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/instance/sort.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/sort.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var sort = __webpack_require__(/*! ../array/virtual/sort */ \"../../../node_modules/core-js-pure/es/array/virtual/sort.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.sort;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.sort) ? sort : own;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/sort.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/instance/splice.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/splice.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var splice = __webpack_require__(/*! ../array/virtual/splice */ \"../../../node_modules/core-js-pure/es/array/virtual/splice.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.splice;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.splice) ? splice : own;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/instance/splice.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/es/object/define-property.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/object/define-property.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"../../../node_modules/core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"../../../node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/features/object/define-property.js":
/*!****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/features/object/define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/define-property */ \"../../../node_modules/core-js-pure/es/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/a-function.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/a-function.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!***************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/an-instance.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/an-instance.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name) {\n  if (!(it instanceof Constructor)) {\n    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/an-instance.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/an-object.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/an-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/array-from.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-from.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../../node_modules/core-js-pure/internals/function-bind-context.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"../../../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"../../../node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../../node_modules/core-js-pure/internals/create-property.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"../../../node_modules/core-js-pure/internals/get-iterator-method.js\");\n\n// `Array.from` method implementation\n// https://tc39.es/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var C = typeof this == 'function' ? this : Array;\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = iteratorMethod.call(O);\n    next = iterator.next;\n    result = new C();\n    for (;!(step = next.call(iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = toLength(O.length);\n    result = new C(length);\n    for (;length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-from.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/array-includes.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-includes.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js-pure/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../../node_modules/core-js-pure/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/array-iteration.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-iteration.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../../node_modules/core-js-pure/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../node_modules/core-js-pure/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js-pure/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_OUT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push.call(target, value); // filterOut\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterOut` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterOut: createMethod(7)\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../../node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/array-method-is-strict.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-method-is-strict.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-method-is-strict.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/array-sort.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-sort.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// TODO: use something more complex like timsort?\nvar floor = Math.floor;\n\nvar mergeSort = function (array, comparefn) {\n  var length = array.length;\n  var middle = floor(length / 2);\n  return length < 8 ? insertionSort(array, comparefn) : merge(\n    mergeSort(array.slice(0, middle), comparefn),\n    mergeSort(array.slice(middle), comparefn),\n    comparefn\n  );\n};\n\nvar insertionSort = function (array, comparefn) {\n  var length = array.length;\n  var i = 1;\n  var element, j;\n\n  while (i < length) {\n    j = i;\n    element = array[i];\n    while (j && comparefn(array[j - 1], element) > 0) {\n      array[j] = array[--j];\n    }\n    if (j !== i++) array[j] = element;\n  } return array;\n};\n\nvar merge = function (left, right, comparefn) {\n  var llength = left.length;\n  var rlength = right.length;\n  var lindex = 0;\n  var rindex = 0;\n  var result = [];\n\n  while (lindex < llength || rindex < rlength) {\n    if (lindex < llength && rindex < rlength) {\n      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);\n    } else {\n      result.push(lindex < llength ? left[lindex++] : right[rindex++]);\n    }\n  } return result;\n};\n\nmodule.exports = mergeSort;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-sort.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/array-species-create.js":
/*!***************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-species-create.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../node_modules/core-js-pure/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"../../../node_modules/core-js-pure/internals/iterator-close.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  } catch (error) {\n    iteratorClose(iterator);\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/classof-raw.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/classof-raw.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/classof.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/classof.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"../../../node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"../../../node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../../../node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/create-property.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-property.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../node_modules/core-js-pure/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/define-iterator.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/define-iterator.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"../../../node_modules/core-js-pure/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../../../node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js-pure/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../node_modules/core-js-pure/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"../../../node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/define-iterator.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/descriptors.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/descriptors.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/document-create-element.js":
/*!******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/document-create-element.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/engine-ff-version.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-ff-version.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../../node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar firefox = userAgent.match(/firefox\\/(\\d+)/i);\n\nmodule.exports = !!firefox && +firefox[1];\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-ff-version.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/engine-is-ie-or-edge.js":
/*!***************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-is-ie-or-edge.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var UA = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../../node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nmodule.exports = /MSIE|Trident/.test(UA);\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-is-ie-or-edge.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/engine-user-agent.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-user-agent.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/engine-v8-version.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../../node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] < 4 ? 1 : match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-v8-version.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/engine-webkit-version.js":
/*!****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-webkit-version.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../../node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar webkit = userAgent.match(/AppleWebKit\\/(\\d+)\\./);\n\nmodule.exports = !!webkit && +webkit[1];\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/engine-webkit-version.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/entry-virtual.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/entry-virtual.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = function (CONSTRUCTOR) {\n  return path[CONSTRUCTOR + 'Prototype'];\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/entry-virtual.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/export.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/export.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../../../node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"../../../node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../../node_modules/core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return NativeConstructor.apply(this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!has(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/fails.js":
/*!************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/fails.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/function-bind-context.js":
/*!****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/function-bind-context.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../node_modules/core-js-pure/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/get-built-in.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/get-built-in.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../../node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"../../../node_modules/core-js-pure/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/get-iterator-method.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/get-iterator.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/get-iterator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"../../../node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nmodule.exports = function (it) {\n  var iteratorMethod = getIteratorMethod(it);\n  if (typeof iteratorMethod != 'function') {\n    throw TypeError(String(it) + ' is not iterable');\n  } return anObject(iteratorMethod.call(it));\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/get-iterator.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/global.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/global.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"../../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/has.js":
/*!**********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/has.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\n\nvar hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty.call(toObject(it), key);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/has.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/hidden-keys.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/hidden-keys.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/html.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/html.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/indexed-object.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/indexed-object.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/inspect-source.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/inspect-source.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"../../../node_modules/core-js-pure/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/inspect-source.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/internal-state.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/internal-state.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"../../../node_modules/core-js-pure/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"../../../node_modules/core-js-pure/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/is-array.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-array.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js-pure/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/is-forced.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-forced.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/is-object.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/is-pure.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-pure.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/iterator-close.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/iterator-close.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\n\nmodule.exports = function (iterator) {\n  var returnMethod = iterator['return'];\n  if (returnMethod !== undefined) {\n    return anObject(returnMethod.call(iterator)).value;\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/iterator-close.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/iterators-core.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/iterators-core.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../../node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\n/* eslint-disable es/no-array-prototype-keys -- safe */\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nvar NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {\n  var test = {};\n  // FF44- legacy iterators case\n  return IteratorPrototype[ITERATOR].call(test) !== test;\n});\n\nif (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};\n\n// `%IteratorPrototype%[@@iterator]()` method\n// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator\nif ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/iterators.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/iterators.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/native-symbol.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/native-symbol.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../../node_modules/core-js-pure/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/native-url.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/native-url.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = !fails(function () {\n  var url = new URL('b?a=1&b=2&c=3', 'http://a');\n  var searchParams = url.searchParams;\n  var result = '';\n  url.pathname = 'c%20d';\n  searchParams.forEach(function (value, key) {\n    searchParams['delete']('b');\n    result += key + value;\n  });\n  return (IS_PURE && !url.toJSON)\n    || !searchParams.sort\n    || url.href !== 'http://a/c%20d?a=1&c=3'\n    || searchParams.get('c') !== '3'\n    || String(new URLSearchParams('?a=1')) !== 'a=1'\n    || !searchParams[ITERATOR]\n    // throws in Edge\n    || new URL('https://a@b').username !== 'a'\n    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'\n    // not punycoded in Edge\n    || new URL('http://тест').host !== 'xn--e1aybc'\n    // not escaped in Chrome 62-\n    || new URL('http://a#б').hash !== '#%D0%B1'\n    // fails in Chrome 66-\n    || result !== 'a1c3'\n    // throws in Safari\n    || new URL('http://x', undefined).host !== 'x';\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/native-url.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/native-weak-map.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/native-weak-map.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../../node_modules/core-js-pure/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/native-weak-map.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-assign.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-assign.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../../../node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../../../node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../../node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../node_modules/core-js-pure/internals/indexed-object.js\");\n\n// eslint-disable-next-line es/no-object-assign -- safe\nvar $assign = Object.assign;\n// eslint-disable-next-line es/no-object-defineproperty -- required for testing\nvar defineProperty = Object.defineProperty;\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\nmodule.exports = !$assign || fails(function () {\n  // should have correct order of operations (Edge bug)\n  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {\n    enumerable: true,\n    get: function () {\n      defineProperty(this, 'b', {\n        value: 3,\n        enumerable: false\n      });\n    }\n  }), { b: 2 })).b !== 1) return true;\n  // should work with symbols and should have deterministic property order (V8 bug)\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line es/no-symbol -- safe\n  var symbol = Symbol();\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-assign.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-create.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-create.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"../../../node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"../../../node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../node_modules/core-js-pure/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject -- old IE */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-define-properties.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"../../../node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\n// eslint-disable-next-line es/no-object-defineproperties -- safe\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-define-property.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-define-property.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../node_modules/core-js-pure/internals/to-primitive.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../../node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../node_modules/core-js-pure/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"../../../node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.getprototypeof\n// eslint-disable-next-line es/no-object-getprototypeof -- safe\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-keys-internal.js":
/*!***************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../../../node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../node_modules/core-js-pure/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-keys.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-keys.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../../node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n// eslint-disable-next-line es/no-object-keys -- safe\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-proto -- safe */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"../../../node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/object-to-string.js":
/*!***********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-to-string.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"../../../node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"../../../node_modules/core-js-pure/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/path.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/path.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/redefine-all.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/redefine-all.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js-pure/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) {\n    if (options && options.unsafe && target[key]) target[key] = src[key];\n    else redefine(target, key, src[key], options);\n  } return target;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/redefine-all.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/redefine.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/redefine.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else createNonEnumerableProperty(target, key, value);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/redefine.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/set-global.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/set-global.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"../../../node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"../../../node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n    if (!has(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/shared-key.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/shared-key.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../../../node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/shared-store.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/shared-store.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../node_modules/core-js-pure/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/shared.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/shared.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"../../../node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.14.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/string-multibyte.js":
/*!***********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/string-multibyte.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js-pure/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/string-punycode-to-ascii.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/string-punycode-to-ascii.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js\nvar maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1\nvar base = 36;\nvar tMin = 1;\nvar tMax = 26;\nvar skew = 38;\nvar damp = 700;\nvar initialBias = 72;\nvar initialN = 128; // 0x80\nvar delimiter = '-'; // '\\x2D'\nvar regexNonASCII = /[^\\0-\\u007E]/; // non-ASCII chars\nvar regexSeparators = /[.\\u3002\\uFF0E\\uFF61]/g; // RFC 3490 separators\nvar OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';\nvar baseMinusTMin = base - tMin;\nvar floor = Math.floor;\nvar stringFromCharCode = String.fromCharCode;\n\n/**\n * Creates an array containing the numeric code points of each Unicode\n * character in the string. While JavaScript uses UCS-2 internally,\n * this function will convert a pair of surrogate halves (each of which\n * UCS-2 exposes as separate characters) into a single code point,\n * matching UTF-16.\n */\nvar ucs2decode = function (string) {\n  var output = [];\n  var counter = 0;\n  var length = string.length;\n  while (counter < length) {\n    var value = string.charCodeAt(counter++);\n    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {\n      // It's a high surrogate, and there is a next character.\n      var extra = string.charCodeAt(counter++);\n      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.\n        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);\n      } else {\n        // It's an unmatched surrogate; only append this code unit, in case the\n        // next code unit is the high surrogate of a surrogate pair.\n        output.push(value);\n        counter--;\n      }\n    } else {\n      output.push(value);\n    }\n  }\n  return output;\n};\n\n/**\n * Converts a digit/integer into a basic code point.\n */\nvar digitToBasic = function (digit) {\n  //  0..25 map to ASCII a..z or A..Z\n  // 26..35 map to ASCII 0..9\n  return digit + 22 + 75 * (digit < 26);\n};\n\n/**\n * Bias adaptation function as per section 3.4 of RFC 3492.\n * https://tools.ietf.org/html/rfc3492#section-3.4\n */\nvar adapt = function (delta, numPoints, firstTime) {\n  var k = 0;\n  delta = firstTime ? floor(delta / damp) : delta >> 1;\n  delta += floor(delta / numPoints);\n  for (; delta > baseMinusTMin * tMax >> 1; k += base) {\n    delta = floor(delta / baseMinusTMin);\n  }\n  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));\n};\n\n/**\n * Converts a string of Unicode symbols (e.g. a domain name label) to a\n * Punycode string of ASCII-only symbols.\n */\n// eslint-disable-next-line max-statements -- TODO\nvar encode = function (input) {\n  var output = [];\n\n  // Convert the input in UCS-2 to an array of Unicode code points.\n  input = ucs2decode(input);\n\n  // Cache the length.\n  var inputLength = input.length;\n\n  // Initialize the state.\n  var n = initialN;\n  var delta = 0;\n  var bias = initialBias;\n  var i, currentValue;\n\n  // Handle the basic code points.\n  for (i = 0; i < input.length; i++) {\n    currentValue = input[i];\n    if (currentValue < 0x80) {\n      output.push(stringFromCharCode(currentValue));\n    }\n  }\n\n  var basicLength = output.length; // number of basic code points.\n  var handledCPCount = basicLength; // number of code points that have been handled;\n\n  // Finish the basic string with a delimiter unless it's empty.\n  if (basicLength) {\n    output.push(delimiter);\n  }\n\n  // Main encoding loop:\n  while (handledCPCount < inputLength) {\n    // All non-basic code points < n have been handled already. Find the next larger one:\n    var m = maxInt;\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue >= n && currentValue < m) {\n        m = currentValue;\n      }\n    }\n\n    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.\n    var handledCPCountPlusOne = handledCPCount + 1;\n    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {\n      throw RangeError(OVERFLOW_ERROR);\n    }\n\n    delta += (m - n) * handledCPCountPlusOne;\n    n = m;\n\n    for (i = 0; i < input.length; i++) {\n      currentValue = input[i];\n      if (currentValue < n && ++delta > maxInt) {\n        throw RangeError(OVERFLOW_ERROR);\n      }\n      if (currentValue == n) {\n        // Represent delta as a generalized variable-length integer.\n        var q = delta;\n        for (var k = base; /* no condition */; k += base) {\n          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);\n          if (q < t) break;\n          var qMinusT = q - t;\n          var baseMinusT = base - t;\n          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));\n          q = floor(qMinusT / baseMinusT);\n        }\n\n        output.push(stringFromCharCode(digitToBasic(q)));\n        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);\n        delta = 0;\n        ++handledCPCount;\n      }\n    }\n\n    ++delta;\n    ++n;\n  }\n  return output.join('');\n};\n\nmodule.exports = function (input) {\n  var encoded = [];\n  var labels = input.toLowerCase().replace(regexSeparators, '\\u002E').split('.');\n  var i, label;\n  for (i = 0; i < labels.length; i++) {\n    label = labels[i];\n    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);\n  }\n  return encoded.join('.');\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/string-punycode-to-ascii.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/to-absolute-index.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js-pure/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/to-indexed-object.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/to-integer.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-integer.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.es/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-integer.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/to-length.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-length.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js-pure/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/to-object.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/to-primitive.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-primitive.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/to-string-tag-support.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/uid.js":
/*!**********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/uid.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../node_modules/core-js-pure/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/internals/well-known-symbol.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../node_modules/core-js-pure/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../node_modules/core-js-pure/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"../../../node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.array.concat.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.concat.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../../node_modules/core-js-pure/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../node_modules/core-js-pure/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../../node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.es/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  concat: function concat(arg) {\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.array.filter.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.filter.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar $filter = __webpack_require__(/*! ../internals/array-iteration */ \"../../../node_modules/core-js-pure/internals/array-iteration.js\").filter;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');\n\n// `Array.prototype.filter` method\n// https://tc39.es/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.filter.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.array.from.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.from.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"../../../node_modules/core-js-pure/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"../../../node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  // eslint-disable-next-line es/no-array-from -- required for testing\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.es/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.from.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.array.iterator.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"../../../node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../../../node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.es/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.es/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.es/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.es/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.es/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.es/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.array.sort.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.sort.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../node_modules/core-js-pure/internals/a-function.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js-pure/internals/to-length.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js-pure/internals/fails.js\");\nvar internalSort = __webpack_require__(/*! ../internals/array-sort */ \"../../../node_modules/core-js-pure/internals/array-sort.js\");\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"../../../node_modules/core-js-pure/internals/array-method-is-strict.js\");\nvar FF = __webpack_require__(/*! ../internals/engine-ff-version */ \"../../../node_modules/core-js-pure/internals/engine-ff-version.js\");\nvar IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ \"../../../node_modules/core-js-pure/internals/engine-is-ie-or-edge.js\");\nvar V8 = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../../node_modules/core-js-pure/internals/engine-v8-version.js\");\nvar WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ \"../../../node_modules/core-js-pure/internals/engine-webkit-version.js\");\n\nvar test = [];\nvar nativeSort = test.sort;\n\n// IE8-\nvar FAILS_ON_UNDEFINED = fails(function () {\n  test.sort(undefined);\n});\n// V8 bug\nvar FAILS_ON_NULL = fails(function () {\n  test.sort(null);\n});\n// Old WebKit\nvar STRICT_METHOD = arrayMethodIsStrict('sort');\n\nvar STABLE_SORT = !fails(function () {\n  // feature detection can be too slow, so check engines versions\n  if (V8) return V8 < 70;\n  if (FF && FF > 3) return;\n  if (IE_OR_EDGE) return true;\n  if (WEBKIT) return WEBKIT < 603;\n\n  var result = '';\n  var code, chr, value, index;\n\n  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)\n  for (code = 65; code < 76; code++) {\n    chr = String.fromCharCode(code);\n\n    switch (code) {\n      case 66: case 69: case 70: case 72: value = 3; break;\n      case 68: case 71: value = 4; break;\n      default: value = 2;\n    }\n\n    for (index = 0; index < 47; index++) {\n      test.push({ k: chr + index, v: value });\n    }\n  }\n\n  test.sort(function (a, b) { return b.v - a.v; });\n\n  for (index = 0; index < test.length; index++) {\n    chr = test[index].k.charAt(0);\n    if (result.charAt(result.length - 1) !== chr) result += chr;\n  }\n\n  return result !== 'DGBEFHACIJK';\n});\n\nvar FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;\n\nvar getSortCompare = function (comparefn) {\n  return function (x, y) {\n    if (y === undefined) return -1;\n    if (x === undefined) return 1;\n    if (comparefn !== undefined) return +comparefn(x, y) || 0;\n    return String(x) > String(y) ? 1 : -1;\n  };\n};\n\n// `Array.prototype.sort` method\n// https://tc39.es/ecma262/#sec-array.prototype.sort\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  sort: function sort(comparefn) {\n    if (comparefn !== undefined) aFunction(comparefn);\n\n    var array = toObject(this);\n\n    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);\n\n    var items = [];\n    var arrayLength = toLength(array.length);\n    var itemsLength, index;\n\n    for (index = 0; index < arrayLength; index++) {\n      if (index in array) items.push(array[index]);\n    }\n\n    items = internalSort(items, getSortCompare(comparefn));\n    itemsLength = items.length;\n    index = 0;\n\n    while (index < itemsLength) array[index] = items[index++];\n    while (index < arrayLength) delete array[index++];\n\n    return array;\n  }\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.sort.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.array.splice.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.splice.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../../node_modules/core-js-pure/internals/to-absolute-index.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js-pure/internals/to-integer.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js-pure/internals/to-length.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js-pure/internals/to-object.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../node_modules/core-js-pure/internals/array-species-create.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../../node_modules/core-js-pure/internals/create-property.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../../node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');\n\nvar max = Math.max;\nvar min = Math.min;\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';\n\n// `Array.prototype.splice` method\n// https://tc39.es/ecma262/#sec-array.prototype.splice\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  splice: function splice(start, deleteCount /* , ...items */) {\n    var O = toObject(this);\n    var len = toLength(O.length);\n    var actualStart = toAbsoluteIndex(start, len);\n    var argumentsLength = arguments.length;\n    var insertCount, actualDeleteCount, A, k, from, to;\n    if (argumentsLength === 0) {\n      insertCount = actualDeleteCount = 0;\n    } else if (argumentsLength === 1) {\n      insertCount = 0;\n      actualDeleteCount = len - actualStart;\n    } else {\n      insertCount = argumentsLength - 2;\n      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);\n    }\n    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {\n      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);\n    }\n    A = arraySpeciesCreate(O, actualDeleteCount);\n    for (k = 0; k < actualDeleteCount; k++) {\n      from = actualStart + k;\n      if (from in O) createProperty(A, k, O[from]);\n    }\n    A.length = actualDeleteCount;\n    if (insertCount < actualDeleteCount) {\n      for (k = actualStart; k < len - actualDeleteCount; k++) {\n        from = k + actualDeleteCount;\n        to = k + insertCount;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];\n    } else if (insertCount > actualDeleteCount) {\n      for (k = len - actualDeleteCount; k > actualStart; k--) {\n        from = k + actualDeleteCount - 1;\n        to = k + insertCount - 1;\n        if (from in O) O[to] = O[from];\n        else delete O[to];\n      }\n    }\n    for (k = 0; k < insertCount; k++) {\n      O[k + actualStart] = arguments[k + 2];\n    }\n    O.length = len - actualDeleteCount + insertCount;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.array.splice.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.object.define-property.js":
/*!******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js-pure/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/es.string.iterator.js":
/*!***********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"../../../node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"../../../node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.es/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/web.url-search-params.js":
/*!**************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/web.url-search-params.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.array.iterator */ \"../../../node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js-pure/internals/get-built-in.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ \"../../../node_modules/core-js-pure/internals/native-url.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js-pure/internals/redefine.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"../../../node_modules/core-js-pure/internals/redefine-all.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"../../../node_modules/core-js-pure/internals/create-iterator-constructor.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../node_modules/core-js-pure/internals/internal-state.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"../../../node_modules/core-js-pure/internals/an-instance.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../../node_modules/core-js-pure/internals/function-bind-context.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"../../../node_modules/core-js-pure/internals/classof.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js-pure/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js-pure/internals/is-object.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"../../../node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"../../../node_modules/core-js-pure/internals/get-iterator.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"../../../node_modules/core-js-pure/internals/get-iterator-method.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar $fetch = getBuiltIn('fetch');\nvar Headers = getBuiltIn('Headers');\nvar ITERATOR = wellKnownSymbol('iterator');\nvar URL_SEARCH_PARAMS = 'URLSearchParams';\nvar URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);\nvar getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);\n\nvar plus = /\\+/g;\nvar sequences = Array(4);\n\nvar percentSequence = function (bytes) {\n  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\\\da-f]{2}){' + bytes + '})', 'gi'));\n};\n\nvar percentDecode = function (sequence) {\n  try {\n    return decodeURIComponent(sequence);\n  } catch (error) {\n    return sequence;\n  }\n};\n\nvar deserialize = function (it) {\n  var result = it.replace(plus, ' ');\n  var bytes = 4;\n  try {\n    return decodeURIComponent(result);\n  } catch (error) {\n    while (bytes) {\n      result = result.replace(percentSequence(bytes--), percentDecode);\n    }\n    return result;\n  }\n};\n\nvar find = /[!'()~]|%20/g;\n\nvar replace = {\n  '!': '%21',\n  \"'\": '%27',\n  '(': '%28',\n  ')': '%29',\n  '~': '%7E',\n  '%20': '+'\n};\n\nvar replacer = function (match) {\n  return replace[match];\n};\n\nvar serialize = function (it) {\n  return encodeURIComponent(it).replace(find, replacer);\n};\n\nvar parseSearchParams = function (result, query) {\n  if (query) {\n    var attributes = query.split('&');\n    var index = 0;\n    var attribute, entry;\n    while (index < attributes.length) {\n      attribute = attributes[index++];\n      if (attribute.length) {\n        entry = attribute.split('=');\n        result.push({\n          key: deserialize(entry.shift()),\n          value: deserialize(entry.join('='))\n        });\n      }\n    }\n  }\n};\n\nvar updateSearchParams = function (query) {\n  this.entries.length = 0;\n  parseSearchParams(this.entries, query);\n};\n\nvar validateArgumentsLength = function (passed, required) {\n  if (passed < required) throw TypeError('Not enough arguments');\n};\n\nvar URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {\n  setInternalState(this, {\n    type: URL_SEARCH_PARAMS_ITERATOR,\n    iterator: getIterator(getInternalParamsState(params).entries),\n    kind: kind\n  });\n}, 'Iterator', function next() {\n  var state = getInternalIteratorState(this);\n  var kind = state.kind;\n  var step = state.iterator.next();\n  var entry = step.value;\n  if (!step.done) {\n    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];\n  } return step;\n});\n\n// `URLSearchParams` constructor\n// https://url.spec.whatwg.org/#interface-urlsearchparams\nvar URLSearchParamsConstructor = function URLSearchParams(/* init */) {\n  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);\n  var init = arguments.length > 0 ? arguments[0] : undefined;\n  var that = this;\n  var entries = [];\n  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;\n\n  setInternalState(that, {\n    type: URL_SEARCH_PARAMS,\n    entries: entries,\n    updateURL: function () { /* empty */ },\n    updateSearchParams: updateSearchParams\n  });\n\n  if (init !== undefined) {\n    if (isObject(init)) {\n      iteratorMethod = getIteratorMethod(init);\n      if (typeof iteratorMethod === 'function') {\n        iterator = iteratorMethod.call(init);\n        next = iterator.next;\n        while (!(step = next.call(iterator)).done) {\n          entryIterator = getIterator(anObject(step.value));\n          entryNext = entryIterator.next;\n          if (\n            (first = entryNext.call(entryIterator)).done ||\n            (second = entryNext.call(entryIterator)).done ||\n            !entryNext.call(entryIterator).done\n          ) throw TypeError('Expected sequence with length 2');\n          entries.push({ key: first.value + '', value: second.value + '' });\n        }\n      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });\n    } else {\n      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');\n    }\n  }\n};\n\nvar URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;\n\nredefineAll(URLSearchParamsPrototype, {\n  // `URLSearchParams.prototype.append` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-append\n  append: function append(name, value) {\n    validateArgumentsLength(arguments.length, 2);\n    var state = getInternalParamsState(this);\n    state.entries.push({ key: name + '', value: value + '' });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.delete` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete\n  'delete': function (name) {\n    validateArgumentsLength(arguments.length, 1);\n    var state = getInternalParamsState(this);\n    var entries = state.entries;\n    var key = name + '';\n    var index = 0;\n    while (index < entries.length) {\n      if (entries[index].key === key) entries.splice(index, 1);\n      else index++;\n    }\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.get` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-get\n  get: function get(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = name + '';\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) return entries[index].value;\n    }\n    return null;\n  },\n  // `URLSearchParams.prototype.getAll` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall\n  getAll: function getAll(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = name + '';\n    var result = [];\n    var index = 0;\n    for (; index < entries.length; index++) {\n      if (entries[index].key === key) result.push(entries[index].value);\n    }\n    return result;\n  },\n  // `URLSearchParams.prototype.has` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-has\n  has: function has(name) {\n    validateArgumentsLength(arguments.length, 1);\n    var entries = getInternalParamsState(this).entries;\n    var key = name + '';\n    var index = 0;\n    while (index < entries.length) {\n      if (entries[index++].key === key) return true;\n    }\n    return false;\n  },\n  // `URLSearchParams.prototype.set` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-set\n  set: function set(name, value) {\n    validateArgumentsLength(arguments.length, 1);\n    var state = getInternalParamsState(this);\n    var entries = state.entries;\n    var found = false;\n    var key = name + '';\n    var val = value + '';\n    var index = 0;\n    var entry;\n    for (; index < entries.length; index++) {\n      entry = entries[index];\n      if (entry.key === key) {\n        if (found) entries.splice(index--, 1);\n        else {\n          found = true;\n          entry.value = val;\n        }\n      }\n    }\n    if (!found) entries.push({ key: key, value: val });\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.sort` method\n  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort\n  sort: function sort() {\n    var state = getInternalParamsState(this);\n    var entries = state.entries;\n    // Array#sort is not stable in some engines\n    var slice = entries.slice();\n    var entry, entriesIndex, sliceIndex;\n    entries.length = 0;\n    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {\n      entry = slice[sliceIndex];\n      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {\n        if (entries[entriesIndex].key > entry.key) {\n          entries.splice(entriesIndex, 0, entry);\n          break;\n        }\n      }\n      if (entriesIndex === sliceIndex) entries.push(entry);\n    }\n    state.updateURL();\n  },\n  // `URLSearchParams.prototype.forEach` method\n  forEach: function forEach(callback /* , thisArg */) {\n    var entries = getInternalParamsState(this).entries;\n    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);\n    var index = 0;\n    var entry;\n    while (index < entries.length) {\n      entry = entries[index++];\n      boundFunction(entry.value, entry.key, this);\n    }\n  },\n  // `URLSearchParams.prototype.keys` method\n  keys: function keys() {\n    return new URLSearchParamsIterator(this, 'keys');\n  },\n  // `URLSearchParams.prototype.values` method\n  values: function values() {\n    return new URLSearchParamsIterator(this, 'values');\n  },\n  // `URLSearchParams.prototype.entries` method\n  entries: function entries() {\n    return new URLSearchParamsIterator(this, 'entries');\n  }\n}, { enumerable: true });\n\n// `URLSearchParams.prototype[@@iterator]` method\nredefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);\n\n// `URLSearchParams.prototype.toString` method\n// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior\nredefine(URLSearchParamsPrototype, 'toString', function toString() {\n  var entries = getInternalParamsState(this).entries;\n  var result = [];\n  var index = 0;\n  var entry;\n  while (index < entries.length) {\n    entry = entries[index++];\n    result.push(serialize(entry.key) + '=' + serialize(entry.value));\n  } return result.join('&');\n}, { enumerable: true });\n\nsetToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);\n\n$({ global: true, forced: !USE_NATIVE_URL }, {\n  URLSearchParams: URLSearchParamsConstructor\n});\n\n// Wrap `fetch` for correct work with polyfilled `URLSearchParams`\n// https://github.com/zloirock/core-js/issues/674\nif (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {\n  $({ global: true, enumerable: true, forced: true }, {\n    fetch: function fetch(input /* , init */) {\n      var args = [input];\n      var init, body, headers;\n      if (arguments.length > 1) {\n        init = arguments[1];\n        if (isObject(init)) {\n          body = init.body;\n          if (classof(body) === URL_SEARCH_PARAMS) {\n            headers = init.headers ? new Headers(init.headers) : new Headers();\n            if (!headers.has('content-type')) {\n              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');\n            }\n            init = create(init, {\n              body: createPropertyDescriptor(0, String(body)),\n              headers: createPropertyDescriptor(0, headers)\n            });\n          }\n        }\n        args.push(init);\n      } return $fetch.apply(this, args);\n    }\n  });\n}\n\nmodule.exports = {\n  URLSearchParams: URLSearchParamsConstructor,\n  getState: getInternalParamsState\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/web.url-search-params.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/web.url.js":
/*!************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/web.url.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`\n__webpack_require__(/*! ../modules/es.string.iterator */ \"../../../node_modules/core-js-pure/modules/es.string.iterator.js\");\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js-pure/internals/descriptors.js\");\nvar USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ \"../../../node_modules/core-js-pure/internals/native-url.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js-pure/internals/global.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"../../../node_modules/core-js-pure/internals/object-define-properties.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js-pure/internals/redefine.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"../../../node_modules/core-js-pure/internals/an-instance.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js-pure/internals/has.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"../../../node_modules/core-js-pure/internals/object-assign.js\");\nvar arrayFrom = __webpack_require__(/*! ../internals/array-from */ \"../../../node_modules/core-js-pure/internals/array-from.js\");\nvar codeAt = __webpack_require__(/*! ../internals/string-multibyte */ \"../../../node_modules/core-js-pure/internals/string-multibyte.js\").codeAt;\nvar toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ \"../../../node_modules/core-js-pure/internals/string-punycode-to-ascii.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ \"../../../node_modules/core-js-pure/modules/web.url-search-params.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../node_modules/core-js-pure/internals/internal-state.js\");\n\nvar NativeURL = global.URL;\nvar URLSearchParams = URLSearchParamsModule.URLSearchParams;\nvar getInternalSearchParamsState = URLSearchParamsModule.getState;\nvar setInternalState = InternalStateModule.set;\nvar getInternalURLState = InternalStateModule.getterFor('URL');\nvar floor = Math.floor;\nvar pow = Math.pow;\n\nvar INVALID_AUTHORITY = 'Invalid authority';\nvar INVALID_SCHEME = 'Invalid scheme';\nvar INVALID_HOST = 'Invalid host';\nvar INVALID_PORT = 'Invalid port';\n\nvar ALPHA = /[A-Za-z]/;\n// eslint-disable-next-line regexp/no-obscure-range -- safe\nvar ALPHANUMERIC = /[\\d+-.A-Za-z]/;\nvar DIGIT = /\\d/;\nvar HEX_START = /^(0x|0X)/;\nvar OCT = /^[0-7]+$/;\nvar DEC = /^\\d+$/;\nvar HEX = /^[\\dA-Fa-f]+$/;\n/* eslint-disable no-control-regex -- safe */\nvar FORBIDDEN_HOST_CODE_POINT = /[\\0\\t\\n\\r #%/:?@[\\\\]]/;\nvar FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\\0\\t\\n\\r #/:?@[\\\\]]/;\nvar LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\\u0000-\\u001F ]+|[\\u0000-\\u001F ]+$/g;\nvar TAB_AND_NEW_LINE = /[\\t\\n\\r]/g;\n/* eslint-enable no-control-regex -- safe */\nvar EOF;\n\nvar parseHost = function (url, input) {\n  var result, codePoints, index;\n  if (input.charAt(0) == '[') {\n    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;\n    result = parseIPv6(input.slice(1, -1));\n    if (!result) return INVALID_HOST;\n    url.host = result;\n  // opaque host\n  } else if (!isSpecial(url)) {\n    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;\n    result = '';\n    codePoints = arrayFrom(input);\n    for (index = 0; index < codePoints.length; index++) {\n      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);\n    }\n    url.host = result;\n  } else {\n    input = toASCII(input);\n    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;\n    result = parseIPv4(input);\n    if (result === null) return INVALID_HOST;\n    url.host = result;\n  }\n};\n\nvar parseIPv4 = function (input) {\n  var parts = input.split('.');\n  var partsLength, numbers, index, part, radix, number, ipv4;\n  if (parts.length && parts[parts.length - 1] == '') {\n    parts.pop();\n  }\n  partsLength = parts.length;\n  if (partsLength > 4) return input;\n  numbers = [];\n  for (index = 0; index < partsLength; index++) {\n    part = parts[index];\n    if (part == '') return input;\n    radix = 10;\n    if (part.length > 1 && part.charAt(0) == '0') {\n      radix = HEX_START.test(part) ? 16 : 8;\n      part = part.slice(radix == 8 ? 1 : 2);\n    }\n    if (part === '') {\n      number = 0;\n    } else {\n      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;\n      number = parseInt(part, radix);\n    }\n    numbers.push(number);\n  }\n  for (index = 0; index < partsLength; index++) {\n    number = numbers[index];\n    if (index == partsLength - 1) {\n      if (number >= pow(256, 5 - partsLength)) return null;\n    } else if (number > 255) return null;\n  }\n  ipv4 = numbers.pop();\n  for (index = 0; index < numbers.length; index++) {\n    ipv4 += numbers[index] * pow(256, 3 - index);\n  }\n  return ipv4;\n};\n\n// eslint-disable-next-line max-statements -- TODO\nvar parseIPv6 = function (input) {\n  var address = [0, 0, 0, 0, 0, 0, 0, 0];\n  var pieceIndex = 0;\n  var compress = null;\n  var pointer = 0;\n  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;\n\n  var char = function () {\n    return input.charAt(pointer);\n  };\n\n  if (char() == ':') {\n    if (input.charAt(1) != ':') return;\n    pointer += 2;\n    pieceIndex++;\n    compress = pieceIndex;\n  }\n  while (char()) {\n    if (pieceIndex == 8) return;\n    if (char() == ':') {\n      if (compress !== null) return;\n      pointer++;\n      pieceIndex++;\n      compress = pieceIndex;\n      continue;\n    }\n    value = length = 0;\n    while (length < 4 && HEX.test(char())) {\n      value = value * 16 + parseInt(char(), 16);\n      pointer++;\n      length++;\n    }\n    if (char() == '.') {\n      if (length == 0) return;\n      pointer -= length;\n      if (pieceIndex > 6) return;\n      numbersSeen = 0;\n      while (char()) {\n        ipv4Piece = null;\n        if (numbersSeen > 0) {\n          if (char() == '.' && numbersSeen < 4) pointer++;\n          else return;\n        }\n        if (!DIGIT.test(char())) return;\n        while (DIGIT.test(char())) {\n          number = parseInt(char(), 10);\n          if (ipv4Piece === null) ipv4Piece = number;\n          else if (ipv4Piece == 0) return;\n          else ipv4Piece = ipv4Piece * 10 + number;\n          if (ipv4Piece > 255) return;\n          pointer++;\n        }\n        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;\n        numbersSeen++;\n        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;\n      }\n      if (numbersSeen != 4) return;\n      break;\n    } else if (char() == ':') {\n      pointer++;\n      if (!char()) return;\n    } else if (char()) return;\n    address[pieceIndex++] = value;\n  }\n  if (compress !== null) {\n    swaps = pieceIndex - compress;\n    pieceIndex = 7;\n    while (pieceIndex != 0 && swaps > 0) {\n      swap = address[pieceIndex];\n      address[pieceIndex--] = address[compress + swaps - 1];\n      address[compress + --swaps] = swap;\n    }\n  } else if (pieceIndex != 8) return;\n  return address;\n};\n\nvar findLongestZeroSequence = function (ipv6) {\n  var maxIndex = null;\n  var maxLength = 1;\n  var currStart = null;\n  var currLength = 0;\n  var index = 0;\n  for (; index < 8; index++) {\n    if (ipv6[index] !== 0) {\n      if (currLength > maxLength) {\n        maxIndex = currStart;\n        maxLength = currLength;\n      }\n      currStart = null;\n      currLength = 0;\n    } else {\n      if (currStart === null) currStart = index;\n      ++currLength;\n    }\n  }\n  if (currLength > maxLength) {\n    maxIndex = currStart;\n    maxLength = currLength;\n  }\n  return maxIndex;\n};\n\nvar serializeHost = function (host) {\n  var result, index, compress, ignore0;\n  // ipv4\n  if (typeof host == 'number') {\n    result = [];\n    for (index = 0; index < 4; index++) {\n      result.unshift(host % 256);\n      host = floor(host / 256);\n    } return result.join('.');\n  // ipv6\n  } else if (typeof host == 'object') {\n    result = '';\n    compress = findLongestZeroSequence(host);\n    for (index = 0; index < 8; index++) {\n      if (ignore0 && host[index] === 0) continue;\n      if (ignore0) ignore0 = false;\n      if (compress === index) {\n        result += index ? ':' : '::';\n        ignore0 = true;\n      } else {\n        result += host[index].toString(16);\n        if (index < 7) result += ':';\n      }\n    }\n    return '[' + result + ']';\n  } return host;\n};\n\nvar C0ControlPercentEncodeSet = {};\nvar fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {\n  ' ': 1, '\"': 1, '<': 1, '>': 1, '`': 1\n});\nvar pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {\n  '#': 1, '?': 1, '{': 1, '}': 1\n});\nvar userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {\n  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\\\': 1, ']': 1, '^': 1, '|': 1\n});\n\nvar percentEncode = function (char, set) {\n  var code = codeAt(char, 0);\n  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);\n};\n\nvar specialSchemes = {\n  ftp: 21,\n  file: null,\n  http: 80,\n  https: 443,\n  ws: 80,\n  wss: 443\n};\n\nvar isSpecial = function (url) {\n  return has(specialSchemes, url.scheme);\n};\n\nvar includesCredentials = function (url) {\n  return url.username != '' || url.password != '';\n};\n\nvar cannotHaveUsernamePasswordPort = function (url) {\n  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';\n};\n\nvar isWindowsDriveLetter = function (string, normalized) {\n  var second;\n  return string.length == 2 && ALPHA.test(string.charAt(0))\n    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));\n};\n\nvar startsWithWindowsDriveLetter = function (string) {\n  var third;\n  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (\n    string.length == 2 ||\n    ((third = string.charAt(2)) === '/' || third === '\\\\' || third === '?' || third === '#')\n  );\n};\n\nvar shortenURLsPath = function (url) {\n  var path = url.path;\n  var pathSize = path.length;\n  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {\n    path.pop();\n  }\n};\n\nvar isSingleDot = function (segment) {\n  return segment === '.' || segment.toLowerCase() === '%2e';\n};\n\nvar isDoubleDot = function (segment) {\n  segment = segment.toLowerCase();\n  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';\n};\n\n// States:\nvar SCHEME_START = {};\nvar SCHEME = {};\nvar NO_SCHEME = {};\nvar SPECIAL_RELATIVE_OR_AUTHORITY = {};\nvar PATH_OR_AUTHORITY = {};\nvar RELATIVE = {};\nvar RELATIVE_SLASH = {};\nvar SPECIAL_AUTHORITY_SLASHES = {};\nvar SPECIAL_AUTHORITY_IGNORE_SLASHES = {};\nvar AUTHORITY = {};\nvar HOST = {};\nvar HOSTNAME = {};\nvar PORT = {};\nvar FILE = {};\nvar FILE_SLASH = {};\nvar FILE_HOST = {};\nvar PATH_START = {};\nvar PATH = {};\nvar CANNOT_BE_A_BASE_URL_PATH = {};\nvar QUERY = {};\nvar FRAGMENT = {};\n\n// eslint-disable-next-line max-statements -- TODO\nvar parseURL = function (url, input, stateOverride, base) {\n  var state = stateOverride || SCHEME_START;\n  var pointer = 0;\n  var buffer = '';\n  var seenAt = false;\n  var seenBracket = false;\n  var seenPasswordToken = false;\n  var codePoints, char, bufferCodePoints, failure;\n\n  if (!stateOverride) {\n    url.scheme = '';\n    url.username = '';\n    url.password = '';\n    url.host = null;\n    url.port = null;\n    url.path = [];\n    url.query = null;\n    url.fragment = null;\n    url.cannotBeABaseURL = false;\n    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');\n  }\n\n  input = input.replace(TAB_AND_NEW_LINE, '');\n\n  codePoints = arrayFrom(input);\n\n  while (pointer <= codePoints.length) {\n    char = codePoints[pointer];\n    switch (state) {\n      case SCHEME_START:\n        if (char && ALPHA.test(char)) {\n          buffer += char.toLowerCase();\n          state = SCHEME;\n        } else if (!stateOverride) {\n          state = NO_SCHEME;\n          continue;\n        } else return INVALID_SCHEME;\n        break;\n\n      case SCHEME:\n        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {\n          buffer += char.toLowerCase();\n        } else if (char == ':') {\n          if (stateOverride && (\n            (isSpecial(url) != has(specialSchemes, buffer)) ||\n            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||\n            (url.scheme == 'file' && !url.host)\n          )) return;\n          url.scheme = buffer;\n          if (stateOverride) {\n            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;\n            return;\n          }\n          buffer = '';\n          if (url.scheme == 'file') {\n            state = FILE;\n          } else if (isSpecial(url) && base && base.scheme == url.scheme) {\n            state = SPECIAL_RELATIVE_OR_AUTHORITY;\n          } else if (isSpecial(url)) {\n            state = SPECIAL_AUTHORITY_SLASHES;\n          } else if (codePoints[pointer + 1] == '/') {\n            state = PATH_OR_AUTHORITY;\n            pointer++;\n          } else {\n            url.cannotBeABaseURL = true;\n            url.path.push('');\n            state = CANNOT_BE_A_BASE_URL_PATH;\n          }\n        } else if (!stateOverride) {\n          buffer = '';\n          state = NO_SCHEME;\n          pointer = 0;\n          continue;\n        } else return INVALID_SCHEME;\n        break;\n\n      case NO_SCHEME:\n        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;\n        if (base.cannotBeABaseURL && char == '#') {\n          url.scheme = base.scheme;\n          url.path = base.path.slice();\n          url.query = base.query;\n          url.fragment = '';\n          url.cannotBeABaseURL = true;\n          state = FRAGMENT;\n          break;\n        }\n        state = base.scheme == 'file' ? FILE : RELATIVE;\n        continue;\n\n      case SPECIAL_RELATIVE_OR_AUTHORITY:\n        if (char == '/' && codePoints[pointer + 1] == '/') {\n          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n          pointer++;\n        } else {\n          state = RELATIVE;\n          continue;\n        } break;\n\n      case PATH_OR_AUTHORITY:\n        if (char == '/') {\n          state = AUTHORITY;\n          break;\n        } else {\n          state = PATH;\n          continue;\n        }\n\n      case RELATIVE:\n        url.scheme = base.scheme;\n        if (char == EOF) {\n          url.username = base.username;\n          url.password = base.password;\n          url.host = base.host;\n          url.port = base.port;\n          url.path = base.path.slice();\n          url.query = base.query;\n        } else if (char == '/' || (char == '\\\\' && isSpecial(url))) {\n          state = RELATIVE_SLASH;\n        } else if (char == '?') {\n          url.username = base.username;\n          url.password = base.password;\n          url.host = base.host;\n          url.port = base.port;\n          url.path = base.path.slice();\n          url.query = '';\n          state = QUERY;\n        } else if (char == '#') {\n          url.username = base.username;\n          url.password = base.password;\n          url.host = base.host;\n          url.port = base.port;\n          url.path = base.path.slice();\n          url.query = base.query;\n          url.fragment = '';\n          state = FRAGMENT;\n        } else {\n          url.username = base.username;\n          url.password = base.password;\n          url.host = base.host;\n          url.port = base.port;\n          url.path = base.path.slice();\n          url.path.pop();\n          state = PATH;\n          continue;\n        } break;\n\n      case RELATIVE_SLASH:\n        if (isSpecial(url) && (char == '/' || char == '\\\\')) {\n          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n        } else if (char == '/') {\n          state = AUTHORITY;\n        } else {\n          url.username = base.username;\n          url.password = base.password;\n          url.host = base.host;\n          url.port = base.port;\n          state = PATH;\n          continue;\n        } break;\n\n      case SPECIAL_AUTHORITY_SLASHES:\n        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;\n        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;\n        pointer++;\n        break;\n\n      case SPECIAL_AUTHORITY_IGNORE_SLASHES:\n        if (char != '/' && char != '\\\\') {\n          state = AUTHORITY;\n          continue;\n        } break;\n\n      case AUTHORITY:\n        if (char == '@') {\n          if (seenAt) buffer = '%40' + buffer;\n          seenAt = true;\n          bufferCodePoints = arrayFrom(buffer);\n          for (var i = 0; i < bufferCodePoints.length; i++) {\n            var codePoint = bufferCodePoints[i];\n            if (codePoint == ':' && !seenPasswordToken) {\n              seenPasswordToken = true;\n              continue;\n            }\n            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);\n            if (seenPasswordToken) url.password += encodedCodePoints;\n            else url.username += encodedCodePoints;\n          }\n          buffer = '';\n        } else if (\n          char == EOF || char == '/' || char == '?' || char == '#' ||\n          (char == '\\\\' && isSpecial(url))\n        ) {\n          if (seenAt && buffer == '') return INVALID_AUTHORITY;\n          pointer -= arrayFrom(buffer).length + 1;\n          buffer = '';\n          state = HOST;\n        } else buffer += char;\n        break;\n\n      case HOST:\n      case HOSTNAME:\n        if (stateOverride && url.scheme == 'file') {\n          state = FILE_HOST;\n          continue;\n        } else if (char == ':' && !seenBracket) {\n          if (buffer == '') return INVALID_HOST;\n          failure = parseHost(url, buffer);\n          if (failure) return failure;\n          buffer = '';\n          state = PORT;\n          if (stateOverride == HOSTNAME) return;\n        } else if (\n          char == EOF || char == '/' || char == '?' || char == '#' ||\n          (char == '\\\\' && isSpecial(url))\n        ) {\n          if (isSpecial(url) && buffer == '') return INVALID_HOST;\n          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;\n          failure = parseHost(url, buffer);\n          if (failure) return failure;\n          buffer = '';\n          state = PATH_START;\n          if (stateOverride) return;\n          continue;\n        } else {\n          if (char == '[') seenBracket = true;\n          else if (char == ']') seenBracket = false;\n          buffer += char;\n        } break;\n\n      case PORT:\n        if (DIGIT.test(char)) {\n          buffer += char;\n        } else if (\n          char == EOF || char == '/' || char == '?' || char == '#' ||\n          (char == '\\\\' && isSpecial(url)) ||\n          stateOverride\n        ) {\n          if (buffer != '') {\n            var port = parseInt(buffer, 10);\n            if (port > 0xFFFF) return INVALID_PORT;\n            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;\n            buffer = '';\n          }\n          if (stateOverride) return;\n          state = PATH_START;\n          continue;\n        } else return INVALID_PORT;\n        break;\n\n      case FILE:\n        url.scheme = 'file';\n        if (char == '/' || char == '\\\\') state = FILE_SLASH;\n        else if (base && base.scheme == 'file') {\n          if (char == EOF) {\n            url.host = base.host;\n            url.path = base.path.slice();\n            url.query = base.query;\n          } else if (char == '?') {\n            url.host = base.host;\n            url.path = base.path.slice();\n            url.query = '';\n            state = QUERY;\n          } else if (char == '#') {\n            url.host = base.host;\n            url.path = base.path.slice();\n            url.query = base.query;\n            url.fragment = '';\n            state = FRAGMENT;\n          } else {\n            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {\n              url.host = base.host;\n              url.path = base.path.slice();\n              shortenURLsPath(url);\n            }\n            state = PATH;\n            continue;\n          }\n        } else {\n          state = PATH;\n          continue;\n        } break;\n\n      case FILE_SLASH:\n        if (char == '/' || char == '\\\\') {\n          state = FILE_HOST;\n          break;\n        }\n        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {\n          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);\n          else url.host = base.host;\n        }\n        state = PATH;\n        continue;\n\n      case FILE_HOST:\n        if (char == EOF || char == '/' || char == '\\\\' || char == '?' || char == '#') {\n          if (!stateOverride && isWindowsDriveLetter(buffer)) {\n            state = PATH;\n          } else if (buffer == '') {\n            url.host = '';\n            if (stateOverride) return;\n            state = PATH_START;\n          } else {\n            failure = parseHost(url, buffer);\n            if (failure) return failure;\n            if (url.host == 'localhost') url.host = '';\n            if (stateOverride) return;\n            buffer = '';\n            state = PATH_START;\n          } continue;\n        } else buffer += char;\n        break;\n\n      case PATH_START:\n        if (isSpecial(url)) {\n          state = PATH;\n          if (char != '/' && char != '\\\\') continue;\n        } else if (!stateOverride && char == '?') {\n          url.query = '';\n          state = QUERY;\n        } else if (!stateOverride && char == '#') {\n          url.fragment = '';\n          state = FRAGMENT;\n        } else if (char != EOF) {\n          state = PATH;\n          if (char != '/') continue;\n        } break;\n\n      case PATH:\n        if (\n          char == EOF || char == '/' ||\n          (char == '\\\\' && isSpecial(url)) ||\n          (!stateOverride && (char == '?' || char == '#'))\n        ) {\n          if (isDoubleDot(buffer)) {\n            shortenURLsPath(url);\n            if (char != '/' && !(char == '\\\\' && isSpecial(url))) {\n              url.path.push('');\n            }\n          } else if (isSingleDot(buffer)) {\n            if (char != '/' && !(char == '\\\\' && isSpecial(url))) {\n              url.path.push('');\n            }\n          } else {\n            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {\n              if (url.host) url.host = '';\n              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter\n            }\n            url.path.push(buffer);\n          }\n          buffer = '';\n          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {\n            while (url.path.length > 1 && url.path[0] === '') {\n              url.path.shift();\n            }\n          }\n          if (char == '?') {\n            url.query = '';\n            state = QUERY;\n          } else if (char == '#') {\n            url.fragment = '';\n            state = FRAGMENT;\n          }\n        } else {\n          buffer += percentEncode(char, pathPercentEncodeSet);\n        } break;\n\n      case CANNOT_BE_A_BASE_URL_PATH:\n        if (char == '?') {\n          url.query = '';\n          state = QUERY;\n        } else if (char == '#') {\n          url.fragment = '';\n          state = FRAGMENT;\n        } else if (char != EOF) {\n          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);\n        } break;\n\n      case QUERY:\n        if (!stateOverride && char == '#') {\n          url.fragment = '';\n          state = FRAGMENT;\n        } else if (char != EOF) {\n          if (char == \"'\" && isSpecial(url)) url.query += '%27';\n          else if (char == '#') url.query += '%23';\n          else url.query += percentEncode(char, C0ControlPercentEncodeSet);\n        } break;\n\n      case FRAGMENT:\n        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);\n        break;\n    }\n\n    pointer++;\n  }\n};\n\n// `URL` constructor\n// https://url.spec.whatwg.org/#url-class\nvar URLConstructor = function URL(url /* , base */) {\n  var that = anInstance(this, URLConstructor, 'URL');\n  var base = arguments.length > 1 ? arguments[1] : undefined;\n  var urlString = String(url);\n  var state = setInternalState(that, { type: 'URL' });\n  var baseState, failure;\n  if (base !== undefined) {\n    if (base instanceof URLConstructor) baseState = getInternalURLState(base);\n    else {\n      failure = parseURL(baseState = {}, String(base));\n      if (failure) throw TypeError(failure);\n    }\n  }\n  failure = parseURL(state, urlString, null, baseState);\n  if (failure) throw TypeError(failure);\n  var searchParams = state.searchParams = new URLSearchParams();\n  var searchParamsState = getInternalSearchParamsState(searchParams);\n  searchParamsState.updateSearchParams(state.query);\n  searchParamsState.updateURL = function () {\n    state.query = String(searchParams) || null;\n  };\n  if (!DESCRIPTORS) {\n    that.href = serializeURL.call(that);\n    that.origin = getOrigin.call(that);\n    that.protocol = getProtocol.call(that);\n    that.username = getUsername.call(that);\n    that.password = getPassword.call(that);\n    that.host = getHost.call(that);\n    that.hostname = getHostname.call(that);\n    that.port = getPort.call(that);\n    that.pathname = getPathname.call(that);\n    that.search = getSearch.call(that);\n    that.searchParams = getSearchParams.call(that);\n    that.hash = getHash.call(that);\n  }\n};\n\nvar URLPrototype = URLConstructor.prototype;\n\nvar serializeURL = function () {\n  var url = getInternalURLState(this);\n  var scheme = url.scheme;\n  var username = url.username;\n  var password = url.password;\n  var host = url.host;\n  var port = url.port;\n  var path = url.path;\n  var query = url.query;\n  var fragment = url.fragment;\n  var output = scheme + ':';\n  if (host !== null) {\n    output += '//';\n    if (includesCredentials(url)) {\n      output += username + (password ? ':' + password : '') + '@';\n    }\n    output += serializeHost(host);\n    if (port !== null) output += ':' + port;\n  } else if (scheme == 'file') output += '//';\n  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';\n  if (query !== null) output += '?' + query;\n  if (fragment !== null) output += '#' + fragment;\n  return output;\n};\n\nvar getOrigin = function () {\n  var url = getInternalURLState(this);\n  var scheme = url.scheme;\n  var port = url.port;\n  if (scheme == 'blob') try {\n    return new URLConstructor(scheme.path[0]).origin;\n  } catch (error) {\n    return 'null';\n  }\n  if (scheme == 'file' || !isSpecial(url)) return 'null';\n  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');\n};\n\nvar getProtocol = function () {\n  return getInternalURLState(this).scheme + ':';\n};\n\nvar getUsername = function () {\n  return getInternalURLState(this).username;\n};\n\nvar getPassword = function () {\n  return getInternalURLState(this).password;\n};\n\nvar getHost = function () {\n  var url = getInternalURLState(this);\n  var host = url.host;\n  var port = url.port;\n  return host === null ? ''\n    : port === null ? serializeHost(host)\n    : serializeHost(host) + ':' + port;\n};\n\nvar getHostname = function () {\n  var host = getInternalURLState(this).host;\n  return host === null ? '' : serializeHost(host);\n};\n\nvar getPort = function () {\n  var port = getInternalURLState(this).port;\n  return port === null ? '' : String(port);\n};\n\nvar getPathname = function () {\n  var url = getInternalURLState(this);\n  var path = url.path;\n  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';\n};\n\nvar getSearch = function () {\n  var query = getInternalURLState(this).query;\n  return query ? '?' + query : '';\n};\n\nvar getSearchParams = function () {\n  return getInternalURLState(this).searchParams;\n};\n\nvar getHash = function () {\n  var fragment = getInternalURLState(this).fragment;\n  return fragment ? '#' + fragment : '';\n};\n\nvar accessorDescriptor = function (getter, setter) {\n  return { get: getter, set: setter, configurable: true, enumerable: true };\n};\n\nif (DESCRIPTORS) {\n  defineProperties(URLPrototype, {\n    // `URL.prototype.href` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-href\n    href: accessorDescriptor(serializeURL, function (href) {\n      var url = getInternalURLState(this);\n      var urlString = String(href);\n      var failure = parseURL(url, urlString);\n      if (failure) throw TypeError(failure);\n      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);\n    }),\n    // `URL.prototype.origin` getter\n    // https://url.spec.whatwg.org/#dom-url-origin\n    origin: accessorDescriptor(getOrigin),\n    // `URL.prototype.protocol` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-protocol\n    protocol: accessorDescriptor(getProtocol, function (protocol) {\n      var url = getInternalURLState(this);\n      parseURL(url, String(protocol) + ':', SCHEME_START);\n    }),\n    // `URL.prototype.username` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-username\n    username: accessorDescriptor(getUsername, function (username) {\n      var url = getInternalURLState(this);\n      var codePoints = arrayFrom(String(username));\n      if (cannotHaveUsernamePasswordPort(url)) return;\n      url.username = '';\n      for (var i = 0; i < codePoints.length; i++) {\n        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n      }\n    }),\n    // `URL.prototype.password` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-password\n    password: accessorDescriptor(getPassword, function (password) {\n      var url = getInternalURLState(this);\n      var codePoints = arrayFrom(String(password));\n      if (cannotHaveUsernamePasswordPort(url)) return;\n      url.password = '';\n      for (var i = 0; i < codePoints.length; i++) {\n        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);\n      }\n    }),\n    // `URL.prototype.host` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-host\n    host: accessorDescriptor(getHost, function (host) {\n      var url = getInternalURLState(this);\n      if (url.cannotBeABaseURL) return;\n      parseURL(url, String(host), HOST);\n    }),\n    // `URL.prototype.hostname` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-hostname\n    hostname: accessorDescriptor(getHostname, function (hostname) {\n      var url = getInternalURLState(this);\n      if (url.cannotBeABaseURL) return;\n      parseURL(url, String(hostname), HOSTNAME);\n    }),\n    // `URL.prototype.port` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-port\n    port: accessorDescriptor(getPort, function (port) {\n      var url = getInternalURLState(this);\n      if (cannotHaveUsernamePasswordPort(url)) return;\n      port = String(port);\n      if (port == '') url.port = null;\n      else parseURL(url, port, PORT);\n    }),\n    // `URL.prototype.pathname` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-pathname\n    pathname: accessorDescriptor(getPathname, function (pathname) {\n      var url = getInternalURLState(this);\n      if (url.cannotBeABaseURL) return;\n      url.path = [];\n      parseURL(url, pathname + '', PATH_START);\n    }),\n    // `URL.prototype.search` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-search\n    search: accessorDescriptor(getSearch, function (search) {\n      var url = getInternalURLState(this);\n      search = String(search);\n      if (search == '') {\n        url.query = null;\n      } else {\n        if ('?' == search.charAt(0)) search = search.slice(1);\n        url.query = '';\n        parseURL(url, search, QUERY);\n      }\n      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);\n    }),\n    // `URL.prototype.searchParams` getter\n    // https://url.spec.whatwg.org/#dom-url-searchparams\n    searchParams: accessorDescriptor(getSearchParams),\n    // `URL.prototype.hash` accessors pair\n    // https://url.spec.whatwg.org/#dom-url-hash\n    hash: accessorDescriptor(getHash, function (hash) {\n      var url = getInternalURLState(this);\n      hash = String(hash);\n      if (hash == '') {\n        url.fragment = null;\n        return;\n      }\n      if ('#' == hash.charAt(0)) hash = hash.slice(1);\n      url.fragment = '';\n      parseURL(url, hash, FRAGMENT);\n    })\n  });\n}\n\n// `URL.prototype.toJSON` method\n// https://url.spec.whatwg.org/#dom-url-tojson\nredefine(URLPrototype, 'toJSON', function toJSON() {\n  return serializeURL.call(this);\n}, { enumerable: true });\n\n// `URL.prototype.toString` method\n// https://url.spec.whatwg.org/#URL-stringification-behavior\nredefine(URLPrototype, 'toString', function toString() {\n  return serializeURL.call(this);\n}, { enumerable: true });\n\nif (NativeURL) {\n  var nativeCreateObjectURL = NativeURL.createObjectURL;\n  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;\n  // `URL.createObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {\n    return nativeCreateObjectURL.apply(NativeURL, arguments);\n  });\n  // `URL.revokeObjectURL` method\n  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {\n    return nativeRevokeObjectURL.apply(NativeURL, arguments);\n  });\n}\n\nsetToStringTag(URLConstructor, 'URL');\n\n$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {\n  URL: URLConstructor\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/web.url.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/modules/web.url.to-json.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/web.url.to-json.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/modules/web.url.to-json.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/stable/array/from.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/array/from.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/from */ \"../../../node_modules/core-js-pure/es/array/from.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/array/from.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/stable/instance/concat.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/concat.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/concat */ \"../../../node_modules/core-js-pure/es/instance/concat.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/concat.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/stable/instance/filter.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/filter.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/filter */ \"../../../node_modules/core-js-pure/es/instance/filter.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/filter.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/stable/instance/sort.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/sort.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/sort */ \"../../../node_modules/core-js-pure/es/instance/sort.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/sort.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/stable/instance/splice.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/splice.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/splice */ \"../../../node_modules/core-js-pure/es/instance/splice.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/instance/splice.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/stable/url/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/url/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../web/url */ \"../../../node_modules/core-js-pure/web/url.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/stable/url/index.js?");

/***/ }),

/***/ "../../../node_modules/core-js-pure/web/url.js":
/*!****************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/web/url.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.url */ \"../../../node_modules/core-js-pure/modules/web.url.js\");\n__webpack_require__(/*! ../modules/web.url.to-json */ \"../../../node_modules/core-js-pure/modules/web.url.to-json.js\");\n__webpack_require__(/*! ../modules/web.url-search-params */ \"../../../node_modules/core-js-pure/modules/web.url-search-params.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"../../../node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.URL;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js-pure/web/url.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/a-function.js":
/*!************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/a-function.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/a-possible-prototype.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/advance-string-index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/advance-string-index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"../../../node_modules/core-js/internals/string-multibyte.js\").charAt;\n\n// `AdvanceStringIndex` abstract operation\n// https://tc39.es/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/an-instance.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/an-instance.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name) {\n  if (!(it instanceof Constructor)) {\n    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/an-instance.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/an-object.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/an-object.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/array-for-each.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-for-each.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"../../../node_modules/core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"../../../node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n} : [].forEach;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/array-includes.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-includes.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../../node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/array-iteration.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-iteration.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../../node_modules/core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../../node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_OUT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push.call(target, value); // filterOut\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterOut` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterOut: createMethod(7)\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/array-method-is-strict.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-method-is-strict.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/array-species-create.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-species-create.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../../node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!********************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/classof-raw.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/classof-raw.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/classof.js":
/*!*********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/classof.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"../../../node_modules/core-js/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"../../../node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!********************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/create-property-descriptor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/descriptors.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/descriptors.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/document-create-element.js":
/*!*************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/document-create-element.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/dom-iterables.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/dom-iterables.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-browser.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-browser.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = typeof window == 'object';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-browser.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-ios.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-ios.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../../node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-ios.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-node.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-node.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js/internals/classof-raw.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\n\nmodule.exports = classof(global.process) == 'process';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-node.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../../node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /web0s(?!.*chrome)/i.test(userAgent);\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-is-webos-webkit.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-user-agent.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-user-agent.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-v8-version.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-v8-version.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../../node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] < 4 ? 1 : match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/enum-bug-keys.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/export.js":
/*!********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/export.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"../../../node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../../../node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/fails.js":
/*!*******************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/fails.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: Remove from `core-js@4` since it's moved to entry points\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"../../../node_modules/core-js/modules/es.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js/internals/redefine.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"../../../node_modules/core-js/internals/regexp-exec.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar RegExpPrototype = RegExp.prototype;\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\n// IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\nvar REPLACE_KEEPS_$0 = (function () {\n  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing\n  return 'a'.replace(/./, '$0') === '$0';\n})();\n\nvar REPLACE = wellKnownSymbol('replace');\n// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string\nvar REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {\n  if (/./[REPLACE]) {\n    return /./[REPLACE]('a', '$0') === '';\n  }\n  return false;\n})();\n\n// Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  // eslint-disable-next-line regexp/no-empty-group -- required for testing\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\nmodule.exports = function (KEY, length, exec, sham) {\n  var SYMBOL = wellKnownSymbol(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {};\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () { execCalled = true; return null; };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !(\n      REPLACE_SUPPORTS_NAMED_GROUPS &&\n      REPLACE_KEEPS_$0 &&\n      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE\n    )) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      var $exec = regexp.exec;\n      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n        }\n        return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n      }\n      return { done: false };\n    }, {\n      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,\n      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE\n    });\n    var stringMethod = methods[0];\n    var regexMethod = methods[1];\n\n    redefine(String.prototype, KEY, stringMethod);\n    redefine(RegExpPrototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return regexMethod.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return regexMethod.call(string, this); }\n    );\n  }\n\n  if (sham) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/function-bind-context.js":
/*!***********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/function-bind-context.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/get-built-in.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/get-built-in.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../../node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/get-iterator-method.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/get-iterator-method.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"../../../node_modules/core-js/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../node_modules/core-js/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/get-substitution.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/get-substitution.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js/internals/to-object.js\");\n\nvar floor = Math.floor;\nvar replace = ''.replace;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&'`]|\\d{1,2}|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&'`]|\\d{1,2})/g;\n\n// `GetSubstitution` abstract operation\n// https://tc39.es/ecma262/#sec-getsubstitution\nmodule.exports = function (matched, str, position, captures, namedCaptures, replacement) {\n  var tailPos = position + matched.length;\n  var m = captures.length;\n  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n  if (namedCaptures !== undefined) {\n    namedCaptures = toObject(namedCaptures);\n    symbols = SUBSTITUTION_SYMBOLS;\n  }\n  return replace.call(replacement, symbols, function (match, ch) {\n    var capture;\n    switch (ch.charAt(0)) {\n      case '$': return '$';\n      case '&': return matched;\n      case '`': return str.slice(0, position);\n      case \"'\": return str.slice(tailPos);\n      case '<':\n        capture = namedCaptures[ch.slice(1, -1)];\n        break;\n      default: // \\d\\d?\n        var n = +ch;\n        if (n === 0) return match;\n        if (n > m) {\n          var f = floor(n / 10);\n          if (f === 0) return match;\n          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n          return match;\n        }\n        capture = captures[n - 1];\n    }\n    return capture === undefined ? '' : capture;\n  });\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/get-substitution.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/global.js":
/*!********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/global.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"../../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/has.js":
/*!*****************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/has.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toObject = __webpack_require__(/*! ../internals/to-object */ \"../../../node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty.call(toObject(it), key);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/hidden-keys.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/hidden-keys.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/host-report-errors.js":
/*!********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/host-report-errors.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\n\nmodule.exports = function (a, b) {\n  var console = global.console;\n  if (console && console.error) {\n    arguments.length === 1 ? console.error(a) : console.error(a, b);\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/host-report-errors.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/html.js":
/*!******************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/html.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/ie8-dom-define.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/indexed-object.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/indexed-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/inspect-source.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/inspect-source.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"../../../node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-state.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/internal-state.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"../../../node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js/internals/has.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"../../../node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../../node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../node_modules/core-js/internals/hidden-keys.js\");\n\nvar OBJECT_ALREADY_INITIALIZED = 'Object already initialized';\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP || shared.state) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/is-array-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"../../../node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/is-array.js":
/*!**********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-array.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/is-forced.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-forced.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/is-object.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-object.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/is-pure.js":
/*!*********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-pure.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/is-regexp.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-regexp.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../../node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.es/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/iterate.js":
/*!*********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/iterate.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"../../../node_modules/core-js/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js/internals/to-length.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../../node_modules/core-js/internals/function-bind-context.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"../../../node_modules/core-js/internals/get-iterator-method.js\");\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"../../../node_modules/core-js/internals/iterator-close.js\");\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    } return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = toLength(iterable.length); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && result instanceof Result) return result;\n      } return new Result(false);\n    }\n    iterator = iterFn.call(iterable);\n  }\n\n  next = iterator.next;\n  while (!(step = next.call(iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator);\n      throw error;\n    }\n    if (typeof result == 'object' && result && result instanceof Result) return result;\n  } return new Result(false);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/iterator-close.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/iterator-close.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\n\nmodule.exports = function (iterator) {\n  var returnMethod = iterator['return'];\n  if (returnMethod !== undefined) {\n    return anObject(returnMethod.call(iterator)).value;\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/iterators.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/microtask.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/microtask.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../../node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar macrotask = __webpack_require__(/*! ../internals/task */ \"../../../node_modules/core-js/internals/task.js\").set;\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"../../../node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ \"../../../node_modules/core-js/internals/engine-is-webos-webkit.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"../../../node_modules/core-js/internals/engine-is-node.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar document = global.document;\nvar process = global.process;\nvar Promise = global.Promise;\n// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\n\nvar flush, head, last, notify, toggle, node, promise, then;\n\n// modern engines have queueMicrotask method\nif (!queueMicrotask) {\n  flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (error) {\n        if (head) notify();\n        else last = undefined;\n        throw error;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898\n  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, { characterData: true });\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    // workaround of WebKit ~ iOS Safari 10.1 bug\n    promise.constructor = Promise;\n    then = promise.then;\n    notify = function () {\n      then.call(promise, flush);\n    };\n  // Node.js without promises\n  } else if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n}\n\nmodule.exports = queueMicrotask || function (fn) {\n  var task = { fn: fn, next: undefined };\n  if (last) last.next = task;\n  if (!head) {\n    head = task;\n    notify();\n  } last = task;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/microtask.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/native-promise-constructor.js":
/*!****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/native-promise-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/native-promise-constructor.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/native-symbol.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/native-symbol.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../../node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/native-weak-map.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/native-weak-map.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../../node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/new-promise-capability.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/new-promise-capability.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../node_modules/core-js/internals/a-function.js\");\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n};\n\n// `NewPromiseCapability` abstract operation\n// https://tc39.es/ecma262/#sec-newpromisecapability\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/new-promise-capability.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-property.js":
/*!************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-define-property.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../node_modules/core-js/internals/to-primitive.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!************************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../../node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../../node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../../node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../../node_modules/core-js/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../../node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../../node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n// eslint-disable-next-line es/no-object-getownpropertynames -- safe\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe\nexports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys-internal.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-keys-internal.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../../../node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../../node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!*************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-proto -- safe */\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"../../../node_modules/core-js/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n// eslint-disable-next-line es/no-object-setprototypeof -- safe\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/object-to-string.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-to-string.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"../../../node_modules/core-js/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"../../../node_modules/core-js/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/object-to-string.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/own-keys.js":
/*!**********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/own-keys.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../../node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../../../node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/path.js":
/*!******************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/path.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/perform.js":
/*!*********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/perform.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { error: false, value: exec() };\n  } catch (error) {\n    return { error: true, value: error };\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/perform.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/promise-resolve.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/promise-resolve.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"../../../node_modules/core-js/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/promise-resolve.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine-all.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/redefine-all.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) redefine(target, key, src[key], options);\n  return target;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/redefine-all.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine.js":
/*!**********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/redefine.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../../node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var state;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) {\n      createNonEnumerableProperty(value, 'name', key);\n    }\n    state = enforceInternalState(value);\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');\n    }\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/regexp-exec-abstract.js":
/*!**********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./classof-raw */ \"../../../node_modules/core-js/internals/classof-raw.js\");\nvar regexpExec = __webpack_require__(/*! ./regexp-exec */ \"../../../node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExpExec` abstract operation\n// https://tc39.es/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return regexpExec.call(R, S);\n};\n\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/regexp-exec.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-exec.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */\n/* eslint-disable regexp/no-useless-quantifier -- testing */\nvar regexpFlags = __webpack_require__(/*! ./regexp-flags */ \"../../../node_modules/core-js/internals/regexp-flags.js\");\nvar stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ \"../../../node_modules/core-js/internals/regexp-sticky-helpers.js\");\nvar shared = __webpack_require__(/*! ./shared */ \"../../../node_modules/core-js/internals/shared.js\");\n\nvar nativeExec = RegExp.prototype.exec;\nvar nativeReplace = shared('native-string-replace', String.prototype.replace);\n\nvar patchedExec = nativeExec;\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n})();\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = regexpFlags.call(re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = flags.replace('y', '');\n      if (flags.indexOf('g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = String(str).slice(re.lastIndex);\n      // Support anchored sticky behavior.\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      }\n      // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n\n    match = nativeExec.call(sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = match.input.slice(charsAdded);\n        match[0] = match[0].slice(charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/regexp-flags.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-flags.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!***********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./fails */ \"../../../node_modules/core-js/internals/fails.js\");\n\n// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,\n// so we use an intermediate function.\nfunction RE(s, f) {\n  return RegExp(s, f);\n}\n\nexports.UNSUPPORTED_Y = fails(function () {\n  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\n  var re = RE('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') != null;\n});\n\nexports.BROKEN_CARET = fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = RE('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') != null;\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/require-object-coercible.js":
/*!**************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/require-object-coercible.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/same-value.js":
/*!************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/same-value.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `SameValue` abstract operation\n// https://tc39.es/ecma262/#sec-samevalue\n// eslint-disable-next-line es/no-object-is -- safe\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare -- NaN check\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/same-value.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/set-global.js":
/*!************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/set-global.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/set-species.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/set-species.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js/internals/get-built-in.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js/internals/object-define-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../../node_modules/core-js/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/set-species.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/set-to-string-tag.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../../node_modules/core-js/internals/object-define-property.js\").f;\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });\n  }\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-key.js":
/*!************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/shared-key.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../../../node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-store.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/shared-store.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../../node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/shared.js":
/*!********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/shared.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"../../../node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.14.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/species-constructor.js":
/*!*********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/species-constructor.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../node_modules/core-js/internals/a-function.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/string-multibyte.js":
/*!******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/string-multibyte.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/task.js":
/*!******************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/task.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../../node_modules/core-js/internals/fails.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../../node_modules/core-js/internals/function-bind-context.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"../../../node_modules/core-js/internals/html.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../../node_modules/core-js/internals/document-create-element.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"../../../node_modules/core-js/internals/engine-is-ios.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"../../../node_modules/core-js/internals/engine-is-node.js\");\n\nvar location = global.location;\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\n\nvar run = function (id) {\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar listener = function (event) {\n  run(event.data);\n};\n\nvar post = function (id) {\n  // old engines have not location.origin\n  global.postMessage(id + '', location.protocol + '//' + location.host);\n};\n\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!set || !clear) {\n  set = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func -- spec requirement\n      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (IS_NODE) {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  // except iOS - https://github.com/zloirock/core-js/issues/624\n  } else if (MessageChannel && !IS_IOS) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = bind(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (\n    global.addEventListener &&\n    typeof postMessage == 'function' &&\n    !global.importScripts &&\n    location && location.protocol !== 'file:' &&\n    !fails(post)\n  ) {\n    defer = post;\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/task.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/to-absolute-index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-absolute-index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/to-indexed-object.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-indexed-object.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/to-integer.js":
/*!************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-integer.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.es/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/to-length.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-length.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/to-object.js":
/*!***********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-object.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/to-primitive.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-primitive.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/to-string-tag-support.js":
/*!***********************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-string-tag-support.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/uid.js":
/*!*****************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/uid.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "../../../node_modules/core-js/internals/well-known-symbol.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/well-known-symbol.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../../node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../../node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../../node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../../node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"../../../node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.join.js":
/*!*************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.array.join.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js/internals/export.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../../node_modules/core-js/internals/indexed-object.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../../node_modules/core-js/internals/to-indexed-object.js\");\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"../../../node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar nativeJoin = [].join;\n\nvar ES3_STRINGS = IndexedObject != Object;\nvar STRICT_METHOD = arrayMethodIsStrict('join', ',');\n\n// `Array.prototype.join` method\n// https://tc39.es/ecma262/#sec-array.prototype.join\n$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {\n  join: function join(separator) {\n    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.array.join.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.object.to-string.js":
/*!*******************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.object.to-string.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"../../../node_modules/core-js/internals/to-string-tag-support.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js/internals/redefine.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"../../../node_modules/core-js/internals/object-to-string.js\");\n\n// `Object.prototype.toString` method\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, { unsafe: true });\n}\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.promise.js":
/*!**********************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.promise.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../../node_modules/core-js/internals/is-pure.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../../node_modules/core-js/internals/get-built-in.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"../../../node_modules/core-js/internals/native-promise-constructor.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../../node_modules/core-js/internals/redefine.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"../../../node_modules/core-js/internals/redefine-all.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"../../../node_modules/core-js/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"../../../node_modules/core-js/internals/set-to-string-tag.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"../../../node_modules/core-js/internals/set-species.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../../node_modules/core-js/internals/is-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../../node_modules/core-js/internals/a-function.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"../../../node_modules/core-js/internals/an-instance.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../../node_modules/core-js/internals/inspect-source.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"../../../node_modules/core-js/internals/iterate.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"../../../node_modules/core-js/internals/check-correctness-of-iteration.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../../../node_modules/core-js/internals/species-constructor.js\");\nvar task = __webpack_require__(/*! ../internals/task */ \"../../../node_modules/core-js/internals/task.js\").set;\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"../../../node_modules/core-js/internals/microtask.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"../../../node_modules/core-js/internals/promise-resolve.js\");\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"../../../node_modules/core-js/internals/host-report-errors.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"../../../node_modules/core-js/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"../../../node_modules/core-js/internals/perform.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../../node_modules/core-js/internals/internal-state.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../../../node_modules/core-js/internals/is-forced.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../../node_modules/core-js/internals/well-known-symbol.js\");\nvar IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ \"../../../node_modules/core-js/internals/engine-is-browser.js\");\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"../../../node_modules/core-js/internals/engine-is-node.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../../node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar PROMISE = 'Promise';\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar NativePromisePrototype = NativePromise && NativePromise.prototype;\nvar PromiseConstructor = NativePromise;\nvar PromiseConstructorPrototype = NativePromisePrototype;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\nvar SUBCLASSING = false;\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\n\nvar FORCED = isForced(PROMISE, function () {\n  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);\n  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n  // We can't detect it synchronously, so just check versions\n  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;\n  // We need Promise#finally in the pure version for preventing prototype pollution\n  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;\n  // We can't use @@species feature detection in V8 since it causes\n  // deoptimization and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;\n  // Detect correctness of subclassing with @@species support\n  var promise = new PromiseConstructor(function (resolve) { resolve(1); });\n  var FakePromise = function (exec) {\n    exec(function () { /* empty */ }, function () { /* empty */ });\n  };\n  var constructor = promise.constructor = {};\n  constructor[SPECIES] = FakePromise;\n  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;\n  if (!SUBCLASSING) return true;\n  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;\n});\n\nvar INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {\n  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });\n});\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\n\nvar notify = function (state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  var chain = state.reactions;\n  microtask(function () {\n    var value = state.value;\n    var ok = state.state == FULFILLED;\n    var index = 0;\n    // variable length - can't use forEach\n    while (chain.length > index) {\n      var reaction = chain[index++];\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (state.rejection === UNHANDLED) onHandleUnhandled(state);\n            state.rejection = HANDLED;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // can throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (error) {\n        if (domain && !exited) domain.exit();\n        reject(error);\n      }\n    }\n    state.reactions = [];\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = { promise: promise, reason: reason };\n  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);\n  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (state) {\n  task.call(global, function () {\n    var promise = state.facade;\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (state) {\n  task.call(global, function () {\n    var promise = state.facade;\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, state, unwrap) {\n  return function (value) {\n    fn(state, value, unwrap);\n  };\n};\n\nvar internalReject = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(state, true);\n};\n\nvar internalResolve = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  try {\n    if (state.facade === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n    if (then) {\n      microtask(function () {\n        var wrapper = { done: false };\n        try {\n          then.call(value,\n            bind(internalResolve, wrapper, state),\n            bind(internalReject, wrapper, state)\n          );\n        } catch (error) {\n          internalReject(wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(state, false);\n    }\n  } catch (error) {\n    internalReject({ done: false }, error, state);\n  }\n};\n\n// constructor polyfill\nif (FORCED) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromiseConstructor, PROMISE);\n    aFunction(executor);\n    Internal.call(this);\n    var state = getInternalState(this);\n    try {\n      executor(bind(internalResolve, state), bind(internalReject, state));\n    } catch (error) {\n      internalReject(state, error);\n    }\n  };\n  PromiseConstructorPrototype = PromiseConstructor.prototype;\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: [],\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n  Internal.prototype = redefineAll(PromiseConstructorPrototype, {\n    // `Promise.prototype.then` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.then\n    then: function then(onFulfilled, onRejected) {\n      var state = getInternalPromiseState(this);\n      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = IS_NODE ? process.domain : undefined;\n      state.parent = true;\n      state.reactions.push(reaction);\n      if (state.state != PENDING) notify(state, false);\n      return reaction.promise;\n    },\n    // `Promise.prototype.catch` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.catch\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, state);\n    this.reject = bind(internalReject, state);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {\n    nativeThen = NativePromisePrototype.then;\n\n    if (!SUBCLASSING) {\n      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs\n      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {\n        var that = this;\n        return new PromiseConstructor(function (resolve, reject) {\n          nativeThen.call(that, resolve, reject);\n        }).then(onFulfilled, onRejected);\n      // https://github.com/zloirock/core-js/issues/640\n      }, { unsafe: true });\n\n      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`\n      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });\n    }\n\n    // make `.constructor === Promise` work for native promise-based APIs\n    try {\n      delete NativePromisePrototype.constructor;\n    } catch (error) { /* empty */ }\n\n    // make `instanceof Promise` work for native promise-based APIs\n    if (setPrototypeOf) {\n      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);\n    }\n  }\n}\n\n$({ global: true, wrap: true, forced: FORCED }, {\n  Promise: PromiseConstructor\n});\n\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\n\nPromiseWrapper = getBuiltIn(PROMISE);\n\n// statics\n$({ target: PROMISE, stat: true, forced: FORCED }, {\n  // `Promise.reject` method\n  // https://tc39.es/ecma262/#sec-promise.reject\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    capability.reject.call(undefined, r);\n    return capability.promise;\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {\n  // `Promise.resolve` method\n  // https://tc39.es/ecma262/#sec-promise.resolve\n  resolve: function resolve(x) {\n    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {\n  // `Promise.all` method\n  // https://tc39.es/ecma262/#sec-promise.all\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        $promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  },\n  // `Promise.race` method\n  // https://tc39.es/ecma262/#sec-promise.race\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      iterate(iterable, function (promise) {\n        $promiseResolve.call(C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.promise.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.regexp.exec.js":
/*!**************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.regexp.exec.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../../node_modules/core-js/internals/export.js\");\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"../../../node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExp.prototype.exec` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.exec\n$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {\n  exec: exec\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.string.match.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.match.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js/internals/to-length.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"../../../node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\n\n// @@match logic\nfixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.es/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = requireObjectCoercible(this);\n      var matcher = regexp == undefined ? undefined : regexp[MATCH];\n      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative(nativeMatch, regexp, this);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      if (!rx.global) return regExpExec(rx, S);\n\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.match.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.string.replace.js":
/*!*****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.replace.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js/internals/to-length.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../../node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"../../../node_modules/core-js/internals/advance-string-index.js\");\nvar getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ \"../../../node_modules/core-js/internals/get-substitution.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\nfixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {\n  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;\n  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;\n  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';\n\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.es/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = requireObjectCoercible(this);\n      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return replacer !== undefined\n        ? replacer.call(searchValue, O, replaceValue)\n        : nativeReplace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      if (\n        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||\n        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)\n      ) {\n        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);\n        if (res.done) return res.value;\n      }\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n\n        results.push(result);\n        if (!global) break;\n\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.string.search.js":
/*!****************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.search.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar sameValue = __webpack_require__(/*! ../internals/same-value */ \"../../../node_modules/core-js/internals/same-value.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\n\n// @@search logic\nfixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.es/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = requireObjectCoercible(this);\n      var searcher = regexp == undefined ? undefined : regexp[SEARCH];\n      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative(nativeSearch, regexp, this);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.search.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/es.string.split.js":
/*!***************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.split.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"../../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"../../../node_modules/core-js/internals/is-regexp.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../../node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../../node_modules/core-js/internals/require-object-coercible.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"../../../node_modules/core-js/internals/species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"../../../node_modules/core-js/internals/advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../../node_modules/core-js/internals/to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"../../../node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"../../../node_modules/core-js/internals/regexp-exec.js\");\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"../../../node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;\nvar arrayPush = [].push;\nvar min = Math.min;\nvar MAX_UINT32 = 0xFFFFFFFF;\n\n// @@split logic\nfixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'.split(/(b)*/)[1] == 'c' ||\n    // eslint-disable-next-line regexp/no-empty-group -- required for testing\n    'test'.split(/(?:)/, -1).length != 4 ||\n    'ab'.split(/(?:ab)*/).length != 2 ||\n    '.'.split(/(.?)(.?)/).length != 4 ||\n    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing\n    '.'.split(/()()/).length > 1 ||\n    ''.split(/.?/).length\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(requireObjectCoercible(this));\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (separator === undefined) return [string];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) {\n        return nativeSplit.call(string, separator, lim);\n      }\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy.lastIndex;\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));\n          lastLength = match[0].length;\n          lastLastIndex = lastIndex;\n          if (output.length >= lim) break;\n        }\n        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string.length) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output.length > lim ? output.slice(0, lim) : output;\n    };\n  // Chakra, V8\n  } else if ('0'.split(undefined, 0).length) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);\n    };\n  } else internalSplit = nativeSplit;\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.es/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = requireObjectCoercible(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (UNSUPPORTED_Y ? 'g' : 'y');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;\n        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);\n        var e;\n        if (\n          z === null ||\n          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n}, UNSUPPORTED_Y);\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/es.string.split.js?");

/***/ }),

/***/ "../../../node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!****************************************************************************************************************!*\
  !*** /Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../../node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"../../../node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"../../../node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack:////Users/asinishin/Documents/3-work/Deskworks/node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "../lib/alerts.js":
/*!************************!*\
  !*** ../lib/alerts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alerts; });\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"../../../node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"../../../node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _alerts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts.scss */ \"../lib/alerts.scss\");\n/* harmony import */ var _alerts_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_alerts_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Alerts = /*#__PURE__*/function () {\n  function Alerts(ctx) {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Alerts);\n\n    this.ctx = ctx;\n  }\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Alerts, [{\n    key: \"error\",\n    value: function error(err, message) {\n      if (err instanceof Error) message ? console.error(message + ':', err) : console.error(err);\n      var container = this.ctx.container;\n      var alerts = container.querySelector('.dw-alerts');\n\n      if (!alerts) {\n        alerts = document.createElement('div');\n        alerts.className = 'dw-alerts';\n        container.appendChild(alerts);\n      }\n\n      var error = document.createElement('div');\n      error.className = 'dw-error';\n      error.innerHTML = 'ERROR: ';\n\n      if (message && err) {\n        error.innerHTML += message + ': ' + (err.message || '-');\n      } else {\n        if (message) error.innerHTML += message;\n        if (err) error.innerHTML += err.message || '-';\n      }\n\n      alerts.appendChild(error);\n    }\n  }]);\n\n  return Alerts;\n}();\n\n\n\n//# sourceURL=webpack:///../lib/alerts.js?");

/***/ }),

/***/ "../lib/alerts.scss":
/*!**************************!*\
  !*** ../lib/alerts.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\n\n//# sourceURL=webpack:///../lib/alerts.scss?");

/***/ }),

/***/ "../lib/http.js":
/*!**********************!*\
  !*** ../lib/http.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"../../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"../../../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: get\n});\n\nfunction get(url) {\n  return fetch(url, {\n    credentials: 'include'\n  }) // TODO: babel fetch polyfill\n  .then(function (res) {\n    return res.json().then(function (json) {\n      if (!res.ok) throw new Error(json.error || json.message);\n      return json;\n    });\n  });\n}\n\n//# sourceURL=webpack:///../lib/http.js?");

/***/ }),

/***/ "../lib/init-context.js":
/*!******************************!*\
  !*** ../lib/init-context.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initContext; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/url.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction initContext(selector) {\n  var element = document.querySelector(selector);\n  if (!element) throw \"\".concat(selector, \" element not found.\");\n  var ctx = {\n    container: element,\n    attrs: element,\n    origin: element.getAttribute('dw-origin')\n  };\n\n  if (element.tagName === 'SCRIPT') {\n    // single tag embedding\n    if (!ctx.origin) ctx.origin = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_0___default.a(element.getAttribute('src')).origin; // fallback: origin from script src\n\n    ctx.container = document.createElement('div');\n    element.parentNode.insertBefore(ctx.container, element);\n  }\n\n  return ctx;\n}\n\n//# sourceURL=webpack:///../lib/init-context.js?");

/***/ }),

/***/ "../lib/jq-lite.js":
/*!*************************!*\
  !*** ../lib/jq-lite.js ***!
  \*************************/
/*! exports provided: default, injectStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectStyles\", function() { return injectStyles; });\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"../../../node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"../../../node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"../../../node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"../../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n/**\n * A part of https://github.com/angular/angular.js/blob/master/src/jqLite.js\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (jqLiteParseHTML);\n\njqLiteParseHTML.toggleClass = function (elem, className, state) {\n  var _context;\n\n  var classes = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context = elem.className.split(' ')).call(_context, function (c) {\n    return !!c;\n  });\n\n  var index = classes.indexOf(className);\n\n  if (state) {\n    if (index <= 0) classes.push(className);\n  } else {\n    if (index >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default()(classes).call(classes, index, 1);\n  }\n\n  elem.className = classes.join(' ');\n  return jqLiteParseHTML;\n};\n\nvar SINGLE_TAG_REGEXP = /^<([\\w-]+)\\s*\\/?>(?:<\\/\\1>|)$/;\nvar HTML_REGEXP = /<|&#?\\w+;/;\nvar TAG_NAME_REGEXP = /<([\\w:-]+)/;\nvar XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:-]+)[^>]*)\\/>/gi;\nvar wrapMap = {\n  'option': [1, '<select multiple=\"multiple\">', '</select>'],\n  'thead': [1, '<table>', '</table>'],\n  'col': [2, '<table><colgroup>', '</colgroup></table>'],\n  'tr': [2, '<table><tbody>', '</tbody></table>'],\n  'td': [3, '<table><tbody><tr>', '</tr></tbody></table>'],\n  '_default': [0, '', '']\n};\nwrapMap.optgroup = wrapMap.option;\nwrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;\nwrapMap.th = wrapMap.td;\n\nfunction jqLiteIsTextNode(html) {\n  return !HTML_REGEXP.test(html);\n}\n\nfunction jqLiteBuildFragment(html, context) {\n  var tmp,\n      tag,\n      wrap,\n      fragment = context.createDocumentFragment(),\n      nodes = [],\n      i;\n\n  if (jqLiteIsTextNode(html)) {\n    // Convert non-html into a text node\n    nodes.push(context.createTextNode(html));\n  } else {\n    // Convert html into DOM nodes\n    tmp = fragment.appendChild(context.createElement('div'));\n    tag = (TAG_NAME_REGEXP.exec(html) || ['', ''])[1].toLowerCase();\n    wrap = wrapMap[tag] || wrapMap._default;\n    tmp.innerHTML = wrap[1] + html.replace(XHTML_TAG_REGEXP, '<$1></$2>') + wrap[2]; // Descend through wrappers to the right content\n\n    i = wrap[0];\n\n    while (i--) {\n      tmp = tmp.lastChild;\n    }\n\n    nodes = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7___default()(nodes).call(nodes, _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_8___default()(tmp.childNodes));\n    tmp = fragment.firstChild;\n    tmp.textContent = '';\n  } // Remove wrapper from fragment\n\n\n  fragment.textContent = '';\n  fragment.innerHTML = ''; // Clear inner HTML\n\n  nodes.forEach(function (node) {\n    fragment.appendChild(node);\n  });\n  return fragment;\n}\n\nfunction jqLiteParseHTML(html, context) {\n  context = context || window.document;\n  var parsed;\n\n  if (parsed = SINGLE_TAG_REGEXP.exec(html)) {\n    return [context.createElement(parsed[1])];\n  }\n\n  if (parsed = jqLiteBuildFragment(html, context)) {\n    return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_8___default()(parsed.childNodes);\n  }\n\n  return [];\n}\n/**\n * Inject styles\n */\n\n\nfunction injectStyles(paths) {\n  paths.forEach(function (path) {\n    var link = document.head.querySelector('link[href=\"' + path + '\"]');\n    if (link) return;\n    link = document.createElement('link');\n    link.rel = 'stylesheet';\n    link.href = path;\n    link.type = 'text/css';\n    document.head.prepend(link);\n  });\n}\n\n//# sourceURL=webpack:///../lib/jq-lite.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"../../../node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ \"../../../node_modules/core-js/modules/es.string.search.js\");\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"../../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"../../../node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _our_members_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-members.scss */ \"./our-members.scss\");\n/* harmony import */ var _our_members_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_our_members_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _our_members_modal_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./our-members-modal.scss */ \"./our-members-modal.scss\");\n/* harmony import */ var _our_members_modal_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_our_members_modal_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/alerts */ \"../lib/alerts.js\");\n/* harmony import */ var _lib_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/http */ \"../lib/http.js\");\n/* harmony import */ var _infinite_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./infinite-scroll */ \"./infinite-scroll.js\");\n/* harmony import */ var _our_members_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./our-members-modal */ \"./our-members-modal.js\");\n/* harmony import */ var _our_members_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./our-members.html */ \"./our-members.html\");\n/* harmony import */ var _our_members_html__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_our_members_html__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _our_members_modal_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./our-members-modal.html */ \"./our-members-modal.html\");\n/* harmony import */ var _our_members_modal_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_our_members_modal_html__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/jq-lite */ \"../lib/jq-lite.js\");\n/* harmony import */ var _lib_init_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/init-context */ \"../lib/init-context.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(function (window, document) {\n  var dom = {};\n  var members,\n      offset,\n      limit = 100,\n      eof;\n  var ctx = Object(_lib_init_context__WEBPACK_IMPORTED_MODULE_16__[\"default\"])('[dw-our-members]');\n  var origin = ctx.origin,\n      attrs = ctx.attrs,\n      container = ctx.container;\n  var alerts = new _lib_alerts__WEBPACK_IMPORTED_MODULE_9__[\"default\"](ctx);\n  var centerId = ctx.attrs.getAttribute('dw-center-id');\n\n  (function init() {\n    Object(_lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__[\"injectStyles\"])([attrs.getAttribute('src').replace('.js', '.css'), 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css']);\n    dom.mainTpl = Object(_lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(_our_members_html__WEBPACK_IMPORTED_MODULE_13___default.a)[0];\n    dom.modalTpl = Object(_lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(_our_members_modal_html__WEBPACK_IMPORTED_MODULE_14___default.a)[0];\n    container.appendChild(dom.mainTpl);\n    setTimeout(function (_) {\n      reset();\n      applySelectors(dom);\n      dom.members.removeChild(dom.memberTpl);\n      bindEvents(dom);\n      _lib_http__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(origin + '/api/v1/centers').then(function (centers) {\n        return onCenters(centers);\n      }).catch(function (err) {\n        return alerts.error(err, 'Query centers');\n      });\n      Object(_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__[\"infiniteScroll\"])({\n        distance: 1500,\n        callback: onScroll\n      });\n    });\n  })();\n\n  function applySelectors(dom) {\n    dom.members = document.querySelector('.om-members');\n    dom.memberTpl = dom.members.querySelector('.om-member');\n    dom.spin = dom.members.querySelector('.om-spin');\n    dom.nobody = document.querySelector('.om-nobody');\n    dom.toolbar = document.querySelector('.om-toolbar');\n    dom.center = dom.toolbar.querySelector('select[name=\"center\"]');\n    dom.sort = dom.toolbar.querySelector('select[name=\"sort\"]');\n    dom.search = dom.toolbar.querySelector('input[name=\"search\"]');\n  }\n\n  function bindEvents(dom) {\n    dom.center.addEventListener('change', onFilterChange);\n\n    _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default()(dom).addEventListener('change', onFilterChange);\n\n    dom.search.addEventListener('input', debounce(onFilterChange, 1000));\n    dom.toolbar.addEventListener('submit', function (event) {\n      event.preventDefault();\n    });\n  }\n\n  function reset() {\n    members = [];\n    offset = 0;\n    eof = false;\n\n    if (dom.members) {\n      dom.members.querySelectorAll('.om-member').forEach(function (element) {\n        element.remove();\n      });\n    }\n  }\n\n  function onFilterChange(event) {\n    reset();\n    onScroll();\n  }\n\n  function onScroll(done) {\n    if (eof) return;\n    _lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__[\"default\"].toggleClass(dom.spin, 'om-hidden', false);\n    _lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__[\"default\"].toggleClass(dom.nobody, 'om-hidden', true);\n    var params = ['offset=' + offset, 'limit=' + limit, 'sort=' + _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default()(dom).value];\n\n    if (centerId && !dom.center.value) {\n      params.push('centerId=' + centerId);\n      centerId = null;\n    } else {\n      if (dom.center.value) params.push('centerId=' + dom.center.value);\n    }\n\n    if (dom.search.value) params.push('q=' + encodeURIComponent(dom.search.value));\n    _lib_http__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(origin + '/api/v1/our-members?' + params.join('&')).then(function (members) {\n      onMembers(members);\n      if (done) done();\n    }).catch(function (err) {\n      return alerts.error(err, 'Query our members');\n    });\n  }\n\n  function onCenters(centers) {\n    centers.forEach(function (center) {\n      var opt = document.createElement('option');\n      opt.value = center.id;\n      opt.textContent = center.name;\n      dom.center.appendChild(opt);\n    });\n    var centerId = ctx.attrs.getAttribute('dw-center-id');\n    if (centerId) dom.center.value = centerId;\n  }\n\n  function onMembers(result) {\n    result.forEach(function (member, idx) {\n      var omMember = dom.memberTpl.cloneNode(true);\n      var omPhoto = omMember.querySelector('.om-photo');\n      var omImg = omPhoto.querySelector('img');\n      var omName = omMember.querySelector('.om-name');\n      var omOccupation = omMember.querySelector('.om-occupation');\n      omMember.addEventListener('click', onClickMember);\n      omMember.setAttribute('data-idx', members.length + idx);\n      omName.textContent = member.name;\n      if (member.photo) omImg.src = member.photo;else omPhoto.removeChild(omImg);\n      if (member.occupation) omOccupation.textContent = member.occupation;else omMember.removeChild(omOccupation);\n      dom.members.insertBefore(omMember, dom.spin);\n    });\n    members = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(members).call(members, result);\n    offset += result.length;\n    eof = result.length < limit;\n    _lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__[\"default\"].toggleClass(dom.spin, 'om-hidden', true);\n    _lib_jq_lite__WEBPACK_IMPORTED_MODULE_15__[\"default\"].toggleClass(dom.nobody, 'om-hidden', !!members.length || !eof);\n  }\n\n  function onClickMember(event) {\n    var el = event.target,\n        i = 5;\n\n    while (el.className.indexOf('om-member') < 0 && i) {\n      el = el.parentElement;\n      i--;\n    }\n\n    Object(_our_members_modal__WEBPACK_IMPORTED_MODULE_12__[\"showOurMemberModal\"])(dom.modalTpl, members[el.dataset.idx]);\n  }\n\n  function debounce(func, wait, immediate) {\n    var _arguments = arguments,\n        _this = this;\n\n    var timeout;\n    return function (_) {\n      var context = _this,\n          args = _arguments;\n\n      var later = function later() {\n        timeout = null;\n        if (!immediate) return func.apply(context, args);\n      };\n\n      var callNow = immediate && !timeout;\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n      if (callNow) return func.apply(context, args);\n    };\n  }\n})(window, document);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./infinite-scroll.js":
/*!****************************!*\
  !*** ./infinite-scroll.js ***!
  \****************************/
/*! exports provided: infiniteScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"infiniteScroll\", function() { return infiniteScroll; });\n/**\n * Based on: https://github.com/alexblack/infinite-scroll\n */\nvar isIE = /msie/gi.test(navigator.userAgent); // http://pipwerks.com/2011/05/18/sniffing-internet-explorer-via-javascript/\n\nfunction infiniteScroll(options) {\n  var defaults = {\n    callback: function callback() {},\n    distance: 50\n  }; // Populate defaults\n\n  for (var key in defaults) {\n    if (typeof options[key] == 'undefined') options[key] = defaults[key];\n  }\n\n  var scroller = {\n    options: options,\n    updateInitiated: false\n  };\n  window.addEventListener('scroll', function (_) {\n    window.requestAnimationFrame(function (_) {\n      return handleScroll(scroller);\n    });\n  }); // Trigger initial loading\n\n  window.requestAnimationFrame(function (_) {\n    return handleScroll(scroller);\n  }); // For touch devices, try to detect scrolling by touching\n\n  document.addEventListener('touchmove', function (_) {\n    window.requestAnimationFrame(function (_) {\n      return handleScroll(scroller);\n    });\n  });\n}\n\nfunction getScrollPos() {\n  if (isIE) return document.documentElement.scrollTop; // Handle scroll position in case of IE differently\n\n  return window.pageYOffset;\n}\n\nvar prevScrollPos = getScrollPos(); // Respond to scroll events\n\nfunction handleScroll(scroller, event) {\n  if (scroller.updateInitiated) return;\n  var scrollPos = getScrollPos(); // if (scrollPos === prevScrollPos) return; // nothing to do\n  // Find the pageHeight and clientHeight(the no. of pixels to scroll to make the scrollbar reach max pos)\n\n  var pageHeight = document.documentElement.scrollHeight;\n  var clientHeight = document.documentElement.clientHeight; // Check if scroll bar position is just distance above the max, if yes, initiate an update\n\n  if (pageHeight - (scrollPos + clientHeight) < scroller.options.distance) {\n    scroller.updateInitiated = true;\n    scroller.options.callback(function (_) {\n      scroller.updateInitiated = false;\n    });\n  }\n\n  prevScrollPos = scrollPos;\n}\n\n//# sourceURL=webpack:///./infinite-scroll.js?");

/***/ }),

/***/ "./our-members-modal.html":
/*!********************************!*\
  !*** ./our-members-modal.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div class=\\\"om-modal\\\"> <div class=\\\"om-modal-fade\\\"></div> <div class=\\\"om-modal-dialog\\\"> <div class=\\\"om-modal-scroll\\\"> <div class=\\\"om-header\\\"> <div class=\\\"om-photo\\\"><img></div> <div class=\\\"om-details\\\"> <h4 class=\\\"om-name\\\"></h4> <h5 class=\\\"om-occupation\\\"></h5> <h6 class=\\\"om-company\\\"></h6> <div class=\\\"om-contacts\\\"> <div class=\\\"om-emails\\\"> <span class=\\\"om-email\\\"><i class=\\\"fa fa-at\\\"></i> <a target=\\\"_blank\\\" rel=\\\"noopener\\\"></a></span> </div> <div class=\\\"om-phones\\\"> <span class=\\\"om-phone\\\"><i class=\\\"fa fa-phone\\\"></i> <a target=\\\"_blank\\\" rel=\\\"noopener\\\"></a></span> </div> </div> <div class=\\\"om-urls\\\"> <span class=\\\"om-url\\\"><a target=\\\"_blank\\\" rel=\\\"noopener\\\"><i class=\\\"fa\\\"></i></a></span> </div> </div> </div> <div class=\\\"om-field\\\"> <span class=\\\"om-field-name\\\"></span>&nbsp;<span class=\\\"om-field-value\\\"></span> </div> </div> <button class=\\\"om-modal-cross\\\"></button> </div> </div> \";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./our-members-modal.html?");

/***/ }),

/***/ "./our-members-modal.js":
/*!******************************!*\
  !*** ./our-members-modal.js ***!
  \******************************/
/*! exports provided: showOurMemberModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showOurMemberModal\", function() { return showOurMemberModal; });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"../../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"../../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ \"../../../node_modules/core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"../../../node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"../../../node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ \"../../../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction showOurMemberModal(modalTpl, member) {\n  var dom = {};\n\n  (function init() {\n    dom.modal = modalTpl.cloneNode(true);\n    applySelectors(dom);\n    bindEvents(dom);\n    openDialog();\n    renderData();\n  })();\n\n  function renderData() {\n    var _context, _context2, _context3, _context4;\n\n    if (member.photo) dom.img.src = member.photo;else dom.photo.parentElement.removeChild(dom.photo);\n    dom.name.textContent = member.name || '';\n    dom.occupation.textContent = member.occupation || '';\n    dom.company.textContent = member.company || '';\n\n    var emails = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context = member.fields).call(_context, function (field) {\n      return field.type === 'email';\n    });\n\n    var phones = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = member.fields).call(_context2, function (field) {\n      return field.type === 'phone';\n    });\n\n    var urls = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = member.fields).call(_context3, function (field) {\n      return field.type === 'url';\n    });\n\n    var fields = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context4 = member.fields).call(_context4, function (field) {\n      return ['email', 'phone', 'url'].indexOf(field.type) < 0;\n    });\n\n    if (member.email) emails.unshift({\n      value: member.email\n    });\n\n    if (emails.length) {\n      emails.forEach(function (field) {\n        var email = dom.emailTpl.cloneNode(true);\n        var link = email.querySelector('a');\n        link.href = 'mailto:' + field.value;\n        link.textContent = field.value;\n        link.title = field.name;\n        dom.emails.appendChild(email);\n      });\n    } else {\n      dom.contacts.removeChild(dom.emails);\n    }\n\n    if (phones.length) {\n      phones.forEach(function (field) {\n        var phone = dom.phoneTpl.cloneNode(true);\n        var link = phone.querySelector('a');\n        link.href = 'tel:' + field.value;\n        link.textContent = field.value;\n        link.title = field.name;\n        dom.phones.appendChild(phone);\n      });\n    } else {\n      dom.contacts.removeChild(dom.phones);\n    }\n\n    if (!emails.length && !phones.length) dom.details.removeChild(dom.contacts);\n\n    if (urls.length) {\n      assignUrlIcons(urls);\n      urls.forEach(function (field) {\n        var url = dom.urlTpl.cloneNode(true);\n        var icon = url.querySelector('.fa');\n        var link = url.querySelector('a');\n        setClass(icon, field.icon);\n        link.href = field.value;\n        link.title = field.name;\n        dom.urls.appendChild(url);\n      });\n    } else {\n      dom.details.removeChild(dom.urls);\n    }\n\n    fields.forEach(function (field) {\n      var omField = dom.fieldTpl.cloneNode(true);\n      var omName = omField.querySelector('.om-field-name');\n      var omValue = omField.querySelector('.om-field-value');\n      omName.textContent = field.name + ':';\n      omValue.textContent = field.value;\n      dom.body.appendChild(omField);\n    });\n  }\n\n  function assignUrlIcons(urls) {\n    urls.forEach(function (field) {\n      var name = (field.name || '').toLowerCase();\n      var value = (field.value || '').toLowerCase();\n      if (name.indexOf('facebook') >= 0 || value.indexOf('facebook.com') >= 0) field.icon = 'fa-facebook-square';else if (name.indexOf('twitter') >= 0 || value.indexOf('twitter.com') >= 0) field.icon = 'fa-twitter-square';else if (name.indexOf('linkedin') >= 0 || value.indexOf('linkedin.com') >= 0) field.icon = 'fa-linkedin-square';else if (name.indexOf('github') >= 0 || value.indexOf('github.com') >= 0) field.icon = 'fa-github-square';else if (name.indexOf('youtube') >= 0 || value.indexOf('youtube.com') >= 0) field.icon = 'fa-youtube-square';else if (name.indexOf('vimeo') >= 0 || value.indexOf('vimeo.com') >= 0) field.icon = 'fa-vimeo-square';else if (name.match(/google(?:\\s|-)?(?:plus|\\+)/) || value.indexOf('plus.google.com') >= 0) field.icon = 'fa-google-plus-square';else field.icon = 'fa-globe';\n    });\n  }\n\n  function applySelectors() {\n    dom.cross = dom.modal.querySelector('.om-modal-cross');\n    dom.fade = dom.modal.querySelector('.om-modal-fade');\n    dom.photo = dom.modal.querySelector('.om-photo');\n    dom.img = dom.photo.querySelector('img');\n    dom.name = dom.modal.querySelector('.om-name');\n    dom.occupation = dom.modal.querySelector('.om-occupation');\n    dom.company = dom.modal.querySelector('.om-company');\n    dom.body = dom.modal.querySelector('.om-modal-scroll');\n    dom.fieldTpl = dom.modal.querySelector('.om-field');\n    dom.body.removeChild(dom.fieldTpl);\n    dom.details = dom.modal.querySelector('.om-details');\n    dom.contacts = dom.modal.querySelector('.om-contacts');\n    dom.emails = dom.contacts.querySelector('.om-emails');\n    dom.emailTpl = dom.emails.querySelector('.om-email');\n    dom.emails.removeChild(dom.emailTpl);\n    dom.phones = dom.contacts.querySelector('.om-phones');\n    dom.phoneTpl = dom.phones.querySelector('.om-phone');\n    dom.phones.removeChild(dom.phoneTpl);\n    dom.urls = dom.modal.querySelector('.om-urls');\n    dom.urlTpl = dom.urls.querySelector('.om-url');\n    dom.urls.removeChild(dom.urlTpl);\n  }\n\n  function bindEvents() {\n    dom.cross.addEventListener('click', closeDialog);\n    dom.fade.addEventListener('click', closeDialog);\n  }\n\n  function openDialog() {\n    document.body.appendChild(dom.modal);\n    setTimeout(function (_) {\n      return setClass(document.getElementsByTagName('html')[0], 'om-modal-open');\n    });\n  }\n\n  function closeDialog() {\n    setClass(document.getElementsByTagName('html')[0], 'om-modal-open', false);\n    setTimeout(function (_) {\n      return document.body.removeChild(dom.modal);\n    }, 150);\n  }\n\n  function setClass(element, className, op) {\n    if (op !== false) op = true;\n    var arr = element.className.split(' ');\n    var idx = arr.indexOf(className);\n    if (op && idx < 0) arr.push(className);else if (!op && idx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default()(arr).call(arr, idx, 1);\n    element.className = arr.join(' ');\n  }\n}\n\n//# sourceURL=webpack:///./our-members-modal.js?");

/***/ }),

/***/ "./our-members-modal.scss":
/*!********************************!*\
  !*** ./our-members-modal.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\n\n//# sourceURL=webpack:///./our-members-modal.scss?");

/***/ }),

/***/ "./our-members.html":
/*!**************************!*\
  !*** ./our-members.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div class=\\\"om\\\"> <form name=\\\"toolbar\\\" class=\\\"om-toolbar\\\"> <label> <span class=\\\"om-label\\\">Center</span> <select name=\\\"center\\\" class=\\\"om-control\\\"> <option value=\\\"\\\">All</option> </select> </label> <label> <span class=\\\"om-label\\\">Order by</span> <select name=\\\"sort\\\" class=\\\"om-control\\\"> <option value=\\\"name\\\">Name</option> <option value=\\\"occupation\\\">Occupation</option> </select> </label> <label> <span class=\\\"om-label\\\">Search</span> <input type=\\\"text\\\" name=\\\"search\\\" class=\\\"om-control\\\"> </label> </form> <div class=\\\"om-nobody om-hidden\\\">Nobody.</div> <div class=\\\"om-members\\\"> <div class=\\\"om-member\\\"> <div class=\\\"om-photo\\\"><img></div> <h5 class=\\\"om-name\\\"></h5> <h6 class=\\\"om-occupation\\\"></h6> </div> <div class=\\\"om-spin\\\"></div> </div> </div> \";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./our-members.html?");

/***/ }),

/***/ "./our-members.scss":
/*!**************************!*\
  !*** ./our-members.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\n\n//# sourceURL=webpack:///./our-members.scss?");

/***/ })

/******/ });