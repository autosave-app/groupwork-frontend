"use strict";
(() => {
var exports = {};
exports.id = 6210;
exports.ids = [6210];
exports.modules = {

/***/ 42815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HomeIllustration)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(95834);
;// CONCATENATED MODULE: ./lib/constants/animations.js

const rotate = (0,external_styled_components_.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
const fadeIn = (0,external_styled_components_.keyframes)(["0%{opacity:0;}100%{opacity:1;}"]);
const rotateMixin = (0,external_styled_components_.css)(["animation:", " 0.8s infinite linear;"], rotate);
;// CONCATENATED MODULE: ./components/collectives/HomeIllustration.js



const Illustration = external_styled_components_default().img.withConfig({
  displayName: "HomeIllustration__Illustration",
  componentId: "sc-xcwqm6-0"
})(["max-width:100%;max-height:100%;", " ", " ", ";"], external_styled_system_.space, external_styled_system_.display, ({
  animate
}) => animate ? rotateMixin : null);
/* harmony default export */ const HomeIllustration = (Illustration);

/***/ }),

/***/ 53317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42815);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const APlaceToGrowAndThrive = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: ['column', null, 'row-reverse'],
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: 4,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mt: [3, 0],
      mb: [3, null, null, null, '24px'],
      width: ['288px', '601px', '458px', null, '555px'],
      display: [null, null, 'none'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .MainTitle */ .U3, {
        textAlign: ['center', null, 'left'],
        whiteSpace: [null, null, 'pre-line'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "fiscalHosting.title",
          defaultMessage: [{
            "type": 0,
            "value": "A place to grow and thrive"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      ml: [null, '50px', '36px', '40px', '84px'],
      width: ['288px', null, '458px', null, '558px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        alt: "A place to grow and thrive illustration",
        src: "/static/images/fiscal-hosting/a-place-to-grow-illustration.png"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: ['center', null, 'flex-start'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mt: [3, 0],
        mb: [3, null, null, null, '24px'],
        width: ['288px', '344px', '458px', null, '555px'],
        display: ['none', null, 'block'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .MainTitle */ .U3, {
          textAlign: ['center', null, 'left'],
          whiteSpace: [null, null, 'pre-line'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "fiscalHosting.title",
            defaultMessage: [{
              "type": 0,
              "value": "A place to grow and thrive"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '676px', '458px', null, '558px'],
        mb: [3, null, null, null, '24px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .MainDescription */ .WC, {
          textAlign: ['center', null, 'left'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "fiscalHosting.description",
            defaultMessage: [{
              "type": 0,
              "value": "Think of your community, project, or initiative as a plant, and a fiscal host as a lovingly tended garden. The host maintains an environment where your unique bush, vine, or tree can get watered, grow, and bloom."
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: "/create",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          minWidth: [283, 165, null, null, 183],
          buttonStyle: "marketing",
          whiteSpace: "nowrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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

APlaceToGrowAndThrive.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "APlaceToGrowAndThrive"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APlaceToGrowAndThrive);

/***/ }),

/***/ 34891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42815);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38104);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  'fiscalHosting.missionAlignment': {
    id: "fiscalHosting.missionAlignment",
    defaultMessage: [{
      "type": 0,
      "value": "Mission alignment"
    }]
  },
  'fiscalHosting.missionAlignment.description': {
    id: "fiscalHosting.missionAlignment.description",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal hosts usually have specific topics or areas they are designed to serve. When it comes to the application process, their acceptance criteria will fit in that scope."
    }]
  },
  'fiscalHosting.location': {
    id: "SectionLocation.Title",
    defaultMessage: [{
      "type": 0,
      "value": "Location"
    }]
  },
  'fiscalHosting.location.description': {
    id: "fiscalHosting.location.description",
    defaultMessage: [{
      "type": 0,
      "value": "Which country a fiscal host is based in will determine the currency you your money will be accounted in, and where you are located in a legal sense, e.g., if you are applying for an EU grant, you might need a fiscal host based in the EU."
    }]
  },
  'fiscalHosting.legalStructure': {
    id: "fiscalHosting.legalStructure",
    defaultMessage: [{
      "type": 0,
      "value": "Legal structure"
    }]
  },
  'fiscalHosting.legalStructure.description': {
    id: "fiscalHosting.legalStructure.description",
    defaultMessage: [{
      "type": 0,
      "value": "Do you want your host to be a charity, a company, a cooperative, or something else? E.g. a charity structure can enable tax-deductible donations, but may also have more restrictions on allowed activities."
    }]
  },
  'fiscalHosting.serviceOffered': {
    id: "fiscalHosting.serviceOffered",
    defaultMessage: [{
      "type": 0,
      "value": "Services offered"
    }]
  },
  'fiscalHosting.serviceOffered.description': {
    id: "AeQQjn",
    defaultMessage: [{
      "type": 0,
      "value": "Some Fiscal Hosts are very light-touch, while others provide significant support or programming and options like employment and insurance. Fiscal Hosts with a specific focus, such as open source projects or climate movement groups, may offer services specifically tailored to that community."
    }]
  },
  'fiscalHosting.fees': {
    id: "fiscalHosting.fees",
    defaultMessage: [{
      "type": 0,
      "value": "Fees"
    }]
  },
  'fiscalHosting.fees.description': {
    id: "fiscalHosting.fees.description",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal hosts often charge a fee for the service they provide. Some hosts keep fees low and offer a lightweight service, while others have higher fees and provide more support. Some fiscal hosts don’t charge fees at all."
    }]
  },
  'fiscalHosting.operations': {
    id: "fiscalHosting.operations",
    defaultMessage: [{
      "type": 0,
      "value": "Operations"
    }]
  },
  'fiscalHosting.operations.description': {
    id: "fiscalHosting.operations.description",
    defaultMessage: [{
      "type": 0,
      "value": "There are a few different models of fiscal sponsorship (depending on country as well). Check to see that you are using the one that is best for your project. Also look into the sponsor’s company culture & history of expertise in the field to ensure your fiscal sponsorship relationship aligns with your needs."
    }]
  }
});

const Consideration = ({
  consideration
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    display: "flex",
    flexDirection: ['column', 'row', 'column'],
    alignItems: ['center', null, null, null, 'flex-start'],
    textAlign: ['center', 'left', 'center', null, 'left'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: "140px",
      height: "140px",
      mb: [2, 0, '24px'],
      mr: [null, 4, 0],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        src: `/static/images/fiscal-hosting/${consideration}.png`,
        alt: "Icon"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: ['288px', '472px', '250px', null, '289px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
        fontSize: ['20px', null, null, null, '24px'],
        lineHeight: ['28px', null, null, null, '32px'],
        letterSpacing: "-0.008em",
        color: "black.800",
        mb: [2, 3],
        children: intl.formatMessage(messages[`fiscalHosting.${consideration}`])
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
        fontSize: ['15px', '18px'],
        lineHeight: ['22px', '26px'],
        color: "black.700",
        fontWeight: "400",
        children: intl.formatMessage(messages[`fiscalHosting.${consideration}.description`])
      })]
    })]
  }, consideration);
};

