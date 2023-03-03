"use strict";
exports.id = 9468;
exports.ids = [9468];
exports.modules = {

/***/ 47988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p": () => (/* binding */ CONFIRMATION_MODAL_TERMINATE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["header", "body", "children", "onClose", "type", "isDanger", "isSuccess", "cancelLabel", "continueLabel", "cancelHandler", "continueHandler", "disableSubmit"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  cancel: {
    id: "actions.cancel",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel"
    }]
  }
});
const confirmBtnMsgs = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  confirm: {
    id: "confirm",
    defaultMessage: [{
      "type": 0,
      "value": "Confirm"
    }]
  },
  delete: {
    id: "actions.delete",
    defaultMessage: [{
      "type": 0,
      "value": "Delete"
    }]
  },
  remove: {
    id: "Remove",
    defaultMessage: [{
      "type": 0,
      "value": "Remove"
    }]
  }
});
/**
 * A special value to return from the `continueHandler` to terminate the modal. Its loading state
 * will therefore not be updated to false, which will prevent the "Warning: Can't perform a React state update on an unmounted component"
 * issue.
 */

const CONFIRMATION_MODAL_TERMINATE = {
  __CONFIRMATION_MODAL_TERMINATE: true
};
/**
 * ConfirmationModal component. Uses `StyledModal` to create a reusable modal mainly for
 * confirmation purpose.
 */

const ConfirmationModal = _ref => {
  let {
    header,
    body,
    children,
    onClose,
    type,
    isDanger,
    isSuccess,
    cancelLabel,
    continueLabel,
    cancelHandler,
    continueHandler,
    disableSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [submitting, setSubmitting] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    role: "alertdialog",
    width: "570px",
    onClose: onClose,
    trapFocus: true
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_4__/* .ModalHeader */ .xB, {
      onClose: onClose,
      children: header
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_4__/* .ModalBody */ .fe, {
      pt: 2,
      children: children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        children: body
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_4__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: ['center', 'flex-end'],
        flexWrap: "Wrap",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          mx: 20,
          my: 1,
          autoFocus: true,
          minWidth: 140,
          onClick: cancelHandler || onClose,
          disabled: submitting,
          "data-cy": "confirmation-modal-cancel",
          children: cancelLabel || formatMessage(messages.cancel)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          my: 1,
          minWidth: 140,
          buttonStyle: isDanger ? 'danger' : isSuccess ? 'success' : 'primary',
          "data-cy": "confirmation-modal-continue",
          loading: submitting,
          disabled: disableSubmit,
          onClick: async () => {
            let result;

            try {
              setSubmitting(true);
              result = await continueHandler();
            } finally {
              if (result !== CONFIRMATION_MODAL_TERMINATE) {
                setSubmitting(false);
              }
            }
          },
          children: continueLabel || formatMessage(confirmBtnMsgs[type])
        })]
      })
    })]
  }));
};

ConfirmationModal.defaultProps = {
  type: 'confirm'
};
/** @component */

ConfirmationModal.__docgenInfo = {
  "description": "ConfirmationModal component. Uses `StyledModal` to create a reusable modal mainly for\nconfirmation purpose.",
  "methods": [],
  "displayName": "ConfirmationModal",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'confirm'",
        "computed": false
      },
      "description": "You can pass a type here to auto-set labels to remove/delete/confirm...etc",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'confirm'",
          "computed": false
        }, {
          "value": "'delete'",
          "computed": false
        }, {
          "value": "'remove'",
          "computed": false
        }]
      },
      "required": false
    },
    "header": {
      "description": "header of the confirmation modal",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "children": {
      "description": "body of the confirmation modal",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "body": {
      "description": "Body of the confirmation modal, used in a paragraph if there's no children",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "onClose": {
      "description": "handles how the modal is closed",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "continueHandler": {
      "description": "handles onClick continue button",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "isDanger": {
      "description": "If true, a danger style button will be used for the main button",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isSuccess": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disableSubmit": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "cancelHandler": {
      "description": "handles onClick cancel button. Defaults to `onClose` prop.",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "continueLabel": {
      "description": "continue button label of the confirmation modal. Defaults to `Confirm`.",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "cancelLabel": {
      "description": "cancel button label of the confirmation modal. Defaults to `Cancel`.",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmationModal);

/***/ }),

/***/ 27596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ DEFAULT_AMOUNT_STYLES)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19377);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80642);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93129);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/** Default styles for the amount (not including currency) */


const DEFAULT_AMOUNT_STYLES = {
  letterSpacing: 0,
  fontWeight: 'bold',
  color: 'black.900'
};
const EMPTY_AMOUNT_PLACEHOLDER = '--.--';
/**
 * A practical component to format amounts and their intervals with proper
 * internationalization support.
 */

const FormattedMoneyAmount = ({
  formatWithSeparators,
  abbreviateInterval,
  currency,
  precision,
  amount,
  interval,
  frequency,
  amountStyles,
  showCurrencyCode,
  currencyCodeStyles,
  isCrypto
}) => {
  if (!currency) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: EMPTY_AMOUNT_PLACEHOLDER
    }));
  }

  const formattedAmount = isNaN(amount) || lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(amount) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
    children: EMPTY_AMOUNT_PLACEHOLDER
  })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread({
    value: amount,
    currency: currency,
    precision: precision,
    formatWithSeparators: formatWithSeparators
  }, amountStyles));

  if (frequency) {
    interval = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .getIntervalFromContributionFrequency */ .Pw)(frequency);
  }

  const currencyCode = showCurrencyCode ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, currencyCodeStyles), {}, {
    children: currency
  })) : '';

  if (isCrypto) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: `${amount} ${currency}`
    }));
  } else if (!interval || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].oneTime) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "Amount",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }],
      values: {
        amount: formattedAmount,
        currencyCode
      }
    });
  } else if (abbreviateInterval) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "AmountInterval",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }, {
        "type": 0,
        "value": " / "
      }, {
        "type": 5,
        "value": "interval",
        "options": {
          "month": {
            "value": [{
              "type": 0,
              "value": "mo."
            }]
          },
          "year": {
            "value": [{
              "type": 0,
              "value": "yr."
            }]
          },
          "other": {
            "value": []
          }
        }
      }],
      values: {
        amount: formattedAmount,
        interval: interval ?? '',
        currencyCode
      }
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "AmountIntervalLong",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }, {
        "type": 0,
        "value": " / "
      }, {
        "type": 5,
        "value": "interval",
        "options": {
          "month": {
            "value": [{
              "type": 0,
              "value": "month"
            }]
          },
          "year": {
            "value": [{
              "type": 0,
              "value": "year"
            }]
          },
          "other": {
            "value": []
          }
        }
      }],
      values: {
        amount: formattedAmount,
        interval: interval ?? '',
        currencyCode
      }
    });
  }
};

