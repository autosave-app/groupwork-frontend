(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6726],{

/***/ 44906:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ Lock; }
/* harmony export */ });
/* unused harmony export LockDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Lock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
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
    d: "M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"
  }));
});
Lock.displayName = 'Lock';
var LockDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 90477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ ArrowLeft2; }
/* harmony export */ });
/* unused harmony export ArrowLeft2Dimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var ArrowLeft2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 16 16"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m6.293 13.707-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L4.414 7H14a1 1 0 0 1 0 2H4.414l3.293 3.293a.997.997 0 0 1 0 1.414.999.999 0 0 1-1.414 0z"
  }));
});
ArrowLeft2.displayName = 'ArrowLeft2';
var ArrowLeft2Dimensions = {
  height: 16,
  width: 16
};

/***/ }),

/***/ 44205:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ ArrowRight2; }
/* harmony export */ });
/* unused harmony export ArrowRight2Dimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var ArrowRight2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 16 16"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m9.707 13.707 5-5a.999.999 0 0 0 0-1.414l-5-5a.999.999 0 1 0-1.414 1.414L11.586 7H2a1 1 0 0 0 0 2h9.586l-3.293 3.293a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0z"
  }));
});
ArrowRight2.displayName = 'ArrowRight2';
var ArrowRight2Dimensions = {
  height: 16,
  width: 16
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

/***/ 29242:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16678);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29925);




var AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

var LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_1__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_0__/* .border */ .Cg, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .layout */ .bK, styled_system__WEBPACK_IMPORTED_MODULE_0__/* .space */ .Dh);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (LoadingPlaceholder);

/***/ }),

/***/ 54029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52353);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14359);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_currency__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38198);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17632);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78080);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32631);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);





var _excluded = ["currency", "currencyDisplay", "min", "max", "precision", "defaultValue", "value", "onBlur", "onChange", "isEmpty", "hasCurrencyPicker", "onCurrencyChange", "availableCurrencies"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var formatCurrencyName = function formatCurrencyName(currency, currencyDisplay) {
  if (currencyDisplay === 'SYMBOL') {
    return (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCurrencySymbol */ .jK)(currency);
  } else if (currencyDisplay === 'CODE') {
    return currency;
  } else {
    return "".concat((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCurrencySymbol */ .jK)(currency), " ").concat(currency);
  }
};

var parseValueFromEvent = function parseValueFromEvent(e, precision, ignoreComma) {
  if (e.target.value === '') {
    return null;
  } else {
    var parsedNumber = parseFloat(ignoreComma ? e.target.value.replace(',', '') : e.target.value);
    return isNaN(parsedNumber) ? NaN : parsedNumber.toFixed(precision);
  }
};
/** Formats value is valid, fallsback on rawValue otherwise */


var getValue = function getValue(value, rawValue, isEmpty) {
  if (isEmpty) {
    return '';
  }

  return isNaN(value) || value === null ? rawValue : value / 100;
};

var getError = function getError(curVal, minAmount, required) {
  return Boolean(required && lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(curVal) || minAmount && curVal < minAmount);
};

var generateCurrencyOptions = function generateCurrencyOptions(intl, availableCurrencies) {
  var currencyDisplayNames = (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_14__/* .getIntlDisplayNames */ ._)(intl.locale, 'currency');
  return availableCurrencies.map(function (currency) {
    var currencyName = currencyDisplayNames.of(currency);
    var emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__.getEmojiByCurrencyCode)(currency);
    return {
      value: currency,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        title: currencyName,
        children: [emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          children: emoji
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          whiteSpace: "nowrap",
          ml: 1,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
            color: "black.800",
            children: currency
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
            color: "black.500",
            children: ["(", currencyName, ")"]
          })]
        })]
      })
    };
  });
};

var getSelectedCurrency = function getSelectedCurrency(value) {
  var emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__.getEmojiByCurrencyCode)(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
    children: [emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
      children: emoji
    }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
      color: "black.800",
      children: value
    })]
  });
};