const FindTheRightFiscalHost = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    mt: ['96px', '80px', null, null, '104px'],
    mb: "80px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mx: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mb: 2,
        width: ['288px', 1],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitle */ .NZ, {
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "fiscalHosting.findingRightFiscalHost",
            defaultMessage: [{
              "type": 0,
              "value": "Finding the right fiscal host for you"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '548px', null, null, '755px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_5__/* .SectionDescription */ .TI, {
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "fiscalHosting.findingRightFiscalHost.description",
            defaultMessage: [{
              "type": 0,
              "value": "Some key things to consider when looking for the right fit"
            }]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      width: 1,
      display: ['display', 'none'],
      justifyContent: "center",
      alignItems: "center",
      mt: "56px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        display: [null, 'none'],
        width: 1,
        children: _constants__WEBPACK_IMPORTED_MODULE_8__/* .HOST_CONSIDERATIONS.map */ .XV.map(consideration => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Consideration, {
          consideration: consideration
        }, consideration))
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .rj, {
      mx: 3,
      gridTemplateColumns: [null, null, 'repeat(3, 1fr)'],
      gridGap: [null, '32px', '56px 48px', null, '56px 96px'],
      placeSelf: "center",
      alignItems: ['center', null, null, 'flex-start'],
      mt: "56px",
      display: ['none', 'grid'],
      maxWidth: "1200px",
      children: _constants__WEBPACK_IMPORTED_MODULE_8__/* .HOST_CONSIDERATIONS.map */ .XV.map(consideration => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Consideration, {
        consideration: consideration
      }, consideration))
    })]
  });
};

FindTheRightFiscalHost.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FindTheRightFiscalHost"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FindTheRightFiscalHost);

/***/ }),

