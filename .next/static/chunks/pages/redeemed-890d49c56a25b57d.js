(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6684],{

/***/ 48143:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ Clock; }
/* harmony export */ });
/* unused harmony export ClockDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Clock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke": "currentColor",
    "strokeLinecap": "round",
    "strokeLinejoin": "round"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }));
});
Clock.displayName = 'Clock';
var ClockDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 81463:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const currencySymbolMap = __webpack_require__(96411)

module.exports = function getSymbolFromCurrency (currencyCode) {
  if (typeof currencyCode !== 'string') {
    return undefined
  }

  const code = currencyCode.toUpperCase()

  if (!Object.prototype.hasOwnProperty.call(currencySymbolMap, code)) {
    return undefined
  }

  return currencySymbolMap[code]
}

module.exports.currencySymbolMap = currencySymbolMap


/***/ }),

/***/ 96411:
/***/ (function(module) {

module.exports = {
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: '$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: '$',
  BOB: '$b',
  BOV: 'BOV',
  BRL: 'R$',
  BSD: '$',
  BTC: '₿',
  BTN: 'Nu.',
  BWP: 'P',
  BYN: 'Br',
  BYR: 'Br',
  BZD: 'BZ$',
  CAD: '$',
  CDF: 'FC',
  CHE: 'CHE',
  CHF: 'CHF',
  CHW: 'CHW',
  CLF: 'CLF',
  CLP: '$',
  CNH: '¥',
  CNY: '¥',
  COP: '$',
  COU: 'COU',
  CRC: '₡',
  CUC: '$',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EEK: 'kr',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: '$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHC: '₵',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: '$',
  HKD: '$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: '$',
  KZT: '₸',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: '$',
  LSL: 'M',
  LTC: 'Ł',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: '$',
  MXV: 'MXV',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: '$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'lei',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: '$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: 'S$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: '$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '$',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYI: 'UYI',
  UYU: '$U',
  UYW: 'UYW',
  UZS: 'лв',
  VEF: 'Bs',
  VES: 'Bs.S',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: 'Ƀ',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  XSU: 'Sucre',
  XUA: 'XUA',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'ZK',
  ZWD: 'Z$',
  ZWL: '$'
}


/***/ }),

/***/ 89179:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(55639),
    toInteger = __webpack_require__(40554),
    toNumber = __webpack_require__(14841),
    toString = __webpack_require__(79833);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite,
    nativeMin = Math.min;

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
    if (precision && nativeIsFinite(number)) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (toString(number) + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (toString(value) + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }
    return func(number);
  };
}

module.exports = createRound;


/***/ }),

/***/ 59854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createRound = __webpack_require__(89179);

/**
 * Computes `number` rounded to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
var round = createRound('round');

module.exports = round;


/***/ }),

/***/ 93129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17632);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["formatWithSeparators", "currency", "precision", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * Shows a money amount with the currency.
 *
 * ⚠️ Abbreviated mode is only for English at the moment. Abbreviated amount will not be internationalized.
 */




var Currency = function Currency(_ref) {
  var formatWithSeparators = _ref.formatWithSeparators,
      currency = _ref.currency,
      precision = _ref.precision,
      value = _ref.value,
      styles = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(),
      locale = _useIntl.locale;

  if (precision === 'auto') {
    precision = value % 100 === 0 ? 0 : 2;
  } else if (precision < 2 && value < 100) {
    // Force precision if number is < $1 to never display $0 for small amounts
    precision = 2;
  }

  if (formatWithSeparators) {
    // TODO: This approach is not great because the position of the currency depends on the locale
    var floatAmount = value / 100;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, _objectSpread(_objectSpread({}, styles), {}, {
      whiteSpace: "nowrap",
      children: [(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_3__/* .getCurrencySymbol */ .jK)(currency), floatAmount.toLocaleString(locale)]
    }));
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, _objectSpread(_objectSpread({}, styles), {}, {
      whiteSpace: "nowrap",
      children: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_3__/* .formatCurrency */ .xG)(value, currency, {
        precision: precision,
        locale: locale
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
/* harmony default export */ __webpack_exports__["Z"] = (Currency);

/***/ }),

/***/ 19377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ CurrencyPrecision; }
/* harmony export */ });
var CurrencyPrecision = {
  DEFAULT: 2
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CurrencyPrecision)));

