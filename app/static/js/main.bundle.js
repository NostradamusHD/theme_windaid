/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"package.foundation-sites"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/foundation/foundation-explicit-pieces.js":
/*!*********************************************************!*\
  !*** ./src/js/foundation/foundation-explicit-pieces.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation.core */ \"./node_modules/foundation-sites/js/foundation.core.js\");\n/* harmony import */ var foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation.accordionMenu */ \"./node_modules/foundation-sites/js/foundation.accordionMenu.js\");\n\n // import { Box } from 'foundation-sites/js/foundation.util.box';\n// import { onImagesLoaded } from 'foundation-sites/js/foundation.util.imageLoader';\n// import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard';\n// import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';\n// import { Motion, Move } from 'foundation-sites/js/foundation.util.motion';\n// import { Nest } from 'foundation-sites/js/foundation.util.nest';\n// import { Timer } from 'foundation-sites/js/foundation.util.timer';\n// import { Touch } from 'foundation-sites/js/foundation.util.touch';\n// import { Triggers } from 'foundation-sites/js/foundation.util.triggers';\n// import { Abide } from 'foundation-sites/js/foundation.abide';\n// import { Accordion } from 'foundation-sites/js/foundation.accordion';\n\n // import { Drilldown } from 'foundation-sites/js/foundation.drilldown';\n// import { Dropdown } from 'foundation-sites/js/foundation.dropdown';\n// import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu';\n// import { Equalizer } from 'foundation-sites/js/foundation.equalizer';\n// import { Interchange } from 'foundation-sites/js/foundation.interchange';\n// import { Magellan } from 'foundation-sites/js/foundation.magellan';\n// import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';\n// import { Orbit } from 'foundation-sites/js/foundation.orbit';\n// import { ResponsiveMenu } from 'foundation-sites/js/foundation.responsiveMenu';\n// import { ResponsiveToggle } from 'foundation-sites/js/foundation.responsiveToggle';\n// import { Reveal } from 'foundation-sites/js/foundation.reveal';\n// import { Slider } from 'foundation-sites/js/foundation.slider';\n// import { SmoothScroll } from 'foundation-sites/js/foundation.smoothScroll';\n// import { Sticky } from 'foundation-sites/js/foundation.sticky';\n// import { Tabs } from 'foundation-sites/js/foundation.tabs';\n// import { Toggler } from 'foundation-sites/js/foundation.toggler';\n// import { Tooltip } from 'foundation-sites/js/foundation.tooltip';\n// import { ResponsiveAccordionTabs } from 'foundation-sites/js/foundation.responsiveAccordionTabs';\n// Use\n\nfoundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Foundation.Box = Box;\n// Foundation.onImagesLoaded = onImagesLoaded;\n// Foundation.Keyboard = Keyboard;\n// Foundation.MediaQuery = MediaQuery;\n// Foundation.Motion = Motion;\n// Foundation.Move = Move;\n// Foundation.Nest = Nest;\n// Foundation.Timer = Timer;\n// Touch.init($);\n// Triggers.init($, Foundation);\n// Foundation.plugin(Abide, 'Abide');\n// Foundation.plugin(Accordion, 'Accordion');\n\nfoundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__[\"Foundation\"].plugin(foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_2__[\"AccordionMenu\"], 'AccordionMenu'); // Foundation.plugin(Drilldown, 'Drilldown');\n// Foundation.plugin(Dropdown, 'Dropdown');\n// Foundation.plugin(DropdownMenu, 'DropdownMenu');\n// Foundation.plugin(Equalizer, 'Equalizer');\n// Foundation.plugin(Interchange, 'Interchange');\n// Foundation.plugin(Magellan, 'Magellan');\n// Foundation.plugin(OffCanvas, 'OffCanvas');\n// Foundation.plugin(Orbit, 'Orbit');\n// Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');\n// Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');\n// Foundation.plugin(Reveal, 'Reveal');\n// Foundation.plugin(Slider, 'Slider');\n// Foundation.plugin(SmoothScroll, 'SmoothScroll');\n// Foundation.plugin(Sticky, 'Sticky');\n// Foundation.plugin(Tabs, 'Tabs');\n// Foundation.plugin(Toggler, 'Toggler');\n// Foundation.plugin(Tooltip, 'Tooltip');\n// Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');\n\n//# sourceURL=webpack:///./src/js/foundation/foundation-explicit-pieces.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _foundation_foundation_explicit_pieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation/foundation-explicit-pieces */ \"./src/js/foundation/foundation-explicit-pieces.js\");\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation(); //Languaje\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.languaje').on('click', function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.languaje__options').toggleClass('active');\n}); //Button Menu\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu_button').on('click', function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.burger').toggleClass('active');\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__top-bar').toggleClass('menu_active');\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__menu').toggleClass('menu_active');\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\xampp\\htdocs\\windaid\\wp-content\\themes\\pandoramarketing_theme\\src\\js\\main.js */\"./src/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });