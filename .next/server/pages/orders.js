"use strict";
(() => {
var exports = {};
exports.id = 6660;
exports.ids = [6660];
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

/***/ 94542:
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
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24317);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1808);
/* harmony import */ var _lib_i18n_payment_method_provider_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1059);
/* harmony import */ var _lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72832);
/* harmony import */ var _lib_theme_helpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(13875);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25896);
/* harmony import */ var _AutosizeText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81966);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95370);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29242);
/* harmony import */ var _orders_OrderStatusTag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5455);
/* harmony import */ var _orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(28374);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51082);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90998);
/* harmony import */ var _TransactionSign__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(47924);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_18__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_21__]);
([_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_18__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const DetailColumnHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "OrderBudgetItem__DetailColumnHeader",
  componentId: "sc-1kxgdhv-0"
})(["font-style:normal;font-weight:bold;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#c4c7cc;margin-bottom:2px;"]);
const ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.attrs({
  'data-cy': 'order-actions'
}).withConfig({
  displayName: "OrderBudgetItem__ButtonsContainer",
  componentId: "sc-1kxgdhv-1"
})(["display:flex;flex-wrap:wrap;margin-top:8px;flex-grow:1;transition:opacity 0.05s;justify-content:flex-end;@media (max-width:40em){justify-content:center;}& > *:last-child{margin-right:0;}"]);
const OrderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "OrderBudgetItem__OrderContainer",
  componentId: "sc-1kxgdhv-2"
})(["padding:16px 27px;@media (hover:hover){&:not(:hover):not(:focus-within) ", "{opacity:0.24;}}"], ButtonsContainer);

