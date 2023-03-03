"use strict";
exports.id = 3112;
exports.ids = [3112];
exports.modules = {

/***/ 35493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5700);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["collective", "expense"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const LinkExpense = _ref => {
  let {
    collective,
    expense
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const parentCollectiveSlugRoute = collective.parent?.slug ? `/${collective.parent.slug}/${(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_1__/* .getCollectiveTypeForUrl */ .rf)(collective)}` : '';
  const expenseId = expense.legacyId || expense.id;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _objectSpread({
    href: `${parentCollectiveSlugRoute}/${collective.slug}/expenses/${expenseId}`
  }, props));
};

LinkExpense.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LinkExpense",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
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
      "required": true
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
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkExpense);

/***/ }),

/***/ 32133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5993);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePicker__WEBPACK_IMPORTED_MODULE_3__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_4__]);
([_CollectivePicker__WEBPACK_IMPORTED_MODULE_3__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SELECT_STYLES = (0,_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_5__/* .getSelectFilterStyles */ .v)();

const getCustomOptions = (intl, account) => {
  const options = [{
    value: account,
    isCustomOption: true,
    label: intl.formatMessage((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessage)({
      id: "ev5iix",
      defaultMessage: [{
        "type": 0,
        "value": "Own account"
      }]
    }))
  }];

  if (account?.childrenAccounts?.totalCount > 0) {
    options.push({
      id: '__CHILDREN_ACCOUNTS__',
      isCustomOption: true,
      label: intl.formatMessage((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessage)({
        id: "tHJuXX",
        defaultMessage: [{
          "type": 0,
          "value": "All children accounts"
        }]
      }))
    });
  }

  if (account?.isHost) {
    options.push({
      id: '__HOSTED_ACCOUNTS__',
      isCustomOption: true,
      label: intl.formatMessage((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessage)({
        id: "M7USSD",
        defaultMessage: [{
          "type": 0,
          "value": "All hosted accounts"
        }]
      }))
    });
  }

  return options;
};

const encodeOptions = options => {
  return !Array.isArray(options) ? options.id : options.map(option => option.value.slug).join(',');
};

const decodeOption = (customOptions, value) => {
  if (!value) {
    return customOptions[0];
  } else if (value === '__CHILDREN_ACCOUNTS__') {
    return customOptions.find(option => option.id === '__CHILDREN_ACCOUNTS__');
  } else if (value === '__HOSTED_ACCOUNTS__') {
    return customOptions.find(option => option.id === '__HOSTED_ACCOUNTS__');
  } else {
    return value.split(',').map(slug => ({
      value: {
        slug
      },
      label: slug
    }));
  }
};

const ActivityAccountFilter = ({
  account,
  value,
  onChange
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const customOptions = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getCustomOptions(intl, account), [account]);
  const selectedOption = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => decodeOption(customOptions, value), [customOptions, value]);
  const isMulti = Array.isArray(selectedOption);

  const dispatchOptionsChange = options => onChange(encodeOptions(options)); // If selectedOption wasn't set while there's a value, it means that the value is invalid. In this case we reset to the default value.


  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (account && value && !selectedOption) {
      dispatchOptionsChange(customOptions[0]);
    }
  }, [account, value, selectedOption]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    inputId: "activity-filter-account",
    isMulti: isMulti,
    preload: true,
    useCompactMode: true,
    isLoading: !account,
    disabled: !account,
    types: [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.EVENT */ .eV.EVENT, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.PROJECT */ .eV.PROJECT, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveType.FUND */ .eV.FUND],
    hostCollectiveIds: account?.isHost ? [account?.legacyId] : null,
    parentCollectiveIds: !account?.isHost ? [account?.legacyId] : null,
    customOptions: customOptions,
    customOptionsPosition: _CollectivePicker__WEBPACK_IMPORTED_MODULE_3__/* .CUSTOM_OPTIONS_POSITION.TOP */ .W1.TOP,
    value: selectedOption,
    fontSize: "12px",
    lineHeight: "14px",
    styles: SELECT_STYLES,
    onChange: (options, event) => {
      if (event.action === 'select-option') {
        const selectedOption = isMulti ? event.option : options;

        if (selectedOption.isCustomOption) {
          dispatchOptionsChange(selectedOption); // Switch back to single mode when selecting a custom option
        } else {
          dispatchOptionsChange(Array.isArray(options) ? options : [options]); // Switch to multi mode if we pick a collective
        }
      } else if (options.length === 0) {
        dispatchOptionsChange(customOptions[0]); // Switch back to single mode when clearing the selection
      } else {
        dispatchOptionsChange(options);
      }
    }
  });
};

ActivityAccountFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ActivityAccountFilter",
  "props": {
    "account": {
      "description": "",
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
          "imageUrl": {
            "name": "string",
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "isHost": {
            "name": "bool",
            "required": false
          }
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
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityAccountFilter);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59969);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_i18n_activities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2624);
/* harmony import */ var _lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92476);
/* harmony import */ var _lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66465);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25896);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97619);
/* harmony import */ var _LinkExpense__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35493);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const ActivityDescription = ({
  activity
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();

  if (!_lib_i18n_activities__WEBPACK_IMPORTED_MODULE_3__/* .ActivityDescriptionI18n */ .R[activity.type]) {
    return lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(activity.type.replace('_', ' '));
  }

  return intl.formatMessage(_lib_i18n_activities__WEBPACK_IMPORTED_MODULE_3__/* .ActivityDescriptionI18n */ .R[activity.type], {
    hasParent: Boolean(activity.account?.parent),
    FromAccount: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      collective: activity.fromAccount,
      openInNewTab: true
    }),
    Account: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      collective: activity.account,
      openInNewTab: true
    }),
    AccountType: () => (0,_lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(intl, activity.account?.type || 'COLLECTIVE'),
    AccountParent: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      collective: activity.account?.parent,
      openInNewTab: true
    }),
    Expense: msg => !activity.expense ? msg : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_LinkExpense__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      collective: activity.expense.account,
      expense: activity.expense,
      title: activity.expense.description,
      openInNewTab: true,
      children: [msg, " #", activity.expense.legacyId]
    }),
    Order: msg => !activity.order ? msg : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getCollectivePageRoute */ .x0)(activity.order.toAccount)}/orders?searchTerm=%23${activity.order.legacyId}`,
      title: activity.order.description,
      openInNewTab: true,
      children: [msg, " #", activity.order.legacyId]
    }),
    Host: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      collective: activity.host,
      openInNewTab: true
    }),
    CommentEntity: () => {
      if (activity.expense) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_LinkExpense__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          collective: activity.expense.account,
          expense: activity.expense,
          title: activity.expense.description,
          openInNewTab: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "Transaction.kind.EXPENSE",
            defaultMessage: [{
              "type": 0,
              "value": "Expense"
            }]
          }), " #", activity.expense.legacyId]
        });
      } else {
        // We're not yet linking conversations & updates to comments in the activity table
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          collective: activity.account,
          openInNewTab: true
        });
      }
    },
    MemberRole: () => {
      if (activity.data?.member?.role) {
        return (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, activity.data.member.role);
      } else if (activity.data?.invitation?.role) {
        return (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, activity.data.invitation.role);
      } else {
        return 'member';
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityDescription);

/***/ }),

/***/ 77646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "g": () => (/* binding */ DETAILED_ACTIVITY_TYPES)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CollectiveEditedDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63882);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectiveEditedDetails__WEBPACK_IMPORTED_MODULE_1__]);
_CollectiveEditedDetails__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ActivityDetailComponents = {
  COLLECTIVE_EDITED: _CollectiveEditedDetails__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveEditedDetails */ .h
};
const DETAILED_ACTIVITY_TYPES = Object.keys(ActivityDetailComponents);

const ActivityDetails = ({
  activity
}) => {
  const ActivityDetailsComponent = ActivityDetailComponents[activity.type];
  return ActivityDetailsComponent ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ActivityDetailsComponent, {
    activity: activity
  }) : null;
};

ActivityDetails.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ActivityDetails",
  "props": {
    "activity": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": true
          },
          "data": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityDetails);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55898:
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
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49106);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _ActivityAccountFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32133);
/* harmony import */ var _ActivityTypeFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52799);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__, _ActivityAccountFilter__WEBPACK_IMPORTED_MODULE_7__]);
([_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__, _ActivityAccountFilter__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu).withConfig({
  displayName: "ActivityFilters__FilterContainer",
  componentId: "sc-mbjuu6-0"
})(["margin-bottom:24px;"]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "ActivityFilters__FilterLabel",
  componentId: "sc-mbjuu6-1"
})(["font-weight:600;font-size:9px;line-height:14px;letter-spacing:0.6px;text-transform:uppercase;color:#9d9fa3;"]);

const ActivityFilters = ({
  filters,
  onChange,
  account
}) => {
  const getFilterProps = (name, valueModifier) => {
    return {
      inputId: `activity-filter-${name}`,
      value: filters?.[name],
      onChange: value => {
        const preparedValue = valueModifier ? valueModifier(value) : value;
        onChange(_objectSpread(_objectSpread({}, filters), {}, {
          [name]: value === 'ALL' ? null : preparedValue
        }));
      }
    };
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexWrap: "wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(FilterContainer, {
        width: [1, 1 / 3, 1 / 3],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(FilterLabel, {
          htmlFor: "activity-filter-period",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Period",
            defaultMessage: [{
              "type": 0,
              "value": "Period"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_filters_PeriodFilter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread({}, getFilterProps('period', _lib_date_utils__WEBPACK_IMPORTED_MODULE_3__/* .encodeDateInterval */ .EB)))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(FilterContainer, {
        width: [1, 1 / 3, 1 / 3],
        pl: [0, '19px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(FilterLabel, {
          htmlFor: "activity-filter-type",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "ZmlNQ3",
            defaultMessage: [{
              "type": 0,
              "value": "Activity"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_ActivityTypeFilter__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread({
          account: account
        }, getFilterProps('type')))]
      }), (account?.isHost || account?.childrenAccounts?.totalCount > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(FilterContainer, {
        width: [1, 1 / 3, 1 / 3],
        pl: [0, '19px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(FilterLabel, {
          htmlFor: "activity-filter-account",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "TwyMau",
            defaultMessage: [{
              "type": 0,
              "value": "Account"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_ActivityAccountFilter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread({
          account: account
        }, getFilterProps('account')))]
      })]
    })
  });
};

ActivityFilters.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ActivityFilters",
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
    "account": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "isHost": {
            "name": "bool",
            "required": false
          },
          "childrenAccounts": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ActivityFilters));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89711);
/* harmony import */ var _styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76841);
/* harmony import */ var _styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11194);
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95370);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97619);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var _ActivityDescription__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2765);
/* harmony import */ var _ActivityDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77646);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ActivityDetails__WEBPACK_IMPORTED_MODULE_14__]);
_ActivityDetails__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const MetadataContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "ActivityListItem__MetadataContainer",
  componentId: "sc-4cqeq4-0"
})(["display:flex;align-items:center;grid-gap:8px;color:#4d4f51;a{color:#4d4f51;text-decoration:none;&:hover{color:#4e5052;}}"]);
const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "ActivityListItem__DetailsContainer",
  componentId: "sc-4cqeq4-1"
})(["width:100%;padding:16px;background:", ";box-shadow:0px 0px 6px 4px #1e1e1e inset;color:white;margin-top:16px;font-size:12px;border-radius:4px;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.800'));

const ActivityListItem = ({
  activity
}) => {
  const [showDetails, setShowDetails] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
    px: "16px",
    py: "14px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
      color: "black.900",
      fontWeight: "500",
      fontSize: "14px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ActivityDescription__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        activity: activity
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      justifyContent: "space-between",
      alignItems: "center",
      mt: "10px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(MetadataContainer, {
        children: [activity.isSystem ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "95dooH",
            defaultMessage: [{
              "type": 0,
              "value": "System Activity"
            }]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "ByUser",
          defaultMessage: [{
            "type": 0,
            "value": "By "
          }, {
            "type": 1,
            "value": "userName"
          }],
          values: {
            userName: !activity.individual ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "user.Unknown",
                defaultMessage: [{
                  "type": 0,
                  "value": "Unknown"
                }]
              })
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              as: _LinkCollective__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
              color: "black.700",
              collective: activity.individual,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
                alignItems: "center",
                gridGap: "8px",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                  radius: 24,
                  collective: activity.individual
                }), activity.individual.name]
              })
            })
          }
        }), "\u2022", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_DateTime__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          value: activity.createdAt,
          dateStyle: "medium"
        })]
      }), _ActivityDetails__WEBPACK_IMPORTED_MODULE_14__/* .DETAILED_ACTIVITY_TYPES.includes */ .g.includes(activity.type) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        ml: 12,
        isBorderless: true,
        buttonStyle: "secondary",
        buttonSize: "tiny",
        onClick: () => setShowDetails(!showDetails),
        children: [!showDetails ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "kRqDOg",
          defaultMessage: [{
            "type": 0,
            "value": "Show Details"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "jBYmhn",
          defaultMessage: [{
            "type": 0,
            "value": "Hide Details"
          }]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          ml: 1,
          children: showDetails ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_styled_icons_feather_ChevronUp__WEBPACK_IMPORTED_MODULE_2__.ChevronUp, {
            size: "1em",
            strokeWidth: "3px"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_styled_icons_feather_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
            size: "1em",
            strokeWidth: "3px"
          })
        })]
      })]
    }), showDetails && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(DetailsContainer, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ActivityDetails__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        activity: activity
      })
    })]
  });
};

ActivityListItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ActivityListItem",
  "props": {
    "activity": {
      "description": "",
      "type": {
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
          "createdAt": {
            "name": "string",
            "required": true
          },
          "individual": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "isSystem": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityListItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ isSupportedActivityTypeFilter),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_activities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70756);
/* harmony import */ var _lib_i18n_activities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2624);
/* harmony import */ var _StyledSelectFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52847);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

const _excluded = ["account", "onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ActivityCategories = {
  HOST: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "Member.Role.HOST",
      defaultMessage: [{
        "type": 0,
        "value": "Host"
      }]
    }),
    activities: ['COLLECTIVE_APPLY', 'COLLECTIVE_APPROVED', 'COLLECTIVE_REJECTED', 'COLLECTIVE_CREATED_GITHUB']
  },
  EXPENSES: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "Expenses",
      defaultMessage: [{
        "type": 0,
        "value": "Expenses"
      }]
    }),
    activities: ['COLLECTIVE_EXPENSE_CREATED', 'COLLECTIVE_EXPENSE_DELETED', 'COLLECTIVE_EXPENSE_UPDATED', 'COLLECTIVE_EXPENSE_REJECTED', 'COLLECTIVE_EXPENSE_APPROVED', 'COLLECTIVE_EXPENSE_UNAPPROVED', 'COLLECTIVE_EXPENSE_PAID', 'COLLECTIVE_EXPENSE_MARKED_AS_UNPAID', 'COLLECTIVE_EXPENSE_MARKED_AS_SPAM', 'COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE', 'COLLECTIVE_EXPENSE_PROCESSING', 'COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT', 'COLLECTIVE_EXPENSE_ERROR', 'COLLECTIVE_EXPENSE_INVITE_DRAFTED', 'COLLECTIVE_EXPENSE_RECURRING_DRAFTED', 'COLLECTIVE_EXPENSE_MOVED', 'EXPENSE_COMMENT_CREATED', 'TAXFORM_REQUEST']
  },
  ACCOUNTS: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "FvanT6",
      defaultMessage: [{
        "type": 0,
        "value": "Accounts"
      }]
    }),
    activities: ['COLLECTIVE_CREATED', 'COLLECTIVE_EDITED', 'COLLECTIVE_FROZEN', 'COLLECTIVE_UNFROZEN', 'COLLECTIVE_CONTACT', 'CONNECTED_ACCOUNT_CREATED']
  },
  CONTRIBUTIONS: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "Contributions",
      defaultMessage: [{
        "type": 0,
        "value": "Contributions"
      }]
    }),
    activities: ['SUBSCRIPTION_CANCELED', 'SUBSCRIPTION_ACTIVATED', 'SUBSCRIPTION_CONFIRMED', 'CONTRIBUTION_REJECTED', 'TICKET_CONFIRMED', 'ORDER_CANCELED_ARCHIVED_COLLECTIVE', 'ORDER_PROCESSING', 'ORDER_PROCESSING_CRYPTO', 'ORDER_PENDING_CONTRIBUTION_NEW', 'ORDER_THANKYOU', 'ORDERS_SUSPICIOUS', 'PAYMENT_FAILED']
  },
  UPDATES: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "tCZ0vE",
      defaultMessage: [{
        "type": 0,
        "value": "Updates & Conversations"
      }]
    }),
    activities: ['COLLECTIVE_UPDATE_CREATED', 'COLLECTIVE_UPDATE_PUBLISHED', 'UPDATE_COMMENT_CREATED', 'CONVERSATION_COMMENT_CREATED', 'COLLECTIVE_CONVERSATION_CREATED']
  },
  MEMBERS: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "+a+2ug",
      defaultMessage: [{
        "type": 0,
        "value": "Members"
      }]
    }),
    activities: ['COLLECTIVE_MEMBER_INVITED', 'COLLECTIVE_CORE_MEMBER_ADDED', 'COLLECTIVE_CORE_MEMBER_INVITED', 'COLLECTIVE_CORE_MEMBER_INVITATION_DECLINED', 'COLLECTIVE_CORE_MEMBER_REMOVED', 'COLLECTIVE_CORE_MEMBER_EDITED']
  },
  VIRTUAL_CARDS: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "VirtualCards.Title",
      defaultMessage: [{
        "type": 0,
        "value": "Virtual Cards"
      }]
    }),
    activities: ['COLLECTIVE_VIRTUAL_CARD_SUSPENDED', 'COLLECTIVE_VIRTUAL_CARD_ADDED', 'VIRTUAL_CARD_REQUESTED', 'VIRTUAL_CARD_CHARGE_DECLINED']
  },
  GIFT_CARDS: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "editCollective.menu.giftCards",
      defaultMessage: [{
        "type": 0,
        "value": "Gift Cards"
      }]
    }),
    activities: ['USER_CARD_CLAIMED', 'USER_CARD_INVITED']
  },
  USER: {
    title: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
      id: "jeJ/r2",
      defaultMessage: [{
        "type": 0,
        "value": "User Account"
      }]
    }),
    activities: ['USER_CREATED', 'USER_NEW_TOKEN', 'USER_CHANGE_EMAIL']
  }
};
const isSupportedActivityTypeFilter = (account, value) => {
  const allowedValues = new Set(Object.keys(_lib_constants_activities__WEBPACK_IMPORTED_MODULE_4__/* .ActivityTypes */ .II));

  if (account) {
    if (account.slug !== 'opensource') {
      allowedValues.delete('COLLECTIVE_CREATED_GITHUB');
    }

    if (!(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__/* .isIndividualAccount */ .Sh)(account)) {
      ActivityCategories.USER.activities.forEach(activity => allowedValues.delete(activity));
    }
  }

  return !value || allowedValues.has(value);
};

const getOption = (intl, activityType) => ({
  label: _lib_i18n_activities__WEBPACK_IMPORTED_MODULE_5__/* .ActivityTypeI18n */ .b[activityType] ? intl.formatMessage(_lib_i18n_activities__WEBPACK_IMPORTED_MODULE_5__/* .ActivityTypeI18n */ .b[activityType]) : activityType,
  value: activityType
});

const getOptions = (intl, account) => {
  // Uncomment the code below to see unclassified activities
  // const allClassified = flatten(Object.values(ActivityCategories).map(c => c.activities));
  // const unclassified = difference(Object.keys(ActivityTypes), allClassified);
  // console.log(unclassified);
  const categories = !account ? ActivityCategories : lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(ActivityCategories, (_, category) => {
    if (category === 'HOST' && !account.isHost) {
      return true;
    } else if (category === 'USER' && !(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__/* .isIndividualAccount */ .Sh)(account)) {
      return true;
    }
  });
  return [{
    label: intl.formatMessage({
      id: "WebhookEvents.All",
      defaultMessage: [{
        "type": 0,
        "value": "All"
      }]
    })
  }, ...Object.values(categories).map(({
    title,
    activities
  }) => {
    return {
      label: intl.formatMessage(title),
      options: activities.filter(activity => isSupportedActivityTypeFilter(account, activity)).map(activity => getOption(intl, activity))
    };
  })];
};

const ActivityTypeFilter = _ref => {
  let {
    account,
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const options = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => getOptions(intl, account), [account]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledSelectFilter__WEBPACK_IMPORTED_MODULE_6__/* .StyledSelectFilter */ .V, _objectSpread({
    inputId: "activity-type-filter",
    onChange: ({
      value
    }) => onChange(value),
    isLoading: !account,
    disabled: !account,
    options: options,
    value: value ? getOption(intl, value) : options[0],
    isSearchable: true
  }, props));
};

ActivityTypeFilter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ActivityTypeFilter",
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
    "account": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityTypeFilter);

/***/ }),

/***/ 63882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ CollectiveEditedDetails)
/* harmony export */ });
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35007);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20808);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98210);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94970);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([diff__WEBPACK_IMPORTED_MODULE_5__]);
diff__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const diffValues = (prevValue, newValue) => {
  if (typeof prevValue === 'string' || typeof newValue === 'string') {
    return {
      type: 'string',
      diff: (0,diff__WEBPACK_IMPORTED_MODULE_5__.diffChars)(prevValue ?? '', newValue ?? '')
    };
  } else if (Array.isArray(prevValue) || Array.isArray(newValue)) {
    return {
      type: 'array',
      diff: (0,diff__WEBPACK_IMPORTED_MODULE_5__.diffArrays)(prevValue ?? [], newValue ?? [])
    };
  } else if (typeof prevValue === 'object' || typeof newValue === 'object') {
    return {
      type: 'object',
      diff: (0,diff__WEBPACK_IMPORTED_MODULE_5__.diffJson)(prevValue ?? {}, newValue ?? {})
    };
  } else {
    return {
      type: 'default',
      diff: [{
        removed: true,
        value: JSON.stringify(prevValue)
      }, {
        added: true,
        value: JSON.stringify(newValue)
      }]
    };
  }
};

const deepCompare = (prev, next) => {
  const removedKeys = Object.keys(prev).filter(key => !lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(next, key));
  const addedKeys = Object.keys(next).filter(key => !lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(prev, key));

  const changedValues = lodash_pickBy__WEBPACK_IMPORTED_MODULE_1___default()(next, (value, key) => !addedKeys.includes(key) && prev[key] !== value);

  return [...removedKeys.map(key => ({
    action: 'remove',
    key,
    prevValue: JSON.stringify(prev[key])
  })), ...addedKeys.map(key => ({
    action: 'add',
    key,
    newValue: JSON.stringify(next[key])
  })), ...Object.keys(changedValues).map(key => ({
    action: 'update',
    key,
    newValue: next[key],
    prevValue: prev[key],
    changes: diffValues(prev[key], next[key])
  }))];
};

const DiffLine = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "CollectiveEditedDetails__DiffLine",
  componentId: "sc-rk303j-0"
})(["display:flex;margin:8px 0;"]);
const RemovedValue = styled_components__WEBPACK_IMPORTED_MODULE_7___default().span.withConfig({
  displayName: "CollectiveEditedDetails__RemovedValue",
  componentId: "sc-rk303j-1"
})(["background-color:#8b0000;text-decoration:line-through;opacity:0.45;"]);
const AddedValue = styled_components__WEBPACK_IMPORTED_MODULE_7___default().span.withConfig({
  displayName: "CollectiveEditedDetails__AddedValue",
  componentId: "sc-rk303j-2"
})(["background:#006330;"]);
const DiffedKey = styled_components__WEBPACK_IMPORTED_MODULE_7___default().span.withConfig({
  displayName: "CollectiveEditedDetails__DiffedKey",
  componentId: "sc-rk303j-3"
})(["font-weight:bold;color:orange;min-width:100px;margin-right:8px;display:block;"]);
const CollectiveEditedDetails = ({
  activity
}) => {
  const {
    newData,
    previousData
  } = activity.data ?? {};
  const fullDiff = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => deepCompare(previousData, newData), [newData, previousData]);

  if (!fullDiff.length || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(newData) && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(previousData)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "mr2kVW",
        defaultMessage: [{
          "type": 0,
          "value": "No details to show"
        }]
      })
    });
  }

  return fullDiff.map(({
    action,
    key,
    changes,
    newValue,
    prevValue
  }, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(DiffLine, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(DiffedKey, {
      children: lodash_startCase__WEBPACK_IMPORTED_MODULE_0___default()(key)
    }), action === 'remove' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(RemovedValue, {
      children: prevValue
    }) : action === 'add' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(AddedValue, {
      children: newValue
    }) : action === 'update' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      children: changes.diff.map((part, index) =>
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
        children: [part.added ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(AddedValue, {
          children: part.value
        }) : part.removed ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(RemovedValue, {
          children: part.value
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: part.value
        }), changes.type === 'array' && index < changes.diff.length - 1 && ', ', changes.type === 'default' && index < changes.diff.length - 1 && ' → ']
      }, index))
    }) : null]
  }, index));
};
CollectiveEditedDetails.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveEditedDetails",
  "props": {
    "activity": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": true
          },
          "data": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15078);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37278);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68185);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(79045);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19156);
/* harmony import */ var _ActivityFilters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55898);
/* harmony import */ var _ActivityListItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66531);
/* harmony import */ var _ActivityTypeFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(52799);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ActivityFilters__WEBPACK_IMPORTED_MODULE_17__, _ActivityListItem__WEBPACK_IMPORTED_MODULE_18__]);
([_ActivityFilters__WEBPACK_IMPORTED_MODULE_17__, _ActivityListItem__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const activityLogQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query AccountActivityLog(
    $accountSlug: String!
    $limit: Int
    $offset: Int
    $dateFrom: DateTime
    $dateTo: DateTime
    $type: [ActivityAndClassesType!]
    $account: [AccountReferenceInput!]!
    $includeHostedAccounts: Boolean
    $includeChildrenAccounts: Boolean
    $excludeParentAccount: Boolean
  ) {
    account(slug: $accountSlug) {
      id
      name
      slug
      legacyId
      isHost
      type
      ... on Collective {
        childrenAccounts {
          totalCount
        }
      }
    }
    activities(
      account: $account
      limit: $limit
      offset: $offset
      dateFrom: $dateFrom
      dateTo: $dateTo
      type: $type
      includeHostedAccounts: $includeHostedAccounts
      includeChildrenAccounts: $includeChildrenAccounts
      excludeParentAccount: $excludeParentAccount
    ) {
      offset
      limit
      totalCount
      nodes {
        id
        createdAt
        type
        data
        isSystem
        fromAccount {
          id
          name
          slug
          type
        }
        host {
          id
          name
          slug
          type
        }
        account {
          id
          name
          slug
          type
          ... on AccountWithParent {
            parent {
              id
              slug
              name
              type
            }
          }
        }
        expense {
          id
          legacyId
          description
          account {
            id
            name
            type
            slug
            ... on AccountWithParent {
              parent {
                id
                slug
              }
            }
          }
        }
        order {
          id
          legacyId
          description
          toAccount {
            id
            name
            slug
            ... on AccountWithParent {
              parent {
                id
                slug
              }
            }
          }
        }
        individual {
          id
          slug
          name
          type
          imageUrl(height: 48)
        }
      }
    }
  }
`;
const ActivityLogContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_StyledCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
  displayName: "ActivityLog__ActivityLogContainer",
  componentId: "sc-7nc21r-0"
})(["& > *:not(:last-child){border-bottom:1px solid #dcdde0;}a{color:black;text-decoration:underline dotted;&:hover{color:#4e5052;}}"]);
const ACTIVITY_LIMIT = 10;

