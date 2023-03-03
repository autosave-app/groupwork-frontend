"use strict";
(() => {
var exports = {};
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 27596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ DEFAULT_AMOUNT_STYLES)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19377);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80642);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93129);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/** Default styles for the amount (not including currency) */


const DEFAULT_AMOUNT_STYLES = {
  letterSpacing: 0,
  fontWeight: 'bold',
  color: 'black.900'
};
const EMPTY_AMOUNT_PLACEHOLDER = '--.--';
/**
 * A practical component to format amounts and their intervals with proper
 * internationalization support.
 */

const FormattedMoneyAmount = ({
  formatWithSeparators,
  abbreviateInterval,
  currency,
  precision,
  amount,
  interval,
  frequency,
  amountStyles,
  showCurrencyCode,
  currencyCodeStyles,
  isCrypto
}) => {
  if (!currency) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: EMPTY_AMOUNT_PLACEHOLDER
    }));
  }

  const formattedAmount = isNaN(amount) || lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(amount) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
    children: EMPTY_AMOUNT_PLACEHOLDER
  })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread({
    value: amount,
    currency: currency,
    precision: precision,
    formatWithSeparators: formatWithSeparators
  }, amountStyles));

  if (frequency) {
    interval = (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .getIntervalFromContributionFrequency */ .Pw)(frequency);
  }

  const currencyCode = showCurrencyCode ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, currencyCodeStyles), {}, {
    children: currency
  })) : '';

  if (isCrypto) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, _objectSpread(_objectSpread({}, amountStyles), {}, {
      children: `${amount} ${currency}`
    }));
  } else if (!interval || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].flexible || interval === _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_4__["default"].oneTime) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "Amount",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }],
      values: {
        amount: formattedAmount,
        currencyCode
      }
    });
  } else if (abbreviateInterval) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "AmountInterval",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }, {
        "type": 0,
        "value": " / "
      }, {
        "type": 5,
        "value": "interval",
        "options": {
          "month": {
            "value": [{
              "type": 0,
              "value": "mo."
            }]
          },
          "year": {
            "value": [{
              "type": 0,
              "value": "yr."
            }]
          },
          "other": {
            "value": []
          }
        }
      }],
      values: {
        amount: formattedAmount,
        interval: interval ?? '',
        currencyCode
      }
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "AmountIntervalLong",
      defaultMessage: [{
        "type": 1,
        "value": "amount"
      }, {
        "type": 0,
        "value": " "
      }, {
        "type": 1,
        "value": "currencyCode"
      }, {
        "type": 0,
        "value": " / "
      }, {
        "type": 5,
        "value": "interval",
        "options": {
          "month": {
            "value": [{
              "type": 0,
              "value": "month"
            }]
          },
          "year": {
            "value": [{
              "type": 0,
              "value": "year"
            }]
          },
          "other": {
            "value": []
          }
        }
      }],
      values: {
        amount: formattedAmount,
        interval: interval ?? '',
        currencyCode
      }
    });
  }
};

FormattedMoneyAmount.defaultProps = {
  abbreviate: false,
  abbreviateInterval: false,
  precision: _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyPrecision.DEFAULT */ .E.DEFAULT,
  amountStyles: DEFAULT_AMOUNT_STYLES,
  showCurrencyCode: true
};
FormattedMoneyAmount.__docgenInfo = {
  "description": "A practical component to format amounts and their intervals with proper\ninternationalization support.",
  "methods": [],
  "displayName": "FormattedMoneyAmount",
  "props": {
    "abbreviate": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "required": false
    },
    "abbreviateInterval": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Abbreviate the interval (eg. year => yr.)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "precision": {
      "defaultValue": {
        "value": "CurrencyPrecision.DEFAULT",
        "computed": true
      },
      "description": "How many numbers should we display after the comma",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "enum",
          "value": [{
            "value": "'auto'",
            "computed": false
          }]
        }]
      },
      "required": false
    },
    "amountStyles": {
      "defaultValue": {
        "value": "{ letterSpacing: 0, fontWeight: 'bold', color: 'black.900' }",
        "computed": false
      },
      "description": "Style for the amount (eg. `$10`). Doesn't apply on interval",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "showCurrencyCode": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Whether to show the full currency code (ie. USD)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "amount": {
      "description": "The amount to display, in cents",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "currency": {
      "description": "The currency (eg. `USD`, `EUR`...etc)",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "interval": {
      "description": "An interval that goes with the amount",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'month'",
          "computed": false
        }, {
          "value": "'year'",
          "computed": false
        }, {
          "value": "'oneTime'",
          "computed": false
        }]
      },
      "required": false
    },
    "frequency": {
      "description": "ContributionFrequency from GQLV2",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'MONTHLY'",
          "computed": false
        }, {
          "value": "'YEARLY'",
          "computed": false
        }, {
          "value": "'ONETIME'",
          "computed": false
        }]
      },
      "required": false
    },
    "currencyCodeStyles": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "formatWithSeparators": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattedMoneyAmount);

