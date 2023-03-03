"use strict";
exports.id = 7079;
exports.ids = [7079];
exports.modules = {

/***/ 97079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ truncate),
/* harmony export */   "CR": () => (/* binding */ reportValidityHTML5),
/* harmony export */   "Cb": () => (/* binding */ stripHTML),
/* harmony export */   "Cd": () => (/* binding */ omitDeep),
/* harmony export */   "DD": () => (/* binding */ parseToBoolean),
/* harmony export */   "Lu": () => (/* binding */ allSettled),
/* harmony export */   "Mc": () => (/* binding */ flattenObjectDeep),
/* harmony export */   "SH": () => (/* binding */ loadScriptAsync),
/* harmony export */   "V_": () => (/* binding */ sortSelectOptions),
/* harmony export */   "ex": () => (/* binding */ repeatWithInterval),
/* harmony export */   "hP": () => (/* binding */ singular),
/* harmony export */   "jv": () => (/* binding */ isValidUrl),
/* harmony export */   "kC": () => (/* binding */ capitalize),
/* harmony export */   "ls": () => (/* binding */ getWebsiteUrl),
/* harmony export */   "nL": () => (/* binding */ escapeInput),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "qC": () => (/* binding */ compose),
/* harmony export */   "qo": () => (/* binding */ getCurrentDateInUTC),
/* harmony export */   "s5": () => (/* binding */ isValidRelativeUrl),
/* harmony export */   "u5": () => (/* binding */ firstSentence),
/* harmony export */   "vV": () => (/* binding */ isValidEmail)
/* harmony export */ });
/* unused harmony export getQueryParams */
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75795);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70154);
/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86109);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function truncate(str, length) {
  if (!str || typeof str !== 'string' || str.length <= length) {
    return str;
  }

  const subString = str.substr(0, length - 1);
  return `${subString.substr(0, subString.lastIndexOf(' '))} …`;
}
const isValidUrl = url => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};
/**
 * Validate a relative path.
 * > isValidRelativeUrl('a/b/c/d/e/f/g')
 * true
 * > isValidRelativeUrl('about.html')
 * true
 * > isValidRelativeUrl('//')
 * false
 * > isValidRelativeUrl('//xxx')
 * false
 * > isValidRelativeUrl('https://google.com')
 * false
 */

const isValidRelativeUrl = url => {
  url = url?.trim();

  if (!url) {
    return false;
  }

  try {
    // If we're able to construct a URL, it means it's an absolute URL.
    new URL(url);
    return false;
  } catch (e) {
    // Prevent URLs like //example.com or /\n/example.com or /\/example.com/
    if (url.match(/^[\s\\/]{2,}.+/)) {
      return false;
    } else {
      return true;
    }
  }
};
const isValidEmail = email => {
  if (typeof email !== 'string') {
    return false;
  }

  return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
function parseToBoolean(value, defaultValue = false) {
  let lowerValue = value; // check whether it's string

  if (lowerValue && (typeof lowerValue === 'string' || lowerValue instanceof String)) {
    lowerValue = lowerValue.trim().toLowerCase();
  }

  if (['on', 'enabled', '1', 'true', 'yes', 1].includes(lowerValue)) {
    return true;
  }

  return defaultValue;
}
function getQueryParams() {
  const urlParams = {};
  let match;

  const pl = /\+/g,
        // Regex for replacing addition symbol with a space
  search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
    return decodeURIComponent(s.replace(pl, ' '));
  },
        query = window.location.search.substring(1); // eslint-disable-next-line no-cond-assign


  while (match = search.exec(query)) {
    urlParams[decode(match[1])] = decode(match[2]);
  }

  return urlParams;
}
function formatDate(date, options = {
  month: 'long',
  year: 'numeric'
}) {
  const d = new Date(date);
  const locale =  false ? 0 : options.locale || 'en-US';

  try {
    return d.toLocaleDateString(locale, options);
  } catch {
    try {
      return d.toLocaleDateString('en-US', options);
    } catch {
      return d.toString();
    }
  }
}
const singular = str => {
  if (!str) {
    return '';
  }

  return str.replace(/ies$/, 'y').replace(/s$/, '');
};
const capitalize = str => {
  if (typeof str !== 'string') {
    return '';
  }

  str = str.trim();

  if (str.length === 0) {
    return '';
  }

  return `${str[0].toUpperCase()}${str.substr(1)}`;
};

