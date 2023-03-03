"use strict";
exports.id = 5471;
exports.ids = [5471];
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

/***/ 95487:
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
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38083);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15078);
/* harmony import */ var _budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93765);
/* harmony import */ var _filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49106);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _filters_ExpensesOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78877);
/* harmony import */ var _filters_ExpensesPayoutTypeFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3403);
/* harmony import */ var _filters_ExpensesStatusFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39627);
/* harmony import */ var _filters_ExpensesTypeFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68769);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_6__]);
_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "ExpensesFilters__FilterContainer",
  componentId: "sc-upgccp-0"
})(["margin-bottom:8px;flex:1 1 120px;"]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "ExpensesFilters__FilterLabel",
  componentId: "sc-upgccp-1"
})(["font-weight:600;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#9d9fa3;"]);

const ExpensesFilters = ({
  collective,
  filters,
  onChange,
  ignoredExpenseStatus,
  showOrderFilter = true,
  wrap = true
}) => {
  const getFilterProps = (name, valueModifier) => ({
    inputId: `expenses-filter-${name}`,
    value: filters?.[name],
    onChange: value => {
      const preparedValue = valueModifier ? valueModifier(value) : value;
      onChange(_objectSpread(_objectSpread({}, filters), {}, {
        [name]: value === 'ALL' ? null : preparedValue
      }));
    }
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    flexWrap: ['wrap', null, wrap ? 'wrap' : 'nowrap'],
    gap: "18px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FilterLabel, {
        htmlFor: "expenses-filter-type",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "expense.type",
          defaultMessage: [{
            "type": 0,
            "value": "Type"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_filters_ExpensesTypeFilter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, _objectSpread({}, getFilterProps('type')))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FilterLabel, {
        htmlFor: "expenses-filter-payout",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Payout",
          defaultMessage: [{
            "type": 0,
            "value": "Payout"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_filters_ExpensesPayoutTypeFilter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread({}, getFilterProps('payout')))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FilterLabel, {
        htmlFor: "expenses-filter-period",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Period",
          defaultMessage: [{
            "type": 0,
            "value": "Period"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getFilterProps('period', _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .encodeDateInterval */ .EB)), {}, {
        minDate: collective.createdAt
      }))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FilterLabel, {
        htmlFor: "expenses-filter-amount",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Fields.amount",
          defaultMessage: [{
            "type": 0,
            "value": "Amount"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread({
        currency: collective.currency
      }, getFilterProps('amount')))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FilterLabel, {
        htmlFor: "expenses-filter-status",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "expense.status",
          defaultMessage: [{
            "type": 0,
            "value": "Status"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_filters_ExpensesStatusFilter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, getFilterProps('status')), {}, {
        ignoredExpenseStatus: ignoredExpenseStatus
      }))]
    }), showOrderFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FilterLabel, {
        htmlFor: "expenses-order",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "expense.order",
          defaultMessage: [{
            "type": 0,
            "value": "Order"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_filters_ExpensesOrder__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread({}, getFilterProps('orderBy')))]
    })]
  });
};

ExpensesFilters.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpensesFilters",
  "props": {
    "showOrderFilter": {
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
    "wrap": {
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
    },
    "ignoredExpenseStatus": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "computed": true,
          "value": "Object.values(expenseStatus)"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ExpensesFilters));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95050);
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flip_move__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10066);
/* harmony import */ var _budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29398);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_5__]);
_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ExpenseContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ExpensesList__ExpenseContainer",
  componentId: "sc-1tn2ydt-0"
})(["", ""], props => !props.isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["border-top:1px solid #e6e8eb;"]));
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ExpensesList__FooterContainer",
  componentId: "sc-1tn2ydt-1"
})(["padding:16px 27px;border-top:1px solid #e6e8eb;"]);
const FooterLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "ExpensesList__FooterLabel",
  componentId: "sc-1tn2ydt-2"
})(["font-size:15px;margin-right:5px;text-transform:uppercase;"]);

