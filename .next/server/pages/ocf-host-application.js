"use strict";
(() => {
var exports = {};
exports.id = 6726;
exports.ids = [6726];
exports.modules = {

/***/ 29242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29925);




const AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

const LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPlaceholder);

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

/***/ 35786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50567);
/* harmony import */ var _styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89457);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58689);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















const AboutOurFees = () => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const backLinkPath = query.collectiveSlug ? `/foundation/apply/intro?collectiveSlug=${query.collectiveSlug}` : '/foundation/apply/intro';
  const nextLinkPath = query.collectiveSlug ? `/foundation/apply/form?collectiveSlug=${query.collectiveSlug}` : '/foundation/apply/form';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      mb: [null, 3],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        width: '160px',
        height: '160px',
        mb: "24px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          alt: "About our fees illustration",
          src: "/static/images/ocf-host-application/aboutOurFees-illustration.png",
          width: 160,
          height: 160
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        textAlign: ['center', 'left'],
        width: ['288px', '404px'],
        mb: 4,
        ml: [null, '24px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: ['center', 'left'],
          mb: "14px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "OCFHostApplication.aboutOurFees",
            defaultMessage: [{
              "type": 0,
              "value": "About our fees"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "OCFHostApplication.aboutOurFees.description",
            defaultMessage: [{
              "type": 0,
              "value": "In order to support you better, we use the Open Collective Platform to manage your initiative."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      justifyContent: "center",
      alignItems: "center",
      my: 3,
      flexDirection: ['column', 'row'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        width: "248px",
        height: "172px",
        borderRadius: "8px",
        border: "1px solid #C4C7CC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        mb: ['24px', 0],
        mr: [null, '48px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          color: "#05464A",
          fontSize: "28px",
          lineHeight: "36px",
          fontWeight: "500",
          mb: 2,
          children: "5%"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          color: "black.900",
          fontSize: "15px",
          lineHeight: "22px",
          fontWeight: "500",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "OCFHostApplication.crowdFunding",
            defaultMessage: [{
              "type": 0,
              "value": "Crowdfunding"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          width: "201px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
            textAlign: "center",
            color: "black.600",
            fontSize: "13px",
            lineHeight: "16px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "OCFHostApplication.crowdFunding.description",
              defaultMessage: [{
                "type": 0,
                "value": "On each incoming contribution made via the Open Collective Platform"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        width: "248px",
        height: "172px",
        borderRadius: "8px",
        border: "1px solid #C4C7CC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          color: "#05464A",
          fontSize: "28px",
          lineHeight: "36px",
          fontWeight: "500",
          mb: 2,
          children: "4-8%"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          color: "black.900",
          fontSize: "15px",
          lineHeight: "22px",
          fontWeight: "500",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "OCFHostApplication.bankTransfer",
            defaultMessage: [{
              "type": 0,
              "value": "Bank Transfer or Check"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          width: "201px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
            textAlign: "center",
            color: "black.600",
            fontSize: "13px",
            lineHeight: "16px",
            children: ["**", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "OCFHostApplication.bankTransfer.description",
              defaultMessage: [{
                "type": 0,
                "value": "Based on amount raised"
              }]
            })]
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      my: [4, 2],
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        width: ['288px', '396px'],
        textAlign: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "#050505",
          mb: "24px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "OCFHostApplication.aboutOurFees.note",
            defaultMessage: [{
              "type": 0,
              "value": "*Third-party payment processors (like Stripe and Paypal) charge their own fees. "
            }, {
              "type": 8,
              "value": "LearnMoreLink",
              "children": [{
                "type": 0,
                "value": "Learn more"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              LearnMoreLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)({
                openInNewTab: true,
                color: '#396C6F',
                href: 'https://docs.opencollective.foundation/how-it-works/fees'
              })
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "#050505",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "OCFHostApplication.aboutOurFees.otherFees",
            defaultMessage: [{
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "**8%"
              }]
            }, {
              "type": 0,
              "value": " Up to $500k raised. "
            }, {
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "- 6%"
              }]
            }, {
              "type": 0,
              "value": " Up to $1 million raised. "
            }, {
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "- 4%"
              }]
            }, {
              "type": 0,
              "value": " Over $1 million raised"
            }],
            values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      mb: "40px",
      mt: [null, '48px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        href: backLinkPath,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          mb: [3, 0],
          width: ['286px', '100px'],
          mr: [null, 3],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_1__.ArrowLeft2, {
            size: "14px"
          }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Back",
            defaultMessage: [{
              "type": 0,
              "value": "Back"
            }]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        href: nextLinkPath,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          width: ['286px', '100px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Pagination.Next",
            defaultMessage: [{
              "type": 0,
              "value": "Next"
            }]
          }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_2__.ArrowRight2, {
            size: "14px"
          })]
        })
      })]
    })]
  });
};