/***/ }),

/***/ 42388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92129);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



/**
 * `Contributor` type is meant to surface all types of contributors, even the one that
 * may not be registered yet on Open Collective -- for example, Github contributors.
 * The component will automatically fallback on displaying a `span` if the contributor
 * cannot be linked to on Open Collective.
 *
 * In the future it may also link to external profiles like Github.
 */



const LinkContributor = ({
  contributor,
  children
}) => {
  if (contributor.isGuest) {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "profile.guest",
      defaultMessage: [{
        "type": 0,
        "value": "Guest"
      }]
    });
  } else if (contributor.isIncognito) {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "profile.incognito",
      defaultMessage: [{
        "type": 0,
        "value": "Incognito"
      }]
    });
  } else if (contributor.collectiveSlug) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      href: `/${contributor.collectiveSlug}`,
      children: children || contributor.name
    });
  } else {
    return children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      children: contributor.name
    });
  }
};

LinkContributor.__docgenInfo = {
  "description": "`Contributor` type is meant to surface all types of contributors, even the one that\nmay not be registered yet on Open Collective -- for example, Github contributors.\nThe component will automatically fallback on displaying a `span` if the contributor\ncannot be linked to on Open Collective.\n\nIn the future it may also link to external profiles like Github.",
  "methods": [],
  "displayName": "LinkContributor",
  "props": {
    "contributor": {
      "description": "The contributor to link to",
      "type": {
        "name": "shape",
        "value": {
          "collectiveSlug": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          },
          "isGuest": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "children": {
      "description": "By default we show the name in the link. Use this prop to override this",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkContributor);

/***/ }),

/***/ 1948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71156);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66465);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11194);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _LinkContributor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42388);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const ContributorsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC).withConfig({
  displayName: "TopContributors__ContributorsList",
  componentId: "sc-b7r4y1-0"
})(["flex-wrap:wrap;margin-bottom:16px;flex-direction:row;@media (max-width:64em){& > *:nth-child(1n + 6){display:none;}}@media (max-width:88em){& > *:nth-child(1n + 11){display:none;}}"]);
const ContributorItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "TopContributors__ContributorItem",
  componentId: "sc-b7r4y1-1"
})(["display:flex;margin:0 24px 16px 0;width:200px;"]);
const AvatarWithRank = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "TopContributors__AvatarWithRank",
  componentId: "sc-b7r4y1-2"
})(["width:63px;min-width:63px;height:32px;margin-right:8px;background:white;display:flex;justify-content:space-between;align-items:center;padding-left:14px;font-size:10px;border-radius:32px;"]);
const ContributorName = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "TopContributors__ContributorName",
  componentId: "sc-b7r4y1-3"
})(["font-size:12px;line-height:18px;font-weight:700;color:", ";letter-spacing:-0.4px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:100%;"], props => props.theme.colors.black[800]);
/**
 * Returns the flex-basis as a string in `px` based on the percentage of
 * contributors that belongs in this column.
 */

const getFlexBasisForCol = (nbContributors, totalContributors) => {
  const baseSpaceBetween = 0.1;
  const maxPercentage = 0.75;
  const percentageNbContributors = nbContributors / totalContributors;
  const width = Math.min(percentageNbContributors - baseSpaceBetween, maxPercentage); // If one of the two blocks has less contributors but still two columns, we
  // force the size two make sure both columns are displayed

  if (percentageNbContributors <= 0.45 && nbContributors > 5) {
    return '40%';
  }

  return `${Math.trunc(width * 100)}%`;
};
/**
 * Shows a list of contributors with the section title. Auto-size based on number
 * of contributors.
 */


const ContributorsBlock = ({
  title,
  contributors,
  totalNbContributors,
  currency,
  showTitle
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const isFillingFullscreen = contributors.length === totalNbContributors && contributors.length === 20;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
    flex: "50% 1 3",
    style: {
      flexBasis: getFlexBasisForCol(contributors.length, totalNbContributors)
    },
    children: [showTitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "500",
      color: "black.700",
      mb: "20px",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorsList, {
      justifyContent: isFillingFullscreen ? [null, null, null, null, 'space-between'] : 'flex-start',
      children: contributors.map((contributor, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ContributorItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(AvatarWithRank, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
            children: idx + 1
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_LinkContributor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            contributor: contributor,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_6__/* .ContributorAvatar */ .BD, {
              contributor: contributor,
              radius: 32
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
          flex: "1 1",
          maxWidth: "calc(100% - 63px)",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_LinkContributor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            contributor: contributor,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorName, {
              children: contributor.isIncognito ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "profile.incognito",
                defaultMessage: [{
                  "type": 0,
                  "value": "Incognito"
                }]
              }) : contributor.name
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
            color: "black.700",
            fontSize: "10px",
            lineHeight: "14px",
            children: contributor.totalAmountDonated ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "TotalDonatedSince",
              defaultMessage: [{
                "type": 1,
                "value": "totalDonated"
              }, {
                "type": 0,
                "value": " since "
              }, {
                "type": 1,
                "value": "date"
              }],
              values: {
                date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedDate, {
                  value: contributor.since,
                  month: "short",
                  year: "numeric"
                }),
                totalDonated: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  amountStyles: null,
                  amount: contributor.totalAmountDonated,
                  currency: currency,
                  precision: 0,
                  formatWithSeparators: true
                })
              }
            }) : contributor.isAdmin ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, 'ADMIN') : contributor.isCore ? (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, 'MEMBER') : (0,_lib_i18n_member_role__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(intl, contributor.roles[0])
          })]
        })]
      }, contributor.id))
    })]
  });
};

