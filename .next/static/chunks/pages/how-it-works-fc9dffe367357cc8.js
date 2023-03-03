(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1640],{

/***/ 3642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": function() { return /* binding */ ArrowRight; }
/* harmony export */ });
/* unused harmony export ArrowRightDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var ArrowRight = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke": "currentColor",
    "strokeLinecap": "round",
    "strokeLinejoin": "round"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: 5,
    x2: 19,
    y1: 12,
    y2: 12
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
});
ArrowRight.displayName = 'ArrowRight';
var ArrowRightDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 42815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HomeIllustration; }
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var index_esm = __webpack_require__(16678);
;// CONCATENATED MODULE: ./lib/constants/animations.js

var rotate = (0,styled_components_browser_esm/* keyframes */.F4)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var fadeIn = (0,styled_components_browser_esm/* keyframes */.F4)(["0%{opacity:0;}100%{opacity:1;}"]);
var rotateMixin = (0,styled_components_browser_esm/* css */.iv)(["animation:", " 0.8s infinite linear;"], rotate);
;// CONCATENATED MODULE: ./components/collectives/HomeIllustration.js



var Illustration = styled_components_browser_esm/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "HomeIllustration__Illustration",
  componentId: "sc-xcwqm6-0"
})(["max-width:100%;max-height:100%;", " ", " ", ";"], index_esm/* space */.Dh, index_esm/* display */.jf, function (_ref) {
  var animate = _ref.animate;
  return animate ? rotateMixin : null;
});
/* harmony default export */ var HomeIllustration = (Illustration);

/***/ }),

/***/ 88579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3323);
/* harmony import */ var _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3642);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50056);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44012);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52015);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98738);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47667);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85893);


