"use strict";
(() => {
var exports = {};
exports.id = 5415;
exports.ids = [5415];
exports.modules = {

/***/ 27596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ DEFAULT_AMOUNT_STYLES)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19377);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80642);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93129);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/** Default styles for the amount (not including currency) */


const DEFAULT_AMOUNT_STYLES = {
  letterSpacing: 0,
  fontWeight: 'bold',
  color: 'black.900'
};
const EMPTY_AMOUNT_PLACEHOLDER = '--.--';
/**
 * A practical component to format amounts and their intervals with proper
 * internationalization support.
 */

const FormattedMoneyAmount = ({
  formatWithSeparators,
  abbreviateInterval,
  currency,
  precision,
  amount,
  interval,
  frequency,
  amountStyles,
  showCurrencyCode,
  currencyCodeStyles,
  isCrypto
}) => {
  if (!currency) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: EMPTY_AMOUNT_PLACEHOLDER
    }));
  }

  const formattedAmount = isNaN(amount) || lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(amount) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
    children: EMPTY_AMOUNT_PLACEHOLDER
  })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread({
    value: amount,
    currency: currency,
    precision: precision,
    formatWithSeparators: formatWithSeparators
  }, amountStyles));

  if (frequency) {
    interval = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .getIntervalFromContributionFrequency */ .Pw)(frequency);
  }

  const currencyCode = showCurrencyCode ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, currencyCodeStyles), {}, {
    children: currency
  })) : '';

  if (isCrypto) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: `${amount} ${currency}`
    }));
  } else if (!interval || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].oneTime) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "Amount",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }],
      values: {
        amount: formattedAmount,
        currencyCode
      }
    });
  } else if (abbreviateInterval) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "AmountInterval",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }, {
        "type": 0,
        "value": " / "
      }, {
        "type": 5,
        "value": "interval",
        "options": {
          "month": {
            "value": [{
              "type": 0,
              "value": "mo."
            }]
          },
          "year": {
            "value": [{
              "type": 0,
              "value": "yr."
            }]
          },
          "other": {
            "value": []
          }
        }
      }],
      values: {
        amount: formattedAmount,
        interval: interval ?? '',
        currencyCode
      }
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "AmountIntervalLong",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }, {
        "type": 0,
        "value": " / "
      }, {
        "type": 5,
        "value": "interval",
        "options": {
          "month": {
            "value": [{
              "type": 0,
              "value": "month"
            }]
          },
          "year": {
            "value": [{
              "type": 0,
              "value": "year"
            }]
          },
          "other": {
            "value": []
          }
        }
      }],
      values: {
        amount: formattedAmount,
        interval: interval ?? '',
        currencyCode
      }
    });
  }
};

FormattedMoneyAmount.defaultProps = {
  abbreviate: false,
  abbreviateInterval: false,
  precision: _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyPrecision.DEFAULT */ .E.DEFAULT,
  amountStyles: DEFAULT_AMOUNT_STYLES,
  showCurrencyCode: true
};
FormattedMoneyAmount.__docgenInfo = {
  "description": "A practical component to format amounts and their intervals with proper\ninternationalization support.",
  "methods": [],
  "displayName": "FormattedMoneyAmount",
  "props": {
    "abbreviate": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false
    },
    "abbreviateInterval": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Abbreviate the interval (eg. year => yr.)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "precision": {
      "defaultValue": {
        "value": "CurrencyPrecision.DEFAULT",
        "computed": true
      },
      "description": "How many numbers should we display after the comma",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "enum",
          "value": [{
            "value": "'auto'",
            "computed": false
          }]
        }]
      },
      "required": false
    },
    "amountStyles": {
      "defaultValue": {
        "value": "{ letterSpacing: 0, fontWeight: 'bold', color: 'black.900' }",
        "computed": false
      },
      "description": "Style for the amount (eg. `$10`). Doesn't apply on interval",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "showCurrencyCode": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Whether to show the full currency code (ie. USD)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "amount": {
      "description": "The amount to display, in cents",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "currency": {
      "description": "The currency (eg. `USD`, `EUR`...etc)",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "interval": {
      "description": "An interval that goes with the amount",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'month'",
          "computed": false
        }, {
          "value": "'year'",
          "computed": false
        }, {
          "value": "'oneTime'",
          "computed": false
        }]
      },
      "required": false
    },
    "frequency": {
      "description": "ContributionFrequency from GQLV2",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'MONTHLY'",
          "computed": false
        }, {
          "value": "'YEARLY'",
          "computed": false
        }, {
          "value": "'ONETIME'",
          "computed": false
        }]
      },
      "required": false
    },
    "currencyCodeStyles": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "formatWithSeparators": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattedMoneyAmount);

/***/ }),

/***/ 16738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["size", "items", "children", "selected", "buttonProps", "buttonPropsBuilder", "onChange", "combo", "disabled", "customBorderRadius"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const StyledButtonItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledButtonSet__StyledButtonItem",
  componentId: "sc-6bt6g-0"
})(["border-radius:0;line-height:1.5;flex-grow:1;border-color:", ";transition:color 0.2s,background 0.1s,font-size 30ms;&:active p{color:white;}&:hover,&:focus{z-index:9;}&::-moz-focus-inner{border:0;}&:first-child{border-radius:", ";}&:not(:first-child){margin-left:-1px;}&:last-child{border-radius:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.300'), ({
  customBorderRadius
}) => `${customBorderRadius} 0 0 ${customBorderRadius}`, ({
  combo,
  customBorderRadius
}) => combo ? '0' : `0 ${customBorderRadius} ${customBorderRadius} 0`);
StyledButtonItem.propTypes = {
  combo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

const StyledButtonSet = _ref => {
  let {
    size,
    items,
    children,
    selected,
    buttonProps,
    buttonPropsBuilder,
    onChange,
    combo,
    disabled,
    customBorderRadius
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    display: "flex"
  }, props), {}, {
    children: items.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledButtonItem, _objectSpread(_objectSpread(_objectSpread({
      combo: combo || undefined,
      color: item === selected ? 'white' : 'black.400',
      buttonSize: size,
      buttonStyle: item === selected ? 'primary' : undefined,
      onClick: onChange && (() => onChange(item)),
      className: item === selected ? 'selected' : undefined,
      disabled: disabled,
      "aria-pressed": item === selected,
      type: "button",
      py: "8px",
      customBorderRadius: customBorderRadius
    }, buttonProps), buttonPropsBuilder ? buttonPropsBuilder({
      item,
      index,
      isSelected: item === selected
    }) : {}), {}, {
      children: children({
        item,
        isSelected: item === selected
      })
    }), item))
  }));
};