/***/ 49925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38104);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["id", "intl", "activeFeature"],
      _excluded2 = ["intl", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const SelectFeatureButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "HowCanAFiscalHostHelpSection__SelectFeatureButton",
  componentId: "sc-cx9hvy-0"
})(["width:100%;cursor:pointer;color:#1869f5;border:none;outline:none;background:#fff;padding:0;@media screen and (min-width:40em){color:", ";width:272px;padding:3px;", " &:hover{color:#1869f5;}}@media screen and (min-width:64em){width:270px;}@media screen and (min-width:88em){width:320px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.700'), props => props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["color:#dc5f7d;border:1px solid #e6f3ff;border-radius:8px;background:#ffffff;outline:none;padding:8px;box-shadow:0px 4px 8px rgba(20,20,20,0.16);"]));
const FeatureListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu).withConfig({
  displayName: "HowCanAFiscalHostHelpSection__FeatureListWrapper",
  componentId: "sc-cx9hvy-1"
})(["margin:0;padding:0;flex-direction:column;align-items:center;justify-content:center;"]);
const FeatureList = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu).withConfig({
  displayName: "HowCanAFiscalHostHelpSection__FeatureList",
  componentId: "sc-cx9hvy-2"
})(["list-style:none;display:flex;flex-direction:column;width:100%;margin:14px 0;"]);
const features = [{
  id: 'acceptAndSpendFunds',
  learnMoreLink: '#'
}, {
  id: 'sustainabilityDesign',
  learnMoreLink: '#'
}, {
  id: 'networkingAndSolidarity',
  learnMoreLink: '#'
}, {
  id: 'automaticReporting',
  learnMoreLink: '#'
}, {
  id: 'organizeFinance',
  learnMoreLink: '#'
}];
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  'fiscalHosting.feature.acceptAndSpendFunds': {
    id: "fiscalHosting.feature.acceptAndSpendFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Accept and spend funds immediately"
    }]
  },
  'fiscalHosting.feature.acceptAndSpendFunds.tabName': {
    id: "fiscalHosting.feature.acceptAndSpendFunds.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Accept and spend funds"
    }]
  },
  'fiscalHosting.feature.acceptAndSpendFunds.description': {
    id: "fiscalHosting.feature.acceptAndSpendFunds.description",
    defaultMessage: [{
      "type": 0,
      "value": "You can often get approved very quickly, even instantly, ready to receive and disburse funds and get operational. Compared with traditional fiscal sponsorship or setting up your own entity, activating with a fiscal host is super streamlined."
    }]
  },
  'fiscalHosting.feature.sustainabilityDesign': {
    id: "fiscalHosting.feature.sustainabilityDesign",
    defaultMessage: [{
      "type": 0,
      "value": "Designed for ongoing sustainability"
    }]
  },
  'fiscalHosting.feature.sustainabilityDesign.tabName': {
    id: "fiscalHosting.feature.sustainabilityDesign.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Ongoing sustainability"
    }]
  },
  'fiscalHosting.feature.sustainabilityDesign.description': {
    id: "fiscalHosting.feature.sustainabilityDesign.description",
    defaultMessage: [{
      "type": 0,
      "value": "If your project doesn’t have an expiration date, neither should your funding. A standard crowdfunding campaign is over once it’s over. A single grant is spent once it’s spent. But fiscal hosting helps you combine different income streams and form ongoing relationships with funders."
    }]
  },
  'fiscalHosting.feature.networkingAndSolidarity': {
    id: "fiscalHosting.feature.networkingAndSolidarity",
    defaultMessage: [{
      "type": 0,
      "value": "Networking & solidarity"
    }]
  },
  'fiscalHosting.feature.networkingAndSolidarity.tabName': {
    id: "fiscalHosting.feature.networkingAndSolidarity",
    defaultMessage: [{
      "type": 0,
      "value": "Networking & solidarity"
    }]
  },
  'fiscalHosting.feature.networkingAndSolidarity.description': {
    id: "fiscalHosting.feature.networkingAndSolidarity.description",
    defaultMessage: [{
      "type": 0,
      "value": "A fiscal host is by definition a community of projects with something in common. They can provide services to their community as a whole, and enable connections between projects. Whether it’s about joining budgets or joining voices, join a host that’s more than the sum of its parts."
    }]
  },
  'fiscalHosting.feature.automaticReporting': {
    id: "fiscalHosting.feature.automaticReporting",
    defaultMessage: [{
      "type": 0,
      "value": "Automatic reporting & transparency"
    }]
  },
  'fiscalHosting.feature.automaticReporting.tabName': {
    id: "fiscalHosting.feature.automaticReporting.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Reporting & transparency"
    }]
  },
  'fiscalHosting.feature.automaticReporting.description': {
    id: "fiscalHosting.feature.automaticReporting.description",
    defaultMessage: [{
      "type": 0,
      "value": "No need to spend hours creating reports for funders. The Open Collective platform has automated quantitative reporting built in. Just sent the funder a link to your page! There are great tools for qualitative reporting too, like posting blogs and newsletters, which also serve to keep your wider community engaged and up to date."
    }]
  },
  'fiscalHosting.feature.organizeFinance': {
    id: "fiscalHosting.feature.organizeFinance",
    defaultMessage: [{
      "type": 0,
      "value": "Organize your finances, all in one place"
    }]
  },
  'fiscalHosting.feature.organizeFinance.tabName': {
    id: "fiscalHosting.feature.organizeFinance.tabName",
    defaultMessage: [{
      "type": 0,
      "value": "Your finances in one place"
    }]
  },
  'fiscalHosting.feature.organizeFinance.description': {
    id: "fiscalHosting.feature.organizeFinance.description",
    defaultMessage: [{
      "type": 0,
      "value": "No more messy spreadsheets! Income from credit card transactions, bank transfers, PayPal, even ticket sales, grants, and sponsorships are all tracked automatically in one transparent budget. With a robust yet user-friendly system for submitting and approving expenses, tracking outgoing funds is a breeze, too."
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

  const iconUrl = activeFeature === id ? `/static/images/fiscal-hosting/${id}-icon-pink.png` : `/static/images/fiscal-hosting/${id}-icon.png`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    alignItems: "center",
    justifyContent: ['center', 'space-between'],
    width: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: [null, '48px'],
        height: [null, '48px'],
        mr: [3, 2],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          width: 50,
          height: 50,
          src: iconUrl,
          alt: `${id} icon`,
          preload: "true"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
        color: ['black.800', 'black.900'],
        active: id === activeFeature,
        fontWeight: "500",
        textAlign: ['center', 'left'],
        fontSize: ['20px', '16px', null, null, '18px'],
        lineHeight: ['28px', '24px', null, null, '27px'],
        letterSpacing: ['-0.6px', '-0.16px', null, null, '-0.2px'],
        children: intl.formatMessage(messages[`fiscalHosting.feature.${id}.tabName`])
      })]
    })
  }));
};