const getQueryVariables = (accountSlug, router) => {
  const routerQuery = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(router.query, ['slug', 'section']);

  const offset = parseInt(routerQuery.offset) || 0;
  const {
    period,
    type,
    account,
    limit
  } = routerQuery;
  const {
    from: dateFrom,
    to: dateTo
  } = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_8__/* .parseDateInterval */ .dr)(period); // Account filters

  let filteredAccounts = {
    slug: accountSlug
  };
  let includeChildrenAccounts, includeHostedAccounts, excludeParentAccount;

  if (account === '__CHILDREN_ACCOUNTS__') {
    includeChildrenAccounts = true;
    excludeParentAccount = true;
  } else if (account === '__HOSTED_ACCOUNTS__') {
    includeHostedAccounts = true;
  } else if (account) {
    filteredAccounts = account.split(',').map(slug => ({
      slug
    }));
    includeChildrenAccounts = true; // By default, we include children of selected accounts
  }

  return {
    accountSlug,
    dateFrom,
    dateTo,
    limit: limit ? parseInt(limit) : ACTIVITY_LIMIT,
    offset,
    type: type,
    account: filteredAccounts,
    includeChildrenAccounts,
    excludeParentAccount,
    includeHostedAccounts
  };
};

const getChangesThatRequireUpdate = (account, queryParams) => {
  const changes = {};

  if (!account) {
    return changes;
  }

  if (!(0,_ActivityTypeFilter__WEBPACK_IMPORTED_MODULE_19__/* .isSupportedActivityTypeFilter */ .H)(account, queryParams.type)) {
    changes.type = null;
  }

  return changes;
};