var _excluded = ["id", "intl", "activeFeature"],
    _excluded2 = ["intl", "id", "learnMoreLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var SelectFeatureButton = styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"].button.withConfig */ .ZP.button.withConfig({
  displayName: "Features__SelectFeatureButton",
  componentId: "sc-1g702zl-0"
})(["width:100%;cursor:pointer;color:#1869f5;border:none;outline:none;background:#fff;padding:0;@media screen and (min-width:40em){color:", ";width:220px;padding:3px;", " &:hover{color:#1869f5;}}@media screen and (min-width:64em){width:247px;}@media screen and (min-width:88em){width:317px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__/* .themeGet */ .R)('colors.black.700'), function (props) {
  return props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* .css */ .iv)(["color:#dc5f7d;border:1px solid #e6f3ff;border-radius:8px;background:#ffffff;outline:none;padding:8px;box-shadow:0px 4px 8px rgba(20,20,20,0.16);"]);
});
var FeatureListWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "Features__FeatureListWrapper",
  componentId: "sc-1g702zl-1"
})(["margin:0;padding:0;flex-direction:column;align-items:center;justify-content:center;"]);
var FeatureList = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "Features__FeatureList",
  componentId: "sc-1g702zl-2"
})(["list-style:none;display:flex;flex-direction:column;width:100%;margin:14px 0;"]);
var LearnMoreLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
  displayName: "Features__LearnMoreLink",
  componentId: "sc-1g702zl-3"
})(["color:#dc5f7d;&:hover{color:#dc5f7d;}"]);
var LineBreak = styled_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"].br.withConfig */ .ZP.br.withConfig({
  displayName: "Features__LineBreak",
  componentId: "sc-1g702zl-4"
})(["@media screen and (min-width:40em){display:none;}"]);
var features = [{
  id: 'shareBudget',
  learnMoreLink: 'https://docs.opencollective.com/help/collectives/budget'
}, {
  id: 'receiveContributions',
  learnMoreLink: 'https://docs.opencollective.com/help/financial-contributors/financial-contributors'
}, {
  id: 'manageExpenses',
  learnMoreLink: 'https://docs.opencollective.com/help/expenses-and-getting-paid/expenses'
}, {
  id: 'engageCommunity',
  learnMoreLink: 'https://docs.opencollective.com/help/collectives/conversations'
}, {
  id: 'celebrateSupporters',
  learnMoreLink: null
}, {
  id: 'getMonthlyReports',
  learnMoreLink: null
}];
var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__.defineMessages)({
  'home.feature.shareBudget': {
    id: "home.feature.shareBudget",
    defaultMessage: [{
      "type": 0,
      "value": "Share your budget"
    }]
  },
  'home.feature.shareBudget.description': {
    id: "home.feature.shareBudget.description",
    defaultMessage: [{
      "type": 0,
      "value": "Everyone can see where money comes from and where it goes. Clarity and accountability without any spreadsheets or extra work!"
    }]
  },
  'home.feature.receiveContributions': {
    id: "home.feature.receiveContributions",
    defaultMessage: [{
      "type": 0,
      "value": "Receive Contributions"
    }]
  },
  'home.feature.receiveContributions.description': {
    id: "home.feature.receiveContributions.description",
    defaultMessage: [{
      "type": 0,
      "value": "Accept payments by credit card, bank transfer, and Paypal. Define custom tiers and set goals to motivate your supporters to give."
    }]
  },
  'home.feature.manageExpenses': {
    id: "home.feature.manageExpenses",
    defaultMessage: [{
      "type": 0,
      "value": "Manage Expenses"
    }]
  },
  'home.feature.manageExpenses.description': {
    id: "home.feature.manageExpenses.description",
    defaultMessage: [{
      "type": 0,
      "value": "Contributors and vendors can easily submit receipts and invoices. You approve or reject them, and once paid your balance updates automatically."
    }]
  },
  'home.feature.engageCommunity': {
    id: "home.feature.engageCommunity",
    defaultMessage: [{
      "type": 0,
      "value": "Engage your community"
    }]
  },
  'home.feature.engageCommunity.description': {
    id: "home.feature.engageCommunity.description",
    defaultMessage: [{
      "type": 0,
      "value": "Post Updates to engage supporters and share your progress and the impact of their funding. Use Conversations as a community discussion forum."
    }]
  },
  'home.feature.celebrateSupporters': {
    id: "home.feature.celebrateSupporters",
    defaultMessage: [{
      "type": 0,
      "value": "Celebrate your supporters"
    }]
  },
  'home.feature.celebrateSupporters.description': {
    id: "home.feature.celebrateSupporters.description",
    defaultMessage: [{
      "type": 0,
      "value": "Leaderboard of your top funders, plus highlight how your whole community contributes in different ways."
    }]
  },
  'home.feature.getMonthlyReports': {
    id: "home.feature.getMonthlyReports",
    defaultMessage: [{
      "type": 0,
      "value": "Get monthly reports"
    }]
  },
  'home.feature.getMonthlyReports.description': {
    id: "home.feature.getMonthlyReports.description",
    defaultMessage: [{
      "type": 0,
      "value": "A summary of your group’s activities, progress on your budget goals, new contributors, and expense details, with all transaction data and receipts/invoices attached."
    }]
  }
});

var FeatureTitle = function FeatureTitle(_ref) {
  var id = _ref.id,
      intl = _ref.intl,
      activeFeature = _ref.activeFeature,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  var iconUrl = activeFeature === id ? "/static/images/home/".concat(id, "-icon.png") : "/static/images/home/".concat(id, "-icon-black.png");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, _objectSpread(_objectSpread({
    alignItems: "center",
    justifyContent: ['center', 'space-between'],
    width: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        display: ['none', 'block'],
        width: [null, '48px'],
        height: [null, '48px'],
        mr: [3, 2],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          width: 50,
          height: 50,
          src: iconUrl,
          alt: "".concat(id, " icon")
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
        color: ['black.800', 'black.900'],
        active: id === activeFeature,
        fontWeight: "500",
        textAlign: ['center', 'left'],
        fontSize: ['20px', '16px', null, null, '18px'],
        lineHeight: ['28px', '24px', null, null, '27px'],
        letterSpacing: ['-0.6px', '-0.16px', null, null, '-0.2px'],
        children: intl.formatMessage(messages["home.feature.".concat(id)])
      })]
    })
  }));
};

