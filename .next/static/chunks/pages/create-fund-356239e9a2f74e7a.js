(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8116],{

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

/***/ 47415:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(29932);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 5512:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(42118);

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;


/***/ }),

/***/ 89817:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(42118);

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsStartIndex;


/***/ }),

/***/ 39693:
/***/ (function(module) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ 92742:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(80531),
    baseTrim = __webpack_require__(27561),
    castSlice = __webpack_require__(40180),
    charsEndIndex = __webpack_require__(5512),
    charsStartIndex = __webpack_require__(89817),
    stringToArray = __webpack_require__(83140),
    toString = __webpack_require__(79833);

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return baseTrim(string);
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

module.exports = trim;


/***/ }),

/***/ 52628:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseValues = __webpack_require__(47415),
    keys = __webpack_require__(3674);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 32631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97274);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);



var _excluded = ["append", "prepend", "disabled", "success", "error", "maxWidth", "containerProps", "prependProps", "appendProps", "innerRef", "autoFocus", "overflow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var InputContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledInputGroup__InputContainer",
  componentId: "sc-1jf4f2r-0"
})(["&:hover{border-color:", ";}&:focus-within{border-color:", ";}input{border:none;outline:none;box-shadow:none;}input:focus ~ div svg{color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__/* .themeGet */ .R)('colors.primary.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__/* .themeGet */ .R)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__/* .themeGet */ .R)('colors.primary.300'));

var getColor = function getColor(_ref) {
  var error = _ref.error,
      success = _ref.success;

  if (error) {
    return 'red.300';
  }

  if (success) {
    return 'green.300';
  }

  return 'black.800';
};

var getBgColor = function getBgColor(_ref2) {
  var error = _ref2.error,
      focused = _ref2.focused,
      success = _ref2.success;

  if (focused) {
    return 'primary.100';
  }

  if (error) {
    return 'red.100';
  }

  if (success) {
    return 'green.100';
  }

  return 'black.50';
};

var getBorderColor = function getBorderColor(_ref3) {
  var error = _ref3.error,
      focused = _ref3.focused,
      success = _ref3.success;

  if (focused) {
    return 'primary.300';
  }

  if (error) {
    return 'red.500';
  }

  if (success) {
    return 'green.300';
  }

  return 'black.300';
};
/**
 * A styled input with a prepended or appended field element.
 * @see See [StyledInput](/#!/StyledInput) for details about props passed to it
 */


var StyledInputGroup = function StyledInputGroup(_ref4) {
  var append = _ref4.append,
      prepend = _ref4.prepend,
      disabled = _ref4.disabled,
      success = _ref4.success,
      error = _ref4.error,
      maxWidth = _ref4.maxWidth,
      containerProps = _ref4.containerProps,
      prependProps = _ref4.prependProps,
      appendProps = _ref4.appendProps,
      innerRef = _ref4.innerRef,
      autoFocus = _ref4.autoFocus,
      overflow = _ref4.overflow,
      inputProps = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      focused = _useState[0],
      setFocus = _useState[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(InputContainer, _objectSpread(_objectSpread({
      bg: disabled ? 'black.50' : 'white.full',
      maxWidth: maxWidth,
      border: "1px solid",
      borderColor: getBorderColor({
        error: error,
        focused: focused,
        success: success
      }),
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      lineHeight: "1.5"
    }, containerProps), {}, {
      children: [prepend && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        fontSize: "14px",
        borderRadius: "4px 0 0 4px",
        p: 2,
        color: getColor({
          error: error,
          success: success
        }),
        maxHeight: "100%",
        whiteSpace: "nowrap"
      }, prependProps), {}, {
        bg: disabled && 'black.50' || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(prependProps, 'bg') || getBgColor({
          error: error,
          focused: focused,
          success: success
        }),
        children: prepend
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
        bare: true,
        autoFocus: autoFocus,
        color: getColor({
          error: error,
          success: success
        }),
        type: "text",
        overflow: overflow || 'scroll',
        fontSize: "14px",
        flex: "1 1 auto",
        disabled: disabled,
        py: "0",
        px: 2,
        maxHeight: "100%",
        error: error,
        minWidth: "0",
        width: "100%",
        ref: innerRef
      }, inputProps), {}, {
        onFocus: function onFocus(e) {
          setFocus(true);

          if (inputProps && inputProps.onFocus) {
            inputProps.onFocus(e);
          }
        },
        onBlur: function onBlur(e) {
          setFocus(false);

          if (inputProps && inputProps.onBlur) {
            inputProps.onBlur(e);
          }
        }
      })), append && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        borderRadius: "4px 0 0 4px",
        p: 2,
        color: getColor({
          error: error,
          success: success
        }),
        fontSize: "14px"
      }, appendProps), {}, {
        bg: getBgColor({
          error: error,
          focused: focused,
          success: success
        }),
        children: append
      }))]
    })), Boolean(error) && typeof error !== 'boolean' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
      display: "block",
      color: "red.500",
      pt: 2,
      fontSize: "10px",
      children: error
    })]
  });
};

