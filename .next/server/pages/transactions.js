"use strict";
(() => {
var exports = {};
exports.id = 9673;
exports.ids = [9673];
exports.modules = {

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

/***/ 43825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88705);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84842);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_4__]);
_Page__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["showContactSupportLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * A page to show when the feature is not supported by the collective.
 * Ensures the page is not referenced by robots.
 */




const PageFeatureNotSupported = _ref => {
  let {
    showContactSupportLink
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const title = formatMessage({
    id: "FeatureNotSupported.title",
    defaultMessage: [{
      "type": 0,
      "value": "Page inaccessible"
    }]
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    noRobots: true,
    title: title
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 2,
      py: [5, 6],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.H1, {
        fontSize: "38px",
        mb: 3,
        textAlign: "center",
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        fontSize: "64px",
        mt: 3,
        mb: 5,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          role: "img",
          "aria-label": "Monkey Face",
          children: "\uD83D\uDE48\uFE0F"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "FeatureNotSupported.description",
          defaultMessage: [{
            "type": 0,
            "value": "This page has not been activated for this Collective or you don't have permission to see it."
          }]
        }), showContactSupportLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "ContactSupportForDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Please contact "
            }, {
              "type": 8,
              "value": "SupportLink",
              "children": [{
                "type": 0,
                "value": "support"
              }]
            }, {
              "type": 0,
              "value": " for more details."
            }],
            values: {
              SupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__/* .I18nSupportLink */ .wl
            }
          })]
        })]
      })]
    })
  }));
};

PageFeatureNotSupported.defaultProps = {
  showContactSupportLink: true
};
PageFeatureNotSupported.__docgenInfo = {
  "description": "A page to show when the feature is not supported by the collective.\nEnsures the page is not referenced by robots.",
  "methods": [],
  "displayName": "PageFeatureNotSupported",
  "props": {
    "showContactSupportLink": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageFeatureNotSupported);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 93765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "t": () => (/* binding */ parseAmountRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17632);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["currency", "onChange", "value", "steps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const OPTION_LABELS = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  ALL: {
    id: "Amount.AllShort",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  rangeFrom: {
    id: "Amount.RangeFrom",
    defaultMessage: [{
      "type": 1,
      "value": "minAmount"
    }, {
      "type": 0,
      "value": " and above"
    }]
  },
  rangeFromTo: {
    id: "Amount.RangeFromTo",
    defaultMessage: [{
      "type": 1,
      "value": "minAmount"
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 1,
      "value": "maxAmount"
    }]
  }
});
const parseAmountRange = strValue => {
  if (!strValue) {
    return [];
  } else if (strValue.endsWith('+')) {
    return [parseInt(strValue.slice(0, -1))];
  } else {
    const [minStr, maxStr] = strValue.split('-');
    return [parseInt(minStr), parseInt(maxStr)];
  }
};

const getOption = (intl, currency, minAmount, maxAmount) => {
  const {
    locale
  } = intl;
  return {
    value: maxAmount ? `${minAmount}-${maxAmount}` : `${minAmount}+`,
    label: intl.formatMessage(OPTION_LABELS[maxAmount ? 'rangeFromTo' : 'rangeFrom'], {
      minAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatCurrency */ .xG)(minAmount * 100, currency, {
        precision: 0,
        locale
      }),
      maxAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatCurrency */ .xG)(maxAmount * 100, currency, {
        precision: 0,
        locale
      })
    })
  };
};

const AmountFilter = _ref => {
  let {
    currency,
    onChange,
    value,
    steps
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const allExpensesOption = {
    label: intl.formatMessage(OPTION_LABELS.ALL),
    value: 'ALL'
  };
  const options = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    return [allExpensesOption, ...steps.map((step, idx) => getOption(intl, currency, step, steps[idx + 1]))];
  }, [steps]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_3__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "expenses-amount-filter",
    "data-cy": "expenses-filter-amount",
    value: value ? getOption(intl, currency, ...parseAmountRange(value)) : allExpensesOption,
    onChange: ({
      value
    }) => onChange(value),
    options: options
  }, props));
};

AmountFilter.defaultProps = {
  steps: [0, 50, 500, 5000]
};
AmountFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AmountFilter",
  "props": {
    "steps": {
      "defaultValue": {
        "value": "[0, 50, 500, 5000]",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
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
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmountFilter);

/***/ }),

/***/ 27132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "SectionTitle",
  componentId: "sc-5q044q-0"
})(["word-break:break-word;", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__.color, styled_system__WEBPACK_IMPORTED_MODULE_1__.display, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.typography);
SectionTitle.defaultProps = {
  fontSize: '32px',
  lineHeight: '36px',
  fontWeight: 'normal',
  color: 'black.900',
  mb: 3
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

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

/***/ 69784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57847);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65985);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_export_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15985);
/* harmony import */ var _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51719);
/* harmony import */ var _lib_local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35427);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92129);
/* harmony import */ var _PopupMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66152);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31330);
/* harmony import */ var _transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65536);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_15__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




















