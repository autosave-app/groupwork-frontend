"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4691],{

/***/ 5993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46829);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92476);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41861);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85893);





var _excluded = ["inputId", "types", "limit", "hostCollectiveIds", "parentCollectiveIds", "preload", "filterResults", "searchQuery", "invitable", "emptyCustomOptions", "noCache", "isLoading", "skipGuests", "includeArchived"];

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var collectivePickerSearchQuery = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3___default()(["\n  query CollectivePickerSearchQuery(\n    $term: String!\n    $types: [TypeOfCollective]\n    $limit: Int\n    $hostCollectiveIds: [Int]\n    $parentCollectiveIds: [Int]\n    $skipGuests: Boolean\n    $includeArchived: Boolean\n  ) {\n    search(\n      term: $term\n      types: $types\n      limit: $limit\n      hostCollectiveIds: $hostCollectiveIds\n      parentCollectiveIds: $parentCollectiveIds\n      skipGuests: $skipGuests\n      includeArchived: $includeArchived\n    ) {\n      id\n      collectives {\n        id\n        type\n        slug\n        name\n        currency\n        location {\n          id\n          address\n          country\n        }\n        imageUrl(height: 64)\n        hostFeePercent\n        isActive\n        isArchived\n        isHost\n        isTrustedHost\n        isTwoFactorAuthEnabled\n      }\n    }\n  }\n"])));
/** Throttle search function to limit invocations while typing */

var throttledSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function (searchFunc, variables) {
  return searchFunc({
    variables: variables
  });
}, 750);

var Messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  searchForType: {
    id: "SearchFor",
    defaultMessage: [{
      "type": 0,
      "value": "Search for "
    }, {
      "type": 1,
      "value": "entity"
    }]
  },
  // eslint-disable-next-line camelcase
  searchForType_2: {
    id: "SearchFor2",
    defaultMessage: [{
      "type": 0,
      "value": "Search for "
    }, {
      "type": 1,
      "value": "entity1"
    }, {
      "type": 0,
      "value": " or "
    }, {
      "type": 1,
      "value": "entity2"
    }]
  },
  // eslint-disable-next-line camelcase
  searchForType_3: {
    id: "SearchFor3",
    defaultMessage: [{
      "type": 0,
      "value": "Search for "
    }, {
      "type": 1,
      "value": "entity1"
    }, {
      "type": 0,
      "value": ", "
    }, {
      "type": 1,
      "value": "entity2"
    }, {
      "type": 0,
      "value": " or "
    }, {
      "type": 1,
      "value": "entity3"
    }]
  },
  search: {
    id: "Search",
    defaultMessage: [{
      "type": 0,
      "value": "Search"
    }]
  },
  searchForUsers: {
    id: "xLF0/9",
    defaultMessage: [{
      "type": 0,
      "value": "Search for Users by name or email"
    }]
  }
});
/**
 * If a single type is selected, will return a label like: `Search for users`
 * Otherwise it just returns `Search`
 */