FormattedMoneyAmount.defaultProps = {
  abbreviate: false,
  abbreviateInterval: false,
  precision: _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyPrecision.DEFAULT */ .E.DEFAULT,
  amountStyles: DEFAULT_AMOUNT_STYLES,
  showCurrencyCode: true
};
FormattedMoneyAmount.__docgenInfo = {
  "description": "A practical component to format amounts and their intervals with proper\ninternationalization support.",
  "methods": [],
  "displayName": "FormattedMoneyAmount",
  "props": {
    "abbreviate": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false
    },
    "abbreviateInterval": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Abbreviate the interval (eg. year => yr.)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "precision": {
      "defaultValue": {
        "value": "CurrencyPrecision.DEFAULT",
        "computed": true
      },
      "description": "How many numbers should we display after the comma",
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
    "amountStyles": {
      "defaultValue": {
        "value": "{ letterSpacing: 0, fontWeight: 'bold', color: 'black.900' }",
        "computed": false
      },
      "description": "Style for the amount (eg. `$10`). Doesn't apply on interval",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "showCurrencyCode": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Whether to show the full currency code (ie. USD)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "amount": {
      "description": "The amount to display, in cents",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "currency": {
      "description": "The currency (eg. `USD`, `EUR`...etc)",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "interval": {
      "description": "An interval that goes with the amount",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'month'",
          "computed": false
        }, {
          "value": "'year'",
          "computed": false
        }, {
          "value": "'oneTime'",
          "computed": false
        }]
      },
      "required": false
    },
    "frequency": {
      "description": "ContributionFrequency from GQLV2",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'MONTHLY'",
          "computed": false
        }, {
          "value": "'YEARLY'",
          "computed": false
        }, {
          "value": "'ONETIME'",
          "computed": false
        }]
      },
      "required": false
    },
    "currencyCodeStyles": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "formatWithSeparators": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattedMoneyAmount);

/***/ }),

/***/ 74770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ isEmptyValue),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41032);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2331);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["content", "collapsable", "maxHeight", "maxCollapsedHeight", "collapsePadding", "hideViewMoreLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * React-Quill usually saves something like `<p><br/></p` when saving with an empty
 * editor. This function tries to detect this and returns true if there's no real
 * text, image or iframe contents.
 */



const isEmptyValue = value => {
  if (!value) {
    return true;
  } else if (value.length > 50) {
    // Running the regex on long strings can be costly, and there's very few chances
    // to have a blank content with tons of empty markup.
    return false;
  } else if (/(<img)|(<iframe)|(<video)/.test(value)) {
    // If the content has no text but has an image or an iframe (video) then it's not blank
    return false;
  } else {
    // Strip all tags and check if there's something left
    const cleanStr = value.replace(/(<([^>]+)>)/gi, '');
    return cleanStr.length === 0;
  }
};
const ReadFullLink = styled_components__WEBPACK_IMPORTED_MODULE_5___default().a.withConfig({
  displayName: "HTMLContent__ReadFullLink",
  componentId: "sc-5326of-0"
})(["cursor:pointer;font-size:12px;> svg{vertical-align:baseline;}"]);
const InlineDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "HTMLContent__InlineDisplayBox",
  componentId: "sc-5326of-1"
})(["overflow-y:hidden;", ""], props => props.maxHeight && `max-height: ${props.maxHeight + 20}px;`);
const CollapsedDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "HTMLContent__CollapsedDisplayBox",
  componentId: "sc-5326of-2"
})(["overflow-y:hidden;", " -webkit-mask-image:linear-gradient(to bottom,black 50%,transparent 100%);mask-image:linear-gradient(to bottom,black 50%,transparent 100%);"], props => props.maxHeight && `max-height: ${props.maxCollapsedHeight + 20}px;`);
/**
 * `RichTextEditor`'s associate, this component will display raw HTML with some CSS
 * resets to ensure we don't mess with the styles. Content can be omitted if you're
 * just willing to take the styles, for example to match the content displayed in the
 * editor with how it's rendered on the page.
 *
 * ⚠️ Be careful! This component will pass content to `dangerouslySetInnerHTML` so
 * always ensure `content` is properly sanitized!
 */

