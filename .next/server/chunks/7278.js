"use strict";
exports.id = 7278;
exports.ids = [7278];
exports.modules = {

/***/ 37278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MessageBox)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/CheckCircle"
var CheckCircle_ = __webpack_require__(62876);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/ExclamationCircle"
var ExclamationCircle_ = __webpack_require__(83514);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/ExclamationTriangle"
var ExclamationTriangle_ = __webpack_require__(25730);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/InfoCircle"
var InfoCircle_ = __webpack_require__(86954);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(19099);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
// EXTERNAL MODULE: ./lib/styled-system-custom-properties.ts
var styled_system_custom_properties = __webpack_require__(16010);
;// CONCATENATED MODULE: ./lib/theme/variants/message.ts

const messageType = (0,external_styled_system_.variant)({
  key: 'messageTypes',
  prop: 'type'
});
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledSpinner.tsx
var StyledSpinner = __webpack_require__(40486);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/MessageBox.tsx
const _excluded = ["type", "withIcon", "isLoading", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const Message = external_styled_components_default().div.withConfig({
  displayName: "MessageBox__Message",
  componentId: "sc-z9r9bs-0"
})(["border:0.6px solid;border-radius:12px;padding:", "px 24px;font-size:13px;line-height:20px;box-shadow:0px 1px 4px 1px rgba(49,50,51,0.05);", " ", " ", " ", " ", " ", " ", " ", " ", " ", " a{text-decoration:underline !important;color:", ";}h1,h2,h3,h4{font-size:13px;margin:0 0 8px 0;font-weight:700;}svg[data-type='message-icon']{vertical-align:text-bottom;}"], (0,theme_get_.themeGet)('space.3'), external_styled_system_.borders, external_styled_system_.shadow, external_styled_system_.display, external_styled_system_.layout, external_styled_system_.space, external_styled_system_.typography, external_styled_system_.color, external_styled_system_.flexbox, styled_system_custom_properties/* whiteSpace */.d8, messageType, (0,theme_get_.themeGet)('colors.black.800'));
const iconColors = {
  white: 'black.600',
  info: 'blue.500',
  success: 'green.500',
  warning: 'yellow.600',
  error: 'red.500'
};
const icons = {
  info: /*#__PURE__*/jsx_runtime_.jsx(InfoCircle_.InfoCircle, {
    "data-type": "message-icon",
    size: "1.1em",
    color: "inherit"
  }),
  success: /*#__PURE__*/jsx_runtime_.jsx(CheckCircle_.CheckCircle, {
    "data-type": "message-icon",
    size: "1.1em"
  }),
  warning: /*#__PURE__*/jsx_runtime_.jsx(ExclamationTriangle_.ExclamationTriangle, {
    "data-type": "message-icon",
    size: "1.1em"
  }),
  error: /*#__PURE__*/jsx_runtime_.jsx(ExclamationCircle_.ExclamationCircle, {
    "data-type": "message-icon",
    size: "1.1em"
  })
};
/**
 * Display messages in a box contextualized for message type (error, success...etc)
 */

const MessageBox = _ref => {
  let {
    type = 'white',
    withIcon = false,
    isLoading,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const icon = withIcon ? icons[type] : null;
  return /*#__PURE__*/jsx_runtime_.jsx(Message, _objectSpread(_objectSpread({
    type: type
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      gap: "16px",
      children: [(icon || isLoading) && /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        flexShrink: 0,
        alignSelf: "start",
        color: iconColors[type],
        children: isLoading ? /*#__PURE__*/jsx_runtime_.jsx(StyledSpinner/* default */.Z, {
          size: "1.2em"
        }) : icon
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        children: children
      })]
    })
  }));
};

MessageBox.__docgenInfo = {
  "description": "Display messages in a box contextualized for message type (error, success...etc)",
  "methods": [],
  "displayName": "MessageBox",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "MessageType"
      },
      "description": ""
    },
    "withIcon": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "isLoading": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "children": {
      "required": true,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": ""
    }
  }
};
/* harmony default export */ const components_MessageBox = (MessageBox);

/***/ })

};
;