StyledButtonSet.defaultProps = {
  combo: false,
  size: 'medium',
  fontSize: '14px',
  customBorderRadius: '4px'
};
StyledButtonSet.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledButtonSet",
  "props": {
    "combo": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Setting to style last item to look good in combination with a text input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "size": {
      "defaultValue": {
        "value": "'medium'",
        "computed": false
      },
      "description": "Based on the design system theme",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'small'",
          "computed": false
        }, {
          "value": "'medium'",
          "computed": false
        }, {
          "value": "'large'",
          "computed": false
        }, {
          "value": "'tiny'",
          "computed": false
        }]
      },
      "required": false
    },
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "required": false
    },
    "customBorderRadius": {
      "defaultValue": {
        "value": "'4px'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "items": {
      "description": "A list of elements to build buttons uppon",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "any"
        }
      },
      "required": true
    },
    "children": {
      "description": "Button child content renderer. Get passed an object like { item, isSelected }",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "selected": {
      "description": "Currently selected item",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "onChange": {
      "description": "An optional func called with the new item when option changes",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "disabled": {
      "description": "Disable user input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "buttonPropsBuilder": {
      "description": "Similar to `buttonProps` but allow props to be added dynamically based on item",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "buttonProps": {
      "description": "Button Props",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledButtonSet);

/***/ }),

/***/ 54029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22133);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28992);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_currency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38198);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17632);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78080);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32631);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);


const _excluded = ["currency", "currencyDisplay", "min", "max", "precision", "defaultValue", "value", "onBlur", "onChange", "isEmpty", "hasCurrencyPicker", "onCurrencyChange", "availableCurrencies"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const formatCurrencyName = (currency, currencyDisplay) => {
  if (currencyDisplay === 'SYMBOL') {
    return (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .getCurrencySymbol */ .jK)(currency);
  } else if (currencyDisplay === 'CODE') {
    return currency;
  } else {
    return `${(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .getCurrencySymbol */ .jK)(currency)} ${currency}`;
  }
};

const parseValueFromEvent = (e, precision, ignoreComma) => {
  if (e.target.value === '') {
    return null;
  } else {
    const parsedNumber = parseFloat(ignoreComma ? e.target.value.replace(',', '') : e.target.value);
    return isNaN(parsedNumber) ? NaN : parsedNumber.toFixed(precision);
  }
};
/** Formats value is valid, fallsback on rawValue otherwise */


const getValue = (value, rawValue, isEmpty) => {
  if (isEmpty) {
    return '';
  }

  return isNaN(value) || value === null ? rawValue : value / 100;
};

const getError = (curVal, minAmount, required) => {
  return Boolean(required && lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(curVal) || minAmount && curVal < minAmount);
};

const generateCurrencyOptions = (intl, availableCurrencies) => {
  const currencyDisplayNames = (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_12__/* .getIntlDisplayNames */ ._)(intl.locale, 'currency');
  return availableCurrencies.map(currency => {
    const currencyName = currencyDisplayNames.of(currency);
    const emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__.getEmojiByCurrencyCode)(currency);
    return {
      value: currency,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        title: currencyName,
        children: [emoji && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          children: emoji
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          whiteSpace: "nowrap",
          ml: 1,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            color: "black.800",
            children: currency
          }), ` `, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            color: "black.500",
            children: ["(", currencyName, ")"]
          })]
        })]
      })
    };
  });
};

const getSelectedCurrency = value => {
  const emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__.getEmojiByCurrencyCode)(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
    children: [emoji && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
      children: emoji
    }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
      color: "black.800",
      children: value
    })]
  });
};

const CurrencyPicker = ({
  availableCurrencies,
  value,
  onChange
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const currencyOptions = generateCurrencyOptions(intl, availableCurrencies);
  const selectedCurrency = getSelectedCurrency(value);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    inputId: "currency-picker",
    "data-cy": "currency-picker",
    placeholder: "----",
    error: !value,
    isSearchable: availableCurrencies?.length > 10,
    options: currencyOptions,
    value: !value ? null : {
      value,
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        minWidth: 200,
        children: selectedCurrency
      })
    },
    width: 102,
    onChange: ({
      value
    }) => onChange(value),
    onInputChange: inputValue => inputValue.length <= 3 ? inputValue : inputValue.substr(0, 3) // Limit search length to 3 characters
    ,
    styles: {
      control: {
        border: !value ? '' : 'none',
        background: '#F7F8FA'
      },
      menu: {
        width: '260px'
      }
    }
  });
};

/**
 * An input for amount inputs. Accepts all props from [StyledInputGroup](/#!/StyledInputGroup).
 */