const HTMLContent = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ref => {
  let {
    content,
    collapsable = false,
    maxHeight,
    maxCollapsedHeight = 20,
    collapsePadding = 1,
    hideViewMoreLink = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isCollapsed, setIsCollapsed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const DisplayBox = !isCollapsed || isOpen ? InlineDisplayBox : CollapsedDisplayBox;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (collapsable && contentRef?.current?.clientHeight > maxCollapsedHeight + collapsePadding) {
      setIsCollapsed(true);
    }
  }, [content]);

  if (!content) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", _objectSpread({}, props));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(DisplayBox, _objectSpread({
      ref: contentRef,
      maxHeight: maxHeight,
      maxCollapsedHeight: maxCollapsedHeight,
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, props)), !isOpen && isCollapsed && !hideViewMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ReadFullLink, _objectSpread(_objectSpread({
      onClick: () => setOpen(true)
    }, props), {}, {
      role: "button",
      tabIndex: 0,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setOpen(true);
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "ExpandDescription",
        defaultMessage: [{
          "type": 0,
          "value": "Read full description"
        }]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__.CaretDown, {
        size: "10px"
      })]
    })), isOpen && isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ReadFullLink, _objectSpread(_objectSpread({
      onClick: () => setOpen(false)
    }, props), {}, {
      role: "button",
      tabIndex: 0,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setOpen(false);
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "W/V6+Y",
        defaultMessage: [{
          "type": 0,
          "value": "Collapse"
        }]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__.CaretUp, {
        size: "10px"
      })]
    }))]
  });
}).withConfig({
  displayName: "HTMLContent",
  componentId: "sc-5326of-3"
})(["width:100%;line-height:1.75em;overflow-wrap:break-word;h1,h2,h3{margin:0;font-weight:normal;text-align:left;}h3{font-size:1.25em;margin-bottom:0.25em;}figure{margin:0;&[data-trix-content-type='--embed-iframe-video']{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;iframe{position:absolute;top:0;left:0;width:100%;height:100%;}}&[data-trix-content-type='--embed-iframe-anchorFm']{iframe{min-height:300px;}}}img{max-width:100%;}.ql-align-center{text-align:center;}.ql-align-right{text-align:right;}.ql-align-left{text-align:left;}blockquote{font-size:1em;border-left:5px solid #e9e9e9;background:white;color:#757677;margin:0;padding:16px;}pre{font-size:0.85em;background:#f6f8fa;color:#333;border:none;padding:16px;font-family:monospace;overflow-x:auto;}", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_6__.typography, styled_system__WEBPACK_IMPORTED_MODULE_6__.space, props => {
  let primaryColor = props.theme.colors.primary[500];
  let secondaryColor = props.theme.colors.primary[400];
  const luminance = (0,polished__WEBPACK_IMPORTED_MODULE_3__.getLuminance)(primaryColor);

  if (luminance < 0 || luminance > 0.9) {
    return null;
  } else if (luminance < 0.06) {
    primaryColor = props.theme.colors.primary[400];
    secondaryColor = props.theme.colors.primary[200];
  } else if (luminance > 0.6) {
    primaryColor = props.theme.colors.primary[900];
    secondaryColor = props.theme.colors.primary[700];
  }

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["a{color:", ";&:hover{color:", ";}}"], primaryColor, secondaryColor);
});
HTMLContent.defaultProps = {
  fontSize: '14px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLContent);

/***/ }),

/***/ 29242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29925);




const AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

const LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPlaceholder);

/***/ }),