const ActivityLog = ({
  accountSlug
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const routerQuery = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(router.query, ['slug', 'section']);

  const offset = parseInt(routerQuery.offset) || 0;
  const {
    data,
    loading,
    error
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(activityLogQuery, {
    variables: getQueryVariables(accountSlug, router),
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T,
    fetchPolicy: 'network-only'
  });

  const handleUpdateFilters = queryParams => {
    const pathname = router.asPath.split('?')[0];
    return router.push({
      pathname,
      query: lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, routerQuery), queryParams), value => !value)
    });
  }; // Reset type if not supported by the account


  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    const changesThatRequireUpdate = getChangesThatRequireUpdate(data?.account, routerQuery);

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(changesThatRequireUpdate)) {
      handleUpdateFilters(_objectSpread(_objectSpread({}, routerQuery), changesThatRequireUpdate));
    }
  }, [data?.account, routerQuery]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
    mt: 3,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ActivityFilters__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      filters: routerQuery,
      onChange: queryParams => handleUpdateFilters(_objectSpread(_objectSpread({}, queryParams), {}, {
        offset: null
      })),
      account: data?.account
    }), error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      error: error
    }) : loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      width: "100%",
      height: 163
    }) : !data?.activities?.nodes ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      type: "error",
      withIcon: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
        id: "mustBeAdmin",
        defaultMessage: [{
          "type": 0,
          "value": "You must be an admin of this collective to see this page"
        }]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: !data.activities.totalCount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        type: "info",
        withIcon: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "aojEGT",
          defaultMessage: [{
            "type": 0,
            "value": "No activity yet"
          }]
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ActivityLogContainer, {
        children: data.activities.nodes.map(activity => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_ActivityListItem__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          activity: activity
        }, activity.id))
      })
    }), data?.activities?.totalCount > ACTIVITY_LIMIT && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      display: "flex",
      justifyContent: "center",
      fontSize: "14px",
      my: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Pagination__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        offset: offset,
        total: data.activities.totalCount,
        limit: ACTIVITY_LIMIT,
        ignoredQueryParams: ['slug', 'section']
      })
    })]
  });
};

