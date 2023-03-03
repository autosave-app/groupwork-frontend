"use strict";
exports.id = 5656;
exports.ids = [5656];
exports.modules = {

/***/ 88705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gl": () => (/* binding */ I18nBold),
/* harmony export */   "Kl": () => (/* binding */ I18nSignInLink),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fw": () => (/* binding */ getI18nLink),
/* harmony export */   "lK": () => (/* binding */ I18nUnderline),
/* harmony export */   "wl": () => (/* binding */ I18nSupportLink)
/* harmony export */ });
/* unused harmony exports I18nItalic, I18nCode, I18nTOSLink, I18nPrivacyLink */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // eslint-disable-next-line react/display-name


const getI18nLink = linkProps => chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, linkProps), {}, {
  children: linkProps?.children || chunks
}));
const I18nBold = chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("strong", {
  children: chunks
});
const I18nItalic = chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
  children: chunks
});
const I18nCode = chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("code", {
  children: chunks
});
const I18nUnderline = chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("u", {
  children: chunks
});
const I18nSupportLink = chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
  as: _Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  openInNewTab: true,
  href: "/contact",
  children: chunks.length ? chunks : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "o42xrK",
    defaultMessage: [{
      "type": 0,
      "value": "support"
    }]
  })
});
const I18nSignInLink = chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
  href: {
    pathname: '/signin',
    query: {
      next:  false ? 0 : ''
    }
  },
  children: chunks
});
const I18nTOSLink = msg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
  href: "/tos",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
    children: msg
  })
});
const I18nPrivacyLink = msg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
  href: "/privacypolicy",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
    children: msg
  })
});
const I18nFormatters = {
  strong: I18nBold,
  i: I18nItalic,
  code: I18nCode,
  u: I18nUnderline,
  SupportLink: I18nSupportLink,
  SignInLink: I18nSignInLink,
  TOSLink: I18nTOSLink,
  PrivacyPolicyLink: I18nPrivacyLink
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (I18nFormatters);
I18nBold.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nBold"
};
I18nItalic.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nItalic"
};
I18nCode.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nCode"
};
I18nUnderline.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nUnderline"
};
I18nSupportLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nSupportLink"
};
I18nSignInLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nSignInLink"
};
I18nTOSLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nTOSLink"
};
I18nPrivacyLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "I18nPrivacyLink"
};

/***/ }),

/***/ 51082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16010);
/* harmony import */ var _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72991);






/**
 * styled-component anchor tag using styled-system
 *
 * @see See [styled-system docs](https://github.com/jxnblk/styled-system/blob/master/docs/api.md) for usage of those props
 */
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.attrs(props => {
  if (props.openInNewTab) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  }

  if (props.openInNewTabNoFollow) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer nofollow'
    };
  }

  if (props.openInNewTabNoFollowRelMe) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer nofollow me'
    };
  }
}).withConfig({
  displayName: "StyledLink",
  componentId: "sc-1ppc7ut-0"
})(["cursor:pointer;text-decoration:none;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " &[disabled]{pointer-events:none;cursor:default;text-decoration:none;color:", ";}", " &:hover{", " ", "}"], props => props.as === 'button' && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;"]), styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.typography, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_3__/* .textDecoration */ .QX, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_3__/* .whiteSpace */ .d8, props => props.buttonStyle && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["outline:0;border:1px solid;border-style:solid;border-width:1px;border-radius:100px;text-align:center;&:disabled{cursor:not-allowed;}"]), _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_4__/* .buttonStyle */ .jn, _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_4__/* .buttonSize */ .L8, styled_system__WEBPACK_IMPORTED_MODULE_2__.background, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.themeGet)('colors.black.300'), props => props.truncateOverflow && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]), (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.system)({
  hoverColor: {
    property: 'color',
    scale: 'colors'
  }
}), props => props.underlineOnHover && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["text-decoration:underline;"]));
StyledLink.defaultProps = {
  color: 'primary.500',
  hoverColor: 'primary.400'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledLink);