const transformResultInCSV = json => {
  const q = value => `"${value}"`;
  /* Quote value */


  const f = value => (value / 100).toFixed(2);
  /* Add cents */


  const d = value => dayjs__WEBPACK_IMPORTED_MODULE_3___default()(new Date(value)).format('YYYY-MM-DD HH:mm:ss'); // Sanity check. It will return an empty CSV for the user


  if (json.length === 0) {
    return '';
  } // All the json lines contain the same values for these two
  // variables. It's save to get them from any index.


  const hostCurrency = json[0].host.currency;
  const collectiveCurrency = json[0].currency;
  const header = ['Transaction Description', 'User Name', 'User Profile', 'Transaction Date', 'Collective Currency', 'Host Currency', 'Transaction Amount', `Host Fee (${hostCurrency})`, `Open Collective Fee (${hostCurrency})`, `Payment Processor Fee (${hostCurrency})`, `Net Amount (${collectiveCurrency})`, 'Subscription Interval', 'Order Date', 'Tags'].join(',');
  const lines = json.map(i => {
    const profile = `http://opencollective.com/${i.fromCollective.slug}`;
    const subscriptionInterval = i.subscription ? i.subscription.interval : 'one time';
    const expenseTags = i.expense?.tags ? i.expense.tags.join(', ') : '';
    return [q(i.description)
    /* Transaction Description */
    , q(i.fromCollective.name)
    /* User Name  */
    , q(profile)
    /* User Profile  */
    , d(i.createdAt)
    /* Transaction Date  */
    , q(i.currency)
    /* Currency */
    , q(hostCurrency)
    /* Host Currency */
    , f(i.amount)
    /* Transaction Amount */
    , f(i.hostFeeInHostCurrency)
    /* Host Fee */
    , f(i.platformFeeInHostCurrency)
    /* Platform Fee */
    , f(i.paymentProcessorFeeInHostCurrency)
    /* Payment Processor Fee */
    , f(i.netAmountInCollectiveCurrency)
    /* Net Amount */
    , q(subscriptionInterval)
    /* Interval of subscription */
    , q(new Date(i.createdAt).toISOString())
    /* Order Date */
    , q(expenseTags)
    /* Tags */
    ].join(',');
  });
  return [header].concat(lines).join('\n');
};

const TransactionsDownloadCSV = ({
  collective,
  client,
  query
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_15__/* .useToasts */ .e1)();
  let dateFrom, dateTo;

  if (query.period) {
    ({
      from: dateFrom,
      to: dateTo
    } = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseDateInterval */ .dr)(query.period));
  }

  const type = query.type;
  const kinds = query.kind ? query.kind.split(',') : (0,_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_16__/* .getDefaultKinds */ .ce)();

  const download = async () => {
    try {
      setLoading('v1');
      const result = await client.query({
        query: _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_9__/* .transactionsQuery */ .ky,
        variables: {
          dateFrom: dateFrom,
          dateTo: dateTo,
          CollectiveId: collective.legacyId,
          type: type,
          kinds: kinds
        }
      });
      const csv = transformResultInCSV(result.data.allTransactions); // Don't prompt the file download unless there's data coming

      if (csv === '') {
        return;
      } // Helper to prepare date values to be part of the file name


      const format = d => dayjs__WEBPACK_IMPORTED_MODULE_3___default()(d).format('YYYY-MM-DD');

      let fileName = `${collective.slug}-from-`;
      fileName += `${format(dateFrom)}-to-`;
      fileName += `${format(dateTo)}.csv`;
      return (0,_lib_export_file__WEBPACK_IMPORTED_MODULE_8__/* .exportFile */ .WD)('text/plain;charset=utf-8', fileName, csv);
    } catch (error) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_15__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .i18nGraphqlException */ .t2)(intl, error)
      });
    } finally {
      setLoading(null);
    }
  };

  const downloadV2 = async event => {
    const accessToken = (0,_lib_local_storage__WEBPACK_IMPORTED_MODULE_10__/* .getFromLocalStorage */ .fp)(_lib_local_storage__WEBPACK_IMPORTED_MODULE_10__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN);

    if (!accessToken) {
      return;
    }

    event.preventDefault();

    try {
      setLoading('v2');
      await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__/* .fetchCSVFileFromRESTService */ .Zu)(downloadUrl(), `${collective.slug}-transactions`);
    } catch (error) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_15__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .formatErrorMessage */ .jN)(intl, error)
      });
    } finally {
      setLoading(null);
    }
  };

  const downloadUrl = () => {
    const format = 'txt';
    const url = new URL(`${"https://rest-staging.opencollective.com"}/v2/${collective.slug}/transactions.${format}`);

    if (query.kind) {
      url.searchParams.set('kind', query.kind);
    } else {
      url.searchParams.set('kind', (0,_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_16__/* .getDefaultKinds */ .ce)().join(','));
    }

    if (query.type) {
      url.searchParams.set('type', query.type);
    }

    if (query.searchTerm) {
      url.searchParams.set('searchTerm', query.searchTerm);
    }

    if (query.amount) {
      if (query.amount.includes('-')) {
        const [minAmount, maxAmount] = query.amount.split('-');

        if (minAmount) {
          url.searchParams.set('minAmount', Number(minAmount) * 100);
        }

        if (maxAmount) {
          url.searchParams.set('maxAmount', Number(maxAmount) * 100);
        }
      } else if (query.amount.includes('+')) {
        const minAmount = query.amount.replace('+', '');

        if (minAmount) {
          url.searchParams.set('minAmount', Number(minAmount) * 100);
        }
      }
    }

    if (dateFrom) {
      url.searchParams.set('dateFrom', dateFrom);
    }

    if (dateTo) {
      url.searchParams.set('dateTo', dateTo);
    }

    if (!query.ignoreGiftCardsTransactions) {
      url.searchParams.set('includeGiftCardTransactions', '1');
    }

    if (!query.ignoreIncognitoTransactions) {
      url.searchParams.set('includeIncognitoTransactions', '1');
    }

    if (!query.ignoreChildrenTransactions) {
      url.searchParams.set('includeChildrenTransactions', '1');
    }

    if (dateFrom) {
      // Is the diff between dateFrom and dateTo (or today) less than 62 days?
      if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateTo || undefined).unix() - dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateFrom).unix() < 62 * 24 * 60 * 60) {
        url.searchParams.set('fetchAll', '1');
      }
    }

    return url.toString();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
    flexWrap: "wrap",
    my: ['8px', 0],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_PopupMenu__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      placement: "bottom-end",
      Button: ({
        onClick
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        "data-cy": "download-csv",
        onClick: onClick,
        buttonSize: "small",
        minWidth: 140,
        isBorderless: true,
        flexGrow: 1,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "transactions.downloadcsvbutton",
          defaultMessage: [{
            "type": 0,
            "value": "Download CSV"
          }]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_2__.Download, {
          size: "13px",
          style: {
            marginLeft: '8px'
          }
        })]
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        mx: "8px",
        my: "16px",
        width: "190px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("small", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Transactions.DownloadCSV.Description",
            defaultMessage: [{
              "type": 0,
              "value": "Use the filters to define the transactions you would like to download."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Link__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          onClick: downloadV2,
          href: downloadUrl(),
          openInNewTab: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            "data-cy": "download-csv-download-v2",
            buttonSize: "tiny",
            buttonStyle: "primary",
            mt: "12px",
            loading: loading === 'v2',
            disabled: Boolean(loading) && loading !== 'v2',
            minWidth: 115,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "Download",
              defaultMessage: [{
                "type": 0,
                "value": "Download"
              }]
            }), " (v2)"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          "data-cy": "download-csv-download",
          buttonSize: "tiny",
          onClick: download,
          mt: "12px",
          loading: loading === 'v1',
          disabled: Boolean(loading) && loading !== 'v1',
          minWidth: 115,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Download",
            defaultMessage: [{
              "type": 0,
              "value": "Download"
            }]
          }), " (v1)"]
        })]
      })
    })
  });
};

