(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9939],{

/***/ 68597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ Support; }
/* harmony export */ });
/* unused harmony export SupportDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Support = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"
  }));
});
Support.displayName = 'Support';
var SupportDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 46422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ Redo; }
/* harmony export */ });
/* unused harmony export RedoDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Redo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 512 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2l-17.6-17.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8 229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3 163.8-62.5 226.3 0l17.2 17.2z"
  }));
});
Redo.displayName = 'Redo';
var RedoDimensions = {
  height: 512,
  width: 512
};

/***/ }),

/***/ 23493:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var debounce = __webpack_require__(23279),
    isObject = __webpack_require__(13218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 42815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HomeIllustration; }
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
;// CONCATENATED MODULE: ./lib/constants/animations.js

var rotate = (0,styled_components_browser_esm/* keyframes */.F4)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var fadeIn = (0,styled_components_browser_esm/* keyframes */.F4)(["0%{opacity:0;}100%{opacity:1;}"]);
var rotateMixin = (0,styled_components_browser_esm/* css */.iv)(["animation:", " 0.8s infinite linear;"], rotate);
;// CONCATENATED MODULE: ./components/collectives/HomeIllustration.js



var Illustration = styled_components_browser_esm/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "HomeIllustration__Illustration",
  componentId: "sc-xcwqm6-0"
})(["max-width:100%;max-height:100%;", " ", " ", ";"], index_esm/* space */.Dh, index_esm/* display */.jf, function (_ref) {
  var animate = _ref.animate;
  return animate ? rotateMixin : null;
});
/* harmony default export */ var HomeIllustration = (Illustration);

/***/ }),

/***/ 47667:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56562);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["display"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/*
 * Illustrations that use the next/image component.
 */



function NextIllustration(_ref) {
  var display = _ref.display,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    display: display,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({}, props))
  });
}

NextIllustration.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NextIllustration",
  "props": {
    "display": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "src": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "width": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "height": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (NextIllustration);

/***/ }),

/***/ 99849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": function() { return /* binding */ Title; },
/* harmony export */   "VY": function() { return /* binding */ Content; },
/* harmony export */   "Z0": function() { return /* binding */ Separator; },
/* harmony export */   "ZP": function() { return /* binding */ FAQ; },
/* harmony export */   "kS": function() { return /* binding */ Entry; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22733);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54590);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16678);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);







var _excluded = ["children"],
    _excluded2 = ["title", "children", "withBorderLeft", "withNewButtons", "titleProps"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











/** Main entry container */



var Entry = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].details.withConfig */ .ZP.details.withConfig({
  displayName: "FAQ__Entry",
  componentId: "sc-1qzv7kx-0"
})(["&[open]{border-color:", ";summary::after{content:'\u2212';}}summary{padding-top:", "px;padding-bottom:", "px;font-size:13px;font-weight:500;color:", ";list-style:none;&:hover{color:", ";}button{display:none;}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;color:", ";font-weight:bold;}summary::-webkit-details-marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.1'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.600'));
var CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "FAQ__CollapseBtn",
  componentId: "sc-1qzv7kx-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_9__/* .size */ .dp, styled_system__WEBPACK_IMPORTED_MODULE_9__/* .space */ .Dh);
/** Entry title */

var Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)(function (_ref) {
  var children = _ref.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("summary", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(CollapseBtn, {
      size: 18,
      ml: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_15__/* .ChevronUp */ .Kh, {
        size: "1em",
        "data-item": "chevron-up",
        style: {
          marginTop: -1
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_16__/* .ChevronDown */ ._M, {
        size: "1em",
        "data-item": "chevron-down"
      })]
    })]
  }));
}).withConfig({
  displayName: "FAQ__Title",
  componentId: "sc-1qzv7kx-2"
})(["cursor:pointer;display:flex;justify-content:space-between;align-items:baseline;"]);
/** Entry content (hidden by default) */

var Content = (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu).withConfig({
  displayName: "FAQ__Content",
  componentId: "sc-1qzv7kx-3"
})([""]);
Content.defaultProps = {
  py: 2,
  fontSize: '13px',
  color: 'black.600'
};
var Separator = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].hr.withConfig */ .ZP.hr.withConfig({
  displayName: "FAQ__Separator",
  componentId: "sc-1qzv7kx-4"
})(["background:", ";width:100%;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.black.400'));
/** A simple wrapper to group entries */

var EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_14__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "FAQ__EntryContainer",
  componentId: "sc-1qzv7kx-5"
})(["", "{", " ", "}"], Entry, function (props) {
  return props.withNewButtons ? (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["[data-item='chevron-up']{display:none;}&[open]{[data-item='chevron-up']{display:inline-block;}[data-item='chevron-down']{display:none;}}summary::after{display:none;}button{display:block;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["", "{display:none;}"], CollapseBtn);
}, function (props) {
  return props.withBorderLeft && (0,styled_components__WEBPACK_IMPORTED_MODULE_14__/* .css */ .iv)(["border-left:1px solid #dcdee0;padding-left:8px;&:focus-within,&:hover{border-color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__/* .themeGet */ .R)('colors.primary.500'));
});
/**
 * A small FAQ with expendable contents.
 */

var FAQ = /*#__PURE__*/function (_Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(FAQ, _Component);

  var _super = _createSuper(FAQ);

  function FAQ() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, FAQ);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(FAQ, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          withBorderLeft = _this$props.withBorderLeft,
          withNewButtons = _this$props.withNewButtons,
          titleProps = _this$props.titleProps,
          props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6___default()(_this$props, _excluded2);

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
        children: [title !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__.P, _objectSpread(_objectSpread({
          fontWeight: "bold",
          mb: 1,
          color: "black.900"
        }, titleProps), {}, {
          children: title || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            id: "FAQ",
            defaultMessage: [{
              "type": 0,
              "value": "FAQ"
            }]
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(EntryContainer, {
          withBorderLeft: withBorderLeft,
          withNewButtons: withNewButtons,
          children: children
        })]
      }));
    }
  }]);

  return FAQ;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);