/**
 * Shows two columns as leaderboards for organizations and individuals
 * financial contributions.
 */
const TopContributors = ({
  organizations,
  individuals,
  currency
}) => {
  const nbOrgs = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(organizations);

  const nbIndividuals = lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(individuals);

  const totalNbContributors = nbOrgs + nbIndividuals;
  const hasBothTypes = Boolean(nbOrgs && nbIndividuals); // Nothing to render if there's no one to show

  if (!totalNbContributors) {
    return null;
  } // Build the individual blocks in variables so we can sort them later


  const BlockIndividuals = nbIndividuals > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorsBlock, {
    currency: currency,
    contributors: individuals,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "TopContributors.Individuals",
      defaultMessage: [{
        "type": 0,
        "value": "Individuals"
      }]
    }),
    showTitle: hasBothTypes
  });

  const BlockOrgs = nbOrgs > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ContributorsBlock, {
    currency: currency,
    contributors: organizations,
    totalNbContributors: totalNbContributors,
    title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "TopContributors.Organizations",
      defaultMessage: [{
        "type": 0,
        "value": "Organizations"
      }]
    }),
    showTitle: hasBothTypes
  }); // Put the blocks with the most contributors first. If equals, default is to show orgs first.


  const Blocks = nbIndividuals > nbOrgs ? [BlockIndividuals, BlockOrgs] : [BlockOrgs, BlockIndividuals];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
    flexWrap: "wrap",
    "justify-content": "space-between",
    children: [Blocks[0], Blocks[1]]
  });
};

TopContributors.__docgenInfo = {
  "description": "Shows two columns as leaderboards for organizations and individuals\nfinancial contributions.",
  "methods": [],
  "displayName": "TopContributors",
  "props": {
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "organizations": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "individuals": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopContributors);

/***/ }),

/***/ 80642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getGQLV2FrequencyFromInterval": () => (/* binding */ getGQLV2FrequencyFromInterval)
/* harmony export */ });
const INTERVALS = {
  oneTime: 'oneTime',
  month: 'month',
  year: 'year',
  flexible: 'flexible'
};
const getGQLV2FrequencyFromInterval = interval => {
  switch (interval) {
    case INTERVALS.month:
      return 'MONTHLY';

    case INTERVALS.year:
      return 'YEARLY';

    case INTERVALS.flexible:
      return 'FLEXIBLE';

    default:
      return 'ONETIME';
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INTERVALS);

/***/ }),

/***/ 15078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B1": () => (/* binding */ getNextChargeDate),
/* harmony export */   "EB": () => (/* binding */ encodeDateInterval),
/* harmony export */   "GF": () => (/* binding */ simpleDateToISOString),
/* harmony export */   "Pw": () => (/* binding */ getIntervalFromContributionFrequency),
/* harmony export */   "Zz": () => (/* binding */ convertDateToApiUtc),
/* harmony export */   "cq": () => (/* binding */ convertDateFromApiUtc),
/* harmony export */   "dr": () => (/* binding */ parseDateInterval),
/* harmony export */   "fM": () => (/* binding */ toIsoDateStr),
/* harmony export */   "j9": () => (/* binding */ getDateFromValue),
/* harmony export */   "qb": () => (/* binding */ isValidDate),
/* harmony export */   "xR": () => (/* binding */ stripTime)
/* harmony export */ });
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96839);
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_padStart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80642);
/* harmony import */ var _dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82114);



/**
 * For a given date, return the next charge date.
 *
 * @param {Date} firstChargeDate
 * @param {month|year} interval
 */

const getNextChargeDate = (firstChargeDate, interval) => {
  if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].month) {
    if (firstChargeDate.getDate() > 15) {
      return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 2);
    }

    return new Date(firstChargeDate.getFullYear(), firstChargeDate.getMonth() + 1);
  } else if (interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].year) {
    return new Date(firstChargeDate.getFullYear() + 1, firstChargeDate.getMonth());
  } else {
    return null;
  }
};
/**
 * Format a datetime object to an ISO date like `YYYY-MM-DD`
 */