var CurrencyPicker = function CurrencyPicker(_ref) {
  var availableCurrencies = _ref.availableCurrencies,
      value = _ref.value,
      _onChange = _ref.onChange;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
  var currencyOptions = generateCurrencyOptions(intl, availableCurrencies);
  var selectedCurrency = getSelectedCurrency(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
    inputId: "currency-picker",
    "data-cy": "currency-picker",
    placeholder: "----",
    error: !value,
    isSearchable: (availableCurrencies === null || availableCurrencies === void 0 ? void 0 : availableCurrencies.length) > 10,
    options: currencyOptions,
    value: !value ? null : {
      value: value,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
        minWidth: 200,
        children: selectedCurrency
      })
    },
    width: 102,
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
    onInputChange: function onInputChange(inputValue) {
      return inputValue.length <= 3 ? inputValue : inputValue.substr(0, 3);
    } // Limit search length to 3 characters
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
var StyledInputAmount = function StyledInputAmount(_ref3) {
  var currency = _ref3.currency,
      currencyDisplay = _ref3.currencyDisplay,
      min = _ref3.min,
      max = _ref3.max,
      precision = _ref3.precision,
      defaultValue = _ref3.defaultValue,
      value = _ref3.value,
      _onBlur = _ref3.onBlur,
      onChange = _ref3.onChange,
      isEmpty = _ref3.isEmpty,
      hasCurrencyPicker = _ref3.hasCurrencyPicker,
      onCurrencyChange = _ref3.onCurrencyChange,
      availableCurrencies = _ref3.availableCurrencies,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(value || defaultValue || ''),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      rawValue = _React$useState2[0],
      setRawValue = _React$useState2[1];

  var isControlled = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(value);
  var hasMin = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(min);
  var curValue = isControlled ? getValue(value, rawValue, isEmpty) : undefined;
  var minAmount = hasMin ? min / 100 : min;

  var dispatchValue = function dispatchValue(e, parsedValue) {
    if (isControlled) {
      setRawValue(e.target.value);
    }

    if (onChange) {
      var valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (parsedValue === null || isNaN(parsedValue)) {
        onChange(parsedValue, e);
      } else if (!e.target.checkValidity() || parsedValue !== valueWithIgnoredComma) {
        onChange(isNaN(e.target.value) ? NaN : null, e);
      } else {
        onChange((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .floatAmountToCents */ .VH)(parsedValue), e);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    maxWidth: "10em",
    step: "0.01"
  }, props), {}, {
    min: minAmount,
    max: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(max) ? max : max / 100,
    type: "number",
    inputMode: "decimal",
    error: props.error || getError(curValue, minAmount, props.required),
    defaultValue: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(defaultValue) ? undefined : defaultValue / 100,
    value: curValue,
    prependProps: !hasCurrencyPicker ? {
      color: props.disabled ? 'black.400' : 'black.800'
    } : {
      p: 0
    },
    prepend: !hasCurrencyPicker ? formatCurrencyName(currency, currencyDisplay) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      bgColor: "black.50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CurrencyPicker, {
        onChange: onCurrencyChange,
        value: currency,
        availableCurrencies: availableCurrencies
      })
    }),
    onWheel: function onWheel(e) {
      e.preventDefault();
      e.target.blur();
    },
    onChange: function onChange(e) {
      e.stopPropagation();
      dispatchValue(e, parseValueFromEvent(e, precision));
    },
    onBlur: function onBlur(e) {
      // Clean number if valid (ie. 41.1 -> 41.10)
      var parsedNumber = parseValueFromEvent(e, precision);
      var valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (e.target.checkValidity() && !isNaN(parsedNumber) && parsedNumber !== null && valueWithIgnoredComma === parsedNumber) {
        e.target.value = parsedNumber.toString();
        dispatchValue(e, parsedNumber);
      }

      if (_onBlur) {
        _onBlur(e);
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
  availableCurrencies: _lib_constants_currency__WEBPACK_IMPORTED_MODULE_16__/* .Currency */ .F
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
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputAmount);

/***/ }),