const ExpensesTotal = ({
  collective,
  host,
  expenses,
  expenseFieldForTotalAmount
}) => {
  const {
    total,
    isApproximate
  } = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    let isApproximate = false;
    let total = 0;

    for (const expense of expenses) {
      total += expense[expenseFieldForTotalAmount]?.valueInCents || expense.amount;

      if (expense[expenseFieldForTotalAmount]?.exchangeRate?.isApproximate) {
        isApproximate = true;
      }
    }

    return {
      total,
      isApproximate
    };
  }, [expenses]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [isApproximate && `~ `, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      amount: total,
      currency: collective?.currency || host?.currency,
      precision: 2
    })]
  });
};

const ExpensesList = ({
  collective,
  host,
  expenses,
  isLoading,
  nbPlaceholders,
  isInverted,
  suggestedTags,
  view,
  onDelete,
  onProcess,
  expenseFieldForTotalAmount
}) => {
  if (!expenses?.length && !isLoading) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    children: [isLoading ? [...new Array(nbPlaceholders)].map((_, idx) =>
    /*#__PURE__*/
    // eslint-disable-next-line react/no-array-index-key
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ExpenseContainer, {
      isFirst: !idx,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        isLoading: true
      })
    }, idx)) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((react_flip_move__WEBPACK_IMPORTED_MODULE_1___default()), {
      enterAnimation: "fade",
      leaveAnimation: "fade",
      disableAllAnimations: _lib_animations__WEBPACK_IMPORTED_MODULE_4__/* .DISABLE_ANIMATIONS */ .t,
      children: expenses.map((expense, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ExpenseContainer, {
        isFirst: !idx,
        "data-cy": `expense-${expense.status}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          isInverted: isInverted,
          expense: expense,
          host: host,
          showProcessActions: true,
          view: view,
          onDelete: onDelete,
          onProcess: onProcess,
          suggestedTags: suggestedTags
        })
      }, expense.id))
    }), !isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FooterContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        flexDirection: ['row', 'column'],
        mt: [3, 0],
        flexWrap: "wrap",
        alignItems: ['center', 'flex-end'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          my: 2,
          mr: [3, 0],
          minWidth: 100,
          justifyContent: "flex-end",
          "data-cy": "transaction-amount",
          flexDirection: "column",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            alignSelf: "flex-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(FooterLabel, {
              color: "black.500",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "expense.page.total",
                defaultMessage: [{
                  "type": 0,
                  "value": "Page Total"
                }]
              }), ":"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FooterLabel, {
              color: "black.500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ExpensesTotal, {
                expenses: expenses,
                collective: collective,
                host: host,
                expenseFieldForTotalAmount: expenseFieldForTotalAmount
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            fontSize: "12px",
            color: "black.600",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "expense.page.description",
              defaultMessage: [{
                "type": 0,
                "value": "Payment processor fees may apply."
              }]
            })
          })]
        })
      })
    })]
  });
};

ExpensesList.defaultProps = {
  nbPlaceholders: 10,
  view: 'public',
  expenseFieldForTotalAmount: 'amountInAccountCurrency'
};
ExpensesList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpensesList",
  "props": {
    "nbPlaceholders": {
      "defaultValue": {
        "value": "10",
        "computed": false
      },
      "description": "When `isLoading` is true, this sets the number of \"loadin\" items displayed",
      "type": {
        "name": "number"
      },
      "required": false
    },
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
    "expenseFieldForTotalAmount": {
      "defaultValue": {
        "value": "'amountInAccountCurrency'",
        "computed": false
      },
      "description": "Defines the field in `expense` that holds the amount. Useful to display the right one based on the context for multi-currency expenses.",
      "type": {
        "name": "string"
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
          },
          "currency": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "expenses": {
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
    "totalAmount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensesList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ parseChronologicalOrderInput),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ExpensesOrder = _ref => {
  let {
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const options = [{
    label: intl.formatMessage({
      id: "ExpensesOrder.NewestFirst",
      defaultMessage: [{
        "type": 0,
        "value": "Newest First"
      }]
    }),
    value: 'CREATED_AT,DESC'
  }, {
    label: intl.formatMessage({
      id: "ExpensesOrder.OldestFirst",
      defaultMessage: [{
        "type": 0,
        "value": "Oldest First"
      }]
    }),
    value: 'CREATED_AT,ASC'
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_2__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "expenses-order",
    onChange: ({
      value
    }) => onChange(value),
    value: options.find(o => o.value === value),
    options: options,
    defaultValue: options[0]
  }, props));
};

const parseChronologicalOrderInput = str => {
  const [field, direction] = str.split(',');
  return {
    field,
    direction
  };
};
ExpensesOrder.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpensesOrder",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensesOrder);

/***/ }),

/***/ 3403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56508);
/* harmony import */ var _lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17133);
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









const ExpensesPayoutTypeFilter = _ref => {
  let {
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const getOption = value => ({
    label: (0,_lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(intl, value),
    value
  });

  const options = [getOption('ALL'), ...Object.values(_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_2__/* .PayoutMethodType */ .Nk).map(getOption)];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "expenses-payout-type-filter",
    options: options.sort(_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .sortSelectOptions */ .V_),
    onChange: ({
      value
    }) => onChange(value),
    value: getOption(value || 'ALL')
  }, props));
};

ExpensesPayoutTypeFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpensesPayoutTypeFilter",
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
        "name": "enum",
        "computed": true,
        "value": "Object.values(PayoutMethodType)"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensesPayoutTypeFilter);

/***/ }),

/***/ 39627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38083);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8480);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97079);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["value", "onChange", "ignoredExpenseStatus"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const IGNORED_EXPENSE_STATUS = [_lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].DRAFT */ .Z.DRAFT, _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"].UNVERIFIED */ .Z.UNVERIFIED];

const getOption = (intl, value) => ({
  label: (0,_lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__/* .i18nExpenseStatus */ .zr)(intl, value),
  value
});

const getOptions = (intl, ignoredExpenseStatus) => {
  const filteredStatuses = ignoredExpenseStatus ? Object.values(_lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).filter(s => !ignoredExpenseStatus.includes(s)) : Object.values(_lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  return ['ALL', ...filteredStatuses, 'READY_TO_PAY'].map(status => getOption(intl, status));
};

const ExpenseStatusFilter = _ref => {
  let {
    value,
    onChange,
    ignoredExpenseStatus = IGNORED_EXPENSE_STATUS
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const sortedOptions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getOptions(intl, ignoredExpenseStatus).sort(_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .sortSelectOptions */ .V_), [ignoredExpenseStatus]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "expenses-status-filter",
    "data-cy": "expenses-filter-status",
    options: sortedOptions,
    onChange: ({
      value
    }) => onChange(value),
    value: getOption(intl, value || 'ALL')
  }, props));
};

ExpenseStatusFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseStatusFilter",
  "props": {
    "ignoredExpenseStatus": {
      "defaultValue": {
        "value": "[expenseStatus.DRAFT, expenseStatus.UNVERIFIED]",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "computed": true,
          "value": "Object.values(expenseStatus)"
        }
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
        "name": "enum",
        "value": [{
          "value": "...Object.values(expenseStatus)",
          "computed": true
        }, {
          "value": "'READY_TO_PAY'",
          "computed": false
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseStatusFilter);

/***/ }),

/***/ 68769:
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









const ExpenseTypeFilter = _ref => {
  let {
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const getOption = value => ({
    label: (0,_lib_i18n_expense__WEBPACK_IMPORTED_MODULE_3__/* .i18nExpenseType */ .kD)(intl, value),
    value
  });

  const expenseTypeKeys = Object.keys(_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
  expenseTypeKeys.unshift('ALL');
  const options = expenseTypeKeys.map(getOption);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "expenses-type-filter",
    onChange: ({
      value
    }) => onChange(value),
    value: getOption(value || 'ALL'),
    options: options.sort(_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .sortSelectOptions */ .V_)
  }, props));
};

ExpenseTypeFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseTypeFilter",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseTypeFilter);

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

/***/ 10066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ DISABLE_ANIMATIONS)
/* harmony export */ });
const DISABLE_ANIMATIONS = ['e2e', 'ci'].includes("ci");

/***/ })

};
;