const StyledInputAmount = _ref => {
  let {
    currency,
    currencyDisplay,
    min,
    max,
    precision,
    defaultValue,
    value,
    onBlur,
    onChange,
    isEmpty,
    hasCurrencyPicker,
    onCurrencyChange,
    availableCurrencies
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [rawValue, setRawValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(value || defaultValue || '');
  const isControlled = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(value);
  const hasMin = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(min);
  const curValue = isControlled ? getValue(value, rawValue, isEmpty) : undefined;
  const minAmount = hasMin ? min / 100 : min;

  const dispatchValue = (e, parsedValue) => {
    if (isControlled) {
      setRawValue(e.target.value);
    }

    if (onChange) {
      const valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (parsedValue === null || isNaN(parsedValue)) {
        onChange(parsedValue, e);
      } else if (!e.target.checkValidity() || parsedValue !== valueWithIgnoredComma) {
        onChange(isNaN(e.target.value) ? NaN : null, e);
      } else {
        onChange((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .floatAmountToCents */ .VH)(parsedValue), e);
      }
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    maxWidth: "10em",
    step: "0.01"
  }, props), {}, {
    min: minAmount,
    max: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(max) ? max : max / 100,
    type: "number",
    inputMode: "decimal",
    error: props.error || getError(curValue, minAmount, props.required),
    defaultValue: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(defaultValue) ? undefined : defaultValue / 100,
    value: curValue,
    prependProps: !hasCurrencyPicker ? {
      color: props.disabled ? 'black.400' : 'black.800'
    } : {
      p: 0
    },
    prepend: !hasCurrencyPicker ? formatCurrencyName(currency, currencyDisplay) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      bgColor: "black.50",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(CurrencyPicker, {
        onChange: onCurrencyChange,
        value: currency,
        availableCurrencies: availableCurrencies
      })
    }),
    onWheel: e => {
      e.preventDefault();
      e.target.blur();
    },
    onChange: e => {
      e.stopPropagation();
      dispatchValue(e, parseValueFromEvent(e, precision));
    },
    onBlur: e => {
      // Clean number if valid (ie. 41.1 -> 41.10)
      const parsedNumber = parseValueFromEvent(e, precision);
      const valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (e.target.checkValidity() && !isNaN(parsedNumber) && parsedNumber !== null && valueWithIgnoredComma === parsedNumber) {
        e.target.value = parsedNumber.toString();
        dispatchValue(e, parsedNumber);
      }

      if (onBlur) {
        onBlur(e);
      }
    }
  }));
};

StyledInputAmount.defaultProps = {
  min: 0,
  max: 1000000000,
  precision: 2,
  currencyDisplay: 'SYMBOL',
  name: 'amount',
  availableCurrencies: _lib_constants_currency__WEBPACK_IMPORTED_MODULE_13__/* .Currency */ .F
};
StyledInputAmount.__docgenInfo = {
  "description": "An input for amount inputs. Accepts all props from [StyledInputGroup](/#!/StyledInputGroup).",
  "methods": [],
  "displayName": "StyledInputAmount",
  "props": {
    "min": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "Minimum amount (in CENTS)",
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
    "max": {
      "defaultValue": {
        "value": "1000000000",
        "computed": false
      },
      "description": "Maximum amount (in CENTS)",
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
    "precision": {
      "defaultValue": {
        "value": "2",
        "computed": false
      },
      "description": "Number of decimals",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "currencyDisplay": {
      "defaultValue": {
        "value": "'SYMBOL'",
        "computed": false
      },
      "description": "Currency style. If hasCurrencyPicker is true, `CODE` will be enforced.",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'SYMBOL'",
          "computed": false
        }, {
          "value": "'CODE'",
          "computed": false
        }, {
          "value": "'FULL'",
          "computed": false
        }]
      },
      "required": false
    },
    "name": {
      "defaultValue": {
        "value": "'amount'",
        "computed": false
      },
      "required": false
    },
    "availableCurrencies": {
      "defaultValue": {
        "value": "Currency",
        "computed": true
      },
      "description": "A list of currencies presented in the currency picker",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "currency": {
      "description": "The currency (eg. `USD`, `EUR`...)",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onCurrencyChange": {
      "description": "Gets passed the new currency. Only when hasCurrencyPicker is true",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "description": "Gets passed the amount in cents as first param, and the event as second param.",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onBlur": {
      "description": "OnChange function",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "value": {
      "description": "Value",
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
    "isEmpty": {
      "description": "A special prop to force the empty state",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hasCurrencyPicker": {
      "description": "To enable the currency picker",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["./StyledInputGroup"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputAmount);

/***/ }),

/***/ 38198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Currency),
/* harmony export */   "b": () => (/* binding */ PayPalSupportedCurrencies)
/* harmony export */ });
const Currency = ['USD', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];
/*
 * Supported Currencies by PayPal for use with payments and as currency balances.
 * Reference: https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/
 *
 * TODO: There's few currencies (see above list) which decimal amounts are not supported or for in-country
 *  payouts only. We need to investigate and add support for these if possible.
 *
 */

const PayPalSupportedCurrencies = ['AUD', 'CAD', 'CZK', 'DKK', 'EUR', 'HKD', 'ILS', 'MXN', 'NZD', 'NOK', 'PHP', 'PLN', 'GBP', 'RUB', 'SGD', 'SEK', 'CHF', 'THB', 'USD'];

/***/ }),

/***/ 80642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getGQLV2FrequencyFromInterval": () => (/* binding */ getGQLV2FrequencyFromInterval)
/* harmony export */ });
const INTERVALS = {
  oneTime: 'oneTime',
  month: 'month',
  year: 'year',
  flexible: 'flexible'
};
const getGQLV2FrequencyFromInterval = interval => {
  switch (interval) {
    case INTERVALS.month:
      return 'MONTHLY';

    case INTERVALS.year:
      return 'YEARLY';

    case INTERVALS.flexible:
      return 'FLEXIBLE';

    default:
      return 'ONETIME';
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTERVALS);

/***/ }),

