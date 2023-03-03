"use strict";
(() => {
var exports = {};
exports.id = 7841;
exports.ids = [7841,6465];
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

/***/ 54247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ DateRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82114);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95370);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const OneLineDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_DateTime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "DateRange__OneLineDate",
  componentId: "sc-loqk0f-0"
})(["white-space:nowrap;display:inline-block;"]);

const getMessage = (from, to) => {
  if (!from && !to) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "DateRange.All",
      defaultMessage: [{
        "type": 0,
        "value": "All"
      }]
    });
  } else if (from && to) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "76YT3Y",
        defaultMessage: [{
          "type": 1,
          "value": "dateFrom"
        }, {
          "type": 0,
          "value": " to "
        }, {
          "type": 1,
          "value": "dateTo"
        }],
        values: {
          dateFrom: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(OneLineDate, {
            value: from,
            dateStyle: "medium"
          }),
          dateTo: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(OneLineDate, {
            value: to,
            dateStyle: "medium"
          })
        }
      })
    });
  } else if (from) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "x9TypM",
      defaultMessage: [{
        "type": 0,
        "value": "Since "
      }, {
        "type": 1,
        "value": "date"
      }],
      values: {
        date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(OneLineDate, {
          value: from,
          dateStyle: "medium"
        })
      }
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "U5sjCv",
      defaultMessage: [{
        "type": 0,
        "value": "Before "
      }, {
        "type": 1,
        "value": "date"
      }],
      values: {
        date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(OneLineDate, {
          value: to,
          dateStyle: "medium"
        })
      }
    });
  }
};
/**
 * Small helper to display an internationalized date range. Both values are optional.
 * The results can be something like:
 * - All
 * - 01/01/21 to 05/05/22
 * - Since 01/01/21
 * - Before 05/05/22
 *
 * If isUTC is true, we also add a `(UTC)` to the end of the date.
 */


const DateRange = ({
  from,
  to,
  isUTC
}) => {
  const message = getMessage(from, to);

  if (!isUTC || !from && !to) {
    return message;
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [message, " (UTC)"]
    });
  }
};
DateRange.__docgenInfo = {
  "description": "Small helper to display an internationalized date range. Both values are optional.\nThe results can be something like:\n- All\n- 01/01/21 to 05/05/22\n- Since 01/01/21\n- Before 05/05/22\n\nIf isUTC is true, we also add a `(UTC)` to the end of the date.",
  "methods": [],
  "displayName": "DateRange",
  "props": {
    "from": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "instanceOf",
          "value": "Date"
        }, {
          "name": "instanceOf",
          "value": "dayjs"
        }]
      },
      "required": false
    },
    "to": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "instanceOf",
          "value": "Date"
        }, {
          "name": "instanceOf",
          "value": "dayjs"
        }]
      },
      "required": false
    },
    "isUTC": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 95370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "r": () => (/* binding */ generateDateTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82114);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97079);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["value", "dateStyle", "timeStyle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const TITLE_MESSAGE = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessage)({
  id: "9kdoVP",
  defaultMessage: [{
    "type": 0,
    "value": "Local time: "
  }, {
    "type": 1,
    "value": "localTime"
  }, {
    "type": 1,
    "value": "newLine"
  }, {
    "type": 0,
    "value": "UTC time: "
  }, {
    "type": 1,
    "value": "utcTime"
  }]
});
const generateDateTitle = (intl, date) => {
  return intl.formatMessage(TITLE_MESSAGE, {
    localTime: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(intl.formatDate(date, {
      dateStyle: 'full',
      timeStyle: 'long'
    })),
    utcTime: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(intl.formatDate(date, {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'UTC'
    })),
    newLine: '\n'
  });
};
/**
 * A wrapper around `FormattedDate` + HTML `<time>` with sensible defaults.
 * Displays the full date and time in the user's locale and in UTC in the title.
 */

const DateTime = _ref => {
  let {
    value,
    dateStyle,
    timeStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const [title, setTitle] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const date = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_2__/* .getDateFromValue */ .j9)(value), [value]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("time", _objectSpread(_objectSpread({}, props), {}, {
    title: title,
    dateTime: date.toISOString(),
    onMouseEnter: () => setTitle(generateDateTitle(intl, date)),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedDate, {
      dateStyle: dateStyle,
      timeStyle: timeStyle,
      value: date
    })
  }));
};

DateTime.defaultProps = {
  dateStyle: 'long'
};
DateTime.__docgenInfo = {
  "description": "A wrapper around `FormattedDate` + HTML `<time>` with sensible defaults.\nDisplays the full date and time in the user's locale and in UTC in the title.",
  "methods": [],
  "displayName": "DateTime",
  "props": {
    "dateStyle": {
      "defaultValue": {
        "value": "'long'",
        "computed": false
      },
      "description": "Date style, set this to null to hide the date",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'full'",
          "computed": false
        }, {
          "value": "'long'",
          "computed": false
        }, {
          "value": "'medium'",
          "computed": false
        }, {
          "value": "'short'",
          "computed": false
        }]
      },
      "required": false
    },
    "value": {
      "description": "The value as a Date or as a parsable string",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "instanceOf",
          "value": "Date"
        }, {
          "name": "instanceOf",
          "value": "dayjs"
        }]
      },
      "required": true
    },
    "timeStyle": {
      "description": "Time style, set this to display the time along with the date",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'full'",
          "computed": false
        }, {
          "value": "'long'",
          "computed": false
        }, {
          "value": "'medium'",
          "computed": false
        }, {
          "value": "'short'",
          "computed": false
        }, {
          "value": "undefined",
          "computed": true
        }, {
          "value": "null",
          "computed": false
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTime);

/***/ }),

/***/ 40502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11194);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66943);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);

const _excluded = ["inputId", "noCache", "account", "status"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const expensesSearchQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query ExpensesPickerSearchQuery($account: AccountReferenceInput, $searchTerm: String, $status: ExpenseStatusFilter) {
    expenses(account: $account, limit: 100, searchTerm: $searchTerm, status: $status) {
      nodes {
        id
        legacyId
        description
        createdAt
        account {
          id
          name
          slug
          isIncognito
          imageUrl(height: 48)
        }
      }
    }
  }
`;

const getOptionsFromExpenses = expenses => {
  if (!expenses?.length) {
    return [];
  } else {
    return expenses.map(expense => ({
      value: expense,
      label: `#${expense.legacyId} - ${expense.description}`
    }));
  }
};
/** Throttle search function to limit invocations while typing */


const throttledSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 750);

const getAccountInput = account => {
  if (!account) {
    return null;
  } else if (typeof account.id === 'string') {
    return {
      id: account.id
    };
  } else if (typeof account.id === 'number') {
    return {
      legacyId: account.id
    };
  } else if (typeof account.legacyId === 'number') {
    return {
      legacyId: account.legacyId
    };
  } else {
    return {
      slug: account.slug
    };
  }
};

const formatOptionLabel = option => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
      collective: option.value.fromAccount,
      size: 24
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      ml: 2,
      fontSize: "11px",
      children: ["#", option.value.legacyId]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
      fontSize: "12px",
      ml: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
        value: option.value.createdAt
      }), " - ", option.value.description]
    })]
  });
};
/**
 * Fetches expenses based on user search input.
 */


const ExpensesPickerAsync = _ref => {
  let {
    inputId,
    noCache,
    account,
    status
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const fetchPolicy = noCache ? 'network-only' : undefined;
  const variables = {
    account: getAccountInput(account),
    status
  };
  const queryParameters = {
    fetchPolicy,
    variables,
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  };
  const [searchExpenses, {
    loading,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(expensesSearchQuery, queryParameters);
  const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const options = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => getOptionsFromExpenses(data?.expenses?.nodes), [data?.expenses?.nodes]); // If preload is true, trigger a first query on mount or when one of the query param changes

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (account) {
      throttledSearch(searchExpenses, {
        searchTerm
      });
    }
  }, [account, searchTerm]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _objectSpread({
    inputId: inputId,
    isLoading: loading,
    useSearchIcon: true,
    options: options,
    filterOption: () => true
    /** Filtering is done by the API */
    ,
    onInputChange: newTerm => setSearchTerm(newTerm.trim()),
    formatOptionLabel: formatOptionLabel
  }, props));
};