StyledInputGroup.__docgenInfo = {
  "description": "A styled input with a prepended or appended field element.\n@see See [StyledInput](/#!/StyledInput) for details about props passed to it",
  "methods": [],
  "displayName": "StyledInputGroup",
  "props": {
    "append": {
      "description": "Text shown after input",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "element"
        }]
      },
      "required": false
    },
    "prepend": {
      "description": "Text shown before input",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "element"
        }]
      },
      "required": false
    },
    "disabled": {
      "description": "Show disabled state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "error": {
      "description": "Show error state for field, and a message error if given a string",
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "success": {
      "description": "Show success state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "type": {
      "description": "Passed to internal StyledInput",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "containerProps": {
      "description": "Props passed to the `InputContainer`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "prependProps": {
      "description": "Props passed to the prepend `Container`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "appendProps": {
      "description": "Props passed to the append `Container`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "maxWidth": {
      "description": "Max Width",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "autoFocus": {
      "description": "Whether to auto focus this element *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "overflow": {
      "description": "Specifies what should happen if content overflows an element's box *",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "innerRef": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputGroup);

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

/***/ 5796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_create_fund; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/SignInOrJoinFree.js + 2 modules
var SignInOrJoinFree = __webpack_require__(41448);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/create-fund/CategoryPicker.js











var Image = styled_components_browser_esm/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "CategoryPicker__Image",
  componentId: "sc-39o4d9-0"
})(["@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);
var messages = (0,react_intl_lib.defineMessages)({
  foundation: {
    id: "createFund.category.foundation",
    defaultMessage: [{
      "type": 0,
      "value": "For non-profit initiatives in the USA"
    }]
  },
  europe: {
    id: "createFund.category.europe",
    defaultMessage: [{
      "type": 0,
      "value": "For non-profit initiatives in Europe"
    }]
  },
  opensource: {
    id: "createFund.category.opensource",
    defaultMessage: [{
      "type": 0,
      "value": "For open source initiatives"
    }]
  },
  fund: {
    id: "createFund.category.fund",
    defaultMessage: [{
      "type": 0,
      "value": "For other initiatives"
    }]
  }
});

var CreateFundCategoryPicker = function CreateFundCategoryPicker() {
  var router = (0,next_router.useRouter)();

  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mb: 4,
      mt: 5,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
        fontSize: ['20px', '32px'],
        lineHeight: ['24px', '36px'],
        fontWeight: "bold",
        color: "black.900",
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "createFund.create",
          defaultMessage: [{
            "type": 0,
            "value": "Create a Fund"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      mb: [5, 6],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        alignItems: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            borderTop: ['1px solid #E6E8EB', 'none'],
            alignItems: "center",
            width: [null, 280, 312],
            mb: [4, 0],
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image, {
                src: "/static/images/create-collective/climateIllustration.png",
                alt: formatMessage(messages.foundation)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: {
                  pathname: "/fund/".concat(router.query.verb),
                  query: {
                    category: 'foundation'
                  }
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  fontSize: "13px",
                  buttonStyle: "primary",
                  minHeight: "36px",
                  mt: [2, 3],
                  mb: 3,
                  px: 3,
                  children: formatMessage(messages.foundation)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
                textAlign: "center",
                children: ["It will be hosted by", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Open Collective Foundation 501(c)(3)."]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            borderLeft: ['none', '1px solid #E6E8EB'],
            borderTop: ['1px solid #E6E8EB', 'none'],
            alignItems: "center",
            width: [null, 280, 312],
            mb: [4, 0],
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image, {
                src: "/static/images/create-collective/climateIllustration.png",
                alt: formatMessage(messages.europe)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: {
                  pathname: "/fund/".concat(router.query.verb),
                  query: {
                    category: 'europe'
                  }
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  fontSize: "13px",
                  buttonStyle: "primary",
                  minHeight: "36px",
                  mt: [2, 3],
                  mb: 3,
                  px: 3,
                  children: formatMessage(messages.europe)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
                textAlign: "center",
                children: ["It will be hosted by", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Open Collective Europe ASBL"]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            borderLeft: ['none', '1px solid #E6E8EB'],
            borderTop: ['1px solid #E6E8EB', 'none'],
            alignItems: "center",
            width: [null, 280, 312],
            mb: [4, 0],
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image, {
                src: "/static/images/create-collective/openSourceIllustration.png",
                alt: formatMessage(messages.opensource)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: {
                  pathname: "/fund/".concat(router.query.verb),
                  query: {
                    category: 'opensource'
                  }
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                  fontSize: "13px",
                  buttonStyle: "primary",
                  minHeight: "36px",
                  mt: [2, 3],
                  mb: 3,
                  px: 3,
                  children: formatMessage(messages.opensource)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
                textAlign: "center",
                children: ["It will be hosted by", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Open Source Collective 501(c)(6)."]
              })]
            })
          })]
        })
      })
    })]
  });
};

CreateFundCategoryPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateFundCategoryPicker"
};
/* harmony default export */ var CategoryPicker = (CreateFundCategoryPicker);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledInputGroup.js
var StyledInputGroup = __webpack_require__(32631);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
;// CONCATENATED MODULE: ./components/create-fund/Form.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



















var ContainerWithImage = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "Form__ContainerWithImage",
  componentId: "sc-1gys8uc-0"
})(["@media screen and (min-width:40em){background:url('/static/images/create-collective/formIllustration.png');background-repeat:no-repeat;background-size:40%;background-position:right bottom;}"]);
var placeholders = {
  name: 'Agora Fund',
  slug: 'agora'
};
var Form_messages = (0,react_intl_lib.defineMessages)({
  nameLabel: {
    id: "createFund.form.nameLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What's the name of your fund?"
    }]
  },
  slugLabel: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  suggestedLabel: {
    id: "createCollective.form.suggestedLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Suggested"
    }]
  },
  descriptionLabel: {
    id: "createFund.form.descriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your fund do?"
    }]
  },
  descriptionHint: {
    id: "createCollective.form.descriptionHint",
    defaultMessage: [{
      "type": 0,
      "value": "Write a short description (150 characters max)"
    }]
  },
  descriptionPlaceholder: {
    id: "create.collective.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Making the world a better place"
    }]
  },
  errorName: {
    id: "createCollective.form.error.name",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 50 characters"
    }]
  },
  errorDescription: {
    id: "createCollective.form.error.description",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 160 characters"
    }]
  },
  errorSlug: {
    id: "createCollective.form.error.slug",
    defaultMessage: [{
      "type": 0,
      "value": "Please use fewer than 30 characters"
    }]
  }
});