var FeatureDescription = function FeatureDescription(_ref2) {
  var intl = _ref2.intl,
      id = _ref2.id,
      learnMoreLink = _ref2.learnMoreLink,
      props = _home_runner_work_groupwork_frontend_groupwork_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
      fontSize: ['16px', null, null, null, '18px'],
      lineHeight: ['24px', null, null, null, '27px'],
      color: ['black.600', 'black.700'],
      letterSpacing: ['-0.04px', '-0.16px'],
      textAlign: ['center', 'left'],
      children: [intl.formatMessage(messages["home.feature.".concat(id, ".description")]), ' ', learnMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(LineBreak, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(LearnMoreLink, {
          href: learnMoreLink,
          openInNewTab: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            id: "TdTXXf",
            defaultMessage: [{
              "type": 0,
              "value": "Learn more"
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
            display: [null, 'none'],
            children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_15__/* .ArrowRight */ .o, {
              size: "24"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
            display: ['none', 'inline-block'],
            children: "..."
          })]
        })]
      })]
    })
  }));
};

var Feature = function Feature(_ref3) {
  var id = _ref3.id,
      learnMoreLink = _ref3.learnMoreLink,
      intl = _ref3.intl;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    width: 1,
    display: "flex",
    mr: 2,
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FeatureTitle, {
      intl: intl,
      id: id,
      activeFeature: id,
      display: [null, 'none']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      mb: [2, 3, 5],
      ml: [null, null, 4],
      width: [null, null, '400px', null, '624px'],
      textAlign: "left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_9__.H4, {
        display: ['none', 'block'],
        letterSpacing: "-0.4px",
        fontWeight: "bold",
        color: "primary.900",
        my: 3,
        children: intl.formatMessage(messages["home.feature.".concat(id)])
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FeatureDescription, {
        learnMoreLink: learnMoreLink,
        intl: intl,
        id: id,
        display: ['none', 'block']
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      width: [null, '392px', '466px', null, '756px'],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        loading: "eager",
        width: 756,
        height: 575,
        src: "/static/images/home/".concat(id, "-screenshot.png"),
        alt: intl.formatMessage(messages["home.feature.".concat(id)])
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FeatureDescription, {
      intl: intl,
      id: id,
      learnMoreLink: learnMoreLink,
      display: ['block', 'none'],
      mt: 2
    })]
  });
};

var Features = function Features(_ref4) {
  var sectionTitle = _ref4.sectionTitle,
      sectionSubtitle = _ref4.sectionSubtitle;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(features[0]),
      activeFeature = _useState[0],
      setActiveFeature = _useState[1];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    mx: [3, 4],
    flexDirection: "column",
    textAlign: "center",
    my: [4, null, 0],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
      mb: 3,
      children: sectionTitle || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        id: "home.featureSection.title",
        defaultMessage: [{
          "type": 0,
          "value": "How to use Open Collective"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
      children: sectionSubtitle || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_intl__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        id: "home.featureSection.subTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Discover our features."
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexDirection: ['column', 'row-reverse'],
      alignItems: [null, 'flex-start', null, null, 'center'],
      mt: [3, null, 4],
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FeatureListWrapper, {
        as: "ul",
        display: ['none', 'flex'],
        children: features.map(function (feature) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FeatureList, {
            ml: [null, 4, null, 6],
            mr: [null, null, null, null, 2],
            as: "li",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(SelectFeatureButton, {
              width: 1,
              onClick: function onClick() {
                return setActiveFeature(feature);
              },
              active: activeFeature.id === feature.id,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FeatureTitle, {
                intl: intl,
                id: feature.id,
                activeFeature: activeFeature.id
              })
            })
          }, feature.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StyledCarousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        display: [null, 'none'],
        width: 1,
        children: features.map(function (feature) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Feature, {
              id: feature.id,
              learnMoreLink: feature.learnMoreLink,
              intl: intl
            })
          }, feature.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        display: ['none', 'block'],
        height: "672px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Feature, {
          id: activeFeature.id,
          learnMoreLink: activeFeature.learnMoreLink,
          intl: intl
        })
      })]
    })]
  });
};