ExpensesPickerAsync.defaultProps = {};
ExpensesPickerAsync.__docgenInfo = {
  "description": "Fetches expenses based on user search input.",
  "methods": [],
  "displayName": "ExpensesPickerAsync",
  "props": {
    "inputId": {
      "description": "The id of the search input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "limit": {
      "description": "Max number of collectives displayed at the same time",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "noCache": {
      "description": "If true, results won't be cached (Apollo \"network-only\" mode)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "status": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensesPickerAsync);

/***/ }),

/***/ 82497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const TranslatedTags = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ASSOCIATION */ .B3.ASSOCIATION]: {
    id: "collective.category.association",
    defaultMessage: [{
      "type": 0,
      "value": "Association"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COLLECTIVE */ .B3.COLLECTIVE]: {
    id: "Collective",
    defaultMessage: [{
      "type": 0,
      "value": "Collective"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.CONFERENCE */ .B3.CONFERENCE]: {
    id: "Tags.CONFERENCE",
    defaultMessage: [{
      "type": 0,
      "value": "Conference"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COOPERATIVE */ .B3.COOPERATIVE]: {
    id: "collective.category.coop",
    defaultMessage: [{
      "type": 0,
      "value": "Cooperative"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.OPEN_SOURCE */ .B3.OPEN_SOURCE]: {
    id: "Tags.OPEN_SOURCE",
    defaultMessage: [{
      "type": 0,
      "value": "Open source"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEDIA */ .B3.MEDIA]: {
    id: "Tags.MEDIA",
    defaultMessage: [{
      "type": 0,
      "value": "Media"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEETUP */ .B3.MEETUP]: {
    id: "collective.category.meetup",
    defaultMessage: [{
      "type": 0,
      "value": "Meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MOVEMENT */ .B3.MOVEMENT]: {
    id: "collective.category.movement",
    defaultMessage: [{
      "type": 0,
      "value": "Movement"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.POLITICS */ .B3.POLITICS]: {
    id: "Tags.POLITICS",
    defaultMessage: [{
      "type": 0,
      "value": "Politics"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.TECH_MEETUP */ .B3.TECH_MEETUP]: {
    id: "Tags.TECH_MEETUP",
    defaultMessage: [{
      "type": 0,
      "value": "Tech meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.US_NONPROFIT */ .B3.US_NONPROFIT]: {
    id: "Tags.US_NONPROFIT",
    defaultMessage: [{
      "type": 0,
      "value": "US nonprofit"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.EVENT */ .B3.EVENT]: {
    id: "ContributionType.Event",
    defaultMessage: [{
      "type": 0,
      "value": "Event"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.USER */ .B3.USER]: {
    id: "Tags.USER",
    defaultMessage: [{
      "type": 0,
      "value": "User"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ORGANIZATION */ .B3.ORGANIZATION]: {
    id: "Tags.ORGANIZATION",
    defaultMessage: [{
      "type": 0,
      "value": "Organization"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.FUND */ .B3.FUND]: {
    id: "Tags.FUND",
    defaultMessage: [{
      "type": 0,
      "value": "Fund"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.PROJECT */ .B3.PROJECT]: {
    id: "ContributionType.Project",
    defaultMessage: [{
      "type": 0,
      "value": "Project"
    }]
  }
});
/** Translates a list of tags */

class I18nCollectiveTags extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      intl,
      children,
      tags,
      ignoreUntranslated
    } = this.props;
    const tagsToTranslate = typeof tags === 'string' ? [tags] : tags;
    const processedTags = tagsToTranslate.map(tag => {
      if (TranslatedTags[tag]) {
        return {
          value: intl.formatMessage(TranslatedTags[tag]),
          isTranslated: true
        };
      } else {
        return {
          value: tag,
          isTranslated: false
        };
      }
    });
    return children(ignoreUntranslated ? processedTags.filter(t => t.isTranslated) : processedTags);
  }

}

_defineProperty(I18nCollectiveTags, "defaultProps", {
  ignoreUntranslated: false,

  /** Default renderer, will render a string list */
  children: tags => {
    return tags.map((tag, index, translatedTags) => {
      if (index === translatedTags.length - 1) {
        return tag.value;
      } else {
        return `${tag.value}, `;
      }
    });
  }
});

I18nCollectiveTags.__docgenInfo = {
  "description": "Translates a list of tags",
  "methods": [],
  "displayName": "I18nCollectiveTags",
  "props": {
    "ignoreUntranslated": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Ignore tags if translation is missing",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "tags => {\n  return tags.map((tag, index, translatedTags) => {\n    if (index === translatedTags.length - 1) {\n      return tag.value;\n    } else {\n      return `${tag.value}, `;\n    }\n  });\n}",
        "computed": false
      },
      "description": "A function used to render the tag",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "tags": {
      "description": "A tag or a list of tags",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "string"
          }
        }]
      },
      "required": true
    },
    "intl": {
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(I18nCollectiveTags));

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

/***/ 84465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11194);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66943);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);

const _excluded = ["inputId", "noCache", "account", "filter", "includeIncognito"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const ordersSearchQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query OrdersPickerSearchQuery(
    $account: AccountReferenceInput
    $includeIncognito: Boolean
    $filter: AccountOrdersFilter
    $searchTerm: String
  ) {
    orders(
      account: $account
      filter: $filter
      limit: 100
      includeIncognito: $includeIncognito
      searchTerm: $searchTerm
    ) {
      nodes {
        id
        legacyId
        description
        createdAt
        amount {
          valueInCents
          currency
        }
        fromAccount {
          id
          name
          slug
          isIncognito
          imageUrl(height: 48)
        }
        toAccount {
          id
          slug
          name
        }
        tier {
          id
          legacyId
          slug
          name
        }
      }
    }
  }
`;

const getOptionsFromOrders = orders => {
  if (!orders?.length) {
    return [];
  } else {
    return orders.map(order => ({
      value: order,
      label: `#${order.legacyId} - ${order.description}`
    }));
  }
};
/** Throttle search function to limit invocations while typing */


const throttledSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 750);

const getAccountInput = account => {
  if (!account) {
    return null;
  } else if (typeof account.id === 'string') {
    return {
      id: account.id
    };
  } else if (typeof account.id === 'number') {
    return {
      legacyId: account.id
    };
  } else if (typeof account.legacyId === 'number') {
    return {
      legacyId: account.legacyId
    };
  } else {
    return {
      slug: account.slug
    };
  }
};

const formatOptionLabel = option => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
      collective: option.value.fromAccount,
      size: 24
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      ml: 2,
      fontSize: "11px",
      children: ["#", option.value.legacyId]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
      fontSize: "12px",
      ml: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
        value: option.value.createdAt
      }), " - ", option.value.description]
    })]
  });
};
/**
 * A specialization of `CollectivePicker` that fetches the data based on user search.
 */


const OrdersPickerAsync = _ref => {
  let {
    inputId,
    noCache,
    account,
    filter,
    includeIncognito
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const fetchPolicy = noCache ? 'network-only' : undefined;
  const variables = {
    includeIncognito,
    filter,
    account: getAccountInput(account)
  };
  const queryParameters = {
    fetchPolicy,
    variables,
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  };
  const [searchOrders, {
    loading,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(ordersSearchQuery, queryParameters);
  const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const options = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => getOptionsFromOrders(data?.orders?.nodes), [data?.orders?.nodes]); // If preload is true, trigger a first query on mount or when one of the query param changes

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (account) {
      throttledSearch(searchOrders, {
        searchTerm
      });
    }
  }, [account, searchTerm]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _objectSpread({
    inputId: inputId,
    isLoading: loading,
    useSearchIcon: true,
    options: options,
    filterOption: () => true
    /** Filtering is done by the API */
    ,
    onInputChange: newTerm => setSearchTerm(newTerm.trim()),
    formatOptionLabel: formatOptionLabel
  }, props));
};

OrdersPickerAsync.defaultProps = {};
OrdersPickerAsync.__docgenInfo = {
  "description": "A specialization of `CollectivePicker` that fetches the data based on user search.",
  "methods": [],
  "displayName": "OrdersPickerAsync",
  "props": {
    "inputId": {
      "description": "The id of the search input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "limit": {
      "description": "Max number of collectives displayed at the same time",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "hostCollectiveIds": {
      "description": "If set, only the collectives under this host will be retrieved",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false
    },
    "preload": {
      "description": "If true, a query will be triggered even if search is empty",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "noCache": {
      "description": "If true, results won't be cached (Apollo \"network-only\" mode)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "includeIncognito": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "filter": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'OUTGOING'",
          "computed": false
        }, {
          "value": "'INCOMING'",
          "computed": false
        }]
      },
      "required": false
    },
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersPickerAsync);

/***/ }),

/***/ 79045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97274);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Pagination = ({
  route,
  limit,
  offset,
  total,
  scrollToTopOnChange,
  isDisabled,
  ignoredQueryParams
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (!router) {
    return null;
  }

  const totalPages = Math.ceil(total / limit);
  const currentPage = offset / limit + 1;
  const queryParams = ignoredQueryParams ? lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(router.query, ignoredQueryParams) : router.query;
  route = route || router.asPath.split('?')[0];
  isDisabled = isDisabled || totalPages <= 1;

  const changePage = async ({
    target,
    key
  }) => {
    if (key && key !== 'Enter') {
      return;
    }

    const {
      value
    } = target;

    if (!value || !parseInt(value) || parseInt(value) === currentPage) {
      return;
    }

    await router.push({
      pathname: route,
      query: _objectSpread(_objectSpread({}, queryParams), {}, {
        offset: (value - 1) * limit
      })
    });

    if (scrollToTopOnChange) {
      window.scrollTo(0, 0);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    alignItems: "center",
    children: [currentPage > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      href: {
        pathname: route,
        query: _objectSpread(_objectSpread({}, queryParams), {}, {
          offset: offset - limit
        })
      },
      scroll: scrollToTopOnChange,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        buttonSize: "small",
        disabled: isDisabled,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Pagination.Prev",
          defaultMessage: [{
            "type": 0,
            "value": "Previous"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: "inline-block",
      mx: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "Pagination.Count",
        defaultMessage: [{
          "type": 0,
          "value": "Page "
        }, {
          "type": 1,
          "value": "current"
        }, {
          "type": 0,
          "value": " of "
        }, {
          "type": 1,
          "value": "total"
        }],
        values: {
          current: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
            defaultValue: currentPage,
            onBlur: changePage,
            onKeyPress: changePage,
            textAlign: "center",
            mx: 1,
            px: 1,
            py: 1,
            width: 30,
            disabled: isDisabled,
            type: "text",
            pattern: "[0-9]+",
            inputMode: "numeric",
            "data-cy": "pagination-current"
          }, offset),
          total: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            "data-cy": "pagination-total",
            children: totalPages || 1
          })
        }
      })
    }), currentPage < totalPages && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      href: {
        pathname: route,
        query: _objectSpread(_objectSpread({}, queryParams), {}, {
          offset: offset + limit
        })
      },
      scroll: scrollToTopOnChange,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        buttonSize: "small",
        disabled: isDisabled,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Pagination.Next",
          defaultMessage: [{
            "type": 0,
            "value": "Next"
          }]
        })
      })
    })]
  });
};

Pagination.defaultProps = {
  scrollToTopOnChange: true
};
Pagination.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Pagination",
  "props": {
    "scrollToTopOnChange": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Use this to scroll back on top when pagination changes",
      "type": {
        "name": "bool"
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
    "offset": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "total": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "isDisabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "route": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "ignoredQueryParams": {
      "description": "By default, all query params will be transferred in the paginated link. This prop is useful to filter query params that are part of the URL.",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ 60732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p": () => (/* binding */ PERIOD_FILTER_PRESETS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82114);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const getPastDateInterval = timeUnit => {
  const from = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().subtract(1, timeUnit).startOf(timeUnit);
  return {
    from,
    to: from.endOf(timeUnit)
  };
};
/**
 * Some presets for time filters
 */


const PERIOD_FILTER_PRESETS = {
  allTime: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "s+lPP3",
      defaultMessage: [{
        "type": 0,
        "value": "All time"
      }]
    }),
    getInterval: () => ({
      from: null,
      to: null
    })
  },
  today: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "zWgbGg",
      defaultMessage: [{
        "type": 0,
        "value": "Today"
      }]
    }),
    getInterval: () => ({
      from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('day'),
      to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
    })
  },
  thisMonth: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "3PZa76",
      defaultMessage: [{
        "type": 0,
        "value": "This Month"
      }]
    }),
    getInterval: () => ({
      from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('month'),
      to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
    })
  },
  thisYear: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "OGk6DC",
      defaultMessage: [{
        "type": 0,
        "value": "This Year"
      }]
    }),
    getInterval: () => ({
      from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('year'),
      to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
    })
  },
  pastWeek: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "li7Ez6",
      defaultMessage: [{
        "type": 0,
        "value": "Past Week"
      }]
    }),
    getInterval: () => getPastDateInterval('week')
  },
  pastMonth: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "+n7iNv",
      defaultMessage: [{
        "type": 0,
        "value": "Past Month"
      }]
    }),
    getInterval: () => getPastDateInterval('month')
  },
  pastYear: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "B0DOrM",
      defaultMessage: [{
        "type": 0,
        "value": "Past Year"
      }]
    }),
    getInterval: () => getPastDateInterval('year')
  }
};
const PERIOD_FILTER_SELECT_STYLES = {
  dropdownIndicator: {
    paddingTop: 0,
    paddingBottom: 0
  },
  option: {
    fontSize: '12px'
  }
};

const getSelectedPeriodOptionFromInterval = ({
  from,
  to
}) => {
  const isSameDay = (dayjsDate, otherDate) => !dayjsDate && !otherDate || dayjsDate?.isSame(otherDate, 'day');

  const preset = Object.keys(PERIOD_FILTER_PRESETS).find(preset => {
    const presetDetails = PERIOD_FILTER_PRESETS[preset];
    const presetInterval = presetDetails.getInterval();
    return isSameDay(presetInterval.from, from) && isSameDay(presetInterval.to, to);
  });

  if (preset) {
    return {
      label: PERIOD_FILTER_PRESETS[preset].label,
      value: preset
    };
  } else {
    return {
      label: 'Custom',
      value: 'custom'
    };
  }
};

const periodSelectThemeBuilder = theme => _objectSpread(_objectSpread({}, theme), {}, {
  spacing: _objectSpread(_objectSpread({}, theme.spacing), {}, {
    controlHeight: 28
  })
});

const PeriodFilterPresetsSelect = ({
  onChange,
  interval,
  inputId,
  formatDateFn
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const selectedOption = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getSelectedPeriodOptionFromInterval(interval), [interval]);
  const options = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    return Object.keys(PERIOD_FILTER_PRESETS).map(presetKey => ({
      value: presetKey,
      label: PERIOD_FILTER_PRESETS[presetKey].label
    }));
  }, [intl]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__/* .StyledSelectFilter */ .V, {
    inputId: inputId,
    value: selectedOption,
    options: options,
    selectTheme: periodSelectThemeBuilder,
    styles: PERIOD_FILTER_SELECT_STYLES,
    onChange: ({
      value
    }) => {
      if (value === 'custom') {
        return interval;
      } else {
        const newInterval = _objectSpread({}, PERIOD_FILTER_PRESETS[value].getInterval());

        onChange(_objectSpread(_objectSpread({}, interval), {}, {
          from: formatDateFn(newInterval.from),
          to: formatDateFn(newInterval.to)
        }));
      }
    }
  });
};

PeriodFilterPresetsSelect.defaultProps = {
  formatDateFn: _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__/* .stripTime */ .xR
};
PeriodFilterPresetsSelect.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PeriodFilterPresetsSelect",
  "props": {
    "formatDateFn": {
      "defaultValue": {
        "value": "stripTime",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "inputId": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "interval": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "from": {
            "name": "string",
            "required": false
          },
          "to": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeriodFilterPresetsSelect);

/***/ }),

/***/ 32606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72427);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["onSubmit", "defaultValue", "placeholder"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  searchPlaceholder: {
    id: "search.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Search..."
    }]
  }
});
/**
 * A wrapper around `SearchForm` that holds state and interacts with parent
 * through `onSubmit`, rather than `onChange`.
 */

const SearchBar = _ref => {
  let {
    onSubmit,
    defaultValue,
    placeholder
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(defaultValue || '');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)(); // Reset value when `defaultValue` change, to handle reset filters

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setValue(defaultValue || '');
  }, [defaultValue]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
    placeholder: placeholder || intl.formatMessage(messages.searchPlaceholder),
    value: value,
    onChange: setValue,
    onSubmit: event => {
      event.preventDefault();
      const searchInput = event.target.elements.q;
      onSubmit(searchInput.value || null);
    }
  }, props));
};