var CreateFundForm = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CreateFundForm, _React$Component);

  var _super = _createSuper(CreateFundForm);

  function CreateFundForm() {
    classCallCheck_default()(this, CreateFundForm);

    return _super.apply(this, arguments);
  }

  createClass_default()(CreateFundForm, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          intl = _this$props.intl,
          error = _this$props.error,
          host = _this$props.host,
          loading = _this$props.loading;
      var initialValues = {
        name: '',
        description: '',
        slug: ''
      };

      var validate = function validate(values) {
        var errors = {};

        if (values.name.length > 50) {
          errors.name = intl.formatMessage(Form_messages.errorName);
        }

        if (values.slug.length > 30) {
          errors.slug = intl.formatMessage(Form_messages.errorSlug);
        }

        if (values.description.length > 160) {
          errors.description = intl.formatMessage(Form_messages.errorDescription);
        }

        return errors;
      };

      var submit = function submit(values) {
        var description = values.description,
            name = values.name,
            slug = values.slug;

        _this.props.onSubmit({
          name: name,
          description: description,
          slug: slug
        });
      };

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        m: [3, 0],
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          my: [2, 4],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mb: [2, 3],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
              fontSize: ['20px', '32px'],
              lineHeight: ['24px', '36px'],
              fontWeight: "bold",
              textAlign: "center",
              color: "black.900",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "createFund.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Fund"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            textAlign: "center",
            minHeight: "24px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "16px",
              color: "black.600",
              mb: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "createFund.subtitle.introduce",
                defaultMessage: [{
                  "type": 0,
                  "value": "Apply for Fiscal Sponsorship below. We will review your application shortly. "
                }, {
                  "type": 1,
                  "value": "faqLink"
                }],
                values: {
                  faqLink: host && host.faqUrl ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                    href: host.faqUrl,
                    openInNewTab: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "createFund.subtitle.faq",
                      defaultMessage: [{
                        "type": 0,
                        "value": "FAQ here."
                      }]
                    })
                  }) : null
                }
              })
            })
          })]
        }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "error",
            withIcon: true,
            mb: [1, 3],
            "data-cy": "ccf-error-message",
            children: error
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ContainerWithImage, {
            mb: [1, 5],
            width: [320, 512, 576],
            border: ['none', '1px solid #E6E8EB'],
            borderRadius: ['none', '8px'],
            px: [1, 4],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.J9, {
              validate: validate,
              initialValues: initialValues,
              onSubmit: submit,
              validateOnChange: true,
              children: function children(formik) {
                var values = formik.values,
                    handleSubmit = formik.handleSubmit,
                    errors = formik.errors,
                    touched = formik.touched,
                    setFieldValue = formik.setFieldValue;

                var handleSlugChange = function handleSlugChange(e) {
                  if (!touched.slug) {
                    setFieldValue('slug', (0,collective_lib/* suggestSlug */.e4)(e.target.value));
                  }
                };

                return /*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.l0, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    name: "name",
                    htmlFor: "name",
                    error: touched.name && errors.name,
                    label: intl.formatMessage(Form_messages.nameLabel),
                    value: values.name,
                    onChange: handleSlugChange,
                    required: true,
                    mt: 4,
                    mb: 3,
                    "data-cy": "ccf-form-name",
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        as: StyledInput/* default */.ZP
                      }, inputProps), {}, {
                        placeholder: placeholders.name
                      }));
                    }
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    name: "slug",
                    htmlFor: "slug",
                    error: touched.slug && errors.slug,
                    label: intl.formatMessage(Form_messages.slugLabel),
                    value: values.slug,
                    required: true,
                    mt: 3,
                    mb: 2,
                    "data-cy": "ccf-form-slug",
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        onChange: function onChange(e) {
                          setFieldValue('slug', e.target.value);
                        },
                        as: StyledInputGroup/* default */.Z
                      }, inputProps), {}, {
                        prepend: "opencollective.com/",
                        placeholder: placeholders.slug
                      }));
                    }
                  }), values.name.length > 0 && !touched.slug && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "10px",
                    children: intl.formatMessage(Form_messages.suggestedLabel)
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                    name: "description",
                    htmlFor: "description",
                    error: touched.description && errors.description,
                    label: intl.formatMessage(Form_messages.descriptionLabel),
                    value: values.description,
                    required: true,
                    mt: 3,
                    mb: 2,
                    "data-cy": "ccf-form-description",
                    children: function children(inputProps) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.gN, _objectSpread(_objectSpread({
                        as: StyledInput/* default */.ZP
                      }, inputProps), {}, {
                        placeholder: intl.formatMessage(Form_messages.descriptionPlaceholder)
                      }));
                    }
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                    fontSize: "11px",
                    children: intl.formatMessage(Form_messages.descriptionHint)
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                    flexDirection: "column",
                    mx: 1,
                    my: 4,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
                      fontSize: "13px",
                      mb: 2,
                      children: ["-", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "createFund.tos.label",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Read the "
                        }, {
                          "type": 1,
                          "value": "toslink"
                        }, {
                          "type": 0,
                          "value": " of Open Collective."
                        }],
                        values: {
                          toslink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                            href: "/tos",
                            openInNewTab: true,
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "tos",
                              defaultMessage: [{
                                "type": 0,
                                "value": "terms of service"
                              }]
                            })
                          })
                        }
                      })]
                    }), host && host.termsUrl && /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
                      fontSize: "13px",
                      children: ["-", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "createFund.hosttos.label",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Read the "
                        }, {
                          "type": 1,
                          "value": "hosttoslink"
                        }, {
                          "type": 0,
                          "value": " of the "
                        }, {
                          "type": 1,
                          "value": "hostName"
                        }, {
                          "type": 0,
                          "value": "."
                        }],
                        values: {
                          hostName: host.name,
                          hosttoslink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                            href: host.termsUrl,
                            openInNewTab: true,
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "fiscaltos",
                              defaultMessage: [{
                                "type": 0,
                                "value": "terms of fiscal sponsorship"
                              }]
                            })
                          })
                        }
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
                    justifyContent: ['center', 'left'],
                    mb: 4,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                      fontSize: "13px",
                      minWidth: "148px",
                      minHeight: "36px",
                      buttonStyle: "primary",
                      type: "submit",
                      loading: loading,
                      onSubmit: handleSubmit,
                      "data-cy": "ccf-form-submit",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "createFund.button",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Create Fund"
                        }]
                      })
                    })
                  })]
                });
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              justifyContent: "center",
              mb: 4,
              display: ['flex', 'none'],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
                display: ['block', 'none'],
                src: "/static/images/create-collective/mobileForm.png",
                width: "320px",
                height: "200px"
              })
            })]
          })
        })]
      });
    }
  }]);

  return CreateFundForm;
}(react.Component);

CreateFundForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateFundForm",
  "props": {
    "error": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "github": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ var Form = ((0,injectIntl/* default */.ZP)((0,next_router.withRouter)(CreateFundForm)));
;// CONCATENATED MODULE: ./components/create-fund/index.js











var _templateObject;



function create_fund_createSuper(Derived) { var hasNativeReflectConstruct = create_fund_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function create_fund_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

















var CreateFund = /*#__PURE__*/function (_Component) {
  inherits_default()(CreateFund, _Component);

  var _super = create_fund_createSuper(CreateFund);

  function CreateFund(props) {
    var _this;

    classCallCheck_default()(this, CreateFund);

    _this = _super.call(this, props);
    _this.state = {
      error: null,
      creating: false
    };
    _this.createFund = _this.createFund.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(CreateFund, [{
    key: "getHost",
    value: function getHost() {
      if (this.props.router.query.category === 'foundation') {
        return {
          slug: 'foundation',
          name: 'Open Collective Foundation',
          termsUrl: 'https://docs.google.com/document/u/2/d/e/2PACX-1vQ_fs7IOojAHaMBKYtaJetlTXJZLnJ7flIWkwxUSQtTkWUMtwFYC2ssb-ooBnT-Ldl6wbVhNQiCkSms/pub',
          faqUrl: 'https://docs.opencollective.foundation/'
        };
      }

      if (this.props.router.query.category === 'opensource') {
        return {
          slug: 'opensource',
          name: 'Open Source Collective',
          termsUrl: 'https://docs.google.com/document/u/1/d/e/2PACX-1vQbiyK2Fe0jLdh4vb9BfHY4bJ1LCo4Qvy0jg9P29ZkiC8y_vKJ_1fNgIbV0p6UdvbcT8Ql1gVto8bf9/pub'
        };
      }

      if (this.props.router.query.category === 'europe') {
        return {
          slug: 'europe',
          name: 'Open Collective Europe',
          termsUrl: 'https://docs.opencollective.com/oceurope/getting-started/our-terms-and-conditions'
        };
      }
    }
  }, {
    key: "createFund",
    value: function () {
      var _createFund = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(fund) {
        var host, res, errorMsg;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                host = this.getHost(); // set state to loading

                this.setState({
                  creating: true
                }); // try mutation

                _context.prev = 2;
                _context.next = 5;
                return this.props.createFund({
                  variables: {
                    fund: omit_default()(fund, ['tos', 'hostTos']),
                    host: pick_default()(host, ['slug'])
                  }
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return this.props.refetchLoggedInUser();

              case 8:
                this.props.router.push({
                  pathname: "/".concat(res.data.createFund.slug),
                  query: {
                    status: 'fundCreated'
                  }
                }).then(function () {
                  return window.scrollTo(0, 0);
                });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                errorMsg = (0,errors/* i18nGraphqlException */.t2)(this.props.intl, _context.t0);
                this.setState({
                  error: errorMsg,
                  creating: false
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function createFund(_x) {
        return _createFund.apply(this, arguments);
      }

      return createFund;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          LoggedInUser = _this$props.LoggedInUser,
          router = _this$props.router;
      var _this$state = this.state,
          creating = _this$state.creating,
          error = _this$state.error;
      var category = router.query.category;

      if (!LoggedInUser) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
          p: 2,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            flexDirection: "column",
            p: 4,
            mt: 2,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
                fontSize: "32px",
                lineHeight: "36px",
                fontWeight: "bold",
                textAlign: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "collective.create.join",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Join Open Collective"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              textAlign: "center",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                fontSize: "14px",
                color: "black.600",
                mb: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "collective.create.createOrSignIn",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create an account (or sign in) to start a collective."
                  }]
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SignInOrJoinFree/* default */.ZP, {})]
        });
      }

      if (!category) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CategoryPicker, {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(Form, {
        host: this.getHost(),
        onSubmit: this.createFund,
        loading: creating,
        error: error
      });
    }
  }]);

  return CreateFund;
}(react.Component);

var createFundMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation CreateFund($fund: FundCreateInput!, $host: AccountReferenceInput) {\n    createFund(fund: $fund, host: $host) {\n      id\n      name\n      slug\n      tags\n      description\n    }\n  }\n"])));
var addCreateFundMutation = (0,graphql/* graphql */.B)(createFundMutation, {
  name: 'createFund',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
CreateFund.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getHost",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "createFund",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "fund",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreateFund",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "createFund": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var create_fund = ((0,next_router.withRouter)((0,UserProvider/* withUser */.ns)(addCreateFundMutation((0,injectIntl/* default */.ZP)(CreateFund)))));
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
;// CONCATENATED MODULE: ./pages/create-fund.js







var CreateFundPage = function CreateFundPage(_ref) {
  var loadingLoggedInUser = _ref.loadingLoggedInUser;

  if (loadingLoggedInUser) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
      loading: true
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(create_fund, {})
  });
};

CreateFundPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateFundPage",
  "props": {
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    }
  }
};
/* harmony default export */ var pages_create_fund = ((0,UserProvider/* withUser */.ns)(CreateFundPage));

