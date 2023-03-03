"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4674],{

/***/ 93765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ parseAmountRange; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86896);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17632);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);




var _excluded = ["currency", "onChange", "value", "steps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var OPTION_LABELS = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
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
var parseAmountRange = function parseAmountRange(strValue) {
  if (!strValue) {
    return [];
  } else if (strValue.endsWith('+')) {
    return [parseInt(strValue.slice(0, -1))];
  } else {
    var _strValue$split = strValue.split('-'),
        _strValue$split2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_strValue$split, 2),
        minStr = _strValue$split2[0],
        maxStr = _strValue$split2[1];

    return [parseInt(minStr), parseInt(maxStr)];
  }
};

var getOption = function getOption(intl, currency, minAmount, maxAmount) {
  var locale = intl.locale;
  return {
    value: maxAmount ? "".concat(minAmount, "-").concat(maxAmount) : "".concat(minAmount, "+"),
    label: intl.formatMessage(OPTION_LABELS[maxAmount ? 'rangeFromTo' : 'rangeFrom'], {
      minAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .formatCurrency */ .xG)(minAmount * 100, currency, {
        precision: 0,
        locale: locale
      }),
      maxAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .formatCurrency */ .xG)(maxAmount * 100, currency, {
        precision: 0,
        locale: locale
      })
    })
  };
};

var AmountFilter = function AmountFilter(_ref) {
  var currency = _ref.currency,
      _onChange = _ref.onChange,
      value = _ref.value,
      steps = _ref.steps,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
  var allExpensesOption = {
    label: intl.formatMessage(OPTION_LABELS.ALL),
    value: 'ALL'
  };
  var options = react__WEBPACK_IMPORTED_MODULE_4__.useMemo(function () {
    return [allExpensesOption].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(steps.map(function (step, idx) {
      return getOption(intl, currency, step, steps[idx + 1]);
    })));
  }, [steps]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_6__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "expenses-amount-filter",
    "data-cy": "expenses-filter-amount",
    value: value ? getOption.apply(void 0, [intl, currency].concat(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(parseAmountRange(value)))) : allExpensesOption,
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
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
/* harmony default export */ __webpack_exports__["Z"] = (AmountFilter);

/***/ }),

/***/ 47318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ expenses_ExpensesFilters; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/constants/expense-status.ts
var expense_status = __webpack_require__(38083);
// EXTERNAL MODULE: ./lib/date-utils.js
var date_utils = __webpack_require__(15078);
// EXTERNAL MODULE: ./components/budget/filters/AmountFilter.js
var AmountFilter = __webpack_require__(93765);
// EXTERNAL MODULE: ./components/filters/PeriodFilter.tsx + 1 modules
var PeriodFilter = __webpack_require__(4062);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/expenses/filters/ExpensesOrder.js
var ExpensesOrder = __webpack_require__(78877);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./lib/constants/payout-method.js
var payout_method = __webpack_require__(56508);
// EXTERNAL MODULE: ./lib/i18n/payout-method-type.js
var payout_method_type = __webpack_require__(17133);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/StyledSelectFilter.js
var StyledSelectFilter = __webpack_require__(52847);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/expenses/filters/ExpensesPayoutTypeFilter.js