/***/ 15078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B1": () => (/* binding */ getNextChargeDate),
/* harmony export */   "EB": () => (/* binding */ encodeDateInterval),
/* harmony export */   "GF": () => (/* binding */ simpleDateToISOString),
/* harmony export */   "Pw": () => (/* binding */ getIntervalFromContributionFrequency),
/* harmony export */   "Zz": () => (/* binding */ convertDateToApiUtc),
/* harmony export */   "cq": () => (/* binding */ convertDateFromApiUtc),
/* harmony export */   "dr": () => (/* binding */ parseDateInterval),
/* harmony export */   "fM": () => (/* binding */ toIsoDateStr),
/* harmony export */   "j9": () => (/* binding */ getDateFromValue),
/* harmony export */   "qb": () => (/* binding */ isValidDate),
/* harmony export */   "xR": () => (/* binding */ stripTime)
/* harmony export */ });
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96839);
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_padStart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80642);
/* harmony import */ var _dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82114);



/**
 * For a given date, return the next charge date.
 *
 * @param {Date} firstChargeDate
 * @param {month|year} interval
 */

const getNextChargeDate = (firstChargeDate, interval) => {
  if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].month) {
    if (firstChargeDate.getDate() > 15) {
      return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 2);
    }

    return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 1);
  } else if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].year) {
    return new Date(firstChargeDate.getFullYear() + 1, firstChargeDate.getMonth());
  } else {
    return null;
  }
};
/**
 * Format a datetime object to an ISO date like `YYYY-MM-DD`
 */

const toIsoDateStr = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();
  return `${year}-${lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default()(month.toString(), 2, '0')}-${lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default()(day.toString(), 2, '0')}`;
};
/**
 * From an order frequency provided as `ContributionFrequency` GQLV2 enum, returns an interval
 * as we use it in the DB (ie. MONTHLY => month)
 */

const getIntervalFromContributionFrequency = input => {
  switch (input) {
    case 'MONTHLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].month;

    case 'YEARLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].year;

    case 'FLEXIBLE':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].flexible;

    default:
      return null;
  }
};
/**
 * Takes a date and returns it as a string in the format YYYY-MM-DD
 */

const stripTime = date => {
  if (!date) {
    return '';
  } else {
    return (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date).format('YYYY-MM-DD');
  }
};
/**
 * A helper that returns a Date object from different types of input.
 * Currently supports:
 * - string: ISO date string
 * - Date object
 * - DayJS object
 * - null
 */

const getDateFromValue = value => {
  if (!value) {
    return null;
  } else if (typeof value === 'string') {
    return new Date(value);
  } else if (value instanceof Date) {
    return value;
  } else if (value instanceof _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
    return value.toDate();
  }
};
/**
 * From a simple date as '2020-01-01', returns a string like '2020-01-01T00:00:00Z'.
 */

const simpleDateToISOString = (date, isEndOfDay, timezoneType) => {
  if (!date) {
    return null;
  } else {
    const isUTC = timezoneType === 'UTC';
    const dayjsTimeMethod = isEndOfDay ? 'endOf' : 'startOf';
    const result = isUTC ? _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].utc */ .Z.utc(date) : (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date);
    return result[dayjsTimeMethod]('day').toISOString();
  }
};
/**
 * Parse `strValue` in a "dateFrom→dateTo" format and returns an object like { from, to, timezoneType }.
 * Each value in the object will be `undefined` if there's no filter for it.
 */

const parseDateInterval = strValue => {
  const parsedValue = strValue?.match(/^(?<from>[^→]+)(→(?<to>.+?(?=~UTC|$)))?(~(?<timezoneType>UTC))?$/);

  if (parsedValue) {
    const getDateIsoString = dateStr => !dateStr || dateStr === 'all' ? undefined : dateStr;

    return {
      from: getDateIsoString(parsedValue.groups.from),
      to: getDateIsoString(parsedValue.groups.to),
      timezoneType: parsedValue.groups.timezoneType || 'local'
    };
  } else {
    return {
      from: undefined,
      to: undefined,
      timezoneType: 'local'
    };
  }
};
/**
 * Opposite of `parseDateInterval`: takes an object like {from, to, timezoneType} and returns a string
 * like "from→to".
 */

const encodeDateInterval = interval => {
  if (!interval || !interval.from && !interval.to) {
    return '';
  }

  const encodeDate = (date, isEndOfDay) => {
    return simpleDateToISOString(date, isEndOfDay, interval.timezoneType) || 'all';
  };

  const baseResult = `${encodeDate(interval.from, false)}→${encodeDate(interval.to, true)}`;
  return interval.timezoneType === 'UTC' ? `${baseResult}~UTC` : baseResult;
};
const convertDateToApiUtc = (date, timezone) => {
  const result = _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].tz */ .Z.tz(date, timezone).utc().format('YYYY-MM-DD HH:mm:ss+00'); // console.log('convertDateToApiUtc', date, timezone, result);

  return result;
};
const convertDateFromApiUtc = (date, timezone) => {
  const result = (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss'); // console.log('convertDateFromApiUtc', date, timezone, result);

  return result;
};
/**
 * Check if the date is valid while editing
 */

const isValidDate = date => {
  return date && !date.startsWith('0');
};

/***/ }),

/***/ 82114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);


 // In-order to use certain functionality of dayjs, we need to import certain plugins and extend them to the dayjs object.
// adding utc plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default())); // adding timezone plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ 78080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getIntlDisplayNames)
/* harmony export */ });
/**
 * A dummy polyfill for `Intl.DisplayNames`. If falling back to the default string is not an acceptable option
 * feel free to add a [real polyfill](https://formatjs.io/docs/polyfills/intl-displaynames/) and remove this helper.
 */
