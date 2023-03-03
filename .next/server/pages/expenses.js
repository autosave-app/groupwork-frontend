"use strict";
(() => {
var exports = {};
exports.id = 4689;
exports.ids = [4689];
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

/***/ 24018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ expenses_ExpenseInfoSidebar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: ./lib/constants/currency-precision.js
var currency_precision = __webpack_require__(19377);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/faqs/FAQ.js
var FAQ = __webpack_require__(99849);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/faqs/CreateExpenseFAQ.js
const _excluded = ["defaultOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const CreateExpenseFAQ = _ref => {
  let {
    defaultOpen
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* default */.ZP, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.getPaid",
          defaultMessage: [{
            "type": 0,
            "value": "How do I get paid from a Collective?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.getPaidDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Submit an expense and provide your payment information."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.howAreApproved",
          defaultMessage: [{
            "type": 0,
            "value": "How are expenses approved?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.howAreApprovedDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Collective admins are notified when an expense is submitted, and they can approve or reject it."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.isItPublic",
          defaultMessage: [{
            "type": 0,
            "value": "Is my private data made public?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.isItPublicDetails",
          defaultMessage: [{
            "type": 0,
            "value": "No. Only the expense amount and description are public. Attachments, payment info, emails and addresses are only visible to you and the admins."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.whenPaid",
          defaultMessage: [{
            "type": 0,
            "value": "When will I get paid?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.whenPaidDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Payments are processed by the Collective's Fiscal Host, the organization that hold funds on their behalf. Many Fiscal Hosts pay expenses weekly, but each one is different."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "FpmEYP",
          defaultMessage: [{
            "type": 0,
            "value": "Why do you need my legal name?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "ntqqkx",
          defaultMessage: [{
            "type": 0,
            "value": "The display name is public and the legal name is private, appearing on receipts, invoices, and other official documentation used for tax and accounting purposes."
          }]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      mt: 2,
      pl: 2,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink/* default */.Z, {
        as: StyledLink/* default */.Z,
        href: "https://docs.opencollective.com/help/expenses-and-getting-paid/submitting-expenses",
        openInNewTab: true,
        fontSize: "12px",
        color: "black.700",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "moreInfo",
          defaultMessage: [{
            "type": 0,
            "value": "More info"
          }]
        }), "\xA0\u2192"]
      })
    })]
  }));
};

CreateExpenseFAQ.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateExpenseFAQ",
  "props": {
    "defaultOpen": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const faqs_CreateExpenseFAQ = (CreateExpenseFAQ);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/Collapse.tsx
var Collapse = __webpack_require__(90175);
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
;// CONCATENATED MODULE: ./components/expenses/ExpandableExpensePolicies.js
const ExpandableExpensePolicies_excluded = ["host", "collective"];

function ExpandableExpensePolicies_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpandableExpensePolicies_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpandableExpensePolicies_ownKeys(Object(source), !0).forEach(function (key) { ExpandableExpensePolicies_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpandableExpensePolicies_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ExpandableExpensePolicies_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ExpandableExpensePolicies_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ExpandableExpensePolicies_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ExpandableExpensePolicies_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const ExpandableExpensePolicies = _ref => {
  let {
    host,
    collective
  } = _ref,
      props = ExpandableExpensePolicies_objectWithoutProperties(_ref, ExpandableExpensePolicies_excluded);

  const hostPolicy = host?.expensePolicy;
  const parentPolicy = collective?.parent?.expensePolicy;
  const accountPolicy = collective?.expensePolicy;

  if (!accountPolicy && !parentPolicy && !hostPolicy) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, ExpandableExpensePolicies_objectSpread(ExpandableExpensePolicies_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Collapse/* default */.Z, {
      defaultIsOpen: true,
      title: /*#__PURE__*/jsx_runtime_.jsx(Text.H5, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "ExpensePolicies",
          defaultMessage: [{
            "type": 0,
            "value": "Expense policies"
          }]
        })
      }),
      children: [hostPolicy && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(HTMLContent/* default */.Z, {
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: hostPolicy
        })
      }), parentPolicy && collective.parent.id !== host?.id && parentPolicy !== accountPolicy && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(HTMLContent/* default */.Z, {
          "data-cy": "expense-policy-html",
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: parentPolicy
        })
      }), accountPolicy && collective.id !== host?.id && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(HTMLContent/* default */.Z, {
          "data-cy": "expense-policy-html",
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: accountPolicy
        })
      })]
    })
  }));
};

