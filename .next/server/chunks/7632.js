"use strict";
exports.id = 7632;
exports.ids = [7632];
exports.modules = {

/***/ 19377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ CurrencyPrecision)
/* harmony export */ });
const CurrencyPrecision = {
  DEFAULT: 2
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CurrencyPrecision)));

/***/ }),

/***/ 17632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KK": () => (/* binding */ getAmountInCents),
/* harmony export */   "NP": () => (/* binding */ centsAmountToFloat),
/* harmony export */   "VH": () => (/* binding */ floatAmountToCents),
/* harmony export */   "jK": () => (/* binding */ getCurrencySymbol),
/* harmony export */   "kJ": () => (/* binding */ graphqlAmountValueInCents),
/* harmony export */   "vx": () => (/* binding */ getPrecisionFromAmount),
/* harmony export */   "xG": () => (/* binding */ formatCurrency)
/* harmony export */ });
/* unused harmony export formatValueAsCurrency */
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71934);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19377);





function getCurrencySymbolFallback(currency) {
  return Number(0).toLocaleString('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).replace(/(^0\s?)|(\s?0$)/, '');
}

function getCurrencySymbol(currency) {
  return currency_symbol_map__WEBPACK_IMPORTED_MODULE_2___default()(currency) || getCurrencySymbolFallback(currency);
}
const getPrecisionFromAmount = amount => {
  return amount.toString().slice(-2) === '00' ? 0 : _constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyPrecision.DEFAULT */ .E.DEFAULT;
};
function graphqlAmountValueInCents(amount) {
  if (lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount)) {
    return amount;
  } // GQLV2 is an object


  if (typeof amount === 'object') {
    return amount?.valueInCents;
  } // GQLV2 is already a value in cents


  return amount;
}
function formatCurrency(amount, currency = 'USD', options = {}) {
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
  let minimumFractionDigits = 2;
  let maximumFractionDigits = 2;

  if (Object.prototype.hasOwnProperty.call(options, 'minimumFractionDigits')) {
    minimumFractionDigits = options.minimumFractionDigits;
  } else if (Object.prototype.hasOwnProperty.call(options, 'precision')) {
    minimumFractionDigits = options.precision;
    maximumFractionDigits = options.precision;
  }

  const formatAmount = currencyDisplay => {
    return amount.toLocaleString(options.locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
      currencyDisplay
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
const formatValueAsCurrency = (value, options) => formatCurrency(value.valueInCents || value.value * 100, value.currency, options);
const floatAmountToCents = floatAmount => {
  if (isNaN(floatAmount) || floatAmount === null) {
    return floatAmount;
  } else {
    return Math.round(floatAmount * 100);
  }
};
const centsAmountToFloat = amount => {
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

const getAmountInCents = amount => {
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

/***/ })

};
;