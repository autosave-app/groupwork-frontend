"use strict";
exports.id = 5993;
exports.ids = [5993];
exports.modules = {

/***/ 5993:
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92476);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40242);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePicker__WEBPACK_IMPORTED_MODULE_7__]);
_CollectivePicker__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _excluded = ["inputId", "types", "limit", "hostCollectiveIds", "parentCollectiveIds", "preload", "filterResults", "searchQuery", "invitable", "emptyCustomOptions", "noCache", "isLoading", "skipGuests", "includeArchived"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const collectivePickerSearchQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .gqlV1 */ .N
/* GraphQL */
`
  query CollectivePickerSearchQuery(
    $term: String!
    $types: [TypeOfCollective]
    $limit: Int
    $hostCollectiveIds: [Int]
    $parentCollectiveIds: [Int]
    $skipGuests: Boolean
    $includeArchived: Boolean
  ) {
    search(
      term: $term
      types: $types
      limit: $limit
      hostCollectiveIds: $hostCollectiveIds
      parentCollectiveIds: $parentCollectiveIds
      skipGuests: $skipGuests
      includeArchived: $includeArchived
    ) {
      id
      collectives {
        id
        type
        slug
        name
        currency
        location {
          id
          address
          country
        }
        imageUrl(height: 64)
        hostFeePercent
        isActive
        isArchived
        isHost
        isTrustedHost
        isTwoFactorAuthEnabled
      }
    }
  }
`;
/** Throttle search function to limit invocations while typing */

const throttledSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 750);

const Messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
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

const getPlaceholder = (intl, types) => {
  const nbTypes = types ? types.length : 0;

  if (nbTypes === 0 || nbTypes > 3) {
    return intl.formatMessage(Messages.search);
  } else if (nbTypes === 1) {
    if (types[0] === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.USER */ .eV.USER) {
      return intl.formatMessage(Messages.searchForUsers);
    } else {
      return intl.formatMessage(Messages.searchForType, {
        entity: (0,_lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(intl, types[0], 100)
      });
    }
  } else {
    // Format by passing a map of entities like { entity1: 'Collectives' }
    return intl.formatMessage(Messages[`searchForType_${nbTypes}`], types.reduce((i18nParams, type, index) => {
      i18nParams[`entity${index + 1}`] = (0,_lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(intl, type, 100);
      return i18nParams;
    }, {}));
  }
};
/**
 * A specialization of `CollectivePicker` that fetches the data based on user search.
 */


const CollectivePickerAsync = _ref => {
  let {
    inputId,
    types = undefined,
    limit = 20,
    hostCollectiveIds = undefined,
    parentCollectiveIds = undefined,
    preload = false,
    filterResults = undefined,
    searchQuery = collectivePickerSearchQuery,
    invitable = false,
    emptyCustomOptions = [],
    noCache = false,
    isLoading = false,
    skipGuests = true,
    includeArchived = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const fetchPolicy = noCache ? 'network-only' : undefined;
  const [searchCollectives, {
    loading,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(searchQuery, {
    fetchPolicy
  });
  const [term, setTerm] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const collectives = (term || preload) && data?.search?.collectives || [];
  const filteredCollectives = filterResults ? filterResults(collectives) : collectives;
  const placeholder = getPlaceholder(intl, types); // If preload is true, trigger a first query on mount or when one of the query param changes

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (term || preload) {
      throttledSearch(searchCollectives, {
        term: term || '',
        types,
        limit,
        hostCollectiveIds,
        parentCollectiveIds,
        skipGuests,
        includeArchived
      });
    }
  }, [types, limit, hostCollectiveIds, parentCollectiveIds, term]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _objectSpread({
    inputId: inputId,
    isLoading: Boolean(loading || isLoading),
    collectives: filteredCollectives,
    groupByType: !types || types.length > 1,
    filterOption: () => true
    /** Filtering is done by the API */
    ,
    sortFunc: collectives => collectives
    /** Already sorted by the API */
    ,
    placeholder: placeholder,
    types: types,
    useSearchIcon: true,
    isSearchable: true // Only displays the invite option if no results were found:
    ,
    invitable: invitable,
    onInputChange: newTerm => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectivePickerAsync);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82525);


const TypesI18n = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION]: {
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
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.USER */ .eV.USER]: {
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
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE]: {
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
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.EVENT */ .eV.EVENT]: {
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
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.PROJECT */ .eV.PROJECT]: {
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
  },
  [_constants_collectives__WEBPACK_IMPORTED_MODULE_1__/* .CollectiveType.FUND */ .eV.FUND]: {
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
  }
});
/**
 * Translate a member role
 *
 * @param {object} `intl` - see `injectIntl`
 * @param {string} `type`
 */

const formatCollectiveType = (intl, type, count = 1) => {
  const i18nMsg = TypesI18n[type];
  return i18nMsg ? intl.formatMessage(i18nMsg, {
    count
  }) : type;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatCollectiveType);

/***/ })

};
;