var getPlaceholder = function getPlaceholder(intl, types) {
  var nbTypes = types ? types.length : 0;

  if (nbTypes === 0 || nbTypes > 3) {
    return intl.formatMessage(Messages.search);
  } else if (nbTypes === 1) {
    if (types[0] === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.USER */ .eV.USER) {
      return intl.formatMessage(Messages.searchForUsers);
    } else {
      return intl.formatMessage(Messages.searchForType, {
        entity: (0,_lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(intl, types[0], 100)
      });
    }
  } else {
    // Format by passing a map of entities like { entity1: 'Collectives' }
    return intl.formatMessage(Messages["searchForType_".concat(nbTypes)], types.reduce(function (i18nParams, type, index) {
      i18nParams["entity".concat(index + 1)] = (0,_lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(intl, type, 100);
      return i18nParams;
    }, {}));
  }
};
/**
 * A specialization of `CollectivePicker` that fetches the data based on user search.
 */


var CollectivePickerAsync = function CollectivePickerAsync(_ref) {
  var _data$search;

  var inputId = _ref.inputId,
      _ref$types = _ref.types,
      types = _ref$types === void 0 ? undefined : _ref$types,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 20 : _ref$limit,
      _ref$hostCollectiveId = _ref.hostCollectiveIds,
      hostCollectiveIds = _ref$hostCollectiveId === void 0 ? undefined : _ref$hostCollectiveId,
      _ref$parentCollective = _ref.parentCollectiveIds,
      parentCollectiveIds = _ref$parentCollective === void 0 ? undefined : _ref$parentCollective,
      _ref$preload = _ref.preload,
      preload = _ref$preload === void 0 ? false : _ref$preload,
      _ref$filterResults = _ref.filterResults,
      filterResults = _ref$filterResults === void 0 ? undefined : _ref$filterResults,
      _ref$searchQuery = _ref.searchQuery,
      searchQuery = _ref$searchQuery === void 0 ? collectivePickerSearchQuery : _ref$searchQuery,
      _ref$invitable = _ref.invitable,
      invitable = _ref$invitable === void 0 ? false : _ref$invitable,
      _ref$emptyCustomOptio = _ref.emptyCustomOptions,
      emptyCustomOptions = _ref$emptyCustomOptio === void 0 ? [] : _ref$emptyCustomOptio,
      _ref$noCache = _ref.noCache,
      noCache = _ref$noCache === void 0 ? false : _ref$noCache,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$skipGuests = _ref.skipGuests,
      skipGuests = _ref$skipGuests === void 0 ? true : _ref$skipGuests,
      _ref$includeArchived = _ref.includeArchived,
      includeArchived = _ref$includeArchived === void 0 ? false : _ref$includeArchived,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  var fetchPolicy = noCache ? 'network-only' : undefined;

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(searchQuery, {
    fetchPolicy: fetchPolicy
  }),
      _useLazyQuery2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useLazyQuery, 2),
      searchCollectives = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(null),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      term = _React$useState2[0],
      setTerm = _React$useState2[1];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
  var collectives = (term || preload) && (data === null || data === void 0 ? void 0 : (_data$search = data.search) === null || _data$search === void 0 ? void 0 : _data$search.collectives) || [];
  var filteredCollectives = filterResults ? filterResults(collectives) : collectives;
  var placeholder = getPlaceholder(intl, types); // If preload is true, trigger a first query on mount or when one of the query param changes

  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    if (term || preload) {
      throttledSearch(searchCollectives, {
        term: term || '',
        types: types,
        limit: limit,
        hostCollectiveIds: hostCollectiveIds,
        parentCollectiveIds: parentCollectiveIds,
        skipGuests: skipGuests,
        includeArchived: includeArchived
      });
    }
  }, [types, limit, hostCollectiveIds, parentCollectiveIds, term]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CollectivePicker__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, _objectSpread({
    inputId: inputId,
    isLoading: Boolean(loading || isLoading),
    collectives: filteredCollectives,
    groupByType: !types || types.length > 1,
    filterOption: function filterOption() {
      return true;
    }
    /** Filtering is done by the API */
    ,
    sortFunc: function sortFunc(collectives) {
      return collectives;
    }
    /** Already sorted by the API */
    ,
    placeholder: placeholder,
    types: types,
    useSearchIcon: true,
    isSearchable: true // Only displays the invite option if no results were found:
    ,
    invitable: invitable,
    onInputChange: function onInputChange(newTerm) {
      setTerm(newTerm.trim());
    },
    customOptions: !term ? emptyCustomOptions : []
  }, props));
};

