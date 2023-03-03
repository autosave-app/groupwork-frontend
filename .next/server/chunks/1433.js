"use strict";
exports.id = 1433;
exports.ids = [1433];
exports.modules = {

/***/ 41433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40486);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);

const _excluded = ["name", "checked", "label", "disabled", "size", "inputId", "width", "alignItems", "isLoading", "fontSize"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const IconCheckmark = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
      id: "checkmark-tiny",
      d: "M3.30913 8C3.0158 8 2.73358 7.88442 2.52358 7.67438L0.32583 5.47599C-0.10861 5.04257 -0.10861 4.34021 0.32583 3.90569C0.760269 3.47116 1.46248 3.47116 1.89692 3.90569L3.16913 5.17835L5.98574 0.462633C6.34352 -0.0341285 7.03573 -0.149706 7.53683 0.20814C8.03572 0.565985 8.14905 1.26056 7.79128 1.75843L4.21134 7.53769C4.01245 7.81663 3.68357 8 3.30913 8Z"
    })
  });
};

const CustomCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "StyledCheckbox__CustomCheckbox",
  componentId: "sc-1m7djj3-0"
})(["display:flex;justify-content:center;align-items:center;position:absolute;cursor:pointer;border:1px solid #dcdee0;border-radius:4px;background-color:white;transition:background-color 0.2s;svg{opacity:0;height:0.572em;width:0.572em;fill:white;}", "{opacity:1;fill:#999999;}"], _StyledSpinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const CheckboxContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "StyledCheckbox__CheckboxContainer",
  componentId: "sc-1m7djj3-1"
})(["position:relative;display:flex;align-items:", ";line-height:1.4em;cursor:pointer;", " width:", ";input{position:absolute;opacity:0;height:0;width:0;}label{cursor:pointer;margin:0;margin-left:2.2rem;z-index:9;font-weight:normal;width:auto;}", "{", " ", "}input:disabled{& ~ ", "{background:#f7f8fa;border:1px solid #e8e9eb;cursor:not-allowed;svg{fill:", ";}}& ~ label{cursor:not-allowed;}}", ""], props => props.alignItems, styled_system__WEBPACK_IMPORTED_MODULE_4__.typography, props => props.width, CustomCheckbox, styled_system__WEBPACK_IMPORTED_MODULE_4__.size, props => props.error && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["border-color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.red.500')), CustomCheckbox, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.200'), props => props.$checked ? (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["", "{background:", ";border-color:", ";svg{opacity:1;}", "{fill:#eeeeee;}}"], CustomCheckbox, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.500'), _StyledSpinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z) : (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["@media (hover:hover){&:hover ", "{background:", ";border-color:", ";svg{opacity:1;}}}"], CustomCheckbox, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.100'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.100')));

class StyledCheckbox extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultChecked
    };
  }

  onChange(newValue) {
    const {
      name,
      checked,
      onChange,
      disabled,
      isLoading
    } = this.props;

    if (disabled || isLoading) {
      return false;
    }

    if (checked === undefined) {
      this.setState({
        checked: newValue
      });
    }

    if (onChange) {
      onChange({
        name,
        checked: newValue,
        type: 'checkbox',
        target: {
          name,
          value: newValue,
          checked: newValue
        }
      });
    }
  }

  render() {
    const _this$props = this.props,
          {
      name,
      checked,
      label,
      disabled,
      size,
      inputId,
      width,
      alignItems,
      isLoading,
      fontSize
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    const realChecked = checked === undefined ? this.state.checked : checked;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(CheckboxContainer, _objectSpread(_objectSpread({
      role: "button",
      tabIndex: 0,
      $checked: realChecked,
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        this.onChange(!realChecked);
      },
      onKeyDown: event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.onChange(!realChecked);
        }
      },
      fontSize: fontSize || size,
      size: size,
      width: width,
      alignItems: alignItems,
      "data-cy": `checkbox-${name}`
    }, lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(props, ['defaultChecked', 'onChange'])), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
        id: inputId,
        name: name,
        type: "checkbox",
        checked: realChecked,
        disabled: disabled,
        readOnly: true,
        tabIndex: "-1" // Prevents the checkbox from being focused, since we're using the container as the focusable element

      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CustomCheckbox, {
        "data-cy": "custom-checkbox",
        children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          size: size
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IconCheckmark, {})
      }), label && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
        htmlFor: inputId,
        children: label
      })]
    }));
  }

}

StyledCheckbox.defaultProps = {
  size: '14px',
  defaultChecked: false,
  width: 'auto',
  alignItems: 'center'
};
StyledCheckbox.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "newValue",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "StyledCheckbox",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "description": "An optional size",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "defaultChecked": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Whether the checkbox should be checked by default. Ignored if `checked` is provided.",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "width": {
      "defaultValue": {
        "value": "'auto'",
        "computed": false
      },
      "description": "Set this to 'auto' to not take the full width",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "alignItems": {
      "defaultValue": {
        "value": "'center'",
        "computed": false
      },
      "description": "Default to center",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "description": "The name of the input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onChange": {
      "description": "Called when state change with an object like { name, checked, type, target: { value } }",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "checked": {
      "description": "Whether the checkbox is checked. Use it to control the component. If not provided, component will maintain its own state.",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "inputId": {
      "description": "And optional ID for the `<input/>`",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "disabled": {
      "description": "Whether checkbox should be disabled",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "label": {
      "description": "An optional label to display next to checkbox",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "fontSize": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "isLoading": {
      "description": "If true, the checkbox will be replaced by a spinner",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "error": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledCheckbox);

/***/ })

};
;