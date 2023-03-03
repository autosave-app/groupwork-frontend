"use strict";
(() => {
var exports = {};
exports.id = 9032;
exports.ids = [9032];
exports.modules = {

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

/***/ 92348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98210);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56508);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25896);
/* harmony import */ var _components_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(93765);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24839);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5824);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(69078);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(73908);
/* harmony import */ var _components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(95487);
/* harmony import */ var _components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11221);
/* harmony import */ var _components_expenses_filters_ExpensesOrder__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(78877);
/* harmony import */ var _components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(17738);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(16159);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(92129);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(29242);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(37278);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(84842);
/* harmony import */ var _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(43825);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(79045);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(32606);
/* harmony import */ var _components_StyledHr__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(173);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_19__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_24__, _components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_25__, _components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_26__, _components_Page__WEBPACK_IMPORTED_MODULE_33__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_34__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_19__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_24__, _components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_25__, _components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_26__, _components_Page__WEBPACK_IMPORTED_MODULE_33__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_34__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








































const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
  title: {
    id: "ExpensesPage.title",
    defaultMessage: [{
      "type": 1,
      "value": "collectiveName"
    }, {
      "type": 0,
      "value": " · Expenses"
    }]
  }
});
const SearchFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu).withConfig({
  displayName: "submitted-expenses__SearchFormContainer",
  componentId: "sc-115u4zw-0"
})(["width:100%;max-width:278px;min-width:10rem;"]);
const EXPENSES_PER_PAGE = 10;