ExpandableExpensePolicies.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpandableExpensePolicies",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "expensePolicy": {
            "name": "string",
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "expensePolicy": {
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
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "expensePolicy": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const expenses_ExpandableExpensePolicies = (ExpandableExpensePolicies);
;// CONCATENATED MODULE: ./components/expenses/ExpenseInfoSidebar.js











/**
 * Provide some info (ie. collective balance, tags, policies, etc.) for the expense pages
 * in a sidebar.
 */




const ExpenseInfoSidebar = ({
  isLoading,
  host,
  collective,
  children
}) => {
  const balanceWithBlockedFunds = collective?.stats.balanceWithBlockedFunds;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
    width: "100%",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
      display: ['none', 'block'],
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H5, {
        mb: 3,
        textTransform: "capitalize",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CollectiveBalance",
          defaultMessage: [{
            "type": 5,
            "value": "type",
            "options": {
              "COLLECTIVE": {
                "value": [{
                  "type": 0,
                  "value": "Collective balance"
                }]
              },
              "EVENT": {
                "value": [{
                  "type": 0,
                  "value": "Event balance"
                }]
              },
              "ORGANIZATION": {
                "value": [{
                  "type": 0,
                  "value": "Organization balance"
                }]
              },
              "FUND": {
                "value": [{
                  "type": 0,
                  "value": "Fund balance"
                }]
              },
              "PROJECT": {
                "value": [{
                  "type": 0,
                  "value": "Project balance"
                }]
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": "Account balance"
                }]
              }
            }
          }],
          values: {
            type: collective?.type || '' // collective can be null when it's loading

          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        borderLeft: "1px solid",
        borderColor: "black.300",
        pl: 3,
        fontSize: "20px",
        color: "black.500",
        "data-cy": "collective-balance",
        children: isLoading && !balanceWithBlockedFunds ? /*#__PURE__*/jsx_runtime_.jsx(LoadingPlaceholder/* default */.Z, {
          height: 28,
          width: 75
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(FormattedMoneyAmount/* default */.Z, {
            currency: balanceWithBlockedFunds.currency,
            amount: balanceWithBlockedFunds.valueInCents,
            amountStyles: {
              color: 'black.800'
            },
            precision: currency_precision/* CurrencyPrecision.DEFAULT */.E.DEFAULT
          }), host && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text.P, {
            fontSize: "11px",
            color: "black.600",
            mt: 2,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
              fontSize: "9px",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "black.500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "Fiscalhost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(LinkCollective/* default */.Z, {
              collective: host,
              children: collective?.isActive ? host.name : /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "Fiscalhost.pending",
                defaultMessage: [{
                  "type": 1,
                  "value": "host"
                }, {
                  "type": 0,
                  "value": " (pending)"
                }],
                values: {
                  host: host.name
                }
              })
            })]
          })]
        })
      })]
    }), children && /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      my: 50,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(expenses_ExpandableExpensePolicies, {
      host: host,
      collective: collective,
      mt: 50
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      mt: [0, 50],
      children: /*#__PURE__*/jsx_runtime_.jsx(faqs_CreateExpenseFAQ, {
        withBorderLeft: true,
        withNewButtons: true,
        titleProps: {
          fontSize: '20px',
          fontWeight: 500,
          mb: 3
        }
      })
    })]
  });
};

ExpenseInfoSidebar.__docgenInfo = {
  "description": "Provide some info (ie. collective balance, tags, policies, etc.) for the expense pages\nin a sidebar.",
  "methods": [],
  "displayName": "ExpenseInfoSidebar",
  "props": {
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "To render custom content inside the sidebar",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "Must be provided if isLoading is false",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": false
          },
          "parent": {
            "name": "object",
            "required": false
          },
          "isActive": {
            "name": "bool",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "balanceWithBlockedFunds": {
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
                },
                "required": false
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
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const expenses_ExpenseInfoSidebar = (/*#__PURE__*/external_react_default().memo(ExpenseInfoSidebar));

/***/ }),