TransactionsDownloadCSV.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionsDownloadCSV",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "filters": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
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
          "legacyId": {
            "name": "number",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": true
    },
    "client": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "query": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": false
          },
          "kind": {
            "name": "string",
            "required": false
          },
          "amount": {
            "name": "string",
            "required": false
          },
          "period": {
            "name": "string",
            "required": false
          },
          "searchTerm": {
            "name": "string",
            "required": false
          },
          "ignoreIncognitoTransactions": {
            "name": "string",
            "required": false
          },
          "ignoreGiftCardsTransactions": {
            "name": "string",
            "required": false
          },
          "ignoreChildrenTransactions": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.withApollo)(TransactionsDownloadCSV));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56761:
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
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15078);
/* harmony import */ var _budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93765);
/* harmony import */ var _filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49106);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65536);
/* harmony import */ var _filters_TransactionsPaymentMethodTypeFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34228);
/* harmony import */ var _filters_TransactionsTypeFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16957);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__]);
_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu).withConfig({
  displayName: "TransactionsFilters__FilterContainer",
  componentId: "sc-13vvcnq-0"
})(["margin-bottom:8px;"]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "TransactionsFilters__FilterLabel",
  componentId: "sc-13vvcnq-1"
})(["font-weight:600;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#9d9fa3;"]);

