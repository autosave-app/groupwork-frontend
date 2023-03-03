"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9711],{

/***/ 79045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57557);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97274);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var Pagination = function Pagination(_ref) {
  var route = _ref.route,
      limit = _ref.limit,
      offset = _ref.offset,
      total = _ref.total,
      scrollToTopOnChange = _ref.scrollToTopOnChange,
      isDisabled = _ref.isDisabled,
      ignoredQueryParams = _ref.ignoredQueryParams;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  if (!router) {
    return null;
  }

  var totalPages = Math.ceil(total / limit);
  var currentPage = offset / limit + 1;
  var queryParams = ignoredQueryParams ? lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(router.query, ignoredQueryParams) : router.query;
  route = route || router.asPath.split('?')[0];
  isDisabled = isDisabled || totalPages <= 1;

  var changePage = /*#__PURE__*/function () {
    var _ref3 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(_ref2) {
      var target, key, value;
      return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              target = _ref2.target, key = _ref2.key;

              if (!(key && key !== 'Enter')) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              value = target.value;

              if (!(!value || !parseInt(value) || parseInt(value) === currentPage)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return router.push({
                pathname: route,
                query: _objectSpread(_objectSpread({}, queryParams), {}, {
                  offset: (value - 1) * limit
                })
              });

            case 8:
              if (scrollToTopOnChange) {
                window.scrollTo(0, 0);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function changePage(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    alignItems: "center",
    children: [currentPage > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      href: {
        pathname: route,
        query: _objectSpread(_objectSpread({}, queryParams), {}, {
          offset: offset - limit
        })
      },
      scroll: scrollToTopOnChange,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        buttonSize: "small",
        disabled: isDisabled,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          id: "Pagination.Prev",
          defaultMessage: [{
            "type": 0,
            "value": "Previous"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      display: "inline-block",
      mx: 2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
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
          current: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
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
          total: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            "data-cy": "pagination-total",
            children: totalPages || 1
          })
        }
      })
    }), currentPage < totalPages && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      href: {
        pathname: route,
        query: _objectSpread(_objectSpread({}, queryParams), {}, {
          offset: offset + limit
        })
      },
      scroll: scrollToTopOnChange,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        buttonSize: "small",
        disabled: isDisabled,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
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
/* harmony default export */ __webpack_exports__["Z"] = (Pagination);

/***/ }),

/***/ 60732:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ PERIOD_FILTER_PRESETS; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15078);
/* harmony import */ var _lib_dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82114);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var getPastDateInterval = function getPastDateInterval(timeUnit) {
  var from = (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().subtract(1, timeUnit).startOf(timeUnit);
  return {
    from: from,
    to: from.endOf(timeUnit)
  };
};
/**
 * Some presets for time filters
 */


var PERIOD_FILTER_PRESETS = {
  allTime: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "s+lPP3",
      defaultMessage: [{
        "type": 0,
        "value": "All time"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: null,
        to: null
      };
    }
  },
  today: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "zWgbGg",
      defaultMessage: [{
        "type": 0,
        "value": "Today"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('day'),
        to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
      };
    }
  },
  thisMonth: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "3PZa76",
      defaultMessage: [{
        "type": 0,
        "value": "This Month"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('month'),
        to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
      };
    }
  },
  thisYear: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "OGk6DC",
      defaultMessage: [{
        "type": 0,
        "value": "This Year"
      }]
    }),
    getInterval: function getInterval() {
      return {
        from: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().startOf('year'),
        to: (0,_lib_dayjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().endOf('day')
      };
    }
  },
  pastWeek: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "li7Ez6",
      defaultMessage: [{
        "type": 0,
        "value": "Past Week"
      }]
    }),
    getInterval: function getInterval() {
      return getPastDateInterval('week');
    }
  },
  pastMonth: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "+n7iNv",
      defaultMessage: [{
        "type": 0,
        "value": "Past Month"
      }]
    }),
    getInterval: function getInterval() {
      return getPastDateInterval('month');
    }
  },
  pastYear: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      id: "B0DOrM",
      defaultMessage: [{
        "type": 0,
        "value": "Past Year"
      }]
    }),
    getInterval: function getInterval() {
      return getPastDateInterval('year');
    }
  }
};
var PERIOD_FILTER_SELECT_STYLES = {
  dropdownIndicator: {
    paddingTop: 0,
    paddingBottom: 0
  },
  option: {
    fontSize: '12px'
  }
};