const getIntlDisplayNames = (locale, type) => {
  try {
    return new Intl.DisplayNames(locale, {
      type
    });
  } catch {
    return {
      of: str => str
    };
  }
};

/***/ }),

/***/ 9939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCreatePledgeMutation": () => (/* binding */ addCreatePledgeMutation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51719);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89314);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97079);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11194);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1259);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69078);
/* harmony import */ var _components_Currency__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93129);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11333);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42352);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88705);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56562);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(53169);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84842);
/* harmony import */ var _components_PledgedCollectivePage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(10955);
/* harmony import */ var _components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(16738);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(97274);
/* harmony import */ var _components_StyledInputAmount__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(54029);
/* harmony import */ var _components_StyledInputField__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(87262);
/* harmony import */ var _components_StyledInputGroup__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(32631);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(51082);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_18__, _components_Header__WEBPACK_IMPORTED_MODULE_20__, _components_Page__WEBPACK_IMPORTED_MODULE_25__, _components_PledgedCollectivePage__WEBPACK_IMPORTED_MODULE_26__, _components_StyledInputField__WEBPACK_IMPORTED_MODULE_30__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_18__, _components_Header__WEBPACK_IMPORTED_MODULE_20__, _components_Page__WEBPACK_IMPORTED_MODULE_25__, _components_PledgedCollectivePage__WEBPACK_IMPORTED_MODULE_26__, _components_StyledInputField__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





































const defaultPledgedLogo = '/static/images/default-pledged-logo.svg';
const labelStyles = {
  color: 'black.600',
  fontWeight: 400,
  as: 'label',
  mb: 1
};
const Details = styled_components__WEBPACK_IMPORTED_MODULE_1___default().details.withConfig({
  displayName: "createPledge__Details",
  componentId: "sc-f3btza-0"
})(["&[open]{font-size:14px;margin-bottom:", "px;summary::after{content:'-';}}summary{color:", ";font-size:16px;font-weight:500;margin-bottom:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)('space.4'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)('colors.black.900'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)('space.3'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)('space.2'));

const WordCountTextarea = () => {
  const {
    0: wordCount,
    1: setWordCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(140);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
      justifyContent: "space-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
        htmlFor: "publicMessage",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "createPledge.message",
          defaultMessage: [{
            "type": 0,
            "value": "A message for the community (optional)"
          }]
        })
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
        as: "p",
        children: wordCount
      }))]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledInput__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP, {
      border: "1px solid",
      borderColor: "black.300",
      borderRadius: "4px",
      fontSize: "14px",
      as: "textarea",
      id: "publicMessage",
      name: "publicMessage",
      "data-cy": "publicMessage",
      placeholder: "This will be public and it is also optional",
      onChange: ({
        target
      }) => setWordCount(() => 140 - target.value.length),
      px: 2,
      py: 1,
      rows: 4
    })]
  });
};

const AMOUNT_OPTIONS = [500, 1000, 1500, 2000, 5000, 10000, 25000];

const AmountField = () => {
  const {
    0: amount,
    1: setAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2000);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
    flexDirection: "column",
    mb: 3,
    width: [1, 'auto', 'auto'],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_StyledStyledInputField, {
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "Label.AmountWithCurrency",
            defaultMessage: [{
              "type": 0,
              "value": "Amount ("
            }, {
              "type": 1,
              "value": "currency"
            }, {
              "type": 0,
              "value": ")"
            }],
            values: {
              currency: 'USD'
            }
          })
        })),
        htmlFor: "amount",
        children: fieldProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            combo: true,
            items: AMOUNT_OPTIONS,
            selected: amount,
            onChange: value => setAmount(value),
            children: ({
              item
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Currency__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              value: item,
              currency: "USD"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledInputAmount__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, fieldProps), {}, {
            type: "number",
            currency: "USD",
            min: 100,
            value: amount,
            width: 1,
            onChange: amount => setAmount(amount),
            containerProps: {
              borderRadius: '0 4px 4px 0',
              ml: '-1px'
            },
            prependProps: {
              pl: 2,
              pr: 0,
              bg: 'white.full'
            },
            px: "2px",
            minWidth: 75,
            required: true
          }))]
        })
      })
    })
  });
};