AboutOurFees.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AboutOurFees"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutOurFees);

/***/ }),

/***/ 78936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88705);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const ApplicationDescription = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    mb: 3,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.importance",
      defaultMessage: [{
        "type": 0,
        "value": "It can take years for a group to get 501(c)(3) non-profit status. Fiscal hosts are especially helpful to newly formed nonprofit groups, large and small. We act as a legal entity for your group, organizing the back-end of your fundraising efforts. It’s fast and easy to apply. Once your group is approved, you can begin collecting funds immediately."
      }]
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.H5, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.howItWorks",
      defaultMessage: [{
        "type": 0,
        "value": "How it works:"
      }]
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    mb: 3,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.howItWorks.list",
      values: {
        lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {})
      },
      defaultMessage: [{
        "type": 0,
        "value": "• Donations are made to our 501(c)(3) (tax-exempt status applies)"
      }, {
        "type": 1,
        "value": "lineBreak"
      }, {
        "type": 0,
        "value": " • We make a “grant” to your group/project"
      }, {
        "type": 1,
        "value": "lineBreak"
      }, {
        "type": 0,
        "value": " • We send donors their receipts, disburse funds/reimburse expenses after your approval, send out the tax forms to independent contractors as applicable"
      }, {
        "type": 1,
        "value": "lineBreak"
      }, {
        "type": 0,
        "value": " • You have complete access to collect, spend, manage your money on our platform."
      }]
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
    fontSize: "13px",
    lineHeight: "20px",
    color: "#090A0A",
    mb: 3,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OCFHostApplication.readInfoGuideAndTOS",
      values: {
        InfoGuideLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_2__/* .getI18nLink */ .fw)({
          color: '#396C6F',
          textDecoration: 'underline',
          openInNewTab: true,
          href: 'https://docs.opencollective.foundation'
        }),
        TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_2__/* .getI18nLink */ .fw)({
          color: '#396C6F',
          textDecoration: 'underline',
          openInNewTab: true,
          href: 'https://docs.google.com/document/u/2/d/e/2PACX-1vQ_fs7IOojAHaMBKYtaJetlTXJZLnJ7flIWkwxUSQtTkWUMtwFYC2ssb-ooBnT-Ldl6wbVhNQiCkSms/pub'
        })
      },
      defaultMessage: [{
        "type": 0,
        "value": "Please take a moment to read our "
      }, {
        "type": 8,
        "value": "InfoGuideLink",
        "children": [{
          "type": 0,
          "value": "documentation"
        }]
      }, {
        "type": 0,
        "value": " and "
      }, {
        "type": 8,
        "value": "TOSLink",
        "children": [{
          "type": 0,
          "value": "Terms and Conditions"
        }]
      }, {
        "type": 0,
        "value": " before applying. We want to make this process as easy for you as possible; you will need to know a few things to have a smooth experience."
      }]
    })
  })]
});

ApplicationDescription.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationDescription"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationDescription);

/***/ }),

/***/ 58689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87268);


const OCFPrimaryButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
  displayName: "OCFPrimaryButton",
  componentId: "sc-le1nn-0"
})(["background:linear-gradient(180deg,#4f7d7f 0%,#396c6f 100%);border-color:transparent;color:#ffffff;&:focus{border:solid 2px #90f0bd;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:active{background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:hover{border-color:transparent;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OCFPrimaryButton);

/***/ }),

/***/ 26133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89457);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41433);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _ApplicationDescription__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78936);
/* harmony import */ var _OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58689);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















