/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./index.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 전체 css 적용 */\n* {\n    margin: 0;\n    padding: 0;\n}\n/* 영역 분리 */\n#app {\n    display: flex;\n}\n.notion-sidebar-container {\n    width: 20%;\n}\n.notion-content {\n    width: 80%;\n    min-height: 100vh;\n}\n/* 모달 관련 css */\n#modal {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.25);\n    display: none;\n}\n\n.modal-content {\n    background-color: white;\n    margin: 10% auto;\n    padding: 20px;\n    border: 1px solid black;\n    border-radius: 4px;\n    width: 40%;\n}\n#modal button {\n    background-color: rgb(232, 199, 100);\n    width: 30px;\n\n}\n\n/* Sidebar css 적용 */\nnav {\n    width: 100%;\n    min-height: 100vh;\n    background-color: rgb(238, 238, 238);\n    padding-top: 15px;\n    padding-left: 10px;\n}\n.container {\n    width: 100%;\n    display: flex;\n    overflow: hidden;\n    margin: 5px 0px;\n    padding: 5px 0;\n}\n.container:hover {\n    cursor: pointer;\n}\n  \n.container span {\n    flex-grow: 1;\n    overflow: hidden;\n}\ndiv span {\n    flex-grow: 1;\n}\n.notion-sidebar-container button {\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    background: none;\n    border: none;\n    padding: 2px;\n}\n.notion-sidebar-container button:hover {\n    background-color: gray;\n}\n.plus {\n  position:absolute;\n  left: 19%;\n}\n.delete {\n  position:absolute;\n  left: 17%;\n}\n.toggle {\n    display: block !important;\n}\n/* content css 적용 */\n.notion-content {\n    padding-top: 96px;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-content: center;\n}\n.content-title {\n    width: 600px;\n    height: 40px;\n    border: none;\n    outline: none;\n    font-size: 36px;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n/* Editor css 적용 */\n.toolbar {\n    width: 600px;\n    height: 40px;\n    padding: 8px;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n.toolbar button {\n    height: 24px;\n    padding: 4px;\n    border: 1px solid black;\n    background-color: white;\n    cursor: pointer;\n}\n.toolbar button:hover {\n    background-color: gray;\n}\n.editor {\n    width: 600px;\n    height: 600px;\n    padding: 16px;\n    margin-top: 8px;\n    font-size: 18px;\n    border-radius: 4px;\n    outline: none;\n    box-sizing: border-box;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.js */ \"./src/Sidebar.js\");\n/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.js */ \"./src/Content.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\n\n\n\nfunction App({ $sidebarTarget, $contentTarget }) {\n  const { pathname } = window.location;\n  const [, check, contentId] = pathname.split(\"/\");\n  const $notionContent = document.getElementsByClassName(\"notion-content\")[0];\n\n  async function onChange(id) {\n    const documents = await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.request)(`/documents/${id}`, {\n      method: \"GET\",\n    });\n    content.setState(documents);\n    $notionContent.style.display = \"flex\";\n  }\n\n  if (check === \"content\") {\n    onChange(contentId);\n  }\n\n  new _Sidebar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    $target: $sidebarTarget,\n    initialState: \"\",\n    onChange,\n  });\n  const content = new _Content_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    $target: $contentTarget,\n    initialState: \"\",\n    onEditing: async (title, content) => {\n      const { pathname } = window.location;\n      const [, , requestId] = pathname.split(\"/\");\n      await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.request)(`/documents/${requestId}`, {\n        method: \"PUT\",\n        body: JSON.stringify({\n          title,\n          content,\n        }),\n      });\n    },\n  });\n}\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./src/App.js?");

/***/ }),