ActivityLog.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ActivityLog",
  "props": {
    "accountSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityLog);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ ActivityTypes),
/* harmony export */   "oD": () => (/* binding */ ActivityClasses)
/* harmony export */ });
/* unused harmony export ActivityAttribution */
const ActivityClasses = {
  COLLECTIVE: 'collectives',
  EXPENSES: 'expenses',
  CONTRIBUTIONS: 'contributions',
  ACTIVITIES_UPDATES: 'activitiesUpdates',
  VIRTUAL_CARDS: 'virtualCards',
  FUND_EVENTS: 'fundsEvents',
  REPORTS: 'reports'
};
const ActivityTypes = {
  ACTIVITY_ALL: 'all',
  CONNECTED_ACCOUNT_CREATED: 'connected_account.created',
  COLLECTIVE_CREATED: 'collective.created',
  ORGANIZATION_COLLECTIVE_CREATED: 'organization.collective.created',
  COLLECTIVE_CREATED_GITHUB: 'collective.created.github',
  COLLECTIVE_APPLY: 'collective.apply',
  COLLECTIVE_APPROVED: 'collective.approved',
  COLLECTIVE_REJECTED: 'collective.rejected',
  COLLECTIVE_EDITED: 'collective.edited',
  COLLECTIVE_CONVERSATION_CREATED: 'collective.conversation.created',
  COLLECTIVE_EXPENSE_CREATED: 'collective.expense.created',
  COLLECTIVE_EXPENSE_DELETED: 'collective.expense.deleted',
  COLLECTIVE_EXPENSE_UPDATED: 'collective.expense.updated',
  COLLECTIVE_EXPENSE_REJECTED: 'collective.expense.rejected',
  COLLECTIVE_EXPENSE_APPROVED: 'collective.expense.approved',
  COLLECTIVE_EXPENSE_UNAPPROVED: 'collective.expense.unapproved',
  COLLECTIVE_EXPENSE_PAID: 'collective.expense.paid',
  COLLECTIVE_EXPENSE_MARKED_AS_UNPAID: 'collective.expense.unpaid',
  COLLECTIVE_EXPENSE_MARKED_AS_SPAM: 'collective.expense.spam',
  COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE: 'collective.expense.incomplete',
  COLLECTIVE_EXPENSE_PROCESSING: 'collective.expense.processing',
  COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT: 'collective.expense.scheduledForPayment',
  COLLECTIVE_EXPENSE_ERROR: 'collective.expense.error',
  COLLECTIVE_EXPENSE_INVITE_DRAFTED: 'collective.expense.invite.drafted',
  COLLECTIVE_EXPENSE_RECURRING_DRAFTED: 'collective.expense.recurring.drafted',
  COLLECTIVE_EXPENSE_MISSING_RECEIPT: 'collective.expense.missing.receipt',
  COLLECTIVE_EXPENSE_MOVED: 'collective.expense.moved',
  COLLECTIVE_FROZEN: 'collective.frozen',
  COLLECTIVE_UNFROZEN: 'collective.unfrozen',
  COLLECTIVE_MONTHLY_REPORT: 'collective.monthlyreport',
  COLLECTIVE_MEMBER_INVITED: 'collective.member.invited',
  COLLECTIVE_MEMBER_CREATED: 'collective.member.created',
  COLLECTIVE_CORE_MEMBER_ADDED: 'collective.core.member.added',
  COLLECTIVE_CORE_MEMBER_INVITED: 'collective.core.member.invited',
  COLLECTIVE_CORE_MEMBER_INVITATION_DECLINED: 'collective.core.member.invitation.declined',
  COLLECTIVE_CORE_MEMBER_REMOVED: 'collective.core.member.removed',
  COLLECTIVE_CORE_MEMBER_EDITED: 'collective.core.member.edited',
  COLLECTIVE_TRANSACTION_CREATED: 'collective.transaction.created',
  COLLECTIVE_UPDATE_CREATED: 'collective.update.created',
  COLLECTIVE_UPDATE_PUBLISHED: 'collective.update.published',
  COLLECTIVE_CONTACT: 'collective.contact',
  COLLECTIVE_VIRTUAL_CARD_MISSING_RECEIPTS: 'collective.virtualcard.missing.receipts',
  COLLECTIVE_VIRTUAL_CARD_SUSPENDED: 'collective.virtualcard.suspended',
  COLLECTIVE_VIRTUAL_CARD_ADDED: 'collective.virtualcard.added',
  VIRTUAL_CARD_REQUESTED: 'virtual_card.requested',
  VIRTUAL_CARD_CHARGE_DECLINED: 'virtualcard.charge.declined',
  CONTRIBUTION_REJECTED: 'contribution.rejected',
  SUBSCRIPTION_ACTIVATED: 'subscription.activated',
  SUBSCRIPTION_CONFIRMED: 'subscription.confirmed',
  SUBSCRIPTION_CANCELED: 'subscription.canceled',
  TICKET_CONFIRMED: 'ticket.confirmed',
  USER_CREATED: 'user.created',
  USER_NEW_TOKEN: 'user.new.token',
  USER_CHANGE_EMAIL: 'user.changeEmail',
  USER_PAYMENT_METHOD_CREATED: 'user.paymentMethod.created',
  USER_CARD_CLAIMED: 'user.card.claimed',
  USER_CARD_INVITED: 'user.card.invited',
  WEBHOOK_STRIPE_RECEIVED: 'webhook.stripe.received',
  WEBHOOK_PAYPAL_RECEIVED: 'webhook.paypal.received',
  ORDER_CANCELED_ARCHIVED_COLLECTIVE: 'order.canceled.archived.collective',
  ORDER_PROCESSING: 'order.processing',
  ORDER_PROCESSING_CRYPTO: 'order.processing.crypto',
  ORDER_PENDING_CONTRIBUTION_NEW: 'order.new.pendingFinancialContribution',
  ORDER_PENDING_CONTRIBUTION_REMINDER: 'order.reminder.pendingFinancialContribution',
  ORDER_THANKYOU: 'order.thankyou',
  ORDERS_SUSPICIOUS: 'orders.suspicious',
  BACKYOURSTACK_DISPATCH_CONFIRMED: 'backyourstack.dispatch.confirmed',
  ACTIVATED_COLLECTIVE_AS_HOST: 'activated.collective.as.host',
  ACTIVATED_COLLECTIVE_AS_INDEPENDENT: 'activated.collective.as.independent',
  DEACTIVATED_COLLECTIVE_AS_HOST: 'deactivated.collective.as.host',
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_CREDITCARD_CONFIRMATION: 'payment.creditcard.confirmation',
  PAYMENT_CREDITCARD_EXPIRING: 'payment.creditcard.expiring',
  TAXFORM_REQUEST: 'taxform.request',
  COLLECTIVE_COMMENT_CREATED: 'collective.comment.created',
  CONVERSATION_COMMENT_CREATED: 'conversation.comment.created',
  UPDATE_COMMENT_CREATED: 'update.comment.created',
  EXPENSE_COMMENT_CREATED: 'expense.comment.created'
};
const ActivityAttribution = {
  // Activities initiated by this account
  AUTHORED: 'AUTHORED',
  // Activities that targeted this account
  RECEIVED: 'RECEIVED',
  // Activities where author and target both points to this account (e.g. settings update)
  SELF: 'SELF',
  // Activities that happened on accounts hosted by this account
  HOSTED_ACCOUNTS: 'HOSTED_ACCOUNTS'
};

/***/ }),