const TransactionsFilters = ({
  collective,
  filters,
  kinds,
  paymentMethodTypes,
  onChange
}) => {
  const getFilterProps = (name, valueModifier) => ({
    inputId: `transactions-filter-${name}`,
    value: filters?.[name],
    onChange: value => {
      const preparedValue = valueModifier ? valueModifier(value) : value;
      onChange(_objectSpread(_objectSpread({}, filters), {}, {
        [name]: value === 'ALL' ? null : preparedValue
      }));
    }
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: ['column', 'row'],
    flexGrow: [1, 0.5],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(FilterContainer, {
      mr: [0, '8px'],
      mb: ['8px', 0],
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FilterLabel, {
        htmlFor: "transactions-filter-type",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "transactions.type",
          defaultMessage: [{
            "type": 0,
            "value": "Type"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_filters_TransactionsTypeFilter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread({}, getFilterProps('type')))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(FilterContainer, {
      mr: [0, '8px'],
      mb: ['8px', 0],
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FilterLabel, {
        htmlFor: "transactions-filter-period",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Period",
          defaultMessage: [{
            "type": 0,
            "value": "Period"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getFilterProps('period', _lib_date_utils__WEBPACK_IMPORTED_MODULE_3__/* .encodeDateInterval */ .EB)), {}, {
        minDate: collective.createdAt
      }))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(FilterContainer, {
      mr: [0, '8px'],
      mb: ['8px', 0],
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FilterLabel, {
        htmlFor: "transactions-filter-amount",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Fields.amount",
          defaultMessage: [{
            "type": 0,
            "value": "Amount"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({
        currency: collective.currency
      }, getFilterProps('amount')))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(FilterContainer, {
      mr: [0, '8px'],
      mb: ['8px', 0],
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FilterLabel, {
        htmlFor: "transactions-filter-kind",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Transaction.Kind",
          defaultMessage: [{
            "type": 0,
            "value": "Kind"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _objectSpread({
        kinds: kinds
      }, getFilterProps('kind')))]
    }), paymentMethodTypes?.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(FilterContainer, {
      mr: [0, '8px'],
      mb: ['8px', 0],
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FilterLabel, {
        htmlFor: "transactions-filter-paymentMethod",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "paymentmethod.label",
          defaultMessage: [{
            "type": 0,
            "value": "Payment Method"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_filters_TransactionsPaymentMethodTypeFilter__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread({
        types: paymentMethodTypes
      }, getFilterProps('paymentMethodType')))]
    })]
  });
};

TransactionsFilters.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionsFilters",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "filters": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "kinds": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "paymentMethodTypes": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "currency": {
            "name": "string",
            "required": true
          },
          "createdAt": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TransactionsFilters));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19156);
/* harmony import */ var _TransactionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1223);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TransactionItem__WEBPACK_IMPORTED_MODULE_3__]);
_TransactionItem__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "TransactionsList__Container",
  componentId: "sc-nnbe2v-0"
})(["", ""], props => !props.isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["border-top:1px solid #e6e8eb;"]));

const TransactionsList = ({
  transactions,
  collective,
  displayActions,
  onMutationSuccess
}) => {
  if (!transactions?.length) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: transactions.map((transaction, idx) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Container, {
        isFirst: !idx,
        "data-cy": "single-transaction",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_TransactionItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          transaction: transaction,
          collective: collective,
          displayActions: displayActions,
          onMutationSuccess: onMutationSuccess
        })
      }, transaction?.id || idx);
    })
  });
};

TransactionsList.defaultProps = {
  view: 'public'
};
TransactionsList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionsList",
  "props": {
    "view": {
      "defaultValue": {
        "value": "'public'",
        "computed": false
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
    "displayActions": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "parent": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "transactions": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": true
            }
          }
        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionsList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b": () => (/* binding */ parseTransactionPaymentMethodTypes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72832);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97079);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52847);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["onChange", "value", "types"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const NO_PAYMENT_METHOD_TYPE = 'None';

const getQueryStringFromOptionChange = (options, availableTypes, event) => {
  if (event.action === 'select-option' && event.option.value === 'ALL') {
    return null; // Clicked "All"
  } else if (!options) {
    return null; // Unselected everything
  } // Remove unsupported types


  const possibleOptions = options.filter(({
    value
  }) => availableTypes.includes(value));
  return possibleOptions.length === availableTypes.length ? null // We've selected everything, go back to "ALL"
  : possibleOptions.map(({
    value
  }) => value || NO_PAYMENT_METHOD_TYPE).join(',');
};

const parseTransactionPaymentMethodTypes = str => {
  const result = str?.split(',').map(type => type === NO_PAYMENT_METHOD_TYPE ? null : type);
  return result?.length ? result : null;
};
const TruncatedItemsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr).attrs({
  truncateOverflow: true,
  pl: 2,
  maxWidth: ['calc(100vw - 135px)', '75px', '175px', '200px']
}).withConfig({
  displayName: "TransactionsPaymentMethodTypeFilter__TruncatedItemsList",
  componentId: "sc-1v0fxtx-0"
})(["display:inline-block;max-width:75px;", ""], styled_system__WEBPACK_IMPORTED_MODULE_4__.maxWidth);

const TruncatedValueContainer = props => {
  const {
    selectProps,
    children
  } = props;
  const itemsList = (selectProps.value || []).map(({
    label
  }) => label);
  const itemsListStr = itemsList.join(', ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_select__WEBPACK_IMPORTED_MODULE_2__.components.SelectContainer, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(TruncatedItemsList, {
      title: itemsListStr,
      children: itemsListStr
    }), children]
  }));
};

const REACT_SELECT_COMPONENT_OVERRIDE = {
  ValueContainer: TruncatedValueContainer,
  MultiValue: () => null // Items will be displayed as a truncated string in `TruncatedValueContainer `

};

const TransactionsPaymentMethodTypeFilter = _ref => {
  let {
    onChange,
    value,
    types
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const getOption = (value, idx) => ({
    label: (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_5__/* .i18nPaymentMethodType */ .i)(intl, value),
    value: value,
    idx
  });

  const options = ['ALL', ...types].map(getOption).sort(_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .sortSelectOptions */ .V_);
  const selectedTypes = value?.split(',') || [];
  const selectedOptions = !value ? [options[0]] : options.filter(({
    value
  }) => selectedTypes.includes(value ?? NO_PAYMENT_METHOD_TYPE));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_7__/* .StyledSelectFilter */ .V, _objectSpread({
    isSearchable: false,
    isClearable: false,
    onChange: (options, event) => onChange(getQueryStringFromOptionChange(options, types, event)),
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

TransactionsPaymentMethodTypeFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionsPaymentMethodTypeFilter",
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
    "types": {
      "description": "",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionsPaymentMethodTypeFilter);

/***/ }),

/***/ 16957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33054);
/* harmony import */ var _lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3025);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const TransactionTypeFilter = _ref => {
  let {
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const getOption = value => ({
    label: (0,_lib_i18n_transaction__WEBPACK_IMPORTED_MODULE_3__/* .i18nTransactionType */ .Nx)(intl, value),
    value
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "transaction-filter",
    isSearchable: false,
    onChange: ({
      value
    }) => onChange(value),
    value: getOption(value || 'ALL'),
    options: [getOption('ALL'), getOption(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_2__/* .TransactionTypes.CREDIT */ .em.CREDIT), getOption(_lib_constants_transactions__WEBPACK_IMPORTED_MODULE_2__/* .TransactionTypes.DEBIT */ .em.DEBIT)]
  }, props));
};

TransactionTypeFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TransactionTypeFilter",
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionTypeFilter);

/***/ }),

/***/ 82359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57847);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_roles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98216);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33054);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25896);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1259);
/* harmony import */ var _components_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(93765);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(24839);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5824);
/* harmony import */ var _components_collective_page_SectionTitle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(27132);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(73908);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11333);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(42352);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(37278);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(84842);
/* harmony import */ var _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(43825);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(79045);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(32606);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(41433);
/* harmony import */ var _components_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(65536);
/* harmony import */ var _components_transactions_filters_TransactionsPaymentMethodTypeFilter__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(34228);
/* harmony import */ var _components_transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(83722);
/* harmony import */ var _components_transactions_TransactionsDownloadCSV__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(69784);
/* harmony import */ var _components_transactions_TransactionsFilters__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(56761);
/* harmony import */ var _components_transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(98929);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_22__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__, _components_Footer__WEBPACK_IMPORTED_MODULE_28__, _components_Header__WEBPACK_IMPORTED_MODULE_30__, _components_Page__WEBPACK_IMPORTED_MODULE_34__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__, _components_transactions_TransactionsDownloadCSV__WEBPACK_IMPORTED_MODULE_43__, _components_transactions_TransactionsFilters__WEBPACK_IMPORTED_MODULE_44__, _components_transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_45__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_22__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__, _components_Footer__WEBPACK_IMPORTED_MODULE_28__, _components_Header__WEBPACK_IMPORTED_MODULE_30__, _components_Page__WEBPACK_IMPORTED_MODULE_34__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__, _components_transactions_TransactionsDownloadCSV__WEBPACK_IMPORTED_MODULE_43__, _components_transactions_TransactionsFilters__WEBPACK_IMPORTED_MODULE_44__, _components_transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_45__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const _excluded = ["collectiveSlug"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













































const transactionsPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql`
  query TransactionsPage(
    $slug: String!
    $limit: Int!
    $offset: Int!
    $type: TransactionType
    $paymentMethodType: [PaymentMethodType]
    $minAmount: Int
    $maxAmount: Int
    $dateFrom: DateTime
    $dateTo: DateTime
    $searchTerm: String
    $kind: [TransactionKind]
    $includeIncognitoTransactions: Boolean
    $includeGiftCardTransactions: Boolean
    $includeChildrenTransactions: Boolean
  ) {
    account(slug: $slug) {
      id
      legacyId
      slug
      name
      type
      createdAt
      imageUrl(height: 256)
      currency
      settings
      features {
        id
        ...NavbarFields
      }
      ... on AccountWithParent {
        parent {
          id
          slug
        }
      }
      processingOrders: orders(filter: OUTGOING, includeIncognito: true, status: [PENDING, PROCESSING]) {
        totalCount
        nodes {
          id
          ...ProcessingOrderFields
        }
      }
    }
    transactions(
      account: { slug: $slug }
      limit: $limit
      offset: $offset
      type: $type
      paymentMethodType: $paymentMethodType
      minAmount: $minAmount
      maxAmount: $maxAmount
      dateFrom: $dateFrom
      dateTo: $dateTo
      searchTerm: $searchTerm
      kind: $kind
      includeIncognitoTransactions: $includeIncognitoTransactions
      includeGiftCardTransactions: $includeGiftCardTransactions
      includeChildrenTransactions: $includeChildrenTransactions
      includeDebts: true
    ) {
      ...TransactionsQueryCollectionFragment
    }
  }
  ${_components_transactions_graphql_fragments__WEBPACK_IMPORTED_MODULE_42__/* .transactionsQueryCollectionFragment */ .N}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_25__/* .collectiveNavbarFieldsFragment */ .AS}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_25__/* .processingOrderFragment */ .oE}
`;
const TransactionPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "transactions__TransactionPageWrapper",
  componentId: "sc-18ng4js-0"
})(["display:flex;flex-direction:column;min-height:100vh;#footer{margin-top:auto;}"]);
const EXPENSES_PER_PAGE = 15;