var getSelectedPeriodOptionFromInterval = function getSelectedPeriodOptionFromInterval(_ref) {
  var from = _ref.from,
      to = _ref.to;

  var isSameDay = function isSameDay(dayjsDate, otherDate) {
    return !dayjsDate && !otherDate || (dayjsDate === null || dayjsDate === void 0 ? void 0 : dayjsDate.isSame(otherDate, 'day'));
  };

  var preset = Object.keys(PERIOD_FILTER_PRESETS).find(function (preset) {
    var presetDetails = PERIOD_FILTER_PRESETS[preset];
    var presetInterval = presetDetails.getInterval();
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

var periodSelectThemeBuilder = function periodSelectThemeBuilder(theme) {
  return _objectSpread(_objectSpread({}, theme), {}, {
    spacing: _objectSpread(_objectSpread({}, theme.spacing), {}, {
      controlHeight: 28
    })
  });
};

var PeriodFilterPresetsSelect = function PeriodFilterPresetsSelect(_ref2) {
  var _onChange = _ref2.onChange,
      interval = _ref2.interval,
      inputId = _ref2.inputId,
      formatDateFn = _ref2.formatDateFn;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  var selectedOption = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return getSelectedPeriodOptionFromInterval(interval);
  }, [interval]);
  var options = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return Object.keys(PERIOD_FILTER_PRESETS).map(function (presetKey) {
      return {
        value: presetKey,
        label: PERIOD_FILTER_PRESETS[presetKey].label
      };
    });
  }, [intl]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__/* .StyledSelectFilter */ .V, {
    inputId: inputId,
    value: selectedOption,
    options: options,
    selectTheme: periodSelectThemeBuilder,
    styles: PERIOD_FILTER_SELECT_STYLES,
    onChange: function onChange(_ref3) {
      var value = _ref3.value;

      if (value === 'custom') {
        return interval;
      } else {
        var newInterval = _objectSpread({}, PERIOD_FILTER_PRESETS[value].getInterval());

        _onChange(_objectSpread(_objectSpread({}, interval), {}, {
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
/* harmony default export */ __webpack_exports__["Z"] = (PeriodFilterPresetsSelect);

/***/ }),

/***/ 32606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72427);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);



var _excluded = ["onSubmit", "defaultValue", "placeholder"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
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

var SearchBar = function SearchBar(_ref) {
  var _onSubmit = _ref.onSubmit,
      defaultValue = _ref.defaultValue,
      placeholder = _ref.placeholder,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(defaultValue || ''),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(); // Reset value when `defaultValue` change, to handle reset filters

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    setValue(defaultValue || '');
  }, [defaultValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SearchForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread({
    placeholder: placeholder || intl.formatMessage(messages.searchPlaceholder),
    value: value,
    onChange: setValue,
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      var searchInput = event.target.elements.q;

      _onSubmit(searchInput.value || null);
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
/* harmony default export */ __webpack_exports__["Z"] = (SearchBar);

/***/ }),

/***/ 4062:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ filters_PeriodFilter; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/ChevronDown/ChevronDown.esm.js
var ChevronDown_esm = __webpack_require__(26955);
// EXTERNAL MODULE: ./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js
var InfoCircle_esm = __webpack_require__(95612);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/date-utils.js
var date_utils = __webpack_require__(15078);
// EXTERNAL MODULE: ./lib/dayjs.js
var dayjs = __webpack_require__(82114);
// EXTERNAL MODULE: ./components/DateTime.js
var DateTime = __webpack_require__(95370);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/DateRange.js







var OneLineDate = (0,styled_components_browser_esm/* default */.ZP)(DateTime/* default */.Z).withConfig({
  displayName: "DateRange__OneLineDate",
  componentId: "sc-loqk0f-0"
})(["white-space:nowrap;display:inline-block;"]);

var getMessage = function getMessage(from, to) {
  if (!from && !to) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "DateRange.All",
      defaultMessage: [{
        "type": 0,
        "value": "All"
      }]
    });
  } else if (from && to) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
          dateFrom: /*#__PURE__*/(0,jsx_runtime.jsx)(OneLineDate, {
            value: from,
            dateStyle: "medium"
          }),
          dateTo: /*#__PURE__*/(0,jsx_runtime.jsx)(OneLineDate, {
            value: to,
            dateStyle: "medium"
          })
        }
      })
    });
  } else if (from) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "x9TypM",
      defaultMessage: [{
        "type": 0,
        "value": "Since "
      }, {
        "type": 1,
        "value": "date"
      }],
      values: {
        date: /*#__PURE__*/(0,jsx_runtime.jsx)(OneLineDate, {
          value: from,
          dateStyle: "medium"
        })
      }
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "U5sjCv",
      defaultMessage: [{
        "type": 0,
        "value": "Before "
      }, {
        "type": 1,
        "value": "date"
      }],
      values: {
        date: /*#__PURE__*/(0,jsx_runtime.jsx)(OneLineDate, {
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


var DateRange = function DateRange(_ref) {
  var from = _ref.from,
      to = _ref.to,
      isUTC = _ref.isUTC;
  var message = getMessage(from, to);

  if (!isUTC || !from && !to) {
    return message;
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
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
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/PeriodFilterPresetsSelect.js
var PeriodFilterPresetsSelect = __webpack_require__(60732);
// EXTERNAL MODULE: ./components/PopupMenu.js
var PopupMenu = __webpack_require__(66152);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledButtonSet.js
var StyledButtonSet = __webpack_require__(16738);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledInputField.js
var StyledInputField = __webpack_require__(87262);
// EXTERNAL MODULE: ./components/StyledTooltip.js
var StyledTooltip = __webpack_require__(88609);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./components/filters/PeriodFilter.tsx




var _excluded = ["onChange", "value", "inputId", "minDate"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




















var DEFAULT_INTERVAL = {
  from: '',
  to: '',
  timezoneType: 'local'
};
/**
 * Get a date range as stored internally from a `value` prop, that can be either an object
 * like { from, to } or a stringified value (see `encodeDateInterval`).
 */

var getIntervalFromValue = function getIntervalFromValue(value) {
  var isIntervalObject = function isIntervalObject(value) {
    return typeof value === 'object' && has_default()(value, 'from') && has_default()(value, 'to');
  };

  var intervalFromValue = isIntervalObject(value) ? _objectSpread({}, value) : (0,date_utils/* parseDateInterval */.dr)(value);

  if (intervalFromValue.timezoneType === 'UTC') {
    var toUTC = function toUTC(date) {
      return date ? dayjs/* default.utc */.Z.utc(date) : null;
    };

    intervalFromValue.from = toUTC(intervalFromValue.from);
    intervalFromValue.to = toUTC(intervalFromValue.to);
  }

  return {
    from: (0,date_utils/* stripTime */.xR)(intervalFromValue.from),
    to: (0,date_utils/* stripTime */.xR)(intervalFromValue.to),
    timezoneType: intervalFromValue.timezoneType || 'local'
  };
};
/**
 * Update `interval` with a new value for `from` or `to` and return the updated interval
 * as a new object.
 */


var getNewInterval = function getNewInterval(interval, changeField, newValue) {
  var newInterval = _objectSpread({}, interval);

  newInterval[changeField] = newValue;
  return newInterval;
};
/**
 * Date is locally stored as '2020-01-01'. We need to force the time to make sure it's not modified
 * by timezones when parsed.
 */


var parseDateForDateRange = function parseDateForDateRange(dateStr, isEndOfDay) {
  if (!dateStr) {
    return null;
  } else if (!isEndOfDay) {
    return new Date("".concat(dateStr, "T00:00:00"));
  } else {
    return new Date("".concat(dateStr, "T23:59:59"));
  }
};

var UTC_LABEL = (0,lib.defineMessage)({
  id: "94IjMb",
  defaultMessage: [{
    "type": 0,
    "value": "Coordinated Universal Time"
  }]
});

var getTimeZoneTypeName = function getTimeZoneTypeName(intl, timezone) {
  if (timezone === 'local') {
    try {
      return intl.timeZone || dayjs/* default.tz.guess */.Z.tz.guess();
    } catch (_unused) {
      return '';
    }
  } else if (timezone === 'UTC') {
    return intl.formatMessage(UTC_LABEL);
  } else {
    return '';
  }
};

var TriggerContainer = (0,styled_components_browser_esm/* default */.ZP)(StyledButton/* default */.Z).withConfig({
  displayName: "PeriodFilter__TriggerContainer",
  componentId: "sc-cv8c8z-0"
})(["min-height:38px;outline:0;background:#f7f8fa;padding:0 16px;width:100%;text-align:left;font-size:12px;font-weight:500;color:hsl(0,0%,20%);svg{transition:color 0.2s;}&:hover{border-color:#c4c7cc;svg{color:#999999;}}&:active,&:focus{background:white;color:hsl(0,0%,20%);box-shadow:0 0 0 2px black;}"]);

var PeriodFilter = function PeriodFilter(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      inputId = _ref.inputId,
      minDate = _ref.minDate,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var intl = (0,useIntl/* default */.Z)();
  var intervalFromValue = react.useMemo(function () {
    return getIntervalFromValue(value);
  }, [value]);

  var _React$useState = react.useState(intervalFromValue),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      tmpDateInterval = _React$useState2[0],
      setTmpDateInterval = _React$useState2[1];

  var _React$useState3 = react.useState(true),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      isValidDateInterval = _React$useState4[0],
      setIsValidDateInterval = _React$useState4[1];

  var formattedMin = (0,date_utils/* stripTime */.xR)(minDate);

  var setDate = function setDate(changeField, date) {
    var newInterval = getNewInterval(tmpDateInterval, changeField, date);
    setTmpDateInterval(newInterval); // Add warning in case fromDate is after toDate

    if ((0,date_utils/* isValidDate */.qb)(newInterval.from) && (0,date_utils/* isValidDate */.qb)(newInterval.to) && newInterval.from > newInterval.to) {
      setIsValidDateInterval(false);
    } else if ((0,date_utils/* isValidDate */.qb)(newInterval.from) && (0,date_utils/* isValidDate */.qb)(newInterval.to) && newInterval.from < newInterval.to) {
      setIsValidDateInterval(true);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(PopupMenu/* default */.Z, {
    placement: "bottom-start",
    onClose: function onClose() {
      return setTmpDateInterval(intervalFromValue);
    },
    Button: function Button(_ref2) {
      var onClick = _ref2.onClick;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(TriggerContainer, _objectSpread(_objectSpread({
        onClick: onClick,
        id: inputId,
        "data-cy": "period-filter"
      }, props), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "space-between",
          alignItems: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DateRange, {
            from: parseDateForDateRange(intervalFromValue.from, false),
            to: parseDateForDateRange(intervalFromValue.to, true),
            isUTC: intervalFromValue.timezoneType === 'UTC'
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ChevronDown_esm/* ChevronDown */._, {
            size: 25,
            color: "#cccccc"
          })]
        })
      }));
    },
    children: function children(_ref3) {
      var setOpen = _ref3.setOpen;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        mx: "8px",
        my: "8px",
        width: "190px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(PeriodFilterPresetsSelect/* default */.Z, {
            inputId: "".concat(inputId, "-presets-select"),
            onChange: setTmpDateInterval,
            interval: tmpDateInterval
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          name: "timezoneType",
          mt: "12px",
          labelFontSize: "16px",
          labelFontWeight: "700",
          label: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
            alignItems: "center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
              mr: 1,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "7nUCu9",
                defaultMessage: [{
                  "type": 0,
                  "value": "Timezone"
                }]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTooltip/* default */.Z, {
              content: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "9sbPks",
                defaultMessage: [{
                  "type": 0,
                  "value": "By default, all dates are filtered and displayed using your local timezone. You can switch to UTC to indicate that the dates provided above use the Coordinated Universal Time format, which matches how email reports are generated"
                }]
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircle_esm/* InfoCircle */.Z, {
                size: 16
              })
            })]
          }),
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButtonSet/* default */.Z, _objectSpread(_objectSpread({}, inputProps), {}, {
              size: "tiny",
              items: ['local', 'UTC'],
              buttonProps: {
                p: 1,
                fontSize: '13px',
                fontWeight: 400
              },
              selected: tmpDateInterval.timezoneType,
              buttonPropsBuilder: function buttonPropsBuilder(_ref4) {
                var item = _ref4.item;
                return {
                  title: getTimeZoneTypeName(intl, item)
                };
              },
              onChange: function onChange(timezoneType) {
                setTmpDateInterval(_objectSpread(_objectSpread({}, tmpDateInterval), {}, {
                  timezoneType: timezoneType
                }));
              },
              children: function children(_ref5) {
                var item = _ref5.item;

                switch (item) {
                  case 'local':
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "W4SaxY",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Local"
                      }]
                    });

                  case 'UTC':
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "pbQZea",
                      defaultMessage: [{
                        "type": 0,
                        "value": "UTC"
                      }]
                    });
                }
              }
            }));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              type: "date",
              width: "100%",
              closeOnSelect: true,
              lineHeight: 1,
              fontSize: "13px",
              value: tmpDateInterval.from,
              min: formattedMin,
              onChange: function onChange(e) {
                return setDate('from', e.target.value);
              }
            }));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputField/* default */.Z, {
          label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
          children: function children(inputProps) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput/* default */.ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              type: "date",
              width: "100%",
              closeOnSelect: true,
              lineHeight: 1,
              fontSize: "13px",
              value: tmpDateInterval.to,
              min: formattedMin,
              max: (0,date_utils/* stripTime */.xR)(new Date()),
              onChange: function onChange(e) {
                return setDate('to', e.target.value);
              }
            }));
          }
        }), !isValidDateInterval && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
          display: "block",
          color: "red.500",
          pt: 2,
          fontSize: "10px",
          lineHeight: "14px",
          "aria-live": "assertive",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "P6fesn",
            defaultMessage: [{
              "type": 0,
              "value": "Start Date should be before the End Date"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          mt: 2,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            buttonSize: "medium",
            mr: 2,
            mt: "12px",
            flex: "1",
            onClick: function onClick() {
              setTmpDateInterval(DEFAULT_INTERVAL);
              setIsValidDateInterval(true);
              setOpen(false);
              onChange(null);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Reset",
              defaultMessage: [{
                "type": 0,
                "value": "Reset"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            buttonSize: "medium",
            buttonStyle: "primary",
            mt: "12px",
            "data-cy": "btn-apply-period-filter",
            flex: "1",
            onClick: function onClick() {
              onChange(tmpDateInterval);
              setOpen(false);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Apply",
              defaultMessage: [{
                "type": 0,
                "value": "Apply"
              }]
            })
          })]
        })]
      });
    }
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
/* harmony default export */ var filters_PeriodFilter = (PeriodFilter);

/***/ })

}]);
//# sourceMappingURL=9711-fed8b0950bd02137.js.map