class SubmittedExpensesPage extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hasFilter", memoize_one__WEBPACK_IMPORTED_MODULE_6___default()(query => {
      return Object.entries(query).some(([key, value]) => key !== 'offset' && key !== 'limit' && value);
    }));

    _defineProperty(this, "updateFilters", (queryParams, collective) => {
      return this.props.router.push({
        pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/submitted-expenses`,
        query: this.buildFilterLinkParams(_objectSpread(_objectSpread({}, queryParams), {}, {
          offset: null
        }))
      });
    });

    _defineProperty(this, "handleSearch", (searchTerm, collective) => {
      const params = this.buildFilterLinkParams({
        searchTerm,
        offset: null
      });
      this.props.router.push({
        pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/submitted-expenses`,
        query: params
      });
    });

    _defineProperty(this, "getTagProps", tag => {
      if (tag === this.props.query.tag) {
        return {
          type: 'info',
          closeButtonProps: true
        };
      }
    });

    _defineProperty(this, "getShouldDisplayFeatureNotSupported", account => {
      if (!account) {
        return true;
      }
    });

    _defineProperty(this, "getSuggestedTags", memoize_one__WEBPACK_IMPORTED_MODULE_6___default()(_lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__/* .getSuggestedTags */ .P5));
  }

  static getInitialProps({
    query
  }) {
    return {
      collectiveSlug: query.collectiveSlug,
      query: {
        offset: parseInt(query.offset) || undefined,
        limit: parseInt(query.limit) || undefined,
        type: lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, query.type) ? query.type : undefined,
        status: lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, query.status) || query.status === 'READY_TO_PAY' ? query.status : undefined,
        payout: lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_13__/* .PayoutMethodType */ .Nk, query.payout) ? query.payout : undefined,
        period: query.period,
        amount: query.amount,
        tag: query.tag,
        searchTerm: query.searchTerm,
        orderBy: query.orderBy
      }
    };
  }

  async componentDidUpdate(oldProps) {
    const {
      LoggedInUser,
      data
    } = this.props;

    if (!oldProps.LoggedInUser && LoggedInUser) {
      if (LoggedInUser.isAdminOfCollectiveOrHost(data.account)) {
        data.refetch();
      }
    }
  }

  getPageMetaData(collective) {
    const baseMetadata = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__/* .getCollectivePageMetadata */ .Xq)(collective);

    if (collective) {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: this.props.intl.formatMessage(messages.title, {
          collectiveName: collective.name
        })
      });
    } else {
      return _objectSpread(_objectSpread({}, baseMetadata), {}, {
        title: `Expenses`
      });
    }
  }

  buildFilterLinkParams(params) {
    const queryParameters = _objectSpread(_objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(this.props.query, ['offset', 'collectiveSlug'])), params);

    return lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(queryParameters, value => !value);
  }

  render() {
    const {
      collectiveSlug,
      data,
      query
    } = this.props;
    const hasFilters = this.hasFilter(query);
    const pageUrl = `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_17__/* .getCollectivePageCanonicalURL */ .Bu)(data.account)}/submitted-expenses`;

    if (!data.loading) {
      if (data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.account || !data.expenses?.nodes) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_15__/* .generateNotFoundError */ .mN)(collectiveSlug),
          log: false
        });
      } else if (!(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__/* .isIndividualAccount */ .Sh)(data.account)) {
        // Hack for funds that want to keep their budget "private"
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
          showContactSupportLink: false
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: data.account,
      canonicalURL: pageUrl
    }, this.getPageMetaData(data.account)), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        collective: data.account,
        isLoading: !data.account,
        selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_20__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        position: "relative",
        minHeight: [null, 800],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
          maxWidth: _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_21__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
          m: "0 auto",
          px: [2, 3, 4],
          py: [0, 5],
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
            justifyContent: "space-between",
            flexWrap: "wrap",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
              flex: "1 1 500px",
              minWidth: 300,
              maxWidth: '100%',
              mr: 0,
              mb: 5,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_38__.H1, {
                  fontSize: "32px",
                  lineHeight: "40px",
                  py: 2,
                  fontWeight: "normal",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                    id: "NpGb+x",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Submitted Expenses"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
                  mx: "auto"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(SearchFormContainer, {
                  p: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                    defaultValue: query.searchTerm,
                    onSubmit: searchTerm => this.handleSearch(searchTerm, data.account),
                    placeholder: undefined
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                my: 24,
                mx: "8px",
                borderWidth: "0.5px"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
                mx: "8px",
                children: data.account ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                  collective: data.account,
                  filters: this.props.query,
                  onChange: queryParams => this.updateFilters(queryParams, data.account),
                  ignoredExpenseStatus: null // We want to show all expense types for users, including drafts and unverified
                  ,
                  wrap: false
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                  height: 70,
                  width: "100%"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Box */ .xu, {
                mt: ['16px', '46px'],
                children: !data?.loading && !data.expenses?.nodes.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                  type: "info",
                  withIcon: true,
                  "data-cy": "zero-expense-message",
                  children: hasFilters ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                    id: "ExpensesList.Empty",
                    defaultMessage: [{
                      "type": 0,
                      "value": "No expense matches the given filters, "
                    }, {
                      "type": 8,
                      "value": "ResetLink",
                      "children": [{
                        "type": 0,
                        "value": "reset them"
                      }]
                    }, {
                      "type": 0,
                      "value": " to see all expenses."
                    }],
                    values: {
                      ResetLink: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                        "data-cy": "reset-expenses-filters",
                        href: pageUrl,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx("span", {
                          children: text
                        })
                      })
                    }
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                    id: "expenses.empty",
                    defaultMessage: [{
                      "type": 0,
                      "value": "No expenses"
                    }]
                  })
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                    isLoading: Boolean(data?.loading),
                    collective: data.account,
                    expenses: data.expenses?.nodes,
                    nbPlaceholders: data.variables.limit,
                    suggestedTags: this.getSuggestedTags(data.account),
                    isInverted: true,
                    view: "submitter",
                    expenseFieldForTotalAmount: "amountInCreatedByAccountCurrency"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_29__/* .Flex */ .kC, {
                    mt: 5,
                    justifyContent: "center",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                      route: pageUrl,
                      total: data.expenses?.totalCount,
                      limit: data.variables.limit,
                      offset: data.variables.offset,
                      ignoredQueryParams: ['collectiveSlug']
                    })
                  })]
                })
              })]
            })
          })
        })
      })]
    }));
  }

}

const submittedExpensesPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query SubmittedExpensesPage(
    $collectiveSlug: String!
    $limit: Int!
    $offset: Int!
    $type: ExpenseType
    $tags: [String]
    $status: ExpenseStatusFilter
    $minAmount: Int
    $maxAmount: Int
    $payoutMethodType: PayoutMethodType
    $dateFrom: DateTime
    $dateTo: DateTime
    $searchTerm: String
    $orderBy: ChronologicalOrderInput
  ) {
    account(slug: $collectiveSlug) {
      id
      legacyId
      slug
      type
      imageUrl
      backgroundImageUrl
      twitterHandle
      name
      currency
      isArchived
      isActive
      settings
      createdAt
      supportedExpenseTypes
      isHost
      features {
        id
        ...NavbarFields
      }
    }
    expenses(
      createdByAccount: { slug: $collectiveSlug }
      limit: $limit
      offset: $offset
      type: $type
      tag: $tags
      status: $status
      minAmount: $minAmount
      maxAmount: $maxAmount
      payoutMethodType: $payoutMethodType
      dateFrom: $dateFrom
      dateTo: $dateTo
      searchTerm: $searchTerm
      orderBy: $orderBy
    ) {
      totalCount
      offset
      limit
      nodes {
        id
        ...ExpensesListFieldsFragment
        amountInCreatedByAccountCurrency: amountV2(currencySource: CREATED_BY_ACCOUNT) {
          value
          valueInCents
          currency
          exchangeRate {
            date
            value
            source
            isApproximate
          }
        }
        host {
          id
          ...ExpenseHostFields
        }
      }
    }
  }

  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_28__/* .expensesListFieldsFragment */ .xe}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_22__/* .collectiveNavbarFieldsFragment */ .AS}
  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_28__/* .expenseHostFields */ .RR}
`;
const addExpensesPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__.graphql)(submittedExpensesPageQuery, {
  options: props => {
    const amountRange = (0,_components_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_18__/* .parseAmountRange */ .t)(props.query.amount);
    const {
      from: dateFrom,
      to: dateTo
    } = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_14__/* .parseDateInterval */ .dr)(props.query.period);
    const orderBy = props.query.orderBy && (0,_components_expenses_filters_ExpensesOrder__WEBPACK_IMPORTED_MODULE_27__/* .parseChronologicalOrderInput */ .P)(props.query.orderBy);
    return {
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_16__/* .API_V2_CONTEXT */ .T,
      variables: {
        collectiveSlug: props.collectiveSlug,
        offset: props.query.offset || 0,
        limit: props.query.limit || EXPENSES_PER_PAGE,
        type: props.query.type,
        status: props.query.status,
        tags: props.query.tag ? props.query.tag === 'untagged' ? null : [props.query.tag] : undefined,
        minAmount: amountRange[0] && amountRange[0] * 100,
        maxAmount: amountRange[1] && amountRange[1] * 100,
        payoutMethodType: props.query.payout,
        dateFrom,
        dateTo,
        orderBy,
        searchTerm: props.query.searchTerm
      }
    };
  }
});
SubmittedExpensesPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getPageMetaData",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
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
  }, {
    "name": "handleSearch",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "searchTerm",
      "type": null
    }, {
      "name": "collective",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getTagProps",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "tag",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getShouldDisplayFeatureNotSupported",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "account",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "SubmittedExpensesPage",
  "props": {
    "data": {
      "required": true,
      "tsType": {
        "name": "DataValue",
        "elements": [{
          "name": "SubmittedExpensesPageQuery"
        }, {
          "name": "SubmittedExpensesPageQueryVariables"
        }],
        "raw": "DataValue<SubmittedExpensesPageQuery, SubmittedExpensesPageQueryVariables>"
      },
      "description": ""
    },
    "query": {
      "required": true,
      "tsType": {
        "name": "Record",
        "elements": [{
          "name": "string"
        }, {
          "name": "unknown"
        }],
        "raw": "Record<string, unknown>"
      },
      "description": ""
    },
    "router": {
      "required": true,
      "tsType": {
        "name": "NextRouter"
      },
      "description": ""
    },
    "LoggedInUser": {
      "required": true,
      "tsType": {
        "name": "LoggedInUser"
      },
      "description": ""
    },
    "intl": {
      "required": true,
      "tsType": {
        "name": "IntlShape"
      },
      "description": ""
    },
    "collectiveSlug": {
      "required": true,
      "tsType": {
        "name": "string"
      },
      "description": ""
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_8__.injectIntl)(addExpensesPageData((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_39__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)(SubmittedExpensesPage)))));
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

/***/ 95050:
/***/ ((module) => {

module.exports = require("react-flip-move");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,5471], () => (__webpack_exec__(92348)));
module.exports = __webpack_exports__;

})();