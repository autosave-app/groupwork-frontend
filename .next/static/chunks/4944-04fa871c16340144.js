"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4944],{

/***/ 66337:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export formatFxRateInfo */
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59854);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95612);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51048);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95370);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);












var FX_RATE_SOURCE_LABEL = {
  PAYPAL: 'PayPal',
  OPENCOLLECTIVE: 'Open Collective',
  WISE: 'Wise'
};
var formatFxRateInfo = function formatFxRateInfo(intl, _ref) {
  var value = _ref.value,
      date = _ref.date,
      source = _ref.source,
      isApproximate = _ref.isApproximate;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      id: "x1RZku",
      defaultMessage: [{
        "type": 0,
        "value": "Exchange rate: "
      }, {
        "type": 1,
        "value": "value"
      }],
      values: {
        value: lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(value, 7)
      }
    }), source && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        id: "/gUYR+",
        defaultMessage: [{
          "type": 0,
          "value": "Source: "
        }, {
          "type": 1,
          "value": "source"
        }],
        values: {
          source: FX_RATE_SOURCE_LABEL[source] || source
        }
      })
    }), date && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        id: "dT6mUk",
        defaultMessage: [{
          "type": 0,
          "value": "Acquired on: "
        }, {
          "type": 1,
          "value": "date"
        }],
        values: {
          date: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DateTime__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            value: date,
            timeStyle: "short"
          })
        }
      })
    }), isApproximate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        role: "img",
        "aria-label": "Warning",
        children: "\u26A0\uFE0F"
      }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        id: "kIqdaN",
        defaultMessage: [{
          "type": 0,
          "value": "This amount is subject to fluctuations"
        }]
      })]
    })]
  });
};
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "AmountWithExchangeRateInfo__ContentContainer",
  componentId: "sc-r43d1a-0"
})(["white-space:nowrap;margin-right:4px;"]);

var AmountWithExchangeRateInfo = function AmountWithExchangeRateInfo(_ref2) {
  var _ref2$amount = _ref2.amount,
      exchangeRate = _ref2$amount.exchangeRate,
      currency = _ref2$amount.currency,
      value = _ref2$amount.value,
      valueInCents = _ref2$amount.valueInCents,
      showCurrencyCode = _ref2.showCurrencyCode;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    display: "block",
    containerVerticalAlign: "middle",
    noTooltip: !exchangeRate,
    content: function content() {
      return formatFxRateInfo(intl, exchangeRate);
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexWrap: "noWrap",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ContentContainer, {
        children: [(exchangeRate === null || exchangeRate === void 0 ? void 0 : exchangeRate.isApproximate) && "~ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          amount: valueInCents !== null && valueInCents !== void 0 ? valueInCents : Math.round(value * 100),
          currency: currency,
          precision: 2,
          amountStyles: null,
          showCurrencyCode: showCurrencyCode
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_11__/* .InfoCircle */ .Z, {
        size: "1em"
      })]
    })
  });
};

AmountWithExchangeRateInfo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AmountWithExchangeRateInfo",
  "props": {
    "amount": {
      "description": "",
      "type": {
        "name": "custom",
        "raw": "AmountPropTypeShape"
      },
      "required": false
    },
    "showCurrencyCode": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (AmountWithExchangeRateInfo);
formatFxRateInfo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "formatFxRateInfo"
};

/***/ }),

/***/ 81966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);





var getBaseFontSize = function getBaseFontSize(value, minFontSizeInPx, maxFontSizeInPx, maxLength, lengthThreshold) {
  if (!value || value.length < lengthThreshold) {
    return maxFontSizeInPx;
  } else if (value.length > maxLength) {
    return minFontSizeInPx;
  } else {
    var lengthRange = maxLength - lengthThreshold;
    var lengthReductionRatio = (value.length - lengthThreshold) / lengthRange;
    var sizeRange = maxFontSizeInPx - minFontSizeInPx;
    var sizeReduction = sizeRange * lengthReductionRatio;
    return Math.round(maxFontSizeInPx - sizeReduction);
  }
};

var formatResult = function formatResult(result, valueFormatter) {
  if (!valueFormatter) {
    return result;
  } else if (Array.isArray(result)) {
    return result.map(function (entry) {
      return typeof entry === 'number' ? valueFormatter(entry) : entry;
    });
  } else {
    return valueFormatter(result);
  }
};
/**
 * A magic text component whose size adapts based on string length.
 * By default the `maxFontSizeInPx` will be used, until the breakpoint defined by `lengthThreshold`
 * is reached. At this point the size will decreaze linearly until `maxLength` is reached, the
 * value will then always be equal to `minFontSizeInPx`.
 *
 * Please note that this component always round the font size to whole numbers, font-sizes like
 * `12.5px` are not supported.
 */


var AutosizeText = function AutosizeText(_ref) {
  var children = _ref.children,
      value = _ref.value,
      minFontSizeInPx = _ref.minFontSizeInPx,
      maxFontSizeInPx = _ref.maxFontSizeInPx,
      maxLength = _ref.maxLength,
      lengthThreshold = _ref.lengthThreshold,
      mobileRatio = _ref.mobileRatio,
      valueFormatter = _ref.valueFormatter;
  var baseFontSize = getBaseFontSize(value, minFontSizeInPx, maxFontSizeInPx, maxLength, lengthThreshold);
  var result = mobileRatio ? [Math.round(baseFontSize * mobileRatio), null, baseFontSize] : baseFontSize;
  return children({
    value: value,
    fontSize: formatResult(result, valueFormatter)
  });
};

AutosizeText.propTypes = {
  /** The value to display */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /** Minimum font size */
  minFontSizeInPx: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /** Maximum font size. Must be different from `minFontSizeInPx` */
  maxFontSizeInPx: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /** The maximum length of the string (`value`) */
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /** Length breakpoint where size will starts to be reduced */
  lengthThreshold: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),

  /** A render func that gets passed the fontSize in px */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),

  /** A function used to convert the value */
  valueFormatter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /** Reduction percentage on mobile */
  mobileRatio: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
};

var AutosizedSpan = function AutosizedSpan(_ref2) {
  var value = _ref2.value,
      fontSize = _ref2.fontSize;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .Dr, {
    fontSize: "".concat(fontSize, "px"),
    children: value
  });
};

AutosizeText.defaultProps = {
  children: AutosizedSpan
};
/* harmony default export */ __webpack_exports__["Z"] = (AutosizeText);

/***/ }),

/***/ 95370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ generateDateTitle; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86896);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82114);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97079);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);



var _excluded = ["value", "dateStyle", "timeStyle"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var TITLE_MESSAGE = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessage)({
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
var generateDateTitle = function generateDateTitle(intl, date) {
  return intl.formatMessage(TITLE_MESSAGE, {
    localTime: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .capitalize */ .kC)(intl.formatDate(date, {
      dateStyle: 'full',
      timeStyle: 'long'
    })),
    utcTime: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .capitalize */ .kC)(intl.formatDate(date, {
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

var DateTime = function DateTime(_ref) {
  var value = _ref.value,
      dateStyle = _ref.dateStyle,
      timeStyle = _ref.timeStyle,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      title = _React$useState2[0],
      setTitle = _React$useState2[1];

  var date = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(function () {
    return (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .getDateFromValue */ .j9)(value);
  }, [value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("time", _objectSpread(_objectSpread({}, props), {}, {
    title: title,
    dateTime: date.toISOString(),
    onMouseEnter: function onMouseEnter() {
      return setTitle(generateDateTitle(intl, date));
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedDate, {
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
/* harmony default export */ __webpack_exports__["Z"] = (DateTime);

/***/ }),

/***/ 78317:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ Terms; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16678);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16010);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);


var _defineMessages, _defineMessages2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









/**
 * All the terms defined here must have a matching translation
 * in both `TranslatedTerms` and `TranslatedDefinitions`.
 */



var Terms = {
  FISCAL_HOST: 'FISCAL_HOST',
  GIFT_CARD: 'GIFT_CARD',
  HOST_FEE: 'HOST_FEE',
  PLATFORM_FEE: 'PLATFORM_FEE',
  ESTIMATED_BUDGET: 'ESTIMATED_BUDGET',
  EXPENSE_TYPE: 'EXPENSE_TYPE',
  TOTAL_RAISED: 'TOTAL_RAISED',
  TOTAL_INCOME: 'TOTAL_INCOME',
  BALANCE: 'BALANCE'
};
var TranslatedTerms = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.FISCAL_HOST, {
  id: "Fiscalhost",
  defaultMessage: [{
    "type": 0,
    "value": "Fiscal Host"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.HOST_FEE, {
  id: "HostFee",
  defaultMessage: [{
    "type": 0,
    "value": "Host fee"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.PLATFORM_FEE, {
  id: "PlatformFee",
  defaultMessage: [{
    "type": 0,
    "value": "Platform fee"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.GIFT_CARD, {
  id: "GiftCard",
  defaultMessage: [{
    "type": 0,
    "value": "Gift Card"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.ESTIMATED_BUDGET, {
  id: "CollectivePage.SectionBudget.Annual",
  defaultMessage: [{
    "type": 0,
    "value": "Estimated annual budget"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.EXPENSE_TYPE, {
  id: "expense.type",
  defaultMessage: [{
    "type": 0,
    "value": "Type"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.TOTAL_RAISED, {
  id: "budgetSection-raised",
  defaultMessage: [{
    "type": 0,
    "value": "Total raised"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.TOTAL_INCOME, {
  id: "budgetSection-income",
  defaultMessage: [{
    "type": 0,
    "value": "Total income"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, Terms.BALANCE, {
  id: "CollectivePage.SectionBudget.Balance",
  defaultMessage: [{
    "type": 0,
    "value": "Today’s balance"
  }]
}), _defineMessages));
var TranslatedDefinitions = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)((_defineMessages2 = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.FISCAL_HOST, {
  id: "Fiscalhost.definition",
  defaultMessage: [{
    "type": 0,
    "value": "A Fiscal Host is an entity that holds the money on behalf of a Collective, and takes care of accounting, taxes, and invoices."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.HOST_FEE, {
  id: "host.hostFee.help",
  defaultMessage: [{
    "type": 0,
    "value": "The Host Fee is what a Fiscal Host charges a Collective for its services, such as holding funds, making expense payouts, meeting tax obligations, and access to the Open Collective software platform."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.PLATFORM_FEE, {
  id: "host.platformFee.help",
  defaultMessage: [{
    "type": 0,
    "value": "The Platform fee is what Open Collective charges for use of the software."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.GIFT_CARD, {
  id: "GiftCard.definition",
  defaultMessage: [{
    "type": 0,
    "value": "Gift cards empower your employees or community members to support the projects they love. "
  }, {
    "type": 8,
    "value": "learn-more-link",
    "children": [{
      "type": 0,
      "value": "Learn more"
    }]
  }, {
    "type": 0,
    "value": "."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.ESTIMATED_BUDGET, {
  id: "CollectivePage.SectionBudget.Annual.Definition",
  defaultMessage: [{
    "type": 0,
    "value": "Projected annual budget based on financial contributions over the past 12 months."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.EXPENSE_TYPE, {
  id: "expense.type.tooltip",
  defaultMessage: [{
    "type": 0,
    "value": "Select 'receipt' to get paid back for a purchase already made. Select 'invoice' if you are charging for your time, getting paid in advance, or do not have a receipt."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.TOTAL_RAISED, {
  id: "budgetSection-raised-definition",
  defaultMessage: [{
    "type": 0,
    "value": "Total net amount available to spend after fees."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.TOTAL_INCOME, {
  id: "budgetSection-total-income-definition",
  defaultMessage: [{
    "type": 0,
    "value": "Net all time, including host fees and direct contributions."
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, Terms.BALANCE, {
  id: "budgetSection-balance-definition",
  defaultMessage: [{
    "type": 0,
    "value": "The current balance of the account. Not including Projects and Events."
  }]
}), _defineMessages2));

var GiftCardLearnMoreLink = function GiftCardLearnMoreLink(msg) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    href: "/gift-cards",
    children: msg
  });
};

var TranslationParams = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()({}, Terms.GIFT_CARD, {
  'learn-more-link': GiftCardLearnMoreLink
});

var UnderlinedTerm = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].span.withConfig */ .ZP.span.withConfig({
  displayName: "DefinedTerm__UnderlinedTerm",
  componentId: "sc-jwaiun-0"
})(["border-bottom:2px dotted;cursor:help;", " ", " ", " ", " &:hover{color:", ";border-color:", ";}"], styled_system__WEBPACK_IMPORTED_MODULE_3__/* .color */ .$_, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .borderColor */ .tv, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .typography */ .cp, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_4__/* .textTransform */ .Qx, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__/* .themeGet */ .R)('colors.primary.500'));
/**
 * Underlines the given word and show a tooltip with the definition when focused
 * or hovered. Both the term and the definition are translated.
 */

var DefinedTerm = function DefinedTerm(_ref) {
  var intl = _ref.intl,
      term = _ref.term,
      textTransform = _ref.textTransform,
      fontSize = _ref.fontSize,
      _children = _ref.children,
      color = _ref.color,
      extraTooltipContent = _ref.extraTooltipContent;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    content: function content() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [intl.formatMessage(TranslatedDefinitions[term], TranslationParams[term]), extraTooltipContent]
      });
    },
    children: function children(props) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(UnderlinedTerm, _objectSpread(_objectSpread({}, props), {}, {
        textTransform: textTransform,
        color: color,
        borderColor: color,
        fontSize: fontSize,
        children: _children || intl.formatMessage(TranslatedTerms[term])
      }));
    }
  });
};

DefinedTerm.defaultProps = {
  color: 'black.700'
};
DefinedTerm.__docgenInfo = {
  "description": "Underlines the given word and show a tooltip with the definition when focused\nor hovered. Both the term and the definition are translated.",
  "methods": [],
  "displayName": "DefinedTerm",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'black.700'",
        "computed": false
      },
      "description": "Color for the text and the underline",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "term": {
      "description": "The term to be defined",
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"BALANCE\"",
          "computed": false
        }, {
          "value": "\"ESTIMATED_BUDGET\"",
          "computed": false
        }, {
          "value": "\"EXPENSE_TYPE\"",
          "computed": false
        }, {
          "value": "\"FISCAL_HOST\"",
          "computed": false
        }, {
          "value": "\"GIFT_CARD\"",
          "computed": false
        }, {
          "value": "\"HOST_FEE\"",
          "computed": false
        }, {
          "value": "\"PLATFORM_FEE\"",
          "computed": false
        }, {
          "value": "\"TOTAL_INCOME\"",
          "computed": false
        }, {
          "value": "\"TOTAL_RAISED\"",
          "computed": false
        }]
      },
      "required": false
    },
    "textTransform": {
      "description": "Applies to the underlined term",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "fontSize": {
      "description": "Font size",
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
    "children": {
      "description": "If provided, will be rendered in place of the term",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "extraTooltipContent": {
      "description": "Extra content to include with term definition",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(DefinedTerm));

/***/ }),

/***/ 10506:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63410);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17681);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34243);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79922);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1808);
/* harmony import */ var _lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72832);
/* harmony import */ var _icons_GiftCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19740);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);












/**
 * Shows the data of the given payout method
 */




var PaymentMethodTypeWithIcon = function PaymentMethodTypeWithIcon(_ref) {
  var isLoading = _ref.isLoading,
      type = _ref.type,
      iconSize = _ref.iconSize;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      height: 15,
      width: 90
    });
  }

  switch (type) {
    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_GiftCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
          ml: 2,
          children: (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_2__/* .i18nPaymentMethodType */ .i)(intl, type)
        })]
      });

    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_9__/* .CreditCard */ .a, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
          ml: 2,
          children: (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_2__/* .i18nPaymentMethodType */ .i)(intl, type)
        })]
      });

    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .PAYMENT_METHOD_TYPE.ALIPAY */ .td.ALIPAY:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_10__/* .Alipay */ .O, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
          ml: 2,
          children: "Alipay"
        })]
      });

    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .PAYMENT_METHOD_TYPE.PAYMENT */ .td.PAYMENT:
    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_1__/* .PAYMENT_METHOD_TYPE.SUBSCRIPTION */ .td.SUBSCRIPTION:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_11__/* .Paypal */ .z, {
          size: iconSize,
          color: "#192f86"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
          ml: 2,
          children: "PayPal"
        })]
      });

    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_12__/* .ExchangeAlt */ .w, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
          ml: 2,
          children: (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_2__/* .i18nPaymentMethodType */ .i)(intl, type)
        })]
      });
  }
};

PaymentMethodTypeWithIcon.defaultProps = {
  iconSize: 24
}; // @component

PaymentMethodTypeWithIcon.__docgenInfo = {
  "description": "Shows the data of the given payout method",
  "methods": [],
  "displayName": "PaymentMethodTypeWithIcon",
  "props": {
    "iconSize": {
      "defaultValue": {
        "value": "24",
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
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(PAYMENT_METHOD_TYPE)"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (PaymentMethodTypeWithIcon);

/***/ }),

/***/ 59924:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_RequestVirtualCardBtn; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputAmount.js
var StyledInputAmount = __webpack_require__(54029);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/edit-collective/RequestVirtualCardModal.js





var _templateObject;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






















var initialValues = {
  agreement: false,
  notes: undefined,
  budget: undefined,
  purpose: undefined
};
var requestVirtualCardMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation requestVirtualCard($notes: String, $purpose: String, $budget: Int, $account: AccountReferenceInput!) {\n    requestVirtualCard(notes: $notes, purpose: $purpose, budget: $budget, account: $account)\n  }\n"])));

var RequestVirtualCardModal = function RequestVirtualCardModal(props) {
  var _props$host, _props$host$settings, _props$host$settings$, _props$host$settings2, _props$host$settings3;

  var hasPolicy = Boolean((_props$host = props.host) === null || _props$host === void 0 ? void 0 : (_props$host$settings = _props$host.settings) === null || _props$host$settings === void 0 ? void 0 : (_props$host$settings$ = _props$host$settings.virtualcards) === null || _props$host$settings$ === void 0 ? void 0 : _props$host$settings$.policy);

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,client.useMutation)(requestVirtualCardMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      requestNewVirtualCard = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      isCreating = _useMutation2$.loading,
      createError = _useMutation2$.error;

  var formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: _objectSpread(_objectSpread({}, initialValues), {}, {
      collective: props.collective
    }),
    onSubmit: function onSubmit(values) {
      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _props$onSuccess, _props$onClose;

        var collective, notes, purpose, budget;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                collective = values.collective, notes = values.notes, purpose = values.purpose, budget = values.budget;
                _context.next = 3;
                return requestNewVirtualCard({
                  variables: {
                    notes: notes,
                    purpose: purpose,
                    budget: budget,
                    account: typeof collective.id === 'string' ? {
                      id: collective.id
                    } : {
                      legacyId: collective.id
                    }
                  }
                });

              case 3:
                (_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 ? void 0 : _props$onSuccess.call(props);
                addToast({
                  type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                  message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Collective.VirtualCards.RequestCard.Success",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Card requested!"
                    }]
                  })
                });
                (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validate: function validate(values) {
      var _values$notes;

      var errors = {};

      if (!values.agreement) {
        errors.agreement = 'Required';
      }

      if (!values.purpose) {
        errors.purpose = 'Required';
      }

      if (!values.notes && ((_values$notes = values.notes) === null || _values$notes === void 0 ? void 0 : _values$notes.lenght) > 10) {
        errors.notes = 'Required';
      }

      return errors;
    }
  });

  var handleClose = function handleClose() {
    var _props$onClose2;

    formik.setErrors({});
    (_props$onClose2 = props.onClose) === null || _props$onClose2 === void 0 ? void 0 : _props$onClose2.call(props);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* default */.ZP, _objectSpread(_objectSpread({
    width: "382px",
    onClose: handleClose,
    trapFocus: true
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
        onClose: props.onClose,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Collective.VirtualCards.RequestCard",
          defaultMessage: [{
            "type": 0,
            "value": "Request a Card"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
        pt: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Collective.VirtualCards.RequestCard.Description",
            defaultMessage: [{
              "type": 0,
              "value": "You can request your fiscal host to assign you a credit card for your expenses."
            }]
          })
        }), hasPolicy && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
            borderColor: "black.300",
            my: 3
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "13px",
            fontWeight: "600",
            lineHeight: "16px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Collective.VirtualCards.RequestCard.Policy",
              defaultMessage: [{
                "type": 0,
                "value": "Card use policy"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
              content: (_props$host$settings2 = props.host.settings) === null || _props$host$settings2 === void 0 ? void 0 : (_props$host$settings3 = _props$host$settings2.virtualcards) === null || _props$host$settings3 === void 0 ? void 0 : _props$host$settings3.policy
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          borderColor: "black.300",
          my: 3
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          labelFontSize: "13px",
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Collective.VirtualCards.RequestCard.MonthlyBudget",
            defaultMessage: [{
              "type": 0,
              "value": "Monthly Budget"
            }]
          }),
          htmlFor: "budget",
          error: formik.touched.budget && formik.errors.budget,
          labelFontWeight: "500",
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              currency: "USD",
              name: "budget",
              id: "budget",
              onChange: function onChange(value) {
                return formik.setFieldValue('budget', value);
              },
              value: formik.values.budget,
              disabled: isCreating
            }));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          mt: 3,
          labelFontSize: "13px",
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Collective.VirtualCards.RequestCard.Purpose",
            defaultMessage: [{
              "type": 0,
              "value": "Purpose"
            }]
          }),
          htmlFor: "purpose",
          error: formik.touched.purpose && formik.errors.purpose,
          labelFontWeight: "500",
          useRequiredLabel: true,
          required: true,
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              name: "purpose",
              id: "purpose",
              onChange: formik.handleChange,
              value: formik.values.purpose,
              type: "text",
              disabled: isCreating
            }));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          mt: 3,
          labelFontSize: "13px",
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "PrivateNotesToAdministrators",
            defaultMessage: [{
              "type": 0,
              "value": "Private notes to the administrators"
            }]
          }),
          htmlFor: "notes",
          error: formik.touched.notes && formik.errors.notes,
          labelFontWeight: "500",
          useRequiredLabel: true,
          required: true,
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              name: "notes",
              id: "notes",
              onChange: formik.handleChange,
              value: formik.values.notes,
              disabled: isCreating
            }));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mt: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
            name: "tos",
            label: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "16px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Collective.VirtualCards.RequestCard.Agreement",
                defaultMessage: [{
                  "type": 0,
                  "value": "I agree to all the terms and conditions set by the host and Open Collective"
                }]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                color: "black.500",
                children: " *"
              })]
            }),
            required: true,
            checked: formik.values.agreement,
            onChange: function onChange(_ref) {
              var checked = _ref.checked;
              return formik.setFieldValue('agreement', checked);
            },
            error: formik.touched.agreement && formik.errors.agreement
          })
        }), createError && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mt: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
            type: "error",
            fontSize: "13px",
            children: createError.message
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
        isFullWidth: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          display: "flex",
          justifyContent: ['center', 'flex-end'],
          flexWrap: "Wrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            my: 1,
            minWidth: 140,
            buttonStyle: 'primary',
            "data-cy": "confirmation-modal-continue",
            loading: isCreating,
            type: "submit",
            disabled: !formik.isValid,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "RequestCard",
              defaultMessage: [{
                "type": 0,
                "value": "Request Card"
              }]
            })
          })
        })
      })]
    })
  }));
};

RequestVirtualCardModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RequestVirtualCardModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "legacyId": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "id": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "string"
            }],
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "imageUrl": {
            "name": "string",
            "required": false
          },
          "settings": {
            "name": "shape",
            "value": {
              "virtualcards": {
                "name": "shape",
                "value": {
                  "autopause": {
                    "name": "bool",
                    "required": false
                  },
                  "requestcard": {
                    "name": "bool",
                    "required": false
                  },
                  "policy": {
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
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          },
          "id": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "string"
            }],
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "imageUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};

/** @component */
/* harmony default export */ var edit_collective_RequestVirtualCardModal = (RequestVirtualCardModal);
;// CONCATENATED MODULE: ./components/RequestVirtualCardBtn.js






var RequestVirtualCardBtn = function RequestVirtualCardBtn(_ref) {
  var children = _ref.children,
      collective = _ref.collective,
      host = _ref.host;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      showModal = _React$useState2[0],
      setShowModal = _React$useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [children({
      onClick: function onClick() {
        return setShowModal(true);
      }
    }), showModal && /*#__PURE__*/(0,jsx_runtime.jsx)(edit_collective_RequestVirtualCardModal, {
      host: host,
      collective: collective,
      onClose: function onClose() {
        return setShowModal(false);
      }
    })]
  });
};

RequestVirtualCardBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RequestVirtualCardBtn",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ var components_RequestVirtualCardBtn = (RequestVirtualCardBtn);

/***/ }),

/***/ 59049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52015);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);



var _excluded = ["filters", "onChange", "disabled", "getLabel", "selected", "minButtonWidth", "buttonHeight", "buttonPadding", "buttonGrow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var FilterButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).attrs({
  buttonSize: 'tiny',
  buttonStyle: 'standard'
}).withConfig({
  displayName: "StyledFilters__FilterButton",
  componentId: "sc-191fmam-0"
})(["font-size:14px;font-weight:400;height:", ";padding:", ";background:#f9fafb;border-color:white;color:", ";", " &:active{background-color:", ";color:", ";}&:focus{border:2px solid #050505;}"], function (props) {
  return props.heignt;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.theme.colors.black[800];
}, function (props) {
  return props['data-selected'] && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* .css */ .iv)(["&,&:hover,&:focus{background-color:", ";border:1px solid ", ";color:", ";box-shadow:none;}"], function (props) {
    return props.theme.colors.primary[100];
  }, function (props) {
    return props.theme.colors.primary[700];
  }, function (props) {
    return props.theme.colors.primary[900];
  });
}, function (props) {
  return props.theme.colors.primary[100];
}, function (props) {
  return props.theme.colors.primary[800];
});
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"].span.withConfig */ .ZP.span.withConfig({
  displayName: "StyledFilters__ButtonContainer",
  componentId: "sc-191fmam-1"
})(["", ""], function (props) {
  return props.flexGrow && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* .css */ .iv)(["flex-grow:", ";"], props.flexGrow);
});

var defaultGetLabel = function defaultGetLabel(filter) {
  return filter;
};
/**
 * A controlled component to display a list of filters.
 */


var StyledFilters = function StyledFilters(_ref) {
  var filters = _ref.filters,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$getLabel = _ref.getLabel,
      getLabel = _ref$getLabel === void 0 ? defaultGetLabel : _ref$getLabel,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? undefined : _ref$selected,
      _ref$minButtonWidth = _ref.minButtonWidth,
      minButtonWidth = _ref$minButtonWidth === void 0 ? undefined : _ref$minButtonWidth,
      _ref$buttonHeight = _ref.buttonHeight,
      buttonHeight = _ref$buttonHeight === void 0 ? '34px' : _ref$buttonHeight,
      _ref$buttonPadding = _ref.buttonPadding,
      buttonPadding = _ref$buttonPadding === void 0 ? '4px 14px' : _ref$buttonPadding,
      _ref$buttonGrow = _ref.buttonGrow,
      buttonGrow = _ref$buttonGrow === void 0 ? undefined : _ref$buttonGrow,
      flexProps = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StyledFlex, _objectSpread(_objectSpread({
    "data-cy": "filters",
    px: 1,
    py: 1,
    gap: "8px"
  }, flexProps), {}, {
    children: filters.map(function (filter) {
      var isSelected = filter === selected;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ButtonContainer, {
        flexGrow: buttonGrow,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FilterButton, {
          "data-cy": "filter-button ".concat(filter.toLowerCase()),
          onClick: isSelected ? undefined : function () {
            return onChange(filter);
          },
          "data-selected": isSelected,
          minWidth: minButtonWidth,
          disabled: disabled,
          height: buttonHeight,
          padding: buttonPadding,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
            whiteSpace: "nowrap",
            children: getLabel(filter)
          })
        })
      }, filter);
    })
  }));
};

StyledFilters.__docgenInfo = {
  "description": "A controlled component to display a list of filters.",
  "methods": [],
  "displayName": "StyledFilters",
  "props": {
    "disabled": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "getLabel": {
      "defaultValue": {
        "value": "filter => filter",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "selected": {
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
    "minButtonWidth": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
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
    },
    "buttonHeight": {
      "defaultValue": {
        "value": "'34px'",
        "computed": false
      },
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
    },
    "buttonPadding": {
      "defaultValue": {
        "value": "'4px 14px'",
        "computed": false
      },
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
    },
    "buttonGrow": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "filters": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledFilters);

var _StyledFlex = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC).withConfig({
  displayName: "StyledFilters___StyledFlex",
  componentId: "sc-191fmam-2"
})({
  overflowX: 'auto'
});

/***/ }),

/***/ 69931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59854);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74691);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);




var _excluded = ["value", "onChange", "onBlur"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var StyledInputPercentage = function StyledInputPercentage(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    append: "%",
    type: "number",
    min: "0",
    max: "100",
    appendProps: {
      color: 'black.600'
    },
    fontWeight: "normal",
    maxWidth: 100,
    step: "0.01"
  }, props), {}, {
    value: isNaN(value) ? '' : value,
    onChange: function onChange(e) {
      return _onChange(parseFloat(e.target.value));
    },
    onBlur: function onBlur(e) {
      var newValue = lodash_clamp__WEBPACK_IMPORTED_MODULE_3___default()(lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(parseFloat(e.target.value), 2), 0, 100);

      _onChange(isNaN(newValue) ? value : newValue);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }));
};

StyledInputPercentage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledInputPercentage",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onBlur": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputPercentage);

/***/ }),

/***/ 10732:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ EditTag; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45578);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33007);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(74684);
/* harmony import */ var _styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89478);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86896);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81385);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63351);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74688);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52015);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55348);
/* harmony import */ var _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34487);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19156);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);





var _excluded = ["suggestedTags", "value", "onChange", "renderUpdatedTags", "defaultValue", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var TagIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(_styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_13__/* .PriceTags */ .c).withConfig({
  displayName: "StyledInputTags__TagIcon",
  componentId: "sc-3xnaz6-0"
})(["margin-right:4px;"]);
var EditTag = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right',
  tabIndex: 0
}).withConfig({
  displayName: "StyledInputTags__EditTag",
  componentId: "sc-3xnaz6-1"
})(["border:1px dashed;cursor:pointer;position:relative;padding:2px 10px 2px 6px;background-color:", ";border-color:", ";color:", ";margin-right:4px;margin-bottom:4px;&:not([disabled]){&:hover,&:focus{background-color:", ";border-color:", ";svg{color:", ";}}}&:focus{outline:0;}&[disabled]{cursor:not-allowed;background:#f0f1f2;}", ""], function (props) {
  return props.theme.colors.white.full;
}, function (props) {
  return props.theme.colors.black[200];
}, function (props) {
  return props.theme.colors.black[700];
}, function (props) {
  return props.theme.colors.white.full;
}, function (props) {
  return props.theme.colors.blue[500];
}, function (props) {
  return props.theme.colors.blue[500];
}, function (props) {
  return props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* .css */ .iv)(["background-color:", ";border-color:", ";svg{color:", ";}color:", ";"], function (props) {
    return props.theme.colors.blue[50];
  }, function (props) {
    return props.theme.colors.blue[600];
  }, function (props) {
    return props.theme.colors.blue[600];
  }, function (props) {
    return props.theme.colors.black[900];
  });
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"].input.withConfig */ .ZP.input.withConfig({
  displayName: "StyledInputTags__Input",
  componentId: "sc-3xnaz6-2"
})(["font-size:12px;line-height:18px;border:0;margin-left:10px;outline:none;width:auto;::placeholder{color:", ";}"], function (props) {
  return props.theme.colors.black[400];
});
var InputWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu).withConfig({
  displayName: "StyledInputTags__InputWrapper",
  componentId: "sc-3xnaz6-3"
})(["position:sticky;top:0;padding:12px 16px;background-color:inherit;:not(:only-child){border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.colors.black[300];
});
var TagWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC).withConfig({
  displayName: "StyledInputTags__TagWrapper",
  componentId: "sc-3xnaz6-4"
})(["align-items:center;justify-content:space-between;:not(:first-child){border-top:1px solid ", ";}"], function (props) {
  return props.theme.colors.black[300];
});
var TagActionButton = styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"].button.withConfig */ .ZP.button.withConfig({
  displayName: "StyledInputTags__TagActionButton",
  componentId: "sc-3xnaz6-5"
})(["cursor:pointer;text-align:center;background-color:transparent;border:none;padding:5px;line-height:inherit;&:disabled{cursor:not-allowed;}"]);
var AddTagButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(TagActionButton).withConfig({
  displayName: "StyledInputTags__AddTagButton",
  componentId: "sc-3xnaz6-6"
})(["&:not([disabled]){color:", ";&:hover,&:focus{color:", ";}}"], function (props) {
  return props.theme.colors.blue[400];
}, function (props) {
  return props.theme.colors.blue[600];
});
var DeleteTagButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(TagActionButton).withConfig({
  displayName: "StyledInputTags__DeleteTagButton",
  componentId: "sc-3xnaz6-7"
})(["color:", ";&:hover{color:", ";}"], function (props) {
  return props.theme.colors.black[400];
}, function (props) {
  return props.theme.colors.black[600];
});
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__.defineMessages)({
  placeholder: {
    id: "StyledInputTags.Placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Create New Tag"
    }]
  },
  editLabel: {
    id: "StyledInputTags.EditLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Edit Tags"
    }]
  },
  addLabel: {
    id: "StyledInputTags.AddLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Add Tags"
    }]
  }
});

var getOptions = function getOptions(tags) {
  if (!tags || !tags.length) {
    return [];
  } else {
    return tags.map(function (tag) {
      return {
        label: tag,
        value: tag
      };
    });
  }
};

var StyledInputTags = function StyledInputTags(_ref) {
  var _ref2;

  var suggestedTags = _ref.suggestedTags,
      value = _ref.value,
      onChange = _ref.onChange,
      renderUpdatedTags = _ref.renderUpdatedTags,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3___default()(_ref, _excluded);

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef();
  var wrapperRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef();
  var scrollerRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),
      isOpen = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5__.useState(getOptions(value || defaultValue)),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState3, 2),
      tags = _React$useState4[0],
      setTags = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5__.useState(''),
      _React$useState6 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState5, 2),
      inputValue = _React$useState6[0],
      setInputValue = _React$useState6[1];

  var availableSuggestedTags = suggestedTags === null || suggestedTags === void 0 ? void 0 : suggestedTags.filter(function (st) {
    return !tags.some(function (t) {
      return t.value === st;
    });
  });
  var handleClose = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function () {
    if (isOpen) {
      setOpen(false);
    }
  }, [isOpen]);

  var addTag = function addTag(tag) {
    var newTags = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4___default()([].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(tags), [{
      label: tag.toLowerCase(),
      value: tag.toLowerCase()
    }]), 'value');

    setTags(newTags);
    onChange(newTags);
  };

  var handleToggleInput = function handleToggleInput() {
    if (isOpen) {
      handleClose();
    } else {
      setOpen(true);
      setTimeout(function () {
        var _inputRef$current;

        return inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      }, 50);
    }
  };

  var removeTag = function removeTag(tag, update) {
    var updatedTags = tags.filter(function (v) {
      return v.value !== tag;
    });
    setTags(updatedTags);

    if (update) {
      onChange(updatedTags);
    }
  }; // Close when clicking outside


  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(wrapperRef, function (outside) {
    if (outside) {
      handleClose();
    }
  }); // Closes the modal upon the `ESC` key press.

  (0,_lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
    callback: handleClose,
    keyMatch: _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_7__/* .ESCAPE_KEY */ .O_
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_16__/* .Manager */ .dK, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      ref: wrapperRef,
      flexWrap: "wrap",
      children: [(_ref2 = renderUpdatedTags ? tags : getOptions(value)) === null || _ref2 === void 0 ? void 0 : _ref2.map(function (tag) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          variant: "rounded-right",
          mr: "4px",
          mb: "4px",
          color: disabled ? 'black.500' : 'black.700',
          closeButtonProps: {
            onClick: function onClick() {
              return removeTag(tag.value, true);
            },
            disabled: disabled
          },
          children: tag.label
        }, tag.value);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_17__/* .Reference */ .s, {
        children: function children(_ref3) {
          var ref = _ref3.ref;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
            ref: ref,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(EditTag, {
              "data-cy": "styled-input-tags-open",
              active: isOpen,
              onClick: handleToggleInput,
              disabled: disabled,
              onKeyDown: function onKeyDown(e) {
                if (e.key === ' ') {
                  e.preventDefault();
                  handleToggleInput();
                }
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TagIcon, {
                size: "14px"
              }), ' ', (tags === null || tags === void 0 ? void 0 : tags.length) > 0 ? formatMessage(messages.editLabel) : formatMessage(messages.addLabel)]
            })
          });
        }
      }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_popper__WEBPACK_IMPORTED_MODULE_18__/* .Popper */ .r, {
        placement: "bottom",
        children: function children(_ref4) {
          var placement = _ref4.placement,
              ref = _ref4.ref,
              style = _ref4.style;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            "data-placement": placement,
            ref: ref,
            style: _objectSpread(_objectSpread({}, style), {}, {
              zIndex: 9999
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({
              m: 1,
              overflow: "auto",
              overflowY: "auto"
            }, props), {}, {
              ref: scrollerRef,
              boxShadow: "0px 4px 10px #C4C7CC",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(InputWrapper, {
                color: "black.400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TagIcon, {
                  size: "16px"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Input, {
                  "data-cy": "styled-input-tags-input",
                  disabled: disabled,
                  placeholder: formatMessage(messages.placeholder),
                  ref: inputRef,
                  value: inputValue,
                  onChange: function onChange(e) {
                    return setInputValue(e.target.value);
                  },
                  onBlur: function onBlur() {
                    if (!(availableSuggestedTags !== null && availableSuggestedTags !== void 0 && availableSuggestedTags.length)) {
                      handleClose();
                    }
                  },
                  onKeyPress: function onKeyPress(e) {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      var newTag = e.target.value.trim();

                      if (!newTag) {
                        return;
                      }

                      addTag(newTag);
                      setInputValue('');

                      if (!renderUpdatedTags) {
                        // Wait until new tag renders, otherwise we'll scroll to the second-last tag
                        requestAnimationFrame(function () {
                          var _scrollerRef$current;

                          return (_scrollerRef$current = scrollerRef.current) === null || _scrollerRef$current === void 0 ? void 0 : _scrollerRef$current.scrollTo(0, Number.MAX_SAFE_INTEGER);
                        }, 30);
                      }
                    }
                  }
                })]
              }), ((suggestedTags === null || suggestedTags === void 0 ? void 0 : suggestedTags.length) || (tags === null || tags === void 0 ? void 0 : tags.length)) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
                flexGrow: "1",
                children: [!(availableSuggestedTags !== null && availableSuggestedTags !== void 0 && availableSuggestedTags.length) ? null : availableSuggestedTags.map(function (st) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(TagWrapper, {
                    px: "16px",
                    py: "8px",
                    backgroundColor: "blue.50",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                      type: "info",
                      variant: "rounded-right",
                      children: st
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(AddTagButton, {
                      "data-cy": "styled-input-tags-add-suggestion-".concat(st),
                      disabled: disabled,
                      onClick: function onClick() {
                        addTag(st); // When adding the last suggested tag, focus the input

                        setTimeout(function () {
                          var _inputRef$current2;

                          return inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
                        }, 50);
                      },
                      onBlur: function onBlur() {
                        if (st === suggestedTags[suggestedTags.length - 1]) {
                          handleToggleInput();
                        }
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_19__/* .Plus */ .v, {
                        size: "10px"
                      })
                    })]
                  }, st);
                }), !renderUpdatedTags && tags.map(function (tag) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(TagWrapper, {
                    px: "16px",
                    py: "8px",
                    autoFocus: true,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                      variant: "rounded-right",
                      children: tag.label
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(DeleteTagButton, {
                      "data-cy": "styled-input-tags-remove-".concat(tag.value),
                      disabled: disabled,
                      onClick: function onClick() {
                        removeTag(tag.value);
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_20__/* .Times */ .u, {
                        size: "10px"
                      })
                    })]
                  }, tag.value);
                })]
              })]
            }))
          });
        }
      })]
    })
  });
};

StyledInputTags.defaultProps = {
  maxHeight: ['50vh', null, '30vh'],
  minWidth: '240px',
  renderUpdatedTags: true
};
StyledInputTags.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledInputTags",
  "props": {
    "maxHeight": {
      "defaultValue": {
        "value": "['50vh', null, '30vh']",
        "computed": false
      },
      "required": false
    },
    "minWidth": {
      "defaultValue": {
        "value": "'240px'",
        "computed": false
      },
      "required": false
    },
    "renderUpdatedTags": {
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
    "suggestedTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  },
  "composes": ["./StyledCard"]
};
/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.memo(StyledInputTags));

/***/ }),

/***/ 52847:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ StyledSelectFilter; },
/* harmony export */   "v": function() { return /* binding */ getSelectFilterStyles; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66943);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var getSelectFilterStyles = function getSelectFilterStyles(stylesFromProps) {
  return _objectSpread(_objectSpread({}, stylesFromProps || null), {}, {
    control: function control(baseStyles, state) {
      var styles = _objectSpread(_objectSpread(_objectSpread({}, baseStyles), {}, {
        background: '#F7F8FA',
        borderRadius: 100,
        padding: '0 8px',
        fontWeight: 500,
        borderColor: '#E8E9EB'
      }, (stylesFromProps === null || stylesFromProps === void 0 ? void 0 : stylesFromProps.control) || null), {}, {
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
};
/**
 * A superset of `StyledSelect` with custom styles, to use for selects that contains
 * filters for lists.
 */

var StyledSelectFilter = function StyledSelectFilter(props) {
  var styles = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return getSelectFilterStyles(props.styles);
  }, [props.styles]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
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

/***/ 14540:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46829);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52015);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _expenses_ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88243);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10732);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36422);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);





var _templateObject;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var setTagsMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default()(["\n  mutation SetTags($order: OrderReferenceInput, $expense: ExpenseReferenceInput, $tags: [String!]!) {\n    setTags(expense: $expense, order: $order, tags: $tags) {\n      order {\n        id\n        tags\n      }\n      expense {\n        id\n        tags\n      }\n    }\n  }\n"])));
/**
 * Display expense tags, with the ability to edit them. Triggers a migration whenever a tag changes.
 */

var TagsForAdmins = function TagsForAdmins(_ref) {
  var expense = _ref.expense,
      order = _ref.order,
      suggestedTags = _ref.suggestedTags;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useMutation)(setTagsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  }),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useMutation, 2),
      setTags = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var tagList = (expense === null || expense === void 0 ? void 0 : expense.tags) || (order === null || order === void 0 ? void 0 : order.tags);

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_StyledInputTags__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    disabled: loading,
    value: tagList,
    suggestedTags: suggestedTags,
    onChange: /*#__PURE__*/function () {
      var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(tags) {
        var referencedObject;
        return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                referencedObject = expense ? {
                  expense: {
                    id: expense.id
                  }
                } : {
                  order: {
                    id: order.id
                  }
                };
                _context.next = 4;
                return setTags({
                  variables: _objectSpread(_objectSpread({}, referencedObject), {}, {
                    tags: tags.map(function (tag) {
                      return tag.value;
                    })
                  })
                });

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                addToast({
                  type: _ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                  message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .i18nGraphqlException */ .t2)(intl, _context.t0)
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  });
};

var Tag = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_StyledTag__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).attrs({
  mb: '4px',
  mr: '4px',
  variant: 'rounded-right'
}).withConfig({
  displayName: "Tags__Tag",
  componentId: "sc-uszanm-0"
})([""]);

var Tags = function Tags(_ref3) {
  var expense = _ref3.expense,
      order = _ref3.order,
      isLoading = _ref3.isLoading,
      limit = _ref3.limit,
      getTagProps = _ref3.getTagProps,
      children = _ref3.children,
      canEdit = _ref3.canEdit,
      suggestedTags = _ref3.suggestedTags,
      showUntagged = _ref3.showUntagged;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
  var tagList = (expense === null || expense === void 0 ? void 0 : expense.tags) || (order === null || order === void 0 ? void 0 : order.tags);

  var renderTag = function renderTag(_ref4) {
    var tag = _ref4.tag,
        label = _ref4.label;
    var extraTagProps = (getTagProps === null || getTagProps === void 0 ? void 0 : getTagProps(tag)) || {};

    var renderedTag = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Tag, _objectSpread(_objectSpread({
      "data-cy": "expense-tag"
    }, extraTagProps), {}, {
      children: label !== null && label !== void 0 ? label : tag
    }), tag);

    return children ? children({
      key: tag,
      tag: tag,
      renderedTag: renderedTag,
      props: extraTagProps
    }) : renderedTag;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
    flexWrap: "wrap",
    alignItems: "flex-start",
    children: [(expense === null || expense === void 0 ? void 0 : expense.type) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_expenses_ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      type: expense.type,
      legacyId: expense.legacyId,
      isLoading: isLoading
    }), canEdit ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(TagsForAdmins, {
      expense: expense,
      order: order,
      suggestedTags: suggestedTags
    }) : tagList && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [tagList.slice(0, limit).map(function (tag) {
        return renderTag({
          tag: tag
        });
      }), showUntagged && renderTag({
        tag: 'untagged',
        label: intl.formatMessage((0,react_intl__WEBPACK_IMPORTED_MODULE_18__.defineMessage)({
          id: "8/OT+O",
          defaultMessage: [{
            "type": 0,
            "value": "Untagged"
          }]
        }))
      }), tagList.length > limit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Tag, {
        color: "black.600",
        title: tagList.slice(limit).join(', '),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          id: "expenses.countMore",
          defaultMessage: [{
            "type": 0,
            "value": "+ "
          }, {
            "type": 1,
            "value": "count"
          }, {
            "type": 0,
            "value": " more"
          }],
          values: {
            count: tagList.length - limit
          }
        })
      })]
    })]
  });
};

Tags.defaultProps = {
  limit: 4
};
Tags.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tags",
  "props": {
    "limit": {
      "defaultValue": {
        "value": "4",
        "computed": false
      },
      "description": "Max number of tags to display",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "A render func that gets passed the tag",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "getTagProps": {
      "description": "A function to build the tag props dynamically",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "canEdit": {
      "description": "Whether current user can edit the tags",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "suggestedTags": {
      "description": "If canEdit is true, this array is used to display suggested tags",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "status": {
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
          "legacyId": {
            "name": "number",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "order": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "status": {
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
          "legacyId": {
            "name": "number",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "showUntagged": {
      "description": "Whether to show an \"Untagged\" tag (when used for filtering)",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (Tags);

/***/ }),

/***/ 47924:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);





var TransactionSign = function TransactionSign(_ref) {
  var isCredit = _ref.isCredit;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_StyledSpan, {
    "data-cy": "transaction-sign",
    color: isCredit ? 'green.700' : 'red.700',
    mr: 2,
    children: isCredit ? '+' : '-'
  });
};

TransactionSign.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionSign",
  "props": {
    "isCredit": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (TransactionSign);

var _StyledSpan = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .Dr).withConfig({
  displayName: "TransactionSign___StyledSpan",
  componentId: "sc-1nw2zky-0"
})({
  verticalAlign: 'text-bottom'
});

/***/ }),

/***/ 89669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6162);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_endsWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66654);
/* harmony import */ var lodash_endsWith__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_endsWith__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71387);
/* harmony import */ var _styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89441);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52015);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89314);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40777);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29242);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29925);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(771);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);




var _excluded = ["isPrivate", "isLoading", "isDownloading", "url", "size", "maxHeight", "alt", "fileName", "fileSize", "showFileName", "border"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var ImageLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
  displayName: "UploadedFilePreview__ImageLink",
  componentId: "sc-21shv-0"
})(["cursor:pointer;overflow:hidden;display:block;width:100%;height:100%;text-align:center;"]);
ImageLink.defaultProps = {
  openInNewTab: true
};
var FileTextIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)(_styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_16__/* .FileText */ .a).withConfig({
  displayName: "UploadedFilePreview__FileTextIcon",
  componentId: "sc-21shv-1"
})(["opacity:1;"]);
var DownloadIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_17__/* .Download */ .U).withConfig({
  displayName: "UploadedFilePreview__DownloadIcon",
  componentId: "sc-21shv-2"
})(["position:absolute;opacity:0;"]);
var CardContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "UploadedFilePreview__CardContainer",
  componentId: "sc-21shv-3"
})(["position:relative;border-radius:8px;padding:4px;display:flex;justify-content:center;align-items:center;font-size:12px;max-width:100%;background:white;svg{transition:opacity 0.3s;}img{width:100%;max-height:100%;max-width:100%;border-radius:8px;@media (max-width:40em){object-fit:cover;}}"]);
var MainContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "UploadedFilePreview__MainContainer",
  componentId: "sc-21shv-4"
})(["text-align:center;", ""], function (props) {
  return props.hasOnClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* .css */ .iv)(["cursor:pointer;&:hover ", "{", "{opacity:0.25;}", "{opacity:1;animation:", " 0.3s;}}"], CardContainer, FileTextIcon, DownloadIcon, _StyledKeyframes__WEBPACK_IMPORTED_MODULE_10__/* .fadeInDown */ .d7);
});
var FileName = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_13__.P).withConfig({
  displayName: "UploadedFilePreview__FileName",
  componentId: "sc-21shv-5"
})(["overflow:hidden;text-overflow:ellipsis;"]);
var PrivateIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "UploadedFilePreview__PrivateIconContainer",
  componentId: "sc-21shv-6"
})(["text-align:center;svg{max-height:32px;}"]);

var formatFileSize = function formatFileSize(sizeInBytes) {
  if (sizeInBytes < 1024) {
    return "".concat(sizeInBytes, " bytes");
  } else if (sizeInBytes < 1048576) {
    return "".concat((sizeInBytes / 1024).toFixed(2), " KB");
  } else if (sizeInBytes < 1073741824) {
    return "".concat((sizeInBytes / 1048576).toFixed(2), " MB");
  } else {
    return "".concat((sizeInBytes / 1073741824).toFixed(2), " GB");
  }
};
/**
 * To display the preview of a file uploaded on Open Collective.
 * Supports images and PDFs.
 */


var UploadedFilePreview = function UploadedFilePreview(_ref) {
  var isPrivate = _ref.isPrivate,
      isLoading = _ref.isLoading,
      isDownloading = _ref.isDownloading,
      url = _ref.url,
      size = _ref.size,
      maxHeight = _ref.maxHeight,
      alt = _ref.alt,
      fileName = _ref.fileName,
      fileSize = _ref.fileSize,
      showFileName = _ref.showFileName,
      border = _ref.border,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var content = null;

  var isText = lodash_endsWith__WEBPACK_IMPORTED_MODULE_3___default()(url, 'csv') || lodash_endsWith__WEBPACK_IMPORTED_MODULE_3___default()(url, 'txt') || lodash_endsWith__WEBPACK_IMPORTED_MODULE_3___default()(url, 'pdf');

  if (isLoading) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      borderRadius: 8
    });
  } else if (isDownloading) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_StyledSpinner__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      size: "50%"
    });
  } else if (isPrivate) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      color: "#dcdee0",
      size: "60%",
      tooltipProps: {
        childrenContainer: PrivateIconContainer
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        id: "Attachment.Private",
        defaultMessage: [{
          "type": 0,
          "value": "This attachment is private"
        }]
      })
    });
  } else if (!url && props.onClick) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(FileTextIcon, {
        color: "#dcdee0",
        size: "60%"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(DownloadIcon, {
        color: "#b3b3b3",
        size: "30%"
      })]
    });
  } else if (!url) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_16__/* .FileText */ .a, {
      color: "#dcdee0",
      size: "60%"
    });
  } else if (isText) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(FileTextIcon, {
      color: "#dcdee0",
      size: "60%"
    });
  } else {
    var resizeWidth = Array.isArray(size) ? lodash_max__WEBPACK_IMPORTED_MODULE_2___default()(size) : size;
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
      src: (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_5__/* .imagePreview */ .Z_)(url, null, {
        width: resizeWidth
      }),
      alt: alt || fileName
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(MainContainer, _objectSpread(_objectSpread({}, props), {}, {
    hasOnClick: Boolean(url || props.onClick),
    maxWidth: size,
    as: url ? _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z : 'div',
    href: url,
    title: fileName,
    openInNewTab: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(CardContainer, {
      size: size,
      maxHeight: maxHeight,
      title: fileName,
      border: border,
      children: content
    }), showFileName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      mt: "4px",
      maxWidth: size || 100,
      textAlign: "left",
      px: 1,
      children: [isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        height: 12
      }) : fileName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(FileName, {
        fontSize: "13px",
        color: "black.700",
        fontWeight: "700",
        children: fileName
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
        fontStyle: "italic",
        fontSize: "13px",
        color: "black.700",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          id: "File.NoFilename",
          defaultMessage: [{
            "type": 0,
            "value": "No filename"
          }]
        })
      }), fileSize && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
        mt: "2px",
        fontSize: "11px",
        lineHeight: "16px",
        color: "black.600",
        fontWeight: "400",
        children: formatFileSize(fileSize)
      })]
    })]
  }));
};

UploadedFilePreview.defaultProps = {
  size: 88,
  border: '1px solid #dcdee0',
  alt: 'Uploaded file preview'
};
UploadedFilePreview.__docgenInfo = {
  "description": "To display the preview of a file uploaded on Open Collective.\nSupports images and PDFs.",
  "methods": [],
  "displayName": "UploadedFilePreview",
  "props": {
    "size": {
      "defaultValue": {
        "value": "88",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "border": {
      "defaultValue": {
        "value": "'1px solid #dcdee0'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "alt": {
      "defaultValue": {
        "value": "'Uploaded file preview'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "url": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "isPrivate": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isDownloading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showFileName": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "fileName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onClick": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "fileSize": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "maxHeight": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (UploadedFilePreview);

/***/ }),

/***/ 99962:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XG": function() { return /* binding */ CreditItem; },
/* harmony export */   "cw": function() { return /* binding */ DebitItem; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52015);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29925);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


var _excluded = ["children"],
    _excluded2 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/** A single item */



var DebitCreditItem = styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "DebitCreditList__DebitCreditItem",
  componentId: "sc-sddud4-0"
})(["position:relative;animation:", " 0.15s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji);
/**
 * A list to display CREDIT/DEBIT items, like transactions or expenses. This is
 * built in a generic way so we can use it for either displaying only orders,
 * or only expenses, or both.
 *
 * Please make your children big enough, otherwise the gradient won't show.
 */

var DebitCreditList = styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "DebitCreditList",
  componentId: "sc-sddud4-1"
})(["border:1px solid #e6e8eb;border-radius:8px 8px 0 0;& > ", ":not(:last-child){border-bottom:1px solid #e6e8eb;}"], DebitCreditItem);
/** A colored gradient to show the type of the transaction */

var DebitCreditGradient = styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "DebitCreditList__DebitCreditGradient",
  componentId: "sc-sddud4-2"
})(["position:absolute;right:-1px;height:70%;width:2px;margin:14px 0;", ""], function (props) {
  return props.isCredit ? (0,styled_components__WEBPACK_IMPORTED_MODULE_5__/* .css */ .iv)(["background:linear-gradient( 180deg,#00af2f 0%,rgba(106,255,146,0.354167) 53.65%,rgba(255,255,255,0) 100% );"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_5__/* .css */ .iv)(["background:linear-gradient(180deg,rgba(255,255,255,0) 0%,#ffd4df 55.73%,#ff0044 100%);"]);
});
/** Displays a debit entry in the list */

var DebitItem = function DebitItem(_ref) {
  var children = _ref.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DebitCreditItem, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DebitCreditGradient, {
      isCredit: false
    }), children]
  }));
};

/** Displays a credit entry in the list */
var CreditItem = function CreditItem(_ref2) {
  var children = _ref2.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DebitCreditItem, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DebitCreditGradient, {
      isCredit: true
    }), children]
  }));
};

/** @component */
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DebitCreditList)));
DebitItem.__docgenInfo = {
  "description": "Displays a debit entry in the list",
  "methods": [],
  "displayName": "DebitItem",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
CreditItem.__docgenInfo = {
  "description": "Displays a credit entry in the list",
  "methods": [],
  "displayName": "CreditItem",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};

/***/ }),

/***/ 13467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ budget_ExpenseBudgetItem; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/lodash/size.js
var size = __webpack_require__(84238);
var size_default = /*#__PURE__*/__webpack_require__.n(size);
// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(64721);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/AlertTriangle/AlertTriangle.esm.js
var AlertTriangle_esm = __webpack_require__(77552);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Maximize2/Maximize2.esm.js
var Maximize2_esm = __webpack_require__(31721);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/expense-status.ts
var expense_status = __webpack_require__(38083);
// EXTERNAL MODULE: ./lib/constants/expenseTypes.ts
var expenseTypes = __webpack_require__(19878);
// EXTERNAL MODULE: ./lib/prop-types.js
var prop_types = __webpack_require__(51048);
// EXTERNAL MODULE: ./lib/theme/helpers.ts
var helpers = __webpack_require__(13875);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./components/AmountWithExchangeRateInfo.js
var AmountWithExchangeRateInfo = __webpack_require__(66337);
// EXTERNAL MODULE: ./components/AutosizeText.js
var AutosizeText = __webpack_require__(81966);
// EXTERNAL MODULE: ./lib/image-utils.js
var image_utils = __webpack_require__(89314);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/AvatarWithLink.tsx







var DualAvatarContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AvatarWithLink__DualAvatarContainer",
  componentId: "sc-sp6sc8-0"
})(["position:relative;"]);
var SecondaryAvatarContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AvatarWithLink__SecondaryAvatarContainer",
  componentId: "sc-sp6sc8-1"
})(["position:absolute;background:white;border-radius:6px;display:flex;justify-content:center;align-items:center;bottom:-8px;right:-8px;width:50%;height:50%;border-radius:", ";"], function (_ref) {
  var borderRadius = _ref.borderRadius;
  return borderRadius;
});
/**
 * [GraphQL V2 ONLY] A wrapper around `Avatar` that wraps it in a Link, with support for an optional second
 * profile to be displayed in the corner.
 */

var AvatarWithLink = function AvatarWithLink(_ref2) {
  var account = _ref2.account,
      secondaryAccount = _ref2.secondaryAccount,
      size = _ref2.size;

  var mainAvatar = /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
    collective: account,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
      collective: account,
      radius: size
    })
  });

  if (!secondaryAccount) {
    return mainAvatar;
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(DualAvatarContainer, {
      children: [mainAvatar, /*#__PURE__*/(0,jsx_runtime.jsx)(SecondaryAvatarContainer, {
        borderRadius: (0,image_utils/* getAvatarBorderRadius */.Qt)(secondaryAccount.type),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
          collective: secondaryAccount,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
            collective: secondaryAccount,
            radius: size / 2.5
          })
        })
      })]
    });
  }
};
AvatarWithLink.__docgenInfo = {
  "description": "[GraphQL V2 ONLY] A wrapper around `Avatar` that wraps it in a Link, with support for an optional second\nprofile to be displayed in the corner.",
  "methods": [],
  "displayName": "AvatarWithLink",
  "props": {
    "account": {
      "required": true,
      "tsType": {
        "name": "Account"
      },
      "description": ""
    },
    "secondaryAccount": {
      "required": true,
      "tsType": {
        "name": "union",
        "raw": "Account | null",
        "elements": [{
          "name": "Account"
        }, {
          "name": "null"
        }]
      },
      "description": ""
    },
    "size": {
      "required": true,
      "tsType": {
        "name": "number"
      },
      "description": "The size in pixels"
    }
  }
};
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/DateTime.js
var DateTime = __webpack_require__(95370);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/ChevronDown/ChevronDown.esm.js
var ChevronDown_esm = __webpack_require__(26955);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Manager.js
var Manager = __webpack_require__(81385);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Reference.js
var Reference = __webpack_require__(63351);
// EXTERNAL MODULE: ./node_modules/react-popper/lib/esm/Popper.js
var Popper = __webpack_require__(74688);
// EXTERNAL MODULE: ./lib/hooks/useGlobalBlur.js
var useGlobalBlur = __webpack_require__(55348);
// EXTERNAL MODULE: ./lib/hooks/useKeyboardKey.js
var useKeyboardKey = __webpack_require__(34487);
// EXTERNAL MODULE: ./lib/i18n/expense.js
var i18n_expense = __webpack_require__(8480);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledSpinner.tsx + 1 modules
var StyledSpinner = __webpack_require__(771);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
// EXTERNAL MODULE: ./components/expenses/ExpenseStatusTag.js
var ExpenseStatusTag = __webpack_require__(66300);
// EXTERNAL MODULE: ./components/expenses/MarkExpenseAsIncompleteModal.js
var MarkExpenseAsIncompleteModal = __webpack_require__(77959);
// EXTERNAL MODULE: ./components/expenses/ProcessExpenseButtons.js + 6 modules
var ProcessExpenseButtons = __webpack_require__(17931);
;// CONCATENATED MODULE: ./components/expenses/AdminExpenseStatusTag.js



var _excluded = ["expense", "host", "collective"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var AdminExpenseStatusTag_ExpenseStatusTag = (0,styled_components_browser_esm/* default */.ZP)(StyledTag/* default */.Z).withConfig({
  displayName: "AdminExpenseStatusTag__ExpenseStatusTag",
  componentId: "sc-16jxaf8-0"
})(["cursor:pointer;font-weight:bold;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;"]);
var PopupContainer = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
  displayName: "AdminExpenseStatusTag__PopupContainer",
  componentId: "sc-16jxaf8-1"
})(["z-index:2;border-radius:5px;font-size:12px;text-transform:initial;white-space:normal;min-width:200px;background:#ffffff;box-shadow:0px 4px 8px rgba(20,20,20,0.16);svg{display:none;}", "{display:block;margin:auto;}"], StyledSpinner/* default */.Z);
var Arrow = (0,styled_components_browser_esm/* default */.ZP)('div').withConfig({
  displayName: "AdminExpenseStatusTag__Arrow",
  componentId: "sc-16jxaf8-2"
})(["position:absolute;font-size:8px;width:3em;height:3em;top:0;left:0;margin-top:-0.9em;&::before{content:'';margin:auto;display:block;border-style:solid;border-width:0 1.5em 1em 1.5em;border-color:transparent transparent #ffffff transparent;filter:drop-shadow(0px -3px 3px rgba(20,20,20,0.1));}"]);
var ChevronDownIcon = (0,styled_components_browser_esm/* default */.ZP)(ChevronDown_esm/* ChevronDown */._).withConfig({
  displayName: "AdminExpenseStatusTag__ChevronDownIcon",
  componentId: "sc-16jxaf8-3"
})(["width:15px;height:15px;cursor:pointer;color:inherit;"]);

var AdminExpenseStatusTag = function AdminExpenseStatusTag(_ref) {
  var expense = _ref.expense,
      host = _ref.host,
      collective = _ref.collective,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var intl = (0,useIntl/* default */.Z)();
  var wrapperRef = react.useRef();

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      showPopup = _React$useState2[0],
      setShowPopup = _React$useState2[1];

  var _React$useState3 = react.useState(true),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      isClosable = _React$useState4[0],
      setClosable = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      showMarkAsIncompleteModal = _React$useState6[0],
      setMarkAsIncompleteModal = _React$useState6[1];

  var hideProcessExpenseButtons = (expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.APPROVED */.Z.APPROVED;
  var buttonProps = {
    px: 2,
    py: 2,
    isBorderless: true,
    width: '100%',
    textAlign: 'left'
  };

  var onClick = function onClick() {
    setShowPopup(true);
  }; // Close when clicking outside


  (0,useGlobalBlur/* default */.Z)(wrapperRef, function (outside) {
    if (outside && isClosable && showPopup && !document.getElementById('mark-expense-as-unpaid-modal')) {
      setShowPopup(false);
    }
  }); // Closes the modal upon the `ESC` key press.

  (0,useKeyboardKey/* default */.ZP)({
    callback: function callback() {
      if (isClosable) {
        setShowPopup(false);
      }
    },
    keyMatch: useKeyboardKey/* ESCAPE_KEY */.O_
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Manager/* Manager */.dK, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Reference/* Reference */.s, {
        children: function children(_ref2) {
          var ref = _ref2.ref;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            ref: ref,
            onClick: onClick,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(AdminExpenseStatusTag_ExpenseStatusTag, _objectSpread(_objectSpread({
              type: (0,ExpenseStatusTag/* getExpenseStatusMsgType */.X)(expense.status),
              "data-cy": "admin-expense-status-msg"
            }, props), {}, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                children: [(0,i18n_expense/* i18nExpenseStatus */.zr)(intl, expense.status), /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDownIcon, {})]
              })
            }))
          });
        }
      }), showPopup && /*#__PURE__*/react_dom.createPortal( /*#__PURE__*/(0,jsx_runtime.jsx)(Popper/* Popper */.r, {
        placement: "bottom",
        children: function children(_ref3) {
          var _expense$permissions;

          var ref = _ref3.ref,
              style = _ref3.style,
              arrowProps = _ref3.arrowProps;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(PopupContainer, {
            ref: ref,
            style: style,
            onMouseEnter: onClick,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              alignItems: "center",
              ref: wrapperRef,
              flexDirection: "column",
              p: 2,
              children: [!hideProcessExpenseButtons && /*#__PURE__*/(0,jsx_runtime.jsx)(ProcessExpenseButtons/* default */.ZP, {
                host: host,
                buttonProps: buttonProps,
                collective: collective,
                expense: expense,
                permissions: expense.permissions,
                onModalToggle: function onModalToggle(isOpen) {
                  return setClosable(!isOpen);
                },
                onSuccess: function onSuccess() {
                  return setShowPopup(false);
                }
              }), (expense === null || expense === void 0 ? void 0 : (_expense$permissions = expense.permissions) === null || _expense$permissions === void 0 ? void 0 : _expense$permissions.canMarkAsIncomplete) && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, _objectSpread(_objectSpread({}, buttonProps), {}, {
                onClick: function onClick() {
                  setMarkAsIncompleteModal(true);
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProcessExpenseButtons/* ButtonLabel */.aN, {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "actions.markAsIncomplete",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Mark as Incomplete"
                    }]
                  })
                })
              }))]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Arrow, {
              ref: arrowProps.ref,
              style: arrowProps.style
            })]
          });
        }
      }), document.body)]
    }), showMarkAsIncompleteModal && /*#__PURE__*/(0,jsx_runtime.jsx)(MarkExpenseAsIncompleteModal/* default */.Z, {
      expense: expense,
      onClose: function onClose() {
        return setMarkAsIncompleteModal(false);
      }
    })]
  });
};

AdminExpenseStatusTag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AdminExpenseStatusTag",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "expense": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_AdminExpenseStatusTag = (AdminExpenseStatusTag);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Download/Download.esm.js
var Download_esm = __webpack_require__(71387);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(93162);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./components/expenses/ExpenseInvoiceDownloadHelper.js
var ExpenseInvoiceDownloadHelper = __webpack_require__(41016);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ArrowLeft/ArrowLeft.esm.js
var ArrowLeft_esm = __webpack_require__(17138);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ArrowRight/ArrowRight.esm.js
var ArrowRight_esm = __webpack_require__(3642);
;// CONCATENATED MODULE: ./components/BulletSlider.js





var Bullet = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "BulletSlider__Bullet",
  componentId: "sc-ryg9d9-0"
})(["width:8px;height:8px;background-color:", ";margin-bottom:8px;border-radius:100%;transition:transform 0.1s,background-color 0.3s;cursor:pointer;&:hover{transform:scale(1.5);}&:not(:last-child){margin-right:8px;}", ""], function (props) {
  return props.theme.colors.black[200];
}, function (props) {
  return props.isSelected && (0,styled_components_browser_esm/* css */.iv)(["transform:scale(1.5);background-color:", ";"], function (props) {
    return props.theme.colors.primary[500];
  });
});
/**
 * A multi-bullets slider to switch between multiple items (ie. usually a slideshow)
 */

var BulletSlider = function BulletSlider(_ref) {
  var nbItems = _ref.nbItems,
      selectedIndex = _ref.selectedIndex,
      onChange = _ref.onChange;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexWrap: "wrap",
    justifyContent: "center",
    children: toConsumableArray_default()(Array(nbItems).keys()).map(function (index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Bullet, {
        role: "button",
        tabIndex: 0,
        isSelected: index === selectedIndex,
        onClick: function onClick() {
          return onChange(index);
        },
        onKeyDown: function onKeyDown(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
            onChange(index);
          }
        }
      }, index);
    })
  });
};

BulletSlider.__docgenInfo = {
  "description": "A multi-bullets slider to switch between multiple items (ie. usually a slideshow)",
  "methods": [],
  "displayName": "BulletSlider",
  "props": {
    "onChange": {
      "description": "Called with the item index",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "selectedIndex": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "nbItems": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ var components_BulletSlider = (BulletSlider);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/UploadedFilePreview.js
var UploadedFilePreview = __webpack_require__(89669);
;// CONCATENATED MODULE: ./components/FilesPreviewModal.js








var FilesPreviewModal_excluded = ["renderInfo", "files"];

function FilesPreviewModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function FilesPreviewModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? FilesPreviewModal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : FilesPreviewModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var FilesPreviewModal = /*#__PURE__*/function (_React$Component) {
  inherits_default()(FilesPreviewModal, _React$Component);

  var _super = _createSuper(FilesPreviewModal);

  function FilesPreviewModal() {
    var _this;

    classCallCheck_default()(this, FilesPreviewModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      selectedIndex: 0,
      isDownloading: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "selectPrevFile", function () {
      _this.setState(function (_ref) {
        var selectedIndex = _ref.selectedIndex;
        return {
          selectedIndex: Math.max(selectedIndex - 1, 0)
        };
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "selectNextFile", function () {
      _this.setState(function (_ref2) {
        var _this$props$files;

        var selectedIndex = _ref2.selectedIndex;
        return {
          selectedIndex: Math.min(selectedIndex + 1, (((_this$props$files = _this.props.files) === null || _this$props$files === void 0 ? void 0 : _this$props$files.length) || 1) - 1)
        };
      });
    });

    return _this;
  }

  createClass_default()(FilesPreviewModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.eventListener = document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
          _this2.selectPrevFile();
        } else if (event.key === 'ArrowRight') {
          _this2.selectNextFile();
        } else if (event.key === 'Escape') {
          _this2.props.onClose();
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.eventListener) {
        this.document.removeEventListener(this.eventListener);
        this.eventListener = null;
      }
    }
  }, {
    key: "getItemOnClick",
    value: function getItemOnClick(item) {
      var _this3 = this;

      if (!item.onClick) {
        return undefined;
      } else {
        return function () {
          return item.onClick({
            isLoading: _this3.state.isDownloading,
            setLoading: function setLoading(isDownloading) {
              return _this3.setState({
                isDownloading: isDownloading
              });
            }
          });
        };
      }
    }
  }, {
    key: "renderItemPreview",
    value: function renderItemPreview(item) {
      if (this.props.renderItemPreview) {
        return this.props.renderItemPreview({
          item: item,
          isDownloading: this.state.isDownloading
        });
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(UploadedFilePreview/* default */.Z, {
        url: item.url,
        size: 350,
        onClick: this.getItemOnClick(item),
        isDownloading: this.state.isDownloading,
        title: item.title
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$files2,
          _this4 = this;

      var _this$props = this.props,
          renderInfo = _this$props.renderInfo,
          files = _this$props.files,
          props = objectWithoutProperties_default()(_this$props, FilesPreviewModal_excluded);

      var selectedIndex = this.state.selectedIndex;
      var selectedItem = files ? files[selectedIndex] : null;
      var nbFiles = ((_this$props$files2 = this.props.files) === null || _this$props$files2 === void 0 ? void 0 : _this$props$files2.length) || 0;
      var hasMultipleFiles = nbFiles > 1;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, FilesPreviewModal_objectSpread(FilesPreviewModal_objectSpread({}, props), {}, {
        width: "100%",
        maxWidth: 450,
        trapFocus: false,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "FilesPreviewModal.AttachmentPreview",
            defaultMessage: [{
              "type": 0,
              "value": "Attachment preview"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
          mb: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            justifyContent: "center",
            width: "100%",
            children: [hasMultipleFiles && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              buttonSize: "tiny",
              isBorderless: true,
              ml: "-12px",
              px: "4px",
              onClick: this.selectPrevFile,
              disabled: !selectedIndex,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowLeft_esm/* ArrowLeft */.X, {
                size: 18
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
              mx: 2,
              width: "100%",
              justifyContent: "center",
              children: selectedItem && this.renderItemPreview(selectedItem)
            }), hasMultipleFiles && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
              buttonSize: "tiny",
              isBorderless: true,
              mr: "-12px",
              px: "4px",
              onClick: this.selectNextFile,
              disabled: !nbFiles || selectedIndex === nbFiles - 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight_esm/* ArrowRight */.o, {
                size: 18
              })
            })]
          }), renderInfo && renderInfo({
            item: selectedItem
          }), hasMultipleFiles && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mt: 4,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_BulletSlider, {
              nbItems: nbFiles,
              selectedIndex: selectedIndex,
              onChange: function onChange(selectedIndex) {
                return _this4.setState({
                  selectedIndex: selectedIndex
                });
              }
            })
          })]
        })]
      }));
    }
  }]);

  return FilesPreviewModal;
}(react.Component);


FilesPreviewModal.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "selectPrevFile",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "selectNextFile",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getItemOnClick",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "item",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderItemPreview",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "item",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "FilesPreviewModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "renderItemPreview": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "renderInfo": {
      "description": "A render func for item details",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "files": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "url": {
              "name": "string",
              "required": false
            },
            "name": {
              "name": "string",
              "required": false
            },
            "onClick": {
              "name": "func",
              "description": "An alternative to `url`",
              "required": false
            }
          }
        }
      },
      "required": false
    }
  }
};
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/expenses/ExpenseFilesPreviewModal.js


















var FileInfo = function FileInfo(_ref) {
  var collective = _ref.collective,
      expense = _ref.expense,
      item = _ref.item,
      invoiceBlob = _ref.invoiceBlob;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    justifyContent: "space-between",
    px: 25,
    mt: 2,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      flex: "1 1 65%",
      children: [(item.description || item.name) && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "14px",
        lineHeight: "21px",
        color: "black.900",
        mb: 1,
        children: item.description || item.name
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontSize: "11px",
        color: "black.500",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib.FormattedDate, {
          value: item.incurredAt,
          month: "short",
          year: "numeric",
          day: "numeric"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      ml: 2,
      flex: "1 1 35%",
      textAlign: "right",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: item.amount && /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
          amount: item.amount,
          currency: expense.currency
        })
      }), invoiceBlob && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
        buttonSize: "tiny",
        isBorderless: true,
        mr: "-12px",
        mt: 1,
        onClick: function onClick() {
          return (0,FileSaver_min.saveAs)(invoiceBlob, (0,ExpenseInvoiceDownloadHelper/* getExpenseInvoiceFilename */.eS)(collective, expense));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Download_esm/* Download */.U, {
          size: "1em"
        }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Download",
          defaultMessage: [{
            "type": 0,
            "value": "Download"
          }]
        })]
      })]
    })]
  });
};

var getFilesFromExpense = function getFilesFromExpense(collective, expense) {
  if (!expense) {
    return [];
  }

  if (expense.type === expenseTypes/* default.INVOICE */.Z.INVOICE) {
    return expense.attachedFiles || [];
  } else {
    var _expense$items;

    var items = ((_expense$items = expense.items) === null || _expense$items === void 0 ? void 0 : _expense$items.filter(function (_ref2) {
      var url = _ref2.url;
      return Boolean(url);
    })) || [];
    return [].concat(toConsumableArray_default()(items), toConsumableArray_default()(expense.attachedFiles));
  }
};

var ExpenseInvoicePreview = function ExpenseInvoicePreview(_ref3) {
  var isLoading = _ref3.isLoading,
      fileURL = _ref3.fileURL;

  if (isLoading) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(UploadedFilePreview/* default */.Z, {
      isDownloading: true,
      width: "100%",
      minHeight: 350
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
      title: "Expense Invoice File URL",
      width: "100%",
      height: 350,
      src: fileURL
    });
  }
};

var ExpenseFilesPreviewModal = function ExpenseFilesPreviewModal(_ref4) {
  var collective = _ref4.collective,
      expense = _ref4.expense,
      onClose = _ref4.onClose;

  var _React$useState = react.useState(null),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      invoiceFile = _React$useState2[0],
      setInvoiceFile = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      invoiceBlob = _React$useState4[0],
      setInvoiceBlob = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      invoiceError = _React$useState6[0],
      setInvoiceError = _React$useState6[1];

  var files = react.useMemo(function () {
    return getFilesFromExpense(collective, expense);
  }, [collective, expense]);
  react.useEffect(function () {
    (0,ExpenseInvoiceDownloadHelper/* generateInvoiceBlob */.I6)(expense).then(function (file) {
      setInvoiceError(false);
      setInvoiceBlob(file);
      setInvoiceFile(URL.createObjectURL(file));
    })["catch"](function () {
      setInvoiceError(true);
    });
    return function () {
      if (invoiceFile) {
        URL.revokeObjectURL(invoiceFile);
      }
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FilesPreviewModal, {
    files: files,
    onClose: onClose,
    renderInfo: function renderInfo(_ref5) {
      var item = _ref5.item;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(FileInfo, {
        collective: collective,
        expense: expense,
        item: item,
        invoiceBlob: item.type === 'EXPENSE_INVOICE' ? invoiceBlob : null
      });
    },
    renderItemPreview: function renderItemPreview(_ref6) {
      var item = _ref6.item;
      return item.type === 'EXPENSE_INVOICE' ? invoiceError ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseInvoiceDownloadHelper/* default */.ZP, {
        expense: expense,
        collective: collective,
        children: function children(_ref7) {
          var isLoading = _ref7.isLoading,
              downloadInvoice = _ref7.downloadInvoice;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(UploadedFilePreview/* default */.Z, {
            onClick: downloadInvoice,
            isDownloading: isLoading,
            fileName: (0,ExpenseInvoiceDownloadHelper/* getExpenseInvoiceFilename */.eS)(collective, expense),
            size: 350
          });
        }
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseInvoicePreview, {
        isLoading: !invoiceFile,
        fileURL: invoiceFile
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(UploadedFilePreview/* default */.Z, {
        url: item.url,
        size: 350,
        title: item.title,
        fileName: item.name
      });
    }
  });
};

ExpenseFilesPreviewModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseFilesPreviewModal",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var expenses_ExpenseFilesPreviewModal = (ExpenseFilesPreviewModal);
// EXTERNAL MODULE: ./components/expenses/ExpenseTypeTag.js
var ExpenseTypeTag = __webpack_require__(88243);
// EXTERNAL MODULE: ./components/expenses/PayoutMethodTypeWithIcon.js
var PayoutMethodTypeWithIcon = __webpack_require__(9215);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/Tags.js
var Tags = __webpack_require__(14540);
// EXTERNAL MODULE: ./components/TransactionSign.js
var TransactionSign = __webpack_require__(47924);
;// CONCATENATED MODULE: ./components/budget/ExpenseBudgetItem.js






function ExpenseBudgetItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpenseBudgetItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpenseBudgetItem_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpenseBudgetItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



































var DetailColumnHeader = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ExpenseBudgetItem__DetailColumnHeader",
  componentId: "sc-cdpu61-0"
})(["font-style:normal;font-weight:bold;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#c4c7cc;margin-bottom:2px;"]);
var ButtonsContainer = styled_components_browser_esm/* default.div.attrs */.ZP.div.attrs({
  'data-cy': 'expense-actions'
}).withConfig({
  displayName: "ExpenseBudgetItem__ButtonsContainer",
  componentId: "sc-cdpu61-1"
})(["display:flex;flex-wrap:wrap;margin-top:8px;transition:opacity 0.05s;justify-content:flex-end;@media (max-width:40em){justify-content:center;}& > *:last-child{margin-right:0;}"]);
var ExpenseContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ExpenseBudgetItem__ExpenseContainer",
  componentId: "sc-cdpu61-2"
})(["padding:16px 27px;@media (hover:hover){&:not(:hover):not(:focus-within) ", "{opacity:0.24;}}"], ButtonsContainer);

var getNbAttachedFiles = function getNbAttachedFiles(expense) {
  if (!expense) {
    return 0;
  } else if (expense.type === expenseTypes/* default.INVOICE */.Z.INVOICE) {
    return size_default()(expense.attachedFiles);
  } else {
    return size_default()(expense.attachedFiles) + size_default()(expense.items.filter(function (_ref) {
      var url = _ref.url;
      return Boolean(url);
    }));
  }
};

var ExpenseBudgetItem = function ExpenseBudgetItem(_ref2) {
  var _expense$items, _expense$amountInAcco, _expense$payoutMethod;

  var isLoading = _ref2.isLoading,
      host = _ref2.host,
      isInverted = _ref2.isInverted,
      showAmountSign = _ref2.showAmountSign,
      expense = _ref2.expense,
      showProcessActions = _ref2.showProcessActions,
      view = _ref2.view,
      suggestedTags = _ref2.suggestedTags,
      onProcess = _ref2.onProcess;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      hasFilesPreview = _React$useState2[0],
      showFilesPreview = _React$useState2[1];

  var featuredProfile = isInverted ? expense === null || expense === void 0 ? void 0 : expense.account : expense === null || expense === void 0 ? void 0 : expense.payee;
  var isAdminView = view === 'admin';
  var isSubmitterView = view === 'submitter';
  var isCharge = (expense === null || expense === void 0 ? void 0 : expense.type) === expenseTypes/* default.CHARGE */.Z.CHARGE;
  var pendingReceipt = isCharge && (expense === null || expense === void 0 ? void 0 : (_expense$items = expense.items) === null || _expense$items === void 0 ? void 0 : _expense$items.every(function (i) {
    return i.url === null;
  }));
  var nbAttachedFiles = !isAdminView ? 0 : getNbAttachedFiles(expense);
  var isExpensePaidOrRejected = [expense_status/* default.REJECTED */.Z.REJECTED, expense_status/* default.PAID */.Z.PAID].includes(expense === null || expense === void 0 ? void 0 : expense.status);
  var shouldDisplayStatusTagActions = (isExpensePaidOrRejected || (expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.APPROVED */.Z.APPROVED) && ((0,ProcessExpenseButtons/* hasProcessButtons */.HF)(expense.permissions) || expense.permissions.canMarkAsIncomplete);
  var isMultiCurrency = (expense === null || expense === void 0 ? void 0 : expense.amountInAccountCurrency) && ((_expense$amountInAcco = expense.amountInAccountCurrency) === null || _expense$amountInAcco === void 0 ? void 0 : _expense$amountInAcco.currency) !== expense.currency;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExpenseContainer, {
    "data-cy": "expense-container-".concat(expense === null || expense === void 0 ? void 0 : expense.legacyId),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      justifyContent: "space-between",
      flexWrap: "wrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flex: "1",
        minWidth: "max(50%, 200px)",
        maxWidth: [null, '70%'],
        mr: "24px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mr: 3,
          children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
            width: 40,
            height: 40
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(AvatarWithLink, {
            size: 40,
            account: featuredProfile,
            secondaryAccount: featuredProfile.id === expense.createdByAccount.id ? null : expense.createdByAccount
          })
        }), isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
          height: 60
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
            content: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Expense.GoToPage",
              defaultMessage: [{
                "type": 0,
                "value": "Go to expense page"
              }]
            }),
            delayHide: 0,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
              as: Link/* default */.Z,
              underlineOnHover: true,
              href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(expense.account), "/expenses/").concat(expense.legacyId),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(AutosizeText/* default */.Z, {
                value: expense.description,
                maxLength: 255,
                minFontSizeInPx: 12,
                maxFontSizeInPx: 16,
                lengthThreshold: 72,
                mobileRatio: 0.875,
                valueFormatter: helpers/* toPx */.aR,
                children: function children(_ref3) {
                  var value = _ref3.value,
                      fontSize = _ref3.fontSize;
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
                    fontWeight: "500",
                    lineHeight: "1.5em",
                    textDecoration: "none",
                    color: "black.900",
                    fontSize: "".concat(fontSize, "px"),
                    "data-cy": "expense-title",
                    children: value
                  });
                }
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
            mt: "5px",
            fontSize: "12px",
            color: "black.700",
            children: [isAdminView ? /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
              collective: expense.account
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "B5z1AU",
              defaultMessage: [{
                "type": 0,
                "value": "from "
              }, {
                "type": 1,
                "value": "payee"
              }, {
                "type": 0,
                "value": " to "
              }, {
                "type": 1,
                "value": "account"
              }],
              values: {
                payee: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
                  collective: expense.payee
                }),
                account: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
                  collective: expense.account
                })
              }
            }), ' • ', /*#__PURE__*/(0,jsx_runtime.jsx)(DateTime/* default */.Z, {
              value: expense.createdAt
            }), isAdminView && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
              children: [' • ', /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "BalanceAmount",
                defaultMessage: [{
                  "type": 0,
                  "value": "Balance "
                }, {
                  "type": 1,
                  "value": "balance"
                }],
                values: {
                  balance: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                    amount: get_default()(expense.account, 'stats.balanceWithBlockedFunds.valueInCents', get_default()(expense.account, 'stats.balanceWithBlockedFunds', 0)),
                    currency: expense.account.currency,
                    amountStyles: {
                      color: 'black.700'
                    }
                  })
                }
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexDirection: ['row', 'column'],
        mt: [3, 0],
        flexWrap: "wrap",
        alignItems: ['center', 'flex-end'],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          my: 2,
          mr: [3, 0],
          flexDirection: "column",
          minWidth: 100,
          alignItems: "flex-end",
          "data-cy": "transaction-amount",
          children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
            height: 19,
            width: 120
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [showAmountSign && /*#__PURE__*/(0,jsx_runtime.jsx)(TransactionSign/* default */.Z, {
                isCredit: isInverted
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                color: "black.700",
                fontSize: "16px",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                  amount: expense.amount,
                  currency: expense.currency,
                  precision: 2
                })
              })]
            }), isMultiCurrency && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
              color: "black.600",
              fontSize: "13px",
              my: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(AmountWithExchangeRateInfo/* default */.Z, {
                amount: expense.amountInAccountCurrency
              })
            })]
          })
        }), isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
          height: 20,
          width: 140
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          children: [(isAdminView || isSubmitterView) && pendingReceipt && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mr: "1px",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
              content: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Expense.MissingReceipt",
                defaultMessage: [{
                  "type": 0,
                  "value": "Expense is missing its Receipt"
                }]
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(AlertTriangle_esm/* AlertTriangle */.u, {
                size: 18
              })
            })
          }), (isAdminView || isSubmitterView) && /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseTypeTag/* default */.Z, {
            type: expense.type,
            legacyId: expense.legacyId,
            mb: 0,
            py: 0,
            mr: "2px",
            fontSize: "9px"
          }), shouldDisplayStatusTagActions ? /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_AdminExpenseStatusTag, {
            host: host,
            collective: expense.account,
            expense: expense,
            p: "3px 8px"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseStatusTag/* default */.Z, {
            status: expense.status,
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.06em",
            lineHeight: "16px",
            p: "3px 8px",
            showTaxFormTag: includes_default()(expense.requiredLegalDocuments, 'US_TAX_FORM'),
            showTaxFormMsg: expense.payee.isAdmin
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mt: 2,
        children: isAdminView || isSubmitterView ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            mr: [3, 4],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailColumnHeader, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "expense.payoutMethod",
                defaultMessage: [{
                  "type": 0,
                  "value": "payout method"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mt: "6px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(PayoutMethodTypeWithIcon/* default */.Z, {
                isLoading: isLoading,
                type: expense === null || expense === void 0 ? void 0 : (_expense$payoutMethod = expense.payoutMethod) === null || _expense$payoutMethod === void 0 ? void 0 : _expense$payoutMethod.type,
                iconSize: "10px",
                fontSize: "11px",
                fontWeight: "normal",
                color: "black.700"
              })
            })]
          }), nbAttachedFiles > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            mr: [3, 4],
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailColumnHeader, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "Expense.Attachments",
                defaultMessage: [{
                  "type": 0,
                  "value": "Attachments"
                }]
              })
            }), isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
              height: 15,
              width: 90
            }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
              color: "black.700",
              fontSize: "11px",
              cursor: "pointer",
              buttonSize: "tiny",
              onClick: function onClick() {
                return showFilesPreview(true);
              },
              px: 2,
              ml: -2,
              isBorderless: true,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Maximize2_esm/* Maximize2 */.U, {
                size: 10
              }), "\xA0\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "ExepenseAttachments.count",
                defaultMessage: [{
                  "type": 6,
                  "value": "count",
                  "options": {
                    "one": {
                      "value": [{
                        "type": 7
                      }, {
                        "type": 0,
                        "value": " attachment"
                      }]
                    },
                    "other": {
                      "value": [{
                        "type": 7
                      }, {
                        "type": 0,
                        "value": " attachments"
                      }]
                    }
                  },
                  "offset": 0,
                  "pluralType": "cardinal"
                }],
                values: {
                  count: nbAttachedFiles
                }
              })]
            })]
          })]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Tags/* default */.Z, {
          expense: expense,
          canEdit: get_default()(expense, 'permissions.canEditTags', false),
          suggestedTags: suggestedTags
        })
      }), showProcessActions && (expense === null || expense === void 0 ? void 0 : expense.permissions) && !isExpensePaidOrRejected && /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonsContainer, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProcessExpenseButtons/* default */.ZP, {
          host: host,
          collective: expense.account,
          expense: expense,
          permissions: expense.permissions,
          buttonProps: ExpenseBudgetItem_objectSpread(ExpenseBudgetItem_objectSpread({}, ProcessExpenseButtons/* DEFAULT_PROCESS_EXPENSE_BTN_PROPS */.oU), {}, {
            mx: 1,
            py: 2
          }),
          onSuccess: onProcess
        })
      })]
    }), hasFilesPreview && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseFilesPreviewModal, {
      collective: expense.account,
      expense: expense,
      onClose: function onClose() {
        return showFilesPreview(false);
      }
    })]
  });
};

ExpenseBudgetItem.defaultProps = {
  view: 'public'
};
ExpenseBudgetItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseBudgetItem",
  "props": {
    "view": {
      "defaultValue": {
        "value": "'public'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'public'",
          "computed": false
        }, {
          "value": "'admin'",
          "computed": false
        }, {
          "value": "'submitter'",
          "computed": false
        }]
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isInverted": {
      "description": "Set this to true to invert who's displayed (payee or collective)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showAmountSign": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onDelete": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onProcess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "showProcessActions": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "suggestedTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }],
            "required": true
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "type": {
            "name": "string",
            "required": true
          },
          "description": {
            "name": "string",
            "required": true
          },
          "status": {
            "name": "string",
            "required": true
          },
          "createdAt": {
            "name": "string",
            "required": true
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "amount": {
            "name": "number",
            "required": true
          },
          "amountInAccountCurrency": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "permissions": {
            "name": "object",
            "required": false
          },
          "items": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          },
          "requiredLegalDocuments": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "attachedFiles": {
            "name": "arrayOf",
            "value": {
              "name": "object"
            },
            "required": false
          },
          "payee": {
            "name": "shape",
            "value": {
              "id": {
                "name": "union",
                "value": [{
                  "name": "string"
                }, {
                  "name": "number"
                }],
                "required": true
              },
              "type": {
                "name": "string",
                "required": true
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": true
              },
              "isAdmin": {
                "name": "bool",
                "required": false
              }
            },
            "required": false
          },
          "payoutMethod": {
            "name": "shape",
            "value": {
              "type": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "createdByAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "type": {
                "name": "string",
                "required": true
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              }
            },
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              },
              "currency": {
                "name": "string",
                "required": false
              },
              "stats": {
                "name": "shape",
                "value": {
                  "balanceWithBlockedFunds": {
                    "name": "union",
                    "value": [{
                      "name": "number"
                    }, {
                      "name": "shape",
                      "value": {
                        "valueInCents": {
                          "name": "number",
                          "required": false
                        }
                      }
                    }],
                    "required": false
                  }
                },
                "required": false
              }
            },
            "description": "If available, this `account` will be used to link expense in place of the `collective`",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ var budget_ExpenseBudgetItem = (ExpenseBudgetItem);

/***/ }),

/***/ 91181:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87281);
/* harmony import */ var _styled_icons_ionicons_solid_Expand__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6167);
/* harmony import */ var _styled_icons_material_ShowChart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(67271);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16678);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82525);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17632);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51048);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _DefinedTerm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78317);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);


var _excluded = ["amount"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var StatTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
  displayName: "BudgetStats__StatTitle",
  componentId: "sc-1d1p27o-0"
})(["font-size:12px;line-height:16px;font-weight:500;text-transform:uppercase;margin-bottom:8px;"]);
StatTitle.defaultProps = {
  color: 'black.700'
};

var StatAmount = function StatAmount(_ref) {
  var amount = _ref.amount,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
    fontSize: "16px",
    lineHeight: "24px",
    color: "black.700",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread({
      amount: amount || null
    }, props))
  });
};

var StatContainer = styled_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "BudgetStats__StatContainer",
  componentId: "sc-1d1p27o-1"
})(["flex:1;padding:16px 32px;svg{margin-right:5px;vertical-align:bottom;}", " border-color:#dcdee0;", ""], function (props) {
  return props.$isMain && (0,styled_components__WEBPACK_IMPORTED_MODULE_15__/* .css */ .iv)(["background:#f7f8fa;"]);
}, styled_system__WEBPACK_IMPORTED_MODULE_3__/* .border */ .Cg);

var BudgetStats = function BudgetStats(_ref2) {
  var _stats$activeRecurrin, _stats$activeRecurrin2;

  var collective = _ref2.collective,
      stats = _ref2.stats,
      horizontal = _ref2.horizontal;

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(),
      locale = _useIntl.locale;

  var monthlyRecurring = (((_stats$activeRecurrin = stats.activeRecurringContributions) === null || _stats$activeRecurrin === void 0 ? void 0 : _stats$activeRecurrin.monthly) || 0) + (((_stats$activeRecurrin2 = stats.activeRecurringContributions) === null || _stats$activeRecurrin2 === void 0 ? void 0 : _stats$activeRecurrin2.yearly) || 0) / 12;
  var isFund = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.FUND */ .eV.FUND;
  var isIndividual = !collective.isHost && (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__/* .isIndividualAccount */ .Sh)(collective);
  var borderTop = ['1px solid #dcdee0', 'none', horizontal ? null : '1px solid #dcdee0'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_StyledCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    display: "flex",
    flex: [null, null, '1 1 300px'],
    width: "100%",
    flexDirection: ['column', 'row', horizontal ? null : 'column'],
    mb: 2,
    children: !isIndividual ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-today-balance",
        $isMain: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            display: "inline-block",
            fontSize: "11px",
            mr: "5px",
            fontWeight: "500",
            width: "12px",
            textAlign: "center",
            children: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .getCurrencySymbol */ .jK)(collective.currency)
          }), ![_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.PROJECT */ .eV.PROJECT, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_5__/* .CollectiveType.EVENT */ .eV.EVENT].includes(collective.type) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* .Terms.BALANCE */ .F.BALANCE,
            textTransform: "uppercase",
            color: "black.700",
            extraTooltipContent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                mt: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  id: "budgetSection-balance-consolidated",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Total consolidated including Projects and Events: "
                  }, {
                    "type": 1,
                    "value": "amount"
                  }],
                  values: {
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)((stats === null || stats === void 0 ? void 0 : stats.consolidatedBalance.valueInCents) || 0, collective.currency, {
                      locale: locale
                    })
                  }
                })
              })
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              id: "CollectivePage.SectionBudget.Balance",
              defaultMessage: [{
                "type": 0,
                "value": "Today’s balance"
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StatAmount, {
          amount: stats.balance.valueInCents,
          currency: collective.currency
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatContainer, {
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_styled_icons_material_ShowChart__WEBPACK_IMPORTED_MODULE_18__/* .ShowChart */ .a, {
            size: "12px"
          }), collective.isHost ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* .Terms.TOTAL_INCOME */ .F.TOTAL_INCOME,
            textTransform: "uppercase",
            color: "black.700"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* .Terms.TOTAL_RAISED */ .F.TOTAL_RAISED,
            textTransform: "uppercase",
            color: "black.700",
            extraTooltipContent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
              mt: 2,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                id: "budgetSection-raised-total",
                defaultMessage: [{
                  "type": 0,
                  "value": "Total contributed before fees: "
                }, {
                  "type": 1,
                  "value": "amount"
                }],
                values: {
                  amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)((stats === null || stats === void 0 ? void 0 : stats.totalAmountRaised.valueInCents) || 0, collective.currency, {
                    locale: locale
                  })
                }
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StatAmount, {
          amount: stats.totalNetAmountRaised.valueInCents,
          currency: collective.currency
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatContainer, {
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_styled_icons_ionicons_solid_Expand__WEBPACK_IMPORTED_MODULE_19__/* .Expand */ .M, {
            size: "12px"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            id: "budgetSection-disbursed",
            defaultMessage: [{
              "type": 0,
              "value": "Total disbursed"
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StatAmount, {
          amount: stats.totalNetAmountRaised.valueInCents - stats.balance.valueInCents,
          currency: collective.currency
        })]
      }), !isFund && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-estimated-budget",
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_20__/* .Calendar */ .f, {
            size: "12px"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_9__/* .Terms.ESTIMATED_BUDGET */ .F.ESTIMATED_BUDGET,
            textTransform: "uppercase",
            color: "black.700",
            extraTooltipContent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                mt: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  id: "CollectivePage.SectionBudget.MonthlyRecurringAmount",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Monthly recurring: "
                  }, {
                    "type": 1,
                    "value": "amount"
                  }],
                  values: {
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)(monthlyRecurring, collective.currency, {
                      locale: locale
                    })
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                mt: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  id: "CollectivePage.SectionBudget.TotalAmountReceived",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Total received in the last 12 months: "
                  }, {
                    "type": 1,
                    "value": "amount"
                  }],
                  values: {
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatCurrency */ .xG)((stats === null || stats === void 0 ? void 0 : stats.totalAmountReceived.valueInCents) || 0, collective.currency, {
                      locale: locale
                    })
                  }
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StatAmount, {
          amount: stats.yearlyBudget.valueInCents,
          currency: collective.currency
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-total-contributed",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatTitle, {
          children: ["\u2191\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            id: "RogA5E",
            defaultMessage: [{
              "type": 0,
              "value": "Total contributed"
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StatAmount, {
          amount: Math.abs(stats.totalAmountSpent.valueInCents),
          currency: stats.totalAmountSpent.currency
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-total-paid-expenses",
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(StatTitle, {
          children: ["\u2193\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            id: "Nqhan+",
            defaultMessage: [{
              "type": 0,
              "value": "Total received with expenses"
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StatAmount, {
          amount: stats.totalPaidExpenses.valueInCents,
          currency: stats.totalPaidExpenses.currency
        })]
      })]
    })
  });
};

BudgetStats.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BudgetStats",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "isArchived": {
            "name": "bool",
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "host": {
            "name": "object",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "stats": {
      "description": "Stats",
      "type": {
        "name": "shape",
        "value": {
          "balance": {
            "name": "custom",
            "raw": "AmountPropTypeShape.isRequired",
            "required": true
          },
          "consolidatedBalance": {
            "name": "custom",
            "raw": "AmountPropTypeShape.isRequired",
            "required": true
          },
          "yearlyBudget": {
            "name": "custom",
            "raw": "AmountPropTypeShape.isRequired",
            "required": true
          },
          "activeRecurringContributions": {
            "name": "object",
            "required": false
          },
          "totalAmountReceived": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          },
          "totalAmountRaised": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          },
          "totalNetAmountRaised": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          },
          "totalAmountSpent": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          },
          "totalPaidExpenses": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          }
        }
      },
      "required": false
    },
    "horizontal": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(BudgetStats));

/***/ }),

/***/ 36219:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69078);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24839);



/**
 * A special container that center the content with the correct width and margins
 * for the collective page.
 */

var ContainerSectionContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).attrs({
  maxWidth: _constants__WEBPACK_IMPORTED_MODULE_1__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
  px: _constants__WEBPACK_IMPORTED_MODULE_1__/* .Dimensions.PADDING_X */ .Db.PADDING_X,
  m: '0 auto'
}).withConfig({
  displayName: "ContainerSectionContent",
  componentId: "sc-ahctoi-0"
})([""]);
/** @component */

/* harmony default export */ __webpack_exports__["Z"] = (ContainerSectionContent);

/***/ }),

/***/ 54103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MR": function() { return /* binding */ getBudgetSectionQuery; },
/* harmony export */   "kr": function() { return /* binding */ getBudgetSectionQueryVariables; }
/* harmony export */ });
/* unused harmony exports budgetSectionQuery, budgetSectionForIndividualQuery, budgetSectionWithHostQuery */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75472);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(46829);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(52015);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33054);
/* harmony import */ var _lib_constants_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3350);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _budget_DebitCreditList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99962);
/* harmony import */ var _budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13467);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69078);
/* harmony import */ var _expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17738);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(29242);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19156);
/* harmony import */ var _StyledFilters__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(59049);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var _transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(65536);
/* harmony import */ var _transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(83722);
/* harmony import */ var _transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(89434);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51927);
/* harmony import */ var _BudgetStats__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(91181);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(36219);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(85893);






var _templateObject, _templateObject2, _templateObject3, _templateObject4;





























var budgetSectionAccountFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  fragment BudgetSectionAccountFields on Account {\n    id\n    isHost\n    type\n    stats {\n      id\n      balance {\n        valueInCents\n        currency\n      }\n      consolidatedBalance {\n        valueInCents\n        currency\n      }\n      yearlyBudget {\n        valueInCents\n        currency\n      }\n      activeRecurringContributions\n      totalAmountReceived(periodInMonths: 12) {\n        valueInCents\n        currency\n      }\n      totalAmountRaised: totalAmountReceived {\n        valueInCents\n        currency\n      }\n      totalNetAmountRaised: totalNetAmountReceived {\n        valueInCents\n        currency\n      }\n    }\n  }\n"])));
var budgetSectionQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  query BudgetSection($slug: String!, $limit: Int!, $kind: [TransactionKind]) {\n    transactions(\n      account: { slug: $slug }\n      limit: $limit\n      kind: $kind\n      includeIncognitoTransactions: true\n      includeGiftCardTransactions: true\n      includeChildrenTransactions: true\n    ) {\n      ...TransactionsQueryCollectionFragment\n    }\n    expenses(account: { slug: $slug }, limit: $limit, includeChildrenExpenses: true) {\n      totalCount\n      nodes {\n        id\n        ...ExpensesListFieldsFragment\n      }\n    }\n    account(slug: $slug) {\n      id\n      ...BudgetSectionAccountFields\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), _transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .transactionsQueryCollectionFragment */ .N, _expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expensesListFieldsFragment */ .xe, budgetSectionAccountFieldsFragment);
var budgetSectionForIndividualQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  query BudgetSectionForIndividual($slug: String!, $limit: Int!, $kind: [TransactionKind]) {\n    transactions(\n      account: { slug: $slug }\n      limit: $limit\n      kind: $kind\n      includeIncognitoTransactions: true\n      includeGiftCardTransactions: true\n    ) {\n      ...TransactionsQueryCollectionFragment\n    }\n    expenses(createdByAccount: { slug: $slug }, limit: $limit) {\n      totalCount\n      nodes {\n        id\n        ...ExpensesListFieldsFragment\n      }\n    }\n    account(slug: $slug) {\n      id\n      isHost\n      type\n      stats {\n        id\n        totalAmountSpent(net: true) {\n          valueInCents\n          currency\n        }\n        totalPaidExpenses {\n          valueInCents\n          currency\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n"])), _transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .transactionsQueryCollectionFragment */ .N, _expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expensesListFieldsFragment */ .xe);
var budgetSectionWithHostQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2___default()(["\n  query BudgetSectionWithHost($slug: String!, $hostSlug: String!, $limit: Int!, $kind: [TransactionKind]) {\n    host(slug: $hostSlug) {\n      id\n      ...ExpenseHostFields\n    }\n    transactions(\n      account: { slug: $slug }\n      limit: $limit\n      kind: $kind\n      includeIncognitoTransactions: true\n      includeGiftCardTransactions: true\n      includeChildrenTransactions: true\n    ) {\n      ...TransactionsQueryCollectionFragment\n    }\n    expenses(account: { slug: $slug }, limit: $limit, includeChildrenExpenses: true) {\n      totalCount\n      nodes {\n        id\n        ...ExpensesListFieldsFragment\n      }\n    }\n    account(slug: $slug) {\n      id\n      ...BudgetSectionAccountFields\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .transactionsQueryCollectionFragment */ .N, _expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expensesListFieldsFragment */ .xe, _expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expenseHostFields */ .RR, budgetSectionAccountFieldsFragment);
var getBudgetSectionQuery = function getBudgetSectionQuery(hasHost, isIndividual) {
  if (hasHost) {
    return budgetSectionWithHostQuery;
  } else if (isIndividual) {
    return budgetSectionForIndividualQuery;
  } else {
    return budgetSectionQuery;
  }
}; // Any change here should be reflected in API's `server/graphql/cache.js`

var getBudgetSectionQueryVariables = function getBudgetSectionQueryVariables(collectiveSlug, hostSlug, isIndividual) {
  if (isIndividual) {
    return {
      slug: collectiveSlug,
      limit: 3,
      kind: (0,_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_22__/* .getDefaultKinds */ .ce)().filter(function (kind) {
        return kind !== _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind.EXPENSE */ .wz.EXPENSE;
      })
    };
  } else {
    return {
      slug: collectiveSlug,
      hostSlug: hostSlug,
      limit: 3,
      kind: (0,_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_22__/* .getDefaultKinds */ .ce)()
    };
  }
};
var BudgetItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_30__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "Budget__BudgetItemContainer",
  componentId: "sc-7g8coq-0"
})(["", ""], function (props) {
  return !props.$isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_30__/* .css */ .iv)(["border-top:1px solid #e6e8eb;"]);
});
var FILTERS = ['all', 'expenses', 'transactions'];

var geFilterLabel = function geFilterLabel(filter, isIndividual) {
  switch (filter) {
    case 'all':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        id: "SectionTransactions.All",
        defaultMessage: [{
          "type": 0,
          "value": "All"
        }]
      });

    case 'expenses':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        id: "Expenses",
        defaultMessage: [{
          "type": 0,
          "value": "Expenses"
        }]
      });

    case 'transactions':
      return isIndividual ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        id: "Contributions",
        defaultMessage: [{
          "type": 0,
          "value": "Contributions"
        }]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        id: "menu.transactions",
        defaultMessage: [{
          "type": 0,
          "value": "Transactions"
        }]
      });

    default:
      return null;
  }
};

var getBudgetItems = function getBudgetItems(transactions, expenses, filter) {
  if (filter === 'expenses') {
    return expenses;
  } else if (filter === 'transactions') {
    return transactions;
  } else {
    var expenseIds = expenses.map(function (expense) {
      return expense.id;
    });
    var transactionsWithoutMatchingExpense = transactions.filter(function (transaction) {
      var _transaction$expense;

      return !expenseIds.includes((_transaction$expense = transaction.expense) === null || _transaction$expense === void 0 ? void 0 : _transaction$expense.id);
    });
    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()([].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(transactionsWithoutMatchingExpense), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(expenses)), 'createdAt', 'desc').slice(0, 3);
  }
};

var ViewAllLink = function ViewAllLink(_ref) {
  var collective = _ref.collective,
      filter = _ref.filter,
      hasExpenses = _ref.hasExpenses,
      hasTransactions = _ref.hasTransactions,
      isIndividual = _ref.isIndividual;
  var isFilterAll = filter === 'all';

  if (filter === 'expenses' || isFilterAll && hasExpenses && !hasTransactions) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/").concat(isIndividual ? 'submitted-expenses' : 'expenses'),
      "data-cy": "view-all-expenses-link",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
          id: "CollectivePage.SectionBudget.ViewAllExpenses",
          defaultMessage: [{
            "type": 0,
            "value": "View all expenses"
          }]
        }), "\xA0 \u2192"]
      })
    });
  } else if (isFilterAll && isIndividual) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/transactions"),
      "data-cy": "view-all-transactions-link",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        id: "transactions.viewAll",
        defaultMessage: [{
          "type": 0,
          "value": "View All Transactions"
        }]
      }), "\xA0 \u2192"]
    });
  } else if (filter === 'transactions' || isFilterAll && hasTransactions && !hasExpenses) {
    return isIndividual ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/transactions?kind=ADDED_FUNDS,CONTRIBUTION,PLATFORM_TIP"),
      "data-cy": "view-all-transactions-link",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        id: "CollectivePage.SectionBudget.ViewAllContributions",
        defaultMessage: [{
          "type": 0,
          "value": "View all contributions"
        }]
      }), "\xA0 \u2192"]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective), "/transactions"),
      "data-cy": "view-all-transactions-link",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
        id: "CollectivePage.SectionBudget.ViewAll",
        defaultMessage: [{
          "type": 0,
          "value": "View all transactions"
        }]
      }), " \u2192"]
    });
  } else {
    return null;
  }
};

/**
 * The budget section. Shows the expenses, the latest transactions and some statistics
 * abut the global budget of the collective.
 */
var SectionBudget = function SectionBudget(_ref2) {
  var _collective$host, _data$account;

  var collective = _ref2.collective,
      LoggedInUser = _ref2.LoggedInUser;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState('all'),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      filter = _React$useState2[0],
      setFilter = _React$useState2[1];

  var isIndividual = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_6__/* .isIndividualAccount */ .Sh)(collective) && !collective.isHost;
  var budgetQueryResult = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_32__.useQuery)(getBudgetSectionQuery(Boolean(collective.host), isIndividual), {
    variables: getBudgetSectionQueryVariables(collective.slug, (_collective$host = collective.host) === null || _collective$host === void 0 ? void 0 : _collective$host.slug, isIndividual),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
  });
  var data = budgetQueryResult.data,
      refetch = budgetQueryResult.refetch;
  var transactions = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(data, 'transactions.nodes') || _lib_constants_utils__WEBPACK_IMPORTED_MODULE_8__/* .EMPTY_ARRAY */ .L;
  var expenses = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(data, 'expenses.nodes') || _lib_constants_utils__WEBPACK_IMPORTED_MODULE_8__/* .EMPTY_ARRAY */ .L;
  var budgetItemsParams = [transactions, expenses, filter];
  var allItems = react__WEBPACK_IMPORTED_MODULE_5__.useMemo(function () {
    return getBudgetItems.apply(void 0, budgetItemsParams);
  }, budgetItemsParams);
  var isLoading = !allItems.length && budgetQueryResult.loading;
  var hasExpenses = Boolean(expenses.length);
  var hasTransactions = Boolean(transactions.length); // Refetch data when user logs in to refresh permissions

  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    if (LoggedInUser) {
      refetch();
    }
  }, [LoggedInUser]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_ContainerSectionContent__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
    pb: 4,
    children: [(hasExpenses || hasTransactions) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
      mb: 3,
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: ['100%', null, 'min(748px, 55vw)'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_StyledFilters__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        filters: FILTERS,
        getLabel: function getLabel(filter) {
          return geFilterLabel(filter, isIndividual);
        },
        selected: filter,
        onChange: setFilter
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(ViewAllLink, {
        collective: collective,
        filter: filter,
        hasExpenses: hasExpenses,
        hasTransactions: hasTransactions,
        isIndividual: isIndividual
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Flex */ .kC, {
      flexDirection: ['column-reverse', null, 'row'],
      justifyContent: "space-between",
      alignItems: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        flex: "10",
        mb: 3,
        width: "100%",
        maxWidth: 800,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_StyledCard__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            height: 300
          }) : !allItems.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            textAlign: "center",
            py: 94,
            px: 2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              src: "/static/images/empty-jars.png",
              alt: "Empty jars",
              width: 125,
              height: 125
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "28px",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                id: "Budget.Empty",
                defaultMessage: [{
                  "type": 0,
                  "value": "There are no transactions yet."
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
              mt: 2,
              fontSize: "16px",
              lineHeight: "24px",
              color: "black.600",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                id: "Budget.EmptyComeBackLater",
                defaultMessage: [{
                  "type": 0,
                  "value": "Come back to this section once there is at least one transaction!"
                }]
              })
            })]
          }) : allItems.map(function (item, idx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(BudgetItemContainer, {
              $isFirst: !idx,
              "data-cy": "single-budget-item",
              children: item.__typename === 'Expense' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_budget_DebitCreditList__WEBPACK_IMPORTED_MODULE_11__/* .DebitItem */ .cw, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  expense: item,
                  host: data === null || data === void 0 ? void 0 : data.host,
                  showAmountSign: true,
                  showProcessActions: true
                })
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                transaction: item,
                collective: collective,
                displayActions: true,
                onMutationSuccess: refetch
              })
            }, "".concat(item.__typename, "-").concat((item === null || item === void 0 ? void 0 : item.id) || idx));
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
        width: "32px",
        flex: "1"
      }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        height: 300
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_BudgetStats__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        collective: collective,
        stats: data === null || data === void 0 ? void 0 : (_data$account = data.account) === null || _data$account === void 0 ? void 0 : _data$account.stats
      })]
    })]
  });
};

SectionBudget.__docgenInfo = {
  "description": "The budget section. Shows the expenses, the latest transactions and some statistics\nabut the global budget of the collective.",
  "methods": [],
  "displayName": "SectionBudget",
  "props": {
    "collective": {
      "description": "Collective",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "isArchived": {
            "name": "bool",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "host": {
            "name": "object",
            "required": false
          }
        }
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
/* harmony default export */ __webpack_exports__["ZP"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.memo((0,_UserProvider__WEBPACK_IMPORTED_MODULE_25__/* .withUser */ .ns)(SectionBudget)));

/***/ }),

/***/ 64677:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ edit_collective_AssignVirtualCardModal; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/CollectivePicker.js + 2 modules
var CollectivePicker = __webpack_require__(41861);
// EXTERNAL MODULE: ./components/CollectivePickerAsync.js
var CollectivePickerAsync = __webpack_require__(5993);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/icons/CreditCard.js
var CreditCard = __webpack_require__(47483);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledInputGroup.js
var StyledInputGroup = __webpack_require__(32631);
// EXTERNAL MODULE: ./node_modules/react-text-mask/dist/reactTextMask.js
var reactTextMask = __webpack_require__(91749);
var reactTextMask_default = /*#__PURE__*/__webpack_require__.n(reactTextMask);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/StyledInputMask.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var StyledInputMask = function StyledInputMask(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)((reactTextMask_default()), _objectSpread({}, props));
};

StyledInputMask.defaultProps = {
  // eslint-disable-next-line react/display-name
  render: function render(ref, props) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread({
      ref: ref
    }, props));
  }
};
StyledInputMask.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledInputMask",
  "props": {
    "render": {
      "defaultValue": {
        "value": "(ref, props) => <StyledInput ref={ref} {...props} />",
        "computed": false
      },
      "required": false
    }
  },
  "composes": ["./StyledInput", "react-text-mask"]
};
/* harmony default export */ var components_StyledInputMask = (StyledInputMask);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
;// CONCATENATED MODULE: ./components/edit-collective/AssignVirtualCardModal.js






var _excluded = ["collective", "host", "onSuccess", "onClose"];

var _templateObject, _templateObject2;



function AssignVirtualCardModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AssignVirtualCardModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AssignVirtualCardModal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AssignVirtualCardModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }























var initialValues = {
  cardNumber: undefined,
  collective: undefined,
  expiryDate: undefined,
  cvv: undefined,
  assignee: undefined,
  provider: undefined,
  cardName: undefined
};
var assignNewVirtualCardMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation assignNewVirtualCard(\n    $virtualCard: VirtualCardInput!\n    $account: AccountReferenceInput!\n    $assignee: AccountReferenceInput!\n  ) {\n    assignNewVirtualCard(virtualCard: $virtualCard, account: $account, assignee: $assignee) {\n      id\n      name\n      last4\n      data\n    }\n  }\n"])));
var collectiveMembersQuery = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query CollectiveMembers($slug: String!) {\n    account(slug: $slug) {\n      id\n      members(role: ADMIN) {\n        nodes {\n          id\n          account {\n            id\n            name\n            imageUrl\n            slug\n          }\n        }\n      }\n    }\n  }\n"])));

var throttledCall = debounce_default()(function (searchFunc, variables) {
  return searchFunc({
    variables: variables
  });
}, 750);

var AssignVirtualCardModal = function AssignVirtualCardModal(_ref) {
  var _users$account;

  var collective = _ref.collective,
      host = _ref.host,
      onSuccess = _ref.onSuccess,
      onClose = _ref.onClose,
      modalProps = objectWithoutProperties_default()(_ref, _excluded);

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useMutation = (0,client.useMutation)(assignNewVirtualCardMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      assignNewVirtualCard = _useMutation2[0],
      isBusy = _useMutation2[1].loading;

  var _useLazyQuery = (0,client.useLazyQuery)(collectiveMembersQuery, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useLazyQuery2 = slicedToArray_default()(_useLazyQuery, 2),
      getCollectiveUsers = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      isLoadingUsers = _useLazyQuery2$.loading,
      users = _useLazyQuery2$.data;

  var formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, initialValues), {}, {
      collective: collective
    }),
    onSubmit: function onSubmit(values) {
      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var collective, assignee, provider, cardName, privateData;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                collective = values.collective, assignee = values.assignee, provider = values.provider, cardName = values.cardName;
                privateData = {
                  cardNumber: values.cardNumber.replace(/\s+/g, ''),
                  cvv: values.cvv,
                  expiryDate: values.expiryDate,
                  // Should be removed once https://github.com/opencollective/opencollective-api/pull/7307 is deployed to production
                  expireDate: values.expiryDate
                };
                _context.prev = 2;
                _context.next = 5;
                return assignNewVirtualCard({
                  variables: {
                    virtualCard: {
                      privateData: privateData,
                      provider: provider,
                      name: cardName
                    },
                    assignee: {
                      id: assignee.id
                    },
                    account: typeof collective.id === 'string' ? {
                      id: collective.id
                    } : {
                      legacyId: collective.id
                    }
                  }
                });

              case 5:
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);
                addToast({
                  type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                  message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Host.VirtualCards.AssignCard.Error",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Error assigning card: "
                    }, {
                      "type": 1,
                      "value": "error"
                    }],
                    values: {
                      error: _context.t0.message
                    }
                  })
                });
                return _context.abrupt("return");

              case 11:
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
                handleClose();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 7]]);
      }))();
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.cardNumber) {
        errors.cardNumber = 'Required';
      } else if (values.cardNumber.length < 16 + 6) {
        errors.cardNumber = 'Card Number must have 16 digits';
      }

      if (!values.collective) {
        errors.collective = 'Required';
      }

      if (!values.provider) {
        errors.provider = 'Required';
      }

      if (!values.cardName) {
        errors.cardName = 'Required';
      }

      if (!values.assignee) {
        errors.assignee = 'Required';
      }

      if (!values.expiryDate) {
        errors.expiryDate = 'Required';
      }

      if (!values.cvv) {
        errors.cvv = 'Required';
      }

      return errors;
    }
  });
  (0,react.useEffect)(function () {
    var _formik$values$collec;

    if ((_formik$values$collec = formik.values.collective) !== null && _formik$values$collec !== void 0 && _formik$values$collec.slug) {
      throttledCall(getCollectiveUsers, {
        slug: formik.values.collective.slug
      });
    }
  }, [formik.values.collective]);

  var handleClose = function handleClose() {
    formik.resetForm(initialValues);
    formik.setErrors({});
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };

  var handleCollectivePick = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(option) {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              formik.setFieldValue('collective', option.value);
              formik.setFieldValue('assignee', null);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleCollectivePick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var collectiveUsers = users === null || users === void 0 ? void 0 : (_users$account = users.account) === null || _users$account === void 0 ? void 0 : _users$account.members.nodes.map(function (node) {
    return node.account;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* default */.ZP, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({
    width: "382px",
    onClose: handleClose,
    trapFocus: true
  }, modalProps), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
        onClose: handleClose,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Host.VirtualCards.AssignCard",
          defaultMessage: [{
            "type": 0,
            "value": "Assign Card"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
        pt: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Host.VirtualCards.AssignCard.Description",
            defaultMessage: [{
              "type": 0,
              "value": "Assign existing card to a collective sharing the private information below."
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          borderColor: "black.300",
          mt: 3
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.rj, {
          mt: 3,
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "26px 8px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "goAEwY",
              defaultMessage: [{
                "type": 0,
                "value": "Which collective will be assigned to this card?"
              }]
            }),
            htmlFor: "collective",
            error: formik.touched.collective && formik.errors.collective,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePickerAsync/* default */.Z, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, inputProps), {}, {
                hostCollectiveIds: [host.legacyId],
                name: "collective",
                id: "collective",
                collective: formik.values.collective,
                isDisabled: !!collective || isBusy,
                customOptions: [defineProperty_default()({
                  value: host,
                  label: host.name
                }, CollectivePicker/* FLAG_COLLECTIVE_PICKER_COLLECTIVE */.rA, true)],
                onChange: handleCollectivePick,
                filterResults: function filterResults(collectives) {
                  return collectives.filter(function (c) {
                    return c.isActive;
                  });
                }
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "vwk9m4",
              defaultMessage: [{
                "type": 0,
                "value": "Which user will be responsible for this card?"
              }]
            }),
            htmlFor: "assignee",
            error: formik.touched.assignee && formik.errors.assignee,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePicker/* default */.ZP, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, inputProps), {}, {
                name: "assignee",
                id: "assignee",
                groupByType: false,
                collectives: collectiveUsers,
                collective: formik.values.assignee,
                isDisabled: isLoadingUsers || isBusy,
                onChange: function onChange(option) {
                  return formik.setFieldValue('assignee', option.value);
                }
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: "What payment provider do you use for this card?",
            htmlFor: "provider",
            error: formik.touched.provider && formik.errors.provider,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, inputProps), {}, {
                id: "provider",
                inputId: "provider",
                placeholder: "Select",
                options: [{
                  key: 'PRIVACY',
                  value: 'PRIVACY',
                  label: 'Privacy'
                }, {
                  key: 'STRIPE',
                  value: 'STRIPE',
                  label: 'Stripe'
                }],
                isSearchable: false,
                disabled: isBusy,
                onChange: function onChange(option) {
                  return formik.setFieldValue('provider', option.value);
                }
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "8oufoc",
              defaultMessage: [{
                "type": 0,
                "value": "Card name"
              }]
            }),
            htmlFor: "cardName",
            error: formik.touched.cardName && formik.errors.cardName,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, inputProps), {}, {
                name: "cardName",
                id: "cardName",
                onChange: formik.handleChange,
                value: formik.values.cardName,
                disabled: isBusy,
                guide: false
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "qBST+n",
              defaultMessage: [{
                "type": 0,
                "value": "Card number"
              }]
            }),
            htmlFor: "number",
            error: formik.touched.cardNumber && formik.errors.cardNumber,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(components_StyledInputMask, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, inputProps), {}, {
                name: "cardNumber",
                id: "cardNumber",
                onChange: formik.handleChange,
                value: formik.values.cardNumber,
                mask: [/\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/],
                render: function render(ref, props) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputGroup/* default */.Z, AssignVirtualCardModal_objectSpread({
                    prepend: /*#__PURE__*/(0,jsx_runtime.jsx)(CreditCard/* default */.Z, {
                      height: "18px",
                      style: {
                        marginTop: '-1px'
                      }
                    }),
                    prependProps: {
                      bg: 'transparent',
                      ml: 2
                    },
                    innerRef: ref
                  }, props));
                },
                disabled: isBusy,
                guide: false
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            labelFontSize: "13px",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "x/oJ17",
              defaultMessage: [{
                "type": 0,
                "value": "Expiry date"
              }]
            }),
            htmlFor: "expiryDate",
            error: formik.touched.expiryDate && formik.errors.expiryDate,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(components_StyledInputMask, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, inputProps), {}, {
                name: "expiryDate",
                id: "expiryDate",
                onChange: formik.handleChange,
                value: formik.values.expiryDate,
                mask: [/[01]/, /\d/, '/', '2', '0', /\d/, /\d/],
                placeholder: "MM/YYYY",
                guide: false,
                disabled: isBusy
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            labelFontSize: "13px",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Q0lxqm",
              defaultMessage: [{
                "type": 0,
                "value": "CVV/CVC"
              }]
            }),
            htmlFor: "cvv",
            error: formik.touched.cvv && formik.errors.cvv,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(components_StyledInputMask, AssignVirtualCardModal_objectSpread(AssignVirtualCardModal_objectSpread({}, inputProps), {}, {
                id: "cvv",
                name: "cvv",
                onChange: formik.handleChange,
                value: formik.values.cvv,
                mask: [/\d/, /\d/, /\d/],
                guide: false,
                placeholder: "123",
                disabled: isBusy
              }));
            }
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
        isFullWidth: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          display: "flex",
          justifyContent: ['center', 'flex-end'],
          flexWrap: "Wrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            my: 1,
            minWidth: 140,
            buttonStyle: "primary",
            "data-cy": "confirmation-modal-continue",
            loading: isBusy,
            type: "submit",
            textTransform: "capitalize",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "SaveCard",
              defaultMessage: [{
                "type": 0,
                "value": "Save Card"
              }]
            })
          })
        })
      })]
    })
  }));
};

AssignVirtualCardModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AssignVirtualCardModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "legacyId": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "id": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "string"
            }],
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "imageUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          },
          "id": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "string"
            }],
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "imageUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};

/** @component */
/* harmony default export */ var edit_collective_AssignVirtualCardModal = (AssignVirtualCardModal);

/***/ }),

/***/ 99967:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ EditVirtualCardModal; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/ExclamationCircle/ExclamationCircle.esm.js
var ExclamationCircle_esm = __webpack_require__(28687);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./lib/constants/roles.js
var roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/graphql/types/v2/graphql.ts
var graphql = __webpack_require__(97965);
// EXTERNAL MODULE: ./lib/hooks/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(62131);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
;// CONCATENATED MODULE: ./lib/virtual-cards/constants.ts


var _defineMessages, _defineMessages2;



var VirtualCardLimitIntervalDescriptionsI18n = (0,react_intl_lib.defineMessages)((_defineMessages = {}, defineProperty_default()(_defineMessages, graphql/* VirtualCardLimitInterval.ALL_TIME */.nV.ALL_TIME, {
  id: "virtualCard.intervalLimitDescription.all_time",
  defaultMessage: [{
    "type": 0,
    "value": "Total amount that can be spent with this card."
  }]
}), defineProperty_default()(_defineMessages, graphql/* VirtualCardLimitInterval.DAILY */.nV.DAILY, {
  id: "virtualCard.intervalLimitDescription.daily",
  defaultMessage: [{
    "type": 0,
    "value": "Daily amount that can be spent with this card."
  }]
}), defineProperty_default()(_defineMessages, graphql/* VirtualCardLimitInterval.MONTHLY */.nV.MONTHLY, {
  id: "virtualCard.intervalLimitDescription.monthly",
  defaultMessage: [{
    "type": 0,
    "value": "Monthly amount that can be spent with this card."
  }]
}), defineProperty_default()(_defineMessages, graphql/* VirtualCardLimitInterval.PER_AUTHORIZATION */.nV.PER_AUTHORIZATION, {
  id: "virtualCard.intervalLimitDescription.per_authorization",
  defaultMessage: [{
    "type": 0,
    "value": "Amount that can be spent with this card per use."
  }]
}), defineProperty_default()(_defineMessages, graphql/* VirtualCardLimitInterval.WEEKLY */.nV.WEEKLY, {
  id: "virtualCard.intervalLimitDescription.weekly",
  defaultMessage: [{
    "type": 0,
    "value": "Weekly amount that can be spent with this card."
  }]
}), defineProperty_default()(_defineMessages, graphql/* VirtualCardLimitInterval.YEARLY */.nV.YEARLY, {
  id: "virtualCard.intervalLimitDescription.yearly",
  defaultMessage: [{
    "type": 0,
    "value": "Yearly amount that can be spent with this card."
  }]
}), _defineMessages));
var VirtualCardLimitIntervalI18n = (0,react_intl_lib.defineMessages)((_defineMessages2 = {}, defineProperty_default()(_defineMessages2, graphql/* VirtualCardLimitInterval.ALL_TIME */.nV.ALL_TIME, {
  id: "s+lPP3",
  defaultMessage: [{
    "type": 0,
    "value": "All time"
  }]
}), defineProperty_default()(_defineMessages2, graphql/* VirtualCardLimitInterval.DAILY */.nV.DAILY, {
  id: "virtualCard.intervalLimit.daily",
  defaultMessage: [{
    "type": 0,
    "value": "Daily"
  }]
}), defineProperty_default()(_defineMessages2, graphql/* VirtualCardLimitInterval.MONTHLY */.nV.MONTHLY, {
  id: "Frequency.Monthly",
  defaultMessage: [{
    "type": 0,
    "value": "Monthly"
  }]
}), defineProperty_default()(_defineMessages2, graphql/* VirtualCardLimitInterval.PER_AUTHORIZATION */.nV.PER_AUTHORIZATION, {
  id: "virtualCard.intervalLimit.per_authorization",
  defaultMessage: [{
    "type": 0,
    "value": "Per authorization"
  }]
}), defineProperty_default()(_defineMessages2, graphql/* VirtualCardLimitInterval.WEEKLY */.nV.WEEKLY, {
  id: "week",
  defaultMessage: [{
    "type": 0,
    "value": "Weekly"
  }]
}), defineProperty_default()(_defineMessages2, graphql/* VirtualCardLimitInterval.YEARLY */.nV.YEARLY, {
  id: "Frequency.Yearly",
  defaultMessage: [{
    "type": 0,
    "value": "Yearly"
  }]
}), _defineMessages2));
// EXTERNAL MODULE: ./components/CollectivePicker.js + 2 modules
var CollectivePicker = __webpack_require__(41861);
// EXTERNAL MODULE: ./components/CollectivePickerAsync.js
var CollectivePickerAsync = __webpack_require__(5993);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputAmount.js
var StyledInputAmount = __webpack_require__(54029);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/edit-collective/EditVirtualCardModal.tsx






var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





























var editVirtualCardMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation editVirtualCard(\n    $virtualCard: VirtualCardReferenceInput!\n    $name: String!\n    $limitAmount: AmountInput\n    $limitInterval: VirtualCardLimitInterval\n    $assignee: AccountReferenceInput!\n  ) {\n    editVirtualCard(\n      virtualCard: $virtualCard\n      name: $name\n      limitAmount: $limitAmount\n      limitInterval: $limitInterval\n      assignee: $assignee\n    ) {\n      id\n      name\n      spendingLimitAmount\n      spendingLimitInterval\n      assignee {\n        id\n        name\n        slug\n        imageUrl\n      }\n    }\n  }\n"])));
var createVirtualCardMutation = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  mutation createVirtualCard(\n    $name: String!\n    $limitAmount: AmountInput!\n    $limitInterval: VirtualCardLimitInterval!\n    $account: AccountReferenceInput!\n    $assignee: AccountReferenceInput!\n  ) {\n    createVirtualCard(\n      name: $name\n      limitAmount: $limitAmount\n      limitInterval: $limitInterval\n      account: $account\n      assignee: $assignee\n    ) {\n      id\n      name\n      last4\n      data\n    }\n  }\n"]))); // TODO : refactor this mutation

var collectiveMembersQuery = (0,lib/* default */.ZP)(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  query CollectiveMembers($slug: String!) {\n    account(slug: $slug) {\n      id\n      members(role: ADMIN) {\n        nodes {\n          id\n          account {\n            id\n            name\n            imageUrl\n            slug\n          }\n        }\n      }\n    }\n  }\n"])));
var VirtualCardPoliciesQuery = (0,lib/* default */.ZP)(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n  query VirtualCardPoliciesQuery($slug: String) {\n    account(slug: $slug) {\n      id\n      policies {\n        MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL {\n          ALL_TIME {\n            valueInCents\n          }\n          DAILY {\n            valueInCents\n          }\n          MONTHLY {\n            valueInCents\n          }\n          PER_AUTHORIZATION {\n            valueInCents\n          }\n          WEEKLY {\n            valueInCents\n          }\n          YEARLY {\n            valueInCents\n          }\n        }\n      }\n    }\n  }\n"])));

var throttledCall = debounce_default()(function (searchFunc, variables) {
  return searchFunc({
    variables: variables
  });
}, 750);

function EditVirtualCardModal(_ref) {
  var _policyData$account, _policyData$account$p, _ref2, _virtualCard$currency, _virtualCard$spending, _users$account;

  var host = _ref.host,
      collective = _ref.collective,
      virtualCard = _ref.virtualCard,
      onSuccess = _ref.onSuccess,
      onClose = _ref.onClose,
      modalProps = _ref.modalProps;

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var _useQuery = (0,client.useQuery)(VirtualCardPoliciesQuery, {
    context: helpers/* API_V2_CONTEXT */.T,
    variables: {
      slug: host.slug
    }
  }),
      policyData = _useQuery.data,
      isLoadingPolicy = _useQuery.loading;

  var MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL = policyData === null || policyData === void 0 ? void 0 : (_policyData$account = policyData.account) === null || _policyData$account === void 0 ? void 0 : (_policyData$account$p = _policyData$account.policies) === null || _policyData$account$p === void 0 ? void 0 : _policyData$account$p.MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL;
  var isEditing = virtualCard !== null && virtualCard !== void 0 && virtualCard.id ? true : false;
  var formMutation = isEditing ? editVirtualCardMutation : createVirtualCardMutation;

  var _useMutation = (0,client.useMutation)(formMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      submitForm = _useMutation2[0],
      isBusy = _useMutation2[1].loading;

  var _useLazyQuery = (0,client.useLazyQuery)(collectiveMembersQuery, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useLazyQuery2 = slicedToArray_default()(_useLazyQuery, 2),
      getCollectiveUsers = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      isLoadingUsers = _useLazyQuery2$.loading,
      users = _useLazyQuery2$.data;

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var isHostAdmin = LoggedInUser === null || LoggedInUser === void 0 ? void 0 : LoggedInUser.hasRole(roles/* default.ADMIN */.Z.ADMIN, host);
  var canEditLimit = isHostAdmin && (!isEditing || virtualCard.provider === 'STRIPE');
  var currency = (_ref2 = (_virtualCard$currency = virtualCard === null || virtualCard === void 0 ? void 0 : virtualCard.currency) !== null && _virtualCard$currency !== void 0 ? _virtualCard$currency : host.currency) !== null && _ref2 !== void 0 ? _ref2 : 'USD';
  var formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: {
      collective: isEditing ? undefined : collective,
      cardName: virtualCard === null || virtualCard === void 0 ? void 0 : virtualCard.name,
      assignee: virtualCard === null || virtualCard === void 0 ? void 0 : virtualCard.assignee,
      limitAmount: canEditLimit ? virtualCard === null || virtualCard === void 0 ? void 0 : virtualCard.spendingLimitAmount : undefined,
      limitInterval: canEditLimit ? (_virtualCard$spending = virtualCard === null || virtualCard === void 0 ? void 0 : virtualCard.spendingLimitInterval) !== null && _virtualCard$spending !== void 0 ? _virtualCard$spending : graphql/* VirtualCardLimitInterval.MONTHLY */.nV.MONTHLY : undefined
    },
    onSubmit: function onSubmit(values) {
      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var assignee, cardName, limitAmount, limitInterval, collective, variables;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assignee = values.assignee, cardName = values.cardName, limitAmount = values.limitAmount, limitInterval = values.limitInterval, collective = values.collective;
                _context.prev = 1;
                variables = {
                  virtualCard: isEditing ? {
                    id: virtualCard.id
                  } : undefined,
                  account: isEditing ? undefined : typeof collective.id === 'string' ? {
                    id: collective.id
                  } : {
                    legacyId: collective.id
                  },
                  name: cardName,
                  assignee: {
                    id: assignee.id
                  },
                  limitAmount: undefined,
                  limitInterval: undefined
                };

                if (canEditLimit) {
                  variables.limitAmount = {
                    currency: currency,
                    valueInCents: limitAmount,
                    value: limitAmount / 100
                  };
                  variables.limitInterval = limitInterval;
                }

                _context.next = 6;
                return submitForm({
                  variables: variables
                });

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                addToast({
                  type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                  message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "FAV3Ng",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Error submiting form: "
                    }, {
                      "type": 1,
                      "value": "error"
                    }],
                    values: {
                      error: _context.t0.message
                    }
                  })
                });
                return _context.abrupt("return");

              case 12:
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess( /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "Nd9ioQ",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Card successfully updated"
                  }]
                }));
                handleClose();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }))();
    },
    validate: function validate(values) {
      var errors = {};

      if (!isEditing && !values.collective) {
        errors.collective = 'Required';
      }

      if (!values.assignee) {
        errors.assignee = 'Required';
      }

      if (!values.cardName) {
        errors.cardName = 'Required';
      }

      if (canEditLimit && !values.limitAmount) {
        errors.limitAmount = 'Required';
      }

      if (values.limitInterval) {
        var maximumLimitForInterval = (0,currency_utils/* graphqlAmountValueInCents */.kJ)(MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL[values.limitInterval]);

        if (values.limitAmount > maximumLimitForInterval * 100) {
          errors.limitAmount = "Limit for this interval should not exceed ".concat(maximumLimitForInterval, " ").concat(currency);
        }
      }

      return errors;
    }
  });
  var cardCollective = isEditing ? virtualCard.account : formik.values.collective;
  (0,react.useEffect)(function () {
    if (cardCollective !== null && cardCollective !== void 0 && cardCollective.slug) {
      throttledCall(getCollectiveUsers, {
        slug: cardCollective.slug
      });
    }
  }, [cardCollective]);
  var intl = (0,useIntl/* default */.Z)();

  var handleClose = function handleClose() {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };

  var virtualCardLimitOptions = Object.keys(graphql/* VirtualCardLimitInterval */.nV).map(function (interval) {
    return {
      value: interval,
      label: intl.formatMessage(VirtualCardLimitIntervalI18n[interval])
    };
  });
  var collectiveUsers = users === null || users === void 0 ? void 0 : (_users$account = users.account) === null || _users$account === void 0 ? void 0 : _users$account.members.nodes.map(function (node) {
    return node.account;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* default */.ZP, _objectSpread(_objectSpread({
    width: "382px",
    onClose: handleClose,
    trapFocus: true
  }, modalProps), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
        onClose: handleClose,
        hideCloseIcon: false,
        children: isEditing ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "TtzWuE",
          defaultMessage: [{
            "type": 0,
            "value": "Edit virtual card"
          }]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "FRM4fb",
          defaultMessage: [{
            "type": 0,
            "value": "Create virtual card"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
        pt: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          children: isEditing ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "9nfFQ7",
            defaultMessage: [{
              "type": 0,
              "value": "Edit virtual card for a collective with the information below."
            }]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "NW8fj9",
            defaultMessage: [{
              "type": 0,
              "value": "Create virtual card for a collective with the information below."
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledHr/* default */.Z, {
          borderColor: "black.300",
          mt: 3
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          mt: 3,
          children: [!isEditing && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            mb: 3,
            labelFontSize: "13px",
            labelFontWeight: "bold",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "goAEwY",
              defaultMessage: [{
                "type": 0,
                "value": "Which collective will be assigned to this card?"
              }]
            }),
            htmlFor: "collective",
            error: formik.touched.collective && formik.errors.collective,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePickerAsync/* default */.Z, _objectSpread(_objectSpread({}, inputProps), {}, {
                hostCollectiveIds: [host.legacyId],
                name: "collective",
                id: "collective",
                collective: formik.values.collective,
                isDisabled: !!collective || isBusy,
                customOptions: [defineProperty_default()({
                  value: host,
                  label: host.name
                }, CollectivePicker/* FLAG_COLLECTIVE_PICKER_COLLECTIVE */.rA, true)],
                onChange: function onChange(option) {
                  formik.setFieldValue('collective', option.value);
                  formik.setFieldValue('assignee', null);
                },
                filterResults: function filterResults(collectives) {
                  return collectives.filter(function (c) {
                    return c.isActive;
                  });
                }
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            labelFontSize: "13px",
            labelFontWeight: "bold",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "agYvVC",
              defaultMessage: [{
                "type": 0,
                "value": "Who is this card assigned to?"
              }]
            }),
            htmlFor: "assignee",
            error: formik.touched.assignee && formik.errors.assignee,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(CollectivePicker/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                name: "assignee",
                id: "assignee",
                groupByType: false,
                collectives: collectiveUsers,
                collective: formik.values.assignee,
                isDisabled: isLoadingUsers || isBusy,
                onChange: function onChange(option) {
                  return formik.setFieldValue('assignee', option.value);
                }
              }));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
            mt: 3,
            labelFontWeight: "bold",
            labelFontSize: "13px",
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "8oufoc",
              defaultMessage: [{
                "type": 0,
                "value": "Card name"
              }]
            }),
            htmlFor: "cardName",
            error: formik.touched.cardName && formik.errors.cardName,
            children: function children(inputProps) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                name: "cardName",
                id: "cardName",
                placeholder: intl.formatMessage({
                  id: "vREsbj",
                  defaultMessage: [{
                    "type": 0,
                    "value": "e.g Card for Subscription"
                  }]
                }),
                onChange: formik.handleChange,
                value: formik.values.cardName,
                disabled: isBusy,
                guide: false
              }));
            }
          }), canEditLimit && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              mt: 3,
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                flexGrow: 1,
                labelFontSize: "13px",
                labelFontWeight: "bold",
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "vV7hmB",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Limit Interval "
                  }, {
                    "type": 8,
                    "value": "link",
                    "children": [{
                      "type": 0,
                      "value": "(Read More)"
                    }]
                  }],
                  values: {
                    link: (0,I18nFormatters/* getI18nLink */.fw)({
                      as: Link/* default */.Z,
                      openInNewTab: true,
                      href: 'https://docs.opencollective.com/help/expenses-and-getting-paid/virtual-cards'
                    })
                  }
                }),
                htmlFor: "limitInterval",
                children: function children(inputProps) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelect/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                    inputId: "limitInterval",
                    "data-cy": "limitInterval",
                    error: formik.touched.limitAmount && Boolean(formik.errors.limitAmount),
                    onBlur: function onBlur() {
                      return formik.setFieldTouched('limitInterval', true);
                    },
                    onChange: function onChange(_ref4) {
                      var value = _ref4.value;
                      return formik.setFieldValue('limitInterval', value);
                    },
                    isLoading: isBusy,
                    options: virtualCardLimitOptions,
                    value: virtualCardLimitOptions.find(function (option) {
                      return option.value === formik.values.limitInterval;
                    })
                  }));
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
                ml: 3,
                labelFontSize: "13px",
                labelFontWeight: "bold",
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                  id: "ehbxf1",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Card Limit"
                  }]
                }),
                htmlFor: "limitAmount",
                children: function children(inputProps) {
                  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, _objectSpread(_objectSpread({}, inputProps), {}, {
                    id: "limitAmount",
                    placeholder: "0.00",
                    error: formik.touched.limitAmount && Boolean(formik.errors.limitAmount),
                    currency: currency,
                    prepend: currency,
                    onChange: function onChange(value) {
                      return formik.setFieldValue('limitAmount', value);
                    },
                    value: formik.values.limitAmount,
                    disabled: isBusy
                  }));
                }
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              pt: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                ml: 1,
                children: intl.formatMessage(VirtualCardLimitIntervalDescriptionsI18n[formik.values.limitInterval])
              })
            }), formik.touched.limitAmount && formik.errors.limitAmount && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              pt: 2,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExclamationCircle_esm/* ExclamationCircle */.b, {
                color: "#E03F6A",
                size: 16
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                ml: 1,
                color: "black.700",
                fontSize: "14px",
                children: formik.errors.limitAmount
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
        isFullWidth: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
          justifyContent: "flex-end",
          flexWrap: "wrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            my: 1,
            minWidth: 140,
            buttonStyle: "primary",
            "data-cy": "confirmation-modal-continue",
            loading: isBusy,
            disabled: isLoadingPolicy,
            type: "submit",
            textTransform: "capitalize",
            children: isEditing ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "actions.update",
              defaultMessage: [{
                "type": 0,
                "value": "Update"
              }]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "FRM4fb",
              defaultMessage: [{
                "type": 0,
                "value": "Create virtual card"
              }]
            })
          })
        })
      })]
    })
  }));
}
EditVirtualCardModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EditVirtualCardModal",
  "props": {
    "host": {
      "required": true,
      "tsType": {
        "name": "Account"
      },
      "description": ""
    },
    "collective": {
      "required": true,
      "tsType": {
        "name": "Account"
      },
      "description": ""
    },
    "virtualCard": {
      "required": true,
      "tsType": {
        "name": "VirtualCard"
      },
      "description": ""
    },
    "onSuccess": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "(el: React.ReactNode) => void",
        "signature": {
          "arguments": [{
            "name": "el",
            "type": {
              "name": "ReactReactNode",
              "raw": "React.ReactNode"
            }
          }],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    },
    "onClose": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    },
    "modalProps": {
      "required": true,
      "tsType": {
        "name": "any"
      },
      "description": ""
    }
  }
};

/***/ }),

/***/ 48652:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ validateTaxGST; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59854);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41429);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86896);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











var validateTaxGST = function validateTaxGST(intl, tax) {
  var errors = {};

  if (tax.type !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.GST) {
    return errors;
  } // Not validating rate since it can't be customized
  // ID number is required if there's a tax rate


  if (tax.rate && !tax.idNumber) {
    errors.idNumber = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  }

  return errors;
};

var ExpenseGSTFormikFields = function ExpenseGSTFormikFields(_ref) {
  var formik = _ref.formik,
      isOptional = _ref.isOptional;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(); // If mounted, it means that the form is subject to GST. Let's make sure we initialize taxes field accordingly

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    var _formik$values$taxes, _formik$values$taxes$;

    if (!((_formik$values$taxes = formik.values.taxes) !== null && _formik$values$taxes !== void 0 && (_formik$values$taxes$ = _formik$values$taxes[0]) !== null && _formik$values$taxes$ !== void 0 && _formik$values$taxes$.type) !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.GST) {
      var _formik$values$taxes2;

      formik.setFieldValue('taxes.0', _objectSpread(_objectSpread({}, (_formik$values$taxes2 = formik.values.taxes) === null || _formik$values$taxes2 === void 0 ? void 0 : _formik$values$taxes2[0]), {}, {
        type: _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.GST,
        rate: _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.GST_RATE_PERCENT / 100
      }));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .rj, {
    gridTemplateColumns: "75px minmax(120px, 1fr)",
    gridGap: 2,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      name: "taxes.0.rate",
      htmlFor: "GST-rate",
      label: intl.formatMessage({
        id: "gC0tFj",
        defaultMessage: [{
          "type": 0,
          "value": "GST rate"
        }]
      }),
      inputType: "number",
      required: true,
      children: function children(_ref2) {
        var field = _ref2.field;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
          value: lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(field.value * 100, 2),
          append: "%",
          min: 0,
          max: 100,
          step: "0.01",
          disabled: true
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      name: "taxes.0.idNumber",
      htmlFor: "GST-number",
      label: intl.formatMessage({
        id: "EditCollective.GSTNumber",
        defaultMessage: [{
          "type": 0,
          "value": "GST number"
        }]
      }),
      required: !isOptional,
      mr: 2,
      children: function children(_ref3) {
        var field = _ref3.field;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
          placeholder: intl.formatMessage({
            id: "examples",
            defaultMessage: [{
              "type": 0,
              "value": "e.g., "
            }, {
              "type": 1,
              "value": "examples"
            }]
          }, {
            examples: '123456789'
          })
        }));
      }
    })]
  });
};

ExpenseGSTFormikFields.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseGSTFormikFields",
  "props": {
    "formik": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isOptional": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ExpenseGSTFormikFields);

/***/ }),

/***/ 41016:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I6": function() { return /* binding */ generateInvoiceBlob; },
/* harmony export */   "eS": function() { return /* binding */ getExpenseInvoiceFilename; }
/* harmony export */ });
/* unused harmony exports downloadExpenseInvoice, useExpenseInvoiceDownloadHelper */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93162);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65985);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19878);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31330);












var getPrettyDate = function getPrettyDate(expense) {
  if (!(expense !== null && expense !== void 0 && expense.createdAt)) {
    return '';
  }

  var utc = new Date(expense.createdAt).toISOString();
  return "-".concat(utc.split('T')[0]);
};

var getExpenseInvoiceFilename = function getExpenseInvoiceFilename(collective, expense) {
  var prettyDate = getPrettyDate(expense);
  return "Expense-".concat(expense.legacyId, "-").concat(collective === null || collective === void 0 ? void 0 : collective.slug, "-invoice").concat(prettyDate, ".pdf");
};
var generateInvoiceBlob = /*#__PURE__*/function () {
  var _ref = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(expense) {
    var invoiceUrl;
    return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            invoiceUrl = (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .expenseInvoiceUrl */ .XX)(expense.id);
            return _context.abrupt("return", (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__/* .fetchFromPDFService */ .WD)(invoiceUrl));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function generateInvoiceBlob(_x) {
    return _ref.apply(this, arguments);
  };
}();
var downloadExpenseInvoice = /*#__PURE__*/function () {
  var _ref3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(collective, expense, _ref2) {
    var setLoading, isLoading, onError, filename, file, error;
    return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setLoading = _ref2.setLoading, isLoading = _ref2.isLoading, onError = _ref2.onError;

            if (!isLoading) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", false);

          case 3:
            filename = getExpenseInvoiceFilename(collective, expense);
            setLoading(true);
            _context2.prev = 5;
            _context2.next = 8;
            return generateInvoiceBlob(expense);

          case 8:
            file = _context2.sent;
            return _context2.abrupt("return", (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(file, filename));

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](5);
            error = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .getErrorFromPdfService */ .be)(_context2.t0);
            onError(error);

          case 16:
            _context2.prev = 16;
            setLoading(false);
            return _context2.finish(16);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 12, 16, 19]]);
  }));

  return function downloadExpenseInvoice(_x2, _x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
var useExpenseInvoiceDownloadHelper = function useExpenseInvoiceDownloadHelper(_ref4) {
  var expense = _ref4.expense,
      collective = _ref4.collective,
      _onError = _ref4.onError,
      disablePreview = _ref4.disablePreview;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      isLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(null),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  if (![_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].SETTLEMENT */ .Z.SETTLEMENT].includes(expense.type)) {
    return {
      error: null,
      isLoading: false,
      filename: '',
      downloadInvoice: null
    };
  }

  return {
    error: error,
    isLoading: isLoading,
    filename: getExpenseInvoiceFilename(collective, expense),
    downloadInvoice: function downloadInvoice() {
      return downloadExpenseInvoice(collective, expense, {
        setLoading: setLoading,
        isLoading: isLoading,
        disablePreview: disablePreview,
        onError: function onError(error) {
          setError(error);

          if (_onError) {
            _onError(error);
          } else {
            addToast({
              type: _ToastProvider__WEBPACK_IMPORTED_MODULE_9__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
              variant: 'light',
              message: 'Request failed, please try again later'
            });
          }
        }
      });
    }
  };
};
/**
 * An helper to build components that download expense's invoice. Does not check the permissions.
 */

var ExpenseInvoiceDownloadHelper = function ExpenseInvoiceDownloadHelper(_ref5) {
  var children = _ref5.children,
      expense = _ref5.expense,
      collective = _ref5.collective,
      onError = _ref5.onError,
      disablePreview = _ref5.disablePreview;
  var state = useExpenseInvoiceDownloadHelper({
    expense: expense,
    collective: collective,
    onError: onError,
    disablePreview: disablePreview
  });
  return children(state);
};

ExpenseInvoiceDownloadHelper.propTypes = {
  /** Link content */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired),

  /** Expense */
  expense: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
    legacyId: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number.isRequired)
  }).isRequired,

  /** Collective where the expense was posted */
  collective: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired)
  }),

  /** Called with an error if anything wrong happens */
  onError: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
/* harmony default export */ __webpack_exports__["ZP"] = (ExpenseInvoiceDownloadHelper);

/***/ }),

/***/ 66300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ getExpenseStatusMsgType; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38083);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8480);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88705);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);


var _excluded = ["children"],
    _excluded2 = ["status", "showTaxFormTag", "showTaxFormMsg"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











var getExpenseStatusMsgType = function getExpenseStatusMsgType(status) {
  switch (status) {
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].REJECTED */ .Z.REJECTED:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].SPAM */ .Z.SPAM:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ERROR */ .Z.ERROR:
      return 'error';

    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].PENDING */ .Z.PENDING:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED:
      return 'warning';

    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].SCHEDULED_FOR_PAYMENT */ .Z.SCHEDULED_FOR_PAYMENT:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].APPROVED */ .Z.APPROVED:
      return 'info';

    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].PAID */ .Z.PAID:
    case 'COMPLETED':
      return 'success';
  }
};

var ExtendedTag = function ExtendedTag(_ref) {
  var children = _ref.children,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    background: "white",
    border: "1px solid",
    borderColor: "yellow.400",
    color: "black.700",
    borderRadius: "0px 4px 4px 0px",
    ml: "-3px",
    lineHeight: "100%",
    children: children
  }));
};

/**
 * Displays an i18n version of the expense status in a `StyledTag`.
 * The color change in function of the status.
 *
 * Accepts all the props exposed by `StyledTag`.
 */
var ExpenseStatusTag = function ExpenseStatusTag(_ref2) {
  var status = _ref2.status,
      showTaxFormTag = _ref2.showTaxFormTag,
      showTaxFormMsg = _ref2.showTaxFormMsg,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, _excluded2);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();

  var tagProps = _objectSpread({
    fontWeight: '600',
    fontSize: '10px',
    letterSpacing: '0.8px',
    textTransform: 'uppercase'
  }, props);

  var tag = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({
    type: getExpenseStatusMsgType(status),
    "data-cy": "expense-status-msg"
  }, tagProps), props), {}, {
    children: (0,_lib_i18n_expense__WEBPACK_IMPORTED_MODULE_4__/* .i18nExpenseStatus */ .zr)(intl, status)
  }));

  if (status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      alignItems: "center",
      children: [tag, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ExtendedTag, _objectSpread(_objectSpread({}, tagProps), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          id: "Unverified",
          defaultMessage: [{
            "type": 0,
            "value": "Unverified"
          }]
        })
      }))]
    });
  } else if (!showTaxFormTag) {
    return tag;
  } else if (!showTaxFormMsg) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      alignItems: "center",
      children: [tag, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ExtendedTag, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          id: "TaxForm",
          defaultMessage: [{
            "type": 0,
            "value": "Tax form"
          }]
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      alignItems: "center",
      children: [tag, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        content: function content() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            id: "expenseNeedsTaxForm.hover",
            defaultMessage: [{
              "type": 0,
              "value": "We can't pay until we receive your tax info. Check your inbox for an email from HelloWorks. Need help? Contact "
            }, {
              "type": 8,
              "value": "SupportLink",
              "children": [{
                "type": 0,
                "value": "support"
              }]
            }],
            values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ExtendedTag, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            id: "TaxForm",
            defaultMessage: [{
              "type": 0,
              "value": "Tax form"
            }]
          })
        })
      })]
    });
  }
};

ExpenseStatusTag.__docgenInfo = {
  "description": "Displays an i18n version of the expense status in a `StyledTag`.\nThe color change in function of the status.\n\nAccepts all the props exposed by `StyledTag`.",
  "methods": [],
  "displayName": "ExpenseStatusTag",
  "props": {
    "status": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(expenseStatus)"
      },
      "required": false
    },
    "showTaxFormMsg": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showTaxFormTag": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ExpenseStatusTag);

/***/ }),

/***/ 88243:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19878);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8480);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29242);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);


var _excluded = ["type", "legacyId", "isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var ExpenseTypeTag = function ExpenseTypeTag(_ref) {
  var type = _ref.type,
      legacyId = _ref.legacyId,
      isLoading = _ref.isLoading,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  return isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    height: 24,
    width: 73,
    borderRadius: "12px 2px 2px 12px"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StyledTag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    variant: "rounded-left",
    type: "grey",
    mb: "4px",
    mr: "10px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "600"
  }, props), {}, {
    children: (0,_lib_i18n_expense__WEBPACK_IMPORTED_MODULE_4__/* .i18nExpenseType */ .kD)(intl, type, legacyId)
  }));
};

ExpenseTypeTag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseTypeTag",
  "props": {
    "type": {
      "description": "",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(expenseTypes)"
      },
      "required": true
    },
    "legacyId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ExpenseTypeTag);

/***/ }),

/***/ 1868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ validateTaxVAT; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59854);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41429);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86896);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40986);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var validateTaxVAT = function validateTaxVAT(intl, tax) {
  var errors = {};

  if (tax.type !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__.TaxType.VAT) {
    return errors;
  }

  if (isNaN(tax.rate) || lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(tax.rate)) {
    errors.rate = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  } else {
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_6__/* .verifyValueInRange */ .VA)(intl, errors, tax, 'rate', 0, 1);
  } // ID number is required if there's a tax rate


  if (tax.rate) {
    if (!tax.idNumber) {
      errors.idNumber = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
    } else if (!(0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__.checkVATNumberFormat)(tax.idNumber).isValid) {
      errors.idNumber = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
    }
  }

  return errors;
};

var ExpenseVATFormikFields = function ExpenseVATFormikFields(_ref) {
  var _formik$values$taxes2, _formik$values$taxes3;

  var formik = _ref.formik,
      isOptional = _ref.isOptional;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(); // If mounted, it means that the form is subject to VAT. Let's make sure we initialize taxes field accordingly

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    var _formik$values$taxes, _formik$values$taxes$;

    if (!((_formik$values$taxes = formik.values.taxes) !== null && _formik$values$taxes !== void 0 && (_formik$values$taxes$ = _formik$values$taxes[0]) !== null && _formik$values$taxes$ !== void 0 && _formik$values$taxes$.type) !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__.TaxType.VAT) {
      formik.setFieldValue('taxes.0.type', _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__.TaxType.VAT);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .rj, {
    gridTemplateColumns: "120px minmax(120px, 1fr)",
    gridGap: 2,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      name: "taxes.0.rate",
      htmlFor: "vat-rate",
      label: intl.formatMessage({
        id: "iuXArs",
        defaultMessage: [{
          "type": 0,
          "value": "VAT rate"
        }]
      }),
      inputType: "number",
      required: !isOptional,
      children: function children(_ref2) {
        var field = _ref2.field;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
          value: lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(field.value * 100, 2),
          onChange: function onChange(e) {
            return formik.setFieldValue(e.target.name, lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(e.target.value / 100, 4));
          },
          append: "%",
          min: 0,
          max: 100,
          step: "0.01"
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      name: "taxes.0.idNumber",
      htmlFor: "vat-number",
      label: intl.formatMessage({
        id: "1gjV2o",
        defaultMessage: [{
          "type": 0,
          "value": "VAT identifier"
        }]
      }),
      required: !isOptional && Boolean((_formik$values$taxes2 = formik.values.taxes) === null || _formik$values$taxes2 === void 0 ? void 0 : (_formik$values$taxes3 = _formik$values$taxes2[0]) === null || _formik$values$taxes3 === void 0 ? void 0 : _formik$values$taxes3.rate),
      mr: 2,
      children: function children(_ref3) {
        var field = _ref3.field;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
          placeholder: intl.formatMessage({
            id: "examples",
            defaultMessage: [{
              "type": 0,
              "value": "e.g., "
            }, {
              "type": 1,
              "value": "examples"
            }]
          }, {
            examples: 'EU000011111'
          })
        }));
      }
    })]
  });
};

ExpenseVATFormikFields.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseVATFormikFields",
  "props": {
    "formik": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isOptional": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (ExpenseVATFormikFields);

/***/ }),

/***/ 77959:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46829);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(86896);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44012);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87262);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31330);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17738);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85893);





var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__.defineMessages)({
  reasonPlaceholder: {
    id: "g0KLMH",
    defaultMessage: [{
      "type": 0,
      "value": "e.g. Email Address is wrong"
    }]
  }
});
var processExpenseMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default()(["\n  mutation ProcessExpense($id: String, $legacyId: Int, $action: ExpenseProcessAction!, $message: String) {\n    processExpense(expense: { id: $id, legacyId: $legacyId }, action: $action, message: $message) {\n      id\n      ...ExpensePageExpenseFields\n    }\n  }\n\n  ", "\n"])), _graphql_fragments__WEBPACK_IMPORTED_MODULE_15__/* .expensePageExpenseFieldsFragment */ .Wg);

var MarkExpenseAsIncompleteModal = function MarkExpenseAsIncompleteModal(_ref) {
  var expense = _ref.expense,
      onClose = _ref.onClose;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),
      message = _React$useState2[0],
      setMessage = _React$useState2[1];

  var mutationOptions = {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  };

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_20__.useMutation)(processExpenseMutation, mutationOptions),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useMutation, 2),
      processExpense = _useMutation2[0],
      loading = _useMutation2[1].loading;

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var onConfirm = /*#__PURE__*/function () {
    var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var variables;
      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              variables = {
                id: expense.id,
                legacyId: expense.legacyId,
                action: 'MARK_AS_INCOMPLETE',
                message: message
              };
              _context.next = 4;
              return processExpense({
                variables: variables
              });

            case 4:
              onClose();
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              // Display a toast with light variant since we're in a modal
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                variant: 'light',
                message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .i18nGraphqlException */ .t2)(intl, _context.t0)
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function onConfirm() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
    role: "alertdialog",
    width: "432px",
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalHeader */ .xB, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        id: "hu7oaH",
        defaultMessage: [{
          "type": 0,
          "value": "Mark as incomplete"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalBody */ .fe, {
      pt: 2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
        color: "black.700",
        lineHeight: "20px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          id: "x7D8vH",
          defaultMessage: [{
            "type": 0,
            "value": "Please mention the reason why this expense has been marked as incomplete. The reason will be shared with the user and also be documented as a comment under the expense."
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledInputField__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          name: "reason",
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            id: "4Wz/x6",
            defaultMessage: [{
              "type": 0,
              "value": "Please specify the reason"
            }]
          }),
          labelFontSize: "13px",
          labelFontWeight: 600,
          labelColor: "black.700",
          required: true,
          mt: 3,
          children: function children(inputProps) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledTextarea__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              minHeight: 100,
              placeholder: intl.formatMessage(messages.reasonPlaceholder),
              onChange: function onChange(e) {
                return setMessage(e.target.value);
              }
            }));
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_11__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        gap: "16px",
        justifyContent: "flex-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          buttonStyle: "secondary",
          buttonSize: "small",
          onClick: onConfirm,
          minWidth: 180,
          loading: loading,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            id: "lNyyJU",
            defaultMessage: [{
              "type": 0,
              "value": "Confirm and mark as incomplete"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          buttonStyle: "standard",
          buttonSize: "small",
          onClick: onClose,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        })]
      })
    })]
  });
};

MarkExpenseAsIncompleteModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MarkExpenseAsIncompleteModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "legacyId": {
            "name": "number",
            "required": true
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (MarkExpenseAsIncompleteModal);

/***/ }),

/***/ 27824:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export payoutMethodHasData */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14035);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18029);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56508);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40777);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);















var renderObject = function renderObject(object) {
  return Object.entries(object).reduce(function (acc, _ref) {
    var _ref2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (typeof value === 'object') {
      return [].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(acc), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(renderObject(value)));
    }

    return [].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(acc), [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
      fontSize: "11px",
      lineHeight: "18px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        id: "withColon",
        defaultMessage: [{
          "type": 1,
          "value": "item"
        }, {
          "type": 0,
          "value": ":"
        }],
        values: {
          item: lodash_startCase__WEBPACK_IMPORTED_MODULE_3___default()(key)
        }
      }), " ", value]
    }, key)]);
  }, []);
};
/**
 * @returns boolean: True if the payout method has displayable data
 */


var payoutMethodHasData = function payoutMethodHasData(payoutMethod) {
  switch (payoutMethod === null || payoutMethod === void 0 ? void 0 : payoutMethod.type) {
    case PayoutMethodType.PAYPAL:
      return Boolean(_get(payoutMethod, 'data.email'));

    case PayoutMethodType.OTHER:
      return Boolean(_get(payoutMethod, 'data.content'));

    case PayoutMethodType.BANK_ACCOUNT:
      return Boolean(_get(payoutMethod, 'data.details'));

    default:
      return false;
  }
};
var PRIVATE_DATA_PLACEHOLDER = '********';

var getPmData = function getPmData(payoutMethod, field, isLoading) {
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      height: 15
    });
  } else {
    return lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(payoutMethod, "data.".concat(field), PRIVATE_DATA_PLACEHOLDER);
  }
};
/**
 * Shows the data of the given payout method
 */


var PayoutMethodData = function PayoutMethodData(_ref3) {
  var payoutMethod = _ref3.payoutMethod,
      showLabel = _ref3.showLabel,
      isLoading = _ref3.isLoading;

  if (isLoading && !payoutMethod) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      height: 24,
      mb: 2
    });
  } else if (!payoutMethod) {
    return null;
  }

  switch (payoutMethod.type) {
    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          fontSize: "11px",
          fontWeight: "500",
          mb: 2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            id: "User.EmailAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Email address"
            }]
          }), "\xA0\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            color: "#969BA3"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          fontSize: "11px",
          color: "black.700",
          children: getPmData(payoutMethod, 'email', isLoading)
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.OTHER */ .Nk.OTHER:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          fontSize: "11px",
          fontWeight: "500",
          mb: 2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            id: "Details",
            defaultMessage: [{
              "type": 0,
              "value": "Details"
            }]
          }), "\xA0\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            color: "#969BA3"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          fontSize: "11px",
          color: "black.700",
          children: getPmData(payoutMethod, 'content', isLoading)
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          fontSize: "11px",
          fontWeight: "500",
          mb: 2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            id: "Details",
            defaultMessage: [{
              "type": 0,
              "value": "Details"
            }]
          }), "\xA0\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            color: "#969BA3"
          })]
        }), payoutMethod.data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          fontSize: "11px",
          color: "black.700",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            id: "BankInfo.Type",
            defaultMessage: [{
              "type": 0,
              "value": "Type: "
            }, {
              "type": 1,
              "value": "type"
            }],
            values: {
              type: lodash_upperCase__WEBPACK_IMPORTED_MODULE_2___default()(payoutMethod.data.type)
            }
          }), payoutMethod.data.accountHolderName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              id: "BankInfo.AccountHolder",
              defaultMessage: [{
                "type": 0,
                "value": "Account Holder: "
              }, {
                "type": 1,
                "value": "name"
              }],
              values: {
                name: payoutMethod.data.accountHolderName
              }
            })]
          }), payoutMethod.data.details && renderObject(payoutMethod.data.details)]
        }) : isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          height: "1.5em"
        }) : PRIVATE_DATA_PLACEHOLDER]
      });

    default:
      return null;
  }
};

PayoutMethodData.defaultProps = {
  showLabel: true
}; // @component

PayoutMethodData.__docgenInfo = {
  "description": "Shows the data of the given payout method",
  "methods": [],
  "displayName": "PayoutMethodData",
  "props": {
    "showLabel": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "If false, only the raw data will be displayed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "payoutMethod": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(PayoutMethodType)",
            "required": false
          },
          "data": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (PayoutMethodData);

/***/ }),

/***/ 9215:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17681);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34243);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79922);
/* harmony import */ var _styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60253);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44012);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56508);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11194);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);











/**
 * Shows the data of the given payout method
 */




var PayoutMethodTypeWithIcon = function PayoutMethodTypeWithIcon(_ref) {
  var isLoading = _ref.isLoading,
      type = _ref.type,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      color = _ref.color,
      iconSize = _ref.iconSize,
      name = _ref.name;

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      height: 15,
      width: 90
    });
  }

  switch (type) {
    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_7__/* .Paypal */ .z, {
          size: iconSize,
          color: "#192f86"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: "PayPal"
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_8__/* .University */ .R, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            id: "BankAccount",
            defaultMessage: [{
              "type": 0,
              "value": "Bank account"
            }]
          })
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_10__/* .ExchangeAlt */ .w, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: "Open Collective"
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .INVITE */ .FZ:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
          name: "?",
          size: iconSize,
          backgroundColor: "blue.100",
          color: "blue.400",
          fontWeight: "500"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            id: "PayoutMethod.Type.ToBeDefined",
            defaultMessage: [{
              "type": 0,
              "value": "Not yet set"
            }]
          })
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .VIRTUAL_CARD */ .vi:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_11__/* .CreditCard */ .a, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: name || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            id: "PayoutMethod.Type.VirtualCard",
            defaultMessage: [{
              "type": 0,
              "value": "Virtual Card"
            }]
          })
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.OTHER */ .Nk.OTHER:
    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_10__/* .ExchangeAlt */ .w, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            id: "PayoutMethod.Type.Other",
            defaultMessage: [{
              "type": 0,
              "value": "Other"
            }]
          })
        })]
      });
  }
};

PayoutMethodTypeWithIcon.defaultProps = {
  fontSize: '13px',
  fontWeight: 'bold',
  color: 'black.900',
  iconSize: 24
}; // @component

PayoutMethodTypeWithIcon.__docgenInfo = {
  "description": "Shows the data of the given payout method",
  "methods": [],
  "displayName": "PayoutMethodTypeWithIcon",
  "props": {
    "fontSize": {
      "defaultValue": {
        "value": "'13px'",
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
    "fontWeight": {
      "defaultValue": {
        "value": "'bold'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'black.900'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "iconSize": {
      "defaultValue": {
        "value": "24",
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
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "...Object.values(PayoutMethodType)",
          "computed": true
        }, {
          "value": "import { INVITE, PayoutMethodType, VIRTUAL_CARD } from '../../lib/constants/payout-method';",
          "computed": true
        }]
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (PayoutMethodTypeWithIcon);

/***/ }),

/***/ 17931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aN": function() { return /* binding */ ButtonLabel; },
  "oU": function() { return /* binding */ DEFAULT_PROCESS_EXPENSE_BTN_PROPS; },
  "ZP": function() { return /* binding */ expenses_ProcessExpenseButtons; },
  "HF": function() { return /* binding */ hasProcessButtons; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js
var InfoCircle_esm = __webpack_require__(95612);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Ban/Ban.esm.js
var Ban_esm = __webpack_require__(80654);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Check/Check.esm.js
var Check_esm = __webpack_require__(46336);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/Times/Times.esm.js
var Times_esm = __webpack_require__(74684);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
;// CONCATENATED MODULE: ./lib/constants/permissions.js


var REASON_CODES = {
  UNSUPPORTED_STATUS: 'UNSUPPORTED_STATUS',
  UNSUPPORTED_USER_FEATURE: 'UNSUPPORTED_USER_FEATURE',
  MINIMAL_CONDITION_NOT_MET: 'MINIMAL_CONDITION_NOT_MET',
  AUTHOR_CANNOT_APPROVE: 'AUTHOR_CANNOT_APPROVE'
};
var ReasonMessage = (0,react_intl_lib.defineMessages)(defineProperty_default()({}, REASON_CODES.AUTHOR_CANNOT_APPROVE, {
  id: "ExpensePermissionReason.AUTHOR_CANNOT_APPROVE",
  defaultMessage: [{
    "type": 0,
    "value": "You cannot approve expenses you have submitted"
  }, {
    "type": 5,
    "value": "amount",
    "options": {
      "0": {
        "value": [{
          "type": 0,
          "value": "."
        }]
      },
      "other": {
        "value": [{
          "type": 0,
          "value": " when the expense is above "
        }, {
          "type": 1,
          "value": "amount"
        }, {
          "type": 0,
          "value": " "
        }, {
          "type": 1,
          "value": "currency"
        }, {
          "type": 0,
          "value": "."
        }]
      }
    }
  }]
}));
/* harmony default export */ var constants_permissions = (REASON_CODES);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var lib_errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/expenses/graphql/fragments.ts
var fragments = __webpack_require__(17738);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/components/Mutation.js
var Mutation = __webpack_require__(32493);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Trash2/Trash2.esm.js
var Trash2_esm = __webpack_require__(16442);
// EXTERNAL MODULE: ./components/ConfirmationModal.js
var ConfirmationModal = __webpack_require__(47988);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/expenses/DeleteExpenseButton.js





var _templateObject;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var deleteExpenseMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation DeleteExpense($id: String!) {\n    deleteExpense(expense: { id: $id }) {\n      id\n    }\n  }\n"])));

var removeExpenseFromCache = function removeExpenseFromCache(cache, _ref) {
  var deleteExpense = _ref.data.deleteExpense;
  cache.modify({
    fields: {
      expenses: function expenses(existingExpenses, _ref2) {
        var readField = _ref2.readField;

        if (!(existingExpenses !== null && existingExpenses !== void 0 && existingExpenses.nodes)) {
          return existingExpenses;
        } else {
          return _objectSpread(_objectSpread({}, existingExpenses), {}, {
            totalCount: existingExpenses.totalCount - 1,
            nodes: existingExpenses.nodes.filter(function (expense) {
              return deleteExpense.id !== readField('id', expense);
            })
          });
        }
      }
    }
  });
};

var DeleteExpenseButton = function DeleteExpenseButton(_ref3) {
  var expense = _ref3.expense,
      onDelete = _ref3.onDelete,
      buttonProps = _ref3.buttonProps,
      isDisabled = _ref3.isDisabled,
      onModalToggle = _ref3.onModalToggle;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      hasDeleteConfirm = _React$useState2[0],
      setDeleteConfirm = _React$useState2[1];

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,useIntl/* default */.Z)();

  var showDeleteConfirm = function showDeleteConfirm(isOpen) {
    setDeleteConfirm(isOpen);
    onModalToggle === null || onModalToggle === void 0 ? void 0 : onModalToggle(isOpen);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, _objectSpread(_objectSpread({
      buttonStyle: "dangerSecondary",
      "data-cy": "delete-expense-button",
      disabled: isDisabled
    }, buttonProps), {}, {
      onClick: function onClick() {
        return showDeleteConfirm(true);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Trash2_esm/* Trash2 */.V, {
        size: "1em"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        ml: "6px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "actions.delete",
          defaultMessage: [{
            "type": 0,
            "value": "Delete"
          }]
        })
      })]
    })), hasDeleteConfirm && /*#__PURE__*/(0,jsx_runtime.jsx)(Mutation/* Mutation */.m, {
      mutation: deleteExpenseMutation,
      context: helpers/* API_V2_CONTEXT */.T,
      update: removeExpenseFromCache,
      children: function children(deleteExpense) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.Z, {
          isDanger: true,
          type: "delete",
          onClose: function onClose() {
            return showDeleteConfirm(false);
          },
          header: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "actions.delete",
            defaultMessage: [{
              "type": 0,
              "value": "Delete"
            }]
          }),
          continueHandler: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
            return regenerator_default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return deleteExpense({
                      variables: {
                        id: expense.id
                      }
                    });

                  case 3:
                    _context.next = 8;
                    break;

                  case 5:
                    _context.prev = 5;
                    _context.t0 = _context["catch"](0);
                    addToast({
                      type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                      message: (0,lib_errors/* i18nGraphqlException */.t2)(intl, _context.t0)
                    });

                  case 8:
                    if (!onDelete) {
                      _context.next = 11;
                      break;
                    }

                    _context.next = 11;
                    return onDelete(expense);

                  case 11:
                    showDeleteConfirm(false);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 5]]);
          })),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "Expense.DeleteDetails",
            defaultMessage: [{
              "type": 0,
              "value": "This will permanently delete the expense and all attachments and comments."
            }]
          })
        });
      }
    })]
  });
};

DeleteExpenseButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DeleteExpenseButton",
  "props": {
    "isDisabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "legacyId": {
            "name": "number",
            "required": true
          }
        }
      },
      "required": false
    },
    "onDelete": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "buttonProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onModalToggle": {
      "description": "Called when a modal is opened/closed with a boolean like (isOpen)",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_DeleteExpenseButton = (DeleteExpenseButton);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
;// CONCATENATED MODULE: ./components/expenses/MarkExpenseAsUnpaidButton.js




var _excluded = ["onConfirm"];


function MarkExpenseAsUnpaidButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MarkExpenseAsUnpaidButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MarkExpenseAsUnpaidButton_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MarkExpenseAsUnpaidButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var MarkExpenseAsUnpaidButton = function MarkExpenseAsUnpaidButton(_ref) {
  var onConfirm = _ref.onConfirm,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      hasModal = _React$useState2[0],
      setHasModal = _React$useState2[1];

  var _React$useState3 = react.useState(true),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      refundPaymentProcessorFee = _React$useState4[0],
      setRefundPaymentProcessorFee = _React$useState4[1];

  var button = /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, MarkExpenseAsUnpaidButton_objectSpread(MarkExpenseAsUnpaidButton_objectSpread({}, props), {}, {
    buttonStyle: "dangerSecondary",
    onClick: function onClick() {
      return setHasModal(true);
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
      id: "expense.markAsUnpaid.btn",
      defaultMessage: [{
        "type": 0,
        "value": "Mark as unpaid"
      }]
    })
  }));

  if (!hasModal) {
    return button;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [button, /*#__PURE__*/(0,jsx_runtime.jsxs)(ConfirmationModal/* default */.Z, {
      id: "mark-expense-as-unpaid-modal",
      header: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "Expense.markAsUnpaid",
        defaultMessage: [{
          "type": 0,
          "value": "Mark expense as unpaid"
        }]
      }),
      width: "100%",
      minWidth: 280,
      maxWidth: 450,
      isDanger: true,
      onClose: function onClose() {
        return setHasModal(false);
      },
      "data-cy": "mark-expense-as-unpaid-modal",
      continueHandler: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return onConfirm(refundPaymentProcessorFee);

              case 3:
                _context.next = 9;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                setHasModal(false);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      })),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        mb: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "Expense.markAsUnpaid.details",
          defaultMessage: [{
            "type": 0,
            "value": "The amount will be credited back to the Collective balance."
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
        name: "processorFeeRefunded",
        checked: refundPaymentProcessorFee,
        onChange: function onChange(_ref3) {
          var checked = _ref3.checked;
          return setRefundPaymentProcessorFee(checked);
        },
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "processorFeeRefunded.checkbox.label",
          defaultMessage: [{
            "type": 0,
            "value": "Also refund payment processor fees?"
          }]
        })
      })]
    })]
  });
};

MarkExpenseAsUnpaidButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MarkExpenseAsUnpaidButton",
  "props": {
    "onConfirm": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ var expenses_MarkExpenseAsUnpaidButton = (MarkExpenseAsUnpaidButton);
// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(64721);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-brands/Paypal/Paypal.esm.js
var Paypal_esm = __webpack_require__(17681);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/University/University.esm.js
var University_esm = __webpack_require__(60253);
// EXTERNAL MODULE: ./lib/constants/payout-method.js
var payout_method = __webpack_require__(56508);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./components/icons/TransferwiseIcon.js
var TransferwiseIcon = __webpack_require__(12173);
// EXTERNAL MODULE: ./node_modules/lodash/round.js
var round = __webpack_require__(59854);
var round_default = /*#__PURE__*/__webpack_require__.n(round);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Check/Check.esm.js
var Check_Check_esm = __webpack_require__(84046);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(82580);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
// EXTERNAL MODULE: ./lib/allowed-features.js
var allowed_features = __webpack_require__(99708);
// EXTERNAL MODULE: ./lib/i18n/payout-method-type.js
var payout_method_type = __webpack_require__(17133);
// EXTERNAL MODULE: ./lib/i18n/taxes.js
var taxes = __webpack_require__(22642);
// EXTERNAL MODULE: ./lib/prop-types.js
var prop_types = __webpack_require__(51048);
// EXTERNAL MODULE: ./components/expenses/lib/utils.js
var utils = __webpack_require__(51561);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledButtonSet.js
var StyledButtonSet = __webpack_require__(16738);
// EXTERNAL MODULE: ./components/StyledInputAmount.js
var StyledInputAmount = __webpack_require__(54029);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledModal.tsx
var StyledModal = __webpack_require__(71792);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
// EXTERNAL MODULE: ./components/expenses/PayoutMethodData.js
var PayoutMethodData = __webpack_require__(27824);
// EXTERNAL MODULE: ./components/expenses/PayoutMethodTypeWithIcon.js
var PayoutMethodTypeWithIcon = __webpack_require__(9215);
;// CONCATENATED MODULE: ./components/expenses/PayExpenseModal.js







var PayExpenseModal_templateObject;

function PayExpenseModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PayExpenseModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PayExpenseModal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PayExpenseModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


































var quoteExpenseQuery = (0,lib/* default */.ZP)(PayExpenseModal_templateObject || (PayExpenseModal_templateObject = taggedTemplateLiteral_default()(["\n  query QuoteExpenseQuery($id: String!) {\n    expense(expense: { id: $id }) {\n      id\n      currency\n      amountInHostCurrency: amountV2(currencySource: HOST) {\n        exchangeRate {\n          value\n        }\n      }\n      quote {\n        paymentProcessorFeeAmount {\n          valueInCents\n          currency\n        }\n        sourceAmount {\n          valueInCents\n          currency\n        }\n        estimatedDeliveryAt\n      }\n    }\n  }\n"])));

var getPayoutLabel = function getPayoutLabel(intl, type) {
  return (0,payout_method_type/* default */.Z)(intl, type, {
    aliasBankAccountToTransferWise: true
  });
};

var getPayoutOptionValue = function getPayoutOptionValue(payoutMethodType, isAuto, host) {
  if (payoutMethodType === payout_method/* PayoutMethodType.OTHER */.Nk.OTHER) {
    return {
      forceManual: true,
      action: 'PAY'
    };
  } else if (payoutMethodType === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT && !host.transferwise) {
    return {
      forceManual: true,
      action: 'PAY'
    };
  } else if (!isAuto) {
    return {
      forceManual: true,
      action: 'PAY'
    };
  } else {
    var _host$supportedPayout, _host$supportedPayout2;

    var isPaypalPayouts = host.features[allowed_features/* FEATURES.PAYPAL_PAYOUTS */.h6.PAYPAL_PAYOUTS] === 'ACTIVE' && payoutMethodType === payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL && ((_host$supportedPayout = host.supportedPayoutMethods) === null || _host$supportedPayout === void 0 ? void 0 : _host$supportedPayout.includes(payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL));
    var isWiseOTT = payoutMethodType === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT && ((_host$supportedPayout2 = host.supportedPayoutMethods) === null || _host$supportedPayout2 === void 0 ? void 0 : _host$supportedPayout2.includes(payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT)) && (0,allowed_features/* default */.ZP)(host, allowed_features/* FEATURES.TRANSFERWISE_OTT */.h6.TRANSFERWISE_OTT);
    return {
      forceManual: false,
      action: isPaypalPayouts || isWiseOTT ? 'SCHEDULE_FOR_PAYMENT' : 'PAY'
    };
  }
};

var DEFAULT_VALUES = Object.freeze({
  paymentProcessorFeeInHostCurrency: null,
  totalAmountPaidInHostCurrency: null,
  feesPayer: 'COLLECTIVE'
});

var validate = function validate(values) {
  var errors = {};

  if (isNaN(values.paymentProcessorFeeInHostCurrency)) {
    errors.paymentProcessorFeeInHostCurrency = (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_PATTERN */.pn.FORM_FIELD_PATTERN);
  }

  if (isNaN(values.totalAmountPaidInHostCurrency)) {
    errors.totalAmountPaidInHostCurrency = (0,lib_errors/* createError */.Tr)(lib_errors/* ERROR.FORM_FIELD_PATTERN */.pn.FORM_FIELD_PATTERN);
  }

  return errors;
};

var getCanCustomizeFeesPayer = function getCanCustomizeFeesPayer(expense, collective, isManualPayment, feeAmount, isRoot) {
  var _expense$payoutMethod;

  var supportedPayoutMethods = [payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT, payout_method/* PayoutMethodType.OTHER */.Nk.OTHER];
  var isSupportedPayoutMethod = supportedPayoutMethods.includes((_expense$payoutMethod = expense.payoutMethod) === null || _expense$payoutMethod === void 0 ? void 0 : _expense$payoutMethod.type);

  var isFullBalance = expense.amount === get_default()(collective, 'stats.balanceWithBlockedFunds.valueInCents');

  var isSameCurrency = expense.currency === (collective === null || collective === void 0 ? void 0 : collective.currency); // Current limitations:
  // - Only for transferwise and manual payouts
  // - Only when emptying the account balance (unless root user)
  // - Only with expenses submitted in the same currency as the collective

  if (!(isSupportedPayoutMethod && isSameCurrency && (isFullBalance || isRoot))) {
    return false;
  } // We should only show the checkbox if there may actually be fees on the payout:
  // - When the payment is manual, we only show the checkbox if a fee is set by the user
  // - If it's an automatic payment then we can't predict the fees, so in doubt we show the checkbox


  return !isManualPayment || Boolean(feeAmount);
};

var AmountLine = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "PayExpenseModal__AmountLine",
  componentId: "sc-13chir8-0"
})(["display:flex;justify-content:space-between;font-weight:400;padding:9px 0;font-weight:400;line-height:18px;letter-spacing:0em;", " ", ""], index_esm/* border */.Cg, index_esm/* space */.Dh);
var Label = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "PayExpenseModal__Label",
  componentId: "sc-13chir8-1"
})(["margin-right:4px;flex:0 1 70%;margin-right:8px;line-height:18px;word-break:break-word;color:#4e5052;", " ", " font-size:12px;"], index_esm/* color */.$_, index_esm/* typography */.cp);
var Amount = styled_components_browser_esm/* default.span.withConfig */.ZP.span.withConfig({
  displayName: "PayExpenseModal__Amount",
  componentId: "sc-13chir8-2"
})(["flex:1 1 30%;text-align:right;font-size:14px;white-space:nowrap;display:flex;flex-direction:row-reverse;& > *{margin-left:4px;}"]);
var SectionLabel = styled_components_browser_esm/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "PayExpenseModal__SectionLabel",
  componentId: "sc-13chir8-3"
})(["font-size:9px;font-weight:500;color:#4e5052;margin:5px 0;text-transform:uppercase;"]);

var getInitialValues = function getInitialValues(expense, host, payoutMethodType) {
  return PayExpenseModal_objectSpread(PayExpenseModal_objectSpread(PayExpenseModal_objectSpread({}, DEFAULT_VALUES), getPayoutOptionValue(payoutMethodType, true, host)), {}, {
    feesPayer: expense.feesPayer || DEFAULT_VALUES.feesPayer
  });
};

var calculateAmounts = function calculateAmounts(_ref) {
  var formik = _ref.formik,
      expense = _ref.expense,
      quote = _ref.quote,
      host = _ref.host,
      feesPayer = _ref.feesPayer;

  if (formik.values.forceManual) {
    var totalAmount = {
      valueInCents: formik.values.totalAmountPaidInHostCurrency,
      currency: host.currency
    };
    var paymentProcessorFee = {
      valueInCents: formik.values.paymentProcessorFeeInHostCurrency,
      currency: host.currency
    };
    var effectiveRate = expense.currency !== host.currency && totalAmount.valueInCents / expense.amount;
    return {
      paymentProcessorFee: paymentProcessorFee,
      totalAmount: totalAmount,
      effectiveRate: effectiveRate
    };
  } else if (quote) {
    var _effectiveRate = expense.currency !== host.currency && quote.sourceAmount.valueInCents / expense.amount;

    var _totalAmount = cloneDeep_default()(quote.sourceAmount);

    if (feesPayer === 'PAYEE') {
      _totalAmount.valueInCents -= quote.paymentProcessorFeeAmount.valueInCents;
    }

    return {
      paymentProcessorFee: quote.paymentProcessorFeeAmount,
      totalAmount: _totalAmount,
      effectiveRate: _effectiveRate
    };
  } else {
    return {};
  }
};
/**
 * Modal displayed by `PayExpenseButton` to trigger the actual payment of an expense
 */


var PayExpenseModal = function PayExpenseModal(_ref2) {
  var _expense$payoutMethod2, _quoteQuery$data, _quoteQuery$data$expe, _expense$taxes, _amounts$paymentProce, _amounts$paymentProce2, _amounts$totalAmount, _amounts$totalAmount2;

  var onClose = _ref2.onClose,
      onSubmit = _ref2.onSubmit,
      expense = _ref2.expense,
      collective = _ref2.collective,
      host = _ref2.host,
      error = _ref2.error,
      LoggedInUser = _ref2.LoggedInUser;
  var intl = (0,useIntl/* default */.Z)();
  var payoutMethodType = ((_expense$payoutMethod2 = expense.payoutMethod) === null || _expense$payoutMethod2 === void 0 ? void 0 : _expense$payoutMethod2.type) || payout_method/* PayoutMethodType.OTHER */.Nk.OTHER;
  var initialValues = getInitialValues(expense, host, payoutMethodType);
  var formik = (0,formik_esm/* useFormik */.TA)({
    initialValues: initialValues,
    validate: validate,
    onSubmit: onSubmit
  });
  var hasManualPayment = payoutMethodType === payout_method/* PayoutMethodType.OTHER */.Nk.OTHER || formik.values.forceManual;
  var payoutMethodLabel = getPayoutLabel(intl, payoutMethodType);
  var hasBankInfoWithoutWise = payoutMethodType === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT && host.transferwise === null;
  var isScheduling = formik.values.action === 'SCHEDULE_FOR_PAYMENT';
  var hasAutomaticManualPicker = ![payout_method/* PayoutMethodType.OTHER */.Nk.OTHER, payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE].includes(payoutMethodType);
  var canQuote = host.transferwise && payoutMethodType === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT;
  var quoteQuery = (0,client.useQuery)(quoteExpenseQuery, {
    variables: {
      id: expense.id
    },
    context: helpers/* API_V2_CONTEXT */.T,
    skip: !canQuote
  });
  var amountWithoutTaxes = (0,utils/* getAmountWithoutTaxes */.ol)(expense.amount, expense.taxes);
  var amounts = calculateAmounts({
    formik: formik,
    expense: expense,
    quote: quoteQuery === null || quoteQuery === void 0 ? void 0 : (_quoteQuery$data = quoteQuery.data) === null || _quoteQuery$data === void 0 ? void 0 : (_quoteQuery$data$expe = _quoteQuery$data.expense) === null || _quoteQuery$data$expe === void 0 ? void 0 : _quoteQuery$data$expe.quote,
    collective: collective,
    host: host,
    feesPayer: formik.values.feesPayer
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, {
    onClose: onClose,
    width: "100%",
    minWidth: 280,
    maxWidth: 334,
    "data-cy": "pay-expense-modal",
    trapFocus: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
        fontSize: "20px",
        fontWeight: "700",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "PayExpenseTitle",
          defaultMessage: [{
            "type": 0,
            "value": "Pay expense"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
      as: "form",
      mb: 0,
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "ExpenseForm.PayoutOptionLabel",
          defaultMessage: [{
            "type": 0,
            "value": "Payout method"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mb: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PayoutMethodTypeWithIcon/* default */.Z, {
          type: payoutMethodType
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PayoutMethodData/* default */.Z, {
        payoutMethod: expense.payoutMethod,
        showLabel: false
      }), hasAutomaticManualPicker && !hasBankInfoWithoutWise && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButtonSet/* default */.Z, {
        items: ['AUTO', 'MANUAL'],
        buttonProps: {
          width: '50%'
        },
        buttonPropsBuilder: function buttonPropsBuilder(_ref3) {
          var item = _ref3.item;
          return {
            'data-cy': "pay-type-".concat(item)
          };
        },
        mt: 3,
        selected: formik.values.forceManual ? 'MANUAL' : 'AUTO',
        customBorderRadius: "6px",
        onChange: function onChange(item) {
          formik.setValues(PayExpenseModal_objectSpread(PayExpenseModal_objectSpread(PayExpenseModal_objectSpread({}, formik.values), getPayoutOptionValue(payoutMethodType, item === 'AUTO', host)), {}, {
            paymentProcessorFeeInHostCurrency: null,
            totalAmountPaidInHostCurrency: null,
            feesPayer: !getCanCustomizeFeesPayer(expense, collective, hasManualPayment, null, LoggedInUser.isRoot) ? DEFAULT_VALUES.feesPayer // Reset fees payer if can't customize
            : formik.values.feesPayer
          }));
        },
        children: function children(_ref4) {
          var item = _ref4.item;
          return item === 'AUTO' ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "Payout.Automatic",
            defaultMessage: [{
              "type": 0,
              "value": "Automatic"
            }]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "Payout.Manual",
            defaultMessage: [{
              "type": 0,
              "value": "Manual"
            }]
          });
        }
      }), hasManualPayment && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: "totalAmountPaidInHostCurrency",
          htmlFor: "totalAmountPaidInHostCurrency",
          inputType: "number",
          error: formik.errors.totalAmountPaidInHostCurrency,
          required: true,
          mt: 3,
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "PayExpense.totalAmountPaidInHostCurrency.Input",
            defaultMessage: [{
              "type": 0,
              "value": "Total amount paid"
            }]
          }),
          hint: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "PayExpense.totalAmountPaidInHostCurrency.Hint",
            defaultMessage: [{
              "type": 0,
              "value": "The total amount debited from your account."
            }]
          }),
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, PayExpenseModal_objectSpread(PayExpenseModal_objectSpread({}, inputProps), {}, {
              currency: host.currency,
              currencyDisplay: "FULL",
              value: formik.values.totalAmountPaidInHostCurrency,
              "data-cy": "total-amount-paid",
              placeholder: "0.00",
              maxWidth: "100%",
              min: 0,
              onChange: function onChange(value) {
                return formik.setFieldValue('totalAmountPaidInHostCurrency', value);
              }
            }));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: "paymentProcessorFeeInHostCurrency",
          htmlFor: "paymentProcessorFeeInHostCurrency",
          inputType: "number",
          error: formik.errors.paymentProcessorFeeInHostCurrency,
          required: false,
          mt: 3,
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "PayExpense.ProcessorFeesInput",
            defaultMessage: [{
              "type": 0,
              "value": "Payment processor fees"
            }]
          }),
          hint: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "PayExpense.paymentProcessorFeeInHostCurrency.Hint",
            defaultMessage: [{
              "type": 0,
              "value": "Amount in fees, included in the total amount paid."
            }]
          }),
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputAmount/* default */.Z, PayExpenseModal_objectSpread(PayExpenseModal_objectSpread({}, inputProps), {}, {
              currency: host.currency,
              currencyDisplay: "FULL",
              value: formik.values.paymentProcessorFeeInHostCurrency,
              placeholder: "0.00",
              maxWidth: "100%",
              min: 0,
              max: 100000000,
              onChange: function onChange(value) {
                return formik.setFieldValue('paymentProcessorFeeInHostCurrency', value);
              }
            }));
          }
        })]
      }), getCanCustomizeFeesPayer(expense, collective, hasManualPayment, formik.values.paymentProcessorFeeInHostCurrency, LoggedInUser.isRoot) && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        mt: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
          content: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "ewvfiF",
            defaultMessage: [{
              "type": 0,
              "value": "Check this box to have the payee cover the cost of payment processor fees (useful to zero balance)"
            }]
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
            name: "feesPayer",
            checked: formik.values.feesPayer === 'PAYEE',
            onChange: function onChange(_ref5) {
              var checked = _ref5.checked;
              return formik.setFieldValue('feesPayer', checked ? 'PAYEE' : 'COLLECTIVE');
            },
            label: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              fontSize: "12px",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "zoC8Gb",
                defaultMessage: [{
                  "type": 0,
                  "value": "The payee is covering the fees"
                }]
              })
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mt: 19,
        mb: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionLabel, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "PaymentBreakdown",
            defaultMessage: [{
              "type": 0,
              "value": "Payment breakdown"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(AmountLine, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "ExpenseAmount",
              defaultMessage: [{
                "type": 0,
                "value": "Expense amount"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Amount, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amountStyles: {
                fontWeight: 500
              },
              amount: amountWithoutTaxes,
              currency: expense.currency,
              currencyCodeStyles: {
                color: 'black.500'
              }
            })
          })]
        }), (_expense$taxes = expense.taxes) === null || _expense$taxes === void 0 ? void 0 : _expense$taxes.map(function (tax) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(AmountLine, {
            "data-cy": "tax-".concat(tax.type, "-expense-amount-line"),
            pt: 0,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Label, {
              children: [(0,taxes/* i18nTaxType */.m)(intl, tax.type, 'short'), " (", round_default()(tax.rate * 100, 2) || 0, "%)"]
            }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(Amount, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                amount: (0,utils/* getTaxAmount */.L0)(amountWithoutTaxes, tax),
                precision: 2,
                currency: expense.currency,
                amountStyles: {
                  fontWeight: 500
                },
                showCurrencyCode: false
              })
            })]
          }, tax.type);
        }), amounts.paymentProcessorFee && /*#__PURE__*/(0,jsx_runtime.jsxs)(AmountLine, {
          borderTop: "0.8px dashed #9D9FA3",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "PayExpense.ProcessorFeesInput",
              defaultMessage: [{
                "type": 0,
                "value": "Payment processor fees"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Amount, {
            children: quoteQuery.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
              height: "16px"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amount: (_amounts$paymentProce = amounts.paymentProcessorFee) === null || _amounts$paymentProce === void 0 ? void 0 : _amounts$paymentProce.valueInCents,
              currency: (_amounts$paymentProce2 = amounts.paymentProcessorFee) === null || _amounts$paymentProce2 === void 0 ? void 0 : _amounts$paymentProce2.currency,
              currencyCodeStyles: {
                color: 'black.500'
              },
              amountStyles: {
                fontWeight: amounts.paymentProcessorFee ? 500 : 400,
                color: amounts.paymentProcessorFee ? 'black.900' : 'black.400'
              }
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(AmountLine, {
          borderTop: "1px solid #4E5052",
          pt: 11,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
            color: "black.900",
            fontWeight: "600",
            children: amounts.paymentProcessorFee !== null ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "TotalAmount",
              defaultMessage: [{
                "type": 0,
                "value": "Total amount"
              }]
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "TotalAmountWithoutFee",
              defaultMessage: [{
                "type": 0,
                "value": "Total amount (without fees)"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Amount, {
            children: quoteQuery.loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
              height: "16px"
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
              amount: (_amounts$totalAmount = amounts.totalAmount) === null || _amounts$totalAmount === void 0 ? void 0 : _amounts$totalAmount.valueInCents,
              currency: (_amounts$totalAmount2 = amounts.totalAmount) === null || _amounts$totalAmount2 === void 0 ? void 0 : _amounts$totalAmount2.currency,
              currencyCodeStyles: {
                color: 'black.500'
              }
            })
          })]
        }), amounts !== null && amounts !== void 0 && amounts.effectiveRate ? /*#__PURE__*/(0,jsx_runtime.jsxs)(AmountLine, {
          py: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
            color: "black.600",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "EffectiveRate",
              defaultMessage: [{
                "type": 0,
                "value": "Effective rate"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              color: "black.600",
              children: ["~ ", round_default()(amounts.effectiveRate, 5)]
            })
          })]
        }) : null]
      }), !error && formik.values.forceManual && payoutMethodType !== payout_method/* PayoutMethodType.OTHER */.Nk.OTHER && /*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
        type: "warning",
        withIcon: true,
        my: 3,
        fontSize: "12px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "Warning.Important",
            defaultMessage: [{
              "type": 0,
              "value": "Important"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          mt: 2,
          fontSize: "12px",
          lineHeight: "18px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "PayExpenseModal.ManualPayoutWarning",
            defaultMessage: [{
              "type": 0,
              "value": "By clicking below, you acknowledge that this expense has already been paid "
            }, {
              "type": 1,
              "value": "payoutMethod"
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              payoutMethod: hasBankInfoWithoutWise ? 'manually' : "via ".concat(payoutMethodLabel)
            }
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonStyle: "success",
          width: "100%",
          m: 1,
          type: "submit",
          loading: formik.isSubmitting,
          "data-cy": "mark-as-paid-button",
          disabled: quoteQuery.loading,
          children: hasManualPayment ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Check_Check_esm/* Check */.J, {
              size: "1.5em"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledSpan, {
              ml: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "expense.markAsPaid",
                defaultMessage: [{
                  "type": 0,
                  "value": "Mark as paid"
                }]
              })
            })]
          }) : isScheduling ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "expense.schedule.btn",
            defaultMessage: [{
              "type": 0,
              "value": "Schedule to Pay with "
            }, {
              "type": 1,
              "value": "paymentMethod"
            }],
            values: {
              paymentMethod: payoutMethodLabel
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "expense.pay.btn",
            defaultMessage: [{
              "type": 0,
              "value": "Pay with "
            }, {
              "type": 1,
              "value": "paymentMethod"
            }],
            values: {
              paymentMethod: payoutMethodLabel
            }
          })
        })
      })]
    })]
  });
};

PayExpenseModal.__docgenInfo = {
  "description": "Modal displayed by `PayExpenseButton` to trigger the actual payment of an expense",
  "methods": [],
  "displayName": "PayExpenseModal",
  "props": {
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "amount": {
            "name": "number",
            "required": false
          },
          "amountInAccountCurrency": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "feesPayer": {
            "name": "string",
            "required": false
          },
          "taxes": {
            "name": "array",
            "required": false
          },
          "payoutMethod": {
            "name": "shape",
            "value": {
              "type": {
                "name": "enum",
                "computed": true,
                "value": "Object.values(PayoutMethodType)",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "balance": {
            "name": "number",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "plan": {
            "name": "object",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "transferwise": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onSubmit": {
      "description": "Function called when users click on one of the \"Pay\" buttons",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "error": {
      "description": "If set, will be displayed in the pay modal",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "From withUser",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_PayExpenseModal = ((0,UserProvider/* withUser */.ns)(PayExpenseModal));

var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "PayExpenseModal___StyledSpan",
  componentId: "sc-13chir8-4"
})({
  verticalAlign: 'middle'
});
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/lodash/upperCase.js
var upperCase = __webpack_require__(14035);
var upperCase_default = /*#__PURE__*/__webpack_require__.n(upperCase);
// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(44908);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ./node_modules/lodash/first.js
var first = __webpack_require__(8804);
var first_default = /*#__PURE__*/__webpack_require__.n(first);
// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(13311);
var find_default = /*#__PURE__*/__webpack_require__.n(find);
// EXTERNAL MODULE: ./node_modules/lodash/compact.js
var compact = __webpack_require__(39693);
var compact_default = /*#__PURE__*/__webpack_require__.n(compact);
// EXTERNAL MODULE: ./node_modules/@styled-icons/bootstrap/ShieldFillCheck/ShieldFillCheck.esm.js
var ShieldFillCheck_esm = __webpack_require__(51553);
// EXTERNAL MODULE: ./node_modules/@styled-icons/bootstrap/ShieldFillExclamation/ShieldFillExclamation.esm.js
var ShieldFillExclamation_esm = __webpack_require__(73755);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ChevronDown/ChevronDown.esm.js
var ChevronDown_esm = __webpack_require__(10090);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ChevronUp/ChevronUp.esm.js
var ChevronUp_esm = __webpack_require__(21185);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var dist_index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledFilters.js
var StyledFilters = __webpack_require__(59049);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
;// CONCATENATED MODULE: ./components/expenses/SecurityChecksModal.js









var SecurityChecksModal_excluded = ["expense", "onClose", "onConfirm"],
    _excluded2 = ["expense"];

var _defineMessages;

function SecurityChecksModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SecurityChecksModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SecurityChecksModal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SecurityChecksModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var SecurityCheckItem = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "SecurityChecksModal__SecurityCheckItem",
  componentId: "sc-2aghzm-0"
})(["justify-content:space-between;min-height:72px;padding:12px 16px;:not(:last-child){border-bottom:1px solid ", ";}"], (0,dist_index_esm/* themeGet */.R)('colors.black.300'));
var LEVEL_TAG_STYLE = {
  PASS: 'success',
  HIGH: 'error',
  MEDIUM: 'warning',
  LOW: 'info'
};
var LEVEL_ORDER = ['HIGH', 'MEDIUM', 'LOW', 'PASS'];
var Scope = {
  USER: 'USER',
  COLLECTIVE: 'COLLECTIVE',
  PAYEE: 'PAYEE',
  PAYOUT_METHOD: 'PAYOUT_METHOD'
};
var expenseRequiresSecurityConfirmation = function expenseRequiresSecurityConfirmation(expense) {
  var _expense$securityChec;

  return (expense === null || expense === void 0 ? void 0 : (_expense$securityChec = expense.securityChecks) === null || _expense$securityChec === void 0 ? void 0 : _expense$securityChec.filter(function (check) {
    return check.level === 'HIGH';
  }).length) > 0;
};

var SecurityCheck = function SecurityCheck(check) {
  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isExpanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SecurityCheckItem, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "start",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, {
          type: LEVEL_TAG_STYLE[check.level],
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "16px",
          p: "2px 6px",
          mb: 2,
          children: upperCase_default()(check.scope)
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        children: check.message
      }), isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        mt: 2,
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        children: check.details
      })]
    }), check.details && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      alignItems: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledLink/* default */.Z, {
        fontWeight: "500",
        fontSize: "13px",
        lineHeight: "16px",
        ml: 2,
        color: "blue.500",
        onClick: function onClick() {
          return setExpanded(!isExpanded);
        },
        minWidth: "max-content",
        children: [isExpanded ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "jBYmhn",
          defaultMessage: [{
            "type": 0,
            "value": "Hide Details"
          }]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "kRqDOg",
          defaultMessage: [{
            "type": 0,
            "value": "Show Details"
          }]
        }), isExpanded ? /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronUp_esm/* ChevronUp */.K, {
          size: "1em"
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
          size: "1em"
        })]
      })
    })]
  }, check.message);
};

var I18nScopes = (0,react_intl_lib.defineMessages)((_defineMessages = {
  ALL: {
    id: "SecurityScope.All",
    defaultMessage: [{
      "type": 0,
      "value": "All Scopes"
    }]
  }
}, defineProperty_default()(_defineMessages, Scope.PAYEE, {
  id: "SecurityScope.Payee",
  defaultMessage: [{
    "type": 0,
    "value": "Payee"
  }]
}), defineProperty_default()(_defineMessages, Scope.USER, {
  id: "Tags.USER",
  defaultMessage: [{
    "type": 0,
    "value": "User"
  }]
}), defineProperty_default()(_defineMessages, Scope.COLLECTIVE, {
  id: "Collective",
  defaultMessage: [{
    "type": 0,
    "value": "Collective"
  }]
}), defineProperty_default()(_defineMessages, Scope.PAYOUT_METHOD, {
  id: "SecurityScope.PayoutMethod",
  defaultMessage: [{
    "type": 0,
    "value": "Payout Method"
  }]
}), _defineMessages));

var SecurityChecksModal = function SecurityChecksModal(_ref) {
  var _expense$securityChec2;

  var expense = _ref.expense,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      modalProps = objectWithoutProperties_default()(_ref, SecurityChecksModal_excluded);

  var intl = (0,useIntl/* default */.Z)();

  var _React$useState3 = react.useState(),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      scope = _React$useState4[0],
      setScope = _React$useState4[1];

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* default */.ZP, SecurityChecksModal_objectSpread(SecurityChecksModal_objectSpread({
    onClose: onClose,
    width: "680px",
    "data-cy": "security-check-modal"
  }, modalProps), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalHeader */.xB, {
      onClose: onClose,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H1, {
          color: "black.900",
          fontSize: "20px",
          lineHeight: "28px",
          children: onConfirm ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "SecurityChecksModal.confirm.title",
            defaultMessage: [{
              "type": 0,
              "value": "Are you sure you want to pay?"
            }]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "SecurityChecksModal.title",
            defaultMessage: [{
              "type": 0,
              "value": "Security Checks"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          mt: 2,
          color: "black.700",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "SecurityChecksModal.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "Multiple Security Checks have been flagged for this Expense. Please review and proceed with caution."
            }]
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledModal/* ModalBody */.fe, {
      mb: 0,
      mt: "24px",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledFilters/* default */.Z, {
        p: 0,
        filters: ['ALL'].concat(toConsumableArray_default()(uniq_default()(expense === null || expense === void 0 ? void 0 : (_expense$securityChec2 = expense.securityChecks) === null || _expense$securityChec2 === void 0 ? void 0 : _expense$securityChec2.map(function (check) {
          return check.scope;
        })))),
        getLabel: function getLabel(key) {
          return intl.formatMessage(I18nScopes[key]);
        },
        onChange: function onChange(filter) {
          return filter === 'ALL' ? setScope() : setScope(filter);
        },
        selected: scope
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
        mt: 3,
        children: expense.securityChecks.filter(function (check) {
          return scope ? check.scope === scope : true;
        }).map(function (check) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(SecurityCheck, SecurityChecksModal_objectSpread({}, check), check.message);
        })
      })]
    }), onConfirm && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledModal/* ModalFooter */.mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          onClick: onClose,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonStyle: "primary",
          onClick: onConfirm,
          "data-cy": "pay-button",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "SecurityChecksModal.confirm.button",
            defaultMessage: [{
              "type": 0,
              "value": "Yes, Continue to Payment"
            }]
          })
        })]
      })
    })]
  }));
};

var Indicator = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SecurityChecksModal__Indicator",
  componentId: "sc-2aghzm-1"
})(["position:absolute;display:flex;justify-content:center;align-items:center;right:0%;top:-10%;bottom:90%;left:70%;border-radius:50%;color:#fff;padding:9px;border:1px solid #fff;background-color:", ";font-size:10px;font-weight:700;"], (0,dist_index_esm/* themeGet */.R)('colors.red.500'));
var RoundButton = (0,styled_components_browser_esm/* default */.ZP)(StyledRoundButton/* default */.Z).withConfig({
  displayName: "SecurityChecksModal__RoundButton",
  componentId: "sc-2aghzm-2"
})(["position:relative;"]);
var LEVEL_BUTTON_STYLE = {
  PASS: 'successSecondary',
  HIGH: 'dangerSecondary',
  MEDIUM: 'warningSecondary',
  LOW: 'secondary'
};
var SecurityChecksButton = function SecurityChecksButton(_ref2) {
  var _expense$securityChec3;

  var expense = _ref2.expense,
      buttonProps = objectWithoutProperties_default()(_ref2, _excluded2);

  var _React$useState5 = react.useState(false),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      hasModal = _React$useState6[0],
      setHasModal = _React$useState6[1];

  var highRiskChecks = (expense === null || expense === void 0 ? void 0 : (_expense$securityChec3 = expense.securityChecks) === null || _expense$securityChec3 === void 0 ? void 0 : _expense$securityChec3.filter(function (check) {
    return check.level === 'HIGH';
  }).length) || 0;

  var higherRisk = first_default()(compact_default()(LEVEL_ORDER.map(function (level) {
    return find_default()(expense === null || expense === void 0 ? void 0 : expense.securityChecks, {
      level: level
    });
  })));

  var ShieldIcon = highRiskChecks ? ShieldFillExclamation_esm/* ShieldFillExclamation */.E : ShieldFillCheck_esm/* ShieldFillCheck */.x;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(RoundButton, SecurityChecksModal_objectSpread(SecurityChecksModal_objectSpread({}, buttonProps), {}, {
      buttonStyle: LEVEL_BUTTON_STYLE[higherRisk === null || higherRisk === void 0 ? void 0 : higherRisk.level] || 'secondary',
      onClick: function onClick() {
        return setHasModal(true);
      },
      children: [highRiskChecks ? /*#__PURE__*/(0,jsx_runtime.jsx)(Indicator, {
        children: highRiskChecks
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(ShieldIcon, {
        size: 18
      })]
    })), hasModal && /*#__PURE__*/(0,jsx_runtime.jsx)(SecurityChecksModal, {
      expense: expense,
      onClose: function onClose() {
        return setHasModal(false);
      }
    })]
  });
};
SecurityChecksModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SecurityChecksModal",
  "props": {
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "securityChecks": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "scope": {
                  "name": "string",
                  "required": false
                },
                "level": {
                  "name": "string",
                  "required": false
                },
                "message": {
                  "name": "string",
                  "required": false
                }
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
/* harmony default export */ var expenses_SecurityChecksModal = (SecurityChecksModal);
SecurityChecksButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SecurityChecksButton",
  "props": {
    "onConfirm": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
;// CONCATENATED MODULE: ./components/expenses/PayExpenseButton.js






var PayExpenseButton_excluded = ["type", "host"],
    PayExpenseButton_excluded2 = ["expense", "collective", "host", "disabled", "onSubmit", "error"],
    _excluded3 = ["action"];


function PayExpenseButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PayExpenseButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PayExpenseButton_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PayExpenseButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var getDisabledMessage = function getDisabledMessage(expense, collective, host, payoutMethod) {
  // Collective / Balance can be v1 or v2 there ...
  var expenseAmountInAccountCurrency = (0,currency_utils/* getAmountInCents */.KK)(expense.amountInAccountCurrency);

  var balance = get_default()(collective, 'stats.balanceWithBlockedFunds.valueInCents', get_default()(collective, 'stats.balanceWithBlockedFunds', 0));

  if (!host) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
      id: "expense.pay.error.noHost",
      defaultMessage: [{
        "type": 0,
        "value": "Expenses cannot be paid without a Fiscal Host"
      }]
    });
  } else if (balance < expenseAmountInAccountCurrency) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
      id: "expense.pay.error.insufficientBalance",
      defaultMessage: [{
        "type": 0,
        "value": "Insufficient balance"
      }]
    });
  } else if (includes_default()(expense.requiredLegalDocuments, 'US_TAX_FORM')) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
      id: "TaxForm.DisabledPayment",
      defaultMessage: [{
        "type": 0,
        "value": "Unable to pay because tax form has not been submitted."
      }]
    });
  } else if (!payoutMethod) {
    return null;
  } else if (payoutMethod.type === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT) {
    return null;
  } else if (payoutMethod.type === payout_method/* PayoutMethodType.ACCOUNT_BALANCE */.Nk.ACCOUNT_BALANCE) {
    if (!expense.payee.host) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "expense.pay.error.payee.noHost",
        defaultMessage: [{
          "type": 0,
          "value": "Unable to pay because payee Collective does not have a Fiscal Host."
        }]
      });
    }

    if (expense.payee.host.id !== host.id) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "expense.pay.error.payee.sameHost",
        defaultMessage: [{
          "type": 0,
          "value": "Payer and payee must have the same Fiscal Host to pay this way."
        }]
      });
    }
  }
};

var PayoutMethodTypeIcon = function PayoutMethodTypeIcon(_ref) {
  var type = _ref.type,
      host = _ref.host,
      props = objectWithoutProperties_default()(_ref, PayExpenseButton_excluded);

  if (type === payout_method/* PayoutMethodType.PAYPAL */.Nk.PAYPAL) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Paypal_esm/* Paypal */.z, PayExpenseButton_objectSpread({}, props));
  } else if (type === payout_method/* PayoutMethodType.BANK_ACCOUNT */.Nk.BANK_ACCOUNT && host !== null && host !== void 0 && host.transferwise) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(TransferwiseIcon/* default */.Z, PayExpenseButton_objectSpread({}, props));
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(University_esm/* University */.R, PayExpenseButton_objectSpread({}, props));
  }
};

var PayExpenseButton = function PayExpenseButton(_ref2) {
  var _expense$payoutMethod;

  var expense = _ref2.expense,
      collective = _ref2.collective,
      host = _ref2.host,
      disabled = _ref2.disabled,
      onSubmit = _ref2.onSubmit,
      error = _ref2.error,
      props = objectWithoutProperties_default()(_ref2, PayExpenseButton_excluded2);

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      hasModal = _React$useState2[0],
      showModal = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      hasSecurityModal = _React$useState4[0],
      showSecurityModal = _React$useState4[1];

  var disabledMessage = getDisabledMessage(expense, collective, host, expense.payoutMethod);
  var isDisabled = Boolean(disabled || disabledMessage);
  var requiresSecurityCheck = expenseRequiresSecurityConfirmation(expense);

  var handleClick = function handleClick() {
    return requiresSecurityCheck ? showSecurityModal(true) : showModal(true);
  };

  var button = /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, PayExpenseButton_objectSpread(PayExpenseButton_objectSpread({
    buttonStyle: "successSecondary",
    "data-cy": "pay-button"
  }, props), {}, {
    disabled: isDisabled,
    onClick: handleClick,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PayoutMethodTypeIcon, {
      type: (_expense$payoutMethod = expense.payoutMethod) === null || _expense$payoutMethod === void 0 ? void 0 : _expense$payoutMethod.type,
      host: host,
      size: 12
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
      ml: "6px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "actions.goToPay",
        defaultMessage: [{
          "type": 0,
          "value": "Go to Pay"
        }]
      })
    })]
  }));

  if (disabledMessage) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: disabledMessage,
      children: button
    });
  } else if (hasModal) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [button, /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayExpenseModal, {
        expense: expense,
        collective: collective,
        host: host,
        onClose: function onClose() {
          return showModal(false);
        },
        error: error,
        onSubmit: /*#__PURE__*/function () {
          var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(values) {
            var action, data, success;
            return regenerator_default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    action = values.action, data = objectWithoutProperties_default()(values, _excluded3);
                    _context.next = 3;
                    return onSubmit(action, data);

                  case 3:
                    success = _context.sent;

                    if (success) {
                      showModal(false);
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }()
      })]
    });
  } else if (hasSecurityModal) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [button, /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_SecurityChecksModal, {
        expense: expense,
        onConfirm: function onConfirm() {
          showModal(true);
          showSecurityModal(false);
        },
        onClose: function onClose() {
          return showSecurityModal(false);
        }
      })]
    });
  } else {
    return button;
  }
};

PayExpenseButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PayExpenseButton",
  "props": {
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "amount": {
            "name": "number",
            "required": false
          },
          "payoutMethod": {
            "name": "shape",
            "value": {
              "type": {
                "name": "enum",
                "computed": true,
                "value": "Object.values(PayoutMethodType)",
                "required": false
              }
            },
            "required": false
          },
          "payee": {
            "name": "shape",
            "value": {
              "host": {
                "name": "shape",
                "value": {
                  "id": {
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
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "host": {
            "name": "shape",
            "value": {
              "plan": {
                "name": "object",
                "required": false
              }
            },
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "balanceWithBlockedFunds": {
                "name": "union",
                "value": [{
                  "name": "number"
                }, {
                  "name": "shape",
                  "value": {
                    "valueInCents": {
                      "name": "number",
                      "required": true
                    },
                    "currency": {
                      "name": "string",
                      "required": true
                    }
                  }
                }],
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "plan": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "disabled": {
      "description": "To disable the button",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSubmit": {
      "description": "Function called when users click on one of the \"Pay\" buttons",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "error": {
      "description": "If set, will be displayed in the pay modal",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_PayExpenseButton = (PayExpenseButton);
;// CONCATENATED MODULE: ./components/expenses/ProcessExpenseButtons.js





var ProcessExpenseButtons_excluded = ["icon", "label", "permission"];

var ProcessExpenseButtons_templateObject;



function ProcessExpenseButtons_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ProcessExpenseButtons_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ProcessExpenseButtons_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ProcessExpenseButtons_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }























var processExpenseMutation = (0,lib/* default */.ZP)(ProcessExpenseButtons_templateObject || (ProcessExpenseButtons_templateObject = taggedTemplateLiteral_default()(["\n  mutation ProcessExpense(\n    $id: String\n    $legacyId: Int\n    $action: ExpenseProcessAction!\n    $paymentParams: ProcessExpensePaymentParams\n  ) {\n    processExpense(expense: { id: $id, legacyId: $legacyId }, action: $action, paymentParams: $paymentParams) {\n      id\n      ...ExpensePageExpenseFields\n    }\n  }\n\n  ", "\n"])), fragments/* expensePageExpenseFieldsFragment */.Wg);
var ButtonLabel = styled_components_browser_esm/* default.span.withConfig */.ZP.span.withConfig({
  displayName: "ProcessExpenseButtons__ButtonLabel",
  componentId: "sc-fh634o-0"
})({
  marginLeft: 6
});
/**
 * A small helper to know if expense process buttons should be displayed
 */

var hasProcessButtons = function hasProcessButtons(permissions) {
  if (!permissions) {
    return false;
  }

  return permissions.canApprove || permissions.canUnapprove || permissions.canReject || permissions.canPay || permissions.canMarkAsUnpaid || permissions.canMarkAsSpam || permissions.canDelete;
};
var messages = (0,react_intl_lib.defineMessages)({
  markAsSpamWarning: {
    id: "Expense.MarkAsSpamWarning",
    defaultMessage: [{
      "type": 0,
      "value": "This will prevent the submitter account to post new expenses. Are you sure?"
    }]
  }
});

var getErrorContent = function getErrorContent(intl, error, host) {
  // TODO: The proper way to check for error types is with error.type, not the message
  var message = error === null || error === void 0 ? void 0 : error.message;

  if (message) {
    if (message.startsWith('Insufficient Paypal balance')) {
      return {
        title: intl.formatMessage({
          id: "BmZrOu",
          defaultMessage: [{
            "type": 0,
            "value": "Insufficient Paypal balance"
          }]
        }),
        message: /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: "/".concat(host.slug, "/admin"),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "PayExpenseModal.RefillBalanceError",
              defaultMessage: [{
                "type": 0,
                "value": "Refill your balance from the Host dashboard"
              }]
            })
          })
        })
      };
    }
  }

  return {
    message: (0,lib_errors/* i18nGraphqlException */.t2)(intl, error)
  };
};

var PermissionButton = function PermissionButton(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      permission = _ref.permission,
      props = objectWithoutProperties_default()(_ref, ProcessExpenseButtons_excluded);

  var intl = (0,useIntl/* default */.Z)();

  var button = /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, props), {}, {
    disabled: !permission.allowed,
    children: [permission.reason ? /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircle_esm/* InfoCircle */.Z, {
      size: 14
    }) : icon, label]
  }));

  var message = permission.reason && intl.formatMessage(ReasonMessage[permission.reason], permission.reasonDetails);

  if (message) {
    button = /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: message,
      children: button
    });
  }

  return button;
};

/**
 * All the buttons to process an expense, displayed in a React.Fragment to let the parent
 * in charge of the layout.
 */
var ProcessExpenseButtons = function ProcessExpenseButtons(_ref2) {
  var _expense$securityChec;

  var expense = _ref2.expense,
      collective = _ref2.collective,
      host = _ref2.host,
      permissions = _ref2.permissions,
      buttonProps = _ref2.buttonProps,
      onSuccess = _ref2.onSuccess,
      onModalToggle = _ref2.onModalToggle,
      onDelete = _ref2.onDelete;

  var _React$useState = react.useState(null),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      selectedAction = _React$useState2[0],
      setSelectedAction = _React$useState2[1];

  var onUpdate = function onUpdate(cache, response) {
    return onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(response.data.processExpense, cache, selectedAction);
  };

  var mutationOptions = {
    context: helpers/* API_V2_CONTEXT */.T,
    update: onUpdate
  };

  var _useMutation = (0,client.useMutation)(processExpenseMutation, mutationOptions),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      processExpense = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  var intl = (0,useIntl/* default */.Z)();

  var _useToasts = (0,ToastProvider/* useToasts */.e1)(),
      addToast = _useToasts.addToast;

  var triggerAction = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(action, paymentParams) {
      var variables;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setSelectedAction(action);
              _context.prev = 3;
              variables = {
                id: expense.id,
                legacyId: expense.legacyId,
                action: action,
                paymentParams: paymentParams
              };
              _context.next = 7;
              return processExpense({
                variables: variables
              });

            case 7:
              return _context.abrupt("return", true);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              // Display a toast with light variant since we're in a modal
              addToast(ProcessExpenseButtons_objectSpread({
                type: ToastProvider/* TOAST_TYPE.ERROR */["do"].ERROR,
                variant: 'light'
              }, getErrorContent(intl, _context.t0, host)));
              return _context.abrupt("return", false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));

    return function triggerAction(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getButtonProps = function getButtonProps(action) {
    var isSelectedAction = selectedAction === action;
    return ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, buttonProps), {}, {
      disabled: loading && !isSelectedAction,
      loading: loading && isSelectedAction,
      onClick: function onClick() {
        return triggerAction(action);
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [(permissions.approve.allowed || permissions.approve.reason === constants_permissions.AUTHOR_CANNOT_APPROVE) && /*#__PURE__*/(0,jsx_runtime.jsx)(PermissionButton, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, getButtonProps('APPROVE')), {}, {
      buttonStyle: "secondary",
      "data-cy": "approve-button",
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(Check_esm/* Check */.J, {
        size: 12
      }),
      permission: permissions.approve,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "actions.approve",
          defaultMessage: [{
            "type": 0,
            "value": "Approve"
          }]
        })
      })
    })), permissions.canPay && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PayExpenseButton, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, getButtonProps('PAY')), {}, {
      onClick: null,
      onSubmit: triggerAction,
      expense: expense,
      collective: collective,
      host: host,
      error: error
    })), permissions.canReject && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, getButtonProps('REJECT')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "reject-button",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Times_esm/* Times */.u, {
        size: 14
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "actions.reject",
          defaultMessage: [{
            "type": 0,
            "value": "Reject"
          }]
        })
      })]
    })), permissions.canMarkAsSpam && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, getButtonProps('MARK_AS_SPAM')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "spam-button",
      onClick: function onClick() {
        if (confirm(intl.formatMessage(messages.markAsSpamWarning))) {
          triggerAction('MARK_AS_SPAM');
        }
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Times_esm/* Times */.u, {
        size: 14
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "actions.spam",
          defaultMessage: [{
            "type": 0,
            "value": "Mark as Spam"
          }]
        })
      })]
    })), permissions.canUnapprove && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, getButtonProps('UNAPPROVE')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "unapprove-button",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Ban_esm/* Ban */.K, {
        size: 12
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "expense.unapprove.btn",
          defaultMessage: [{
            "type": 0,
            "value": "Unapprove"
          }]
        })
      })]
    })), permissions.canUnschedulePayment && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, getButtonProps('UNSCHEDULE_PAYMENT')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "unapprove-button",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Ban_esm/* Ban */.K, {
        size: 12
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonLabel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "expense.unschedulePayment.btn",
          defaultMessage: [{
            "type": 0,
            "value": "Unschedule Payment"
          }]
        })
      })]
    })), permissions.canMarkAsUnpaid && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_MarkExpenseAsUnpaidButton, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({
      "data-cy": "mark-as-unpaid-button"
    }, getButtonProps('MARK_AS_UNPAID')), {}, {
      onClick: null,
      onConfirm: function onConfirm(shouldRefundPaymentProcessorFee) {
        return triggerAction('MARK_AS_UNPAID', {
          shouldRefundPaymentProcessorFee: shouldRefundPaymentProcessorFee
        });
      }
    })), permissions.canDelete && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_DeleteExpenseButton, {
      buttonProps: getButtonProps(),
      expense: expense,
      onModalToggle: onModalToggle,
      onDelete: onDelete
    }), (expense === null || expense === void 0 ? void 0 : (_expense$securityChec = expense.securityChecks) === null || _expense$securityChec === void 0 ? void 0 : _expense$securityChec.length) && /*#__PURE__*/(0,jsx_runtime.jsx)(SecurityChecksButton, ProcessExpenseButtons_objectSpread(ProcessExpenseButtons_objectSpread({}, buttonProps), {}, {
      minWidth: 0,
      expense: expense
    }))]
  });
};

var DEFAULT_PROCESS_EXPENSE_BTN_PROPS = {
  buttonSize: 'small',
  minWidth: 130,
  mx: 2,
  mt: 2
};
ProcessExpenseButtons.defaultProps = {
  buttonProps: DEFAULT_PROCESS_EXPENSE_BTN_PROPS
};
ProcessExpenseButtons.__docgenInfo = {
  "description": "All the buttons to process an expense, displayed in a React.Fragment to let the parent\nin charge of the layout.",
  "methods": [],
  "displayName": "ProcessExpenseButtons",
  "props": {
    "buttonProps": {
      "defaultValue": {
        "value": "{\n  buttonSize: 'small',\n  minWidth: 130,\n  mx: 2,\n  mt: 2,\n}",
        "computed": false
      },
      "description": "Props passed to all buttons. Useful to customize sizes, spaces, etc.",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "permissions": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "canApprove": {
            "name": "bool",
            "required": false
          },
          "canUnapprove": {
            "name": "bool",
            "required": false
          },
          "canReject": {
            "name": "bool",
            "required": false
          },
          "canMarkAsSpam": {
            "name": "bool",
            "required": false
          },
          "canPay": {
            "name": "bool",
            "required": false
          },
          "canMarkAsUnpaid": {
            "name": "bool",
            "required": false
          },
          "canMarkAsIncomplete": {
            "name": "bool",
            "required": false
          },
          "canUnschedulePayment": {
            "name": "bool",
            "required": false
          },
          "canDelete": {
            "name": "bool",
            "required": false
          },
          "approve": {
            "name": "shape",
            "value": {
              "allowed": {
                "name": "bool",
                "required": false
              },
              "reason": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "status": {
            "name": "string",
            "required": false
          },
          "securityChecks": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "level": {
                  "name": "string",
                  "required": false
                },
                "scope": {
                  "name": "string",
                  "required": false
                },
                "message": {
                  "name": "string",
                  "required": false
                }
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "collective": {
      "description": "The account where the expense has been submitted",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "showError": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onDelete": {
      "description": "Called when the expense gets deleted",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onModalToggle": {
      "description": "Called when a modal is opened/closed with a boolean like (isOpen)",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "displayMarkAsIncomplete": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_ProcessExpenseButtons = (ProcessExpenseButtons);

/***/ }),

/***/ 17738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2": function() { return /* binding */ expensesListAdminFieldsFragment; },
/* harmony export */   "RR": function() { return /* binding */ expenseHostFields; },
/* harmony export */   "Wg": function() { return /* binding */ expensePageExpenseFieldsFragment; },
/* harmony export */   "sU": function() { return /* binding */ loggedInAccountExpensePayoutFieldsFragment; },
/* harmony export */   "xe": function() { return /* binding */ expensesListFieldsFragment; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15020);
/* harmony import */ var _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



var loggedInAccountExpensePayoutFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment LoggedInAccountExpensePayoutFields on Individual {\n    id\n    slug\n    imageUrl\n    type\n    name\n    legalName\n    hasTwoFactorAuth\n    location {\n      id\n      address\n      country\n      structured\n    }\n    payoutMethods {\n      id\n      type\n      name\n      data\n      isSaved\n    }\n    adminMemberships: memberOf(role: ADMIN, includeIncognito: false, accountType: [ORGANIZATION, COLLECTIVE, FUND]) {\n      nodes {\n        id\n        account {\n          id\n          slug\n          imageUrl\n          type\n          name\n          legalName\n          isActive\n          isHost\n          policies {\n            REQUIRE_2FA_FOR_ADMINS\n          }\n          ... on AccountWithParent {\n            parent {\n              id\n              policies {\n                REQUIRE_2FA_FOR_ADMINS\n              }\n            }\n          }\n          ... on AccountWithHost {\n            host {\n              id\n              payoutMethods {\n                id\n                type\n                name\n                data\n                isSaved\n              }\n            }\n          }\n          ... on Organization {\n            host {\n              id\n              payoutMethods {\n                id\n                type\n                name\n                data\n                isSaved\n              }\n            }\n          }\n          location {\n            id\n            address\n            country\n            structured\n          }\n          payoutMethods {\n            id\n            type\n            name\n            data\n            isSaved\n          }\n          childrenAccounts {\n            nodes {\n              id\n              slug\n              imageUrl\n              type\n              name\n              isActive\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var expenseHostFields = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment ExpenseHostFields on Host {\n    id\n    name\n    legalName\n    slug\n    type\n    currency\n    isHost\n    expensePolicy\n    website\n    settings\n    features {\n      id\n      MULTI_CURRENCY_EXPENSES\n      PAYPAL_PAYOUTS\n    }\n    paypalPreApproval {\n      id\n      balance {\n        currency\n        valueInCents\n      }\n    }\n    location {\n      id\n      address\n      country\n    }\n    transferwise {\n      id\n      availableCurrencies\n    }\n    supportedPayoutMethods\n    isTrustedHost\n    hasDisputedOrders\n    hasInReviewOrders\n    plan {\n      id\n    }\n  }\n"])));
var expensePageExpenseFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment ExpensePageExpenseFields on Expense {\n    id\n    legacyId\n    description\n    longDescription\n    currency\n    type\n    status\n    privateMessage\n    tags\n    amount\n    amountInAccountCurrency: amountV2(currencySource: ACCOUNT) {\n      valueInCents\n      currency\n      exchangeRate {\n        date\n        value\n        source\n        isApproximate\n      }\n    }\n    createdAt\n    invoiceInfo\n    requiredLegalDocuments\n    feesPayer\n    draft\n    items {\n      id\n      incurredAt\n      description\n      amount\n      url\n    }\n    taxes {\n      id\n      type\n      rate\n      idNumber\n    }\n    attachedFiles {\n      id\n      url\n      name\n      info {\n        id\n        name\n        size\n      }\n    }\n    payee {\n      id\n      slug\n      name\n      legalName\n      type\n      isAdmin\n      location {\n        id\n        address\n        country\n      }\n      payoutMethods {\n        id\n        type\n        name\n        data\n        isSaved\n      }\n\n      # For Collectives, Funds, Events and Projects\n      ... on AccountWithHost {\n        isApproved\n        host {\n          id\n          # For Expenses across hosts\n          payoutMethods {\n            id\n            type\n            name\n            data\n            isSaved\n          }\n        }\n      }\n\n      # For Fiscal Hosts\n      ... on Organization {\n        host {\n          id\n        }\n      }\n    }\n    payeeLocation {\n      id\n      address\n      country\n      structured\n    }\n    createdByAccount {\n      id\n      slug\n      name\n      type\n      imageUrl\n    }\n    host {\n      id\n      name\n      legalName\n      slug\n      type\n      website\n      location {\n        id\n        address\n        country\n      }\n    }\n    requestedByAccount {\n      id\n      slug\n      name\n      type\n      imageUrl\n    }\n    account {\n      id\n      legacyId\n      slug\n      name\n      type\n      imageUrl\n      backgroundImageUrl\n      isActive\n      description\n      settings\n      twitterHandle\n      currency\n      expensePolicy\n      supportedExpenseTypes\n      features {\n        id\n        ...NavbarFields\n        MULTI_CURRENCY_EXPENSES\n      }\n      expensesTags {\n        id\n        tag\n      }\n      location {\n        id\n        address\n        country\n      }\n\n      stats {\n        id\n        balanceWithBlockedFunds {\n          valueInCents\n          currency\n        }\n      }\n\n      ... on AccountWithParent {\n        parent {\n          id\n          slug\n          imageUrl\n          backgroundImageUrl\n          twitterHandle\n        }\n      }\n\n      ... on AccountWithHost {\n        isApproved\n        host {\n          id\n          ...ExpenseHostFields\n          transferwise {\n            id\n            availableCurrencies\n          }\n        }\n      }\n\n      # For Hosts with Budget capabilities\n\n      ... on Organization {\n        isHost\n        isActive\n        host {\n          id\n          ...ExpenseHostFields\n          transferwise {\n            id\n            availableCurrencies\n          }\n        }\n      }\n\n      ... on Event {\n        parent {\n          id\n          slug\n          name\n          type\n          imageUrl\n        }\n      }\n      ... on Project {\n        parent {\n          id\n          slug\n          name\n          type\n          imageUrl\n        }\n      }\n    }\n    payoutMethod {\n      id\n      type\n      data\n      isSaved\n    }\n    virtualCard {\n      id\n      name\n      last4\n    }\n    permissions {\n      id\n      canEdit\n      canEditTags\n      canDelete\n      canSeeInvoiceInfo\n      canApprove\n      canUnapprove\n      canReject\n      canMarkAsSpam\n      canPay\n      canMarkAsUnpaid\n      canMarkAsIncomplete\n      canComment\n      canUnschedulePayment\n      approve {\n        allowed\n        reason\n        reasonDetails\n      }\n    }\n    activities {\n      id\n      type\n      createdAt\n      data\n      individual {\n        id\n        type\n        slug\n        name\n        imageUrl\n      }\n    }\n    recurringExpense {\n      id\n      interval\n      endsAt\n    }\n    securityChecks {\n      level\n      message\n      scope\n      details\n    }\n  }\n\n  ", "\n  ", "\n"])), expenseHostFields, _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__/* .collectiveNavbarFieldsFragment */ .AS);
var expensesListFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment ExpensesListFieldsFragment on Expense {\n    id\n    legacyId\n    description\n    status\n    createdAt\n    tags\n    amount\n    amountInAccountCurrency: amountV2(currencySource: ACCOUNT) {\n      valueInCents\n      currency\n      exchangeRate {\n        date\n        value\n        source\n        isApproximate\n      }\n    }\n    currency\n    type\n    requiredLegalDocuments\n    feesPayer\n    account {\n      id\n      name\n      slug\n      createdAt\n      currency\n      type\n      stats {\n        id\n        balanceWithBlockedFunds {\n          valueInCents\n          currency\n        }\n      }\n      ... on AccountWithParent {\n        parent {\n          id\n          slug\n        }\n      }\n    }\n    permissions {\n      id\n      canDelete\n      canApprove\n      canUnapprove\n      canReject\n      canMarkAsSpam\n      canPay\n      canMarkAsUnpaid\n      canMarkAsIncomplete\n      canSeeInvoiceInfo\n      canEditTags\n      canUnschedulePayment\n      approve {\n        allowed\n        reason\n        reasonDetails\n      }\n    }\n    payoutMethod {\n      id\n      type\n      data\n      isSaved\n    }\n    payee {\n      id\n      type\n      slug\n      name\n      imageUrl(height: 80)\n      isAdmin\n\n      # For Collectives, Funds, Events and Projects\n      ... on AccountWithHost {\n        isApproved\n        host {\n          id\n        }\n      }\n\n      # For Fiscal Hosts\n      ... on Organization {\n        host {\n          id\n        }\n      }\n    }\n    createdByAccount {\n      id\n      type\n      slug\n      name\n    }\n  }\n"])));
var expensesListAdminFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_templateObject5 || (_templateObject5 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment ExpensesListAdminFieldsFragment on Expense {\n    id\n    payoutMethod {\n      id\n      type\n      data\n    }\n    items {\n      id\n      description\n      incurredAt\n      url\n      amount\n    }\n    taxes {\n      id\n      type\n      rate\n    }\n    attachedFiles {\n      id\n      url\n      name\n    }\n    securityChecks {\n      level\n      message\n      scope\n      details\n    }\n  }\n"])));

/***/ }),

/***/ 51561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fo": function() { return /* binding */ computeExpenseAmounts; },
/* harmony export */   "L0": function() { return /* binding */ getTaxAmount; },
/* harmony export */   "Ou": function() { return /* binding */ isTaxRateValid; },
/* harmony export */   "_D": function() { return /* binding */ validateExpenseTaxes; },
/* harmony export */   "_Y": function() { return /* binding */ getSupportedCurrencies; },
/* harmony export */   "ol": function() { return /* binding */ getAmountWithoutTaxes; },
/* harmony export */   "vr": function() { return /* binding */ checkRequiresAddress; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44908);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73303);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sumBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41609);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41429);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99708);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_currency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38198);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56508);
/* harmony import */ var _ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48652);
/* harmony import */ var _ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1868);













var checkRequiresAddress = function checkRequiresAddress(values) {
  var _values$payee;

  var collectiveTypesRequiringAddress = [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.INDIVIDUAL */ .eV.INDIVIDUAL, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.USER */ .eV.USER, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION];
  var expenseTypesRequiringAddress = [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].GRANT */ .Z.GRANT];
  return expenseTypesRequiringAddress.includes(values.type) && (((_values$payee = values.payee) === null || _values$payee === void 0 ? void 0 : _values$payee.isNewUser) || values.payee && !values.payee.isInvite && (collectiveTypesRequiringAddress.includes(values.payee.type) || values.payee.isHost));
};
var isTaxRateValid = function isTaxRateValid(rate) {
  return !lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(rate) && rate >= 0 && rate <= 1;
};
var getTaxAmount = function getTaxAmount(baseAmount, tax) {
  return Math.round(baseAmount * tax.rate);
};
var computeExpenseAmounts = function computeExpenseAmounts(items, taxes) {
  var areAllItemsValid = items.every(function (item) {
    return !lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(item.amount);
  });
  var activeTaxes = (taxes === null || taxes === void 0 ? void 0 : taxes.filter(function (tax) {
    return !tax.isDisabled;
  })) || [];
  var hasTaxes = Boolean(activeTaxes.length);
  var areAllTaxesValid = !hasTaxes || activeTaxes.every(function (tax) {
    return isTaxRateValid(tax.rate);
  });
  var totalInvoiced = areAllItemsValid ? lodash_sumBy__WEBPACK_IMPORTED_MODULE_2___default()(items, 'amount') : null;
  var totalAmount = areAllItemsValid && areAllTaxesValid ? totalInvoiced + lodash_sumBy__WEBPACK_IMPORTED_MODULE_2___default()(activeTaxes || [], function (tax) {
    return getTaxAmount(totalInvoiced, tax);
  }) : null;
  return {
    hasTaxes: hasTaxes,
    totalInvoiced: totalInvoiced,
    totalAmount: totalAmount
  };
};
var getAmountWithoutTaxes = function getAmountWithoutTaxes(totalAmount, taxes) {
  return totalAmount / (1 + lodash_sumBy__WEBPACK_IMPORTED_MODULE_2___default()(taxes, 'rate'));
};
var validateExpenseTaxes = function validateExpenseTaxes(intl, taxes) {
  var enabledTaxes = (taxes === null || taxes === void 0 ? void 0 : taxes.filter(function (tax) {
    return !tax.isDisabled;
  })) || [];

  if (!enabledTaxes.length) {
    return null;
  } else {
    var taxesErrors = enabledTaxes.map(function (tax) {
      switch (tax.type) {
        case _opencollective_taxes__WEBPACK_IMPORTED_MODULE_5__.TaxType.GST:
          return (0,_ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_10__/* .validateTaxGST */ .l)(intl, tax);

        case _opencollective_taxes__WEBPACK_IMPORTED_MODULE_5__.TaxType.VAT:
          return (0,_ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_11__/* .validateTaxVAT */ .C)(intl, tax);

        default:
          return "Tax type ".concat(tax.type, " is not supported");
        // No i18n because it's a developer error
      }
    });
    var hasErrors = taxesErrors.some(function (errors) {
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(errors);
    });
    return hasErrors ? taxesErrors : null;
  }
};
/**
 * Returns the list of supported currencies for this expense / payout method.
 * The collective currency always comes first.
 */

var getSupportedCurrencies = function getSupportedCurrencies(collective, payoutMethod) {
  if (!(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__/* .isFeatureEnabled */ .cr)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__/* .FEATURES.MULTI_CURRENCY_EXPENSES */ .h6.MULTI_CURRENCY_EXPENSES) || !(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__/* .isFeatureEnabled */ .cr)(collective.host, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_6__/* .FEATURES.MULTI_CURRENCY_EXPENSES */ .h6.MULTI_CURRENCY_EXPENSES) || (payoutMethod === null || payoutMethod === void 0 ? void 0 : payoutMethod.type) === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_9__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE) {
    return [collective === null || collective === void 0 ? void 0 : collective.currency];
  }

  var isPayPal = (payoutMethod === null || payoutMethod === void 0 ? void 0 : payoutMethod.type) === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_9__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL;

  if (isPayPal) {
    var defaultCurrency = _lib_constants_currency__WEBPACK_IMPORTED_MODULE_12__/* .PayPalSupportedCurrencies.includes */ .b.includes(collective === null || collective === void 0 ? void 0 : collective.currency) ? collective.currency : 'USD';
    return lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()([defaultCurrency].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_lib_constants_currency__WEBPACK_IMPORTED_MODULE_12__/* .PayPalSupportedCurrencies */ .b)));
  } else if ((payoutMethod === null || payoutMethod === void 0 ? void 0 : payoutMethod.type) === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_9__/* .PayoutMethodType.OTHER */ .Nk.OTHER) {
    return _lib_constants_currency__WEBPACK_IMPORTED_MODULE_12__/* .Currency.includes */ .F.includes(collective === null || collective === void 0 ? void 0 : collective.currency) ? lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()([collective === null || collective === void 0 ? void 0 : collective.currency].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_lib_constants_currency__WEBPACK_IMPORTED_MODULE_12__/* .Currency */ .F))) : _lib_constants_currency__WEBPACK_IMPORTED_MODULE_12__/* .Currency */ .F;
  } else {
    var _collective$host, _payoutMethod$data;

    return lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()([collective === null || collective === void 0 ? void 0 : collective.currency, collective === null || collective === void 0 ? void 0 : (_collective$host = collective.host) === null || _collective$host === void 0 ? void 0 : _collective$host.currency, payoutMethod === null || payoutMethod === void 0 ? void 0 : payoutMethod.currency, payoutMethod === null || payoutMethod === void 0 ? void 0 : (_payoutMethod$data = payoutMethod.data) === null || _payoutMethod$data === void 0 ? void 0 : _payoutMethod$data.currency].filter(Boolean));
  }
};

/***/ }),

/***/ 29301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(15020);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(46829);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(95612);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82580);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(52015);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17632);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62131);
/* harmony import */ var _lib_policies__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(43176);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97079);
/* harmony import */ var _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71611);
/* harmony import */ var _collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54103);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(41861);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5993);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29242);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputPercentage__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(69931);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(66943);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(31330);
/* harmony import */ var _TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(37066);
/* harmony import */ var _contribution_flow_fees_on_top_illustration_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(9851);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(85893);







var _excluded = ["collective"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









































var Illustration = styled_components__WEBPACK_IMPORTED_MODULE_41__/* ["default"].img.attrs */ .ZP.img.attrs({
  src: _contribution_flow_fees_on_top_illustration_png__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z
}).withConfig({
  displayName: "AddFundsModal__Illustration",
  componentId: "sc-m0r42a-0"
})(["width:40px;height:40px;"]);
var AddFundsModalContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .ZP)(_StyledModal__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .ZP).withConfig({
  displayName: "AddFundsModal__AddFundsModalContainer",
  componentId: "sc-m0r42a-1"
})(["width:100%;max-width:576px;padding:24px 30px;", ""], function (props) {
  return props.showPlatformTipModal && (0,styled_components__WEBPACK_IMPORTED_MODULE_41__/* .css */ .iv)(["background-image:url('/static/images/platform-tip-background.svg');background-repeat:no-repeat;background-size:435px;"]);
});

var AmountDetailsLine = function AmountDetailsLine(_ref) {
  var label = _ref.label,
      value = _ref.value,
      currency = _ref.currency,
      isLargeAmount = _ref.isLargeAmount;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
    justifyContent: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_37__/* .Span */ .Dr, {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: "500",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
        id: "withColon",
        defaultMessage: [{
          "type": 1,
          "value": "item"
        }, {
          "type": 0,
          "value": ":"
        }],
        values: {
          item: label
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_37__/* .Span */ .Dr, {
      fontSize: isLargeAmount ? '18px' : '12px',
      lineHeight: isLargeAmount ? '27px' : '18px',
      fontWeight: "500",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        amount: value,
        currency: currency
      })
    })]
  });
};

var addFundsMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  mutation AddFunds(\n    $fromAccount: AccountReferenceInput!\n    $account: AccountReferenceInput!\n    $tier: TierReferenceInput\n    $amount: AmountInput!\n    $description: String!\n    $memo: String\n    $processedAt: DateTime\n    $hostFeePercent: Float!\n    $invoiceTemplate: String\n  ) {\n    addFunds(\n      account: $account\n      fromAccount: $fromAccount\n      amount: $amount\n      description: $description\n      memo: $memo\n      processedAt: $processedAt\n      hostFeePercent: $hostFeePercent\n      tier: $tier\n      invoiceTemplate: $invoiceTemplate\n    ) {\n      id\n      description\n      memo\n      processedAt\n      transactions {\n        id\n        type\n      }\n      fromAccount {\n        id\n        slug\n        name\n      }\n      toAccount {\n        id\n        slug\n        name\n        stats {\n          id\n          balance {\n            valueInCents\n          }\n        }\n      }\n      tier {\n        id\n        legacyId\n        slug\n        name\n      }\n    }\n  }\n"])));
var addFundsTierFieldsFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .ZP)(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  fragment AddFundsTierFields on Tier {\n    id\n    slug\n    legacyId\n    name\n  }\n"])));
var addFundsAccountQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .ZP)(_templateObject3 || (_templateObject3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  query AddFundsAccount($slug: String!) {\n    account(slug: $slug) {\n      id\n      type\n      isHost\n      name\n      slug\n      currency\n      settings\n      ... on Organization {\n        tiers {\n          nodes {\n            id\n            ...AddFundsTierFields\n          }\n        }\n      }\n      ... on Host {\n        id\n        slug\n        name\n        settings\n        plan {\n          id\n          hostFees\n        }\n        policies {\n          REQUIRE_2FA_FOR_ADMINS\n        }\n        isTrustedHost\n      }\n      ... on AccountWithHost {\n        addedFundsHostFeePercent: hostFeePercent(paymentMethodType: HOST)\n        host {\n          id\n          slug\n          name\n          settings\n          plan {\n            id\n            hostFees\n          }\n          policies {\n            REQUIRE_2FA_FOR_ADMINS\n          }\n          isTrustedHost\n        }\n      }\n      ... on AccountWithContributions {\n        tiers {\n          nodes {\n            id\n            ...AddFundsTierFields\n          }\n        }\n      }\n    }\n  }\n  ", "\n"])), addFundsTierFieldsFragment);
var addPlatformTipMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .ZP)(_templateObject4 || (_templateObject4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5___default()(["\n  mutation AddPlatformTip($amount: AmountInput!, $transaction: TransactionReferenceInput!) {\n    addPlatformTipToTransaction(amount: $amount, transaction: $transaction) {\n      id\n    }\n  }\n"])));

var getInitialValues = function getInitialValues(values) {
  return _objectSpread({
    amount: null,
    hostFeePercent: null,
    description: '',
    memo: null,
    processedAt: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_15__/* .getCurrentDateInUTC */ .qo)(),
    fromAccount: null,
    tier: null
  }, values);
};

var validate = function validate(values) {
  return (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .requireFields */ .ay)(values, ['amount', 'fromAccount', 'description', 'processedAt']);
}; // Build an account reference. Compatible with accounts from V1 and V2.


var buildAccountReference = function buildAccountReference(input) {
  return typeof input.id === 'string' ? {
    id: input.id
  } : {
    legacyId: input.id
  };
};

var msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_45__.defineMessages)({
  noThankYou: {
    id: "NoThankYou",
    defaultMessage: [{
      "type": 0,
      "value": "No thank you"
    }]
  },
  other: {
    id: "platformFee.Other",
    defaultMessage: [{
      "type": 0,
      "value": "Other"
    }]
  }
});
var DEFAULT_PLATFORM_TIP_PERCENTAGES = [0.1, 0.15, 0.2];

var getOptionFromPercentage = function getOptionFromPercentage(amount, currency, percentage) {
  var feeAmount = isNaN(amount) ? 0 : Math.round(amount * percentage);
  return {
    // Value must be unique, so we set a special key if feeAmount is 0
    value: feeAmount || "".concat(percentage, "%"),
    feeAmount: feeAmount,
    percentage: percentage,
    currency: currency,
    label: "".concat(feeAmount / 100, " ").concat(currency, " (").concat(percentage * 100, "%)")
  };
};

var getOptions = function getOptions(amount, currency, intl) {
  return [].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3___default()(DEFAULT_PLATFORM_TIP_PERCENTAGES.map(function (percentage) {
    return getOptionFromPercentage(amount, currency, percentage);
  })), [{
    label: intl.formatMessage(msg.noThankYou),
    value: 0
  }, {
    label: intl.formatMessage(msg.other),
    value: 'CUSTOM'
  }]);
};

var getTiersOptions = function getTiersOptions(intl, tiers) {
  if (!tiers) {
    return [];
  }

  return [{
    value: null,
    label: intl.formatMessage({
      id: "ozkv/Y",
      defaultMessage: [{
        "type": 0,
        "value": "No tier"
      }]
    })
  }].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3___default()(tiers.map(function (tier) {
    return {
      value: tier,
      label: "#".concat(tier.legacyId, " - ").concat(tier.name)
    };
  })));
};

var Field = (0,styled_components__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .ZP)(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z).attrs({
  labelFontSize: '16px',
  labelFontWeight: '700'
}).withConfig({
  displayName: "AddFundsModal__Field",
  componentId: "sc-m0r42a-2"
})([""]);

var AddFundsModal = function AddFundsModal(_ref2) {
  var _host$plan, _host$settings, _host$settings$invoic, _receiptTemplates$def, _receiptTemplates$def2, _receiptTemplates$alt, _receiptTemplates$alt2;

  var collective = _ref2.collective,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, _excluded);

  var _useLoggedInUser = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({}),
      fundDetails = _useState[0],
      setFundDetails = _useState[1];

  var _useToasts = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_38__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z)();

  var formatOptionLabel = function formatOptionLabel(option) {
    if (option.currency) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("span", {
        children: [(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_10__/* .formatCurrency */ .xG)(option.feeAmount, option.currency, {
          locale: intl.locale
        }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_37__/* .Span */ .Dr, {
          color: "black.500",
          children: ["(", option.percentage * 100, "%)"]
        })]
      });
    } else {
      return option.label;
    }
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      customAmount = _useState2[0],
      setCustomAmount = _useState2[1];

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_47__.useQuery)(addFundsAccountQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: collective.slug
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var account = data === null || data === void 0 ? void 0 : data.account;
  var currency = account === null || account === void 0 ? void 0 : account.currency;
  var host = account !== null && account !== void 0 && account.isHost ? account : account === null || account === void 0 ? void 0 : account.host;
  var options = react__WEBPACK_IMPORTED_MODULE_8__.useMemo(function () {
    return getOptions(fundDetails.fundAmount, currency, intl);
  }, [fundDetails.fundAmount, currency]);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(options[3]),
      selectedOption = _useState3[0],
      setSelectedOption = _useState3[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_47__.useMutation)(addFundsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T,
    refetchQueries: [{
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T,
      query: (0,_collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_17__/* .getBudgetSectionQuery */ .MR)(true, false, false),
      variables: (0,_collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_17__/* .getBudgetSectionQueryVariables */ .kr)(collective.slug, host === null || host === void 0 ? void 0 : host.slug, false)
    }, {
      query: _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_16__/* .collectivePageQuery */ .J,
      variables: (0,_collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_16__/* .getCollectivePageQueryVariables */ .L)(collective.slug)
    }],
    awaitRefetchQueries: true
  }),
      _useMutation2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation, 2),
      submitAddFunds = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      addFundsResponse = _useMutation2$.data,
      fundError = _useMutation2$.error;

  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_47__.useMutation)(addPlatformTipMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T
  }),
      _useMutation4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useMutation3, 2),
      addPlatformTip = _useMutation4[0],
      platformTipError = _useMutation4[1].error;

  var tiersNodes = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(data, 'account.tiers.nodes');

  var accountSettings = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(data, 'account.settings');

  var tiersOptions = react__WEBPACK_IMPORTED_MODULE_8__.useMemo(function () {
    return getTiersOptions(intl, tiersNodes, accountSettings);
  }, [tiersNodes, accountSettings]); // No modal if logged-out

  if (!LoggedInUser) {
    return null;
  } // From the Collective page we pass host and collective as API v1 objects
  // From the Host dashboard we pass host and collective as API v2 objects


  var canAddHostFee = (host === null || host === void 0 ? void 0 : (_host$plan = host.plan) === null || _host$plan === void 0 ? void 0 : _host$plan.hostFees) && collective.id !== (host === null || host === void 0 ? void 0 : host.id);
  var hostFeePercent = (account === null || account === void 0 ? void 0 : account.addedFundsHostFeePercent) || collective.hostFeePercent;
  var defaultHostFeePercent = canAddHostFee ? hostFeePercent : 0;
  var canAddPlatformTip = host === null || host === void 0 ? void 0 : host.isTrustedHost;
  var receiptTemplates = host === null || host === void 0 ? void 0 : (_host$settings = host.settings) === null || _host$settings === void 0 ? void 0 : (_host$settings$invoic = _host$settings.invoice) === null || _host$settings$invoic === void 0 ? void 0 : _host$settings$invoic.templates;
  var receiptTemplateTitles = [];

  if ((receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$def = receiptTemplates["default"]) === null || _receiptTemplates$def === void 0 ? void 0 : (_receiptTemplates$def2 = _receiptTemplates$def.title) === null || _receiptTemplates$def2 === void 0 ? void 0 : _receiptTemplates$def2.length) > 0) {
    var _receiptTemplates$def3;

    receiptTemplateTitles.push({
      value: 'default',
      label: receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$def3 = receiptTemplates["default"]) === null || _receiptTemplates$def3 === void 0 ? void 0 : _receiptTemplates$def3.title
    });
  }

  if ((receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$alt = receiptTemplates.alternative) === null || _receiptTemplates$alt === void 0 ? void 0 : (_receiptTemplates$alt2 = _receiptTemplates$alt.title) === null || _receiptTemplates$alt2 === void 0 ? void 0 : _receiptTemplates$alt2.length) > 0) {
    var _receiptTemplates$alt3;

    receiptTemplateTitles.push({
      value: 'alternative',
      label: receiptTemplates === null || receiptTemplates === void 0 ? void 0 : (_receiptTemplates$alt3 = receiptTemplates.alternative) === null || _receiptTemplates$alt3 === void 0 ? void 0 : _receiptTemplates$alt3.title
    });
  }

  var handleClose = function handleClose() {
    setFundDetails({
      showPlatformTipModal: false
    });
    setSelectedOption(options[3]);
    setCustomAmount(0);
    props.onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(AddFundsModalContainer, _objectSpread(_objectSpread({}, props), {}, {
    trapFocus: true,
    showPlatformTipModal: fundDetails.showPlatformTipModal,
    onClose: handleClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_34__/* .CollectiveModalHeader */ .I4, {
      collective: collective,
      onClick: handleClose
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
      mt: 2,
      height: 200
    }) : (0,_lib_policies__WEBPACK_IMPORTED_MODULE_48__/* .require2FAForAdmins */ .u)(host) && !LoggedInUser.hasTwoFactorAuth ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_39__/* .TwoFactorAuthRequiredMessage */ .l, {
      borderWidth: 0,
      noTitle: true
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Formik */ .J9, {
      initialValues: getInitialValues({
        hostFeePercent: defaultHostFeePercent,
        account: collective
      }),
      enableReinitialize: true,
      validate: validate,
      onSubmit: /*#__PURE__*/function () {
        var _ref3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(values, formik) {
          var _values$invoiceTempla, defaultInvoiceTemplate, result, resultOrder, creditTransaction;

          return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (fundDetails.showPlatformTipModal) {
                    _context.next = 10;
                    break;
                  }

                  defaultInvoiceTemplate = receiptTemplateTitles.length > 0 ? receiptTemplateTitles[0].value : null;
                  _context.next = 4;
                  return submitAddFunds({
                    variables: _objectSpread(_objectSpread({}, values), {}, {
                      amount: {
                        valueInCents: values.amount
                      },
                      platformTip: {
                        valueInCents: 0
                      },
                      fromAccount: buildAccountReference(values.fromAccount),
                      account: buildAccountReference(values.account),
                      tier: !values.tier ? null : {
                        id: values.tier.id
                      },
                      invoiceTemplate: ((_values$invoiceTempla = values.invoiceTemplate) === null || _values$invoiceTempla === void 0 ? void 0 : _values$invoiceTempla.value) || defaultInvoiceTemplate,
                      processedAt: values.processedAt ? new Date(values.processedAt) : null
                    })
                  });

                case 4:
                  result = _context.sent;
                  resultOrder = result.data.addFunds;
                  setFundDetails({
                    showPlatformTipModal: true,
                    fundAmount: values.amount,
                    description: resultOrder.description,
                    memo: resultOrder.memo,
                    processedAt: resultOrder.processedAt,
                    source: resultOrder.fromAccount,
                    tier: resultOrder.tier
                  });
                  /*
                   * Since `enableReinitialize` is used in this form, during the second step (platform tip step)
                   * the form values will be reset. The validate function in this form
                   * requires `amount`, `fromAccount` and `description` so we should
                   * set them as otherwise the form will not be submittable.
                   */

                  formik.setValues({
                    amount: values.amount,
                    fromAccount: resultOrder.fromAccount,
                    description: resultOrder.description,
                    processedAt: resultOrder.processedAt
                  });
                  _context.next = 19;
                  break;

                case 10:
                  if (!(selectedOption.value !== 0)) {
                    _context.next = 18;
                    break;
                  }

                  creditTransaction = addFundsResponse.addFunds.transactions.filter(function (transaction) {
                    return transaction.type === 'CREDIT';
                  })[0];
                  _context.next = 14;
                  return addPlatformTip({
                    variables: _objectSpread(_objectSpread({}, values), {}, {
                      amount: {
                        valueInCents: selectedOption.value !== 'CUSTOM' ? selectedOption.value : customAmount
                      },
                      transaction: {
                        id: creditTransaction.id
                      }
                    })
                  });

                case 14:
                  handleClose();
                  addToast({
                    type: _ToastProvider__WEBPACK_IMPORTED_MODULE_38__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
                    message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                      id: "AddFundsModal.Success",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Platform tip successfully added"
                      }]
                    })
                  });
                  _context.next = 19;
                  break;

                case 18:
                  handleClose();

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }(),
      children: function children(_ref4) {
        var values = _ref4.values,
            isSubmitting = _ref4.isSubmitting;
        var hostFeePercent = isNaN(values.hostFeePercent) ? defaultHostFeePercent : values.hostFeePercent;
        var hostFee = Math.round(values.amount * (hostFeePercent / 100));
        var defaultSources = [];
        defaultSources.push({
          value: host,
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_CollectivePicker__WEBPACK_IMPORTED_MODULE_18__/* .DefaultCollectiveLabel */ .Os, {
            value: host
          })
        });

        if ((host === null || host === void 0 ? void 0 : host.id) !== account.id) {
          defaultSources.push({
            value: account,
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_CollectivePicker__WEBPACK_IMPORTED_MODULE_18__/* .DefaultCollectiveLabel */ .Os, {
              value: account
            })
          });
        }

        if (!fundDetails.showPlatformTipModal) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Form */ .l0, {
            "data-cy": "add-funds-form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("h3", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                id: "AddFundsModal.SubHeading",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add Funds to the Collective"
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_34__/* .ModalBody */ .fe, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                name: "fromAccount",
                htmlFor: "addFunds-fromAccount",
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "AddFundsModal.source",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Source"
                  }]
                }),
                mt: 3,
                children: function children(_ref5) {
                  var form = _ref5.form,
                      field = _ref5.field;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    inputId: field.id,
                    "data-cy": "add-funds-source",
                    types: ['USER', 'ORGANIZATION'],
                    creatable: true,
                    error: field.error,
                    createCollectiveOptionalFields: ['location.address', 'location.country'],
                    onBlur: function onBlur() {
                      return form.setFieldTouched(field.name, true);
                    },
                    customOptions: defaultSources,
                    onChange: function onChange(_ref6) {
                      var value = _ref6.value;
                      return form.setFieldValue(field.name, value);
                    }
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                name: "tier",
                htmlFor: "addFunds-tier",
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "b07w+D",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Tier"
                  }]
                }),
                mt: 3,
                children: function children(_ref7) {
                  var form = _ref7.form,
                      field = _ref7.field;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .ZP, {
                    inputId: field.id,
                    "data-cy": "add-funds-tier",
                    error: field.error,
                    onBlur: function onBlur() {
                      return form.setFieldTouched(field.name, true);
                    },
                    onChange: function onChange(_ref8) {
                      var value = _ref8.value;
                      return form.setFieldValue(field.name, value);
                    },
                    isLoading: loading,
                    options: tiersOptions,
                    isSearchable: options.length > 10,
                    value: tiersOptions.find(function (option) {
                      var _option$value;

                      return !values.tier ? option.value === null : ((_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.id) === values.tier.id;
                    })
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                name: "description",
                htmlFor: "addFunds-description",
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "Fields.description",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Description"
                  }]
                }),
                mt: 3,
                children: function children(_ref9) {
                  var field = _ref9.field;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, _objectSpread({
                    "data-cy": "add-funds-description"
                  }, field));
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                name: "processedAt",
                htmlFor: "addFunds-processedAt",
                inputType: "date",
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "expense.incurredAt",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Date"
                    }]
                  }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                    content: function content() {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                        id: "mqg/wj",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Date the funds were received."
                        }]
                      });
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_49__/* .InfoCircle */ .Z, {
                      size: 16
                    })
                  })]
                }),
                mt: 3,
                children: function children(_ref10) {
                  var field = _ref10.field;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, _objectSpread({
                    "data-cy": "add-funds-processedAt"
                  }, field));
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                name: "memo",
                htmlFor: "addFunds-memo",
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "D5NqQO",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Memo"
                    }]
                  }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                    content: function content() {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                        id: "znqf9S",
                        defaultMessage: [{
                          "type": 0,
                          "value": "This is a private note that will only be visible to the host."
                        }]
                      });
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_49__/* .InfoCircle */ .Z, {
                      size: 16
                    })
                  })]
                }),
                required: false,
                mt: 3,
                children: function children(_ref11) {
                  var field = _ref11.field;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, _objectSpread({
                    "data-cy": "add-funds-memo"
                  }, field));
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                mt: 3,
                flexWrap: "wrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                  name: "amount",
                  htmlFor: "addFunds-amount",
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "Fields.amount",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Amount"
                    }]
                  }),
                  required: true,
                  flex: "1 1",
                  children: function children(_ref12) {
                    var form = _ref12.form,
                        field = _ref12.field;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                      id: field.id,
                      "data-cy": "add-funds-amount",
                      currency: currency,
                      placeholder: "0.00",
                      error: field.error,
                      value: field.value,
                      maxWidth: "100%",
                      onChange: function onChange(value) {
                        return form.setFieldValue(field.name, value);
                      },
                      onBlur: function onBlur() {
                        return form.setFieldTouched(field.name, true);
                      }
                    });
                  }
                }), canAddHostFee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                  name: "hostFeePercent",
                  htmlFor: "addFunds-hostFeePercent",
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("span", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                      id: "NJsELs",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Host Fee"
                      }]
                    }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                      content: function content() {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                          id: "AddFundsModal.hostFee.tooltip",
                          defaultMessage: [{
                            "type": 0,
                            "value": "The default host fee percentage is set up in your host settings. The host fee is charged by the fiscal host to the collectives for the financial services provided."
                          }]
                        });
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_49__/* .InfoCircle */ .Z, {
                        size: 16
                      })
                    })]
                  }),
                  ml: 3,
                  children: function children(_ref13) {
                    var form = _ref13.form,
                        field = _ref13.field;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledInputPercentage__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                      id: field.id,
                      placeholder: defaultHostFeePercent,
                      value: field.value,
                      error: field.error,
                      onChange: function onChange(value) {
                        return form.setFieldValue(field.name, value);
                      },
                      onBlur: function onBlur() {
                        return form.setFieldTouched(field.name, true);
                      }
                    });
                  }
                })]
              }), receiptTemplateTitles.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                width: "100%",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Field, {
                  name: "invoiceTemplate",
                  htmlFor: "addFunds-invoiceTemplate",
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "cyMx/0",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Choose receipt"
                    }]
                  }),
                  mt: 3,
                  children: function children(_ref14) {
                    var form = _ref14.form,
                        field = _ref14.field;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .ZP, {
                      id: field.id,
                      options: receiptTemplateTitles,
                      defaultValue: receiptTemplateTitles[0],
                      onChange: function onChange(value) {
                        return form.setFieldValue(field.name, value);
                      }
                    });
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_37__.P, {
                fontSize: "14px",
                lineHeight: "17px",
                fontWeight: "500",
                mt: 4,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "Details",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Details"
                  }]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                my: 2,
                borderColor: "black.300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(AmountDetailsLine, {
                value: values.amount || 0,
                currency: currency,
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "AddFundsModal.fundingAmount",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Funding amount"
                  }]
                })
              }), canAddHostFee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(AmountDetailsLine, {
                value: hostFee,
                currency: currency,
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "AddFundsModal.hostFees",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Host fee charged to collective ("
                  }, {
                    "type": 1,
                    "value": "hostFees"
                  }, {
                    "type": 0,
                    "value": ")"
                  }],
                  values: {
                    hostFees: "".concat(hostFeePercent, "%")
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                my: 2,
                borderColor: "black.300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(AmountDetailsLine, {
                value: values.amount - hostFee,
                currency: currency,
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "AddFundsModal.netAmount",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Net amount received by collective"
                  }]
                }),
                isLargeAmount: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_37__.P, {
                fontSize: "12px",
                lineHeight: "18px",
                color: "black.700",
                mt: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                  id: "AddFundsModal.disclaimer",
                  defaultMessage: [{
                    "type": 0,
                    "value": "By clicking add funds, you agree to set aside "
                  }, {
                    "type": 1,
                    "value": "amount"
                  }, {
                    "type": 0,
                    "value": " in your bank account on behalf of this collective."
                  }],
                  values: {
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_10__/* .formatCurrency */ .xG)(values.amount, currency, {
                      locale: intl.locale
                    })
                  }
                })
              }), fundError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                error: fundError,
                mt: 3,
                fontSize: "13px"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_34__/* .ModalFooter */ .mz, {
              isFullWidth: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                justifyContent: "center",
                flexWrap: "wrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                  type: "submit",
                  "data-cy": "add-funds-submit-btn",
                  buttonStyle: "primary",
                  mx: 2,
                  mb: 1,
                  minWidth: 120,
                  loading: isSubmitting,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "menu.addFunds",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Add Funds"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                  mx: 2,
                  mb: 1,
                  minWidth: 100,
                  onClick: handleClose,
                  type: "button",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "actions.cancel",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Cancel"
                    }]
                  })
                })]
              })
            })]
          });
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_9__/* .Form */ .l0, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_34__/* .ModalBody */ .fe, {
              "data-cy": "funds-added",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "AddFundsModal.FundsAdded",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Funds Added ✅"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                  pb: 2,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "AddFundsModal.YouAdded",
                    defaultMessage: [{
                      "type": 0,
                      "value": "You added:"
                    }]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("li", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("strong", {
                        children: "".concat(fundDetails.fundAmount / 100, " ").concat(currency)
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("li", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                        id: "AddFundsModal.FromTheSource",
                        defaultMessage: [{
                          "type": 0,
                          "value": "From the source"
                        }]
                      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("strong", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_LinkCollective__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                          collective: fundDetails.source
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("li", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                        id: "AddFundsModal.ForThePurpose",
                        defaultMessage: [{
                          "type": 0,
                          "value": "For the purpose of"
                        }]
                      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("strong", {
                        children: fundDetails.description
                      })]
                    }), fundDetails.memo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("li", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                        id: "D5NqQO",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Memo"
                        }]
                      }), ': ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("strong", {
                        children: fundDetails.memo
                      })]
                    }), fundDetails.processedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("li", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_37__/* .Span */ .Dr, {
                        textTransform: "capitalize",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                          id: "processedAt",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Fund received date"
                          }]
                        })
                      }), ': ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("strong", {
                        children: intl.formatDate(fundDetails.processedAt, {
                          timeZone: 'UTC'
                        })
                      })]
                    }), fundDetails.tier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("li", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                        id: "h+1vQB",
                        defaultMessage: [{
                          "type": 0,
                          "value": "For the tier"
                        }]
                      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                        as: _Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                        openInNewTab: true,
                        href: "".concat((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_14__/* .getCollectivePageRoute */ .x0)(collective), "/contribute/").concat(fundDetails.tier.slug, "-").concat(fundDetails.tier.legacyId),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("strong", {
                          children: fundDetails.tier.name
                        })
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                  pb: 2,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "AddFundsModal.NeedHelp",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Need Help?"
                    }]
                  }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledLink__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                    href: "/support",
                    buttonStyle: "standard",
                    buttonSize: "tiny",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                      id: "error.contactSupport",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Contact support"
                      }]
                    })
                  })]
                })]
              }), canAddPlatformTip && hostFee === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledHr__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                  my: 3,
                  borderColor: "black.300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_37__.P, {
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "black.900",
                    my: 32,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                      id: "AddFundsModal.platformTipInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Since you are not charging a host fee to the collective, Open Collective is free to use. We rely on your generosity to keep this possible!"
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                    justifyContent: "space-between",
                    flexWrap: ['wrap', 'nowrap'],
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(Illustration, {
                        alt: ""
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_37__.P, {
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "18px",
                        color: "black.900",
                        mx: 10,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                          id: "AddFundsModal.thankYou",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Thank you for supporting us. Platform tip will be deducted from the host budget:"
                          }]
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .ZP, {
                      "aria-label": "Donation percentage",
                      "data-cy": "donation-percentage",
                      width: "100%",
                      maxWidth: ['100%', 190],
                      mt: [2, 0],
                      isSearchable: false,
                      fontSize: "15px",
                      options: options,
                      onChange: setSelectedOption,
                      formatOptionLabel: formatOptionLabel,
                      value: selectedOption
                    })]
                  }), selectedOption.value === 'CUSTOM' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                    justifyContent: "flex-end",
                    mt: 2,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                      id: "platformTip",
                      currency: currency,
                      onChange: function onChange(amount) {
                        return setCustomAmount(amount);
                      },
                      defaultValue: options[1].value
                    })
                  })]
                }), platformTipError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  error: platformTipError,
                  mt: 3,
                  fontSize: "13px"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledModal__WEBPACK_IMPORTED_MODULE_34__/* .ModalFooter */ .mz, {
              isFullWidth: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                justifyContent: "center",
                flexWrap: "wrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                  type: "submit",
                  "data-cy": "add-platform-tip-btn",
                  buttonStyle: "primary",
                  mx: 2,
                  mb: 1,
                  minWidth: 120,
                  loading: isSubmitting,
                  children: selectedOption.value !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "AddFundsModal.tipAndFinish",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Tip and Finish"
                    }]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "Finish",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Finish"
                    }]
                  })
                }), !fundDetails.showPlatformTipModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                  mx: 2,
                  mb: 1,
                  minWidth: 100,
                  onClick: handleClose,
                  type: "button",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                    id: "actions.cancel",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Cancel"
                    }]
                  })
                })]
              })
            })]
          });
        }
      }
    })]
  }));
};

AddFundsModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddFundsModal",
  "props": {
    "collective": {
      "description": "",
      "type": {
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
          "hostFeePercent": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "policies": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    },
    "onClose": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (AddFundsModal);

/***/ }),

/***/ 12173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * Set color to `#00cdff` to use the default Transferwise color.
 */



var TransferwiseIcon = function TransferwiseIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    size: "64",
    viewBox: "-0.753 -0.753 9.424 9.407"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
      d: "M.7-.76l1.475 2.47L-.42 4.176h4.47l.42-.988H2.004l1.493-1.484L2.625.227h4.068L3.12 8.662h1.224L8.338-.76H.7",
      fill: "currentColor",
      strokeWidth: "0.25"
    })
  }));
};

TransferwiseIcon.__docgenInfo = {
  "description": "Set color to `#00cdff` to use the default Transferwise color.",
  "methods": [],
  "displayName": "TransferwiseIcon"
};
/* harmony default export */ __webpack_exports__["Z"] = (TransferwiseIcon);

/***/ }),

/***/ 58689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52015);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87268);


var OCFPrimaryButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
  displayName: "OCFPrimaryButton",
  componentId: "sc-le1nn-0"
})(["background:linear-gradient(180deg,#4f7d7f 0%,#396c6f 100%);border-color:transparent;color:#ffffff;&:focus{border:solid 2px #90f0bd;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:active{background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:hover{border-color:transparent;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}"]);
/* harmony default export */ __webpack_exports__["Z"] = (OCFPrimaryButton);

/***/ }),

/***/ 89434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ transactions_TransactionItem; },
  "r": function() { return /* binding */ getDisplayedAmount; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(39138);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ChevronDown/ChevronDown.esm.js
var ChevronDown_esm = __webpack_require__(10090);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/ChevronUp/ChevronUp.esm.js
var ChevronUp_esm = __webpack_require__(21185);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/MessageSquare/MessageSquare.esm.js
var MessageSquare_esm = __webpack_require__(82818);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/expense-status.ts
var expense_status = __webpack_require__(38083);
// EXTERNAL MODULE: ./lib/constants/order-status.js
var order_status = __webpack_require__(24317);
// EXTERNAL MODULE: ./lib/constants/transactions.js
var transactions = __webpack_require__(33054);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/hooks/useLoggedInUser.ts
var useLoggedInUser = __webpack_require__(62131);
// EXTERNAL MODULE: ./lib/i18n/transaction.js
var i18n_transaction = __webpack_require__(3025);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/budget/DebitCreditList.js
var DebitCreditList = __webpack_require__(99962);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/DateTime.js
var DateTime = __webpack_require__(95370);
// EXTERNAL MODULE: ./components/DefinedTerm.js
var DefinedTerm = __webpack_require__(78317);
// EXTERNAL MODULE: ./components/expenses/ExpenseStatusTag.js
var ExpenseStatusTag = __webpack_require__(66300);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/icons/PrivateInfoIcon.js
var PrivateInfoIcon = __webpack_require__(40777);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/StyledTag.js
var StyledTag = __webpack_require__(36422);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/Tags.js
var Tags = __webpack_require__(14540);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/TransactionSign.js
var TransactionSign = __webpack_require__(47924);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./lib/i18n/order-status.js
var i18n_order_status = __webpack_require__(732);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/TransactionStatusTag.js


var _excluded = ["transaction"];

var _defineMessages;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var getTransactionStatusMsgType = function getTransactionStatusMsgType(transaction) {
  var _transaction$order, _transaction$order2;

  if (transaction.isRefund) {
    return 'success';
  }

  if (transaction.isOrderRejected && transaction.isRefunded) {
    return 'error';
  }

  if (transaction.isRefunded || ((_transaction$order = transaction.order) === null || _transaction$order === void 0 ? void 0 : _transaction$order.status) === order_status/* ORDER_STATUS.PROCESSING */.D.PROCESSING) {
    return 'grey';
  }

  if (((_transaction$order2 = transaction.order) === null || _transaction$order2 === void 0 ? void 0 : _transaction$order2.status) === order_status/* ORDER_STATUS.PENDING */.D.PENDING) {
    return 'warning';
  }

  return 'success';
};

var msg = (0,lib.defineMessages)({
  completed: {
    id: "Order.Status.Completed",
    defaultMessage: [{
      "type": 0,
      "value": "Completed"
    }]
  },
  refunded: {
    id: "Order.Status.Refunded",
    defaultMessage: [{
      "type": 0,
      "value": "Refunded"
    }]
  },
  rejected: {
    id: "expense.rejected",
    defaultMessage: [{
      "type": 0,
      "value": "Rejected"
    }]
  }
});

var formatStatus = function formatStatus(intl, transaction) {
  var _transaction$order3;

  if (transaction.isRefund) {
    return intl.formatMessage(msg.completed);
  } else if (transaction.isOrderRejected && transaction.isRefunded) {
    return intl.formatMessage(msg.rejected);
  } else if (transaction.isRefunded) {
    return intl.formatMessage(msg.refunded);
  } else if ([order_status/* ORDER_STATUS.PROCESSING */.D.PROCESSING, order_status/* ORDER_STATUS.PENDING */.D.PENDING].includes((_transaction$order3 = transaction.order) === null || _transaction$order3 === void 0 ? void 0 : _transaction$order3.status)) {
    return (0,i18n_order_status/* default */.Z)(intl, transaction.order.status);
  } else {
    return intl.formatMessage(msg.completed);
  }
};

var tooltipMessages = (0,lib.defineMessages)((_defineMessages = {}, defineProperty_default()(_defineMessages, order_status/* ORDER_STATUS.PENDING */.D.PENDING, {
  id: "Order.Status.Pending",
  defaultMessage: [{
    "type": 0,
    "value": "Please follow the payment instructions in the confirmation email to complete your transaction."
  }]
}), defineProperty_default()(_defineMessages, order_status/* ORDER_STATUS.PROCESSING */.D.PROCESSING, {
  id: "Order.Status.Processing",
  defaultMessage: [{
    "type": 0,
    "value": "We're waiting for a third-party service to confirm the transaction was completed."
  }]
}), _defineMessages));

var TransactionStatusTag = function TransactionStatusTag(_ref) {
  var _transaction$order4;

  var transaction = _ref.transaction,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var intl = (0,useIntl/* default */.Z)();

  var tag = /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTag/* default */.Z, _objectSpread(_objectSpread({
    type: getTransactionStatusMsgType(transaction),
    fontWeight: "600",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    "data-cy": "expense-status-msg"
  }, props), {}, {
    children: formatStatus(intl, transaction)
  }));

  if ([order_status/* ORDER_STATUS.PROCESSING */.D.PROCESSING, order_status/* ORDER_STATUS.PENDING */.D.PENDING].includes((_transaction$order4 = transaction.order) === null || _transaction$order4 === void 0 ? void 0 : _transaction$order4.status)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: function content() {
        return intl.formatMessage(tooltipMessages[transaction.order.status], I18nFormatters/* default */.ZP);
      },
      children: tag
    });
  }

  return tag;
};

TransactionStatusTag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionStatusTag",
  "props": {
    "isRefund": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isRefunded": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isOrderRejected": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isProcessingOrPending": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "transaction": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": false
          },
          "isRefund": {
            "name": "bool",
            "required": false
          },
          "isRefunded": {
            "name": "bool",
            "required": false
          },
          "isOrderRejected": {
            "name": "bool",
            "required": false
          },
          "isProcessingOrPending": {
            "name": "bool",
            "required": false
          },
          "order": {
            "name": "shape",
            "value": {
              "status": {
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
/* harmony default export */ var components_TransactionStatusTag = (TransactionStatusTag);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js
var InfoCircle_esm = __webpack_require__(95612);
// EXTERNAL MODULE: ./node_modules/@styled-icons/feather/Info/Info.esm.js
var Info_esm = __webpack_require__(85236);
// EXTERNAL MODULE: ./lib/hooks/useAsyncCall.js
var useAsyncCall = __webpack_require__(46233);
// EXTERNAL MODULE: ./lib/transactions.js
var lib_transactions = __webpack_require__(5949);
// EXTERNAL MODULE: ./components/expenses/PayoutMethodTypeWithIcon.js
var PayoutMethodTypeWithIcon = __webpack_require__(9215);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/PaymentMethodTypeWithIcon.js
var PaymentMethodTypeWithIcon = __webpack_require__(10506);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var graphql_tag_lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/Undo/Undo.esm.js
var Undo_esm = __webpack_require__(29861);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/ConfirmationModal.js
var ConfirmationModal = __webpack_require__(47988);
// EXTERNAL MODULE: ./components/MessageBoxGraphqlError.js
var MessageBoxGraphqlError = __webpack_require__(68185);
;// CONCATENATED MODULE: ./components/transactions/TransactionRefundButton.js




var _templateObject;













var refundTransactionMutation = (0,graphql_tag_lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation RefundTransaction($transaction: TransactionReferenceInput!) {\n    refundTransaction(transaction: $transaction) {\n      id\n    }\n  }\n"])));

var TransactionRefundButton = function TransactionRefundButton(props) {
  var _useMutation = (0,client.useMutation)(refundTransactionMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      refundTransaction = _useMutation2[0];

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isEnabled = _React$useState2[0],
      setEnabled = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var handleRefundTransaction = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return refundTransaction({
                variables: {
                  transaction: {
                    id: props.id
                  }
                }
              });

            case 3:
              _context.next = 9;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);
              return _context.abrupt("return");

            case 9:
              props === null || props === void 0 ? void 0 : props.onMutationSuccess();
              setEnabled(false);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function handleRefundTransaction() {
      return _ref.apply(this, arguments);
    };
  }();

  var closeModal = function closeModal() {
    setEnabled(false);
    setError(null);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexDirection: "column",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
        buttonSize: "small",
        buttonStyle: "secondary",
        minWidth: 140,
        background: "transparent",
        textTransform: "capitalize",
        onClick: function onClick() {
          return setEnabled(true);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "space-evenly",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Undo_esm/* Undo */.W, {
            size: 16
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "transaction.refund.btn",
            defaultMessage: [{
              "type": 0,
              "value": "refund"
            }]
          })]
        })
      }), isEnabled && /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.Z, {
        onClose: closeModal,
        header: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "Refund",
          defaultMessage: [{
            "type": 0,
            "value": "Refund"
          }]
        }),
        body: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "transaction.refund.info",
              defaultMessage: [{
                "type": 0,
                "value": "The contributor will be refunded the full amount."
              }]
            })
          }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBoxGraphqlError/* default */.Z, {
            mt: "12px",
            error: error
          })]
        }),
        continueLabel: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "space-evenly",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Undo_esm/* Undo */.W, {
            size: 16
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "Refund",
            defaultMessage: [{
              "type": 0,
              "value": "Refund"
            }]
          })]
        }),
        continueHandler: handleRefundTransaction
      })]
    })
  });
};

TransactionRefundButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionRefundButton",
  "props": {
    "id": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onMutationSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var transactions_TransactionRefundButton = (TransactionRefundButton);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/MinusCircle/MinusCircle.esm.js
var MinusCircle_esm = __webpack_require__(64604);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledTextarea.js
var StyledTextarea = __webpack_require__(93150);
;// CONCATENATED MODULE: ./components/transactions/TransactionRejectMessageForm.js


function TransactionRejectMessageForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TransactionRejectMessageForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TransactionRejectMessageForm_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TransactionRejectMessageForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var MESSAGE_MAX_LENGTH = 500;
var messages = (0,lib.defineMessages)({
  rejectionReason: {
    id: "RejectionReason",
    defaultMessage: [{
      "type": 0,
      "value": "Type your rejection reason here if you want."
    }]
  }
});

var TransactionRejectMessageForm = function TransactionRejectMessageForm(_ref) {
  var message = _ref.message,
      onChange = _ref.onChange;
  var intl = (0,useIntl/* default */.Z)();

  var dispatchChange = function dispatchChange(e) {
    onChange(e.target.value);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
      autoFocus: true,
      name: "rejectionMessage",
      htmlFor: "rejectionMessage",
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "Contact.Message",
        defaultMessage: [{
          "type": 0,
          "value": "Message"
        }]
      }),
      required: false,
      my: 3,
      children: function children(inputProps) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea/* default */.Z, TransactionRejectMessageForm_objectSpread(TransactionRejectMessageForm_objectSpread({}, inputProps), {}, {
          resize: "none",
          maxLength: MESSAGE_MAX_LENGTH,
          minWidth: [290, 500],
          minHeight: 100,
          fontSize: "14px",
          width: "100%",
          placeholder: intl.formatMessage(messages.rejectionReason),
          value: message,
          onChange: dispatchChange
        }));
      }
    })
  });
};

TransactionRejectMessageForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionRejectMessageForm",
  "props": {
    "message": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var transactions_TransactionRejectMessageForm = (TransactionRejectMessageForm);
;// CONCATENATED MODULE: ./components/transactions/TransactionRejectButton.js




var TransactionRejectButton_templateObject;


















var tooltipContent = function tooltipContent() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontSize: "12px",
      lineHeight: "18px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "transaction.reject.info",
        defaultMessage: [{
          "type": 0,
          "value": "Only reject if you want to remove the contributor from your Collective. This will refund their transaction, remove them from your Collective, and display the contribution as 'rejected'."
        }]
      })
    })
  });
};

var rejectTransactionMutation = (0,graphql_tag_lib/* default */.ZP)(TransactionRejectButton_templateObject || (TransactionRejectButton_templateObject = taggedTemplateLiteral_default()(["\n  mutation RejectTransaction($transaction: TransactionReferenceInput!, $message: String) {\n    rejectTransaction(transaction: $transaction, message: $message) {\n      id\n    }\n  }\n"])));

var TransactionRejectButton = function TransactionRejectButton(props) {
  var _useMutation = (0,client.useMutation)(rejectTransactionMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      rejectTransaction = _useMutation2[0],
      mutationError = _useMutation2[1].error;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isEnabled = _React$useState2[0],
      setEnabled = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = react.useState(''),
      _React$useState6 = slicedToArray_default()(_React$useState5, 2),
      message = _React$useState6[0],
      setMessage = _React$useState6[1];

  react.useEffect(function () {
    setError(mutationError);
  }, [mutationError]);

  var handleRejectTransaction = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return rejectTransaction({
                variables: {
                  transaction: {
                    id: props.id
                  },
                  message: message
                }
              });

            case 2:
              props.onMutationSuccess();
              setEnabled(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRejectTransaction() {
      return _ref.apply(this, arguments);
    };
  }();

  var closeModal = function closeModal() {
    setEnabled(false);
    setError(null);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
    flexDirection: "column",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
        content: tooltipContent,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          buttonSize: "small",
          buttonStyle: "dangerSecondary",
          minWidth: 140,
          background: "transparent",
          textTransform: "capitalize",
          onClick: function onClick() {
            return setEnabled(true);
          },
          ml: props.canRefund ? 2 : 0,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            justifyContent: "space-evenly",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MinusCircle_esm/* MinusCircle */.S, {
              size: 16
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "actions.reject",
              defaultMessage: [{
                "type": 0,
                "value": "Reject"
              }]
            })]
          })
        })
      }), isEnabled && /*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.Z, {
        onClose: closeModal,
        header: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "RejectContribution",
          defaultMessage: [{
            "type": 0,
            "value": "Reject and refund"
          }]
        }),
        body: /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(MessageBox/* default */.Z, {
              type: "warning",
              mx: 2,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "transaction.reject.info",
                defaultMessage: [{
                  "type": 0,
                  "value": "Only reject if you want to remove the contributor from your Collective. This will refund their transaction, remove them from your Collective, and display the contribution as 'rejected'."
                }]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), props.canRefund ? /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "transaction.reject.info.canRefund",
                defaultMessage: [{
                  "type": 0,
                  "value": "If you are only trying to refund a mistaken transaction, please use the 'Refund' button instead."
                }]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "transaction.reject.info.cannotRefund",
                defaultMessage: [{
                  "type": 0,
                  "value": "Please only use this option if you do not wish for this contributor to be a part of your Collective. This will remove them from your Collective."
                }]
              })]
            }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBoxGraphqlError/* default */.Z, {
              mt: "12px",
              error: error
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(transactions_TransactionRejectMessageForm, {
              message: message,
              onChange: function onChange(message) {
                return setMessage(message);
              }
            })]
          })
        }),
        continueLabel: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          alignItems: "center",
          justifyContent: "space-evenly",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MinusCircle_esm/* MinusCircle */.S, {
            size: 16
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "transaction.reject.yes.btn",
            defaultMessage: [{
              "type": 0,
              "value": "Yes, reject"
            }]
          })]
        }),
        continueHandler: handleRejectTransaction,
        isDanger: true
      })]
    })
  });
};

TransactionRejectButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionRejectButton",
  "props": {
    "id": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "canRefund": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onMutationSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var transactions_TransactionRejectButton = (TransactionRejectButton);
;// CONCATENATED MODULE: ./components/transactions/TransactionDetails.js
























var rejectAndRefundTooltipContent = function rejectAndRefundTooltipContent(showRefundHelp, showRejectHelp) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
    children: [showRefundHelp && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontSize: "12px",
      lineHeight: "18px",
      mb: showRejectHelp ? 3 : 0,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "transaction.refund.helpText",
        defaultMessage: [{
          "type": 8,
          "value": "bold",
          "children": [{
            "type": 0,
            "value": "Refund:"
          }]
        }, {
          "type": 0,
          "value": " This action will reimburse the full amount back to your contributor. They can contribute again in the future."
        }],
        values: {
          bold: I18nFormatters/* I18nBold */.Gl
        }
      })
    }), showRejectHelp && /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      fontSize: "12px",
      lineHeight: "18px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "transaction.reject.helpText",
        defaultMessage: [{
          "type": 8,
          "value": "bold",
          "children": [{
            "type": 0,
            "value": "Reject:"
          }]
        }, {
          "type": 0,
          "value": " This action prevents the contributor from contributing in the future and will reimburse the full amount back to them."
        }],
        values: {
          bold: I18nFormatters/* I18nBold */.Gl
        }
      })
    })]
  });
}; // Check whether transfer is child collective to parent or if the transfer is from host to one of its collectives


var isInternalTransfer = function isInternalTransfer(fromAccount, toAccount) {
  var _fromAccount$parent, _toAccount$host;

  return ((_fromAccount$parent = fromAccount.parent) === null || _fromAccount$parent === void 0 ? void 0 : _fromAccount$parent.id) === toAccount.id || fromAccount.id === ((_toAccount$host = toAccount.host) === null || _toAccount$host === void 0 ? void 0 : _toAccount$host.id);
};

var DetailTitle = styled_components_browser_esm/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "TransactionDetails__DetailTitle",
  componentId: "sc-1cmnh82-0"
})(["margin:8px 8px 4px 8px;color:#76777a;font-weight:500;letter-spacing:0.6px;text-transform:uppercase;font-weight:bold;font-size:11px;"]);
var DetailDescription = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "TransactionDetails__DetailDescription",
  componentId: "sc-1cmnh82-1"
})(["margin:0 8px 12px 8px;font-size:12px;color:#4e5052;letter-spacing:-0.04px;"]);
var DetailsContainer = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Flex */.kC).withConfig({
  displayName: "TransactionDetails__DetailsContainer",
  componentId: "sc-1cmnh82-2"
})(["background:#f7f8fa;font-size:12px;padding:16px 24px;", " @media (max-width:40em){padding:8px;}"], function (props) {
  return props.isCompact && (0,styled_components_browser_esm/* css */.iv)(["padding:16px 24px 16px 24px;"]);
});

var TransactionDetails = function TransactionDetails(_ref) {
  var _transaction$relatedT, _transaction$relatedT2;

  var displayActions = _ref.displayActions,
      transaction = _ref.transaction,
      onMutationSuccess = _ref.onMutationSuccess;
  var intl = (0,useIntl/* default */.Z)();

  var _useAsyncCall = (0,useAsyncCall/* useAsyncCall */.N)(lib_transactions/* saveInvoice */.US, {
    useErrorToast: true
  }),
      loadingInvoice = _useAsyncCall.loading,
      downloadInvoiceWith = _useAsyncCall.callWith;

  var id = transaction.id,
      type = transaction.type,
      isRefunded = transaction.isRefunded,
      isRefund = transaction.isRefund,
      toAccount = transaction.toAccount,
      fromAccount = transaction.fromAccount,
      host = transaction.host,
      uuid = transaction.uuid,
      platformFee = transaction.platformFee,
      hostFee = transaction.hostFee,
      paymentMethod = transaction.paymentMethod,
      paymentProcessorFee = transaction.paymentProcessorFee,
      payoutMethod = transaction.payoutMethod,
      amount = transaction.amount,
      netAmount = transaction.netAmount,
      permissions = transaction.permissions,
      order = transaction.order,
      expense = transaction.expense,
      isOrderRejected = transaction.isOrderRejected,
      kind = transaction.kind;
  var isCredit = type === transactions/* TransactionTypes.CREDIT */.em.CREDIT;
  var hasOrder = order !== null; // permissions

  var showRefundButton = (permissions === null || permissions === void 0 ? void 0 : permissions.canRefund) && !isRefunded;
  var showRejectButton = (permissions === null || permissions === void 0 ? void 0 : permissions.canReject) && !isOrderRejected;
  var showDownloadInvoiceButton = (permissions === null || permissions === void 0 ? void 0 : permissions.canDownloadInvoice) && !isInternalTransfer(fromAccount, toAccount);
  var hostFeeTransaction = (_transaction$relatedT = transaction.relatedTransactions) === null || _transaction$relatedT === void 0 ? void 0 : _transaction$relatedT.find(function (t) {
    return t.kind === transactions/* TransactionKind.HOST_FEE */.wz.HOST_FEE && t.type === transactions/* TransactionTypes.CREDIT */.em.CREDIT;
  });
  var paymentProcessorCover = (_transaction$relatedT2 = transaction.relatedTransactions) === null || _transaction$relatedT2 === void 0 ? void 0 : _transaction$relatedT2.find(function (t) {
    return t.kind === transactions/* TransactionKind.PAYMENT_PROCESSOR_COVER */.wz.PAYMENT_PROCESSOR_COVER && t.type === transactions/* TransactionTypes.CREDIT */.em.CREDIT;
  });
  var isProcessing = [order_status/* ORDER_STATUS.PROCESSING */.D.PROCESSING, order_status/* ORDER_STATUS.PENDING */.D.PENDING].includes(order === null || order === void 0 ? void 0 : order.status);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(DetailsContainer, {
    flexWrap: "wrap",
    alignItems: "flex-start",
    children: [!isProcessing && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      width: [1, 0.35],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailTitle, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "transaction.details",
          defaultMessage: [{
            "type": 0,
            "value": "transaction details"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DetailDescription, {
        children: [(0,lib_transactions/* renderDetailsString */.rX)({
          amount: amount,
          platformFee: platformFee,
          hostFee: hostFee,
          paymentProcessorFee: paymentProcessorFee,
          netAmount: netAmount,
          isCredit: isCredit,
          isRefunded: isRefunded,
          hasOrder: hasOrder,
          toAccount: toAccount,
          fromAccount: fromAccount,
          taxAmount: transaction.taxAmount,
          taxInfo: transaction.taxInfo,
          intl: intl,
          kind: kind,
          expense: expense,
          isRefund: isRefund,
          paymentProcessorCover: paymentProcessorCover
        }), ['CONTRIBUTION', 'ADDED_FUNDS', 'EXPENSE'].includes(transaction.kind) && hostFeeTransaction && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "TransactionDetails.HostFee",
            defaultMessage: [{
              "type": 0,
              "value": "This transaction includes "
            }, {
              "type": 1,
              "value": "amount"
            }, {
              "type": 0,
              "value": " host fees"
            }],
            values: {
              amount: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
                amount: hostFeeTransaction.netAmount.valueInCents,
                currency: hostFeeTransaction.netAmount.currency,
                showCurrencyCode: false,
                amountStyles: null
              })
            }
          })]
        })]
      }), (order === null || order === void 0 ? void 0 : order.memo) && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailTitle, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "D5NqQO",
            defaultMessage: [{
              "type": 0,
              "value": "Memo"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(DetailDescription, {
          children: order.memo
        })]
      }), (order === null || order === void 0 ? void 0 : order.processedAt) && (transaction.kind === transactions/* TransactionKind.ADDED_FUNDS */.wz.ADDED_FUNDS || !paymentMethod && transaction.kind === transactions/* TransactionKind.CONTRIBUTION */.wz.CONTRIBUTION) && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailTitle, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "expense.incurredAt",
              defaultMessage: [{
                "type": 0,
                "value": "Date"
              }]
            }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
              content: function content() {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                  id: "mqg/wj",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Date the funds were received."
                  }]
                });
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircle_esm/* InfoCircle */.Z, {
                size: 13
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(DetailDescription, {
          children: intl.formatDate(order.processedAt, {
            dateStyle: 'long',
            timeZone: 'UTC'
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexDirection: "column",
      width: [1, 0.35],
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        children: [(host || paymentMethod) && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [host && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailTitle, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "Fiscalhost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(DetailDescription, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                as: LinkCollective/* default */.Z,
                collective: host
              })
            })]
          }), paymentMethod && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailTitle, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "PaidWith",
                defaultMessage: [{
                  "type": 0,
                  "value": "Paid With"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(DetailDescription, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(PaymentMethodTypeWithIcon/* default */.Z, {
                type: paymentMethod.type,
                fontSize: 11,
                iconSize: 16
              })
            })]
          })]
        }), payoutMethod && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DetailTitle, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "PaidWith",
              defaultMessage: [{
                "type": 0,
                "value": "Paid With"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DetailDescription, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(PayoutMethodTypeWithIcon/* default */.Z, {
              type: payoutMethod.type,
              color: 'inherit',
              fontWeight: 'inherit',
              fontSize: 'inherit',
              iconSize: 16
            })
          })]
        })]
      })
    }), displayActions &&
    /*#__PURE__*/
    // Let us overide so we can hide buttons in the collective page
    (0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      flexDirection: "column",
      width: [1, 0.3],
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexWrap: "wrap",
        justifyContent: ['flex-start', 'flex-end'],
        alignItems: "center",
        mt: [2, 0],
        children: [(showRefundButton || showRejectButton) && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
          content: rejectAndRefundTooltipContent(showRefundButton, showRejectButton),
          mt: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mx: 2,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Info_esm/* Info */.k, {
              color: "#1869F5",
              size: 20
            })
          })
        }), showRefundButton && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          mb: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(transactions_TransactionRefundButton, {
            id: id,
            onMutationSuccess: onMutationSuccess
          })
        }), showRejectButton && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          mb: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(transactions_TransactionRejectButton, {
            id: id,
            canRefund: (permissions === null || permissions === void 0 ? void 0 : permissions.canRefund) && !isRefunded,
            onMutationSuccess: onMutationSuccess
          })
        }), showDownloadInvoiceButton && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
          buttonSize: "small",
          loading: loadingInvoice,
          onClick: downloadInvoiceWith({
            transactionUuid: uuid,
            toCollectiveSlug: toAccount.slug
          }),
          minWidth: 140,
          background: "transparent",
          textTransform: "capitalize",
          ml: 2,
          mb: 2,
          px: "unset",
          children: [expense && /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "DownloadInvoice",
            defaultMessage: [{
              "type": 0,
              "value": "Download invoice"
            }]
          }), order && /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "DownloadReceipt",
            defaultMessage: [{
              "type": 0,
              "value": "Download receipt"
            }]
          })]
        })]
      })
    })]
  });
};

TransactionDetails.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionDetails",
  "props": {
    "displayActions": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "transaction": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "isRefunded": {
            "name": "bool",
            "required": false
          },
          "isRefund": {
            "name": "bool",
            "required": false
          },
          "kind": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(TransactionKind)",
            "required": false
          },
          "isOrderRejected": {
            "name": "bool",
            "required": false
          },
          "fromAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": true
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "toAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "order": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "status": {
                "name": "string",
                "required": false
              },
              "memo": {
                "name": "string",
                "required": false
              },
              "processedAt": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "expense": {
            "name": "object",
            "required": false
          },
          "id": {
            "name": "string",
            "required": false
          },
          "uuid": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "taxAmount": {
            "name": "object",
            "required": false
          },
          "taxInfo": {
            "name": "object",
            "required": false
          },
          "paymentMethod": {
            "name": "shape",
            "value": {
              "type": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "payoutMethod": {
            "name": "shape",
            "value": {
              "type": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "amount": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "netAmount": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "platformFee": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "paymentProcessorFee": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "hostFee": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "permissions": {
            "name": "shape",
            "value": {
              "canRefund": {
                "name": "bool",
                "required": false
              },
              "canDownloadInvoice": {
                "name": "bool",
                "required": false
              },
              "canReject": {
                "name": "bool",
                "required": false
              }
            },
            "required": false
          },
          "usingGiftCardFromCollective": {
            "name": "object",
            "required": false
          },
          "relatedTransactions": {
            "name": "array",
            "required": false
          }
        }
      },
      "required": false
    },
    "isHostAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isRoot": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isToCollectiveAdmin": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onMutationSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var transactions_TransactionDetails = (TransactionDetails);
;// CONCATENATED MODULE: ./components/transactions/TransactionItem.js





































var CONTRIBUTION = transactions/* TransactionKind.CONTRIBUTION */.wz.CONTRIBUTION,
    ADDED_FUNDS = transactions/* TransactionKind.ADDED_FUNDS */.wz.ADDED_FUNDS,
    PLATFORM_TIP = transactions/* TransactionKind.PLATFORM_TIP */.wz.PLATFORM_TIP;
/** To separate individual information below description */

var INFO_SEPARATOR = ' • ';
var getDisplayedAmount = function getDisplayedAmount(transaction, collective) {
  var _transaction$order;

  var isCredit = transaction.type === transactions/* TransactionTypes.CREDIT */.em.CREDIT;
  var hasOrder = transaction.order !== null;
  var isExpense = transaction.kind === transactions/* TransactionKind.EXPENSE */.wz.EXPENSE;
  var isSelf = transaction.fromAccount.slug === collective.slug;
  var isProcessingOrPending = hasOrder && [order_status/* ORDER_STATUS.PROCESSING */.D.PROCESSING, order_status/* ORDER_STATUS.PENDING */.D.PENDING].includes((_transaction$order = transaction.order) === null || _transaction$order === void 0 ? void 0 : _transaction$order.status);

  if (isExpense) {
    return transaction.netAmount;
  } else if (isProcessingOrPending) {
    return transaction.amount;
  } else if (isCredit && hasOrder) {
    // Credit from donations should display the full amount donated by the user
    return transaction.amount;
  } else if (transaction.isRefunded) {
    if (isSelf && !transaction.isRefund || transaction.isRefund && isCredit) {
      return transaction.netAmount;
    } else {
      return transaction.amount;
    }
  } else {
    return transaction.netAmount;
  }
};

var ItemTitleWrapper = function ItemTitleWrapper(_ref) {
  var expense = _ref.expense,
      order = _ref.order,
      children = _ref.children;

  if (expense) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "Expense.GoToPage",
        defaultMessage: [{
          "type": 0,
          "value": "Go to expense page"
        }]
      }),
      delayHide: 0,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        as: Link/* default */.Z,
        underlineOnHover: true,
        href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(expense.account), "/expenses/").concat(expense.legacyId),
        children: children
      })
    });
  } else if (order) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
        id: "Contribution.GoToPage",
        defaultMessage: [{
          "type": 0,
          "value": "Go to contribution page"
        }]
      }),
      delayHide: 0,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        as: Link/* default */.Z,
        underlineOnHover: true,
        href: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(order.toAccount), "/orders/").concat(order.legacyId),
        children: children
      })
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
      children: children
    });
  }
};

var KindTag = (0,styled_components_browser_esm/* default */.ZP)(StyledTag/* default */.Z).attrs({
  variant: 'rounded-left',
  type: 'grey',
  mb: '4px',
  mr: '10px',
  textTransform: 'uppercase',
  fontSize: '10px',
  fontWeight: '600'
}).withConfig({
  displayName: "TransactionItem__KindTag",
  componentId: "sc-dqouq4-0"
})([""]);

var getExpenseStatusTag = function getExpenseStatusTag(expense, isRefund, isRefunded) {
  var expenseStatusLabel;

  if (isRefunded) {
    expenseStatusLabel = 'REFUNDED';
  } else if (isRefund) {
    expenseStatusLabel = 'COMPLETED';
  } else {
    expenseStatusLabel = (expense === null || expense === void 0 ? void 0 : expense.status) || expense_status/* default.PAID */.Z.PAID;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseStatusTag/* default */.Z, {
    status: expenseStatusLabel,
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "16px",
    letterSpacing: "0.06em",
    px: "6px",
    py: "2px"
  });
};

var TransactionItem = function TransactionItem(_ref2) {
  var _transaction$fromAcco, _expense$comments;

  var displayActions = _ref2.displayActions,
      collective = _ref2.collective,
      transaction = _ref2.transaction,
      onMutationSuccess = _ref2.onMutationSuccess;
  var toAccount = transaction.toAccount,
      fromAccount = transaction.fromAccount,
      giftCardEmitterAccount = transaction.giftCardEmitterAccount,
      order = transaction.order,
      expense = transaction.expense,
      type = transaction.type,
      kind = transaction.kind,
      description = transaction.description,
      createdAt = transaction.createdAt,
      isRefunded = transaction.isRefunded,
      isRefund = transaction.isRefund;

  var _useLoggedInUser = (0,useLoggedInUser/* default */.Z)(),
      LoggedInUser = _useLoggedInUser.LoggedInUser;

  var _React$useState = react.useState(false),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      isExpanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var intl = (0,useIntl/* default */.Z)();
  var hasOrder = order !== null;
  var isExpense = kind === transactions/* TransactionKind.EXPENSE */.wz.EXPENSE;
  var isCredit = type === transactions/* TransactionTypes.CREDIT */.em.CREDIT;
  var Item = isCredit ? DebitCreditList/* CreditItem */.XG : DebitCreditList/* DebitItem */.cw;
  var legacyCollectiveId = collective.legacyId || collective.id;
  var isOwnUserProfile = LoggedInUser && LoggedInUser.CollectiveId === legacyCollectiveId;
  var avatarCollective = isCredit ? fromAccount : toAccount;
  var isProcessingOrPending = hasOrder && [order_status/* ORDER_STATUS.PROCESSING */.D.PROCESSING, order_status/* ORDER_STATUS.PENDING */.D.PENDING].includes(order === null || order === void 0 ? void 0 : order.status);
  var displayedAmount = getDisplayedAmount(transaction, collective);

  var transactionDetailsLink = function transactionDetailsLink() {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
      "data-cy": "transaction-details",
      buttonSize: "tiny",
      buttonStyle: "secondary",
      isBorderless: true,
      onClick: function onClick() {
        return setExpanded(!isExpanded);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        whiteSpace: "nowrap",
        children: isExpanded ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "closeDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Close Details"
            }]
          }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronUp_esm/* ChevronUp */.K, {
            size: "1em"
          })]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
            whiteSpace: "nowrap",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "viewDetails",
              defaultMessage: [{
                "type": 0,
                "value": "View Details"
              }]
            }), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
              size: "1em"
            })]
          })
        })
      })
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Item, {
    "data-cy": "transaction-item",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
      px: [16, 27],
      py: 16,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        flexWrap: "wrap",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flex: "1",
          minWidth: "60%",
          mr: 3,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            mr: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
              collective: avatarCollective,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
                collective: avatarCollective,
                radius: 40
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
              "data-cy": "transaction-description",
              fontWeight: "500",
              fontSize: ['14px', null, null, '16px'],
              lineHeight: ['20px', null, null, '24px'],
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ItemTitleWrapper, {
                expense: expense,
                order: order,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
                  title: description,
                  color: description ? 'black.900' : 'black.600',
                  children: description ? truncate_default()(description, {
                    length: 60
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                    id: "NoDescription",
                    defaultMessage: [{
                      "type": 0,
                      "value": "No description provided"
                    }]
                  })
                })
              }), isOwnUserProfile && ((_transaction$fromAcco = transaction.fromAccount) === null || _transaction$fromAcco === void 0 ? void 0 : _transaction$fromAcco.isIncognito) && /*#__PURE__*/(0,jsx_runtime.jsx)(_StyledSpan, {
                ml: 1,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(PrivateInfoIcon/* default */.Z, {
                  color: "#969BA3",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                    id: "PrivateTransaction",
                    defaultMessage: [{
                      "type": 0,
                      "value": "This incognito transaction is only visible to you"
                    }]
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
              mt: "4px",
              fontSize: "12px",
              lineHeight: "20px",
              color: "black.700",
              "data-cy": "transaction-details",
              children: [(0,i18n_transaction/* i18nTransactionType */.Nx)(intl, transaction.type), "\xA0", /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                  id: "Transaction.from",
                  defaultMessage: [{
                    "type": 0,
                    "value": "from "
                  }, {
                    "type": 1,
                    "value": "name"
                  }],
                  values: {
                    name: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                      as: LinkCollective/* default */.Z,
                      collective: fromAccount
                    })
                  }
                }), "\xA0"]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "Transaction.to",
                defaultMessage: [{
                  "type": 0,
                  "value": "to "
                }, {
                  "type": 1,
                  "value": "name"
                }],
                values: {
                  name: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                    as: LinkCollective/* default */.Z,
                    collective: toAccount
                  })
                }
              }), giftCardEmitterAccount && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: ["\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                  id: "transaction.usingGiftCardFrom",
                  defaultMessage: [{
                    "type": 0,
                    "value": "using a "
                  }, {
                    "type": 1,
                    "value": "giftCard"
                  }, {
                    "type": 0,
                    "value": " from "
                  }, {
                    "type": 1,
                    "value": "collective"
                  }],
                  values: {
                    giftCard: /*#__PURE__*/(0,jsx_runtime.jsx)(DefinedTerm/* default */.Z, {
                      term: DefinedTerm/* Terms.GIFT_CARD */.F.GIFT_CARD,
                      textTransform: "lowercase"
                    }),
                    collective: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                      as: LinkCollective/* default */.Z,
                      collective: giftCardEmitterAccount
                    })
                  }
                })]
              }), INFO_SEPARATOR, /*#__PURE__*/(0,jsx_runtime.jsx)(DateTime/* default */.Z, {
                value: createdAt,
                "data-cy": "transaction-date"
              }), isExpense && (expense === null || expense === void 0 ? void 0 : (_expense$comments = expense.comments) === null || _expense$comments === void 0 ? void 0 : _expense$comments.totalCount) > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [INFO_SEPARATOR, /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MessageSquare_esm/* MessageSquare */.t, {
                    size: "16px"
                  }), "\xA0", expense.comments.totalCount]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['row', 'column'],
          mt: [3, 0],
          flexWrap: "wrap",
          alignItems: ['center', 'flex-end'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
            display: "flex",
            my: 2,
            mr: [3, 0],
            minWidth: 100,
            justifyContent: "flex-end",
            "data-cy": "transaction-amount",
            fontSize: "16px",
            ml: "auto",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TransactionSign/* default */.Z, {
              isCredit: isCredit
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              fontWeight: "bold",
              color: "black.900",
              mr: 1,
              children: (0,currency_utils/* formatCurrency */.xG)(Math.abs(displayedAmount.valueInCents), displayedAmount.currency, {
                locale: intl.locale
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              color: "black.700",
              textTransform: "uppercase",
              children: displayedAmount.currency
            })]
          }), hasOrder && /*#__PURE__*/(0,jsx_runtime.jsx)(components_TransactionStatusTag, {
            transaction: transaction,
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "16px",
            letterSpacing: "0.06em",
            px: "6px",
            py: "2px"
          }), ' ', isExpense && getExpenseStatusTag(expense, isRefund, isRefunded)]
        })]
      }), hasOrder && [CONTRIBUTION, ADDED_FUNDS, PLATFORM_TIP].includes(transaction.kind) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        borderTop: ['1px solid #E8E9EB', 'none'],
        mt: 3,
        pt: [2, 0],
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(KindTag, {
          children: [(0,i18n_transaction/* i18nTransactionKind */.w$)(intl, transaction.kind), Boolean(order === null || order === void 0 ? void 0 : order.legacyId) && " #".concat(order.legacyId)]
        }), (!isProcessingOrPending || transaction.paymentMethod) && transactionDetailsLink()]
      }), isExpense && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        mt: 3,
        pt: [2, 0],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Tags/* default */.Z, {
          expense: expense
        }), transactionDetailsLink()]
      }), !isExpense && (!hasOrder || ![CONTRIBUTION, ADDED_FUNDS, PLATFORM_TIP].includes(transaction.kind)) && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        mt: 3,
        pt: [2, 0],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(KindTag, {
          children: (0,i18n_transaction/* i18nTransactionKind */.w$)(intl, transaction.kind)
        })
      })]
    }), isExpanded && (hasOrder || isExpense) && /*#__PURE__*/(0,jsx_runtime.jsx)(transactions_TransactionDetails, {
      displayActions: displayActions,
      transaction: transaction,
      onMutationSuccess: onMutationSuccess
    })]
  });
};

TransactionItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionItem",
  "props": {
    "displayActions": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "transaction": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "isRefunded": {
            "name": "bool",
            "required": false
          },
          "isRefund": {
            "name": "bool",
            "required": false
          },
          "isOrderRejected": {
            "name": "bool",
            "required": false
          },
          "fromAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": false
              },
              "isIncognito": {
                "name": "bool",
                "required": false
              }
            },
            "required": true
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "toAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "giftCardEmitterAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "imageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "order": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "legacyId": {
                "name": "number",
                "required": false
              },
              "status": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "expense": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "status": {
                "name": "string",
                "required": false
              },
              "legacyId": {
                "name": "number",
                "required": false
              },
              "comments": {
                "name": "shape",
                "value": {
                  "totalCount": {
                    "name": "number",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "id": {
            "name": "string",
            "required": false
          },
          "uuid": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(TransactionTypes)",
            "required": false
          },
          "kind": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(TransactionKind)",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "hostFeeInHostCurrency": {
            "name": "number",
            "required": false
          },
          "platformFeeInHostCurrency": {
            "name": "number",
            "required": false
          },
          "paymentProcessorFeeInHostCurrency": {
            "name": "number",
            "required": false
          },
          "taxAmount": {
            "name": "object",
            "required": false
          },
          "amount": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "netAmount": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "netAmountInCollectiveCurrency": {
            "name": "number",
            "required": false
          },
          "usingGiftCardFromCollective": {
            "name": "object",
            "required": false
          },
          "paymentMethod": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
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
          "legacyId": {
            "name": "number",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    },
    "onMutationSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var transactions_TransactionItem = (TransactionItem);

var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)(Text/* Span */.Dr).withConfig({
  displayName: "TransactionItem___StyledSpan",
  componentId: "sc-dqouq4-1"
})({
  verticalAlign: 'text-bottom'
});

/***/ }),

/***/ 65536:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zs": function() { return /* binding */ parseTransactionKinds; },
/* harmony export */   "ce": function() { return /* binding */ getDefaultKinds; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84238);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25325);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86896);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73254);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52015);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16678);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33054);
/* harmony import */ var _lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3025);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52847);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85893);




var _excluded = ["onChange", "value", "kinds"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









 // (!) Remember that any changes made here should be applied to the cache in API > `getCacheKeyForBudgetOrTransactionsSections`



var getDefaultKinds = function getDefaultKinds() {
  return [_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.ADDED_FUNDS */ .wz.ADDED_FUNDS, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.BALANCE_TRANSFER */ .wz.BALANCE_TRANSFER, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.CONTRIBUTION */ .wz.CONTRIBUTION, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.EXPENSE */ .wz.EXPENSE, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.PLATFORM_TIP */ .wz.PLATFORM_TIP];
};

var optionsToQueryString = function optionsToQueryString(options) {
  if (!options || options.length === lodash_size__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind */ .wz)) {
    return null;
  } else {
    return !options ? null : options.map(function (_ref) {
      var value = _ref.value;
      return value;
    }).join(',');
  }
};

var parseTransactionKinds = function parseTransactionKinds(str) {
  if (str === 'ALL') {
    return Object.values(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind */ .wz);
  }

  var result = str === null || str === void 0 ? void 0 : str.split(',');

  if (!(result !== null && result !== void 0 && result.length) || result.length === lodash_size__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind */ .wz)) {
    return null;
  } else {
    return result !== null && result !== void 0 && result.length ? result : null;
  }
};
var TruncatedItemsList = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr).attrs({
  truncateOverflow: true,
  pl: 2,
  maxWidth: ['calc(100vw - 135px)', '75px', '175px', '200px']
}).withConfig({
  displayName: "TransactionsKindFilter__TruncatedItemsList",
  componentId: "sc-1d9ioh-0"
})(["display:inline-block;max-width:75px;", ""], styled_system__WEBPACK_IMPORTED_MODULE_5__/* .maxWidth */ .kk);

var TruncatedValueContainer = function TruncatedValueContainer(props) {
  var selectProps = props.selectProps,
      children = props.children;
  var itemsList = (selectProps.value || []).map(function (_ref2) {
    var label = _ref2.label;
    return label;
  });
  var itemsListStr = itemsList.join(', ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_select__WEBPACK_IMPORTED_MODULE_12__.c.SelectContainer, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TruncatedItemsList, {
      title: itemsListStr,
      children: itemsListStr
    }), children]
  }));
};

var REACT_SELECT_COMPONENT_OVERRIDE = {
  ValueContainer: TruncatedValueContainer,
  MultiValue: function MultiValue() {
    return null;
  } // Items will be displayed as a truncated string in `TruncatedValueContainer `

};

var TransactionsKindFilter = function TransactionsKindFilter(_ref3) {
  var _onChange = _ref3.onChange,
      value = _ref3.value,
      kinds = _ref3.kinds,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();

  var getOption = function getOption(value, idx) {
    return {
      label: (0,_lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_7__/* .i18nTransactionKind */ .w$)(intl, value),
      value: value,
      idx: idx
    };
  };

  var displayedKinds = kinds && kinds.length ? kinds : getDefaultKinds();
  var options = displayedKinds.map(getOption);
  var selectedOptions = react__WEBPACK_IMPORTED_MODULE_4__.useMemo(function () {
    return (!value ? lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default()(getDefaultKinds(), displayedKinds) : parseTransactionKinds(value)).map(getOption);
  }, [value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_8__/* .StyledSelectFilter */ .V, _objectSpread({
    isSearchable: false,
    isClearable: false,
    onChange: function onChange(options) {
      return _onChange(optionsToQueryString(options));
    },
    value: selectedOptions,
    options: options,
    components: REACT_SELECT_COMPONENT_OVERRIDE,
    closeMenuOnSelect: false,
    hideSelectedOptions: false,
    isMulti: true,
    maxWidth: ['100%', 200, 300],
    minWidth: 150
  }, props));
};

TransactionsKindFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionsKindFilter",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "kinds": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["ZP"] = (TransactionsKindFilter);

/***/ }),

/***/ 83722:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ transactionsQueryCollectionFragment; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15020);


var _templateObject;


var transactionsQueryCollectionFragment = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  fragment TransactionsQueryCollectionFragment on TransactionCollection {\n    totalCount\n    offset\n    limit\n    kinds\n    paymentMethodTypes\n    nodes {\n      id\n      uuid\n      kind\n      amount {\n        currency\n        valueInCents\n      }\n      netAmount {\n        currency\n        valueInCents\n      }\n      taxAmount {\n        valueInCents\n        currency\n      }\n      taxInfo {\n        id\n        rate\n        type\n      }\n      platformFee {\n        currency\n        valueInCents\n      }\n      paymentProcessorFee {\n        currency\n        valueInCents\n      }\n      hostFee {\n        currency\n        valueInCents\n      }\n      type\n      description\n      createdAt\n      isRefunded\n      isRefund\n      isOrderRejected\n      toAccount {\n        id\n        name\n        slug\n        type\n        imageUrl\n        isIncognito\n        ... on AccountWithParent {\n          parent {\n            id\n            slug\n          }\n        }\n        settings\n        ... on Individual {\n          isGuest\n        }\n        ... on Collective {\n          host {\n            id\n            name\n            slug\n            type\n          }\n        }\n        ... on AccountWithHost {\n          hostFeePercent\n          platformFeePercent\n        }\n      }\n      fromAccount {\n        id\n        name\n        slug\n        type\n        imageUrl\n        isIncognito\n        ... on Event {\n          parent {\n            id\n          }\n        }\n        ... on Project {\n          parent {\n            id\n          }\n        }\n        ... on Individual {\n          isGuest\n        }\n        ... on AccountWithHost {\n          hostFeePercent\n          platformFeePercent\n        }\n      }\n      host {\n        id\n        name\n        slug\n        type\n        imageUrl\n      }\n      account {\n        id\n        isIncognito\n      }\n      giftCardEmitterAccount {\n        id\n        name\n        slug\n        type\n        imageUrl\n      }\n      permissions {\n        id\n        canRefund\n        canDownloadInvoice\n        canReject\n      }\n      paymentMethod {\n        id\n        type\n      }\n      payoutMethod {\n        id\n        type\n      }\n      order {\n        id\n        legacyId\n        status\n        memo\n        processedAt\n        toAccount {\n          id\n          slug\n        }\n      }\n      expense {\n        id\n        status\n        tags\n        type\n        feesPayer\n        amount\n        currency\n        legacyId\n        # limit: 1 as current best practice to avoid the API fetching entries it doesn't need\n        comments(limit: 1) {\n          totalCount\n        }\n        payoutMethod {\n          id\n          type\n        }\n        account {\n          id\n          slug\n        }\n        createdByAccount {\n          id\n          slug\n        }\n      }\n      relatedTransactions(kind: [HOST_FEE, PAYMENT_PROCESSOR_COVER]) {\n        id\n        type\n        kind\n        netAmount {\n          currency\n          valueInCents\n        }\n      }\n    }\n  }\n"])));

/***/ }),

/***/ 38083:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/**
 * Constants for the expense status
 *
 *
 * pending -> rejected
 * pending -> approved -> paid
 *
 * TransferWise:
 * ... -> approved -> processing -> paid
 * ... -> approved -> processing -> error
 *
 * PayPal Payouts:
 * ... -> approved -> scheduled_for_payment -> paid
 * ... -> approved -> scheduled_for_payment -> error
 *
 * Submit on Behalf:
 * draft -> unverified -> pending -> ...
 *
 * COMPLETED and REFUNDED status are for displaying refunded expenses and refunds
 * in the transactions list (in both cases the expense status is APPROVED).
 */
/* harmony default export */ __webpack_exports__["Z"] = ({
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  PROCESSING: 'PROCESSING',
  ERROR: 'ERROR',
  PAID: 'PAID',
  SCHEDULED_FOR_PAYMENT: 'SCHEDULED_FOR_PAYMENT',
  SPAM: 'SPAM',
  UNVERIFIED: 'UNVERIFIED',
  INCOMPLETE: 'INCOMPLETE'
});

/***/ }),

/***/ 19878:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = ({
  CHARGE: 'CHARGE',
  INVOICE: 'INVOICE',
  RECEIPT: 'RECEIPT',
  GRANT: 'GRANT',
  SETTLEMENT: 'SETTLEMENT',
  UNCLASSIFIED: 'UNCLASSIFIED'
});

/***/ }),

/***/ 56508:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FZ": function() { return /* binding */ INVITE; },
/* harmony export */   "Nk": function() { return /* binding */ PayoutMethodType; },
/* harmony export */   "kD": function() { return /* binding */ BANK_TRANSFER_DEFAULT_INSTRUCTIONS; },
/* harmony export */   "vi": function() { return /* binding */ VIRTUAL_CARD; }
/* harmony export */ });
var PayoutMethodType = {
  ACCOUNT_BALANCE: 'ACCOUNT_BALANCE',
  BANK_ACCOUNT: 'BANK_ACCOUNT',
  PAYPAL: 'PAYPAL',
  CREDIT_CARD: 'CREDIT_CARD',
  OTHER: 'OTHER'
}; // Submit on Behalf placeholder. Not an actual Payout Method Type and only exists in the frontend.

var INVITE = 'INVITE'; // Virtual Card charge Expense method

var VIRTUAL_CARD = 'VIRTUAL_CARD'; // This is not internationalized on purpose

var BANK_TRANSFER_DEFAULT_INSTRUCTIONS = "Thank you for your contribution! Here are the payment instructions. Be sure to include the reference details, so we can match your payment to the correct transaction. Sometimes it can take a few days for the funds to arrive and be confirmed. You will automatically be issued a receipt.\n\nAmount: {amount}\nReference: {reference}\nDetail: {collective}\n{account}\n";

/***/ }),

/***/ 3350:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ EMPTY_ARRAY; }
/* harmony export */ });
/**
 * Used to make sure the value stays memoized (because [] !== [])
 * See https://codesandbox.io/s/long-flower-mzsqx?file=/src/App.js
 */
var EMPTY_ARRAY = Object.freeze([]);

/***/ }),

/***/ 45624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ip": function() { return /* binding */ getSupportedExpenseTypes; },
/* harmony export */   "qc": function() { return /* binding */ DEFAULT_SUPPORTED_EXPENSE_TYPES; },
/* harmony export */   "rX": function() { return /* binding */ getPayoutProfiles; },
/* harmony export */   "wx": function() { return /* binding */ isSupportedExpenseType; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14176);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57557);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82492);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45220);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30845);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82525);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var ORGANIZATION = _constants_collectives__WEBPACK_IMPORTED_MODULE_7__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION;
var getPayoutProfiles = (0,memoize_one__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function (loggedInAccount) {
  if (!loggedInAccount) {
    return [];
  } else {
    var payoutProfiles = [loggedInAccount];

    var _iterator = _createForOfIteratorHelper(lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(loggedInAccount, 'adminMemberships.nodes', [])),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var membership = _step.value;

        if ( // Organizations
        [ORGANIZATION].includes(membership.account.type) || // Relax available accounts
        membership.account.isActive) {
          // Push main account
          payoutProfiles.push(lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(membership.account, ['childrenAccounts'])); // Push children and add Host if missing

          var _iterator2 = _createForOfIteratorHelper(membership.account.childrenAccounts.nodes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var childrenAccount = _step2.value;

              if (childrenAccount.isActive) {
                payoutProfiles.push(_objectSpread({
                  host: membership.account.host
                }, childrenAccount));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return payoutProfiles;
  }
});
var DEFAULT_SUPPORTED_EXPENSE_TYPES = {
  GRANT: false,
  INVOICE: true,
  RECEIPT: true
};
var getSupportedExpenseTypes = function getSupportedExpenseTypes(account) {
  if (!account) {
    return [];
  }

  var host = account.host;
  var parent = account.parent || account.parentCollective;

  if (account.supportedExpenseTypes || parent !== null && parent !== void 0 && parent.supportedExpenseTypes) {
    // Easy case: the account uses the new supportedExpenseTypes field
    return account.supportedExpenseTypes || parent.supportedExpenseTypes;
  } else {
    // Aggregate all configs, using the order of priority collective > parent > host
    var getExpenseTypes = function getExpenseTypes(account) {
      var _account$settings;

      return lodash_omitBy__WEBPACK_IMPORTED_MODULE_2___default()(account === null || account === void 0 ? void 0 : (_account$settings = account.settings) === null || _account$settings === void 0 ? void 0 : _account$settings.expenseTypes, (lodash_isNull__WEBPACK_IMPORTED_MODULE_5___default()));
    };

    var defaultExpenseTypes = DEFAULT_SUPPORTED_EXPENSE_TYPES;

    var aggregatedConfig = lodash_merge__WEBPACK_IMPORTED_MODULE_4___default().apply(void 0, [defaultExpenseTypes].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()([host, parent, account].map(getExpenseTypes))));

    return Object.keys(aggregatedConfig).filter(function (key) {
      return aggregatedConfig[key];
    }); // Return only the truthy ones
  }
};
/**
 * Helper to determine whether an expense type is supported by an account
 */

var isSupportedExpenseType = function isSupportedExpenseType(account, expenseType) {
  var supportedTypes = getSupportedExpenseTypes(account);
  return supportedTypes.includes(expenseType);
};

/***/ }),

/***/ 46233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ useAsyncCall; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31330);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);







var useAsyncCall = function useAsyncCall(fn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$useErrorToast = _ref.useErrorToast,
      useErrorToast = _ref$useErrorToast === void 0 ? false : _ref$useErrorToast;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(),
      _React$useState4 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__.useState(),
      _React$useState6 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var _useToasts = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .useToasts */ .e1)(),
      addToast = _useToasts.addToast;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();

  var callWith = function callWith() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var response;
      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError();
              setData();
              _context.prev = 3;
              _context.next = 6;
              return fn.apply(void 0, args);

            case 6:
              response = _context.sent;
              setData(response);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              setError(_context.t0); // eslint-disable-next-line no-console

              console.error(_context.t0);

              if (useErrorToast) {
                addToast({
                  type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_4__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                  message: (0,_errors__WEBPACK_IMPORTED_MODULE_5__/* .formatErrorMessage */ .jN)(intl, _context.t0)
                });
              }

            case 15:
              _context.prev = 15;
              setLoading(false);
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10, 15, 18]]);
    }));
  };

  var call = function call() {
    return callWith.apply(void 0, arguments)();
  };

  return {
    loading: loading,
    call: call,
    callWith: callWith,
    data: data,
    error: error
  };
};

/***/ }),

/***/ 42994:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24839);


var _defineMessages;



var I18N_SECTIONS = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS, {
  id: "SectionContribute.TopContributors",
  defaultMessage: [{
    "type": 0,
    "value": "Top financial contributors"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES, {
  id: "ConnectedCollectives",
  defaultMessage: [{
    "type": 0,
    "value": "Connected Collectives"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM, {
  id: "OurTeam",
  defaultMessage: [{
    "type": 0,
    "value": "Our team"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.GOALS */ .bx.GOALS, {
  id: "Goals",
  defaultMessage: [{
    "type": 0,
    "value": "Goals"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.UPDATES */ .bx.UPDATES, {
  id: "updates",
  defaultMessage: [{
    "type": 0,
    "value": "Updates"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS, {
  id: "conversations",
  defaultMessage: [{
    "type": 0,
    "value": "Conversations"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS, {
  id: "Contributions.Recurring",
  defaultMessage: [{
    "type": 0,
    "value": "Recurring Contributions"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.TICKETS */ .bx.TICKETS, {
  id: "section.tickets.title",
  defaultMessage: [{
    "type": 0,
    "value": "Tickets"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.LOCATION */ .bx.LOCATION, {
  id: "SectionLocation.Title",
  defaultMessage: [{
    "type": 0,
    "value": "Location"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE, {
  id: "Contribute",
  defaultMessage: [{
    "type": 0,
    "value": "Contribute"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS, {
  id: "Contributions",
  defaultMessage: [{
    "type": 0,
    "value": "Contributions"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.EVENTS */ .bx.EVENTS, {
  id: "Events",
  defaultMessage: [{
    "type": 0,
    "value": "Events"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.PROJECTS */ .bx.PROJECTS, {
  id: "Projects",
  defaultMessage: [{
    "type": 0,
    "value": "Projects"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS, {
  id: "menu.transactions",
  defaultMessage: [{
    "type": 0,
    "value": "Transactions"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.BUDGET */ .bx.BUDGET, {
  id: "section.budget.title",
  defaultMessage: [{
    "type": 0,
    "value": "Budget"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.FINANCIAL_OVERVIEW */ .bx.FINANCIAL_OVERVIEW, {
  id: "section.financialOverview.title",
  defaultMessage: [{
    "type": 0,
    "value": "Financial Overview"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.EXPENSES */ .bx.EXPENSES, {
  id: "Expenses",
  defaultMessage: [{
    "type": 0,
    "value": "Expenses"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS, {
  id: "section.contributors.title",
  defaultMessage: [{
    "type": 0,
    "value": "Contributors"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS, {
  id: "CollectivePage.NavBar.Participants",
  defaultMessage: [{
    "type": 0,
    "value": "Participants"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.ABOUT */ .bx.ABOUT, {
  id: "collective.about.title",
  defaultMessage: [{
    "type": 0,
    "value": "About"
  }]
}), _defineMessages));

var i18nCollectivePageSection = function i18nCollectivePageSection(intl, section) {
  return I18N_SECTIONS[section] ? intl.formatMessage(I18N_SECTIONS[section]) : section;
};

/* harmony default export */ __webpack_exports__["Z"] = (i18nCollectivePageSection);

/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": function() { return /* binding */ RecurringExpenseIntervals; },
/* harmony export */   "kD": function() { return /* binding */ i18nExpenseType; },
/* harmony export */   "wx": function() { return /* binding */ RecurringIntervalOptions; },
/* harmony export */   "zr": function() { return /* binding */ i18nExpenseStatus; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44012);
/* harmony import */ var _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38083);
/* harmony import */ var _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);



var _defineMessages, _defineMessages2;






var i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)((_defineMessages = {
  ALL: {
    id: "AllExpenses",
    defaultMessage: [{
      "type": 0,
      "value": "All expenses"
    }]
  }
}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].INVOICE */ .Z.INVOICE, {
  id: "Expense.Type.Invoice",
  defaultMessage: [{
    "type": 0,
    "value": "Invoice"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].RECEIPT */ .Z.RECEIPT, {
  id: "ExpenseForm.ReceiptLabel",
  defaultMessage: [{
    "type": 0,
    "value": "Reimbursement"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].GRANT */ .Z.GRANT, {
  id: "Expense.Type.FundingRequest",
  defaultMessage: [{
    "type": 0,
    "value": "Grant"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].UNCLASSIFIED */ .Z.UNCLASSIFIED, {
  id: "Expense.Type.Unclassified",
  defaultMessage: [{
    "type": 0,
    "value": "Unclassified"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].CHARGE */ .Z.CHARGE, {
  id: "Expense.Type.Charge",
  defaultMessage: [{
    "type": 0,
    "value": "Charge"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages, _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].SETTLEMENT */ .Z.SETTLEMENT, {
  id: "Expense.Type.Settlement",
  defaultMessage: [{
    "type": 0,
    "value": "Settlement"
  }]
}), _defineMessages));
var i18nStatus = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)((_defineMessages2 = {
  ALL: {
    id: "Expenses.AllShort",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  }
}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].DRAFT */ .Z.DRAFT, {
  id: "expense.draft",
  defaultMessage: [{
    "type": 0,
    "value": "Draft"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].PENDING */ .Z.PENDING, {
  id: "expense.pending",
  defaultMessage: [{
    "type": 0,
    "value": "Pending"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].APPROVED */ .Z.APPROVED, {
  id: "expense.approved",
  defaultMessage: [{
    "type": 0,
    "value": "Approved"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].REJECTED */ .Z.REJECTED, {
  id: "expense.rejected",
  defaultMessage: [{
    "type": 0,
    "value": "Rejected"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].PAID */ .Z.PAID, {
  id: "expense.paid",
  defaultMessage: [{
    "type": 0,
    "value": "Paid"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].PROCESSING */ .Z.PROCESSING, {
  id: "processing",
  defaultMessage: [{
    "type": 0,
    "value": "Processing"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].ERROR */ .Z.ERROR, {
  id: "Error",
  defaultMessage: [{
    "type": 0,
    "value": "Error"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].SCHEDULED_FOR_PAYMENT */ .Z.SCHEDULED_FOR_PAYMENT, {
  id: "expense.scheduledForPayment",
  defaultMessage: [{
    "type": 0,
    "value": "Scheduled for payment"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED, {
  id: "expense.pending",
  defaultMessage: [{
    "type": 0,
    "value": "Pending"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, "READY_TO_PAY", {
  id: "expenses.ready",
  defaultMessage: [{
    "type": 0,
    "value": "Ready to pay"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, "COMPLETED", {
  id: "expense.completed",
  defaultMessage: [{
    "type": 0,
    "value": "Completed"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, "REFUNDED", {
  id: "Expense.Status.Refunded",
  defaultMessage: [{
    "type": 0,
    "value": "Refunded"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(_defineMessages2, _constants_expense_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"].INCOMPLETE */ .Z.INCOMPLETE, {
  id: "kHwKVg",
  defaultMessage: [{
    "type": 0,
    "value": "Incomplete"
  }]
}), _defineMessages2));
/**
 * Translate the type of an expense
 */

var i18nExpenseType = function i18nExpenseType(intl, type, id) {
  var formattedType = i18nTypes[type] ? intl.formatMessage(i18nTypes[type]) : type;

  if (id) {
    formattedType = "".concat(formattedType, " #").concat(id);
  }

  return formattedType;
};
/**
 * Translate the status of an expense
 */

var i18nExpenseStatus = function i18nExpenseStatus(intl, status) {
  return i18nStatus[status] ? intl.formatMessage(i18nStatus[status]) : status;
};
var RecurringExpenseIntervals = {
  week: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    id: "week",
    defaultMessage: [{
      "type": 0,
      "value": "Weekly"
    }]
  }),
  month: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    id: "Frequency.Monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly"
    }]
  }),
  quarter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    id: "quarter",
    defaultMessage: [{
      "type": 0,
      "value": "Quarterly"
    }]
  }),
  year: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    id: "Frequency.Yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly"
    }]
  })
};
var RecurringIntervalOptions = Object.keys(RecurringExpenseIntervals).reduce(function (values, key) {
  return [].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(values), [{
    value: key,
    label: RecurringExpenseIntervals[key]
  }]);
}, []);

/***/ }),

/***/ 732:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _constants_order_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24317);


var _defineMessages;



var MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {
  ALL: {
    id: "orders.all",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  }
}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.CANCELLED */ .D.CANCELLED, {
  id: "Subscriptions.Cancelled",
  defaultMessage: [{
    "type": 0,
    "value": "Cancelled"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.DISPUTED */ .D.DISPUTED, {
  id: "order.disputed",
  defaultMessage: [{
    "type": 0,
    "value": "Disputed"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.ERROR */ .D.ERROR, {
  id: "Error",
  defaultMessage: [{
    "type": 0,
    "value": "Error"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.EXPIRED */ .D.EXPIRED, {
  id: "order.expired",
  defaultMessage: [{
    "type": 0,
    "value": "Expired"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.IN_REVIEW */ .D.IN_REVIEW, {
  id: "order.in_review",
  defaultMessage: [{
    "type": 0,
    "value": "In Review"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PENDING */ .D.PENDING, {
  id: "order.pending",
  defaultMessage: [{
    "type": 0,
    "value": "Pending"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.NEW */ .D.NEW, {
  id: "order.new",
  defaultMessage: [{
    "type": 0,
    "value": "New"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.REQUIRE_CLIENT_CONFIRMATION */ .D.REQUIRE_CLIENT_CONFIRMATION, {
  id: "order.require_client_confirmation",
  defaultMessage: [{
    "type": 0,
    "value": "Require client confirmation"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PLEDGED */ .D.PLEDGED, {
  id: "order.pledged",
  defaultMessage: [{
    "type": 0,
    "value": "Pledged"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.ACTIVE */ .D.ACTIVE, {
  id: "Subscriptions.Active",
  defaultMessage: [{
    "type": 0,
    "value": "Active"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.REFUNDED */ .D.REFUNDED, {
  id: "Order.Status.Refunded",
  defaultMessage: [{
    "type": 0,
    "value": "Refunded"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.REJECTED */ .D.REJECTED, {
  id: "order.rejected",
  defaultMessage: [{
    "type": 0,
    "value": "Rejected"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PAID */ .D.PAID, {
  id: "order.paid",
  defaultMessage: [{
    "type": 0,
    "value": "Paid"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING, {
  id: "processing",
  defaultMessage: [{
    "type": 0,
    "value": "Processing"
  }]
}), _defineMessages));

var i18nOrderStatus = function i18nOrderStatus(intl, status) {
  var i18nMsg = MESSAGES[status];
  return i18nMsg ? intl.formatMessage(i18nMsg) : status;
};

/* harmony default export */ __webpack_exports__["Z"] = (i18nOrderStatus);

/***/ }),

/***/ 72832:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": function() { return /* binding */ i18nPaymentMethodType; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59448);


var i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()({
  ALL: {
    id: "PaymentMethods.All",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  ADAPTIVE: {
    id: "wFUChi",
    defaultMessage: [{
      "type": 0,
      "value": "PayPal Adaptive"
    }]
  },
  GIFTCARD: {
    id: "GiftCard",
    defaultMessage: [{
      "type": 0,
      "value": "Gift Card"
    }]
  },
  CREDITCARD: {
    id: "CreditCard",
    defaultMessage: [{
      "type": 0,
      "value": "Credit Card"
    }]
  },
  PREPAID: {
    id: "Prepaid",
    defaultMessage: [{
      "type": 0,
      "value": "Prepaid Card"
    }]
  },
  COLLECTIVE: {
    id: "OpenCollectiveBalance",
    defaultMessage: [{
      "type": 0,
      "value": "Open Collective Balance"
    }]
  },
  HOST: {
    id: "Host",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal Host (Added Funds)"
    }]
  },
  MANUAL: {
    id: "Manual",
    defaultMessage: [{
      "type": 0,
      "value": "Manual (Bank Transfer)"
    }]
  },
  CRYPTO: {
    id: "Crypto",
    defaultMessage: [{
      "type": 0,
      "value": "Crypto"
    }]
  },
  PAYMENT: {
    id: "Ed6cRE",
    defaultMessage: [{
      "type": 0,
      "value": "PayPal payment"
    }]
  },
  SUBSCRIPTION: {
    id: "Clvp6T",
    defaultMessage: [{
      "type": 0,
      "value": "PayPal subscription"
    }]
  },
  US_BANK_ACCOUNT: {
    id: "ACH Debit",
    defaultMessage: [{
      "type": 0,
      "value": "ACH Debit"
    }]
  },
  SEPA_DEBIT: {
    id: "SEPADebit",
    defaultMessage: [{
      "type": 0,
      "value": "SEPA Debit"
    }]
  },
  BACS_DEBIT: {
    id: "BacsDebit",
    defaultMessage: [{
      "type": 0,
      "value": "Bacs Debit"
    }]
  },
  BANCONTACT: {
    id: "Stripe.PaymentMethod.Label.bancontact",
    defaultMessage: [{
      "type": 0,
      "value": "Bancontact"
    }]
  }
}, null, {
  id: "PaymentMethods.None",
  defaultMessage: [{
    "type": 0,
    "value": "No payment method"
  }]
}));
/**
 * Get only the (i18n) name of the payment method type.
 *
 * Ex: i18nPaymentMethodType(intl, 'giftcard') === 'Gift card'
 */

var i18nPaymentMethodType = function i18nPaymentMethodType(intl, type) {
  return i18nTypes[type] ? intl.formatMessage(i18nTypes[type]) : type;
};

/***/ }),

/***/ 17133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56508);


var _defineMessages;



var TypesI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {
  ALL: {
    id: "PayoutMethod.Type.All",
    defaultMessage: [{
      "type": 0,
      "value": "All methods"
    }]
  }
}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.OTHER */ .Nk.OTHER, {
  id: "PayoutMethod.Type.Other",
  defaultMessage: [{
    "type": 0,
    "value": "Other"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT, {
  id: "PayoutMethod.Type.BankAccount",
  defaultMessage: [{
    "type": 0,
    "value": "Bank transfer"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.CREDIT_CARD */ .Nk.CREDIT_CARD, {
  id: "PayoutMethod.Type.VirtualCard",
  defaultMessage: [{
    "type": 0,
    "value": "Virtual Card"
  }]
}), _defineMessages));
/**
 * Translate a member role
 *
 * @param {object} `intl` - see `injectIntl`
 * @param {string} `type`
 */

var i18nPayoutMethodType = function i18nPayoutMethodType(intl, type) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      aliasBankAccountToTransferWise = _ref.aliasBankAccountToTransferWise;

  if (!type) {
    return intl.formatMessage(TypesI18n[_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.OTHER */ .Nk.OTHER]);
  } else if (type === _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL) {
    return 'PayPal';
  } else if (type === _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && aliasBankAccountToTransferWise) {
    return 'Wise';
  } else if (type === _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE) {
    return 'Open Collective';
  }

  var i18nMsg = TypesI18n[type];
  return i18nMsg ? intl.formatMessage(i18nMsg) : type;
};

/* harmony default export */ __webpack_exports__["Z"] = (i18nPayoutMethodType);

/***/ }),

/***/ 3025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nx": function() { return /* binding */ i18nTransactionType; },
/* harmony export */   "pK": function() { return /* binding */ i18nTransactionSettlementStatus; },
/* harmony export */   "w$": function() { return /* binding */ i18nTransactionKind; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _constants_transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33054);


var _defineMessages, _defineMessages2, _defineMessages3;



var i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {
  ALL: {
    id: "AllTransactions",
    defaultMessage: [{
      "type": 0,
      "value": "All transactions"
    }]
  }
}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypes.CREDIT */ .em.CREDIT, {
  id: "Transaction.Type.Credit",
  defaultMessage: [{
    "type": 0,
    "value": "Credit"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypes.DEBIT */ .em.DEBIT, {
  id: "Expense.Type.Debit",
  defaultMessage: [{
    "type": 0,
    "value": "Debit"
  }]
}), _defineMessages));
var i18nKind = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages2 = {
  ALL: {
    id: "SectionTransactions.All",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  }
}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.ADDED_FUNDS */ .wz.ADDED_FUNDS, {
  id: "Transaction.kind.ADDED_FUNDS",
  defaultMessage: [{
    "type": 0,
    "value": "Added funds"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.CONTRIBUTION */ .wz.CONTRIBUTION, {
  id: "ContributionFlow.Contribution",
  defaultMessage: [{
    "type": 0,
    "value": "Contribution"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.EXPENSE */ .wz.EXPENSE, {
  id: "Transaction.kind.EXPENSE",
  defaultMessage: [{
    "type": 0,
    "value": "Expense"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.HOST_FEE */ .wz.HOST_FEE, {
  id: "HostFee",
  defaultMessage: [{
    "type": 0,
    "value": "Host fee"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.HOST_FEE_SHARE */ .wz.HOST_FEE_SHARE, {
  id: "Transaction.kind.HOST_FEE_SHARE",
  defaultMessage: [{
    "type": 0,
    "value": "Platform share"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PAYMENT_PROCESSOR_COVER */ .wz.PAYMENT_PROCESSOR_COVER, {
  id: "Transaction.kind.PAYMENT_PROCESSOR_COVER",
  defaultMessage: [{
    "type": 0,
    "value": "Payment processor cover"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PAYMENT_PROCESSOR_FEE */ .wz.PAYMENT_PROCESSOR_FEE, {
  id: "contribution.paymentFee",
  defaultMessage: [{
    "type": 0,
    "value": "Payment processor fee"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PLATFORM_FEE */ .wz.PLATFORM_FEE, {
  id: "PlatformFee",
  defaultMessage: [{
    "type": 0,
    "value": "Platform fee"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PLATFORM_TIP */ .wz.PLATFORM_TIP, {
  id: "Transaction.kind.PLATFORM_TIP",
  defaultMessage: [{
    "type": 0,
    "value": "Platform tip"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PREPAID_PAYMENT_METHOD */ .wz.PREPAID_PAYMENT_METHOD, {
  id: "Transaction.kind.PREPAID_PAYMENT_METHOD",
  defaultMessage: [{
    "type": 0,
    "value": "Prepaid payment method"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.HOST_FEE_SHARE_DEBT */ .wz.HOST_FEE_SHARE_DEBT, {
  id: "Transaction.kind.HOST_FEE_SHARE_DEBT",
  defaultMessage: [{
    "type": 0,
    "value": "Platform share (Owed)"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PLATFORM_TIP_DEBT */ .wz.PLATFORM_TIP_DEBT, {
  id: "Transaction.kind.PLATFORM_TIP_DEBT",
  defaultMessage: [{
    "type": 0,
    "value": "Platform tip (Owed)"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages2, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.BALANCE_TRANSFER */ .wz.BALANCE_TRANSFER, {
  id: "Transaction.kind.BALANCE_TRANSFER",
  defaultMessage: [{
    "type": 0,
    "value": "Balance transfer"
  }]
}), _defineMessages2));
var i18nSettlementStatus = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages3 = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages3, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TRANSACTION_SETTLEMENT_STATUS.OWED */ .e9.OWED, {
  id: "SettlementStatus.OWED",
  defaultMessage: [{
    "type": 0,
    "value": "Owed"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages3, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TRANSACTION_SETTLEMENT_STATUS.INVOICED */ .e9.INVOICED, {
  id: "SettlementStatus.INVOICED",
  defaultMessage: [{
    "type": 0,
    "value": "Invoiced"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages3, _constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TRANSACTION_SETTLEMENT_STATUS.SETTLED */ .e9.SETTLED, {
  id: "SettlementStatus.SETTLED",
  defaultMessage: [{
    "type": 0,
    "value": "Settled"
  }]
}), _defineMessages3));
/**
 * Translate the type of an transaction
 */

var i18nTransactionType = function i18nTransactionType(intl, type, id) {
  var formattedType = i18nTypes[type] ? intl.formatMessage(i18nTypes[type]) : type;

  if (id) {
    formattedType = "".concat(formattedType, " #").concat(id);
  }

  return formattedType;
};
/**
 * Translate the type of an transaction
 */

var i18nTransactionKind = function i18nTransactionKind(intl, type) {
  return i18nKind[type] ? intl.formatMessage(i18nKind[type]) : type;
};
var i18nTransactionSettlementStatus = function i18nTransactionSettlementStatus(intl, status) {
  return i18nSettlementStatus[status] ? intl.formatMessage(i18nSettlementStatus[status]) : status;
};

/***/ }),

/***/ 51048:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export AmountPropTypeShape */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var AmountPropTypeShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  value: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  valueInCents: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exchangeRate: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    value: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    source: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    date: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    isApproximate: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
  })
});

/***/ }),

/***/ 5949:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "US": function() { return /* binding */ saveInvoice; },
/* harmony export */   "rX": function() { return /* binding */ renderDetailsString; }
/* harmony export */ });
/* unused harmony exports formatFee, getInvoiceUrl, getFilename */
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59854);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93162);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44012);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _constants_transactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33054);
/* harmony import */ var _i18n_taxes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22642);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65985);
/* harmony import */ var _currency_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17632);
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15078);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12136);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35427);
/* harmony import */ var _url_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25896);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85893);

















var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__.defineMessages)({
  hostFee: {
    id: "expense.hostFeeInCollectiveCurrency",
    defaultMessage: [{
      "type": 0,
      "value": "host fee"
    }]
  },
  paymentProcessorFee: {
    id: "expense.paymentProcessorFeeInCollectiveCurrency",
    defaultMessage: [{
      "type": 0,
      "value": "payment processor fee"
    }]
  },
  openCollectiveFee: {
    id: "transactions.openCollectiveFee",
    defaultMessage: [{
      "type": 0,
      "value": "Open Collective fee"
    }]
  }
});
var formatFee = function formatFee(amount, totalAmount, name, feePercent, locale) {
  if (!(amount !== null && amount !== void 0 && amount.valueInCents)) {
    return '';
  }

  var v = amount.valueInCents < 0 ? " - ".concat((0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(Math.abs(amount.valueInCents), amount.currency, {
    locale: locale
  })) : " + ".concat((0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(Math.abs(amount.valueInCents), amount.currency, {
    locale: locale
  })); // Don't calculate percentual value when dealing with different currencies

  if (feePercent && amount.currency === (totalAmount === null || totalAmount === void 0 ? void 0 : totalAmount.currency)) {
    var percentage = Math.abs(lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(amount.valueInCents / totalAmount.valueInCents * 100, 2)); // To avoid misinformation, only return with percentual value if feePercent is true or it matches the predicted feePercent value

    if (feePercent === true || feePercent === percentage) {
      return "".concat(v, " (").concat(percentage, "% ").concat(name, ")");
    }
  }

  return "".concat(v, " (").concat(name, ")");
};
var renderDetailsString = function renderDetailsString(_ref) {
  var _amount = _ref.amount,
      platformFee = _ref.platformFee,
      hostFee = _ref.hostFee,
      paymentProcessorFee = _ref.paymentProcessorFee,
      _netAmount = _ref.netAmount,
      taxAmount = _ref.taxAmount,
      taxInfo = _ref.taxInfo,
      isCredit = _ref.isCredit,
      hasOrder = _ref.hasOrder,
      toAccount = _ref.toAccount,
      fromAccount = _ref.fromAccount,
      intl = _ref.intl,
      kind = _ref.kind,
      expense = _ref.expense,
      isRefund = _ref.isRefund,
      paymentProcessorCover = _ref.paymentProcessorCover;
  // Swap Amount and Net Amount for DEBITS
  var amount = !isCredit && _netAmount ? _netAmount : _amount;
  var amountString = (0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(Math.abs(amount.valueInCents), amount.currency, {
    locale: intl.locale
  });
  var expenseAmount = expense ? (0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(Math.abs(expense.amount), expense.currency, {
    locale: intl.locale
  }) : null;
  var platformFeeString = formatFee(platformFee, amount, intl.formatMessage(messages.openCollectiveFee), isCredit && !hasOrder ? fromAccount.platformFeePercent : toAccount.platformFeePercent, intl.locale);
  var hostFeeString = formatFee(hostFee, amount, intl.formatMessage(messages.hostFee), isCredit && !hasOrder ? fromAccount.hostFeePercent : toAccount.hostFeePercent, intl.locale);
  var paymentProcessorFeeString = formatFee(paymentProcessorFee, amount, intl.formatMessage(messages.paymentProcessorFee), false, intl.locale);

  if (kind === _constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.EXPENSE */ .wz.EXPENSE) {
    var expensePaymentProcessorFee = (0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(Math.abs(paymentProcessorFee.valueInCents), paymentProcessorFee.currency, {
      locale: intl.locale
    });
    var netExpenseAmount = (0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(Math.abs(_netAmount.valueInCents), _netAmount.currency, {
      locale: intl.locale
    });
    var hasPaymentProcessorCover = paymentProcessorCover !== undefined;
    var netPaymentProcessorCoverAmount = hasPaymentProcessorCover ? (0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(Math.abs(paymentProcessorCover.netAmount.valueInCents), paymentProcessorCover.netAmount.currency, {
      locale: intl.locale
    }) : null;
    var payee = toAccount.name;
    var payer = fromAccount.name;
    var feesPayer = (expense === null || expense === void 0 ? void 0 : expense.feesPayer) || 'COLLECTIVE';

    var _paymentProcessorFeeString = function _paymentProcessorFeeString(paymentProcessorFee, isRefund, feesPayer) {
      if (paymentProcessorFee.valueInCents === 0 || isRefund) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          id: "vwq8lO",
          defaultMessage: [{
            "type": 5,
            "value": "isRefund",
            "options": {
              "true": {
                "value": [{
                  "type": 0,
                  "value": "Refunded"
                }]
              },
              "other": {
                "value": []
              }
            }
          }, {
            "type": 0,
            "value": " Payment Processor Fee"
          }, {
            "type": 5,
            "value": "hasPaymentProcessorCover",
            "options": {
              "true": {
                "value": [{
                  "type": 0,
                  "value": " (covered by the Host)"
                }]
              },
              "false": {
                "value": []
              },
              "other": {
                "value": []
              }
            }
          }, {
            "type": 0,
            "value": ": "
          }, {
            "type": 1,
            "value": "paymentProcessorFee"
          }],
          values: {
            isRefund: isRefund,
            paymentProcessorFee: hasPaymentProcessorCover ? netPaymentProcessorCoverAmount : expensePaymentProcessorFee,
            hasPaymentProcessorCover: hasPaymentProcessorCover
          }
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          id: "Yp8Cek",
          defaultMessage: [{
            "type": 0,
            "value": "Payment Processor Fee (paid by "
          }, {
            "type": 1,
            "value": "collective"
          }, {
            "type": 0,
            "value": "): "
          }, {
            "type": 1,
            "value": "expensePaymentProcessorFee"
          }],
          values: {
            collective: feesPayer === 'PAYEE' ? payee : payer,
            expensePaymentProcessorFee: expensePaymentProcessorFee
          }
        });
      }
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [expenseAmount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        mb: 1,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          id: "4TSxft",
          defaultMessage: [{
            "type": 0,
            "value": "Expense Amount: "
          }, {
            "type": 1,
            "value": "expenseAmount"
          }],
          values: {
            expenseAmount: expenseAmount
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        mb: 1,
        children: _paymentProcessorFeeString(paymentProcessorFee, isRefund, feesPayer)
      }), taxAmount && taxInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        id: "/66Po2",
        defaultMessage: [{
          "type": 0,
          "value": "Includes "
        }, {
          "type": 1,
          "value": "rate"
        }, {
          "type": 0,
          "value": "% "
        }, {
          "type": 1,
          "value": "taxName"
        }, {
          "type": 0,
          "value": " ("
        }, {
          "type": 1,
          "value": "amount"
        }, {
          "type": 0,
          "value": ")"
        }],
        values: {
          rate: lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(taxInfo.rate * 100, 2),
          taxName: (0,_i18n_taxes__WEBPACK_IMPORTED_MODULE_7__/* .i18nTaxType */ .m)(intl, taxInfo.type, 'short'),
          amount: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(taxAmount.valueInCents, taxAmount.currency, {
            locale: intl.locale
          })
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          id: "6ZJG0I",
          defaultMessage: [{
            "type": 0,
            "value": "Net Amount for "
          }, {
            "type": 1,
            "value": "collectiveName"
          }, {
            "type": 0,
            "value": ": "
          }, {
            "type": 1,
            "value": "netExpenseAmount"
          }],
          values: {
            collectiveName: isCredit ? payee : payer,
            netExpenseAmount: netExpenseAmount
          }
        })
      })]
    });
  } else {
    var detailString = [amountString, hostFeeString, platformFeeString, paymentProcessorFeeString];

    if (taxAmount) {
      detailString.push(formatFee(taxAmount, amount, (taxInfo === null || taxInfo === void 0 ? void 0 : taxInfo.id) || 'Taxes', taxInfo === null || taxInfo === void 0 ? void 0 : taxInfo.percentage, intl.locale));
    }

    return detailString.concat(' ');
  }
};
var getInvoiceUrl = function getInvoiceUrl(_ref2) {
  var fromCollectiveSlug = _ref2.fromCollectiveSlug,
      toCollectiveSlug = _ref2.toCollectiveSlug,
      transactionUuid = _ref2.transactionUuid,
      dateFrom = _ref2.dateFrom,
      dateTo = _ref2.dateTo;
  return transactionUuid ? (0,_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .transactionInvoiceURL */ .U3)(transactionUuid) : (0,_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .collectiveInvoiceURL */ .mR)(fromCollectiveSlug, toCollectiveSlug, encodeURI(dateFrom), encodeURI(dateTo), 'pdf');
};
var getFilename = function getFilename(_ref3) {
  var fromCollectiveSlug = _ref3.fromCollectiveSlug,
      transactionUuid = _ref3.transactionUuid,
      toCollectiveSlug = _ref3.toCollectiveSlug,
      dateFrom = _ref3.dateFrom,
      dateTo = _ref3.dateTo,
      createdAt = _ref3.createdAt;

  if (transactionUuid) {
    var createdAtString = (0,_date_utils__WEBPACK_IMPORTED_MODULE_10__/* .toIsoDateStr */ .fM)(createdAt ? new Date(createdAt) : new Date());
    return "".concat(toCollectiveSlug || 'transaction', "_").concat(createdAtString, "_").concat(transactionUuid, ".pdf");
  } else {
    var fromString = (0,_date_utils__WEBPACK_IMPORTED_MODULE_10__/* .toIsoDateStr */ .fM)(dateFrom ? new Date(dateFrom) : new Date());

    var _toString = (0,_date_utils__WEBPACK_IMPORTED_MODULE_10__/* .toIsoDateStr */ .fM)(dateTo ? new Date(dateTo) : new Date());

    return "".concat(fromCollectiveSlug, "_").concat(toCollectiveSlug, "_").concat(fromString, "_").concat(_toString, ".pdf");
  }
};
var saveInvoice = /*#__PURE__*/function () {
  var _ref5 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref4) {
    var _blob;

    var fromCollectiveSlug, toCollectiveSlug, transactionUuid, dateFrom, dateTo, createdAt, invoiceUrl, getParams, accessToken, blob, filename;
    return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fromCollectiveSlug = _ref4.fromCollectiveSlug, toCollectiveSlug = _ref4.toCollectiveSlug, transactionUuid = _ref4.transactionUuid, dateFrom = _ref4.dateFrom, dateTo = _ref4.dateTo, createdAt = _ref4.createdAt;
            invoiceUrl = getInvoiceUrl({
              fromCollectiveSlug: fromCollectiveSlug,
              toCollectiveSlug: toCollectiveSlug,
              transactionUuid: transactionUuid,
              dateFrom: dateFrom,
              dateTo: dateTo,
              createdAt: createdAt
            });
            getParams = {
              format: 'blob',
              allowExternal: _url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .invoiceServiceURL */ .MM
            };
            accessToken = (0,_local_storage__WEBPACK_IMPORTED_MODULE_12__/* .getFromLocalStorage */ .fp)(_local_storage__WEBPACK_IMPORTED_MODULE_12__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN);

            if (accessToken) {
              getParams.headers = {
                Authorization: "Bearer ".concat(accessToken)
              };
            }

            _context.prev = 5;
            _context.next = 8;
            return (0,_api__WEBPACK_IMPORTED_MODULE_8__/* .get */ .U2)(invoiceUrl, getParams);

          case 8:
            blob = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](5);
            throw (0,_errors__WEBPACK_IMPORTED_MODULE_11__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_11__/* .ERROR.NETWORK */ .pn.NETWORK);

          case 14:
            if (!(((_blob = blob) === null || _blob === void 0 ? void 0 : _blob.type) !== 'application/pdf')) {
              _context.next = 16;
              break;
            }

            throw (0,_errors__WEBPACK_IMPORTED_MODULE_11__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_11__/* .ERROR.UNKNOWN */ .pn.UNKNOWN);

          case 16:
            filename = getFilename({
              fromCollectiveSlug: fromCollectiveSlug,
              toCollectiveSlug: toCollectiveSlug,
              transactionUuid: transactionUuid,
              dateFrom: dateFrom,
              dateTo: dateTo,
              createdAt: createdAt
            });
            return _context.abrupt("return", (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, filename));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 11]]);
  }));

  return function saveInvoice(_x) {
    return _ref5.apply(this, arguments);
  };
}();
renderDetailsString.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderDetailsString"
};

/***/ })

}]);
//# sourceMappingURL=4944-04fa871c16340144.js.map