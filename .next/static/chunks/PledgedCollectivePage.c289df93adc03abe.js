"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1950],{

/***/ 39347:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ ExternalLinkAlt; }
/* harmony export */ });
/* unused harmony export ExternalLinkAltDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var ExternalLinkAlt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 512 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
  }));
});
ExternalLinkAlt.displayName = 'ExternalLinkAlt';
var ExternalLinkAltDimensions = {
  height: 512,
  width: 512
};

/***/ }),

/***/ 17487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_PledgedCollectivePage; },
  "pledgedCollectivePageQuery": function() { return /* binding */ pledgedCollectivePageQuery; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/@styled-icons/fa-solid/ExternalLinkAlt/ExternalLinkAlt.esm.js
var ExternalLinkAlt_esm = __webpack_require__(39347);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Currency.js
var Currency = __webpack_require__(93129);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(56562);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(11194);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/PledgeCard.js










var PledgeCard = function PledgeCard(_ref) {
  var currency = _ref.currency,
      fromCollective = _ref.fromCollective,
      interval = _ref.interval,
      publicMessage = _ref.publicMessage,
      totalAmount = _ref.totalAmount;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
    bg: "white",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "black.transparent.20",
    minHeight: "100%",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pt: 4,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        bg: "black.200",
        height: "1px",
        width: 0.25
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
        collective: fromCollective,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.ZP, {
          collective: fromCollective,
          radius: [52, null, 65]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
        bg: "black.200",
        height: "1px",
        width: 0.25
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      textAlign: "center",
      fontWeight: "bold",
      mt: 3,
      px: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkCollective/* default */.Z, {
        collective: fromCollective,
        children: fromCollective.name
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Text.P, {
      fontSize: "10px",
      lineHeight: "16px",
      textAlign: "center",
      mt: 2,
      px: 2,
      pb: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
        id: "PledgeCard.HasPledged",
        defaultMessage: [{
          "type": 0,
          "value": "Has pledged:"
        }]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Span */.Dr, {
        fontSize: "12px",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedMoneyAmount/* default */.Z, {
          amount: totalAmount,
          currency: currency,
          interval: interval,
          amountStyles: {
            fontWeight: 'bold'
          },
          precision: 0
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
      color: "black.600",
      fontSize: "10px",
      textAlign: "center",
      mt: 1,
      px: 3,
      pb: 4,
      children: publicMessage
    })]
  });
};

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
/* harmony default export */ var components_PledgeCard = (PledgeCard);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./components/PledgedCollectivePage.js




var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





















var defaultPledgedLogo = '/static/images/default-pledged-logo.svg';
var pledgedCollectivePageQuery = (0,helpers/* gqlV1 */.N)
/* GraphQL */
(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query PledgedCollectivePage($id: Int!) {\n    Collective(id: $id) {\n      id\n      pledges: orders(status: PLEDGED) {\n        id\n        currency\n        interval\n        publicMessage\n        status\n        totalAmount\n        fromCollective {\n          id\n          name\n          imageUrl(height: 128)\n          slug\n          type\n          isIncognito\n        }\n      }\n    }\n  }\n"])));
/**
 * Display a collective with all its pledges
 */

var PledgedCollectivePage = function PledgedCollectivePage(_ref) {
  var collective = _ref.collective;

  var _useQuery = (0,client.useQuery)(pledgedCollectivePageQuery, {
    variables: {
      id: collective.id
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      py: [5, 6],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {})
    });
  } else if (error) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      py: [5, 6],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
        type: "error",
        withIcon: true,
        children: error.toString()
      })
    });
  }

  var pledges = toConsumableArray_default()(data.Collective.pledges).reverse().filter(function (pledge) {
    return pledge.fromCollective;
  });

  var pledgeStats = pledges.reduce(function (stats, _ref2) {
    var fromCollective = _ref2.fromCollective,
        totalAmount = _ref2.totalAmount;
    stats[fromCollective.type]++;
    stats.total += totalAmount;
    return stats;
  }, {
    USER: 0,
    ORGANIZATION: 0,
    COLLECTIVE: 0,
    total: 0
  });
  var website = collective.website || collective.repositoryUrl;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    title: collective.name,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      background: "linear-gradient(180deg, #DBECFF, #FFFFFF)",
      borderBottom: "1px solid",
      borderColor: "black.200",
      py: 4,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        flexDirection: "column",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
          src: defaultPledgedLogo,
          alt: "Pledged Collective",
          height: 128,
          width: 128
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.H2, {
          as: "h1",
          children: collective.name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mb: 4,
          mt: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledLink/* default */.Z, {
            href: website,
            color: "primary.500",
            fontSize: "12px",
            openInNewTabNoFollow: true,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLinkAlt_esm/* ExternalLinkAlt */.R, {
              size: "1em"
            }), " ", website]
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      top: -30,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        as: Link/* default */.Z,
        href: "/".concat(collective.slug, "/pledges/new"),
        buttonStyle: "primary",
        buttonSize: "large",
        "data-cy": "makeAPledgeButton",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "menu.createPledge",
          defaultMessage: [{
            "type": 0,
            "value": "Make a Pledge"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: 800,
      mx: "auto",
      mt: 4,
      px: 3,
      "data-cy": "pledgeStats",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H3, {
        fontWeight: "normal",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "pledge.stats",
          values: {
            both: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE && pledgeStats.USER ? 1 : 0,
            orgCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE,
            userCount: pledgeStats.USER,
            totalCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE + pledgeStats.USER,
            currency: collective.currency,
            amount: /*#__PURE__*/(0,jsx_runtime.jsx)(Currency/* default */.Z, {
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
        color: "black.600",
        fontSize: "12px",
        lineHeight: "18px",
        my: 4,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
            collective: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
              children: collective.name
            })
          }
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Grid */.rj, {
      maxWidth: 800,
      mx: "auto",
      mb: 5,
      px: 3,
      "data-cy": "contributersGrouped",
      gridTemplateColumns: "repeat(auto-fill, minmax(165px, 1fr))",
      gridGap: 24,
      children: pledges.map(function (pledge, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
          position: "relative",
          "data-cy": "contributers",
          children: [index === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
            position: "absolute",
            right: 15,
            top: -10,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image/* default */.Z, {
              src: "/static/icons/first-pledge-badge.svg",
              alt: "first pledge",
              width: 32,
              height: 32
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_PledgeCard, _objectSpread({}, pledge))]
        }, pledge.id);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      px: 3,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
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
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
            textAlign: "left",
            fontWeight: "normal",
            mb: 1,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
                collective: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                  children: collective.name
                })
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
            fontSize: "12px",
            color: "black.500",
            mt: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
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
              values: I18nFormatters/* default */.ZP
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
/* harmony default export */ var components_PledgedCollectivePage = ((0,UserProvider/* withUser */.ns)(PledgedCollectivePage));

/***/ })

}]);
//# sourceMappingURL=PledgedCollectivePage.c289df93adc03abe.js.map