const FeatureDescription = _ref2 => {
  let {
    intl,
    id
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
      fontSize: ['16px', null, null, null, '18px'],
      lineHeight: ['24px', null, null, null, '27px'],
      color: ['black.600', 'black.700'],
      letterSpacing: ['-0.04px', '-0.16px'],
      textAlign: ['center', 'left'],
      children: [intl.formatMessage(messages[`fiscalHosting.feature.${id}.description`]), ' ']
    })
  }));
};

const Feature = ({
  id,
  learnMoreLink,
  intl
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
  width: 1,
  display: "flex",
  mr: 2,
  flexDirection: "column",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FeatureTitle, {
    intl: intl,
    id: id,
    activeFeature: id,
    display: ['flex', 'none']
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mb: [2, 3, 5],
    ml: [null, null, 4],
    width: [null, null, '400px', null, '624px'],
    textAlign: "left",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H4, {
      display: ['none', 'block'],
      letterSpacing: "-0.4px",
      fontWeight: "bold",
      color: "black.800",
      my: 3,
      children: intl.formatMessage(messages[`fiscalHosting.feature.${id}`])
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FeatureDescription, {
      learnMoreLink: learnMoreLink,
      intl: intl,
      id: id,
      display: ['none', 'block']
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    mt: ['14px', 0],
    width: [null, '392px', '466px', null, '756px'],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      loading: "eager",
      width: 756,
      height: 502,
      layout: "intrinsic",
      preload: "true",
      src: `/static/images/fiscal-hosting/${id}-screenshot.png`,
      alt: intl.formatMessage(messages[`fiscalHosting.feature.${id}`])
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FeatureDescription, {
    intl: intl,
    id: id,
    learnMoreLink: learnMoreLink,
    display: ['block', 'none'],
    mt: 2
  })]
});

const HowToUseOpenCollective = () => {
  const {
    0: activeFeature,
    1: setActiveFeature
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(features[0]);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    mx: [3, 4],
    flexDirection: "column",
    textAlign: "center",
    my: [4, null, 0, null, '112px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitle */ .NZ, {
      mb: "0",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "fiscalHosting.howCanAFiscalHostHelp",
        defaultMessage: [{
          "type": 0,
          "value": "How can a fiscal host help?"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: ['column', 'row-reverse'],
      alignItems: [null, 'flex-start'],
      mt: [3, null, 4],
      justifyContent: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FeatureListWrapper, {
        as: "ul",
        display: ['none', 'flex'],
        children: features.map(feature => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FeatureList, {
          ml: [null, 4, null, 6],
          mr: [null, null, null, null, 2],
          as: "li",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SelectFeatureButton, {
            width: 1,
            onClick: () => setActiveFeature(feature),
            active: activeFeature.id === feature.id,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(FeatureTitle, {
              intl: intl,
              id: feature.id,
              activeFeature: activeFeature.id,
              display: ['none', 'flex']
            })
          })
        }, feature.id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        display: [null, 'none'],
        width: 1,
        children: features.map(feature => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Feature, {
            id: feature.id,
            learnMoreLink: feature.learnMoreLink,
            intl: intl
          })
        }, feature.id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: ['none', 'block'],
        height: "672px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Feature, {
          id: activeFeature.id,
          learnMoreLink: activeFeature.learnMoreLink,
          intl: intl
        })
      })]
    })]
  });
};