FAQ.__docgenInfo = {
  "description": "A small FAQ with expendable contents.",
  "methods": [],
  "displayName": "FAQ",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "title": {
      "description": "The title to display above entries. Set to null to disable it.",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "titleProps": {
      "description": "Props for styling the title",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "withBorderLeft": {
      "description": "If true, a border will be displayed on the left",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "withNewButtons": {
      "description": "If true, will display a button with a chevron instead of the `+` sign",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["../Grid"]
};

/***/ }),

/***/ 65106:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NZ": function() { return /* binding */ SectionTitle; },
/* harmony export */   "TI": function() { return /* binding */ SectionDescription; },
/* harmony export */   "U3": function() { return /* binding */ MainTitle; },
/* harmony export */   "WC": function() { return /* binding */ MainDescription; }
/* harmony export */ });
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16678);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90998);




var MainTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_2__.H1).withConfig({
  displayName: "Text__MainTitle",
  componentId: "sc-zcygqo-0"
})(["font-size:40px;font-weight:700;line-height:48px;letter-spacing:-0.04em;color:", ";@media screen and (min-width:40em){font-size:52px;font-weight:900;line-height:64px;letter-spacing:0.012em;}@media screen and (min-width:64em){font-size:64px;line-height:72px;}", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__/* .themeGet */ .R)('colors.primary.900'), styled_system__WEBPACK_IMPORTED_MODULE_1__/* .typography */ .cp);
var MainDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_2__.P).withConfig({
  displayName: "Text__MainDescription",
  componentId: "sc-zcygqo-1"
})(["font-weight:500;font-size:16px;line-height:24px;color:", ";@media screen and (min-width:40em){font-size:20px;line-height:28px;letter-spacing:-0.008em;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__/* .themeGet */ .R)('colors.black.800'));
var SectionTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_2__.H2).withConfig({
  displayName: "Text__SectionTitle",
  componentId: "sc-zcygqo-2"
})(["font-weight:700;font-size:32px;line-height:40px;letter-spacing:-0.008em;color:", ";@media screen and (min-width:40em){font-weight:700;font-size:40px;line-height:48px;letter-spacing:-0.04em;}@media screen and (min-width:64em){font-size:52px;line-height:56px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__/* .themeGet */ .R)('colors.primary.900'));
var SectionDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_2__.P).withConfig({
  displayName: "Text__SectionDescription",
  componentId: "sc-zcygqo-3"
})(["font-weight:500;font-size:18px;line-height:26px;color:", ";@media screen and (min-width:40em){font-size:20px;line-height:28px;letter-spacing:-0.008em;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__/* .themeGet */ .R)('colors.black.800'));

/***/ }),

/***/ 95434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PricingPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(23493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@styled-icons/styled-icon/index.esm.js
var index_esm = __webpack_require__(54142);
;// CONCATENATED MODULE: ./node_modules/@styled-icons/remix-line/ArrowDown/ArrowDown.esm.js



var ArrowDown = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react.createElement(index_esm.StyledIconBase, (0,esm_extends/* default */.Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m13 16.172 5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
  }));
});
ArrowDown.displayName = 'ArrowDown';
var ArrowDownDimensions = {
  height: 24,
  width: 24
};
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var dist_index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/faqs/FAQ.js
var FAQ = __webpack_require__(99849);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/faqs/PricingFAQ.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var PricingFAQ = function PricingFAQ(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* default */.ZP, _objectSpread(_objectSpread({
    withNewButtons: true
  }, props), {}, {
    title: "FAQ's",
    titleProps: {
      color: '#0C2D66',
      fontSize: '28px',
      fontWeight: '500',
      lineHeight: '36px',
      letterSpacing: '-0.008em',
      marginBottom: '32px'
    },
    width: "100%",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.faq.collective.title",
            defaultMessage: [{
              "type": 0,
              "value": "What is a Collective?"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.faq.collective.content",
            defaultMessage: [{
              "type": 0,
              "value": "A group seeking to raise and spend money transparently using the Open Collective platform, representing a community, project, or initiative."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Separator */.Z0, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.faq.fiscalHost.title",
            defaultMessage: [{
              "type": 0,
              "value": "What is a Fiscal Host?"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.faq.fiscalHost.content",
            defaultMessage: [{
              "type": 0,
              "value": "A Fiscal Host holds funds on behalf of Collectives, enabling them to operate using the Host's bank account and legal entity."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Separator */.Z0, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(FAQ/* Entry */.kS, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.faq.platform.title",
            defaultMessage: [{
              "type": 0,
              "value": "How do platform tips work?"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FAQ/* Content */.VY, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.faq.platform.content",
            defaultMessage: [{
              "type": 0,
              "value": "Platform Tips support development of the Open Collective software platform. Contributors to Collectives see the option to give a voluntary Platform Tip at checkout."
            }]
          })
        })
      })]
    })]
  }));
};

PricingFAQ.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PricingFAQ"
};
/* harmony default export */ var faqs_PricingFAQ = (PricingFAQ);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/marketing/Text.js
var marketing_Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
;// CONCATENATED MODULE: ./components/pricing/constants.js
var FISCAL_HOST_ACCESS = ['dashboard', 'outsideFunds', 'bankTransfer', 'creditCard'];
var COLLECTIVE_ACCESS = ['collectivePage', 'outsideFunds', 'bankTransfer', 'creditCard'];
var PLANS = [{
  id: 'start',
  fee: 'Free',
  actionLink: '/organizations/new',
  actionType: 'joinAsFiscalHost'
}, {
  id: 'grow',
  fee: '15%',
  actionLink: '/organizations/new',
  actionType: 'joinAsFiscalHost'
}, {
  id: 'scale',
  fee: 'Negotiable',
  actionLink: '/help',
  actionType: 'contactUs'
}];
var FEATURES = [{
  id: 'unlimitedCollectives',
  plans: ['start', 'grow', 'scale']
}, {
  id: 'addFunds',
  plans: ['start', 'grow', 'scale']
}, {
  id: 'configureHost',
  plans: ['grow', 'scale']
}];
;// CONCATENATED MODULE: ./components/pricing/ForCollectiveCard.js















var ListWrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "ForCollectiveCard__ListWrapper",
  componentId: "sc-1wuus9h-0"
})(["list-style:none;padding-left:0;"]);
var ListItem = styled_components_browser_esm/* default.li.withConfig */.ZP.li.withConfig({
  displayName: "ForCollectiveCard__ListItem",
  componentId: "sc-1wuus9h-1"
})(["font-size:13px;line-height:16px;color:", ";margin-top:15px;margin-bottom:15px;background:url('/static/images/pricing/checkMark.svg') no-repeat left center;padding-left:26px;@media screen and (min-width:64em){:first-of-type{margin-top:0;}}"], (0,dist_index_esm/* themeGet */.R)('colors.black.900'));
var FeeData = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "ForCollectiveCard__FeeData",
  componentId: "sc-1wuus9h-2"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";margin-right:8px;"], (0,dist_index_esm/* themeGet */.R)('colors.blue.700'));