var _excluded = ["onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var ExpensesPayoutTypeFilter = function ExpensesPayoutTypeFilter(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var intl = (0,useIntl/* default */.Z)();

  var getOption = function getOption(value) {
    return {
      label: (0,payout_method_type/* default */.Z)(intl, value),
      value: value
    };
  };

  var options = [getOption('ALL')].concat(toConsumableArray_default()(Object.values(payout_method/* PayoutMethodType */.Nk).map(getOption)));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelectFilter/* StyledSelectFilter */.V, _objectSpread({
    inputId: "expenses-payout-type-filter",
    options: options.sort(utils/* sortSelectOptions */.V_),
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
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
/* harmony default export */ var filters_ExpensesPayoutTypeFilter = (ExpensesPayoutTypeFilter);
// EXTERNAL MODULE: ./lib/i18n/expense.js
var expense = __webpack_require__(8480);
;// CONCATENATED MODULE: ./components/expenses/filters/ExpensesStatusFilter.js



var ExpensesStatusFilter_excluded = ["value", "onChange", "ignoredExpenseStatus"];

function ExpensesStatusFilter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpensesStatusFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpensesStatusFilter_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpensesStatusFilter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var IGNORED_EXPENSE_STATUS = [expense_status/* default.DRAFT */.Z.DRAFT, expense_status/* default.UNVERIFIED */.Z.UNVERIFIED];

var getOption = function getOption(intl, value) {
  return {
    label: (0,expense/* i18nExpenseStatus */.zr)(intl, value),
    value: value
  };
};

var getOptions = function getOptions(intl, ignoredExpenseStatus) {
  var filteredStatuses = ignoredExpenseStatus ? Object.values(expense_status/* default */.Z).filter(function (s) {
    return !ignoredExpenseStatus.includes(s);
  }) : Object.values(expense_status/* default */.Z);
  return ['ALL'].concat(toConsumableArray_default()(filteredStatuses), ['READY_TO_PAY']).map(function (status) {
    return getOption(intl, status);
  });
};

var ExpenseStatusFilter = function ExpenseStatusFilter(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      _ref$ignoredExpenseSt = _ref.ignoredExpenseStatus,
      ignoredExpenseStatus = _ref$ignoredExpenseSt === void 0 ? IGNORED_EXPENSE_STATUS : _ref$ignoredExpenseSt,
      props = objectWithoutProperties_default()(_ref, ExpensesStatusFilter_excluded);

  var intl = (0,useIntl/* default */.Z)();
  var sortedOptions = react.useMemo(function () {
    return getOptions(intl, ignoredExpenseStatus).sort(utils/* sortSelectOptions */.V_);
  }, [ignoredExpenseStatus]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelectFilter/* StyledSelectFilter */.V, ExpensesStatusFilter_objectSpread({
    inputId: "expenses-status-filter",
    "data-cy": "expenses-filter-status",
    options: sortedOptions,
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
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
/* harmony default export */ var ExpensesStatusFilter = (ExpenseStatusFilter);
// EXTERNAL MODULE: ./lib/constants/expenseTypes.ts
var expenseTypes = __webpack_require__(19878);
;// CONCATENATED MODULE: ./components/expenses/filters/ExpensesTypeFilter.js


var ExpensesTypeFilter_excluded = ["onChange", "value"];

function ExpensesTypeFilter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpensesTypeFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpensesTypeFilter_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpensesTypeFilter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var ExpenseTypeFilter = function ExpenseTypeFilter(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value,
      props = objectWithoutProperties_default()(_ref, ExpensesTypeFilter_excluded);

  var intl = (0,useIntl/* default */.Z)();

  var getOption = function getOption(value) {
    return {
      label: (0,expense/* i18nExpenseType */.kD)(intl, value),
      value: value
    };
  };

  var expenseTypeKeys = Object.keys(expenseTypes/* default */.Z);
  expenseTypeKeys.unshift('ALL');
  var options = expenseTypeKeys.map(getOption);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSelectFilter/* StyledSelectFilter */.V, ExpensesTypeFilter_objectSpread({
    inputId: "expenses-type-filter",
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
    value: getOption(value || 'ALL'),
    options: options.sort(utils/* sortSelectOptions */.V_)
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
/* harmony default export */ var ExpensesTypeFilter = (ExpenseTypeFilter);
;// CONCATENATED MODULE: ./components/expenses/ExpensesFilters.js


function ExpensesFilters_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpensesFilters_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpensesFilters_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpensesFilters_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var FilterContainer = styled_components_browser_esm/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ExpensesFilters__FilterContainer",
  componentId: "sc-upgccp-0"
})(["margin-bottom:8px;flex:1 1 120px;"]);
var FilterLabel = styled_components_browser_esm/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "ExpensesFilters__FilterLabel",
  componentId: "sc-upgccp-1"
})(["font-weight:600;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#9d9fa3;"]);

var ExpensesFilters = function ExpensesFilters(_ref) {
  var collective = _ref.collective,
      filters = _ref.filters,
      _onChange = _ref.onChange,
      ignoredExpenseStatus = _ref.ignoredExpenseStatus,
      _ref$showOrderFilter = _ref.showOrderFilter,
      showOrderFilter = _ref$showOrderFilter === void 0 ? true : _ref$showOrderFilter,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? true : _ref$wrap;

  var getFilterProps = function getFilterProps(name, valueModifier) {
    return {
      inputId: "expenses-filter-".concat(name),
      value: filters === null || filters === void 0 ? void 0 : filters[name],
      onChange: function onChange(value) {
        var preparedValue = valueModifier ? valueModifier(value) : value;

        _onChange(ExpensesFilters_objectSpread(ExpensesFilters_objectSpread({}, filters), {}, defineProperty_default()({}, name, value === 'ALL' ? null : preparedValue)));
      }
    };
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexWrap: ['wrap', null, wrap ? 'wrap' : 'nowrap'],
    gap: "18px",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterLabel, {
        htmlFor: "expenses-filter-type",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "expense.type",
          defaultMessage: [{
            "type": 0,
            "value": "Type"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExpensesTypeFilter, ExpensesFilters_objectSpread({}, getFilterProps('type')))]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterLabel, {
        htmlFor: "expenses-filter-payout",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Payout",
          defaultMessage: [{
            "type": 0,
            "value": "Payout"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(filters_ExpensesPayoutTypeFilter, ExpensesFilters_objectSpread({}, getFilterProps('payout')))]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterLabel, {
        htmlFor: "expenses-filter-period",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Period",
          defaultMessage: [{
            "type": 0,
            "value": "Period"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PeriodFilter/* default */.Z, ExpensesFilters_objectSpread(ExpensesFilters_objectSpread({}, getFilterProps('period', date_utils/* encodeDateInterval */.EB)), {}, {
        minDate: collective.createdAt
      }))]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterLabel, {
        htmlFor: "expenses-filter-amount",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "Fields.amount",
          defaultMessage: [{
            "type": 0,
            "value": "Amount"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(AmountFilter/* default */.Z, ExpensesFilters_objectSpread({
        currency: collective.currency
      }, getFilterProps('amount')))]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterLabel, {
        htmlFor: "expenses-filter-status",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "expense.status",
          defaultMessage: [{
            "type": 0,
            "value": "Status"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExpensesStatusFilter, ExpensesFilters_objectSpread(ExpensesFilters_objectSpread({}, getFilterProps('status')), {}, {
        ignoredExpenseStatus: ignoredExpenseStatus
      }))]
    }), showOrderFilter && /*#__PURE__*/(0,jsx_runtime.jsxs)(FilterContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterLabel, {
        htmlFor: "expenses-order",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "expense.order",
          defaultMessage: [{
            "type": 0,
            "value": "Order"
          }]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExpensesOrder/* default */.Z, ExpensesFilters_objectSpread({}, getFilterProps('orderBy')))]
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
/* harmony default export */ var expenses_ExpensesFilters = (/*#__PURE__*/react.memo(ExpensesFilters));

/***/ }),

/***/ 11221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7980);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10438);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var _lib_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10066);
/* harmony import */ var _budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13467);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













var ExpenseContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "ExpensesList__ExpenseContainer",
  componentId: "sc-1tn2ydt-0"
})(["", ""], function (props) {
  return !props.isFirst && (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* .css */ .iv)(["border-top:1px solid #e6e8eb;"]);
});
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].div.withConfig */ .ZP.div.withConfig({
  displayName: "ExpensesList__FooterContainer",
  componentId: "sc-1tn2ydt-1"
})(["padding:16px 27px;border-top:1px solid #e6e8eb;"]);
var FooterLabel = styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"].span.withConfig */ .ZP.span.withConfig({
  displayName: "ExpensesList__FooterLabel",
  componentId: "sc-1tn2ydt-2"
})(["font-size:15px;margin-right:5px;text-transform:uppercase;"]);

var ExpensesTotal = function ExpensesTotal(_ref) {
  var collective = _ref.collective,
      host = _ref.host,
      expenses = _ref.expenses,
      expenseFieldForTotalAmount = _ref.expenseFieldForTotalAmount;

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    var isApproximate = false;
    var total = 0;

    var _iterator = _createForOfIteratorHelper(expenses),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _expense$expenseField, _expense$expenseField2, _expense$expenseField3;

        var expense = _step.value;
        total += ((_expense$expenseField = expense[expenseFieldForTotalAmount]) === null || _expense$expenseField === void 0 ? void 0 : _expense$expenseField.valueInCents) || expense.amount;

        if ((_expense$expenseField2 = expense[expenseFieldForTotalAmount]) !== null && _expense$expenseField2 !== void 0 && (_expense$expenseField3 = _expense$expenseField2.exchangeRate) !== null && _expense$expenseField3 !== void 0 && _expense$expenseField3.isApproximate) {
          isApproximate = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return {
      total: total,
      isApproximate: isApproximate
    };
  }, [expenses]),
      total = _React$useMemo.total,
      isApproximate = _React$useMemo.isApproximate;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [isApproximate && "~ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      amount: total,
      currency: (collective === null || collective === void 0 ? void 0 : collective.currency) || (host === null || host === void 0 ? void 0 : host.currency),
      precision: 2
    })]
  });
};

