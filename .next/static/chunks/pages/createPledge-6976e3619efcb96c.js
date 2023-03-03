(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5415],{

/***/ 17487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ }),

/***/ 16738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50056);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);


var _excluded = ["size", "items", "children", "selected", "buttonProps", "buttonPropsBuilder", "onChange", "combo", "disabled", "customBorderRadius"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var StyledButtonItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledButtonSet__StyledButtonItem",
  componentId: "sc-6bt6g-0"
})(["border-radius:0;line-height:1.5;flex-grow:1;border-color:", ";transition:color 0.2s,background 0.1s,font-size 30ms;&:active p{color:white;}&:hover,&:focus{z-index:9;}&::-moz-focus-inner{border:0;}&:first-child{border-radius:", ";}&:not(:first-child){margin-left:-1px;}&:last-child{border-radius:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__/* .themeGet */ .R)('colors.black.300'), function (_ref) {
  var customBorderRadius = _ref.customBorderRadius;
  return "".concat(customBorderRadius, " 0 0 ").concat(customBorderRadius);
}, function (_ref2) {
  var combo = _ref2.combo,
      customBorderRadius = _ref2.customBorderRadius;
  return combo ? '0' : "0 ".concat(customBorderRadius, " ").concat(customBorderRadius, " 0");
});
StyledButtonItem.propTypes = {
  combo: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool)
};

var StyledButtonSet = function StyledButtonSet(_ref3) {
  var size = _ref3.size,
      items = _ref3.items,
      children = _ref3.children,
      selected = _ref3.selected,
      buttonProps = _ref3.buttonProps,
      buttonPropsBuilder = _ref3.buttonPropsBuilder,
      onChange = _ref3.onChange,
      combo = _ref3.combo,
      disabled = _ref3.disabled,
      customBorderRadius = _ref3.customBorderRadius,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    display: "flex"
  }, props), {}, {
    children: items.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledButtonItem, _objectSpread(_objectSpread(_objectSpread({
        combo: combo || undefined,
        color: item === selected ? 'white' : 'black.400',
        buttonSize: size,
        buttonStyle: item === selected ? 'primary' : undefined,
        onClick: onChange && function () {
          return onChange(item);
        },
        className: item === selected ? 'selected' : undefined,
        disabled: disabled,
        "aria-pressed": item === selected,
        type: "button",
        py: "8px",
        customBorderRadius: customBorderRadius
      }, buttonProps), buttonPropsBuilder ? buttonPropsBuilder({
        item: item,
        index: index,
        isSelected: item === selected
      }) : {}), {}, {
        children: children({
          item: item,
          isSelected: item === selected
        })
      }), item);
    })
  }));
};

StyledButtonSet.defaultProps = {
  combo: false,
  size: 'medium',
  fontSize: '14px',
  customBorderRadius: '4px'
};
StyledButtonSet.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StyledButtonSet",
  "props": {
    "combo": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Setting to style last item to look good in combination with a text input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "size": {
      "defaultValue": {
        "value": "'medium'",
        "computed": false
      },
      "description": "Based on the design system theme",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'small'",
          "computed": false
        }, {
          "value": "'medium'",
          "computed": false
        }, {
          "value": "'large'",
          "computed": false
        }, {
          "value": "'tiny'",
          "computed": false
        }]
      },
      "required": false
    },
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "required": false
    },
    "customBorderRadius": {
      "defaultValue": {
        "value": "'4px'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "items": {
      "description": "A list of elements to build buttons uppon",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "any"
        }
      },
      "required": true
    },
    "children": {
      "description": "Button child content renderer. Get passed an object like { item, isSelected }",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "selected": {
      "description": "Currently selected item",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "onChange": {
      "description": "An optional func called with the new item when option changes",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "disabled": {
      "description": "Disable user input",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "buttonPropsBuilder": {
      "description": "Similar to `buttonProps` but allow props to be added dynamically based on item",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "buttonProps": {
      "description": "Button Props",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledButtonSet);

/***/ }),

/***/ 54029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85696);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52353);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67294);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14359);
/* harmony import */ var country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86896);
/* harmony import */ var _lib_constants_currency__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38198);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17632);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78080);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32631);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85893);





var _excluded = ["currency", "currencyDisplay", "min", "max", "precision", "defaultValue", "value", "onBlur", "onChange", "isEmpty", "hasCurrencyPicker", "onCurrencyChange", "availableCurrencies"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var formatCurrencyName = function formatCurrencyName(currency, currencyDisplay) {
  if (currencyDisplay === 'SYMBOL') {
    return (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCurrencySymbol */ .jK)(currency);
  } else if (currencyDisplay === 'CODE') {
    return currency;
  } else {
    return "".concat((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCurrencySymbol */ .jK)(currency), " ").concat(currency);
  }
};

var parseValueFromEvent = function parseValueFromEvent(e, precision, ignoreComma) {
  if (e.target.value === '') {
    return null;
  } else {
    var parsedNumber = parseFloat(ignoreComma ? e.target.value.replace(',', '') : e.target.value);
    return isNaN(parsedNumber) ? NaN : parsedNumber.toFixed(precision);
  }
};
/** Formats value is valid, fallsback on rawValue otherwise */


var getValue = function getValue(value, rawValue, isEmpty) {
  if (isEmpty) {
    return '';
  }

  return isNaN(value) || value === null ? rawValue : value / 100;
};

var getError = function getError(curVal, minAmount, required) {
  return Boolean(required && lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(curVal) || minAmount && curVal < minAmount);
};

var generateCurrencyOptions = function generateCurrencyOptions(intl, availableCurrencies) {
  var currencyDisplayNames = (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_14__/* .getIntlDisplayNames */ ._)(intl.locale, 'currency');
  return availableCurrencies.map(function (currency) {
    var currencyName = currencyDisplayNames.of(currency);
    var emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__.getEmojiByCurrencyCode)(currency);
    return {
      value: currency,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        title: currencyName,
        children: [emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          children: emoji
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
          whiteSpace: "nowrap",
          ml: 1,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
            color: "black.800",
            children: currency
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
            color: "black.500",
            children: ["(", currencyName, ")"]
          })]
        })]
      })
    };
  });
};