var FeeDataNoWrap = (0,styled_components_browser_esm/* default */.ZP)(FeeData).withConfig({
  displayName: "ForCollectiveCard__FeeDataNoWrap",
  componentId: "sc-1wuus9h-3"
})(["white-space:nowrap;margin-right:0px;"]);
var FeeDescription = (0,styled_components_browser_esm/* default */.ZP)(FeeData).withConfig({
  displayName: "ForCollectiveCard__FeeDescription",
  componentId: "sc-1wuus9h-4"
})(["color:", ";"], (0,dist_index_esm/* themeGet */.R)('colors.black.900'));
var AccessToWrapper = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "ForCollectiveCard__AccessToWrapper",
  componentId: "sc-1wuus9h-5"
})([":nth-child(1),:nth-child(2){margin-bottom:46px;}"]);
var Card = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "ForCollectiveCard__Card",
  componentId: "sc-1wuus9h-6"
})(["@media screen and (min-width:52em){width:700px;}@media screen and (min-width:64em){width:832px;}@media screen and (min-width:88em){width:862px;}"]);
var messages = (0,lib.defineMessages)({
  'pricing.collectivePage': {
    id: "pricing.collectivePage",
    defaultMessage: [{
      "type": 0,
      "value": "Collective page"
    }]
  },
  'pricing.collectivePage.description': {
    id: "pricing.collectivePage.description",
    defaultMessage: [{
      "type": 0,
      "value": "A public page for your community to receive payments, manage expenses, and update supporters, transparent by design."
    }]
  },
  'pricing.outsideFunds': {
    id: "pricing.outsideFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Outside funds"
    }]
  },
  'pricing.outsideFunds.description': {
    id: "SqpA8z",
    defaultMessage: [{
      "type": 0,
      "value": "Manually credit Collective budgets with funds received outside the platform (e.g., cash, historical transactions, or third party channels like a shop)."
    }]
  },
  'pricing.bankTransfer': {
    id: "pricing.bankTransfer",
    defaultMessage: [{
      "type": 0,
      "value": "Bank transfer payments"
    }]
  },
  'pricing.bankTransfer.description': {
    id: "LnnC1J",
    defaultMessage: [{
      "type": 0,
      "value": "Automatically provide wire instructions and a reference number for tracking transactions."
    }]
  },
  'pricing.creditCard': {
    id: "pricing.creditCard",
    defaultMessage: [{
      "type": 0,
      "value": "Credit card processing"
    }]
  },
  'pricing.creditCard.description': {
    id: "uM2WZi",
    defaultMessage: [{
      "type": 0,
      "value": "Receive financial contributions via credit card, automatically updating your budget for transparent tracking. *Stripe fees apply"
    }]
  }
});

var ForCollectiveCard = function ForCollectiveCard() {
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Card, {
    padding: ['24px', null, '32px'],
    width: ['288px', '636px'],
    borderRadius: "8px",
    border: "1px solid #DCDEE0",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      justifyContent: "center",
      alignItems: "center",
      mb: ['32px', '35px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: "72px",
        height: "72px",
        mr: "16px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          src: "/static/images/pricing/for-collective-illustration.png",
          alt: "Collective Illustration",
          width: 72,
          height: 72
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: [null, '500px', '672px', null, '702px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
          fontSize: ['18px', '20px'],
          lineHeight: ['26px', '28px'],
          color: "primary.900",
          fontWeight: "500",
          letterSpacing: [null, '-0.008em'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.forCollective",
            defaultMessage: [{
              "type": 0,
              "value": "For Collectives"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          my: "8px"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.forCollective.description",
            defaultMessage: [{
              "type": 0,
              "value": "Bring your initiative to life"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: ['flex-start', null, 'center'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        mr: [null, '41px', '72px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
          fontSize: ['18px', '20px'],
          lineHeight: ['26px', '28px'],
          letterSpacing: [null, '-0.008em'],
          color: "primary.900",
          mb: "16px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.forCollective.fees.header",
            defaultMessage: [{
              "type": 0,
              "value": "We help you thrive"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: "16px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FeeDescription, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.platformFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "fee"
                }, {
                  "type": 0,
                  "value": " No fees on incoming payments"
                }],
                values: {
                  fee: /*#__PURE__*/(0,jsx_runtime.jsx)(FeeData, {
                    children: "$0"
                  })
                }
              }), ' ', "\xB9"]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            my: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FeeDescription, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.payoutFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "fee"
                }, {
                  "type": 0,
                  "value": " No fees on outgoing payments"
                }],
                values: {
                  fee: /*#__PURE__*/(0,jsx_runtime.jsx)(FeeData, {
                    children: "$0"
                  })
                }
              }), ' ', "\xB9"]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            my: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FeeDescription, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.forCollective.hostFees",
                defaultMessage: [{
                  "type": 8,
                  "value": "Fee",
                  "children": [{
                    "type": 0,
                    "value": "Host fees"
                  }]
                }, {
                  "type": 0,
                  "value": " may apply depending on your "
                }, {
                  "type": 8,
                  "value": "FiscalHostLink",
                  "children": [{
                    "type": 0,
                    "value": "Fiscal Host"
                  }]
                }],
                values: {
                  Fee: function Fee(msg) {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(FeeDataNoWrap, {
                      children: msg
                    });
                  },
                  FiscalHostLink: (0,I18nFormatters/* getI18nLink */.fw)({
                    href: 'https://opencollective.com/fiscal-hosting',
                    openInNewTab: true
                  })
                }
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "black.700",
          children: ["(1)", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.notes.paymentProcessor",
            defaultMessage: [{
              "type": 0,
              "value": "Payment processor fees apply when using "
            }, {
              "type": 8,
              "value": "stripeLink",
              "children": []
            }, {
              "type": 0,
              "value": ", "
            }, {
              "type": 8,
              "value": "paypalLink",
              "children": []
            }, {
              "type": 0,
              "value": ", or "
            }, {
              "type": 8,
              "value": "transferwiseLink",
              "children": []
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              stripeLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://stripe.com/pricing',
                openInNewTab: true,
                children: 'Stripe'
              }),
              paypalLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://paypal.com/pricing',
                openInNewTab: true,
                children: 'PayPal'
              }),
              transferwiseLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://wise.com/pricing',
                openInNewTab: true,
                children: 'Wise'
              })
            }
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ListWrapper, {
          as: "ul",
          mt: ['32px', 0],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "DDNNLJ",
              defaultMessage: [{
                "type": 0,
                "value": "Fundraising and crowdfunding features"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "pricing.addFunds",
              defaultMessage: [{
                "type": 0,
                "value": "Manually add funds from other channels"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "GuPr/j",
              defaultMessage: [{
                "type": 0,
                "value": "Community engagement tools"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "YhM3lt",
              defaultMessage: [{
                "type": 0,
                "value": "Transparent budget"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "zixHKi",
              defaultMessage: [{
                "type": 0,
                "value": "Expense payouts in local currencies"
              }]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          display: "flex",
          flexDirection: ['column', null, null, null, 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/create",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              buttonStyle: "primary",
              width: ['224px', '226px', null, '237px', '160px'],
              py: "8px",
              my: "8px",
              px: [null, null, '16px'],
              whiteSpace: "nowrap",
              mr: [null, null, null, null, 2],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "home.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Collective"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/search?isHost=true",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              buttonStyle: "secondary",
              py: "8px",
              px: "16px",
              my: "8px",
              whiteSpace: "nowrap",
              width: ['224px', '226px', null, '237px', '139px'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "join.findAFiscalHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Find a Fiscal Host"
                }]
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
      mt: "40px",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.06em",
      color: "black.900",
      textTransform: "uppercase",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "pricing.forCollective.accessTo",
        defaultMessage: [{
          "type": 0,
          "value": "You will also have access to"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
      mt: "8px"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      mt: "32px",
      justifyContent: "space-between",
      children: COLLECTIVE_ACCESS.map(function (access) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(AccessToWrapper, {
            display: "flex",
            flexDirection: ['column', 'row', 'column'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: "12px",
              width: access === 'collectivePage' ? '32px' : null,
              height: access === 'collectivePage' ? '32px' : null,
              mr: [null, '13px'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
                src: "/static/images/pricing/".concat(access, "-icon.").concat(access === 'collectivePage' ? 'png' : 'svg'),
                alt: "Icon",
                width: 32,
                height: 32
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              width: ['112px', '230px', '176px'],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                fontSize: "15px",
                lineHeight: "22px",
                color: "black.900",
                fontWeight: "500",
                mb: "8px",
                children: intl.formatMessage(messages["pricing.".concat(access)])
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "13px",
                lineHeight: "16px",
                color: "black.900",
                children: intl.formatMessage(messages["pricing.".concat(access, ".description")])
              })]
            })]
          })
        }, access);
      })
    })]
  });
};

ForCollectiveCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ForCollectiveCard"
};
/* harmony default export */ var pricing_ForCollectiveCard = (ForCollectiveCard);
;// CONCATENATED MODULE: ./components/pricing/ForFiscalHostCard.js















var ForFiscalHostCard_ListWrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "ForFiscalHostCard__ListWrapper",
  componentId: "sc-wp4jiz-0"
})(["list-style:none;padding-left:0;"]);
var ForFiscalHostCard_ListItem = styled_components_browser_esm/* default.li.withConfig */.ZP.li.withConfig({
  displayName: "ForFiscalHostCard__ListItem",
  componentId: "sc-wp4jiz-1"
})(["font-size:13px;line-height:16px;color:", ";margin-top:19px;margin-bottom:19px;background:", ";padding-left:26px;:first-of-type,:last-of-type{margin-top:0;margin-bottom:0;}"], function (props) {
  return props.uncheck ? (0,dist_index_esm/* themeGet */.R)('colors.black.500') : (0,dist_index_esm/* themeGet */.R)('colors.black.900');
}, function (props) {
  return props.uncheck ? "url('/static/images/pricing/minusIcon.svg') no-repeat left center" : "url('/static/images/pricing/checkMark.svg') no-repeat left center";
});
var ForFiscalHostCard_FeeData = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "ForFiscalHostCard__FeeData",
  componentId: "sc-wp4jiz-2"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";margin-right:8px;"], (0,dist_index_esm/* themeGet */.R)('colors.blue.700'));
var ForFiscalHostCard_FeeDescription = (0,styled_components_browser_esm/* default */.ZP)(Text.P).withConfig({
  displayName: "ForFiscalHostCard__FeeDescription",
  componentId: "sc-wp4jiz-3"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";"], (0,dist_index_esm/* themeGet */.R)('colors.black.900'));
