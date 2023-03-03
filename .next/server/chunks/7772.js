"use strict";
exports.id = 7772;
exports.ids = [7772];
exports.modules = {

/***/ 66337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export formatFxRateInfo */
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51048);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95370);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_9__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const FX_RATE_SOURCE_LABEL = {
  PAYPAL: 'PayPal',
  OPENCOLLECTIVE: 'Open Collective',
  WISE: 'Wise'
};
const formatFxRateInfo = (intl, {
  value,
  date,
  source,
  isApproximate
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
    flexDirection: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
    }), source && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
    }), date && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "dT6mUk",
        defaultMessage: [{
          "type": 0,
          "value": "Acquired on: "
        }, {
          "type": 1,
          "value": "date"
        }],
        values: {
          date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_DateTime__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            value: date,
            timeStyle: "short"
          })
        }
      })
    }), isApproximate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
        role: "img",
        "aria-label": "Warning",
        children: "\u26A0\uFE0F"
      }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "kIqdaN",
        defaultMessage: [{
          "type": 0,
          "value": "This amount is subject to fluctuations"
        }]
      })]
    })]
  });
};
const ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "AmountWithExchangeRateInfo__ContentContainer",
  componentId: "sc-r43d1a-0"
})(["white-space:nowrap;margin-right:4px;"]);

const AmountWithExchangeRateInfo = ({
  amount: {
    exchangeRate,
    currency,
    value,
    valueInCents
  },
  showCurrencyCode
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    display: "block",
    containerVerticalAlign: "middle",
    noTooltip: !exchangeRate,
    content: () => formatFxRateInfo(intl, exchangeRate),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      flexWrap: "noWrap",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ContentContainer, {
        children: [exchangeRate?.isApproximate && `~ `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          amount: valueInCents ?? Math.round(value * 100),
          currency: currency,
          precision: 2,
          amountStyles: null,
          showCurrencyCode: showCurrencyCode
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__.InfoCircle, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmountWithExchangeRateInfo);
formatFxRateInfo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "formatFxRateInfo"
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const getBaseFontSize = (value, minFontSizeInPx, maxFontSizeInPx, maxLength, lengthThreshold) => {
  if (!value || value.length < lengthThreshold) {
    return maxFontSizeInPx;
  } else if (value.length > maxLength) {
    return minFontSizeInPx;
  } else {
    const lengthRange = maxLength - lengthThreshold;
    const lengthReductionRatio = (value.length - lengthThreshold) / lengthRange;
    const sizeRange = maxFontSizeInPx - minFontSizeInPx;
    const sizeReduction = sizeRange * lengthReductionRatio;
    return Math.round(maxFontSizeInPx - sizeReduction);
  }
};

const formatResult = (result, valueFormatter) => {
  if (!valueFormatter) {
    return result;
  } else if (Array.isArray(result)) {
    return result.map(entry => typeof entry === 'number' ? valueFormatter(entry) : entry);
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


const AutosizeText = ({
  children,
  value,
  minFontSizeInPx,
  maxFontSizeInPx,
  maxLength,
  lengthThreshold,
  mobileRatio,
  valueFormatter
}) => {
  const baseFontSize = getBaseFontSize(value, minFontSizeInPx, maxFontSizeInPx, maxLength, lengthThreshold);
  const result = mobileRatio ? [Math.round(baseFontSize * mobileRatio), null, baseFontSize] : baseFontSize;
  return children({
    value,
    fontSize: formatResult(result, valueFormatter)
  });
};

AutosizeText.propTypes = {
  /** The value to display */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** Minimum font size */
  minFontSizeInPx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),

  /** Maximum font size. Must be different from `minFontSizeInPx` */
  maxFontSizeInPx: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),

  /** The maximum length of the string (`value`) */
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),

  /** Length breakpoint where size will starts to be reduced */
  lengthThreshold: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),

  /** A render func that gets passed the fontSize in px */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),

  /** A function used to convert the value */
  valueFormatter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** Reduction percentage on mobile */
  mobileRatio: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};

const AutosizedSpan = ({
  value,
  fontSize
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Text__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr, {
    fontSize: `${fontSize}px`,
    children: value
  });
};

AutosizeText.defaultProps = {
  children: AutosizedSpan
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutosizeText);

/***/ }),

/***/ 29882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ AvatarWithLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89314);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97619);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const DualAvatarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "AvatarWithLink__DualAvatarContainer",
  componentId: "sc-sp6sc8-0"
})(["position:relative;"]);
const SecondaryAvatarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "AvatarWithLink__SecondaryAvatarContainer",
  componentId: "sc-sp6sc8-1"
})(["position:absolute;background:white;border-radius:6px;display:flex;justify-content:center;align-items:center;bottom:-8px;right:-8px;width:50%;height:50%;border-radius:", ";"], ({
  borderRadius
}) => borderRadius);
/**
 * [GraphQL V2 ONLY] A wrapper around `Avatar` that wraps it in a Link, with support for an optional second
 * profile to be displayed in the corner.
 */

const AvatarWithLink = ({
  account,
  secondaryAccount,
  size
}) => {
  const mainAvatar = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    collective: account,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
      collective: account,
      radius: size
    })
  });

  if (!secondaryAccount) {
    return mainAvatar;
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DualAvatarContainer, {
      children: [mainAvatar, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(SecondaryAvatarContainer, {
        borderRadius: (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAvatarBorderRadius */ .Qt)(secondaryAccount.type),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          collective: secondaryAccount,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
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

/***/ }),

/***/ 21790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Bullet = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BulletSlider__Bullet",
  componentId: "sc-ryg9d9-0"
})(["width:8px;height:8px;background-color:", ";margin-bottom:8px;border-radius:100%;transition:transform 0.1s,background-color 0.3s;cursor:pointer;&:hover{transform:scale(1.5);}&:not(:last-child){margin-right:8px;}", ""], props => props.theme.colors.black[200], props => props.isSelected && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["transform:scale(1.5);background-color:", ";"], props => props.theme.colors.primary[500]));
/**
 * A multi-bullets slider to switch between multiple items (ie. usually a slideshow)
 */

const BulletSlider = ({
  nbItems,
  selectedIndex,
  onChange
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
    flexWrap: "wrap",
    justifyContent: "center",
    children: [...Array(nbItems).keys()].map(index => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Bullet, {
      role: "button",
      tabIndex: 0,
      isSelected: index === selectedIndex,
      onClick: () => onChange(index),
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          onChange(index);
        }
      }
    }, index))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulletSlider);

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

/***/ 78317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Terms),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16010);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * All the terms defined here must have a matching translation
 * in both `TranslatedTerms` and `TranslatedDefinitions`.
 */



const Terms = {
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
const TranslatedTerms = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  [Terms.FISCAL_HOST]: {
    id: "Fiscalhost",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal Host"
    }]
  },
  [Terms.HOST_FEE]: {
    id: "HostFee",
    defaultMessage: [{
      "type": 0,
      "value": "Host fee"
    }]
  },
  [Terms.PLATFORM_FEE]: {
    id: "PlatformFee",
    defaultMessage: [{
      "type": 0,
      "value": "Platform fee"
    }]
  },
  [Terms.GIFT_CARD]: {
    id: "GiftCard",
    defaultMessage: [{
      "type": 0,
      "value": "Gift Card"
    }]
  },
  [Terms.ESTIMATED_BUDGET]: {
    id: "CollectivePage.SectionBudget.Annual",
    defaultMessage: [{
      "type": 0,
      "value": "Estimated annual budget"
    }]
  },
  [Terms.EXPENSE_TYPE]: {
    id: "expense.type",
    defaultMessage: [{
      "type": 0,
      "value": "Type"
    }]
  },
  [Terms.TOTAL_RAISED]: {
    id: "budgetSection-raised",
    defaultMessage: [{
      "type": 0,
      "value": "Total raised"
    }]
  },
  [Terms.TOTAL_INCOME]: {
    id: "budgetSection-income",
    defaultMessage: [{
      "type": 0,
      "value": "Total income"
    }]
  },
  [Terms.BALANCE]: {
    id: "CollectivePage.SectionBudget.Balance",
    defaultMessage: [{
      "type": 0,
      "value": "Today’s balance"
    }]
  }
});
const TranslatedDefinitions = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  [Terms.FISCAL_HOST]: {
    id: "Fiscalhost.definition",
    defaultMessage: [{
      "type": 0,
      "value": "A Fiscal Host is an entity that holds the money on behalf of a Collective, and takes care of accounting, taxes, and invoices."
    }]
  },
  [Terms.HOST_FEE]: {
    id: "host.hostFee.help",
    defaultMessage: [{
      "type": 0,
      "value": "The Host Fee is what a Fiscal Host charges a Collective for its services, such as holding funds, making expense payouts, meeting tax obligations, and access to the Open Collective software platform."
    }]
  },
  [Terms.PLATFORM_FEE]: {
    id: "host.platformFee.help",
    defaultMessage: [{
      "type": 0,
      "value": "The Platform fee is what Open Collective charges for use of the software."
    }]
  },
  [Terms.GIFT_CARD]: {
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
  },
  [Terms.ESTIMATED_BUDGET]: {
    id: "CollectivePage.SectionBudget.Annual.Definition",
    defaultMessage: [{
      "type": 0,
      "value": "Projected annual budget based on financial contributions over the past 12 months."
    }]
  },
  [Terms.EXPENSE_TYPE]: {
    id: "expense.type.tooltip",
    defaultMessage: [{
      "type": 0,
      "value": "Select 'receipt' to get paid back for a purchase already made. Select 'invoice' if you are charging for your time, getting paid in advance, or do not have a receipt."
    }]
  },
  [Terms.TOTAL_RAISED]: {
    id: "budgetSection-raised-definition",
    defaultMessage: [{
      "type": 0,
      "value": "Total net amount available to spend after fees."
    }]
  },
  [Terms.TOTAL_INCOME]: {
    id: "budgetSection-total-income-definition",
    defaultMessage: [{
      "type": 0,
      "value": "Net all time, including host fees and direct contributions."
    }]
  },
  [Terms.BALANCE]: {
    id: "budgetSection-balance-definition",
    defaultMessage: [{
      "type": 0,
      "value": "The current balance of the account. Not including Projects and Events."
    }]
  }
});

const GiftCardLearnMoreLink = msg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
  href: "/gift-cards",
  children: msg
});

const TranslationParams = {
  [Terms.GIFT_CARD]: {
    'learn-more-link': GiftCardLearnMoreLink
  }
};
const UnderlinedTerm = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "DefinedTerm__UnderlinedTerm",
  componentId: "sc-jwaiun-0"
})(["border-bottom:2px dotted;cursor:help;", " ", " ", " ", " &:hover{color:", ";border-color:", ";}"], styled_system__WEBPACK_IMPORTED_MODULE_4__.color, styled_system__WEBPACK_IMPORTED_MODULE_4__.borderColor, styled_system__WEBPACK_IMPORTED_MODULE_4__.typography, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_5__/* .textTransform */ .Qx, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.500'));
/**
 * Underlines the given word and show a tooltip with the definition when focused
 * or hovered. Both the term and the definition are translated.
 */

const DefinedTerm = ({
  intl,
  term,
  textTransform,
  fontSize,
  children,
  color,
  extraTooltipContent
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    content: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [intl.formatMessage(TranslatedDefinitions[term], TranslationParams[term]), extraTooltipContent]
    }),
    children: props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(UnderlinedTerm, _objectSpread(_objectSpread({}, props), {}, {
      textTransform: textTransform,
      color: color,
      borderColor: color,
      fontSize: fontSize,
      children: children || intl.formatMessage(TranslatedTerms[term])
    }))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(DefinedTerm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FilesPreviewModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ArrowLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62941);
/* harmony import */ var _styled_icons_feather_ArrowLeft__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ArrowLeft__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22198);
/* harmony import */ var _styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BulletSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21790);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71792);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89669);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_8__]);
_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["renderInfo", "files"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class FilesPreviewModal extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedIndex: 0,
      isDownloading: false
    });

    _defineProperty(this, "selectPrevFile", () => {
      this.setState(({
        selectedIndex
      }) => ({
        selectedIndex: Math.max(selectedIndex - 1, 0)
      }));
    });

    _defineProperty(this, "selectNextFile", () => {
      this.setState(({
        selectedIndex
      }) => ({
        selectedIndex: Math.min(selectedIndex + 1, (this.props.files?.length || 1) - 1)
      }));
    });
  }

  componentDidMount() {
    this.eventListener = document.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        this.selectPrevFile();
      } else if (event.key === 'ArrowRight') {
        this.selectNextFile();
      } else if (event.key === 'Escape') {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    if (this.eventListener) {
      this.document.removeEventListener(this.eventListener);
      this.eventListener = null;
    }
  }

  getItemOnClick(item) {
    if (!item.onClick) {
      return undefined;
    } else {
      return () => item.onClick({
        isLoading: this.state.isDownloading,
        setLoading: isDownloading => this.setState({
          isDownloading
        })
      });
    }
  }

  renderItemPreview(item) {
    if (this.props.renderItemPreview) {
      return this.props.renderItemPreview({
        item,
        isDownloading: this.state.isDownloading
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      url: item.url,
      size: 350,
      onClick: this.getItemOnClick(item),
      isDownloading: this.state.isDownloading,
      title: item.title
    });
  }

  render() {
    const _this$props = this.props,
          {
      renderInfo,
      files
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    const {
      selectedIndex
    } = this.state;
    const selectedItem = files ? files[selectedIndex] : null;
    const nbFiles = this.props.files?.length || 0;
    const hasMultipleFiles = nbFiles > 1;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, props), {}, {
      width: "100%",
      maxWidth: 450,
      trapFocus: false,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_7__/* .ModalHeader */ .xB, {
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "FilesPreviewModal.AttachmentPreview",
          defaultMessage: [{
            "type": 0,
            "value": "Attachment preview"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_7__/* .ModalBody */ .fe, {
        mb: 0,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
          justifyContent: "center",
          width: "100%",
          children: [hasMultipleFiles && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            buttonSize: "tiny",
            isBorderless: true,
            ml: "-12px",
            px: "4px",
            onClick: this.selectPrevFile,
            disabled: !selectedIndex,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_feather_ArrowLeft__WEBPACK_IMPORTED_MODULE_1__.ArrowLeft, {
              size: 18
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
            mx: 2,
            width: "100%",
            justifyContent: "center",
            children: selectedItem && this.renderItemPreview(selectedItem)
          }), hasMultipleFiles && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            buttonSize: "tiny",
            isBorderless: true,
            mr: "-12px",
            px: "4px",
            onClick: this.selectNextFile,
            disabled: !nbFiles || selectedIndex === nbFiles - 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_2__.ArrowRight, {
              size: 18
            })
          })]
        }), renderInfo && renderInfo({
          item: selectedItem
        }), hasMultipleFiles && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          mt: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_BulletSlider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            nbItems: nbFiles,
            selectedIndex: selectedIndex,
            onChange: selectedIndex => this.setState({
              selectedIndex
            })
          })
        })]
      })]
    }));
  }

}
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60270);
/* harmony import */ var _styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54427);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55457);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63387);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1808);
/* harmony import */ var _lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72832);
/* harmony import */ var _icons_GiftCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19740);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);












/**
 * Shows the data of the given payout method
 */




const PaymentMethodTypeWithIcon = ({
  isLoading,
  type,
  iconSize
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      height: 15,
      width: 90
    });
  }

  switch (type) {
    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_icons_GiftCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
          ml: 2,
          children: (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_7__/* .i18nPaymentMethodType */ .i)(intl, type)
        })]
      });

    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_3__.CreditCard, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
          ml: 2,
          children: (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_7__/* .i18nPaymentMethodType */ .i)(intl, type)
        })]
      });

    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__/* .PAYMENT_METHOD_TYPE.ALIPAY */ .td.ALIPAY:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_1__.Alipay, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
          ml: 2,
          children: "Alipay"
        })]
      });

    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__/* .PAYMENT_METHOD_TYPE.PAYMENT */ .td.PAYMENT:
    case _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__/* .PAYMENT_METHOD_TYPE.SUBSCRIPTION */ .td.SUBSCRIPTION:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_2__.Paypal, {
          size: iconSize,
          color: "#192f86"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
          ml: 2,
          children: "PayPal"
        })]
      });

    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_4__.ExchangeAlt, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
          ml: 2,
          children: (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_7__/* .i18nPaymentMethodType */ .i)(intl, type)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentMethodTypeWithIcon);

/***/ }),

/***/ 96177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_collective_RequestVirtualCardModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81315);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_edit_collective_RequestVirtualCardModal__WEBPACK_IMPORTED_MODULE_1__]);
_edit_collective_RequestVirtualCardModal__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const RequestVirtualCardBtn = ({
  children,
  collective,
  host
}) => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [children({
      onClick: () => setShowModal(true)
    }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_edit_collective_RequestVirtualCardModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      host: host,
      collective: collective,
      onClose: () => setShowModal(false)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestVirtualCardBtn);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

const _excluded = ["filters", "onChange", "disabled", "getLabel", "selected", "minButtonWidth", "buttonHeight", "buttonPadding", "buttonGrow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).attrs({
  buttonSize: 'tiny',
  buttonStyle: 'standard'
}).withConfig({
  displayName: "StyledFilters__FilterButton",
  componentId: "sc-191fmam-0"
})(["font-size:14px;font-weight:400;height:", ";padding:", ";background:#f9fafb;border-color:white;color:", ";", " &:active{background-color:", ";color:", ";}&:focus{border:2px solid #050505;}"], props => props.heignt, props => props.padding, props => props.theme.colors.black[800], props => props['data-selected'] && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["&,&:hover,&:focus{background-color:", ";border:1px solid ", ";color:", ";box-shadow:none;}"], props => props.theme.colors.primary[100], props => props.theme.colors.primary[700], props => props.theme.colors.primary[900]), props => props.theme.colors.primary[100], props => props.theme.colors.primary[800]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "StyledFilters__ButtonContainer",
  componentId: "sc-191fmam-1"
})(["", ""], props => props.flexGrow && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["flex-grow:", ";"], props.flexGrow));

const defaultGetLabel = filter => filter;
/**
 * A controlled component to display a list of filters.
 */


const StyledFilters = _ref => {
  let {
    filters,
    onChange,
    disabled = false,
    getLabel = defaultGetLabel,
    selected = undefined,
    minButtonWidth = undefined,
    buttonHeight = '34px',
    buttonPadding = '4px 14px',
    buttonGrow = undefined
  } = _ref,
      flexProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledFlex, _objectSpread(_objectSpread({
    "data-cy": "filters",
    px: 1,
    py: 1,
    gap: "8px"
  }, flexProps), {}, {
    children: filters.map(filter => {
      const isSelected = filter === selected;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ButtonContainer, {
        flexGrow: buttonGrow,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(FilterButton, {
          "data-cy": `filter-button ${filter.toLowerCase()}`,
          onClick: isSelected ? undefined : () => onChange(filter),
          "data-selected": isSelected,
          minWidth: minButtonWidth,
          disabled: disabled,
          height: buttonHeight,
          padding: buttonPadding,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Span */ .Dr, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledFilters);

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC).withConfig({
  displayName: "StyledFilters___StyledFlex",
  componentId: "sc-191fmam-2"
})({
  overflowX: 'auto'
});

/***/ }),

/***/ 64300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37597);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97274);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const StyledInputMask = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_text_mask__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({}, props));

StyledInputMask.defaultProps = {
  // eslint-disable-next-line react/display-name
  render: (ref, props) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, _objectSpread({
    ref: ref
  }, props))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputMask);

/***/ }),

/***/ 69931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12154);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


const _excluded = ["value", "onChange", "onBlur"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const StyledInputPercentage = _ref => {
  let {
    value,
    onChange,
    onBlur
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({
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
    onChange: e => onChange(parseFloat(e.target.value)),
    onBlur: e => {
      const newValue = lodash_clamp__WEBPACK_IMPORTED_MODULE_1___default()(lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(parseFloat(e.target.value), 2), 0, 100);

      onChange(isNaN(newValue) ? value : newValue);

      if (onBlur) {
        onBlur(e);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputPercentage);

/***/ }),

/***/ 10732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ EditTag),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77192);
/* harmony import */ var _styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21522);
/* harmony import */ var _styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55348);
/* harmony import */ var _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34487);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19156);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

const _excluded = ["suggestedTags", "value", "onChange", "renderUpdatedTags", "defaultValue", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const TagIcon = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_styled_icons_icomoon_PriceTags__WEBPACK_IMPORTED_MODULE_4__.PriceTags).withConfig({
  displayName: "StyledInputTags__TagIcon",
  componentId: "sc-3xnaz6-0"
})(["margin-right:4px;"]);
const EditTag = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right',
  tabIndex: 0
}).withConfig({
  displayName: "StyledInputTags__EditTag",
  componentId: "sc-3xnaz6-1"
})(["border:1px dashed;cursor:pointer;position:relative;padding:2px 10px 2px 6px;background-color:", ";border-color:", ";color:", ";margin-right:4px;margin-bottom:4px;&:not([disabled]){&:hover,&:focus{background-color:", ";border-color:", ";svg{color:", ";}}}&:focus{outline:0;}&[disabled]{cursor:not-allowed;background:#f0f1f2;}", ""], props => props.theme.colors.white.full, props => props.theme.colors.black[200], props => props.theme.colors.black[700], props => props.theme.colors.white.full, props => props.theme.colors.blue[500], props => props.theme.colors.blue[500], props => props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["background-color:", ";border-color:", ";svg{color:", ";}color:", ";"], props => props.theme.colors.blue[50], props => props.theme.colors.blue[600], props => props.theme.colors.blue[600], props => props.theme.colors.black[900]));
const Input = styled_components__WEBPACK_IMPORTED_MODULE_7___default().input.withConfig({
  displayName: "StyledInputTags__Input",
  componentId: "sc-3xnaz6-2"
})(["font-size:12px;line-height:18px;border:0;margin-left:10px;outline:none;width:auto;::placeholder{color:", ";}"], props => props.theme.colors.black[400]);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu).withConfig({
  displayName: "StyledInputTags__InputWrapper",
  componentId: "sc-3xnaz6-3"
})(["position:sticky;top:0;padding:12px 16px;background-color:inherit;:not(:only-child){border-bottom:1px solid ", ";}"], props => props.theme.colors.black[300]);
const TagWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC).withConfig({
  displayName: "StyledInputTags__TagWrapper",
  componentId: "sc-3xnaz6-4"
})(["align-items:center;justify-content:space-between;:not(:first-child){border-top:1px solid ", ";}"], props => props.theme.colors.black[300]);
const TagActionButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default().button.withConfig({
  displayName: "StyledInputTags__TagActionButton",
  componentId: "sc-3xnaz6-5"
})(["cursor:pointer;text-align:center;background-color:transparent;border:none;padding:5px;line-height:inherit;&:disabled{cursor:not-allowed;}"]);
const AddTagButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(TagActionButton).withConfig({
  displayName: "StyledInputTags__AddTagButton",
  componentId: "sc-3xnaz6-6"
})(["&:not([disabled]){color:", ";&:hover,&:focus{color:", ";}}"], props => props.theme.colors.blue[400], props => props.theme.colors.blue[600]);
const DeleteTagButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(TagActionButton).withConfig({
  displayName: "StyledInputTags__DeleteTagButton",
  componentId: "sc-3xnaz6-7"
})(["color:", ";&:hover{color:", ";}"], props => props.theme.colors.black[400], props => props.theme.colors.black[600]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
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

const getOptions = tags => {
  if (!tags || !tags.length) {
    return [];
  } else {
    return tags.map(tag => ({
      label: tag,
      value: tag
    }));
  }
};

const StyledInputTags = _ref => {
  let {
    suggestedTags,
    value,
    onChange,
    renderUpdatedTags,
    defaultValue,
    disabled
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  const wrapperRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  const scrollerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [tags, setTags] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(getOptions(value || defaultValue));
  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const availableSuggestedTags = suggestedTags?.filter(st => !tags.some(t => t.value === st));
  const handleClose = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => {
    if (isOpen) {
      setOpen(false);
    }
  }, [isOpen]);

  const addTag = tag => {
    const newTags = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()([...tags, {
      label: tag.toLowerCase(),
      value: tag.toLowerCase()
    }], 'value');

    setTags(newTags);
    onChange(newTags);
  };

  const handleToggleInput = () => {
    if (isOpen) {
      handleClose();
    } else {
      setOpen(true);
      setTimeout(() => inputRef?.current?.focus(), 50);
    }
  };

  const removeTag = (tag, update) => {
    const updatedTags = tags.filter(v => v.value !== tag);
    setTags(updatedTags);

    if (update) {
      onChange(updatedTags);
    }
  }; // Close when clicking outside


  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(wrapperRef, outside => {
    if (outside) {
      handleClose();
    }
  }); // Closes the modal upon the `ESC` key press.

  (0,_lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)({
    callback: handleClose,
    keyMatch: _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_9__/* .ESCAPE_KEY */ .O_
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_6__.Manager, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
      ref: wrapperRef,
      flexWrap: "wrap",
      children: [(renderUpdatedTags ? tags : getOptions(value))?.map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        variant: "rounded-right",
        mr: "4px",
        mb: "4px",
        color: disabled ? 'black.500' : 'black.700',
        closeButtonProps: {
          onClick: () => removeTag(tag.value, true),
          disabled
        },
        children: tag.label
      }, tag.value)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_6__.Reference, {
        children: ({
          ref
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          ref: ref,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(EditTag, {
            "data-cy": "styled-input-tags-open",
            active: isOpen,
            onClick: handleToggleInput,
            disabled: disabled,
            onKeyDown: e => {
              if (e.key === ' ') {
                e.preventDefault();
                handleToggleInput();
              }
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(TagIcon, {
              size: "14px"
            }), ' ', tags?.length > 0 ? formatMessage(messages.editLabel) : formatMessage(messages.addLabel)]
          })
        })
      }), isOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_6__.Popper, {
        placement: "bottom",
        children: ({
          placement,
          ref,
          style
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
          "data-placement": placement,
          ref: ref,
          style: _objectSpread(_objectSpread({}, style), {}, {
            zIndex: 9999
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, _objectSpread(_objectSpread({
            m: 1,
            overflow: "auto",
            overflowY: "auto"
          }, props), {}, {
            ref: scrollerRef,
            boxShadow: "0px 4px 10px #C4C7CC",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(InputWrapper, {
              color: "black.400",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(TagIcon, {
                size: "16px"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Input, {
                "data-cy": "styled-input-tags-input",
                disabled: disabled,
                placeholder: formatMessage(messages.placeholder),
                ref: inputRef,
                value: inputValue,
                onChange: e => setInputValue(e.target.value),
                onBlur: () => {
                  if (!availableSuggestedTags?.length) {
                    handleClose();
                  }
                },
                onKeyPress: e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const newTag = e.target.value.trim();

                    if (!newTag) {
                      return;
                    }

                    addTag(newTag);
                    setInputValue('');

                    if (!renderUpdatedTags) {
                      // Wait until new tag renders, otherwise we'll scroll to the second-last tag
                      requestAnimationFrame(() => scrollerRef.current?.scrollTo(0, Number.MAX_SAFE_INTEGER), 30);
                    }
                  }
                }
              })]
            }), (suggestedTags?.length || tags?.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
              flexGrow: "1",
              children: [!availableSuggestedTags?.length ? null : availableSuggestedTags.map(st => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(TagWrapper, {
                px: "16px",
                py: "8px",
                backgroundColor: "blue.50",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  type: "info",
                  variant: "rounded-right",
                  children: st
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(AddTagButton, {
                  "data-cy": `styled-input-tags-add-suggestion-${st}`,
                  disabled: disabled,
                  onClick: () => {
                    addTag(st); // When adding the last suggested tag, focus the input

                    setTimeout(() => inputRef?.current?.focus(), 50);
                  },
                  onBlur: () => {
                    if (st === suggestedTags[suggestedTags.length - 1]) {
                      handleToggleInput();
                    }
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_fa_solid_Plus__WEBPACK_IMPORTED_MODULE_2__.Plus, {
                    size: "10px"
                  })
                })]
              }, st)), !renderUpdatedTags && tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(TagWrapper, {
                px: "16px",
                py: "8px",
                autoFocus: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  variant: "rounded-right",
                  children: tag.label
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(DeleteTagButton, {
                  "data-cy": `styled-input-tags-remove-${tag.value}`,
                  disabled: disabled,
                  onClick: () => {
                    removeTag(tag.value);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_3__.Times, {
                    size: "10px"
                  })
                })]
              }, tag.value))]
            })]
          }))
        })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(StyledInputTags));

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

/***/ 14540:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _expenses_ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88243);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10732);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36422);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_10__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const setTagsMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation SetTags($order: OrderReferenceInput, $expense: ExpenseReferenceInput, $tags: [String!]!) {
    setTags(expense: $expense, order: $order, tags: $tags) {
      order {
        id
        tags
      }
      expense {
        id
        tags
      }
    }
  }