var getSelectedCurrency = function getSelectedCurrency(value) {
  var emoji = (0,country_currency_emoji_flags__WEBPACK_IMPORTED_MODULE_6__.getEmojiByCurrencyCode)(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
    children: [emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
      children: emoji
    }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
      color: "black.800",
      children: value
    })]
  });
};

var CurrencyPicker = function CurrencyPicker(_ref) {
  var availableCurrencies = _ref.availableCurrencies,
      value = _ref.value,
      _onChange = _ref.onChange;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
  var currencyOptions = generateCurrencyOptions(intl, availableCurrencies);
  var selectedCurrency = getSelectedCurrency(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_StyledSelect__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
    inputId: "currency-picker",
    "data-cy": "currency-picker",
    placeholder: "----",
    error: !value,
    isSearchable: (availableCurrencies === null || availableCurrencies === void 0 ? void 0 : availableCurrencies.length) > 10,
    options: currencyOptions,
    value: !value ? null : {
      value: value,
      label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
        minWidth: 200,
        children: selectedCurrency
      })
    },
    width: 102,
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return _onChange(value);
    },
    onInputChange: function onInputChange(inputValue) {
      return inputValue.length <= 3 ? inputValue : inputValue.substr(0, 3);
    } // Limit search length to 3 characters
    ,
    styles: {
      control: {
        border: !value ? '' : 'none',
        background: '#F7F8FA'
      },
      menu: {
        width: '260px'
      }
    }
  });
};

/**
 * An input for amount inputs. Accepts all props from [StyledInputGroup](/#!/StyledInputGroup).
 */
var StyledInputAmount = function StyledInputAmount(_ref3) {
  var currency = _ref3.currency,
      currencyDisplay = _ref3.currencyDisplay,
      min = _ref3.min,
      max = _ref3.max,
      precision = _ref3.precision,
      defaultValue = _ref3.defaultValue,
      value = _ref3.value,
      _onBlur = _ref3.onBlur,
      onChange = _ref3.onChange,
      isEmpty = _ref3.isEmpty,
      hasCurrencyPicker = _ref3.hasCurrencyPicker,
      onCurrencyChange = _ref3.onCurrencyChange,
      availableCurrencies = _ref3.availableCurrencies,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(value || defaultValue || ''),
      _React$useState2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      rawValue = _React$useState2[0],
      setRawValue = _React$useState2[1];

  var isControlled = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(value);
  var hasMin = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(min);
  var curValue = isControlled ? getValue(value, rawValue, isEmpty) : undefined;
  var minAmount = hasMin ? min / 100 : min;

  var dispatchValue = function dispatchValue(e, parsedValue) {
    if (isControlled) {
      setRawValue(e.target.value);
    }

    if (onChange) {
      var valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (parsedValue === null || isNaN(parsedValue)) {
        onChange(parsedValue, e);
      } else if (!e.target.checkValidity() || parsedValue !== valueWithIgnoredComma) {
        onChange(isNaN(e.target.value) ? NaN : null, e);
      } else {
        onChange((0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_7__/* .floatAmountToCents */ .VH)(parsedValue), e);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    maxWidth: "10em",
    step: "0.01"
  }, props), {}, {
    min: minAmount,
    max: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(max) ? max : max / 100,
    type: "number",
    inputMode: "decimal",
    error: props.error || getError(curValue, minAmount, props.required),
    defaultValue: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(defaultValue) ? undefined : defaultValue / 100,
    value: curValue,
    prependProps: !hasCurrencyPicker ? {
      color: props.disabled ? 'black.400' : 'black.800'
    } : {
      p: 0
    },
    prepend: !hasCurrencyPicker ? formatCurrencyName(currency, currencyDisplay) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      bgColor: "black.50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CurrencyPicker, {
        onChange: onCurrencyChange,
        value: currency,
        availableCurrencies: availableCurrencies
      })
    }),
    onWheel: function onWheel(e) {
      e.preventDefault();
      e.target.blur();
    },
    onChange: function onChange(e) {
      e.stopPropagation();
      dispatchValue(e, parseValueFromEvent(e, precision));
    },
    onBlur: function onBlur(e) {
      // Clean number if valid (ie. 41.1 -> 41.10)
      var parsedNumber = parseValueFromEvent(e, precision);
      var valueWithIgnoredComma = parseValueFromEvent(e, precision, true);

      if (e.target.checkValidity() && !isNaN(parsedNumber) && parsedNumber !== null && valueWithIgnoredComma === parsedNumber) {
        e.target.value = parsedNumber.toString();
        dispatchValue(e, parsedNumber);
      }

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }));
};

StyledInputAmount.defaultProps = {
  min: 0,
  max: 1000000000,
  precision: 2,
  currencyDisplay: 'SYMBOL',
  name: 'amount',
  availableCurrencies: _lib_constants_currency__WEBPACK_IMPORTED_MODULE_16__/* .Currency */ .F
};
StyledInputAmount.__docgenInfo = {
  "description": "An input for amount inputs. Accepts all props from [StyledInputGroup](/#!/StyledInputGroup).",
  "methods": [],
  "displayName": "StyledInputAmount",
  "props": {
    "min": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "description": "Minimum amount (in CENTS)",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "max": {
      "defaultValue": {
        "value": "1000000000",
        "computed": false
      },
      "description": "Maximum amount (in CENTS)",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "precision": {
      "defaultValue": {
        "value": "2",
        "computed": false
      },
      "description": "Number of decimals",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "currencyDisplay": {
      "defaultValue": {
        "value": "'SYMBOL'",
        "computed": false
      },
      "description": "Currency style. If hasCurrencyPicker is true, `CODE` will be enforced.",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'SYMBOL'",
          "computed": false
        }, {
          "value": "'CODE'",
          "computed": false
        }, {
          "value": "'FULL'",
          "computed": false
        }]
      },
      "required": false
    },
    "name": {
      "defaultValue": {
        "value": "'amount'",
        "computed": false
      },
      "required": false
    },
    "availableCurrencies": {
      "defaultValue": {
        "value": "Currency",
        "computed": true
      },
      "description": "A list of currencies presented in the currency picker",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "currency": {
      "description": "The currency (eg. `USD`, `EUR`...)",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onCurrencyChange": {
      "description": "Gets passed the new currency. Only when hasCurrencyPicker is true",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "description": "Gets passed the amount in cents as first param, and the event as second param.",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onBlur": {
      "description": "OnChange function",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "value": {
      "description": "Value",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "isEmpty": {
      "description": "A special prop to force the empty state",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hasCurrencyPicker": {
      "description": "To enable the currency picker",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["./StyledInputGroup"]
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputAmount);

/***/ }),

/***/ 87262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28687);
/* harmony import */ var _styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82493);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44012);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40777);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85893);




