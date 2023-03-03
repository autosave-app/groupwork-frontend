"use strict";
exports.id = 7027;
exports.ids = [7027];
exports.modules = {

/***/ 37027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ removeGuestTokens),
/* harmony export */   "Lj": () => (/* binding */ getAllGuestEmails),
/* harmony export */   "kG": () => (/* binding */ setGuestToken)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35427);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Returns a map like { [email]: token }
 */

const getAllGuestTokens = () => {
  try {
    const localStorageValue = (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .getFromLocalStorage */ .fp)(_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .LOCAL_STORAGE_KEYS.GUEST_TOKENS */ .dA.GUEST_TOKENS);
    return JSON.parse(localStorageValue) || {};
  } catch (e) {
    return {};
  }
};

const normalizeGuestToken = (key, value) => {
  if (typeof value === 'string') {
    return {
      email: key,
      token: value
    };
  } else {
    return {
      email: value.email,
      token: value.email,
      orderId: key
    };
  }
};

const normalizeEmailForGuestToken = email => {
  return email.trim().toLowerCase();
};
/**
 * Returns all emails that were used to contribute as guest on this browser
 */


const getAllGuestEmails = () => {
  const guestTokens = getAllGuestTokens();
  const normalizedEntries = Object.entries(guestTokens).map(([key, value]) => normalizeGuestToken(key, value));
  const emails = normalizedEntries.map(e => e.email);
  return lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()(emails);
};
const removeGuestTokens = (emails = [], tokens = []) => {
  const allTokens = getAllGuestTokens();
  const normalizedEmails = emails?.map(normalizeEmailForGuestToken);

  const newTokens = lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default()(allTokens, (value, key) => {
    const {
      email,
      token
    } = normalizeGuestToken(key, value);

    if (normalizedEmails && normalizedEmails.includes(email)) {
      return true;
    } else if (tokens && tokens.includes(token)) {
      return true;
    } else {
      return false;
    }
  });

  (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .qQ)(_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .LOCAL_STORAGE_KEYS.GUEST_TOKENS */ .dA.GUEST_TOKENS, JSON.stringify(newTokens));
};
const setGuestToken = (email, orderId, token) => {
  const tokens = _objectSpread(_objectSpread({}, getAllGuestTokens()), {}, {
    [orderId]: {
      token,
      email: normalizeEmailForGuestToken(email)
    }
  });

  (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .qQ)(_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .LOCAL_STORAGE_KEYS.GUEST_TOKENS */ .dA.GUEST_TOKENS, JSON.stringify(tokens));
};

/***/ })

};
;