/***/ 16738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["size", "items", "children", "selected", "buttonProps", "buttonPropsBuilder", "onChange", "combo", "disabled", "customBorderRadius"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const StyledButtonItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledButtonSet__StyledButtonItem",
  componentId: "sc-6bt6g-0"
})(["border-radius:0;line-height:1.5;flex-grow:1;border-color:", ";transition:color 0.2s,background 0.1s,font-size 30ms;&:active p{color:white;}&:hover,&:focus{z-index:9;}&::-moz-focus-inner{border:0;}&:first-child{border-radius:", ";}&:not(:first-child){margin-left:-1px;}&:last-child{border-radius:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.300'), ({
  customBorderRadius
}) => `${customBorderRadius} 0 0 ${customBorderRadius}`, ({
  combo,
  customBorderRadius
}) => combo ? '0' : `0 ${customBorderRadius} ${customBorderRadius} 0`);
StyledButtonItem.propTypes = {
  combo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

const StyledButtonSet = _ref => {
  let {
    size,
    items,
    children,
    selected,
    buttonProps,
    buttonPropsBuilder,
    onChange,
    combo,
    disabled,
    customBorderRadius
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    display: "flex"
  }, props), {}, {
    children: items.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledButtonItem, _objectSpread(_objectSpread(_objectSpread({
      combo: combo || undefined,
      color: item === selected ? 'white' : 'black.400',
      buttonSize: size,
      buttonStyle: item === selected ? 'primary' : undefined,
      onClick: onChange && (() => onChange(item)),
      className: item === selected ? 'selected' : undefined,
      disabled: disabled,
      "aria-pressed": item === selected,
      type: "button",
      py: "8px",
      customBorderRadius: customBorderRadius
    }, buttonProps), buttonPropsBuilder ? buttonPropsBuilder({
      item,
      index,
      isSelected: item === selected
    }) : {}), {}, {
      children: children({
        item,
        isSelected: item === selected
      })
    }), item))
  }));
};

StyledButtonSet.defaultProps = {
  combo: false,
  size: 'medium',
  fontSize: '14px',
  customBorderRadius: '4px'
};
StyledButtonSet.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledButtonSet",
  "props": {
    "combo": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Setting to style last item to look good in combination with a text input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "size": {
      "defaultValue": {
        "value": "'medium'",
        "computed": false
      },
      "description": "Based on the design system theme",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'small'",
          "computed": false
        }, {
          "value": "'medium'",
          "computed": false
        }, {
          "value": "'large'",
          "computed": false
        }, {
          "value": "'tiny'",
          "computed": false
        }]
      },
      "required": false
    },
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "required": false
    },
    "customBorderRadius": {
      "defaultValue": {
        "value": "'4px'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "items": {
      "description": "A list of elements to build buttons uppon",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "any"
        }
      },
      "required": true
    },
    "children": {
      "description": "Button child content renderer. Get passed an object like { item, isSelected }",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "selected": {
      "description": "Currently selected item",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "onChange": {
      "description": "An optional func called with the new item when option changes",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "disabled": {
      "description": "Disable user input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "buttonPropsBuilder": {
      "description": "Similar to `buttonProps` but allow props to be added dynamically based on item",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "buttonProps": {
      "description": "Button Props",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledButtonSet);

/***/ }),

/***/ 54029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22133);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28992);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_currency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38198);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17632);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78080);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32631);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);


const _excluded = ["currency", "currencyDisplay", "min", "max", "precision", "defaultValue", "value", "onBlur", "onChange", "isEmpty", "hasCurrencyPicker", "onCurrencyChange", "availableCurrencies"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const formatCurrencyName = (currency, currencyDisplay) => {
  if (currencyDisplay === 'SYMBOL') {
    return (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .getCurrencySymbol */ .jK)(currency);
  } else if (currencyDisplay === 'CODE') {
    return currency;
  } else {
    return `${(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .getCurrencySymbol */ .jK)(currency)} ${currency}`;
  }
};

const parseValueFromEvent = (e, precision, ignoreComma) => {
  if (e.target.value === '') {
    return null;
  } else {
    const parsedNumber = parseFloat(ignoreComma ? e.target.value.replace(',', '') : e.target.value);
    return isNaN(parsedNumber) ? NaN : parsedNumber.toFixed(precision);
  }
};
/** Formats value is valid, fallsback on rawValue otherwise */


const getValue = (value, rawValue, isEmpty) => {
  if (isEmpty) {
    return '';
  }

  return isNaN(value) || value === null ? rawValue : value / 100;
};

const getError = (curVal, minAmount, required) => {
  return Boolean(required && lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(curVal) || minAmount && curVal < minAmount);
};

const generateCurrencyOptions = (intl, availableCurrencies) => {
  const currencyDisplayNames = (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_12__/* .getIntlDisplayNames */ ._)(intl.locale, 'currency');
  return availableCurrencies.map(currency => {
    const currencyName = currencyDisplayNames.of(currency);
    const emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__.getEmojiByCurrencyCode)(currency);
    return {
      value: currency,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        title: currencyName,
        children: [emoji && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          children: emoji
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          whiteSpace: "nowrap",
          ml: 1,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            color: "black.800",
            children: currency
          }), ` `, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            color: "black.500",
            children: ["(", currencyName, ")"]
          })]
        })]
      })
    };
  });
};

const getSelectedCurrency = value => {
  const emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_3__.getEmojiByCurrencyCode)(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
    children: [emoji && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
      children: emoji
    }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
      color: "black.800",
      children: value
    })]
  });
};