const getVariablesFromQuery = query => {
  const amountRange = (0,_components_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_21__/* .parseAmountRange */ .t)(query.amount);
  const {
    from: dateFrom,
    to: dateTo
  } = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_16__/* .parseDateInterval */ .dr)(query.period);
  return {
    offset: parseInt(query.offset) || 0,
    limit: parseInt(query.limit) || EXPENSES_PER_PAGE,
    type: query.type,
    paymentMethodType: (0,_components_transactions_filters_TransactionsPaymentMethodTypeFilter__WEBPACK_IMPORTED_MODULE_41__/* .parseTransactionPaymentMethodTypes */ .b)(query.paymentMethodType),
    status: query.status,
    tags: query.tag ? [query.tag] : undefined,
    minAmount: amountRange[0] && amountRange[0] * 100,
    maxAmount: amountRange[1] && amountRange[1] * 100,
    payoutMethodType: query.payout,
    dateFrom,
    dateTo,
    searchTerm: query.searchTerm,
    kind: query.kind ? (0,_components_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_40__/* .parseTransactionKinds */ .Zs)(query.kind) : (0,_components_transactions_filters_TransactionsKindFilter__WEBPACK_IMPORTED_MODULE_40__/* .getDefaultKinds */ .ce)(),
    includeIncognitoTransactions: !query.ignoreIncognitoTransactions,
    includeGiftCardTransactions: !query.ignoreGiftCardsTransactions,
    includeChildrenTransactions: !query.ignoreChildrenTransactions,
    displayPendingContributions: query.displayPendingContributions !== 'false'
  };
};

const convertProcessingOrderIntoTransactionItem = order => _objectSpread({
  order,
  // Since we're filtering for OUTGOING orders, we can assume that the order is from the collective
  type: _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_15__/* .TransactionTypes.DEBIT */ .em.DEBIT,
  kind: _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_15__/* .TransactionKind.CONTRIBUTION */ .wz.CONTRIBUTION
}, lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(order, ['id', 'amount', 'toAccount', 'fromAccount', 'description', 'createdAt', 'paymentMethod']));

class TransactionsPage extends (react__WEBPACK_IMPORTED_MODULE_5___default().Component) {
  static async getInitialProps(_ref) {
    let {
      query: {
        collectiveSlug
      }
    } = _ref,
        query = _objectWithoutProperties(_ref.query, _excluded);

    return {
      slug: collectiveSlug,
      query
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      Collective: lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(props, 'data.account')
    };
  }

  async componentDidMount() {
    const {
      router,
      data
    } = this.props;
    const Collective = data && data.account || this.state.collective;

    const queryParameters = _objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(this.props.query, ['offset', 'collectiveSlug', 'parentCollectiveSlug']));