`;
/**
 * Display expense tags, with the ability to edit them. Triggers a migration whenever a tag changes.
 */

const TagsForAdmins = ({
  expense,
  order,
  suggestedTags
}) => {
  const [setTags, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(setTagsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  const tagList = expense?.tags || order?.tags;
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputTags__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    disabled: loading,
    value: tagList,
    suggestedTags: suggestedTags,
    onChange: async tags => {
      try {
        const referencedObject = expense ? {
          expense: {
            id: expense.id
          }
        } : {
          order: {
            id: order.id
          }
        };
        await setTags({
          variables: _objectSpread(_objectSpread({}, referencedObject), {}, {
            tags: tags.map(tag => tag.value)
          })
        });
      } catch (e) {
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .i18nGraphqlException */ .t2)(intl, e)
        });
      }
    }
  });
};

const Tag = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledTag__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).attrs({
  mb: '4px',
  mr: '4px',
  variant: 'rounded-right'
}).withConfig({
  displayName: "Tags__Tag",
  componentId: "sc-uszanm-0"
})([""]);

const Tags = ({
  expense,
  order,
  isLoading,
  limit,
  getTagProps,
  children,
  canEdit,
  suggestedTags,
  showUntagged
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const tagList = expense?.tags || order?.tags;

  const renderTag = ({
    tag,
    label
  }) => {
    const extraTagProps = getTagProps?.(tag) || {};

    const renderedTag = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Tag, _objectSpread(_objectSpread({
      "data-cy": "expense-tag"
    }, extraTagProps), {}, {
      children: label ?? tag
    }), tag);

    return children ? children({
      key: tag,
      tag,
      renderedTag,
      props: extraTagProps
    }) : renderedTag;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    flexWrap: "wrap",
    alignItems: "flex-start",
    children: [expense?.type && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_expenses_ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      type: expense.type,
      legacyId: expense.legacyId,
      isLoading: isLoading
    }), canEdit ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(TagsForAdmins, {
      expense: expense,
      order: order,
      suggestedTags: suggestedTags
    }) : tagList && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [tagList.slice(0, limit).map(tag => renderTag({
        tag
      })), showUntagged && renderTag({
        tag: 'untagged',
        label: intl.formatMessage((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
          id: "8/OT+O",
          defaultMessage: [{
            "type": 0,
            "value": "Untagged"
          }]
        }))
      }), tagList.length > limit && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Tag, {
        color: "black.600",
        title: tagList.slice(limit).join(', '),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const TransactionSign = ({
  isCredit
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_StyledSpan, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionSign);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_2__/* .Span */ .Dr).withConfig({
  displayName: "TransactionSign___StyledSpan",
  componentId: "sc-1nw2zky-0"
})({
  verticalAlign: 'text-bottom'
});

/***/ }),

/***/ 87963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24317);
/* harmony import */ var _lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(732);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88705);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["transaction"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const getTransactionStatusMsgType = transaction => {
  if (transaction.isRefund) {
    return 'success';
  }

  if (transaction.isOrderRejected && transaction.isRefunded) {
    return 'error';
  }

  if (transaction.isRefunded || transaction.order?.status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING) {
    return 'grey';
  }

  if (transaction.order?.status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PENDING */ .D.PENDING) {
    return 'warning';
  }

  return 'success';
};

const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
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

const formatStatus = (intl, transaction) => {
  if (transaction.isRefund) {
    return intl.formatMessage(msg.completed);
  } else if (transaction.isOrderRejected && transaction.isRefunded) {
    return intl.formatMessage(msg.rejected);
  } else if (transaction.isRefunded) {
    return intl.formatMessage(msg.refunded);
  } else if ([_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PENDING */ .D.PENDING].includes(transaction.order?.status)) {
    return (0,_lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, transaction.order.status);
  } else {
    return intl.formatMessage(msg.completed);
  }
};

const tooltipMessages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PENDING */ .D.PENDING]: {
    id: "Order.Status.Pending",
    defaultMessage: [{
      "type": 0,
      "value": "Please follow the payment instructions in the confirmation email to complete your transaction."
    }]
  },
  [_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING]: {
    id: "Order.Status.Processing",
    defaultMessage: [{
      "type": 0,
      "value": "We're waiting for a third-party service to confirm the transaction was completed."
    }]
  }
});

const TransactionStatusTag = _ref => {
  let {
    transaction
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const tag = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    type: getTransactionStatusMsgType(transaction),
    fontWeight: "600",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    "data-cy": "expense-status-msg"
  }, props), {}, {
    children: formatStatus(intl, transaction)
  }));

  if ([_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS.PENDING */ .D.PENDING].includes(transaction.order?.status)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      content: () => intl.formatMessage(tooltipMessages[transaction.order.status], _I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionStatusTag);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36625);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_endsWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90857);
/* harmony import */ var lodash_endsWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_endsWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57847);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40710);
/* harmony import */ var _styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89314);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40777);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29242);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29925);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51082);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__]);
_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const _excluded = ["isPrivate", "isLoading", "isDownloading", "url", "size", "maxHeight", "alt", "fileName", "fileSize", "showFileName", "border"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const ImageLink = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
  displayName: "UploadedFilePreview__ImageLink",
  componentId: "sc-21shv-0"
})(["cursor:pointer;overflow:hidden;display:block;width:100%;height:100%;text-align:center;"]);
ImageLink.defaultProps = {
  openInNewTab: true
};
const FileTextIcon = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_4__.FileText).withConfig({
  displayName: "UploadedFilePreview__FileTextIcon",
  componentId: "sc-21shv-1"
})(["opacity:1;"]);
const DownloadIcon = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3__.Download).withConfig({
  displayName: "UploadedFilePreview__DownloadIcon",
  componentId: "sc-21shv-2"
})(["position:absolute;opacity:0;"]);
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "UploadedFilePreview__CardContainer",
  componentId: "sc-21shv-3"
})(["position:relative;border-radius:8px;padding:4px;display:flex;justify-content:center;align-items:center;font-size:12px;max-width:100%;background:white;svg{transition:opacity 0.3s;}img{width:100%;max-height:100%;max-width:100%;border-radius:8px;@media (max-width:40em){object-fit:cover;}}"]);
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "UploadedFilePreview__MainContainer",
  componentId: "sc-21shv-4"
})(["text-align:center;", ""], props => props.hasOnClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["cursor:pointer;&:hover ", "{", "{opacity:0.25;}", "{opacity:1;animation:", " 0.3s;}}"], CardContainer, FileTextIcon, DownloadIcon, _StyledKeyframes__WEBPACK_IMPORTED_MODULE_12__/* .fadeInDown */ .d7));
const FileName = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_Text__WEBPACK_IMPORTED_MODULE_15__.P).withConfig({
  displayName: "UploadedFilePreview__FileName",
  componentId: "sc-21shv-5"
})(["overflow:hidden;text-overflow:ellipsis;"]);
const PrivateIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
  displayName: "UploadedFilePreview__PrivateIconContainer",
  componentId: "sc-21shv-6"
})(["text-align:center;svg{max-height:32px;}"]);

const formatFileSize = sizeInBytes => {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} bytes`;
  } else if (sizeInBytes < 1048576) {
    return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  } else if (sizeInBytes < 1073741824) {
    return `${(sizeInBytes / 1048576).toFixed(2)} MB`;
  } else {
    return `${(sizeInBytes / 1073741824).toFixed(2)} GB`;
  }
};
/**
 * To display the preview of a file uploaded on Open Collective.
 * Supports images and PDFs.
 */


const UploadedFilePreview = _ref => {
  let {
    isPrivate,
    isLoading,
    isDownloading,
    url,
    size,
    maxHeight,
    alt,
    fileName,
    fileSize,
    showFileName,
    border
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  let content = null;

  const isText = lodash_endsWith__WEBPACK_IMPORTED_MODULE_1___default()(url, 'csv') || lodash_endsWith__WEBPACK_IMPORTED_MODULE_1___default()(url, 'txt') || lodash_endsWith__WEBPACK_IMPORTED_MODULE_1___default()(url, 'pdf');

  if (isLoading) {
    content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      borderRadius: 8
    });
  } else if (isDownloading) {
    content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      size: "50%"
    });
  } else if (isPrivate) {
    content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      color: "#dcdee0",
      size: "60%",
      tooltipProps: {
        childrenContainer: PrivateIconContainer
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
        id: "Attachment.Private",
        defaultMessage: [{
          "type": 0,
          "value": "This attachment is private"
        }]
      })
    });
  } else if (!url && props.onClick) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(FileTextIcon, {
        color: "#dcdee0",
        size: "60%"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(DownloadIcon, {
        color: "#b3b3b3",
        size: "30%"
      })]
    });
  } else if (!url) {
    content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_feather_FileText__WEBPACK_IMPORTED_MODULE_4__.FileText, {
      color: "#dcdee0",
      size: "60%"
    });
  } else if (isText) {
    content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(FileTextIcon, {
      color: "#dcdee0",
      size: "60%"
    });
  } else {
    const resizeWidth = Array.isArray(size) ? lodash_max__WEBPACK_IMPORTED_MODULE_0___default()(size) : size;
    content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("img", {
      src: (0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_7__/* .imagePreview */ .Z_)(url, null, {
        width: resizeWidth
      }),
      alt: alt || fileName
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(MainContainer, _objectSpread(_objectSpread({}, props), {}, {
    hasOnClick: Boolean(url || props.onClick),
    maxWidth: size,
    as: url ? _Link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z : 'div',
    href: url,
    title: fileName,
    openInNewTab: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(CardContainer, {
      size: size,
      maxHeight: maxHeight,
      title: fileName,
      border: border,
      children: content
    }), showFileName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      mt: "4px",
      maxWidth: size || 100,
      textAlign: "left",
      px: 1,
      children: [isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        height: 12
      }) : fileName ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(FileName, {
        fontSize: "13px",
        color: "black.700",
        fontWeight: "700",
        children: fileName
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
        fontStyle: "italic",
        fontSize: "13px",
        color: "black.700",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "File.NoFilename",
          defaultMessage: [{
            "type": 0,
            "value": "No filename"
          }]
        })
      }), fileSize && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadedFilePreview);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XG": () => (/* binding */ CreditItem),
/* harmony export */   "cw": () => (/* binding */ DebitItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29925);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children"],
      _excluded2 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/** A single item */



const DebitCreditItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DebitCreditList__DebitCreditItem",
  componentId: "sc-sddud4-0"
})(["position:relative;animation:", " 0.15s;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_2__/* .fadeIn */ .Ji);
/**
 * A list to display CREDIT/DEBIT items, like transactions or expenses. This is
 * built in a generic way so we can use it for either displaying only orders,
 * or only expenses, or both.
 *
 * Please make your children big enough, otherwise the gradient won't show.
 */

const DebitCreditList = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DebitCreditList",
  componentId: "sc-sddud4-1"
})(["border:1px solid #e6e8eb;border-radius:8px 8px 0 0;& > ", ":not(:last-child){border-bottom:1px solid #e6e8eb;}"], DebitCreditItem);
/** A colored gradient to show the type of the transaction */

const DebitCreditGradient = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DebitCreditList__DebitCreditGradient",
  componentId: "sc-sddud4-2"
})(["position:absolute;right:-1px;height:70%;width:2px;margin:14px 0;", ""], props => props.isCredit ? (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background:linear-gradient( 180deg,#00af2f 0%,rgba(106,255,146,0.354167) 53.65%,rgba(255,255,255,0) 100% );"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background:linear-gradient(180deg,rgba(255,255,255,0) 0%,#ffd4df 55.73%,#ff0044 100%);"]));
/** Displays a debit entry in the list */

const DebitItem = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DebitCreditItem, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(DebitCreditGradient, {
      isCredit: false
    }), children]
  }));
};

/** Displays a credit entry in the list */
const CreditItem = _ref2 => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DebitCreditItem, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(DebitCreditGradient, {
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

/***/ 29398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71156);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41238);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56758);
/* harmony import */ var _styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Maximize2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67520);
/* harmony import */ var _styled_icons_feather_Maximize2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Maximize2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19878);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51048);
/* harmony import */ var _lib_theme_helpers__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(13875);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25896);
/* harmony import */ var _AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66337);
/* harmony import */ var _AutosizeText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81966);
/* harmony import */ var _AvatarWithLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29882);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69078);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95370);
/* harmony import */ var _expenses_AdminExpenseStatusTag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80188);
/* harmony import */ var _expenses_ExpenseFilesPreviewModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26438);
/* harmony import */ var _expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66300);
/* harmony import */ var _expenses_ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88243);
/* harmony import */ var _expenses_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9215);
/* harmony import */ var _expenses_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(94833);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(29242);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(88609);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14540);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(90998);
/* harmony import */ var _TransactionSign__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(47924);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_12__, _expenses_AdminExpenseStatusTag__WEBPACK_IMPORTED_MODULE_17__, _expenses_ExpenseFilesPreviewModal__WEBPACK_IMPORTED_MODULE_18__, _expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__, _expenses_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_22__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_30__, _Tags__WEBPACK_IMPORTED_MODULE_31__]);
([_AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_12__, _expenses_AdminExpenseStatusTag__WEBPACK_IMPORTED_MODULE_17__, _expenses_ExpenseFilesPreviewModal__WEBPACK_IMPORTED_MODULE_18__, _expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__, _expenses_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_22__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_30__, _Tags__WEBPACK_IMPORTED_MODULE_31__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



































const DetailColumnHeader = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "ExpenseBudgetItem__DetailColumnHeader",
  componentId: "sc-cdpu61-0"
})(["font-style:normal;font-weight:bold;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#c4c7cc;margin-bottom:2px;"]);
const ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.attrs({
  'data-cy': 'expense-actions'
}).withConfig({
  displayName: "ExpenseBudgetItem__ButtonsContainer",
  componentId: "sc-cdpu61-1"
})(["display:flex;flex-wrap:wrap;margin-top:8px;transition:opacity 0.05s;justify-content:flex-end;@media (max-width:40em){justify-content:center;}& > *:last-child{margin-right:0;}"]);
const ExpenseContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "ExpenseBudgetItem__ExpenseContainer",
  componentId: "sc-cdpu61-2"
})(["padding:16px 27px;@media (hover:hover){&:not(:hover):not(:focus-within) ", "{opacity:0.24;}}"], ButtonsContainer);

const getNbAttachedFiles = expense => {
  if (!expense) {
    return 0;
  } else if (expense.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_9__/* ["default"].INVOICE */ .Z.INVOICE) {
    return lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(expense.attachedFiles);
  } else {
    return lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(expense.attachedFiles) + lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(expense.items.filter(({
      url
    }) => Boolean(url)));
  }
};

const ExpenseBudgetItem = ({
  isLoading,
  host,
  isInverted,
  showAmountSign,
  expense,
  showProcessActions,
  view,
  suggestedTags,
  onProcess
}) => {
  const [hasFilesPreview, showFilesPreview] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
  const featuredProfile = isInverted ? expense?.account : expense?.payee;
  const isAdminView = view === 'admin';
  const isSubmitterView = view === 'submitter';
  const isCharge = expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_9__/* ["default"].CHARGE */ .Z.CHARGE;
  const pendingReceipt = isCharge && expense?.items?.every(i => i.url === null);
  const nbAttachedFiles = !isAdminView ? 0 : getNbAttachedFiles(expense);
  const isExpensePaidOrRejected = [_lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_8__/* ["default"].REJECTED */ .Z.REJECTED, _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_8__/* ["default"].PAID */ .Z.PAID].includes(expense?.status);
  const shouldDisplayStatusTagActions = (isExpensePaidOrRejected || expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_8__/* ["default"].APPROVED */ .Z.APPROVED) && ((0,_expenses_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_22__/* .hasProcessButtons */ .HF)(expense.permissions) || expense.permissions.canMarkAsIncomplete);
  const isMultiCurrency = expense?.amountInAccountCurrency && expense.amountInAccountCurrency?.currency !== expense.currency;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(ExpenseContainer, {
    "data-cy": `expense-container-${expense?.legacyId}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
      justifyContent: "space-between",
      flexWrap: "wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
        flex: "1",
        minWidth: "max(50%, 200px)",
        maxWidth: [null, '70%'],
        mr: "24px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
          mr: 3,
          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            width: 40,
            height: 40
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_AvatarWithLink__WEBPACK_IMPORTED_MODULE_14__/* .AvatarWithLink */ .o, {
            size: 40,
            account: featuredProfile,
            secondaryAccount: featuredProfile.id === expense.createdByAccount.id ? null : expense.createdByAccount
          })
        }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          height: 60
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "Expense.GoToPage",
              defaultMessage: [{
                "type": 0,
                "value": "Go to expense page"
              }]
            }),
            delayHide: 0,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              as: _Link__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
              underlineOnHover: true,
              href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageRoute */ .x0)(expense.account)}/expenses/${expense.legacyId}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_AutosizeText__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                value: expense.description,
                maxLength: 255,
                minFontSizeInPx: 12,
                maxFontSizeInPx: 16,
                lengthThreshold: 72,
                mobileRatio: 0.875,
                valueFormatter: _lib_theme_helpers__WEBPACK_IMPORTED_MODULE_35__/* .toPx */ .aR,
                children: ({
                  value,
                  fontSize
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_32__.H3, {
                  fontWeight: "500",
                  lineHeight: "1.5em",
                  textDecoration: "none",
                  color: "black.900",
                  fontSize: `${fontSize}px`,
                  "data-cy": "expense-title",
                  children: value
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_32__.P, {
            mt: "5px",
            fontSize: "12px",
            color: "black.700",
            children: [isAdminView ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
              collective: expense.account
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
                payee: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  collective: expense.payee
                }),
                account: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  collective: expense.account
                })
              }
            }), ' • ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_DateTime__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              value: expense.createdAt
            }), isAdminView && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
              children: [' • ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "BalanceAmount",
                defaultMessage: [{
                  "type": 0,
                  "value": "Balance "
                }, {
                  "type": 1,
                  "value": "balance"
                }],
                values: {
                  balance: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    amount: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(expense.account, 'stats.balanceWithBlockedFunds.valueInCents', lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(expense.account, 'stats.balanceWithBlockedFunds', 0)),
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
        flexDirection: ['row', 'column'],
        mt: [3, 0],
        flexWrap: "wrap",
        alignItems: ['center', 'flex-end'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
          my: 2,
          mr: [3, 0],
          flexDirection: "column",
          minWidth: 100,
          alignItems: "flex-end",
          "data-cy": "transaction-amount",
          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            height: 19,
            width: 120
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)("div", {
              children: [showAmountSign && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_TransactionSign__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                isCredit: isInverted
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_32__/* .Span */ .Dr, {
                color: "black.700",
                fontSize: "16px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                  amount: expense.amount,
                  currency: expense.currency,
                  precision: 2
                })
              })]
            }), isMultiCurrency && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Container__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              color: "black.600",
              fontSize: "13px",
              my: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                amount: expense.amountInAccountCurrency
              })
            })]
          })
        }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          height: 20,
          width: 140
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
          children: [(isAdminView || isSubmitterView) && pendingReceipt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
            mr: "1px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
              content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "Expense.MissingReceipt",
                defaultMessage: [{
                  "type": 0,
                  "value": "Expense is missing its Receipt"
                }]
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_feather_AlertTriangle__WEBPACK_IMPORTED_MODULE_4__.AlertTriangle, {
                size: 18
              })
            })
          }), (isAdminView || isSubmitterView) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_expenses_ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            type: expense.type,
            legacyId: expense.legacyId,
            mb: 0,
            py: 0,
            mr: "2px",
            fontSize: "9px"
          }), shouldDisplayStatusTagActions ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_expenses_AdminExpenseStatusTag__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            host: host,
            collective: expense.account,
            expense: expense,
            p: "3px 8px"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            status: expense.status,
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.06em",
            lineHeight: "16px",
            p: "3px 8px",
            showTaxFormTag: lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(expense.requiredLegalDocuments, 'US_TAX_FORM'),
            showTaxFormMsg: expense.payee.isAdmin
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
        mt: 2,
        children: isAdminView || isSubmitterView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Flex */ .kC, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
            mr: [3, 4],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(DetailColumnHeader, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "expense.payoutMethod",
                defaultMessage: [{
                  "type": 0,
                  "value": "payout method"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
              mt: "6px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_expenses_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                isLoading: isLoading,
                type: expense?.payoutMethod?.type,
                iconSize: "10px",
                fontSize: "11px",
                fontWeight: "normal",
                color: "black.700"
              })
            })]
          }), nbAttachedFiles > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_24__/* .Box */ .xu, {
            mr: [3, 4],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(DetailColumnHeader, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "Expense.Attachments",
                defaultMessage: [{
                  "type": 0,
                  "value": "Attachments"
                }]
              })
            }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              height: 15,
              width: 90
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
              color: "black.700",
              fontSize: "11px",
              cursor: "pointer",
              buttonSize: "tiny",
              onClick: () => showFilesPreview(true),
              px: 2,
              ml: -2,
              isBorderless: true,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_feather_Maximize2__WEBPACK_IMPORTED_MODULE_5__.Maximize2, {
                size: 10
              }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Tags__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
          expense: expense,
          canEdit: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(expense, 'permissions.canEditTags', false),
          suggestedTags: suggestedTags
        })
      }), showProcessActions && expense?.permissions && !isExpensePaidOrRejected && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(ButtonsContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_expenses_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, {
          host: host,
          collective: expense.account,
          expense: expense,
          permissions: expense.permissions,
          buttonProps: _objectSpread(_objectSpread({}, _expenses_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_22__/* .DEFAULT_PROCESS_EXPENSE_BTN_PROPS */ .oU), {}, {
            mx: 1,
            py: 2
          }),
          onSuccess: onProcess
        })
      })]
    }), hasFilesPreview && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_expenses_ExpenseFilesPreviewModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      collective: expense.account,
      expense: expense,
      onClose: () => showFilesPreview(false)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseBudgetItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61975);
/* harmony import */ var _styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_ionicons_solid_Expand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4965);
/* harmony import */ var _styled_icons_ionicons_solid_Expand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_ionicons_solid_Expand__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_material_ShowChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95830);
/* harmony import */ var _styled_icons_material_ShowChart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_ShowChart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82525);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17632);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51048);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _DefinedTerm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78317);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DefinedTerm__WEBPACK_IMPORTED_MODULE_12__]);
_DefinedTerm__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["amount"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















const StatTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
  displayName: "BudgetStats__StatTitle",
  componentId: "sc-1d1p27o-0"
})(["font-size:12px;line-height:16px;font-weight:500;text-transform:uppercase;margin-bottom:8px;"]);
StatTitle.defaultProps = {
  color: 'black.700'
};

const StatAmount = _ref => {
  let {
    amount
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
    fontSize: "16px",
    lineHeight: "24px",
    color: "black.700",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread({
      amount: amount || null
    }, props))
  });
};

const StatContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "BudgetStats__StatContainer",
  componentId: "sc-1d1p27o-1"
})(["flex:1;padding:16px 32px;svg{margin-right:5px;vertical-align:bottom;}", " border-color:#dcdee0;", ""], props => props.$isMain && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["background:#f7f8fa;"]), styled_system__WEBPACK_IMPORTED_MODULE_6__.border);

const BudgetStats = ({
  collective,
  stats,
  horizontal
}) => {
  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const monthlyRecurring = (stats.activeRecurringContributions?.monthly || 0) + (stats.activeRecurringContributions?.yearly || 0) / 12;
  const isFund = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.FUND */ .eV.FUND;
  const isIndividual = !collective.isHost && (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_7__/* .isIndividualAccount */ .Sh)(collective);
  const borderTop = ['1px solid #dcdee0', 'none', horizontal ? null : '1px solid #dcdee0'];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    display: "flex",
    flex: [null, null, '1 1 300px'],
    width: "100%",
    flexDirection: ['column', 'row', horizontal ? null : 'column'],
    mb: 2,
    children: !isIndividual ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-today-balance",
        $isMain: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            display: "inline-block",
            fontSize: "11px",
            mr: "5px",
            fontWeight: "500",
            width: "12px",
            textAlign: "center",
            children: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .getCurrencySymbol */ .jK)(collective.currency)
          }), ![_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.PROJECT */ .eV.PROJECT, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_8__/* .CollectiveType.EVENT */ .eV.EVENT].includes(collective.type) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* .Terms.BALANCE */ .F.BALANCE,
            textTransform: "uppercase",
            color: "black.700",
            extraTooltipContent: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                mt: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "budgetSection-balance-consolidated",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Total consolidated including Projects and Events: "
                  }, {
                    "type": 1,
                    "value": "amount"
                  }],
                  values: {
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(stats?.consolidatedBalance.valueInCents || 0, collective.currency, {
                      locale
                    })
                  }
                })
              })
            })
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__/* .Span */ .Dr, {
            textTransform: "uppercase",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "CollectivePage.SectionBudget.Balance",
              defaultMessage: [{
                "type": 0,
                "value": "Today’s balance"
              }]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(StatAmount, {
          amount: stats.balance.valueInCents,
          currency: collective.currency
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatContainer, {
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_material_ShowChart__WEBPACK_IMPORTED_MODULE_3__.ShowChart, {
            size: "12px"
          }), collective.isHost ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* .Terms.TOTAL_INCOME */ .F.TOTAL_INCOME,
            textTransform: "uppercase",
            color: "black.700"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* .Terms.TOTAL_RAISED */ .F.TOTAL_RAISED,
            textTransform: "uppercase",
            color: "black.700",
            extraTooltipContent: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
              mt: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "budgetSection-raised-total",
                defaultMessage: [{
                  "type": 0,
                  "value": "Total contributed before fees: "
                }, {
                  "type": 1,
                  "value": "amount"
                }],
                values: {
                  amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(stats?.totalAmountRaised.valueInCents || 0, collective.currency, {
                    locale
                  })
                }
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(StatAmount, {
          amount: stats.totalNetAmountRaised.valueInCents,
          currency: collective.currency
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatContainer, {
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_ionicons_solid_Expand__WEBPACK_IMPORTED_MODULE_2__.Expand, {
            size: "12px"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "budgetSection-disbursed",
            defaultMessage: [{
              "type": 0,
              "value": "Total disbursed"
            }]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(StatAmount, {
          amount: stats.totalNetAmountRaised.valueInCents - stats.balance.valueInCents,
          currency: collective.currency
        })]
      }), !isFund && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-estimated-budget",
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatTitle, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_feather_Calendar__WEBPACK_IMPORTED_MODULE_1__.Calendar, {
            size: "12px"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_12__/* .Terms.ESTIMATED_BUDGET */ .F.ESTIMATED_BUDGET,
            textTransform: "uppercase",
            color: "black.700",
            extraTooltipContent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                mt: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "CollectivePage.SectionBudget.MonthlyRecurringAmount",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Monthly recurring: "
                  }, {
                    "type": 1,
                    "value": "amount"
                  }],
                  values: {
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(monthlyRecurring, collective.currency, {
                      locale
                    })
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
                mt: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "CollectivePage.SectionBudget.TotalAmountReceived",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Total received in the last 12 months: "
                  }, {
                    "type": 1,
                    "value": "amount"
                  }],
                  values: {
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(stats?.totalAmountReceived.valueInCents || 0, collective.currency, {
                      locale
                    })
                  }
                })
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(StatAmount, {
          amount: stats.yearlyBudget.valueInCents,
          currency: collective.currency
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-total-contributed",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatTitle, {
          children: ["\u2191\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "RogA5E",
            defaultMessage: [{
              "type": 0,
              "value": "Total contributed"
            }]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(StatAmount, {
          amount: Math.abs(stats.totalAmountSpent.valueInCents),
          currency: stats.totalAmountSpent.currency
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatContainer, {
        "data-cy": "budgetSection-total-paid-expenses",
        borderTop: borderTop,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(StatTitle, {
          children: ["\u2193\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Nqhan+",
            defaultMessage: [{
              "type": 0,
              "value": "Total received with expenses"
            }]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(StatAmount, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(BudgetStats));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69078);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24839);



/**
 * A special container that center the content with the correct width and margins
 * for the collective page.
 */

const ContainerSectionContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).attrs({
  maxWidth: _constants__WEBPACK_IMPORTED_MODULE_2__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
  px: _constants__WEBPACK_IMPORTED_MODULE_2__/* .Dimensions.PADDING_X */ .Db.PADDING_X,
  m: '0 auto'
}).withConfig({
  displayName: "ContainerSectionContent",
  componentId: "sc-ahctoi-0"
})([""]);
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerSectionContent);

/***/ }),

/***/ 54103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MR": () => (/* binding */ getBudgetSectionQuery),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kr": () => (/* binding */ getBudgetSectionQueryVariables)
/* harmony export */ });
/* unused harmony exports budgetSectionQuery, budgetSectionForIndividualQuery, budgetSectionWithHostQuery */
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33054);
/* harmony import */ var _lib_constants_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3350);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25896);
/* harmony import */ var _budget_DebitCreditList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99962);
/* harmony import */ var _budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29398);
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
/* harmony import */ var _transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1223);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51927);
/* harmony import */ var _BudgetStats__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(91181);
/* harmony import */ var _ContainerSectionContent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(36219);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_12__, _transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_24__, _BudgetStats__WEBPACK_IMPORTED_MODULE_26__]);
([_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_12__, _transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_24__, _BudgetStats__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























const budgetSectionAccountFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  fragment BudgetSectionAccountFields on Account {
    id
    isHost
    type
    stats {
      id
      balance {
        valueInCents
        currency
      }
      consolidatedBalance {
        valueInCents
        currency
      }
      yearlyBudget {
        valueInCents
        currency
      }
      activeRecurringContributions
      totalAmountReceived(periodInMonths: 12) {
        valueInCents
        currency
      }
      totalAmountRaised: totalAmountReceived {
        valueInCents
        currency
      }
      totalNetAmountRaised: totalNetAmountReceived {
        valueInCents
        currency
      }
    }
  }
`;
const budgetSectionQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query BudgetSection($slug: String!, $limit: Int!, $kind: [TransactionKind]) {
    transactions(
      account: { slug: $slug }
      limit: $limit
      kind: $kind
      includeIncognitoTransactions: true
      includeGiftCardTransactions: true
      includeChildrenTransactions: true
    ) {
      ...TransactionsQueryCollectionFragment
    }
    expenses(account: { slug: $slug }, limit: $limit, includeChildrenExpenses: true) {
      totalCount
      nodes {
        id
        ...ExpensesListFieldsFragment
      }
    }
    account(slug: $slug) {
      id
      ...BudgetSectionAccountFields
    }
  }
  ${_transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .transactionsQueryCollectionFragment */ .N}
  ${_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expensesListFieldsFragment */ .xe}
  ${budgetSectionAccountFieldsFragment}
`;
const budgetSectionForIndividualQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query BudgetSectionForIndividual($slug: String!, $limit: Int!, $kind: [TransactionKind]) {
    transactions(
      account: { slug: $slug }
      limit: $limit
      kind: $kind
      includeIncognitoTransactions: true
      includeGiftCardTransactions: true
    ) {
      ...TransactionsQueryCollectionFragment
    }
    expenses(createdByAccount: { slug: $slug }, limit: $limit) {
      totalCount
      nodes {
        id
        ...ExpensesListFieldsFragment
      }
    }
    account(slug: $slug) {
      id
      isHost
      type
      stats {
        id
        totalAmountSpent(net: true) {
          valueInCents
          currency
        }
        totalPaidExpenses {
          valueInCents
          currency
        }
      }
    }
  }
  ${_transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .transactionsQueryCollectionFragment */ .N}
  ${_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expensesListFieldsFragment */ .xe}
`;
const budgetSectionWithHostQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query BudgetSectionWithHost($slug: String!, $hostSlug: String!, $limit: Int!, $kind: [TransactionKind]) {
    host(slug: $hostSlug) {
      id
      ...ExpenseHostFields
    }
    transactions(
      account: { slug: $slug }
      limit: $limit
      kind: $kind
      includeIncognitoTransactions: true
      includeGiftCardTransactions: true
      includeChildrenTransactions: true
    ) {
      ...TransactionsQueryCollectionFragment
    }
    expenses(account: { slug: $slug }, limit: $limit, includeChildrenExpenses: true) {
      totalCount
      nodes {
        id
        ...ExpensesListFieldsFragment
      }
    }
    account(slug: $slug) {
      id
      ...BudgetSectionAccountFields
    }
  }
  ${_transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .transactionsQueryCollectionFragment */ .N}
  ${_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expensesListFieldsFragment */ .xe}
  ${_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_14__/* .expenseHostFields */ .RR}
  ${budgetSectionAccountFieldsFragment}
`;
const getBudgetSectionQuery = (hasHost, isIndividual) => {
  if (hasHost) {
    return budgetSectionWithHostQuery;
  } else if (isIndividual) {
    return budgetSectionForIndividualQuery;
  } else {
    return budgetSectionQuery;
  }
}; // Any change here should be reflected in API's `server/graphql/cache.js`

const getBudgetSectionQueryVariables = (collectiveSlug, hostSlug, isIndividual) => {
  if (isIndividual) {
    return {
      slug: collectiveSlug,
      limit: 3,
      kind: (0,_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_22__/* .getDefaultKinds */ .ce)().filter(kind => kind !== _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind.EXPENSE */ .wz.EXPENSE)
    };
  } else {
    return {
      slug: collectiveSlug,
      hostSlug,
      limit: 3,
      kind: (0,_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_22__/* .getDefaultKinds */ .ce)()
    };
  }
};
const BudgetItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "Budget__BudgetItemContainer",
  componentId: "sc-7g8coq-0"
})(["", ""], props => !props.$isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["border-top:1px solid #e6e8eb;"]));
const FILTERS = ['all', 'expenses', 'transactions'];

const geFilterLabel = (filter, isIndividual) => {
  switch (filter) {
    case 'all':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "SectionTransactions.All",
        defaultMessage: [{
          "type": 0,
          "value": "All"
        }]
      });

    case 'expenses':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "Expenses",
        defaultMessage: [{
          "type": 0,
          "value": "Expenses"
        }]
      });

    case 'transactions':
      return isIndividual ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "Contributions",
        defaultMessage: [{
          "type": 0,
          "value": "Contributions"
        }]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
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

const getBudgetItems = (transactions, expenses, filter) => {
  if (filter === 'expenses') {
    return expenses;
  } else if (filter === 'transactions') {
    return transactions;
  } else {
    const expenseIds = expenses.map(expense => expense.id);
    const transactionsWithoutMatchingExpense = transactions.filter(transaction => !expenseIds.includes(transaction.expense?.id));
    return lodash_orderBy__WEBPACK_IMPORTED_MODULE_0___default()([...transactionsWithoutMatchingExpense, ...expenses], 'createdAt', 'desc').slice(0, 3);
  }
};

const ViewAllLink = ({
  collective,
  filter,
  hasExpenses,
  hasTransactions,
  isIndividual
}) => {
  const isFilterAll = filter === 'all';

  if (filter === 'expenses' || isFilterAll && hasExpenses && !hasTransactions) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/${isIndividual ? 'submitted-expenses' : 'expenses'}`,
      "data-cy": "view-all-expenses-link",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("span", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
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
      href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/transactions`,
      "data-cy": "view-all-transactions-link",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "transactions.viewAll",
        defaultMessage: [{
          "type": 0,
          "value": "View All Transactions"
        }]
      }), "\xA0 \u2192"]
    });
  } else if (filter === 'transactions' || isFilterAll && hasTransactions && !hasExpenses) {
    return isIndividual ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/transactions?kind=ADDED_FUNDS,CONTRIBUTION,PLATFORM_TIP`,
      "data-cy": "view-all-transactions-link",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "CollectivePage.SectionBudget.ViewAllContributions",
        defaultMessage: [{
          "type": 0,
          "value": "View all contributions"
        }]
      }), "\xA0 \u2192"]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageRoute */ .x0)(collective)}/transactions`,
      "data-cy": "view-all-transactions-link",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
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
const SectionBudget = ({
  collective,
  LoggedInUser
}) => {
  const [filter, setFilter] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('all');
  const isIndividual = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_6__/* .isIndividualAccount */ .Sh)(collective) && !collective.isHost;
  const budgetQueryResult = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(getBudgetSectionQuery(Boolean(collective.host), isIndividual), {
    variables: getBudgetSectionQueryVariables(collective.slug, collective.host?.slug, isIndividual),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
  });
  const {
    data,
    refetch
  } = budgetQueryResult;
  const transactions = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, 'transactions.nodes') || _lib_constants_utils__WEBPACK_IMPORTED_MODULE_8__/* .EMPTY_ARRAY */ .L;
  const expenses = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data, 'expenses.nodes') || _lib_constants_utils__WEBPACK_IMPORTED_MODULE_8__/* .EMPTY_ARRAY */ .L;
  const budgetItemsParams = [transactions, expenses, filter];
  const allItems = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => getBudgetItems(...budgetItemsParams), budgetItemsParams);
  const isLoading = !allItems.length && budgetQueryResult.loading;
  const hasExpenses = Boolean(expenses.length);
  const hasTransactions = Boolean(transactions.length); // Refetch data when user logs in to refresh permissions

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
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
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledFilters__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        filters: FILTERS,
        getLabel: filter => geFilterLabel(filter, isIndividual),
        selected: filter,
        onChange: setFilter
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(ViewAllLink, {
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
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        flex: "10",
        mb: 3,
        width: "100%",
        maxWidth: 800,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            height: 300
          }) : !allItems.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            textAlign: "center",
            py: 94,
            px: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Image__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              src: "/static/images/empty-jars.png",
              alt: "Empty jars",
              width: 125,
              height: 125
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "28px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "Budget.Empty",
                defaultMessage: [{
                  "type": 0,
                  "value": "There are no transactions yet."
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
              mt: 2,
              fontSize: "16px",
              lineHeight: "24px",
              color: "black.600",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "Budget.EmptyComeBackLater",
                defaultMessage: [{
                  "type": 0,
                  "value": "Come back to this section once there is at least one transaction!"
                }]
              })
            })]
          }) : allItems.map((item, idx) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(BudgetItemContainer, {
              $isFirst: !idx,
              "data-cy": "single-budget-item",
              children: item.__typename === 'Expense' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_budget_DebitCreditList__WEBPACK_IMPORTED_MODULE_11__/* .DebitItem */ .cw, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  expense: item,
                  host: data?.host,
                  showAmountSign: true,
                  showProcessActions: true
                })
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_transactions_TransactionItem__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                transaction: item,
                collective: collective,
                displayActions: true,
                onMutationSuccess: refetch
              })
            }, `${item.__typename}-${item?.id || idx}`);
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_15__/* .Box */ .xu, {
        width: "32px",
        flex: "1"
      }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        height: 300
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_BudgetStats__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        collective: collective,
        stats: data?.account?.stats
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo((0,_UserProvider__WEBPACK_IMPORTED_MODULE_25__/* .withUser */ .ns)(SectionBudget)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5993);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _icons_CreditCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47483);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32631);
/* harmony import */ var _StyledInputMask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64300);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePicker__WEBPACK_IMPORTED_MODULE_6__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _ToastProvider__WEBPACK_IMPORTED_MODULE_20__]);
([_CollectivePicker__WEBPACK_IMPORTED_MODULE_6__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _ToastProvider__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const _excluded = ["collective", "host", "onSuccess", "onClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }























const initialValues = {
  cardNumber: undefined,
  collective: undefined,
  expiryDate: undefined,
  cvv: undefined,
  assignee: undefined,
  provider: undefined,
  cardName: undefined
};
const assignNewVirtualCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation assignNewVirtualCard(
    $virtualCard: VirtualCardInput!
    $account: AccountReferenceInput!
    $assignee: AccountReferenceInput!
  ) {
    assignNewVirtualCard(virtualCard: $virtualCard, account: $account, assignee: $assignee) {
      id
      name
      last4
      data
    }
  }
`;
const collectiveMembersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query CollectiveMembers($slug: String!) {
    account(slug: $slug) {
      id
      members(role: ADMIN) {
        nodes {
          id
          account {
            id
            name
            imageUrl
            slug
          }
        }
      }
    }
  }