const OrderBudgetItem = ({
  isLoading,
  order,
  showPlatformTip,
  showAmountSign
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(OrderContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      justifyContent: "space-between",
      flexWrap: "wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        flex: "1",
        minWidth: "max(60%, 300px)",
        maxWidth: [null, '70%'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          mr: 3,
          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            width: 40,
            height: 40
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            collective: order.fromAccount,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
              collective: order.fromAccount,
              radius: 40
            })
          })
        }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          height: 60
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            as: _Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
            href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getCollectivePageRoute */ .x0)(order.toAccount)}/orders/${order.legacyId}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_AutosizeText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              value: order.description,
              maxLength: 255,
              minFontSizeInPx: 12,
              maxFontSizeInPx: 16,
              lengthThreshold: 72,
              mobileRatio: 0.875,
              valueFormatter: _lib_theme_helpers__WEBPACK_IMPORTED_MODULE_25__/* .toPx */ .aR,
              children: ({
                value,
                fontSize
              }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__.H3, {
                fontWeight: "500",
                lineHeight: "1.5em",
                textDecoration: "none",
                color: "black.900",
                fontSize: fontSize,
                "data-cy": "expense-title",
                children: value
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_22__.P, {
            mt: "5px",
            fontSize: "12px",
            color: "black.600",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "Order.fromTo",
              defaultMessage: [{
                "type": 0,
                "value": "for "
              }, {
                "type": 1,
                "value": "account"
              }, {
                "type": 0,
                "value": " from "
              }, {
                "type": 1,
                "value": "contributor"
              }],
              values: {
                contributor: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  collective: order.fromAccount
                }),
                account: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  collective: order.toAccount
                })
              }
            }), ' • ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_DateTime__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              value: order.createdAt
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        flexDirection: ['row', 'column'],
        mt: [3, 0],
        flexWrap: "wrap",
        alignItems: ['center', 'flex-end'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
          my: 2,
          mr: [3, 0],
          minWidth: 100,
          justifyContent: "flex-end",
          "data-cy": "order-amount",
          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            height: 19,
            width: 120
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
            flexDirection: "column",
            alignItems: ['flex-start', 'flex-end'],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
              alignItems: "center",
              children: [showAmountSign && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_TransactionSign__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                isCredit: true
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
                color: "black.500",
                fontSize: "16px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  currency: order.amount.currency,
                  precision: 2,
                  amount: showPlatformTip && order.platformTipAmount?.valueInCents ? order.amount.valueInCents + order.platformTipAmount.valueInCents : order.amount.valueInCents
                })
              })]
            }), Boolean(showPlatformTip && order.platformTipAmount?.valueInCents) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              fontSize: "10px",
              color: "black.500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                id: "OrderBudgetItem.Tip",
                defaultMessage: [{
                  "type": 0,
                  "value": "(includes "
                }, {
                  "type": 1,
                  "value": "amount"
                }, {
                  "type": 0,
                  "value": " platform tip)"
                }],
                values: {
                  amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    amount: order.platformTipAmount.valueInCents,
                    currency: order.platformTipAmount.currency,
                    precision: 2,
                    amountStyles: null
                  })
                }
              })
            })]
          })
        }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          height: 20,
          width: 140,
          mt: 2
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_StyledTag__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            variant: "rounded-left",
            fontSize: "10px",
            fontWeight: "500",
            mr: 1,
            textTransform: "uppercase",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "Order",
              defaultMessage: [{
                "type": 0,
                "value": "Order"
              }]
            }), " #", order.legacyId]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_orders_OrderStatusTag__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            status: order.status
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: ['space-between', null, 'flex-start'],
        flexGrow: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
          flexDirection: "column",
          justifyContent: "flex-end",
          mr: [3, 4],
          minHeight: 50,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(DetailColumnHeader, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "paymentmethod.label",
              defaultMessage: [{
                "type": 0,
                "value": "Payment Method"
              }]
            })
          }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            height: 16
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
            fontSize: "11px",
            lineHeight: "16px",
            color: "black.700",
            children: order.paymentMethod?.type ? (0,_lib_i18n_payment_method_type__WEBPACK_IMPORTED_MODULE_6__/* .i18nPaymentMethodType */ .i)(intl, order.paymentMethod.type) : (0,_lib_i18n_payment_method_provider_type__WEBPACK_IMPORTED_MODULE_5__/* .i18nPaymentMethodProviderType */ .z)(intl, // TODO(paymentMethodType): migrate to service+type
            order.paymentMethod?.providerType || order.pendingContributionData?.paymentMethod || _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .GQLV2_PAYMENT_METHOD_LEGACY_TYPES.BANK_TRANSFER */ .oy.BANK_TRANSFER)
          })]
        }), order?.status === 'PENDING' && order?.pendingContributionData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [order.pendingContributionData.ponumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
            flexDirection: "column",
            justifyContent: "flex-end",
            mr: [3, 4],
            minHeight: 50,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(DetailColumnHeader, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                  id: "3Il70r",
                  defaultMessage: [{
                    "type": 0,
                    "value": "External reference code for this order. This is usually a reference number from the contributor accounting system."
                  }]
                }),
                containerCursor: "default",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                  id: "Fields.PONumber",
                  defaultMessage: [{
                    "type": 0,
                    "value": "PO Number"
                  }]
                })
              })
            }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              height: 16
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
              fontSize: "11px",
              lineHeight: "16px",
              color: "black.700",
              children: `#${order.pendingContributionData.ponumber}`
            })]
          }), order.pendingContributionData.expectedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
            flexDirection: "column",
            justifyContent: "flex-end",
            mr: [3, 4],
            minHeight: 50,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(DetailColumnHeader, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                id: "6srLb2",
                defaultMessage: [{
                  "type": 0,
                  "value": "Expected"
                }]
              })
            }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
              height: 16
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
              fontSize: "11px",
              lineHeight: "16px",
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_DateTime__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                value: order.pendingContributionData.expectedAt,
                dateStyle: 'medium',
                timeStyle: undefined
              })
            })]
          })]
        })]
      }), order?.permissions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(ButtonsContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_orders_ProcessOrderButtons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          order: order,
          permissions: order.permissions
        })
      })]
    })]
  });
};

