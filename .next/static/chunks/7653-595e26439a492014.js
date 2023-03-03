"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7653],{

/***/ 93129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 27596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ DEFAULT_AMOUNT_STYLES; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19377);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80642);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93129);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








/** Default styles for the amount (not including currency) */


var DEFAULT_AMOUNT_STYLES = {
  letterSpacing: 0,
  fontWeight: 'bold',
  color: 'black.900'
};
var EMPTY_AMOUNT_PLACEHOLDER = '--.--';
/**
 * A practical component to format amounts and their intervals with proper
 * internationalization support.
 */

var FormattedMoneyAmount = function FormattedMoneyAmount(_ref) {
  var formatWithSeparators = _ref.formatWithSeparators,
      abbreviateInterval = _ref.abbreviateInterval,
      currency = _ref.currency,
      precision = _ref.precision,
      amount = _ref.amount,
      interval = _ref.interval,
      frequency = _ref.frequency,
      amountStyles = _ref.amountStyles,
      showCurrencyCode = _ref.showCurrencyCode,
      currencyCodeStyles = _ref.currencyCodeStyles,
      isCrypto = _ref.isCrypto;

  if (!currency) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: EMPTY_AMOUNT_PLACEHOLDER
    }));
  }

  var formattedAmount = isNaN(amount) || lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(amount) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
    children: EMPTY_AMOUNT_PLACEHOLDER
  })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Currency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread({
    value: amount,
    currency: currency,
    precision: precision,
    formatWithSeparators: formatWithSeparators
  }, amountStyles));

  if (frequency) {
    interval = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .getIntervalFromContributionFrequency */ .Pw)(frequency);
  }

  var currencyCode = showCurrencyCode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, currencyCodeStyles), {}, {
    children: currency
  })) : '';

  if (isCrypto) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: "".concat(amount, " ").concat(currency)
    }));
  } else if (!interval || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].oneTime) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
        currencyCode: currencyCode
      }
    });
  } else if (abbreviateInterval) {
    var _interval;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
        interval: (_interval = interval) !== null && _interval !== void 0 ? _interval : '',
        currencyCode: currencyCode
      }
    });
  } else {
    var _interval2;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
        interval: (_interval2 = interval) !== null && _interval2 !== void 0 ? _interval2 : '',
        currencyCode: currencyCode
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
/* harmony default export */ __webpack_exports__["Z"] = (FormattedMoneyAmount);

/***/ }),

/***/ 97619:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44012);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


var _excluded = ["collective", "target", "title", "noTitle", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/**
 * Create a `Link` to the collective based on collective type.
 * It properly deals with type `EVENT` and `isIncognito`
 */



var LinkCollective = function LinkCollective(_ref) {
  var collective = _ref.collective,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? undefined : _ref$target,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? undefined : _ref$title,
      _ref$noTitle = _ref.noTitle,
      noTitle = _ref$noTitle === void 0 ? false : _ref$noTitle,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? undefined : _ref$children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  if (!collective || collective.isIncognito) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  } else if (collective.isGuest) {
    if (children) {
      return children;
    } else if (collective.name === 'Guest') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        id: "profile.guest",
        defaultMessage: [{
          "type": 0,
          "value": "Guest"
        }]
      });
    } else {
      return collective.name;
    }
  } else if (!collective.slug || collective.type === 'VENDOR') {
    return children || collective.name;
  }

  var type = collective.type,
      slug = collective.slug,
      name = collective.name,
      isIncognito = collective.isIncognito;

  if (type === 'USER' && (!name || isIncognito || !slug)) {
    return children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getCollectivePageRoute */ .x0)(collective),
    title: noTitle ? null : title || name,
    target: target
  }, props), {}, {
    children: children || name || slug
  }));
};

LinkCollective.__docgenInfo = {
  "description": "Create a `Link` to the collective based on collective type.\nIt properly deals with type `EVENT` and `isIncognito`",
  "methods": [],
  "displayName": "LinkCollective",
  "props": {
    "target": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "title": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "noTitle": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Set this to true to remove the `title` attribute from the link",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If not given, will render the name of the collective",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "The collective to link to",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "isGuest": {
            "name": "bool",
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (LinkCollective);

/***/ }),

/***/ 19377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ CurrencyPrecision; }
/* harmony export */ });
var CurrencyPrecision = {
  DEFAULT: 2
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CurrencyPrecision)));

/***/ }),

/***/ 80642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGQLV2FrequencyFromInterval": function() { return /* binding */ getGQLV2FrequencyFromInterval; }
/* harmony export */ });
var INTERVALS = {
  oneTime: 'oneTime',
  month: 'month',
  year: 'year',
  flexible: 'flexible'
};
var getGQLV2FrequencyFromInterval = function getGQLV2FrequencyFromInterval(interval) {
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
/* harmony default export */ __webpack_exports__["default"] = (INTERVALS);

/***/ }),

