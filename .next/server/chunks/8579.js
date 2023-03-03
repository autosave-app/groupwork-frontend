"use strict";
exports.id = 8579;
exports.ids = [8579];
exports.modules = {

/***/ 88579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22198);
/* harmony import */ var _styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38104);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47667);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
const _excluded = ["id", "intl", "activeFeature"],
      _excluded2 = ["intl", "id", "learnMoreLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const SelectFeatureButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default().button.withConfig({
  displayName: "Features__SelectFeatureButton",
  componentId: "sc-1g702zl-0"
})(["width:100%;cursor:pointer;color:#1869f5;border:none;outline:none;background:#fff;padding:0;@media screen and (min-width:40em){color:", ";width:220px;padding:3px;", " &:hover{color:#1869f5;}}@media screen and (min-width:64em){width:247px;}@media screen and (min-width:88em){width:317px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.700'), props => props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.css)(["color:#dc5f7d;border:1px solid #e6f3ff;border-radius:8px;background:#ffffff;outline:none;padding:8px;box-shadow:0px 4px 8px rgba(20,20,20,0.16);"]));
const FeatureListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu).withConfig({
  displayName: "Features__FeatureListWrapper",
  componentId: "sc-1g702zl-1"
})(["margin:0;padding:0;flex-direction:column;align-items:center;justify-content:center;"]);
const FeatureList = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu).withConfig({
  displayName: "Features__FeatureList",
  componentId: "sc-1g702zl-2"
})(["list-style:none;display:flex;flex-direction:column;width:100%;margin:14px 0;"]);
const LearnMoreLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
  displayName: "Features__LearnMoreLink",
  componentId: "sc-1g702zl-3"
})(["color:#dc5f7d;&:hover{color:#dc5f7d;}"]);
const LineBreak = styled_components__WEBPACK_IMPORTED_MODULE_4___default().br.withConfig({
  displayName: "Features__LineBreak",
  componentId: "sc-1g702zl-4"
})(["@media screen and (min-width:40em){display:none;}"]);
const features = [{
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
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
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

const FeatureTitle = _ref => {
  let {
    id,
    intl,
    activeFeature
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const iconUrl = activeFeature === id ? `/static/images/home/${id}-icon.png` : `/static/images/home/${id}-icon-black.png`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, _objectSpread(_objectSpread({
    alignItems: "center",
    justifyContent: ['center', 'space-between'],
    width: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        display: ['none', 'block'],
        width: [null, '48px'],
        height: [null, '48px'],
        mr: [3, 2],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          width: 50,
          height: 50,
          src: iconUrl,
          alt: `${id} icon`
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
        color: ['black.800', 'black.900'],
        active: id === activeFeature,
        fontWeight: "500",
        textAlign: ['center', 'left'],
        fontSize: ['20px', '16px', null, null, '18px'],
        lineHeight: ['28px', '24px', null, null, '27px'],
        letterSpacing: ['-0.6px', '-0.16px', null, null, '-0.2px'],
        children: intl.formatMessage(messages[`home.feature.${id}`])
      })]
    })
  }));
};

const FeatureDescription = _ref2 => {
  let {
    intl,
    id,
    learnMoreLink
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
      fontSize: ['16px', null, null, null, '18px'],
      lineHeight: ['24px', null, null, null, '27px'],
      color: ['black.600', 'black.700'],
      letterSpacing: ['-0.04px', '-0.16px'],
      textAlign: ['center', 'left'],
      children: [intl.formatMessage(messages[`home.feature.${id}.description`]), ' ', learnMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(LineBreak, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(LearnMoreLink, {
          href: learnMoreLink,
          openInNewTab: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "TdTXXf",
            defaultMessage: [{
              "type": 0,
              "value": "Learn more"
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            display: [null, 'none'],
            children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_feather_ArrowRight__WEBPACK_IMPORTED_MODULE_1__.ArrowRight, {
              size: "24"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            display: ['none', 'inline-block'],
            children: "..."
          })]
        })]
      })]
    })
  }));
};

const Feature = ({
  id,
  learnMoreLink,
  intl
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
  width: 1,
  display: "flex",
  mr: 2,
  flexDirection: "column",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FeatureTitle, {
    intl: intl,
    id: id,
    activeFeature: id,
    display: [null, 'none']
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mb: [2, 3, 5],
    ml: [null, null, 4],
    width: [null, null, '400px', null, '624px'],
    textAlign: "left",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H4, {
      display: ['none', 'block'],
      letterSpacing: "-0.4px",
      fontWeight: "bold",
      color: "primary.900",
      my: 3,
      children: intl.formatMessage(messages[`home.feature.${id}`])
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FeatureDescription, {
      learnMoreLink: learnMoreLink,
      intl: intl,
      id: id,
      display: ['none', 'block']
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    width: [null, '392px', '466px', null, '756px'],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      loading: "eager",
      width: 756,
      height: 575,
      src: `/static/images/home/${id}-screenshot.png`,
      alt: intl.formatMessage(messages[`home.feature.${id}`])
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FeatureDescription, {
    intl: intl,
    id: id,
    learnMoreLink: learnMoreLink,
    display: ['block', 'none'],
    mt: 2
  })]
});

const Features = ({
  sectionTitle,
  sectionSubtitle
}) => {
  const {
    0: activeFeature,
    1: setActiveFeature
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(features[0]);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    mx: [3, 4],
    flexDirection: "column",
    textAlign: "center",
    my: [4, null, 0],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitle */ .NZ, {
      mb: 3,
      children: sectionTitle || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "home.featureSection.title",
        defaultMessage: [{
          "type": 0,
          "value": "How to use Open Collective"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionDescription */ .TI, {
      children: sectionSubtitle || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "home.featureSection.subTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Discover our features."
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: ['column', 'row-reverse'],
      alignItems: [null, 'flex-start', null, null, 'center'],
      mt: [3, null, 4],
      justifyContent: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FeatureListWrapper, {
        as: "ul",
        display: ['none', 'flex'],
        children: features.map(feature => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FeatureList, {
          ml: [null, 4, null, 6],
          mr: [null, null, null, null, 2],
          as: "li",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(SelectFeatureButton, {
            width: 1,
            onClick: () => setActiveFeature(feature),
            active: activeFeature.id === feature.id,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(FeatureTitle, {
              intl: intl,
              id: feature.id,
              activeFeature: activeFeature.id
            })
          })
        }, feature.id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        display: [null, 'none'],
        width: 1,
        children: features.map(feature => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Feature, {
            id: feature.id,
            learnMoreLink: feature.learnMoreLink,
            intl: intl
          })
        }, feature.id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: ['none', 'block'],
        height: "672px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Feature, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);

/***/ })

};
;