HowToUseOpenCollective.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowToUseOpenCollective"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowToUseOpenCollective);

/***/ }),

/***/ 65422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47667);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_8__.H3).withConfig({
  displayName: "WhatAreTheBenefitsSection__Title",
  componentId: "sc-1gcguhi-0"
})(["font-size:20px;line-height:28px;letter-spacing:-0.6px;font-weight:bold;margin-bottom:16px;margin-top:16px;color:", ";", " @media screen and (min-width:40em){font-size:24px;line-height:32px;letter-spacing:-0.8px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.900'), styled_system__WEBPACK_IMPORTED_MODULE_4__.display);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_8__.P).withConfig({
  displayName: "WhatAreTheBenefitsSection__Description",
  componentId: "sc-1gcguhi-1"
})(["font-size:15px;line-height:23px;letter-spacing:-0.12px;color:", ";font-weight:500;margin-top:10px;", " @media screen and (min-width:40em){font-size:16px;line-height:24px;letter-spacing:-0.16px;}@media screen and (min-width:88em){font-size:18px;line-height:27px;letter-spacing:-0.2px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.700'), styled_system__WEBPACK_IMPORTED_MODULE_4__.display);

const WhatAreTheBenefits = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    mx: [3, 4],
    my: 4,
    mt: ['56px', null, '120px'],
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitle */ .NZ, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "fiscalHosting.whatAreTheBenefits.title",
        defaultMessage: [{
          "type": 0,
          "value": "What are the benefits?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      width: ['288px', '548px', '708px', null, '755px'],
      textAlign: "center",
      mb: ['40px', null, 0],
      mt: [2, 3],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionDescription */ .TI, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "fiscalHosting.whatAreTheBenefits.subTitle",
          defaultMessage: [{
            "type": 0,
            "value": "Organizing takes work. Fiscal hosts are here to help."
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      my: "32px",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: [null, '390px', '488px', null, '558px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 558,
          height: 418,
          src: "/static/images/fiscal-hosting/tax-exempt.png",
          alt: "Collect money"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: [null, '264px', '344px', null, '408px'],
        textAlign: ['center', 'left'],
        ml: [null, 2, null, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "fiscalHosting.whatAreTheBenefits.taxExempt",
            defaultMessage: [{
              "type": 0,
              "value": "Tax-exempt or charity status"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "fiscalHosting.whatAreTheBenefits.taxExempt.description",
            defaultMessage: [{
              "type": 0,
              "value": "Some fiscal hosts are registered charities or nonprofits, who are able to provide tax benefits to donors and qualify for philanthropic grants. Signing up with a fiscal host who already has this status in your country gives you immediate access."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      my: "32px",
      flexDirection: ['column', 'row-reverse'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: [null, '390px', '488px', null, '558px'],
        ml: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 558,
          height: 429,
          src: "/static/images/fiscal-hosting/mission-focus.png",
          alt: "Focus on your mission illustration"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: [null, '264px', '344px', null, '408px'],
        textAlign: ['center', 'left'],
        mr: [null, 2, null, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "fiscalHosting.whatAreTheBenefits.missionFocus",
            defaultMessage: [{
              "type": 0,
              "value": "Focus on your mission"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "fiscalHosting.whatAreTheBenefits.missionFocus.description",
            defaultMessage: [{
              "type": 0,
              "value": "Fiscal hosts take care of a lot of the tedious and painful administrative tasks involved in running an organization. The host becomes your legal entity, handling taxes, invoicing, and accounting—so you can spend your time engaging supporters, building your community, and achieving your main mission."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      my: "32px",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        display: [null, 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 288,
          height: 238,
          layout: "fixed",
          src: '/static/images/fiscal-hosting/money-management-xs.png',
          alt: "Money management"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        display: ['none', 'block'],
        width: ['288px', '390px', '488px', null, '558px'],
        height: [null, '323px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 555,
          height: 452,
          src: '/static/images/fiscal-hosting/money-management.png',
          alt: "Money management"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: [null, '264px', '344px', null, '408px'],
        textAlign: ['center', 'left'],
        ml: [null, 4, 0, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "fiscalHosting.whatAreTheBenefits.moneyManagement",
            defaultMessage: [{
              "type": 0,
              "value": "Money management"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "fiscalHosting.whatAreTheBenefits.moneyManagement.description",
            defaultMessage: [{
              "type": 0,
              "value": "Using your personal bank account can complicate your taxes, and it locks out other team members. A fiscal host holds money on your behalf in its bank account, tracking everything transparently on Open Collective. Everyone can have access to see the budget and to tools for fundraising and requesting payouts."
            }]
          })
        })]
      })]
    })]
  });
};

WhatAreTheBenefits.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhatAreTheBenefits"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatAreTheBenefits);

/***/ }),

/***/ 94392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42815);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const WhatIsFiscalHost = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
  flexDirection: ['column', 'row'],
  alignItems: "center",
  px: 3,
  mt: "68px",
  justifyContent: "center",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    flexDirection: ['column', 'row'],
    alignItems: "center",
    textAlign: ['center', 'left'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      width: ['330px', '306px', '268px', null, '458px'],
      mr: [null, '40px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        src: "/static/images/fiscal-hosting/what-is-a-fiscalhost-illustration.png"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      width: ['266px', '326px', '472px', null, '518px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__.H2, {
        fontSize: ['24px', null, null, null, '30px'],
        lineHeight: ['32px', null, null, null, '48px'],
        letterSpacing: ['-1.2px', '-1.6px'],
        color: "primary.900",
        mb: ['16px', 3],
        mt: "52px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "fiscalHosting.whatIsFiscalHost",
          defaultMessage: [{
            "type": 0,
            "value": "What is a fiscal host?"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__.P, {
        fontSize: ['15px', '16px', '18px'],
        lineHeight: ['22px', '24px', '26px'],
        color: "black.800",
        fontWeight: "500",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "fiscalHosting.whatIsFiscalHost.description",
          defaultMessage: [{
            "type": 0,
            "value": "A fiscal host is an organization that welcomes others to operate through their structure, so projects can use the host’s legal entity and bank account instead of setting up their own. The host provides administrative services, oversight, and support. "
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 0,
            "value": " *Fiscal hosting is also called fiscal sponsorship, fund-holding, or auspicing in different places around the world."
          }],
          values: {
            lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {})
          }
        })
      })]
    })]
  })
});