Features.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Features",
  "props": {
    "sectionTitle": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "sectionSubtitle": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (Features);

/***/ }),

/***/ 59621:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ how_it_works; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./components/collectives/sections/Features.js
var Features = __webpack_require__(88579);
// EXTERNAL MODULE: ./components/collectives/sections/JoinUs.js
var JoinUs = __webpack_require__(78355);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./components/collectives/HomeIllustration.js + 1 modules
var HomeIllustration = __webpack_require__(42815);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/marketing/Text.js
var Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var components_Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/how-it-works/AndSoMuchMoreSection.js











var MoreFeatures = function MoreFeatures() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    mt: [null, null, null, null, '180px'],
    mb: "80px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mx: 3,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mb: ['24px', 3, null, null, '24px'],
        width: ['288px', 1],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.muchMore",
            defaultMessage: [{
              "type": 0,
              "value": "And so much more!"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', 1],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionDescription */.TI, {
          textAlign: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "home.weAreOpenSection.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "We not only help you be transparent, we are too!"
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mx: 3,
      gridGap: ['48px', '72px 40px', '72px 112px', null, '124px 112px'],
      placeSelf: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: ['center', null, null, 'flex-start'],
      mt: ['27px', '56px', null, null, '69px'],
      maxWidth: "1200px",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "56px",
          height: "56px",
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
            src: "/static/images/how-it-works/event-illustration.png",
            alt: "Event Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: "288px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Events",
              defaultMessage: [{
                "type": 0,
                "value": "Events"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: "18px",
            lineHeight: "26px",
            color: "black.700",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "howItWorks.events.description",
              defaultMessage: [{
                "type": 0,
                "value": "Host online or offline events, with ticket sale revenue going straight to your transparent budget."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "56px",
          height: "56px",
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
            src: "/static/images/how-it-works/projects-illustration.png",
            alt: "Event Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: "288px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Projects",
              defaultMessage: [{
                "type": 0,
                "value": "Projects"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: "18px",
            lineHeight: "26px",
            color: "black.700",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "howItWorks.projects.description",
              defaultMessage: [{
                "type": 0,
                "value": "Manage a grant or raise money for a specific purpose, with flexible tools for segregating your budget."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "56px",
          height: "56px",
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
            src: "/static/images/how-it-works/virtualCard-illustration.png",
            alt: "Event Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: "288px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "VirtualCards.Title",
              defaultMessage: [{
                "type": 0,
                "value": "Virtual Cards"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: "18px",
            lineHeight: "26px",
            color: "black.700",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "howItWorks.virtualCards.description",
              defaultMessage: [{
                "type": 0,
                "value": "Spend money anywhere you’d use a credit or debit card online, linked directly to your Open Collective funds (this beta feature is only available to certain fiscal hosts)."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "56px",
          height: "56px",
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
            src: "/static/images/how-it-works/embeddable-illustration.png",
            alt: "Event Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: "288px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "howItWorks.embeddable",
              defaultMessage: [{
                "type": 0,
                "value": "Embeddable"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: "18px",
            lineHeight: "26px",
            color: "black.700",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "howItWorks.embeddable.description",
              defaultMessage: [{
                "type": 0,
                "value": "You can display the Open Collective contribution component directly on your own website, meaning people don’t need to leave your page to pay."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          width: "56px",
          height: "56px",
          mb: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeIllustration/* default */.Z, {
            src: "/static/images/how-it-works/extraSecurity-illustration.png",
            alt: "Event Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          width: "288px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "howItWorks.extraSecurity",
              defaultMessage: [{
                "type": 0,
                "value": "Extra security"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
            fontSize: "18px",
            lineHeight: "26px",
            color: "black.700",
            fontWeight: "500",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "howItWorks.extraSecurity.description",
              defaultMessage: [{
                "type": 0,
                "value": "Optional 2-factor authentication. As a tool for managing money, we take security very seriously."
              }]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: "74px",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
        width: "100%",
        buttonStyle: "marketingSecondary",
        buttonSize: "medium",
        href: "https://docs.opencollective.com/help/",
        fontWeight: "500",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "TdTXXf",
          defaultMessage: [{
            "type": 0,
            "value": "Learn more"
          }]
        })
      })
    })]
  });
};

MoreFeatures.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MoreFeatures"
};
/* harmony default export */ var AndSoMuchMoreSection = (MoreFeatures);
// EXTERNAL MODULE: ./node_modules/@styled-system/theme-get/dist/index.esm.js
var index_esm = __webpack_require__(50056);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./node_modules/styled-system/dist/index.esm.js + 11 modules
var dist_index_esm = __webpack_require__(16678);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
;// CONCATENATED MODULE: ./components/how-it-works/HowOCIsDifferentSection.js











var Title = (0,styled_components_browser_esm/* default */.ZP)(components_Text.H3).withConfig({
  displayName: "HowOCIsDifferentSection__Title",
  componentId: "sc-1445zeb-0"
})(["font-size:20px;line-height:28px;letter-spacing:-0.008em;font-weight:bold;margin-bottom:16px;margin-top:16px;color:", ";", " @media screen and (min-width:40em){font-size:24px;line-height:32px;}@media screen and (min-width:88em){font-size:32px;line-height:40px;}"], (0,index_esm/* themeGet */.R)('colors.primary.900'), dist_index_esm/* display */.jf);
var Description = (0,styled_components_browser_esm/* default */.ZP)(components_Text.P).withConfig({
  displayName: "HowOCIsDifferentSection__Description",
  componentId: "sc-1445zeb-1"
})(["font-size:15px;line-height:22px;letter-spacing:-0.12px;color:", ";font-weight:500;", " @media screen and (min-width:40em){font-size:18px;line-height:26px;}"], (0,index_esm/* themeGet */.R)('colors.black.800'), dist_index_esm/* display */.jf);

var HowOCIsDifferent = function HowOCIsDifferent() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    mx: [3, 4],
    my: 4,
    mt: ['88px', null, '120px'],
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      width: ['288px', '100%'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "howItWorks.HowOCIsDifferent.title",
          defaultMessage: [{
            "type": 0,
            "value": "Open Collective is different"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      mt: ['94px', null, '54px'],
      mb: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '392px', null, null, '558px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 558,
          height: 418,
          src: "/static/images/how-it-works/transparentByDesign-illustration.png",
          alt: "Transparent by design"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        ml: [null, 2, null, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.transparentByDesign",
            defaultMessage: [{
              "type": 0,
              "value": "Transparent by design"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.transparentByDesign.description",
            defaultMessage: [{
              "type": 0,
              "value": "The first thing you’ll notice is transparency—everyone can see where money comes from and where it goes—but it doesn’t end there..."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row-reverse'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '392px', null, null, '558px'],
        ml: [null, null, 3, null, 5],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 558,
          height: 429,
          src: "/static/images/how-it-works/builtWithResilient-illustration.png",
          alt: "Built with resilience in mind"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        mr: [null, 2, null, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.builtWithResilient",
            defaultMessage: [{
              "type": 0,
              "value": "Built with resilience in mind"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.builtWithResilient.description",
            defaultMessage: [{
              "type": 0,
              "value": "Unlike other crowdfunding platforms, Open Collective is designed for ongoing collaborations. That means your funding and community of support doesn’t disappear after a single campaign, or if the initial organizers move on."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '392px', null, null, '558px'],
        height: [null, '323px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 555,
          height: 452,
          src: '/static/images/how-it-works/openIsBetter-illustration.png',
          alt: "Open is better"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        ml: [null, 4, 0, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.openIsBetter",
            defaultMessage: [{
              "type": 0,
              "value": "Open is better"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.openIsBetter.description",
            defaultMessage: [{
              "type": 0,
              "value": "Our code is fully transparent and open source, just like our budget. You own your data: we’ll never sell it or lock you in."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      my: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row-reverse'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '392px', null, null, '558px'],
        height: [null, '323px'],
        ml: [null, null, 3, null, 5],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
          width: 555,
          height: 452,
          src: '/static/images/how-it-works/moneyManagement-illustration.png',
          alt: "Hassle-free money management"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        mr: [null, 4, 0, 5],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.moneyManagement",
            defaultMessage: [{
              "type": 0,
              "value": "Hassle-free money management"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Description, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.moneyManagement.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective uniquely combines a powerful tech platform with fiscal hosting, enabling Collectives to raise and spend money without legally incorporating, worrying about taxes, or opening a bank account."
            }]
          })
        })]
      })]
    })]
  });
};

HowOCIsDifferent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowOCIsDifferent"
};
/* harmony default export */ var HowOCIsDifferentSection = (HowOCIsDifferent);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
;// CONCATENATED MODULE: ./components/how-it-works/HowOCWorksSection.js












var HowOCWorks = function HowOCWorks() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: ['column', null, 'row-reverse'],
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: 4,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mt: [3, 0],
      mb: [3, null, null, null, '24px'],
      width: ['288px', '676px', '413px', null, '555px'],
      display: [null, null, 'none'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainTitle */.U3, {
        textAlign: ['center', null, 'left'],
        whiteSpace: [null, null, 'pre-line'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "OC.howItWorks",
          defaultMessage: [{
            "type": 0,
            "value": "How Open Collective works"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      ml: [null, '6px', '40px', null, '84px'],
      width: ['288px', '306px', '458px', null, '558px'],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomeNextIllustration/* default */.Z, {
        alt: "How Open Collective works",
        src: "/static/images/how-it-works/howItWorks-illustration.png",
        width: 558,
        height: 462
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: ['center', null, 'flex-start'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        mt: [3, 0],
        mb: [3, null, null, null, '24px'],
        width: ['288px', '344px', '413px', null, '555px'],
        display: ['none', null, 'block'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* MainTitle */.U3, {
          textAlign: ['center', null, 'left'],
          whiteSpace: [null, null, 'pre-line'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "OC.howItWorks",
            defaultMessage: [{
              "type": 0,
              "value": "How Open Collective works"
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
        width: ['288px', '676px', '458px', null, '558px'],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.P, {
          fontSize: ['15px', '18px'],
          lineHeight: ['22px', '26px'],
          textAlign: ['center', 'left'],
          fontWeight: "500",
          color: "black.800",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "howItWorks.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective enables all kinds of groups to raise, manage, and spend money transparently. Our open source software platform engages contributors and supporters, automates admin, and helps you tell your story."
            }]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: "/create",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
          minWidth: 158,
          mt: ['56px', '24px'],
          buttonStyle: "marketing",
          whiteSpace: "nowrap",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "home.create",
            defaultMessage: [{
              "type": 0,
              "value": "Create a Collective"
            }]
          })
        })
      })]
    })]
  });
};

HowOCWorks.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowOCWorks"
};
/* harmony default export */ var HowOCWorksSection = (HowOCWorks);
// EXTERNAL MODULE: ./node_modules/@styled-icons/icomoon/ArrowRight2/ArrowRight2.esm.js
var ArrowRight2_esm = __webpack_require__(44205);
;// CONCATENATED MODULE: ./components/how-it-works/MoreAboutFHSection.js











var Wrapper = (0,styled_components_browser_esm/* default */.ZP)(Container/* default */.Z).withConfig({
  displayName: "MoreAboutFHSection__Wrapper",
  componentId: "sc-by6m1c-0"
})(["display:flex;justify-content:space-between;align-items:center;border-radius:8px;padding:25px 36px;background-color:rgba(255,255,255,0.9);border:1px solid #dcdde0;&:hover{border:1px solid #297eff;color:#1041a3;h3{color:#1041a3;}}"]);

var MoreAboutFiscalHosting = function MoreAboutFiscalHosting() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: [4, '100px'],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
      mb: ['24px', '56px'],
      width: ['288px', 1],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* SectionTitle */.NZ, {
        textAlign: "center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
          id: "howItWorks.moreAboutFiscalHosting",
          defaultMessage: [{
            "type": 0,
            "value": "More about fiscal hosting"
          }]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', null, 'row'],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: "/fiscal-hosting",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
          color: "black.900",
          mb: [3, null, 0],
          width: ['288px', '400px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: [null, '266px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
              fontSize: ['24px', '32px'],
              textAlign: ['center', 'left'],
              lineHeight: ['32px', '40px'],
              letterSpacing: "-0.008em",
              mb: 2,
              fontWeight: "bold",
              color: "black.800",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "howItWorks.fiscalHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "About how fiscal hosting works"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            display: ['none', 'inline-block'],
            className: "arrowWrapper",
            fontWeight: "bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
              size: '24'
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: "/become-a-host",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
          color: "black.900",
          ml: [null, null, 3],
          width: ['288px', '400px'],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: [null, '266px'],
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Text.H3, {
              fontSize: ['24px', '32px'],
              textAlign: ['center', 'left'],
              lineHeight: ['32px', '40px'],
              letterSpacing: "-0.008em",
              mb: 2,
              fontWeight: "bold",
              color: "black.800",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "howItWorks.becomeHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "About becoming a fiscal host"
                }]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            display: ['none', 'inline-block'],
            className: "arrowWrapper",
            fontWeight: "bold",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight2_esm/* ArrowRight2 */.a, {
              size: '24'
            })
          })]
        })
      })]
    })]
  });
};