const TermsOfFiscalSponsorship = ({
  checked,
  onChecked
}) => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const nextLinkPath = query.collectiveSlug ? `/foundation/apply/fees?collectiveSlug=${query.collectiveSlug}` : '/foundation/apply/fees';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: '160px',
        height: '160px',
        mb: "24px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          alt: "OCF sponsorship illustration",
          src: "/static/images/ocf-host-application/ofc-sponsorship-illustration.png",
          width: 160,
          height: 160
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        textAlign: ['center', 'left'],
        width: ['288px', '404px'],
        mb: 4,
        ml: [null, '24px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: ['center', 'left'],
          mb: "14px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "OCFHostApplication.title",
            defaultMessage: [{
              "type": 0,
              "value": "Apply with your initiative"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "OCFHostApplication.description",
            defaultMessage: [{
              "type": 0,
              "value": "Get your non-profit initiative up and running fast."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      width: ['288px', '588px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ApplicationDescription__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "center",
        mb: 4,
        mt: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mr: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            name: "TOSAgreement",
            background: "#396C6F",
            size: "16px",
            checked: checked,
            onChange: ({
              checked
            }) => onChecked(checked),
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
              ml: 1,
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "400",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "OCFHostApplication.tosCheckBoxLabel",
                defaultMessage: [{
                  "type": 0,
                  "value": "I agree with the "
                }, {
                  "type": 8,
                  "value": "TOSLink",
                  "children": [{
                    "type": 0,
                    "value": "terms of fiscal sponsorship"
                  }]
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_7__/* .getI18nLink */ .fw)({
                    href: 'https://docs.opencollective.foundation/getting-started/terms',
                    openInNewTabNoFollow: true,
                    onClick: e => e.stopPropagation() // don't check the checkbox when clicking on the link

                  })
                }
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      href: nextLinkPath,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        mb: "40px",
        width: ['286px', '100px'],
        disabled: !checked,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Pagination.Next",
          defaultMessage: [{
            "type": 0,
            "value": "Next"
          }]
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
          size: "14px"
        })]
      })
    })]
  });
};

TermsOfFiscalSponsorship.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TermsOfFiscalSponsorship",
  "props": {
    "checked": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onChecked": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsOfFiscalSponsorship);

/***/ }),

/***/ 63030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89457);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const Link = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "YourInitiativeIsNearlyThere__Link",
  componentId: "sc-82drp8-0"
})(["margin-left:8px;margin-right:8px;color:#313233;text-decoration:underline !important;font-weight:400;"]);
const VisitDocumentationLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "YourInitiativeIsNearlyThere__VisitDocumentationLink",
  componentId: "sc-82drp8-1"
})(["background:linear-gradient(180deg,#4f7d7f 0%,#396c6f 100%);border-color:transparent;white-space:nowrap;color:#ffffff;&:focus{border:solid 2px #90f0bd;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:active{background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:hover{border-color:transparent;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}"]);

const YourInitiativeIsNearlyThere = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  mt: ['24px', '48px'],
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    mb: [null, 3],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: ['288px', '360px'],
      height: ('128px', '160px'),
      mb: "24px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alt: "Your initiative is nearly there illustration",
        src: "/static/images/ocf-host-application/ocf-initiativeIsAlmostThere-illustration.png",
        width: 360,
        height: 160
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      textAlign: "center",
      width: ['288px', '404px'],
      mb: "14px",
      ml: [null, '24px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H1, {
        fontSize: "32px",
        lineHeight: "40px",
        letterSpacing: "-0.008em",
        color: "black.900",
        textAlign: "center",
        mb: "14px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "OCFHostApplication.yourInitiativeIsNearlyThere",
          defaultMessage: [{
            "type": 0,
            "value": "Your initiative is nearly there!"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "black.600",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "OCFHostApplication.yourInitiativeIsNearlyThere.description",
          defaultMessage: [{
            "type": 0,
            "value": "We need to undertake our internal process to get everything ready. "
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 0,
            "value": " In the meantime, check out these useful links."
          }],
          values: {
            lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home",
          defaultMessage: [{
            "type": 0,
            "value": "Home"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "/help",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "community.support",
          defaultMessage: [{
            "type": 0,
            "value": "Support"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "https://slack.opencollective.com/",
        children: "Slack"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "https://blog.opencollective.com/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "company.blog",
          defaultMessage: [{
            "type": 0,
            "value": "Blog"
          }]
        })
      })]
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    my: "48px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      color: "black.800",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.partnerProjects",
        defaultMessage: [{
          "type": 0,
          "value": "These projects are trusting us:"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      justifyContent: ['flex-start', 'center'],
      mt: 4,
      width: ['288px', '672px'],
      overflow: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "208px",
        height: "204px",
        borderRadius: "12px",
        border: "1px solid #E8E9EB",
        padding: "16px",
        flexDirection: "column",
        mr: "24px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "80px",
          height: "80px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            alt: "Chrome logo",
            src: "/static/images/ocf-host-application/chrome-logo.png",
            width: 80,
            height: 80
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "176px",
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: "20px",
            color: "black.900",
            lineHeight: "28px",
            my: 2,
            children: "Chrome's Web Fund"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "14px",
            color: "black.800",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "OCFHostApplication.weAreAFund",
              defaultMessage: [{
                "type": 0,
                "value": "We are a fund"
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "208px",
        height: "204px",
        borderRadius: "12px",
        border: "1px solid #E8E9EB",
        padding: "16px",
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "80px",
          height: "80px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            alt: "CVKey logo",
            src: "/static/images/ocf-host-application/cvKey-logo.png",
            width: 80,
            height: 80
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "176px",
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: "20px",
            color: "black.900",
            lineHeight: "28px",
            my: 2,
            children: "CVKey Project Fund"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "14px",
            color: "black.800",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "OCFHostApplication.weAreAFund",
              defaultMessage: [{
                "type": 0,
                "value": "We are a fund"
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "208px",
        height: "204px",
        borderRadius: "12px",
        border: "1px solid #E8E9EB",
        padding: "16px",
        flexDirection: "column",
        ml: "24px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "80px",
          height: "80px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            alt: "WTV logo",
            src: "/static/images/ocf-host-application/wtv-logo.svg",
            width: 80,
            height: 80
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "176px",
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: "20px",
            color: "black.900",
            lineHeight: "28px",
            my: 2,
            children: "#Walkthevote Project"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "14px",
            color: "black.800",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "OCFHostApplication.weAreAFund",
              defaultMessage: [{
                "type": 0,
                "value": "We are a fund"
              }]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(VisitDocumentationLink, {
      my: "40px",
      href: "https://docs.opencollective.foundation/",
      width: ['286px', '215px'],
      buttonStyle: "primary",
      borderColor: "transparent",
      buttonSize: "medium",
      openInNewTab: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.visitDocumentation",
        defaultMessage: [{
          "type": 0,
          "value": "Visit the documentation "
        }, {
          "type": 1,
          "value": "arrowRight"
        }],
        values: {
          arrowRight: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
            size: "14px"
          })
        }
      })
    })]
  })]
});