WhatIsFiscalHost.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhatIsFiscalHost"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatIsFiscalHost);

/***/ }),

/***/ 53128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38104);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "WhoIsFiscalHostingForSection__IconWrapper",
  componentId: "sc-1vpdm4f-0"
})(["display:flex;justify-content:center;align-items:center;width:56px;height:56px;@media screen and (min-width:88em){width:56px;height:56px;}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .rj).withConfig({
  displayName: "WhoIsFiscalHostingForSection__Wrapper",
  componentId: "sc-1vpdm4f-1"
})(["justify-items:center;"]);
const CarouselWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "WhoIsFiscalHostingForSection__CarouselWrapper",
  componentId: "sc-1vpdm4f-2"
})(["@media screen and (min-width:40em){margin-right:0;margin-left:0;}@media screen and (min-width:48em){margin-right:32px;margin-left:32px;}"]);
const PotentialUserContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "WhoIsFiscalHostingForSection__PotentialUserContainer",
  componentId: "sc-1vpdm4f-3"
})(["width:288px;@media screen and (min-width:40em){width:250px;}@media screen and (min-width:48em){width:288px;}"]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  'fiscalHosting.community': {
    id: "fiscalHosting.community",
    defaultMessage: [{
      "type": 0,
      "value": "Emergent community responses"
    }]
  },
  'fiscalHosting.community.description': {
    id: "fiscalHosting.community.description",
    defaultMessage: [{
      "type": 0,
      "value": "To current events, like a pandemic, who need to get operational immediately."
    }]
  },
  'fiscalHosting.grantRecipients': {
    id: "fiscalHosting.grantRecipients",
    defaultMessage: [{
      "type": 0,
      "value": "Grant recipients or applicants"
    }]
  },
  'fiscalHosting.grantRecipients.description': {
    id: "fiscalHosting.grantRecipients.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who need a place to receive the funds and hold them as they are spent down."
    }]
  },
  'fiscalHosting.timeLimited': {
    id: "fiscalHosting.timeLimited",
    defaultMessage: [{
      "type": 0,
      "value": "Time-limited projects"
    }]
  },
  'fiscalHosting.timeLimited.description': {
    id: "fiscalHosting.timeLimited.description",
    defaultMessage: [{
      "type": 0,
      "value": "Where it doesn't make sense to set up a whole new organization only to wind it up six months later."
    }]
  },
  'fiscalHosting.unincorporatedGroup': {
    id: "fiscalHosting.unincorporatedGroup",
    defaultMessage: [{
      "type": 0,
      "value": "An unincorporated group"
    }]
  },
  'fiscalHosting.unincorporatedGroup.description': {
    id: "fiscalHosting.unincorporatedGroup.description",
    defaultMessage: [{
      "type": 0,
      "value": "Like a meetup, needing to fundraise, collect membership dues, or sign a contract with a venue or sponsor."
    }]
  },
  'fiscalHosting.crowdFunding': {
    id: "fiscalHosting.crowdFunding",
    defaultMessage: [{
      "type": 0,
      "value": "A crowdfunding campaign"
    }]
  },
  'fiscalHosting.crowdFunding.description': {
    id: "fiscalHosting.crowdFunding.description",
    defaultMessage: [{
      "type": 0,
      "value": "Seeking a place to hold the money and a way to offer accountability to their backers."
    }]
  },
  'fiscalHosting.youngActivists': {
    id: "fiscalHosting.youngActivists",
    defaultMessage: [{
      "type": 0,
      "value": "Young activists and change-makers"
    }]
  },
  'fiscalHosting.youngActivists.description': {
    id: "fiscalHosting.youngActivists.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who may lack the experience to manage their own legal entity."
    }]
  },
  'fiscalHosting.newlyFormingCharity': {
    id: "fiscalHosting.newlyFormingCharity",
    defaultMessage: [{
      "type": 0,
      "value": "A newly-forming charity"
    }]
  },
  'fiscalHosting.newlyFormingCharity.description': {
    id: "fiscalHosting.newlyFormingCharity.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who wants to enable tax-deductible donations and philanthropic grants, without waiting to get charity status themselves."
    }]
  },
  'fiscalHosting.distributeCollaboration': {
    id: "fiscalHosting.distributeCollaboration",
    defaultMessage: [{
      "type": 0,
      "value": "A distributed collaboration"
    }]
  },
  'fiscalHosting.distributeCollaboration.description': {
    id: "fiscalHosting.distributeCollaboration.description",
    defaultMessage: [{
      "type": 0,
      "value": "Like an open source software project, which isn’t owned by anyone and wants resources held in common."
    }]
  },
  'fiscalHosting.founderCoalition': {
    id: "fiscalHosting.founderCoalition",
    defaultMessage: [{
      "type": 0,
      "value": "Funder coalitions"
    }]
  },
  'fiscalHosting.founderCoalition.description': {
    id: "fiscalHosting.distributeCollaboration.description",
    defaultMessage: [{
      "type": 0,
      "value": "Like an open source software project, which isn’t owned by anyone and wants resources held in common."
    }]
  },
  'fiscalHosting.companiesGivingBack': {
    id: "fiscalHosting.companiesGivingBack",
    defaultMessage: [{
      "type": 0,
      "value": "Companies giving back"
    }]
  },
  'fiscalHosting.companiesGivingBack.description': {
    id: "fiscalHosting.companiesGivingBack.description",
    defaultMessage: [{
      "type": 0,
      "value": "Can work with a nonprofit fiscal host to separate funds from the commercial side and coordinate grants and sponsorships."
    }]
  },
  'fiscalHosting.grantMakingInstitution': {
    id: "fiscalHosting.companiesGivingBack",
    defaultMessage: [{
      "type": 0,
      "value": "Companies giving back"
    }]
  },
  'fiscalHosting.grantMakingInstitution.description': {
    id: "fiscalHosting.grantMakingInstitution.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who may be restricted to funding registered charities, seeking to partner with a fiscal host in order reach less formal communities."
    }]
  }
});