MoreAboutFiscalHosting.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MoreAboutFiscalHosting"
};
/* harmony default export */ var MoreAboutFHSection = (MoreAboutFiscalHosting);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
;// CONCATENATED MODULE: ./pages/how-it-works.js











var messages = (0,lib.defineMessages)({
  defaultTitle: {
    id: "OC.howItWorks",
    defaultMessage: [{
      "type": 0,
      "value": "How Open Collective works"
    }]
  },
  feature: {
    id: "howItWorks.features",
    defaultMessage: [{
      "type": 0,
      "value": "Discover our features"
    }]
  },
  'feature.subtitle': {
    id: "howItWorks.features.subtitle",
    defaultMessage: [{
      "type": 0,
      "value": "Collective budget management made simple"
    }]
  }
});

var HowItWorks = function HowItWorks() {
  var _useIntl = (0,useIntl/* default */.Z)(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
    description: formatMessage(messages.defaultTitle),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HowOCWorksSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(HowOCIsDifferentSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(MoreAboutFHSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Features/* default */.Z, {
      sectionTitle: formatMessage(messages.feature),
      sectionSubtitle: formatMessage(messages['feature.subtitle'])
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(AndSoMuchMoreSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(JoinUs/* default */.ZP, {})]
  });
};

HowItWorks.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowItWorks"
};
/* harmony default export */ var how_it_works = (HowItWorks);

/***/ }),

/***/ 66929:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/how-it-works",
      function () {
        return __webpack_require__(59621);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6567,1512,146,5813,4842,9870,9774,2888,179], function() { return __webpack_exec__(66929); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=how-it-works-fc9dffe367357cc8.js.map