/***/ "./src/Content.js":
/*!************************!*\
  !*** ./src/Content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var _Editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.js */ \"./src/Editor.js\");\n\n\nfunction Content({ $target, initialState, onEditing }) {\n  const $title = document.createElement(\"input\");\n  $title.name = \"title\";\n  $title.className = \"content-title\";\n  $target.appendChild($title);\n\n  new _Editor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($target, onEditing);\n  const $content = document.getElementsByClassName(\"editor\")[0];\n\n  this.state = initialState;\n\n  this.setState = (nextState) => {\n    this.state = nextState;\n    this.render();\n  };\n\n  this.render = () => {\n    $title.value = this.state.title;\n    $content.innerHTML = this.state.content;\n  };\n  this.render();\n\n  let timer = null;\n\n  const updateState = async (name, e) => {\n    if (this.state[name] !== undefined) {\n      const nextState = {\n        ...this.state,\n        [name]: name === \"title\" ? e.target.value : e.target.innerHTML,\n      };\n      this.setState(nextState);\n      onEditing(this.state.title, this.state.content);\n    }\n  };\n\n  $target.addEventListener(\"keyup\", (e) => {\n    const name = e.target.name;\n    if (name === \"title\") {\n      const { pathname } = window.location;\n      const [, , id] = pathname.split(\"/\");\n      const divElement = document.querySelector(`div[data-id=\"${id}\"]`);\n\n      for (let i = 0; i < divElement.children.length; i++) {\n        if (divElement.children[i].tagName === \"SPAN\") {\n          divElement.children[i].textContent = e.target.value;\n          break;\n        }\n      }\n    }\n\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      updateState(name, e);\n    }, 1000);\n  });\n}\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./src/Content.js?");

/***/ }),

/***/ "./src/Editor.js":
/*!***********************!*\
  !*** ./src/Editor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\nfunction Editor($target, onEditing) {\n  const $toolbar = document.createElement(\"div\");\n  $toolbar.className = \"toolbar\";\n  $toolbar.innerHTML = `\n        <button data-command=\"bold\">Bold</button>\n        <button data-command=\"italic\">Italic</button>\n        <button data-command=\"justifyLeft\">Align Left</button>\n        <button data-command=\"justifyCenter\">Align center</button>\n        <button data-command=\"justifyRight\">Align Right</button>\n    `;\n  $toolbar.addEventListener(\"click\", (e) => {\n    document.execCommand(e.target.getAttribute(\"data-command\"));\n    const $title = document.getElementsByClassName(\"content-title\")[0];\n    const $editor = document.getElementsByClassName(\"editor\")[0];\n    onEditing($title.value, $editor.innerHTML);\n  });\n\n  const $editor = document.createElement(\"div\");\n  $editor.className = \"editor\";\n  $editor.contentEditable = true;\n  $editor.name = \"content\";\n\n  $target.appendChild($toolbar);\n  $target.appendChild($editor);\n}\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./src/Editor.js?");

/***/ }),

/***/ "./src/Modal.js":
/*!**********************!*\
  !*** ./src/Modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\n\nfunction modal(fetchSidebar) {\n  const $modal = document.getElementById(\"modal\");\n  const $submitModal = document.getElementById(\"submit-modal\");\n  const $modalInput = document.getElementById(\"modal-input-title\");\n\n  let isLoading = false;\n\n  const handleModalSubmit = () => {\n    if (isLoading) return;\n\n    const { pathname } = window.location;\n    const [, , id] = pathname.split(\"/\");\n    const input = document.getElementById(\"modal-input-title\");\n\n    $modal.style.display = \"none\";\n    isLoading = true;\n\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.request)(\"/documents\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        title: input.value,\n        parent: id,\n      }),\n    })\n      .then(() => {\n        input.value = \"\";\n        fetchSidebar();\n      })\n      .finally(() => {\n        isLoading = false;\n      });\n  };\n\n  $submitModal.addEventListener(\"click\", handleModalSubmit);\n\n  $modalInput.addEventListener(\"keydown\", (event) => {\n    if (event.key === \"Enter\") {\n      handleModalSubmit();\n    }\n  });\n}\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./src/Modal.js?");

/***/ }),