OrderBudgetItem.defaultProps = {
  showAmountSign: true
};
OrderBudgetItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderBudgetItem",
  "props": {
    "showAmountSign": {
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
    "isLoading": {
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
    "view": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'public'",
          "computed": false
        }, {
          "value": "'admin'",
          "computed": false
        }]
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
          "currency": {
            "name": "string",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "balance": {
                "name": "shape",
                "value": {
                  "valueInCents": {
                    "name": "number",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
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
    "host": {
      "description": "",
      "type": {
        "name": "object"
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
          "legacyId": {
            "name": "number",
            "required": false
          },
          "description": {
            "name": "string",
            "required": true
          },
          "status": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(ORDER_STATUS)",
            "required": true
          },
          "createdAt": {
            "name": "string",
            "required": true
          },
          "amount": {
            "name": "object",
            "required": true
          },
          "platformTipAmount": {
            "name": "object",
            "required": true
          },
          "permissions": {
            "name": "shape",
            "value": {
              "canReject": {
                "name": "bool",
                "required": false
              },
              "canMarkAsPaid": {
                "name": "bool",
                "required": false
              }
            },
            "required": false
          },
          "pendingContributionData": {
            "name": "shape",
            "value": {
              "ponumber": {
                "name": "number",
                "required": false
              },
              "expectedAt": {
                "name": "string",
                "required": false
              },
              "paymentMethod": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "paymentMethod": {
            "name": "shape",
            "value": {
              "providerType": {
                "name": "string",
                "required": false
              },
              "type": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "toAccount": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": false
              }
            },
            "description": "If available, this `account` will be used in place of the `collective`",
            "required": false
          },
          "fromAccount": {
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
    },
    "showPlatformTip": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderBudgetItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 84939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24317);
/* harmony import */ var _lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(732);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97079);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const OrderStatusFilter = _ref => {
  let {
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const getOption = value => ({
    label: (0,_lib_i18n_order_status__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, value),
    value
  });

  const options = [getOption('ALL'), ...Object.values(_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_STATUS */ .D).map(getOption)];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "order-status-filter",
    isSearchable: false,
    onChange: ({
      value
    }) => onChange(value),
    value: getOption(value || 'ALL'),
    options: options.sort(_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .sortSelectOptions */ .V_)
  }, props));
};

OrderStatusFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderStatusFilter",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderStatusFilter);

/***/ }),

/***/ 80913:
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
/* harmony import */ var _OrderStatusFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84939);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__]);
_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "OrdersFilters__FilterContainer",
  componentId: "sc-zmw1a3-0"
})(["margin-bottom:8px;flex:1 1 120px;&:not(:last-child){margin-right:18px;}"]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "OrdersFilters__FilterLabel",
  componentId: "sc-zmw1a3-1"
})(["font-weight:600;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#9d9fa3;"]);

const OrdersFilters = ({
  currency,
  filters,
  hasStatus,
  onChange
}) => {
  const getFilterProps = (name, valueModifier) => ({
    inputId: `orders-filter-${name}`,
    value: filters?.[name],
    onChange: value => {
      const preparedValue = valueModifier ? valueModifier(value) : value;
      onChange(_objectSpread(_objectSpread({}, filters), {}, {
        [name]: value === 'ALL' ? null : preparedValue
      }));
    }
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexWrap: "wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(FilterLabel, {
        htmlFor: "orders-filter-period",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Period",
          defaultMessage: [{
            "type": 0,
            "value": "Period"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread({}, getFilterProps('period', _lib_date_utils__WEBPACK_IMPORTED_MODULE_3__/* .encodeDateInterval */ .EB)))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(FilterLabel, {
        htmlFor: "orders-filter-amount",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Fields.amount",
          defaultMessage: [{
            "type": 0,
            "value": "Amount"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({
        currency: currency
      }, getFilterProps('amount')))]
    }), hasStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(FilterLabel, {
        htmlFor: "orders-filter-status",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "order.status",
          defaultMessage: [{
            "type": 0,
            "value": "Status"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_OrderStatusFilter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread({}, getFilterProps('status')))]
    })]
  });
};

OrdersFilters.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrdersFilters",
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
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "hasStatus": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(OrdersFilters));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _budget_OrderBudgetItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94542);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19156);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_budget_OrderBudgetItem__WEBPACK_IMPORTED_MODULE_2__]);
_budget_OrderBudgetItem__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const OrderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "OrdersList__OrderContainer",
  componentId: "sc-6wv824-0"
})(["", ""], props => !props.isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["border-top:1px solid #e6e8eb;"]));