/***/ }),

/***/ 98216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  HOST: 'HOST',
  // holds money on behalf of the collective
  ADMIN: 'ADMIN',
  // can approve expenses
  MEMBER: 'MEMBER',
  // member of the collective but cannot approve expenses
  CONTRIBUTOR: 'CONTRIBUTOR',
  // occasional contributor (giving time)
  BACKER: 'BACKER',
  // supporter giving money
  ATTENDEE: 'ATTENDEE',
  // someone who registered for a free tier (typically a free event ticket)
  FOLLOWER: 'FOLLOWER',
  // someone interested to follow the activities of the collective/event
  CONNECTED_COLLECTIVE: 'CONNECTED_COLLECTIVE',
  // this memberCollective is a sub-collective of the collective
  CONNECTED_ACCOUNT: 'CONNECTED_ACCOUNT',
  // CONNECTED_COLLECTIVE equivalent on GQLV2
  ACCOUNTANT: 'ACCOUNTANT' // Has read access to all financial information and receipts/invoices

});

/***/ }),

/***/ 12136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MS": () => (/* binding */ ApiError),
  "pn": () => (/* binding */ ERROR),
  "SC": () => (/* binding */ IgnorableError),
  "Tr": () => (/* binding */ createError),
  "jN": () => (/* binding */ formatErrorMessage),
  "Wi": () => (/* binding */ formatErrorType),
  "mN": () => (/* binding */ generateNotFoundError),
  "H1": () => (/* binding */ getErrorFromGraphqlException),
  "be": () => (/* binding */ getErrorFromPdfService),
  "wY": () => (/* binding */ getErrorFromXhrUpload),
  "t2": () => (/* binding */ i18nGraphqlException),
  "kY": () => (/* binding */ isErrorType),
  "Vv": () => (/* binding */ isOCError)
});

// EXTERNAL MODULE: external "lodash/isError"
var isError_ = __webpack_require__(77876);
var isError_default = /*#__PURE__*/__webpack_require__.n(isError_);
// EXTERNAL MODULE: external "lodash/has"
var has_ = __webpack_require__(98210);
var has_default = /*#__PURE__*/__webpack_require__.n(has_);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
;// CONCATENATED MODULE: ./lib/errors/transferwise.js

const TRANSFERWISE_ERROR = {
  'transferwise.error.insufficientFunds': 'transferwise.error.insufficientFunds',
  'transferwise.error.notConnected': 'transferwise.error.notConnected',
  'transferwise.error.currencyNotSupported': 'transferwise.error.currencyNotSupported',
  // Native TransferWise errors
  'transferwise.error.balance.payment-option-unavailable': 'transferwise.error.balance.payment-option-unavailable'
};
const transferwiseMsg = (0,external_react_intl_.defineMessages)({
  'transferwise.error.default': {
    id: "transferwise.error.default",
    defaultMessage: [{
      "type": 0,
      "value": "An unknown error happened with Wise. Please contact support@opencollective.com."
    }]
  },
  'transferwise.error.insufficientFunds': {
    id: "transferwise.error.insufficientFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Not enough funds in your "
    }, {
      "type": 1,
      "value": "currency"
    }, {
      "type": 0,
      "value": " balance. Please top up your account and try again."
    }]
  },
  'transferwise.error.notConnected': {
    id: "transferwise.error.notConnected",
    defaultMessage: [{
      "type": 0,
      "value": "Host is not connected to Wise"
    }]
  },
  'transferwise.error.currencyNotSupported': {
    id: "transferwise.error.currencyNotSupported",
    defaultMessage: [{
      "type": 0,
      "value": "This currency is not supported"
    }]
  },
  // Native TransferWise errors
  'transferwise.error.balance.payment-option-unavailable': {
    id: "transferwise.error.balance.payment-option-unavailable",
    defaultMessage: [{
      "type": 0,
      "value": "Unable to fund transfer. Please check your balance and try again."
    }]
  }
});
;// CONCATENATED MODULE: ./lib/errors/index.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // ---- Types & constants ----