const CurrencyPicker = ({
  availableCurrencies,
  value,
  onChange
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const currencyOptions = generateCurrencyOptions(intl, availableCurrencies);
  const selectedCurrency = getSelectedCurrency(value);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
    inputId: "currency-picker",
    "data-cy": "currency-picker",
    placeholder: "----",
    error: !value,
    isSearchable: availableCurrencies?.length > 10,
    options: currencyOptions,
    value: !value ? null : {
      value,
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        minWidth: 200,
        children: selectedCurrency
      })
    },
    width: 102,
    onChange: ({
      value
    }) => onChange(value),
    onInputChange: inputValue => inputValue.length <= 3 ? inputValue : inputValue.substr(0, 3) // Limit search length to 3 characters
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
const StyledInputAmount = _ref => {
  let {
    currency,
    currencyDisplay,
    min,
    max,
    precision,
    defaultValue,
    value,
    onBlur,
    onChange,
    isEmpty,
    hasCurrencyPicker,
    onCurrencyChange,
    availableCurrencies
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [rawValue, setRawValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(value || defaultValue || '');
  const isControlled = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(value);
  const hasMin = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(min);
  const curValue = isControlled ? getValue(value, rawValue, isEmpty) : undefined;
  const minAmount = hasMin ? min / 100 : min;

  const dispatchValue = (e, parsedValue) => {
    if (isControlled) {
      setRawValue(e.target.value);
    }

    if (onChange) {
      const valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (parsedValue === null || isNaN(parsedValue)) {
        onChange(parsedValue, e);
      } else if (!e.target.checkValidity() || parsedValue !== valueWithIgnoredComma) {
        onChange(isNaN(e.target.value) ? NaN : null, e);
      } else {
        onChange((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .floatAmountToCents */ .VH)(parsedValue), e);
      }
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    maxWidth: "10em",
    step: "0.01"
  }, props), {}, {
    min: minAmount,
    max: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(max) ? max : max / 100,
    type: "number",
    inputMode: "decimal",
    error: props.error || getError(curValue, minAmount, props.required),
    defaultValue: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(defaultValue) ? undefined : defaultValue / 100,
    value: curValue,
    prependProps: !hasCurrencyPicker ? {
      color: props.disabled ? 'black.400' : 'black.800'
    } : {
      p: 0
    },
    prepend: !hasCurrencyPicker ? formatCurrencyName(currency, currencyDisplay) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      bgColor: "black.50",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(CurrencyPicker, {
        onChange: onCurrencyChange,
        value: currency,
        availableCurrencies: availableCurrencies
      })
    }),
    onWheel: e => {
      e.preventDefault();
      e.target.blur();
    },
    onChange: e => {
      e.stopPropagation();
      dispatchValue(e, parseValueFromEvent(e, precision));
    },
    onBlur: e => {
      // Clean number if valid (ie. 41.1 -> 41.10)
      const parsedNumber = parseValueFromEvent(e, precision);
      const valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (e.target.checkValidity() && !isNaN(parsedNumber) && parsedNumber !== null && valueWithIgnoredComma === parsedNumber) {
        e.target.value = parsedNumber.toString();
        dispatchValue(e, parsedNumber);
      }

      if (onBlur) {
        onBlur(e);
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
  availableCurrencies: _lib_constants_currency__WEBPACK_IMPORTED_MODULE_13__/* .Currency */ .F
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputAmount);

/***/ }),

/***/ 37066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ TwoFactorAuthRequiredMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62131);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
const _excluded = ["borderWidth", "noTitle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const TwoFactorAuthRequiredMessage = _ref => {
  let {
    borderWidth = '1px',
    noTitle = false
  } = _ref,
      flexProps = _objectWithoutProperties(_ref, _excluded);

  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, _objectSpread(_objectSpread({
    justifyContent: "center",
    alignItems: "flex-start"
  }, flexProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      width: "100%",
      maxWidth: 496,
      py: "16px",
      textAlign: "center",
      borderWidth: borderWidth,
      children: [!noTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Strong */ .cK, {
        fontSize: "28px",
        lineHeight: "36px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ScX/93",
          defaultMessage: [{
            "type": 0,
            "value": "2FA Required"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        my: "21px",
        borderColor: "black.200"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        my: "41px",
        px: "36px",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          flex: "1 0 164px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            src: "/static/images/lock-illustration.png",
            alt: "",
            width: 164,
            height: 164
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          textAlign: "left",
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "UoQDcG",
            defaultMessage: [{
              "type": 0,
              "value": "Your organization requires you to have two-factor authentication activated to continue"
            }]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        my: "16px",
        borderColor: "black.400"
      }), LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getSettingsRoute */ .aT)(LoggedInUser.collective, 'user-security'),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            buttonStyle: "primary",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "st/dW2",
              defaultMessage: [{
                "type": 0,
                "value": "Activate 2FA"
              }]
            })
          })
        })
      })]
    })
  }));
};
TwoFactorAuthRequiredMessage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TwoFactorAuthRequiredMessage",
  "props": {
    "borderWidth": {
      "defaultValue": {
        "value": "'1px'",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "union",
        "raw": "string | number",
        "elements": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "description": ""
    },
    "noTitle": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    }
  }
};

/***/ }),

