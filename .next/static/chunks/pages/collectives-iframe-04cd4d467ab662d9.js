(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7856],{

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

/***/ 27561:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(67990);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


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

/***/ 67990:
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 14293:
/***/ (function(module) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


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

/***/ 18601:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toNumber = __webpack_require__(14841);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 40554:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toFinite = __webpack_require__(18601);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 14841:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(27561),
    isObject = __webpack_require__(13218),
    isSymbol = __webpack_require__(33448);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


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

/***/ 85621:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ collectives_iframe; }
});

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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(12665);
// EXTERNAL MODULE: ./components/CollectiveCard.js
var CollectiveCard = __webpack_require__(68654);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Membership.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Membership = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Membership, _React$Component);

  var _super = _createSuper(Membership);

  function Membership(props) {
    classCallCheck_default()(this, Membership);

    return _super.call(this, props);
  }

  createClass_default()(Membership, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          memberships = _this$props.memberships,
          LoggedInUser = _this$props.LoggedInUser;
      var collective = memberships[0].collective;

      if (!collective) {
        // eslint-disable-next-line no-console
        console.warn('Membership -> no collective attached', memberships[0]);
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var name = (collective.name && collective.name.match(/^null/) ? null : collective.name) || collective.slug;

      if (!name) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          "float": "left",
          margin: "1rem",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CollectiveCard/* default */.Z, {
            memberships: memberships,
            collective: collective,
            LoggedInUser: LoggedInUser
          })
        })
      });
    }
  }]);

  return Membership;
}(react.Component);

Membership.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Membership",
  "props": {
    "memberships": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": true
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
/* harmony default export */ var components_Membership = (Membership);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
;// CONCATENATED MODULE: ./components/MembershipsWithData.js









var _templateObject;

function MembershipsWithData_createSuper(Derived) { var hasNativeReflectConstruct = MembershipsWithData_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function MembershipsWithData_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var MEMBERSHIPS_PER_PAGE = 10;

var MembershipsWithData = /*#__PURE__*/function (_React$Component) {
  inherits_default()(MembershipsWithData, _React$Component);

  var _super = MembershipsWithData_createSuper(MembershipsWithData);

  function MembershipsWithData(props) {
    var _this;

    classCallCheck_default()(this, MembershipsWithData);

    _this = _super.call(this, props);
    _this.fetchMore = _this.fetchMore.bind(assertThisInitialized_default()(_this));
    _this.refetch = _this.refetch.bind(assertThisInitialized_default()(_this));
    _this.onChange = _this.onChange.bind(assertThisInitialized_default()(_this));
    _this.state = {
      role: null,
      loading: false
    };
    return _this;
  }

  createClass_default()(MembershipsWithData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onChange();
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var onChange = this.props.onChange;
      onChange && this.node && onChange({
        height: this.node.offsetHeight
      });
    }
  }, {
    key: "fetchMore",
    value: function fetchMore(e) {
      var _this2 = this;

      e.target.blur();
      this.setState({
        loading: true
      });
      this.props.fetchMore().then(function () {
        _this2.setState({
          loading: false
        });

        _this2.onChange();
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

      var _this$props = this.props,
          data = _this$props.data,
          LoggedInUser = _this$props.LoggedInUser;

      if (data.error) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Error/* default */.Z, {
          message: data.error.message
        });
      }

      if (!data.allMembers) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var memberships = toConsumableArray_default()(data.allMembers);

      if (memberships.length === 0) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
      }

      var collectiveIds = [];
      var groupedMemberships = memberships.reduce(function (_memberships, m) {
        (_memberships[m.collective.id] = _memberships[m.collective.id] || []).push(m);

        if (collectiveIds.length === 0 || collectiveIds[collectiveIds.length - 1] !== m.collective.id) {
          collectiveIds.push(m.collective.id);
        }

        return _memberships;
      }, {});
      var limit = this.props.limit || MEMBERSHIPS_PER_PAGE * 2;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        ref: function ref(node) {
          return _this3.node = node;
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          className: "cardsList",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
          margin: "1rem 0",
          children: collectiveIds.map(function (id) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Membership, {
              memberships: groupedMemberships[id],
              LoggedInUser: LoggedInUser
            }, id);
          })
        }), memberships.length % 10 === 0 && memberships.length >= limit && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          textAlign: "center",
          margin: "1rem",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
            buttonSize: "small",
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

  return MembershipsWithData;
}(react.Component);

var membershipsQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query Memberships($memberCollectiveSlug: String, $role: String, $limit: Int, $offset: Int, $orderBy: String) {\n    allMembers(\n      memberCollectiveSlug: $memberCollectiveSlug\n      role: $role\n      limit: $limit\n      offset: $offset\n      orderBy: $orderBy\n    ) {\n      id\n      role\n      createdAt\n      stats {\n        id\n        totalDonations\n      }\n      tier {\n        id\n        name\n      }\n      collective {\n        id\n        type\n        name\n        currency\n        description\n        slug\n        imageUrl\n        backgroundImage\n        stats {\n          id\n          backers {\n            id\n            all\n          }\n          yearlyBudget\n        }\n        parentCollective {\n          id\n          slug\n        }\n      }\n    }\n  }\n"])));
var addMembershipsData = (0,graphql/* graphql */.B)(membershipsQuery, {
  options: function options(props) {
    return {
      variables: {
        memberCollectiveSlug: props.memberCollectiveSlug,
        offset: 0,
        role: props.role,
        orderBy: props.orderBy || 'totalDonations',
        limit: props.limit || MEMBERSHIPS_PER_PAGE * 2
      }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;
    return {
      data: data,
      fetchMore: function fetchMore() {
        return data.fetchMore({
          variables: {
            offset: data.allMembers.length,
            limit: MEMBERSHIPS_PER_PAGE
          },
          updateQuery: function updateQuery(previousResult, _ref2) {
            var fetchMoreResult = _ref2.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allMembers: [].concat(toConsumableArray_default()(previousResult.allMembers), toConsumableArray_default()(fetchMoreResult.allMembers))
            });
          }
        });
      }
    };
  }
});
MembershipsWithData.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
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
  "displayName": "MembershipsWithData",
  "props": {
    "memberCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "orderBy": {
      "description": "",
      "type": {
        "name": "string"
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
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
/* harmony default export */ var components_MembershipsWithData = (addMembershipsData(MembershipsWithData));
;// CONCATENATED MODULE: ./pages/collectives-iframe.js








function collectives_iframe_createSuper(Derived) { var hasNativeReflectConstruct = collectives_iframe_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function collectives_iframe_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var CollectivesIframeContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "collectives-iframe__CollectivesIframeContainer",
  componentId: "sc-17eg8ct-0"
})(["body{width:100%;height:100%;padding:0;margin:0;font-weight:300;font-size:1rem;line-height:1.5;overflow-x:hidden;}a{text-decoration:none;}.title{display:flex;align-items:baseline;}.title .action{font-size:0.8rem;}h2{font-size:20px;margin-right:1rem;margin-bottom:0;}ul{list-style:none;padding:0;}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;}.btn-default{color:#333;background-color:#fff;border-color:#ccc;}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad;text-decoration:none;outline:0;}"]);

var CollectivesIframe = /*#__PURE__*/function (_React$Component) {
  inherits_default()(CollectivesIframe, _React$Component);

  var _super = collectives_iframe_createSuper(CollectivesIframe);

  function CollectivesIframe() {
    var _this;

    classCallCheck_default()(this, CollectivesIframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "onChange", function (change) {
      if (!change) {
        return;
      }

      _this.height = change.height;

      _this.sendMessageToParentWindow();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "sendMessageToParentWindow", function () {
      if (!window.parent) {
        return;
      }

      if (!_this.height) {
        return;
      }

      var message = "oc-".concat(JSON.stringify({
        id: _this.props.id,
        height: _this.height
      }));
      window.parent.postMessage(message, '*');
    });

    return _this;
  }

  createClass_default()(CollectivesIframe, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collectiveSlug = _this$props.collectiveSlug,
          role = _this$props.role,
          limit = _this$props.limit;
      var orderBy = this.props.orderBy || role === 'HOST' ? 'balance' : 'totalDonations';
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(CollectivesIframeContainer, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)((head_default()), {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
            children: "".concat(this.props.collectiveSlug, " collectives")
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_MembershipsWithData, {
          onChange: this.onChange,
          memberCollectiveSlug: collectiveSlug,
          role: role,
          orderBy: orderBy,
          orderDirection: "DESC",
          limit: limit || 20
        })]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          collectiveSlug = _ref$query.collectiveSlug,
          id = _ref$query.id,
          role = _ref$query.role,
          orderBy = _ref$query.orderBy,
          limit = _ref$query.limit,
          res = _ref.res;

      // Allow to be embedded as Iframe everywhere
      if (res) {
        res.removeHeader('X-Frame-Options');
      }

      return {
        collectiveSlug: collectiveSlug,
        id: id,
        role: role,
        orderBy: orderBy,
        limit: Number(limit)
      };
    }
  }]);

  return CollectivesIframe;
}(react.Component);

CollectivesIframe.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, id, role, orderBy, limit }, res }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "change",
      "type": null
    }],
    "returns": null
  }, {
    "name": "sendMessageToParentWindow",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "CollectivesIframe",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "id": {
      "description": "",
      "type": {
        "name": "number"
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
    "limit": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "orderBy": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var collectives_iframe = (CollectivesIframe);

/***/ }),

/***/ 1221:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/collectives-iframe",
      function () {
        return __webpack_require__(85621);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(74011)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [7897,9774,2888,179], function() { return __webpack_exec__(1221); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=collectives-iframe-04cd4d467ab662d9.js.map