/** Defines error types */

const ERROR = _objectSpread({
  UNKNOWN: 'UNKNOWN',
  NETWORK: 'NETWORK',
  NOT_FOUND: 'NOT_FOUND',
  BAD_COLLECTIVE_TYPE: 'BAD_COLLECTIVE_TYPE',
  FORM_FIELD_MIN: 'FORM_FIELD_MIN',
  FORM_FIELD_MAX: 'FORM_FIELD_MAX',
  FORM_FIELD_REQUIRED: 'FORM_FIELD_REQUIRED',
  FORM_FIELD_CHECK_REQUIRED: 'FORM_FIELD_CHECK_REQUIRED',
  FORM_FIELD_MIN_LENGTH: 'FORM_FIELD_MIN_LENGTH',
  FORM_FIELD_MAX_LENGTH: 'FORM_FIELD_MAX_LENGTH',
  FORM_FIELD_PATTERN: 'FORM_FIELD_PATTERN',
  FORM_FIELD_VALUE_NOT_IN_RANGE: 'FORM_FIELD_VALUE_NOT_IN_RANGE',
  FORM_FIELD_INVALID_VALUE: 'FORM_FIELD_INVALID_VALUE',
  ACCOUNT_EMAIL_ALREADY_EXISTS: 'ACCOUNT_EMAIL_ALREADY_EXISTS',
  INVALID_FILE_SIZE_TOO_BIG: 'INVALID_FILE_SIZE_TOO_BIG',
  INVALID_FILE_MIME_TYPE: 'INVALID_FILE_MIME_TYPE',
  TWO_FACTOR_AUTH_CANCELED: 'TWO_FACTOR_AUTH_CANCELED',
  'PM.Remove.HasActiveSubscriptions': 'PM.Remove.HasActiveSubscriptions'
}, TRANSFERWISE_ERROR);
/**
 * An error generated under the Open Collective namespace.
 */

class OCError extends Error {
  constructor(type, errorParams) {
    super();
    const {
      message,
      payload,
      hasI18nMessage
    } = errorParams || {};
    this.type = has_default()(ERROR, type) ? type : ERROR.UNKNOWN;
    this.message = message;
    this.payload = payload;
    this.hasI18nMessage = Boolean(hasI18nMessage);
  }

}

class ApiError extends Error {
  constructor(errorParams) {
    super();
    const {
      code,
      type,
      message
    } = errorParams || {};
    this.code = code;
    this.type = type;
    this.message = message;
  }

} // ---- Helpers to manipulate errors ----

/**
 * Generate a standard error object.
 *
 * @param type: One of `ERROR`
 * @param errorParams {object}:
 *    - message: A default message for this error
 *    - payload: Any data you want to add to the error
 */

const createError = (type, errorParams) => {
  return new OCError(type, errorParams);
};
/** Returns true if object is a valid OCError */

const isOCError = error => {
  if (!error) {
    return false;
  } else if (error instanceof OCError) {
    return true;
  } else {
    // Accept objects if they have a valid error `type`
    return typeof error === 'object' && Boolean(error.type && ERROR[error.type]);
  }
};
/**
 * returns true if the error is of the given type.
 *
 * @param error {OCError}
 * @param errorType {ERROR}
 * @returns {boolean}
 */

const isErrorType = (error, errorType) => {
  return isOCError(error) && error.type === errorType;
};
/**
 * A specialization of `createError` to generate "NOT_FOUND" errors.
 *
 * @param searchTerm: A term that will be used on the "Not found" page to trigger the search
 * @param return404Status: If true, an exception will be thrown on server-side to force the render of the 404 page
 * @returns {OCError}
 */

const generateNotFoundError = searchTerm => {
  return createError(ERROR.NOT_FOUND, {
    payload: {
      searchTerm
    }
  });
};
/**
 * From a GraphQL error exception, returns an object like:
 *
 * @returns {OCError}
 */