const toIsoDateStr = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();
  return `${year}-${lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default()(month.toString(), 2, '0')}-${lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default()(day.toString(), 2, '0')}`;
};
/**
 * From an order frequency provided as `ContributionFrequency` GQLV2 enum, returns an interval
 * as we use it in the DB (ie. MONTHLY => month)
 */

const getIntervalFromContributionFrequency = input => {
  switch (input) {
    case 'MONTHLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].month;

    case 'YEARLY':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].year;

    case 'FLEXIBLE':
      return _constants_intervals__WEBPACK_IMPORTED_MODULE_1__["default"].flexible;

    default:
      return null;
  }
};
/**
 * Takes a date and returns it as a string in the format YYYY-MM-DD
 */

const stripTime = date => {
  if (!date) {
    return '';
  } else {
    return (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date).format('YYYY-MM-DD');
  }
};
/**
 * A helper that returns a Date object from different types of input.
 * Currently supports:
 * - string: ISO date string
 * - Date object
 * - DayJS object
 * - null
 */

const getDateFromValue = value => {
  if (!value) {
    return null;
  } else if (typeof value === 'string') {
    return new Date(value);
  } else if (value instanceof Date) {
    return value;
  } else if (value instanceof _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {
    return value.toDate();
  }
};
/**
 * From a simple date as '2020-01-01', returns a string like '2020-01-01T00:00:00Z'.
 */

const simpleDateToISOString = (date, isEndOfDay, timezoneType) => {
  if (!date) {
    return null;
  } else {
    const isUTC = timezoneType === 'UTC';
    const dayjsTimeMethod = isEndOfDay ? 'endOf' : 'startOf';
    const result = isUTC ? _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].utc */ .Z.utc(date) : (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date);
    return result[dayjsTimeMethod]('day').toISOString();
  }
};
/**
 * Parse `strValue` in a "dateFrom→dateTo" format and returns an object like { from, to, timezoneType }.
 * Each value in the object will be `undefined` if there's no filter for it.
 */

const parseDateInterval = strValue => {
  const parsedValue = strValue?.match(/^(?<from>[^→]+)(→(?<to>.+?(?=~UTC|$)))?(~(?<timezoneType>UTC))?$/);

  if (parsedValue) {
    const getDateIsoString = dateStr => !dateStr || dateStr === 'all' ? undefined : dateStr;

    return {
      from: getDateIsoString(parsedValue.groups.from),
      to: getDateIsoString(parsedValue.groups.to),
      timezoneType: parsedValue.groups.timezoneType || 'local'
    };
  } else {
    return {
      from: undefined,
      to: undefined,
      timezoneType: 'local'
    };
  }
};
/**
 * Opposite of `parseDateInterval`: takes an object like {from, to, timezoneType} and returns a string
 * like "from→to".
 */

const encodeDateInterval = interval => {
  if (!interval || !interval.from && !interval.to) {
    return '';
  }

  const encodeDate = (date, isEndOfDay) => {
    return simpleDateToISOString(date, isEndOfDay, interval.timezoneType) || 'all';
  };

  const baseResult = `${encodeDate(interval.from, false)}→${encodeDate(interval.to, true)}`;
  return interval.timezoneType === 'UTC' ? `${baseResult}~UTC` : baseResult;
};
const convertDateToApiUtc = (date, timezone) => {
  const result = _dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"].tz */ .Z.tz(date, timezone).utc().format('YYYY-MM-DD HH:mm:ss+00'); // console.log('convertDateToApiUtc', date, timezone, result);

  return result;
};
const convertDateFromApiUtc = (date, timezone) => {
  const result = (0,_dayjs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date).tz(timezone).format('YYYY-MM-DD HH:mm:ss'); // console.log('convertDateFromApiUtc', date, timezone, result);

  return result;
};
/**
 * Check if the date is valid while editing
 */

const isValidDate = date => {
  return date && !date.startsWith('0');
};

/***/ }),

/***/ 82114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);


 // In-order to use certain functionality of dayjs, we need to import certain plugins and extend them to the dayjs object.
// adding utc plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default())); // adding timezone plugin

dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ 56157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addCollectiveBannerIframeData": () => (/* binding */ addCollectiveBannerIframeData),
  "default": () => (/* binding */ banner_iframe)
});