/***/ 88136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ExpensesDirection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const I18NLabels = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  RECEIVED: {
    id: "Expense.Direction.Received",
    defaultMessage: [{
      "type": 0,
      "value": "Received"
    }]
  },
  SUBMITTED: {
    id: "Expense.Direction.Submitted",
    defaultMessage: [{
      "type": 0,
      "value": "Submitted"
    }]
  }
});
const DIRECTIONS = Object.keys(I18NLabels);
const ExpensesDirection = ({
  onChange,
  value
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_StyledFilters__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    filters: DIRECTIONS,
    selected: value || DIRECTIONS[0],
    minButtonWidth: "100%",
    onChange: onChange,
    getLabel: value => intl.formatMessage(I18NLabels[value]),
    buttonGrow: 1
  });
};
ExpensesDirection.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpensesDirection",
  "props": {
    "value": {
      "required": true,
      "tsType": {
        "name": "union",
        "raw": "'RECEIVED' | 'SUBMITTED' | null | undefined",
        "elements": [{
          "name": "literal",
          "value": "'RECEIVED'"
        }, {
          "name": "literal",
          "value": "'SUBMITTED'"
        }, {
          "name": "null"
        }, {
          "name": "undefined"
        }]
      },
      "description": ""
    },
    "onChange": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "(direction: 'RECEIVED' | 'SUBMITTED') => void",
        "signature": {
          "arguments": [{
            "name": "direction",
            "type": {
              "name": "union",
              "raw": "'RECEIVED' | 'SUBMITTED'",
              "elements": [{
                "name": "literal",
                "value": "'RECEIVED'"
              }, {
                "name": "literal",
                "value": "'SUBMITTED'"
              }]
            }
          }],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    }
  }
};

/***/ }),

/***/ 99849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "Z0": () => (/* binding */ Separator),
/* harmony export */   "ZP": () => (/* binding */ FAQ),
/* harmony export */   "kS": () => (/* binding */ Entry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87208);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29872);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["children"],
      _excluded2 = ["title", "children", "withBorderLeft", "withNewButtons", "titleProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











/** Main entry container */



const Entry = styled_components__WEBPACK_IMPORTED_MODULE_5___default().details.withConfig({
  displayName: "FAQ__Entry",
  componentId: "sc-1qzv7kx-0"
})(["&[open]{border-color:", ";summary::after{content:'\u2212';}}summary{padding-top:", "px;padding-bottom:", "px;font-size:13px;font-weight:500;color:", ";list-style:none;&:hover{color:", ";}button{display:none;}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;color:", ";font-weight:bold;}summary::-webkit-details-marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.1'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.600'));
const CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "FAQ__CollapseBtn",
  componentId: "sc-1qzv7kx-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_6__.size, styled_system__WEBPACK_IMPORTED_MODULE_6__.space);
/** Entry title */

const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("summary", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(CollapseBtn, {
      size: 18,
      ml: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__.ChevronUp, {
        size: "1em",
        "data-item": "chevron-up",
        style: {
          marginTop: -1
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
        size: "1em",
        "data-item": "chevron-down"
      })]
    })]
  }));
}).withConfig({
  displayName: "FAQ__Title",
  componentId: "sc-1qzv7kx-2"
})(["cursor:pointer;display:flex;justify-content:space-between;align-items:baseline;"]);
/** Entry content (hidden by default) */