`;

const throttledCall = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 750);

const AssignVirtualCardModal = _ref => {
  let {
    collective,
    host,
    onSuccess,
    onClose
  } = _ref,
      modalProps = _objectWithoutProperties(_ref, _excluded);

  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_20__/* .useToasts */ .e1)();
  const [assignNewVirtualCard, {
    loading: isBusy
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(assignNewVirtualCardMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  const [getCollectiveUsers, {
    loading: isLoadingUsers,
    data: users
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(collectiveMembersQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: _objectSpread(_objectSpread({}, initialValues), {}, {
      collective
    }),

    async onSubmit(values) {
      const {
        collective,
        assignee,
        provider,
        cardName
      } = values;
      const privateData = {
        cardNumber: values.cardNumber.replace(/\s+/g, ''),
        cvv: values.cvv,
        expiryDate: values.expiryDate,
        // Should be removed once https://github.com/opencollective/opencollective-api/pull/7307 is deployed to production
        expireDate: values.expiryDate
      };

      try {
        await assignNewVirtualCard({
          variables: {
            virtualCard: {
              privateData,
              provider,
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
      } catch (e) {
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_20__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Host.VirtualCards.AssignCard.Error",
            defaultMessage: [{
              "type": 0,
              "value": "Error assigning card: "
            }, {
              "type": 1,
              "value": "error"
            }],
            values: {
              error: e.message
            }
          })
        });
        return;
      }

      onSuccess?.();
      handleClose();
    },

    validate(values) {
      const errors = {};

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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (formik.values.collective?.slug) {
      throttledCall(getCollectiveUsers, {
        slug: formik.values.collective.slug
      });
    }
  }, [formik.values.collective]);

  const handleClose = () => {
    formik.resetForm(initialValues);
    formik.setErrors({});
    onClose?.();
  };

  const handleCollectivePick = async option => {
    formik.setFieldValue('collective', option.value);
    formik.setFieldValue('assignee', null);
  };

  const collectiveUsers = users?.account?.members.nodes.map(node => node.account);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    width: "382px",
    onClose: handleClose,
    trapFocus: true
  }, modalProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalHeader */ .xB, {
        onClose: handleClose,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "Host.VirtualCards.AssignCard",
          defaultMessage: [{
            "type": 0,
            "value": "Assign Card"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalBody */ .fe, {
        pt: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Host.VirtualCards.AssignCard.Description",
            defaultMessage: [{
              "type": 0,
              "value": "Assign existing card to a collective sharing the private information below."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          borderColor: "black.300",
          mt: 3
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Grid */ .rj, {
          mt: 3,
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "26px 8px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "goAEwY",
              defaultMessage: [{
                "type": 0,
                "value": "Which collective will be assigned to this card?"
              }]
            }),
            htmlFor: "collective",
            error: formik.touched.collective && formik.errors.collective,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              hostCollectiveIds: [host.legacyId],
              name: "collective",
              id: "collective",
              collective: formik.values.collective,
              isDisabled: !!collective || isBusy,
              customOptions: [{
                value: host,
                label: host.name,
                [_CollectivePicker__WEBPACK_IMPORTED_MODULE_6__/* .FLAG_COLLECTIVE_PICKER_COLLECTIVE */ .rA]: true
              }],
              onChange: handleCollectivePick,
              filterResults: collectives => collectives.filter(c => c.isActive)
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "vwk9m4",
              defaultMessage: [{
                "type": 0,
                "value": "Which user will be responsible for this card?"
              }]
            }),
            htmlFor: "assignee",
            error: formik.touched.assignee && formik.errors.assignee,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              name: "assignee",
              id: "assignee",
              groupByType: false,
              collectives: collectiveUsers,
              collective: formik.values.assignee,
              isDisabled: isLoadingUsers || isBusy,
              onChange: option => formik.setFieldValue('assignee', option.value)
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: "What payment provider do you use for this card?",
            htmlFor: "provider",
            error: formik.touched.provider && formik.errors.provider,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
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
              onChange: option => formik.setFieldValue('provider', option.value)
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "8oufoc",
              defaultMessage: [{
                "type": 0,
                "value": "Card name"
              }]
            }),
            htmlFor: "cardName",
            error: formik.touched.cardName && formik.errors.cardName,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              name: "cardName",
              id: "cardName",
              onChange: formik.handleChange,
              value: formik.values.cardName,
              disabled: isBusy,
              guide: false
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            gridColumn: "1/3",
            labelFontSize: "13px",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "qBST+n",
              defaultMessage: [{
                "type": 0,
                "value": "Card number"
              }]
            }),
            htmlFor: "number",
            error: formik.touched.cardNumber && formik.errors.cardNumber,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputMask__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              name: "cardNumber",
              id: "cardNumber",
              onChange: formik.handleChange,
              value: formik.values.cardNumber,
              mask: [/\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/, ' ', ' ', /\d/, /\d/, /\d/, /\d/],
              render: (ref, props) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, _objectSpread({
                prepend: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_icons_CreditCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
              }, props)),
              disabled: isBusy,
              guide: false
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            labelFontSize: "13px",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "x/oJ17",
              defaultMessage: [{
                "type": 0,
                "value": "Expiry date"
              }]
            }),
            htmlFor: "expiryDate",
            error: formik.touched.expiryDate && formik.errors.expiryDate,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputMask__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              name: "expiryDate",
              id: "expiryDate",
              onChange: formik.handleChange,
              value: formik.values.expiryDate,
              mask: [/[01]/, /\d/, '/', '2', '0', /\d/, /\d/],
              placeholder: "MM/YYYY",
              guide: false,
              disabled: isBusy
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            labelFontSize: "13px",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "Q0lxqm",
              defaultMessage: [{
                "type": 0,
                "value": "CVV/CVC"
              }]
            }),
            htmlFor: "cvv",
            error: formik.touched.cvv && formik.errors.cvv,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputMask__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              id: "cvv",
              name: "cvv",
              onChange: formik.handleChange,
              value: formik.values.cvv,
              mask: [/\d/, /\d/, /\d/],
              guide: false,
              placeholder: "123",
              disabled: isBusy
            }))
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_17__/* .ModalFooter */ .mz, {
        isFullWidth: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          display: "flex",
          justifyContent: ['center', 'flex-end'],
          flexWrap: "Wrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            my: 1,
            minWidth: 140,
            buttonStyle: "primary",
            "data-cy": "confirmation-modal-continue",
            loading: isBusy,
            type: "submit",
            textTransform: "capitalize",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssignVirtualCardModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21408:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditVirtualCardModal)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83514);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98216);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97965);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62131);
/* harmony import */ var _lib_virtual_cards_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25456);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5993);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87262);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePicker__WEBPACK_IMPORTED_MODULE_12__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__, _StyledInputField__WEBPACK_IMPORTED_MODULE_21__, _ToastProvider__WEBPACK_IMPORTED_MODULE_25__]);
([_CollectivePicker__WEBPACK_IMPORTED_MODULE_12__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__, _StyledInputField__WEBPACK_IMPORTED_MODULE_21__, _ToastProvider__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























const editVirtualCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation editVirtualCard(
    $virtualCard: VirtualCardReferenceInput!
    $name: String!
    $limitAmount: AmountInput
    $limitInterval: VirtualCardLimitInterval
    $assignee: AccountReferenceInput!
  ) {
    editVirtualCard(
      virtualCard: $virtualCard
      name: $name
      limitAmount: $limitAmount
      limitInterval: $limitInterval
      assignee: $assignee
    ) {
      id
      name
      spendingLimitAmount
      spendingLimitInterval
      assignee {
        id
        name
        slug
        imageUrl
      }
    }
  }
`;
const createVirtualCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation createVirtualCard(
    $name: String!
    $limitAmount: AmountInput!
    $limitInterval: VirtualCardLimitInterval!
    $account: AccountReferenceInput!
    $assignee: AccountReferenceInput!
  ) {
    createVirtualCard(
      name: $name
      limitAmount: $limitAmount
      limitInterval: $limitInterval
      account: $account
      assignee: $assignee
    ) {
      id
      name
      last4
      data
    }
  }
`; // TODO : refactor this mutation

const collectiveMembersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query CollectiveMembers($slug: String!) {
    account(slug: $slug) {
      id
      members(role: ADMIN) {
        nodes {
          id
          account {
            id
            name
            imageUrl
            slug
          }
        }
      }
    }
  }
`;
const VirtualCardPoliciesQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query VirtualCardPoliciesQuery($slug: String) {
    account(slug: $slug) {
      id
      policies {
        MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL {
          ALL_TIME {
            valueInCents
          }
          DAILY {
            valueInCents
          }
          MONTHLY {
            valueInCents
          }
          PER_AUTHORIZATION {
            valueInCents
          }
          WEEKLY {
            valueInCents
          }
          YEARLY {
            valueInCents
          }
        }
      }
    }
  }
`;

const throttledCall = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 750);

function EditVirtualCardModal({
  host,
  collective,
  virtualCard,
  onSuccess,
  onClose,
  modalProps
}) {
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_25__/* .useToasts */ .e1)();
  const {
    data: policyData,
    loading: isLoadingPolicy
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(VirtualCardPoliciesQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: host.slug
    }
  });
  const MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL = policyData?.account?.policies?.MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL;
  const isEditing = virtualCard?.id ? true : false;
  const formMutation = isEditing ? editVirtualCardMutation : createVirtualCardMutation;
  const [submitForm, {
    loading: isBusy
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(formMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T
  });
  const [getCollectiveUsers, {
    loading: isLoadingUsers,
    data: users
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(collectiveMembersQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T
  });
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
  const isHostAdmin = LoggedInUser?.hasRole(_lib_constants_roles__WEBPACK_IMPORTED_MODULE_6__/* ["default"].ADMIN */ .Z.ADMIN, host);
  const canEditLimit = isHostAdmin && (!isEditing || virtualCard.provider === 'STRIPE');
  const currency = virtualCard?.currency ?? host.currency ?? 'USD';
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
    initialValues: {
      collective: isEditing ? undefined : collective,
      cardName: virtualCard?.name,
      assignee: virtualCard?.assignee,
      limitAmount: canEditLimit ? virtualCard?.spendingLimitAmount : undefined,
      limitInterval: canEditLimit ? virtualCard?.spendingLimitInterval ?? _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .VirtualCardLimitInterval.MONTHLY */ .nV.MONTHLY : undefined
    },

    async onSubmit(values) {
      const {
        assignee,
        cardName,
        limitAmount,
        limitInterval,
        collective
      } = values;

      try {
        const variables = {
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
            currency,
            valueInCents: limitAmount,
            value: limitAmount / 100
          };
          variables.limitInterval = limitInterval;
        }

        await submitForm({
          variables
        });
      } catch (e) {
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_25__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "FAV3Ng",
            defaultMessage: [{
              "type": 0,
              "value": "Error submiting form: "
            }, {
              "type": 1,
              "value": "error"
            }],
            values: {
              error: e.message
            }
          })
        });
        return;
      }

      onSuccess?.( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
        id: "Nd9ioQ",
        defaultMessage: [{
          "type": 0,
          "value": "Card successfully updated"
        }]
      }));
      handleClose();
    },

    validate(values) {
      const errors = {};

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
        const maximumLimitForInterval = (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .graphqlAmountValueInCents */ .kJ)(MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL[values.limitInterval]);

        if (values.limitAmount > maximumLimitForInterval * 100) {
          errors.limitAmount = `Limit for this interval should not exceed ${maximumLimitForInterval} ${currency}`;
        }
      }

      return errors;
    }

  });
  const cardCollective = isEditing ? virtualCard.account : formik.values.collective;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (cardCollective?.slug) {
      throttledCall(getCollectiveUsers, {
        slug: cardCollective.slug
      });
    }
  }, [cardCollective]);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();

  const handleClose = () => {
    onClose?.();
  };

  const virtualCardLimitOptions = Object.keys(_lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_9__/* .VirtualCardLimitInterval */ .nV).map(interval => ({
    value: interval,
    label: intl.formatMessage(_lib_virtual_cards_constants__WEBPACK_IMPORTED_MODULE_11__/* .VirtualCardLimitIntervalI18n */ .v[interval])
  }));
  const collectiveUsers = users?.account?.members.nodes.map(node => node.account);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    width: "382px",
    onClose: handleClose,
    trapFocus: true
  }, modalProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_22__/* .ModalHeader */ .xB, {
        onClose: handleClose,
        hideCloseIcon: false,
        children: isEditing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "TtzWuE",
          defaultMessage: [{
            "type": 0,
            "value": "Edit virtual card"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "FRM4fb",
          defaultMessage: [{
            "type": 0,
            "value": "Create virtual card"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_22__/* .ModalBody */ .fe, {
        pt: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_24__.P, {
          children: isEditing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "9nfFQ7",
            defaultMessage: [{
              "type": 0,
              "value": "Edit virtual card for a collective with the information below."
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "NW8fj9",
            defaultMessage: [{
              "type": 0,
              "value": "Create virtual card for a collective with the information below."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          borderColor: "black.300",
          mt: 3
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          flexDirection: "column",
          mt: 3,
          children: [!isEditing && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            mb: 3,
            labelFontSize: "13px",
            labelFontWeight: "bold",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "goAEwY",
              defaultMessage: [{
                "type": 0,
                "value": "Which collective will be assigned to this card?"
              }]
            }),
            htmlFor: "collective",
            error: formik.touched.collective && formik.errors.collective,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              hostCollectiveIds: [host.legacyId],
              name: "collective",
              id: "collective",
              collective: formik.values.collective,
              isDisabled: !!collective || isBusy,
              customOptions: [{
                value: host,
                label: host.name,
                [_CollectivePicker__WEBPACK_IMPORTED_MODULE_12__/* .FLAG_COLLECTIVE_PICKER_COLLECTIVE */ .rA]: true
              }],
              onChange: option => {
                formik.setFieldValue('collective', option.value);
                formik.setFieldValue('assignee', null);
              },
              filterResults: collectives => collectives.filter(c => c.isActive)
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            labelFontSize: "13px",
            labelFontWeight: "bold",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "agYvVC",
              defaultMessage: [{
                "type": 0,
                "value": "Who is this card assigned to?"
              }]
            }),
            htmlFor: "assignee",
            error: formik.touched.assignee && formik.errors.assignee,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              name: "assignee",
              id: "assignee",
              groupByType: false,
              collectives: collectiveUsers,
              collective: formik.values.assignee,
              isDisabled: isLoadingUsers || isBusy,
              onChange: option => formik.setFieldValue('assignee', option.value)
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            mt: 3,
            labelFontWeight: "bold",
            labelFontSize: "13px",
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "8oufoc",
              defaultMessage: [{
                "type": 0,
                "value": "Card name"
              }]
            }),
            htmlFor: "cardName",
            error: formik.touched.cardName && formik.errors.cardName,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
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
            }))
          }), canEditLimit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
              mt: 3,
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "space-between",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                flexGrow: 1,
                labelFontSize: "13px",
                labelFontWeight: "bold",
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
                    link: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_15__/* .getI18nLink */ .fw)({
                      as: _Link__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                      openInNewTab: true,
                      href: 'https://docs.opencollective.com/help/expenses-and-getting-paid/virtual-cards'
                    })
                  }
                }),
                htmlFor: "limitInterval",
                children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                  inputId: "limitInterval",
                  "data-cy": "limitInterval",
                  error: formik.touched.limitAmount && Boolean(formik.errors.limitAmount),
                  onBlur: () => formik.setFieldTouched('limitInterval', true),
                  onChange: ({
                    value
                  }) => formik.setFieldValue('limitInterval', value),
                  isLoading: isBusy,
                  options: virtualCardLimitOptions,
                  value: virtualCardLimitOptions.find(option => option.value === formik.values.limitInterval)
                }))
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                ml: 3,
                labelFontSize: "13px",
                labelFontWeight: "bold",
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "ehbxf1",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Card Limit"
                  }]
                }),
                htmlFor: "limitAmount",
                children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
                  id: "limitAmount",
                  placeholder: "0.00",
                  error: formik.touched.limitAmount && Boolean(formik.errors.limitAmount),
                  currency: currency,
                  prepend: currency,
                  onChange: value => formik.setFieldValue('limitAmount', value),
                  value: formik.values.limitAmount,
                  disabled: isBusy
                }))
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
              pt: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_24__/* .Span */ .Dr, {
                ml: 1,
                children: intl.formatMessage(_lib_virtual_cards_constants__WEBPACK_IMPORTED_MODULE_11__/* .VirtualCardLimitIntervalDescriptionsI18n */ .h[formik.values.limitInterval])
              })
            }), formik.touched.limitAmount && formik.errors.limitAmount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
              pt: 2,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircle, {
                color: "#E03F6A",
                size: 16
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Text__WEBPACK_IMPORTED_MODULE_24__/* .Span */ .Dr, {
                ml: 1,
                color: "black.700",
                fontSize: "14px",
                children: formik.errors.limitAmount
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_22__/* .ModalFooter */ .mz, {
        isFullWidth: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          justifyContent: "flex-end",
          flexWrap: "wrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            my: 1,
            minWidth: 140,
            buttonStyle: "primary",
            "data-cy": "confirmation-modal-continue",
            loading: isBusy,
            disabled: isLoadingPolicy,
            type: "submit",
            textTransform: "capitalize",
            children: isEditing ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "actions.update",
              defaultMessage: [{
                "type": 0,
                "value": "Update"
              }]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74770);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87262);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _ToastProvider__WEBPACK_IMPORTED_MODULE_18__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _ToastProvider__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const initialValues = {
  agreement: false,
  notes: undefined,
  budget: undefined,
  purpose: undefined
};
const requestVirtualCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation requestVirtualCard($notes: String, $purpose: String, $budget: Int, $account: AccountReferenceInput!) {
    requestVirtualCard(notes: $notes, purpose: $purpose, budget: $budget, account: $account)
  }
`;

const RequestVirtualCardModal = props => {
  const hasPolicy = Boolean(props.host?.settings?.virtualcards?.policy);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .useToasts */ .e1)();
  const [requestNewVirtualCard, {
    loading: isCreating,
    error: createError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(requestVirtualCardMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: _objectSpread(_objectSpread({}, initialValues), {}, {
      collective: props.collective
    }),

    async onSubmit(values) {
      const {
        collective,
        notes,
        purpose,
        budget
      } = values;
      await requestNewVirtualCard({
        variables: {
          notes,
          purpose,
          budget,
          account: typeof collective.id === 'string' ? {
            id: collective.id
          } : {
            legacyId: collective.id
          }
        }
      });
      props.onSuccess?.();
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_18__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Collective.VirtualCards.RequestCard.Success",
          defaultMessage: [{
            "type": 0,
            "value": "Card requested!"
          }]
        })
      });
      props.onClose?.();
    },

    validate(values) {
      const errors = {};

      if (!values.agreement) {
        errors.agreement = 'Required';
      }

      if (!values.purpose) {
        errors.purpose = 'Required';
      }

      if (!values.notes && values.notes?.lenght > 10) {
        errors.notes = 'Required';
      }

      return errors;
    }

  });

  const handleClose = () => {
    formik.setErrors({});
    props.onClose?.();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    width: "382px",
    onClose: handleClose,
    trapFocus: true
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("form", {
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* .ModalHeader */ .xB, {
        onClose: props.onClose,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Collective.VirtualCards.RequestCard",
          defaultMessage: [{
            "type": 0,
            "value": "Request a Card"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* .ModalBody */ .fe, {
        pt: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Collective.VirtualCards.RequestCard.Description",
            defaultMessage: [{
              "type": 0,
              "value": "You can request your fiscal host to assign you a credit card for your expenses."
            }]
          })
        }), hasPolicy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            borderColor: "black.300",
            my: 3
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__.P, {
            fontSize: "13px",
            fontWeight: "600",
            lineHeight: "16px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "Collective.VirtualCards.RequestCard.Policy",
              defaultMessage: [{
                "type": 0,
                "value": "Card use policy"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            mt: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              content: props.host.settings?.virtualcards?.policy
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          borderColor: "black.300",
          my: 3
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          labelFontSize: "13px",
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Collective.VirtualCards.RequestCard.MonthlyBudget",
            defaultMessage: [{
              "type": 0,
              "value": "Monthly Budget"
            }]
          }),
          htmlFor: "budget",
          error: formik.touched.budget && formik.errors.budget,
          labelFontWeight: "500",
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
            currency: "USD",
            name: "budget",
            id: "budget",
            onChange: value => formik.setFieldValue('budget', value),
            value: formik.values.budget,
            disabled: isCreating
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          mt: 3,
          labelFontSize: "13px",
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
            name: "purpose",
            id: "purpose",
            onChange: formik.handleChange,
            value: formik.values.purpose,
            type: "text",
            disabled: isCreating
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          mt: 3,
          labelFontSize: "13px",
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
            name: "notes",
            id: "notes",
            onChange: formik.handleChange,
            value: formik.values.notes,
            disabled: isCreating
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            name: "tos",
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "16px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "Collective.VirtualCards.RequestCard.Agreement",
                defaultMessage: [{
                  "type": 0,
                  "value": "I agree to all the terms and conditions set by the host and Open Collective"
                }]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Text__WEBPACK_IMPORTED_MODULE_17__/* .Span */ .Dr, {
                color: "black.500",
                children: " *"
              })]
            }),
            required: true,
            checked: formik.values.agreement,
            onChange: ({
              checked
            }) => formik.setFieldValue('agreement', checked),
            error: formik.touched.agreement && formik.errors.agreement
          })
        }), createError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            type: "error",
            fontSize: "13px",
            children: createError.message
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_15__/* .ModalFooter */ .mz, {
        isFullWidth: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          display: "flex",
          justifyContent: ['center', 'flex-end'],
          flexWrap: "Wrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            my: 1,
            minWidth: 140,
            buttonStyle: 'primary',
            "data-cy": "confirmation-modal-continue",
            loading: isCreating,
            type: "submit",
            disabled: !formik.isValid,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestVirtualCardModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18022);
/* harmony import */ var _styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38083);
/* harmony import */ var _lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55348);
/* harmony import */ var _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34487);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8480);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40486);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36422);
/* harmony import */ var _ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66300);
/* harmony import */ var _MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77959);
/* harmony import */ var _ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94833);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_14__, _MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_15__, _ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_16__]);
([_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_14__, _MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_15__, _ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["expense", "host", "collective"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















const ExpenseStatusTag = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_StyledTag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
  displayName: "AdminExpenseStatusTag__ExpenseStatusTag",
  componentId: "sc-16jxaf8-0"
})(["cursor:pointer;font-weight:bold;font-size:12px;line-height:16px;letter-spacing:0.06em;text-transform:uppercase;"]);
const PopupContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(`div`).withConfig({
  displayName: "AdminExpenseStatusTag__PopupContainer",
  componentId: "sc-16jxaf8-1"
})(["z-index:2;border-radius:5px;font-size:12px;text-transform:initial;white-space:normal;min-width:200px;background:#ffffff;box-shadow:0px 4px 8px rgba(20,20,20,0.16);svg{display:none;}", "{display:block;margin:auto;}"], _StyledSpinner__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('div').withConfig({
  displayName: "AdminExpenseStatusTag__Arrow",
  componentId: "sc-16jxaf8-2"
})(["position:absolute;font-size:8px;width:3em;height:3em;top:0;left:0;margin-top:-0.9em;&::before{content:'';margin:auto;display:block;border-style:solid;border-width:0 1.5em 1em 1.5em;border-color:transparent transparent #ffffff transparent;filter:drop-shadow(0px -3px 3px rgba(20,20,20,0.1));}"]);
const ChevronDownIcon = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_styled_icons_boxicons_regular_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown).withConfig({
  displayName: "AdminExpenseStatusTag__ChevronDownIcon",
  componentId: "sc-16jxaf8-3"
})(["width:15px;height:15px;cursor:pointer;color:inherit;"]);

const AdminExpenseStatusTag = _ref => {
  let {
    expense,
    host,
    collective
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const wrapperRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  const [showPopup, setShowPopup] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isClosable, setClosable] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);
  const [showMarkAsIncompleteModal, setMarkAsIncompleteModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const hideProcessExpenseButtons = expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_6__/* ["default"].APPROVED */ .Z.APPROVED;
  const buttonProps = {
    px: 2,
    py: 2,
    isBorderless: true,
    width: '100%',
    textAlign: 'left'
  };

  const onClick = () => {
    setShowPopup(true);
  }; // Close when clicking outside


  (0,_lib_hooks_useGlobalBlur__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(wrapperRef, outside => {
    if (outside && isClosable && showPopup && !document.getElementById('mark-expense-as-unpaid-modal')) {
      setShowPopup(false);
    }
  }); // Closes the modal upon the `ESC` key press.

  (0,_lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)({
    callback: () => {
      if (isClosable) {
        setShowPopup(false);
      }
    },
    keyMatch: _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_8__/* .ESCAPE_KEY */ .O_
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_popper__WEBPACK_IMPORTED_MODULE_4__.Manager, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_4__.Reference, {
        children: ({
          ref
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
          ref: ref,
          onClick: onClick,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ExpenseStatusTag, _objectSpread(_objectSpread({
            type: (0,_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_14__/* .getExpenseStatusMsgType */ .X)(expense.status),
            "data-cy": "admin-expense-status-msg"
          }, props), {}, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
              children: [(0,_lib_i18n_expense__WEBPACK_IMPORTED_MODULE_9__/* .i18nExpenseStatus */ .zr)(intl, expense.status), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ChevronDownIcon, {})]
            })
          }))
        })
      }), showPopup && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_popper__WEBPACK_IMPORTED_MODULE_4__.Popper, {
        placement: "bottom",
        children: ({
          ref,
          style,
          arrowProps
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(PopupContainer, {
          ref: ref,
          style: style,
          onMouseEnter: onClick,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
            alignItems: "center",
            ref: wrapperRef,
            flexDirection: "column",
            p: 2,
            children: [!hideProcessExpenseButtons && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
              host: host,
              buttonProps: buttonProps,
              collective: collective,
              expense: expense,
              permissions: expense.permissions,
              onModalToggle: isOpen => setClosable(!isOpen),
              onSuccess: () => setShowPopup(false)
            }), expense?.permissions?.canMarkAsIncomplete && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, buttonProps), {}, {
              onClick: () => {
                setMarkAsIncompleteModal(true);
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_16__/* .ButtonLabel */ .aN, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "actions.markAsIncomplete",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Mark as Incomplete"
                  }]
                })
              })
            }))]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(Arrow, {
            ref: arrowProps.ref,
            style: arrowProps.style
          })]
        })
      }), document.body)]
    }), showMarkAsIncompleteModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      expense: expense,
      onClose: () => setMarkAsIncompleteModal(false)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminExpenseStatusTag);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72743);