var ForFiscalHostCard_AccessToWrapper = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "ForFiscalHostCard__AccessToWrapper",
  componentId: "sc-wp4jiz-4"
})([":nth-child(1),:nth-child(2){margin-bottom:46px;}"]);
var ForFiscalHostCard_Card = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "ForFiscalHostCard__Card",
  componentId: "sc-wp4jiz-5"
})(["@media screen and (min-width:52em){width:700px;}@media screen and (min-width:64em){width:832px;}@media screen and (min-width:88em){width:862px;}"]);
var ForFiscalHostCard_messages = (0,lib.defineMessages)({
  'pricing.dashboard': {
    id: "cpa6/N",
    defaultMessage: [{
      "type": 0,
      "value": "Host Admin Dashboard"
    }]
  },
  'pricing.dashboard.description': {
    id: "HostDashboard.description",
    defaultMessage: [{
      "type": 0,
      "value": "Easily manage budgets and expenses across all your Collectives, including automated credit card payments through Stripe and one-click payouts via Paypal and Wise."
    }]
  },
  'pricing.outsideFunds': {
    id: "pricing.outsideFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Outside funds"
    }]
  },
  'pricing.outsideFunds.description': {
    id: "wdqJMo",
    defaultMessage: [{
      "type": 0,
      "value": "Manually credit Collective budgets with funds received outside the platform, such as other e-commerce or fundraising tools."
    }]
  },
  'pricing.bankTransfer': {
    id: "pricing.bankTransfer",
    defaultMessage: [{
      "type": 0,
      "value": "Bank transfer payments"
    }]
  },
  'pricing.bankTransfer.description': {
    id: "2oHG9J",
    defaultMessage: [{
      "type": 0,
      "value": "Automatically provide wire instructions and a reference number for tracking. Confirm receipt of funds with one click."
    }]
  },
  'pricing.creditCard': {
    id: "pricing.creditCard",
    defaultMessage: [{
      "type": 0,
      "value": "Credit card processing"
    }]
  },
  'pricing.creditCard.description': {
    id: "nQw9Hb",
    defaultMessage: [{
      "type": 0,
      "value": "Receive financial contributions via credit card, automatically updating each Collective budget. *Stripe fees apply"
    }]
  },
  'pricing.plan.start': {
    id: "table.head.start",
    defaultMessage: [{
      "type": 0,
      "value": "Start"
    }]
  },
  'pricing.plan.grow': {
    id: "table.head.grow",
    defaultMessage: [{
      "type": 0,
      "value": "Grow"
    }]
  },
  'pricing.plan.scale': {
    id: "table.head.scale",
    defaultMessage: [{
      "type": 0,
      "value": "Scale"
    }]
  },
  'pricing.start.fee': {
    id: "pricing.start.fee",
    defaultMessage: [{
      "type": 0,
      "value": "No host fees. No charge"
    }]
  },
  'pricing.start.feeNote': {
    id: "pricing.start.feeNote",
    defaultMessage: [{
      "type": 0,
      "value": "You wont be able to charge Collectives or set any Host Fee."
    }]
  },
  'pricing.grow.fee': {
    id: "pricing.grow.fee",
    defaultMessage: [{
      "type": 0,
      "value": "Of the revenue your organization makes through Host Fees ¹"
    }]
  },
  'pricing.grow.feeNote': {
    id: "pricing.grow.feeNote",
    defaultMessage: [{
      "type": 0,
      "value": "Only if you charge for your services"
    }]
  },
  'pricing.scale.fee': {
    id: "pricing.scale.fee",
    defaultMessage: [{
      "type": 0,
      "value": "Shared revenue with Open Collective"
    }]
  },
  'pricing.scale.feeNote': {
    id: "pricing.scale.feeNote",
    defaultMessage: [{
      "type": 0,
      "value": "Depends on volume and amount of transactions"
    }]
  },
  'pricing.unlimitedCollectives': {
    id: "pricing.unlimitedCollectives",
    defaultMessage: [{
      "type": 0,
      "value": "Unlimited Collectives"
    }]
  },
  'pricing.addFunds': {
    id: "pricing.addFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Manually add funds from other channels"
    }]
  },
  'pricing.configureHost': {
    id: "pricing.configureHost",
    defaultMessage: [{
      "type": 0,
      "value": "Ability to configure Host Fees"
    }]
  }
});

var ForFiscalHosts = function ForFiscalHosts() {
  var intl = (0,useIntl/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ForFiscalHostCard_Card, {
    padding: ['24px', null, '32px'],
    width: ['288px', '636px'],
    borderRadius: "8px",
    border: "1px solid #DCDEE0",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      justifyContent: "center",
      alignItems: "center",
      mb: "32px",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: "72px",
        height: "72px",
        mr: "16px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          src: "/static/images/pricing/for-fiscalHost-illustration.png",
          alt: "FiscalHost Illustration",
          width: 72,
          height: 72
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: [null, '500px', '672px', null, '702px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
          fontSize: ['18px', '20px'],
          lineHeight: ['26px', '28px'],
          fontWeight: "500",
          letterSpacing: [null, '-0.00em'],
          color: "primary.900",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.fiscalHost",
            defaultMessage: [{
              "type": 0,
              "value": "For Fiscal Hosts"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          my: "8px"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.forFiscalHost.description",
            defaultMessage: [{
              "type": 0,
              "value": "We succeed when you succeed"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
      fontSize: ['18px', '20px'],
      lineHeight: ['26px', '28px'],
      fontWeight: "500",
      letterSpacing: "-0.008emd",
      color: "primary.900",
      mb: "16px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "pricing.forFiscalHost.fees.header",
        defaultMessage: [{
          "type": 0,
          "value": "Free if you don't have revenue, sharing if you do"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: ['flex-start', 'center'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mr: [null, '33px', '72px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mb: "16px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ForFiscalHostCard_FeeDescription, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.noHostFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "fee"
                }, {
                  "type": 0,
                  "value": " if you don't charge Host Fees to your Collectives"
                }],
                values: {
                  fee: /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_FeeData, {
                    children: "$0"
                  })
                }
              }), ' ', "\xB9"]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            my: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ForFiscalHostCard_FeeDescription, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.hostFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "revshare"
                }, {
                  "type": 0,
                  "value": " Platform Share of your Host Fee revenue"
                }],
                values: {
                  revshare: /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_FeeData, {
                    children: "15%"
                  })
                }
              }), ' ', "\xB2"]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "black.700",
          children: ["(1)", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.notes.paymentProcessor",
            defaultMessage: [{
              "type": 0,
              "value": "Payment processor fees apply when using "
            }, {
              "type": 8,
              "value": "stripeLink",
              "children": []
            }, {
              "type": 0,
              "value": ", "
            }, {
              "type": 8,
              "value": "paypalLink",
              "children": []
            }, {
              "type": 0,
              "value": ", or "
            }, {
              "type": 8,
              "value": "transferwiseLink",
              "children": []
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              stripeLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://stripe.com/pricing',
                openInNewTab: true,
                children: 'Stripe'
              }),
              paypalLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://paypal.com/pricing',
                openInNewTab: true,
                children: 'PayPal'
              }),
              transferwiseLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://wise.com/pricing',
                openInNewTab: true,
                children: 'Wise'
              })
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "black.700",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.platformShareBreakdown",
            defaultMessage: [{
              "type": 0,
              "value": "(2) If your Host Fee is 10% and your Collectives bring in $1,000, the Host gets $100 and $15 (15%) is the Platform Share."
            }]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ForFiscalHostCard_ListWrapper, {
        as: "ul",
        mt: ['16px', 0],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "hQGJj5",
            defaultMessage: [{
              "type": 0,
              "value": "Each Collective gets its own fundraising page"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.accounting",
            defaultMessage: [{
              "type": 0,
              "value": "No more messy spreadsheets! It's all automated, and your accountant will thank you"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "czGYFp",
            defaultMessage: [{
              "type": 0,
              "value": "Manually add funds from other channels, accurately tracking all budgets"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "CWdtPd",
            defaultMessage: [{
              "type": 0,
              "value": "Community engagement features"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "PJubm9",
            defaultMessage: [{
              "type": 0,
              "value": "Financial tracking and transparency means reporting writes itself"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "whNhSE",
            defaultMessage: [{
              "type": 0,
              "value": "Expense management and one-click payouts via Paypal and Wise"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      justifyContent: ['center', 'left'],
      alignItems: ['flex-start', 'center'],
      mt: 10,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: "/organizations/new",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          px: 3,
          py: 2,
          buttonStyle: "primary",
          width: "160px",
          whiteSpace: "nowrap",
          mb: 4,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "home.createHost",
            defaultMessage: [{
              "type": 0,
              "value": "Create a Fiscal Host"
            }]
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
      mt: "40px",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.06em",
      color: "black.900",
      textTransform: "uppercase",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "pricing.forCollective.accessTo",
        defaultMessage: [{
          "type": 0,
          "value": "You will also have access to"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
      mt: "8px"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      mt: "32px",
      justifyContent: "space-between",
      children: FISCAL_HOST_ACCESS.map(function (access) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ForFiscalHostCard_AccessToWrapper, {
            display: "flex",
            flexDirection: ['column', 'row', 'column'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: "12px",
              mr: [null, '13px'],
              size: ['32px', null, '40px'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
                src: "/static/images/pricing/".concat(access, "-icon.svg"),
                alt: "Icon",
                width: 40,
                height: 40
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              width: ['112px', '230px', '176px'],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
                fontSize: "15px",
                lineHeight: "22px",
                color: "black.900",
                fontWeight: "500",
                mb: "8px",
                children: intl.formatMessage(ForFiscalHostCard_messages["pricing.".concat(access)])
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "13px",
                lineHeight: "16px",
                color: "black.900",
                children: intl.formatMessage(ForFiscalHostCard_messages["pricing.".concat(access, ".description")])
              })]
            })]
          })
        }, access);
      })
    })]
  });
};

ForFiscalHosts.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ForFiscalHosts"
};
/* harmony default export */ var ForFiscalHostCard = (ForFiscalHosts);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(99915);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./components/collectives/HomeIllustration.js + 1 modules
var HomeIllustration = __webpack_require__(42815);
;// CONCATENATED MODULE: ./components/pricing/PlatformTip.js