const getErrorFromGraphqlException = exception => {
  const firstGraphqlError = get_default()(exception, 'graphQLErrors.0');

  if (firstGraphqlError) {
    let message = get_default()(firstGraphqlError, 'message');

    const sequelizeErrorMessage = get_default()(firstGraphqlError, 'extensions.exception.errors[0].message');

    if (sequelizeErrorMessage) {
      message = `${message}: ${sequelizeErrorMessage}`;
    }

    return createError(get_default()(firstGraphqlError, 'extensions.code'), {
      message,
      payload: firstGraphqlError?.extensions
    });
  } // Handle networkError with error codes


  const httpErrorCode = get_default()(exception, 'networkError.result.error.code');

  if (httpErrorCode) {
    return createError(ERROR.UNKNOWN, {
      message: get_default()(exception, 'networkError.result.error.message')
    });
  }

  if (isError_default()(exception) && (exception.networkError || exception.message.startsWith('Network'))) {
    return createError(ERROR.NETWORK, {
      message: exception.message
    });
  } else if (typeof exception === 'string') {
    // When throwing errors directly from API (`throw new Error('...')`)
    return createError(ERROR.UNKNOWN, {
      message: exception
    });
  } else {
    return createError();
  }
};
/**
 * getErrorFromGraphqlException + formatErrorMessage
 * @param {*} exception
 */

const i18nGraphqlException = (intl, exception) => {
  return formatErrorMessage(intl, getErrorFromGraphqlException(exception));
};
/**
 * From an XMLHttpRequest returned by the PDF service (invoice service), returns a standard error.
 *
 * @returns {OCError}
 */

const getErrorFromPdfService = exception => {
  // Invoice service is reached using an XMLHTTPRequest
  if (exception instanceof TypeError && exception.message === 'Network request failed') {
    return createError(ERROR.NETWORK);
  } // But if something wrong happens, it returns the error from GraphQL API


  return getErrorFromGraphqlException(exception);
};
/**
 * From an XMLHttpRequest returned by the image upload endpoint, returns a standard error.
 *
 * @returns {OCError}
 */

const getErrorFromXhrUpload = exception => {
  if (exception instanceof TypeError && exception.message === 'Network request failed') {
    return createError(ERROR.NETWORK);
  } else if (exception?.json?.error) {
    const error = exception.json.error;

    switch (error.type) {
      case 'INVALID_FILE_SIZE_TOO_BIG':
        return createError(ERROR.INVALID_FILE_SIZE_TOO_BIG, {
          payload: error.data
        });

      case 'INVALID_FILE_MIME_TYPE':
        return createError(ERROR.INVALID_FILE_MIME_TYPE);
    }
  } // But if something wrong happens, it returns the error from GraphQL API


  return getErrorFromGraphqlException(exception);
}; // ---- Internationalization (i18n) ----