/* harmony import */ var _apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Trash2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72142);
/* harmony import */ var _styled_icons_feather_Trash2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Trash2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47988);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_10__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const deleteExpenseMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation DeleteExpense($id: String!) {
    deleteExpense(expense: { id: $id }) {
      id
    }
  }
`;

const removeExpenseFromCache = (cache, {
  data: {
    deleteExpense
  }
}) => {
  cache.modify({
    fields: {
      expenses(existingExpenses, {
        readField
      }) {
        if (!existingExpenses?.nodes) {
          return existingExpenses;
        } else {
          return _objectSpread(_objectSpread({}, existingExpenses), {}, {
            totalCount: existingExpenses.totalCount - 1,
            nodes: existingExpenses.nodes.filter(expense => deleteExpense.id !== readField('id', expense))
          });
        }
      }

    }
  });
};

const DeleteExpenseButton = ({
  expense,
  onDelete,
  buttonProps,
  isDisabled,
  onModalToggle
}) => {
  const [hasDeleteConfirm, setDeleteConfirm] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();

  const showDeleteConfirm = isOpen => {
    setDeleteConfirm(isOpen);
    onModalToggle?.(isOpen);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      buttonStyle: "dangerSecondary",
      "data-cy": "delete-expense-button",
      disabled: isDisabled
    }, buttonProps), {}, {
      onClick: () => showDeleteConfirm(true),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_feather_Trash2__WEBPACK_IMPORTED_MODULE_3__.Trash2, {
        size: "1em"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
        ml: "6px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "actions.delete",
          defaultMessage: [{
            "type": 0,
            "value": "Delete"
          }]
        })
      })]
    })), hasDeleteConfirm && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_apollo_client_react_components__WEBPACK_IMPORTED_MODULE_2__.Mutation, {
      mutation: deleteExpenseMutation,
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T,
      update: removeExpenseFromCache,
      children: deleteExpense => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        isDanger: true,
        type: "delete",
        onClose: () => showDeleteConfirm(false),
        header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "actions.delete",
          defaultMessage: [{
            "type": 0,
            "value": "Delete"
          }]
        }),
        continueHandler: async () => {
          try {
            await deleteExpense({
              variables: {
                id: expense.id
              }
            });
          } catch (e) {
            addToast({
              type: _ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
              message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(intl, e)
            });
          }

          if (onDelete) {
            await onDelete(expense);
          }

          showDeleteConfirm(false);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "Expense.DeleteDetails",
          defaultMessage: [{
            "type": 0,
            "value": "This will permanently delete the expense and all attachments and comments."
          }]
        })
      })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteExpenseButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57847);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28109);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19878);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _expenses_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41016);
/* harmony import */ var _FilesPreviewModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17208);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89669);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_expenses_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__, _FilesPreviewModal__WEBPACK_IMPORTED_MODULE_7__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_12__]);
([_expenses_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__, _FilesPreviewModal__WEBPACK_IMPORTED_MODULE_7__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const FileInfo = ({
  collective,
  expense,
  item,
  invoiceBlob
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
  justifyContent: "space-between",
  px: 25,
  mt: 2,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
    flex: "1 1 65%",
    children: [(item.description || item.name) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
      fontSize: "14px",
      lineHeight: "21px",
      color: "black.900",
      mb: 1,
      children: item.description || item.name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
      fontSize: "11px",
      color: "black.500",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
        value: item.incurredAt,
        month: "short",
        year: "numeric",
        day: "numeric"
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    ml: 2,
    flex: "1 1 35%",
    textAlign: "right",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      children: item.amount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        amount: item.amount,
        currency: expense.currency
      })
    }), invoiceBlob && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      buttonSize: "tiny",
      isBorderless: true,
      mr: "-12px",
      mt: 1,
      onClick: () => (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(invoiceBlob, (0,_expenses_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__/* .getExpenseInvoiceFilename */ .eS)(collective, expense)),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_1__.Download, {
        size: "1em"
      }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "Download",
        defaultMessage: [{
          "type": 0,
          "value": "Download"
        }]
      })]
    })]
  })]
});

const getFilesFromExpense = (collective, expense) => {
  if (!expense) {
    return [];
  }

  if (expense.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].INVOICE */ .Z.INVOICE) {
    return expense.attachedFiles || [];
  } else {
    const items = expense.items?.filter(({
      url
    }) => Boolean(url)) || [];
    return [...items, ...expense.attachedFiles];
  }
};

const ExpenseInvoicePreview = ({
  isLoading,
  fileURL
}) => {
  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      isDownloading: true,
      width: "100%",
      minHeight: 350
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("iframe", {
      title: "Expense Invoice File URL",
      width: "100%",
      height: 350,
      src: fileURL
    });
  }
};

const ExpenseFilesPreviewModal = ({
  collective,
  expense,
  onClose
}) => {
  const [invoiceFile, setInvoiceFile] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [invoiceBlob, setInvoiceBlob] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [invoiceError, setInvoiceError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const files = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getFilesFromExpense(collective, expense), [collective, expense]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    (0,_expenses_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__/* .generateInvoiceBlob */ .I6)(expense).then(file => {
      setInvoiceError(false);
      setInvoiceBlob(file);
      setInvoiceFile(URL.createObjectURL(file));
    }).catch(() => {
      setInvoiceError(true);
    });
    return () => {
      if (invoiceFile) {
        URL.revokeObjectURL(invoiceFile);
      }
    };
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_FilesPreviewModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    files: files,
    onClose: onClose,
    renderInfo: ({
      item
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FileInfo, {
      collective: collective,
      expense: expense,
      item: item,
      invoiceBlob: item.type === 'EXPENSE_INVOICE' ? invoiceBlob : null
    }),
    renderItemPreview: ({
      item
    }) => item.type === 'EXPENSE_INVOICE' ? invoiceError ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_expenses_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
      expense: expense,
      collective: collective,
      children: ({
        isLoading,
        downloadInvoice
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        onClick: downloadInvoice,
        isDownloading: isLoading,
        fileName: (0,_expenses_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__/* .getExpenseInvoiceFilename */ .eS)(collective, expense),
        size: 350
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ExpenseInvoicePreview, {
      isLoading: !invoiceFile,
      fileURL: invoiceFile
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      url: item.url,
      size: 350,
      title: item.title,
      fileName: item.name
    })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseFilesPreviewModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ validateTaxGST)
/* harmony export */ });
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12136);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__]);
_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const validateTaxGST = (intl, tax) => {
  const errors = {};

  if (tax.type !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.TaxType.GST) {
    return errors;
  } // Not validating rate since it can't be customized
  // ID number is required if there's a tax rate


  if (tax.rate && !tax.idNumber) {
    errors.idNumber = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_4__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  }

  return errors;
};

const ExpenseGSTFormikFields = ({
  formik,
  isOptional
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)(); // If mounted, it means that the form is subject to GST. Let's make sure we initialize taxes field accordingly

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (!formik.values.taxes?.[0]?.type !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.TaxType.GST) {
      formik.setFieldValue('taxes.0', _objectSpread(_objectSpread({}, formik.values.taxes?.[0]), {}, {
        type: _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.TaxType.GST,
        rate: _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.GST_RATE_PERCENT / 100
      }));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .rj, {
    gridTemplateColumns: "75px minmax(120px, 1fr)",
    gridGap: 2,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
        value: lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(field.value * 100, 2),
        append: "%",
        min: 0,
        max: 100,
        step: "0.01",
        disabled: true
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
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
      }))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseGSTFormikFields);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I6": () => (/* binding */ generateInvoiceBlob),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eS": () => (/* binding */ getExpenseInvoiceFilename)
/* harmony export */ });
/* unused harmony exports downloadExpenseInvoice, useExpenseInvoiceDownloadHelper */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28109);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65985);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19878);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25896);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_7__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const getPrettyDate = expense => {
  if (!expense?.createdAt) {
    return '';
  }

  const utc = new Date(expense.createdAt).toISOString();
  return `-${utc.split('T')[0]}`;
};

const getExpenseInvoiceFilename = (collective, expense) => {
  const prettyDate = getPrettyDate(expense);
  return `Expense-${expense.legacyId}-${collective?.slug}-invoice${prettyDate}.pdf`;
};
const generateInvoiceBlob = async expense => {
  const invoiceUrl = (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__/* .expenseInvoiceUrl */ .XX)(expense.id);
  return (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchFromPDFService */ .WD)(invoiceUrl);
};
const downloadExpenseInvoice = async (collective, expense, {
  setLoading,
  isLoading,
  onError
}) => {
  if (isLoading) {
    return false;
  }

  const filename = getExpenseInvoiceFilename(collective, expense);
  setLoading(true);

  try {
    const file = await generateInvoiceBlob(expense);
    return (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(file, filename);
  } catch (e) {
    const error = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .getErrorFromPdfService */ .be)(e);
    onError(error);
  } finally {
    setLoading(false);
  }
};
const useExpenseInvoiceDownloadHelper = ({
  expense,
  collective,
  onError,
  disablePreview
}) => {
  const [isLoading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_7__/* .useToasts */ .e1)();

  if (![_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].SETTLEMENT */ .Z.SETTLEMENT].includes(expense.type)) {
    return {
      error: null,
      isLoading: false,
      filename: '',
      downloadInvoice: null
    };
  }

  return {
    error,
    isLoading,
    filename: getExpenseInvoiceFilename(collective, expense),
    downloadInvoice: () => {
      return downloadExpenseInvoice(collective, expense, {
        setLoading,
        isLoading,
        disablePreview,
        onError: error => {
          setError(error);

          if (onError) {
            onError(error);
          } else {
            addToast({
              type: _ToastProvider__WEBPACK_IMPORTED_MODULE_7__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
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

const ExpenseInvoiceDownloadHelper = ({
  children,
  expense,
  collective,
  onError,
  disablePreview
}) => {
  const state = useExpenseInvoiceDownloadHelper({
    expense,
    collective,
    onError,
    disablePreview
  });
  return children(state);
};

ExpenseInvoiceDownloadHelper.propTypes = {
  /** Link content */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),

  /** Expense */
  expense: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    legacyId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
  }).isRequired,

  /** Collective where the expense was posted */
  collective: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
  }),

  /** Called with an error if anything wrong happens */
  onError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseInvoiceDownloadHelper);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getExpenseStatusMsgType),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38083);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8480);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88705);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["children"],
      _excluded2 = ["status", "showTaxFormTag", "showTaxFormMsg"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const getExpenseStatusMsgType = status => {
  switch (status) {
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].REJECTED */ .Z.REJECTED:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SPAM */ .Z.SPAM:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].ERROR */ .Z.ERROR:
      return 'error';

    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PENDING */ .Z.PENDING:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED:
      return 'warning';

    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SCHEDULED_FOR_PAYMENT */ .Z.SCHEDULED_FOR_PAYMENT:
    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].APPROVED */ .Z.APPROVED:
      return 'info';

    case _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PAID */ .Z.PAID:
    case 'COMPLETED':
      return 'success';
  }
};

const ExtendedTag = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
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
const ExpenseStatusTag = _ref2 => {
  let {
    status,
    showTaxFormTag,
    showTaxFormMsg
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const tagProps = _objectSpread({
    fontWeight: '600',
    fontSize: '10px',
    letterSpacing: '0.8px',
    textTransform: 'uppercase'
  }, props);

  const tag = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({
    type: getExpenseStatusMsgType(status),
    "data-cy": "expense-status-msg"
  }, tagProps), props), {}, {
    children: (0,_lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__/* .i18nExpenseStatus */ .zr)(intl, status)
  }));

  if (status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      alignItems: "center",
      children: [tag, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ExtendedTag, _objectSpread(_objectSpread({}, tagProps), {}, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      alignItems: "center",
      children: [tag, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ExtendedTag, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "TaxForm",
          defaultMessage: [{
            "type": 0,
            "value": "Tax form"
          }]
        })
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      alignItems: "center",
      children: [tag, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
          values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ExtendedTag, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseStatusTag);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19878);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8480);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29242);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36422);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["type", "legacyId", "isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ExpenseTypeTag = _ref => {
  let {
    type,
    legacyId,
    isLoading
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    height: 24,
    width: 73,
    borderRadius: "12px 2px 2px 12px"
  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    variant: "rounded-left",
    type: "grey",
    mb: "4px",
    mr: "10px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "600"
  }, props), {}, {
    children: (0,_lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__/* .i18nExpenseType */ .kD)(intl, type, legacyId)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseTypeTag);

/***/ }),

/***/ 1868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ validateTaxVAT),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40986);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__]);
_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const validateTaxVAT = (intl, tax) => {
  const errors = {};

  if (tax.type !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.VAT) {
    return errors;
  }

  if (isNaN(tax.rate) || lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(tax.rate)) {
    errors.rate = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  } else {
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_6__/* .verifyValueInRange */ .VA)(intl, errors, tax, 'rate', 0, 1);
  } // ID number is required if there's a tax rate


  if (tax.rate) {
    if (!tax.idNumber) {
      errors.idNumber = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
    } else if (!(0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.checkVATNumberFormat)(tax.idNumber).isValid) {
      errors.idNumber = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
    }
  }

  return errors;
};

const ExpenseVATFormikFields = ({
  formik,
  isOptional
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)(); // If mounted, it means that the form is subject to VAT. Let's make sure we initialize taxes field accordingly

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    if (!formik.values.taxes?.[0]?.type !== _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.VAT) {
      formik.setFieldValue('taxes.0.type', _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.VAT);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .rj, {
    gridTemplateColumns: "120px minmax(120px, 1fr)",
    gridGap: 2,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
        value: lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(field.value * 100, 2),
        onChange: e => formik.setFieldValue(e.target.name, lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value / 100, 4)),
        append: "%",
        min: 0,
        max: 100,
        step: "0.01"
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      name: "taxes.0.idNumber",
      htmlFor: "vat-number",
      label: intl.formatMessage({
        id: "1gjV2o",
        defaultMessage: [{
          "type": 0,
          "value": "VAT identifier"
        }]
      }),
      required: !isOptional && Boolean(formik.values.taxes?.[0]?.rate),
      mr: 2,
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
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
      }))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseVATFormikFields);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77959:
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
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87262);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71792);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31330);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17738);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  reasonPlaceholder: {
    id: "g0KLMH",
    defaultMessage: [{
      "type": 0,
      "value": "e.g. Email Address is wrong"
    }]
  }
});
const processExpenseMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ProcessExpense($id: String, $legacyId: Int, $action: ExpenseProcessAction!, $message: String) {
    processExpense(expense: { id: $id, legacyId: $legacyId }, action: $action, message: $message) {
      id
      ...ExpensePageExpenseFields
    }
  }

  ${_graphql_fragments__WEBPACK_IMPORTED_MODULE_12__/* .expensePageExpenseFieldsFragment */ .Wg}
`;

const MarkExpenseAsIncompleteModal = ({
  expense,
  onClose
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const mutationOptions = {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  };
  const [processExpense, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(processExpenseMutation, mutationOptions);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .useToasts */ .e1)();

  const onConfirm = async () => {
    try {
      const variables = {
        id: expense.id,
        legacyId: expense.legacyId,
        action: 'MARK_AS_INCOMPLETE',
        message
      };
      await processExpense({
        variables
      });
      onClose();
    } catch (error) {
      // Display a toast with light variant since we're in a modal
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_11__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        variant: 'light',
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .i18nGraphqlException */ .t2)(intl, error)
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
    role: "alertdialog",
    width: "432px",
    onClose: onClose,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalHeader */ .xB, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "hu7oaH",
        defaultMessage: [{
          "type": 0,
          "value": "Mark as incomplete"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalBody */ .fe, {
      pt: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
        color: "black.700",
        lineHeight: "20px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "x7D8vH",
          defaultMessage: [{
            "type": 0,
            "value": "Please mention the reason why this expense has been marked as incomplete. The reason will be shared with the user and also be documented as a comment under the expense."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          name: "reason",
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
            minHeight: 100,
            placeholder: intl.formatMessage(messages.reasonPlaceholder),
            onChange: e => setMessage(e.target.value)
          }))
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_8__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        gap: "16px",
        justifyContent: "flex-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          buttonStyle: "secondary",
          buttonSize: "small",
          onClick: onConfirm,
          minWidth: 180,
          loading: loading,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "lNyyJU",
            defaultMessage: [{
              "type": 0,
              "value": "Confirm and mark as incomplete"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          buttonStyle: "standard",
          buttonSize: "small",
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkExpenseAsIncompleteModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47988);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41433);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["onConfirm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const MarkExpenseAsUnpaidButton = _ref => {
  let {
    onConfirm
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [hasModal, setHasModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [refundPaymentProcessorFee, setRefundPaymentProcessorFee] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true);

  const button = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    buttonStyle: "dangerSecondary",
    onClick: () => setHasModal(true),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [button, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      id: "mark-expense-as-unpaid-modal",
      header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
      onClose: () => setHasModal(false),
      "data-cy": "mark-expense-as-unpaid-modal",
      continueHandler: async () => {
        try {
          await onConfirm(refundPaymentProcessorFee);
        } catch (e) {
          setHasModal(false);
          throw e;
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        mb: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Expense.markAsUnpaid.details",
          defaultMessage: [{
            "type": 0,
            "value": "The amount will be credited back to the Collective balance."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        name: "processorFeeRefunded",
        checked: refundPaymentProcessorFee,
        onChange: ({
          checked
        }) => setRefundPaymentProcessorFee(checked),
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkExpenseAsUnpaidButton);

/***/ }),

/***/ 92058:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41238);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54427);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8866);
/* harmony import */ var _styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56508);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17632);
/* harmony import */ var _icons_TransferwiseIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12173);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _PayExpenseModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83938);
/* harmony import */ var _SecurityChecksModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__, _PayExpenseModal__WEBPACK_IMPORTED_MODULE_12__]);
([_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__, _PayExpenseModal__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const _excluded = ["type", "host"],
      _excluded2 = ["expense", "collective", "host", "disabled", "onSubmit", "error"],
      _excluded3 = ["action"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const getDisabledMessage = (expense, collective, host, payoutMethod) => {
  // Collective / Balance can be v1 or v2 there ...
  const expenseAmountInAccountCurrency = (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .getAmountInCents */ .KK)(expense.amountInAccountCurrency);

  const balance = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'stats.balanceWithBlockedFunds.valueInCents', lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'stats.balanceWithBlockedFunds', 0));

  if (!host) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "expense.pay.error.noHost",
      defaultMessage: [{
        "type": 0,
        "value": "Expenses cannot be paid without a Fiscal Host"
      }]
    });
  } else if (balance < expenseAmountInAccountCurrency) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "expense.pay.error.insufficientBalance",
      defaultMessage: [{
        "type": 0,
        "value": "Insufficient balance"
      }]
    });
  } else if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(expense.requiredLegalDocuments, 'US_TAX_FORM')) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
      id: "TaxForm.DisabledPayment",
      defaultMessage: [{
        "type": 0,
        "value": "Unable to pay because tax form has not been submitted."
      }]
    });
  } else if (!payoutMethod) {
    return null;
  } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT) {
    return null;
  } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE) {
    if (!expense.payee.host) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
        id: "expense.pay.error.payee.noHost",
        defaultMessage: [{
          "type": 0,
          "value": "Unable to pay because payee Collective does not have a Fiscal Host."
        }]
      });
    }

    if (expense.payee.host.id !== host.id) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
        id: "expense.pay.error.payee.sameHost",
        defaultMessage: [{
          "type": 0,
          "value": "Payer and payee must have the same Fiscal Host to pay this way."
        }]
      });
    }
  }
};

const PayoutMethodTypeIcon = _ref => {
  let {
    type,
    host
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_3__.Paypal, _objectSpread({}, props));
  } else if (type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && host?.transferwise) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_icons_TransferwiseIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread({}, props));
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4__.University, _objectSpread({}, props));
  }
};

const PayExpenseButton = _ref2 => {
  let {
    expense,
    collective,
    host,
    disabled,
    onSubmit,
    error
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  const [hasModal, showModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [hasSecurityModal, showSecurityModal] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const disabledMessage = getDisabledMessage(expense, collective, host, expense.payoutMethod);
  const isDisabled = Boolean(disabled || disabledMessage);
  const requiresSecurityCheck = (0,_SecurityChecksModal__WEBPACK_IMPORTED_MODULE_13__/* .expenseRequiresSecurityConfirmation */ .rP)(expense);

  const handleClick = () => requiresSecurityCheck ? showSecurityModal(true) : showModal(true);

  const button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    buttonStyle: "successSecondary",
    "data-cy": "pay-button"
  }, props), {}, {
    disabled: isDisabled,
    onClick: handleClick,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(PayoutMethodTypeIcon, {
      type: expense.payoutMethod?.type,
      host: host,
      size: 12
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
      ml: "6px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
        id: "actions.goToPay",
        defaultMessage: [{
          "type": 0,
          "value": "Go to Pay"
        }]
      })
    })]
  }));

  if (disabledMessage) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      content: disabledMessage,
      children: button
    });
  } else if (hasModal) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [button, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_PayExpenseModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        expense: expense,
        collective: collective,
        host: host,
        onClose: () => showModal(false),
        error: error,
        onSubmit: async values => {
          const {
            action
          } = values,
                data = _objectWithoutProperties(values, _excluded3);

          const success = await onSubmit(action, data);

          if (success) {
            showModal(false);
          }
        }
      })]
    });
  } else if (hasSecurityModal) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [button, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_SecurityChecksModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        expense: expense,
        onConfirm: () => {
          showModal(true);
          showSecurityModal(false);
        },
        onClose: () => showSecurityModal(false)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayExpenseButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_boxicons_regular_Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58847);