/***/ }),

/***/ 17632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KK": function() { return /* binding */ getAmountInCents; },
/* harmony export */   "NP": function() { return /* binding */ centsAmountToFloat; },
/* harmony export */   "VH": function() { return /* binding */ floatAmountToCents; },
/* harmony export */   "jK": function() { return /* binding */ getCurrencySymbol; },
/* harmony export */   "kJ": function() { return /* binding */ graphqlAmountValueInCents; },
/* harmony export */   "vx": function() { return /* binding */ getPrecisionFromAmount; },
/* harmony export */   "xG": function() { return /* binding */ formatCurrency; }
/* harmony export */ });
/* unused harmony export formatValueAsCurrency */
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59854);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81463);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19377);





function getCurrencySymbolFallback(currency) {
  return Number(0).toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).replace(/(^0\s?)|(\s?0$)/, '');
}

function getCurrencySymbol(currency) {
  return currency_symbol_map__WEBPACK_IMPORTED_MODULE_2___default()(currency) || getCurrencySymbolFallback(currency);
}
var getPrecisionFromAmount = function getPrecisionFromAmount(amount) {
  return amount.toString().slice(-2) === '00' ? 0 : _constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyPrecision.DEFAULT */ .E.DEFAULT;
};
function graphqlAmountValueInCents(amount) {
  if (lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount)) {
    return amount;
  } // GQLV2 is an object


  if (typeof amount === 'object') {
    return amount === null || amount === void 0 ? void 0 : amount.valueInCents;
  } // GQLV2 is already a value in cents


  return amount;
}
function formatCurrency(amount) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'USD';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount)) {
    return '--';
  } // Compatibility with amounts from GQLV2


  if (typeof amount === 'object') {
    currency = amount.currency || currency;

    if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount.valueInCents)) {
      amount = amount.valueInCents;
    } else if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount.value)) {
      amount = Math.round(amount.value * 100);
    } else {
      return '--';
    }
  }

  amount = amount / 100;
  var minimumFractionDigits = 2;
  var maximumFractionDigits = 2;

  if (Object.prototype.hasOwnProperty.call(options, 'minimumFractionDigits')) {
    minimumFractionDigits = options.minimumFractionDigits;
  } else if (Object.prototype.hasOwnProperty.call(options, 'precision')) {
    minimumFractionDigits = options.precision;
    maximumFractionDigits = options.precision;
  }

  var formatAmount = function formatAmount(currencyDisplay) {
    return amount.toLocaleString(options.locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
      currencyDisplay: currencyDisplay
    });
  };

  try {
    // We manually add the exact currency (e.g. "$10 USD") in many places. This is to prevent
    // showing the currency twice is some locales ($US10 USD)
    return formatAmount('narrowSymbol');
  } catch (e) {
    // ... unfortunately, some old versions of Safari doesn't support it, so we need a fallback
    return formatAmount('symbol');
  }
}
var formatValueAsCurrency = function formatValueAsCurrency(value, options) {
  return formatCurrency(value.valueInCents || value.value * 100, value.currency, options);
};
var floatAmountToCents = function floatAmountToCents(floatAmount) {
  if (isNaN(floatAmount) || floatAmount === null) {
    return floatAmount;
  } else {
    return Math.round(floatAmount * 100);
  }
};
var centsAmountToFloat = function centsAmountToFloat(amount) {
  if (isNaN(amount) || lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount)) {
    return null;
  } else {
    return lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(amount / 100, 2);
  }
};
/**
 * Small helper to get the value in cents from an amount, works with GQLV1 & GQLV2
 * @param {number|object} amount
 * @returns
 */

var getAmountInCents = function getAmountInCents(amount) {
  if (amount === null) {
    return amount;
  } else if (typeof amount === 'number') {
    return amount;
  } else if (typeof amount === 'object') {
    if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount.valueInCents)) {
      return amount.valueInCents;
    } else if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount.value)) {
      return Math.round(amount.value * 100);
    }
  }

  return amount;
};

/***/ }),