const OrdersList = ({
  orders,
  isLoading,
  nbPlaceholders,
  showPlatformTip,
  showAmountSign
}) => {
  orders = !isLoading ? orders : [...new Array(nbPlaceholders)];

  if (!orders?.length) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    children: orders.map((order, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(OrderContainer, {
      isFirst: !idx,
      "data-cy": `order-${order?.status}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_budget_OrderBudgetItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        isLoading: isLoading,
        order: order,
        showPlatformTip: showPlatformTip,
        showAmountSign: showAmountSign
      })
    }, order?.id || idx))
  });
};

OrdersList.defaultProps = {
  nbPlaceholders: 10
};
OrdersList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrdersList",
  "props": {
    "nbPlaceholders": {
      "defaultValue": {
        "value": "10",
        "computed": false
      },
      "description": "When `isLoading` is true, this sets the number of \"loading\" items displayed",
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
    "orders": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
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
        }
      },
      "required": false
    },
    "showPlatformTip": {
      "description": "",
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24317);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15078);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62131);
/* harmony import */ var _lib_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19123);
/* harmony import */ var _budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93765);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54646);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37278);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68185);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79045);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32606);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var _OrdersFilters__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(80913);
/* harmony import */ var _OrdersList__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(80483);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_12__, _OrdersFilters__WEBPACK_IMPORTED_MODULE_22__, _OrdersList__WEBPACK_IMPORTED_MODULE_23__]);
([_host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_12__, _OrdersFilters__WEBPACK_IMPORTED_MODULE_22__, _OrdersList__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const accountOrdersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query Orders(
    $accountSlug: String
    $limit: Int!
    $offset: Int!
    $status: [OrderStatus]
    $minAmount: Int
    $maxAmount: Int
    $dateFrom: DateTime
    $dateTo: DateTime
    $searchTerm: String
  ) {
    account(slug: $accountSlug) {
      id
      slug
      currency
      legacyId
      name
    }
    orders(
      account: { slug: $accountSlug }
      includeHostedAccounts: true
      filter: INCOMING
      status: $status
      searchTerm: $searchTerm
      limit: $limit
      offset: $offset
      dateFrom: $dateFrom
      dateTo: $dateTo
      minAmount: $minAmount
      maxAmount: $maxAmount
    ) {
      totalCount
      nodes {
        id
        legacyId
        description
        createdAt
        status
        amount {
          valueInCents
          currency
        }
        platformTipAmount {
          valueInCents
          currency
        }
        paymentMethod {
          id
          providerType
        }
        fromAccount {
          id
          slug
          name
          imageUrl
        }
        pendingContributionData {
          expectedAt
          paymentMethod
          ponumber
          memo
          fromAccountInfo {
            name
            email
          }
        }
        toAccount {
          id
          slug
          name
          imageUrl
          isHost
          ... on AccountWithHost {
            bankTransfersHostFeePercent: hostFeePercent(paymentMethodType: MANUAL)
          }
        }
        permissions {
          id
          canMarkAsExpired
          canMarkAsPaid
        }
      }
    }
  }
`;
const ORDERS_PER_PAGE = 15;

const isValidStatus = status => {
  return Boolean(_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_5__/* .ORDER_STATUS */ .D[status]);
};

const getVariablesFromQuery = (query, forcedStatus) => {
  const amountRange = (0,_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_10__/* .parseAmountRange */ .t)(query.amount);
  const {
    from: dateFrom,
    to: dateTo
  } = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseDateInterval */ .dr)(query.period);
  const searchTerm = query.searchTerm || null;
  return {
    offset: parseInt(query.offset) || 0,
    limit: parseInt(query.limit) || ORDERS_PER_PAGE,
    status: searchTerm ? null : forcedStatus ? forcedStatus : isValidStatus(query.status) ? query.status : null,
    minAmount: amountRange[0] && amountRange[0] * 100,
    maxAmount: amountRange[1] && amountRange[1] * 100,
    dateFrom,
    dateTo,
    searchTerm
  };
};

const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  searchPlaceholder: {
    id: "Orders.Search.Placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Search all contributions..."
    }]
  }
});

const hasParams = query => {
  return Object.entries(query).some(([key, value]) => {
    return !['collectiveSlug', 'hostCollectiveSlug', 'limit', 'offset', 'paypalApprovalError', 'section', 'slug', 'view'].includes(key) && value;
  });
};

const ROUTE_PARAMS = ['hostCollectiveSlug', 'collectiveSlug', 'view', 'slug', 'section'];

const updateQuery = (router, newParams) => {
  const query = lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, router.query), newParams), (value, key) => !value || ROUTE_PARAMS.includes(key));

  const pathname = router.asPath.split('?')[0];
  return router.push({
    pathname,
    query
  });
};