// EXTERNAL MODULE: external "lodash/partition"
var partition_ = __webpack_require__(32027);
var partition_default = /*#__PURE__*/__webpack_require__.n(partition_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "@apollo/client/react/components"
var components_ = __webpack_require__(72743);
// EXTERNAL MODULE: external "@apollo/client/react/hoc"
var hoc_ = __webpack_require__(95159);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/collective-page/TopContributors.js
var TopContributors = __webpack_require__(1948);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: external "lodash/uniqBy"
var uniqBy_ = __webpack_require__(69309);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Error.js
var Error = __webpack_require__(12665);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/CollectiveCard.js
var CollectiveCard = __webpack_require__(68654);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/Member.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const MemberContainer = external_styled_components_default().div.withConfig({
  displayName: "Member__MemberContainer",
  componentId: "sc-1odvszo-0"
})(["max-width:300px;float:left;position:relative;.USER{margin:0.5rem 0.25rem;}.small{width:48px;}.small .avatar{margin:0;}.ORGANIZATION,.COLLECTIVE{width:200px;margin:1rem;}"]);

class Member extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.messages = (0,external_react_intl_.defineMessages)({
      'membership.since': {
        id: "membership.since",
        defaultMessage: [{
          "type": 0,
          "value": "since "
        }, {
          "type": 1,
          "value": "date"
        }]
      },
      ADMIN: {
        id: "Member.Role.ADMIN",
        defaultMessage: [{
          "type": 0,
          "value": "Admin"
        }]
      },
      MEMBER: {
        id: "Member.Role.MEMBER",
        defaultMessage: [{
          "type": 0,
          "value": "Core Contributor"
        }]
      },
      BACKER: {
        id: "Member.Role.BACKER",
        defaultMessage: [{
          "type": 0,
          "value": "Financial Contributor"
        }]
      },
      'membership.totalDonations': {
        id: "membership.totalDonations",
        defaultMessage: [{
          "type": 0,
          "value": "Total amount contributed"
        }]
      }
    });
  }

  render() {
    const {
      collective,
      intl
    } = this.props;

    const membership = _objectSpread({}, this.props.member);

    membership.collective = collective;
    const {
      member,
      description
    } = membership;
    const viewMode = this.props.viewMode || (get_default()(member, 'type') === 'USER' ? 'USER' : 'ORGANIZATION');
    const user = member.user || {};
    const name = (member.name && member.name.match(/^null/) ? null : member.name) || member.slug || user.email && user.email.substr(0, user.email.indexOf('@'));

    if (!name) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    const tierName = membership.tier ? (0,utils/* singular */.hP)(membership.tier.name) : this.messages[membership.role] ? intl.formatMessage(this.messages[membership.role]) : membership.role;
    let memberSinceStr = '';

    if (tierName) {
      memberSinceStr += (0,utils/* capitalize */.kC)(tierName);
    }

    memberSinceStr += ` ${intl.formatMessage(this.messages['membership.since'], {
      date: (0,utils/* formatDate */.p6)(membership.createdAt),
      tierName: tierName ? (0,utils/* capitalize */.kC)(tierName) : ''
    })}`;
    const className = this.props.className || '';
    const totalDonationsStr = membership.stats ? `${intl.formatMessage(this.messages['membership.totalDonations'])}: ${(0,currency_utils/* formatCurrency */.xG)(membership.stats.totalDonations, collective.currency, {
      precision: 0,
      locale: intl.locale
    })}` : '';
    let title = member.name;

    if (member.company) {
      title += `
${member.company}`;
    }

    if (member.description) {
      title += `
${member.description}`;
    }

    if (className.match(/small/)) {
      title += `

${memberSinceStr}
${totalDonationsStr}`;
    }

    return /*#__PURE__*/jsx_runtime_.jsx(MemberContainer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        className: `${className} ${member.type} viewMode-${viewMode}`,
        children: [viewMode === 'USER' && /*#__PURE__*/jsx_runtime_.jsx(LinkCollective/* default */.Z, {
          collective: this.props.member.member,
          target: "_top",
          title: title,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
            mt: 2,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Avatar/* default */.ZP, {
              collective: member,
              radius: 45,
              className: "noFrame"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
              padding: "1rem",
              paddingTop: "0",
              textAlign: "left",
              overflow: "hidden",
              display: "none",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
                fontSize: "1.7rem",
                children: name
              }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
                fontSize: "1.4rem",
                color: "black.600",
                children: (0,utils/* firstSentence */.u5)(description || member.description, 64)
              }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
                className: "since",
                fontSize: "1.4rem",
                children: memberSinceStr
              }), totalDonationsStr && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
                className: "totalDonations",
                fontSize: "1.4rem",
                color: "black.600",
                children: totalDonationsStr
              })]
            })]
          })
        }), viewMode === 'ORGANIZATION' && /*#__PURE__*/jsx_runtime_.jsx(CollectiveCard/* default */.Z, {
          collective: member,
          membership: membership
        })]
      })
    });
  }

}

