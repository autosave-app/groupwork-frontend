"use strict";
exports.id = 1808;
exports.ids = [1808];
exports.modules = {

/***/ 1808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VX": () => (/* binding */ matchPm),
/* harmony export */   "Yp": () => (/* binding */ ProvidersWithRecurringPaymentSupport),
/* harmony export */   "bk": () => (/* binding */ isPrepaid),
/* harmony export */   "fY": () => (/* binding */ GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES),
/* harmony export */   "oy": () => (/* binding */ GQLV2_PAYMENT_METHOD_LEGACY_TYPES),
/* harmony export */   "td": () => (/* binding */ PAYMENT_METHOD_TYPE),
/* harmony export */   "tp": () => (/* binding */ PAYMENT_METHOD_SERVICE)
/* harmony export */ });
const PAYMENT_METHOD_SERVICE = {
  PAYPAL: 'PAYPAL',
  STRIPE: 'STRIPE',
  OPENCOLLECTIVE: 'OPENCOLLECTIVE',
  THEGIVINGBLOCK: 'THEGIVINGBLOCK'
};
const PAYMENT_METHOD_TYPE = {
  ALIPAY: 'ALIPAY',
  CREDITCARD: 'CREDITCARD',
  PREPAID: 'PREPAID',
  PAYMENT: 'PAYMENT',
  SUBSCRIPTION: 'SUBSCRIPTION',
  COLLECTIVE: 'COLLECTIVE',
  HOST: 'HOST',
  ADAPTIVE: 'ADAPTIVE',
  GIFTCARD: 'GIFTCARD',
  MANUAL: 'MANUAL',
  CRYPTO: 'CRYPTO',
  PAYMENT_INTENT: 'PAYMENT_INTENT',
  US_BANK_ACCOUNT: 'US_BANK_ACCOUNT',
  SEPA_DEBIT: 'SEPA_DEBIT',
  BACS_DEBIT: 'BACS_DEBIT',
  BANCONTACT: 'BANCONTACT'
};
const GQLV2_PAYMENT_METHOD_LEGACY_TYPES = {
  ACCOUNT_BALANCE: 'ACCOUNT_BALANCE',
  ALIPAY: 'ALIPAY',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CREDIT_CARD: 'CREDIT_CARD',
  CRYPTO: 'CRYPTO',
  GIFT_CARD: 'GIFT_CARD',
  PAYPAL: 'PAYPAL',
  PREPAID_BUDGET: 'PREPAID_BUDGET'
};
const GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES = {
  ALIPAY: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.ALIPAY,
  BANK_TRANSFER: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.BANK_TRANSFER,
  CREDIT_CARD: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CREDIT_CARD,
  PAYPAL: GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PAYPAL,
  PAYMENT_INTENT: PAYMENT_METHOD_TYPE.PAYMENT_INTENT
};
const matchPm = (pm, service, type) => {
  return pm && pm.service === service && pm.type === type;
};
/** Returns true if the given payment method is a prepaid */

const isPrepaid = pm => {
  return matchPm(pm, PAYMENT_METHOD_SERVICE.OPENCOLLECTIVE, PAYMENT_METHOD_TYPE.PREPAID);
};
/** Returns payment methods with recurring payment support **/

const ProvidersWithRecurringPaymentSupport = [GQLV2_PAYMENT_METHOD_LEGACY_TYPES.CREDIT_CARD, GQLV2_PAYMENT_METHOD_LEGACY_TYPES.PAYPAL, GQLV2_PAYMENT_METHOD_LEGACY_TYPES.ACCOUNT_BALANCE];

/***/ })

};
;