const trim = (str, length) => {
  if (!str) {
    return '';
  }

  if (str.length <= length) {
    return str;
  }

  const res = [];
  let resLength = 0;
  const words = str.split(' ');
  let i = 0;

  while (resLength < length && i < words.length) {
    const w = words[i++];
    resLength += w.length + 1;
    res.push(w);
  }

  return `${res.join(' ')} …`;
};

const firstSentence = (str, length) => {
  if (!str) {
    return '';
  }

  str = str.replace(/&amp;/g, '&');

  if (str.length <= length) {
    return str;
  }

  const tokens = str.match(/\.|\?|!/);

  if (tokens) {
    str = str.substr(0, tokens.index + 1);
  }

  str = trim(str, length);
  return str;
};
const loadScriptAsync = (url, opts = {}) => new Promise((resolve, reject) => {
  load_script__WEBPACK_IMPORTED_MODULE_2___default()(url, opts, (err, script) => {
    if (err) {
      reject(err);
    } else {
      resolve(script);
    }
  });
}); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
// From section about escapting user input

const escapeInput = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const getWebsiteUrl = () => {
  if (false) {} else {
    return "http://localhost:3000";
  }
};
function compose(...funcs) {
  const functions = funcs.reverse();
  return function (...args) {
    const [firstFunction, ...restFunctions] = functions;
    let result = firstFunction.apply(null, args);
    restFunctions.forEach(fnc => {
      result = fnc.call(null, result);
    });
    return result;
  };
}
/** This function will return true if reportValidity is not supported by the browser, or if it succeed */

const reportValidityHTML5 = domNodeOrEvent => {
  return !domNodeOrEvent || typeof domNodeOrEvent.reportValidity !== 'function' || domNodeOrEvent.reportValidity();
};
/**
 * Repeat `func` for `nbTimes`, calling it every `interval` ms.
 * Passes one parameter: the number of iterations left.
 */

const repeatWithInterval = (nbTimes, interval, func) => {
  func(nbTimes);

  if (nbTimes - 1 > 0) {
    setTimeout(() => repeatWithInterval(nbTimes - 1, interval, func), interval);
  }
};
/**
 * Similar to `Promise.allSettled` (which doesn't have a great browser support yet)
 */

const allSettled = promises => {
  return Promise.all(promises.map(promise => {
    return Promise.resolve(promise).then(val => ({
      status: 'fulfilled',
      value: val
    }), err => ({
      status: 'rejected',
      reason: err
    }));
  }));
};
/**
 * Returns flat object containing keys with values that are not empty objects.
 * Ex:
 *    flattenObjectDeep({ b: true, c: { d: {}, e: false }})
 *    // {b: true, e: false}
 *
 *    flattenObjectDeep({ c: { d: {} }})
 *    // {}
 */

const flattenObjectDeep = obj => Object.keys(obj).reduce((acc, k) => typeof obj[k] === 'object' ? _objectSpread(_objectSpread({}, acc), flattenObjectDeep(obj[k])) : _objectSpread(_objectSpread({}, acc), {}, {
  [k]: obj[k]
}), {});
const stripHTML = htmlContent => sanitize_html__WEBPACK_IMPORTED_MODULE_3___default()(htmlContent, {
  allowedTags: [],
  allowedAttributes: {}
});
const omitDeep = (obj, keys) => Object.keys(lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(obj, keys)).reduce((acc, next) => _objectSpread(_objectSpread({}, acc), {}, {
  [next]: lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(obj[next]) ? omitDeep(obj[next], keys) : obj[next]
}), {});
const getCurrentDateInUTC = () => new Date().toISOString().split('T')[0];
/**
 * Sort options as: All, then by alphabetical order, then "No payment method" or "Other" at the end
 */

const sortSelectOptions = (option1, option2) => {
  if (option1.value === 'ALL') {
    return -1;
  }

  if (option2.value === 'ALL') {
    return 1;
  }

  if (option1.value === null) {
    return 1;
  }

  if (option2.value === null) {
    return -1;
  }

  if (option1.value === 'OTHER') {
    return 1;
  }

  if (option2.value === 'OTHER') {
    return -1;
  }

  return option1.label.localeCompare(option2.label);
};

/***/ })

};
;