var _excluded = ["children", "label", "htmlFor", "name", "error", "hint", "success", "disabled", "required", "inputType", "labelFontSize", "labelFontWeight", "labelColor", "labelProps", "hideOptionalLabel", "useRequiredLabel", "isPrivate", "helpText", "flexDirection", "justifyContent", "alignItems"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var PrivateIconWithSpace = function PrivateIconWithSpace() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: ["\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      tooltipProps: {
        containerVerticalAlign: 'text-top'
      }
    })]
  });
}; // eslint-disable-next-line react/prop-types


var QuestionMarkIconWithSpace = function QuestionMarkIconWithSpace(_ref) {
  var helpText = _ref.helpText,
      labelFontSize = _ref.labelFontSize,
      labelColor = _ref.labelColor;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    content: helpText,
    children: ["\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_8__/* .Question */ .H, {
      size: labelFontSize,
      color: labelColor
    })]
  });
};
/**
 * Form field to display an input element with a label and errors. Uses [renderProps](https://reactjs.org/docs/render-props.html#using-props-other-than-render) to pass field props like 'name' and 'id' to child input.
 */


var StyledInputField = function StyledInputField(_ref2) {
  var children = _ref2.children,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? undefined : _ref2$label,
      _ref2$htmlFor = _ref2.htmlFor,
      htmlFor = _ref2$htmlFor === void 0 ? undefined : _ref2$htmlFor,
      _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? undefined : _ref2$name,
      _ref2$error = _ref2.error,
      error = _ref2$error === void 0 ? undefined : _ref2$error,
      _ref2$hint = _ref2.hint,
      hint = _ref2$hint === void 0 ? undefined : _ref2$hint,
      _ref2$success = _ref2.success,
      success = _ref2$success === void 0 ? undefined : _ref2$success,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? undefined : _ref2$disabled,
      _ref2$required = _ref2.required,
      required = _ref2$required === void 0 ? undefined : _ref2$required,
      _ref2$inputType = _ref2.inputType,
      inputType = _ref2$inputType === void 0 ? undefined : _ref2$inputType,
      _ref2$labelFontSize = _ref2.labelFontSize,
      labelFontSize = _ref2$labelFontSize === void 0 ? undefined : _ref2$labelFontSize,
      _ref2$labelFontWeight = _ref2.labelFontWeight,
      labelFontWeight = _ref2$labelFontWeight === void 0 ? 'normal' : _ref2$labelFontWeight,
      _ref2$labelColor = _ref2.labelColor,
      labelColor = _ref2$labelColor === void 0 ? 'black.800' : _ref2$labelColor,
      _ref2$labelProps = _ref2.labelProps,
      labelProps = _ref2$labelProps === void 0 ? undefined : _ref2$labelProps,
      _ref2$hideOptionalLab = _ref2.hideOptionalLabel,
      hideOptionalLabel = _ref2$hideOptionalLab === void 0 ? undefined : _ref2$hideOptionalLab,
      _ref2$useRequiredLabe = _ref2.useRequiredLabel,
      useRequiredLabel = _ref2$useRequiredLabe === void 0 ? undefined : _ref2$useRequiredLabe,
      _ref2$isPrivate = _ref2.isPrivate,
      isPrivate = _ref2$isPrivate === void 0 ? undefined : _ref2$isPrivate,
      _ref2$helpText = _ref2.helpText,
      helpText = _ref2$helpText === void 0 ? undefined : _ref2$helpText,
      _ref2$flexDirection = _ref2.flexDirection,
      flexDirection = _ref2$flexDirection === void 0 ? undefined : _ref2$flexDirection,
      _ref2$justifyContent = _ref2.justifyContent,
      justifyContent = _ref2$justifyContent === void 0 ? undefined : _ref2$justifyContent,
      _ref2$alignItems = _ref2.alignItems,
      alignItems = _ref2$alignItems === void 0 ? undefined : _ref2$alignItems,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, _excluded);

  var isCheckbox = inputType === 'checkbox';
  htmlFor = htmlFor || (name ? "input-".concat(name) : undefined);
  var displayOptionalLabel = hideOptionalLabel ? false : required === false;
  var displayRequiredLabel = useRequiredLabel ? required === true : false;
  labelFontWeight = (labelProps === null || labelProps === void 0 ? void 0 : labelProps.fontWeight) || labelFontWeight;
  labelFontSize = (labelProps === null || labelProps === void 0 ? void 0 : labelProps.labelFontSize) || labelFontSize;

  var labelContent = label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
    color: labelColor,
    fontSize: labelFontSize,
    fontWeight: labelFontWeight,
    children: label
  });

  var containerFlexDirection = flexDirection !== null && flexDirection !== void 0 ? flexDirection : isCheckbox ? 'row-reverse' : 'column';
  var containerJustifyContent = justifyContent !== null && justifyContent !== void 0 ? justifyContent : 'flex-end';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      alignItems: alignItems,
      flexDirection: containerFlexDirection,
      justifyContent: containerJustifyContent,
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__.P, _objectSpread(_objectSpread({
        as: "label",
        htmlFor: htmlFor,
        display: "flex",
        alignItems: "center",
        fontSize: labelFontSize,
        fontWeight: labelFontWeight,
        mb: isCheckbox ? 0 : 2,
        mr: 2,
        ml: isCheckbox ? 2 : undefined,
        cursor: isCheckbox ? 'pointer' : undefined
      }, labelProps), {}, {
        children: [displayOptionalLabel && !isCheckbox ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
          color: "black.700",
          fontWeight: "normal",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            id: "OptionalFieldLabel",
            defaultMessage: [{
              "type": 1,
              "value": "field"
            }, {
              "type": 0,
              "value": " (optional)"
            }],
            values: {
              field: labelContent
            }
          }), isPrivate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PrivateIconWithSpace, {})]
        }) : displayRequiredLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
          color: "black.700",
          children: [labelContent, " * ", isPrivate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PrivateIconWithSpace, {})]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [labelContent, isPrivate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PrivateIconWithSpace, {})]
        }), helpText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(QuestionMarkIconWithSpace, {
          helpText: helpText,
          labelColor: labelColor,
          labelFontSize: labelFontSize
        })]
      })), typeof children === 'function' ? children({
        name: name || htmlFor,
        id: htmlFor,
        type: inputType,
        error: Boolean(error) || undefined,
        success: success,
        disabled: disabled,
        required: required
      }) : children]
    }), error && typeof error === 'string' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      pt: 2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_10__/* .ExclamationCircle */ .b, {
        color: "#E03F6A",
        size: 16
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StyledSpan, {
        ml: 1,
        color: "black.700",
        fontSize: "14px",
        children: error
      })]
    }), hint && (!error || typeof error !== 'string') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mt: "6px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_StyledSpan2, {
        fontSize: "12px",
        color: "black.700",
        children: hint
      })
    })]
  }));
};