    this.setState({
      Collective
    });
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_19__/* .addParentToURLIfMissing */ .Bc)(router, Collective, `/transactions`, queryParameters);
  }

  componentDidUpdate(oldProps) {
    // We store the component in state and update only if the next one is not
    // null because of a bug in Apollo where it strips the `Collective` from data
    // during re-hydratation.
    // See https://github.com/opencollective/opencollective/issues/1872
    const currentCollective = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(this.props, 'data.account');

    if (currentCollective && lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(oldProps, 'data.account') !== currentCollective) {
      this.setState({
        Collective: currentCollective
      });
    }

    const hasChildren = (this.props.data?.transactions?.nodes || []).some(el => el.fromAccount?.parent?.id === currentCollective.id || el.toAccount?.parent?.id === this.props.data?.account?.id) || this.props.query.ignoreChildrenTransactions;

    if (lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(this.state.hasChildren) && hasChildren) {
      this.setState({
        hasChildren
      });
    }

    const hasGiftCards = (this.props.data?.transactions?.nodes || []).some(el => el.giftCardEmitterAccount?.id && el.giftCardEmitterAccount?.id === this.props.data?.account?.id) || this.props.query.ignoreGiftCardsTransactions;

    if (lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(this.state.hasGiftCards) && hasGiftCards) {
      this.setState({
        hasGiftCards
      });
    }

    const hasIncognito = (this.props.data?.transactions?.nodes || []).some(el => el.account?.isIncognito) || this.props.query.ignoreIncognitoTransactions;

    if (lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(this.state.hasIncognito) && hasIncognito) {
      this.setState({
        hasIncognito
      });
    }

    const hasProcessingOrders = this.props.data?.account?.processingOrders?.totalCount > 0 || this.props.query.displayPendingContributions;

    if (lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(this.state.hasProcessingOrders) && hasProcessingOrders) {
      this.setState({
        hasProcessingOrders
      });
    } // Refetch to get permissions with the currently logged in user


    if (!oldProps.LoggedInUser && this.props.LoggedInUser) {
      this.props.data?.refetch();
    }
  }

  canDownloadInvoices() {
    const {
      LoggedInUser
    } = this.props;
    const collective = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(this.props, 'data.account') || this.state.Collective;

    if (!collective || !LoggedInUser) {
      return false;
    } else if (collective.type !== 'ORGANIZATION' && collective.type !== 'USER') {
      return false;
    } else {
      return LoggedInUser.isAdminOfCollectiveOrHost(collective) || LoggedInUser.hasRole(_lib_constants_roles__WEBPACK_IMPORTED_MODULE_14__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT, collective) || LoggedInUser.hasRole(_lib_constants_roles__WEBPACK_IMPORTED_MODULE_14__/* ["default"].ACCOUNTANT */ .Z.ACCOUNTANT, collective.host);
    }
  }

  buildFilterLinkParams(params) {
    const queryParameters = _objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(params, ['offset', 'collectiveType', 'parentCollectiveSlug']));

    return _objectSpread(_objectSpread({}, lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default()(queryParameters, value => !value)), lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(queryParameters, ['displayPendingContributions']));
  }

  updateFilters(queryParams, collective) {
    return this.props.router.push({
      pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_19__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/transactions`,
      query: this.buildFilterLinkParams(_objectSpread(_objectSpread({}, queryParams), {}, {
        offset: null
      }))
    });
  }

  render() {
    const {
      LoggedInUser,
      query,
      data,
      slug
    } = this.props;
    const collective = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(this.props, 'data.account') || this.state.Collective;
    const {
      transactions,
      error,
      loading,
      variables,
      refetch,
      account
    } = data || {};
    const hasFilters = Object.entries(query).some(([key, value]) => {
      return !['view', 'offset', 'limit', 'slug'].includes(key) && value;
    });
    const canDownloadInvoices = this.canDownloadInvoices();

    if (!collective && data.loading) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
        title: "Transactions",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {})
      });
    } else if (!collective) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
        data: data
      });
    } else if (!(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_12__/* .loggedInUserCanAccessFinancialData */ .ex)(LoggedInUser, data.account)) {
      // Hack for funds that want to keep their budget "private"
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
        showContactSupportLink: false
      });
    }

    const transactionsAndProcessingOrders = this.state.hasProcessingOrders && query.displayPendingContributions !== 'false' && !parseInt(query.offset) ? [...(account?.processingOrders?.nodes || []).map(convertProcessingOrderIntoTransactionItem), ...(transactions?.nodes || [])] : transactions?.nodes || [];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(TransactionPageWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
        collective: collective,
        LoggedInUser: LoggedInUser,
        canonicalURL: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_19__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/transactions`,
        noRobots: ['USER', 'INDIVIDUAL'].includes(collective.type) && !collective.isHost
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(_components_Body__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          collective: collective,
          isAdmin: LoggedInUser && LoggedInUser.isAdminOfCollective(collective),
          selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_23__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET,
          selectedSection: collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_13__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE ? _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_24__/* .Sections.BUDGET */ .bx.BUDGET : _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_24__/* .Sections.TRANSACTIONS */ .bx.TRANSACTIONS
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
          maxWidth: 1260,
          m: "0 auto",
          px: [2, 3, 4],
          py: [0, 4],
          mt: [3, 0],
          "data-cy": "transactions-page-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
            justifyContent: "space-between",
            alignItems: "baseline",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_collective_page_SectionTitle__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
              textAlign: "left",
              mb: 1,
              display: ['none', 'block'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "menu.transactions",
                defaultMessage: [{
                  "type": 0,
                  "value": "Transactions"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
              flexGrow: [1, 0],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                defaultValue: query.searchTerm,
                height: "40px",
                onSubmit: searchTerm => this.updateFilters({
                  searchTerm,
                  offset: null
                }, collective)
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
            mb: ['8px', '23px'],
            mt: 4,
            mx: "8px",
            justifyContent: "space-between",
            flexDirection: ['column', 'row'],
            alignItems: ['stretch', 'flex-end'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_transactions_TransactionsFilters__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
              filters: query,
              kinds: transactions?.kinds,
              paymentMethodTypes: transactions?.paymentMethodTypes,
              collective: collective,
              onChange: queryParams => this.updateFilters(_objectSpread(_objectSpread({}, queryParams), {}, {
                offset: null
              }), collective)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
              children: [canDownloadInvoices && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
                mr: "8px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                  href: `/${collective.slug}/admin/payment-receipts`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(_components_StyledButton__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                    buttonSize: "small",
                    minWidth: 140,
                    isBorderless: true,
                    flexGrow: 1,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "transactions.downloadinvoicesbutton",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Download Receipts"
                      }]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_8__.Download, {
                      size: "13px",
                      style: {
                        marginLeft: '8px'
                      }
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_transactions_TransactionsDownloadCSV__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
                collective: collective,
                query: this.props.query
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
            mx: "8px",
            justifyContent: "space-between",
            flexDirection: ['column', 'row'],
            alignItems: ['stretch', 'flex-end'],
            children: [this.state.hasProcessingOrders && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
              checked: this.props.query.displayPendingContributions !== 'false' ? true : false,
              onChange: ({
                checked
              }) => this.updateFilters({
                displayPendingContributions: checked
              }, collective),
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "transactions.displayPendingContributions",
                defaultMessage: [{
                  "type": 0,
                  "value": "Display pending contributions"
                }]
              })
            }), this.state.hasChildren && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
              checked: this.props.query.ignoreChildrenTransactions ? true : false,
              onChange: ({
                checked
              }) => this.updateFilters({
                ignoreChildrenTransactions: checked
              }, collective),
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "transactions.excludeChildren",
                defaultMessage: [{
                  "type": 0,
                  "value": "Exclude transactions from Projects and Events"
                }]
              })
            }), this.state.hasGiftCards && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
              checked: this.props.query.ignoreGiftCardsTransactions ? true : false,
              onChange: ({
                checked
              }) => this.updateFilters({
                ignoreGiftCardsTransactions: checked
              }, collective),
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "transactions.excludeGiftCards",
                defaultMessage: [{
                  "type": 0,
                  "value": "Exclude Gift Card transactions"
                }]
              })
            }), this.state.hasIncognito && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_StyledCheckbox__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
              checked: this.props.query.ignoreIncognitoTransactions ? true : false,
              onChange: ({
                checked
              }) => this.updateFilters({
                ignoreIncognitoTransactions: checked
              }, collective),
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "transactions.excludeIncognito",
                defaultMessage: [{
                  "type": 0,
                  "value": "Exclude Incognito transactions"
                }]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
            mt: ['8px', '23px'],
            children: error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
              type: "error",
              withIcon: true,
              children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_17__/* .getErrorFromGraphqlException */ .H1)(error).message
            }) : !loading && !transactions?.nodes?.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
              type: "info",
              withIcon: true,
              "data-cy": "zero-transactions-message",
              children: hasFilters ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "TransactionsList.Empty",
                defaultMessage: [{
                  "type": 0,
                  "value": "No transactions found. "
                }, {
                  "type": 8,
                  "value": "ResetLink",
                  "children": [{
                    "type": 0,
                    "value": "Reset filters"
                  }]
                }, {
                  "type": 0,
                  "value": " to see all transactions."
                }],
                values: {
                  ResetLink(text) {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                      "data-cy": "reset-transactions-filters",
                      href: `/${collective.slug}/transactions`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx("span", {
                        children: text
                      })
                    });
                  }

                }
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                id: "transactions.empty",
                defaultMessage: [{
                  "type": 0,
                  "value": "No transactions"
                }]
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsxs)((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_transactions_TransactionsList__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .Z, {
                isLoading: loading,
                collective: collective,
                nbPlaceholders: variables.limit,
                transactions: transactionsAndProcessingOrders,
                displayActions: true,
                onMutationSuccess: () => refetch()
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
                mt: 5,
                justifyContent: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                  route: `/${slug}/transactions`,
                  total: transactions?.totalCount,
                  limit: variables.limit,
                  offset: variables.offset,
                  ignoredQueryParams: ['collectiveSlug']
                })
              })]
            })
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_47__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {})]
    });
  }

}