/***/ 2624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ ActivityDescriptionI18n),
/* harmony export */   "b": () => (/* binding */ ActivityTypeI18n)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const ActivityDescriptionI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  // Collective creation & applications
  COLLECTIVE_CREATED: {
    id: "vWYg/k",
    defaultMessage: [{
      "type": 8,
      "value": "AccountType",
      "children": []
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " created"
    }, {
      "type": 5,
      "value": "hasParent",
      "options": {
        "true": {
          "value": [{
            "type": 0,
            "value": " under "
          }, {
            "type": 8,
            "value": "AccountParent",
            "children": []
          }]
        },
        "other": {
          "value": []
        }
      }
    }]
  },
  COLLECTIVE_EDITED: {
    id: "A4+n4H",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " edited"
    }]
  },
  COLLECTIVE_REJECTED: {
    id: "BZnKES",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " application rejected"
    }]
  },
  ORGANIZATION_COLLECTIVE_CREATED: {
    id: "mrEGhM",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " created"
    }]
  },
  COLLECTIVE_CREATED_GITHUB: {
    id: "+UdXIM",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " created through GitHub"
    }]
  },
  COLLECTIVE_APPLY: {
    id: "K9BlUB",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " applied to be hosted by "
    }, {
      "type": 8,
      "value": "Host",
      "children": []
    }]
  },
  COLLECTIVE_APPROVED: {
    id: "elfKB7",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " application approved"
    }]
  },
  // Freezing collectives
  COLLECTIVE_FROZEN: {
    id: "A5sIUw",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " frozen"
    }]
  },
  COLLECTIVE_UNFROZEN: {
    id: "axn2o/",
    defaultMessage: [{
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " unfrozen"
    }]
  },
  // Comments & conversations
  COLLECTIVE_COMMENT_CREATED: {
    id: "DhxIpu",
    defaultMessage: [{
      "type": 0,
      "value": "New comment on "
    }, {
      "type": 8,
      "value": "CommentEntity",
      "children": []
    }]
  },
  // TODO: Link update
  UPDATE_COMMENT_CREATED: {
    id: "fqHI7A",
    defaultMessage: [{
      "type": 0,
      "value": "New comment on update"
    }]
  },
  EXPENSE_COMMENT_CREATED: {
    id: "s/pMY7",
    defaultMessage: [{
      "type": 0,
      "value": "New comment on "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }]
  },
  // TODO: Link conversation
  CONVERSATION_COMMENT_CREATED: {
    id: "6mlPiP",
    defaultMessage: [{
      "type": 0,
      "value": "New comment on conversation"
    }]
  },
  // TODO Link conversation
  COLLECTIVE_CONVERSATION_CREATED: {
    id: "aaC5Tr",
    defaultMessage: [{
      "type": 0,
      "value": "New conversation started on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Expenses
  COLLECTIVE_EXPENSE_CREATED: {
    id: "aZ/KLp",
    defaultMessage: [{
      "type": 0,
      "value": "New "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_DELETED: {
    id: "KYXMJ6",
    defaultMessage: [{
      "type": 0,
      "value": "Expense deleted"
    }]
  },
  COLLECTIVE_EXPENSE_UPDATED: {
    id: "sw+PTs",
    defaultMessage: [{
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "Expense"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " updated"
    }]
  },
  COLLECTIVE_EXPENSE_REJECTED: {
    id: "vsm06Q",
    defaultMessage: [{
      "type": 0,
      "value": "Rejected "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_APPROVED: {
    id: "wAl237",
    defaultMessage: [{
      "type": 0,
      "value": "Approved "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_UNAPPROVED: {
    id: "ONEjdp",
    defaultMessage: [{
      "type": 0,
      "value": "Unapproved "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_MOVED: {
    id: "9CxkhJ",
    defaultMessage: [{
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "Expense"
      }]
    }, {
      "type": 0,
      "value": " moved from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_PAID: {
    id: "rkfW3U",
    defaultMessage: [{
      "type": 0,
      "value": "Paid "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_MARKED_AS_UNPAID: {
    id: "CTjjop",
    defaultMessage: [{
      "type": 0,
      "value": "Marked "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " as unpaid"
    }]
  },
  COLLECTIVE_EXPENSE_MARKED_AS_SPAM: {
    id: "x7DCYr",
    defaultMessage: [{
      "type": 0,
      "value": "Marked "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " as SPAM"
    }]
  },
  COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE: {
    id: "2Fn2ZU",
    defaultMessage: [{
      "type": 0,
      "value": "Marked "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " as incomplete"
    }]
  },
  COLLECTIVE_EXPENSE_PROCESSING: {
    id: "hX1cHH",
    defaultMessage: [{
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "Expense"
      }]
    }, {
      "type": 0,
      "value": " processing"
    }]
  },
  COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT: {
    id: "awzZS0",
    defaultMessage: [{
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "Expense"
      }]
    }, {
      "type": 0,
      "value": " scheduled for payment"
    }]
  },
  COLLECTIVE_EXPENSE_ERROR: {
    id: "WEnPlW",
    defaultMessage: [{
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "Expense"
      }]
    }, {
      "type": 0,
      "value": " payment failed"
    }]
  },
  COLLECTIVE_EXPENSE_INVITE_DRAFTED: {
    id: "qJ9xb7",
    defaultMessage: [{
      "type": 0,
      "value": "Invited someone to submit "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_RECURRING_DRAFTED: {
    id: "ecapW0",
    defaultMessage: [{
      "type": 0,
      "value": "New draft created for "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "recurring expense"
      }]
    }, {
      "type": 0,
      "value": " on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_EXPENSE_MISSING_RECEIPT: {
    id: "2E8GCk",
    defaultMessage: [{
      "type": 0,
      "value": "Notified admins about a missing receipt for "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  TAXFORM_REQUEST: {
    id: "p8x23o",
    defaultMessage: [{
      "type": 0,
      "value": "Tax form request sent to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Members
  COLLECTIVE_MEMBER_CREATED: {
    id: "3eueCA",
    defaultMessage: [{
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " joined "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " as a "
    }, {
      "type": 8,
      "value": "MemberRole",
      "children": []
    }]
  },
  COLLECTIVE_MEMBER_INVITED: {
    id: "Phwep9",
    defaultMessage: [{
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " was invited to join "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " as a "
    }, {
      "type": 8,
      "value": "MemberRole",
      "children": []
    }]
  },
  COLLECTIVE_CORE_MEMBER_INVITED: {
    id: "Phwep9",
    defaultMessage: [{
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " was invited to join "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " as a "
    }, {
      "type": 8,
      "value": "MemberRole",
      "children": []
    }]
  },
  COLLECTIVE_CORE_MEMBER_INVITATION_DECLINED: {
    id: "lXxuJ/",
    defaultMessage: [{
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " declined the invitation to join "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " as a "
    }, {
      "type": 8,
      "value": "MemberRole",
      "children": []
    }]
  },
  COLLECTIVE_CORE_MEMBER_ADDED: {
    id: "yziJEf",
    defaultMessage: [{
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " was added to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " with the role "
    }, {
      "type": 8,
      "value": "MemberRole",
      "children": []
    }]
  },
  COLLECTIVE_CORE_MEMBER_EDITED: {
    id: "qpaFgk",
    defaultMessage: [{
      "type": 0,
      "value": "Edited "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " membership to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_CORE_MEMBER_REMOVED: {
    id: "0Wi41l",
    defaultMessage: [{
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " removed as "
    }, {
      "type": 8,
      "value": "MemberRole",
      "children": []
    }, {
      "type": 0,
      "value": " of "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Transactions
  COLLECTIVE_TRANSACTION_CREATED: {
    id: "WHvzwC",
    defaultMessage: [{
      "type": 0,
      "value": "New transaction from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Updates
  COLLECTIVE_UPDATE_CREATED: {
    id: "z1f/0u",
    defaultMessage: [{
      "type": 0,
      "value": "New update drafted on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_UPDATE_PUBLISHED: {
    id: "27sK6T",
    defaultMessage: [{
      "type": 0,
      "value": "Update published on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Contact
  COLLECTIVE_CONTACT: {
    id: "PjKtqv",
    defaultMessage: [{
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " contacted "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Virtual cards
  // TODO: Link virtual cards and/or admin page
  COLLECTIVE_VIRTUAL_CARD_ADDED: {
    id: "BqfMx5",
    defaultMessage: [{
      "type": 0,
      "value": "New virtual card added to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_VIRTUAL_CARD_CREATED: {
    id: "WjU8+x",
    defaultMessage: [{
      "type": 0,
      "value": "New virtual card created on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_VIRTUAL_CARD_MISSING_RECEIPTS: {
    id: "2E8GCk",
    defaultMessage: [{
      "type": 0,
      "value": "Notified admins about a missing receipt for "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "expense"
      }]
    }, {
      "type": 0,
      "value": " on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  COLLECTIVE_VIRTUAL_CARD_SUSPENDED: {
    id: "a1lJXS",
    defaultMessage: [{
      "type": 0,
      "value": "Virtual card suspended on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  VIRTUAL_CARD_REQUESTED: {
    id: "YscZ4w",
    defaultMessage: [{
      "type": 0,
      "value": "Requested a virtual card for "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  VIRTUAL_CARD_PURCHASE: {
    id: "nttg5K",
    defaultMessage: [{
      "type": 0,
      "value": "New "
    }, {
      "type": 8,
      "value": "Expense",
      "children": [{
        "type": 0,
        "value": "purchase"
      }]
    }, {
      "type": 0,
      "value": " with virtual card"
    }]
  },
  VIRTUAL_CARD_CHARGE_DECLINED: {
    id: "yKslCj",
    defaultMessage: [{
      "type": 0,
      "value": "Virtual card charge declined on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Connected accounts
  CONNECTED_ACCOUNT_CREATED: {
    id: "WebhookEvents.CONNECTED_ACCOUNT_CREATED",
    defaultMessage: [{
      "type": 0,
      "value": "Connected account added"
    }]
  },
  // Contributions
  SUBSCRIPTION_CANCELED: {
    id: "Ya6JIv",
    defaultMessage: [{
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "Recurring contribution"
      }]
    }, {
      "type": 0,
      "value": " cancelled"
    }]
  },
  TICKET_CONFIRMED: {
    id: "WebhookEvents.TICKET_CONFIRMED",
    defaultMessage: [{
      "type": 0,
      "value": "Ticket confirmed"
    }]
  },
  CONTRIBUTION_REJECTED: {
    id: "nxBQAa",
    defaultMessage: [{
      "type": 0,
      "value": "Contribution from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " rejected by "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  ORDER_CANCELED_ARCHIVED_COLLECTIVE: {
    id: "wHUZBr",
    defaultMessage: [{
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "Recurring contribution"
      }]
    }, {
      "type": 0,
      "value": " cancelled on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " (archived)"
    }]
  },
  ORDER_PROCESSING: {
    id: "LZTaeF",
    defaultMessage: [{
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "Contribution"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " set as processing"
    }]
  },
  ORDER_PROCESSING_CRYPTO: {
    id: "6QW6MJ",
    defaultMessage: [{
      "type": 0,
      "value": "Crypto "
    }, {
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "contribution"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " set as processing"
    }]
  },
  ORDER_PENDING_CONTRIBUTION_NEW: {
    id: "xrcsxW",
    defaultMessage: [{
      "type": 0,
      "value": "New pending "
    }, {
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "contribution"
      }]
    }, {
      "type": 0,
      "value": " from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  ORDER_PENDING_CONTRIBUTION_REMINDER: {
    id: "JNSQuD",
    defaultMessage: [{
      "type": 0,
      "value": "Sent reminder to "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " about "
    }, {
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "contribution"
      }]
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  BACKYOURSTACK_DISPATCH_CONFIRMED: {
    id: "T0S/DK",
    defaultMessage: [{
      "type": 0,
      "value": "BackYourStack dispatch confirmed for "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  PAYMENT_FAILED: {
    id: "w/DRNl",
    defaultMessage: [{
      "type": 0,
      "value": "Payment from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " for "
    }, {
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "contribution"
      }]
    }, {
      "type": 0,
      "value": " failed"
    }]
  },
  PAYMENT_CREDITCARD_CONFIRMATION: {
    id: "nGXhAY",
    defaultMessage: [{
      "type": 0,
      "value": "Asked for credit card confirmation for "
    }, {
      "type": 8,
      "value": "Order",
      "children": [{
        "type": 0,
        "value": "contribution"
      }]
    }, {
      "type": 0,
      "value": " on "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  PAYMENT_CREDITCARD_EXPIRING: {
    id: "++1FQ+",
    defaultMessage: [{
      "type": 0,
      "value": "Sent a reminder about expiring credit card to "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  USER_PAYMENT_METHOD_CREATED: {
    id: "afrSHa",
    defaultMessage: [{
      "type": 0,
      "value": "Created a new payment method for "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Sign in
  USER_NEW_TOKEN: {
    id: "d//GCi",
    defaultMessage: [{
      "type": 0,
      "value": "Requested a new sign in token"
    }] // Deprecated and replaced by USER_SIGNIN

  },
  USER_SIGNIN: {
    id: "9JgEIv",
    defaultMessage: [{
      "type": 0,
      "value": "Signed In"
    }]
  },
  OAUTH_APPLICATION_AUTHORIZED: {
    id: "X0h+Qz",
    defaultMessage: [{
      "type": 0,
      "value": "Authorized a new OAuth application"
    }]
  },
  USER_CHANGE_EMAIL: {
    id: "w4ydKA",
    defaultMessage: [{
      "type": 0,
      "value": "Changed email address"
    }]
  },
  USER_PASSWORD_SET: {
    id: "+H9kRE",
    defaultMessage: [{
      "type": 0,
      "value": "Changed password"
    }]
  },
  TWO_FACTOR_CODE_ADDED: {
    id: "vEQcqS",
    defaultMessage: [{
      "type": 0,
      "value": "Two factor authentication added"
    }]
  },
  TWO_FACTOR_CODE_DELETED: {
    id: "qAF9zY",
    defaultMessage: [{
      "type": 0,
      "value": "Two factor authentication removed"
    }]
  },
  // Gift cards
  USER_CARD_CLAIMED: {
    id: "jHHcR5",
    defaultMessage: [{
      "type": 0,
      "value": "Claimed a gift card from "
    }, {
      "type": 8,
      "value": "FromAccount",
      "children": []
    }]
  },
  USER_CARD_INVITED: {
    id: "CSCASZ",
    defaultMessage: [{
      "type": 0,
      "value": "Generated a new gift card for "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }]
  },
  // Host
  ACTIVATED_COLLECTIVE_AS_HOST: {
    id: "/rbxQW",
    defaultMessage: [{
      "type": 0,
      "value": "Activated "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " as a host"
    }]
  },
  ACTIVATED_COLLECTIVE_AS_INDEPENDENT: {
    id: "okucEz",
    defaultMessage: [{
      "type": 0,
      "value": "Activated "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " as an independent collective"
    }]
  },
  DEACTIVATED_COLLECTIVE_AS_HOST: {
    id: "aaWtVL",
    defaultMessage: [{
      "type": 0,
      "value": "Deactivated "
    }, {
      "type": 8,
      "value": "Account",
      "children": []
    }, {
      "type": 0,
      "value": " as a host"
    }]
  }
});
const ActivityTypeI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  ACTIVITY_ALL: {
    id: "WebhookEvents.All",
    defaultMessage: [{
      "type": 0,
      "value": "All"
    }]
  },
  CONNECTED_ACCOUNT_CREATED: {
    id: "WebhookEvents.CONNECTED_ACCOUNT_CREATED",
    defaultMessage: [{
      "type": 0,
      "value": "Connected account added"
    }]
  },
  COLLECTIVE_APPLY: {
    id: "WebhookEvents.COLLECTIVE_APPLY",
    defaultMessage: [{
      "type": 0,
      "value": "New collective application"
    }]
  },
  COLLECTIVE_APPROVED: {
    id: "WebhookEvents.COLLECTIVE_APPROVED",
    defaultMessage: [{
      "type": 0,
      "value": "Collective application approved"
    }]
  },
  COLLECTIVE_REJECTED: {
    id: "WebhookEvents.COLLECTIVE_REJECTED",
    defaultMessage: [{
      "type": 0,
      "value": "Collective application rejected"
    }]
  },
  COLLECTIVE_CREATED: {
    id: "WebhookEvents.COLLECTIVE_CREATED",
    defaultMessage: [{
      "type": 0,
      "value": "Collective created"
    }]
  },
  ORGANIZATION_COLLECTIVE_CREATED: {
    id: "lehIHr",
    defaultMessage: [{
      "type": 0,
      "value": "Organization created"
    }]
  },
  USER_CREATED: {
    id: "RUJAuW",
    defaultMessage: [{
      "type": 0,
      "value": "User profile created"
    }]
  },
  USER_NEW_TOKEN: {
    id: "77MbQy",
    defaultMessage: [{
      "type": 0,
      "value": "Signed in"
    }]
  },
  USER_CHANGE_EMAIL: {
    id: "w4ydKA",
    defaultMessage: [{
      "type": 0,
      "value": "Changed email address"
    }]
  },
  USER_CARD_CLAIMED: {
    id: "tAVMip",
    defaultMessage: [{
      "type": 0,
      "value": "Gift card claimed"
    }]
  },
  USER_CARD_INVITED: {
    id: "l9N8X3",
    defaultMessage: [{
      "type": 0,
      "value": "Gift card invited"
    }]
  },
  USER_PAYMENT_METHOD_CREATED: {
    id: "L3WVIm",
    defaultMessage: [{
      "type": 0,
      "value": "New payment method"
    }]
  },
  COLLECTIVE_CREATED_GITHUB: {
    id: "luw/5Y",
    defaultMessage: [{
      "type": 0,
      "value": "Collective created via GitHub"
    }]
  },
  COLLECTIVE_EDITED: {
    id: "wzG+16",
    defaultMessage: [{
      "type": 0,
      "value": "Account edited"
    }]
  },
  COLLECTIVE_CONVERSATION_CREATED: {
    id: "Conversation.created",
    defaultMessage: [{
      "type": 0,
      "value": "Conversation created"
    }]
  },
  COLLECTIVE_EXPENSE_CREATED: {
    id: "WebhookEvents.COLLECTIVE_EXPENSE_CREATED",
    defaultMessage: [{
      "type": 0,
      "value": "New expenses"
    }]
  },
  COLLECTIVE_EXPENSE_UNAPPROVED: {
    id: "Expense.Activity.Unapproved",
    defaultMessage: [{
      "type": 0,
      "value": "Expense unapproved"
    }]
  },
  COLLECTIVE_EXPENSE_DELETED: {
    id: "KYXMJ6",
    defaultMessage: [{
      "type": 0,
      "value": "Expense deleted"
    }]
  },
  COLLECTIVE_EXPENSE_UPDATED: {
    id: "Expense.Activity.Updated",
    defaultMessage: [{
      "type": 0,
      "value": "Expense updated"
    }]
  },
  COLLECTIVE_EXPENSE_REJECTED: {
    id: "Expense.Activity.Rejected",
    defaultMessage: [{
      "type": 0,
      "value": "Expense rejected"
    }]
  },
  COLLECTIVE_EXPENSE_APPROVED: {
    id: "Expense.Activity.Approved",
    defaultMessage: [{
      "type": 0,
      "value": "Expense approved"
    }]
  },
  COLLECTIVE_EXPENSE_PAID: {
    id: "Expense.Activity.Paid",
    defaultMessage: [{
      "type": 0,
      "value": "Expense paid"
    }]
  },
  COLLECTIVE_EXPENSE_MOVED: {
    id: "rj9VjD",
    defaultMessage: [{
      "type": 0,
      "value": "Expense moved"
    }]
  },
  COLLECTIVE_EXPENSE_MARKED_AS_UNPAID: {
    id: "Expense.Activity.MarkedAsUnpaid",
    defaultMessage: [{
      "type": 0,
      "value": "Expense marked as unpaid"
    }]
  },
  COLLECTIVE_EXPENSE_INVITE_DRAFTED: {
    id: "Expense.Activity.Invite.Drafted",
    defaultMessage: [{
      "type": 0,
      "value": "Expense invited"
    }]
  },
  COLLECTIVE_EXPENSE_PROCESSING: {
    id: "Expense.Activity.Processing",
    defaultMessage: [{
      "type": 0,
      "value": "Expense processing"
    }]
  },
  COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT: {
    id: "Expense.Activity.ScheduledForPayment",
    defaultMessage: [{
      "type": 0,
      "value": "Expense scheduled for payment"
    }]
  },
  COLLECTIVE_EXPENSE_ERROR: {
    id: "Expense.Activity.Error",
    defaultMessage: [{
      "type": 0,
      "value": "Expense error"
    }]
  },
  COLLECTIVE_EXPENSE_MARKED_AS_SPAM: {
    id: "Expense.Activity.MarkedAsSpam",
    defaultMessage: [{
      "type": 0,
      "value": "Expense marked as spam"
    }]
  },
  COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE: {
    id: "Expense.Activity.MarkedAsIncomplete",
    defaultMessage: [{
      "type": 0,
      "value": "Expense marked as incomplete"
    }]
  },
  COLLECTIVE_EXPENSE_RECURRING_DRAFTED: {
    id: "+yHjyj",
    defaultMessage: [{
      "type": 0,
      "value": "Recurring expense drafted"
    }]
  },
  COLLECTIVE_MEMBER_CREATED: {
    id: "WebhookEvents.COLLECTIVE_MEMBER_CREATED",
    defaultMessage: [{
      "type": 0,
      "value": "New member"
    }]
  },
  COLLECTIVE_FROZEN: {
    id: "JlQbWz",
    defaultMessage: [{
      "type": 0,
      "value": "Frozen account"
    }]
  },
  COLLECTIVE_UNFROZEN: {
    id: "l7vp2G",
    defaultMessage: [{
      "type": 0,
      "value": "Unfrozen account"
    }]
  },
  COLLECTIVE_MEMBER_INVITED: {
    id: "hP+c6G",
    defaultMessage: [{
      "type": 0,
      "value": "Invited members"
    }]
  },
  COLLECTIVE_CORE_MEMBER_ADDED: {
    id: "W533GZ",
    defaultMessage: [{
      "type": 0,
      "value": "Core member added"
    }]
  },
  COLLECTIVE_CORE_MEMBER_INVITED: {
    id: "RaVvOv",
    defaultMessage: [{
      "type": 0,
      "value": "Core member invited"
    }]
  },
  COLLECTIVE_CORE_MEMBER_INVITATION_DECLINED: {
    id: "lc+Sfp",
    defaultMessage: [{
      "type": 0,
      "value": "Core member invitation declined"
    }]
  },
  COLLECTIVE_CORE_MEMBER_REMOVED: {
    id: "Vp7WY+",
    defaultMessage: [{
      "type": 0,
      "value": "Core member removed"
    }]
  },
  COLLECTIVE_CORE_MEMBER_EDITED: {
    id: "4uNER1",
    defaultMessage: [{
      "type": 0,
      "value": "Core member edited"
    }]
  },
  COLLECTIVE_CONTACT: {
    id: "Contact",
    defaultMessage: [{
      "type": 0,
      "value": "Contact"
    }]
  },
  COLLECTIVE_VIRTUAL_CARD_SUSPENDED: {
    id: "It1slB",
    defaultMessage: [{
      "type": 0,
      "value": "Virtual card suspended"
    }]
  },
  COLLECTIVE_VIRTUAL_CARD_ADDED: {
    id: "FLqc8O",
    defaultMessage: [{
      "type": 0,
      "value": "Virtual card added"
    }]
  },
  VIRTUAL_CARD_REQUESTED: {
    id: "p57bhB",
    defaultMessage: [{
      "type": 0,
      "value": "Virtual card requested"
    }]
  },
  VIRTUAL_CARD_CHARGE_DECLINED: {
    id: "qpg0Od",
    defaultMessage: [{
      "type": 0,
      "value": "Virtual card charge declined"
    }]
  },
  CONTRIBUTION_REJECTED: {
    id: "lhiC+5",
    defaultMessage: [{
      "type": 0,
      "value": "Contribution rejected"
    }]
  },
  COLLECTIVE_TRANSACTION_CREATED: {
    id: "WebhookEvents.COLLECTIVE_TRANSACTION_CREATED",
    defaultMessage: [{
      "type": 0,
      "value": "New transaction"
    }]
  },
  COLLECTIVE_UPDATE_CREATED: {
    id: "WebhookEvents.COLLECTIVE_UPDATE_CREATED",
    defaultMessage: [{
      "type": 0,
      "value": "New update drafted"
    }]
  },
  COLLECTIVE_UPDATE_PUBLISHED: {
    id: "connectedAccounts.twitter.updatePublished.toggle.label",
    defaultMessage: [{
      "type": 0,
      "value": "Update published"
    }]
  },
  SUBSCRIPTION_CANCELED: {
    id: "p9V1Z4",
    defaultMessage: [{
      "type": 0,
      "value": "Recurring contribution cancelled"
    }]
  },
  SUBSCRIPTION_ACTIVATED: {
    id: "sRTg0N",
    defaultMessage: [{
      "type": 0,
      "value": "Recurring contribution activated"
    }]
  },
  SUBSCRIPTION_CONFIRMED: {
    id: "e2zrxE",
    defaultMessage: [{
      "type": 0,
      "value": "Recurring contribution confirmed"
    }]
  },
  TICKET_CONFIRMED: {
    id: "WebhookEvents.TICKET_CONFIRMED",
    defaultMessage: [{
      "type": 0,
      "value": "Ticket confirmed"
    }]
  },
  ORDER_CANCELED_ARCHIVED_COLLECTIVE: {
    id: "bD8eWy",
    defaultMessage: [{
      "type": 0,
      "value": "Contribution canceled (archived collective)"
    }]
  },
  ORDER_PROCESSING: {
    id: "EEO+n7",
    defaultMessage: [{
      "type": 0,
      "value": "Contribution processing"
    }]
  },
  ORDER_PROCESSING_CRYPTO: {
    id: "oisSUu",
    defaultMessage: [{
      "type": 0,
      "value": "Contribution processing (crypto)"
    }]
  },
  ORDER_PENDING_CONTRIBUTION_NEW: {
    id: "PRfgGt",
    defaultMessage: [{
      "type": 0,
      "value": "New pending contribution"
    }]
  },
  ORDER_THANKYOU: {
    id: "0OqCZG",
    defaultMessage: [{
      "type": 0,
      "value": "New order"
    }]
  },
  ORDERS_SUSPICIOUS: {
    id: "WfHgfo",
    defaultMessage: [{
      "type": 0,
      "value": "Suspicious order"
    }]
  },
  ACTIVATED_COLLECTIVE_AS_HOST: {
    id: "bOSDd3",
    defaultMessage: [{
      "type": 0,
      "value": "Activated as host"
    }]
  },
  ACTIVATED_COLLECTIVE_AS_INDEPENDENT: {
    id: "sPXJ/7",
    defaultMessage: [{
      "type": 0,
      "value": "Activated as independent"
    }]
  },
  DEACTIVATED_COLLECTIVE_AS_HOST: {
    id: "8Np7Fc",
    defaultMessage: [{
      "type": 0,
      "value": "Deactivated as host"
    }]
  },
  PAYMENT_FAILED: {
    id: "qV+TFm",
    defaultMessage: [{
      "type": 0,
      "value": "Payment failed"
    }]
  },
  TAXFORM_REQUEST: {
    id: "w/zcEG",
    defaultMessage: [{
      "type": 0,
      "value": "Tax form request"
    }]
  },
  COLLECTIVE_COMMENT_CREATED: {
    id: "VTN7xO",
    defaultMessage: [{
      "type": 0,
      "value": "Comment posted"
    }]
  },
  CONVERSATION_COMMENT_CREATED: {
    id: "6mlPiP",
    defaultMessage: [{
      "type": 0,
      "value": "New comment on conversation"
    }]
  },
  UPDATE_COMMENT_CREATED: {
    id: "fqHI7A",
    defaultMessage: [{
      "type": 0,
      "value": "New comment on update"
    }]
  },
  EXPENSE_COMMENT_CREATED: {
    id: "dHCod9",
    defaultMessage: [{
      "type": 0,
      "value": "New comment on expense"
    }]
  }
});

/***/ })

};
;