StyledInputField.__docgenInfo = {
  "description": "Form field to display an input element with a label and errors. Uses [renderProps](https://reactjs.org/docs/render-props.html#using-props-other-than-render) to pass field props like 'name' and 'id' to child input.",
  "methods": [],
  "displayName": "StyledInputField",
  "props": {
    "label": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "text to display above the input",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "element"
        }]
      },
      "required": false
    },
    "htmlFor": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "the label's 'for' attribute to be used as the 'name' and 'id' for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "By default name is equal to htmlFor, but you can use this prop to override it",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "error": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "text to display below the input or error status",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "hint": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "text to display below the input when there's no error",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "success": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Show success state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabled": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Show disabled state for field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "required": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If set to false, the field will be marked as optional",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "inputType": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Passed to input as `type`. Adapts layout for checkboxes",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "labelFontSize": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Font size for the label",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "labelFontWeight": {
      "defaultValue": {
        "value": "'normal'",
        "computed": false
      },
      "description": "Font weight for the label",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "labelColor": {
      "defaultValue": {
        "value": "'black.800'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "labelProps": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Anything here will be passed down to label",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "hideOptionalLabel": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "useRequiredLabel": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If set to true, will hide the (optional) label tag even if required is false and display \"*\" if required",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isPrivate": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "If true, a \"Private\" lock icon will be displayed next to the label",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "helpText": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "description": "Help text that will appear next to the label (a small question mark with help text shown when hovered)",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "flexDirection": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "justifyContent": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "alignItems": {
      "defaultValue": {
        "value": "undefined",
        "computed": true
      },
      "required": false
    },
    "children": {
      "description": "React component to wrap with the label and errors",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "node"
        }]
      },
      "required": true
    }
  },
  "composes": ["./Grid"]
};
/* harmony default export */ __webpack_exports__["Z"] = (StyledInputField);

var _StyledSpan = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr).withConfig({
  displayName: "StyledInputField___StyledSpan",
  componentId: "sc-pytuf2-0"
})({
  verticalAlign: 'middle'
});

var _StyledSpan2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr).withConfig({
  displayName: "StyledInputField___StyledSpan2",
  componentId: "sc-pytuf2-1"
})({
  verticalAlign: 'middle'
});

/***/ }),

/***/ 32631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 40777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_material_Lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25107);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);


var _excluded = ["children", "size", "tooltipProps", "withoutTooltip", "color"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  defaultContent: {
    id: "Tooltip.PrivateInfo",
    defaultMessage: [{
      "type": 0,
      "value": "This info is private"
    }]
  }
});
/**
 * A lock icon with a tooltip indicating that this info is private
 */

var PrivateInfoIcon = function PrivateInfoIcon(_ref) {
  var children = _ref.children,
      size = _ref.size,
      tooltipProps = _ref.tooltipProps,
      withoutTooltip = _ref.withoutTooltip,
      color = _ref.color,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(),
      formatMessage = _useIntl.formatMessage;

  var icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_styled_icons_material_Lock__WEBPACK_IMPORTED_MODULE_7__/* .Lock */ .H, _objectSpread({
    size: size,
    color: color
  }, props));

  if (withoutTooltip) {
    return icon;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StyledTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    childrenContainer: "span",
    content: function content() {
      return children || formatMessage(msg.defaultContent);
    }
  }, tooltipProps), {}, {
    children: icon
  }));
};

PrivateInfoIcon.defaultProps = {
  size: '0.9em',
  color: '#75777A'
};
PrivateInfoIcon.__docgenInfo = {
  "description": "A lock icon with a tooltip indicating that this info is private",
  "methods": [],
  "displayName": "PrivateInfoIcon",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'0.9em'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'#75777A'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "children": {
      "description": "A message to display in the tooltip in place of the default one",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "tooltipProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "withoutTooltip": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (PrivateInfoIcon);

/***/ }),

/***/ 38198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ Currency; },
/* harmony export */   "b": function() { return /* binding */ PayPalSupportedCurrencies; }
/* harmony export */ });
var Currency = ['USD', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JMD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SZL', 'THB', 'TJS', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];
/*
 * Supported Currencies by PayPal for use with payments and as currency balances.
 * Reference: https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/
 *
 * TODO: There's few currencies (see above list) which decimal amounts are not supported or for in-country
 *  payouts only. We need to investigate and add support for these if possible.
 *
 */

var PayPalSupportedCurrencies = ['AUD', 'CAD', 'CZK', 'DKK', 'EUR', 'HKD', 'ILS', 'MXN', 'NZD', 'NOK', 'PHP', 'PLN', 'GBP', 'RUB', 'SGD', 'SEK', 'CHF', 'THB', 'USD'];

/***/ }),

/***/ 78080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ getIntlDisplayNames; }
/* harmony export */ });
/**
 * A dummy polyfill for `Intl.DisplayNames`. If falling back to the default string is not an acceptable option
 * feel free to add a [real polyfill](https://formatjs.io/docs/polyfills/intl-displaynames/) and remove this helper.
 */
var getIntlDisplayNames = function getIntlDisplayNames(locale, type) {
  try {
    return new Intl.DisplayNames(locale, {
      type: type
    });
  } catch (_unused) {
    return {
      of: function of(str) {
        return str;
      }
    };
  }
};

/***/ }),