/* harmony import */ var _styled_icons_boxicons_regular_Check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99708);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56508);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17133);
/* harmony import */ var _lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22642);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51048);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51561);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87268);
/* harmony import */ var _StyledButtonSet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16738);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41433);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(87262);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71792);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(51927);
/* harmony import */ var _PayoutMethodData__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(27824);
/* harmony import */ var _PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(9215);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_17__, _StyledInputField__WEBPACK_IMPORTED_MODULE_27__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_29__, _PayoutMethodData__WEBPACK_IMPORTED_MODULE_32__]);
([_lib_utils__WEBPACK_IMPORTED_MODULE_17__, _StyledInputField__WEBPACK_IMPORTED_MODULE_27__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_29__, _PayoutMethodData__WEBPACK_IMPORTED_MODULE_32__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


































const quoteExpenseQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query QuoteExpenseQuery($id: String!) {
    expense(expense: { id: $id }) {
      id
      currency
      amountInHostCurrency: amountV2(currencySource: HOST) {
        exchangeRate {
          value
        }
      }
      quote {
        paymentProcessorFeeAmount {
          valueInCents
          currency
        }
        sourceAmount {
          valueInCents
          currency
        }
        estimatedDeliveryAt
      }
    }
  }
`;

const getPayoutLabel = (intl, type) => {
  return (0,_lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(intl, type, {
    aliasBankAccountToTransferWise: true
  });
};

const getPayoutOptionValue = (payoutMethodType, isAuto, host) => {
  if (payoutMethodType === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER) {
    return {
      forceManual: true,
      action: 'PAY'
    };
  } else if (payoutMethodType === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && !host.transferwise) {
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
    const isPaypalPayouts = host.features[_lib_allowed_features__WEBPACK_IMPORTED_MODULE_10__/* .FEATURES.PAYPAL_PAYOUTS */ .h6.PAYPAL_PAYOUTS] === 'ACTIVE' && payoutMethodType === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL && host.supportedPayoutMethods?.includes(_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL);
    const isWiseOTT = payoutMethodType === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && host.supportedPayoutMethods?.includes(_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT) && (0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(host, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_10__/* .FEATURES.TRANSFERWISE_OTT */ .h6.TRANSFERWISE_OTT);
    return {
      forceManual: false,
      action: isPaypalPayouts || isWiseOTT ? 'SCHEDULE_FOR_PAYMENT' : 'PAY'
    };
  }
};

const DEFAULT_VALUES = Object.freeze({
  paymentProcessorFeeInHostCurrency: null,
  totalAmountPaidInHostCurrency: null,
  feesPayer: 'COLLECTIVE'
});

const validate = values => {
  const errors = {};

  if (isNaN(values.paymentProcessorFeeInHostCurrency)) {
    errors.paymentProcessorFeeInHostCurrency = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
  }

  if (isNaN(values.totalAmountPaidInHostCurrency)) {
    errors.totalAmountPaidInHostCurrency = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
  }

  return errors;
};

const getCanCustomizeFeesPayer = (expense, collective, isManualPayment, feeAmount, isRoot) => {
  const supportedPayoutMethods = [_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT, _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER];
  const isSupportedPayoutMethod = supportedPayoutMethods.includes(expense.payoutMethod?.type);

  const isFullBalance = expense.amount === lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'stats.balanceWithBlockedFunds.valueInCents');

  const isSameCurrency = expense.currency === collective?.currency; // Current limitations:
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

const AmountLine = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "PayExpenseModal__AmountLine",
  componentId: "sc-13chir8-0"
})(["display:flex;justify-content:space-between;font-weight:400;padding:9px 0;font-weight:400;line-height:18px;letter-spacing:0em;", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_9__.border, styled_system__WEBPACK_IMPORTED_MODULE_9__.space);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_30__/* .Span */ .Dr).withConfig({
  displayName: "PayExpenseModal__Label",
  componentId: "sc-13chir8-1"
})(["margin-right:4px;flex:0 1 70%;margin-right:8px;line-height:18px;word-break:break-word;color:#4e5052;", " ", " font-size:12px;"], styled_system__WEBPACK_IMPORTED_MODULE_9__.color, styled_system__WEBPACK_IMPORTED_MODULE_9__.typography);
const Amount = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "PayExpenseModal__Amount",
  componentId: "sc-13chir8-2"
})(["flex:1 1 30%;text-align:right;font-size:14px;white-space:nowrap;display:flex;flex-direction:row-reverse;& > *{margin-left:4px;}"]);
const SectionLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
  displayName: "PayExpenseModal__SectionLabel",
  componentId: "sc-13chir8-3"
})(["font-size:9px;font-weight:500;color:#4e5052;margin:5px 0;text-transform:uppercase;"]);

const getInitialValues = (expense, host, payoutMethodType) => {
  return _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_VALUES), getPayoutOptionValue(payoutMethodType, true, host)), {}, {
    feesPayer: expense.feesPayer || DEFAULT_VALUES.feesPayer
  });
};

const calculateAmounts = ({
  formik,
  expense,
  quote,
  host,
  feesPayer
}) => {
  if (formik.values.forceManual) {
    const totalAmount = {
      valueInCents: formik.values.totalAmountPaidInHostCurrency,
      currency: host.currency
    };
    const paymentProcessorFee = {
      valueInCents: formik.values.paymentProcessorFeeInHostCurrency,
      currency: host.currency
    };
    const effectiveRate = expense.currency !== host.currency && totalAmount.valueInCents / expense.amount;
    return {
      paymentProcessorFee,
      totalAmount,
      effectiveRate
    };
  } else if (quote) {
    const effectiveRate = expense.currency !== host.currency && quote.sourceAmount.valueInCents / expense.amount;

    const totalAmount = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(quote.sourceAmount);

    if (feesPayer === 'PAYEE') {
      totalAmount.valueInCents -= quote.paymentProcessorFeeAmount.valueInCents;
    }

    return {
      paymentProcessorFee: quote.paymentProcessorFeeAmount,
      totalAmount,
      effectiveRate
    };
  } else {
    return {};
  }
};
/**
 * Modal displayed by `PayExpenseButton` to trigger the actual payment of an expense
 */


const PayExpenseModal = ({
  onClose,
  onSubmit,
  expense,
  collective,
  host,
  error,
  LoggedInUser
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)();
  const payoutMethodType = expense.payoutMethod?.type || _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER;
  const initialValues = getInitialValues(expense, host, payoutMethodType);
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormik)({
    initialValues,
    validate,
    onSubmit
  });
  const hasManualPayment = payoutMethodType === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER || formik.values.forceManual;
  const payoutMethodLabel = getPayoutLabel(intl, payoutMethodType);
  const hasBankInfoWithoutWise = payoutMethodType === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && host.transferwise === null;
  const isScheduling = formik.values.action === 'SCHEDULE_FOR_PAYMENT';
  const hasAutomaticManualPicker = ![_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER, _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE].includes(payoutMethodType);
  const canQuote = host.transferwise && payoutMethodType === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT;
  const quoteQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(quoteExpenseQuery, {
    variables: {
      id: expense.id
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T,
    skip: !canQuote
  });
  const amountWithoutTaxes = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .getAmountWithoutTaxes */ .ol)(expense.amount, expense.taxes);
  const amounts = calculateAmounts({
    formik,
    expense,
    quote: quoteQuery?.data?.expense?.quote,
    collective,
    host,
    feesPayer: formik.values.feesPayer
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP, {
    onClose: onClose,
    width: "100%",
    minWidth: 280,
    maxWidth: 334,
    "data-cy": "pay-expense-modal",
    trapFocus: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* .ModalHeader */ .xB, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_30__.H4, {
        fontSize: "20px",
        fontWeight: "700",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "PayExpenseTitle",
          defaultMessage: [{
            "type": 0,
            "value": "Pay expense"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_28__/* .ModalBody */ .fe, {
      as: "form",
      mb: 0,
      onSubmit: formik.handleSubmit,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(SectionLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "ExpenseForm.PayoutOptionLabel",
          defaultMessage: [{
            "type": 0,
            "value": "Payout method"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
        mb: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
          type: payoutMethodType
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_PayoutMethodData__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
        payoutMethod: expense.payoutMethod,
        showLabel: false
      }), hasAutomaticManualPicker && !hasBankInfoWithoutWise && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledButtonSet__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        items: ['AUTO', 'MANUAL'],
        buttonProps: {
          width: '50%'
        },
        buttonPropsBuilder: ({
          item
        }) => ({
          'data-cy': `pay-type-${item}`
        }),
        mt: 3,
        selected: formik.values.forceManual ? 'MANUAL' : 'AUTO',
        customBorderRadius: "6px",
        onChange: item => {
          formik.setValues(_objectSpread(_objectSpread(_objectSpread({}, formik.values), getPayoutOptionValue(payoutMethodType, item === 'AUTO', host)), {}, {
            paymentProcessorFeeInHostCurrency: null,
            totalAmountPaidInHostCurrency: null,
            feesPayer: !getCanCustomizeFeesPayer(expense, collective, hasManualPayment, null, LoggedInUser.isRoot) ? DEFAULT_VALUES.feesPayer // Reset fees payer if can't customize
            : formik.values.feesPayer
          }));
        },
        children: ({
          item
        }) => item === 'AUTO' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "Payout.Automatic",
          defaultMessage: [{
            "type": 0,
            "value": "Automatic"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "Payout.Manual",
          defaultMessage: [{
            "type": 0,
            "value": "Manual"
          }]
        })
      }), hasManualPayment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          name: "totalAmountPaidInHostCurrency",
          htmlFor: "totalAmountPaidInHostCurrency",
          inputType: "number",
          error: formik.errors.totalAmountPaidInHostCurrency,
          required: true,
          mt: 3,
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayExpense.totalAmountPaidInHostCurrency.Input",
            defaultMessage: [{
              "type": 0,
              "value": "Total amount paid"
            }]
          }),
          hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayExpense.totalAmountPaidInHostCurrency.Hint",
            defaultMessage: [{
              "type": 0,
              "value": "The total amount debited from your account."
            }]
          }),
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
            currency: host.currency,
            currencyDisplay: "FULL",
            value: formik.values.totalAmountPaidInHostCurrency,
            "data-cy": "total-amount-paid",
            placeholder: "0.00",
            maxWidth: "100%",
            min: 0,
            onChange: value => formik.setFieldValue('totalAmountPaidInHostCurrency', value)
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          name: "paymentProcessorFeeInHostCurrency",
          htmlFor: "paymentProcessorFeeInHostCurrency",
          inputType: "number",
          error: formik.errors.paymentProcessorFeeInHostCurrency,
          required: false,
          mt: 3,
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayExpense.ProcessorFeesInput",
            defaultMessage: [{
              "type": 0,
              "value": "Payment processor fees"
            }]
          }),
          hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayExpense.paymentProcessorFeeInHostCurrency.Hint",
            defaultMessage: [{
              "type": 0,
              "value": "Amount in fees, included in the total amount paid."
            }]
          }),
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
            currency: host.currency,
            currencyDisplay: "FULL",
            value: formik.values.paymentProcessorFeeInHostCurrency,
            placeholder: "0.00",
            maxWidth: "100%",
            min: 0,
            max: 100000000,
            onChange: value => formik.setFieldValue('paymentProcessorFeeInHostCurrency', value)
          }))
        })]
      }), getCanCustomizeFeesPayer(expense, collective, hasManualPayment, formik.values.paymentProcessorFeeInHostCurrency, LoggedInUser.isRoot) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
        mt: 16,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
          content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "ewvfiF",
            defaultMessage: [{
              "type": 0,
              "value": "Check this box to have the payee cover the cost of payment processor fees (useful to zero balance)"
            }]
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            name: "feesPayer",
            checked: formik.values.feesPayer === 'PAYEE',
            onChange: ({
              checked
            }) => formik.setFieldValue('feesPayer', checked ? 'PAYEE' : 'COLLECTIVE'),
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_30__/* .Span */ .Dr, {
              fontSize: "12px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                id: "zoC8Gb",
                defaultMessage: [{
                  "type": 0,
                  "value": "The payee is covering the fees"
                }]
              })
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
        mt: 19,
        mb: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(SectionLabel, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PaymentBreakdown",
            defaultMessage: [{
              "type": 0,
              "value": "Payment breakdown"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(AmountLine, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Label, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "ExpenseAmount",
              defaultMessage: [{
                "type": 0,
                "value": "Expense amount"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Amount, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
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
        }), expense.taxes?.map(tax => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(AmountLine, {
          "data-cy": `tax-${tax.type}-expense-amount-line`,
          pt: 0,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(Label, {
            children: [(0,_lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_15__/* .i18nTaxType */ .m)(intl, tax.type, 'short'), " (", lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(tax.rate * 100, 2) || 0, "%)"]
          }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Amount, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              amount: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .getTaxAmount */ .L0)(amountWithoutTaxes, tax),
              precision: 2,
              currency: expense.currency,
              amountStyles: {
                fontWeight: 500
              },
              showCurrencyCode: false
            })
          })]
        }, tax.type)), amounts.paymentProcessorFee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(AmountLine, {
          borderTop: "0.8px dashed #9D9FA3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Label, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "PayExpense.ProcessorFeesInput",
              defaultMessage: [{
                "type": 0,
                "value": "Payment processor fees"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Amount, {
            children: quoteQuery.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              height: "16px"
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              amount: amounts.paymentProcessorFee?.valueInCents,
              currency: amounts.paymentProcessorFee?.currency,
              currencyCodeStyles: {
                color: 'black.500'
              },
              amountStyles: {
                fontWeight: amounts.paymentProcessorFee ? 500 : 400,
                color: amounts.paymentProcessorFee ? 'black.900' : 'black.400'
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(AmountLine, {
          borderTop: "1px solid #4E5052",
          pt: 11,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Label, {
            color: "black.900",
            fontWeight: "600",
            children: amounts.paymentProcessorFee !== null ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "TotalAmount",
              defaultMessage: [{
                "type": 0,
                "value": "Total amount"
              }]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "TotalAmountWithoutFee",
              defaultMessage: [{
                "type": 0,
                "value": "Total amount (without fees)"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Amount, {
            children: quoteQuery.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              height: "16px"
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              amount: amounts.totalAmount?.valueInCents,
              currency: amounts.totalAmount?.currency,
              currencyCodeStyles: {
                color: 'black.500'
              }
            })
          })]
        }), amounts?.effectiveRate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(AmountLine, {
          py: 0,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(Label, {
            color: "black.600",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "EffectiveRate",
              defaultMessage: [{
                "type": 0,
                "value": "Effective rate"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              color: "black.600",
              children: ["~ ", lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(amounts.effectiveRate, 5)]
            })
          })]
        }) : null]
      }), !error && formik.values.forceManual && payoutMethodType !== _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
        type: "warning",
        withIcon: true,
        my: 3,
        fontSize: "12px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("strong", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "Warning.Important",
            defaultMessage: [{
              "type": 0,
              "value": "Important"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_30__.P, {
          mt: 2,
          fontSize: "12px",
          lineHeight: "18px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
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
              payoutMethod: hasBankInfoWithoutWise ? 'manually' : `via ${payoutMethodLabel}`
            }
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          buttonStyle: "success",
          width: "100%",
          m: 1,
          type: "submit",
          loading: formik.isSubmitting,
          "data-cy": "mark-as-paid-button",
          disabled: quoteQuery.loading,
          children: hasManualPayment ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_boxicons_regular_Check__WEBPACK_IMPORTED_MODULE_6__.Check, {
              size: "1.5em"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledSpan, {
              ml: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                id: "expense.markAsPaid",
                defaultMessage: [{
                  "type": 0,
                  "value": "Mark as paid"
                }]
              })
            })]
          }) : isScheduling ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
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
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_31__/* .withUser */ .ns)(PayExpenseModal));

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_30__/* .Span */ .Dr).withConfig({
  displayName: "PayExpenseModal___StyledSpan",
  componentId: "sc-13chir8-4"
})({
  verticalAlign: 'middle'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export payoutMethodHasData */
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73022);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35007);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56508);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40777);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__]);
_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const renderObject = object => Object.entries(object).reduce((acc, [key, value]) => {
  if (typeof value === 'object') {
    return [...acc, ...renderObject(value)];
  }

  return [...acc, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
    fontSize: "11px",
    lineHeight: "18px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "withColon",
      defaultMessage: [{
        "type": 1,
        "value": "item"
      }, {
        "type": 0,
        "value": ":"
      }],
      values: {
        item: lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default()(key)
      }
    }), " ", value]
  }, key)];
}, []);
/**
 * @returns boolean: True if the payout method has displayable data
 */


const payoutMethodHasData = payoutMethod => {
  switch (payoutMethod?.type) {
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
const PRIVATE_DATA_PLACEHOLDER = '********';

const getPmData = (payoutMethod, field, isLoading) => {
  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      height: 15
    });
  } else {
    return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(payoutMethod, `data.${field}`, PRIVATE_DATA_PLACEHOLDER);
  }
};
/**
 * Shows the data of the given payout method
 */


const PayoutMethodData = ({
  payoutMethod,
  showLabel,
  isLoading
}) => {
  if (isLoading && !payoutMethod) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      height: 24,
      mb: 2
    });
  } else if (!payoutMethod) {
    return null;
  }

  switch (payoutMethod.type) {
    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_5__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          fontSize: "11px",
          fontWeight: "500",
          mb: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "User.EmailAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Email address"
            }]
          }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            color: "#969BA3"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          fontSize: "11px",
          color: "black.700",
          children: getPmData(payoutMethod, 'email', isLoading)
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_5__/* .PayoutMethodType.OTHER */ .Nk.OTHER:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          fontSize: "11px",
          fontWeight: "500",
          mb: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Details",
            defaultMessage: [{
              "type": 0,
              "value": "Details"
            }]
          }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            color: "#969BA3"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          fontSize: "11px",
          color: "black.700",
          children: getPmData(payoutMethod, 'content', isLoading)
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_5__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          fontSize: "11px",
          fontWeight: "500",
          mb: 2,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Details",
            defaultMessage: [{
              "type": 0,
              "value": "Details"
            }]
          }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            color: "#969BA3"
          })]
        }), payoutMethod.data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          fontSize: "11px",
          color: "black.700",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "BankInfo.Type",
            defaultMessage: [{
              "type": 0,
              "value": "Type: "
            }, {
              "type": 1,
              "value": "type"
            }],
            values: {
              type: lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default()(payoutMethod.data.type)
            }
          }), payoutMethod.data.accountHolderName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
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
        }) : isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayoutMethodData);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54427);
/* harmony import */ var _styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55457);
/* harmony import */ var _styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63387);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8866);
/* harmony import */ var _styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56508);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11194);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);











/**
 * Shows the data of the given payout method
 */




const PayoutMethodTypeWithIcon = ({
  isLoading,
  type,
  fontSize,
  fontWeight,
  color,
  iconSize,
  name
}) => {
  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      height: 15,
      width: 90
    });
  }

  switch (type) {
    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_fa_brands_Paypal__WEBPACK_IMPORTED_MODULE_1__.Paypal, {
          size: iconSize,
          color: "#192f86"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: "PayPal"
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_fa_solid_University__WEBPACK_IMPORTED_MODULE_4__.University, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "BankAccount",
            defaultMessage: [{
              "type": 0,
              "value": "Bank account"
            }]
          })
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_3__.ExchangeAlt, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: "Open Collective"
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .INVITE */ .FZ:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
          name: "?",
          size: iconSize,
          backgroundColor: "blue.100",
          color: "blue.400",
          fontWeight: "500"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "PayoutMethod.Type.ToBeDefined",
            defaultMessage: [{
              "type": 0,
              "value": "Not yet set"
            }]
          })
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .VIRTUAL_CARD */ .vi:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_fa_solid_CreditCard__WEBPACK_IMPORTED_MODULE_2__.CreditCard, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: name || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "PayoutMethod.Type.VirtualCard",
            defaultMessage: [{
              "type": 0,
              "value": "Virtual Card"
            }]
          })
        })]
      });

    case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.OTHER */ .Nk.OTHER:
    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_3__.ExchangeAlt, {
          size: iconSize,
          color: "#9D9FA3"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          ml: 2,
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: color,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayoutMethodTypeWithIcon);

/***/ }),

/***/ 94833:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HF": () => (/* binding */ hasProcessButtons),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aN": () => (/* binding */ ButtonLabel),
/* harmony export */   "oU": () => (/* binding */ DEFAULT_PROCESS_EXPENSE_BTN_PROPS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81594);
/* harmony import */ var _styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49079);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32651);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88609);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31330);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17738);
/* harmony import */ var _DeleteExpenseButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87993);
/* harmony import */ var _MarkExpenseAsUnpaidButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27764);
/* harmony import */ var _PayExpenseButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(92058);
/* harmony import */ var _SecurityChecksModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_13__, _ToastProvider__WEBPACK_IMPORTED_MODULE_14__, _DeleteExpenseButton__WEBPACK_IMPORTED_MODULE_16__, _PayExpenseButton__WEBPACK_IMPORTED_MODULE_18__]);
([_StyledTooltip__WEBPACK_IMPORTED_MODULE_13__, _ToastProvider__WEBPACK_IMPORTED_MODULE_14__, _DeleteExpenseButton__WEBPACK_IMPORTED_MODULE_16__, _PayExpenseButton__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["icon", "label", "permission"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }























const processExpenseMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ProcessExpense(
    $id: String
    $legacyId: Int
    $action: ExpenseProcessAction!
    $paymentParams: ProcessExpensePaymentParams
  ) {
    processExpense(expense: { id: $id, legacyId: $legacyId }, action: $action, paymentParams: $paymentParams) {
      id
      ...ExpensePageExpenseFields
    }
  }

  ${_graphql_fragments__WEBPACK_IMPORTED_MODULE_15__/* .expensePageExpenseFieldsFragment */ .Wg}
`;
const ButtonLabel = styled_components__WEBPACK_IMPORTED_MODULE_7___default().span.withConfig({
  displayName: "ProcessExpenseButtons__ButtonLabel",
  componentId: "sc-fh634o-0"
})({
  marginLeft: 6
});
/**
 * A small helper to know if expense process buttons should be displayed
 */

const hasProcessButtons = permissions => {
  if (!permissions) {
    return false;
  }

  return permissions.canApprove || permissions.canUnapprove || permissions.canReject || permissions.canPay || permissions.canMarkAsUnpaid || permissions.canMarkAsSpam || permissions.canDelete;
};
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  markAsSpamWarning: {
    id: "Expense.MarkAsSpamWarning",
    defaultMessage: [{
      "type": 0,
      "value": "This will prevent the submitter account to post new expenses. Are you sure?"
    }]
  }
});

const getErrorContent = (intl, error, host) => {
  // TODO: The proper way to check for error types is with error.type, not the message
  const message = error?.message;

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
        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Link__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            href: `/${host.slug}/admin`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
    message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .i18nGraphqlException */ .t2)(intl, error)
  };
};

const PermissionButton = _ref => {
  let {
    icon,
    label,
    permission
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();

  let button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    disabled: !permission.allowed,
    children: [permission.reason ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__.InfoCircle, {
      size: 14
    }) : icon, label]
  }));

  const message = permission.reason && intl.formatMessage(_lib_constants_permissions__WEBPACK_IMPORTED_MODULE_8__/* .ReasonMessage */ .y[permission.reason], permission.reasonDetails);

  if (message) {
    button = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
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
const ProcessExpenseButtons = ({
  expense,
  collective,
  host,
  permissions,
  buttonProps,
  onSuccess,
  onModalToggle,
  onDelete
}) => {
  const [selectedAction, setSelectedAction] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);

  const onUpdate = (cache, response) => onSuccess?.(response.data.processExpense, cache, selectedAction);

  const mutationOptions = {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T,
    update: onUpdate
  };
  const [processExpense, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(processExpenseMutation, mutationOptions);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .useToasts */ .e1)();

  const triggerAction = async (action, paymentParams) => {
    // Prevent submitting the action if another one is being submitted at the same time
    if (loading) {
      return;
    }

    setSelectedAction(action);

    try {
      const variables = {
        id: expense.id,
        legacyId: expense.legacyId,
        action,
        paymentParams
      };
      await processExpense({
        variables
      });
      return true;
    } catch (e) {
      // Display a toast with light variant since we're in a modal
      addToast(_objectSpread({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_14__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        variant: 'light'
      }, getErrorContent(intl, e, host)));
      return false;
    }
  };

  const getButtonProps = action => {
    const isSelectedAction = selectedAction === action;
    return _objectSpread(_objectSpread({}, buttonProps), {}, {
      disabled: loading && !isSelectedAction,
      loading: loading && isSelectedAction,
      onClick: () => triggerAction(action)
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [(permissions.approve.allowed || permissions.approve.reason === _lib_constants_permissions__WEBPACK_IMPORTED_MODULE_8__/* ["default"].AUTHOR_CANNOT_APPROVE */ .Z.AUTHOR_CANNOT_APPROVE) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(PermissionButton, _objectSpread(_objectSpread({}, getButtonProps('APPROVE')), {}, {
      buttonStyle: "secondary",
      "data-cy": "approve-button",
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_4__.Check, {
        size: 12
      }),
      permission: permissions.approve,
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ButtonLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "actions.approve",
          defaultMessage: [{
            "type": 0,
            "value": "Approve"
          }]
        })
      })
    })), permissions.canPay && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_PayExpenseButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getButtonProps('PAY')), {}, {
      onClick: null,
      onSubmit: triggerAction,
      expense: expense,
      collective: collective,
      host: host,
      error: error
    })), permissions.canReject && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getButtonProps('REJECT')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "reject-button",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_5__.Times, {
        size: 14
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ButtonLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "actions.reject",
          defaultMessage: [{
            "type": 0,
            "value": "Reject"
          }]
        })
      })]
    })), permissions.canMarkAsSpam && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getButtonProps('MARK_AS_SPAM')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "spam-button",
      onClick: () => {
        if (confirm(intl.formatMessage(messages.markAsSpamWarning))) {
          triggerAction('MARK_AS_SPAM');
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_5__.Times, {
        size: 14
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ButtonLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "actions.spam",
          defaultMessage: [{
            "type": 0,
            "value": "Mark as Spam"
          }]
        })
      })]
    })), permissions.canUnapprove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getButtonProps('UNAPPROVE')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "unapprove-button",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_3__.Ban, {
        size: 12
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ButtonLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "expense.unapprove.btn",
          defaultMessage: [{
            "type": 0,
            "value": "Unapprove"
          }]
        })
      })]
    })), permissions.canUnschedulePayment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getButtonProps('UNSCHEDULE_PAYMENT')), {}, {
      buttonStyle: "dangerSecondary",
      "data-cy": "unapprove-button",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_fa_solid_Ban__WEBPACK_IMPORTED_MODULE_3__.Ban, {
        size: 12
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ButtonLabel, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "expense.unschedulePayment.btn",
          defaultMessage: [{
            "type": 0,
            "value": "Unschedule Payment"
          }]
        })
      })]
    })), permissions.canMarkAsUnpaid && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MarkExpenseAsUnpaidButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      "data-cy": "mark-as-unpaid-button"
    }, getButtonProps('MARK_AS_UNPAID')), {}, {
      onClick: null,
      onConfirm: shouldRefundPaymentProcessorFee => triggerAction('MARK_AS_UNPAID', {
        shouldRefundPaymentProcessorFee
      })
    })), permissions.canDelete && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_DeleteExpenseButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      buttonProps: getButtonProps(),
      expense: expense,
      onModalToggle: onModalToggle,
      onDelete: onDelete
    }), expense?.securityChecks?.length && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_SecurityChecksModal__WEBPACK_IMPORTED_MODULE_19__/* .SecurityChecksButton */ .EW, _objectSpread(_objectSpread({}, buttonProps), {}, {
      minWidth: 0,
      expense: expense
    }))]
  });
};

const DEFAULT_PROCESS_EXPENSE_BTN_PROPS = {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProcessExpenseButtons);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EW": () => (/* binding */ SecurityChecksButton),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rP": () => (/* binding */ expenseRequiresSecurityConfirmation)
/* harmony export */ });
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73022);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22265);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76918);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39131);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_bootstrap_ShieldFillCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33244);
/* harmony import */ var _styled_icons_bootstrap_ShieldFillCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_bootstrap_ShieldFillCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_bootstrap_ShieldFillExclamation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7257);
/* harmony import */ var _styled_icons_bootstrap_ShieldFillExclamation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_bootstrap_ShieldFillExclamation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89711);
/* harmony import */ var _styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76841);
/* harmony import */ var _styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19156);
/* harmony import */ var _StyledFilters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59049);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71792);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90012);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);





const _excluded = ["expense", "onClose", "onConfirm"],
      _excluded2 = ["expense"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















const SecurityCheckItem = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC).withConfig({
  displayName: "SecurityChecksModal__SecurityCheckItem",
  componentId: "sc-2aghzm-0"
})(["justify-content:space-between;min-height:72px;padding:12px 16px;:not(:last-child){border-bottom:1px solid ", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__.themeGet)('colors.black.300'));
const LEVEL_TAG_STYLE = {
  PASS: 'success',
  HIGH: 'error',
  MEDIUM: 'warning',
  LOW: 'info'
};
const LEVEL_ORDER = ['HIGH', 'MEDIUM', 'LOW', 'PASS'];
const Scope = {
  USER: 'USER',
  COLLECTIVE: 'COLLECTIVE',
  PAYEE: 'PAYEE',
  PAYOUT_METHOD: 'PAYOUT_METHOD'
};
const expenseRequiresSecurityConfirmation = expense => expense?.securityChecks?.filter(check => check.level === 'HIGH').length > 0;

const SecurityCheck = check => {
  const [isExpanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(SecurityCheckItem, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "start",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          type: LEVEL_TAG_STYLE[check.level],
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "16px",
          p: "2px 6px",
          mb: 2,
          children: lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default()(check.scope)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        children: check.message
      }), isExpanded && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
        mt: 2,
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
        children: check.details
      })]
    }), check.details && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      alignItems: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        fontWeight: "500",
        fontSize: "13px",
        lineHeight: "16px",
        ml: 2,
        color: "blue.500",
        onClick: () => setExpanded(!isExpanded),
        minWidth: "max-content",
        children: [isExpanded ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
          id: "jBYmhn",
          defaultMessage: [{
            "type": 0,
            "value": "Hide Details"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
          id: "kRqDOg",
          defaultMessage: [{
            "type": 0,
            "value": "Show Details"
          }]
        }), isExpanded ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_9__.ChevronUp, {
          size: "1em"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_8__.ChevronDown, {
          size: "1em"
        })]
      })
    })]
  }, check.message);
};

const I18nScopes = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  ALL: {
    id: "SecurityScope.All",
    defaultMessage: [{
      "type": 0,
      "value": "All Scopes"
    }]
  },
  [Scope.PAYEE]: {
    id: "SecurityScope.Payee",
    defaultMessage: [{
      "type": 0,
      "value": "Payee"
    }]
  },
  [Scope.USER]: {
    id: "Tags.USER",
    defaultMessage: [{
      "type": 0,
      "value": "User"
    }]
  },
  [Scope.COLLECTIVE]: {
    id: "Collective",
    defaultMessage: [{
      "type": 0,
      "value": "Collective"
    }]
  },
  [Scope.PAYOUT_METHOD]: {
    id: "SecurityScope.PayoutMethod",
    defaultMessage: [{
      "type": 0,
      "value": "Payout Method"
    }]
  }
});

const SecurityChecksModal = _ref => {
  let {
    expense,
    onClose,
    onConfirm
  } = _ref,
      modalProps = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.useIntl)();
  const [scope, setScope] = react__WEBPACK_IMPORTED_MODULE_5___default().useState();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    onClose: onClose,
    width: "680px",
    "data-cy": "security-check-modal"
  }, modalProps), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* .ModalHeader */ .xB, {
      onClose: onClose,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.H1, {
          color: "black.900",
          fontSize: "20px",
          lineHeight: "28px",
          children: onConfirm ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "SecurityChecksModal.confirm.title",
            defaultMessage: [{
              "type": 0,
              "value": "Are you sure you want to pay?"
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "SecurityChecksModal.title",
            defaultMessage: [{
              "type": 0,
              "value": "Security Checks"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.P, {
          mt: 2,
          color: "black.700",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "SecurityChecksModal.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "Multiple Security Checks have been flagged for this Expense. Please review and proceed with caution."
            }]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* .ModalBody */ .fe, {
      mb: 0,
      mt: "24px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledFilters__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        p: 0,
        filters: ['ALL', ...lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()(expense?.securityChecks?.map(check => check.scope))],
        getLabel: key => intl.formatMessage(I18nScopes[key]),
        onChange: filter => filter === 'ALL' ? setScope() : setScope(filter),
        selected: scope
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        mt: 3,
        children: expense.securityChecks.filter(check => scope ? check.scope === scope : true).map(check => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(SecurityCheck, _objectSpread({}, check), check.message))
      })]
    }), onConfirm && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_18__/* .ModalFooter */ .mz, {
      isFullWidth: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          onClick: onClose,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          buttonStyle: "primary",
          onClick: onConfirm,
          "data-cy": "pay-button",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
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

const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_12___default().div.withConfig({
  displayName: "SecurityChecksModal__Indicator",
  componentId: "sc-2aghzm-1"
})(["position:absolute;display:flex;justify-content:center;align-items:center;right:0%;top:-10%;bottom:90%;left:70%;border-radius:50%;color:#fff;padding:9px;border:1px solid #fff;background-color:", ";font-size:10px;font-weight:700;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__.themeGet)('colors.red.500'));
const RoundButton = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z).withConfig({
  displayName: "SecurityChecksModal__RoundButton",
  componentId: "sc-2aghzm-2"
})(["position:relative;"]);
const LEVEL_BUTTON_STYLE = {
  PASS: 'successSecondary',
  HIGH: 'dangerSecondary',
  MEDIUM: 'warningSecondary',
  LOW: 'secondary'
};
const SecurityChecksButton = _ref2 => {
  let {
    expense
  } = _ref2,
      buttonProps = _objectWithoutProperties(_ref2, _excluded2);

  const [hasModal, setHasModal] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
  const highRiskChecks = expense?.securityChecks?.filter(check => check.level === 'HIGH').length || 0;

  const higherRisk = lodash_first__WEBPACK_IMPORTED_MODULE_2___default()(lodash_compact__WEBPACK_IMPORTED_MODULE_4___default()(LEVEL_ORDER.map(level => lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(expense?.securityChecks, {
    level
  }))));

  const ShieldIcon = highRiskChecks ? _styled_icons_bootstrap_ShieldFillExclamation__WEBPACK_IMPORTED_MODULE_7__.ShieldFillExclamation : _styled_icons_bootstrap_ShieldFillCheck__WEBPACK_IMPORTED_MODULE_6__.ShieldFillCheck;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(RoundButton, _objectSpread(_objectSpread({}, buttonProps), {}, {
      buttonStyle: LEVEL_BUTTON_STYLE[higherRisk?.level] || 'secondary',
      onClick: () => setHasModal(true),
      children: [highRiskChecks ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(Indicator, {
        children: highRiskChecks
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(ShieldIcon, {
        size: 18
      })]
    })), hasModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(SecurityChecksModal, {
      expense: expense,
      onClose: () => setHasModal(false)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityChecksModal);
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

/***/ }),

/***/ 17738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2": () => (/* binding */ expensesListAdminFieldsFragment),
/* harmony export */   "RR": () => (/* binding */ expenseHostFields),
/* harmony export */   "Wg": () => (/* binding */ expensePageExpenseFieldsFragment),
/* harmony export */   "sU": () => (/* binding */ loggedInAccountExpensePayoutFieldsFragment),
/* harmony export */   "xe": () => (/* binding */ expensesListFieldsFragment)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5824);


const loggedInAccountExpensePayoutFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment LoggedInAccountExpensePayoutFields on Individual {
    id
    slug
    imageUrl
    type
    name
    legalName
    hasTwoFactorAuth
    location {
      id
      address
      country
      structured
    }
    payoutMethods {
      id
      type
      name
      data
      isSaved
    }
    adminMemberships: memberOf(role: ADMIN, includeIncognito: false, accountType: [ORGANIZATION, COLLECTIVE, FUND]) {
      nodes {
        id
        account {
          id
          slug
          imageUrl
          type
          name
          legalName
          isActive
          isHost
          policies {
            REQUIRE_2FA_FOR_ADMINS
          }
          ... on AccountWithParent {
            parent {
              id
              policies {
                REQUIRE_2FA_FOR_ADMINS
              }
            }
          }
          ... on AccountWithHost {
            host {
              id
              payoutMethods {
                id
                type
                name
                data
                isSaved
              }
            }
          }
          ... on Organization {
            host {
              id
              payoutMethods {
                id
                type
                name
                data
                isSaved
              }
            }
          }
          location {
            id
            address
            country
            structured
          }
          payoutMethods {
            id
            type
            name
            data
            isSaved
          }
          childrenAccounts {
            nodes {
              id
              slug
              imageUrl
              type
              name
              isActive
            }
          }
        }
      }
    }
  }
`;
const expenseHostFields = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ExpenseHostFields on Host {
    id
    name
    legalName
    slug
    type
    currency
    isHost
    expensePolicy
    website
    settings
    features {
      id
      MULTI_CURRENCY_EXPENSES
      PAYPAL_PAYOUTS
    }
    paypalPreApproval {
      id
      balance {
        currency
        valueInCents
      }
    }
    location {
      id
      address
      country
    }
    transferwise {
      id
      availableCurrencies
    }
    supportedPayoutMethods
    isTrustedHost
    hasDisputedOrders
    hasInReviewOrders
    plan {
      id
    }
  }
`;
const expensePageExpenseFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ExpensePageExpenseFields on Expense {
    id
    legacyId
    description
    longDescription
    currency
    type
    status
    privateMessage
    tags
    amount
    amountInAccountCurrency: amountV2(currencySource: ACCOUNT) {
      valueInCents
      currency
      exchangeRate {
        date
        value
        source
        isApproximate
      }
    }
    createdAt
    invoiceInfo
    requiredLegalDocuments
    feesPayer
    draft
    items {
      id
      incurredAt
      description
      amount
      url
    }
    taxes {
      id
      type
      rate
      idNumber
    }
    attachedFiles {
      id
      url
      name
      info {
        id
        name
        size
      }
    }
    payee {
      id
      slug
      name
      legalName
      type
      isAdmin
      location {
        id
        address
        country
      }
      payoutMethods {
        id
        type
        name
        data
        isSaved
      }

      # For Collectives, Funds, Events and Projects
      ... on AccountWithHost {
        isApproved
        host {
          id
          # For Expenses across hosts
          payoutMethods {
            id
            type
            name
            data
            isSaved
          }
        }
      }

      # For Fiscal Hosts
      ... on Organization {
        host {
          id
        }
      }
    }
    payeeLocation {
      id
      address
      country
      structured
    }
    createdByAccount {
      id
      slug
      name
      type
      imageUrl
    }
    host {
      id
      name
      legalName
      slug
      type
      website
      location {
        id
        address
        country
      }
    }
    requestedByAccount {
      id
      slug
      name
      type
      imageUrl
    }
    account {
      id
      legacyId
      slug
      name
      type
      imageUrl
      backgroundImageUrl
      isActive
      description
      settings
      twitterHandle
      currency
      expensePolicy
      supportedExpenseTypes
      features {
        id
        ...NavbarFields
        MULTI_CURRENCY_EXPENSES
      }
      expensesTags {
        id
        tag
      }
      location {
        id
        address
        country
      }

      stats {
        id
        balanceWithBlockedFunds {
          valueInCents
          currency
        }
      }

      ... on AccountWithParent {
        parent {
          id
          slug
          imageUrl
          backgroundImageUrl
          twitterHandle
        }
      }

      ... on AccountWithHost {
        isApproved
        host {
          id
          ...ExpenseHostFields
          transferwise {
            id
            availableCurrencies
          }
        }
      }

      # For Hosts with Budget capabilities

      ... on Organization {
        isHost
        isActive
        host {
          id
          ...ExpenseHostFields
          transferwise {
            id
            availableCurrencies
          }
        }
      }

      ... on Event {
        parent {
          id
          slug
          name
          type
          imageUrl
        }
      }
      ... on Project {
        parent {
          id
          slug
          name
          type
          imageUrl
        }
      }
    }
    payoutMethod {
      id
      type
      data
      isSaved
    }
    virtualCard {
      id
      name
      last4
    }
    permissions {
      id
      canEdit
      canEditTags
      canDelete
      canSeeInvoiceInfo
      canApprove
      canUnapprove
      canReject
      canMarkAsSpam
      canPay
      canMarkAsUnpaid
      canMarkAsIncomplete
      canComment
      canUnschedulePayment
      approve {
        allowed
        reason
        reasonDetails
      }
    }
    activities {
      id
      type
      createdAt
      data
      individual {
        id
        type
        slug
        name
        imageUrl
      }
    }
    recurringExpense {
      id
      interval
      endsAt
    }
    securityChecks {
      level
      message
      scope
      details
    }
  }

  ${expenseHostFields}
  ${_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_1__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const expensesListFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ExpensesListFieldsFragment on Expense {
    id
    legacyId
    description
    status
    createdAt
    tags
    amount
    amountInAccountCurrency: amountV2(currencySource: ACCOUNT) {
      valueInCents
      currency
      exchangeRate {
        date
        value
        source
        isApproximate
      }
    }
    currency
    type
    requiredLegalDocuments
    feesPayer
    account {
      id
      name
      slug
      createdAt
      currency
      type
      stats {
        id
        balanceWithBlockedFunds {
          valueInCents
          currency
        }
      }
      ... on AccountWithParent {
        parent {
          id
          slug
        }
      }
    }
    permissions {
      id
      canDelete
      canApprove
      canUnapprove
      canReject
      canMarkAsSpam
      canPay
      canMarkAsUnpaid
      canMarkAsIncomplete
      canSeeInvoiceInfo
      canEditTags
      canUnschedulePayment
      approve {
        allowed
        reason
        reasonDetails
      }
    }
    payoutMethod {
      id
      type
      data
      isSaved
    }
    payee {
      id
      type
      slug
      name
      imageUrl(height: 80)
      isAdmin

      # For Collectives, Funds, Events and Projects
      ... on AccountWithHost {
        isApproved
        host {
          id
        }
      }

      # For Fiscal Hosts
      ... on Organization {
        host {
          id
        }
      }
    }
    createdByAccount {
      id
      type
      slug
      name
    }
  }
`;
const expensesListAdminFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ExpensesListAdminFieldsFragment on Expense {
    id
    payoutMethod {
      id
      type
      data
    }
    items {
      id
      description
      incurredAt
      url
      amount
    }
    taxes {
      id
      type
      rate
    }
    attachedFiles {
      id
      url
      name
    }
    securityChecks {
      level
      message
      scope
      details
    }
  }
`;

/***/ }),

/***/ 51561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fo": () => (/* binding */ computeExpenseAmounts),
/* harmony export */   "L0": () => (/* binding */ getTaxAmount),
/* harmony export */   "Ou": () => (/* binding */ isTaxRateValid),
/* harmony export */   "_D": () => (/* binding */ validateExpenseTaxes),
/* harmony export */   "_Y": () => (/* binding */ getSupportedCurrencies),
/* harmony export */   "ol": () => (/* binding */ getAmountWithoutTaxes),
/* harmony export */   "vr": () => (/* binding */ checkRequiresAddress)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79800);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sumBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99708);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38198);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56508);
/* harmony import */ var _ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48652);
/* harmony import */ var _ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_9__, _ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_10__]);
([_ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_9__, _ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const checkRequiresAddress = values => {
  const collectiveTypesRequiringAddress = [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.INDIVIDUAL */ .eV.INDIVIDUAL, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.USER */ .eV.USER, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION];
  const expenseTypesRequiringAddress = [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_7__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_7__/* ["default"].GRANT */ .Z.GRANT];
  return expenseTypesRequiringAddress.includes(values.type) && (values.payee?.isNewUser || values.payee && !values.payee.isInvite && (collectiveTypesRequiringAddress.includes(values.payee.type) || values.payee.isHost));
};
const isTaxRateValid = rate => !lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(rate) && rate >= 0 && rate <= 1;
const getTaxAmount = (baseAmount, tax) => {
  return Math.round(baseAmount * tax.rate);
};
const computeExpenseAmounts = (items, taxes) => {
  const areAllItemsValid = items.every(item => !lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(item.amount));
  const activeTaxes = taxes?.filter(tax => !tax.isDisabled) || [];
  const hasTaxes = Boolean(activeTaxes.length);
  const areAllTaxesValid = !hasTaxes || activeTaxes.every(tax => isTaxRateValid(tax.rate));
  const totalInvoiced = areAllItemsValid ? lodash_sumBy__WEBPACK_IMPORTED_MODULE_1___default()(items, 'amount') : null;
  const totalAmount = areAllItemsValid && areAllTaxesValid ? totalInvoiced + lodash_sumBy__WEBPACK_IMPORTED_MODULE_1___default()(activeTaxes || [], tax => getTaxAmount(totalInvoiced, tax)) : null;
  return {
    hasTaxes,
    totalInvoiced,
    totalAmount
  };
};
const getAmountWithoutTaxes = (totalAmount, taxes) => {
  return totalAmount / (1 + lodash_sumBy__WEBPACK_IMPORTED_MODULE_1___default()(taxes, 'rate'));
};
const validateExpenseTaxes = (intl, taxes) => {
  const enabledTaxes = taxes?.filter(tax => !tax.isDisabled) || [];

  if (!enabledTaxes.length) {
    return null;
  } else {
    const taxesErrors = enabledTaxes.map(tax => {
      switch (tax.type) {
        case _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__.TaxType.GST:
          return (0,_ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_9__/* .validateTaxGST */ .l)(intl, tax);

        case _opencollective_taxes__WEBPACK_IMPORTED_MODULE_4__.TaxType.VAT:
          return (0,_ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_10__/* .validateTaxVAT */ .C)(intl, tax);

        default:
          return `Tax type ${tax.type} is not supported`;
        // No i18n because it's a developer error
      }
    });
    const hasErrors = taxesErrors.some(errors => !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors));
    return hasErrors ? taxesErrors : null;
  }
};
/**
 * Returns the list of supported currencies for this expense / payout method.
 * The collective currency always comes first.
 */

const getSupportedCurrencies = (collective, payoutMethod) => {
  if (!(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_5__/* .isFeatureEnabled */ .cr)(collective, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_5__/* .FEATURES.MULTI_CURRENCY_EXPENSES */ .h6.MULTI_CURRENCY_EXPENSES) || !(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_5__/* .isFeatureEnabled */ .cr)(collective.host, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_5__/* .FEATURES.MULTI_CURRENCY_EXPENSES */ .h6.MULTI_CURRENCY_EXPENSES) || payoutMethod?.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_8__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE) {
    return [collective?.currency];
  }

  const isPayPal = payoutMethod?.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_8__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL;

  if (isPayPal) {
    const defaultCurrency = _lib_constants_currency__WEBPACK_IMPORTED_MODULE_11__/* .PayPalSupportedCurrencies.includes */ .b.includes(collective?.currency) ? collective.currency : 'USD';
    return lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([defaultCurrency, ..._lib_constants_currency__WEBPACK_IMPORTED_MODULE_11__/* .PayPalSupportedCurrencies */ .b]);
  } else if (payoutMethod?.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_8__/* .PayoutMethodType.OTHER */ .Nk.OTHER) {
    return _lib_constants_currency__WEBPACK_IMPORTED_MODULE_11__/* .Currency.includes */ .F.includes(collective?.currency) ? lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([collective?.currency, ..._lib_constants_currency__WEBPACK_IMPORTED_MODULE_11__/* .Currency */ .F]) : _lib_constants_currency__WEBPACK_IMPORTED_MODULE_11__/* .Currency */ .F;
  } else {
    return lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([collective?.currency, collective?.host?.currency, payoutMethod?.currency, payoutMethod?.data?.currency].filter(Boolean));
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17632);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62131);
/* harmony import */ var _lib_policies__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(43176);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97079);
/* harmony import */ var _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71611);
/* harmony import */ var _collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54103);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5993);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(29242);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputPercentage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(69931);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(66943);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(31330);
/* harmony import */ var _TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(37066);
/* harmony import */ var _contribution_flow_fees_on_top_illustration_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(83865);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_14__, _CollectivePicker__WEBPACK_IMPORTED_MODULE_15__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_16__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_28__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_33__, _ToastProvider__WEBPACK_IMPORTED_MODULE_35__]);
([_collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_14__, _CollectivePicker__WEBPACK_IMPORTED_MODULE_15__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_16__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_28__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_33__, _ToastProvider__WEBPACK_IMPORTED_MODULE_35__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const _excluded = ["collective"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









































const Illustration = styled_components__WEBPACK_IMPORTED_MODULE_6___default().img.attrs({
  src: _contribution_flow_fees_on_top_illustration_png__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z
}).withConfig({
  displayName: "AddFundsModal__Illustration",
  componentId: "sc-m0r42a-0"
})(["width:40px;height:40px;"]);
const AddFundsModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .ZP).withConfig({
  displayName: "AddFundsModal__AddFundsModalContainer",
  componentId: "sc-m0r42a-1"
})(["width:100%;max-width:576px;padding:24px 30px;", ""], props => props.showPlatformTipModal && (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["background-image:url('/static/images/platform-tip-background.svg');background-repeat:no-repeat;background-size:435px;"]));

const AmountDetailsLine = ({
  label,
  value,
  currency,
  isLargeAmount
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
  justifyContent: "space-between",
  alignItems: "center",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Text__WEBPACK_IMPORTED_MODULE_34__/* .Span */ .Dr, {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "500",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Text__WEBPACK_IMPORTED_MODULE_34__/* .Span */ .Dr, {
    fontSize: isLargeAmount ? '18px' : '12px',
    lineHeight: isLargeAmount ? '27px' : '18px',
    fontWeight: "500",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      amount: value,
      currency: currency
    })
  })]
});

const addFundsMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation AddFunds(
    $fromAccount: AccountReferenceInput!
    $account: AccountReferenceInput!
    $tier: TierReferenceInput
    $amount: AmountInput!
    $description: String!
    $memo: String
    $processedAt: DateTime
    $hostFeePercent: Float!
    $invoiceTemplate: String
  ) {
    addFunds(
      account: $account
      fromAccount: $fromAccount
      amount: $amount
      description: $description
      memo: $memo
      processedAt: $processedAt
      hostFeePercent: $hostFeePercent
      tier: $tier
      invoiceTemplate: $invoiceTemplate
    ) {
      id
      description
      memo
      processedAt
      transactions {
        id
        type
      }
      fromAccount {
        id
        slug
        name
      }
      toAccount {
        id
        slug
        name
        stats {
          id
          balance {
            valueInCents
          }
        }
      }
      tier {
        id
        legacyId
        slug
        name
      }
    }
  }
`;
const addFundsTierFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  fragment AddFundsTierFields on Tier {
    id
    slug
    legacyId
    name
  }
`;
const addFundsAccountQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query AddFundsAccount($slug: String!) {
    account(slug: $slug) {
      id
      type
      isHost
      name
      slug
      currency
      settings
      ... on Organization {
        tiers {
          nodes {
            id
            ...AddFundsTierFields
          }
        }
      }
      ... on Host {
        id
        slug
        name
        settings
        plan {
          id
          hostFees
        }
        policies {
          REQUIRE_2FA_FOR_ADMINS
        }
        isTrustedHost
      }
      ... on AccountWithHost {
        addedFundsHostFeePercent: hostFeePercent(paymentMethodType: HOST)
        host {
          id
          slug
          name
          settings
          plan {
            id
            hostFees
          }
          policies {
            REQUIRE_2FA_FOR_ADMINS
          }
          isTrustedHost
        }
      }
      ... on AccountWithContributions {
        tiers {
          nodes {
            id
            ...AddFundsTierFields
          }
        }
      }
    }
  }
  ${addFundsTierFieldsFragment}
`;
const addPlatformTipMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation AddPlatformTip($amount: AmountInput!, $transaction: TransactionReferenceInput!) {
    addPlatformTipToTransaction(amount: $amount, transaction: $transaction) {
      id
    }
  }
`;

const getInitialValues = values => _objectSpread({
  amount: null,
  hostFeePercent: null,
  description: '',
  memo: null,
  processedAt: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .getCurrentDateInUTC */ .qo)(),
  fromAccount: null,
  tier: null
}, values);

const validate = values => {
  return (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .requireFields */ .ay)(values, ['amount', 'fromAccount', 'description', 'processedAt']);
}; // Build an account reference. Compatible with accounts from V1 and V2.


const buildAccountReference = input => {
  return typeof input.id === 'string' ? {
    id: input.id
  } : {
    legacyId: input.id
  };
};

const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
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
const DEFAULT_PLATFORM_TIP_PERCENTAGES = [0.1, 0.15, 0.2];

const getOptionFromPercentage = (amount, currency, percentage) => {
  const feeAmount = isNaN(amount) ? 0 : Math.round(amount * percentage);
  return {
    // Value must be unique, so we set a special key if feeAmount is 0
    value: feeAmount || `${percentage}%`,
    feeAmount,
    percentage,
    currency,
    label: `${feeAmount / 100} ${currency} (${percentage * 100}%)`
  };
};

const getOptions = (amount, currency, intl) => {
  return [...DEFAULT_PLATFORM_TIP_PERCENTAGES.map(percentage => {
    return getOptionFromPercentage(amount, currency, percentage);
  }), {
    label: intl.formatMessage(msg.noThankYou),
    value: 0
  }, {
    label: intl.formatMessage(msg.other),
    value: 'CUSTOM'
  }];
};

const getTiersOptions = (intl, tiers) => {
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
  }, ...tiers.map(tier => ({
    value: tier,
    label: `#${tier.legacyId} - ${tier.name}`
  }))];
};

const Field = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z).attrs({
  labelFontSize: '16px',
  labelFontWeight: '700'
}).withConfig({
  displayName: "AddFundsModal__Field",
  componentId: "sc-m0r42a-2"
})([""]);

const AddFundsModal = _ref => {
  let {
    collective
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
  const {
    0: fundDetails,
    1: setFundDetails
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_35__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();

  const formatOptionLabel = option => {
    if (option.currency) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("span", {
        children: [(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .formatCurrency */ .xG)(option.feeAmount, option.currency, {
          locale: intl.locale
        }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_34__/* .Span */ .Dr, {
          color: "black.500",
          children: ["(", option.percentage * 100, "%)"]
        })]
      });
    } else {
      return option.label;
    }
  };

  const {
    0: customAmount,
    1: setCustomAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(addFundsAccountQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: collective.slug
    }
  });
  const account = data?.account;
  const currency = account?.currency;
  const host = account?.isHost ? account : account?.host;
  const options = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => getOptions(fundDetails.fundAmount, currency, intl), [fundDetails.fundAmount, currency]);
  const {
    0: selectedOption,
    1: setSelectedOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options[3]);
  const [submitAddFunds, {
    data: addFundsResponse,
    error: fundError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(addFundsMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T,
    refetchQueries: [{
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T,
      query: (0,_collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_14__/* .getBudgetSectionQuery */ .MR)(true, false, false),
      variables: (0,_collective_page_sections_Budget__WEBPACK_IMPORTED_MODULE_14__/* .getBudgetSectionQueryVariables */ .kr)(collective.slug, host?.slug, false)
    }, {
      query: _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_13__/* .collectivePageQuery */ .J,
      variables: (0,_collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_13__/* .getCollectivePageQueryVariables */ .L)(collective.slug)
    }],
    awaitRefetchQueries: true
  });
  const [addPlatformTip, {
    error: platformTipError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(addPlatformTipMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T
  });

  const tiersNodes = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'account.tiers.nodes');

  const accountSettings = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'account.settings');

  const tiersOptions = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => getTiersOptions(intl, tiersNodes, accountSettings), [tiersNodes, accountSettings]); // No modal if logged-out

  if (!LoggedInUser) {
    return null;
  } // From the Collective page we pass host and collective as API v1 objects
  // From the Host dashboard we pass host and collective as API v2 objects


  const canAddHostFee = host?.plan?.hostFees && collective.id !== host?.id;
  const hostFeePercent = account?.addedFundsHostFeePercent || collective.hostFeePercent;
  const defaultHostFeePercent = canAddHostFee ? hostFeePercent : 0;
  const canAddPlatformTip = host?.isTrustedHost;
  const receiptTemplates = host?.settings?.invoice?.templates;
  const receiptTemplateTitles = [];

  if (receiptTemplates?.default?.title?.length > 0) {
    receiptTemplateTitles.push({
      value: 'default',
      label: receiptTemplates?.default?.title
    });
  }

  if (receiptTemplates?.alternative?.title?.length > 0) {
    receiptTemplateTitles.push({
      value: 'alternative',
      label: receiptTemplates?.alternative?.title
    });
  }

  const handleClose = () => {
    setFundDetails({
      showPlatformTipModal: false
    });
    setSelectedOption(options[3]);
    setCustomAmount(0);
    props.onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(AddFundsModalContainer, _objectSpread(_objectSpread({}, props), {}, {
    trapFocus: true,
    showPlatformTipModal: fundDetails.showPlatformTipModal,
    onClose: handleClose,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .CollectiveModalHeader */ .I4, {
      collective: collective,
      onClick: handleClose
    }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      mt: 2,
      height: 200
    }) : (0,_lib_policies__WEBPACK_IMPORTED_MODULE_39__/* .require2FAForAdmins */ .u)(host) && !LoggedInUser.hasTwoFactorAuth ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_36__/* .TwoFactorAuthRequiredMessage */ .l, {
      borderWidth: 0,
      noTitle: true
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
      initialValues: getInitialValues({
        hostFeePercent: defaultHostFeePercent,
        account: collective
      }),
      enableReinitialize: true,
      validate: validate,
      onSubmit: async (values, formik) => {
        if (!fundDetails.showPlatformTipModal) {
          const defaultInvoiceTemplate = receiptTemplateTitles.length > 0 ? receiptTemplateTitles[0].value : null;
          const result = await submitAddFunds({
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
              invoiceTemplate: values.invoiceTemplate?.value || defaultInvoiceTemplate,
              processedAt: values.processedAt ? new Date(values.processedAt) : null
            })
          });
          const resultOrder = result.data.addFunds;
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
        } else if (selectedOption.value !== 0) {
          const creditTransaction = addFundsResponse.addFunds.transactions.filter(transaction => transaction.type === 'CREDIT')[0];
          await addPlatformTip({
            variables: _objectSpread(_objectSpread({}, values), {}, {
              amount: {
                valueInCents: selectedOption.value !== 'CUSTOM' ? selectedOption.value : customAmount
              },
              transaction: {
                id: creditTransaction.id
              }
            })
          });
          handleClose();
          addToast({
            type: _ToastProvider__WEBPACK_IMPORTED_MODULE_35__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
            message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "AddFundsModal.Success",
              defaultMessage: [{
                "type": 0,
                "value": "Platform tip successfully added"
              }]
            })
          });
        } else {
          handleClose();
        }
      },
      children: ({
        values,
        isSubmitting
      }) => {
        const hostFeePercent = isNaN(values.hostFeePercent) ? defaultHostFeePercent : values.hostFeePercent;
        const hostFee = Math.round(values.amount * (hostFeePercent / 100));
        const defaultSources = [];
        defaultSources.push({
          value: host,
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_15__/* .DefaultCollectiveLabel */ .Os, {
            value: host
          })
        });

        if (host?.id !== account.id) {
          defaultSources.push({
            value: account,
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_15__/* .DefaultCollectiveLabel */ .Os, {
              value: account
            })
          });
        }

        if (!fundDetails.showPlatformTipModal) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
            "data-cy": "add-funds-form",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("h3", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "AddFundsModal.SubHeading",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add Funds to the Collective"
                }]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalBody */ .fe, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                name: "fromAccount",
                htmlFor: "addFunds-fromAccount",
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "AddFundsModal.source",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Source"
                  }]
                }),
                mt: 3,
                children: ({
                  form,
                  field
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  inputId: field.id,
                  "data-cy": "add-funds-source",
                  types: ['USER', 'ORGANIZATION'],
                  creatable: true,
                  error: field.error,
                  createCollectiveOptionalFields: ['location.address', 'location.country'],
                  onBlur: () => form.setFieldTouched(field.name, true),
                  customOptions: defaultSources,
                  onChange: ({
                    value
                  }) => form.setFieldValue(field.name, value)
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                name: "tier",
                htmlFor: "addFunds-tier",
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "b07w+D",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Tier"
                  }]
                }),
                mt: 3,
                children: ({
                  form,
                  field
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, {
                  inputId: field.id,
                  "data-cy": "add-funds-tier",
                  error: field.error,
                  onBlur: () => form.setFieldTouched(field.name, true),
                  onChange: ({
                    value
                  }) => form.setFieldValue(field.name, value),
                  isLoading: loading,
                  options: tiersOptions,
                  isSearchable: options.length > 10,
                  value: tiersOptions.find(option => !values.tier ? option.value === null : option.value?.id === values.tier.id)
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                name: "description",
                htmlFor: "addFunds-description",
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "Fields.description",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Description"
                  }]
                }),
                mt: 3,
                children: ({
                  field
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, _objectSpread({
                  "data-cy": "add-funds-description"
                }, field))
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                name: "processedAt",
                htmlFor: "addFunds-processedAt",
                inputType: "date",
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("span", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "expense.incurredAt",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Date"
                    }]
                  }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                    content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                      id: "mqg/wj",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Date the funds were received."
                      }]
                    }),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircle, {
                      size: 16
                    })
                  })]
                }),
                mt: 3,
                children: ({
                  field
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, _objectSpread({
                  "data-cy": "add-funds-processedAt"
                }, field))
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                name: "memo",
                htmlFor: "addFunds-memo",
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("span", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "D5NqQO",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Memo"
                    }]
                  }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                    content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                      id: "znqf9S",
                      defaultMessage: [{
                        "type": 0,
                        "value": "This is a private note that will only be visible to the host."
                      }]
                    }),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircle, {
                      size: 16
                    })
                  })]
                }),
                required: false,
                mt: 3,
                children: ({
                  field
                }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, _objectSpread({
                  "data-cy": "add-funds-memo"
                }, field))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                mt: 3,
                flexWrap: "wrap",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                  name: "amount",
                  htmlFor: "addFunds-amount",
                  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "Fields.amount",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Amount"
                    }]
                  }),
                  required: true,
                  flex: "1 1",
                  children: ({
                    form,
                    field
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                    id: field.id,
                    "data-cy": "add-funds-amount",
                    currency: currency,
                    placeholder: "0.00",
                    error: field.error,
                    value: field.value,
                    maxWidth: "100%",
                    onChange: value => form.setFieldValue(field.name, value),
                    onBlur: () => form.setFieldTouched(field.name, true)
                  })
                }), canAddHostFee && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                  name: "hostFeePercent",
                  htmlFor: "addFunds-hostFeePercent",
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("span", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                      id: "NJsELs",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Host Fee"
                      }]
                    }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                      content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                        id: "AddFundsModal.hostFee.tooltip",
                        defaultMessage: [{
                          "type": 0,
                          "value": "The default host fee percentage is set up in your host settings. The host fee is charged by the fiscal host to the collectives for the financial services provided."
                        }]
                      }),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircle, {
                        size: 16
                      })
                    })]
                  }),
                  ml: 3,
                  children: ({
                    form,
                    field
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledInputPercentage__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    id: field.id,
                    placeholder: defaultHostFeePercent,
                    value: field.value,
                    error: field.error,
                    onChange: value => form.setFieldValue(field.name, value),
                    onBlur: () => form.setFieldTouched(field.name, true)
                  })
                })]
              }), receiptTemplateTitles.length > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                width: "100%",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Field, {
                  name: "invoiceTemplate",
                  htmlFor: "addFunds-invoiceTemplate",
                  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "cyMx/0",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Choose receipt"
                    }]
                  }),
                  mt: 3,
                  children: ({
                    form,
                    field
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, {
                    id: field.id,
                    options: receiptTemplateTitles,
                    defaultValue: receiptTemplateTitles[0],
                    onChange: value => form.setFieldValue(field.name, value)
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Text__WEBPACK_IMPORTED_MODULE_34__.P, {
                fontSize: "14px",
                lineHeight: "17px",
                fontWeight: "500",
                mt: 4,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "Details",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Details"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                my: 2,
                borderColor: "black.300"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(AmountDetailsLine, {
                value: values.amount || 0,
                currency: currency,
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "AddFundsModal.fundingAmount",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Funding amount"
                  }]
                })
              }), canAddHostFee && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(AmountDetailsLine, {
                value: hostFee,
                currency: currency,
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
                    hostFees: `${hostFeePercent}%`
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                my: 2,
                borderColor: "black.300"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(AmountDetailsLine, {
                value: values.amount - hostFee,
                currency: currency,
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "AddFundsModal.netAmount",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Net amount received by collective"
                  }]
                }),
                isLargeAmount: true
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Text__WEBPACK_IMPORTED_MODULE_34__.P, {
                fontSize: "12px",
                lineHeight: "18px",
                color: "black.700",
                mt: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
                    amount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .formatCurrency */ .xG)(values.amount, currency, {
                      locale: intl.locale
                    })
                  }
                })
              }), fundError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                error: fundError,
                mt: 3,
                fontSize: "13px"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalFooter */ .mz, {
              isFullWidth: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                justifyContent: "center",
                flexWrap: "wrap",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  type: "submit",
                  "data-cy": "add-funds-submit-btn",
                  buttonStyle: "primary",
                  mx: 2,
                  mb: 1,
                  minWidth: 120,
                  loading: isSubmitting,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "menu.addFunds",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Add Funds"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  mx: 2,
                  mb: 1,
                  minWidth: 100,
                  onClick: handleClose,
                  type: "button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalBody */ .fe, {
              "data-cy": "funds-added",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("h3", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "AddFundsModal.FundsAdded",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Funds Added ✅"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  pb: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "AddFundsModal.YouAdded",
                    defaultMessage: [{
                      "type": 0,
                      "value": "You added:"
                    }]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("ul", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("strong", {
                        children: `${fundDetails.fundAmount / 100} ${currency}`
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("li", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                        id: "AddFundsModal.FromTheSource",
                        defaultMessage: [{
                          "type": 0,
                          "value": "From the source"
                        }]
                      }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("strong", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                          collective: fundDetails.source
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("li", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                        id: "AddFundsModal.ForThePurpose",
                        defaultMessage: [{
                          "type": 0,
                          "value": "For the purpose of"
                        }]
                      }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("strong", {
                        children: fundDetails.description
                      })]
                    }), fundDetails.memo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("li", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                        id: "D5NqQO",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Memo"
                        }]
                      }), ': ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("strong", {
                        children: fundDetails.memo
                      })]
                    }), fundDetails.processedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("li", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Text__WEBPACK_IMPORTED_MODULE_34__/* .Span */ .Dr, {
                        textTransform: "capitalize",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                          id: "processedAt",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Fund received date"
                          }]
                        })
                      }), ': ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("strong", {
                        children: intl.formatDate(fundDetails.processedAt, {
                          timeZone: 'UTC'
                        })
                      })]
                    }), fundDetails.tier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("li", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                        id: "h+1vQB",
                        defaultMessage: [{
                          "type": 0,
                          "value": "For the tier"
                        }]
                      }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                        as: _Link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
                        openInNewTab: true,
                        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_11__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${fundDetails.tier.slug}-${fundDetails.tier.legacyId}`,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx("strong", {
                          children: fundDetails.tier.name
                        })
                      })]
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                  pb: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "AddFundsModal.NeedHelp",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Need Help?"
                    }]
                  }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                    href: "/support",
                    buttonStyle: "standard",
                    buttonSize: "tiny",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                      id: "error.contactSupport",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Contact support"
                      }]
                    })
                  })]
                })]
              }), canAddPlatformTip && hostFee === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                  my: 3,
                  borderColor: "black.300"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Text__WEBPACK_IMPORTED_MODULE_34__.P, {
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "black.900",
                    my: 32,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                      id: "AddFundsModal.platformTipInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Since you are not charging a host fee to the collective, Open Collective is free to use. We rely on your generosity to keep this possible!"
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                    justifyContent: "space-between",
                    flexWrap: ['wrap', 'nowrap'],
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                      alignItems: "center",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(Illustration, {
                        alt: ""
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Text__WEBPACK_IMPORTED_MODULE_34__.P, {
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "18px",
                        color: "black.900",
                        mx: 10,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                          id: "AddFundsModal.thankYou",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Thank you for supporting us. Platform tip will be deducted from the host budget:"
                          }]
                        })
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, {
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
                  }), selectedOption.value === 'CUSTOM' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                    justifyContent: "flex-end",
                    mt: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                      id: "platformTip",
                      currency: currency,
                      onChange: amount => setCustomAmount(amount),
                      defaultValue: options[1].value
                    })
                  })]
                }), platformTipError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                  error: platformTipError,
                  mt: 3,
                  fontSize: "13px"
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_31__/* .ModalFooter */ .mz, {
              isFullWidth: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                justifyContent: "center",
                flexWrap: "wrap",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  type: "submit",
                  "data-cy": "add-platform-tip-btn",
                  buttonStyle: "primary",
                  mx: 2,
                  mb: 1,
                  minWidth: 120,
                  loading: isSubmitting,
                  children: selectedOption.value !== 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "AddFundsModal.tipAndFinish",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Tip and Finish"
                    }]
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "Finish",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Finish"
                    }]
                  })
                }), !fundDetails.showPlatformTipModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  mx: 2,
                  mb: 1,
                  minWidth: 100,
                  onClick: handleClose,
                  type: "button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFundsModal);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Set color to `#00cdff` to use the default Transferwise color.
 */



const TransferwiseIcon = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    size: "64",
    viewBox: "-0.753 -0.753 9.424 9.407"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransferwiseIcon);

/***/ }),

/***/ 58689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87268);


const OCFPrimaryButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
  displayName: "OCFPrimaryButton",
  componentId: "sc-le1nn-0"
})(["background:linear-gradient(180deg,#4f7d7f 0%,#396c6f 100%);border-color:transparent;color:#ffffff;&:focus{border:solid 2px #90f0bd;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:active{background:linear-gradient(to bottom,#7a9899,#527d80 99%);}&:hover{border-color:transparent;background:linear-gradient(to bottom,#7a9899,#527d80 99%);}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OCFPrimaryButton);

/***/ }),

/***/ 14574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36422);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Admin = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_StyledTag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right'
}).withConfig({
  displayName: "OnboardingProfileCard__Admin",
  componentId: "sc-shs4i4-0"
})([""]);

class OnboardingProfileCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      collective,
      removeAdmin,
      isPending
    } = this.props;
    const {
      name
    } = collective;

    const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Admin, {
      closeButtonProps: removeAdmin ? {
        onClick: () => {
          removeAdmin(collective);
        }
      } : null,
      "data-cy": "remove-user",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          radius: 16,
          collective: collective
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          fontSize: "12px",
          ml: 2,
          "data-cy": "name-of-admins",
          children: name
        })]
      })
    });

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      my: 1,
      mr: 2,
      children: isPending ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "onboarding.admins.pending",
          defaultMessage: [{
            "type": 0,
            "value": "Pending approval"
          }]
        }),
        children: content
      }) : content
    });
  }

}

OnboardingProfileCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OnboardingProfileCard",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "adminCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "removeAdmin": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isPending": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingProfileCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57153);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24317);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33054);
/* harmony import */ var _lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46233);
/* harmony import */ var _lib_transactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5949);
/* harmony import */ var _expenses_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9215);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88705);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97619);
/* harmony import */ var _PaymentMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10506);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _TransactionRefundButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(196);
/* harmony import */ var _TransactionRejectButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14886);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_17__, _TransactionRejectButton__WEBPACK_IMPORTED_MODULE_20__]);
([_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_17__, _TransactionRejectButton__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const rejectAndRefundTooltipContent = (showRefundHelp, showRejectHelp) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
  children: [showRefundHelp && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
    fontSize: "12px",
    lineHeight: "18px",
    mb: showRejectHelp ? 3 : 0,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
        bold: _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .I18nBold */ .Gl
      }
    })
  }), showRejectHelp && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
    fontSize: "12px",
    lineHeight: "18px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
        bold: _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .I18nBold */ .Gl
      }
    })
  })]
}); // Check whether transfer is child collective to parent or if the transfer is from host to one of its collectives


const isInternalTransfer = (fromAccount, toAccount) => {
  return fromAccount.parent?.id === toAccount.id || fromAccount.id === toAccount.host?.id;
};

const DetailTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default().p.withConfig({
  displayName: "TransactionDetails__DetailTitle",
  componentId: "sc-1cmnh82-0"
})(["margin:8px 8px 4px 8px;color:#76777a;font-weight:500;letter-spacing:0.6px;text-transform:uppercase;font-weight:bold;font-size:11px;"]);
const DetailDescription = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "TransactionDetails__DetailDescription",
  componentId: "sc-1cmnh82-1"
})(["margin:0 8px 12px 8px;font-size:12px;color:#4e5052;letter-spacing:-0.04px;"]);
const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC).withConfig({
  displayName: "TransactionDetails__DetailsContainer",
  componentId: "sc-1cmnh82-2"
})(["background:#f7f8fa;font-size:12px;padding:16px 24px;", " @media (max-width:40em){padding:8px;}"], props => props.isCompact && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(["padding:16px 24px 16px 24px;"]));

const TransactionDetails = ({
  displayActions,
  transaction,
  onMutationSuccess
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const {
    loading: loadingInvoice,
    callWith: downloadInvoiceWith
  } = (0,_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__/* .useAsyncCall */ .N)(_lib_transactions__WEBPACK_IMPORTED_MODULE_8__/* .saveInvoice */ .US, {
    useErrorToast: true
  });
  const {
    id,
    type,
    isRefunded,
    isRefund,
    toAccount,
    fromAccount,
    host,
    uuid,
    platformFee,
    hostFee,
    paymentMethod,
    paymentProcessorFee,
    payoutMethod,
    amount,
    netAmount,
    permissions,
    order,
    expense,
    isOrderRejected,
    kind
  } = transaction;
  const isCredit = type === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionTypes.CREDIT */ .em.CREDIT;
  const hasOrder = order !== null; // permissions

  const showRefundButton = permissions?.canRefund && !isRefunded;
  const showRejectButton = permissions?.canReject && !isOrderRejected;
  const showDownloadInvoiceButton = permissions?.canDownloadInvoice && !isInternalTransfer(fromAccount, toAccount);
  const hostFeeTransaction = transaction.relatedTransactions?.find(t => t.kind === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.HOST_FEE */ .wz.HOST_FEE && t.type === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionTypes.CREDIT */ .em.CREDIT);
  const paymentProcessorCover = transaction.relatedTransactions?.find(t => t.kind === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.PAYMENT_PROCESSOR_COVER */ .wz.PAYMENT_PROCESSOR_COVER && t.type === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionTypes.CREDIT */ .em.CREDIT);
  const isProcessing = [_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_5__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_5__/* .ORDER_STATUS.PENDING */ .D.PENDING].includes(order?.status);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(DetailsContainer, {
    flexWrap: "wrap",
    alignItems: "flex-start",
    children: [!isProcessing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      flexDirection: "column",
      width: [1, 0.35],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailTitle, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "transaction.details",
          defaultMessage: [{
            "type": 0,
            "value": "transaction details"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(DetailDescription, {
        children: [(0,_lib_transactions__WEBPACK_IMPORTED_MODULE_8__/* .renderDetailsString */ .rX)({
          amount,
          platformFee,
          hostFee,
          paymentProcessorFee,
          netAmount,
          isCredit,
          isRefunded,
          hasOrder,
          toAccount,
          fromAccount,
          taxAmount: transaction.taxAmount,
          taxInfo: transaction.taxInfo,
          intl,
          kind,
          expense,
          isRefund,
          paymentProcessorCover
        }), ['CONTRIBUTION', 'ADDED_FUNDS', 'EXPENSE'].includes(transaction.kind) && hostFeeTransaction && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
              amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                amount: hostFeeTransaction.netAmount.valueInCents,
                currency: hostFeeTransaction.netAmount.currency,
                showCurrencyCode: false,
                amountStyles: null
              })
            }
          })]
        })]
      }), order?.memo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailTitle, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "D5NqQO",
            defaultMessage: [{
              "type": 0,
              "value": "Memo"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailDescription, {
          children: order.memo
        })]
      }), order?.processedAt && (transaction.kind === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.ADDED_FUNDS */ .wz.ADDED_FUNDS || !paymentMethod && transaction.kind === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_6__/* .TransactionKind.CONTRIBUTION */ .wz.CONTRIBUTION) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailTitle, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "expense.incurredAt",
              defaultMessage: [{
                "type": 0,
                "value": "Date"
              }]
            }), ` `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "mqg/wj",
                defaultMessage: [{
                  "type": 0,
                  "value": "Date the funds were received."
                }]
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__.InfoCircle, {
                size: 13
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailDescription, {
          children: intl.formatDate(order.processedAt, {
            dateStyle: 'long',
            timeZone: 'UTC'
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      flexDirection: "column",
      width: [1, 0.35],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        children: [(host || paymentMethod) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [host && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailTitle, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "Fiscalhost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailDescription, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                as: _LinkCollective__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                collective: host
              })
            })]
          }), paymentMethod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailTitle, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "PaidWith",
                defaultMessage: [{
                  "type": 0,
                  "value": "Paid With"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailDescription, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_PaymentMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                type: paymentMethod.type,
                fontSize: 11,
                iconSize: 16
              })
            })]
          })]
        }), payoutMethod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailTitle, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "PaidWith",
              defaultMessage: [{
                "type": 0,
                "value": "Paid With"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(DetailDescription, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_expenses_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      flexDirection: "column",
      width: [1, 0.3],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexWrap: "wrap",
        justifyContent: ['flex-start', 'flex-end'],
        alignItems: "center",
        mt: [2, 0],
        children: [(showRefundButton || showRejectButton) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          content: rejectAndRefundTooltipContent(showRefundButton, showRejectButton),
          mt: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
            mx: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_2__.Info, {
              color: "#1869F5",
              size: 20
            })
          })
        }), showRefundButton && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__/* .Span */ .Dr, {
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_TransactionRefundButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            id: id,
            onMutationSuccess: onMutationSuccess
          })
        }), showRejectButton && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__/* .Span */ .Dr, {
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_TransactionRejectButton__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            id: id,
            canRefund: permissions?.canRefund && !isRefunded,
            onMutationSuccess: onMutationSuccess
          })
        }), showDownloadInvoiceButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
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
          children: [expense && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "DownloadInvoice",
            defaultMessage: [{
              "type": 0,
              "value": "Download invoice"
            }]
          }), order && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "r": () => (/* binding */ getDisplayedAmount)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89711);
/* harmony import */ var _styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76841);
/* harmony import */ var _styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75827);
/* harmony import */ var _styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24317);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33054);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17632);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62131);
/* harmony import */ var _lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3025);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25896);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11194);
/* harmony import */ var _budget_DebitCreditList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99962);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69078);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95370);
/* harmony import */ var _DefinedTerm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(78317);
/* harmony import */ var _expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66300);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(40777);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(97619);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51082);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88609);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14540);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90998);
/* harmony import */ var _TransactionSign__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(47924);
/* harmony import */ var _TransactionStatusTag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(87963);
/* harmony import */ var _TransactionDetails__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(97046);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DefinedTerm__WEBPACK_IMPORTED_MODULE_18__, _expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_27__, _Tags__WEBPACK_IMPORTED_MODULE_28__, _TransactionStatusTag__WEBPACK_IMPORTED_MODULE_31__, _TransactionDetails__WEBPACK_IMPORTED_MODULE_32__]);
([_DefinedTerm__WEBPACK_IMPORTED_MODULE_18__, _expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_27__, _Tags__WEBPACK_IMPORTED_MODULE_28__, _TransactionStatusTag__WEBPACK_IMPORTED_MODULE_31__, _TransactionDetails__WEBPACK_IMPORTED_MODULE_32__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




































const {
  CONTRIBUTION,
  ADDED_FUNDS,
  PLATFORM_TIP
} = _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_9__/* .TransactionKind */ .wz;
/** To separate individual information below description */

const INFO_SEPARATOR = ' • ';
const getDisplayedAmount = (transaction, collective) => {
  const isCredit = transaction.type === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_9__/* .TransactionTypes.CREDIT */ .em.CREDIT;
  const hasOrder = transaction.order !== null;
  const isExpense = transaction.kind === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_9__/* .TransactionKind.EXPENSE */ .wz.EXPENSE;
  const isSelf = transaction.fromAccount.slug === collective.slug;
  const isProcessingOrPending = hasOrder && [_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_8__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_8__/* .ORDER_STATUS.PENDING */ .D.PENDING].includes(transaction.order?.status);

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

const ItemTitleWrapper = ({
  expense,
  order,
  children
}) => {
  if (expense) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "Expense.GoToPage",
        defaultMessage: [{
          "type": 0,
          "value": "Go to expense page"
        }]
      }),
      delayHide: 0,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
        underlineOnHover: true,
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .getCollectivePageRoute */ .x0)(expense.account)}/expenses/${expense.legacyId}`,
        children: children
      })
    });
  } else if (order) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "Contribution.GoToPage",
        defaultMessage: [{
          "type": 0,
          "value": "Go to contribution page"
        }]
      }),
      delayHide: 0,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
        underlineOnHover: true,
        href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .getCollectivePageRoute */ .x0)(order.toAccount)}/orders/${order.legacyId}`,
        children: children
      })
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: children
    });
  }
};

const KindTag = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledTag__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z).attrs({
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

const getExpenseStatusTag = (expense, isRefund, isRefunded) => {
  let expenseStatusLabel;

  if (isRefunded) {
    expenseStatusLabel = 'REFUNDED';
  } else if (isRefund) {
    expenseStatusLabel = 'COMPLETED';
  } else {
    expenseStatusLabel = expense?.status || _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_7__/* ["default"].PAID */ .Z.PAID;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_expenses_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    status: expenseStatusLabel,
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "16px",
    letterSpacing: "0.06em",
    px: "6px",
    py: "2px"
  });
};

const TransactionItem = ({
  displayActions,
  collective,
  transaction,
  onMutationSuccess
}) => {
  const {
    toAccount,
    fromAccount,
    giftCardEmitterAccount,
    order,
    expense,
    type,
    kind,
    description,
    createdAt,
    isRefunded,
    isRefund
  } = transaction;
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  const [isExpanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const hasOrder = order !== null;
  const isExpense = kind === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_9__/* .TransactionKind.EXPENSE */ .wz.EXPENSE;
  const isCredit = type === _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_9__/* .TransactionTypes.CREDIT */ .em.CREDIT;
  const Item = isCredit ? _budget_DebitCreditList__WEBPACK_IMPORTED_MODULE_15__/* .CreditItem */ .XG : _budget_DebitCreditList__WEBPACK_IMPORTED_MODULE_15__/* .DebitItem */ .cw;
  const legacyCollectiveId = collective.legacyId || collective.id;
  const isOwnUserProfile = LoggedInUser && LoggedInUser.CollectiveId === legacyCollectiveId;
  const avatarCollective = isCredit ? fromAccount : toAccount;
  const isProcessingOrPending = hasOrder && [_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_8__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING, _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_8__/* .ORDER_STATUS.PENDING */ .D.PENDING].includes(order?.status);
  const displayedAmount = getDisplayedAmount(transaction, collective);

  const transactionDetailsLink = () => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
      "data-cy": "transaction-details",
      buttonSize: "tiny",
      buttonStyle: "secondary",
      isBorderless: true,
      onClick: () => setExpanded(!isExpanded),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
        whiteSpace: "nowrap",
        children: isExpanded ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "closeDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Close Details"
            }]
          }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_4__.ChevronUp, {
            size: "1em"
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
            whiteSpace: "nowrap",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "viewDetails",
              defaultMessage: [{
                "type": 0,
                "value": "View Details"
              }]
            }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
              size: "1em"
            })]
          })
        })
      })
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(Item, {
    "data-cy": "transaction-item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
      px: [16, 27],
      py: 16,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
        flexWrap: "wrap",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          flex: "1",
          minWidth: "60%",
          mr: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
            mr: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              collective: avatarCollective,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
                collective: avatarCollective,
                radius: 40
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              "data-cy": "transaction-description",
              fontWeight: "500",
              fontSize: ['14px', null, null, '16px'],
              lineHeight: ['20px', null, null, '24px'],
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(ItemTitleWrapper, {
                expense: expense,
                order: order,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                  title: description,
                  color: description ? 'black.900' : 'black.600',
                  children: description ? lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(description, {
                    length: 60
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "NoDescription",
                    defaultMessage: [{
                      "type": 0,
                      "value": "No description provided"
                    }]
                  })
                })
              }), isOwnUserProfile && transaction.fromAccount?.isIncognito && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledSpan, {
                ml: 1,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                  color: "#969BA3",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "PrivateTransaction",
                    defaultMessage: [{
                      "type": 0,
                      "value": "This incognito transaction is only visible to you"
                    }]
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_29__.P, {
              mt: "4px",
              fontSize: "12px",
              lineHeight: "20px",
              color: "black.700",
              "data-cy": "transaction-details",
              children: [(0,_lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_12__/* .i18nTransactionType */ .Nx)(intl, transaction.type), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                  id: "Transaction.from",
                  defaultMessage: [{
                    "type": 0,
                    "value": "from "
                  }, {
                    "type": 1,
                    "value": "name"
                  }],
                  values: {
                    name: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                      as: _LinkCollective__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                      collective: fromAccount
                    })
                  }
                }), "\xA0"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "Transaction.to",
                defaultMessage: [{
                  "type": 0,
                  "value": "to "
                }, {
                  "type": 1,
                  "value": "name"
                }],
                values: {
                  name: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                    as: _LinkCollective__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                    collective: toAccount
                  })
                }
              }), giftCardEmitterAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
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
                    giftCard: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_DefinedTerm__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                      term: _DefinedTerm__WEBPACK_IMPORTED_MODULE_18__/* .Terms.GIFT_CARD */ .F.GIFT_CARD,
                      textTransform: "lowercase"
                    }),
                    collective: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                      as: _LinkCollective__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                      collective: giftCardEmitterAccount
                    })
                  }
                })]
              }), INFO_SEPARATOR, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_DateTime__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                value: createdAt,
                "data-cy": "transaction-date"
              }), isExpense && expense?.comments?.totalCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: [INFO_SEPARATOR, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("span", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_styled_icons_feather_MessageSquare__WEBPACK_IMPORTED_MODULE_5__.MessageSquare, {
                    size: "16px"
                  }), "\xA0", expense.comments.totalCount]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Flex */ .kC, {
          flexDirection: ['row', 'column'],
          mt: [3, 0],
          flexWrap: "wrap",
          alignItems: ['center', 'flex-end'],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            display: "flex",
            my: 2,
            mr: [3, 0],
            minWidth: 100,
            justifyContent: "flex-end",
            "data-cy": "transaction-amount",
            fontSize: "16px",
            ml: "auto",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_TransactionSign__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
              isCredit: isCredit
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
              fontWeight: "bold",
              color: "black.900",
              mr: 1,
              children: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_10__/* .formatCurrency */ .xG)(Math.abs(displayedAmount.valueInCents), displayedAmount.currency, {
                locale: intl.locale
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
              color: "black.700",
              textTransform: "uppercase",
              children: displayedAmount.currency
            })]
          }), hasOrder && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_TransactionStatusTag__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
            transaction: transaction,
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "16px",
            letterSpacing: "0.06em",
            px: "6px",
            py: "2px"
          }), ' ', isExpense && getExpenseStatusTag(expense, isRefund, isRefunded)]
        })]
      }), hasOrder && [CONTRIBUTION, ADDED_FUNDS, PLATFORM_TIP].includes(transaction.kind) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        borderTop: ['1px solid #E8E9EB', 'none'],
        mt: 3,
        pt: [2, 0],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(KindTag, {
          children: [(0,_lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_12__/* .i18nTransactionKind */ .w$)(intl, transaction.kind), Boolean(order?.legacyId) && ` #${order.legacyId}`]
        }), (!isProcessingOrPending || transaction.paymentMethod) && transactionDetailsLink()]
      }), isExpense && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        display: "flex",
        mt: 3,
        pt: [2, 0],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Tags__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
          expense: expense
        }), transactionDetailsLink()]
      }), !isExpense && (!hasOrder || ![CONTRIBUTION, ADDED_FUNDS, PLATFORM_TIP].includes(transaction.kind)) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        mt: 3,
        pt: [2, 0],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(KindTag, {
          children: (0,_lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_12__/* .i18nTransactionKind */ .w$)(intl, transaction.kind)
        })
      })]
    }), isExpanded && (hasOrder || isExpense) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx(_TransactionDetails__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionItem);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr).withConfig({
  displayName: "TransactionItem___StyledSpan",
  componentId: "sc-dqouq4-1"
})({
  verticalAlign: 'text-bottom'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export refundTransactionMutation */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_Undo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99232);
/* harmony import */ var _styled_icons_boxicons_regular_Undo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Undo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const refundTransactionMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation RefundTransaction($transaction: TransactionReferenceInput!) {
    refundTransaction(transaction: $transaction) {
      id
    }
  }
`;

const TransactionRefundButton = props => {
  const [refundTransaction] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(refundTransactionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  const [isEnabled, setEnabled] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);

  const handleRefundTransaction = async () => {
    try {
      await refundTransaction({
        variables: {
          transaction: {
            id: props.id
          }
        }
      });
    } catch (error) {
      setError(error);
      return;
    }

    props?.onMutationSuccess();
    setEnabled(false);
  };

  const closeModal = () => {
    setEnabled(false);
    setError(null);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: "column",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        buttonSize: "small",
        buttonStyle: "secondary",
        minWidth: 140,
        background: "transparent",
        textTransform: "capitalize",
        onClick: () => setEnabled(true),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "space-evenly",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_boxicons_regular_Undo__WEBPACK_IMPORTED_MODULE_2__.Undo, {
            size: 16
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "transaction.refund.btn",
            defaultMessage: [{
              "type": 0,
              "value": "refund"
            }]
          })]
        })
      }), isEnabled && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        onClose: closeModal,
        header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Refund",
          defaultMessage: [{
            "type": 0,
            "value": "Refund"
          }]
        }),
        body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "transaction.refund.info",
              defaultMessage: [{
                "type": 0,
                "value": "The contributor will be refunded the full amount."
              }]
            })
          }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            mt: "12px",
            error: error
          })]
        }),
        continueLabel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "space-evenly",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_boxicons_regular_Undo__WEBPACK_IMPORTED_MODULE_2__.Undo, {
            size: 16
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionRefundButton);

/***/ }),

/***/ 14886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export rejectTransactionMutation */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_MinusCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24594);
/* harmony import */ var _styled_icons_boxicons_regular_MinusCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_MinusCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37278);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68185);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _TransactionRejectMessageForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86571);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__, _TransactionRejectMessageForm__WEBPACK_IMPORTED_MODULE_12__]);
([_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__, _TransactionRejectMessageForm__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const tooltipContent = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
    fontSize: "12px",
    lineHeight: "18px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "transaction.reject.info",
      defaultMessage: [{
        "type": 0,
        "value": "Only reject if you want to remove the contributor from your Collective. This will refund their transaction, remove them from your Collective, and display the contribution as 'rejected'."
      }]
    })
  })
});

const rejectTransactionMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation RejectTransaction($transaction: TransactionReferenceInput!, $message: String) {
    rejectTransaction(transaction: $transaction, message: $message) {
      id
    }
  }
`;

const TransactionRejectButton = props => {
  const [rejectTransaction, {
    error: mutationError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(rejectTransactionMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .API_V2_CONTEXT */ .T
  });
  const [isEnabled, setEnabled] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setError(mutationError);
  }, [mutationError]);

  const handleRejectTransaction = async () => {
    await rejectTransaction({
      variables: {
        transaction: {
          id: props.id
        },
        message
      }
    });
    props.onMutationSuccess();
    setEnabled(false);
  };

  const closeModal = () => {
    setEnabled(false);
    setError(null);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: "column",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        content: tooltipContent,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          buttonSize: "small",
          buttonStyle: "dangerSecondary",
          minWidth: 140,
          background: "transparent",
          textTransform: "capitalize",
          onClick: () => setEnabled(true),
          ml: props.canRefund ? 2 : 0,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            alignItems: "center",
            justifyContent: "space-evenly",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_boxicons_regular_MinusCircle__WEBPACK_IMPORTED_MODULE_2__.MinusCircle, {
              size: 16
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "actions.reject",
              defaultMessage: [{
                "type": 0,
                "value": "Reject"
              }]
            })]
          })
        })
      }), isEnabled && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        onClose: closeModal,
        header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "RejectContribution",
          defaultMessage: [{
            "type": 0,
            "value": "Reject and refund"
          }]
        }),
        body: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              type: "warning",
              mx: 2,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "transaction.reject.info",
                defaultMessage: [{
                  "type": 0,
                  "value": "Only reject if you want to remove the contributor from your Collective. This will refund their transaction, remove them from your Collective, and display the contribution as 'rejected'."
                }]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("br", {}), props.canRefund ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "transaction.reject.info.canRefund",
                defaultMessage: [{
                  "type": 0,
                  "value": "If you are only trying to refund a mistaken transaction, please use the 'Refund' button instead."
                }]
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "transaction.reject.info.cannotRefund",
                defaultMessage: [{
                  "type": 0,
                  "value": "Please only use this option if you do not wish for this contributor to be a part of your Collective. This will remove them from your Collective."
                }]
              })]
            }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              mt: "12px",
              error: error
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_TransactionRejectMessageForm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              message: message,
              onChange: message => setMessage(message)
            })]
          })
        }),
        continueLabel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "space-evenly",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_styled_icons_boxicons_regular_MinusCircle__WEBPACK_IMPORTED_MODULE_2__.MinusCircle, {
            size: 16
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionRejectButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87262);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93150);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_2__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MESSAGE_MAX_LENGTH = 500;
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  rejectionReason: {
    id: "RejectionReason",
    defaultMessage: [{
      "type": 0,
      "value": "Type your rejection reason here if you want."
    }]
  }
});

const TransactionRejectMessageForm = ({
  message,
  onChange
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const dispatchChange = e => {
    onChange(e.target.value);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      autoFocus: true,
      name: "rejectionMessage",
      htmlFor: "rejectionMessage",
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "Contact.Message",
        defaultMessage: [{
          "type": 0,
          "value": "Message"
        }]
      }),
      required: false,
      my: 3,
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
        resize: "none",
        maxLength: MESSAGE_MAX_LENGTH,
        minWidth: [290, 500],
        minHeight: 100,
        fontSize: "14px",
        width: "100%",
        placeholder: intl.formatMessage(messages.rejectionReason),
        value: message,
        onChange: dispatchChange
      }))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionRejectMessageForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Zs": () => (/* binding */ parseTransactionKinds),
/* harmony export */   "ce": () => (/* binding */ getDefaultKinds)
/* harmony export */ });
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71156);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53493);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33054);
/* harmony import */ var _lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3025);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52847);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);


const _excluded = ["onChange", "value", "kinds"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // (!) Remember that any changes made here should be applied to the cache in API > `getCacheKeyForBudgetOrTransactionsSections`



const getDefaultKinds = () => {
  return [_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind.ADDED_FUNDS */ .wz.ADDED_FUNDS, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind.BALANCE_TRANSFER */ .wz.BALANCE_TRANSFER, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind.CONTRIBUTION */ .wz.CONTRIBUTION, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind.EXPENSE */ .wz.EXPENSE, _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind.PLATFORM_TIP */ .wz.PLATFORM_TIP];
};

const optionsToQueryString = options => {
  if (!options || options.length === lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind */ .wz)) {
    return null;
  } else {
    return !options ? null : options.map(({
      value
    }) => value).join(',');
  }
};

const parseTransactionKinds = str => {
  if (str === 'ALL') {
    return Object.values(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind */ .wz);
  }

  const result = str?.split(',');

  if (!result?.length || result.length === lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_7__/* .TransactionKind */ .wz)) {
    return null;
  } else {
    return result?.length ? result : null;
  }
};
const TruncatedItemsList = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr).attrs({
  truncateOverflow: true,
  pl: 2,
  maxWidth: ['calc(100vw - 135px)', '75px', '175px', '200px']
}).withConfig({
  displayName: "TransactionsKindFilter__TruncatedItemsList",
  componentId: "sc-1d9ioh-0"
})(["display:inline-block;max-width:75px;", ""], styled_system__WEBPACK_IMPORTED_MODULE_6__.maxWidth);

const TruncatedValueContainer = props => {
  const {
    selectProps,
    children
  } = props;
  const itemsList = (selectProps.value || []).map(({
    label
  }) => label);
  const itemsListStr = itemsList.join(', ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_select__WEBPACK_IMPORTED_MODULE_4__.components.SelectContainer, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(TruncatedItemsList, {
      title: itemsListStr,
      children: itemsListStr
    }), children]
  }));
};

const REACT_SELECT_COMPONENT_OVERRIDE = {
  ValueContainer: TruncatedValueContainer,
  MultiValue: () => null // Items will be displayed as a truncated string in `TruncatedValueContainer `

};

const TransactionsKindFilter = _ref => {
  let {
    onChange,
    value,
    kinds
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();

  const getOption = (value, idx) => ({
    label: (0,_lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_8__/* .i18nTransactionKind */ .w$)(intl, value),
    value,
    idx
  });

  const displayedKinds = kinds && kinds.length ? kinds : getDefaultKinds();
  const options = displayedKinds.map(getOption);
  const selectedOptions = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => (!value ? lodash_intersection__WEBPACK_IMPORTED_MODULE_1___default()(getDefaultKinds(), displayedKinds) : parseTransactionKinds(value)).map(getOption), [value]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_9__/* .StyledSelectFilter */ .V, _objectSpread({
    isSearchable: false,
    isClearable: false,
    onChange: options => onChange(optionsToQueryString(options)),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionsKindFilter);

/***/ }),

/***/ 83722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ transactionsQueryCollectionFragment)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const transactionsQueryCollectionFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment TransactionsQueryCollectionFragment on TransactionCollection {
    totalCount
    offset
    limit
    kinds
    paymentMethodTypes
    nodes {
      id
      uuid
      kind
      amount {
        currency
        valueInCents
      }
      netAmount {
        currency
        valueInCents
      }
      taxAmount {
        valueInCents
        currency
      }
      taxInfo {
        id
        rate
        type
      }
      platformFee {
        currency
        valueInCents
      }
      paymentProcessorFee {
        currency
        valueInCents
      }
      hostFee {
        currency
        valueInCents
      }
      type
      description
      createdAt
      isRefunded
      isRefund
      isOrderRejected
      toAccount {
        id
        name
        slug
        type
        imageUrl
        isIncognito
        ... on AccountWithParent {
          parent {
            id
            slug
          }
        }
        settings
        ... on Individual {
          isGuest
        }
        ... on Collective {
          host {
            id
            name
            slug
            type
          }
        }
        ... on AccountWithHost {
          hostFeePercent
          platformFeePercent
        }
      }
      fromAccount {
        id
        name
        slug
        type
        imageUrl
        isIncognito
        ... on Event {
          parent {
            id
          }
        }
        ... on Project {
          parent {
            id
          }
        }
        ... on Individual {
          isGuest
        }
        ... on AccountWithHost {
          hostFeePercent
          platformFeePercent
        }
      }
      host {
        id
        name
        slug
        type
        imageUrl
      }
      account {
        id
        isIncognito
      }
      giftCardEmitterAccount {
        id
        name
        slug
        type
        imageUrl
      }
      permissions {
        id
        canRefund
        canDownloadInvoice
        canReject
      }
      paymentMethod {
        id
        type
      }
      payoutMethod {
        id
        type
      }
      order {
        id
        legacyId
        status
        memo
        processedAt
        toAccount {
          id
          slug
        }
      }
      expense {
        id
        status
        tags
        type
        feesPayer
        amount
        currency
        legacyId
        # limit: 1 as current best practice to avoid the API fetching entries it doesn't need
        comments(limit: 1) {
          totalCount
        }
        payoutMethod {
          id
          type
        }
        account {
          id
          slug
        }
        createdByAccount {
          id
          slug
        }
      }
      relatedTransactions(kind: [HOST_FEE, PAYMENT_PROCESSOR_COVER]) {
        id
        type
        kind
        netAmount {
          currency
          valueInCents
        }
      }
    }
  }
`;

/***/ }),

/***/ 38083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  CHARGE: 'CHARGE',
  INVOICE: 'INVOICE',
  RECEIPT: 'RECEIPT',
  GRANT: 'GRANT',
  SETTLEMENT: 'SETTLEMENT',
  UNCLASSIFIED: 'UNCLASSIFIED'
});

/***/ }),

/***/ 56508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FZ": () => (/* binding */ INVITE),
/* harmony export */   "Nk": () => (/* binding */ PayoutMethodType),
/* harmony export */   "kD": () => (/* binding */ BANK_TRANSFER_DEFAULT_INSTRUCTIONS),
/* harmony export */   "vi": () => (/* binding */ VIRTUAL_CARD)
/* harmony export */ });
const PayoutMethodType = {
  ACCOUNT_BALANCE: 'ACCOUNT_BALANCE',
  BANK_ACCOUNT: 'BANK_ACCOUNT',
  PAYPAL: 'PAYPAL',
  CREDIT_CARD: 'CREDIT_CARD',
  OTHER: 'OTHER'
}; // Submit on Behalf placeholder. Not an actual Payout Method Type and only exists in the frontend.

const INVITE = 'INVITE'; // Virtual Card charge Expense method

const VIRTUAL_CARD = 'VIRTUAL_CARD'; // This is not internationalized on purpose

const BANK_TRANSFER_DEFAULT_INSTRUCTIONS = `Thank you for your contribution! Here are the payment instructions. Be sure to include the reference details, so we can match your payment to the correct transaction. Sometimes it can take a few days for the funds to arrive and be confirmed. You will automatically be issued a receipt.

