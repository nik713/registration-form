/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shared/v-dom/index.js":
/*!***********************************!*\
  !*** ./src/shared/v-dom/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "patch": () => (/* binding */ patch)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TEXT_NODE_TYPE = 3;
var h = function h(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return {
    type: type,
    props: props,
    children: children
  };
};
var patchProp = function patchProp(node, key, val, nextVal) {
  if (key.startsWith('on')) {
    var eventName = key.slice(2);
    node[eventName] = nextVal;
    if (!nextVal) {
      node.removeEventListener(eventName, listener);
    } else if (!val) {
      node.addEventListener(eventName, listener);
    }
    return;
  }
  if (node.tagName === 'INPUT') {
    node[key] = nextVal;
  }
  if (nextVal === undefined || nextVal === null || nextVal === false) {
    node.removeAttribute(key);
    return;
  }
  node.setAttribute(key, nextVal);
};
var patchProps = function patchProps(node, props, nextProps) {
  var mergedProps = _objectSpread(_objectSpread({}, props), nextProps);
  Object.keys(mergedProps).forEach(function (key) {
    if (props[key] !== nextProps[key]) {
      patchProp(node, key, props[key], nextProps[key]);
    }
  });
};
var patchChildren = function patchChildren(parent, vChildren, nextVChildren) {
  parent.childNodes.forEach(function (childNode, idx) {
    if (vChildren[idx] && nextVChildren[idx] && vChildren[idx].type === nextVChildren[idx].type) {
      patchNode(childNode, vChildren[idx], nextVChildren[idx]);
    } else {
      var nextNode = createDOMNode(nextVChildren[idx]);
      childNode.replaceWith(nextNode);
    }
  });
  nextVChildren.slice(vChildren.length).forEach(function (vChild) {
    parent.append(createDOMNode(vChild));
  });
};
var createDOMNode = function createDOMNode(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }
  if (vNode) {
    var type = vNode.type,
      props = vNode.props,
      children = vNode.children;
    var node = document.createElement(type);
    patchProps(node, {}, props);
    children.forEach(function (child) {
      node.append(createDOMNode(child));
    });
    return node;
  } else {
    return '';
  }
};
var patchNode = function patchNode(node, vNode, nextVNode) {
  if (nextVNode === undefined || nextVNode === null || nextVNode === false) {
    node.remove();
    return;
  }
  if (typeof vNode === 'string' || typeof nextVNode === 'string') {
    if (vNode !== nextVNode) {
      var nextNode = createDOMNode(nextVNode);
      node.replaceWith(nextNode);
      return nextNode;
    }
    return node;
  }
  if (vNode.type !== nextVNode.type) {
    var _nextNode = createDOMNode(nextVNode);
    node.replaceWith(_nextNode);
    return _nextNode;
  }
  patchProps(node, vNode.props, nextVNode.props);
  patchChildren(node, vNode.children, nextVNode.children);
  return node;
};
var recycleNode = function recycleNode(node) {
  if (node.nodeType === TEXT_NODE_TYPE) {
    return node.nodeValue;
  }
  var type = node.nodeName.toLowerCase();
  var children = [].map.call(node.childNodes, recycleNode);
  return h(type, {}, children);
};
var patch = function patch(nextVNode, node) {
  var vNode = node.v || recycleNode(node);
  node = patchNode(node, vNode, nextVNode);
  node.v = nextVNode;
  return node;
};
function listener(event) {
  return this[event.type](event);
}

/***/ }),

/***/ "./src/shared/validation-patterns/index.js":
/*!*************************************************!*\
  !*** ./src/shared/validation-patterns/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailPattern": () => (/* binding */ emailPattern),
/* harmony export */   "passwordPattern": () => (/* binding */ passwordPattern)
/* harmony export */ });
var passwordPattern = /^(?=.*[A-Z])(?=.*[1-9])(?=.*[!@#$%])[A-Za-z1-9!@#$%]{8,}$/g;
var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/***/ }),