/***/ 9939:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCreatePledgeMutation": function() { return /* binding */ addCreatePledgeMutation; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92358);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49376);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33227);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88361);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92191);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85971);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52715);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91193);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87794);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67294);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(16608);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50056);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(74806);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(52015);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51719);
/* harmony import */ var _lib_image_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89314);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(97079);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11194);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1259);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(69078);
/* harmony import */ var _components_Currency__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(93129);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3518);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(80146);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(88705);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56562);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(53169);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(84842);
/* harmony import */ var _components_PledgedCollectivePage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(17487);
/* harmony import */ var _components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(16738);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(97274);
/* harmony import */ var _components_StyledInputAmount__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(54029);
/* harmony import */ var _components_StyledInputField__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(87262);
/* harmony import */ var _components_StyledInputGroup__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(32631);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(51082);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(85893);












var _templateObject, _templateObject2;



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





































var defaultPledgedLogo = '/static/images/default-pledged-logo.svg';
var labelStyles = {
  color: 'black.600',
  fontWeight: 400,
  as: 'label',
  mb: 1
};
var Details = styled_components__WEBPACK_IMPORTED_MODULE_43__/* ["default"].details.withConfig */ .ZP.details.withConfig({
  displayName: "createPledge__Details",
  componentId: "sc-f3btza-0"
})(["&[open]{font-size:14px;margin-bottom:", "px;summary::after{content:'-';}}summary{color:", ";font-size:16px;font-weight:500;margin-bottom:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_12__/* .themeGet */ .R)('space.4'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_12__/* .themeGet */ .R)('colors.black.900'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_12__/* .themeGet */ .R)('space.3'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_12__/* .themeGet */ .R)('space.2'));

var WordCountTextarea = function WordCountTextarea() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(140),
      wordCount = _useState[0],
      setWordCount = _useState[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
      justifyContent: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
        htmlFor: "publicMessage",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
          id: "createPledge.message",
          defaultMessage: [{
            "type": 0,
            "value": "A message for the community (optional)"
          }]
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
        as: "p",
        children: wordCount
      }))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .ZP, {
      border: "1px solid",
      borderColor: "black.300",
      borderRadius: "4px",
      fontSize: "14px",
      as: "textarea",
      id: "publicMessage",
      name: "publicMessage",
      "data-cy": "publicMessage",
      placeholder: "This will be public and it is also optional",
      onChange: function onChange(_ref) {
        var target = _ref.target;
        return setWordCount(function () {
          return 140 - target.value.length;
        });
      },
      px: 2,
      py: 1,
      rows: 4
    })]
  });
};

var AMOUNT_OPTIONS = [500, 1000, 1500, 2000, 5000, 10000, 25000];

var AmountField = function AmountField() {
  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(2000),
      amount = _useState2[0],
      setAmount = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
    flexDirection: "column",
    mb: 3,
    width: [1, 'auto', 'auto'],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
      mb: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_StyledStyledInputField, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
            id: "Label.AmountWithCurrency",
            defaultMessage: [{
              "type": 0,
              "value": "Amount ("
            }, {
              "type": 1,
              "value": "currency"
            }, {
              "type": 0,
              "value": ")"
            }],
            values: {
              currency: 'USD'
            }
          })
        })),
        htmlFor: "amount",
        children: function children(fieldProps) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              combo: true,
              items: AMOUNT_OPTIONS,
              selected: amount,
              onChange: function onChange(value) {
                return setAmount(value);
              },
              children: function children(_ref2) {
                var item = _ref2.item;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Currency__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                  value: item,
                  currency: "USD"
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledInputAmount__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, fieldProps), {}, {
              type: "number",
              currency: "USD",
              min: 100,
              value: amount,
              width: 1,
              onChange: function onChange(amount) {
                return setAmount(amount);
              },
              containerProps: {
                borderRadius: '0 4px 4px 0',
                ml: '-1px'
              },
              prependProps: {
                pl: 2,
                pr: 0,
                bg: 'white.full'
              },
              px: "2px",
              minWidth: 75,
              required: true
            }))]
          });
        }
      })
    })
  });
};