/***/ "./src/Sidebar.js":
/*!************************!*\
  !*** ./src/Sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.js */ \"./src/Modal.js\");\n\n\n\nfunction navDraw(documents, $target, fetchSidebar, onChange) {\n  const $div = document.createElement(\"div\");\n\n  if ($target.parentNode.className !== \"notion-sidebar-container\")\n    $div.style.setProperty(\"display\", \"none\");\n\n  addData($div, documents, fetchSidebar, onChange);\n\n  // 마지막에 자식노드 바꾸기\n  const secondChild = $target.children[1];\n  if (secondChild) $target.replaceChild($div, $target.children[1]);\n  else $target.appendChild($div);\n}\n\nfunction addData($target, documents, fetchSidebar, onChange) {\n  // 데이터 추가하기\n  for (let i = 0; i < documents.length; i++) {\n    const $list = document.createElement(\"div\");\n    $list.setAttribute(\"data-id\", documents[i].id);\n    $list.className = \"container\";\n    $list.addEventListener(\"click\", (e) => {\n      const id = e.target.closest(\".container\").getAttribute(\"data-id\");\n      history.pushState(null, null, `/content/${id}`);\n      onChange(id);\n    });\n\n    $list.addEventListener(\"mouseover\", (e) => {\n      if (e.target.tagName === \"SPAN\") {\n        e.target.parentNode.style.backgroundColor = \"lightgray\";\n      }\n    });\n\n    $list.addEventListener(\"mouseout\", (e) => {\n      if (e.target.tagName === \"SPAN\") {\n        e.target.parentNode.style.backgroundColor = \"\";\n      }\n    });\n\n    const $toggleButton = document.createElement(\"button\");\n    $toggleButton.innerText = \">\";\n    $toggleButton.addEventListener(\"click\", (e) => {\n      e.stopPropagation();\n      const childNode = e.target.nextSibling.childNodes;\n      for (let i = 0; i < childNode.length; i++) {\n        if (childNode[i].nodeName === \"DIV\")\n          childNode[i].classList.toggle(\"toggle\");\n      }\n    });\n    $list.appendChild($toggleButton);\n\n    const $span = document.createElement(\"span\");\n    $span.innerText = documents[i].title;\n    $list.appendChild($span);\n\n    const $deleteButton = document.createElement(\"button\");\n    $deleteButton.innerText = \"-\";\n    $deleteButton.className = \"delete\";\n    $deleteButton.addEventListener(\"click\", async (e) => {\n      const id = e.target.parentNode.getAttribute(\"data-id\");\n      await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.request)(`/documents/${id}`, {\n        method: \"DELETE\",\n      });\n      fetchSidebar();\n    });\n    $list.appendChild($deleteButton);\n\n    buttonModal($list);\n    $target.append($list);\n\n    if (documents[i].documents.length !== 0)\n      navDraw(documents[i].documents, $span);\n  }\n}\n\nfunction buttonModal($target) {\n  const $button = document.createElement(\"button\");\n  const $modal = document.getElementById(\"modal\");\n\n  $button.innerText = \"+\";\n  $button.className = \"plus\";\n\n  $button.addEventListener(\"click\", (e) => {\n    $modal.style.display = \"block\";\n  });\n  $target.appendChild($button);\n}\n\nfunction Sidebar({ $target, initialState, onChange }) {\n  const fetchSidebar = async () => {\n    const documents = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.request)(\"/documents\");\n    this.setState(documents);\n  };\n  (0,_Modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fetchSidebar);\n  const $nav = document.createElement(\"nav\");\n  $nav.innerText = \"사이드바\";\n\n  $target.appendChild($nav);\n  buttonModal($nav, fetchSidebar);\n  fetchSidebar();\n\n  this.state = initialState;\n\n  this.setState = (nextState) => {\n    this.state = nextState;\n    this.render();\n  };\n\n  this.render = () => {\n    navDraw(this.state, $nav, fetchSidebar, onChange);\n  };\n\n  this.render();\n}\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./src/Sidebar.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_END_POINT: () => (/* binding */ API_END_POINT),\n/* harmony export */   request: () => (/* binding */ request)\n/* harmony export */ });\nconst API_END_POINT = \"https://kdt-frontend.programmers.co.kr\";\n\nconst request = async (url, options = {}) => {\n  try {\n    const res = await fetch(`${API_END_POINT}${url}`, {\n      ...options,\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"x-username\": \"SongInJae\",\n      },\n    });\n\n    if (res.ok) return await res.json();\n    throw new Error(\"API 처리 중 오류가 발생했습니다.\");\n  } catch (e) {\n    alert(e.message);\n  }\n};\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./src/api.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ \"./index.css\");\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n\n\n\nconst $sidebarTarget = document.getElementsByClassName(\n  \"notion-sidebar-container\"\n)[0];\nconst $contentTarget = document.getElementsByClassName(\"notion-content\")[0];\n\nnew _App_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ $sidebarTarget, $contentTarget });\n\n\n//# sourceURL=webpack://fedc4-5_project_notion_vanillajs/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;