/***/ 89061:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ redeemed; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/withData.tsx + 16 modules
var withData = __webpack_require__(93255);
// EXTERNAL MODULE: ./components/Body.js
var Body = __webpack_require__(1259);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./components/CollectiveCard.js
var CollectiveCard = __webpack_require__(68654);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(12665);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/CollectivesWithData.js









var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var COLLECTIVE_CARDS_PER_PAGE = 10;

var CollectivesWithData = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CollectivesWithData, _React$Component);

  var _super = _createSuper(CollectivesWithData);

  function CollectivesWithData(props) {
    var _this;

    classCallCheck_default()(this, CollectivesWithData);

    _this = _super.call(this, props);
    _this.fetchMore = _this.fetchMore.bind(assertThisInitialized_default()(_this));
    _this.refetch = _this.refetch.bind(assertThisInitialized_default()(_this));
    _this.state = {
      role: null,
      loading: false
    };
    return _this;
  }

  createClass_default()(CollectivesWithData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onChange = this.props.onChange;
      onChange && this.node && onChange({
        height: this.node.offsetHeight
      });
    }
  }, {
    key: "fetchMore",
    value: function fetchMore(e) {
      var _this2 = this;

      var onChange = this.props.onChange;
      e.target.blur();
      this.setState({
        loading: true
      });
      this.props.fetchMore().then(function () {
        _this2.setState({
          loading: false
        });

        onChange && onChange({
          height: _this2.node.offsetHeight
        });
      });
    }
  }, {
    key: "refetch",
    value: function refetch(role) {
      this.setState({
        role: role
      });
      this.props.refetch({
        role: role
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var data = this.props.data;

      if (data.error) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Error/* default */.Z, {
          message: data.error.message
        });
      }

      if (!data.allCollectives || !data.allCollectives.collectives) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var collectives = toConsumableArray_default()(data.allCollectives.collectives);

      if (collectives.length === 0) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var limit = this.props.limit || COLLECTIVE_CARDS_PER_PAGE * 2;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        ref: function ref(node) {
          return _this3.node = node;
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
          margin: "1rem 0",
          children: collectives.map(function (collective) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveCard/* default */.Z, {
              m: 1,
              collective: collective
            }, collective.id);
          })
        }), collectives.length % 10 === 0 && collectives.length >= limit && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          margin: "1rem",
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
            onClick: this.fetchMore,
            children: [this.state.loading && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "loading",
              defaultMessage: [{
                "type": 0,
                "value": "loading"
              }]
            }), !this.state.loading && /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "loadMore",
              defaultMessage: [{
                "type": 0,
                "value": "load more"
              }]
            })]
          })
        })]
      });
    }
  }]);

  return CollectivesWithData;
}(react.Component);

var collectivesQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query Collectives(\n    $HostCollectiveId: Int\n    $hostCollectiveSlug: String\n    $ParentCollectiveId: Int\n    $tags: [String]\n    $memberOfCollectiveSlug: String\n    $role: String\n    $type: TypeOfCollective\n    $limit: Int\n    $offset: Int\n    $orderBy: CollectiveOrderField\n    $orderDirection: OrderDirection\n    $slugs: [String]\n  ) {\n    allCollectives(\n      HostCollectiveId: $HostCollectiveId\n      hostCollectiveSlug: $hostCollectiveSlug\n      memberOfCollectiveSlug: $memberOfCollectiveSlug\n      role: $role\n      type: $type\n      ParentCollectiveId: $ParentCollectiveId\n      tags: $tags\n      limit: $limit\n      offset: $offset\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      slugs: $slugs\n    ) {\n      id\n      total\n      collectives {\n        id\n        type\n        createdAt\n        slug\n        name\n        description\n        longDescription\n        currency\n        imageUrl\n        backgroundImage\n        stats {\n          id\n          yearlyBudget\n          backers {\n            id\n            all\n          }\n        }\n      }\n    }\n  }\n"])));
var addCollectivesData = (0,graphql/* graphql */.B)(collectivesQuery, {
  options: function options(props) {
    return {
      variables: {
        ParentCollectiveId: props.ParentCollectiveId,
        tags: props.tags,
        HostCollectiveId: props.HostCollectiveId,
        hostCollectiveSlug: props.hostCollectiveSlug,
        memberOfCollectiveSlug: props.memberOfCollectiveSlug,
        slugs: props.slugs,
        role: props.role,
        type: props.type,
        orderBy: props.orderBy,
        orderDirection: props.orderDirection,
        offset: 0,
        limit: props.limit || COLLECTIVE_CARDS_PER_PAGE * 2
      }
    };
  },
  props: function props(_ref) {
    var data = _ref.data,
        ownProps = _ref.ownProps;
    return {
      data: data,
      fetchMore: function fetchMore() {
        return data.fetchMore({
          variables: {
            offset: data.allCollectives.collectives.length,
            limit: ownProps.limit || COLLECTIVE_CARDS_PER_PAGE
          },
          updateQuery: function updateQuery(previousResult, _ref2) {
            var fetchMoreResult = _ref2.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            } // Update the results object with new entries


            var _previousResult$allCo = previousResult.allCollectives,
                __typename = _previousResult$allCo.__typename,
                total = _previousResult$allCo.total,
                collectives = _previousResult$allCo.collectives;
            var all = collectives.concat(fetchMoreResult.allCollectives.collectives);
            return Object.assign({}, previousResult, {
              allCollectives: {
                __typename: __typename,
                total: total,
                collectives: all
              }
            });
          }
        });
      }
    };
  }
});
CollectivesWithData.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "fetchMore",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "refetch",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "role",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CollectivesWithData",
  "props": {
    "HostCollectiveId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "hostCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "memberOfCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "slugs": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "role": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "ParentCollectiveId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "tags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "limit": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "fetchMore": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "refetch": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_CollectivesWithData = (addCollectivesData(CollectivesWithData));
// EXTERNAL MODULE: ./components/CollectiveThemeProvider.js
var CollectiveThemeProvider = __webpack_require__(325);
// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(3518);
// EXTERNAL MODULE: ./components/gift-cards/HappyBackground.js
var HappyBackground = __webpack_require__(26886);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Clock/Clock.esm.js
var Clock_esm = __webpack_require__(48143);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./components/gift-cards/CollectiveCard.js
var gift_cards_CollectiveCard = __webpack_require__(67645);
// EXTERNAL MODULE: ./components/Currency.js
var Currency = __webpack_require__(93129);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/GiftCard.js







function GiftCard_createSuper(Derived) { var hasNativeReflectConstruct = GiftCard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function GiftCard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














var WhiteLink = (0,styled_components_browser_esm/* default */.ZP)(Link/* default */.Z).withConfig({
  displayName: "GiftCard__WhiteLink",
  componentId: "sc-1io6amk-0"
})(["color:white;text-decoration:underline !important;&&:hover{color:#eee;}&&:active{color:#ddd;}"]);
var Card = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "GiftCard__Card",
  componentId: "sc-1io6amk-1"
})(["", ";", ";position:relative;border-radius:16px;overflow:hidden;background-image:url('/static/images/oc-gift-card-front.svg');background-size:100%;background-repeat:no-repeat;background-color:transparent;"], index_esm/* width */.bf, index_esm/* height */.Cb);
var ShadowCard = (0,styled_components_browser_esm/* default */.ZP)(Card).withConfig({
  displayName: "GiftCard__ShadowCard",
  componentId: "sc-1io6amk-2"
})(["box-shadow:0px 8px 16px rgba(20,20,20,0.12);"]);
var GiftCard_Text = styled_components_browser_esm/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "GiftCard__Text",
  componentId: "sc-1io6amk-3"
})(["color:white;text-align:left;font-size:14px;margin:6px 0;", ";"], index_esm/* fontSize */.JB);
var Title = (0,styled_components_browser_esm/* default */.ZP)(GiftCard_Text).withConfig({
  displayName: "GiftCard__Title",
  componentId: "sc-1io6amk-4"
})(["font-size:24px;font-weight:bold;margin-top:0;margin-bottom:2px;", ";"], index_esm/* fontSize */.JB);