/***/ 78936:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44012);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88705);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);







var ApplicationDescription = function ApplicationDescription() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.P, {
      fontSize: "13px",
      lineHeight: "20px",
      color: "#090A0A",
      mb: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        id: "OCFHostApplication.importance",
        defaultMessage: [{
          "type": 0,
          "value": "It can take years for a group to get 501(c)(3) non-profit status. Fiscal hosts are especially helpful to newly formed nonprofit groups, large and small. We act as a legal entity for your group, organizing the back-end of your fundraising efforts. It’s fast and easy to apply. Once your group is approved, you can begin collecting funds immediately."
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.H5, {
      fontSize: "13px",
      lineHeight: "20px",
      color: "#090A0A",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        id: "OCFHostApplication.howItWorks",
        defaultMessage: [{
          "type": 0,
          "value": "How it works:"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.P, {
      fontSize: "13px",
      lineHeight: "20px",
      color: "#090A0A",
      mb: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        id: "OCFHostApplication.howItWorks.list",
        values: {
          lineBreak: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {})
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.P, {
      fontSize: "13px",
      lineHeight: "20px",
      color: "#090A0A",
      mb: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        id: "OCFHostApplication.readInfoGuideAndTOS",
        values: {
          InfoGuideLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_1__/* .getI18nLink */ .fw)({
            color: '#396C6F',
            textDecoration: 'underline',
            openInNewTab: true,
            href: 'https://docs.opencollective.foundation'
          }),
          TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_1__/* .getI18nLink */ .fw)({
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
};

ApplicationDescription.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationDescription"
};
/* harmony default export */ __webpack_exports__["Z"] = (ApplicationDescription);

/***/ }),

/***/ 58689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52015);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87268);


var OCFPrimaryButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
  displayName: "OCFPrimaryButton",
  componentId: "sc-le1nn-0"
})(["background:linear-gradient(180deg,#4f7d7f 0%,#396c6f 100%);border-color:transparent;color:#ffffff;&:focus{border:solid 2px #90f0bd;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:active{background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:hover{border-color:transparent;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}"]);
/* harmony default export */ __webpack_exports__["Z"] = (OCFPrimaryButton);

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

/***/ 38198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ Currency; },
/* harmony export */   "b": function() { return /* binding */ PayPalSupportedCurrencies; }
/* harmony export */ });
var Currency = ['USD', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];
/*
 * Supported Currencies by PayPal for use with payments and as currency balances.
 * Reference: https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/
 *
 * TODO: There's few currencies (see above list) which decimal amounts are not supported or for in-country
 *  payouts only. We need to investigate and add support for these if possible.
 *
 */

var PayPalSupportedCurrencies = ['AUD', 'CAD', 'CZK', 'DKK', 'EUR', 'HKD', 'ILS', 'MXN', 'NZD', 'NOK', 'PHP', 'PLN', 'GBP', 'RUB', 'SGD', 'SEK', 'CHF', 'THB', 'USD'];

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

/***/ 54802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ocf_host_application; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./node_modules/@styled-icons/icomoon/ArrowLeft2/ArrowLeft2.esm.js
var ArrowLeft2_esm = __webpack_require__(90477);
// EXTERNAL MODULE: ./node_modules/@styled-icons/icomoon/ArrowRight2/ArrowRight2.esm.js
var ArrowRight2_esm = __webpack_require__(44205);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ocf-host-application/OCFPrimaryButton.js
var OCFPrimaryButton = __webpack_require__(58689);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/ocf-host-application/AboutOurFees.js
