SearchBar.__docgenInfo = {
  "description": "A wrapper around `SearchForm` that holds state and interacts with parent\nthrough `onSubmit`, rather than `onChange`.",
  "methods": [],
  "displayName": "SearchBar",
  "props": {
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

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

/***/ 52847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ StyledSelectFilter),
/* harmony export */   "v": () => (/* binding */ getSelectFilterStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66943);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getSelectFilterStyles = stylesFromProps => _objectSpread(_objectSpread({}, stylesFromProps || null), {}, {
  control: (baseStyles, state) => {
    const styles = _objectSpread(_objectSpread(_objectSpread({}, baseStyles), {}, {
      background: '#F7F8FA',
      borderRadius: 100,
      padding: '0 8px',
      fontWeight: 500,
      borderColor: '#E8E9EB'
    }, stylesFromProps?.control || null), {}, {
      '&:hover': {
        borderColor: '#C4C7CC'
      }
    });

    if (state.isFocused) {
      styles.background = 'white';
      styles.boxShadow = '0 0 0 2px black';
    }

    return styles;
  }
});
/**
 * A superset of `StyledSelect` with custom styles, to use for selects that contains
 * filters for lists.
 */

const StyledSelectFilter = props => {
  const styles = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getSelectFilterStyles(props.styles), [props.styles]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    minWidth: 80,
    fontSize: "12px",
    lineHeight: "14px",
    isSearchable: false
  }, props), {}, {
    styles: styles
  }));
};
StyledSelectFilter.__docgenInfo = {
  "description": "A superset of `StyledSelect` with custom styles, to use for selects that contains\nfilters for lists.",
  "methods": [],
  "displayName": "StyledSelectFilter",
  "props": {
    "inputId": {
      "description": "The id of the search input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "instanceId": {
      "description": "Define an id prefix for the select components e.g., {your-id}-value",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "placeholder": {
      "description": "Placeholder for the select value",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "disabled": {
      "description": "Whether the component is disabled",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "styles": {
      "description": "Additional styles for the component",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 49106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98210);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18022);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82114);
/* harmony import */ var _DateRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54247);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60732);
/* harmony import */ var _PopupMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66152);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _StyledButtonSet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16738);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87262);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_16__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const _excluded = ["onChange", "value", "inputId", "minDate"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const DEFAULT_INTERVAL = {
  from: '',
  to: '',
  timezoneType: 'local'
};
/**
 * Get a date range as stored internally from a `value` prop, that can be either an object
 * like { from, to } or a stringified value (see `encodeDateInterval`).
 */

const getIntervalFromValue = value => {
  const isIntervalObject = value => typeof value === 'object' && lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(value, 'from') && lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(value, 'to');

  const intervalFromValue = isIntervalObject(value) ? _objectSpread({}, value) : (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseDateInterval */ .dr)(value);

  if (intervalFromValue.timezoneType === 'UTC') {
    const toUTC = date => date ? _lib_dayjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"].utc */ .Z.utc(date) : null;

    intervalFromValue.from = toUTC(intervalFromValue.from);
    intervalFromValue.to = toUTC(intervalFromValue.to);
  }

  return {
    from: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .stripTime */ .xR)(intervalFromValue.from),
    to: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .stripTime */ .xR)(intervalFromValue.to),
    timezoneType: intervalFromValue.timezoneType || 'local'
  };
};
/**
 * Update `interval` with a new value for `from` or `to` and return the updated interval
 * as a new object.
 */


const getNewInterval = (interval, changeField, newValue) => {
  const newInterval = _objectSpread({}, interval);

  newInterval[changeField] = newValue;
  return newInterval;
};
/**
 * Date is locally stored as '2020-01-01'. We need to force the time to make sure it's not modified
 * by timezones when parsed.
 */


const parseDateForDateRange = (dateStr, isEndOfDay) => {
  if (!dateStr) {
    return null;
  } else if (!isEndOfDay) {
    return new Date(`${dateStr}T00:00:00`);
  } else {
    return new Date(`${dateStr}T23:59:59`);
  }
};

const UTC_LABEL = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessage)({
  id: "94IjMb",
  defaultMessage: [{
    "type": 0,
    "value": "Coordinated Universal Time"
  }]
});

const getTimeZoneTypeName = (intl, timezone) => {
  if (timezone === 'local') {
    try {
      return intl.timeZone || _lib_dayjs__WEBPACK_IMPORTED_MODULE_7__/* ["default"].tz.guess */ .Z.tz.guess();
    } catch {
      return '';
    }
  } else if (timezone === 'UTC') {
    return intl.formatMessage(UTC_LABEL);
  } else {
    return '';
  }
};

const TriggerContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
  displayName: "PeriodFilter__TriggerContainer",
  componentId: "sc-cv8c8z-0"
})(["min-height:38px;outline:0;background:#f7f8fa;padding:0 16px;width:100%;text-align:left;font-size:12px;font-weight:500;color:hsl(0,0%,20%);svg{transition:color 0.2s;}&:hover{border-color:#c4c7cc;svg{color:#999999;}}&:active,&:focus{background:white;color:hsl(0,0%,20%);box-shadow:0 0 0 2px black;}"]);

const PeriodFilter = _ref => {
  let {
    onChange,
    value,
    inputId,
    minDate
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const intervalFromValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => getIntervalFromValue(value), [value]);
  const [tmpDateInterval, setTmpDateInterval] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(intervalFromValue);
  const [isValidDateInterval, setIsValidDateInterval] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const formattedMin = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .stripTime */ .xR)(minDate);

  const setDate = (changeField, date) => {
    const newInterval = getNewInterval(tmpDateInterval, changeField, date);
    setTmpDateInterval(newInterval); // Add warning in case fromDate is after toDate

    if ((0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .isValidDate */ .qb)(newInterval.from) && (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .isValidDate */ .qb)(newInterval.to) && newInterval.from > newInterval.to) {
      setIsValidDateInterval(false);
    } else if ((0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .isValidDate */ .qb)(newInterval.from) && (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .isValidDate */ .qb)(newInterval.to) && newInterval.from < newInterval.to) {
      setIsValidDateInterval(true);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_PopupMenu__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    placement: "bottom-start",
    onClose: () => setTmpDateInterval(intervalFromValue),
    Button: ({
      onClick
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(TriggerContainer, _objectSpread(_objectSpread({
      onClick: onClick,
      id: inputId,
      "data-cy": "period-filter"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_DateRange__WEBPACK_IMPORTED_MODULE_8__/* .DateRange */ .C, {
          from: parseDateForDateRange(intervalFromValue.from, false),
          to: parseDateForDateRange(intervalFromValue.to, true),
          isUTC: intervalFromValue.timezoneType === 'UTC'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_2__.ChevronDown, {
          size: 25,
          color: "#cccccc"
        })]
      })
    })),
    children: ({
      setOpen
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
      mx: "8px",
      my: "8px",
      width: "190px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_PeriodFilterPresetsSelect__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          inputId: `${inputId}-presets-select`,
          onChange: setTmpDateInterval,
          interval: tmpDateInterval
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: "timezoneType",
        mt: "12px",
        labelFontSize: "16px",
        labelFontWeight: "700",
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
            mr: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "7nUCu9",
              defaultMessage: [{
                "type": 0,
                "value": "Timezone"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "9sbPks",
              defaultMessage: [{
                "type": 0,
                "value": "By default, all dates are filtered and displayed using your local timezone. You can switch to UTC to indicate that the dates provided above use the Coordinated Universal Time format, which matches how email reports are generated"
              }]
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircle, {
              size: 16
            })
          })]
        }),
        children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledButtonSet__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
          size: "tiny",
          items: ['local', 'UTC'],
          buttonProps: {
            p: 1,
            fontSize: '13px',
            fontWeight: 400
          },
          selected: tmpDateInterval.timezoneType,
          buttonPropsBuilder: ({
            item
          }) => ({
            title: getTimeZoneTypeName(intl, item)
          }),
          onChange: timezoneType => {
            setTmpDateInterval(_objectSpread(_objectSpread({}, tmpDateInterval), {}, {
              timezoneType
            }));
          },
          children: ({
            item
          }) => {
            switch (item) {
              case 'local':
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "W4SaxY",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Local"
                  }]
                });

              case 'UTC':
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "pbQZea",
                  defaultMessage: [{
                    "type": 0,
                    "value": "UTC"
                  }]
                });
            }
          }
        }))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "n5QvJy",
          defaultMessage: [{
            "type": 0,
            "value": "Start date"
          }]
        }),
        labelFontWeight: "700",
        labelProps: {
          fontWeight: 'bold',
          fontSize: '16px'
        },
        name: "dateFrom",
        mt: "12px",
        labelFontSize: "16px",
        children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
          type: "date",
          width: "100%",
          closeOnSelect: true,
          lineHeight: 1,
          fontSize: "13px",
          value: tmpDateInterval.from,
          min: formattedMin,
          onChange: e => setDate('from', e.target.value)
        }))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "Humfno",
          defaultMessage: [{
            "type": 0,
            "value": "End date"
          }]
        }),
        labelFontWeight: "700",
        labelProps: {
          fontWeight: 'bold',
          fontSize: '16px'
        },
        name: "dateTo",
        mt: "12px",
        labelFontSize: "16px",
        children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
          type: "date",
          width: "100%",
          closeOnSelect: true,
          lineHeight: 1,
          fontSize: "13px",
          value: tmpDateInterval.to,
          min: formattedMin,
          max: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .stripTime */ .xR)(new Date()),
          onChange: e => setDate('to', e.target.value)
        }))
      }), !isValidDateInterval && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
        display: "block",
        color: "red.500",
        pt: 2,
        fontSize: "10px",
        lineHeight: "14px",
        "aria-live": "assertive",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "P6fesn",
          defaultMessage: [{
            "type": 0,
            "value": "Start Date should be before the End Date"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        mt: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          buttonSize: "medium",
          mr: 2,
          mt: "12px",
          flex: "1",
          onClick: () => {
            setTmpDateInterval(DEFAULT_INTERVAL);
            setIsValidDateInterval(true);
            setOpen(false);
            onChange(null);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Reset",
            defaultMessage: [{
              "type": 0,
              "value": "Reset"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          buttonSize: "medium",
          buttonStyle: "primary",
          mt: "12px",
          "data-cy": "btn-apply-period-filter",
          flex: "1",
          onClick: () => {
            onChange(tmpDateInterval);
            setOpen(false);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Apply",
            defaultMessage: [{
              "type": 0,
              "value": "Apply"
            }]
          })
        })]
      })]
    })
  });
};

PeriodFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PeriodFilter",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "value": {
      "description": "The value, either as a string with the `dateFrom\u2192dateTo` format or an object like { from, to }",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "shape",
          "value": {
            "from": {
              "name": "string",
              "required": false
            },
            "to": {
              "name": "string",
              "required": false
            },
            "timezoneType": {
              "name": "string",
              "required": false
            }
          }
        }]
      },
      "required": false
    },
    "inputId": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "minDate": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeriodFilter);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export editAccountFlagsMutation */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5993);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41433);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87262);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_11__, _ToastProvider__WEBPACK_IMPORTED_MODULE_12__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_11__, _ToastProvider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const editAccountFlagsMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation EditAccountFlags(
    $account: AccountReferenceInput!
    $isArchived: Boolean
    $isTrustedHost: Boolean
    $isTwoFactorAuthEnabled: Boolean
  ) {
    editAccountFlags(
      account: $account
      isArchived: $isArchived
      isTrustedHost: $isTrustedHost
      isTwoFactorAuthEnabled: $isTwoFactorAuthEnabled
    ) {
      id
      slug
    }
  }