/***/ }),

/***/ 39874:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/create-fund",
      function () {
        return __webpack_require__(5796);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 31304:
/***/ (function(module) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports["default"] = factory()
  }
  /* istanbul ignore next */
  else {}
}('slugify', this, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","„":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}')
  var locales = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}')

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var locale = locales[options.locale] || {}

    var replacement = options.replacement === undefined ? '-' : options.replacement

    var trim = options.trim === undefined ? true : options.trim

    var slug = string.normalize().split('')
      // replace characters based on charMap
      .reduce(function (result, ch) {
        var appendChar = locale[ch] || charMap[ch] || ch;
        if (appendChar === replacement) {
          appendChar = ' ';
        }
        return result + appendChar
          // remove not allowed characters
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
      }, '');

    if (options.strict) {
      slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
    }

    if (trim) {
      slug = slug.trim()
    }

    // Replace spaces with replacement character, treating multiple consecutive
    // spaces as a single space.
    slug = slug.replace(/\s+/g, replacement);

    if (options.lower) {
      slug = slug.toLowerCase()
    }

    return slug
  }

  replace.extend = function (customMap) {
    Object.assign(charMap, customMap)
  }

  return replace
}))


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,8027,146,5813,4842,4154,1012,1448,9774,2888,179], function() { return __webpack_exec__(39874); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=create-fund-356239e9a2f74e7a.js.map