function PlatformTip_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PlatformTip_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PlatformTip_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PlatformTip_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var PlatformTip = function PlatformTip(_ref) {
  var props = extends_default()({}, _ref);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, PlatformTip_objectSpread(PlatformTip_objectSpread({
    my: "16px",
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    border: "1px solid #C2E2FF",
    borderRadius: "8px"
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
      src: "/static/images/pricing/platform-tip.svg"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontSize: "12px",
      lineHeight: "18px",
      color: "black.800",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "pricing.platformTips",
        defaultMessage: [{
          "type": 8,
          "value": "strong",
          "children": [{
            "type": 0,
            "value": "Platform Tips"
          }]
        }, {
          "type": 8,
          "value": "br",
          "children": []
        }, {
          "type": 0,
          "value": "Open Collective is supported by voluntary contributions called Platform Tips, optionally added at checkout, which enable us to keep building the software without charging Collectives directly."
        }],
        values: {
          a: (0,I18nFormatters/* getI18nLink */.fw)({
            href: 'https://docs.opencollective.com/help/financial-contributors/financial-contributors',
            openInNewTab: true
          }),
          strong: I18nFormatters/* I18nBold */.Gl,
          // eslint-disable-next-line react/display-name
          br: function br() {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("br", {});
          }
        }
      })
    })]
  }));
};

PlatformTip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PlatformTip"
};
/* harmony default export */ var pricing_PlatformTip = (PlatformTip);
;// CONCATENATED MODULE: ./components/pricing/Tabs.js








var Tab = styled_components_browser_esm/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "Tabs__Tab",
  componentId: "sc-vifjww-0"
})(["font-size:15px;line-height:22px;color:", ";padding:0;margin-left:8px;margin-right:8px;font-weight:", ";background:none;border:none;white-space:nowrap;text-transform:capitalize;cursor:pointer;&:focus{outline:none;}@media screen and (min-width:64em){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;}"], (0,dist_index_esm/* themeGet */.R)('colors.black.800'), function (props) {
  return props.active ? 'bold' : 'normal';
});

var Tabs = function Tabs(_ref) {
  var activeTab = _ref.activeTab;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    display: "flex",
    px: ['16px', null, null, 0],
    py: ['15px', null, null, 0],
    pt: [null, null, null, 3],
    width: [null, '636px', null, '113px'],
    background: "white",
    justifyContent: ['center', 'flex-start'],
    alignItems: ['center', null, null, 'flex-start'],
    flexDirection: [null, null, null, 'column'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
      href: "#collective",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Tab, {
        active: activeTab === 'collective',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "pricing.forCollective",
          defaultMessage: [{
            "type": 0,
            "value": "For Collectives"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
      href: "#fiscalHost",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Tab, {
        active: activeTab === 'fiscalHost',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "pricing.forFiscalHost",
          defaultMessage: [{
            "type": 0,
            "value": "For fiscal hosts"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
      href: "#faq",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Tab, {
        active: activeTab === 'faq',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "FAQ",
          defaultMessage: [{
            "type": 0,
            "value": "FAQ"
          }]
        })
      })
    })]
  });
};

