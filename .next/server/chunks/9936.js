"use strict";
exports.id = 9936;
exports.ids = [9936];
exports.modules = {

/***/ 79936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d2": () => (/* binding */ getStripe),
/* harmony export */   "kJ": () => (/* binding */ stripeTokenToPaymentMethod)
/* harmony export */ });
/* unused harmony exports getStripeToken, isValidCard */
/* harmony import */ var payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42863);
/* harmony import */ var payment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(payment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9269);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97079);



const stripeInstances = {};

const getStripe = async (token, stripeAccount) => {
  const instanceId = stripeAccount || 'default';

  if (!stripeInstances[instanceId]) {
    const stripeKey = token || (0,_env_utils__WEBPACK_IMPORTED_MODULE_1__/* .getEnvVar */ .p)('STRIPE_KEY');

    if (stripeKey) {
      if (typeof window.Stripe === 'undefined') {
        await (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .loadScriptAsync */ .SH)('https://js.stripe.com/v3/');
      }

      stripeInstances[instanceId] = window.Stripe(stripeKey, stripeAccount ? {
        stripeAccount
      } : {});
    } else {
      throw new Error("'STRIPE_KEY' is undefined.");
    }
  }

  return stripeInstances[instanceId];
};

const getStripeToken = (type = 'cc', data) => {
  // for testing only
  const TEST_ENVIRONMENT =  false && (0);

  if (TEST_ENVIRONMENT) {
    return Promise.resolve({
      token: 'tok_bypassPending',

      /* eslint-disable camelcase */
      card: {
        last4: 4242,
        exp_month: 11,
        exp_year: 23,
        brand: 'visa',
        country: 'us',
        funding: 'credit',
        address_zip: 10014
      }
      /* eslint-enable camelcase */

    });
  }

  switch (type) {
    case 'cc':
      // credit card
      return getStripe().then(stripe => stripe.createToken(data)).then(res => {
        if (res.error) {
          throw new Error(res.error.message);
        }

        return {
          token: res.token.id,
          card: res.token.card
        };
      });
  }
};
/**
 * Convert a stripe token as returned by `createToken` into a PaymentMethod object.
 */


const stripeTokenToPaymentMethod = ({
  id,
  card
}) => {
  return {
    name: card.last4,
    token: id,
    service: 'STRIPE',
    type: 'CREDITCARD',
    data: {
      fullName: card.full_name,
      expMonth: card.exp_month,
      expYear: card.exp_year,
      brand: card.brand,
      country: card.country,
      funding: card.funding,
      zip: card.address_zip,
      fingerprint: card.fingerprint
    }
  };
};

const isValidCard = card => {
  if (typeof card.cvc !== 'string') {
    card.cvc = `${card.cvc}`;
  }

  return card && card.cvc && card.cvc.length >= 3 && card.exp_month && card.exp_year && Payment.fns.validateCardNumber(card.number);
};



/***/ })

};
;