Member.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Member",
  "props": {
    "member": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "viewMode": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "className": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_Member = ((0,external_react_intl_.injectIntl)(Member));
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
;// CONCATENATED MODULE: ./components/MembersWithData.js


function MembersWithData_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const MEMBERS_PER_PAGE = 10;
const MembersContainer = external_styled_components_default().div.withConfig({
  displayName: "MembersWithData__MembersContainer",
  componentId: "sc-imktpv-0"
})([".filterBtnGroup{width:100%;}.filterBtn{width:33%;}"]);

class MembersWithData extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    MembersWithData_defineProperty(this, "onChange", () => {
      const {
        onChange
      } = this.props;
      onChange && this.node && onChange({
        height: this.node.offsetHeight
      });
    });

    MembersWithData_defineProperty(this, "fetchMore", e => {
      e.target.blur();
      this.setState({
        loading: true
      });
      this.props.fetchMore().then(() => {
        this.setState({
          loading: false
        });
        this.onChange();
      });
    });

    this.state = {
      role: null,
      loading: false
    };
  }

  componentDidMount() {
    this.onChange();
  }

  render() {
    const {
      data,
      LoggedInUser,
      collective,
      tier,
      type
    } = this.props;

    if (data.error) {
      return /*#__PURE__*/jsx_runtime_.jsx(Error/* default */.Z, {
        message: data.error.message
      });
    }

    if (!data.allMembers) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    }

    let members = [...data.allMembers];

    if (members.length === 0) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {});
    } // sort by totalDonations, then createdAt date, then alphabetically
    // it's important to have a consistent sorting across environments and browsers


    members.sort((a, b) => {
      if (b.stats.totalDonations !== a.stats.totalDonations) {
        return b.stats.totalDonations - a.stats.totalDonations;
      } else if (a.createdAt !== b.createdAt) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return a.collective.name.localeCompare(b.collective.name);
      }
    }); // Make sure we display unique members
    // that should ultimately be addressed on the API side

    members = uniqBy_default()(members, member => member.member.id);
    const size = members.length > 50 ? 'small' : 'large';
    let viewMode = type && type.split(',')[0] || 'USER';

    if (tier && tier.name.match(/sponsor/i)) {
      viewMode = 'ORGANIZATION';
    }

    const limit = this.props.limit || MEMBERS_PER_PAGE * 2;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MembersContainer, {
      ref: node => this.node = node,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        className: "cardsList",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        overflow: "hidden",
        margin: "1rem 0",
        children: members.map(member => /*#__PURE__*/jsx_runtime_.jsx(components_Member, {
          member: member,
          className: external_classnames_default()(this.props.className, size),
          collective: collective,
          viewMode: viewMode,
          LoggedInUser: LoggedInUser
        }, member.id))
      }), members.length % 10 === 0 && members.length >= limit && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        margin: "1rem",
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledButton/* default */.Z, {
          onClick: this.fetchMore,
          children: [this.state.loading && /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "loading",
            defaultMessage: [{
              "type": 0,
              "value": "loading"
            }]
          }), !this.state.loading && /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "loadMore",
            defaultMessage: [{
              "type": 0,
              "value": "load more"
            }]
          })]
        })
      })]
    });
  }

}

const membersQuery = helpers/* gqlV1 */.N
/* GraphQL */
`
  query Members(
    $collectiveSlug: String!
    $TierId: Int
    $role: String
    $type: String
    $limit: Int
    $offset: Int
    $orderBy: String
  ) {
    allMembers(
      collectiveSlug: $collectiveSlug
      TierId: $TierId
      role: $role
      type: $type
      limit: $limit
      offset: $offset
      orderBy: $orderBy
    ) {
      id
      role
      createdAt
      collective {
        id
        name
      }
      stats {
        id
        totalDonations
      }
      tier {
        id
        name
      }
      member {
        id
        type
        name
        company
        description
        slug
        website
        imageUrl
        backgroundImage
        isIncognito
      }
    }
  }
`;
const addMembersData = (0,hoc_.graphql)(membersQuery, {
  options: props => ({
    variables: {
      collectiveSlug: props.collective.slug,
      TierId: props.tier && props.tier.id,
      offset: 0,
      type: props.type,
      role: props.memberRole,
      orderBy: props.orderBy,
      limit: props.limit || MEMBERS_PER_PAGE * 2
    }
  }),
  props: ({
    data
  }) => ({
    data,
    fetchMore: () => {
      return data.fetchMore({
        variables: {
          offset: data.allMembers.length,
          limit: MEMBERS_PER_PAGE
        },
        updateQuery: (previousResult, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }

          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allMembers: [...previousResult.allMembers, ...fetchMoreResult.allMembers]
          });
        }
      });
    }
  })
});
MembersWithData.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "fetchMore",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "MembersWithData",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "object"
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
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
    "fetchMore": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "className": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "memberRole": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "type": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_MembersWithData = (addMembersData(MembersWithData));
// EXTERNAL MODULE: ./components/MessageBoxGraphqlError.js
var MessageBoxGraphqlError = __webpack_require__(68185);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
;// CONCATENATED MODULE: ./pages/banner-iframe.js