const msg = _objectSpread(_objectSpread({}, (0,external_react_intl_.defineMessages)({
  [ERROR.UNKNOWN]: {
    id: "Error.Unknown",
    defaultMessage: [{
      "type": 0,
      "value": "An unknown error occured"
    }]
  },
  [ERROR.BAD_COLLECTIVE_TYPE]: {
    id: "Error.BadCollectiveType",
    defaultMessage: [{
      "type": 0,
      "value": "This profile type is not supported"
    }]
  },
  [ERROR.NETWORK]: {
    id: "Error.Network",
    defaultMessage: [{
      "type": 0,
      "value": "A network error occured, please try again"
    }]
  },
  [ERROR.FORM_FIELD_MIN]: {
    id: "FormError.min",
    defaultMessage: [{
      "type": 0,
      "value": "The value is too low"
    }]
  },
  [ERROR.FORM_FIELD_MAX]: {
    id: "FormError.max",
    defaultMessage: [{
      "type": 0,
      "value": "The value is too high"
    }]
  },
  [ERROR.FORM_FIELD_REQUIRED]: {
    id: "Error.FieldRequired",
    defaultMessage: [{
      "type": 0,
      "value": "This field is required"
    }]
  },
  [ERROR.FORM_FIELD_CHECK_REQUIRED]: {
    id: "Error.FieldCheckRequired",
    defaultMessage: [{
      "type": 0,
      "value": "This must be checked"
    }]
  },
  [ERROR.FORM_FIELD_MIN_LENGTH]: {
    id: "FormError.minLength",
    defaultMessage: [{
      "type": 0,
      "value": "The value is too short"
    }]
  },
  [ERROR.FORM_FIELD_MAX_LENGTH]: {
    id: "FormError.maxLength",
    defaultMessage: [{
      "type": 0,
      "value": "The value is too long"
    }]
  },
  [ERROR.FORM_FIELD_PATTERN]: {
    id: "FormError.pattern",
    defaultMessage: [{
      "type": 0,
      "value": "This value is not formatted properly"
    }]
  },
  [ERROR.FORM_FIELD_INVALID_VALUE]: {
    id: "FormError.InvalidValue",
    defaultMessage: [{
      "type": 0,
      "value": "Invalid value"
    }]
  },
  [ERROR.ACCOUNT_EMAIL_ALREADY_EXISTS]: {
    id: "Error.AccountEmailAlreadyExists",
    defaultMessage: [{
      "type": 0,
      "value": "An account already exists for this email, please "
    }, {
      "type": 8,
      "value": "SignInLink",
      "children": [{
        "type": 0,
        "value": "sign in"
      }]
    }, {
      "type": 0,
      "value": "."
    }]
  },
  [ERROR.INVALID_FILE_SIZE_TOO_BIG]: {
    id: "9EFQ9C",
    defaultMessage: [{
      "type": 0,
      "value": "The file is larger than the maximum allowed ("
    }, {
      "type": 1,
      "value": "max"
    }, {
      "type": 0,
      "value": ")"
    }]
  },
  [ERROR.INVALID_FILE_MIME_TYPE]: {
    id: "X482Yd",
    defaultMessage: [{
      "type": 0,
      "value": "The file type is invalid"
    }]
  },
  [ERROR.TWO_FACTOR_AUTH_CANCELED]: {
    id: "WAUPIM",
    defaultMessage: [{
      "type": 0,
      "value": "Two Factor Authentication Cancelled"
    }]
  }
})), transferwiseMsg);

const formatErrorType = (intl, errorType) => {
  if (msg[errorType]) {
    return intl.formatMessage(msg[errorType], I18nFormatters/* default */.ZP);
  } else {
    return null;
  }
};
/**
 * Translate an error as returned to a human-readable, internationalized error message.
 *
 * @param {function} formatMessage react-intl's formatMessage
 * @param {FormError} error - as returned by `createError`
 */

const formatErrorMessage = (intl, error, fallback = ERROR.UNKNOWN) => {
  if (typeof error === 'string') {
    return error;
  } // No error
  else if (!isOCError(error)) {
    return null;
  } // Known error


  if (error.type !== ERROR.UNKNOWN) {
    if (error.hasI18nMessage && error.message) {
      return error.message;
    } else if (msg[error.type]) {
      return intl.formatMessage(msg[error.type], _objectSpread(_objectSpread(_objectSpread({}, I18nFormatters/* default */.ZP), error.payload), error));
    }
  } // Won't be translated


  if (error.message) {
    return error.message;
  } // Fallback


  return intl.formatMessage(msg[fallback] || msg[ERROR.UNKNOWN]);
};
/**
 * An error that can safely be ignored by logging and reporting. Useful to trick
 * the behavior of libraries/frameworks like NextJS by throwing exceptions at them.
 */

class IgnorableError extends Error {
  constructor(message, ...args) {
    super(message, ...args);
    this.message = `[Please ignore this error] ${message || ''}`;
  }

}

/***/ }),