YourInitiativeIsNearlyThere.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "YourInitiativeIsNearlyThere"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YourInitiativeIsNearlyThere);

/***/ }),

/***/ 14574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36422);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Admin = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_StyledTag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right'
}).withConfig({
  displayName: "OnboardingProfileCard__Admin",
  componentId: "sc-shs4i4-0"
})([""]);

class OnboardingProfileCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      collective,
      removeAdmin,
      isPending
    } = this.props;
    const {
      name
    } = collective;

    const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Admin, {
      closeButtonProps: removeAdmin ? {
        onClick: () => {
          removeAdmin(collective);
        }
      } : null,
      "data-cy": "remove-user",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          radius: 16,
          collective: collective
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          fontSize: "12px",
          ml: 2,
          "data-cy": "name-of-admins",
          children: name
        })]
      })
    });

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      my: 1,
      mr: 2,
      children: isPending ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "onboarding.admins.pending",
          defaultMessage: [{
            "type": 0,
            "value": "Pending approval"
          }]
        }),
        children: content
      }) : content
    });
  }

}

OnboardingProfileCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OnboardingProfileCard",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "adminCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "removeAdmin": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isPending": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingProfileCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 3548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _components_ocf_host_application_AboutOurFees__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35786);
/* harmony import */ var _components_ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48247);
/* harmony import */ var _components_ocf_host_application_TermsOfFiscalSponsorship__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26133);
/* harmony import */ var _components_ocf_host_application_YourInitiativeIsNearlyThere__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63030);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84842);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31330);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_8__, _components_Page__WEBPACK_IMPORTED_MODULE_11__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__]);
([_components_ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_8__, _components_Page__WEBPACK_IMPORTED_MODULE_11__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const ocfCollectiveApplicationQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query OcfCollectiveApplicationPage($slug: String) {
    account(slug: $slug) {
      id
      slug
      description
      name
      type
      isAdmin
      ... on AccountWithHost {
        host {
          id
          name
        }
      }
    }
  }
`;
const ocfHostApplicationPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query OcfHostApplicationPage {
    account(slug: "foundation") {
      id
      slug
      policies {
        COLLECTIVE_MINIMUM_ADMINS {
          numberOfAdmins
        }
      }
    }
    tagStats(host: { slug: "foundation" }, limit: 6) {
      nodes {
        id
        tag
      }
    }
  }
`;
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  'error.title': {
    id: "error.title",
    defaultMessage: [{
      "type": 0,
      "value": "Validation Failed"
    }]
  },
  'error.unauthorized.description': {
    id: "error.unauthorized.description",
    defaultMessage: [{
      "type": 0,
      "value": "You have to be an admin of "
    }, {
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " to apply with this initiative."
    }]
  },
  'error.existingHost.description': {
    id: "error.existingHost.description",
    defaultMessage: [{
      "type": 0,
      "value": "This collective is already hosted by "
    }, {
      "type": 1,
      "value": "hostName"
    }, {
      "type": 0,
      "value": "."
    }]
  }
});
const formValues = {
  user: {
    name: '',
    email: ''
  },
  collective: {
    name: '',
    slug: '',
    description: '',
    tags: []
  },
  applicationData: {
    location: '',
    initiativeDuration: '',
    totalAmountRaised: 0,
    totalAmountToBeRaised: 0,
    expectedFundingPartner: '',
    missionImpactExplanation: '',
    websiteAndSocialLinks: ''
  },
  termsOfServiceOC: false,
  inviteMembers: []
};