/***/ "./src/store/form/index.js":
/*!*********************************!*\
  !*** ./src/store/form/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
var store = {
  state: {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: '',
    confirmPassword: '',
    isShowValidMessages: false
  },
  onStateChanged: function onStateChanged() {},
  setState: function setState(nextState) {
    this.state = nextState;
    this.onStateChanged();
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Nunito\", sans-serif;\n}\n\nhtml {\n  height: 100vh;\n  font-size: 16px;\n}\n\nbody {\n  display: grid;\n  place-content: center;\n  max-height: 100%;\n  height: 100%;\n}\n\ninput {\n  outline: none;\n  border: none;\n  padding: 0;\n}\n\n.app {\n  padding: 1rem;\n}\n\n.form {\n  display: grid;\n  gap: 1rem;\n  max-width: 25rem;\n  min-width: 17rem;\n  padding: 2rem;\n  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.14);\n  border-radius: 0.75rem;\n}\n@media (min-width: 48rem) {\n  .form {\n    min-width: 25rem;\n  }\n}\n\n.input-wrapper {\n  display: grid;\n  row-gap: 0.3rem;\n}\n.input-wrapper__error-message {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.125rem;\n  font-style: italic;\n  color: #ff7676;\n}\n\n.input {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.5rem 0.75rem;\n  border: 0.0625rem solid #dcdee2;\n  border-radius: 0.25rem;\n  background-color: #ffffff;\n}\n.input:hover {\n  box-shadow: 0 0.25rem 1.3125rem rgba(50, 63, 86, 0.11);\n}\n.input:focus {\n  outline: 1px solid black;\n}\n\n.button {\n  display: grid;\n  place-content: center;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n  min-width: 6rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  background-color: #26b057;\n  color: #ffffff;\n}\n.button:hover {\n  background-color: #4fdb81;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/mixins/mixins.scss","webpack://./src/styles/vars/vars.scss"],"names":[],"mappings":"AAIA;EACE,sBAAA;AAFF;;AAKA;EACE,SAAA;EACA,UAAA;EACA,iCAAA;AAFF;;AAKA;EACE,aAAA;EACA,eAAA;AAFF;;AAKA;EACE,aAAA;EACA,qBAAA;EACA,gBAAA;EACA,YAAA;AAFF;;AAKA;EACE,aAAA;EACA,YAAA;EACA,UAAA;AAFF;;AAKA;EACE,aAAA;AAFF;;AAKA;EACE,aAAA;EACA,SAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,4CAAA;EACA,sBAAA;AAFF;AAIE;EATF;IAUI,gBAAA;EADF;AACF;;AAIA;EACE,aAAA;EACA,eAAA;AADF;AAGE;EACE,aAAA;EACA,mBAAA;EC/CF,mBAAA;EACA,gBAAA;EACA,qBAAA;ED+CE,kBAAA;EACA,cEvDe;AFwDnB;;AAGA;EACE,WAAA;EACA,sBAAA;EACA,uBAAA;EACA,+BAAA;EACA,sBAAA;EACA,yBEhEkB;AFgEpB;AAEE;EACE,sDAAA;AAAJ;AAGE;EACE,wBAAA;AADJ;;AAKA;EACE,aAAA;EACA,qBAAA;EACA,YAAA;EACA,eAAA;ECjFA,eAAA;EACA,gBAAA;EACA,mBAAA;EDiFA,eAAA;EACA,oBAAA;EACA,sBAAA;EACA,yBEtFmB;EFuFnB,cErFkB;AFqFpB;AAEE;EACE,yBE3FgB;AF2FpB","sourcesContent":["@use './fonts/fonts';\r\n@use './vars/vars';\r\n@use './mixins/mixins';\r\n\r\n:root {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Nunito', sans-serif;\r\n}\r\n\r\nhtml {\r\n  height: 100vh;\r\n  font-size: 16px;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  place-content: center;\r\n  max-height: 100%;\r\n  height: 100%;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.app {\r\n  padding: 1rem;\r\n}\r\n\r\n.form {\r\n  display: grid;\r\n  gap: 1rem;\r\n  max-width: 25rem;\r\n  min-width: 17rem;\r\n  padding: 2rem;\r\n  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.14);\r\n  border-radius: 0.75rem;\r\n\r\n  @media (min-width: 48rem) {\r\n    min-width: 25rem;\r\n  }\r\n}\r\n\r\n.input-wrapper {\r\n  display: grid;\r\n  row-gap: 0.3rem;\r\n\r\n  &__error-message {\r\n    display: flex;\r\n    align-items: center;\r\n    @include mixins.text-sm-semi-bold;\r\n    font-style: italic;\r\n    color: vars.$color-red-medium;\r\n  }\r\n}\r\n\r\n.input {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0.5rem 0.75rem;\r\n  border: 0.0625rem solid vars.$color-grey-lighter;\r\n  border-radius: 0.25rem;\r\n  background-color: vars.$color-white-light;\r\n\r\n  &:hover {\r\n    box-shadow: 0 0.25rem 1.3125rem rgba(vars.$color-blue-harder, 0.11);\r\n  }\r\n\r\n  &:focus {\r\n    outline: 1px solid black;\r\n  }\r\n}\r\n\r\n.button {\r\n  display: grid;\r\n  place-content: center;\r\n  border: none;\r\n  cursor: pointer;\r\n  @include mixins.text-md-semi-bold;\r\n  min-width: 6rem;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 0.25rem;\r\n  background-color: vars.$color-green-medium;\r\n  color: vars.$color-white-light;\r\n\r\n  &:hover {\r\n    background-color: vars.$color-green-light;\r\n  }\r\n}","@use './src/styles/vars/vars';\r\n\r\n@mixin text-md-semi-bold {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n@mixin text-sm-semi-bold {\r\n  font-size: 0.875rem;\r\n  font-weight: 600;\r\n  line-height: 1.125rem;\r\n}\r\n","$color-grey-lighter: #dcdee2;\r\n$color-blue-harder: #323F5636;\r\n$color-green-light: #4fdb81;\r\n$color-green-medium: #26b057;\r\n$color-red-medium: #ff7676;\r\n$color-white-light: #ffffff;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationForm": () => (/* binding */ RegistrationForm)
/* harmony export */ });
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _shared_v_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/v-dom */ "./src/shared/v-dom/index.js");
/* harmony import */ var _shared_validation_patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/validation-patterns */ "./src/shared/validation-patterns/index.js");
/* harmony import */ var _store_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/form */ "./src/store/form/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var container = document.createElement('div');
document.body.append(container);
var root = container;
var RegistrationForm = function RegistrationForm(store) {
  var _store$state = store.state,
    firstName = _store$state.firstName,
    lastName = _store$state.lastName,
    birthDate = _store$state.birthDate,
    email = _store$state.email,
    password = _store$state.password,
    confirmPassword = _store$state.confirmPassword;
  var isShowValidMessages = store.state.isShowValidMessages;
  var validateForm = function validateForm() {
    var invalid = true;
    switch (invalid) {
      case firstName.length < 2 || firstName.length > 25:
      case lastName.length < 2 || lastName.length > 25:
      case !birthDate.length:
      case !email.length:
      case !email.match(_shared_validation_patterns__WEBPACK_IMPORTED_MODULE_2__.emailPattern):
      case !password.match(_shared_validation_patterns__WEBPACK_IMPORTED_MODULE_2__.passwordPattern):
      case !confirmPassword.match(_shared_validation_patterns__WEBPACK_IMPORTED_MODULE_2__.passwordPattern):
      case password !== confirmPassword:
        return false;
      default:
        return true;
    }
  };
  var handleOnChange = function handleOnChange(e) {
    e.preventDefault();
    store.setState(_objectSpread(_objectSpread({}, store.state), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleOnSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var isValidForm, response, payload;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isValidForm = validateForm();
            if (!isValidForm) {
              _context.next = 18;
              break;
            }
            _context.prev = 2;
            _context.next = 5;
            return fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify(store.state)
            });
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            payload = _context.sent;
            console.log(payload);
            store.setState({
              firstName: '',
              lastName: '',
              birthDate: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0);
          case 16:
            _context.next = 19;
            break;
          case 18:
            store.setState(_objectSpread(_objectSpread({}, store.state), {}, {
              isShowValidMessages: true
            }));
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 13]]);
    }));
    return function handleOnSubmit() {
      return _ref.apply(this, arguments);
    };
  }();
  return (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'app'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('form', {
    "class": 'form'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('label', {}, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('input', {
    "class": 'input',
    name: 'firstName',
    type: 'text',
    value: firstName,
    placeholder: 'Имя',
    oninput: handleOnChange
  })]), isShowValidMessages ? !firstName.length && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пожалуйста укажите Имя']) || (firstName.length < 2 || firstName.length > 25) && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Неверная длинна имени']) : false]), (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('label', {}, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('input', {
    "class": 'input',
    name: 'lastName',
    type: 'text',
    value: lastName,
    placeholder: 'Фамилия',
    oninput: handleOnChange
  })]), isShowValidMessages ? !lastName.length && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пожалуйста укажите Фамилию']) || (lastName.length < 2 || lastName.length > 25) && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Неверная длинна фамилии']) : false]), (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('label', {}, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('input', {
    "class": 'input',
    name: 'birthDate',
    type: 'date',
    value: birthDate,
    placeholder: 'Дата рождения',
    max: new Date().toISOString().slice(0, 10),
    onchange: handleOnChange
  })]), isShowValidMessages ? !birthDate.length && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пожалуйста укажите дату рождения']) : false]), (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('label', {}, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('input', {
    "class": 'input',
    name: 'email',
    type: 'email',
    value: email,
    placeholder: 'Электронная почта',
    oninput: handleOnChange
  })]), isShowValidMessages ? !email.length && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пожалуйста укажите электронную почту']) : false]), (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('label', {}, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('input', {
    "class": 'input',
    name: 'password',
    type: 'password',
    value: password,
    placeholder: 'Пароль',
    oninput: handleOnChange
  })]), isShowValidMessages ? !password.length && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пожалуйста укажите пароль']) || !password.match(_shared_validation_patterns__WEBPACK_IMPORTED_MODULE_2__.passwordPattern) && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пароль должен содержать минимум 1 символ верхнего регистра, цифру от 1-9 и символ !@$#% ']) : false]), (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper'
  }, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('label', {}, [(0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('input', {
    "class": 'input',
    name: 'confirmPassword',
    type: 'password',
    value: confirmPassword,
    placeholder: 'Подтверждение пароля',
    oninput: handleOnChange
  })]), isShowValidMessages ? !confirmPassword.length && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пожалуйста укажите пароль']) || password !== confirmPassword && (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('div', {
    "class": 'input-wrapper__error-message'
  }, ['Пароли не совпадают']) : false]), (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.h)('button', {
    type: 'button',
    onclick: handleOnSubmit,
    "class": 'button'
  }, ['Отправить'])])]);
};
var app = (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.patch)(RegistrationForm(_store_form__WEBPACK_IMPORTED_MODULE_3__.store), root);
_store_form__WEBPACK_IMPORTED_MODULE_3__.store.onStateChanged = function () {
  (0,_shared_v_dom__WEBPACK_IMPORTED_MODULE_1__.patch)(RegistrationForm(_store_form__WEBPACK_IMPORTED_MODULE_3__.store), app);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNjI1OGE1YjgyZjhhZDI5YmY1NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUNqQixJQUFNQyxDQUFDLEdBQUcsU0FBSkEsQ0FBQ0EsQ0FBSUMsSUFBSSxFQUFnQztFQUFBLElBQTlCQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztFQUFBLElBQUVHLFFBQVEsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsRUFBRTtFQUMvQyxPQUFPO0lBQUVGLElBQUksRUFBSkEsSUFBSTtJQUFFQyxLQUFLLEVBQUxBLEtBQUs7SUFBRUksUUFBUSxFQUFSQTtFQUFTLENBQUM7QUFDbEMsQ0FBQztBQUVELElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUs7RUFDN0MsSUFBSUYsR0FBRyxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDeEIsSUFBTUMsU0FBUyxHQUFHSixHQUFHLENBQUNLLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFOUJOLElBQUksQ0FBQ0ssU0FBUyxDQUFDLEdBQUdGLE9BQU87SUFFekIsSUFBSSxDQUFDQSxPQUFPLEVBQUU7TUFDWkgsSUFBSSxDQUFDTyxtQkFBbUIsQ0FBQ0YsU0FBUyxFQUFFRyxRQUFRLENBQUM7SUFDL0MsQ0FBQyxNQUFNLElBQUksQ0FBQ04sR0FBRyxFQUFFO01BQ2ZGLElBQUksQ0FBQ1MsZ0JBQWdCLENBQUNKLFNBQVMsRUFBRUcsUUFBUSxDQUFDO0lBQzVDO0lBQ0E7RUFDRjtFQUNBLElBQUlSLElBQUksQ0FBQ1UsT0FBTyxLQUFLLE9BQU8sRUFBRTtJQUM1QlYsSUFBSSxDQUFDQyxHQUFHLENBQUMsR0FBR0UsT0FBTztFQUNyQjtFQUVBLElBQUlBLE9BQU8sS0FBS04sU0FBUyxJQUFJTSxPQUFPLEtBQUssSUFBSSxJQUFJQSxPQUFPLEtBQUssS0FBSyxFQUFFO0lBQ2xFSCxJQUFJLENBQUNXLGVBQWUsQ0FBQ1YsR0FBRyxDQUFDO0lBQ3pCO0VBQ0Y7RUFDQUQsSUFBSSxDQUFDWSxZQUFZLENBQUNYLEdBQUcsRUFBRUUsT0FBTyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSWIsSUFBSSxFQUFFTixLQUFLLEVBQUVvQixTQUFTLEVBQUs7RUFDN0MsSUFBTUMsV0FBVyxHQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FBUXRCLEtBQUssR0FBS29CLFNBQVMsQ0FBRTtFQUU5Q0csTUFBTSxDQUFDQyxJQUFJLENBQUNILFdBQVcsQ0FBQyxDQUFDSSxPQUFPLENBQUMsVUFBQ2xCLEdBQUcsRUFBSztJQUN4QyxJQUFJUCxLQUFLLENBQUNPLEdBQUcsQ0FBQyxLQUFLYSxTQUFTLENBQUNiLEdBQUcsQ0FBQyxFQUFFO01BQ2pDRixTQUFTLENBQUNDLElBQUksRUFBRUMsR0FBRyxFQUFFUCxLQUFLLENBQUNPLEdBQUcsQ0FBQyxFQUFFYSxTQUFTLENBQUNiLEdBQUcsQ0FBQyxDQUFDO0lBQ2xEO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQU1tQixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUs7RUFDMURGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDTCxPQUFPLENBQUMsVUFBQ00sU0FBUyxFQUFFQyxHQUFHLEVBQUs7SUFDNUMsSUFBSUosU0FBUyxDQUFDSSxHQUFHLENBQUMsSUFBSUgsYUFBYSxDQUFDRyxHQUFHLENBQUMsSUFBSUosU0FBUyxDQUFDSSxHQUFHLENBQUMsQ0FBQ2pDLElBQUksS0FBSzhCLGFBQWEsQ0FBQ0csR0FBRyxDQUFDLENBQUNqQyxJQUFJLEVBQUU7TUFDM0ZrQyxTQUFTLENBQUNGLFNBQVMsRUFBRUgsU0FBUyxDQUFDSSxHQUFHLENBQUMsRUFBRUgsYUFBYSxDQUFDRyxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDLE1BQU07TUFDTCxJQUFNRSxRQUFRLEdBQUdDLGFBQWEsQ0FBQ04sYUFBYSxDQUFDRyxHQUFHLENBQUMsQ0FBQztNQUNsREQsU0FBUyxDQUFDSyxXQUFXLENBQUNGLFFBQVEsQ0FBQztJQUNqQztFQUNGLENBQUMsQ0FBQztFQUNGTCxhQUFhLENBQUNqQixLQUFLLENBQUNnQixTQUFTLENBQUMxQixNQUFNLENBQUMsQ0FBQ3VCLE9BQU8sQ0FBQyxVQUFDWSxNQUFNLEVBQUs7SUFDeERWLE1BQU0sQ0FBQ1csTUFBTSxDQUFDSCxhQUFhLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0VBQ3RDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxJQUFNRixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlJLEtBQUssRUFBSztFQUMvQixJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDN0IsT0FBT0MsUUFBUSxDQUFDQyxjQUFjLENBQUNGLEtBQUssQ0FBQztFQUN2QztFQUNBLElBQUlBLEtBQUssRUFBRTtJQUNULElBQVF4QyxJQUFJLEdBQXNCd0MsS0FBSyxDQUEvQnhDLElBQUk7TUFBRUMsS0FBSyxHQUFldUMsS0FBSyxDQUF6QnZDLEtBQUs7TUFBRUksUUFBUSxHQUFLbUMsS0FBSyxDQUFsQm5DLFFBQVE7SUFDN0IsSUFBTUUsSUFBSSxHQUFHa0MsUUFBUSxDQUFDRSxhQUFhLENBQUMzQyxJQUFJLENBQUM7SUFDekNvQixVQUFVLENBQUNiLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRU4sS0FBSyxDQUFDO0lBQzNCSSxRQUFRLENBQUNxQixPQUFPLENBQUMsVUFBQ2tCLEtBQUssRUFBSztNQUMxQnJDLElBQUksQ0FBQ2dDLE1BQU0sQ0FBQ0gsYUFBYSxDQUFDUSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFDRixPQUFPckMsSUFBSTtFQUNiLENBQUMsTUFBTTtJQUNMLE9BQU8sRUFBRTtFQUNYO0FBQ0YsQ0FBQztBQUVELElBQU0yQixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSTNCLElBQUksRUFBRWlDLEtBQUssRUFBRUssU0FBUyxFQUFLO0VBQzVDLElBQUlBLFNBQVMsS0FBS3pDLFNBQVMsSUFBSXlDLFNBQVMsS0FBSyxJQUFJLElBQUlBLFNBQVMsS0FBSyxLQUFLLEVBQUU7SUFDeEV0QyxJQUFJLENBQUN1QyxNQUFNLEVBQUU7SUFDYjtFQUNGO0VBQ0EsSUFBSSxPQUFPTixLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU9LLFNBQVMsS0FBSyxRQUFRLEVBQUU7SUFDOUQsSUFBSUwsS0FBSyxLQUFLSyxTQUFTLEVBQUU7TUFDdkIsSUFBTVYsUUFBUSxHQUFHQyxhQUFhLENBQUNTLFNBQVMsQ0FBQztNQUN6Q3RDLElBQUksQ0FBQzhCLFdBQVcsQ0FBQ0YsUUFBUSxDQUFDO01BQzFCLE9BQU9BLFFBQVE7SUFDakI7SUFDQSxPQUFPNUIsSUFBSTtFQUNiO0VBQ0EsSUFBSWlDLEtBQUssQ0FBQ3hDLElBQUksS0FBSzZDLFNBQVMsQ0FBQzdDLElBQUksRUFBRTtJQUNqQyxJQUFNbUMsU0FBUSxHQUFHQyxhQUFhLENBQUNTLFNBQVMsQ0FBQztJQUN6Q3RDLElBQUksQ0FBQzhCLFdBQVcsQ0FBQ0YsU0FBUSxDQUFDO0lBQzFCLE9BQU9BLFNBQVE7RUFDakI7RUFDQWYsVUFBVSxDQUFDYixJQUFJLEVBQUVpQyxLQUFLLENBQUN2QyxLQUFLLEVBQUU0QyxTQUFTLENBQUM1QyxLQUFLLENBQUM7RUFDOUMwQixhQUFhLENBQUNwQixJQUFJLEVBQUVpQyxLQUFLLENBQUNuQyxRQUFRLEVBQUV3QyxTQUFTLENBQUN4QyxRQUFRLENBQUM7RUFDdkQsT0FBT0UsSUFBSTtBQUNiLENBQUM7QUFFRCxJQUFNd0MsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUl4QyxJQUFJLEVBQUs7RUFDNUIsSUFBSUEsSUFBSSxDQUFDeUMsUUFBUSxLQUFLbEQsY0FBYyxFQUFFO0lBQ3BDLE9BQU9TLElBQUksQ0FBQzBDLFNBQVM7RUFDdkI7RUFDQSxJQUFNakQsSUFBSSxHQUFHTyxJQUFJLENBQUMyQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtFQUN4QyxJQUFNOUMsUUFBUSxHQUFHLEVBQUUsQ0FBQytDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDOUMsSUFBSSxDQUFDd0IsVUFBVSxFQUFFZ0IsV0FBVyxDQUFDO0VBQzFELE9BQU9oRCxDQUFDLENBQUNDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRUssUUFBUSxDQUFDO0FBQzlCLENBQUM7QUFFTSxJQUFNaUQsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUlULFNBQVMsRUFBRXRDLElBQUksRUFBSztFQUN4QyxJQUFNaUMsS0FBSyxHQUFHakMsSUFBSSxDQUFDZ0QsQ0FBQyxJQUFJUixXQUFXLENBQUN4QyxJQUFJLENBQUM7RUFDekNBLElBQUksR0FBRzJCLFNBQVMsQ0FBQzNCLElBQUksRUFBRWlDLEtBQUssRUFBRUssU0FBUyxDQUFDO0VBQ3hDdEMsSUFBSSxDQUFDZ0QsQ0FBQyxHQUFHVixTQUFTO0VBQ2xCLE9BQU90QyxJQUFJO0FBQ2IsQ0FBQztBQUVELFNBQVNRLFFBQVFBLENBQUN5QyxLQUFLLEVBQUU7RUFDdkIsT0FBTyxJQUFJLENBQUNBLEtBQUssQ0FBQ3hELElBQUksQ0FBQyxDQUFDd0QsS0FBSyxDQUFDO0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7QUMvR08sSUFBTUMsZUFBZSxHQUFHLDREQUE0RDtBQUNwRixJQUFNQyxZQUFZLEdBQUcsc0VBQXNFOzs7Ozs7Ozs7Ozs7OztBQ0QzRixJQUFNQyxLQUFLLEdBQUc7RUFDbkJDLEtBQUssRUFBRTtJQUNMQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxlQUFlLEVBQUUsRUFBRTtJQUNuQkMsbUJBQW1CLEVBQUU7RUFDdkIsQ0FBQztFQUNEQyxjQUFjLEVBQUUsU0FBQUEsZUFBQSxFQUFNLENBQUMsQ0FBQztFQUN4QkMsUUFBUSxXQUFBQSxTQUFDQyxTQUFTLEVBQUU7SUFDbEIsSUFBSSxDQUFDVixLQUFLLEdBQUdVLFNBQVM7SUFDdEIsSUFBSSxDQUFDRixjQUFjLEVBQUU7RUFDdkI7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRDtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySTtBQUNBLGlEQUFpRCwyQkFBMkIsR0FBRyxPQUFPLGNBQWMsZUFBZSx3Q0FBd0MsR0FBRyxVQUFVLGtCQUFrQixvQkFBb0IsR0FBRyxVQUFVLGtCQUFrQiwwQkFBMEIscUJBQXFCLGlCQUFpQixHQUFHLFdBQVcsa0JBQWtCLGlCQUFpQixlQUFlLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxXQUFXLGtCQUFrQixjQUFjLHFCQUFxQixxQkFBcUIsa0JBQWtCLGlEQUFpRCwyQkFBMkIsR0FBRyw2QkFBNkIsV0FBVyx1QkFBdUIsS0FBSyxHQUFHLG9CQUFvQixrQkFBa0Isb0JBQW9CLEdBQUcsaUNBQWlDLGtCQUFrQix3QkFBd0Isd0JBQXdCLHFCQUFxQiwwQkFBMEIsdUJBQXVCLG1CQUFtQixHQUFHLFlBQVksZ0JBQWdCLDJCQUEyQiw0QkFBNEIsb0NBQW9DLDJCQUEyQiw4QkFBOEIsR0FBRyxnQkFBZ0IsMkRBQTJELEdBQUcsZ0JBQWdCLDZCQUE2QixHQUFHLGFBQWEsa0JBQWtCLDBCQUEwQixpQkFBaUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsd0JBQXdCLG9CQUFvQix5QkFBeUIsMkJBQTJCLDhCQUE4QixtQkFBbUIsR0FBRyxpQkFBaUIsOEJBQThCLEdBQUcsT0FBTyw0S0FBNEssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLE9BQU8sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsY0FBYyxPQUFPLEtBQUssYUFBYSxnREFBZ0QsdUJBQXVCLDJCQUEyQixlQUFlLDZCQUE2QixLQUFLLFdBQVcsZ0JBQWdCLGlCQUFpQix3Q0FBd0MsS0FBSyxjQUFjLG9CQUFvQixzQkFBc0IsS0FBSyxjQUFjLG9CQUFvQiw0QkFBNEIsdUJBQXVCLG1CQUFtQixLQUFLLGVBQWUsb0JBQW9CLG1CQUFtQixpQkFBaUIsS0FBSyxjQUFjLG9CQUFvQixLQUFLLGVBQWUsb0JBQW9CLGdCQUFnQix1QkFBdUIsdUJBQXVCLG9CQUFvQixtREFBbUQsNkJBQTZCLHFDQUFxQyx5QkFBeUIsT0FBTyxLQUFLLHdCQUF3QixvQkFBb0Isc0JBQXNCLDRCQUE0QixzQkFBc0IsNEJBQTRCLDBDQUEwQywyQkFBMkIsc0NBQXNDLE9BQU8sS0FBSyxnQkFBZ0Isa0JBQWtCLDZCQUE2Qiw4QkFBOEIsdURBQXVELDZCQUE2QixnREFBZ0QsbUJBQW1CLDRFQUE0RSxPQUFPLG1CQUFtQixpQ0FBaUMsT0FBTyxLQUFLLGlCQUFpQixvQkFBb0IsNEJBQTRCLG1CQUFtQixzQkFBc0Isd0NBQXdDLHNCQUFzQiwyQkFBMkIsNkJBQTZCLGlEQUFpRCxxQ0FBcUMsbUJBQW1CLGtEQUFrRCxPQUFPLEtBQUssaUNBQWlDLGtDQUFrQyxzQkFBc0IsdUJBQXVCLDBCQUEwQixLQUFLLGtDQUFrQywwQkFBMEIsdUJBQXVCLDRCQUE0QixLQUFLLG9DQUFvQyxrQ0FBa0MsZ0NBQWdDLGlDQUFpQywrQkFBK0IsZ0NBQWdDLHVCQUF1QjtBQUM5cEo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NDQSxxSkFBQUcsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQWpELE1BQUEsQ0FBQWtELFNBQUEsRUFBQUMsTUFBQSxHQUFBRixFQUFBLENBQUFHLGNBQUEsRUFBQUMsY0FBQSxHQUFBckQsTUFBQSxDQUFBcUQsY0FBQSxjQUFBQyxHQUFBLEVBQUF0RSxHQUFBLEVBQUF1RSxJQUFBLElBQUFELEdBQUEsQ0FBQXRFLEdBQUEsSUFBQXVFLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWCxHQUFBLEVBQUF0RSxHQUFBLEVBQUF3RSxLQUFBLFdBQUF4RCxNQUFBLENBQUFxRCxjQUFBLENBQUFDLEdBQUEsRUFBQXRFLEdBQUEsSUFBQXdFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZCxHQUFBLENBQUF0RSxHQUFBLFdBQUFpRixNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVgsR0FBQSxFQUFBdEUsR0FBQSxFQUFBd0UsS0FBQSxXQUFBRixHQUFBLENBQUF0RSxHQUFBLElBQUF3RSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF0QixTQUFBLFlBQUEwQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3RSxNQUFBLENBQUE4RSxNQUFBLENBQUFILGNBQUEsQ0FBQXpCLFNBQUEsR0FBQTZCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBckIsY0FBQSxDQUFBd0IsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE3QixHQUFBLEVBQUE4QixHQUFBLG1CQUFBNUcsSUFBQSxZQUFBNEcsR0FBQSxFQUFBRCxFQUFBLENBQUF0RCxJQUFBLENBQUF5QixHQUFBLEVBQUE4QixHQUFBLGNBQUFmLEdBQUEsYUFBQTdGLElBQUEsV0FBQTRHLEdBQUEsRUFBQWYsR0FBQSxRQUFBckIsT0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFlLGdCQUFBLGdCQUFBVCxVQUFBLGNBQUFVLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF2QixNQUFBLENBQUF1QixpQkFBQSxFQUFBN0IsY0FBQSxxQ0FBQThCLFFBQUEsR0FBQXpGLE1BQUEsQ0FBQTBGLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBMUMsRUFBQSxJQUFBRSxNQUFBLENBQUF0QixJQUFBLENBQUE4RCx1QkFBQSxFQUFBaEMsY0FBQSxNQUFBNkIsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBckMsU0FBQSxHQUFBMEIsU0FBQSxDQUFBMUIsU0FBQSxHQUFBbEQsTUFBQSxDQUFBOEUsTUFBQSxDQUFBVSxpQkFBQSxZQUFBTSxzQkFBQTVDLFNBQUEsZ0NBQUFoRCxPQUFBLFdBQUE2RixNQUFBLElBQUE5QixNQUFBLENBQUFmLFNBQUEsRUFBQTZDLE1BQUEsWUFBQVgsR0FBQSxnQkFBQVksT0FBQSxDQUFBRCxNQUFBLEVBQUFYLEdBQUEsc0JBQUFhLGNBQUFwQixTQUFBLEVBQUFxQixXQUFBLGFBQUFDLE9BQUFKLE1BQUEsRUFBQVgsR0FBQSxFQUFBZ0IsT0FBQSxFQUFBQyxNQUFBLFFBQUFDLE1BQUEsR0FBQXBCLFFBQUEsQ0FBQUwsU0FBQSxDQUFBa0IsTUFBQSxHQUFBbEIsU0FBQSxFQUFBTyxHQUFBLG1CQUFBa0IsTUFBQSxDQUFBOUgsSUFBQSxRQUFBK0gsTUFBQSxHQUFBRCxNQUFBLENBQUFsQixHQUFBLEVBQUE1QixLQUFBLEdBQUErQyxNQUFBLENBQUEvQyxLQUFBLFNBQUFBLEtBQUEsZ0JBQUFnRCxPQUFBLENBQUFoRCxLQUFBLEtBQUFMLE1BQUEsQ0FBQXRCLElBQUEsQ0FBQTJCLEtBQUEsZUFBQTBDLFdBQUEsQ0FBQUUsT0FBQSxDQUFBNUMsS0FBQSxDQUFBaUQsT0FBQSxFQUFBQyxJQUFBLFdBQUFsRCxLQUFBLElBQUEyQyxNQUFBLFNBQUEzQyxLQUFBLEVBQUE0QyxPQUFBLEVBQUFDLE1BQUEsZ0JBQUFoQyxHQUFBLElBQUE4QixNQUFBLFVBQUE5QixHQUFBLEVBQUErQixPQUFBLEVBQUFDLE1BQUEsUUFBQUgsV0FBQSxDQUFBRSxPQUFBLENBQUE1QyxLQUFBLEVBQUFrRCxJQUFBLFdBQUFDLFNBQUEsSUFBQUosTUFBQSxDQUFBL0MsS0FBQSxHQUFBbUQsU0FBQSxFQUFBUCxPQUFBLENBQUFHLE1BQUEsZ0JBQUFLLEtBQUEsV0FBQVQsTUFBQSxVQUFBUyxLQUFBLEVBQUFSLE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQWxCLEdBQUEsU0FBQXlCLGVBQUEsRUFBQXhELGNBQUEsb0JBQUFHLEtBQUEsV0FBQUEsTUFBQXVDLE1BQUEsRUFBQVgsR0FBQSxhQUFBMEIsMkJBQUEsZUFBQVosV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFYLEdBQUEsRUFBQWdCLE9BQUEsRUFBQUMsTUFBQSxnQkFBQVEsZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTdCLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBM0MsS0FBQSxzQ0FBQTJELE1BQUEsRUFBQVgsR0FBQSx3QkFBQWhELEtBQUEsWUFBQTJFLEtBQUEsc0RBQUEzRSxLQUFBLG9CQUFBMkQsTUFBQSxRQUFBWCxHQUFBLFNBQUE0QixVQUFBLFdBQUFqQyxPQUFBLENBQUFnQixNQUFBLEdBQUFBLE1BQUEsRUFBQWhCLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUE2QixRQUFBLEdBQUFsQyxPQUFBLENBQUFrQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUFsQyxPQUFBLE9BQUFtQyxjQUFBLFFBQUFBLGNBQUEsS0FBQTdCLGdCQUFBLG1CQUFBNkIsY0FBQSxxQkFBQW5DLE9BQUEsQ0FBQWdCLE1BQUEsRUFBQWhCLE9BQUEsQ0FBQXFDLElBQUEsR0FBQXJDLE9BQUEsQ0FBQXNDLEtBQUEsR0FBQXRDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBZ0IsTUFBQSw2QkFBQTNELEtBQUEsUUFBQUEsS0FBQSxnQkFBQTJDLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUF1QyxpQkFBQSxDQUFBdkMsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFnQixNQUFBLElBQUFoQixPQUFBLENBQUF3QyxNQUFBLFdBQUF4QyxPQUFBLENBQUFLLEdBQUEsR0FBQWhELEtBQUEsb0JBQUFrRSxNQUFBLEdBQUFwQixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBdUIsTUFBQSxDQUFBOUgsSUFBQSxRQUFBNEQsS0FBQSxHQUFBMkMsT0FBQSxDQUFBeUMsSUFBQSxtQ0FBQWxCLE1BQUEsQ0FBQWxCLEdBQUEsS0FBQUMsZ0JBQUEscUJBQUE3QixLQUFBLEVBQUE4QyxNQUFBLENBQUFsQixHQUFBLEVBQUFvQyxJQUFBLEVBQUF6QyxPQUFBLENBQUF5QyxJQUFBLGtCQUFBbEIsTUFBQSxDQUFBOUgsSUFBQSxLQUFBNEQsS0FBQSxnQkFBQTJDLE9BQUEsQ0FBQWdCLE1BQUEsWUFBQWhCLE9BQUEsQ0FBQUssR0FBQSxHQUFBa0IsTUFBQSxDQUFBbEIsR0FBQSxtQkFBQStCLG9CQUFBRixRQUFBLEVBQUFsQyxPQUFBLFFBQUEwQyxVQUFBLEdBQUExQyxPQUFBLENBQUFnQixNQUFBLEVBQUFBLE1BQUEsR0FBQWtCLFFBQUEsQ0FBQXJELFFBQUEsQ0FBQTZELFVBQUEsT0FBQTdJLFNBQUEsS0FBQW1ILE1BQUEsU0FBQWhCLE9BQUEsQ0FBQWtDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBckQsUUFBQSxlQUFBbUIsT0FBQSxDQUFBZ0IsTUFBQSxhQUFBaEIsT0FBQSxDQUFBSyxHQUFBLEdBQUF4RyxTQUFBLEVBQUF1SSxtQkFBQSxDQUFBRixRQUFBLEVBQUFsQyxPQUFBLGVBQUFBLE9BQUEsQ0FBQWdCLE1BQUEsa0JBQUEwQixVQUFBLEtBQUExQyxPQUFBLENBQUFnQixNQUFBLFlBQUFoQixPQUFBLENBQUFLLEdBQUEsT0FBQXNDLFNBQUEsdUNBQUFELFVBQUEsaUJBQUFwQyxnQkFBQSxNQUFBaUIsTUFBQSxHQUFBcEIsUUFBQSxDQUFBYSxNQUFBLEVBQUFrQixRQUFBLENBQUFyRCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFrQixNQUFBLENBQUE5SCxJQUFBLFNBQUF1RyxPQUFBLENBQUFnQixNQUFBLFlBQUFoQixPQUFBLENBQUFLLEdBQUEsR0FBQWtCLE1BQUEsQ0FBQWxCLEdBQUEsRUFBQUwsT0FBQSxDQUFBa0MsUUFBQSxTQUFBNUIsZ0JBQUEsTUFBQXNDLElBQUEsR0FBQXJCLE1BQUEsQ0FBQWxCLEdBQUEsU0FBQXVDLElBQUEsR0FBQUEsSUFBQSxDQUFBSCxJQUFBLElBQUF6QyxPQUFBLENBQUFrQyxRQUFBLENBQUFXLFVBQUEsSUFBQUQsSUFBQSxDQUFBbkUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBOEMsSUFBQSxHQUFBWixRQUFBLENBQUFhLE9BQUEsZUFBQS9DLE9BQUEsQ0FBQWdCLE1BQUEsS0FBQWhCLE9BQUEsQ0FBQWdCLE1BQUEsV0FBQWhCLE9BQUEsQ0FBQUssR0FBQSxHQUFBeEcsU0FBQSxHQUFBbUcsT0FBQSxDQUFBa0MsUUFBQSxTQUFBNUIsZ0JBQUEsSUFBQXNDLElBQUEsSUFBQTVDLE9BQUEsQ0FBQWdCLE1BQUEsWUFBQWhCLE9BQUEsQ0FBQUssR0FBQSxPQUFBc0MsU0FBQSxzQ0FBQTNDLE9BQUEsQ0FBQWtDLFFBQUEsU0FBQTVCLGdCQUFBLGNBQUEwQyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUEzQixNQUFBLEdBQUEyQixLQUFBLENBQUFRLFVBQUEsUUFBQW5DLE1BQUEsQ0FBQTlILElBQUEsb0JBQUE4SCxNQUFBLENBQUFsQixHQUFBLEVBQUE2QyxLQUFBLENBQUFRLFVBQUEsR0FBQW5DLE1BQUEsYUFBQXRCLFFBQUFOLFdBQUEsU0FBQTRELFVBQUEsTUFBQUosTUFBQSxhQUFBeEQsV0FBQSxDQUFBeEUsT0FBQSxDQUFBNkgsWUFBQSxjQUFBVyxLQUFBLGlCQUFBOUMsT0FBQStDLFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQWhGLGNBQUEsT0FBQWlGLGNBQUEsU0FBQUEsY0FBQSxDQUFBL0csSUFBQSxDQUFBOEcsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFoSyxNQUFBLFNBQUFtSyxDQUFBLE9BQUFqQixJQUFBLFlBQUFBLEtBQUEsYUFBQWlCLENBQUEsR0FBQUgsUUFBQSxDQUFBaEssTUFBQSxPQUFBd0UsTUFBQSxDQUFBdEIsSUFBQSxDQUFBOEcsUUFBQSxFQUFBRyxDQUFBLFVBQUFqQixJQUFBLENBQUFyRSxLQUFBLEdBQUFtRixRQUFBLENBQUFHLENBQUEsR0FBQWpCLElBQUEsQ0FBQUwsSUFBQSxPQUFBSyxJQUFBLFNBQUFBLElBQUEsQ0FBQXJFLEtBQUEsR0FBQTVFLFNBQUEsRUFBQWlKLElBQUEsQ0FBQUwsSUFBQSxPQUFBSyxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWIsVUFBQSxlQUFBQSxXQUFBLGFBQUF4RCxLQUFBLEVBQUE1RSxTQUFBLEVBQUE0SSxJQUFBLGlCQUFBbEMsaUJBQUEsQ0FBQXBDLFNBQUEsR0FBQXFDLDBCQUFBLEVBQUFsQyxjQUFBLENBQUF3QyxFQUFBLG1CQUFBckMsS0FBQSxFQUFBK0IsMEJBQUEsRUFBQXBCLFlBQUEsU0FBQWQsY0FBQSxDQUFBa0MsMEJBQUEsbUJBQUEvQixLQUFBLEVBQUE4QixpQkFBQSxFQUFBbkIsWUFBQSxTQUFBbUIsaUJBQUEsQ0FBQXlELFdBQUEsR0FBQTlFLE1BQUEsQ0FBQXNCLDBCQUFBLEVBQUF4QixpQkFBQSx3QkFBQWYsT0FBQSxDQUFBZ0csbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQTVELGlCQUFBLDZCQUFBNEQsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBcEcsT0FBQSxDQUFBcUcsSUFBQSxhQUFBSixNQUFBLFdBQUFqSixNQUFBLENBQUFzSixjQUFBLEdBQUF0SixNQUFBLENBQUFzSixjQUFBLENBQUFMLE1BQUEsRUFBQTFELDBCQUFBLEtBQUEwRCxNQUFBLENBQUFNLFNBQUEsR0FBQWhFLDBCQUFBLEVBQUF0QixNQUFBLENBQUFnRixNQUFBLEVBQUFsRixpQkFBQSx5QkFBQWtGLE1BQUEsQ0FBQS9GLFNBQUEsR0FBQWxELE1BQUEsQ0FBQThFLE1BQUEsQ0FBQWUsRUFBQSxHQUFBb0QsTUFBQSxLQUFBakcsT0FBQSxDQUFBd0csS0FBQSxhQUFBcEUsR0FBQSxhQUFBcUIsT0FBQSxFQUFBckIsR0FBQSxPQUFBVSxxQkFBQSxDQUFBRyxhQUFBLENBQUEvQyxTQUFBLEdBQUFlLE1BQUEsQ0FBQWdDLGFBQUEsQ0FBQS9DLFNBQUEsRUFBQVcsbUJBQUEsaUNBQUFiLE9BQUEsQ0FBQWlELGFBQUEsR0FBQUEsYUFBQSxFQUFBakQsT0FBQSxDQUFBeUcsS0FBQSxhQUFBbEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBd0IsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQXdELE9BQUEsT0FBQUMsSUFBQSxPQUFBMUQsYUFBQSxDQUFBM0IsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUF3QixXQUFBLFVBQUFsRCxPQUFBLENBQUFnRyxtQkFBQSxDQUFBeEUsT0FBQSxJQUFBbUYsSUFBQSxHQUFBQSxJQUFBLENBQUE5QixJQUFBLEdBQUFuQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBaUIsSUFBQSxHQUFBakIsTUFBQSxDQUFBL0MsS0FBQSxHQUFBbUcsSUFBQSxDQUFBOUIsSUFBQSxXQUFBL0IscUJBQUEsQ0FBQUQsRUFBQSxHQUFBNUIsTUFBQSxDQUFBNEIsRUFBQSxFQUFBOUIsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQTRCLEVBQUEsRUFBQWxDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQTRCLEVBQUEsNkRBQUE3QyxPQUFBLENBQUEvQyxJQUFBLGFBQUFoQixHQUFBLFFBQUEySyxNQUFBLEdBQUE1SixNQUFBLENBQUFmLEdBQUEsR0FBQWdCLElBQUEsZ0JBQUFqQixHQUFBLElBQUE0SyxNQUFBLEVBQUEzSixJQUFBLENBQUFzSSxJQUFBLENBQUF2SixHQUFBLFVBQUFpQixJQUFBLENBQUE0SixPQUFBLGFBQUFoQyxLQUFBLFdBQUE1SCxJQUFBLENBQUF0QixNQUFBLFNBQUFLLEdBQUEsR0FBQWlCLElBQUEsQ0FBQTZKLEdBQUEsUUFBQTlLLEdBQUEsSUFBQTRLLE1BQUEsU0FBQS9CLElBQUEsQ0FBQXJFLEtBQUEsR0FBQXhFLEdBQUEsRUFBQTZJLElBQUEsQ0FBQUwsSUFBQSxPQUFBSyxJQUFBLFdBQUFBLElBQUEsQ0FBQUwsSUFBQSxPQUFBSyxJQUFBLFFBQUE3RSxPQUFBLENBQUE0QyxNQUFBLEdBQUFBLE1BQUEsRUFBQVosT0FBQSxDQUFBOUIsU0FBQSxLQUFBaUcsV0FBQSxFQUFBbkUsT0FBQSxFQUFBMEQsS0FBQSxXQUFBQSxNQUFBcUIsYUFBQSxhQUFBQyxJQUFBLFdBQUFuQyxJQUFBLFdBQUFULElBQUEsUUFBQUMsS0FBQSxHQUFBekksU0FBQSxPQUFBNEksSUFBQSxZQUFBUCxRQUFBLGNBQUFsQixNQUFBLGdCQUFBWCxHQUFBLEdBQUF4RyxTQUFBLE9BQUEwSixVQUFBLENBQUFwSSxPQUFBLENBQUFzSSxhQUFBLElBQUF1QixhQUFBLFdBQUFYLElBQUEsa0JBQUFBLElBQUEsQ0FBQWEsTUFBQSxPQUFBOUcsTUFBQSxDQUFBdEIsSUFBQSxPQUFBdUgsSUFBQSxNQUFBUCxLQUFBLEVBQUFPLElBQUEsQ0FBQS9KLEtBQUEsY0FBQStKLElBQUEsSUFBQXhLLFNBQUEsTUFBQXNMLElBQUEsV0FBQUEsS0FBQSxTQUFBMUMsSUFBQSxXQUFBMkMsVUFBQSxRQUFBN0IsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMEIsVUFBQSxDQUFBM0wsSUFBQSxRQUFBMkwsVUFBQSxDQUFBL0UsR0FBQSxjQUFBZ0YsSUFBQSxLQUFBOUMsaUJBQUEsV0FBQUEsa0JBQUErQyxTQUFBLGFBQUE3QyxJQUFBLFFBQUE2QyxTQUFBLE1BQUF0RixPQUFBLGtCQUFBdUYsT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUFsRSxNQUFBLENBQUE5SCxJQUFBLFlBQUE4SCxNQUFBLENBQUFsQixHQUFBLEdBQUFpRixTQUFBLEVBQUF0RixPQUFBLENBQUE4QyxJQUFBLEdBQUEwQyxHQUFBLEVBQUFDLE1BQUEsS0FBQXpGLE9BQUEsQ0FBQWdCLE1BQUEsV0FBQWhCLE9BQUEsQ0FBQUssR0FBQSxHQUFBeEcsU0FBQSxLQUFBNEwsTUFBQSxhQUFBMUIsQ0FBQSxRQUFBUixVQUFBLENBQUEzSixNQUFBLE1BQUFtSyxDQUFBLFNBQUFBLENBQUEsUUFBQWIsS0FBQSxRQUFBSyxVQUFBLENBQUFRLENBQUEsR0FBQXhDLE1BQUEsR0FBQTJCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUFvQyxNQUFBLGFBQUFyQyxLQUFBLENBQUFDLE1BQUEsU0FBQThCLElBQUEsUUFBQVMsUUFBQSxHQUFBdEgsTUFBQSxDQUFBdEIsSUFBQSxDQUFBb0csS0FBQSxlQUFBeUMsVUFBQSxHQUFBdkgsTUFBQSxDQUFBdEIsSUFBQSxDQUFBb0csS0FBQSxxQkFBQXdDLFFBQUEsSUFBQUMsVUFBQSxhQUFBVixJQUFBLEdBQUEvQixLQUFBLENBQUFFLFFBQUEsU0FBQW1DLE1BQUEsQ0FBQXJDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQTZCLElBQUEsR0FBQS9CLEtBQUEsQ0FBQUcsVUFBQSxTQUFBa0MsTUFBQSxDQUFBckMsS0FBQSxDQUFBRyxVQUFBLGNBQUFxQyxRQUFBLGFBQUFULElBQUEsR0FBQS9CLEtBQUEsQ0FBQUUsUUFBQSxTQUFBbUMsTUFBQSxDQUFBckMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBdUMsVUFBQSxZQUFBM0QsS0FBQSxxREFBQWlELElBQUEsR0FBQS9CLEtBQUEsQ0FBQUcsVUFBQSxTQUFBa0MsTUFBQSxDQUFBckMsS0FBQSxDQUFBRyxVQUFBLFlBQUFiLE1BQUEsV0FBQUEsT0FBQS9JLElBQUEsRUFBQTRHLEdBQUEsYUFBQTBELENBQUEsUUFBQVIsVUFBQSxDQUFBM0osTUFBQSxNQUFBbUssQ0FBQSxTQUFBQSxDQUFBLFFBQUFiLEtBQUEsUUFBQUssVUFBQSxDQUFBUSxDQUFBLE9BQUFiLEtBQUEsQ0FBQUMsTUFBQSxTQUFBOEIsSUFBQSxJQUFBN0csTUFBQSxDQUFBdEIsSUFBQSxDQUFBb0csS0FBQSx3QkFBQStCLElBQUEsR0FBQS9CLEtBQUEsQ0FBQUcsVUFBQSxRQUFBdUMsWUFBQSxHQUFBMUMsS0FBQSxhQUFBMEMsWUFBQSxpQkFBQW5NLElBQUEsbUJBQUFBLElBQUEsS0FBQW1NLFlBQUEsQ0FBQXpDLE1BQUEsSUFBQTlDLEdBQUEsSUFBQUEsR0FBQSxJQUFBdUYsWUFBQSxDQUFBdkMsVUFBQSxLQUFBdUMsWUFBQSxjQUFBckUsTUFBQSxHQUFBcUUsWUFBQSxHQUFBQSxZQUFBLENBQUFsQyxVQUFBLGNBQUFuQyxNQUFBLENBQUE5SCxJQUFBLEdBQUFBLElBQUEsRUFBQThILE1BQUEsQ0FBQWxCLEdBQUEsR0FBQUEsR0FBQSxFQUFBdUYsWUFBQSxTQUFBNUUsTUFBQSxnQkFBQThCLElBQUEsR0FBQThDLFlBQUEsQ0FBQXZDLFVBQUEsRUFBQS9DLGdCQUFBLFNBQUF1RixRQUFBLENBQUF0RSxNQUFBLE1BQUFzRSxRQUFBLFdBQUFBLFNBQUF0RSxNQUFBLEVBQUErQixRQUFBLG9CQUFBL0IsTUFBQSxDQUFBOUgsSUFBQSxRQUFBOEgsTUFBQSxDQUFBbEIsR0FBQSxxQkFBQWtCLE1BQUEsQ0FBQTlILElBQUEsbUJBQUE4SCxNQUFBLENBQUE5SCxJQUFBLFFBQUFxSixJQUFBLEdBQUF2QixNQUFBLENBQUFsQixHQUFBLGdCQUFBa0IsTUFBQSxDQUFBOUgsSUFBQSxTQUFBNEwsSUFBQSxRQUFBaEYsR0FBQSxHQUFBa0IsTUFBQSxDQUFBbEIsR0FBQSxPQUFBVyxNQUFBLGtCQUFBOEIsSUFBQSx5QkFBQXZCLE1BQUEsQ0FBQTlILElBQUEsSUFBQTZKLFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFoRCxnQkFBQSxLQUFBd0YsTUFBQSxXQUFBQSxPQUFBekMsVUFBQSxhQUFBVSxDQUFBLFFBQUFSLFVBQUEsQ0FBQTNKLE1BQUEsTUFBQW1LLENBQUEsU0FBQUEsQ0FBQSxRQUFBYixLQUFBLFFBQUFLLFVBQUEsQ0FBQVEsQ0FBQSxPQUFBYixLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBd0MsUUFBQSxDQUFBM0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQTVDLGdCQUFBLHlCQUFBeUYsT0FBQTVDLE1BQUEsYUFBQVksQ0FBQSxRQUFBUixVQUFBLENBQUEzSixNQUFBLE1BQUFtSyxDQUFBLFNBQUFBLENBQUEsUUFBQWIsS0FBQSxRQUFBSyxVQUFBLENBQUFRLENBQUEsT0FBQWIsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTVCLE1BQUEsR0FBQTJCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQW5DLE1BQUEsQ0FBQTlILElBQUEsUUFBQXVNLE1BQUEsR0FBQXpFLE1BQUEsQ0FBQWxCLEdBQUEsRUFBQW9ELGFBQUEsQ0FBQVAsS0FBQSxZQUFBOEMsTUFBQSxnQkFBQWhFLEtBQUEsOEJBQUFpRSxhQUFBLFdBQUFBLGNBQUFyQyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWIsUUFBQSxLQUFBckQsUUFBQSxFQUFBZ0MsTUFBQSxDQUFBK0MsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBL0IsTUFBQSxVQUFBWCxHQUFBLEdBQUF4RyxTQUFBLEdBQUF5RyxnQkFBQSxPQUFBckMsT0FBQTtBQUFBLFNBQUFpSSxtQkFBQUMsR0FBQSxFQUFBOUUsT0FBQSxFQUFBQyxNQUFBLEVBQUE4RSxLQUFBLEVBQUFDLE1BQUEsRUFBQXBNLEdBQUEsRUFBQW9HLEdBQUEsY0FBQXVDLElBQUEsR0FBQXVELEdBQUEsQ0FBQWxNLEdBQUEsRUFBQW9HLEdBQUEsT0FBQTVCLEtBQUEsR0FBQW1FLElBQUEsQ0FBQW5FLEtBQUEsV0FBQW9ELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBZSxJQUFBLENBQUFILElBQUEsSUFBQXBCLE9BQUEsQ0FBQTVDLEtBQUEsWUFBQWtHLE9BQUEsQ0FBQXRELE9BQUEsQ0FBQTVDLEtBQUEsRUFBQWtELElBQUEsQ0FBQXlFLEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBbEcsRUFBQSw2QkFBQVYsSUFBQSxTQUFBNkcsSUFBQSxHQUFBNU0sU0FBQSxhQUFBZ0wsT0FBQSxXQUFBdEQsT0FBQSxFQUFBQyxNQUFBLFFBQUE2RSxHQUFBLEdBQUEvRixFQUFBLENBQUFvRyxLQUFBLENBQUE5RyxJQUFBLEVBQUE2RyxJQUFBLFlBQUFILE1BQUEzSCxLQUFBLElBQUF5SCxrQkFBQSxDQUFBQyxHQUFBLEVBQUE5RSxPQUFBLEVBQUFDLE1BQUEsRUFBQThFLEtBQUEsRUFBQUMsTUFBQSxVQUFBNUgsS0FBQSxjQUFBNEgsT0FBQS9HLEdBQUEsSUFBQTRHLGtCQUFBLENBQUFDLEdBQUEsRUFBQTlFLE9BQUEsRUFBQUMsTUFBQSxFQUFBOEUsS0FBQSxFQUFBQyxNQUFBLFdBQUEvRyxHQUFBLEtBQUE4RyxLQUFBLENBQUF2TSxTQUFBO0FBQUEsU0FBQTRNLFFBQUE1QixNQUFBLEVBQUE2QixjQUFBLFFBQUF4TCxJQUFBLEdBQUFELE1BQUEsQ0FBQUMsSUFBQSxDQUFBMkosTUFBQSxPQUFBNUosTUFBQSxDQUFBMEwscUJBQUEsUUFBQUMsT0FBQSxHQUFBM0wsTUFBQSxDQUFBMEwscUJBQUEsQ0FBQTlCLE1BQUEsR0FBQTZCLGNBQUEsS0FBQUUsT0FBQSxHQUFBQSxPQUFBLENBQUFDLE1BQUEsV0FBQUMsR0FBQSxXQUFBN0wsTUFBQSxDQUFBOEwsd0JBQUEsQ0FBQWxDLE1BQUEsRUFBQWlDLEdBQUEsRUFBQTNILFVBQUEsT0FBQWpFLElBQUEsQ0FBQXNJLElBQUEsQ0FBQWdELEtBQUEsQ0FBQXRMLElBQUEsRUFBQTBMLE9BQUEsWUFBQTFMLElBQUE7QUFBQSxTQUFBRixjQUFBZ00sTUFBQSxhQUFBakQsQ0FBQSxNQUFBQSxDQUFBLEdBQUFwSyxTQUFBLENBQUFDLE1BQUEsRUFBQW1LLENBQUEsVUFBQWtELE1BQUEsV0FBQXROLFNBQUEsQ0FBQW9LLENBQUEsSUFBQXBLLFNBQUEsQ0FBQW9LLENBQUEsUUFBQUEsQ0FBQSxPQUFBMEMsT0FBQSxDQUFBeEwsTUFBQSxDQUFBZ00sTUFBQSxPQUFBOUwsT0FBQSxXQUFBbEIsR0FBQSxJQUFBaU4sZUFBQSxDQUFBRixNQUFBLEVBQUEvTSxHQUFBLEVBQUFnTixNQUFBLENBQUFoTixHQUFBLFNBQUFnQixNQUFBLENBQUFrTSx5QkFBQSxHQUFBbE0sTUFBQSxDQUFBbU0sZ0JBQUEsQ0FBQUosTUFBQSxFQUFBL0wsTUFBQSxDQUFBa00seUJBQUEsQ0FBQUYsTUFBQSxLQUFBUixPQUFBLENBQUF4TCxNQUFBLENBQUFnTSxNQUFBLEdBQUE5TCxPQUFBLFdBQUFsQixHQUFBLElBQUFnQixNQUFBLENBQUFxRCxjQUFBLENBQUEwSSxNQUFBLEVBQUEvTSxHQUFBLEVBQUFnQixNQUFBLENBQUE4TCx3QkFBQSxDQUFBRSxNQUFBLEVBQUFoTixHQUFBLGlCQUFBK00sTUFBQTtBQUFBLFNBQUFFLGdCQUFBM0ksR0FBQSxFQUFBdEUsR0FBQSxFQUFBd0UsS0FBQSxJQUFBeEUsR0FBQSxHQUFBb04sY0FBQSxDQUFBcE4sR0FBQSxPQUFBQSxHQUFBLElBQUFzRSxHQUFBLElBQUF0RCxNQUFBLENBQUFxRCxjQUFBLENBQUFDLEdBQUEsRUFBQXRFLEdBQUEsSUFBQXdFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLFFBQUFDLFlBQUEsUUFBQUMsUUFBQSxvQkFBQWQsR0FBQSxDQUFBdEUsR0FBQSxJQUFBd0UsS0FBQSxXQUFBRixHQUFBO0FBQUEsU0FBQThJLGVBQUFoSCxHQUFBLFFBQUFwRyxHQUFBLEdBQUFxTixZQUFBLENBQUFqSCxHQUFBLG9CQUFBb0IsT0FBQSxDQUFBeEgsR0FBQSxpQkFBQUEsR0FBQSxHQUFBc04sTUFBQSxDQUFBdE4sR0FBQTtBQUFBLFNBQUFxTixhQUFBRSxLQUFBLEVBQUFDLElBQUEsUUFBQWhHLE9BQUEsQ0FBQStGLEtBQUEsa0JBQUFBLEtBQUEsa0JBQUFBLEtBQUEsTUFBQUUsSUFBQSxHQUFBRixLQUFBLENBQUE3SSxNQUFBLENBQUFnSixXQUFBLE9BQUFELElBQUEsS0FBQTdOLFNBQUEsUUFBQStOLEdBQUEsR0FBQUYsSUFBQSxDQUFBNUssSUFBQSxDQUFBMEssS0FBQSxFQUFBQyxJQUFBLG9CQUFBaEcsT0FBQSxDQUFBbUcsR0FBQSx1QkFBQUEsR0FBQSxZQUFBakYsU0FBQSw0REFBQThFLElBQUEsZ0JBQUFGLE1BQUEsR0FBQU0sTUFBQSxFQUFBTCxLQUFBO0FBRDZCO0FBQ2E7QUFDbUM7QUFDeEM7QUFFckMsSUFBTU0sU0FBUyxHQUFHNUwsUUFBUSxDQUFDRSxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQy9DRixRQUFRLENBQUM2TCxJQUFJLENBQUMvTCxNQUFNLENBQUM4TCxTQUFTLENBQUM7QUFDL0IsSUFBTUUsSUFBSSxHQUFHRixTQUFTO0FBRWYsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSTdLLEtBQUssRUFBSztFQUN6QyxJQUFBOEssWUFBQSxHQUE2RTlLLEtBQUssQ0FBQ0MsS0FBSztJQUFoRkMsU0FBUyxHQUFBNEssWUFBQSxDQUFUNUssU0FBUztJQUFFQyxRQUFRLEdBQUEySyxZQUFBLENBQVIzSyxRQUFRO0lBQUVDLFNBQVMsR0FBQTBLLFlBQUEsQ0FBVDFLLFNBQVM7SUFBRUMsS0FBSyxHQUFBeUssWUFBQSxDQUFMekssS0FBSztJQUFFQyxRQUFRLEdBQUF3SyxZQUFBLENBQVJ4SyxRQUFRO0lBQUVDLGVBQWUsR0FBQXVLLFlBQUEsQ0FBZnZLLGVBQWU7RUFDeEUsSUFBUUMsbUJBQW1CLEdBQUtSLEtBQUssQ0FBQ0MsS0FBSyxDQUFuQ08sbUJBQW1CO0VBRTNCLElBQU11SyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3pCLElBQU1DLE9BQU8sR0FBRyxJQUFJO0lBQ3BCLFFBQVFBLE9BQU87TUFDYixLQUFLOUssU0FBUyxDQUFDMUQsTUFBTSxHQUFHLENBQUMsSUFBSTBELFNBQVMsQ0FBQzFELE1BQU0sR0FBRyxFQUFFO01BQ2xELEtBQUsyRCxRQUFRLENBQUMzRCxNQUFNLEdBQUcsQ0FBQyxJQUFJMkQsUUFBUSxDQUFDM0QsTUFBTSxHQUFHLEVBQUU7TUFDaEQsS0FBSyxDQUFDNEQsU0FBUyxDQUFDNUQsTUFBTTtNQUN0QixLQUFLLENBQUM2RCxLQUFLLENBQUM3RCxNQUFNO01BQ2xCLEtBQUssQ0FBQzZELEtBQUssQ0FBQzRLLEtBQUssQ0FBQ2xMLHFFQUFZLENBQUM7TUFDL0IsS0FBSyxDQUFDTyxRQUFRLENBQUMySyxLQUFLLENBQUNuTCx3RUFBZSxDQUFDO01BQ3JDLEtBQUssQ0FBQ1MsZUFBZSxDQUFDMEssS0FBSyxDQUFDbkwsd0VBQWUsQ0FBQztNQUM1QyxLQUFLUSxRQUFRLEtBQUtDLGVBQWU7UUFDL0IsT0FBTyxLQUFLO01BQ2Q7UUFDRSxPQUFPLElBQUk7SUFBQztFQUVsQixDQUFDO0VBRUQsSUFBTTJLLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsQ0FBQyxFQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQnBMLEtBQUssQ0FBQ1UsUUFBUSxDQUFBOUMsYUFBQSxDQUFBQSxhQUFBLEtBQU1vQyxLQUFLLENBQUNDLEtBQUssT0FBQTZKLGVBQUEsS0FBR3FCLENBQUMsQ0FBQ3ZCLE1BQU0sQ0FBQzNDLElBQUksRUFBR2tFLENBQUMsQ0FBQ3ZCLE1BQU0sQ0FBQ3ZJLEtBQUssR0FBRztFQUNyRSxDQUFDO0VBRUQsSUFBTWdLLGNBQWM7SUFBQSxJQUFBQyxJQUFBLEdBQUFwQyxpQkFBQSxlQUFBdEksbUJBQUEsR0FBQXNHLElBQUEsQ0FBRyxTQUFBcUUsUUFBQTtNQUFBLElBQUFDLFdBQUEsRUFBQUMsUUFBQSxFQUFBQyxPQUFBO01BQUEsT0FBQTlLLG1CQUFBLEdBQUF1QixJQUFBLFVBQUF3SixTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQS9ELElBQUEsR0FBQStELFFBQUEsQ0FBQWxHLElBQUE7VUFBQTtZQUNmOEYsV0FBVyxHQUFHVCxZQUFZLEVBQUU7WUFBQSxLQUM5QlMsV0FBVztjQUFBSSxRQUFBLENBQUFsRyxJQUFBO2NBQUE7WUFBQTtZQUFBa0csUUFBQSxDQUFBL0QsSUFBQTtZQUFBK0QsUUFBQSxDQUFBbEcsSUFBQTtZQUFBLE9BRVltRyxLQUFLLENBQUMsNENBQTRDLEVBQUU7Y0FDekVqSSxNQUFNLEVBQUUsTUFBTTtjQUNkK0csSUFBSSxFQUFFbUIsSUFBSSxDQUFDQyxTQUFTLENBQUMvTCxLQUFLLENBQUNDLEtBQUs7WUFDbEMsQ0FBQyxDQUFDO1VBQUE7WUFISXdMLFFBQVEsR0FBQUcsUUFBQSxDQUFBM0csSUFBQTtZQUFBMkcsUUFBQSxDQUFBbEcsSUFBQTtZQUFBLE9BSVErRixRQUFRLENBQUNPLElBQUksRUFBRTtVQUFBO1lBQS9CTixPQUFPLEdBQUFFLFFBQUEsQ0FBQTNHLElBQUE7WUFDYmdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixPQUFPLENBQUM7WUFDcEIxTCxLQUFLLENBQUNVLFFBQVEsQ0FBQztjQUNiUixTQUFTLEVBQUUsRUFBRTtjQUNiQyxRQUFRLEVBQUUsRUFBRTtjQUNaQyxTQUFTLEVBQUUsRUFBRTtjQUNiQyxLQUFLLEVBQUUsRUFBRTtjQUNUQyxRQUFRLEVBQUUsRUFBRTtjQUNaQyxlQUFlLEVBQUU7WUFDbkIsQ0FBQyxDQUFDO1lBQUNxTCxRQUFBLENBQUFsRyxJQUFBO1lBQUE7VUFBQTtZQUFBa0csUUFBQSxDQUFBL0QsSUFBQTtZQUFBK0QsUUFBQSxDQUFBTyxFQUFBLEdBQUFQLFFBQUE7WUFFSEssT0FBTyxDQUFDeEgsS0FBSyxDQUFBbUgsUUFBQSxDQUFBTyxFQUFBLENBQUc7VUFBQztZQUFBUCxRQUFBLENBQUFsRyxJQUFBO1lBQUE7VUFBQTtZQUduQjFGLEtBQUssQ0FBQ1UsUUFBUSxDQUFBOUMsYUFBQSxDQUFBQSxhQUFBLEtBQU1vQyxLQUFLLENBQUNDLEtBQUs7Y0FBRU8sbUJBQW1CLEVBQUU7WUFBSSxHQUFHO1VBQUM7VUFBQTtZQUFBLE9BQUFvTCxRQUFBLENBQUE3RCxJQUFBO1FBQUE7TUFBQSxHQUFBd0QsT0FBQTtJQUFBLENBRWpFO0lBQUEsZ0JBeEJLRixjQUFjQSxDQUFBO01BQUEsT0FBQUMsSUFBQSxDQUFBbEMsS0FBQSxPQUFBN00sU0FBQTtJQUFBO0VBQUEsR0F3Qm5CO0VBRUQsT0FBT0gsZ0RBQUMsQ0FBQyxLQUFLLEVBQUU7SUFBRSxTQUFPO0VBQU0sQ0FBQyxFQUFFLENBQ2hDQSxnREFBQyxDQUFDLE1BQU0sRUFBRTtJQUFFLFNBQU87RUFBTyxDQUFDLEVBQUUsQ0FDM0JBLGdEQUFDLENBQUMsS0FBSyxFQUFFO0lBQUUsU0FBTztFQUFnQixDQUFDLEVBQUUsQ0FDbkNBLGdEQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQ2JBLGdEQUFDLENBQUMsT0FBTyxFQUFFO0lBQ1QsU0FBTyxPQUFPO0lBQ2Q2SyxJQUFJLEVBQUUsV0FBVztJQUNqQjVLLElBQUksRUFBRSxNQUFNO0lBQ1pnRixLQUFLLEVBQUVuQixTQUFTO0lBQ2hCa00sV0FBVyxFQUFFLEtBQUs7SUFDbEJDLE9BQU8sRUFBRW5CO0VBQ1gsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxFQUNGMUssbUJBQW1CLEdBQ2QsQ0FBQ04sU0FBUyxDQUFDMUQsTUFBTSxJQUFJSixnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBK0IsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUNwRyxDQUFDOEQsU0FBUyxDQUFDMUQsTUFBTSxHQUFHLENBQUMsSUFBSTBELFNBQVMsQ0FBQzFELE1BQU0sR0FBRyxFQUFFLEtBQzdDSixnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBK0IsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBRSxHQUNqRixLQUFLLENBQ1YsQ0FBQyxFQUNGQSxnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBZ0IsQ0FBQyxFQUFFLENBQ25DQSxnREFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUNiQSxnREFBQyxDQUFDLE9BQU8sRUFBRTtJQUNULFNBQU8sT0FBTztJQUNkNkssSUFBSSxFQUFFLFVBQVU7SUFDaEI1SyxJQUFJLEVBQUUsTUFBTTtJQUNaZ0YsS0FBSyxFQUFFbEIsUUFBUTtJQUNmaU0sV0FBVyxFQUFFLFNBQVM7SUFDdEJDLE9BQU8sRUFBRW5CO0VBQ1gsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxFQUNGMUssbUJBQW1CLEdBQ2QsQ0FBQ0wsUUFBUSxDQUFDM0QsTUFBTSxJQUFJSixnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBK0IsQ0FBQyxFQUFFLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUN2RyxDQUFDK0QsUUFBUSxDQUFDM0QsTUFBTSxHQUFHLENBQUMsSUFBSTJELFFBQVEsQ0FBQzNELE1BQU0sR0FBRyxFQUFFLEtBQzNDSixnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBK0IsQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBRSxHQUNuRixLQUFLLENBQ1YsQ0FBQyxFQUNGQSxnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBZ0IsQ0FBQyxFQUFFLENBQ25DQSxnREFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUNiQSxnREFBQyxDQUFDLE9BQU8sRUFBRTtJQUNULFNBQU8sT0FBTztJQUNkNkssSUFBSSxFQUFFLFdBQVc7SUFDakI1SyxJQUFJLEVBQUUsTUFBTTtJQUNaZ0YsS0FBSyxFQUFFakIsU0FBUztJQUNoQmdNLFdBQVcsRUFBRSxlQUFlO0lBQzVCRSxHQUFHLEVBQUUsSUFBSUMsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRSxDQUFDdFAsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDMUN1UCxRQUFRLEVBQUV2QjtFQUNaLENBQUMsQ0FBQyxDQUNILENBQUMsRUFDRjFLLG1CQUFtQixHQUNmLENBQUNKLFNBQVMsQ0FBQzVELE1BQU0sSUFDakJKLGdEQUFDLENBQUMsS0FBSyxFQUFFO0lBQUUsU0FBTztFQUErQixDQUFDLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLEdBQ3pGLEtBQUssQ0FDVixDQUFDLEVBQ0ZBLGdEQUFDLENBQUMsS0FBSyxFQUFFO0lBQUUsU0FBTztFQUFnQixDQUFDLEVBQUUsQ0FDbkNBLGdEQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQ2JBLGdEQUFDLENBQUMsT0FBTyxFQUFFO0lBQ1QsU0FBTyxPQUFPO0lBQ2Q2SyxJQUFJLEVBQUUsT0FBTztJQUNiNUssSUFBSSxFQUFFLE9BQU87SUFDYmdGLEtBQUssRUFBRWhCLEtBQUs7SUFDWitMLFdBQVcsRUFBRSxtQkFBbUI7SUFDaENDLE9BQU8sRUFBRW5CO0VBQ1gsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxFQUNGMUssbUJBQW1CLEdBQ2YsQ0FBQ0gsS0FBSyxDQUFDN0QsTUFBTSxJQUNiSixnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBK0IsQ0FBQyxFQUFFLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxHQUM3RixLQUFLLENBQ1YsQ0FBQyxFQUNGQSxnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBZ0IsQ0FBQyxFQUFFLENBQ25DQSxnREFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUNiQSxnREFBQyxDQUFDLE9BQU8sRUFBRTtJQUNULFNBQU8sT0FBTztJQUNkNkssSUFBSSxFQUFFLFVBQVU7SUFDaEI1SyxJQUFJLEVBQUUsVUFBVTtJQUNoQmdGLEtBQUssRUFBRWYsUUFBUTtJQUNmOEwsV0FBVyxFQUFFLFFBQVE7SUFDckJDLE9BQU8sRUFBRW5CO0VBQ1gsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxFQUNGMUssbUJBQW1CLEdBQ2QsQ0FBQ0YsUUFBUSxDQUFDOUQsTUFBTSxJQUFJSixnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBK0IsQ0FBQyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUN0RyxDQUFDa0UsUUFBUSxDQUFDMkssS0FBSyxDQUFDbkwsd0VBQWUsQ0FBQyxJQUMvQjFELGdEQUFDLENBQUMsS0FBSyxFQUFFO0lBQUUsU0FBTztFQUErQixDQUFDLEVBQUUsQ0FDbEQsMEZBQTBGLENBQzNGLENBQUUsR0FDTCxLQUFLLENBQ1YsQ0FBQyxFQUNGQSxnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBZ0IsQ0FBQyxFQUFFLENBQ25DQSxnREFBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUNiQSxnREFBQyxDQUFDLE9BQU8sRUFBRTtJQUNULFNBQU8sT0FBTztJQUNkNkssSUFBSSxFQUFFLGlCQUFpQjtJQUN2QjVLLElBQUksRUFBRSxVQUFVO0lBQ2hCZ0YsS0FBSyxFQUFFZCxlQUFlO0lBQ3RCNkwsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQ0MsT0FBTyxFQUFFbkI7RUFDWCxDQUFDLENBQUMsQ0FDSCxDQUFDLEVBQ0YxSyxtQkFBbUIsR0FDZCxDQUFDRCxlQUFlLENBQUMvRCxNQUFNLElBQ3RCSixnREFBQyxDQUFDLEtBQUssRUFBRTtJQUFFLFNBQU87RUFBK0IsQ0FBQyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUNuRmtFLFFBQVEsS0FBS0MsZUFBZSxJQUMzQm5FLGdEQUFDLENBQUMsS0FBSyxFQUFFO0lBQUUsU0FBTztFQUErQixDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFFLEdBQy9FLEtBQUssQ0FDVixDQUFDLEVBQ0ZBLGdEQUFDLENBQUMsUUFBUSxFQUFFO0lBQUVDLElBQUksRUFBRSxRQUFRO0lBQUVxUSxPQUFPLEVBQUVyQixjQUFjO0lBQUUsU0FBTztFQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ3pGLENBQUMsQ0FDSCxDQUFDO0FBQ0osQ0FBQztBQUVELElBQUlzQixHQUFHLEdBQUdoTixvREFBSyxDQUFDa0wsZ0JBQWdCLENBQUM3Syw4Q0FBSyxDQUFDLEVBQUU0SyxJQUFJLENBQUM7QUFFOUM1Syw2REFBb0IsR0FBRyxZQUFNO0VBQzNCTCxvREFBSyxDQUFDa0wsZ0JBQWdCLENBQUM3Syw4Q0FBSyxDQUFDLEVBQUUyTSxHQUFHLENBQUM7QUFDckMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vLi9zcmMvc2hhcmVkL3YtZG9tL2luZGV4LmpzIiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtLy4vc3JjL3NoYXJlZC92YWxpZGF0aW9uLXBhdHRlcm5zL2luZGV4LmpzIiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtLy4vc3JjL3N0b3JlL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly9yZWdpc3RyYXRpb24tZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWdpc3RyYXRpb24tZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZWdpc3RyYXRpb24tZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWdpc3RyYXRpb24tZm9ybS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVnaXN0cmF0aW9uLWZvcm0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JlZ2lzdHJhdGlvbi1mb3JtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRFWFRfTk9ERV9UWVBFID0gMztcclxuZXhwb3J0IGNvbnN0IGggPSAodHlwZSwgcHJvcHMgPSB7fSwgY2hpbGRyZW4gPSBbXSkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGUsIHByb3BzLCBjaGlsZHJlbiB9O1xyXG59O1xyXG5cclxuY29uc3QgcGF0Y2hQcm9wID0gKG5vZGUsIGtleSwgdmFsLCBuZXh0VmFsKSA9PiB7XHJcbiAgaWYgKGtleS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBrZXkuc2xpY2UoMik7XHJcblxyXG4gICAgbm9kZVtldmVudE5hbWVdID0gbmV4dFZhbDtcclxuXHJcbiAgICBpZiAoIW5leHRWYWwpIHtcclxuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfSBlbHNlIGlmICghdmFsKSB7XHJcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgbm9kZVtrZXldID0gbmV4dFZhbDtcclxuICB9XHJcblxyXG4gIGlmIChuZXh0VmFsID09PSB1bmRlZmluZWQgfHwgbmV4dFZhbCA9PT0gbnVsbCB8fCBuZXh0VmFsID09PSBmYWxzZSkge1xyXG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCBuZXh0VmFsKTtcclxufTtcclxuXHJcbmNvbnN0IHBhdGNoUHJvcHMgPSAobm9kZSwgcHJvcHMsIG5leHRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IG1lcmdlZFByb3BzID0geyAuLi5wcm9wcywgLi4ubmV4dFByb3BzIH07XHJcblxyXG4gIE9iamVjdC5rZXlzKG1lcmdlZFByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGlmIChwcm9wc1trZXldICE9PSBuZXh0UHJvcHNba2V5XSkge1xyXG4gICAgICBwYXRjaFByb3Aobm9kZSwga2V5LCBwcm9wc1trZXldLCBuZXh0UHJvcHNba2V5XSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwYXRjaENoaWxkcmVuID0gKHBhcmVudCwgdkNoaWxkcmVuLCBuZXh0VkNoaWxkcmVuKSA9PiB7XHJcbiAgcGFyZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlLCBpZHgpID0+IHtcclxuICAgIGlmICh2Q2hpbGRyZW5baWR4XSAmJiBuZXh0VkNoaWxkcmVuW2lkeF0gJiYgdkNoaWxkcmVuW2lkeF0udHlwZSA9PT0gbmV4dFZDaGlsZHJlbltpZHhdLnR5cGUpIHtcclxuICAgICAgcGF0Y2hOb2RlKGNoaWxkTm9kZSwgdkNoaWxkcmVuW2lkeF0sIG5leHRWQ2hpbGRyZW5baWR4XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXh0Tm9kZSA9IGNyZWF0ZURPTU5vZGUobmV4dFZDaGlsZHJlbltpZHhdKTtcclxuICAgICAgY2hpbGROb2RlLnJlcGxhY2VXaXRoKG5leHROb2RlKTtcclxuICAgIH1cclxuICB9KTtcclxuICBuZXh0VkNoaWxkcmVuLnNsaWNlKHZDaGlsZHJlbi5sZW5ndGgpLmZvckVhY2goKHZDaGlsZCkgPT4ge1xyXG4gICAgcGFyZW50LmFwcGVuZChjcmVhdGVET01Ob2RlKHZDaGlsZCkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRE9NTm9kZSA9ICh2Tm9kZSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygdk5vZGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodk5vZGUpO1xyXG4gIH1cclxuICBpZiAodk5vZGUpIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMsIGNoaWxkcmVuIH0gPSB2Tm9kZTtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgcGF0Y2hQcm9wcyhub2RlLCB7fSwgcHJvcHMpO1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgbm9kZS5hcHBlbmQoY3JlYXRlRE9NTm9kZShjaGlsZCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHBhdGNoTm9kZSA9IChub2RlLCB2Tm9kZSwgbmV4dFZOb2RlKSA9PiB7XHJcbiAgaWYgKG5leHRWTm9kZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRWTm9kZSA9PT0gbnVsbCB8fCBuZXh0Vk5vZGUgPT09IGZhbHNlKSB7XHJcbiAgICBub2RlLnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHZOb2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbmV4dFZOb2RlID09PSAnc3RyaW5nJykge1xyXG4gICAgaWYgKHZOb2RlICE9PSBuZXh0Vk5vZGUpIHtcclxuICAgICAgY29uc3QgbmV4dE5vZGUgPSBjcmVhdGVET01Ob2RlKG5leHRWTm9kZSk7XHJcbiAgICAgIG5vZGUucmVwbGFjZVdpdGgobmV4dE5vZGUpO1xyXG4gICAgICByZXR1cm4gbmV4dE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcbiAgaWYgKHZOb2RlLnR5cGUgIT09IG5leHRWTm9kZS50eXBlKSB7XHJcbiAgICBjb25zdCBuZXh0Tm9kZSA9IGNyZWF0ZURPTU5vZGUobmV4dFZOb2RlKTtcclxuICAgIG5vZGUucmVwbGFjZVdpdGgobmV4dE5vZGUpO1xyXG4gICAgcmV0dXJuIG5leHROb2RlO1xyXG4gIH1cclxuICBwYXRjaFByb3BzKG5vZGUsIHZOb2RlLnByb3BzLCBuZXh0Vk5vZGUucHJvcHMpO1xyXG4gIHBhdGNoQ2hpbGRyZW4obm9kZSwgdk5vZGUuY2hpbGRyZW4sIG5leHRWTm9kZS5jaGlsZHJlbik7XHJcbiAgcmV0dXJuIG5vZGU7XHJcbn07XHJcblxyXG5jb25zdCByZWN5Y2xlTm9kZSA9IChub2RlKSA9PiB7XHJcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IFRFWFRfTk9ERV9UWVBFKSB7XHJcbiAgICByZXR1cm4gbm9kZS5ub2RlVmFsdWU7XHJcbiAgfVxyXG4gIGNvbnN0IHR5cGUgPSBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3QgY2hpbGRyZW4gPSBbXS5tYXAuY2FsbChub2RlLmNoaWxkTm9kZXMsIHJlY3ljbGVOb2RlKTtcclxuICByZXR1cm4gaCh0eXBlLCB7fSwgY2hpbGRyZW4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoID0gKG5leHRWTm9kZSwgbm9kZSkgPT4ge1xyXG4gIGNvbnN0IHZOb2RlID0gbm9kZS52IHx8IHJlY3ljbGVOb2RlKG5vZGUpO1xyXG4gIG5vZGUgPSBwYXRjaE5vZGUobm9kZSwgdk5vZGUsIG5leHRWTm9kZSk7XHJcbiAgbm9kZS52ID0gbmV4dFZOb2RlO1xyXG4gIHJldHVybiBub2RlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbGlzdGVuZXIoZXZlbnQpIHtcclxuICByZXR1cm4gdGhpc1tldmVudC50eXBlXShldmVudCk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHBhc3N3b3JkUGF0dGVybiA9IC9eKD89LipbQS1aXSkoPz0uKlsxLTldKSg/PS4qWyFAIyQlXSlbQS1aYS16MS05IUAjJCVdezgsfSQvZztcclxuZXhwb3J0IGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvOyIsImV4cG9ydCBjb25zdCBzdG9yZSA9IHtcclxuICBzdGF0ZToge1xyXG4gICAgZmlyc3ROYW1lOiAnJyxcclxuICAgIGxhc3ROYW1lOiAnJyxcclxuICAgIGJpcnRoRGF0ZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxyXG4gICAgaXNTaG93VmFsaWRNZXNzYWdlczogZmFsc2UsXHJcbiAgfSxcclxuICBvblN0YXRlQ2hhbmdlZDogKCkgPT4ge30sXHJcbiAgc2V0U3RhdGUobmV4dFN0YXRlKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlZCgpO1xyXG4gIH0sXHJcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hcHAge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIG1heC13aWR0aDogMjVyZW07XFxuICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuICAuZm9ybSB7XFxuICAgIG1pbi13aWR0aDogMjVyZW07XFxuICB9XFxufVxcblxcbi5pbnB1dC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByb3ctZ2FwOiAwLjNyZW07XFxufVxcbi5pbnB1dC13cmFwcGVyX19lcnJvci1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMS4xMjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogI2ZmNzY3NjtcXG59XFxuXFxuLmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2RjZGVlMjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuMzEyNXJlbSByZ2JhKDUwLCA2MywgODYsIDAuMTEpO1xcbn1cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIG1pbi13aWR0aDogNnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmIwNTc7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkYjgxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWl4aW5zL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ZhcnMvdmFycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0Usc0JBQUE7QUFGRjs7QUFLQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUlFO0VBVEY7SUFVSSxnQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUMvQ0YsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VEK0NFLGtCQUFBO0VBQ0EsY0V2RGU7QUZ3RG5COztBQUdBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJFaEVrQjtBRmdFcEI7QUFFRTtFQUNFLHNEQUFBO0FBQUo7QUFHRTtFQUNFLHdCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQ2pGQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFRGlGQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCRXRGbUI7RUZ1Rm5CLGNFckZrQjtBRnFGcEI7QUFFRTtFQUNFLHlCRTNGZ0I7QUYyRnBCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJy4vZm9udHMvZm9udHMnO1xcclxcbkB1c2UgJy4vdmFycy92YXJzJztcXHJcXG5AdXNlICcuL21peGlucy9taXhpbnMnO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXHJcXG4gIG1pbi13aWR0aDogMTdyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAuMzc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxyXFxuICAgIG1pbi13aWR0aDogMjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICByb3ctZ2FwOiAwLjNyZW07XFxyXFxuXFxyXFxuICAmX19lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgQGluY2x1ZGUgbWl4aW5zLnRleHQtc20tc2VtaS1ib2xkO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiB2YXJzLiRjb2xvci1yZWQtbWVkaXVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxyXFxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXJzLiRjb2xvci1ncmV5LWxpZ2h0ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFycy4kY29sb3Itd2hpdGUtbGlnaHQ7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuMzEyNXJlbSByZ2JhKHZhcnMuJGNvbG9yLWJsdWUtaGFyZGVyLCAwLjExKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIEBpbmNsdWRlIG1peGlucy50ZXh0LW1kLXNlbWktYm9sZDtcXHJcXG4gIG1pbi13aWR0aDogNnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcnMuJGNvbG9yLWdyZWVuLW1lZGl1bTtcXHJcXG4gIGNvbG9yOiB2YXJzLiRjb2xvci13aGl0ZS1saWdodDtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJzLiRjb2xvci1ncmVlbi1saWdodDtcXHJcXG4gIH1cXHJcXG59XCIsXCJAdXNlICcuL3NyYy9zdHlsZXMvdmFycy92YXJzJztcXHJcXG5cXHJcXG5AbWl4aW4gdGV4dC1tZC1zZW1pLWJvbGQge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiB0ZXh0LXNtLXNlbWktYm9sZCB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcXHJcXG59XFxyXFxuXCIsXCIkY29sb3ItZ3JleS1saWdodGVyOiAjZGNkZWUyO1xcclxcbiRjb2xvci1ibHVlLWhhcmRlcjogIzMyM0Y1NjM2O1xcclxcbiRjb2xvci1ncmVlbi1saWdodDogIzRmZGI4MTtcXHJcXG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjMjZiMDU3O1xcclxcbiRjb2xvci1yZWQtbWVkaXVtOiAjZmY3Njc2O1xcclxcbiRjb2xvci13aGl0ZS1saWdodDogI2ZmZmZmZjtcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XHJcbmltcG9ydCB7IHBhdGNoLCBoIH0gZnJvbSAnLi9zaGFyZWQvdi1kb20nO1xyXG5pbXBvcnQgeyBlbWFpbFBhdHRlcm4sIHBhc3N3b3JkUGF0dGVybiB9IGZyb20gJy4vc2hhcmVkL3ZhbGlkYXRpb24tcGF0dGVybnMnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vc3RvcmUvZm9ybSc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcclxuY29uc3Qgcm9vdCA9IGNvbnRhaW5lcjtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWdpc3RyYXRpb25Gb3JtID0gKHN0b3JlKSA9PiB7XHJcbiAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaXJ0aERhdGUsIGVtYWlsLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkIH0gPSBzdG9yZS5zdGF0ZTtcclxuICBjb25zdCB7IGlzU2hvd1ZhbGlkTWVzc2FnZXMgfSA9IHN0b3JlLnN0YXRlO1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnZhbGlkID0gdHJ1ZTtcclxuICAgIHN3aXRjaCAoaW52YWxpZCkge1xyXG4gICAgICBjYXNlIGZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZpcnN0TmFtZS5sZW5ndGggPiAyNTpcclxuICAgICAgY2FzZSBsYXN0TmFtZS5sZW5ndGggPCAyIHx8IGxhc3ROYW1lLmxlbmd0aCA+IDI1OlxyXG4gICAgICBjYXNlICFiaXJ0aERhdGUubGVuZ3RoOlxyXG4gICAgICBjYXNlICFlbWFpbC5sZW5ndGg6XHJcbiAgICAgIGNhc2UgIWVtYWlsLm1hdGNoKGVtYWlsUGF0dGVybik6XHJcbiAgICAgIGNhc2UgIXBhc3N3b3JkLm1hdGNoKHBhc3N3b3JkUGF0dGVybik6XHJcbiAgICAgIGNhc2UgIWNvbmZpcm1QYXNzd29yZC5tYXRjaChwYXNzd29yZFBhdHRlcm4pOlxyXG4gICAgICBjYXNlIHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQ6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN0b3JlLnNldFN0YXRlKHsgLi4uc3RvcmUuc3RhdGUsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbGlkRm9ybSA9IHZhbGlkYXRlRm9ybSgpO1xyXG4gICAgaWYgKGlzVmFsaWRGb3JtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdG9yZS5zdGF0ZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgICAgICBzdG9yZS5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgYmlydGhEYXRlOiAnJyxcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IC4uLnN0b3JlLnN0YXRlLCBpc1Nob3dWYWxpZE1lc3NhZ2VzOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAnYXBwJyB9LCBbXHJcbiAgICBoKCdmb3JtJywgeyBjbGFzczogJ2Zvcm0nIH0sIFtcclxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2lucHV0LXdyYXBwZXInIH0sIFtcclxuICAgICAgICBoKCdsYWJlbCcsIHt9LCBbXHJcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaXJzdE5hbWUnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn0JjQvNGPJyxcclxuICAgICAgICAgICAgb25pbnB1dDogaGFuZGxlT25DaGFuZ2UsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdKSxcclxuICAgICAgICBpc1Nob3dWYWxpZE1lc3NhZ2VzXHJcbiAgICAgICAgICA/ICghZmlyc3ROYW1lLmxlbmd0aCAmJiBoKCdkaXYnLCB7IGNsYXNzOiAnaW5wdXQtd3JhcHBlcl9fZXJyb3ItbWVzc2FnZScgfSwgWyfQn9C+0LbQsNC70YPQudGB0YLQsCDRg9C60LDQttC40YLQtSDQmNC80Y8nXSkpIHx8XHJcbiAgICAgICAgICAgICgoZmlyc3ROYW1lLmxlbmd0aCA8IDIgfHwgZmlyc3ROYW1lLmxlbmd0aCA+IDI1KSAmJlxyXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdpbnB1dC13cmFwcGVyX19lcnJvci1tZXNzYWdlJyB9LCBbJ9Cd0LXQstC10YDQvdCw0Y8g0LTQu9C40L3QvdCwINC40LzQtdC90LgnXSkpXHJcbiAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICBdKSxcclxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2lucHV0LXdyYXBwZXInIH0sIFtcclxuICAgICAgICBoKCdsYWJlbCcsIHt9LCBbXHJcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdsYXN0TmFtZScsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgdmFsdWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ9Ck0LDQvNC40LvQuNGPJyxcclxuICAgICAgICAgICAgb25pbnB1dDogaGFuZGxlT25DaGFuZ2UsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdKSxcclxuICAgICAgICBpc1Nob3dWYWxpZE1lc3NhZ2VzXHJcbiAgICAgICAgICA/ICghbGFzdE5hbWUubGVuZ3RoICYmIGgoJ2RpdicsIHsgY2xhc3M6ICdpbnB1dC13cmFwcGVyX19lcnJvci1tZXNzYWdlJyB9LCBbJ9Cf0L7QttCw0LvRg9C50YHRgtCwINGD0LrQsNC20LjRgtC1INCk0LDQvNC40LvQuNGOJ10pKSB8fFxyXG4gICAgICAgICAgICAoKGxhc3ROYW1lLmxlbmd0aCA8IDIgfHwgbGFzdE5hbWUubGVuZ3RoID4gMjUpICYmXHJcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2lucHV0LXdyYXBwZXJfX2Vycm9yLW1lc3NhZ2UnIH0sIFsn0J3QtdCy0LXRgNC90LDRjyDQtNC70LjQvdC90LAg0YTQsNC80LjQu9C40LgnXSkpXHJcbiAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICBdKSxcclxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2lucHV0LXdyYXBwZXInIH0sIFtcclxuICAgICAgICBoKCdsYWJlbCcsIHt9LCBbXHJcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdiaXJ0aERhdGUnLFxyXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsXHJcbiAgICAgICAgICAgIHZhbHVlOiBiaXJ0aERhdGUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRjycsXHJcbiAgICAgICAgICAgIG1heDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcclxuICAgICAgICAgICAgb25jaGFuZ2U6IGhhbmRsZU9uQ2hhbmdlLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgaXNTaG93VmFsaWRNZXNzYWdlc1xyXG4gICAgICAgICAgPyAhYmlydGhEYXRlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAnaW5wdXQtd3JhcHBlcl9fZXJyb3ItbWVzc2FnZScgfSwgWyfQn9C+0LbQsNC70YPQudGB0YLQsCDRg9C60LDQttC40YLQtSDQtNCw0YLRgyDRgNC+0LbQtNC10L3QuNGPJ10pXHJcbiAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICBdKSxcclxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2lucHV0LXdyYXBwZXInIH0sIFtcclxuICAgICAgICBoKCdsYWJlbCcsIHt9LCBbXHJcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBlbWFpbCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfQrdC70LXQutGC0YDQvtC90L3QsNGPINC/0L7Rh9GC0LAnLFxyXG4gICAgICAgICAgICBvbmlucHV0OiBoYW5kbGVPbkNoYW5nZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIGlzU2hvd1ZhbGlkTWVzc2FnZXNcclxuICAgICAgICAgID8gIWVtYWlsLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAnaW5wdXQtd3JhcHBlcl9fZXJyb3ItbWVzc2FnZScgfSwgWyfQn9C+0LbQsNC70YPQudGB0YLQsCDRg9C60LDQttC40YLQtSDRjdC70LXQutGC0YDQvtC90L3Rg9GOINC/0L7Rh9GC0YMnXSlcclxuICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgIF0pLFxyXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAnaW5wdXQtd3JhcHBlcicgfSwgW1xyXG4gICAgICAgIGgoJ2xhYmVsJywge30sIFtcclxuICAgICAgICAgIGgoJ2lucHV0Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2lucHV0JyxcclxuICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgdmFsdWU6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ9Cf0LDRgNC+0LvRjCcsXHJcbiAgICAgICAgICAgIG9uaW5wdXQ6IGhhbmRsZU9uQ2hhbmdlLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgaXNTaG93VmFsaWRNZXNzYWdlc1xyXG4gICAgICAgICAgPyAoIXBhc3N3b3JkLmxlbmd0aCAmJiBoKCdkaXYnLCB7IGNsYXNzOiAnaW5wdXQtd3JhcHBlcl9fZXJyb3ItbWVzc2FnZScgfSwgWyfQn9C+0LbQsNC70YPQudGB0YLQsCDRg9C60LDQttC40YLQtSDQv9Cw0YDQvtC70YwnXSkpIHx8XHJcbiAgICAgICAgICAgICghcGFzc3dvcmQubWF0Y2gocGFzc3dvcmRQYXR0ZXJuKSAmJlxyXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdpbnB1dC13cmFwcGVyX19lcnJvci1tZXNzYWdlJyB9LCBbXHJcbiAgICAgICAgICAgICAgICAn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0LwgMSDRgdC40LzQstC+0Lsg0LLQtdGA0YXQvdC10LPQviDRgNC10LPQuNGB0YLRgNCwLCDRhtC40YTRgNGDINC+0YIgMS05INC4INGB0LjQvNCy0L7QuyAhQCQjJSAnLFxyXG4gICAgICAgICAgICAgIF0pKVxyXG4gICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgXSksXHJcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdpbnB1dC13cmFwcGVyJyB9LCBbXHJcbiAgICAgICAgaCgnbGFiZWwnLCB7fSwgW1xyXG4gICAgICAgICAgaCgnaW5wdXQnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnY29uZmlybVBhc3N3b3JkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbmZpcm1QYXNzd29yZCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y8nLFxyXG4gICAgICAgICAgICBvbmlucHV0OiBoYW5kbGVPbkNoYW5nZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIGlzU2hvd1ZhbGlkTWVzc2FnZXNcclxuICAgICAgICAgID8gKCFjb25maXJtUGFzc3dvcmQubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2lucHV0LXdyYXBwZXJfX2Vycm9yLW1lc3NhZ2UnIH0sIFsn0J/QvtC20LDQu9GD0LnRgdGC0LAg0YPQutCw0LbQuNGC0LUg0L/QsNGA0L7Qu9GMJ10pKSB8fFxyXG4gICAgICAgICAgICAocGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCAmJlxyXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdpbnB1dC13cmFwcGVyX19lcnJvci1tZXNzYWdlJyB9LCBbJ9Cf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgiddKSlcclxuICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgIF0pLFxyXG4gICAgICBoKCdidXR0b24nLCB7IHR5cGU6ICdidXR0b24nLCBvbmNsaWNrOiBoYW5kbGVPblN1Ym1pdCwgY2xhc3M6ICdidXR0b24nIH0sIFsn0J7RgtC/0YDQsNCy0LjRgtGMJ10pLFxyXG4gICAgXSksXHJcbiAgXSk7XHJcbn07XHJcblxyXG5sZXQgYXBwID0gcGF0Y2goUmVnaXN0cmF0aW9uRm9ybShzdG9yZSksIHJvb3QpO1xyXG5cclxuc3RvcmUub25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB7XHJcbiAgcGF0Y2goUmVnaXN0cmF0aW9uRm9ybShzdG9yZSksIGFwcCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJURVhUX05PREVfVFlQRSIsImgiLCJ0eXBlIiwicHJvcHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInBhdGNoUHJvcCIsIm5vZGUiLCJrZXkiLCJ2YWwiLCJuZXh0VmFsIiwic3RhcnRzV2l0aCIsImV2ZW50TmFtZSIsInNsaWNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhZ05hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJwYXRjaFByb3BzIiwibmV4dFByb3BzIiwibWVyZ2VkUHJvcHMiLCJfb2JqZWN0U3ByZWFkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwYXRjaENoaWxkcmVuIiwicGFyZW50IiwidkNoaWxkcmVuIiwibmV4dFZDaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGUiLCJpZHgiLCJwYXRjaE5vZGUiLCJuZXh0Tm9kZSIsImNyZWF0ZURPTU5vZGUiLCJyZXBsYWNlV2l0aCIsInZDaGlsZCIsImFwcGVuZCIsInZOb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIm5leHRWTm9kZSIsInJlbW92ZSIsInJlY3ljbGVOb2RlIiwibm9kZVR5cGUiLCJub2RlVmFsdWUiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwibWFwIiwiY2FsbCIsInBhdGNoIiwidiIsImV2ZW50IiwicGFzc3dvcmRQYXR0ZXJuIiwiZW1haWxQYXR0ZXJuIiwic3RvcmUiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlydGhEYXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImlzU2hvd1ZhbGlkTWVzc2FnZXMiLCJvblN0YXRlQ2hhbmdlZCIsInNldFN0YXRlIiwibmV4dFN0YXRlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcHBseSIsIm93bktleXMiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ0YXJnZXQiLCJzb3VyY2UiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiY29udGFpbmVyIiwiYm9keSIsInJvb3QiLCJSZWdpc3RyYXRpb25Gb3JtIiwiX3N0b3JlJHN0YXRlIiwidmFsaWRhdGVGb3JtIiwiaW52YWxpZCIsIm1hdGNoIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVPblN1Ym1pdCIsIl9yZWYiLCJfY2FsbGVlIiwiaXNWYWxpZEZvcm0iLCJyZXNwb25zZSIsInBheWxvYWQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2giLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsInBsYWNlaG9sZGVyIiwib25pbnB1dCIsIm1heCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm9uY2hhbmdlIiwib25jbGljayIsImFwcCJdLCJzb3VyY2VSb290IjoiIn0=