const OrdersWithData = ({
  accountSlug,
  title,
  status,
  showPlatformTip,
  canCreatePendingOrder
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)() || {
    query: {}
  };
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const hasFilters = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => hasParams(router.query), [router.query]);
  const [showCreatePendingOrderModal, setShowCreatePendingOrderModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);

  const queryVariables = _objectSpread({
    accountSlug
  }, getVariablesFromQuery(router.query, status));

  const queryParams = {
    variables: queryVariables,
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  };
  const {
    data,
    error,
    loading,
    variables,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(accountOrdersQuery, queryParams);
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  const prevLoggedInUser = (0,_lib_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_9__/* .usePrevious */ .D)(LoggedInUser);
  const isHostAdmin = LoggedInUser?.isAdminOfCollective(data?.account); // Refetch data when user logs in

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (!prevLoggedInUser && LoggedInUser) {
      refetch();
    }
  }, [LoggedInUser]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
    maxWidth: 1000,
    width: "100%",
    m: "0 auto",
    px: 2,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      mb: 24,
      alignItems: "center",
      flexWrap: "wrap",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Text__WEBPACK_IMPORTED_MODULE_21__.H1, {
        fontSize: "32px",
        lineHeight: "40px",
        py: 2,
        fontWeight: "normal",
        children: title || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "FinancialContributions",
          defaultMessage: [{
            "type": 0,
            "value": "Financial Contributions"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        mx: "auto"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        p: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          defaultValue: router.query.searchTerm,
          onSubmit: searchTerm => updateQuery(router, {
            searchTerm,
            offset: null
          }),
          placeholder: intl.formatMessage(messages.searchPlaceholder)
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
      mb: 26,
      borderWidth: "0.5px",
      borderColor: "black.300"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      mb: 34,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        flexGrow: "1",
        mr: "18px",
        children: data?.account ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_OrdersFilters__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          currency: data.account.currency,
          filters: router.query,
          onChange: queryParams => updateQuery(router, _objectSpread(_objectSpread({}, queryParams), {}, {
            offset: null
          })),
          hasStatus: !status
        }) : loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          height: 70
        }) : null
      }), isHostAdmin && canCreatePendingOrder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          onClick: () => setShowCreatePendingOrderModal(true),
          buttonSize: "small",
          buttonStyle: "primary",
          height: "38px",
          lineHeight: "12px",
          mt: "17px",
          "data-cy": "create-pending-contribution",
          children: "Create +"
        }), showCreatePendingOrderModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_host_dashboard_CreatePendingOrderModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          host: data.account,
          onClose: () => setShowCreatePendingOrderModal(false),
          onSuccess: () => refetch()
        })]
      })]
    }), error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      error: error
    }) : !loading && !data.orders?.nodes.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      type: "info",
      withIcon: true,
      "data-cy": "zero-order-message",
      children: hasFilters ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "OrdersList.Empty",
        defaultMessage: [{
          "type": 0,
          "value": "No contributions match the given filters. "
        }, {
          "type": 8,
          "value": "ResetLink",
          "children": [{
            "type": 0,
            "value": "Reset"
          }]
        }, {
          "type": 0,
          "value": " to see all."
        }],
        values: {
          ResetLink(text) {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              "data-cy": "reset-orders-filters",
              href: {
                pathname: router.asPath.split('?')[0],
                query: {}
              },
              children: text
            });
          }

        }
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "orders.empty",
        defaultMessage: [{
          "type": 0,
          "value": "No orders"
        }]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_OrdersList__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        isLoading: loading,
        orders: data?.orders?.nodes,
        nbPlaceholders: variables.limit,
        showPlatformTip: showPlatformTip
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        mt: 5,
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_Pagination__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          total: data?.orders?.totalCount,
          limit: variables.limit,
          offset: variables.offset,
          ignoredQueryParams: ROUTE_PARAMS
        })
      })]
    })]
  });
};

OrdersWithData.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrdersWithData",
  "props": {
    "accountSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "status": {
      "description": "If provided, only orders matching this status will be fetched",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "title": {
      "description": "An optional title to be used instead of \"Financial contributions\"",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "showPlatformTip": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "canCreatePendingOrder": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersWithData);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Holds the previous value. Useful to reproduce a `componentDidUpdate(prevProps)` behavior
 * in a hook component.
 */

const usePrevious = value => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};

/***/ }),

/***/ 9034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51719);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38208);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _components_orders_OrdersWithData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79258);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84842);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_2__, _components_orders_OrdersWithData__WEBPACK_IMPORTED_MODULE_5__, _components_Page__WEBPACK_IMPORTED_MODULE_6__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_2__, _components_orders_OrdersWithData__WEBPACK_IMPORTED_MODULE_5__, _components_Page__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











class OrdersPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static getInitialProps({
    query: {
      collectiveSlug,
      filter,
      value
    }
  }) {
    return {
      slug: collectiveSlug,
      filter,
      value
    };
  }

  render() {
    const {
      slug,
      data,
      LoggedInUser
    } = this.props;
    const collective = data?.account;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      children: [(data?.loading || data?.account) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        mb: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          isLoading: data.loading,
          collective: data.account,
          isAdmin: LoggedInUser?.isAdminOfCollective(collective)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        py: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_orders_OrdersWithData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          accountSlug: slug
        })
      })]
    });
  }

}

OrdersPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, filter, value } }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "OrdersPage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "filter": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "value": {
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
          "loading": {
            "name": "bool",
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_7__/* .withUser */ .ns)((0,_lib_graphql_queries__WEBPACK_IMPORTED_MODULE_1__/* .addCollectiveNavbarData */ .TS)(OrdersPage)));
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,2566], () => (__webpack_exec__(9034)));
module.exports = __webpack_exports__;

})();