const OCFHostApplication = ({
  loadingLoggedInUser,
  LoggedInUser
}) => {
  const {
    0: checkedTermsOfFiscalSponsorship,
    1: setCheckedTermsOfFiscalSponsorship
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: initialValues,
    1: setInitialValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formValues);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    addToast
  } = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .useToasts */ .e1)();
  const step = router.query.step || 'intro';
  const collectiveSlug = router.query.collectiveSlug;
  const {
    data: hostData
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ocfHostApplicationPageQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  });
  const {
    data,
    loading: loadingCollective
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ocfCollectiveApplicationQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: collectiveSlug
    },
    skip: !(LoggedInUser && collectiveSlug && step === 'form'),
    onError: error => {
      addToast({
        type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        title: intl.formatMessage(messages['error.title']),
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(intl, error)
      });
    }
  });
  const collective = data?.account;
  const canApplyWithCollective = collective && collective.isAdmin && collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE;
  const hasHost = collective && collective?.host?.id;
  const popularTags = hostData?.tagStats.nodes.map(({
    tag
  }) => tag).filter(tag => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .IGNORED_TAGS.includes */ .bR.includes(tag));
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (collectiveSlug && collective && (!canApplyWithCollective || hasHost)) {
      addToast({
        type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        title: intl.formatMessage(messages['error.title']),
        message: hasHost ? intl.formatMessage(messages['error.existingHost.description'], {
          hostName: collective.host.name
        }) : intl.formatMessage(messages['error.unauthorized.description'], {
          name: collective.name
        })
      });
    }
  }, [collectiveSlug, collective]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    title: "Open collective foundation application",
    children: [step === 'intro' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_ocf_host_application_TermsOfFiscalSponsorship__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      checked: checkedTermsOfFiscalSponsorship,
      onChecked: setCheckedTermsOfFiscalSponsorship
    }), step === 'fees' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_ocf_host_application_AboutOurFees__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), step === 'form' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_ocf_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      initialValues: initialValues,
      setInitialValues: setInitialValues,
      loadingLoggedInUser: loadingLoggedInUser,
      LoggedInUser: LoggedInUser,
      collective: collective,
      host: hostData?.account,
      loadingCollective: loadingCollective,
      canApplyWithCollective: canApplyWithCollective && !hasHost,
      popularTags: popularTags
    }), step === 'success' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_ocf_host_application_YourInitiativeIsNearlyThere__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})]
  });
};

OCFHostApplication.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OCFHostApplication",
  "props": {
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_13__/* .withUser */ .ns)(OCFHostApplication));
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

/***/ 13831:
/***/ ((module) => {

module.exports = require("@dnd-kit/core");

/***/ }),

/***/ 99565:
/***/ ((module) => {

module.exports = require("@dnd-kit/sortable");

/***/ }),

/***/ 92813:
/***/ ((module) => {

module.exports = require("@dnd-kit/utilities");

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

/***/ 42126:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-solid/Lock");

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

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 50567:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/ArrowLeft2");

/***/ }),

/***/ 89457:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/ArrowRight2");

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

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

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

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

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

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

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

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

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

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

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

/***/ 31325:
/***/ ((module) => {

module.exports = require("react-select/creatable");

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

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 85598:
/***/ ((module) => {

module.exports = import("react-animate-height");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7632,2143,986,242,5993,7667,2903,8247], () => (__webpack_exec__(3548)));
module.exports = __webpack_exports__;

})();