"use strict";
exports.id = 7262;
exports.ids = [7262];
exports.modules = {

/***/ 87262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83514);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83002);
/* harmony import */ var _styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40777);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_7__]);
([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const _excluded = ["children", "label", "htmlFor", "name", "error", "hint", "success", "disabled", "required", "inputType", "labelFontSize", "labelFontWeight", "labelColor", "labelProps", "hideOptionalLabel", "useRequiredLabel", "isPrivate", "helpText", "flexDirection", "justifyContent", "alignItems"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const PrivateIconWithSpace = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
  children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    tooltipProps: {
      containerVerticalAlign: 'text-top'
    }
  })]
}); // eslint-disable-next-line react/prop-types


const QuestionMarkIconWithSpace = ({
  helpText,
  labelFontSize,
  labelColor
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
  content: helpText,
  children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_3__.Question, {
    size: labelFontSize,
    color: labelColor
  })]
});
/**
 * Form field to display an input element with a label and errors. Uses [renderProps](https://reactjs.org/docs/render-props.html#using-props-other-than-render) to pass field props like 'name' and 'id' to child input.
 */


const StyledInputField = _ref => {
  let {
    children,
    label = undefined,
    htmlFor = undefined,
    name = undefined,
    error = undefined,
    hint = undefined,
    success = undefined,
    disabled = undefined,
    required = undefined,
    inputType = undefined,
    labelFontSize = undefined,
    labelFontWeight = 'normal',
    labelColor = 'black.800',
    labelProps = undefined,
    hideOptionalLabel = undefined,
    useRequiredLabel = undefined,
    isPrivate = undefined,
    helpText = undefined,
    flexDirection = undefined,
    justifyContent = undefined,
    alignItems = undefined
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isCheckbox = inputType === 'checkbox';
  htmlFor = htmlFor || (name ? `input-${name}` : undefined);
  const displayOptionalLabel = hideOptionalLabel ? false : required === false;
  const displayRequiredLabel = useRequiredLabel ? required === true : false;
  labelFontWeight = labelProps?.fontWeight || labelFontWeight;
  labelFontSize = labelProps?.labelFontSize || labelFontSize;

  const labelContent = label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
    color: labelColor,
    fontSize: labelFontSize,
    fontWeight: labelFontWeight,
    children: label
  });

  const containerFlexDirection = flexDirection ?? (isCheckbox ? 'row-reverse' : 'column');
  const containerJustifyContent = justifyContent ?? 'flex-end';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      alignItems: alignItems,
      flexDirection: containerFlexDirection,
      justifyContent: containerJustifyContent,
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__.P, _objectSpread(_objectSpread({
        as: "label",
        htmlFor: htmlFor,
        display: "flex",
        alignItems: "center",
        fontSize: labelFontSize,
        fontWeight: labelFontWeight,
        mb: isCheckbox ? 0 : 2,
        mr: 2,
        ml: isCheckbox ? 2 : undefined,
        cursor: isCheckbox ? 'pointer' : undefined
      }, labelProps), {}, {
        children: [displayOptionalLabel && !isCheckbox ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
          color: "black.700",
          fontWeight: "normal",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "OptionalFieldLabel",
            defaultMessage: [{
              "type": 1,
              "value": "field"
            }, {
              "type": 0,
              "value": " (optional)"
            }],
            values: {
              field: labelContent
            }
          }), isPrivate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(PrivateIconWithSpace, {})]
        }) : displayRequiredLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
          color: "black.700",
          children: [labelContent, " * ", isPrivate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(PrivateIconWithSpace, {})]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
          children: [labelContent, isPrivate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(PrivateIconWithSpace, {})]
        }), helpText && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(QuestionMarkIconWithSpace, {
          helpText: helpText,
          labelColor: labelColor,
          labelFontSize: labelFontSize
        })]
      })), typeof children === 'function' ? children({
        name: name || htmlFor,
        id: htmlFor,
        type: inputType,
        error: Boolean(error) || undefined,
        success,
        disabled,
        required
      }) : children]
    }), error && typeof error === 'string' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      pt: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_2__.ExclamationCircle, {
        color: "#E03F6A",
        size: 16
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledSpan, {
        ml: 1,
        color: "black.700",
        fontSize: "14px",
        children: error
      })]
    }), hint && (!error || typeof error !== 'string') && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      mt: "6px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledSpan2, {
        fontSize: "12px",
        color: "black.700",
        children: hint
      })
    })]
  }));
};