const PotentialUser = ({
  id
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PotentialUserContainer, {
    display: "flex",
    flexDirection: "column",
    alignItems: ['center', 'flex-start'],
    my: [0, null, null, null, 4],
    width: "288px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexDirection: ['row', 'column'],
      width: 1,
      alignItems: ['center', 'flex-start'],
      mb: [3, 0],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(IconWrapper, {
        my: [0, 2],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          width: 60,
          height: 60,
          src: `/static/images/fiscal-hosting/${id}.png`,
          alt: `${id} illustration`
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
        ml: ['16px', 0],
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "-0.6px",
        mb: 2,
        color: "black.800",
        children: intl.formatMessage(messages[`fiscalHosting.${id}`])
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      width: 1,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
        color: ['black.700', 'black.600', 'black.700'],
        fontSize: ['18px', '16px', null, null, '18px'],
        lineHeight: ['26px', '24px', null, null, '27px'],
        letterSpacing: ['-0.12px', '-0.16px'],
        mb: [0, 3],
        fontWeight: ['500', 'normal'],
        children: intl.formatMessage(messages[`fiscalHosting.${id}.description`])
      })
    })]
  });
};

const PotentialUsers = ({
  users
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Wrapper, {
    gridTemplateColumns: ['100%', 'repeat(2, 1fr)', null, null, 'repeat(3, 1fr)'],
    placeItems: "center",
    alignItems: "flex-start",
    children: users.map(user => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PotentialUser, {
      id: user.id
    }, user.id))
  });
};