CollectivePickerAsync.__docgenInfo = {
  "description": "A specialization of `CollectivePicker` that fetches the data based on user search.",
  "methods": [],
  "displayName": "CollectivePickerAsync",
  "props": {
    "types": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "The types of collectives to retrieve",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "computed": true,
          "value": "Object.values(CollectiveType)"
        }
      },
      "required": false
    },
    "limit": {
      "defaultValue": {
        "value": "20",
        "computed": false
      },
      "description": "Max number of collectives displayed at the same time",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "hostCollectiveIds": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If set, only the collectives under this host will be retrieved",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false
    },
    "parentCollectiveIds": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If set, only the collectives under this parent collective will be retrieved",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false
    },
    "preload": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "If true, a query will be triggered even if search is empty",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "filterResults": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Function to filter results returned by the API",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "searchQuery": {
      "defaultValue": {
        "value": "gqlV1/* GraphQL */ `\n  query CollectivePickerSearchQuery(\n    $term: String!\n    $types: [TypeOfCollective]\n    $limit: Int\n    $hostCollectiveIds: [Int]\n    $parentCollectiveIds: [Int]\n    $skipGuests: Boolean\n    $includeArchived: Boolean\n  ) {\n    search(\n      term: $term\n      types: $types\n      limit: $limit\n      hostCollectiveIds: $hostCollectiveIds\n      parentCollectiveIds: $parentCollectiveIds\n      skipGuests: $skipGuests\n      includeArchived: $includeArchived\n    ) {\n      id\n      collectives {\n        id\n        type\n        slug\n        name\n        currency\n        location {\n          id\n          address\n          country\n        }\n        imageUrl(height: 64)\n        hostFeePercent\n        isActive\n        isArchived\n        isHost\n        isTrustedHost\n        isTwoFactorAuthEnabled\n      }\n    }\n  }\n`",
        "computed": false
      },
      "description": "Query to use for the search. Override to add custom fields",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "invitable": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "If true, a permanent option to invite a new user will be displayed in the select",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "emptyCustomOptions": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "Custom options that are displayed when the field is empty",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "noCache": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "If true, results won't be cached (Apollo \"network-only\" mode)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoading": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false
    },
    "skipGuests": {
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
    "includeArchived": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Include archived collectives *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "inputId": {
      "description": "The id of the search input",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "groupByType": {
      "description": "Whether we should group collectives by type. By default, this is true when there's more than one type",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "creatable": {
      "description": "If true, a permanent option to create a collective will be displayed in the select",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onInvite": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  },
  "composes": ["./CollectivePicker"]
};
/* harmony default export */ __webpack_exports__["Z"] = (CollectivePickerAsync);

/***/ }),

/***/ 32631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97274);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);