`;

const AccountSettings = () => {
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const [selectedAccountOption, setSelectedAccountOption] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const [archivedFlag, setArchivedFlag] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [trustedHostFlag, setTrustedHostFlag] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [twoFactorEnabledFlag, setTwoFactorEnabledFlag] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [enableSave, setEnableSave] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [editAccountFlags, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(editAccountFlagsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setArchivedFlag(selectedAccountOption?.value?.isArchived);
    setTrustedHostFlag(selectedAccountOption?.value?.isTrustedHost);
    setTwoFactorEnabledFlag(selectedAccountOption?.value?.isTwoFactorAuthEnabled);
  }, [selectedAccountOption]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      htmlFor: "ban-accounts-picker",
      label: "Account",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        inputId: id,
        onChange: setSelectedAccountOption,
        includeDeleted: true,
        includeArchived: true,
        value: selectedAccountOption,
        noCache: true
      })
    }), selectedAccountOption.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        px: 1,
        pt: 3,
        pb: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          pb: 2,
          children: "Flags"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          flexWrap: "wrap",
          px: 1,
          mt: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            pr: 4,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              name: "Archived",
              label: "Archived",
              checked: archivedFlag,
              onChange: ({
                checked
              }) => {
                setEnableSave(true);
                setArchivedFlag(checked);
              }
            })
          }), selectedAccountOption?.value?.isHost && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              name: "Trusted Host",
              label: "Trusted Host",
              checked: trustedHostFlag,
              onChange: ({
                checked
              }) => {
                setEnableSave(true);
                setTrustedHostFlag(checked);
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              name: "2FA",
              label: "2FA",
              disabled: !twoFactorEnabledFlag && !enableSave,
              checked: twoFactorEnabledFlag,
              onChange: ({
                checked
              }) => {
                setEnableSave(true);
                setTwoFactorEnabledFlag(checked);
              }
            })
          })]
        }), !twoFactorEnabledFlag && enableSave && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          pt: 4,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            type: "error",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
              children: "Some instructions on what to look when disabling 2FA for a user;"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("ul", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
                children: "If user has Twitter, GitHub or any other social accounts linked we can ask for a proof to be added to them."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
                children: "If the user has a payment method linked, we can ask for the credit card information (last 4 digits + type of card etc)."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
                children: "If the account is completely empty, but the user is an admin of another collective or host (where there's other admins), we notify the other admins of the collective to verify if it's okay to reset the user's 2FA codes."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
                children: "If the account is completely empty, but the user is the sole admin of another collective or host, we look at any links in the collective or host account (such as the website link) and ask the user to upload something to those social links in order to verify. For example if the collective has a twitter account we ask the user to post a message with that account."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("li", {
                children: "If none of the above, there's no links to social accounts, there's no credit card information and the user account is completely empty we just reset them as there's nothing to lose."
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
              children: "In doubt, do not hesitate to ask the engineering team."
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        mt: 4,
        width: "100%",
        buttonStyle: "primary",
        loading: loading,
        disabled: !enableSave,
        onClick: async () => {
          try {
            await editAccountFlags({
              variables: {
                account: {
                  slug: selectedAccountOption?.value?.slug
                },
                isArchived: archivedFlag,
                isTrustedHost: trustedHostFlag,
                isTwoFactorAuthEnabled: twoFactorEnabledFlag
              }
            });
            addToast({
              type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
              title: 'Success',
              message: 'Account flags saved'
            });
            setEnableSave(false);
          } catch (e) {
            addToast({
              type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
              message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, e)
            });
          }
        },
        children: "Save"
      })]
    })]
  });
};

AccountSettings.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AccountSettings"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountSettings);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ banAccountsMutation),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5993);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41433);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31330);
/* harmony import */ var _BanAccountsSummary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7857);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_10__, _ToastProvider__WEBPACK_IMPORTED_MODULE_12__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_10__, _ToastProvider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const banAccountsMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation BanAccounts($account: [AccountReferenceInput!]!, $dryRun: Boolean!, $includeAssociatedAccounts: Boolean!) {
    banAccount(account: $account, includeAssociatedAccounts: $includeAssociatedAccounts, dryRun: $dryRun) {
      isAllowed
      message
      accounts {
        id
        slug
        name
        type
        ... on AccountWithParent {
          parent {
            id
            slug
            type
          }
        }
      }
    }
  }
`;

const BanAccount = () => {
  const [selectedAccountsOptions, setSelectedAccountsOptions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const [includeAssociatedAccounts, setIncludeAssociatedAccounts] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
  const [dryRunData, setDryRunData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [_banAccounts, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(banAccountsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const isValid = Boolean(selectedAccountsOptions?.length);

  const banAccounts = (dryRun = true) => _banAccounts({
    variables: {
      account: selectedAccountsOptions.map(a => ({
        legacyId: a.value.id
      })),
      includeAssociatedAccounts,
      dryRun
    }
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      htmlFor: "ban-accounts-picker",
      label: "Account",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        inputId: id,
        onChange: setSelectedAccountsOptions,
        isMulti: true,
        skipGuests: false
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexWrap: "wrap",
      px: 1,
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        name: "associated-accounts",
        label: "Include all associated accounts",
        checked: includeAssociatedAccounts,
        onChange: ({
          checked
        }) => {
          setIncludeAssociatedAccounts(checked);
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "primary",
      disabled: !isValid,
      loading: loading,
      onClick: async () => {
        try {
          const result = await banAccounts(true);
          setDryRunData(result.data.banAccount);
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: "Analyze"
    }), dryRunData && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      isDanger: true,
      continueLabel: "Ban accounts",
      header: "Ban accounts",
      onClose: () => setDryRunData(null),
      disableSubmit: !dryRunData.isAllowed,
      continueHandler: async () => {
        try {
          const result = await banAccounts(false);
          setDryRunData(null);
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
            title: `Successfully banned ${result.data.banAccount.accounts.length} accounts`,
            message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
              whiteSpace: "pre-wrap",
              children: result.data.banAccount.message
            })
          });
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_BanAccountsSummary__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        dryRunData: dryRunData
      })
    })]
  });
};

BanAccount.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BanAccount"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BanAccount);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69078);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97619);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const BanAccountsSummary = ({
  dryRunData
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
      whiteSpace: "pre-wrap",
      lineHeight: "24px",
      children: dryRunData.message
    }), Boolean(dryRunData.accounts.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      fontSize: "13px",
      mt: 2,
      maxHeight: "300px",
      overflowY: "auto",
      children: ["List of impacted accounts:", ' ', dryRunData.accounts.map((account, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: [index > 0 && ', ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          collective: account,
          openInNewTab: true
        })]
      }, account.id))]
    })]
  });
};

BanAccountsSummary.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BanAccountsSummary",
  "props": {
    "dryRunData": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BanAccountsSummary);

/***/ }),

/***/ 39840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export searchQuery */
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29242);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68185);
/* harmony import */ var _search_page_StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91496);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32606);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41433);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31330);
/* harmony import */ var _BanAccounts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(48282);
/* harmony import */ var _BanAccountsSummary__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7857);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_18__, _BanAccounts__WEBPACK_IMPORTED_MODULE_19__]);
([_ToastProvider__WEBPACK_IMPORTED_MODULE_18__, _BanAccounts__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























const searchQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query SearchPage($term: String!, $offset: Int) {
    accounts(
      searchTerm: $term
      limit: 12
      offset: $offset
      skipRecentAccounts: false
      orderBy: { field: CREATED_AT, direction: DESC }
      type: [COLLECTIVE, EVENT, FUND, INDIVIDUAL, ORGANIZATION, PROJECT]
    ) {
      nodes {
        id
        isActive
        type
        slug
        name
        tags
        isHost
        imageUrl
        backgroundImageUrl
        description
        longDescription
        website
        currency
        location {
          id
          country
        }
        stats {
          id
          totalAmountReceived(useCache: true) {
            currency
            valueInCents
          }
        }
        ... on Organization {
          host {
            id
            hostFeePercent
            totalHostedCollectives
          }
        }
        ... on AccountWithParent {
          parent {
            id
            slug
            backgroundImageUrl
          }
        }
        backers: members(role: BACKER) {
          totalCount
        }
        memberOf(role: BACKER) {
          totalCount
        }
      }
      limit
      offset
      totalCount
    }
  }
`;
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "BanAccountsWithSearch__CardContainer",
  componentId: "sc-lmqxxu-0"
})(["border-radius:16px;cursor:crosshair;transition:box-shadow 0.3s;&:hover{box-shadow:0px 0px 10px rgba(0,0,0,0.1);}", ""], props => props.$isSelected && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["box-shadow:0px 0px 10px red;&:hover{box-shadow:0px 0px 5px red;}"]));
const AccountsContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "BanAccountsWithSearch__AccountsContainer",
  componentId: "sc-lmqxxu-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:20px;margin-top:20px;"]);

const BanAccountsWithSearch = () => {
  const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('');
  const {
    data,
    loading,
    error,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(searchQuery, {
    variables: {
      term: searchTerm
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T,
    skip: !searchTerm
  });
  const [selectedAccounts, setSelectedAccounts] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  const [includeAssociatedAccounts, setIncludeAssociatedAccounts] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true);
  const [dryRunData, setDryRunData] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);
  const [_banAccounts, {
    loading: submitting
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_BanAccounts__WEBPACK_IMPORTED_MODULE_19__/* .banAccountsMutation */ .V, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  });
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const isValid = Boolean(selectedAccounts?.length);

  const toggleAccountSelection = account => {
    return !selectedAccounts.some(selectedAccount => selectedAccount.id === account.id) ? setSelectedAccounts(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()([...selectedAccounts, account], 'id')) : setSelectedAccounts(selectedAccounts.filter(a => a.id !== account.id));
  };

  const banAccounts = (dryRun = true) => _banAccounts({
    variables: {
      account: selectedAccounts.map(a => ({
        id: a.id
      })),
      includeAssociatedAccounts,
      dryRun
    }
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      placeholder: "Search accounts",
      onSubmit: setSearchTerm,
      disabled: loading || submitting
    }), error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      error: error
    }) : loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      height: 300,
      width: "100%",
      mt: "20px"
    }) : data?.accounts?.nodes?.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(AccountsContainer, {
      children: data.accounts.nodes.map(account => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(CardContainer, {
        $isSelected: selectedAccounts.some(a => a.id === account.id),
        onClick: () => toggleAccountSelection(account),
        role: "button",
        tabIndex: 0,
        onKeyPress: e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccountSelection(account);
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_search_page_StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          collective: account,
          bodyHeight: 200,
          pb: 3,
          px: 3,
          fontSize: "11px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            children: [account.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
              mb: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                openInNewTabNoFollow: true,
                href: account.website,
                children: lodash_truncate__WEBPACK_IMPORTED_MODULE_1___default()(account.website, {
                  length: 128
                })
              })
            }), account.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
              fontSize: "11px",
              children: lodash_truncate__WEBPACK_IMPORTED_MODULE_1___default()(account.description, {
                length: 120
              })
            })]
          })
        })
      }, account.id))
    }) : searchTerm ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
      my: 4,
      textAlign: "center",
      fontSize: "25px",
      children: ["No results for ", searchTerm]
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
      flexWrap: "wrap",
      px: 1,
      mt: 4,
      justifyContent: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        label: "Include all associated accounts",
        checked: includeAssociatedAccounts,
        onChange: ({
          checked
        }) => {
          setIncludeAssociatedAccounts(checked);
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      mt: 3,
      width: "100%",
      buttonStyle: "primary",
      disabled: !isValid,
      loading: submitting,
      onClick: async () => {
        try {
          const result = await banAccounts(true);
          setDryRunData(result.data.banAccount);
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: "Analyze"
    }), dryRunData && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      isDanger: true,
      continueLabel: "Ban accounts",
      header: "Ban accounts",
      cancelHandler: () => setDryRunData(null),
      disableSubmit: !dryRunData.isAllowed,
      continueHandler: async () => {
        try {
          const result = await banAccounts(false);
          setDryRunData(null);
          setSelectedAccounts([]);
          refetch(); // Refresh the search results, no need to wait for it

          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
            title: `Successfully banned ${result.data.banAccount.accounts.length} accounts`,
            message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
              whiteSpace: "pre-wrap",
              children: result.data.banAccount.message
            })
          });
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_BanAccountsSummary__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        dryRunData: dryRunData
      })
    })]
  });
};

BanAccountsWithSearch.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BanAccountsWithSearch"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BanAccountsWithSearch);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35007);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97965);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5993);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41433);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_8__, _StyledInputField__WEBPACK_IMPORTED_MODULE_12__, _ToastProvider__WEBPACK_IMPORTED_MODULE_14__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_8__, _StyledInputField__WEBPACK_IMPORTED_MODULE_12__, _ToastProvider__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const CACHE_TYPES = Object.values(_lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_7__/* .AccountCacheType */ .EP);
const clearCacheMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation ClearCache($account: AccountReferenceInput!, $cacheTypes: [AccountCacheType!]) {
    clearCacheForAccount(account: $account, type: $cacheTypes) {
      id
      slug
      name
    }
  }
`;

const ClearCacheForAccountForm = () => {
  const [account, setAccount] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);
  const [cacheTypes, setCacheTypes] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(() => [...CACHE_TYPES]);
  const [clearCache, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(clearCacheMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  });
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .useToasts */ .e1)();
  const isValid = account && cacheTypes.length > 0;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      htmlFor: "clear-cache-account",
      label: "Account",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        inputId: id,
        onChange: ({
          value
        }) => setAccount(value),
        skipGuests: false
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
      fontWeight: "normal",
      fontSize: "14px",
      color: "black.800",
      mt: 3,
      mb: 2,
      children: "Cache types"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
      flexWrap: "wrap",
      px: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        label: "All",
        checked: cacheTypes.length === CACHE_TYPES.length,
        onChange: ({
          checked
        }) => {
          if (checked) {
            setCacheTypes(CACHE_TYPES);
          } else {
            setCacheTypes([]);
          }
        }
      }), CACHE_TYPES.map(cacheType => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
        ml: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          label: lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default()(cacheType.toLowerCase()),
          checked: cacheTypes.includes(cacheType),
          onChange: ({
            checked
          }) => {
            if (checked) {
              setCacheTypes(lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([...cacheTypes, cacheType]));
            } else {
              setCacheTypes(cacheTypes.filter(t => t !== cacheType));
            }
          }
        })
      }, cacheType))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "primary",
      disabled: !isValid,
      loading: loading,
      onClick: async () => {
        try {
          const result = await clearCache({
            variables: {
              account: {
                legacyId: account.id
              },
              cacheTypes
            }
          });
          const resultAccount = result.data.clearCacheForAccount;
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
            message: `Cache cleared for ${resultAccount.name} (@${resultAccount.slug})`
          });
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: ["Clear cache", account ? ` for ${account.name}` : '']
    })]
  });
};

ClearCacheForAccountForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ClearCacheForAccountForm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearCacheForAccountForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5993);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97619);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87262);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_6__, _StyledInputField__WEBPACK_IMPORTED_MODULE_10__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_6__, _StyledInputField__WEBPACK_IMPORTED_MODULE_10__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const connectAccountsMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ConnectAccounts($memberAccount: AccountReferenceInput!, $account: AccountReferenceInput!) {
    createMember(memberAccount: $memberAccount, account: $account, role: CONNECTED_ACCOUNT) {
      id
    }
  }
`;
const CONNECTED_ACCOUNT_ACCEPTED_TYPES = [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.EVENT */ .eV.EVENT, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.PROJECT */ .eV.PROJECT, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_3__/* .CollectiveType.FUND */ .eV.FUND];

const ConnectAccountsForm = () => {
  const [submitConnectAccounts, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(connectAccountsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  const [memberAccount, setMemberAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [account, setAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .useToasts */ .e1)();
  const isValid = memberAccount && account;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const connectCTA = getConnectCTA(memberAccount, account);

  const connectAccounts = async () => {
    try {
      await submitConnectAccounts({
        variables: {
          memberAccount: {
            legacyId: memberAccount.id
          },
          account: {
            legacyId: account.id
          }
        }
      });
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            collective: memberAccount
          }), " is now connected to ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            collective: account
          })]
        })
      }); // Reset the form

      setMemberAccount(null);
      setAccount(null);
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        variant: 'light',
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "flex-end",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        htmlFor: "connect-account-1",
        label: "Make...",
        flex: "1 1",
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          inputId: id,
          onChange: option => setMemberAccount(option?.value || null),
          collective: memberAccount,
          types: CONNECTED_ACCOUNT_ACCEPTED_TYPES,
          isClearable: true
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "flex-end",
      mt: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        htmlFor: "connect-account-2",
        label: "...a connected account of",
        flex: "1 1",
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          inputId: id,
          onChange: option => setAccount(option?.value || null),
          filterResults: accounts => !memberAccount ? accounts : accounts.filter(a => a.id !== memberAccount.id),
          collective: account,
          types: CONNECTED_ACCOUNT_ACCEPTED_TYPES,
          isClearable: true
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "primary",
      disabled: !isValid,
      loading: loading,
      onClick: () => connectAccounts(),
      children: connectCTA
    })]
  });
};

const getConnectCTA = (fromAccount, toAccount) => {
  if (!fromAccount || !toAccount) {
    return 'Connect';
  } else {
    return `Connect @${fromAccount.slug} to @${toAccount.slug}`;
  }
};

ConnectAccountsForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ConnectAccountsForm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectAccountsForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5993);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_9__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_9__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const mergeAccountsMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation MergeAccounts($fromAccount: AccountReferenceInput!, $toAccount: AccountReferenceInput!, $dryRun: Boolean!) {
    mergeAccounts(fromAccount: $fromAccount, toAccount: $toAccount, dryRun: $dryRun) {
      message
      account {
        id
        name
        slug
      }
    }
  }
`;

const MergeAccountsForm = () => {
  const [submitMergeAccounts, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(mergeAccountsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  const [mergeSummary, setMergeSummary] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [fromAccount, setFromAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [toAccount, setToAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .useToasts */ .e1)();
  const isValid = fromAccount && toAccount;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const mergeCTA = getMergeCTA(fromAccount, toAccount);

  const mergeAccounts = async (dryRun = true) => {
    try {
      const result = await submitMergeAccounts({
        variables: {
          dryRun,
          fromAccount: {
            legacyId: fromAccount.id
          },
          toAccount: {
            legacyId: toAccount.id
          }
        }
      });
      const resultMessage = result.data.mergeAccounts.message;

      if (dryRun) {
        setMergeSummary(resultMessage);
      } else {
        const successMessage = `@${fromAccount.slug} has been merged into @${toAccount.slug}`;
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
          message: !resultMessage ? successMessage : `${successMessage}\n${resultMessage}`
        }); // Reset the form

        setMergeSummary(null);
        setFromAccount(null);
        setToAccount(null);
      }
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        variant: 'light',
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "flex-end",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        htmlFor: "merge-account-1",
        label: "Merge Account...",
        flex: "1 1",
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          inputId: id,
          onChange: option => setFromAccount(option?.value || null),
          collective: fromAccount,
          isClearable: true,
          noCache: true // Don't cache to prevent showing merged collectives
          ,
          skipGuests: false
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      alignItems: "flex-end",
      mt: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        htmlFor: "merge-account-2",
        label: "...into",
        flex: "1 1",
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          inputId: id,
          onChange: option => setToAccount(option?.value || null),
          filterResults: accounts => !fromAccount ? accounts : accounts.filter(a => a.id !== fromAccount.id),
          collective: toAccount,
          types: fromAccount ? [fromAccount.type] : undefined,
          isClearable: true,
          noCache: true // Don't cache to prevent showing merged collectives
          ,
          skipGuests: false
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "danger",
      disabled: !isValid,
      loading: loading,
      onClick: () => mergeAccounts(true),
      children: mergeCTA
    }), mergeSummary && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      isDanger: true,
      continueLabel: "Merge profiles",
      header: mergeCTA,
      continueHandler: () => mergeAccounts(false),
      cancelHandler: () => setMergeSummary(false),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
        whiteSpace: "pre-wrap",
        lineHeight: "24px",
        children: mergeSummary
      })
    })]
  });
};

const getMergeCTA = (fromAccount, toAccount) => {
  if (!fromAccount || !toAccount) {
    return 'Merge';
  } else {
    return `Merge @${fromAccount.slug} into @${toAccount.slug}`;
  }
};

MergeAccountsForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MergeAccountsForm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MergeAccountsForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5700);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17632);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11194);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5993);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47988);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97619);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37278);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41433);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87262);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51082);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(66943);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_18__, _ToastProvider__WEBPACK_IMPORTED_MODULE_23__]);
([_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_18__, _ToastProvider__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const moveOrdersFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  fragment MoveOrdersFields on Order {
    id
    legacyId
    description
    createdAt
    amount {
      valueInCents
      currency
    }
    fromAccount {
      id
      name
      slug
      isIncognito
      imageUrl(height: 48)
    }
    toAccount {
      id
      slug
      name
    }
  }
`;
const ordersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query AuthoredOrdersRoot($account: AccountReferenceInput!) {
    orders(account: $account, filter: OUTGOING, limit: 100, includeIncognito: true) {
      nodes {
        id
        ...MoveOrdersFields
      }
    }
  }
  ${moveOrdersFieldsFragment}
`;
const moveOrdersMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation MoveOrders($orders: [OrderReferenceInput!]!, $fromAccount: AccountReferenceInput!, $makeIncognito: Boolean) {
    moveOrders(orders: $orders, fromAccount: $fromAccount, makeIncognito: $makeIncognito) {
      id
      ...MoveOrdersFields
    }
  }
  ${moveOrdersFieldsFragment}
`;

const getOrdersOptionsFromData = (intl, data) => {
  if (!data?.orders) {
    return [];
  }

  return data.orders.nodes.map(order => {
    const date = intl.formatDate(order.createdAt);
    const amount = (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_4__/* .formatCurrency */ .xG)(order.amount.valueInCents, order.amount.currency, {
      locale: intl.locale
    });
    return {
      value: order,
      label: `${date} - ${amount} contribution to @${order.toAccount.slug} (#${order.legacyId})`
    };
  });
};

const getCallToAction = (selectedOrdersOptions, newFromAccount) => {
  if (newFromAccount?.isIncognito) {
    return `Mark ${selectedOrdersOptions.length} contributions as incognito`;
  } else {
    const base = `Move ${selectedOrdersOptions.length} contributions`;
    return !newFromAccount ? base : `${base} to @${newFromAccount.slug}`;
  }
};

const getToAccountCustomOptions = fromAccount => {
  if (!fromAccount) {
    return [];
  } // The select is always prefilled with the current account


  const fromAccountOption = {
    [_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__/* .FLAG_COLLECTIVE_PICKER_COLLECTIVE */ .rA]: true,
    value: fromAccount
  };

  if (!(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__/* .isIndividualAccount */ .Sh)(fromAccount)) {
    return [fromAccountOption];
  } // Add the incognito profile option for individuals


  const incognitoLabel = `@${fromAccount.slug}'s incognito profile`;
  return [fromAccountOption, {
    [_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__/* .FLAG_COLLECTIVE_PICKER_COLLECTIVE */ .rA]: true,
    label: incognitoLabel,
    value: {
      name: incognitoLabel,
      useIncognitoProfile: true,
      isIncognito: true
    }
  }];
};

const formatOrderOption = (option, intl) => {
  const order = option.value;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
    alignItems: "center",
    title: order.description,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
      collective: order.fromAccount,
      size: 24
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
      fontSize: "10px",
      mx: 2,
      minWidth: 75,
      children: intl.formatDate(order.createdAt)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
      fontSize: "13px",
      children: [(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_4__/* .formatCurrency */ .xG)(order.amount.valueInCents, order.amount.currency, {
        locale: intl.locale
      }), " contribution to @", order.toAccount.slug, " (#", order.legacyId, ")"]
    })]
  });
};

const getOrdersQueryOptions = selectedProfile => {
  return {
    skip: !selectedProfile,
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T,
    variables: selectedProfile ? {
      account: {
        legacyId: selectedProfile.id
      }
    } : null,
    fetchPolicy: 'network-only'
  };
};

const MoveAuthoredContributions = () => {
  // Local state and hooks
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_23__/* .useToasts */ .e1)();
  const [fromAccount, setFromAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [newFromAccount, setNewFromAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [hasConfirmationModal, setHasConfirmationModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [hasConfirmed, setHasConfirmed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [selectedOrdersOptions, setSelectedOrderOptions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const isValid = Boolean(fromAccount && newFromAccount && selectedOrdersOptions.length);
  const callToAction = getCallToAction(selectedOrdersOptions, newFromAccount);
  const toAccountCustomOptions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getToAccountCustomOptions(fromAccount), [fromAccount]);
  const hasConfirmCheckbox = !newFromAccount?.useIncognitoProfile; // GraphQL

  const {
    data,
    loading,
    error: ordersQueryError
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ordersQuery, getOrdersQueryOptions(fromAccount));
  const allOptions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getOrdersOptionsFromData(intl, data), [intl, data]);
  const mutationOptions = {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  };
  const [submitMoveContributions] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(moveOrdersMutation, mutationOptions);

  const moveContributions = async () => {
    try {
      // Prepare variables
      const ordersInputs = selectedOrdersOptions.map(({
        value
      }) => ({
        id: value.id
      }));
      const mutationVariables = {
        orders: ordersInputs
      };

      if (newFromAccount.useIncognitoProfile) {
        mutationVariables.fromAccount = {
          legacyId: fromAccount.id
        };
        mutationVariables.makeIncognito = true;
      } else {
        mutationVariables.fromAccount = {
          legacyId: newFromAccount.id
        };
      } // Submit


      await submitMoveContributions({
        variables: mutationVariables
      });
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_23__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        title: 'Contributions moved successfully',
        message: callToAction
      }); // Reset form and purge cache

      setHasConfirmationModal(false);
      setFromAccount(null);
      setNewFromAccount(null);
      setSelectedOrderOptions([]);
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_23__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  if (ordersQueryError) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      error: ordersQueryError
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      htmlFor: "fromAccount",
      label: "Account that authored the contribution",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        skipGuests: false,
        inputId: id,
        collective: fromAccount,
        isClearable: true,
        onChange: option => {
          setFromAccount(option?.value || null);
          setSelectedOrderOptions([]);
          setNewFromAccount(null);
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
      mt: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Label */ .__, {
          fontWeight: "normal",
          htmlFor: "contributions",
          children: "Select contributions"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          buttonStyle: "secondary",
          isBorderless: true,
          onClick: () => setSelectedOrderOptions(allOptions),
          disabled: !fromAccount,
          children: "Select all"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP, {
        isLoading: loading,
        options: allOptions,
        value: selectedOrdersOptions,
        inputId: "contributions",
        onChange: options => setSelectedOrderOptions(options),
        isClearable: true,
        isMulti: true,
        closeMenuOnSelect: false,
        disabled: !fromAccount,
        truncationThreshold: 5,
        formatOptionLabel: option => formatOrderOption(option, intl)
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      htmlFor: "toAccount",
      label: "Move to",
      flex: "1 1",
      mt: 3,
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        inputId: id,
        collective: newFromAccount,
        isClearable: true,
        onChange: option => setNewFromAccount(option?.value || null),
        disabled: !fromAccount,
        customOptions: toAccountCustomOptions,
        skipGuests: false
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "primary",
      disabled: !isValid,
      onClick: () => setHasConfirmationModal(true),
      children: callToAction
    }), hasConfirmationModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      header: callToAction,
      continueHandler: moveContributions,
      disableSubmit: hasConfirmCheckbox && !hasConfirmed,
      onClose: () => {
        setHasConfirmationModal(false);
        setHasConfirmed(false);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_22__.P, {
        fontSize: "14px",
        lineHeight: "18px",
        children: ["You're about to move the following contributions from", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          as: _LinkCollective__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
          collective: fromAccount,
          openInNewTab: true
        }), " to", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          as: _LinkCollective__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
          collective: newFromAccount,
          openInNewTab: true
        }), ". Are you sure you want to proceed?"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        maxHeight: 300,
        overflowY: "auto",
        border: "1px solid lightgrey",
        borderRadius: "8px",
        mt: 3,
        children: selectedOrdersOptions.map((option, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          title: option.value.description,
          borderTop: !index ? undefined : '1px solid lightgrey',
          p: 2,
          children: formatOrderOption(option, intl)
        }, option.value.id))
      }), hasConfirmCheckbox && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        type: "warning",
        mt: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          name: "has-confirmed-move-contributions",
          checked: hasConfirmed,
          onChange: ({
            checked
          }) => setHasConfirmed(checked),
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx("strong", {
              children: "Warning"
            }), ": I understand that the payment methods used for the contributions will be re-affected to the new profile, which must have the permission to use them."]
          })
        })
      })]
    })]
  });
};

