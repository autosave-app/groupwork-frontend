"use strict";
exports.id = 1950;
exports.ids = [1950];
exports.modules = {

/***/ 28645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27596);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97619);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const PledgeCard = ({
  currency,
  fromCollective,
  interval,
  publicMessage,
  totalAmount
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
  bg: "white",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "black.transparent.20",
  minHeight: "100%",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: 4,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      bg: "black.200",
      height: "1px",
      width: 0.25
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      collective: fromCollective,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        collective: fromCollective,
        radius: [52, null, 65]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      bg: "black.200",
      height: "1px",
      width: 0.25
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
    textAlign: "center",
    fontWeight: "bold",
    mt: 3,
    px: 2,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      collective: fromCollective,
      children: fromCollective.name
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
    fontSize: "10px",
    lineHeight: "16px",
    textAlign: "center",
    mt: 2,
    px: 2,
    pb: 2,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "PledgeCard.HasPledged",
      defaultMessage: [{
        "type": 0,
        "value": "Has pledged:"
      }]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
      fontSize: "12px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        amount: totalAmount,
        currency: currency,
        interval: interval,
        amountStyles: {
          fontWeight: 'bold'
        },
        precision: 0
      })
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
    color: "black.600",
    fontSize: "10px",
    textAlign: "center",
    mt: 1,
    px: 3,
    pb: 4,
    children: publicMessage
  })]
});

PledgeCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PledgeCard",
  "props": {
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "fromCollective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "imageUrl": {
            "name": "string",
            "required": false
          },
          "isIncognito": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "interval": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "publicMessage": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "totalAmount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PledgeCard);

/***/ }),

/***/ 10955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "pledgedCollectivePageQuery": () => (/* binding */ pledgedCollectivePageQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_ExternalLinkAlt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32985);
/* harmony import */ var _styled_icons_fa_solid_ExternalLinkAlt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExternalLinkAlt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32651);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93129);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92129);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84842);
/* harmony import */ var _PledgeCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28645);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_13__]);
_Page__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const defaultPledgedLogo = '/static/images/default-pledged-logo.svg';
const pledgedCollectivePageQuery = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_4__/* .gqlV1 */ .N
/* GraphQL */
`
  query PledgedCollectivePage($id: Int!) {
    Collective(id: $id) {
      id
      pledges: orders(status: PLEDGED) {
        id
        currency
        interval
        publicMessage
        status
        totalAmount
        fromCollective {
          id
          name
          imageUrl(height: 128)
          slug
          type
          isIncognito
        }
      }
    }
  }
`;
/**
 * Display a collective with all its pledges
 */