var _excluded = ["append", "prepend", "disabled", "success", "error", "maxWidth", "containerProps", "prependProps", "appendProps", "innerRef", "autoFocus", "overflow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var InputContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledInputGroup__InputContainer",
  componentId: "sc-1jf4f2r-0"
})(["&:hover{border-color:", ";}&:focus-within{border-color:", ";}input{border:none;outline:none;box-shadow:none;}input:focus ~ div svg{color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__/* .themeGet */ .R)('colors.primary.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__/* .themeGet */ .R)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__/* .themeGet */ .R)('colors.primary.300'));

var getColor = function getColor(_ref) {
  var error = _ref.error,
      success = _ref.success;

  if (error) {
    return 'red.300';
  }

  if (success) {
    return 'green.300';
  }

  return 'black.800';
};

var getBgColor = function getBgColor(_ref2) {
  var error = _ref2.error,
      focused = _ref2.focused,
      success = _ref2.success;

  if (focused) {
    return 'primary.100';
  }

  if (error) {
    return 'red.100';
  }

  if (success) {
    return 'green.100';
  }

  return 'black.50';
};

var getBorderColor = function getBorderColor(_ref3) {
  var error = _ref3.error,
      focused = _ref3.focused,
      success = _ref3.success;

  if (focused) {
    return 'primary.300';
  }

  if (error) {
    return 'red.500';
  }

  if (success) {
    return 'green.300';
  }

  return 'black.300';
};
/**
 * A styled input with a prepended or appended field element.
 * @see See [StyledInput](/#!/StyledInput) for details about props passed to it
 */


var StyledInputGroup = function StyledInputGroup(_ref4) {
  var append = _ref4.append,
      prepend = _ref4.prepend,
      disabled = _ref4.disabled,
      success = _ref4.success,
      error = _ref4.error,
      maxWidth = _ref4.maxWidth,
      containerProps = _ref4.containerProps,
      prependProps = _ref4.prependProps,
      appendProps = _ref4.appendProps,
      innerRef = _ref4.innerRef,
      autoFocus = _ref4.autoFocus,
      overflow = _ref4.overflow,
      inputProps = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      focused = _useState[0],
      setFocus = _useState[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(InputContainer, _objectSpread(_objectSpread({
      bg: disabled ? 'black.50' : 'white.full',
      maxWidth: maxWidth,
      border: "1px solid",
      borderColor: getBorderColor({
        error: error,
        focused: focused,
        success: success
      }),
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      lineHeight: "1.5"
    }, containerProps), {}, {
      children: [prepend && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        fontSize: "14px",
        borderRadius: "4px 0 0 4px",
        p: 2,
        color: getColor({
          error: error,
          success: success
        }),
        maxHeight: "100%",
        whiteSpace: "nowrap"
      }, prependProps), {}, {
        bg: disabled && 'black.50' || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(prependProps, 'bg') || getBgColor({
          error: error,
          focused: focused,
          success: success
        }),
        children: prepend
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
        bare: true,
        autoFocus: autoFocus,
        color: getColor({
          error: error,
          success: success
        }),
        type: "text",
        overflow: overflow || 'scroll',
        fontSize: "14px",
        flex: "1 1 auto",
        disabled: disabled,
        py: "0",
        px: 2,
        maxHeight: "100%",
        error: error,
        minWidth: "0",
        width: "100%",
        ref: innerRef
      }, inputProps), {}, {
        onFocus: function onFocus(e) {
          setFocus(true);

          if (inputProps && inputProps.onFocus) {
            inputProps.onFocus(e);
          }
        },
        onBlur: function onBlur(e) {
          setFocus(false);

          if (inputProps && inputProps.onBlur) {
            inputProps.onBlur(e);
          }
        }
      })), append && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        borderRadius: "4px 0 0 4px",
        p: 2,
        color: getColor({
          error: error,
          success: success
        }),
        fontSize: "14px"
      }, appendProps), {}, {
        bg: getBgColor({
          error: error,
          focused: focused,
          success: success
        }),
        children: append
      }))]
    })), Boolean(error) && typeof error !== 'boolean' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
      display: "block",
      color: "red.500",
      pt: 2,
      fontSize: "10px",
      children: error
    })]
  });
};

StyledInputGroup.__docgenInfo = {
  "description": "A styled input with a prepended or appended field element.\n@see See [StyledInput](/#!/StyledInput) for details about props passed to it",
  "methods": [],
  "displayName": "StyledInputGroup",
  "props": {
    "append": {
      "description": "Text shown after input",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "element"
        }]
      },
      "required": false
    },
    "prepend": {
      "description": "Text shown before input",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "element"
        }]
      },
      "required": false
    },
    "disabled": {
      "description": "Show disabled state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "error": {
      "description": "Show error state for field, and a message error if given a string",
      "type": {
        "name": "union",
        "value": [{
          "name": "bool"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "success": {
      "description": "Show success state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "type": {
      "description": "Passed to internal StyledInput",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "containerProps": {
      "description": "Props passed to the `InputContainer`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "prependProps": {
      "description": "Props passed to the prepend `Container`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "appendProps": {
      "description": "Props passed to the append `Container`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "maxWidth": {
      "description": "Max Width",
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
    "autoFocus": {
      "description": "Whether to auto focus this element *",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "overflow": {
      "description": "Specifies what should happen if content overflows an element's box *",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "innerRef": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputGroup);

/***/ }),

/***/ 14574:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52015);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11194);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36422);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85893);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var Admin = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)(_components_StyledTag__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right'
}).withConfig({
  displayName: "OnboardingProfileCard__Admin",
  componentId: "sc-shs4i4-0"
})([""]);