/***/ 47483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CreditCard = _ref => {
  let {
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    width: size || 26,
    height: size || 18,
    viewBox: "0 0 26 18",
    fill: "none"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
      id: "Credit Card",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
        id: "Rectangle",
        width: "26",
        height: "18",
        rx: "3",
        fill: "#0061E0",
        stroke: "none"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
        id: "Rectangle_2",
        x: "18",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
        id: "Rectangle_3",
        x: "13",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
        id: "Rectangle_4",
        x: "8",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
        id: "Rectangle_5",
        x: "3",
        y: "12",
        width: "4",
        height: "2",
        rx: "1",
        fill: "#8FC7FF",
        stroke: "none"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("rect", {
        id: "Rectangle_6",
        x: "3",
        y: "3",
        width: "8",
        height: "6",
        rx: "2",
        fill: "white",
        stroke: "none"
      })]
    })
  }));
};

CreditCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreditCard",
  "props": {
    "size": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditCard);

/***/ }),

/***/ 19740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* eslint-disable react/no-unknown-property */




const GiftCard = props => {
  const gradientID = `gradient-${props.color.replace('#', '')}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    width: props.size || 26,
    height: props.size || 18,
    viewBox: "0 0 26 18",
    fill: "none"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("rect", {
      width: "26",
      height: "18",
      rx: "3",
      fill: "#0061E0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "25",
      height: "17",
      rx: "1.5",
      fill: "white",
      stroke: "#DCDEE0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("mask", {
      id: "mask0",
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "26",
      height: "18",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("rect", {
        width: "26",
        height: "18",
        rx: "2",
        fill: "white"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
      mask: "url(#mask1)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
        d: "M8.07049e-08 1.996C4.1109e-08 0.891429 0.89543 0 2 0H24C25.1046 0 26 0.894228 26 1.9988C26 4.23868 26 7.86701 26 10.2455C10.855 8.46077 15.99 16.7119 0 15.2517C3.66594e-07 11.821 1.98615e-07 5.28523 8.07049e-08 1.996Z",
        fill: `url(#${gradientID})`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
        opacity: "0.4",
        d: "M0 14.9949C12.2525 15.2461 9.91251 6.1225 26 9.93096C26 10.0147 26 10.0565 26 10.2239C10.855 8.38248 15.99 16.7527 0 15.2461C5.02799e-07 10.3913 0 15.2042 0 14.9949Z",
        fill: "white",
        fillOpacity: "0.48"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
        opacity: "0.24",
        d: "M0 10.2856C9.58751 10.2856 14.5925 14.7595 26 12.9198C26 12.418 26 15.094 26 15.4285C25.3175 15.4285 2.925 15.4285 0 15.4285C5.02799e-07 10.5783 0 10.4947 0 10.2856Z",
        fill: "white",
        fillOpacity: "0.48"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("linearGradient", {
        id: gradientID,
        x1: "0",
        y1: "0",
        x2: "13.5422",
        y2: "22.8211",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("stop", {
          stopColor: props.color
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("stop", {
          offset: "1",
          stopColor: (0,polished__WEBPACK_IMPORTED_MODULE_1__.lighten)(0.24, props.color)
        })]
      })
    })]
  }));
};

GiftCard.defaultProps = {
  color: '#145ECC'
};
GiftCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GiftCard",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'#145ECC'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "size": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GiftCard);

/***/ }),

/***/ 38198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Currency),
/* harmony export */   "b": () => (/* binding */ PayPalSupportedCurrencies)
/* harmony export */ });
const Currency = ['USD', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];
/*
 * Supported Currencies by PayPal for use with payments and as currency balances.
 * Reference: https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/
 *
 * TODO: There's few currencies (see above list) which decimal amounts are not supported or for in-country
 *  payouts only. We need to investigate and add support for these if possible.
 *
 */

const PayPalSupportedCurrencies = ['AUD', 'CAD', 'CZK', 'DKK', 'EUR', 'HKD', 'ILS', 'MXN', 'NZD', 'NOK', 'PHP', 'PLN', 'GBP', 'RUB', 'SGD', 'SEK', 'CHF', 'THB', 'USD'];

/***/ }),

/***/ 80642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getGQLV2FrequencyFromInterval": () => (/* binding */ getGQLV2FrequencyFromInterval)
/* harmony export */ });
const INTERVALS = {
  oneTime: 'oneTime',
  month: 'month',
  year: 'year',
  flexible: 'flexible'
};
const getGQLV2FrequencyFromInterval = interval => {
  switch (interval) {
    case INTERVALS.month:
      return 'MONTHLY';

    case INTERVALS.year:
      return 'YEARLY';

    case INTERVALS.flexible:
      return 'FLEXIBLE';

    default:
      return 'ONETIME';
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTERVALS);

/***/ }),

/***/ 24317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ORDER_STATUS)
/* harmony export */ });
/*
 * Constants for the order status
 *
 * pending -> paid (one-time)
 * pending -> active (subscription)
 * pending -> active -> cancelled (subscription)
 * pending -> cancelled
 * pending -> expired
 */
const ORDER_STATUS = {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  DISPUTED: 'DISPUTED',
  ERROR: 'ERROR',
  EXPIRED: 'EXPIRED',
  IN_REVIEW: 'IN_REVIEW',
  NEW: 'NEW',
  PAID: 'PAID',
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PLEDGED: 'PLEDGED',
  REFUNDED: 'REFUNDED',
  REJECTED: 'REJECTED',
  REQUIRE_CLIENT_CONFIRMATION: 'REQUIRE_CLIENT_CONFIRMATION'
};