var GiftCard = /*#__PURE__*/function (_React$Component) {
  inherits_default()(GiftCard, _React$Component);

  var _super = GiftCard_createSuper(GiftCard);

  function GiftCard() {
    classCallCheck_default()(this, GiftCard);

    return _super.apply(this, arguments);
  }

  createClass_default()(GiftCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          amount = _this$props.amount,
          currency = _this$props.currency,
          collective = _this$props.collective,
          emitter = _this$props.emitter,
          expiryDate = _this$props.expiryDate;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(ShadowCard, {
        maxWidth: ['320px', '450px'],
        width: "100%",
        minHeight: ['200px', '260px'],
        m: "0 auto",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          p: ['18px', '24px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
            fontSize: ['18px', '24px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "giftcard.user.name",
              defaultMessage: [{
                "type": 0,
                "value": "Hello again, "
              }, {
                "type": 1,
                "value": "name"
              }, {
                "type": 0,
                "value": "!"
              }],
              values: {
                name: collective.name
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(GiftCard_Text, {
            fontSize: ['12px', '14px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "giftcard.user.text",
              defaultMessage: [{
                "type": 0,
                "value": "Contribute on Open Collective with this Gift Card, courtesy of "
              }, {
                "type": 1,
                "value": "emitter"
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                emitter: /*#__PURE__*/(0,jsx_runtime.jsx)(WhiteLink, {
                  href: "/".concat(emitter.slug),
                  children: emitter.name
                })
              }
            })
          }), emitter !== null && emitter !== void 0 && emitter.imageUrl ? /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            mt: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(gift_cards_CollectiveCard/* default */.Z, {
              m: "0px",
              collective: emitter,
              mb: 3,
              size: [48, 64],
              avatarSize: [24, 32],
              fontSize: "14px",
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.24) inset",
              borderColor: "blue.200",
              p: 2
            })
          }) : null]
        }), expiryDate && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          position: "absolute",
          left: ['8px', '12px'],
          bottom: ['8px', '12px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
            mt: 2,
            fontSize: "12px",
            color: "black.700",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Clock_esm/* Clock */.S, {
              size: "1.2em"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledSpan, {
              ml: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "ContributePayment.expiresOn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Expires on "
                }, {
                  "type": 1,
                  "value": "expiryDate"
                }],
                values: {
                  expiryDate: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedDate, {
                      value: expiryDate
                    })
                  })
                }
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          position: "absolute",
          right: ['8px', '12px'],
          bottom: ['8px', '12px'],
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "top",
            className: "AmountCurrency",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              fontWeight: "bold",
              fontSize: "4rem",
              lineHeight: "4rem",
              color: "#313233",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Currency/* default */.Z, {
                value: amount,
                currency: currency,
                precision: 0
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              ml: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                color: "#9D9FA3",
                fontSize: "1.6rem",
                className: "currency",
                children: currency
              })
            })]
          })
        })]
      });
    }
  }]);

  return GiftCard;
}(react.Component);

GiftCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GiftCard",
  "props": {
    "amount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    },
    "emitter": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "imageUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "expiryDate": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_GiftCard = (GiftCard);

var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "GiftCard___StyledSpan",
  componentId: "sc-1io6amk-5"
})({
  verticalAlign: 'middle'
});
// EXTERNAL MODULE: ./components/Header.js + 9 modules
var Header = __webpack_require__(80146);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/SearchForm.js
var SearchForm = __webpack_require__(72427);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./pages/redeemed.js









var redeemed_templateObject, _templateObject2;



function redeemed_createSuper(Derived) { var hasNativeReflectConstruct = redeemed_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function redeemed_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
























var redeemedPaymentMethodQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(redeemed_templateObject || (redeemed_templateObject = taggedTemplateLiteral_default()(["\n  query RedeemedPaymentMethod($code: String) {\n    PaymentMethod(code: $code) {\n      id\n      initialBalance\n      monthlyLimitPerMember\n      currency\n      name\n      expiryDate\n      collective {\n        id\n        name\n        slug\n      }\n      emitter {\n        id\n        name\n        slug\n        imageUrl\n        settings\n      }\n    }\n  }\n"])));
var redeemed_Title = (0,styled_components_browser_esm/* default */.ZP)(Text.H1).withConfig({
  displayName: "redeemed__Title",
  componentId: "sc-jlwhrz-0"
})(["color:white;text-align:center;", ";"], index_esm/* fontSize */.JB);
var Subtitle = (0,styled_components_browser_esm/* default */.ZP)(Text.H5).withConfig({
  displayName: "redeemed__Subtitle",
  componentId: "sc-jlwhrz-1"
})(["color:white;margin:0 auto;text-align:center;", ";", ";"], index_esm/* fontSize */.JB, index_esm/* maxWidth */.kk);
var SearchFormContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Box */.xu).withConfig({
  displayName: "redeemed__SearchFormContainer",
  componentId: "sc-jlwhrz-2"
})(["margin:64px auto 32px;text-align:center;"]);