StyledInputField.__docgenInfo = {
  "description": "Form field to display an input element with a label and errors. Uses [renderProps](https://reactjs.org/docs/render-props.html#using-props-other-than-render) to pass field props like 'name' and 'id' to child input.",
  "methods": [],
  "displayName": "StyledInputField",
  "props": {
    "label": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "text to display above the input",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "element"
        }]
      },
      "required": false
    },
    "htmlFor": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "the label's 'for' attribute to be used as the 'name' and 'id' for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "By default name is equal to htmlFor, but you can use this prop to override it",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "error": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "text to display below the input or error status",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "hint": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "text to display below the input when there's no error",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "success": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Show success state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabled": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Show disabled state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "required": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If set to false, the field will be marked as optional",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "inputType": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Passed to input as `type`. Adapts layout for checkboxes",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "labelFontSize": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Font size for the label",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "labelFontWeight": {
      "defaultValue": {
        "value": "'normal'",
        "computed": false
      },
      "description": "Font weight for the label",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "labelColor": {
      "defaultValue": {
        "value": "'black.800'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "labelProps": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Anything here will be passed down to label",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "hideOptionalLabel": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "useRequiredLabel": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If set to true, will hide the (optional) label tag even if required is false and display \"*\" if required",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isPrivate": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If true, a \"Private\" lock icon will be displayed next to the label",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "helpText": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Help text that will appear next to the label (a small question mark with help text shown when hovered)",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "flexDirection": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "justifyContent": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "alignItems": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "children": {
      "description": "React component to wrap with the label and errors",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "node"
        }]
      },
      "required": true
    }
  },
  "composes": ["./Grid"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputField);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr).withConfig({
  displayName: "StyledInputField___StyledSpan",
  componentId: "sc-pytuf2-0"
})({
  verticalAlign: 'middle'
});

var _StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr).withConfig({
  displayName: "StyledInputField___StyledSpan2",
  componentId: "sc-pytuf2-1"
})({
  verticalAlign: 'middle'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_material_Lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6534);
/* harmony import */ var _styled_icons_material_Lock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Lock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_3__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["children", "size", "tooltipProps", "withoutTooltip", "color"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  defaultContent: {
    id: "Tooltip.PrivateInfo",
    defaultMessage: [{
      "type": 0,
      "value": "This info is private"
    }]
  }
});
/**
 * A lock icon with a tooltip indicating that this info is private
 */

const PrivateInfoIcon = _ref => {
  let {
    children,
    size,
    tooltipProps,
    withoutTooltip,
    color
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();

  const icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styled_icons_material_Lock__WEBPACK_IMPORTED_MODULE_1__.Lock, _objectSpread({
    size: size,
    color: color
  }, props));

  if (withoutTooltip) {
    return icon;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    childrenContainer: "span",
    content: () => children || formatMessage(msg.defaultContent)
  }, tooltipProps), {}, {
    children: icon
  }));
};

PrivateInfoIcon.defaultProps = {
  size: '0.9em',
  color: '#75777A'
};
PrivateInfoIcon.__docgenInfo = {
  "description": "A lock icon with a tooltip indicating that this info is private",
  "methods": [],
  "displayName": "PrivateInfoIcon",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'0.9em'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'#75777A'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "children": {
      "description": "A message to display in the tooltip in place of the default one",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "tooltipProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "withoutTooltip": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateInfoIcon);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;