const addTransactionsData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_7__.graphql)(transactionsPageQuery, {
  options: props => {
    return {
      variables: _objectSpread({
        slug: props.slug
      }, getVariablesFromQuery(props.query)),
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_18__/* .API_V2_CONTEXT */ .T
    };
  }
});
TransactionsPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static", "async"],
    "params": [{
      "name": "{ query: { collectiveSlug, ...query } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "canDownloadInvoices",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "buildFilterLinkParams",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "params",
      "type": null
    }],
    "returns": null
  }, {
    "name": "updateFilters",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "queryParams",
      "type": null
    }, {
      "name": "collective",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "TransactionsPage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "account": {
            "name": "object",
            "required": false
          },
          "transactions": {
            "name": "shape",
            "value": {
              "nodes": {
                "name": "array",
                "required": false
              }
            },
            "required": false
          },
          "variables": {
            "name": "object",
            "required": false
          },
          "loading": {
            "name": "bool",
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          },
          "error": {
            "name": "any",
            "required": false
          }
        }
      },
      "required": true
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "query": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "searchTerm": {
            "name": "string",
            "required": false
          },
          "offset": {
            "name": "string",
            "required": false
          },
          "ignoreIncognitoTransactions": {
            "name": "string",
            "required": false
          },
          "ignoreGiftCardsTransactions": {
            "name": "string",
            "required": false
          },
          "ignoreChildrenTransactions": {
            "name": "string",
            "required": false
          },
          "displayPendingContributions": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_46__/* .withUser */ .ns)(addTransactionsData((0,next_router__WEBPACK_IMPORTED_MODULE_9__.withRouter)(TransactionsPage))));
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

/***/ 42558:
/***/ ((module) => {

module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 33244:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 58847:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

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

/***/ 93842:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Envelope");

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

/***/ 24594:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 46529:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 43891:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 99232:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 60270:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 54427:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 81594:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Ban");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 41032:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 55457:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 63387:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

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

/***/ 87584:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 77192:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Calendar");

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

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 67520:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 72142:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 80950:
/***/ ((module) => {

module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 20384:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 33651:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

module.exports = require("@styled-icons/material/ShowChart");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 38164:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Stack");

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

/***/ 28109:
/***/ ((module) => {

module.exports = require("file-saver");

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

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

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

/***/ 90857:
/***/ ((module) => {

module.exports = require("lodash/endsWith");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

module.exports = require("lodash/first");

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

/***/ 41238:
/***/ ((module) => {

module.exports = require("lodash/includes");

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

/***/ 48524:
/***/ ((module) => {

module.exports = require("lodash/isNull");

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

/***/ 53707:
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ 36625:
/***/ ((module) => {

module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

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

/***/ 71156:
/***/ ((module) => {

module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 79800:
/***/ ((module) => {

module.exports = require("lodash/sumBy");

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

/***/ 73022:
/***/ ((module) => {

module.exports = require("lodash/upperCase");

/***/ }),

/***/ 22217:
/***/ ((module) => {

module.exports = require("lodash/without");

/***/ }),

/***/ 86646:
/***/ ((module) => {

module.exports = require("lodash/zipObject");

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

/***/ 37597:
/***/ ((module) => {

module.exports = require("react-text-mask");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208], () => (__webpack_exec__(82359)));
module.exports = __webpack_exports__;

})();