const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu).withConfig({
  displayName: "FAQ__Content",
  componentId: "sc-1qzv7kx-3"
})([""]);
Content.defaultProps = {
  py: 2,
  fontSize: '13px',
  color: 'black.600'
};
const Separator = styled_components__WEBPACK_IMPORTED_MODULE_5___default().hr.withConfig({
  displayName: "FAQ__Separator",
  componentId: "sc-1qzv7kx-4"
})(["background:", ";width:100%;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.400'));
/** A simple wrapper to group entries */

const EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "FAQ__EntryContainer",
  componentId: "sc-1qzv7kx-5"
})(["", "{", " ", "}"], Entry, props => props.withNewButtons ? (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["[data-item='chevron-up']{display:none;}&[open]{[data-item='chevron-up']{display:inline-block;}[data-item='chevron-down']{display:none;}}summary::after{display:none;}button{display:block;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["", "{display:none;}"], CollapseBtn), props => props.withBorderLeft && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["border-left:1px solid #dcdee0;padding-left:8px;&:focus-within,&:hover{border-color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500')));
/**
 * A small FAQ with expendable contents.
 */

class FAQ extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const _this$props = this.props,
          {
      title,
      children,
      withBorderLeft,
      withNewButtons,
      titleProps
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded2);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
      children: [title !== null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, _objectSpread(_objectSpread({
        fontWeight: "bold",
        mb: 1,
        color: "black.900"
      }, titleProps), {}, {
        children: title || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "FAQ",
          defaultMessage: [{
            "type": 0,
            "value": "FAQ"
          }]
        })
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(EntryContainer, {
        withBorderLeft: withBorderLeft,
        withNewButtons: withNewButtons,
        children: children
      })]
    }));
  }

}
FAQ.__docgenInfo = {
  "description": "A small FAQ with expendable contents.",
  "methods": [],
  "displayName": "FAQ",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "title": {
      "description": "The title to display above entries. Set to null to disable it.",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "titleProps": {
      "description": "Props for styling the title",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "withBorderLeft": {
      "description": "If true, a border will be displayed on the left",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "withNewButtons": {
      "description": "If true, will display a button with a chevron instead of the `+` sign",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["../Grid"]
};

/***/ }),

/***/ 68953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transferwise_approve_api_action_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30417);
/* harmony import */ var _transferwise_approve_api_action_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_transferwise_approve_api_action_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65985);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97079);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88705);
/* harmony import */ var _icons_TransferwiseIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12173);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_13__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const scheduledExpensesQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query ScheduledExpensesBanner(
    $hostId: String!
    $limit: Int!
    $status: ExpenseStatusFilter
    $payoutMethodType: PayoutMethodType
  ) {
    expenses(host: { id: $hostId }, limit: $limit, status: $status, payoutMethodType: $payoutMethodType) {
      totalCount
      offset
      limit
      nodes {
        id
      }
    }
  }