Tabs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tabs",
  "props": {
    "activeTab": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var pricing_Tabs = (Tabs);
;// CONCATENATED MODULE: ./components/pricing/index.js




function pricing_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function pricing_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? pricing_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pricing_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






















var GlobalStyles = (0,styled_components_browser_esm/* createGlobalStyle */.vJ)(["html{scroll-behavior:smooth;}"]);
var TopBackgroundIllustration = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "pricing__TopBackgroundIllustration",
  componentId: "sc-q2fe6o-0"
})(["background:url('/static/images/pricing/pricing-page-top-bg.png') no-repeat;background-size:100%;position:absolute;top:-110px;z-index:-99;width:100%;height:434px;@media screen and (min-width:40em){background:url('/static/images/pricing/pricing-page-top-sm-bg.png') no-repeat;background-size:100%;}@media screen and (min-width:64em){background:url('/static/images/pricing/pricing-page-top-md-bg.png') no-repeat;background-size:100%;top:-90px;height:500px;}@media screen and (min-width:88em){background:url('/static/images/pricing/pricing-page-top-lg-bg.png') no-repeat;background-size:100%;top:-110px;height:600px;width:1200px;background-position:center;left:0;right:0;margin-right:auto;margin-left:auto;}"]);
var pricing_ListWrapper = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "pricing__ListWrapper",
  componentId: "sc-q2fe6o-1"
})(["list-style:none;padding-left:10px;"]);
var pricing_ListItem = styled_components_browser_esm/* default.li.withConfig */.ZP.li.withConfig({
  displayName: "pricing__ListItem",
  componentId: "sc-q2fe6o-2"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";margin-top:16px;margin-bottom:16px;::before{content:'\u2022';color:", ";display:inline-block;width:1em;margin-left:-1em;}"], (0,dist_index_esm/* themeGet */.R)('colors.black.900'), (0,dist_index_esm/* themeGet */.R)('colors.blue.700'));
var pricing_Card = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "pricing__Card",
  componentId: "sc-q2fe6o-3"
})(["width:288px;padding:24px;@media screen and (min-width:40em){width:308px;}@media screen and (min-width:52em){width:380px;}@media screen and (min-width:64em){width:468px;padding:32px 36px;}@media screen and (min-width:88em){width:486px;}"]);