/***/ 25896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ mastodonShareURL),
/* harmony export */   "Bc": () => (/* binding */ addParentToURLIfMissing),
/* harmony export */   "Bu": () => (/* binding */ getCollectivePageCanonicalURL),
/* harmony export */   "Le": () => (/* binding */ tweetURL),
/* harmony export */   "MM": () => (/* binding */ invoiceServiceURL),
/* harmony export */   "Oh": () => (/* binding */ mailToURL),
/* harmony export */   "Rn": () => (/* binding */ giftCardsDownloadUrl),
/* harmony export */   "Sn": () => (/* binding */ getOauthAppSettingsRoute),
/* harmony export */   "TD": () => (/* binding */ isTrustedRedirectHost),
/* harmony export */   "U3": () => (/* binding */ transactionInvoiceURL),
/* harmony export */   "Uc": () => (/* binding */ twitterProfileUrl),
/* harmony export */   "VZ": () => (/* binding */ facebookShareURL),
/* harmony export */   "XX": () => (/* binding */ expenseInvoiceUrl),
/* harmony export */   "aT": () => (/* binding */ getSettingsRoute),
/* harmony export */   "bN": () => (/* binding */ linkedInShareURL),
/* harmony export */   "gb": () => (/* binding */ getPersonalTokenSettingsRoute),
/* harmony export */   "jz": () => (/* binding */ isRelativeHref),
/* harmony export */   "mR": () => (/* binding */ collectiveInvoiceURL),
/* harmony export */   "x0": () => (/* binding */ getCollectivePageRoute)
/* harmony export */ });
/* unused harmony export objectToQueryString */
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97079);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const invoiceServiceURL = "https://pdf-staging.opencollective.com"; // ---- Utils ----

/**
 * Transform an object into a query string. Strips undefined values.
 *
 * ## Example
 *
 *    > objectToQueryString({a: 42, b: "hello", c: undefined})
 *    "?a=42&b=hello"
 */

const objectToQueryString = options => {
  const definedOptions = lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default()(options, value => value !== undefined);

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(definedOptions)) {
    return '';
  }

  const encodeValue = value => {
    if (Array.isArray(value)) {
      return value.concat.map(encodeURIComponent).join(',');
    }

    return encodeURIComponent(value);
  };

  return `?${Object.entries(definedOptions).map(([key, value]) => `${key}=${encodeValue(value)}`).join('&')}`;
}; // ---- Routes to other Open Collective services ----

const collectiveInvoiceURL = (collectiveSlug, hostSlug, startDate, endDate, format) => {
  return `${invoiceServiceURL}/receipts/collectives/${collectiveSlug}/${hostSlug}/${startDate}/${endDate}/receipt.${format}`;
};
const transactionInvoiceURL = transactionUUID => {
  return `${invoiceServiceURL}/receipts/transactions/${transactionUUID}/receipt.pdf`;
};
const expenseInvoiceUrl = expenseId => {
  return `${invoiceServiceURL}/expense/${expenseId}/invoice.pdf`;
};
/**
 * `POST` endpoint to generate printable gift cards.
 *
 * @param {string} filename - filename **with** extension
 */

const giftCardsDownloadUrl = filename => {
  return `${invoiceServiceURL}/giftcards/from-data/${filename}`;
}; // ---- Routes to external services ----

/**
 * @param opts {object} With the following attributes:
 *  - text: Tweet text
 *  - url: A URL to share in the tweet
 *  - via: A Twitter username to associate with the Tweet, such as your site’s Twitter account (default: opencollect)
 */

const tweetURL = opts => {
  return `https://twitter.com/intent/tweet${objectToQueryString(_objectSpread({
    via: 'opencollect'
  }, opts))}`;
};
/**
 * @param opts {object} With the following attributes:
 *  - text: Toot text
 */

const mastodonShareURL = opts => {
  return `https://toot.kytta.dev/${objectToQueryString(_objectSpread({}, opts))}`;
};
/**
 * Generate a URL from a twitter handle
 */