var OnboardingProfileCard = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_2___default()(OnboardingProfileCard, _React$Component);

  var _super = _createSuper(OnboardingProfileCard);

  function OnboardingProfileCard() {
    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0___default()(this, OnboardingProfileCard);

    return _super.apply(this, arguments);
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_1___default()(OnboardingProfileCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collective = _this$props.collective,
          removeAdmin = _this$props.removeAdmin,
          isPending = _this$props.isPending;
      var name = collective.name;

      var content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Admin, {
        closeButtonProps: removeAdmin ? {
          onClick: function onClick() {
            removeAdmin(collective);
          }
        } : null,
        "data-cy": "remove-user",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            radius: 16,
            collective: collective
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
            fontSize: "12px",
            ml: 2,
            "data-cy": "name-of-admins",
            children: name
          })]
        })
      });

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        my: 1,
        mr: 2,
        children: isPending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          content: function content() {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              id: "onboarding.admins.pending",
              defaultMessage: [{
                "type": 0,
                "value": "Pending approval"
              }]
            });
          },
          children: content
        }) : content
      });
    }
  }]);

  return OnboardingProfileCard;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

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
/* harmony default export */ __webpack_exports__["Z"] = (OnboardingProfileCard);

/***/ }),

/***/ 92476:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59448);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82525);


var _defineMessages;



var TypesI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)((_defineMessages = {}, _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION, {
  id: "CollectiveType.Organization",
  defaultMessage: [{
    "type": 6,
    "value": "count",
    "options": {
      "one": {
        "value": [{
          "type": 0,
          "value": "Organization"
        }]
      },
      "other": {
        "value": [{
          "type": 0,
          "value": "Organizations"
        }]
      }
    },
    "offset": 0,
    "pluralType": "cardinal"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.USER */ .eV.USER, {
  id: "CollectiveType.User",
  defaultMessage: [{
    "type": 6,
    "value": "count",
    "options": {
      "one": {
        "value": [{
          "type": 0,
          "value": "User"
        }]
      },
      "other": {
        "value": [{
          "type": 0,
          "value": "Users"
        }]
      }
    },
    "offset": 0,
    "pluralType": "cardinal"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE, {
  id: "CollectiveType.Collective",
  defaultMessage: [{
    "type": 6,
    "value": "count",
    "options": {
      "one": {
        "value": [{
          "type": 0,
          "value": "Collective"
        }]
      },
      "other": {
        "value": [{
          "type": 0,
          "value": "Collectives"
        }]
      }
    },
    "offset": 0,
    "pluralType": "cardinal"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.EVENT */ .eV.EVENT, {
  id: "CollectiveType.Event",
  defaultMessage: [{
    "type": 6,
    "value": "count",
    "options": {
      "one": {
        "value": [{
          "type": 0,
          "value": "Event"
        }]
      },
      "other": {
        "value": [{
          "type": 0,
          "value": "Events"
        }]
      }
    },
    "offset": 0,
    "pluralType": "cardinal"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.PROJECT */ .eV.PROJECT, {
  id: "CollectiveType.Project",
  defaultMessage: [{
    "type": 6,
    "value": "count",
    "options": {
      "one": {
        "value": [{
          "type": 0,
          "value": "Project"
        }]
      },
      "other": {
        "value": [{
          "type": 0,
          "value": "Projects"
        }]
      }
    },
    "offset": 0,
    "pluralType": "cardinal"
  }]
}), _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineMessages, _constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.FUND */ .eV.FUND, {
  id: "CollectiveType.Fund",
  defaultMessage: [{
    "type": 6,
    "value": "count",
    "options": {
      "one": {
        "value": [{
          "type": 0,
          "value": "Fund"
        }]
      },
      "other": {
        "value": [{
          "type": 0,
          "value": "Funds"
        }]
      }
    },
    "offset": 0,
    "pluralType": "cardinal"
  }]
}), _defineMessages));
/**
 * Translate a member role
 *
 * @param {object} `intl` - see `injectIntl`
 * @param {string} `type`
 */

var formatCollectiveType = function formatCollectiveType(intl, type) {
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i18nMsg = TypesI18n[type];
  return i18nMsg ? intl.formatMessage(i18nMsg, {
    count: count
  }) : type;
};

/* harmony default export */ __webpack_exports__["Z"] = (formatCollectiveType);

/***/ })

}]);
//# sourceMappingURL=4691-c25020e80df7f233.js.map