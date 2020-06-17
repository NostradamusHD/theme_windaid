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
/******/ 		"sliders-impact": 0
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
/******/ 	deferredModules.push([2,"package.swiper","package.dom7"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: document, extend, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"document\", function() { return doc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"window\", function() { return win; });\n/**\n * SSR Window 2.0.0\n * Better handling for window object in SSR environment\n * https://github.com/nolimits4web/ssr-window\n *\n * Copyright 2020, Vladimir Kharlampidi\n *\n * Licensed under MIT\n *\n * Released on: May 12, 2020\n */\n/* eslint-disable no-param-reassign */\nfunction isObject(obj) {\n    return (obj !== null &&\n        typeof obj === 'object' &&\n        'constructor' in obj &&\n        obj.constructor === Object);\n}\nfunction extend(target, src) {\n    if (target === void 0) { target = {}; }\n    if (src === void 0) { src = {}; }\n    Object.keys(src).forEach(function (key) {\n        if (typeof target[key] === 'undefined')\n            target[key] = src[key];\n        else if (isObject(src[key]) &&\n            isObject(target[key]) &&\n            Object.keys(src[key]).length > 0) {\n            extend(target[key], src[key]);\n        }\n    });\n}\n\nvar doc = typeof document !== 'undefined' ? document : {};\nvar ssrDocument = {\n    body: {},\n    addEventListener: function () { },\n    removeEventListener: function () { },\n    activeElement: {\n        blur: function () { },\n        nodeName: '',\n    },\n    querySelector: function () {\n        return null;\n    },\n    querySelectorAll: function () {\n        return [];\n    },\n    getElementById: function () {\n        return null;\n    },\n    createEvent: function () {\n        return {\n            initEvent: function () { },\n        };\n    },\n    createElement: function () {\n        return {\n            children: [],\n            childNodes: [],\n            style: {},\n            setAttribute: function () { },\n            getElementsByTagName: function () {\n                return [];\n            },\n        };\n    },\n    createElementNS: function () {\n        return {};\n    },\n    importNode: function () {\n        return null;\n    },\n    location: {\n        hash: '',\n        host: '',\n        hostname: '',\n        href: '',\n        origin: '',\n        pathname: '',\n        protocol: '',\n        search: '',\n    },\n};\nextend(doc, ssrDocument);\n\nvar win = typeof window !== 'undefined' ? window : {};\nvar ssrWindow = {\n    document: ssrDocument,\n    navigator: {\n        userAgent: '',\n    },\n    location: {\n        hash: '',\n        host: '',\n        hostname: '',\n        href: '',\n        origin: '',\n        pathname: '',\n        protocol: '',\n        search: '',\n    },\n    history: {\n        replaceState: function () { },\n        pushState: function () { },\n        go: function () { },\n        back: function () { },\n    },\n    CustomEvent: function CustomEvent() {\n        return this;\n    },\n    addEventListener: function () { },\n    removeEventListener: function () { },\n    getComputedStyle: function () {\n        return {\n            getPropertyValue: function () {\n                return '';\n            },\n        };\n    },\n    Image: function () { },\n    Date: function () { },\n    screen: {},\n    setTimeout: function () { },\n    clearTimeout: function () { },\n    matchMedia: function () {\n        return {};\n    },\n};\nextend(win, ssrWindow);\n\n\n\n\n//# sourceURL=webpack:///./node_modules/ssr-window/dist/ssr-window.esm.js?");

/***/ }),

/***/ "./src/js/sliders/sliders-impact.js":
/*!******************************************!*\
  !*** ./src/js/sliders/sliders-impact.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/js/swiper.esm.bundle.js\");\n\nvar sliderArticle = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#article_slider', {\n  loop: true,\n  navigation: {\n    prevEl: '#slider_left',\n    nextEl: '#slider_right'\n  },\n  slidesPerView: 1,\n  breakpoints: {\n    720: {\n      slidesPerView: 2,\n      spaceBetween: 50\n    },\n    1024: {\n      slidesPerView: 3,\n      spaceBetween: 50\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/sliders/sliders-impact.js?");

/***/ }),

/***/ 2:
/*!************************************************!*\
  !*** multi ./src/js/sliders/sliders-impact.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\xampp\\htdocs\\windaid\\wp-content\\themes\\pandoramarketing_theme\\src\\js\\sliders\\sliders-impact.js */\"./src/js/sliders/sliders-impact.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/sliders/sliders-impact.js?");

/***/ })

/******/ });