const PledgedCollectivePage = ({
  collective
}) => {
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(pledgedCollectivePageQuery, {
    variables: {
      id: collective.id
    }
  });

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      py: [5, 6],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
    });
  } else if (error) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      py: [5, 6],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        children: error.toString()
      })
    });
  }

  const pledges = [...data.Collective.pledges].reverse().filter(pledge => pledge.fromCollective);
  const pledgeStats = pledges.reduce((stats, {
    fromCollective,
    totalAmount
  }) => {
    stats[fromCollective.type]++;
    stats.total += totalAmount;
    return stats;
  }, {
    USER: 0,
    ORGANIZATION: 0,
    COLLECTIVE: 0,
    total: 0
  });
  const website = collective.website || collective.repositoryUrl;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Page__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    title: collective.name,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      background: "linear-gradient(180deg, #DBECFF, #FFFFFF)",
      borderBottom: "1px solid",
      borderColor: "black.200",
      py: 4,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        alignItems: "center",
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Image__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          src: defaultPledgedLogo,
          alt: "Pledged Collective",
          height: 128,
          width: 128
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.H2, {
          as: "h1",
          children: collective.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          mb: 4,
          mt: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            href: website,
            color: "primary.500",
            fontSize: "12px",
            openInNewTabNoFollow: true,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_styled_icons_fa_solid_ExternalLinkAlt__WEBPACK_IMPORTED_MODULE_2__.ExternalLinkAlt, {
              size: "1em"
            }), " ", website]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      top: -30,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
        href: `/${collective.slug}/pledges/new`,
        buttonStyle: "primary",
        buttonSize: "large",
        "data-cy": "makeAPledgeButton",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "menu.createPledge",
          defaultMessage: [{
            "type": 0,
            "value": "Make a Pledge"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: 800,
      mx: "auto",
      mt: 4,
      px: 3,
      "data-cy": "pledgeStats",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.H3, {
        fontWeight: "normal",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "pledge.stats",
          values: {
            both: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE && pledgeStats.USER ? 1 : 0,
            orgCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE,
            userCount: pledgeStats.USER,
            totalCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE + pledgeStats.USER,
            currency: collective.currency,
            amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              "data-cy": "currencyAmount",
              fontWeight: "bold",
              value: pledgeStats.total,
              currency: collective.currency,
              precision: 0
            })
          },
          defaultMessage: [{
            "type": 6,
            "value": "orgCount",
            "options": {
              "=0": {
                "value": []
              },
              "one": {
                "value": [{
                  "type": 7
                }, {
                  "type": 0,
                  "value": " organization"
                }]
              },
              "other": {
                "value": [{
                  "type": 7
                }, {
                  "type": 0,
                  "value": " organizations"
                }]
              }
            },
            "offset": 0,
            "pluralType": "cardinal"
          }, {
            "type": 0,
            "value": " "
          }, {
            "type": 6,
            "value": "both",
            "options": {
              "=0": {
                "value": []
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": " and "
                }]
              }
            },
            "offset": 0,
            "pluralType": "cardinal"
          }, {
            "type": 0,
            "value": " "
          }, {
            "type": 6,
            "value": "userCount",
            "options": {
              "=0": {
                "value": []
              },
              "one": {
                "value": [{
                  "type": 7
                }, {
                  "type": 0,
                  "value": " individual "
                }]
              },
              "other": {
                "value": [{
                  "type": 7
                }, {
                  "type": 0,
                  "value": " individuals "
                }]
              }
            },
            "offset": 0,
            "pluralType": "cardinal"
          }, {
            "type": 0,
            "value": " "
          }, {
            "type": 6,
            "value": "totalCount",
            "options": {
              "one": {
                "value": [{
                  "type": 0,
                  "value": "has "
                }]
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": "have "
                }]
              }
            },
            "offset": 0,
            "pluralType": "cardinal"
          }, {
            "type": 0,
            "value": " already pledged a total of "
          }, {
            "type": 1,
            "value": "amount"
          }, {
            "type": 0,
            "value": " "
          }, {
            "type": 1,
            "value": "currency"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
        color: "black.600",
        fontSize: "12px",
        lineHeight: "18px",
        my: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "pledge.definition",
          defaultMessage: [{
            "type": 0,
            "value": "A pledge is a way to show interest in supporting a cause or project that is not yet on Open Collective, just like "
          }, {
            "type": 1,
            "value": "collective"
          }, {
            "type": 0,
            "value": ". If they create a Collective, you will receive an email asking you to fulfill your pledge."
          }],
          values: {
            collective: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
              children: collective.name
            })
          }
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .rj, {
      maxWidth: 800,
      mx: "auto",
      mb: 5,
      px: 3,
      "data-cy": "contributersGrouped",
      gridTemplateColumns: "repeat(auto-fill, minmax(165px, 1fr))",
      gridGap: 24,
      children: pledges.map((pledge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        position: "relative",
        "data-cy": "contributers",
        children: [index === 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          position: "absolute",
          right: 15,
          top: -10,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Image__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            src: "/static/icons/first-pledge-badge.svg",
            alt: "first pledge",
            width: 32,
            height: 32
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_PledgeCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, _objectSpread({}, pledge))]
      }, pledge.id))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
      px: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        alignItems: "center",
        border: "1px solid",
        borderColor: "primary.300",
        borderRadius: "12px",
        display: "flex",
        flexDirection: ['column', null, 'row'],
        maxWidth: 800,
        mb: 5,
        mx: "auto",
        px: [3, null, 4],
        py: 4,
        width: 1,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.H5, {
            textAlign: "left",
            fontWeight: "normal",
            mb: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "pledge.ownerQuestion",
              defaultMessage: [{
                "type": 0,
                "value": "Do you own "
              }, {
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": "?"
              }],
              values: {
                collective: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("strong", {
                  children: collective.name
                })
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
            fontSize: "12px",
            color: "black.500",
            mt: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "pledge.contactToClaim",
              defaultMessage: [{
                "type": 0,
                "value": "To claim this Collective, contact "
              }, {
                "type": 8,
                "value": "SupportLink",
                "children": [{
                  "type": 0,
                  "value": "support"
                }]
              }, {
                "type": 0,
                "value": "."
              }],
              values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP
            })
          })]
        })
      })
    })]
  });
};

PledgedCollectivePage.__docgenInfo = {
  "description": "Display a collective with all its pledges",
  "methods": [],
  "displayName": "PledgedCollectivePage",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "number",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "website": {
            "name": "string",
            "required": false
          },
          "repositoryUrl": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_17__/* .withUser */ .ns)(PledgedCollectivePage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;