var ExpensesList = function ExpensesList(_ref2) {
  var collective = _ref2.collective,
      host = _ref2.host,
      expenses = _ref2.expenses,
      isLoading = _ref2.isLoading,
      nbPlaceholders = _ref2.nbPlaceholders,
      isInverted = _ref2.isInverted,
      suggestedTags = _ref2.suggestedTags,
      view = _ref2.view,
      onDelete = _ref2.onDelete,
      onProcess = _ref2.onProcess,
      expenseFieldForTotalAmount = _ref2.expenseFieldForTotalAmount;

  if (!(expenses !== null && expenses !== void 0 && expenses.length) && !isLoading) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    children: [isLoading ? _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(new Array(nbPlaceholders)).map(function (_, idx) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ExpenseContainer, {
          isFirst: !idx,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            isLoading: true
          })
        }, idx)
      );
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_flip_move__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      enterAnimation: "fade",
      leaveAnimation: "fade",
      disableAllAnimations: _lib_animations__WEBPACK_IMPORTED_MODULE_2__/* .DISABLE_ANIMATIONS */ .t,
      children: expenses.map(function (expense, idx) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ExpenseContainer, {
          isFirst: !idx,
          "data-cy": "expense-".concat(expense.status),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_budget_ExpenseBudgetItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            isInverted: isInverted,
            expense: expense,
            host: host,
            showProcessActions: true,
            view: view,
            onDelete: onDelete,
            onProcess: onProcess,
            suggestedTags: suggestedTags
          })
        }, expense.id);
      })
    }), !isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FooterContainer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        flexDirection: ['row', 'column'],
        mt: [3, 0],
        flexWrap: "wrap",
        alignItems: ['center', 'flex-end'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
          my: 2,
          mr: [3, 0],
          minWidth: 100,
          justifyContent: "flex-end",
          "data-cy": "transaction-amount",
          flexDirection: "column",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            alignSelf: "flex-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(FooterLabel, {
              color: "black.500",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                id: "expense.page.total",
                defaultMessage: [{
                  "type": 0,
                  "value": "Page Total"
                }]
              }), ":"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FooterLabel, {
              color: "black.500",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ExpensesTotal, {
                expenses: expenses,
                collective: collective,
                host: host,
                expenseFieldForTotalAmount: expenseFieldForTotalAmount
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
            fontSize: "12px",
            color: "black.600",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
/* harmony default export */ __webpack_exports__["Z"] = (ExpensesList);

/***/ }),

/***/ 78877:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ parseChronologicalOrderInput; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);



var _excluded = ["onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var ExpensesOrder = function ExpensesOrder(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  var options = [{
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_4__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "expenses-order",
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
    value: options.find(function (o) {
      return o.value === value;
    }),
    options: options,
    defaultValue: options[0]
  }, props));
};

var parseChronologicalOrderInput = function parseChronologicalOrderInput(str) {
  var _str$split = str.split(','),
      _str$split2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_str$split, 2),
      field = _str$split2[0],
      direction = _str$split2[1];

  return {
    field: field,
    direction: direction
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
/* harmony default export */ __webpack_exports__["Z"] = (ExpensesOrder);

/***/ })

}]);
//# sourceMappingURL=4674-591440f7b3304b9b.js.map