const twitterProfileUrl = twitterHandle => {
  return `https://twitter.com/${twitterHandle}`;
};
/**
 * @param opts {object} With the following attributes:
 *  - u: A URL to share in the tweet
 */

const facebookShareURL = opts => {
  return `https://www.facebook.com/sharer/sharer.php${objectToQueryString(opts)}`;
};
/**
 * @param opts {object} With the following attributes:
 *  - url: The URL of the page that you wish to share.
 *  - title: The title value that you wish you use.
 *  - summary: The description that you wish you use.
 *  - source: The source of the content (e.g., your website or application name)
 *  - mini: A required argument whose value must always be true (default: true)
 */

const linkedInShareURL = opts => {
  return `https://www.linkedin.com/shareArticle${objectToQueryString(_objectSpread({
    mini: 'true'
  }, opts))}`;
};
/**
 * @param address {string} the recipien email (default: '')
 * @param opts {object} With the following attributes:
 *  - cc
 *  - subject
 *  - body
 */

const mailToURL = (address = '', opts) => {
  return `mailto://${address}${objectToQueryString(opts)}`;
};
const getSettingsRoute = (account, section = null) => {
  const parent = account.parentCollective || account.parent;
  const adminPath = section ? `${account.slug}/admin/${section}` : `${account.slug}/admin`;

  if (parent) {
    if (account.type === _constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.EVENT */ .eV.EVENT) {
      return `/${parent?.slug || 'collective'}/events/${adminPath}`;
    } else if (account.type === _constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.PROJECT */ .eV.PROJECT) {
      return `/${parent?.slug || 'collective'}/projects/${adminPath}`;
    }
  }

  return `/${adminPath}`;
};
const getOauthAppSettingsRoute = (account, app) => {
  return getSettingsRoute(account, `for-developers/oauth/${app.id}`);
};
const getPersonalTokenSettingsRoute = (account, token) => {
  return getSettingsRoute(account, `for-developers/personal-tokens/${token.id}`);
};
const getCollectivePageCanonicalURL = account => {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getWebsiteUrl */ .ls)() + getCollectivePageRoute(account);
};
const getCollectivePageRoute = account => {
  if (!account) {
    return '';
  } else if (account.type === _constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.EVENT */ .eV.EVENT) {
    const parent = account.parentCollective || account.parent;
    return `/${parent?.slug || 'collective'}/events/${account.slug}`;
  } else if (account.type === _constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.PROJECT */ .eV.PROJECT) {
    const parent = account.parentCollective || account.parent;
    return `/${parent?.slug || 'collective'}/projects/${account.slug}`;
  } else {
    return `/${account.slug}`;
  }
};
const TRUSTED_DOMAINS = ['octobox.io', 'dotnetfoundation.org', 'hopin.com', 'app.papertree.earth'];
const TRUSTED_ROOT_DOMAINS = ['opencollective.com', 'opencollective.foundation', 'oscollective.org'];
const isTrustedRedirectHost = host => {
  if (TRUSTED_DOMAINS.includes(host)) {
    return true;
  }

  return TRUSTED_ROOT_DOMAINS.some(domain => {
    return host === domain || host.endsWith(`.${domain}`);
  });
};
const addParentToURLIfMissing = (router, account, url = '', queryParams = undefined, options = {}) => {
  const query = router.query;

  if ([_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.EVENT */ .eV.EVENT, _constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.PROJECT */ .eV.PROJECT].includes(account?.type) && !query.parentCollectiveSlug && !(router.query.eventSlug && router.query.collectiveSlug)) {
    const urlWithParent = getCollectivePageRoute(account) + url;
    const prefix = options?.prefix || '';
    router.push({
      pathname: `${prefix}${urlWithParent}`,
      query: queryParams
    }, null, {
      shallow: true
    });
  }
};
const isRelativeHref = href => {
  href = href.trim();
  return !href || href.startsWith('#') || href === '/' || new RegExp('^/[^/\\\\]+').test(href);
};

/***/ })

};
;