`;

const ScheduledExpensesBanner = ({
  host,
  onSubmit,
  secondButton,
  expenses
}) => {
  const scheduledExpenses = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(scheduledExpensesQuery, {
    variables: {
      hostId: host.id,
      limit: 100,
      status: 'SCHEDULED_FOR_PAYMENT',
      payoutMethodType: 'BANK_ACCOUNT'
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    scheduledExpenses.refetch();
  }, [expenses]);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_13__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const [showConfirmationModal, setConfirmationModalDisplay] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const hasScheduledExpenses = scheduledExpenses.data?.expenses?.totalCount > 0;

  if (!hasScheduledExpenses) {
    return null;
  }

  const request = (0,_transferwise_approve_api_action_helpers__WEBPACK_IMPORTED_MODULE_2__.create)({
    mode:  false ? 0 : _transferwise_approve_api_action_helpers__WEBPACK_IMPORTED_MODULE_2__.Mode.SANDBOX
  });

  const handlePayBatch = async () => {
    const expenseIds = scheduledExpenses.data.expenses.nodes.map(e => e.id);

    try {
      await request(`${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .getWebsiteUrl */ .ls)()}/api/services/transferwise/pay-batch`, {
        method: 'POST',
        body: JSON.stringify({
          expenseIds,
          hostId: host.id
        }),
        headers: (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .addAuthTokenToHeader */ .Pj)()
      });
      setConfirmationModalDisplay(false);
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_13__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "expenses.scheduled.paybatch.success",
          defaultMessage: [{
            "type": 0,
            "value": "Expenses paid! They're now being processed by Wise."
          }]
        })
      });
      onSubmit?.();
    } catch (e) {
      const message = e?.response ? await e.response.text() : intl.formatMessage({
        id: "MEB9ET",
        defaultMessage: [{
          "type": 0,
          "value": "There was an error trying to process this batch, please "
        }, {
          "type": 8,
          "value": "SupportLink",
          "children": [{
            "type": 0,
            "value": "contact support"
          }]
        }]
      }, {
        SupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_9__/* .I18nSupportLink */ .wl
      });
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_13__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        title: intl.formatMessage({
          id: "HYFu3j",
          defaultMessage: [{
            "type": 0,
            "value": "Batch payment failed"
          }]
        }),
        message
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      type: "success",
      mb: 4,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_icons_TransferwiseIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            size: "1em",
            color: "#25B869",
            mr: 2
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "expenses.scheduled.notification",
            defaultMessage: [{
              "type": 0,
              "value": "You have "
            }, {
              "type": 6,
              "value": "count",
              "options": {
                "one": {
                  "value": [{
                    "type": 7
                  }, {
                    "type": 0,
                    "value": " expense"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 7
                  }, {
                    "type": 0,
                    "value": " expenses"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " scheduled for payment."
            }],
            values: {
              count: scheduledExpenses.data.expenses.totalCount
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
          children: [secondButton, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            buttonSize: "tiny",
            buttonStyle: "successSecondary",
            onClick: () => setConfirmationModalDisplay(true),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "expenses.scheduled.paybatch",
              defaultMessage: [{
                "type": 0,
                "value": "Pay Batch"
              }]
            })
          })]
        })]
      })
    }), showConfirmationModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      zindex: 1000,
      header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "expenses.scheduled.confirmation.title",
        defaultMessage: [{
          "type": 0,
          "value": "Pay Expenses Batch"
        }]
      }),
      body: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "expenses.scheduled.confirmation.body",
        defaultMessage: [{
          "type": 0,
          "value": "Are you sure you want to batch and pay "
        }, {
          "type": 6,
          "value": "count",
          "options": {
            "one": {
              "value": [{
                "type": 7
              }, {
                "type": 0,
                "value": " expense"
              }]
            },
            "other": {
              "value": [{
                "type": 7
              }, {
                "type": 0,
                "value": " expenses"
              }]
            }
          },
          "offset": 0,
          "pluralType": "cardinal"
        }, {
          "type": 0,
          "value": " scheduled for payment?"
        }],
        values: {
          count: scheduledExpenses.data.expenses.totalCount
        }
      }),
      onClose: () => setConfirmationModalDisplay(false),
      continueLabel: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "expense.pay.btn",
        defaultMessage: [{
          "type": 0,
          "value": "Pay with "
        }, {
          "type": 1,
          "value": "paymentMethod"
        }],
        values: {
          paymentMethod: 'Wise'
        }
      }),
      continueHandler: handlePayBatch
    })]
  });
};

ScheduledExpensesBanner.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ScheduledExpensesBanner",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "expenses": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "secondButton": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduledExpensesBanner);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37595:
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
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99708);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56508);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25896);
/* harmony import */ var _components_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(93765);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(97585);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24839);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5824);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(69078);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(73908);
/* harmony import */ var _components_expenses_ExpenseInfoSidebar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24018);
/* harmony import */ var _components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(95487);
/* harmony import */ var _components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11221);
/* harmony import */ var _components_expenses_filters_ExpensesDirection__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(88136);
/* harmony import */ var _components_expenses_filters_ExpensesOrder__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(78877);
/* harmony import */ var _components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(17738);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(16159);
/* harmony import */ var _components_host_dashboard_ScheduledExpensesBanner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(68953);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(92129);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(29242);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(37278);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(84842);
/* harmony import */ var _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(43825);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(79045);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(32606);
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(14540);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_20__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__, _components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_27__, _components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_28__, _components_host_dashboard_ScheduledExpensesBanner__WEBPACK_IMPORTED_MODULE_33__, _components_Page__WEBPACK_IMPORTED_MODULE_37__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_38__, _components_Tags__WEBPACK_IMPORTED_MODULE_41__]);
([_components_collective_navbar__WEBPACK_IMPORTED_MODULE_20__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__, _components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_27__, _components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_28__, _components_host_dashboard_ScheduledExpensesBanner__WEBPACK_IMPORTED_MODULE_33__, _components_Page__WEBPACK_IMPORTED_MODULE_37__, _components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_38__, _components_Tags__WEBPACK_IMPORTED_MODULE_41__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




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
const EXPENSES_PER_PAGE = 10;
const ORDER_SELECT_STYLE = {
  control: {
    background: 'white'
  }
};

class ExpensePage extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hasFilter", memoize_one__WEBPACK_IMPORTED_MODULE_6___default()(query => {
      return Object.entries(query).some(([key, value]) => key !== 'offset' && key !== 'limit' && value);
    }));

    _defineProperty(this, "updateFilters", (queryParams, collective) => {
      return this.props.router.push({
        pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/expenses`,
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
        pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__/* .getCollectivePageCanonicalURL */ .Bu)(collective)}/expenses`,
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
    const {
      parentCollectiveSlug,
      collectiveSlug,
      offset,
      limit,
      type,
      status,
      tag,
      amount,
      payout,
      period,
      searchTerm,
      orderBy,
      direction
    } = query;
    return {
      parentCollectiveSlug,
      collectiveSlug,
      query: {
        offset: parseInt(offset) || undefined,
        limit: parseInt(limit) || undefined,
        type: lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, type) ? type : undefined,
        status: lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, status) || status === 'READY_TO_PAY' ? status : undefined,
        payout: lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_14__/* .PayoutMethodType */ .Nk, payout) ? payout : undefined,
        direction,
        period,
        amount,
        tag,
        searchTerm,
        orderBy
      }
    };
  }

  componentDidMount() {
    const {
      router,
      data
    } = this.props;
    const account = data?.account;

    const queryParameters = _objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(this.props.query, ['offset', 'collectiveSlug', 'parentCollectiveSlug']));

    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__/* .addParentToURLIfMissing */ .Bc)(router, account, `/expenses`, queryParameters);
  }

  componentDidUpdate(oldProps) {
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
    const queryParameters = _objectSpread(_objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(this.props.query, ['offset', 'collectiveSlug', 'parentCollectiveSlug'])), params);

    return lodash_omitBy__WEBPACK_IMPORTED_MODULE_0___default()(queryParameters, value => !value);
  }

  render() {
    const {
      collectiveSlug,
      data,
      query,
      LoggedInUser
    } = this.props;
    const hasFilters = this.hasFilter(query);
    const isSelfHosted = data.account?.id === data.account?.host?.id;

    if (!data.loading) {
      if (data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.account || !data.expenses?.nodes) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_16__/* .generateNotFoundError */ .mN)(collectiveSlug),
          log: false
        });
      } else if (!(0,_lib_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .isFeatureSupported */ .zM)(data.account, _lib_allowed_features__WEBPACK_IMPORTED_MODULE_9__/* .FEATURES.RECEIVE_EXPENSES */ .h6.RECEIVE_EXPENSES)) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {});
      } else if (!(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__/* .loggedInUserCanAccessFinancialData */ .ex)(LoggedInUser, data.account)) {
        // Hack for funds that want to keep their budget "private"
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_PageFeatureNotSupported__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
          showContactSupportLink: false
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: data.account,
      canonicalURL: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__/* .getCollectivePageCanonicalURL */ .Bu)(data.account)}/expenses`
    }, this.getPageMetaData(data.account)), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        collective: data.account,
        isLoading: !data.account,
        selectedCategory: _components_collective_navbar_constants__WEBPACK_IMPORTED_MODULE_21__/* .NAVBAR_CATEGORIES.BUDGET */ .t.BUDGET
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        position: "relative",
        minHeight: [null, 800],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Box */ .xu, {
          maxWidth: _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_22__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH,
          m: "0 auto",
          px: [2, 3, 4],
          py: [0, 5],
          mt: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_42__.H1, {
            fontSize: "32px",
            lineHeight: "40px",
            mb: "32px",
            fontWeight: "normal",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "Expenses",
              defaultMessage: [{
                "type": 0,
                "value": "Expenses"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Flex */ .kC, {
            alignItems: [null, null, 'center'],
            mb: "26px",
            flexWrap: "wrap",
            gap: "16px",
            mr: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Box */ .xu, {
              flex: "0 1",
              flexBasis: ['100%', null, '380px'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_expenses_filters_ExpensesDirection__WEBPACK_IMPORTED_MODULE_29__/* .ExpensesDirection */ .f, {
                value: query.direction,
                onChange: direction => this.updateFilters(_objectSpread(_objectSpread({}, query), {}, {
                  direction
                }), data.account)
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Box */ .xu, {
              flex: "12 1 150px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
                defaultValue: query.searchTerm,
                onSubmit: searchTerm => this.handleSearch(searchTerm, data.account),
                height: "40px"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Box */ .xu, {
              flex: "1 1 150px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_expenses_filters_ExpensesOrder__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                value: query.orderBy,
                onChange: orderBy => this.updateFilters(_objectSpread(_objectSpread({}, query), {}, {
                  orderBy
                }), data.account),
                styles: ORDER_SELECT_STYLE
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Box */ .xu, {
            mx: "8px",
            children: data.account ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_expenses_ExpensesFilters__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              collective: data.account,
              filters: query,
              onChange: queryParams => this.updateFilters(queryParams, data.account),
              wrap: false,
              showOrderFilter: false // On this page, the order filter is displayed at the top

            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
              height: 70
            })
          }), isSelfHosted && LoggedInUser?.isHostAdmin(data.account) && data.scheduledExpenses?.totalCount > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_host_dashboard_ScheduledExpensesBanner__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
            host: data.account
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Flex */ .kC, {
            justifyContent: "space-between",
            flexWrap: "wrap",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Box */ .xu, {
              flex: "1 1 500px",
              minWidth: 300,
              mr: [0, 3, 5],
              mb: 5,
              mt: ['16px', '46px'],
              children: !data?.loading && !data.expenses?.nodes.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
                type: "info",
                withIcon: true,
                "data-cy": "zero-expense-message",
                children: hasFilters ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
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
                    ResetLink: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      "data-cy": "reset-expenses-filters",
                      href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__/* .getCollectivePageRoute */ .x0)(data.account)}/expenses`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx("span", {
                        children: text
                      })
                    })
                  }
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "expenses.empty",
                  defaultMessage: [{
                    "type": 0,
                    "value": "No expenses"
                  }]
                })
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_expenses_ExpensesList__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                  isLoading: Boolean(data?.loading),
                  collective: data.account,
                  host: data.account?.isHost ? data.account : data.account?.host,
                  expenses: data.expenses?.nodes,
                  nbPlaceholders: data.variables.limit,
                  suggestedTags: this.getSuggestedTags(data.account),
                  isInverted: query.direction === 'SUBMITTED'
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Flex */ .kC, {
                  mt: 5,
                  justifyContent: "center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                    route: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__/* .getCollectivePageRoute */ .x0)(data.account)}/expenses`,
                    total: data.expenses?.totalCount,
                    limit: data.variables.limit,
                    offset: data.variables.offset,
                    ignoredQueryParams: ['collectiveSlug', 'parentCollectiveSlug']
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_32__/* .Box */ .xu, {
              minWidth: 270,
              width: ['100%', null, null, 275],
              mt: [0, 48],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_expenses_ExpenseInfoSidebar__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                isLoading: data.loading,
                collective: data.account,
                host: data.account?.host,
                showExpenseTypeFilters: true,
                children: data.account?.expensesTags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsxs)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_42__.H5, {
                    mb: 3,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                      id: "Tags",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Tags"
                      }]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
                    isLoading: data.loading,
                    expense: {
                      tags: data.account?.expensesTags.map(({
                        tag
                      }) => tag)
                    },
                    limit: 30,
                    getTagProps: this.getTagProps,
                    "data-cy": "expense-tags-title",
                    showUntagged: true,
                    children: ({
                      key,
                      tag,
                      renderedTag,
                      props
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_44__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      href: {
                        pathname: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_18__/* .getCollectivePageRoute */ .x0)(data.account)}/expenses`,
                        query: this.buildFilterLinkParams({
                          tag: props.closeButtonProps ? null : tag
                        })
                      },
                      "data-cy": "expense-tags-link",
                      children: renderedTag
                    }, key)
                  })]
                })
              })
            })]
          })]
        })
      })]
    }));
  }

}

const expensesPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query ExpensesPage(
    $collectiveSlug: String!
    $account: AccountReferenceInput
    $fromAccount: AccountReferenceInput
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
      expensesTags {
        id
        tag
      }
      features {
        id
        ...NavbarFields
      }

      stats {
        id
        balanceWithBlockedFunds {
          valueInCents
          currency
        }
      }

      ... on AccountWithHost {
        isApproved
        host {
          id
          ...ExpenseHostFields
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

      ... on Organization {
        # We add that for hasFeature
        isHost
        isActive
      }

      ... on Event {
        parent {
          id
          name
          slug
          type
        }
      }

      ... on Project {
        parent {
          id
          name
          slug
          type
        }
      }
    }
    expenses(
      account: $account
      fromAccount: $fromAccount
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
      }
    }
    # limit: 1 as current best practice to avoid the API fetching entries it doesn't need
    # TODO: We don't need to try and fetch this field on non-host accounts (should use a ... on Host)
    scheduledExpenses: expenses(
      host: { slug: $collectiveSlug }
      status: SCHEDULED_FOR_PAYMENT
      payoutMethodType: BANK_ACCOUNT
      limit: 1
    ) {
      totalCount
    }
  }

  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_31__/* .expensesListFieldsFragment */ .xe}
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_23__/* .collectiveNavbarFieldsFragment */ .AS}
  ${_components_expenses_graphql_fragments__WEBPACK_IMPORTED_MODULE_31__/* .expenseHostFields */ .RR}
`;
const addExpensesPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_5__.graphql)(expensesPageQuery, {
  options: props => {
    const amountRange = (0,_components_budget_filters_AmountFilter__WEBPACK_IMPORTED_MODULE_19__/* .parseAmountRange */ .t)(props.query.amount);
    const {
      from: dateFrom,
      to: dateTo
    } = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_15__/* .parseDateInterval */ .dr)(props.query.period);
    const orderBy = props.query.orderBy && (0,_components_expenses_filters_ExpensesOrder__WEBPACK_IMPORTED_MODULE_30__/* .parseChronologicalOrderInput */ .P)(props.query.orderBy);
    const showSubmitted = props.query.direction === 'SUBMITTED';
    const fromAccount = showSubmitted ? {
      slug: props.collectiveSlug
    } : null;
    const account = !showSubmitted ? {
      slug: props.collectiveSlug
    } : null;
    return {
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_17__/* .API_V2_CONTEXT */ .T,
      variables: {
        collectiveSlug: props.collectiveSlug,
        fromAccount,
        account,
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
ExpensePage.__docgenInfo = {
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
  "displayName": "ExpensePage",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "parentCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
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
          "type": {
            "name": "string",
            "required": false
          },
          "tag": {
            "name": "string",
            "required": false
          },
          "searchTerm": {
            "name": "string",
            "required": false
          },
          "direction": {
            "name": "string",
            "required": false
          },
          "orderBy": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "intl": {
      "description": "from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "loading": {
            "name": "bool",
            "required": false
          },
          "error": {
            "name": "any",
            "required": false
          },
          "refetch": {
            "name": "func",
            "required": false
          },
          "variables": {
            "name": "shape",
            "value": {
              "offset": {
                "name": "number",
                "required": true
              },
              "limit": {
                "name": "number",
                "required": true
              },
              "account": {
                "name": "object",
                "required": false
              }
            },
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "currency": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": false
              },
              "isArchived": {
                "name": "bool",
                "required": false
              },
              "isHost": {
                "name": "bool",
                "required": false
              },
              "host": {
                "name": "object",
                "required": false
              },
              "expensesTags": {
                "name": "array",
                "required": false
              },
              "type": {
                "name": "enum",
                "computed": true,
                "value": "Object.keys(CollectiveType)",
                "required": false
              }
            },
            "required": false
          },
          "expenses": {
            "name": "shape",
            "value": {
              "nodes": {
                "name": "array",
                "required": false
              },
              "totalCount": {
                "name": "number",
                "required": false
              },
              "offset": {
                "name": "number",
                "required": false
              },
              "limit": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          },
          "scheduledExpenses": {
            "name": "shape",
            "value": {
              "totalCount": {
                "name": "number",
                "required": false
              }
            },
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_8__.injectIntl)(addExpensesPageData((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_43__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_7__.withRouter)(ExpensePage)))));
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

/***/ 30417:
/***/ ((module) => {

module.exports = require("@transferwise/approve-api-action-helpers");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,7772,8208,5471], () => (__webpack_exec__(37595)));
module.exports = __webpack_exports__;

})();