function banner_iframe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const topContributorsQuery = client_.gql`
  query BannerTopContributors($collectiveSlug: String!) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      currency
      slug
      ... on AccountWithContributions {
        contributors(limit: 150) {
          totalCount
          nodes {
            id
            name
            roles
            isAdmin
            isCore
            isBacker
            since
            image
            description
            collectiveSlug
            totalAmountDonated
            type
            publicMessage
            isIncognito
          }
        }
      }
    }
  }
`;
const ContributeButton = external_styled_components_default().div.withConfig({
  displayName: "banner-iframe__ContributeButton",
  componentId: "sc-1csshx4-0"
})(["width:338px;height:50px;overflow:hidden;margin:0;padding:0;background-repeat:no-repeat;float:left;border:none;background-color:transparent;cursor:pointer;background-image:url(/static/images/buttons/contribute-button-blue.svg);:hover{background-position:0 -50px;}:active{background-position:0 -100px;}:focus{outline:0;}"]);
const IFrameContainer = external_styled_components_default().div.withConfig({
  displayName: "banner-iframe__IFrameContainer",
  componentId: "sc-1csshx4-1"
})(["overflow:hidden;@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url('/static/fonts/inter/Inter-Regular.woff2') format('woff2'),url('/static/fonts/inter/Inter-Regular.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:400;font-display:swap;src:url('/static/fonts/inter/Inter-Italic.woff2') format('woff2'),url('/static/fonts/inter/Inter-Italic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url('/static/fonts/inter/Inter-Medium.woff2') format('woff2'),url('/static/fonts/inter/Inter-Medium.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:500;font-display:swap;src:url('/static/fonts/inter/Inter-MediumItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-MediumItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url('/static/fonts/inter/Inter-SemiBold.woff2') format('woff2'),url('/static/fonts/inter/Inter-SemiBold.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:600;font-display:swap;src:url('/static/fonts/inter/Inter-SemiBoldItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-SemiBoldItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url('/static/fonts/inter/Inter-Bold.woff2') format('woff2'),url('/static/fonts/inter/Inter-Bold.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:700;font-display:swap;src:url('/static/fonts/inter/Inter-BoldItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-BoldItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:swap;src:url('/static/fonts/inter/Inter-ExtraBold.woff2') format('woff2'),url('/static/fonts/inter/Inter-ExtraBold.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:800;font-display:swap;src:url('/static/fonts/inter/Inter-ExtraBoldItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-ExtraBoldItalic.woff') format('woff');}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:swap;src:url('/static/fonts/inter/Inter-Black.woff2') format('woff2'),url('/static/fonts/inter/Inter-Black.woff') format('woff');}@font-face{font-family:'Inter';font-style:italic;font-weight:900;font-display:swap;src:url('/static/fonts/inter/Inter-BlackItalic.woff2') format('woff2'),url('/static/fonts/inter/Inter-BlackItalic.woff') format('woff');}a{text-decoration:none;color:", " cursor:pointer;font-size:14px;}.actions{text-align:center;}h2{font-size:16px;margin-bottom:0;font-weight:300;text-align:center;}ul{list-style:none;padding:0;}"], style => style.a && style.a.color || '#46b0ed');

class BannerIframe extends (external_react_default()).Component {
  static getInitialProps({
    query: {
      collectiveSlug,
      id,
      style,
      useNewFormat
    },
    req,
    res
  }) {
    // Allow to be embedded as Iframe everywhere
    if (res) {
      res.removeHeader('X-Frame-Options');

      if (req && (req.language || req.locale === 'en')) {
        res.set('Cache-Control', 'public, s-maxage=7200');
      }
    }

    return {
      collectiveSlug,
      id,
      style,
      useNewFormat: Boolean(useNewFormat)
    };
  }