MoveAuthoredContributions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MoveAuthoredContributions"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveAuthoredContributions);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MoveExpenses)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5993);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47988);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _ExpensesPickerAsync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40502);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92129);
/* harmony import */ var _LinkExpense__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35493);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87262);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51082);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _ToastProvider__WEBPACK_IMPORTED_MODULE_19__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _ToastProvider__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const moveExpensesMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation MoveExpensesMutation($destinationAccount: AccountReferenceInput!, $expenses: [ExpenseReferenceInput!]!) {
    moveExpenses(destinationAccount: $destinationAccount, expenses: $expenses) {
      id
    }
  }
`;
function MoveExpenses() {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .useToasts */ .e1)();
  const [submitMoveExpenses] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(moveExpensesMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  });
  const [sourceAccount, setSourceAccount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [destinationAccount, setDestinationAccount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [selectedExpenses, setSelectedExpenses] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
  const [isConfirmationModelOpen, setIsConfirmationModelOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const allowedAccountTypes = Object.values(lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType */ .eV, [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.USER */ .eV.USER, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.INDIVIDUAL */ .eV.INDIVIDUAL]));
  const callToAction = `Move ${selectedExpenses.length} expenses`;
  const moveExpenses = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(async () => {
    try {
      const selectedExpensesInput = selectedExpenses.map(({
        value
      }) => ({
        id: value.id
      }));
      const mutationVariables = {
        expenses: selectedExpensesInput,
        destinationAccount: {
          legacyId: destinationAccount.id
        }
      };
      await submitMoveExpenses({
        variables: mutationVariables
      });
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        title: 'Expenses moved successfully',
        message: callToAction
      }); // Reset form and purge cache

      setIsConfirmationModelOpen(false);
      setSourceAccount(null);
      setDestinationAccount(null);
      setSelectedExpenses([]);
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  }, [selectedExpenses, destinationAccount, callToAction]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      htmlFor: "sourceAccount",
      label: "Source account for the expenses",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        types: allowedAccountTypes,
        inputId: id,
        collective: sourceAccount,
        isClearable: true,
        onChange: option => {
          setSourceAccount(option?.value || null);
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      htmlFor: "selectedExpenses",
      label: "Select expenses",
      flex: "1 1",
      mt: 3,
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ExpensesPickerAsync__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        value: selectedExpenses,
        inputId: id,
        onChange: options => setSelectedExpenses(options),
        disabled: !sourceAccount,
        closeMenuOnSelect: false,
        account: sourceAccount,
        noCache: true,
        isMulti: true,
        isClearable: true
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      htmlFor: "destinationAccount",
      label: "Account that will receive the expenses",
      flex: "1 1",
      mt: 3,
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        types: allowedAccountTypes,
        inputId: id,
        disabled: selectedExpenses.length === 0,
        collective: destinationAccount,
        isClearable: true,
        onChange: option => {
          setDestinationAccount(option?.value || null);
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "primary",
      disabled: !selectedExpenses.length === 0 || !destinationAccount,
      onClick: () => setIsConfirmationModelOpen(true),
      children: callToAction
    }), isConfirmationModelOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      header: callToAction,
      continueHandler: moveExpenses,
      onClose: () => setIsConfirmationModelOpen(false),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
        children: ["You're about to move ", selectedExpenses.length, " expenses to", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          as: _Link__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
          href: `/${destinationAccount.slug}`,
          openInNewTab: true,
          children: destinationAccount.name
        }), "."]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        maxHeight: 300,
        overflowY: "auto",
        border: "1px solid lightgrey",
        borderRadius: "8px",
        mt: 3,
        children: selectedExpenses.map(({
          value: expense
        }, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          title: expense.description,
          borderTop: !index ? undefined : '1px solid lightgrey',
          p: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_LinkExpense__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            openInNewTab: true,
            collective: expense.account,
            expense: expense,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                ml: 2,
                fontSize: "11px",
                children: ["#", expense.legacyId]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__/* .Span */ .Dr, {
                fontSize: "12px",
                ml: 2,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
                  value: expense.createdAt
                }), " - ", expense.description]
              })]
            })
          })
        }, expense.id))
      })]
    })]
  });
}
MoveExpenses.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MoveExpenses"
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17632);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11194);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5993);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47988);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92129);
/* harmony import */ var _OrdersPickerAsync__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84465);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87262);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51082);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66943);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _ToastProvider__WEBPACK_IMPORTED_MODULE_19__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _ToastProvider__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const moveOrdersMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation MoveOrdersMutation($orders: [OrderReferenceInput!]!, $tier: TierReferenceInput) {
    moveOrders(orders: $orders, tier: $tier) {
      id
      legacyId
      description
      createdAt
      amount {
        valueInCents
        currency
      }
      tier {
        id
        legacyId
      }
      fromAccount {
        id
        name
        slug
        isIncognito
        imageUrl(height: 48)
      }
      toAccount {
        id
        slug
        name
      }
    }
  }
`;
const accountTiersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query MoveContributionsTiersQuery($accountSlug: String!) {
    account(slug: $accountSlug) {
      id
      settings
      ... on AccountWithContributions {
        tiers {
          nodes {
            id
            legacyId
            slug
            name
          }
        }
      }
    }
  }
`;

const getCallToAction = (selectedOrdersOptions, newTier) => {
  const base = `Move ${selectedOrdersOptions.length} contributions`;

  if (newTier === 'custom') {
    return `${base} to the "custom contribution" tier`;
  } else {
    return !newTier ? base : `${base} to "${newTier.name}" (#${newTier.legacyId})`;
  }
};

const getTierOption = tier => {
  return {
    value: tier,
    label: `#${tier.legacyId} - ${tier.name}`
  };
};

const getTiersOptions = (tiers, accountSettings) => {
  if (!tiers) {
    return [];
  }

  const tiersOptions = tiers.map(getTierOption);

  if (!accountSettings?.disableCustomContributions) {
    tiersOptions.unshift({
      value: 'custom',
      label: 'Custom contribution'
    });
  }

  return tiersOptions;
};

const MoveReceivedContributions = () => {
  // Local state and hooks
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .useToasts */ .e1)();
  const [receiverAccount, setReceiverAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [hasConfirmationModal, setHasConfirmationModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [selectedOrdersOptions, setSelectedOrderOptions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const [newTier, setNewTier] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const isValid = Boolean(receiverAccount && selectedOrdersOptions.length && newTier);
  const callToAction = getCallToAction(selectedOrdersOptions, newTier); // Fetch tiers

  const tiersQueryVariables = {
    accountSlug: receiverAccount?.slug
  };
  const tiersQueryOptions = {
    skip: !receiverAccount,
    variables: tiersQueryVariables,
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  };
  const {
    data: tiersData,
    loading: tiersLoading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(accountTiersQuery, tiersQueryOptions);
  const tiersNodes = tiersData?.account.tiers?.nodes;
  const accountSettings = tiersData?.account.settings;
  const tiersOptions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getTiersOptions(tiersNodes, accountSettings), [tiersNodes, accountSettings]); // Move contributions mutation

  const mutationOptions = {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  };
  const [submitMoveContributions] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(moveOrdersMutation, mutationOptions);

  const moveContributions = async () => {
    try {
      // Prepare variables
      const ordersInputs = selectedOrdersOptions.map(({
        value
      }) => ({
        id: value.id
      }));
      const mutationVariables = {
        orders: ordersInputs,
        tier: newTier === 'custom' ? {
          isCustom: true
        } : {
          id: newTier.id
        }
      }; // Submit

      await submitMoveContributions({
        variables: mutationVariables
      });
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        title: 'Contributions moved successfully',
        message: callToAction
      }); // Reset form and purge cache

      setHasConfirmationModal(false);
      setReceiverAccount(null);
      setNewTier(null);
      setSelectedOrderOptions([]);
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      htmlFor: "receiverAccount",
      label: "Account that received the contributions",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        inputId: id,
        collective: receiverAccount,
        isClearable: true,
        onChange: option => {
          setReceiverAccount(option?.value || null);
          setSelectedOrderOptions([]);
          setNewTier(null);
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      htmlFor: "contributions",
      label: "Select contributions",
      flex: "1 1",
      mt: 3,
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_OrdersPickerAsync__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        value: selectedOrdersOptions,
        inputId: id,
        onChange: options => setSelectedOrderOptions(options),
        disabled: !receiverAccount,
        closeMenuOnSelect: false,
        account: receiverAccount,
        filter: "INCOMING",
        includeIncognito: true,
        isMulti: true,
        isClearable: true
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      htmlFor: "tier",
      label: "Select destination tier",
      flex: "1 1",
      mt: 3,
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
        inputId: id,
        disabled: !tiersData,
        isLoading: tiersLoading,
        onChange: ({
          value
        }) => setNewTier(value),
        options: tiersOptions,
        value: !newTier ? null : getTierOption(newTier)
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "primary",
      disabled: !isValid,
      onClick: () => setHasConfirmationModal(true),
      children: callToAction
    }), hasConfirmationModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      header: callToAction,
      continueHandler: moveContributions,
      onClose: () => setHasConfirmationModal(false),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
        children: ["You're about to move ", selectedOrdersOptions.length, " orders to", ' ', newTier === 'custom' ? 'the custom contribution tier' : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          as: _Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
          href: `/${receiverAccount.slug}/contribute/${newTier.slug}-${newTier.legacyId}`,
          openInNewTab: true,
          children: [newTier.name, " (#", newTier.legacyId, ")"]
        }), "."]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        maxHeight: 300,
        overflowY: "auto",
        border: "1px solid lightgrey",
        borderRadius: "8px",
        mt: 3,
        children: selectedOrdersOptions.map(({
          value: order
        }, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          title: order.description,
          borderTop: !index ? undefined : '1px solid lightgrey',
          p: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
            alignItems: "center",
            title: order.description,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
              collective: order.receiverAccount,
              size: 24
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              fontSize: "10px",
              mx: 2,
              minWidth: 75,
              children: ["#", order.legacyId]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
              flexDirection: "column",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__/* .Span */ .Dr, {
                fontSize: "13px",
                children: [intl.formatDate(order.createdAt), ' - ', (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_3__/* .formatCurrency */ .xG)(order.amount.valueInCents, order.amount.currency, {
                  locale: intl.locale
                }), ' ', "contribution to @", order.toAccount.slug]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__/* .Span */ .Dr, {
                fontSize: "13px",
                children: ["Current tier:", ' ', order.tier ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  as: _Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                  href: `/${order.toAccount.slug}/contribute/${order.tier.slug}-${order.tier.legacyId}`,
                  openInNewTab: true,
                  children: order.tier.name
                }) : 'Custom contribution']
              })]
            })]
          })
        }, order.id))
      })]
    })]
  });
};