Amount: {amount}
Reference: {reference}
Detail: {collective}
{account}
`;

/***/ }),

/***/ 49079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "y": () => (/* binding */ ReasonMessage)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const REASON_CODES = {
  UNSUPPORTED_STATUS: 'UNSUPPORTED_STATUS',
  UNSUPPORTED_USER_FEATURE: 'UNSUPPORTED_USER_FEATURE',
  MINIMAL_CONDITION_NOT_MET: 'MINIMAL_CONDITION_NOT_MET',
  AUTHOR_CANNOT_APPROVE: 'AUTHOR_CANNOT_APPROVE'
};
const ReasonMessage = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [REASON_CODES.AUTHOR_CANNOT_APPROVE]: {
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
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (REASON_CODES);

/***/ }),

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ EMPTY_ARRAY)
/* harmony export */ });
/**
 * Used to make sure the value stays memoized (because [] !== [])
 * See https://codesandbox.io/s/long-flower-mzsqx?file=/src/App.js
 */
const EMPTY_ARRAY = Object.freeze([]);

/***/ }),

/***/ 45624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ip": () => (/* binding */ getSupportedExpenseTypes),
/* harmony export */   "qc": () => (/* binding */ DEFAULT_SUPPORTED_EXPENSE_TYPES),
/* harmony export */   "rX": () => (/* binding */ getPayoutProfiles),
/* harmony export */   "wx": () => (/* binding */ isSupportedExpenseType)
/* harmony export */ });
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48524);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  ORGANIZATION
} = _constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType */ .eV;
const getPayoutProfiles = memoize_one__WEBPACK_IMPORTED_MODULE_5___default()(loggedInAccount => {
  if (!loggedInAccount) {
    return [];
  } else {
    const payoutProfiles = [loggedInAccount];

    for (const membership of lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(loggedInAccount, 'adminMemberships.nodes', [])) {
      if ( // Organizations
      [ORGANIZATION].includes(membership.account.type) || // Relax available accounts
      membership.account.isActive) {
        // Push main account
        payoutProfiles.push(lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(membership.account, ['childrenAccounts'])); // Push children and add Host if missing

        for (const childrenAccount of membership.account.childrenAccounts.nodes) {
          if (childrenAccount.isActive) {
            payoutProfiles.push(_objectSpread({
              host: membership.account.host
            }, childrenAccount));
          }
        }
      }
    }

    return payoutProfiles;
  }
});
const DEFAULT_SUPPORTED_EXPENSE_TYPES = {
  GRANT: false,
  INVOICE: true,
  RECEIPT: true
};
const getSupportedExpenseTypes = account => {
  if (!account) {
    return [];
  }

  const host = account.host;
  const parent = account.parent || account.parentCollective;

  if (account.supportedExpenseTypes || parent?.supportedExpenseTypes) {
    // Easy case: the account uses the new supportedExpenseTypes field
    return account.supportedExpenseTypes || parent.supportedExpenseTypes;
  } else {
    // Aggregate all configs, using the order of priority collective > parent > host
    const getExpenseTypes = account => lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(account?.settings?.expenseTypes, (lodash_isNull__WEBPACK_IMPORTED_MODULE_3___default()));

    const defaultExpenseTypes = DEFAULT_SUPPORTED_EXPENSE_TYPES;

    const aggregatedConfig = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(defaultExpenseTypes, ...[host, parent, account].map(getExpenseTypes));

    return Object.keys(aggregatedConfig).filter(key => aggregatedConfig[key]); // Return only the truthy ones
  }
};
/**
 * Helper to determine whether an expense type is supported by an account
 */

const isSupportedExpenseType = (account, expenseType) => {
  const supportedTypes = getSupportedExpenseTypes(account);
  return supportedTypes.includes(expenseType);
};

/***/ }),

/***/ 46233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useAsyncCall)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31330);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useAsyncCall = (fn, {
  useErrorToast = false
} = {}) => {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const {
    addToast
  } = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const callWith = (...args) => async () => {
    setLoading(true);
    setError();
    setData();

    try {
      const response = await fn(...args);
      setData(response);
    } catch (e) {
      setError(e); // eslint-disable-next-line no-console

      console.error(e);

      if (useErrorToast) {
        addToast({
          type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: (0,_errors__WEBPACK_IMPORTED_MODULE_3__/* .formatErrorMessage */ .jN)(intl, e)
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const call = (...args) => callWith(...args)();

  return {
    loading,
    call,
    callWith,
    data,
    error
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24839);


const I18N_SECTIONS = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.TOP_FINANCIAL_CONTRIBUTORS */ .bx.TOP_FINANCIAL_CONTRIBUTORS]: {
    id: "SectionContribute.TopContributors",
    defaultMessage: [{
      "type": 0,
      "value": "Top financial contributors"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONNECTED_COLLECTIVES */ .bx.CONNECTED_COLLECTIVES]: {
    id: "ConnectedCollectives",
    defaultMessage: [{
      "type": 0,
      "value": "Connected Collectives"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.OUR_TEAM */ .bx.OUR_TEAM]: {
    id: "OurTeam",
    defaultMessage: [{
      "type": 0,
      "value": "Our team"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.GOALS */ .bx.GOALS]: {
    id: "Goals",
    defaultMessage: [{
      "type": 0,
      "value": "Goals"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.UPDATES */ .bx.UPDATES]: {
    id: "updates",
    defaultMessage: [{
      "type": 0,
      "value": "Updates"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONVERSATIONS */ .bx.CONVERSATIONS]: {
    id: "conversations",
    defaultMessage: [{
      "type": 0,
      "value": "Conversations"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.RECURRING_CONTRIBUTIONS */ .bx.RECURRING_CONTRIBUTIONS]: {
    id: "Contributions.Recurring",
    defaultMessage: [{
      "type": 0,
      "value": "Recurring Contributions"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.TICKETS */ .bx.TICKETS]: {
    id: "section.tickets.title",
    defaultMessage: [{
      "type": 0,
      "value": "Tickets"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.LOCATION */ .bx.LOCATION]: {
    id: "SectionLocation.Title",
    defaultMessage: [{
      "type": 0,
      "value": "Location"
    }]
  },
  // CONTRIBUTE/CONTRIBUTIONS
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONTRIBUTE */ .bx.CONTRIBUTE]: {
    id: "Contribute",
    defaultMessage: [{
      "type": 0,
      "value": "Contribute"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONTRIBUTIONS */ .bx.CONTRIBUTIONS]: {
    id: "Contributions",
    defaultMessage: [{
      "type": 0,
      "value": "Contributions"
    }]
  },
  // EVENTS/PROJECTS
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.EVENTS */ .bx.EVENTS]: {
    id: "Events",
    defaultMessage: [{
      "type": 0,
      "value": "Events"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.PROJECTS */ .bx.PROJECTS]: {
    id: "Projects",
    defaultMessage: [{
      "type": 0,
      "value": "Projects"
    }]
  },
  // BUDGET/TRANSACTIONS
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS]: {
    id: "menu.transactions",
    defaultMessage: [{
      "type": 0,
      "value": "Transactions"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.BUDGET */ .bx.BUDGET]: {
    id: "section.budget.title",
    defaultMessage: [{
      "type": 0,
      "value": "Budget"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.FINANCIAL_OVERVIEW */ .bx.FINANCIAL_OVERVIEW]: {
    id: "section.financialOverview.title",
    defaultMessage: [{
      "type": 0,
      "value": "Financial Overview"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.EXPENSES */ .bx.EXPENSES]: {
    id: "Expenses",
    defaultMessage: [{
      "type": 0,
      "value": "Expenses"
    }]
  },
  // CONTRIBUTORS/PARTICIPANTS
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.CONTRIBUTORS */ .bx.CONTRIBUTORS]: {
    id: "section.contributors.title",
    defaultMessage: [{
      "type": 0,
      "value": "Contributors"
    }]
  },
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.PARTICIPANTS */ .bx.PARTICIPANTS]: {
    id: "CollectivePage.NavBar.Participants",
    defaultMessage: [{
      "type": 0,
      "value": "Participants"
    }]
  },
  // ABOUT
  [_components_collective_page_constants__WEBPACK_IMPORTED_MODULE_1__/* .Sections.ABOUT */ .bx.ABOUT]: {
    id: "collective.about.title",
    defaultMessage: [{
      "type": 0,
      "value": "About"
    }]
  }
});

const i18nCollectivePageSection = (intl, section) => {
  return I18N_SECTIONS[section] ? intl.formatMessage(I18N_SECTIONS[section]) : section;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18nCollectivePageSection);

/***/ }),

/***/ 8480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": () => (/* binding */ RecurringExpenseIntervals),
/* harmony export */   "kD": () => (/* binding */ i18nExpenseType),
/* harmony export */   "wx": () => (/* binding */ RecurringIntervalOptions),
/* harmony export */   "zr": () => (/* binding */ i18nExpenseStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_expense_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38083);
/* harmony import */ var _constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  ALL: {
    id: "AllExpenses",
    defaultMessage: [{
      "type": 0,
      "value": "All expenses"
    }]
  },
  [_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].INVOICE */ .Z.INVOICE]: {
    id: "Expense.Type.Invoice",
    defaultMessage: [{
      "type": 0,
      "value": "Invoice"
    }]
  },
  [_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECEIPT */ .Z.RECEIPT]: {
    id: "ExpenseForm.ReceiptLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Reimbursement"
    }]
  },
  [_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].GRANT */ .Z.GRANT]: {
    id: "Expense.Type.FundingRequest",
    defaultMessage: [{
      "type": 0,
      "value": "Grant"
    }]
  },
  [_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].UNCLASSIFIED */ .Z.UNCLASSIFIED]: {
    id: "Expense.Type.Unclassified",
    defaultMessage: [{
      "type": 0,
      "value": "Unclassified"
    }]
  },
  [_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].CHARGE */ .Z.CHARGE]: {
    id: "Expense.Type.Charge",
    defaultMessage: [{
      "type": 0,
      "value": "Charge"
    }]
  },
  [_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].SETTLEMENT */ .Z.SETTLEMENT]: {
    id: "Expense.Type.Settlement",
    defaultMessage: [{
      "type": 0,
      "value": "Settlement"
    }]
  }
});
const i18nStatus = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  ALL: {
    id: "Expenses.AllShort",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].DRAFT */ .Z.DRAFT]: {
    id: "expense.draft",
    defaultMessage: [{
      "type": 0,
      "value": "Draft"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PENDING */ .Z.PENDING]: {
    id: "expense.pending",
    defaultMessage: [{
      "type": 0,
      "value": "Pending"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].APPROVED */ .Z.APPROVED]: {
    id: "expense.approved",
    defaultMessage: [{
      "type": 0,
      "value": "Approved"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].REJECTED */ .Z.REJECTED]: {
    id: "expense.rejected",
    defaultMessage: [{
      "type": 0,
      "value": "Rejected"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PAID */ .Z.PAID]: {
    id: "expense.paid",
    defaultMessage: [{
      "type": 0,
      "value": "Paid"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PROCESSING */ .Z.PROCESSING]: {
    id: "processing",
    defaultMessage: [{
      "type": 0,
      "value": "Processing"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].ERROR */ .Z.ERROR]: {
    id: "Error",
    defaultMessage: [{
      "type": 0,
      "value": "Error"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SCHEDULED_FOR_PAYMENT */ .Z.SCHEDULED_FOR_PAYMENT]: {
    id: "expense.scheduledForPayment",
    defaultMessage: [{
      "type": 0,
      "value": "Scheduled for payment"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED]: {
    id: "expense.pending",
    defaultMessage: [{
      "type": 0,
      "value": "Pending"
    }]
  },
  READY_TO_PAY: {
    id: "expenses.ready",
    defaultMessage: [{
      "type": 0,
      "value": "Ready to pay"
    }]
  },
  COMPLETED: {
    id: "expense.completed",
    defaultMessage: [{
      "type": 0,
      "value": "Completed"
    }]
  },
  REFUNDED: {
    id: "Expense.Status.Refunded",
    defaultMessage: [{
      "type": 0,
      "value": "Refunded"
    }]
  },
  [_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].INCOMPLETE */ .Z.INCOMPLETE]: {
    id: "kHwKVg",
    defaultMessage: [{
      "type": 0,
      "value": "Incomplete"
    }]
  }
});
/**
 * Translate the type of an expense
 */

const i18nExpenseType = (intl, type, id) => {
  let formattedType = i18nTypes[type] ? intl.formatMessage(i18nTypes[type]) : type;

  if (id) {
    formattedType = `${formattedType} #${id}`;
  }

  return formattedType;
};
/**
 * Translate the status of an expense
 */

const i18nExpenseStatus = (intl, status) => {
  return i18nStatus[status] ? intl.formatMessage(i18nStatus[status]) : status;
};
const RecurringExpenseIntervals = {
  week: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "week",
    defaultMessage: [{
      "type": 0,
      "value": "Weekly"
    }]
  }),
  month: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "Frequency.Monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly"
    }]
  }),
  quarter: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "quarter",
    defaultMessage: [{
      "type": 0,
      "value": "Quarterly"
    }]
  }),
  year: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
    id: "Frequency.Yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly"
    }]
  })
};
const RecurringIntervalOptions = Object.keys(RecurringExpenseIntervals).reduce((values, key) => [...values, {
  value: key,
  label: RecurringExpenseIntervals[key]
}], []);

/***/ }),

/***/ 732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_order_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24317);


const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  ALL: {
    id: "orders.all",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.CANCELLED */ .D.CANCELLED]: {
    id: "Subscriptions.Cancelled",
    defaultMessage: [{
      "type": 0,
      "value": "Cancelled"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.DISPUTED */ .D.DISPUTED]: {
    id: "order.disputed",
    defaultMessage: [{
      "type": 0,
      "value": "Disputed"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.ERROR */ .D.ERROR]: {
    id: "Error",
    defaultMessage: [{
      "type": 0,
      "value": "Error"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.EXPIRED */ .D.EXPIRED]: {
    id: "order.expired",
    defaultMessage: [{
      "type": 0,
      "value": "Expired"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.IN_REVIEW */ .D.IN_REVIEW]: {
    id: "order.in_review",
    defaultMessage: [{
      "type": 0,
      "value": "In Review"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PENDING */ .D.PENDING]: {
    id: "order.pending",
    defaultMessage: [{
      "type": 0,
      "value": "Pending"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.NEW */ .D.NEW]: {
    id: "order.new",
    defaultMessage: [{
      "type": 0,
      "value": "New"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.REQUIRE_CLIENT_CONFIRMATION */ .D.REQUIRE_CLIENT_CONFIRMATION]: {
    id: "order.require_client_confirmation",
    defaultMessage: [{
      "type": 0,
      "value": "Require client confirmation"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PLEDGED */ .D.PLEDGED]: {
    id: "order.pledged",
    defaultMessage: [{
      "type": 0,
      "value": "Pledged"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.ACTIVE */ .D.ACTIVE]: {
    id: "Subscriptions.Active",
    defaultMessage: [{
      "type": 0,
      "value": "Active"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.REFUNDED */ .D.REFUNDED]: {
    id: "Order.Status.Refunded",
    defaultMessage: [{
      "type": 0,
      "value": "Refunded"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.REJECTED */ .D.REJECTED]: {
    id: "order.rejected",
    defaultMessage: [{
      "type": 0,
      "value": "Rejected"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PAID */ .D.PAID]: {
    id: "order.paid",
    defaultMessage: [{
      "type": 0,
      "value": "Paid"
    }]
  },
  [_constants_order_status__WEBPACK_IMPORTED_MODULE_1__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING]: {
    id: "processing",
    defaultMessage: [{
      "type": 0,
      "value": "Processing"
    }]
  }
});

const i18nOrderStatus = (intl, status) => {
  const i18nMsg = MESSAGES[status];
  return i18nMsg ? intl.formatMessage(i18nMsg) : status;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18nOrderStatus);

/***/ }),

/***/ 72832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ i18nPaymentMethodType)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
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
  },
  [null]: {
    id: "PaymentMethods.None",
    defaultMessage: [{
      "type": 0,
      "value": "No payment method"
    }]
  } // For now, no need to support:
  // - PAYMENT -> "PayPal" doesn't need translation
  // - SUBSCRIPTION -> "PayPal" doesn't need translation
  // - ALIPAY -> "Alipay" doesn't need translation

});
/**
 * Get only the (i18n) name of the payment method type.
 *
 * Ex: i18nPaymentMethodType(intl, 'giftcard') === 'Gift card'
 */

const i18nPaymentMethodType = (intl, type) => {
  return i18nTypes[type] ? intl.formatMessage(i18nTypes[type]) : type;
};

/***/ }),

/***/ 17133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56508);


const TypesI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  ALL: {
    id: "PayoutMethod.Type.All",
    defaultMessage: [{
      "type": 0,
      "value": "All methods"
    }]
  },
  [_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.OTHER */ .Nk.OTHER]: {
    id: "PayoutMethod.Type.Other",
    defaultMessage: [{
      "type": 0,
      "value": "Other"
    }]
  },
  [_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT]: {
    id: "PayoutMethod.Type.BankAccount",
    defaultMessage: [{
      "type": 0,
      "value": "Bank transfer"
    }]
  },
  [_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.CREDIT_CARD */ .Nk.CREDIT_CARD]: {
    id: "PayoutMethod.Type.VirtualCard",
    defaultMessage: [{
      "type": 0,
      "value": "Virtual Card"
    }]
  }
});
/**
 * Translate a member role
 *
 * @param {object} `intl` - see `injectIntl`
 * @param {string} `type`
 */

const i18nPayoutMethodType = (intl, type, {
  aliasBankAccountToTransferWise
} = {}) => {
  if (!type) {
    return intl.formatMessage(TypesI18n[_constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.OTHER */ .Nk.OTHER]);
  } else if (type === _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL) {
    return 'PayPal';
  } else if (type === _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && aliasBankAccountToTransferWise) {
    return 'Wise';
  } else if (type === _constants_payout_method__WEBPACK_IMPORTED_MODULE_1__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE) {
    return 'Open Collective';
  }

  const i18nMsg = TypesI18n[type];
  return i18nMsg ? intl.formatMessage(i18nMsg) : type;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18nPayoutMethodType);

/***/ }),

/***/ 3025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nx": () => (/* binding */ i18nTransactionType),
/* harmony export */   "pK": () => (/* binding */ i18nTransactionSettlementStatus),
/* harmony export */   "w$": () => (/* binding */ i18nTransactionKind)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33054);


const i18nTypes = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  ALL: {
    id: "AllTransactions",
    defaultMessage: [{
      "type": 0,
      "value": "All transactions"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypes.CREDIT */ .em.CREDIT]: {
    id: "Transaction.Type.Credit",
    defaultMessage: [{
      "type": 0,
      "value": "Credit"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionTypes.DEBIT */ .em.DEBIT]: {
    id: "Expense.Type.Debit",
    defaultMessage: [{
      "type": 0,
      "value": "Debit"
    }]
  }
});
const i18nKind = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  ALL: {
    id: "SectionTransactions.All",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.ADDED_FUNDS */ .wz.ADDED_FUNDS]: {
    id: "Transaction.kind.ADDED_FUNDS",
    defaultMessage: [{
      "type": 0,
      "value": "Added funds"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.CONTRIBUTION */ .wz.CONTRIBUTION]: {
    id: "ContributionFlow.Contribution",
    defaultMessage: [{
      "type": 0,
      "value": "Contribution"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.EXPENSE */ .wz.EXPENSE]: {
    id: "Transaction.kind.EXPENSE",
    defaultMessage: [{
      "type": 0,
      "value": "Expense"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.HOST_FEE */ .wz.HOST_FEE]: {
    id: "HostFee",
    defaultMessage: [{
      "type": 0,
      "value": "Host fee"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.HOST_FEE_SHARE */ .wz.HOST_FEE_SHARE]: {
    id: "Transaction.kind.HOST_FEE_SHARE",
    defaultMessage: [{
      "type": 0,
      "value": "Platform share"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PAYMENT_PROCESSOR_COVER */ .wz.PAYMENT_PROCESSOR_COVER]: {
    id: "Transaction.kind.PAYMENT_PROCESSOR_COVER",
    defaultMessage: [{
      "type": 0,
      "value": "Payment processor cover"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PAYMENT_PROCESSOR_FEE */ .wz.PAYMENT_PROCESSOR_FEE]: {
    id: "contribution.paymentFee",
    defaultMessage: [{
      "type": 0,
      "value": "Payment processor fee"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PLATFORM_FEE */ .wz.PLATFORM_FEE]: {
    id: "PlatformFee",
    defaultMessage: [{
      "type": 0,
      "value": "Platform fee"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PLATFORM_TIP */ .wz.PLATFORM_TIP]: {
    id: "Transaction.kind.PLATFORM_TIP",
    defaultMessage: [{
      "type": 0,
      "value": "Platform tip"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PREPAID_PAYMENT_METHOD */ .wz.PREPAID_PAYMENT_METHOD]: {
    id: "Transaction.kind.PREPAID_PAYMENT_METHOD",
    defaultMessage: [{
      "type": 0,
      "value": "Prepaid payment method"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.HOST_FEE_SHARE_DEBT */ .wz.HOST_FEE_SHARE_DEBT]: {
    id: "Transaction.kind.HOST_FEE_SHARE_DEBT",
    defaultMessage: [{
      "type": 0,
      "value": "Platform share (Owed)"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.PLATFORM_TIP_DEBT */ .wz.PLATFORM_TIP_DEBT]: {
    id: "Transaction.kind.PLATFORM_TIP_DEBT",
    defaultMessage: [{
      "type": 0,
      "value": "Platform tip (Owed)"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TransactionKind.BALANCE_TRANSFER */ .wz.BALANCE_TRANSFER]: {
    id: "Transaction.kind.BALANCE_TRANSFER",
    defaultMessage: [{
      "type": 0,
      "value": "Balance transfer"
    }]
  }
});
const i18nSettlementStatus = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TRANSACTION_SETTLEMENT_STATUS.OWED */ .e9.OWED]: {
    id: "SettlementStatus.OWED",
    defaultMessage: [{
      "type": 0,
      "value": "Owed"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TRANSACTION_SETTLEMENT_STATUS.INVOICED */ .e9.INVOICED]: {
    id: "SettlementStatus.INVOICED",
    defaultMessage: [{
      "type": 0,
      "value": "Invoiced"
    }]
  },
  [_constants_transactions__WEBPACK_IMPORTED_MODULE_1__/* .TRANSACTION_SETTLEMENT_STATUS.SETTLED */ .e9.SETTLED]: {
    id: "SettlementStatus.SETTLED",
    defaultMessage: [{
      "type": 0,
      "value": "Settled"
    }]
  }
});
/**
 * Translate the type of an transaction
 */

const i18nTransactionType = (intl, type, id) => {
  let formattedType = i18nTypes[type] ? intl.formatMessage(i18nTypes[type]) : type;

  if (id) {
    formattedType = `${formattedType} #${id}`;
  }

  return formattedType;
};
/**
 * Translate the type of an transaction
 */

const i18nTransactionKind = (intl, type) => {
  return i18nKind[type] ? intl.formatMessage(i18nKind[type]) : type;
};
const i18nTransactionSettlementStatus = (intl, status) => {
  return i18nSettlementStatus[status] ? intl.formatMessage(i18nSettlementStatus[status]) : status;
};

/***/ }),

/***/ 51048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export AmountPropTypeShape */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const AmountPropTypeShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "US": () => (/* binding */ saveInvoice),
/* harmony export */   "rX": () => (/* binding */ renderDetailsString)
/* harmony export */ });
/* unused harmony exports formatFee, getInvoiceUrl, getFilename */
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28109);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _constants_transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33054);
/* harmony import */ var _i18n_taxes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22642);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65985);
/* harmony import */ var _currency_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17632);
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15078);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35427);
/* harmony import */ var _url_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25896);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);















const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
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
const formatFee = (amount, totalAmount, name, feePercent, locale) => {
  if (!amount?.valueInCents) {
    return '';
  }

  const v = amount.valueInCents < 0 ? ` - ${(0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(Math.abs(amount.valueInCents), amount.currency, {
    locale
  })}` : ` + ${(0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(Math.abs(amount.valueInCents), amount.currency, {
    locale
  })}`; // Don't calculate percentual value when dealing with different currencies

  if (feePercent && amount.currency === totalAmount?.currency) {
    const percentage = Math.abs(lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(amount.valueInCents / totalAmount.valueInCents * 100, 2)); // To avoid misinformation, only return with percentual value if feePercent is true or it matches the predicted feePercent value

    if (feePercent === true || feePercent === percentage) {
      return `${v} (${percentage}% ${name})`;
    }
  }

  return `${v} (${name})`;
};
const renderDetailsString = ({
  amount: _amount,
  platformFee,
  hostFee,
  paymentProcessorFee,
  netAmount: _netAmount,
  taxAmount,
  taxInfo,
  isCredit,
  hasOrder,
  toAccount,
  fromAccount,
  intl,
  kind,
  expense,
  isRefund,
  paymentProcessorCover
}) => {
  // Swap Amount and Net Amount for DEBITS
  const amount = !isCredit && _netAmount ? _netAmount : _amount;
  const amountString = (0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(Math.abs(amount.valueInCents), amount.currency, {
    locale: intl.locale
  });
  const expenseAmount = expense ? (0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(Math.abs(expense.amount), expense.currency, {
    locale: intl.locale
  }) : null;
  const platformFeeString = formatFee(platformFee, amount, intl.formatMessage(messages.openCollectiveFee), isCredit && !hasOrder ? fromAccount.platformFeePercent : toAccount.platformFeePercent, intl.locale);
  const hostFeeString = formatFee(hostFee, amount, intl.formatMessage(messages.hostFee), isCredit && !hasOrder ? fromAccount.hostFeePercent : toAccount.hostFeePercent, intl.locale);
  const paymentProcessorFeeString = formatFee(paymentProcessorFee, amount, intl.formatMessage(messages.paymentProcessorFee), false, intl.locale);

  if (kind === _constants_transactions__WEBPACK_IMPORTED_MODULE_5__/* .TransactionKind.EXPENSE */ .wz.EXPENSE) {
    const expensePaymentProcessorFee = (0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(Math.abs(paymentProcessorFee.valueInCents), paymentProcessorFee.currency, {
      locale: intl.locale
    });
    const netExpenseAmount = (0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(Math.abs(_netAmount.valueInCents), _netAmount.currency, {
      locale: intl.locale
    });
    const hasPaymentProcessorCover = paymentProcessorCover !== undefined;
    const netPaymentProcessorCoverAmount = hasPaymentProcessorCover ? (0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(Math.abs(paymentProcessorCover.netAmount.valueInCents), paymentProcessorCover.netAmount.currency, {
      locale: intl.locale
    }) : null;
    const payee = toAccount.name;
    const payer = fromAccount.name;
    const feesPayer = expense?.feesPayer || 'COLLECTIVE';

    const paymentProcessorFeeString = (paymentProcessorFee, isRefund, feesPayer) => {
      if (paymentProcessorFee.valueInCents === 0 || isRefund) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
            isRefund,
            paymentProcessorFee: hasPaymentProcessorCover ? netPaymentProcessorCoverAmount : expensePaymentProcessorFee,
            hasPaymentProcessorCover
          }
        });
      } else {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
            expensePaymentProcessorFee
          }
        });
      }
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [expenseAmount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        mb: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "4TSxft",
          defaultMessage: [{
            "type": 0,
            "value": "Expense Amount: "
          }, {
            "type": 1,
            "value": "expenseAmount"
          }],
          values: {
            expenseAmount
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        mb: 1,
        children: paymentProcessorFeeString(paymentProcessorFee, isRefund, feesPayer)
      }), taxAmount && taxInfo && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
          rate: lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(taxInfo.rate * 100, 2),
          taxName: (0,_i18n_taxes__WEBPACK_IMPORTED_MODULE_6__/* .i18nTaxType */ .m)(intl, taxInfo.type, 'short'),
          amount: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(taxAmount.valueInCents, taxAmount.currency, {
            locale: intl.locale
          })
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
            netExpenseAmount
          }
        })
      })]
    });
  } else {
    const detailString = [amountString, hostFeeString, platformFeeString, paymentProcessorFeeString];

    if (taxAmount) {
      detailString.push(formatFee(taxAmount, amount, taxInfo?.id || 'Taxes', taxInfo?.percentage, intl.locale));
    }

    return detailString.concat(' ');
  }
};
const getInvoiceUrl = ({
  fromCollectiveSlug,
  toCollectiveSlug,
  transactionUuid,
  dateFrom,
  dateTo
}) => {
  return transactionUuid ? (0,_url_helpers__WEBPACK_IMPORTED_MODULE_12__/* .transactionInvoiceURL */ .U3)(transactionUuid) : (0,_url_helpers__WEBPACK_IMPORTED_MODULE_12__/* .collectiveInvoiceURL */ .mR)(fromCollectiveSlug, toCollectiveSlug, encodeURI(dateFrom), encodeURI(dateTo), 'pdf');
};
const getFilename = ({
  fromCollectiveSlug,
  transactionUuid,
  toCollectiveSlug,
  dateFrom,
  dateTo,
  createdAt
}) => {
  if (transactionUuid) {
    const createdAtString = (0,_date_utils__WEBPACK_IMPORTED_MODULE_9__/* .toIsoDateStr */ .fM)(createdAt ? new Date(createdAt) : new Date());
    return `${toCollectiveSlug || 'transaction'}_${createdAtString}_${transactionUuid}.pdf`;
  } else {
    const fromString = (0,_date_utils__WEBPACK_IMPORTED_MODULE_9__/* .toIsoDateStr */ .fM)(dateFrom ? new Date(dateFrom) : new Date());
    const toString = (0,_date_utils__WEBPACK_IMPORTED_MODULE_9__/* .toIsoDateStr */ .fM)(dateTo ? new Date(dateTo) : new Date());
    return `${fromCollectiveSlug}_${toCollectiveSlug}_${fromString}_${toString}.pdf`;
  }
};
const saveInvoice = async ({
  fromCollectiveSlug,
  toCollectiveSlug,
  transactionUuid,
  dateFrom,
  dateTo,
  createdAt
}) => {
  const invoiceUrl = getInvoiceUrl({
    fromCollectiveSlug,
    toCollectiveSlug,
    transactionUuid,
    dateFrom,
    dateTo,
    createdAt
  });
  const getParams = {
    format: 'blob',
    allowExternal: _url_helpers__WEBPACK_IMPORTED_MODULE_12__/* .invoiceServiceURL */ .MM
  };
  const accessToken = (0,_local_storage__WEBPACK_IMPORTED_MODULE_11__/* .getFromLocalStorage */ .fp)(_local_storage__WEBPACK_IMPORTED_MODULE_11__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN);

  if (accessToken) {
    getParams.headers = {
      Authorization: `Bearer ${accessToken}`
    };
  }

  let blob;

  try {
    blob = await (0,_api__WEBPACK_IMPORTED_MODULE_7__/* .get */ .U2)(invoiceUrl, getParams);
  } catch {
    throw (0,_errors__WEBPACK_IMPORTED_MODULE_10__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_10__/* .ERROR.NETWORK */ .pn.NETWORK);
  }

  if (blob?.type !== 'application/pdf') {
    throw (0,_errors__WEBPACK_IMPORTED_MODULE_10__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_10__/* .ERROR.UNKNOWN */ .pn.UNKNOWN);
  }

  const filename = getFilename({
    fromCollectiveSlug,
    toCollectiveSlug,
    transactionUuid,
    dateFrom,
    dateTo,
    createdAt
  });
  return (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, filename);
};
renderDetailsString.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderDetailsString"
};

/***/ }),

/***/ 25456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ VirtualCardLimitIntervalDescriptionsI18n),
/* harmony export */   "v": () => (/* binding */ VirtualCardLimitIntervalI18n)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97965);


const VirtualCardLimitIntervalDescriptionsI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.ALL_TIME */ .nV.ALL_TIME]: {
    id: "virtualCard.intervalLimitDescription.all_time",
    defaultMessage: [{
      "type": 0,
      "value": "Total amount that can be spent with this card."
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.DAILY */ .nV.DAILY]: {
    id: "virtualCard.intervalLimitDescription.daily",
    defaultMessage: [{
      "type": 0,
      "value": "Daily amount that can be spent with this card."
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.MONTHLY */ .nV.MONTHLY]: {
    id: "virtualCard.intervalLimitDescription.monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly amount that can be spent with this card."
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.PER_AUTHORIZATION */ .nV.PER_AUTHORIZATION]: {
    id: "virtualCard.intervalLimitDescription.per_authorization",
    defaultMessage: [{
      "type": 0,
      "value": "Amount that can be spent with this card per use."
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.WEEKLY */ .nV.WEEKLY]: {
    id: "virtualCard.intervalLimitDescription.weekly",
    defaultMessage: [{
      "type": 0,
      "value": "Weekly amount that can be spent with this card."
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.YEARLY */ .nV.YEARLY]: {
    id: "virtualCard.intervalLimitDescription.yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly amount that can be spent with this card."
    }]
  }
});
const VirtualCardLimitIntervalI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.ALL_TIME */ .nV.ALL_TIME]: {
    id: "s+lPP3",
    defaultMessage: [{
      "type": 0,
      "value": "All time"
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.DAILY */ .nV.DAILY]: {
    id: "virtualCard.intervalLimit.daily",
    defaultMessage: [{
      "type": 0,
      "value": "Daily"
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.MONTHLY */ .nV.MONTHLY]: {
    id: "Frequency.Monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly"
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.PER_AUTHORIZATION */ .nV.PER_AUTHORIZATION]: {
    id: "virtualCard.intervalLimit.per_authorization",
    defaultMessage: [{
      "type": 0,
      "value": "Per authorization"
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.WEEKLY */ .nV.WEEKLY]: {
    id: "week",
    defaultMessage: [{
      "type": 0,
      "value": "Weekly"
    }]
  },
  [_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_1__/* .VirtualCardLimitInterval.YEARLY */ .nV.YEARLY]: {
    id: "Frequency.Yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly"
    }]
  }
});

/***/ })

};
;