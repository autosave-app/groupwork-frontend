"use strict";
exports.id = 3129;
exports.ids = [3129];
exports.modules = {

/***/ 93129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["formatWithSeparators", "currency", "precision", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Shows a money amount with the currency.
 *
 * ⚠️ Abbreviated mode is only for English at the moment. Abbreviated amount will not be internationalized.
 */




const Currency = _ref => {
  let {
    formatWithSeparators,
    currency,
    precision,
    value
  } = _ref,
      styles = _objectWithoutProperties(_ref, _excluded);

  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  if (precision === 'auto') {
    precision = value % 100 === 0 ? 0 : 2;
  } else if (precision < 2 && value < 100) {
    // Force precision if number is < $1 to never display $0 for small amounts
    precision = 2;
  }

  if (formatWithSeparators) {
    // TODO: This approach is not great because the position of the currency depends on the locale
    const floatAmount = value / 100;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, _objectSpread(_objectSpread({}, styles), {}, {
      whiteSpace: "nowrap",
      children: [(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_2__/* .getCurrencySymbol */ .jK)(currency), floatAmount.toLocaleString(locale)]
    }));
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, _objectSpread(_objectSpread({}, styles), {}, {
      whiteSpace: "nowrap",
      children: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatCurrency */ .xG)(value, currency, {
        precision,
        locale
      })
    }));
  }
};

Currency.defaultProps = {
  formatWithSeparators: false,
  precision: 0
};
Currency.__docgenInfo = {
  "description": "Shows a money amount with the currency.\n\n\u26A0\uFE0F Abbreviated mode is only for English at the moment. Abbreviated amount will not be internationalized.",
  "methods": [],
  "displayName": "Currency",
  "props": {
    "formatWithSeparators": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Format the currency value to display with separators such as 100,000 instead of 100000",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "precision": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "How many numbers should we display after the comma. When `auto` is given, decimals are only displayed if necessary.",
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
    "value": {
      "description": "The amount to display, in cents",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "currency": {
      "description": "The currency (eg. `USD`, `EUR`...etc)",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "style": {
      "description": "An optional set of props passed to the `Span`",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Currency);

/***/ })

};
;