MoveReceivedContributions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MoveReceivedContributions"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveReceivedContributions);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_panel_sections_ActivityLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13112);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5993);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87262);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_admin_panel_sections_ActivityLog__WEBPACK_IMPORTED_MODULE_1__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__, _StyledInputField__WEBPACK_IMPORTED_MODULE_4__]);
([_admin_panel_sections_ActivityLog__WEBPACK_IMPORTED_MODULE_1__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__, _StyledInputField__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const RootActivityLog = () => {
  const [account, setAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    my: 4,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      htmlFor: "activity-log-account",
      label: "Account",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        inputId: id,
        onChange: ({
          value
        }) => setAccount(value),
        collective: account
      })
    }), account && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_admin_panel_sections_ActivityLog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      accountSlug: account.slug
    })]
  });
};

RootActivityLog.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RootActivityLog"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootActivityLog);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5993);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87262);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_8__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__, _StyledInputField__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const collectivePickerSearchQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .gqlV1 */ .N
/* GraphQL */
`
  query UnhostAccountSearchQuery($term: String!, $types: [TypeOfCollective], $limit: Int, $hostCollectiveIds: [Int]) {
    search(term: $term, types: $types, limit: $limit, hostCollectiveIds: $hostCollectiveIds) {
      id
      collectives {
        id
        type
        slug
        name
        imageUrl(height: 64)
        isActive
        host {
          id
          slug
          name
        }
      }
    }
  }
`;
const unhostAccountMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation UnhostAccount($account: AccountReferenceInput!) {
    removeHost(account: $account) {
      id
      slug
      name
      ... on AccountWithHost {
        host {
          id
        }
      }
    }
  }
`;

const UnhostAccountForm = () => {
  const [account, setAccount] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [unhostAccount, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(unhostAccountMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_8__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      htmlFor: "clear-cache-account",
      label: "Account to unhost",
      flex: "1 1",
      children: ({
        id
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        inputId: id,
        onChange: ({
          value
        }) => setAccount(value),
        types: ['COLLECTIVE', 'FUND'],
        searchQuery: collectivePickerSearchQuery,
        filterResults: collectives => collectives.filter(c => Boolean(c.host)),
        collective: account,
        noCache: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      mt: 4,
      width: "100%",
      buttonStyle: "primary",
      disabled: !account,
      loading: loading,
      onClick: async () => {
        if (!account.host) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_8__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: 'This account has no host'
          });
          return;
        } else if (!confirm(`You're about to unhost ${account.name} (@${account.slug}) from ${account.host.name} (@${account.host.slug}). Are you sure?`)) {
          return;
        }

        try {
          const result = await unhostAccount({
            variables: {
              account: {
                legacyId: account.id
              }
            }
          });
          const resultAccount = result.data.removeHost;
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_8__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
            message: `${resultAccount.name} (@${resultAccount.slug}) has been unhosted`
          });
          setAccount(null);
        } catch (e) {
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_8__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
            message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, e)
          });
        }
      },
      children: ["Unhost ", account ? `${account.name} (@${account.slug})` : '']
    })]
  });
};

UnhostAccountForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UnhostAccountForm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnhostAccountForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78080);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82497);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97619);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

const _excluded = ["collective", "tag", "bodyHeight", "children", "borderRadius", "showWebsite", "useLink"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const MaskSVG = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  width: "216",
  height: "94",
  fill: "none",
  version: "1.1",
  viewBox: "0 0 216 94"
}, props), {}, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("mask", {
      width: "218",
      height: "106",
      x: "-1",
      y: "-1",
      maskUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        fill: "#fff",
        d: "M0 8a8 8 0 018-8h200a8 8 0 018 8v95.719H0V8z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        stroke: "#141414",
        strokeOpacity: "0.08",
        d: "M216 104.219h.5V8A8.5 8.5 0 00208-.5H8A8.5 8.5 0 00-.5 8v96.219H216z"
      })]
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
      fill: "#fff",
      fillOpacity: "1",
      strokeWidth: "1.019",
      d: "M-29.076-51.033V94.016h350.922v-145.05zm7.889 10.678h320.992v122.23l-30.217.016C148.917 81.89 42.4 33.48-21.188-40.355z",
      clipPath: "none",
      opacity: "1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("g", {
      fillRule: "evenodd",
      stroke: "#000",
      clipRule: "evenodd",
      opacity: "0.256",
      transform: "translate(-.473 -2.219)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M154.819 85.253a1.097 1.097 0 10.242-2.18 1.097 1.097 0 10-.242 2.18z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M136.433 82.941a.825.825 0 10.184-1.64.825.825 0 00-.184 1.64z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M203.299 87.726a1.474 1.474 0 001.628-1.3 1.473 1.473 0 00-1.303-1.625 1.471 1.471 0 10-.325 2.925z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M114.367 70.557a1.883 1.883 0 002.08-1.66 1.881 1.881 0 00-1.665-2.076 1.88 1.88 0 10-.415 3.737z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M186.109 83.318a2.378 2.378 0 10.525-4.726 2.381 2.381 0 00-2.63 2.101 2.379 2.379 0 002.105 2.625z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M143.791 80.918a2.919 2.919 0 003.224-2.574 2.916 2.916 0 00-2.58-3.217 2.919 2.919 0 00-3.224 2.575 2.916 2.916 0 002.58 3.216z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M212.607 84.193a3.386 3.386 0 003.74-2.987 3.382 3.382 0 00-2.993-3.732 3.385 3.385 0 00-3.74 2.987 3.382 3.382 0 002.993 3.732z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M163.805 82.538c3.205.354 6.092-1.951 6.447-5.15a5.83 5.83 0 00-5.16-6.433c-3.205-.355-6.091 1.95-6.446 5.149a5.829 5.829 0 005.159 6.434z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M128.729 71.28c3.205.355 6.092-1.95 6.447-5.149a5.83 5.83 0 00-5.16-6.434 5.837 5.837 0 00-6.447 5.15 5.83 5.83 0 005.16 6.433z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M66.675 52.908a1.1 1.1 0 001.456-.543 1.1 1.1 0 00-2-.909 1.096 1.096 0 00.544 1.452z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M53.207 44.413a.824.824 0 10.685-1.5.824.824 0 10-.685 1.5z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M91.587 58.032c.946.43 2.063.013 2.494-.931a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.934 2.49z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M49.346 37.675c.947.43 2.064.013 2.495-.932a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.933 2.49z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M78.377 55.988a3.142 3.142 0 004.158-1.553 3.13 3.13 0 00-1.556-4.149 3.142 3.142 0 00-4.158 1.553 3.13 3.13 0 001.556 4.15z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M60.83 44.779a2.922 2.922 0 003.867-1.444 2.911 2.911 0 00-1.447-3.86 2.922 2.922 0 00-3.867 1.445 2.911 2.911 0 001.447 3.859z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M101.667 57.106a4.87 4.87 0 006.445-2.407 4.853 4.853 0 00-2.412-6.432 4.87 4.87 0 00-6.445 2.407 4.852 4.852 0 002.412 6.432z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M72.624 47.481a5.844 5.844 0 007.734-2.888 5.822 5.822 0 00-2.895-7.718 5.844 5.844 0 00-7.733 2.888 5.822 5.822 0 002.894 7.718z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
        d: "M49.527 30.937a5.844 5.844 0 007.734-2.889 5.822 5.822 0 00-2.894-7.718 5.844 5.844 0 00-7.734 2.889 5.822 5.822 0 002.894 7.718z"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
      fill: "#000",
      stroke: "#d7dbe0",
      d: "M299.255-21.884v-.6c-21.806-.021-46.554-.047-72.687-.075-83.118-.088-180.234-.191-241.156-.192C7.777 6.713 53.995 31.648 99.682 50.092c46.031 18.583 91.412 30.534 111.052 33.881 13.3 2.267 32.194 2.943 49.455 2.397 8.627-.273 16.833-.85 23.715-1.684 6.667-.808 12.04-1.85 15.351-3.068V-18.991z",
      opacity: "0.063"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("path", {
      fill: "#000",
      stroke: "#c0c5cc",
      d: "M15.177 4.672c-12.039-9.276-19.48-21.62-16.53-37.18 12.985-.001 57.111-.049 108.753-.104l33.53-.037c65.42-.07 134.576-.14 164.911-.14v58.76c0 .942.247 2.058.644 3.295.4 1.243.963 2.642 1.62 4.158.513 1.185 1.08 2.438 1.675 3.75.937 2.067 1.942 4.283 2.904 6.614 3.141 7.611 5.693 16.147 3.643 23.681-2.028 7.45-8.62 14.098-24.231 17.838-15.628 3.744-40.181 4.537-77.885.323-37.237-4.162-66.277-17.735-90.837-31.272-5.346-2.946-10.491-5.898-15.464-8.75-6.43-3.688-12.57-7.211-18.484-10.344-10.503-5.563-20.374-9.944-30.062-11.925-15.249-3.119-32.031-9.301-44.187-18.667z",
      opacity: "0.06"
    })]
  })]
}));

const StyledBackgroundMask = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MaskSVG).withConfig({
  displayName: "StyledCollectiveCard__StyledBackgroundMask",
  componentId: "sc-ljfh0u-0"
})(["width:101%;height:102%;top:0;left:-1px;position:absolute;"]);

const getBackground = collective => {
  const parent = collective.parentCollective || collective.parent;
  const backgroundImage = collective.backgroundImageUrl || parent?.backgroundImageUrl;

  const primaryColor = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective.settings, 'collectivePage.primaryColor', '#1776E1');

  return backgroundImage ? `url(${backgroundImage}) 0 0 / cover no-repeat, ${primaryColor}` : primaryColor;
};

const CollectiveContainer = ({
  useLink,
  collective,
  children
}) => {
  if (useLink) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      collective: collective,
      children: children
    });
  } else {
    return children;
  }
};

const getFlagEmoji = countryCode => {
  const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

/**
 * A card to show a collective that supports including a custom body.
 *
 * TODO: This component is mostly copies from ../StyledCollectiveCard.js added until we completely deprecate the discover page.
 */
const StyledCollectiveCard = _ref => {
  let {
    collective,
    tag,
    bodyHeight,
    children,
    borderRadius,
    showWebsite,
    useLink
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const regionNames = (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_15__/* .getIntlDisplayNames */ ._)(intl.locale, 'region');
  const collectiveCountry = collective.location?.country || collective.parent?.location?.country;
  const countryString = collectiveCountry ? `${getFlagEmoji(collectiveCountry)} ${regionNames.of(collectiveCountry)}` : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    position: "relative",
    borderRadius: borderRadius,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      position: "absolute",
      width: "95%",
      right: "0",
      pt: "41.25%",
      style: {
        background: getBackground(collective)
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(StyledBackgroundMask, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      position: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        height: 74,
        px: 3,
        pt: 26,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          borderRadius: borderRadius,
          background: "white",
          width: 48,
          border: "3px solid white",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
              "data-cy": "collective-avatar",
              collective: collective,
              radius: 48
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: bodyHeight,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          p: 3,
          pb: 0,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
              mt: 3,
              fontSize: "16px",
              fontWeight: "bold",
              color: "black.800",
              title: collective.name,
              truncateOverflow: true,
              children: collective.name
            })
          }), showWebsite && collective.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
            fontSize: "11px",
            fontWeight: "400",
            title: collective.website,
            truncateOverflow: true,
            mt: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.600",
              href: collective.website,
              openInNewTabNoFollow: true,
              children: collective.website
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: [tag === undefined ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              display: "inline-block",
              variant: "rounded-right",
              my: 2,
              backgroundColor: "blue.50",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                tags: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__/* .getCollectiveMainTag */ .CJ)(null, null, collective.type)
              })
            }) : tag, countryString && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
              ml: 2,
              fontSize: "12px",
              color: "black.700",
              fontWeight: 400,
              children: countryString
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: collective.tags && collective.tags.filter(tag => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .IGNORED_TAGS.includes */ .bR.includes(tag)).slice(0, 4).map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              display: "inline-block",
              variant: "rounded-right",
              m: 1,
              children: tag
            }, tag))
          })]
        }), children]
      })]
    })]
  }));
};