/***/ 17632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 15078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B1": function() { return /* binding */ getNextChargeDate; },
/* harmony export */   "EB": function() { return /* binding */ encodeDateInterval; },
/* harmony export */   "GF": function() { return /* binding */ simpleDateToISOString; },
/* harmony export */   "Pw": function() { return /* binding */ getIntervalFromContributionFrequency; },
/* harmony export */   "Zz": function() { return /* binding */ convertDateToApiUtc; },
/* harmony export */   "cq": function() { return /* binding */ convertDateFromApiUtc; },
/* harmony export */   "dr": function() { return /* binding */ parseDateInterval; },
/* harmony export */   "fM": function() { return /* binding */ toIsoDateStr; },
/* harmony export */   "j9": function() { return /* binding */ getDateFromValue; },
/* harmony export */   "qb": function() { return /* binding */ isValidDate; },
/* harmony export */   "xR": function() { return /* binding */ stripTime; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9883);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32475);
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_padStart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80642);
/* harmony import */ var _dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82114);




function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1___default()(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { return groups[name] = result[g[name]], groups; }, Object.create(null)); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_0___default()(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); return result && (result.groups = buildGroups(result, this)), result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }



/**
 * For a given date, return the next charge date.
 *
 * @param {Date} firstChargeDate
 * @param {month|year} interval
 */

var getNextChargeDate = function getNextChargeDate(firstChargeDate, interval) {
  if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_3__["default"].month) {
    if (firstChargeDate.getDate() > 15) {
      return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 2);
    }

    return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 1);
  } else if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_3__["default"].year) {
    return new Date(firstChargeDate.getFullYear() + 1, firstChargeDate.getMonth());
  } else {
    return null;
  }
};
/**
 * Format a datetime object to an ISO date like `YYYY-MM-DD`
 */

var toIsoDateStr = function toIsoDateStr(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getUTCDate();
  return "".concat(year, "-").concat(lodash_padStart__WEBPACK_IMPORTED_MODULE_2___default()(month.toString(), 2, '0'), "-").concat(lodash_padStart__WEBPACK_IMPORTED_MODULE_2___default()(day.toString(), 2, '0'));
};
/**
 * From an order frequency provided as `ContributionFrequency` GQLV2 enum, returns an interval
 * as we use it in the DB (ie. MONTHLY => month)
 */

var getIntervalFromContributionFrequency = function getIntervalFromContributionFrequency(input) {
  switch (input) {
    case 'MONTHLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_3__["default"].month;

    case 'YEARLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_3__["default"].year;

    case 'FLEXIBLE':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_3__["default"].flexible;

    default:
      return null;
  }
};
/**
 * Takes a date and returns it as a string in the format YYYY-MM-DD
 */

var stripTime = function stripTime(date) {
  if (!date) {
    return '';
  } else {
    return (0,_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(date).format('YYYY-MM-DD');
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

var getDateFromValue = function getDateFromValue(value) {
  if (!value) {
    return null;
  } else if (typeof value === 'string') {
    return new Date(value);
  } else if (value instanceof Date) {
    return value;
  } else if (value instanceof _dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z) {
    return value.toDate();
  }
};
/**
 * From a simple date as '2020-01-01', returns a string like '2020-01-01T00:00:00Z'.
 */

var simpleDateToISOString = function simpleDateToISOString(date, isEndOfDay, timezoneType) {
  if (!date) {
    return null;
  } else {
    var isUTC = timezoneType === 'UTC';
    var dayjsTimeMethod = isEndOfDay ? 'endOf' : 'startOf';
    var result = isUTC ? _dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utc */ .Z.utc(date) : (0,_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(date);
    return result[dayjsTimeMethod]('day').toISOString();
  }
};
/**
 * Parse `strValue` in a "dateFrom→dateTo" format and returns an object like { from, to, timezoneType }.
 * Each value in the object will be `undefined` if there's no filter for it.
 */

var parseDateInterval = function parseDateInterval(strValue) {
  var parsedValue = strValue === null || strValue === void 0 ? void 0 : strValue.match( /*#__PURE__*/_wrapRegExp(/^([^→]+)(\u2192(.+?(?=~UTC|$)))?(~(UTC))?$/, {
    from: 1,
    to: 3,
    timezoneType: 5
  }));

  if (parsedValue) {
    var getDateIsoString = function getDateIsoString(dateStr) {
      return !dateStr || dateStr === 'all' ? undefined : dateStr;
    };

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

var encodeDateInterval = function encodeDateInterval(interval) {
  if (!interval || !interval.from && !interval.to) {
    return '';
  }

  var encodeDate = function encodeDate(date, isEndOfDay) {
    return simpleDateToISOString(date, isEndOfDay, interval.timezoneType) || 'all';
  };

  var baseResult = "".concat(encodeDate(interval.from, false), "\u2192").concat(encodeDate(interval.to, true));
  return interval.timezoneType === 'UTC' ? "".concat(baseResult, "~UTC") : baseResult;
};
var convertDateToApiUtc = function convertDateToApiUtc(date, timezone) {
  var result = _dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tz */ .Z.tz(date, timezone).utc().format('YYYY-MM-DD HH:mm:ss+00'); // console.log('convertDateToApiUtc', date, timezone, result);

  return result;
};
var convertDateFromApiUtc = function convertDateFromApiUtc(date, timezone) {
  var result = (0,_dayjs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss'); // console.log('convertDateFromApiUtc', date, timezone, result);

  return result;
};
/**
 * Check if the date is valid while editing
 */

var isValidDate = function isValidDate(date) {
  return date && !date.startsWith('0');
};

/***/ })

}]);
//# sourceMappingURL=7653-595e26439a492014.js.map