var RedeemedPage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(RedeemedPage, _React$Component);

  var _super = redeemed_createSuper(RedeemedPage);

  function RedeemedPage(props) {
    var _this;

    classCallCheck_default()(this, RedeemedPage);

    _this = _super.call(this, props);

    if (!props.code) {
      _this.state = {
        amount: props.amount,
        collective: {
          name: props.name
        },
        emitter: {
          slug: props.emitterSlug,
          name: props.emitterName
        }
      };
    } else {
      _this.state = {
        loading: true
      };
    }

    return _this;
  }

  createClass_default()(RedeemedPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this2 = this;

        var _this$props, client, code;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, client = _this$props.client, code = _this$props.code;

                if (code) {
                  client.query({
                    query: redeemedPaymentMethodQuery,
                    variables: {
                      code: code
                    }
                  }).then(function (result) {
                    var PaymentMethod = result.data.PaymentMethod;

                    if (PaymentMethod) {
                      _this2.setState({
                        amount: PaymentMethod.initialBalance || PaymentMethod.monthlyLimitPerMember,
                        name: PaymentMethod.collective.name,
                        collective: PaymentMethod.collective,
                        emitter: PaymentMethod.emitter,
                        currency: PaymentMethod.currency,
                        expiryDate: PaymentMethod.expiryDate,
                        loading: false
                      });
                    }
                  });
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "renderHeroContent",
    value: function renderHeroContent(loading, error) {
      if (loading) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
          height: 104,
          "with": "100%",
          maxWidth: 400,
          m: "0 auto",
          borderRadius: 16
        });
      } else if (error) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
          type: "error",
          withIcon: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "redeemed.mismatch",
            defaultMessage: [{
              "type": 0,
              "value": "Accounts mismatch"
            }]
          })
        });
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(redeemed_Title, {
            fontSize: ['3rem', null, '4rem'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "redeemed.success",
              defaultMessage: [{
                "type": 0,
                "value": "Gift Card Redeemed!"
              }]
            }), " \uD83C\uDF89"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            flexWrap: "wrap",
            maxWidth: 750,
            m: "0 auto",
            alignItems: "center",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Subtitle, {
              fontSize: ['1.5rem', null, '2rem'],
              maxWidth: ['90%', '640px'],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "redeemed.subtitle.line1",
                  defaultMessage: [{
                    "type": 0,
                    "value": "The card has been added to your account."
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "redeemed.subtitle.line2",
                  defaultMessage: [{
                    "type": 0,
                    "value": "You can now contribute to the Collective(s) of your choice."
                  }]
                })
              })]
            })
          })]
        });
      }
    }
  }, {
    key: "getError",
    value: function getError() {
      var LoggedInUser = this.props.LoggedInUser;
      var collective = this.state.collective;

      if (LoggedInUser && collective && get_default()(LoggedInUser, 'collective.id') !== get_default()(collective, 'id')) {
        return 'account mismatch';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          LoggedInUser = _this$props2.LoggedInUser,
          data = _this$props2.data;
      var _this$state = this.state,
          amount = _this$state.amount,
          collective = _this$state.collective,
          currency = _this$state.currency,
          expiryDate = _this$state.expiryDate,
          loading = _this$state.loading;
      var error = this.getError();
      var emitter = this.state.emitter || data && data.Collective;

      var recommendedCollectives = get_default()(emitter, 'settings.recommendedCollectives');

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "RedeemedPage",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* default */.Z, {
          title: "Gift Card Redeemed",
          description: "Use your gift card to support open source projects that you are contributing to.",
          LoggedInUser: LoggedInUser
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveThemeProvider/* default */.Z, {
          collective: emitter,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Body/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              alignItems: "center",
              flexDirection: "column",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HappyBackground/* default */.Z, {
                collective: emitter,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                  mt: 5,
                  children: this.renderHeroContent(loading, error)
                })
              }), !error && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                mt: -125,
                children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
                  width: ['300px', '400px'],
                  height: ['168px', '224px'],
                  borderRadius: 16
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  position: "relative",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_GiftCard, {
                    amount: amount,
                    currency: currency || 'USD',
                    emitter: emitter,
                    collective: collective,
                    expiryDate: expiryDate
                  })
                })
              }), recommendedCollectives && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                my: 5,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
                  textAlign: 'center',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "redeemed.collective-recommendations",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Collectives recommended by "
                    }, {
                      "type": 1,
                      "value": "emitter"
                    }],
                    values: {
                      emitter: emitter.name
                    }
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  maxWidth: "1200px",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_CollectivesWithData, {
                    slugs: recommendedCollectives,
                    orderBy: "name",
                    orderDirection: "ASC",
                    limit: 12
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: ['320px', '640px'],
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(SearchFormContainer, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    mb: 3,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
                      textAlign: "center",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "redeemed.findCollectives",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Find open collectives to support."
                        }]
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(SearchForm/* default */.Z, {
                    fontSize: "1.4rem"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                width: ['320px', '640px'],
                my: 3,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                  color: "#76777A",
                  textAlign: "center",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "redeemed.backyourstack",
                    defaultMessage: [{
                      "type": 0,
                      "value": "or discover the open source projects that your organization is depending on and that need funding on "
                    }, {
                      "type": 1,
                      "value": "link"
                    }],
                    values: {
                      link: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                        href: "https://backyourstack.com",
                        children: "BackYourStack.com"
                      })
                    }
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
                color: "#76777A",
                textAlign: "center",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "redeemed.suggestions",
                  defaultMessage: [{
                    "type": 0,
                    "value": "or you can choose from these awesome collectives that are doing great work:"
                  }]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                mb: 5,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
                  maxWidth: "1200px",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_CollectivesWithData, {
                    HostCollectiveId: 11004 // hard-coded to only show open source projects
                    ,
                    orderBy: "balance",
                    orderDirection: "DESC",
                    limit: 12
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Footer/* default */.Z, {})]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          code = _ref$query.code,
          amount = _ref$query.amount,
          name = _ref$query.name,
          emitterSlug = _ref$query.emitterSlug,
          emitterName = _ref$query.emitterName,
          collectiveSlug = _ref$query.collectiveSlug;
      return {
        code: code,
        collectiveSlug: collectiveSlug,
        amount: amount && Number(amount),
        name: name === null || name === void 0 ? void 0 : name.trim(),
        emitterSlug: emitterSlug === null || emitterSlug === void 0 ? void 0 : emitterSlug.trim(),
        emitterName: emitterName === null || emitterName === void 0 ? void 0 : emitterName.trim()
      };
    }
  }]);

  return RedeemedPage;
}(react.Component);

var redeemedPageQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query RedeemedPage($collectiveSlug: String!) {\n    Collective(slug: $collectiveSlug) {\n      id\n      name\n      type\n      slug\n      imageUrl\n      backgroundImageUrl\n      description\n      settings\n    }\n  }\n"])));
var addRedeemedPageData = (0,graphql/* graphql */.B)(redeemedPageQuery, {
  skip: function skip(props) {
    return !props.collectiveSlug;
  }
});
RedeemedPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { code, amount, name, emitterSlug, emitterName, collectiveSlug } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderHeroContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "loading",
      "type": null
    }, {
      "name": "error",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getError",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "RedeemedPage",
  "props": {
    "client": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "code": {
      "description": "",
      "type": {
        "name": "string"
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
    "emitterSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "emitterName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "amount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var redeemed = ((0,UserProvider/* withUser */.ns)((0,withData/* default */.Z)(addRedeemedPageData(RedeemedPage))));

/***/ }),

/***/ 92379:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/redeemed",
      function () {
        return __webpack_require__(89061);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,146,5813,7897,5772,9774,2888,179], function() { return __webpack_exec__(92379); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=redeemed-890d49c56a25b57d.js.map