var CreatePledgePage = /*#__PURE__*/function (_React$Component) {
  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_inherits_js__WEBPACK_IMPORTED_MODULE_5___default()(CreatePledgePage, _React$Component);

  var _super = _createSuper(CreatePledgePage);

  function CreatePledgePage() {
    var _this;

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, CreatePledgePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      errorMessage: null,
      loadingUserLogin: true,
      LoggedInUser: undefined,
      submitting: false
    });

    return _this;
  }

  _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(CreatePledgePage, [{
    key: "createPledge",
    value: function () {
      var _createPledge = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().mark(function _callee(event) {
        var _event$target$element, name, slug, amount, fromCollective, githubHandle, publicMessage, interval, data, order, _this$props$data, _yield$this$props$cre, result;

        return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _event$target$element = event.target.elements, name = _event$target$element.name, slug = _event$target$element.slug, amount = _event$target$element.amount, fromCollective = _event$target$element.fromCollective, githubHandle = _event$target$element.githubHandle, publicMessage = _event$target$element.publicMessage, interval = _event$target$element.interval;
                data = this.props.data;
                this.setState({
                  submitting: true
                });
                order = {
                  collective: {},
                  fromCollective: {
                    id: Number(fromCollective.value)
                  },
                  totalAmount: Number(amount.value) * 100,
                  publicMessage: publicMessage.value
                };

                if (interval.value !== 'none') {
                  order.interval = interval.value;
                }

                if (data) {
                  order.collective.id = data.Collective.id;
                } else {
                  order.collective = {
                    name: name.value,
                    slug: slug.value,
                    tags: ['open source', 'pledged'],
                    githubHandle: githubHandle.value
                  };
                }

                _context.prev = 7;
                _context.next = 10;
                return this.props.createPledge(order, (_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data.Collective);

              case 10:
                _yield$this$props$cre = _context.sent;
                result = _yield$this$props$cre.data.createOrder;

                if (result.collective.slug) {
                  this.props.router.push("/".concat(result.collective.slug));
                }

                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](7);
                this.setState({
                  errorMessage: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_16__/* .getErrorFromGraphqlException */ .H1)(_context.t0).message,
                  submitting: false
                });

              case 18:
                _context.prev = 18;
                this.setState({
                  submitting: false
                });
                return _context.finish(18);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 15, 18, 21]]);
      }));

      function createPledge(_x) {
        return _createPledge.apply(this, arguments);
      }

      return createPledge;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          errorMessage = _this$state.errorMessage,
          submitting = _this$state.submitting;
      var _this$props = this.props,
          _this$props$data2 = _this$props.data,
          data = _this$props$data2 === void 0 ? {} : _this$props$data2,
          name = _this$props.name,
          slug = _this$props.slug,
          githubHandle = _this$props.githubHandle,
          LoggedInUser = _this$props.LoggedInUser,
          loadingLoggedInUser = _this$props.loadingLoggedInUser,
          intl = _this$props.intl;

      if (data.loading) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Page__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            my: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {})
          })
        });
      }

      var website;

      if (data.Collective) {
        website = data.Collective.githubHandle ? "https://github.com/".concat(data.Collective.githubHandle) : data.Collective.website;
      }

      var profiles = LoggedInUser && LoggedInUser.memberOf.concat(_objectSpread(_objectSpread({}, LoggedInUser), {}, {
        role: 'ADMIN'
      })).filter(function (_ref3) {
        var role = _ref3.role;
        return ['ADMIN', 'HOST'].includes(role);
      });

      var pledgeStats = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(data, 'Collective.pledges', []).reduce(function (stats, _ref4) {
        var fromCollective = _ref4.fromCollective,
            totalAmount = _ref4.totalAmount;
        stats[fromCollective.type]++;
        stats.total += totalAmount;
        return stats;
      }, {
        USER: 0,
        ORGANIZATION: 0,
        COLLECTIVE: 0,
        total: 0
      });

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          title: intl.formatMessage(CreatePledgePage.messages['menu.createPledge']),
          className: loadingLoggedInUser ? 'loading' : '',
          LoggedInUser: LoggedInUser
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Body__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            mx: "auto",
            py: 4,
            display: ['flex', null, 'block'],
            flexDirection: "column",
            justifyContent: "space-around",
            maxWidth: "1200px",
            clearfix: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              "float": ['none', null, 'left'],
              maxWidth: "600px",
              mt: [4, null, 0],
              order: [2, null, 1],
              px: 3,
              width: [1, null, 0.5],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H3, {
                as: "h1",
                color: "black.900",
                textAlign: "left",
                mb: 4,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "menu.createPledge",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Make a Pledge"
                  }]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                my: 3,
                color: "black.500",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.why",
                  defaultMessage: [{
                    "type": 0,
                    "value": "If the cause or collective that you want to support is not yet on Open Collective, you can make a pledge. This will incentivize them to create an open collective for their activities and offer you much more visibility on how your money is spent to advance their cause."
                  }]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                my: 3,
                color: "black.500",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.onceTheyCreateIt",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Once they create it (and verify that they own the URL you’ll enter in this form), you will receive an email to ask you to fulfill your pledge."
                  }]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                my: 3,
                color: "black.500",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.conditions",
                  defaultMessage: [{
                    "type": 0,
                    "value": "At the moment, you can only pledge for Open Source projects with a GitHub repository or organization. We request the project to have a least 100 stars on GitHub!"
                  }]
                })
              }), loadingLoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                my: 3,
                color: "black.500",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.loadingProfile",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Loading profile..."
                  }]
                })
              }), !loadingLoggedInUser && !LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                mt: [5, null, 4],
                color: "black.700",
                fontSize: "16px",
                lineHeight: "24px",
                "data-cy": "signupOrLogin",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.signinToCreate",
                  defaultMessage: [{
                    "type": 8,
                    "value": "signin-link",
                    "children": [{
                      "type": 0,
                      "value": "Sign in or join free"
                    }]
                  }, {
                    "type": 0,
                    "value": " to create a pledge."
                  }],
                  values: {
                    'signin-link': function signinLink(msg) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Link__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                        href: {
                          pathname: '/signin',
                          query: {
                            next: slug ? "/".concat(slug, "/pledges/new") : '/pledges/new'
                          }
                        },
                        children: msg
                      });
                    }
                  }
                })
              }), !loadingLoggedInUser && LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("form", {
                onSubmit: this.createPledge.bind(this),
                children: [!slug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Box */ .xu, {
                  mb: 3,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H5, {
                    textAlign: "left",
                    mb: 4,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                      id: "createPledge.collectiveDetails",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Details of the new collective:"
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    position: "relative",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                      position: "absolute",
                      left: -45,
                      top: 0,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Image__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                        src: "/static/icons/first-pledge-badge.svg",
                        alt: "first pledge",
                        height: 32,
                        width: 32
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                      fontWeight: "bold",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                        id: "createPledge.first",
                        defaultMessage: [{
                          "type": 0,
                          "value": "You are the first pledger!"
                        }]
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                    color: "black.500",
                    fontSize: "12px",
                    mt: 2,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                      id: "createPledge.priviledge",
                      defaultMessage: [{
                        "type": 0,
                        "value": "You’ve earned the privilege to name and describe this awesome cause. We’ll create a pledged collective page for it so other people can find it and pledge to it too."
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                    flexDirection: ['column', null, 'row'],
                    alignItems: ['flex-start', null, 'flex-end'],
                    mt: 3,
                    flexWrap: "wrap",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                      flexDirection: "column",
                      mb: 3,
                      pr: [0, null, 3],
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                        htmlFor: "name",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                          id: "Fields.name",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Name"
                          }]
                        })
                      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_35__/* .TextInput */ .oi, {
                        "data-cy": "nameInput",
                        name: "name",
                        id: "name",
                        defaultValue: name
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                      flexDirection: "column",
                      mb: 3,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                        htmlFor: "slug",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                          id: "Collective.URL",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Collective URL"
                          }]
                        })
                      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledInputGroup__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                        prepend: "https://opencollective.com/",
                        id: "slug",
                        name: "slug",
                        defaultValue: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_14__/* .suggestSlug */ .e4)(name || '').toLowerCase(),
                        "data-cy": "slugInput"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                    flexDirection: "column",
                    mb: 3,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                      htmlFor: "githubHandle",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                        id: "createPledge.githubURL",
                        defaultMessage: [{
                          "type": 0,
                          "value": "GitHub URL: repository or organization with at least 100 stars!"
                        }]
                      })
                    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledInputGroup__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                      prepend: "https://github.com/",
                      id: "githubHandle",
                      name: "githubHandle",
                      placeholder: "e.g., babel/babel",
                      defaultValue: githubHandle || '',
                      "data-cy": "githubHandleInput"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Box */ .xu, {
                  my: 5,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H5, {
                    textAlign: "left",
                    mb: 3,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                      id: "createPledge.pledgeAs",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Pledge as:"
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                    flexDirection: "column",
                    my: 3,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                      htmlFor: "fromCollective",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                        id: "createPledge.profile",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Choose a profile"
                        }]
                      })
                    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("select", {
                      id: "fromCollective",
                      name: "fromCollective",
                      defaultValue: LoggedInUser.CollectiveId,
                      children: profiles.map(function (_ref5) {
                        var collective = _ref5.collective;
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("option", {
                          value: collective.id,
                          children: collective.name
                        }, collective.slug + collective.id);
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Box */ .xu, {
                  mb: 5,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H5, {
                    textAlign: "left",
                    mb: 3,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                      id: "createPledge.pledgeDetails",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Pledge details:"
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(AmountField, {
                    LoggedInUser: LoggedInUser
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                    flexDirection: "column",
                    mb: 3,
                    width: 200,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, _objectSpread(_objectSpread({}, labelStyles), {}, {
                      htmlFor: "interval",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                        id: "Frequency",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Frequency"
                        }]
                      })
                    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)("select", {
                      id: "interval",
                      name: "interval",
                      defaultValue: "monthly",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("option", {
                        value: "month",
                        children: intl.formatMessage(CreatePledgePage.messages['frequency.monthly'])
                      }, "monthly"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("option", {
                        value: "year",
                        children: intl.formatMessage(CreatePledgePage.messages['frequency.yearly'])
                      }, "yearly"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("option", {
                        value: "none",
                        children: intl.formatMessage(CreatePledgePage.messages['frequency.oneTime'])
                      }, "none")]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(WordCountTextarea, {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledInput__WEBPACK_IMPORTED_MODULE_35__/* .SubmitInput */ .z0, {
                  value: submitting ? 'Submitting...' : 'Make Pledge',
                  mt: 4,
                  mx: ['auto', null, 0],
                  display: "block",
                  disabled: !LoggedInUser || submitting,
                  "data-cy": "submit"
                })]
              }), errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                color: "red.500",
                "data-cy": "errorMessage",
                mt: 3,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "errorMsg",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Error: "
                  }, {
                    "type": 1,
                    "value": "error"
                  }],
                  values: {
                    error: errorMessage
                  }
                })
              })]
            }), slug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                borderBottom: ['1px solid', null, 'none'],
                borderColor: "black.300",
                "float": ['none', null, 'right'],
                pb: [4, null, 0],
                px: [3, null, 5],
                textAlign: ['center', null, 'left'],
                order: [1, null, 2],
                width: [1, null, 0.5],
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Image__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                  src: defaultPledgedLogo,
                  alt: "Pledged Collective",
                  width: 128,
                  height: 128
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H3, {
                  mt: 3,
                  mb: 1,
                  children: data.Collective.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_StyledLink__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                  fontSize: "14px",
                  href: website,
                  children: website
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                "float": ['none', null, 'right'],
                px: [3, null, 5],
                order: 3,
                mt: 5,
                width: [1, null, 0.5],
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H5, {
                  textAlign: "left",
                  fontWeight: "normal",
                  mb: 2,
                  "data-cy": "amountPledgedTotal",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Currency__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    fontWeight: "bold",
                    value: pledgeStats.total,
                    currency: data.Collective.currency,
                    precision: 0
                  }), ' ', data.Collective.currency, " pledged"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.P, {
                  color: "black.600",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                    id: "create.pledge.stats",
                    values: {
                      both: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE && pledgeStats.USER ? 1 : 0,
                      orgCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE,
                      userCount: pledgeStats.USER,
                      totalCount: pledgeStats.ORGANIZATION + pledgeStats.COLLECTIVE + pledgeStats.USER
                    },
                    defaultMessage: [{
                      "type": 0,
                      "value": "by "
                    }, {
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
                            "value": " sponsor"
                          }]
                        },
                        "other": {
                          "value": [{
                            "type": 7
                          }, {
                            "type": 0,
                            "value": " sponsors"
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
                            "value": " backer "
                          }]
                        },
                        "other": {
                          "value": [{
                            "type": 7
                          }, {
                            "type": 0,
                            "value": " backers "
                          }]
                        }
                      },
                      "offset": 0,
                      "pluralType": "cardinal"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                  flexWrap: "wrap",
                  mb: 3,
                  mt: 4,
                  children: data.Collective.pledges.filter(function (_ref6) {
                    var fromCollective = _ref6.fromCollective;
                    return fromCollective.type === 'USER';
                  }).map(function (_ref7) {
                    var fromCollective = _ref7.fromCollective;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Box */ .xu, {
                      mr: 2,
                      mt: 2,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Link__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                        href: "/".concat(fromCollective.slug),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                          collective: fromCollective,
                          radius: 40
                        })
                      })
                    }, fromCollective.id);
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Flex */ .kC, {
                  flexWrap: "wrap",
                  children: data.Collective.pledges.filter(function (_ref8) {
                    var fromCollective = _ref8.fromCollective;
                    return fromCollective.type === 'ORGANIZATION' || fromCollective.type === 'COLLECTIVE';
                  }).map(function (_ref9) {
                    var fromCollective = _ref9.fromCollective;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Grid__WEBPACK_IMPORTED_MODULE_26__/* .Box */ .xu, {
                      mr: 2,
                      mt: 2,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Link__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                        href: "/".concat(fromCollective.slug),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                          backgroundImage: "url(".concat((0,_lib_image_utils__WEBPACK_IMPORTED_MODULE_19__/* .imagePreview */ .Z_)(fromCollective.image, _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_15__/* .defaultImage */ .FM[fromCollective.type], {
                            width: 65
                          }), ")"),
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          borderRadius: 8,
                          height: 40,
                          width: 40
                        })
                      })
                    }, fromCollective.id);
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              clear: !LoggedInUser && slug ? 'both' : 'none',
              "float": ['none', null, 'right'],
              mt: 5,
              px: [3, null, 5],
              order: 4,
              width: [1, null, 0.5],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_40__.H4, {
                fontWeight: "medium",
                mb: 3,
                children: "FAQs"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(Details, {
                "data-cy": "whatIsAPledge",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("summary", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                    id: "createPledge.faq.whatSummary",
                    defaultMessage: [{
                      "type": 0,
                      "value": "What is a pledge?"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.faq.what",
                  defaultMessage: [{
                    "type": 0,
                    "value": "A pledge allows supporters (companies and individuals) to pledge funds towards a collective that hasn’t been created yet. If you can’t find a collective you want to support, pledge to it!"
                  }]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(Details, {
                "data-cy": "WHAIP",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("summary", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                    id: "createPledge.faq.whatHappensSummary",
                    defaultMessage: [{
                      "type": 0,
                      "value": "What happens after I pledge?"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.faq.whatHappens",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Once someone makes a pledge to a collective, we automatically create a pledged collective. We don’t spam folks, so please help us reach out to the community via twitter / github or, if you can, via email."
                  }]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(Details, {
                "data-cy": "whenDoIPay",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("summary", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                    id: "createPledge.faq.paySummary",
                    defaultMessage: [{
                      "type": 0,
                      "value": "When do I pay?"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.faq.pay",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Once that pledged collective is claimed, we will email you to fulfill your pledge."
                  }]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsxs)(Details, {
                "data-cy": "howDoIClaimPledge",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)("summary", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                    id: "createPledge.faq.howToClaimSummary",
                    defaultMessage: [{
                      "type": 0,
                      "value": "How do I claim a pledged collective?"
                    }]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z, {
                  id: "createPledge.faq.howToClaim",
                  defaultMessage: [{
                    "type": 0,
                    "value": "You’ll need to contact "
                  }, {
                    "type": 8,
                    "value": "SupportLink",
                    "children": [{
                      "type": 0,
                      "value": "support"
                    }]
                  }, {
                    "type": 0,
                    "value": " to prove that you are an admin of this project."
                  }],
                  values: _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_42__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {})]
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref10) {
      var _ref10$query = _ref10.query,
          query = _ref10$query === void 0 ? {} : _ref10$query;
      return {
        name: query.name || '',
        githubHandle: query.githubHandle || '',
        slug: query.slug
      };
    }
  }]);

  return CreatePledgePage;
}(react__WEBPACK_IMPORTED_MODULE_11__.Component);

_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_8___default()(CreatePledgePage, "messages", (0,react_intl__WEBPACK_IMPORTED_MODULE_45__.defineMessages)({
  'menu.createPledge': {
    id: "menu.createPledge",
    defaultMessage: [{
      "type": 0,
      "value": "Make a Pledge"
    }]
  },
  'frequency.monthly': {
    id: "Frequency.Monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly"
    }]
  },
  'frequency.yearly': {
    id: "Frequency.Yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly"
    }]
  },
  'frequency.oneTime': {
    id: "Frequency.OneTime",
    defaultMessage: [{
      "type": 0,
      "value": "One time"
    }]
  }
}));

var createPledgePageQuery = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_17__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject || (_templateObject = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query CreatePledgePage($slug: String!) {\n    Collective(slug: $slug) {\n      currency\n      id\n      name\n      website\n      githubHandle\n      pledges: orders(status: PENDING) {\n        id\n        totalAmount\n        fromCollective {\n          id\n          imageUrl(height: 128)\n          slug\n          name\n          type\n        }\n      }\n    }\n  }\n"])));
var addCreatePledgePageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_46__/* .graphql */ .B)(createPledgePageQuery, {
  skip: function skip(props) {
    return !props.slug;
  }
});
var createPledgeMutation = (0,_lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_17__/* .gqlV1 */ .N)
/* GraphQL */
(_templateObject2 || (_templateObject2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation CreatePledge($order: OrderInputType!) {\n    createOrder(order: $order) {\n      id\n      createdAt\n      status\n      fromCollective {\n        id\n        slug\n      }\n      collective {\n        id\n        slug\n      }\n      transactions(type: \"CREDIT\") {\n        id\n        uuid\n      }\n    }\n  }\n"])));
var addCreatePledgeMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_46__/* .graphql */ .B)(createPledgeMutation, {
  props: function props(_ref11) {
    var mutate = _ref11.mutate;
    return {
      createPledge: function () {
        var _createPledge2 = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().mark(function _callee2(order, collective) {
          return _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_10___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return mutate({
                    variables: {
                      order: order
                    },
                    refetchQueries: !collective ? [] : [{
                      query: _lib_graphql_queries__WEBPACK_IMPORTED_MODULE_18__/* .legacyCollectiveQuery */ .pY,
                      variables: {
                        slug: collective.slug
                      }
                    }, {
                      query: _components_PledgedCollectivePage__WEBPACK_IMPORTED_MODULE_33__.pledgedCollectivePageQuery,
                      variables: {
                        id: collective.id
                      }
                    }]
                  });

                case 2:
                  return _context2.abrupt("return", _context2.sent);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function createPledge(_x2, _x3) {
          return _createPledge2.apply(this, arguments);
        }

        return createPledge;
      }()
    };
  }
});
var addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_20__/* .compose */ .qC)(addCreatePledgePageData, addCreatePledgeMutation);
CreatePledgePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query = {} }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "createPledge",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "CreatePledgePage",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "githubHandle": {
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
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "createPledge": {
      "description": "",
      "type": {
        "name": "func"
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
/* harmony default export */ __webpack_exports__["default"] = ((0,react_intl__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .ZP)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_41__/* .withUser */ .ns)(addGraphql((0,next_router__WEBPACK_IMPORTED_MODULE_13__.withRouter)(CreatePledgePage)))));

var _StyledStyledInputField = (0,styled_components__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .ZP)(_components_StyledInputField__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z).withConfig({
  displayName: "createPledge___StyledStyledInputField",
  componentId: "sc-f3btza-1"
})({
  flexGrow: 1
});

/***/ }),

/***/ 58458:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/createPledge",
      function () {
        return __webpack_require__(9939);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,6533,146,5813,4842,1012,7653,9774,2888,179], function() { return __webpack_exec__(58458); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=createPledge-6976e3619efcb96c.js.map