/***/ }),

/***/ 33054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e9": () => (/* binding */ TRANSACTION_SETTLEMENT_STATUS),
/* harmony export */   "em": () => (/* binding */ TransactionTypes),
/* harmony export */   "wz": () => (/* binding */ TransactionKind)
/* harmony export */ });
/* unused harmony exports OC_FEE_PERCENT, HOST_FEE_PERCENT */
/** @module constants/transactions */

/** Percentage that Open Collective charges per transaction: 5% */
const OC_FEE_PERCENT = 5;
/** Default per transaction host fee percentage */

const HOST_FEE_PERCENT = 5;
/** Types of Transactions */

const TransactionTypes = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};
const TRANSACTION_SETTLEMENT_STATUS = {
  INVOICED: 'INVOICED',
  SETTLED: 'SETTLED',
  OWED: 'OWED'
};
const TransactionKind = {
  /** Transactions coming from the "Add Funds" */
  ADDED_FUNDS: 'ADDED_FUNDS',

  /** Transactions coming from the "Contribution Flow" */
  CONTRIBUTION: 'CONTRIBUTION',

  /** Transactions coming from the "Expense Flow" */
  EXPENSE: 'EXPENSE',

  /** The host fee going to the Host */
  HOST_FEE: 'HOST_FEE',

  /** Part of the Host fee going from the Host to the Platform */
  HOST_FEE_SHARE: 'HOST_FEE_SHARE',

  /** Amount given by Fiscal Hosts to cover payment processor fee on refunds */
  PAYMENT_PROCESSOR_COVER: 'PAYMENT_PROCESSOR_COVER',

  /** Reserved keyword in case we want to use in the future */
  PAYMENT_PROCESSOR_FEE: 'PAYMENT_PROCESSOR_FEE',

  /** Reserved keyword in case we want to use in the future */
  PLATFORM_FEE: 'PLATFORM_FEE',

  /** Financial contribution to Open Collective added on top of another contribution */
  PLATFORM_TIP: 'PLATFORM_TIP',

  /** For prepaid budgets */
  PREPAID_PAYMENT_METHOD: 'PREPAID_PAYMENT_METHOD',

  /** Debt related to Host Fee Share collection */
  HOST_FEE_SHARE_DEBT: 'HOST_FEE_SHARE_DEBT',

  /** Debt related to Platform Tip collection */
  PLATFORM_TIP_DEBT: 'PLATFORM_TIP_DEBT',

  /** Transfer of the balance between Account and Host or Child and Parent */
  BALANCE_TRANSFER: 'BALANCE_TRANSFER'
};

/***/ }),

/***/ 15078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B1": () => (/* binding */ getNextChargeDate),
/* harmony export */   "EB": () => (/* binding */ encodeDateInterval),
/* harmony export */   "GF": () => (/* binding */ simpleDateToISOString),
/* harmony export */   "Pw": () => (/* binding */ getIntervalFromContributionFrequency),
/* harmony export */   "Zz": () => (/* binding */ convertDateToApiUtc),
/* harmony export */   "cq": () => (/* binding */ convertDateFromApiUtc),
/* harmony export */   "dr": () => (/* binding */ parseDateInterval),
/* harmony export */   "fM": () => (/* binding */ toIsoDateStr),
/* harmony export */   "j9": () => (/* binding */ getDateFromValue),
/* harmony export */   "qb": () => (/* binding */ isValidDate),
/* harmony export */   "xR": () => (/* binding */ stripTime)
/* harmony export */ });
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96839);
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_padStart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80642);
/* harmony import */ var _dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82114);



/**
 * For a given date, return the next charge date.
 *
 * @param {Date} firstChargeDate
 * @param {month|year} interval
 */

const getNextChargeDate = (firstChargeDate, interval) => {
  if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].month) {
    if (firstChargeDate.getDate() > 15) {
      return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 2);
    }

    return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 1);
  } else if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].year) {
    return new Date(firstChargeDate.getFullYear() + 1, firstChargeDate.getMonth());
  } else {
    return null;
  }
};
/**
 * Format a datetime object to an ISO date like `YYYY-MM-DD`
 */

const toIsoDateStr = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();
  return `${year}-${lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default()(month.toString(), 2, '0')}-${lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default()(day.toString(), 2, '0')}`;
};
/**
 * From an order frequency provided as `ContributionFrequency` GQLV2 enum, returns an interval
 * as we use it in the DB (ie. MONTHLY => month)
 */

const getIntervalFromContributionFrequency = input => {
  switch (input) {
    case 'MONTHLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].month;

    case 'YEARLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].year;

    case 'FLEXIBLE':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].flexible;

    default:
      return null;
  }
};
/**
 * Takes a date and returns it as a string in the format YYYY-MM-DD
 */

const stripTime = date => {
  if (!date) {
    return '';
  } else {
    return (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date).format('YYYY-MM-DD');
  }
};
/**
 * A helper that returns a Date object from different types of input.
 * Currently supports:
 * - string: ISO date string
 * - Date object
 * - DayJS object
 * - null
 */

