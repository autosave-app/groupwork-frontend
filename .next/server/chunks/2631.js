"use strict";
exports.id = 2631;
exports.ids = [2631];
exports.modules = {

/***/ 32631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97274);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

const _excluded = ["append", "prepend", "disabled", "success", "error", "maxWidth", "containerProps", "prependProps", "appendProps", "innerRef", "autoFocus", "overflow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "StyledInputGroup__InputContainer",
  componentId: "sc-1jf4f2r-0"
})(["&:hover{border-color:", ";}&:focus-within{border-color:", ";}input{border:none;outline:none;box-shadow:none;}input:focus ~ div svg{color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.300'));

const getColor = ({
  error,
  success
}) => {
  if (error) {
    return 'red.300';
  }

  if (success) {
    return 'green.300';
  }

  return 'black.800';
};

const getBgColor = ({
  error,
  focused,
  success
}) => {
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

const getBorderColor = ({
  error,
  focused,
  success
}) => {
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


const StyledInputGroup = _ref => {
  let {
    append,
    prepend,
    disabled,
    success,
    error,
    maxWidth,
    containerProps,
    prependProps,
    appendProps,
    innerRef,
    autoFocus,
    overflow
  } = _ref,
      inputProps = _objectWithoutProperties(_ref, _excluded);

  const {
    0: focused,
    1: setFocus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(InputContainer, _objectSpread(_objectSpread({
      bg: disabled ? 'black.50' : 'white.full',
      maxWidth: maxWidth,
      border: "1px solid",
      borderColor: getBorderColor({
        error,
        focused,
        success
      }),
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      lineHeight: "1.5"
    }, containerProps), {}, {
      children: [prepend && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        fontSize: "14px",
        borderRadius: "4px 0 0 4px",
        p: 2,
        color: getColor({
          error,
          success
        }),
        maxHeight: "100%",
        whiteSpace: "nowrap"
      }, prependProps), {}, {
        bg: disabled && 'black.50' || lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(prependProps, 'bg') || getBgColor({
          error,
          focused,
          success
        }),
        children: prepend
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
        bare: true,
        autoFocus: autoFocus,
        color: getColor({
          error,
          success
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
        onFocus: e => {
          setFocus(true);

          if (inputProps && inputProps.onFocus) {
            inputProps.onFocus(e);
          }
        },
        onBlur: e => {
          setFocus(false);

          if (inputProps && inputProps.onBlur) {
            inputProps.onBlur(e);
          }
        }
      })), append && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        borderRadius: "4px 0 0 4px",
        p: 2,
        color: getColor({
          error,
          success
        }),
        fontSize: "14px"
      }, appendProps), {}, {
        bg: getBgColor({
          error,
          focused,
          success
        }),
        children: append
      }))]
    })), Boolean(error) && typeof error !== 'boolean' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputGroup);

/***/ })

};
;