var Pricing = function Pricing() {
  var _React$useState = react.useState(''),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      activeTab = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  var tabRef = react.useRef(null);
  var sectionContainerRef = react.useRef(null);

  var handleOnScroll = throttle_default()(function () {
    if (!(tabRef.current && tabRef.current.getBoundingClientRect().top <= 0)) {
      return;
    }

    var currentTab = activeTab;
    var distanceThreshold = 200;
    var breakpoint = window.scrollY + distanceThreshold;

    var _iterator = _createForOfIteratorHelper(sectionContainerRef.current.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var section = _step.value;

        if (breakpoint >= section.offsetTop) {
          currentTab = section.id;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (activeTab !== currentTab) {
      setActiveTab(currentTab);
    }
  }, 100);

  react.useEffect(function () {
    window.addEventListener('scroll', handleOnScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', handleOnScroll);
    };
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GlobalStyles, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(TopBackgroundIllustration, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      px: "16px",
      pt: "20px",
      pb: ['40px', '20px'],
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: ['288px', '636px', '956px', null, '992px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(marketing_Text/* MainTitle */.U3, {
          mb: "14px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "pricing.title",
            defaultMessage: [{
              "type": 0,
              "value": "Our Pricing Structure"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: ['288px', '404px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(marketing_Text/* MainDescription */.WC, {
            color: "black.700",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "pricing.description",
              defaultMessage: [{
                "type": 0,
                "value": "The platform supports sustainability for communities, and communities support sustainability for the platform."
              }]
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      px: "16px",
      mb: "20px",
      flexDirection: ['column', 'row'],
      alignItems: ['center', 'baseline', 'flex-start'],
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(pricing_Card, {
        border: "1px solid #DCDEE0",
        borderRadius: "8px",
        mb: ['20px', 0],
        mr: [null, '10px'],
        minHeight: "500px",
        background: "white",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['column', 'row'],
          alignItems: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "144px",
            height: "144px",
            display: ['none', null, 'block'],
            mr: [null, null, '24px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              src: "/static/images/pricing/for-collective-illustration.png",
              alt: "For Collective",
              width: 144,
              height: 144
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: [null, null, '228px', null, '246px'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: ['18px', '20px'],
              lineHeight: ['26px', '28px'],
              letterSpacing: [null, '-0.008em'],
              fontWeight: "500",
              color: "primary.900",
              mb: "8px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.forCollective",
                defaultMessage: [{
                  "type": 0,
                  "value": "For Collectives"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              width: "144px",
              height: "144px",
              my: "8px",
              display: [null, null, 'none'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
                src: "/static/images/pricing/for-collective-illustration.png",
                alt: "For Collective",
                width: 144,
                height: 144
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mt: "8px",
              mb: "16px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "400",
                color: "black.800",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "pricing.collectiveCard.description",
                  defaultMessage: [{
                    "type": 8,
                    "value": "strong",
                    "children": [{
                      "type": 0,
                      "value": "Collect, spend and manage money transparently."
                    }]
                  }, {
                    "type": 0,
                    "value": " Connect your bank account as an "
                  }, {
                    "type": 8,
                    "value": "IndependentCollectiveLink",
                    "children": [{
                      "type": 0,
                      "value": "Independent Collective"
                    }]
                  }, {
                    "type": 0,
                    "value": ", or apply to a "
                  }, {
                    "type": 8,
                    "value": "FiscalHostLink",
                    "children": [{
                      "type": 0,
                      "value": "Fiscal Host"
                    }]
                  }, {
                    "type": 0,
                    "value": "."
                  }],
                  values: pricing_objectSpread(pricing_objectSpread({}, I18nFormatters/* default */.ZP), {}, {
                    IndependentCollectiveLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      href: 'https://docs.opencollective.com/help/independent-collectives',
                      openInNewTab: true
                    }),
                    FiscalHostLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      href: 'https://opencollective.com/fiscal-hosting',
                      openInNewTab: true
                    })
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          minHeight: ['252px', null, '150px'],
          mb: [null, null, '24px'],
          mt: [null, null, '24px', '40px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "pricing.collectiveCard.free",
              defaultMessage: [{
                "type": 0,
                "value": "Free – forever"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(pricing_ListWrapper, {
            as: "ul",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(pricing_ListItem, {
              fontSize: "15px",
              lineHeight: "22px",
              fontWeight: "500",
              color: "black.900",
              my: "8px",
              listStyle: "circle",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.collectiveCard.unlimited",
                defaultMessage: [{
                  "type": 0,
                  "value": "Unlimited access to all features"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(pricing_ListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.collectiveCard.noFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "No fees if you hold money in your own bank account"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(pricing_ListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.collectiveCard.hostFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host fees may apply, if you opt to join one"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          display: "flex",
          flexDirection: ['column', null, 'row'],
          alignItems: ['center', null, 'flex-start'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/create",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              buttonStyle: "primary",
              width: ['224px', null, '160px'],
              py: "8px",
              px: [null, null, 3],
              my: "8px",
              whiteSpace: "nowrap",
              mr: [null, null, 3],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "home.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Collective"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "#collective",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              width: ['224px', null, '139px'],
              py: "8px",
              my: "8px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "TdTXXf",
                defaultMessage: [{
                  "type": 0,
                  "value": "Learn more"
                }]
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDown, {
                size: "13px"
              }), ' ']
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(pricing_Card, {
        border: "1px solid #DCDEE0",
        borderRadius: "8px",
        ml: [null, '10px'],
        minHeight: "500px",
        background: "white",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['column', null, 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "144px",
            height: "144px",
            display: ['none', null, 'block'],
            mr: [null, null, '24px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              src: "/static/images/pricing/for-fiscalHost-illustration.png",
              alt: "For FiscalHost",
              width: 144,
              height: 144
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: [null, null, '228px', null, '246px'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: ['18px', '20px'],
              lineHeight: ['26px', '28px'],
              letterSpacing: [null, '-0.008em'],
              fontWeight: "500",
              color: "primary.900",
              mb: "8px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.fiscalHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "For Fiscal Hosts"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              width: "144px",
              height: "144px",
              my: "8px",
              display: [null, null, 'none'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
                src: "/static/images/pricing/for-fiscalHost-illustration.png",
                alt: "For FiscalHost",
                width: 144,
                height: 144
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mt: "8px",
              mb: "16px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "400",
                color: "black.800",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "pricing.fiscalHostCard.description",
                  defaultMessage: [{
                    "type": 0,
                    "value": "As a "
                  }, {
                    "type": 8,
                    "value": "FiscalHostLink",
                    "children": [{
                      "type": 0,
                      "value": "Fiscal Host"
                    }]
                  }, {
                    "type": 0,
                    "value": ", you hold funds on behalf of Collectives. "
                  }, {
                    "type": 8,
                    "value": "strong",
                    "children": [{
                      "type": 0,
                      "value": "You decide what fees to charge"
                    }]
                  }, {
                    "type": 0,
                    "value": " (if any), and share revenue with the platform."
                  }],
                  values: {
                    strong: I18nFormatters/* I18nBold */.Gl,
                    FiscalHostLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      href: 'https://opencollective.com/become-a-fiscal-host',
                      openInNewTab: true
                    })
                  }
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          minHeight: ['252px', null, '150px'],
          mb: [null, null, '24px'],
          mt: [null, null, '24px', '40px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "pricing.fiscalHost.weSucceed",
              defaultMessage: [{
                "type": 0,
                "value": "We succeed if you succeed"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(pricing_ListWrapper, {
            as: "ul",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(pricing_ListItem, {
              fontSize: "15px",
              lineHeight: "22px",
              fontWeight: "500",
              color: "black.900",
              my: "8px",
              listStyle: "circle",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.fiscalHost.unlimited",
                defaultMessage: [{
                  "type": 0,
                  "value": "Host unlimited Collectives and access all features"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(pricing_ListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.fiscalHost.noFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "FREE if you don't charge Host Fees"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(pricing_ListItem, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "pricing.fiscalHost.hostFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "15% revenue share with the platform if you charge Host Fees"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          display: "flex",
          flexDirection: ['column', null, 'row'],
          alignItems: ['center', null, 'flex-start'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/organizations/new",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              buttonStyle: "primary",
              width: ['224px', null, '160px'],
              py: "8px",
              px: [null, null, 3],
              my: "8px",
              whiteSpace: "nowrap",
              mr: [null, null, 3],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "home.createHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Fiscal Host"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "#fiscalHost",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              width: ['224px', null, '139px'],
              py: "8px",
              my: "8px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "TdTXXf",
                defaultMessage: [{
                  "type": 0,
                  "value": "Learn more"
                }]
              }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDown, {
                size: "13px"
              }), ' ']
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      display: "flex",
      justifyContent: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(pricing_PlatformTip, {
        width: ['300px', '640px', '780px', '960px', '1000px']
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', null, null, 'row-reverse'],
      justifyContent: "center",
      alignItems: [null, null, 'center', 'flex-start'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        zIndex: "999",
        position: "sticky",
        top: "0",
        display: "flex",
        justifyContent: "center",
        borderBottom: ['1px solid rgba(49, 50, 51, 0.1)', null, null, 'none'],
        ref: tabRef,
        width: [1, null, null, 'fit-content'],
        background: "white",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(pricing_Tabs, {
          activeTab: activeTab
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        ref: sectionContainerRef,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          id: "collective",
          pt: ['64px', null, null, 3],
          display: "flex",
          px: "16px",
          flexDirection: "column",
          alignItems: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(pricing_ForCollectiveCard, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          id: "fiscalHost",
          pt: ['64px', null, null, 3],
          display: "flex",
          px: "16px",
          flexDirection: "column",
          alignItems: "center",
          my: [null, null, null, 4],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ForFiscalHostCard, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          id: "faq",
          pt: ['64px', null, null, 3],
          display: "flex",
          px: "16px",
          alignItems: "center",
          justifyContent: "center",
          mb: ['72px', null, null, '120px'],
          width: ['288px', '636px', '700px', '832px', '862px'],
          marginLeft: "auto",
          marginRight: "auto",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(faqs_PricingFAQ, {})
        })]
      })]
    })]
  });
};

Pricing.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Pricing"
};
/* harmony default export */ var pricing = (Pricing);
;// CONCATENATED MODULE: ./pages/pricing.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var PricingPage = /*#__PURE__*/function (_Component) {
  inherits_default()(PricingPage, _Component);

  var _super = _createSuper(PricingPage);

  function PricingPage() {
    classCallCheck_default()(this, PricingPage);

    return _super.apply(this, arguments);
  }

  createClass_default()(PricingPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(pricing, {})
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        tab: query.tab || ''
      };
    }
  }]);

  return PricingPage;
}(react.Component);


PricingPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "PricingPage",
  "props": {
    "tab": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 74223:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/pricing",
      function () {
        return __webpack_require__(95434);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,146,5813,4842,9774,2888,179], function() { return __webpack_exec__(74223); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=pricing-7011a80982ef38ab.js.map