const WhoIsFiscalHosting = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      display: "flex",
      mt: [null, null, '120px', null, '240px'],
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      mx: [3, 4],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: ['column', 'row-reverse'],
        alignItems: "center",
        justifyContent: "center",
        mr: [null, 2, 0, null, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          my: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            width: 224,
            height: 144,
            src: "/static/images/fiscal-hosting/who-is-fiscalHosting-illustration.png",
            alt: "Who is fiscal hosting for illustration"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          width: ['288px', '392px', '528px', null, '657px'],
          mr: [null, '29px', 0, null, '93px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            textAlign: ['center', 'left'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                id: "fiscalHosting.whoIsFiscalHostingFor.title",
                defaultMessage: [{
                  "type": 0,
                  "value": "Who is fiscal hosting for?"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            my: 2,
            textAlign: ['center', 'left'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                id: "fiscalHosting.whoIsFiscalHostingFor.subtitle",
                defaultMessage: [{
                  "type": 0,
                  "value": "There are multiple cases where fiscal hosting can be valuable for a project."
                }]
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(CarouselWrapper, {
      my: 4,
      display: [null, 'flex'],
      flexDirection: [null, 'column'],
      justifyContent: "center",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        display: ['block', 'none'],
        width: "100%",
        maxWidth: "1200px",
        children: [..._constants__WEBPACK_IMPORTED_MODULE_9__/* .WHO_IS_FISCAL_HOSTING_FOR.firstCategories */ .Zt.firstCategories, ..._constants__WEBPACK_IMPORTED_MODULE_9__/* .WHO_IS_FISCAL_HOSTING_FOR.secondCategories */ .Zt.secondCategories].map(user => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PotentialUser, {
          id: user.id
        }, user.id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        display: ['none', 'block'],
        width: "100%",
        maxWidth: "1200px",
        controllerPosition: "side",
        children: Object.keys(_constants__WEBPACK_IMPORTED_MODULE_9__/* .WHO_IS_FISCAL_HOSTING_FOR */ .Zt).map((categories, index) =>
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PotentialUsers, {
          users: _constants__WEBPACK_IMPORTED_MODULE_9__/* .WHO_IS_FISCAL_HOSTING_FOR */ .Zt[categories]
        }, index.toString()))
      })]
    })]
  });
};

WhoIsFiscalHosting.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhoIsFiscalHosting"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoIsFiscalHosting);

/***/ }),

/***/ 84745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78355);
/* harmony import */ var _components_fiscal_hosting_APlaceToGrowAndThriveSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53317);
/* harmony import */ var _components_fiscal_hosting_ApplyToFiscalHostSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84072);
/* harmony import */ var _components_fiscal_hosting_FindTheRightFiscalHostSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34891);
/* harmony import */ var _components_fiscal_hosting_HowCanAFiscalHostHelpSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49925);
/* harmony import */ var _components_fiscal_hosting_WhatAreTheBenefitsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65422);
/* harmony import */ var _components_fiscal_hosting_WhatIsFiscalHostSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94392);
/* harmony import */ var _components_fiscal_hosting_WhoIsFiscalHostingForSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53128);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_10__]);
_components_Page__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  defaultTitle: {
    id: "OC.tagline",
    defaultMessage: [{
      "type": 0,
      "value": "Make your community sustainable. Collect and spend money transparently."
    }]
  }
});

const FiscalHosting = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    description: formatMessage(messages.defaultTitle),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_fiscal_hosting_APlaceToGrowAndThriveSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_fiscal_hosting_WhatIsFiscalHostSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_fiscal_hosting_WhatAreTheBenefitsSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_fiscal_hosting_HowCanAFiscalHostHelpSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_fiscal_hosting_WhoIsFiscalHostingForSection__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_fiscal_hosting_ApplyToFiscalHostSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_fiscal_hosting_FindTheRightFiscalHostSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
      page: "fiscalHosting"
    })]
  });
};

FiscalHosting.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FiscalHosting"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiscalHosting);
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

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

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

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 19153:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 99493:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Envelope");

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

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 89457:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/ArrowRight2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 92869:
/***/ ((module) => {

module.exports = require("focus-trap-react");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

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

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

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

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

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

/***/ 3789:
/***/ ((module) => {

module.exports = require("react-swipeable");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7667,5106,5842,8355,4515,4072], () => (__webpack_exec__(84745)));
module.exports = __webpack_exports__;

})();