  constructor(props) {
    super(props);

    banner_iframe_defineProperty(this, "onChange", () => {
      this.height = this.node && this.node.offsetHeight;
      this.sendMessageToParentWindow();
    });

    banner_iframe_defineProperty(this, "sendMessageToParentWindow", () => {
      if (!window.parent) {
        return;
      }

      if (!this.height) {
        return;
      }

      const message = `oc-${JSON.stringify({
        id: this.props.id,
        height: this.height
      })}`;
      window.parent.postMessage(message, '*');
    });

    banner_iframe_defineProperty(this, "renderTopContributors", collective => {
      const [orgs, individuals] = partition_default()(collective.contributors.nodes, c => c.type !== collectives/* CollectiveType.USER */.eV.USER);

      return /*#__PURE__*/jsx_runtime_.jsx(TopContributors/* default */.Z, {
        organizations: orgs,
        individuals: individuals,
        currency: collective.currency
      });
    });

    banner_iframe_defineProperty(this, "renderNewFormat", () => {
      return /*#__PURE__*/jsx_runtime_.jsx(components_.Query, {
        query: topContributorsQuery,
        variables: {
          collectiveSlug: this.props.collectiveSlug
        },
        context: helpers/* API_V2_CONTEXT */.T,
        children: ({
          data,
          error,
          loading
        }) => loading ? /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {}) : error ? /*#__PURE__*/jsx_runtime_.jsx(MessageBoxGraphqlError/* default */.Z, {
          error: error
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H3, {
              fontSize: "18px",
              lineHeight: "28px",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "NewContributionFlow.Join",
                defaultMessage: [{
                  "type": 0,
                  "value": "Join "
                }, {
                  "type": 1,
                  "value": "numberOfContributors"
                }, {
                  "type": 0,
                  "value": " other fellow contributors"
                }],
                values: {
                  numberOfContributors: data.account.contributors.totalCount
                }
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
              openInNewTab: true,
              href: `https://opencollective.com/${this.props.collectiveSlug}`,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "widget.contributeOnOpenCollective",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contribute on Open Collective"
                }]
              })
            })]
          }), this.renderTopContributors(data.account)]
        })
      });
    });

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.onChange();
  }

  componentDidUpdate() {
    this.onChange();
  }

  render() {
    const {
      collectiveSlug,
      data,
      useNewFormat
    } = this.props;

    if (useNewFormat) {
      return this.renderNewFormat();
    }

    let style;

    try {
      style = JSON.parse(this.props.style || '{}');
    } catch (e) {
      style = {};
    }

    if (data.loading) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: node => this.node = node,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "loading",
          defaultMessage: [{
            "type": 0,
            "value": "loading"
          }]
        })
      });
    }

    const collective = data.Collective;

    if (!collective) {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: node => this.node = node,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "notFound",
          defaultMessage: [{
            "type": 0,
            "value": "Not found"
          }]
        })
      });
    }

    const {
      backers
    } = collective.stats;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(IFrameContainer, {
      linkColor: style,
      ref: node => this.node = node,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Lato:400,700,900"
        }), /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: `${collectiveSlug} collectives`
        })]
      }), backers.organizations + backers.collectives + backers.users === 0 && /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: `https://opencollective.com/${collectiveSlug}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(ContributeButton, {})
      }), backers.organizations + backers.collectives > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        id: "organizations",
        className: "tier",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          style: style.h2,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "collective.section.backers.organizations.title",
            values: {
              n: backers.organizations + backers.collectives,
              collective: collective.name
            },
            defaultMessage: [{
              "type": 1,
              "value": "n"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 6,
              "value": "n",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "organization is"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "organizations are"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " supporting "
            }, {
              "type": 1,
              "value": "collective"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "actions",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `https://opencollective.com/${collectiveSlug}`,
            target: "_blank",
            rel: "noopener noreferrer",
            style: style.a,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "widget.contributeOnOpenCollective",
              defaultMessage: [{
                "type": 0,
                "value": "Contribute on Open Collective"
              }]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(components_MembersWithData, {
          collective: collective,
          onChange: this.onChange,
          type: "ORGANIZATION,COLLECTIVE",
          memberRole: "BACKER",
          limit: 100,
          orderBy: "totalDonations"
        })]
      }), backers.users > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        id: "backers",
        className: "tier",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          style: style.h2,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "collective.section.backers.users.title",
            values: {
              n: backers.users,
              collective: collective.name
            },
            defaultMessage: [{
              "type": 1,
              "value": "n"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 6,
              "value": "n",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "individual is"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "individuals are"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " supporting "
            }, {
              "type": 1,
              "value": "collective"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "actions",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `https://opencollective.com/${collectiveSlug}`,
            target: "_blank",
            rel: "noopener noreferrer",
            style: style.a,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "widget.contributeOnOpenCollective",
              defaultMessage: [{
                "type": 0,
                "value": "Contribute on Open Collective"
              }]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(components_MembersWithData, {
          collective: collective,
          onChange: this.onChange,
          type: "USER",
          memberRole: "BACKER",
          limit: 100,
          orderBy: "totalDonations"
        })]
      })]
    });
  }

}

const collectiveBannerIframeQuery = helpers/* gqlV1 */.N
/* GraphQL */
`
  query CollectiveBannerIframe($collectiveSlug: String) {
    Collective(slug: $collectiveSlug) {
      id
      name
      slug
      currency
      stats {
        id
        backers {
          id
          users
          organizations
          collectives
        }
      }
    }
  }
`;
const addCollectiveBannerIframeData = (0,hoc_.graphql)(collectiveBannerIframeQuery);
BannerIframe.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { collectiveSlug, id, style, useNewFormat }, req, res }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onChange",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "sendMessageToParentWindow",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderTopContributors",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "collective",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderNewFormat",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "BannerIframe",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "id": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "style": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "useNewFormat": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const banner_iframe = (addCollectiveBannerIframeData(BannerIframe));

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

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

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

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

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

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98210:
/***/ ((module) => {

module.exports = require("lodash/has");

/***/ }),

/***/ 52626:
/***/ ((module) => {

module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 77876:
/***/ ((module) => {

module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

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

/***/ 71156:
/***/ ((module) => {

module.exports = require("lodash/size");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 35073:
/***/ ((module) => {

module.exports = require("react-scrollchor");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7079,2328,5656,7278,3169,7619,7632,3129,8185,7897,6465], () => (__webpack_exec__(56157)));
module.exports = __webpack_exports__;

})();