class CreatePledgePage extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      errorMessage: null,
      loadingUserLogin: true,
      LoggedInUser: undefined,
      submitting: false
    });
  }

  static getInitialProps({
    query = {}
  }) {
    return {
      name: query.name || '',
      githubHandle: query.githubHandle || '',
      slug: query.slug
    };
  }

  async createPledge(event) {
    event.preventDefault();
    const {
      target: {
        elements: {
          name,
          slug,
          amount,
          fromCollective,
          githubHandle,
          publicMessage,
          interval
        }
      }
    } = event;
    const {
      data
    } = this.props;
    this.setState({
      submitting: true
    });
    const order = {
      collective: {},
      fromCollective: {
        id: Number(fromCollective.value)
      },
      totalAmount: Number(amount.value) * 100,
      publicMessage: publicMessage.value
    };

    if (interval.value !== 'none') {
      order.interval = interval.value;
    }

    if (data) {
      order.collective.id = data.Collective.id;
    } else {
      order.collective = {
        name: name.value,
        slug: slug.value,
        tags: ['open source', 'pledged'],
        githubHandle: githubHandle.value
      };
    }

    try {
      const {
        data: {
          createOrder: result
        }
      } = await this.props.createPledge(order, this.props.data?.Collective);

      if (result.collective.slug) {
        this.props.router.push(`/${result.collective.slug}`);
      }
    } catch (error) {
      this.setState({
        errorMessage: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .getErrorFromGraphqlException */ .H1)(error).message,
        submitting: false
      });
    } finally {
      this.setState({
        submitting: false
      });
    }
  }

  render() {
    const {
      errorMessage,
      submitting
    } = this.state;
    const {
      data = {},
      name,
      slug,
      githubHandle,
      LoggedInUser,
      loadingLoggedInUser,
      intl
    } = this.props;

    if (data.loading) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          my: 6,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {})
        })
      });
    }

    let website;

    if (data.Collective) {
      website = data.Collective.githubHandle ? `https://github.com/${data.Collective.githubHandle}` : data.Collective.website;
    }

    const profiles = LoggedInUser && LoggedInUser.memberOf.concat(_objectSpread(_objectSpread({}, LoggedInUser), {}, {
      role: 'ADMIN'
    })).filter(({
      role
    }) => ['ADMIN', 'HOST'].includes(role));

    const pledgeStats = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'Collective.pledges', []).reduce((stats, {
      fromCollective,
      totalAmount
    }) => {
      stats[fromCollective.type]++;
      stats.total += totalAmount;
      return stats;
    }, {
      USER: 0,
      ORGANIZATION: 0,
      COLLECTIVE: 0,
      total: 0
    });

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        title: intl.formatMessage(CreatePledgePage.messages['menu.createPledge']),
        className: loadingLoggedInUser ? 'loading' : '',
        LoggedInUser: LoggedInUser
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          mx: "auto",
          py: 4,
          display: ['flex', null, 'block'],
          flexDirection: "column",
          justifyContent: "space-around",
          maxWidth: "1200px",
          clearfix: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            float: ['none', null, 'left'],
            maxWidth: "600px",
            mt: [4, null, 0],
            order: [2, null, 1],
            px: 3,
            width: [1, null, 0.5],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H3, {
              as: "h1",
              color: "black.900",
              textAlign: "left",
              mb: 4,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "menu.createPledge",
                defaultMessage: [{
                  "type": 0,
                  "value": "Make a Pledge"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
              my: 3,
              color: "black.500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.why",
                defaultMessage: [{
                  "type": 0,
                  "value": "If the cause or collective that you want to support is not yet on Open Collective, you can make a pledge. This will incentivize them to create an open collective for their activities and offer you much more visibility on how your money is spent to advance their cause."
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
              my: 3,
              color: "black.500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.onceTheyCreateIt",
                defaultMessage: [{
                  "type": 0,
                  "value": "Once they create it (and verify that they own the URL you’ll enter in this form), you will receive an email to ask you to fulfill your pledge."
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
              my: 3,
              color: "black.500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.conditions",
                defaultMessage: [{
                  "type": 0,
                  "value": "At the moment, you can only pledge for Open Source projects with a GitHub repository or organization. We request the project to have a least 100 stars on GitHub!"
                }]
              })
            }), loadingLoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
              my: 3,
              color: "black.500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.loadingProfile",
                defaultMessage: [{
                  "type": 0,
                  "value": "Loading profile..."
                }]
              })
            }), !loadingLoggedInUser && !LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
              mt: [5, null, 4],
              color: "black.700",
              fontSize: "16px",
              lineHeight: "24px",
              "data-cy": "signupOrLogin",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.signinToCreate",
                defaultMessage: [{
                  "type": 8,
                  "value": "signin-link",
                  "children": [{
                    "type": 0,
                    "value": "Sign in or join free"
                  }]
                }, {
                  "type": 0,
                  "value": " to create a pledge."
                }],
                values: {
                  'signin-link': msg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    href: {
                      pathname: '/signin',
                      query: {
                        next: slug ? `/${slug}/pledges/new` : '/pledges/new'
                      }
                    },
                    children: msg
                  })
                }
              })
            }), !loadingLoggedInUser && LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("form", {
              onSubmit: this.createPledge.bind(this),
              children: [!slug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                mb: 3,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H5, {
                  textAlign: "left",
                  mb: 4,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "createPledge.collectiveDetails",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Details of the new collective:"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  position: "relative",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    position: "absolute",
                    left: -45,
                    top: 0,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                      src: "/static/icons/first-pledge-badge.svg",
                      alt: "first pledge",
                      height: 32,
                      width: 32
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                    fontWeight: "bold",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "createPledge.first",
                      defaultMessage: [{
                        "type": 0,
                        "value": "You are the first pledger!"
                      }]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                  color: "black.500",
                  fontSize: "12px",
                  mt: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "createPledge.priviledge",
                    defaultMessage: [{
                      "type": 0,
                      "value": "You’ve earned the privilege to name and describe this awesome cause. We’ll create a pledged collective page for it so other people can find it and pledge to it too."
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                  flexDirection: ['column', null, 'row'],
                  alignItems: ['flex-start', null, 'flex-end'],
                  mt: 3,
                  flexWrap: "wrap",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                    flexDirection: "column",
                    mb: 3,
                    pr: [0, null, 3],
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                      htmlFor: "name",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "Fields.name",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Name"
                        }]
                      })
                    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledInput__WEBPACK_IMPORTED_MODULE_28__/* .TextInput */ .oi, {
                      "data-cy": "nameInput",
                      name: "name",
                      id: "name",
                      defaultValue: name
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                    flexDirection: "column",
                    mb: 3,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                      htmlFor: "slug",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "Collective.URL",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Collective URL"
                        }]
                      })
                    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledInputGroup__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                      prepend: "https://opencollective.com/",
                      id: "slug",
                      name: "slug",
                      defaultValue: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_7__/* .suggestSlug */ .e4)(name || '').toLowerCase(),
                      "data-cy": "slugInput"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                  flexDirection: "column",
                  mb: 3,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                    htmlFor: "githubHandle",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "createPledge.githubURL",
                      defaultMessage: [{
                        "type": 0,
                        "value": "GitHub URL: repository or organization with at least 100 stars!"
                      }]
                    })
                  })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledInputGroup__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                    prepend: "https://github.com/",
                    id: "githubHandle",
                    name: "githubHandle",
                    placeholder: "e.g., babel/babel",
                    defaultValue: githubHandle || '',
                    "data-cy": "githubHandleInput"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                my: 5,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H5, {
                  textAlign: "left",
                  mb: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "createPledge.pledgeAs",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Pledge as:"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                  flexDirection: "column",
                  my: 3,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                    htmlFor: "fromCollective",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "createPledge.profile",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Choose a profile"
                      }]
                    })
                  })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("select", {
                    id: "fromCollective",
                    name: "fromCollective",
                    defaultValue: LoggedInUser.CollectiveId,
                    children: profiles.map(({
                      collective
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("option", {
                      value: collective.id,
                      children: collective.name
                    }, collective.slug + collective.id))
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                mb: 5,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H5, {
                  textAlign: "left",
                  mb: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "createPledge.pledgeDetails",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Pledge details:"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(AmountField, {
                  LoggedInUser: LoggedInUser
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                  flexDirection: "column",
                  mb: 3,
                  width: 200,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                    htmlFor: "interval",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "Frequency",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Frequency"
                      }]
                    })
                  })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)("select", {
                    id: "interval",
                    name: "interval",
                    defaultValue: "monthly",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("option", {
                      value: "month",
                      children: intl.formatMessage(CreatePledgePage.messages['frequency.monthly'])
                    }, "monthly"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("option", {
                      value: "year",
                      children: intl.formatMessage(CreatePledgePage.messages['frequency.yearly'])
                    }, "yearly"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("option", {
                      value: "none",
                      children: intl.formatMessage(CreatePledgePage.messages['frequency.oneTime'])
                    }, "none")]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(WordCountTextarea, {})]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledInput__WEBPACK_IMPORTED_MODULE_28__/* .SubmitInput */ .z0, {
                value: submitting ? 'Submitting...' : 'Make Pledge',
                mt: 4,
                mx: ['auto', null, 0],
                display: "block",
                disabled: !LoggedInUser || submitting,
                "data-cy": "submit"
              })]
            }), errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
              color: "red.500",
              "data-cy": "errorMessage",
              mt: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "errorMsg",
                defaultMessage: [{
                  "type": 0,
                  "value": "Error: "
                }, {
                  "type": 1,
                  "value": "error"
                }],
                values: {
                  error: errorMessage
                }
              })
            })]
          }), slug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              borderBottom: ['1px solid', null, 'none'],
              borderColor: "black.300",
              float: ['none', null, 'right'],
              pb: [4, null, 0],
              px: [3, null, 5],
              textAlign: ['center', null, 'left'],
              order: [1, null, 2],
              width: [1, null, 0.5],
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                src: defaultPledgedLogo,
                alt: "Pledged Collective",
                width: 128,
                height: 128
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H3, {
                mt: 3,
                mb: 1,
                children: data.Collective.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                fontSize: "14px",
                href: website,
                children: website
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              float: ['none', null, 'right'],
              px: [3, null, 5],
              order: 3,
              mt: 5,
              width: [1, null, 0.5],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H5, {
                textAlign: "left",
                fontWeight: "normal",
                mb: 2,
                "data-cy": "amountPledgedTotal",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Currency__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  fontWeight: "bold",
                  value: pledgeStats.total,
                  currency: data.Collective.currency,
                  precision: 0
                }), ' ', data.Collective.currency, " pledged"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.P, {
                color: "black.600",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "create.pledge.stats",
                  values: {
                    both: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE && pledgeStats.USER ? 1 : 0,
                    orgCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE,
                    userCount: pledgeStats.USER,
                    totalCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE + pledgeStats.USER
                  },
                  defaultMessage: [{
                    "type": 0,
                    "value": "by "
                  }, {
                    "type": 6,
                    "value": "orgCount",
                    "options": {
                      "=0": {
                        "value": []
                      },
                      "one": {
                        "value": [{
                          "type": 7
                        }, {
                          "type": 0,
                          "value": " sponsor"
                        }]
                      },
                      "other": {
                        "value": [{
                          "type": 7
                        }, {
                          "type": 0,
                          "value": " sponsors"
                        }]
                      }
                    },
                    "offset": 0,
                    "pluralType": "cardinal"
                  }, {
                    "type": 0,
                    "value": " "
                  }, {
                    "type": 6,
                    "value": "both",
                    "options": {
                      "=0": {
                        "value": []
                      },
                      "other": {
                        "value": [{
                          "type": 0,
                          "value": " and "
                        }]
                      }
                    },
                    "offset": 0,
                    "pluralType": "cardinal"
                  }, {
                    "type": 0,
                    "value": " "
                  }, {
                    "type": 6,
                    "value": "userCount",
                    "options": {
                      "=0": {
                        "value": []
                      },
                      "one": {
                        "value": [{
                          "type": 7
                        }, {
                          "type": 0,
                          "value": " backer "
                        }]
                      },
                      "other": {
                        "value": [{
                          "type": 7
                        }, {
                          "type": 0,
                          "value": " backers "
                        }]
                      }
                    },
                    "offset": 0,
                    "pluralType": "cardinal"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                flexWrap: "wrap",
                mb: 3,
                mt: 4,
                children: data.Collective.pledges.filter(({
                  fromCollective
                }) => fromCollective.type === 'USER').map(({
                  fromCollective
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                  mr: 2,
                  mt: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    href: `/${fromCollective.slug}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
                      collective: fromCollective,
                      radius: 40
                    })
                  })
                }, fromCollective.id))
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                flexWrap: "wrap",
                children: data.Collective.pledges.filter(({
                  fromCollective
                }) => fromCollective.type === 'ORGANIZATION' || fromCollective.type === 'COLLECTIVE').map(({
                  fromCollective
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                  mr: 2,
                  mt: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    href: `/${fromCollective.slug}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                      backgroundImage: `url(${(0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_12__/* .imagePreview */ .Z_)(fromCollective.image, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .defaultImage */ .FM[fromCollective.type], {
                        width: 65
                      })})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      borderRadius: 8,
                      height: 40,
                      width: 40
                    })
                  })
                }, fromCollective.id))
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            clear: !LoggedInUser && slug ? 'both' : 'none',
            float: ['none', null, 'right'],
            mt: 5,
            px: [3, null, 5],
            order: 4,
            width: [1, null, 0.5],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_33__.H4, {
              fontWeight: "medium",
              mb: 3,
              children: "FAQs"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(Details, {
              "data-cy": "whatIsAPledge",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("summary", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "createPledge.faq.whatSummary",
                  defaultMessage: [{
                    "type": 0,
                    "value": "What is a pledge?"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.faq.what",
                defaultMessage: [{
                  "type": 0,
                  "value": "A pledge allows supporters (companies and individuals) to pledge funds towards a collective that hasn’t been created yet. If you can’t find a collective you want to support, pledge to it!"
                }]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(Details, {
              "data-cy": "WHAIP",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("summary", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "createPledge.faq.whatHappensSummary",
                  defaultMessage: [{
                    "type": 0,
                    "value": "What happens after I pledge?"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.faq.whatHappens",
                defaultMessage: [{
                  "type": 0,
                  "value": "Once someone makes a pledge to a collective, we automatically create a pledged collective. We don’t spam folks, so please help us reach out to the community via twitter / github or, if you can, via email."
                }]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(Details, {
              "data-cy": "whenDoIPay",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("summary", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "createPledge.faq.paySummary",
                  defaultMessage: [{
                    "type": 0,
                    "value": "When do I pay?"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.faq.pay",
                defaultMessage: [{
                  "type": 0,
                  "value": "Once that pledged collective is claimed, we will email you to fulfill your pledge."
                }]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxs)(Details, {
              "data-cy": "howDoIClaimPledge",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx("summary", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "createPledge.faq.howToClaimSummary",
                  defaultMessage: [{
                    "type": 0,
                    "value": "How do I claim a pledged collective?"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "createPledge.faq.howToClaim",
                defaultMessage: [{
                  "type": 0,
                  "value": "You’ll need to contact "
                }, {
                  "type": 8,
                  "value": "SupportLink",
                  "children": [{
                    "type": 0,
                    "value": "support"
                  }]
                }, {
                  "type": 0,
                  "value": " to prove that you are an admin of this project."
                }],
                values: _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_35__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})]
    });
  }

}

_defineProperty(CreatePledgePage, "messages", (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  'menu.createPledge': {
    id: "menu.createPledge",
    defaultMessage: [{
      "type": 0,
      "value": "Make a Pledge"
    }]
  },
  'frequency.monthly': {
    id: "Frequency.Monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly"
    }]
  },
  'frequency.yearly': {
    id: "Frequency.Yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly"
    }]
  },
  'frequency.oneTime': {
    id: "Frequency.OneTime",
    defaultMessage: [{
      "type": 0,
      "value": "One time"
    }]
  }
}));

const createPledgePageQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .gqlV1 */ .N
/* GraphQL */
`
  query CreatePledgePage($slug: String!) {
    Collective(slug: $slug) {
      currency
      id
      name
      website
      githubHandle
      pledges: orders(status: PENDING) {
        id
        totalAmount
        fromCollective {
          id
          imageUrl(height: 128)
          slug
          name
          type
        }
      }
    }
  }
`;
const addCreatePledgePageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__.graphql)(createPledgePageQuery, {
  skip: props => !props.slug
});
const createPledgeMutation = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation CreatePledge($order: OrderInputType!) {
    createOrder(order: $order) {
      id
      createdAt
      status
      fromCollective {
        id
        slug
      }
      collective {
        id
        slug
      }
      transactions(type: "CREDIT") {
        id
        uuid
      }
    }
  }
`;
const addCreatePledgeMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__.graphql)(createPledgeMutation, {
  props: ({
    mutate
  }) => ({
    createPledge: async (order, collective) => {
      return await mutate({
        variables: {
          order
        },
        refetchQueries: !collective ? [] : [{
          query: _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_11__/* .legacyCollectiveQuery */ .pY,
          variables: {
            slug: collective.slug
          }
        }, {
          query: _components_PledgedCollectivePage__WEBPACK_IMPORTED_MODULE_26__.pledgedCollectivePageQuery,
          variables: {
            id: collective.id
          }
        }]
      });
    }
  })
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .compose */ .qC)(addCreatePledgePageData, addCreatePledgeMutation);
CreatePledgePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query = {} }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "createPledge",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreatePledgePage",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "githubHandle": {
      "description": "",
      "type": {
        "name": "string"
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
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "createPledge": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_34__/* .withUser */ .ns)(addGraphql((0,next_router__WEBPACK_IMPORTED_MODULE_5__.withRouter)(CreatePledgePage)))));

var _StyledStyledInputField = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_StyledInputField__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z).withConfig({
  displayName: "createPledge___StyledStyledInputField",
  componentId: "sc-f3btza-1"
})({
  flexGrow: 1
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 18022:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 51104:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 10054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 83514:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 32985:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExternalLinkAlt");

/***/ }),

/***/ 86954:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

module.exports = require("lodash/has");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 96839:
/***/ ((module) => {

module.exports = require("lodash/padStart");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 42042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7262,1808,1012,2631,7619,7632,3129,1950], () => (__webpack_exec__(9939)));
module.exports = __webpack_exports__;

})();