StyledCollectiveCard.defaultProps = {
  bodyHeight: 336,
  borderRadius: 16,
  useLink: true
};
StyledCollectiveCard.__docgenInfo = {
  "description": "A card to show a collective that supports including a custom body.\n\nTODO: This component is mostly copies from ../StyledCollectiveCard.js added until we completely deprecate the discover page.",
  "methods": [],
  "displayName": "StyledCollectiveCard",
  "props": {
    "bodyHeight": {
      "defaultValue": {
        "value": "336",
        "computed": false
      },
      "description": "A fixed height for the content",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "borderRadius": {
      "defaultValue": {
        "value": "16",
        "computed": false
      },
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
    },
    "useLink": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "Displayed below the top header of the card",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "tag": {
      "description": "To replace the default tag. Set to `null` to hide tag",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "The collective to display",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "website": {
            "name": "string",
            "required": false
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "location": {
            "name": "shape",
            "value": {
              "country": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "union",
                "value": [{
                  "name": "number"
                }, {
                  "name": "string"
                }],
                "required": false
              },
              "location": {
                "name": "shape",
                "value": {
                  "country": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              },
              "location": {
                "name": "shape",
                "value": {
                  "country": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "showWebsite": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledCollectiveCard);

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

/***/ 66465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98216);


const RolesTranslations = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].HOST */ .Z.HOST]: {
    id: "Member.Role.HOST",
    defaultMessage: [{
      "type": 0,
      "value": "Host"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ADMIN */ .Z.ADMIN]: {
    id: "Member.Role.ADMIN",
    defaultMessage: [{
      "type": 0,
      "value": "Admin"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MEMBER */ .Z.MEMBER]: {
    id: "Member.Role.MEMBER",
    defaultMessage: [{
      "type": 0,
      "value": "Core Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONTRIBUTOR */ .Z.CONTRIBUTOR]: {
    id: "Member.Role.CONTRIBUTOR",
    defaultMessage: [{
      "type": 0,
      "value": "Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].BACKER */ .Z.BACKER]: {
    id: "Member.Role.BACKER",
    defaultMessage: [{
      "type": 0,
      "value": "Financial Contributor"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ATTENDEE */ .Z.ATTENDEE]: {
    id: "Member.Role.ATTENDEE",
    defaultMessage: [{
      "type": 0,
      "value": "Attendee"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].FOLLOWER */ .Z.FOLLOWER]: {
    id: "Member.Role.FOLLOWER",
    defaultMessage: [{
      "type": 0,
      "value": "Follower"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT]: {
    id: "Member.Role.ACCOUNTANT",
    defaultMessage: [{
      "type": 0,
      "value": "Accountant"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_COLLECTIVE */ .Z.CONNECTED_COLLECTIVE]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  },
  [_constants_roles__WEBPACK_IMPORTED_MODULE_1__/* ["default"].CONNECTED_ACCOUNT */ .Z.CONNECTED_ACCOUNT]: {
    id: "Member.Role.ConnectedAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Connected"
    }]
  }
});
/**
 * Translate a member role
 *
 * @param {func} `formatMessage` - see `injectIntl` or `useIntl`
 * @param {string} `role` - see `roles`
 */

const formatMemberRole = (intl, role) => {
  const i18nMsg = RolesTranslations[role];
  return i18nMsg ? intl.formatMessage(i18nMsg) : role;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatMemberRole);

/***/ }),

/***/ 5904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25730);
/* harmony import */ var _styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54812);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37278);
/* harmony import */ var _components_root_actions_AccountSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54686);
/* harmony import */ var _components_root_actions_BanAccounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48282);
/* harmony import */ var _components_root_actions_BanAccountsWithSearch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39840);
/* harmony import */ var _components_root_actions_ClearCacheForAccountForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84188);
/* harmony import */ var _components_root_actions_ConnectAccountsForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48746);
/* harmony import */ var _components_root_actions_MergeAccountsForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31907);
/* harmony import */ var _components_root_actions_MoveAuthoredContributions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(78812);
/* harmony import */ var _components_root_actions_MoveExpenses__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16381);
/* harmony import */ var _components_root_actions_MoveReceivedContributions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60250);
/* harmony import */ var _components_root_actions_RootActivityLog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32330);
/* harmony import */ var _components_root_actions_UnhostAccountForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(40321);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19156);
/* harmony import */ var _components_StyledHr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(173);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_5__, _components_root_actions_AccountSettings__WEBPACK_IMPORTED_MODULE_10__, _components_root_actions_BanAccounts__WEBPACK_IMPORTED_MODULE_11__, _components_root_actions_BanAccountsWithSearch__WEBPACK_IMPORTED_MODULE_12__, _components_root_actions_ClearCacheForAccountForm__WEBPACK_IMPORTED_MODULE_13__, _components_root_actions_ConnectAccountsForm__WEBPACK_IMPORTED_MODULE_14__, _components_root_actions_MergeAccountsForm__WEBPACK_IMPORTED_MODULE_15__, _components_root_actions_MoveAuthoredContributions__WEBPACK_IMPORTED_MODULE_16__, _components_root_actions_MoveExpenses__WEBPACK_IMPORTED_MODULE_17__, _components_root_actions_MoveReceivedContributions__WEBPACK_IMPORTED_MODULE_18__, _components_root_actions_RootActivityLog__WEBPACK_IMPORTED_MODULE_19__, _components_root_actions_UnhostAccountForm__WEBPACK_IMPORTED_MODULE_20__]);
([_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_5__, _components_root_actions_AccountSettings__WEBPACK_IMPORTED_MODULE_10__, _components_root_actions_BanAccounts__WEBPACK_IMPORTED_MODULE_11__, _components_root_actions_BanAccountsWithSearch__WEBPACK_IMPORTED_MODULE_12__, _components_root_actions_ClearCacheForAccountForm__WEBPACK_IMPORTED_MODULE_13__, _components_root_actions_ConnectAccountsForm__WEBPACK_IMPORTED_MODULE_14__, _components_root_actions_MergeAccountsForm__WEBPACK_IMPORTED_MODULE_15__, _components_root_actions_MoveAuthoredContributions__WEBPACK_IMPORTED_MODULE_16__, _components_root_actions_MoveExpenses__WEBPACK_IMPORTED_MODULE_17__, _components_root_actions_MoveReceivedContributions__WEBPACK_IMPORTED_MODULE_18__, _components_root_actions_RootActivityLog__WEBPACK_IMPORTED_MODULE_19__, _components_root_actions_UnhostAccountForm__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




























const GRID_TEMPLATE_COLUMNS = ['1fr', 'minmax(220px, 1fr) 6fr'];
const MENU = [{
  id: 'Accounts',
  type: 'category'
}, {
  id: 'Clear cache',
  title: 'Clear cache for account',
  Component: _components_root_actions_ClearCacheForAccountForm__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z
}, {
  id: 'Connect accounts',
  Component: _components_root_actions_ConnectAccountsForm__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z
}, {
  id: 'Merge accounts',
  isDangerous: true,
  Component: _components_root_actions_MergeAccountsForm__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  description: `Before merging user accounts, you must always make sure that the person who requested it own both emails. Merging means payment methods are merged too, so if we just merge 2 accounts because someones ask for it without verifying we could end up in a very bad situation.\nA simple way to do that is to send a unique random code to the other account they want to claim and ask them to share this code.`
}, {
  id: 'Unhost account',
  Component: _components_root_actions_UnhostAccountForm__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z
}, {
  id: 'Account Settings',
  Component: _components_root_actions_AccountSettings__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
}, {
  id: 'Activity Log',
  Component: _components_root_actions_RootActivityLog__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  useCard: false
}, {
  id: 'Contributions & Expenses',
  type: 'category'
}, {
  id: 'Move authored contributions',
  Component: _components_root_actions_MoveAuthoredContributions__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  description: `This tool is meant to edit the account that authored one or more contributions.
    It can be used to mark contributions as "Incognito" by picking the contributor's incognito profile in "Move to".
    The payment methods used for the contributions are re-affected to the new profile, so make sure they have the permission to use them.`
}, {
  id: 'Move received contributions',
  Component: _components_root_actions_MoveReceivedContributions__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  description: `This tool is meant to edit the account that received a contribution.
    Use it to move contributions to different tiers, sub-projects, events, etc.`
}, {
  id: 'Move expenses',
  Component: _components_root_actions_MoveExpenses__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  description: `This tool is meant to move expenses to another account.`
}, {
  id: 'Moderation',
  type: 'category'
}, {
  id: 'Ban accounts',
  Component: _components_root_actions_BanAccounts__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  isDangerous: true,
  description: 'Use this action to ban an account or a network of accounts.'
}, {
  id: 'Search & ban',
  Component: _components_root_actions_BanAccountsWithSearch__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  isDangerous: true
}]; // Add slug for menu sections

MENU.forEach(menu => menu.slug = slugify__WEBPACK_IMPORTED_MODULE_4___default()(menu.id, {
  lower: true
}));
const MenuEntry = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "root-actions__MenuEntry",
  componentId: "sc-197sot2-0"
})(["display:block;background:white;padding:16px;cursor:pointer;background:none;color:inherit;border:none;font:inherit;outline:inherit;width:100%;text-align:left;", " &:hover{background:#f9f9f9;}", ""], props => props.$isActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-weight:800;background:#f5faff;"]), props => props.$type === 'category' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:default;background:#f9f9f9;border-bottom:1px solid #eaeaea;box-shadow:0px -3px 6px #eaeaea;"]));

const RootActionsPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const selectedMenuEntry = MENU.find(m => m.slug === router.query.section) || MENU[1];
  const showHiddenActions = Boolean(router.query.showHiddenActions);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    disableSignup: true,
    rootOnly: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      maxWidth: "1000px",
      m: "0 auto",
      mt: 4,
      borderBottom: "1px solid #e5e5e5",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_23__.H1, {
        textAlign: "left",
        fontSize: "32px",
        py: 2,
        pl: 2,
        children: "Root actions"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .rj, {
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
      maxWidth: "1000px",
      m: "0 auto",
      mb: 5,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        borderRight: "1px solid #e5e5e5",
        children: MENU.filter(e => showHiddenActions || !e.isHidden).map(menuEntry => menuEntry.type === 'category' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(MenuEntry, {
          title: menuEntry.title || menuEntry.id,
          $type: "category",
          children: menuEntry.id
        }, menuEntry.id) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(MenuEntry, {
          as: _components_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
          href: `/opencollective/root-actions/${menuEntry.slug}`,
          shallow: true,
          title: menuEntry.title || menuEntry.id,
          $isActive: selectedMenuEntry.id === menuEntry.id,
          $type: menuEntry.type,
          children: menuEntry.id
        }, menuEntry.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_23__.H3, {
          lineHeight: "30px",
          fontSize: "24px",
          backgroundColor: "black.50",
          color: "black.800",
          p: 3,
          children: selectedMenuEntry.title || selectedMenuEntry.id
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          px: [2, 3, 4],
          children: [selectedMenuEntry.isDangerous && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            textAlign: "center",
            my: 4,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_StyledH, {
              fontSize: "30px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2__.ExclamationTriangle, {
                color: "red",
                size: 30
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledSpan, {
                ml: 3,
                children: "DANGEROUS ACTION"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_23__.P, {
              mt: 2,
              children: "Please be super careful with the action below, and double check everything you do."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
              width: "100%",
              mt: 4
            })]
          }), selectedMenuEntry.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            type: "info",
            withIcon: true,
            my: 3,
            lineHeight: "20px",
            whiteSpace: "pre-wrap",
            children: selectedMenuEntry.description
          }), selectedMenuEntry.useCard === false ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(selectedMenuEntry.Component, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_StyledCard__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            p: 4,
            my: 4,
            width: "100%",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(selectedMenuEntry.Component, {})
          })]
        })]
      })]
    })]
  });
};

RootActionsPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RootActionsPage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootActionsPage);

var _StyledH = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Text__WEBPACK_IMPORTED_MODULE_23__.H2).withConfig({
  displayName: "root-actions___StyledH",
  componentId: "sc-197sot2-1"
})({
  textShadow: '0px 2px 2px red'
});

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Text__WEBPACK_IMPORTED_MODULE_23__/* .Span */ .Dr).withConfig({
  displayName: "root-actions___StyledSpan",
  componentId: "sc-197sot2-2"
})({
  verticalAlign: 'middle'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 72743:
/***/ ((module) => {

module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 18022:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 51104:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 10054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 83514:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 86954:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 89711:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ 59969:
/***/ ((module) => {

module.exports = require("lodash/capitalize");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 39131:
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

module.exports = require("lodash/has");

/***/ }),

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 96839:
/***/ ((module) => {

module.exports = require("lodash/padStart");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 84159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

/***/ }),

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 42042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 94970:
/***/ ((module) => {

module.exports = import("diff");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,7619,7632,2143,986,242,8185,5993,7965,8720,4812,3112], () => (__webpack_exec__(5904)));
module.exports = __webpack_exports__;

})();