var AboutOurFees = function AboutOurFees() {
  var _useRouter = (0,next_router.useRouter)(),
      query = _useRouter.query;

  var backLinkPath = query.collectiveSlug ? "/foundation/apply/intro?collectiveSlug=".concat(query.collectiveSlug) : '/foundation/apply/intro';
  var nextLinkPath = query.collectiveSlug ? "/foundation/apply/form?collectiveSlug=".concat(query.collectiveSlug) : '/foundation/apply/form';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      mb: [null, 3],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: '160px',
        height: '160px',
        mb: "24px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "About our fees illustration",
          src: "/static/images/ocf-host-application/aboutOurFees-illustration.png",
          width: 160,
          height: 160
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        textAlign: ['center', 'left'],
        width: ['288px', '404px'],
        mb: 4,
        ml: [null, '24px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: ['center', 'left'],
          mb: "14px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.aboutOurFees",
            defaultMessage: [{
              "type": 0,
              "value": "About our fees"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.aboutOurFees.description",
            defaultMessage: [{
              "type": 0,
              "value": "In order to support you better, we use the Open Collective Platform to manage your initiative."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      justifyContent: "center",
      alignItems: "center",
      my: 3,
      flexDirection: ['column', 'row'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          color: "#05464A",
          fontSize: "28px",
          lineHeight: "36px",
          fontWeight: "500",
          mb: 2,
          children: "5%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          color: "black.900",
          fontSize: "15px",
          lineHeight: "22px",
          fontWeight: "500",
          mb: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.crowdFunding",
            defaultMessage: [{
              "type": 0,
              "value": "Crowdfunding"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "201px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            textAlign: "center",
            color: "black.600",
            fontSize: "13px",
            lineHeight: "16px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "OCFHostApplication.crowdFunding.description",
              defaultMessage: [{
                "type": 0,
                "value": "On each incoming contribution made via the Open Collective Platform"
              }]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        width: "248px",
        height: "172px",
        borderRadius: "8px",
        border: "1px solid #C4C7CC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          color: "#05464A",
          fontSize: "28px",
          lineHeight: "36px",
          fontWeight: "500",
          mb: 2,
          children: "4-8%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          color: "black.900",
          fontSize: "15px",
          lineHeight: "22px",
          fontWeight: "500",
          mb: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.bankTransfer",
            defaultMessage: [{
              "type": 0,
              "value": "Bank Transfer or Check"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "201px",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
            textAlign: "center",
            color: "black.600",
            fontSize: "13px",
            lineHeight: "16px",
            children: ["**", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "OCFHostApplication.bankTransfer.description",
              defaultMessage: [{
                "type": 0,
                "value": "Based on amount raised"
              }]
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      my: [4, 2],
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '396px'],
        textAlign: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "#050505",
          mb: "24px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
              LearnMoreLink: (0,I18nFormatters/* getI18nLink */.fw)({
                openInNewTab: true,
                color: '#396C6F',
                href: 'https://docs.opencollective.foundation/how-it-works/fees'
              })
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "#050505",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
            values: I18nFormatters/* default */.ZP
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      mb: "40px",
      mt: [null, '48px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: backLinkPath,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          mb: [3, 0],
          width: ['286px', '100px'],
          mr: [null, 3],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowLeft2_esm/* ArrowLeft2 */.b, {
            size: "14px"
          }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Back",
            defaultMessage: [{
              "type": 0,
              "value": "Back"
            }]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: nextLinkPath,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(OCFPrimaryButton/* default */.Z, {
          width: ['286px', '100px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Pagination.Next",
            defaultMessage: [{
              "type": 0,
              "value": "Next"
            }]
          }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
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
/* harmony default export */ var ocf_host_application_AboutOurFees = (AboutOurFees);
// EXTERNAL MODULE: ./components/ocf-host-application/ApplicationForm.js + 1 modules
var ApplicationForm = __webpack_require__(93737);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/ocf-host-application/ApplicationDescription.js
var ApplicationDescription = __webpack_require__(78936);
;// CONCATENATED MODULE: ./components/ocf-host-application/TermsOfFiscalSponsorship.js
















var TermsOfFiscalSponsorship = function TermsOfFiscalSponsorship(_ref) {
  var checked = _ref.checked,
      onChecked = _ref.onChecked;

  var _useRouter = (0,next_router.useRouter)(),
      query = _useRouter.query;

  var nextLinkPath = query.collectiveSlug ? "/foundation/apply/fees?collectiveSlug=".concat(query.collectiveSlug) : '/foundation/apply/fees';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: '160px',
        height: '160px',
        mb: "24px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "OCF sponsorship illustration",
          src: "/static/images/ocf-host-application/ofc-sponsorship-illustration.png",
          width: 160,
          height: 160
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        textAlign: ['center', 'left'],
        width: ['288px', '404px'],
        mb: 4,
        ml: [null, '24px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: ['center', 'left'],
          mb: "14px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.title",
            defaultMessage: [{
              "type": 0,
              "value": "Apply with your initiative"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.description",
            defaultMessage: [{
              "type": 0,
              "value": "Get your non-profit initiative up and running fast."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      width: ['288px', '588px'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ApplicationDescription/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "center",
        mb: 4,
        mt: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mr: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
            name: "TOSAgreement",
            background: "#396C6F",
            size: "16px",
            checked: checked,
            onChange: function onChange(_ref2) {
              var checked = _ref2.checked;
              return onChecked(checked);
            },
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              ml: 1,
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "400",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                  TOSLink: (0,I18nFormatters/* getI18nLink */.fw)({
                    href: 'https://docs.opencollective.foundation/getting-started/terms',
                    openInNewTabNoFollow: true,
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    } // don't check the checkbox when clicking on the link

                  })
                }
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
      href: nextLinkPath,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(OCFPrimaryButton/* default */.Z, {
        mb: "40px",
        width: ['286px', '100px'],
        disabled: !checked,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Pagination.Next",
          defaultMessage: [{
            "type": 0,
            "value": "Next"
          }]
        }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
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
/* harmony default export */ var ocf_host_application_TermsOfFiscalSponsorship = (TermsOfFiscalSponsorship);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
;// CONCATENATED MODULE: ./components/ocf-host-application/YourInitiativeIsNearlyThere.js











var YourInitiativeIsNearlyThere_Link = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "YourInitiativeIsNearlyThere__Link",
  componentId: "sc-82drp8-0"
})(["margin-left:8px;margin-right:8px;color:#313233;text-decoration:underline !important;font-weight:400;"]);
var VisitDocumentationLink = (0,styled_components_browser_esm/* default */.ZP)(StyledLink/* default */.Z).withConfig({
  displayName: "YourInitiativeIsNearlyThere__VisitDocumentationLink",
  componentId: "sc-82drp8-1"
})(["background:linear-gradient(180deg,#4f7d7f 0%,#396c6f 100%);border-color:transparent;white-space:nowrap;color:#ffffff;&:focus{border:solid 2px #90f0bd;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:active{background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:hover{border-color:transparent;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}"]);

var YourInitiativeIsNearlyThere = function YourInitiativeIsNearlyThere() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      mb: [null, 3],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: ['288px', '360px'],
        height: ('128px', '160px'),
        mb: "24px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          alt: "Your initiative is nearly there illustration",
          src: "/static/images/ocf-host-application/ocf-initiativeIsAlmostThere-illustration.png",
          width: 360,
          height: 160
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        textAlign: "center",
        width: ['288px', '404px'],
        mb: "14px",
        ml: [null, '24px'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: "center",
          mb: "14px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OCFHostApplication.yourInitiativeIsNearlyThere",
            defaultMessage: [{
              "type": 0,
              "value": "Your initiative is nearly there!"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.600",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
              lineBreak: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "home",
            defaultMessage: [{
              "type": 0,
              "value": "Home"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "/help",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "community.support",
            defaultMessage: [{
              "type": 0,
              "value": "Support"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "https://slack.opencollective.com/",
          children: "Slack"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(YourInitiativeIsNearlyThere_Link, {
          href: "https://blog.opencollective.com/",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "company.blog",
            defaultMessage: [{
              "type": 0,
              "value": "Blog"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: "48px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "black.800",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OCFHostApplication.partnerProjects",
          defaultMessage: [{
            "type": 0,
            "value": "These projects are trusting us:"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: ['flex-start', 'center'],
        mt: 4,
        width: ['288px', '672px'],
        overflow: "auto",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "80px",
            height: "80px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              alt: "Chrome logo",
              src: "/static/images/ocf-host-application/chrome-logo.png",
              width: 80,
              height: 80
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: "176px",
            textAlign: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
              fontSize: "20px",
              color: "black.900",
              lineHeight: "28px",
              my: 2,
              children: "Chrome's Web Fund"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "14px",
              color: "black.800",
              lineHeight: "20px",
              fontWeight: "500",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OCFHostApplication.weAreAFund",
                defaultMessage: [{
                  "type": 0,
                  "value": "We are a fund"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "208px",
          height: "204px",
          borderRadius: "12px",
          border: "1px solid #E8E9EB",
          padding: "16px",
          flexDirection: "column",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "80px",
            height: "80px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              alt: "CVKey logo",
              src: "/static/images/ocf-host-application/cvKey-logo.png",
              width: 80,
              height: 80
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: "176px",
            textAlign: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
              fontSize: "20px",
              color: "black.900",
              lineHeight: "28px",
              my: 2,
              children: "CVKey Project Fund"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "14px",
              color: "black.800",
              lineHeight: "20px",
              fontWeight: "500",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OCFHostApplication.weAreAFund",
                defaultMessage: [{
                  "type": 0,
                  "value": "We are a fund"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
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
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: "80px",
            height: "80px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
              alt: "WTV logo",
              src: "/static/images/ocf-host-application/wtv-logo.svg",
              width: 80,
              height: 80
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            width: "176px",
            textAlign: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
              fontSize: "20px",
              color: "black.900",
              lineHeight: "28px",
              my: 2,
              children: "#Walkthevote Project"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
              fontSize: "14px",
              color: "black.800",
              lineHeight: "20px",
              fontWeight: "500",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "OCFHostApplication.weAreAFund",
                defaultMessage: [{
                  "type": 0,
                  "value": "We are a fund"
                }]
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(VisitDocumentationLink, {
        my: "40px",
        href: "https://docs.opencollective.foundation/",
        width: ['286px', '215px'],
        buttonStyle: "primary",
        borderColor: "transparent",
        buttonSize: "medium",
        openInNewTab: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OCFHostApplication.visitDocumentation",
          defaultMessage: [{
            "type": 0,
            "value": "Visit the documentation "
          }, {
            "type": 1,
            "value": "arrowRight"
          }],
          values: {
            arrowRight: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
              size: "14px"
            })
          }
        })
      })]
    })]
  });
};

YourInitiativeIsNearlyThere.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "YourInitiativeIsNearlyThere"
};
/* harmony default export */ var ocf_host_application_YourInitiativeIsNearlyThere = (YourInitiativeIsNearlyThere);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./pages/ocf-host-application.js


var _templateObject, _templateObject2;

















var ocfCollectiveApplicationQuery = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query OcfCollectiveApplicationPage($slug: String) {\n    account(slug: $slug) {\n      id\n      slug\n      description\n      name\n      type\n      isAdmin\n      ... on AccountWithHost {\n        host {\n          id\n          name\n        }\n      }\n    }\n  }\n"])));
var ocfHostApplicationPageQuery = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query OcfHostApplicationPage {\n    account(slug: \"foundation\") {\n      id\n      slug\n      policies {\n        COLLECTIVE_MINIMUM_ADMINS {\n          numberOfAdmins\n        }\n      }\n    }\n    tagStats(host: { slug: \"foundation\" }, limit: 6) {\n      nodes {\n        id\n        tag\n      }\n    }\n  }\n"])));
var messages = (0,react_intl_lib.defineMessages)({
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
var formValues = {
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

var OCFHostApplication = function OCFHostApplication(_ref) {
  var _collective$host;

  var loadingLoggedInUser = _ref.loadingLoggedInUser,
      LoggedInUser = _ref.LoggedInUser;

  var _useState = (0,react.useState)(false),
      checkedTermsOfFiscalSponsorship = _useState[0],
      setCheckedTermsOfFiscalSponsorship = _useState[1];

  var _useState2 = (0,react.useState)(formValues),
      initialValues = _useState2[0],
      setInitialValues = _useState2[1];

  var intl = (0,useIntl/* default */.Z)();
  var router = (0,next_router.useRouter)();

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var step = router.query.step || 'intro';
  var collectiveSlug = router.query.collectiveSlug;

  var _useQuery = (0,client.useQuery)(ocfHostApplicationPageQuery, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      hostData = _useQuery.data;

  var _useQuery2 = (0,client.useQuery)(ocfCollectiveApplicationQuery, {
    context: helpers/* API_V2_CONTEXT */.T,
    variables: {
      slug: collectiveSlug
    },
    skip: !(LoggedInUser && collectiveSlug && step === 'form'),
    onError: function onError(error) {
      addToast({
        type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
        title: intl.formatMessage(messages['error.title']),
        message: (0,errors/* i18nGraphqlException */.t2)(intl, error)
      });
    }
  }),
      data = _useQuery2.data,
      loadingCollective = _useQuery2.loading;

  var collective = data === null || data === void 0 ? void 0 : data.account;
  var canApplyWithCollective = collective && collective.isAdmin && collective.type === collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE;
  var hasHost = collective && (collective === null || collective === void 0 ? void 0 : (_collective$host = collective.host) === null || _collective$host === void 0 ? void 0 : _collective$host.id);
  var popularTags = hostData === null || hostData === void 0 ? void 0 : hostData.tagStats.nodes.map(function (_ref2) {
    var tag = _ref2.tag;
    return tag;
  }).filter(function (tag) {
    return !collectives/* IGNORED_TAGS.includes */.bR.includes(tag);
  });
  react.useEffect(function () {
    if (collectiveSlug && collective && (!canApplyWithCollective || hasHost)) {
      addToast({
        type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
        title: intl.formatMessage(messages['error.title']),
        message: hasHost ? intl.formatMessage(messages['error.existingHost.description'], {
          hostName: collective.host.name
        }) : intl.formatMessage(messages['error.unauthorized.description'], {
          name: collective.name
        })
      });
    }
  }, [collectiveSlug, collective]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    title: "Open collective foundation application",
    children: [step === 'intro' && /*#__PURE__*/(0,jsx_runtime.jsx)(ocf_host_application_TermsOfFiscalSponsorship, {
      checked: checkedTermsOfFiscalSponsorship,
      onChecked: setCheckedTermsOfFiscalSponsorship
    }), step === 'fees' && /*#__PURE__*/(0,jsx_runtime.jsx)(ocf_host_application_AboutOurFees, {}), step === 'form' && /*#__PURE__*/(0,jsx_runtime.jsx)(ApplicationForm/* default */.Z, {
      initialValues: initialValues,
      setInitialValues: setInitialValues,
      loadingLoggedInUser: loadingLoggedInUser,
      LoggedInUser: LoggedInUser,
      collective: collective,
      host: hostData === null || hostData === void 0 ? void 0 : hostData.account,
      loadingCollective: loadingCollective,
      canApplyWithCollective: canApplyWithCollective && !hasHost,
      popularTags: popularTags
    }), step === 'success' && /*#__PURE__*/(0,jsx_runtime.jsx)(ocf_host_application_YourInitiativeIsNearlyThere, {})]
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
/* harmony default export */ var ocf_host_application = ((0,UserProvider/* withUser */.ns)(OCFHostApplication));

/***/ }),

/***/ 70927:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/ocf-host-application",
      function () {
        return __webpack_require__(54802);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,8966,8027,5126,295,146,5813,4842,4154,1012,1861,4691,3737,9774,2888,179], function() { return __webpack_exec__(70927); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=ocf-host-application-6b8cb58d1bacc929.js.map