const getDateFromValue = value => {
  if (!value) {
    return null;
  } else if (typeof value === 'string') {
    return new Date(value);
  } else if (value instanceof Date) {
    return value;
  } else if (value instanceof _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
    return value.toDate();
  }
};
/**
 * From a simple date as '2020-01-01', returns a string like '2020-01-01T00:00:00Z'.
 */

const simpleDateToISOString = (date, isEndOfDay, timezoneType) => {
  if (!date) {
    return null;
  } else {
    const isUTC = timezoneType === 'UTC';
    const dayjsTimeMethod = isEndOfDay ? 'endOf' : 'startOf';
    const result = isUTC ? _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].utc */ .Z.utc(date) : (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date);
    return result[dayjsTimeMethod]('day').toISOString();
  }
};
/**
 * Parse `strValue` in a "dateFrom→dateTo" format and returns an object like { from, to, timezoneType }.
 * Each value in the object will be `undefined` if there's no filter for it.
 */

const parseDateInterval = strValue => {
  const parsedValue = strValue?.match(/^(?<from>[^→]+)(→(?<to>.+?(?=~UTC|$)))?(~(?<timezoneType>UTC))?$/);

  if (parsedValue) {
    const getDateIsoString = dateStr => !dateStr || dateStr === 'all' ? undefined : dateStr;

    return {
      from: getDateIsoString(parsedValue.groups.from),
      to: getDateIsoString(parsedValue.groups.to),
      timezoneType: parsedValue.groups.timezoneType || 'local'
    };
  } else {
    return {
      from: undefined,
      to: undefined,
      timezoneType: 'local'
    };
  }
};
/**
 * Opposite of `parseDateInterval`: takes an object like {from, to, timezoneType} and returns a string
 * like "from→to".
 */

const encodeDateInterval = interval => {
  if (!interval || !interval.from && !interval.to) {
    return '';
  }

  const encodeDate = (date, isEndOfDay) => {
    return simpleDateToISOString(date, isEndOfDay, interval.timezoneType) || 'all';
  };

  const baseResult = `${encodeDate(interval.from, false)}→${encodeDate(interval.to, true)}`;
  return interval.timezoneType === 'UTC' ? `${baseResult}~UTC` : baseResult;
};
const convertDateToApiUtc = (date, timezone) => {
  const result = _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].tz */ .Z.tz(date, timezone).utc().format('YYYY-MM-DD HH:mm:ss+00'); // console.log('convertDateToApiUtc', date, timezone, result);

  return result;
};
const convertDateFromApiUtc = (date, timezone) => {
  const result = (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss'); // console.log('convertDateFromApiUtc', date, timezone, result);

  return result;
};
/**
 * Check if the date is valid while editing
 */

const isValidDate = date => {
  return date && !date.startsWith('0');
};

/***/ }),

/***/ 82114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);


 // In-order to use certain functionality of dayjs, we need to import certain plugins and extend them to the dayjs object.
// adding utc plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default())); // adding timezone plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ 22642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ i18nTaxDescription),
/* harmony export */   "m": () => (/* binding */ i18nTaxType)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const typeMsg = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  VAT: {
    id: "tax.vat",
    defaultMessage: [{
      "type": 0,
      "value": "Value-added tax (VAT)"
    }]
  },
  GST: {
    id: "tax.gst",
    defaultMessage: [{
      "type": 0,
      "value": "Goods and services tax (GST)"
    }]
  }
});
const typeMsgShort = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  VAT: {
    id: "tax.vatShort",
    defaultMessage: [{
      "type": 0,
      "value": "VAT"
    }]
  }
});
const descriptionMsg = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  VAT: {
    id: "tax.vat.description",
    defaultMessage: [{
      "type": 0,
      "value": "Use this tier type to conform with the legislation on VAT in Europe."
    }]
  },
  GST: {
    id: "tax.gst.description",
    defaultMessage: [{
      "type": 0,
      "value": "Use this tier type to conform with the legislation on GST in New Zealand."
    }]
  }
});
const i18nTaxType = (intl, taxType, version = 'long') => {
  if (version === 'long') {
    return typeMsg[taxType] ? intl.formatMessage(typeMsg[taxType]) : taxType;
  } else {
    return typeMsgShort[taxType] ? intl.formatMessage(typeMsgShort[taxType]) : taxType;
  }
};
const i18nTaxDescription = (intl, taxType) => {
  return descriptionMsg[taxType] ? intl.formatMessage(descriptionMsg[taxType]) : null;
};

/***/ }),

/***/ 43176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ require2FAForAdmins)
/* harmony export */ });
/**
 * Returns true if the account requires 2FA for admins. Parent must be preloaded.
 */
const require2FAForAdmins = collective => {
  if (!collective) {
    return false;
  }

  const parent = collective.parent || collective.parentCollective;
  const accountToCheck = parent || collective;
  return Boolean(accountToCheck.policies?.REQUIRE_2FA_FOR_ADMINS);
};

/***/ }),

/***/ 83865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;