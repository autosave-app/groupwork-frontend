"use strict";
(() => {
var exports = {};
exports.id = 7639;
exports.ids = [7639];
exports.modules = {

/***/ 28758:
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
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38104);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const CollectiveNameLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
  displayName: "CaseStudiesSection__CollectiveNameLink",
  componentId: "sc-1vch5iz-0"
})(["&:hover{text-decoration:underline !important;color:#313233;}"]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  'becomeAHost.caseStudies.wwcode': {
    id: "becomeAHost.caseStudies.wwcode",
    defaultMessage: [{
      "type": 0,
      "value": "Whenever we start a new meetup chapter, we pair it with an Open Collective so they have the means to raise money under our umbrella."
    }]
  },
  'becomeAHost.caseStudies.socialchangenestcollective': {
    id: "becomeAHost.caseStudies.socialchangenestcollective",
    defaultMessage: [{
      "type": 0,
      "value": "We have been able to support over 150 Mutual Aid groups to get going quickly by providing them with fiscal hosting back office support."
    }]
  },
  'becomeAHost.caseStudies.foundation': {
    id: "becomeAHost.caseStudies.foundation",
    defaultMessage: [{
      "type": 0,
      "value": "The Open Collective Platform provides the tools to more effectively manage group finances. They can offer their donors tax-deductible status without needing to incorporate a legal entity."
    }]
  },
  'becomeAHost.caseStudies.opensource': {
    id: "becomeAHost.caseStudies.opensource",
    defaultMessage: [{
      "type": 0,
      "value": "We provide financial and legal infrastructure for thousands of open source projects. We’re an API between the world of distributed collaboration and the world of accounting and invoices."
    }]
  },
  'becomeAHost.caseStudies.allforclimate-collective': {
    id: "becomeAHost.caseStudies.allforclimate-collective",
    defaultMessage: [{
      "type": 0,
      "value": "A fiscal sponsor for your local climate justice group, we act as a shared administrative back office so that local groups can focus on their actions."
    }]
  }
});
const caseStudies = [{
  id: 'wwcode',
  name: 'Women Who Code',
  collectivePath: '/wwcode',
  learnMorePath: 'https://opencollective.com/wwcodeinc',
  bgImage: 'wwc',
  logo: '/static/images/become-a-host/wwc-logo.png'
}, {
  id: 'socialchangenestcollective',
  name: 'Social Change Nest',
  collectivePath: '/socialchangenestcollective',
  learnMorePath: 'https://opencollective.com/the-social-change-nest',
  bgImage: 'socialchangenest',
  logo: '/static/images/become-a-host/socialchangenest-logo.png'
}, {
  id: 'foundation',
  name: 'Open Collective Foundation',
  collectivePath: '/foundation',
  learnMorePath: 'https://opencollective.foundation/',
  bgImage: 'ocf',
  logo: '/static/images/become-a-host/ocf-logo.png'
}, {
  id: 'opensource',
  name: 'Open Source Collective',
  collectivePath: '/opensource',
  learnMorePath: 'https://oscollective.org/',
  bgImage: 'osc',
  logo: '/static/images/become-a-host/osc-logo.png'
}, {
  id: 'allforclimate-collective',
  name: 'All for Climate',
  collectivePath: '/allforclimate-collective',
  learnMorePath: 'https://opencollective.com/allforclimate',
  bgImage: 'allforclimate-collective',
  logo: '/static/images/become-a-host/climate-logo.png'
}];

const CaseStudy = ({
  bgImage,
  name,
  id,
  logo,
  learnMorePath
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mr: [null, 3, null, null, '36px'],
    my: [null, 3, null, null, 4],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      width: [1, '205px', '306px', null, '360px'],
      height: ['210px', '218px', null, null, '256px'],
      background: [`url("/static/images/become-a-host/${bgImage}.png") no-repeat`, `url("/static/images/become-a-host/${bgImage}-sm.png") no-repeat`, `url("/static/images/become-a-host/${bgImage}.png") no-repeat`],
      backgroundSize: ['contain', 'cover', 'contain'],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        radius: "96px",
        src: logo,
        name: name,
        type: "ORGANIZATION"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      mt: ['12px', 3, '24px'],
      width: [1, '206px', '306px', null, '360px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CollectiveNameLink, {
        href: learnMorePath,
        fontWeight: "700",
        fontSize: ['18px', '24px'],
        lineHeight: ['26px', '32px'],
        color: "black.800",
        letterSpacing: [null, '-0.008em'],
        children: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
        fontSize: ['15px', '16px', null, null, '18px'],
        lineHeight: ['22px', '24px', null, null, '26px'],
        color: "black.700",
        fontWeight: ['500', '400'],
        mt: "12px",
        children: ["\u201C", intl.formatMessage(messages[`becomeAHost.caseStudies.${id}`]), "\u201C"]
      })]
    })]
  });
};

const CaseStudies = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: [4, null, null, null, '118px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      width: ['288px', '648px', null, null, '1152px'],
      mb: "8px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "vnfbPl",
          defaultMessage: [{
            "type": 0,
            "value": "Who is using Open Collective?"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mb: [4, 3],
      width: ['288px', '648px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "home.OCUsersSection.subtitle",
          defaultMessage: [{
            "type": 0,
            "value": "Communities around the world are using Open Collective. Find out more about them!"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      width: "288px",
      options: caseStudies,
      display: [null, 'none'],
      children: caseStudies.map(caseStudy => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CaseStudy, _objectSpread({}, caseStudy), caseStudy.id))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: ['none', 'flex'],
      flexWrap: "wrap",
      justifyContent: "center",
      children: caseStudies.map(caseStudy => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CaseStudy, _objectSpread({}, caseStudy), caseStudy.id))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mt: 4,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        buttonStyle: "marketingSecondary",
        buttonSize: "medium",
        href: "/search?isHost=true",
        fontWeight: "500",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "becomeAHost.discoverMore",
          defaultMessage: [{
            "type": 0,
            "value": "Discover more hosts"
          }]
        })
      })
    })]
  });
};

CaseStudies.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CaseStudies"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaseStudies);

/***/ }),

/***/ 73898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const FiscalSponsorship = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: ['column', null, 'row-reverse'],
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: 4,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mt: [3, 0],
      mb: [3, null, null, null, '24px'],
      width: ['288px', '601px', '438px', null, '555px'],
      display: [null, null, 'none'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .MainTitle */ .U3, {
        textAlign: ['center', null, 'left'],
        whiteSpace: [null, null, 'pre-line'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "becomeAHost.title",
          defaultMessage: [{
            "type": 0,
            "value": "Fiscal sponsorship has never been easier"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      ml: [null, '6px', '40px', null, '84px'],
      width: ['288px', '324px', '478px', null, '558px'],
      my: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        alt: "Fiscal sponsorship illustration",
        src: "/static/images/become-a-host/fiscalSponsorship-illustration.png",
        width: 558,
        height: 414
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: ['center', null, 'flex-start'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mt: [3, 0],
        mb: ['24px', null, null, null, '24px'],
        width: ['288px', '306px', '438px', null, '555px'],
        display: ['none', null, 'block'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .MainTitle */ .U3, {
          textAlign: ['center', null, 'left'],
          whiteSpace: [null, null, 'pre-line'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "becomeAHost.title",
            defaultMessage: [{
              "type": 0,
              "value": "Fiscal sponsorship has never been easier"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '676px', '458px', null, '558px'],
        mb: ['24px', null, null, null, '24px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .MainDescription */ .WC, {
          textAlign: ['center', null, 'left'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "becomeAHost.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective is purpose-built to streamline your processes, reduce overhead, increase transparency, and enable your organization to hold and manage funds for more projects in less time. "
            }, {
              "type": 8,
              "value": "learnMoreLink",
              "children": [{
                "type": 0,
                "value": "Learn more"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              learnMoreLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_5__/* .getI18nLink */ .fw)({
                href: 'https://docs.opencollective.com/help/fiscal-hosts/become-a-fiscal-host',
                openInNewTab: true
              })
            }
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        href: "/organizations/new",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          minWidth: [283, 165, null, null, 183],
          buttonStyle: "marketing",
          whiteSpace: "nowrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Y0G9KM",
            defaultMessage: [{
              "type": 0,
              "value": "Join as a Fiscal Host"
            }]
          })
        })
      })]
    })]
  });
};

FiscalSponsorship.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FiscalSponsorship"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiscalSponsorship);

/***/ }),

/***/ 18822:
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
/* harmony import */ var _collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42815);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const ScreenShotWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "WhatAreTheBenefitsSection__ScreenShotWrapper",
  componentId: "sc-1mp4isl-0"
})(["max-height:none;"]);

const WhatAreTheBenefits = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    mt: ['96px', '80px', null, null, '104px'],
    mb: "80px",
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mx: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: [2, 3],
        width: ['288px', 1],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitle */ .NZ, {
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "becomeAHost.whatAreTheBenefits",
            defaultMessage: [{
              "type": 0,
              "value": "What are the benefits to host with us?"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '548px', null, null, '755px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionDescription */ .TI, {
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "becomeAHost.whatAreTheBenefits.description",
            defaultMessage: [{
              "type": 0,
              "value": "Accept donations and sponsorship, celebrate your supporters, pay expenses, and keep everyone up to date — all in one place."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      mx: 3,
      flexDirection: ['column', null, 'row'],
      justifyContent: "center",
      alignItems: ['center', null, 'baseline'],
      mt: ['24px', '48px', null, null, '80px'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: ['column', 'row', 'column'],
        alignItems: ['flex-start', 'center', 'flex-start'],
        mb: 4,
        mr: [null, null, '40px', null, '103px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['132px', null, null, null, '208px'],
          height: ['132px', null, null, null, '208px'],
          mb: [2, null, '17px', null, '51px'],
          mr: [null, 4, 0],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/reduceOverhead-icon.png",
            alt: "Reduce Overhead Icon",
            width: 208,
            height: 208
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['288px', '472px', '250px', null, '289px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: ['20px', null, null, null, '24px'],
            lineHeight: ['28px', null, null, null, '32px'],
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: [2, 3],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.reduceOverhead",
              defaultMessage: [{
                "type": 0,
                "value": "Reduce overhead"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: ['15px', '18px'],
            lineHeight: ['22px', '26px'],
            color: "black.700",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.reduceOverhead.description",
              defaultMessage: [{
                "type": 0,
                "value": "When you’re managing funds for multiple projects or groups, it's easy to get overwhelmed by complex spreadsheets and countless email threads. Open Collective automates budget tracking, reporting, expense processing, and payments, making your job a lot easier."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: ['column', 'row', 'column'],
        alignItems: ['flex-start', 'center', 'flex-start'],
        mb: 4,
        mr: [null, null, '40px', null, '103px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['132px', null, null, null, '208px'],
          height: ['132px', null, null, null, '208px'],
          mb: [2, null, '17px', null, '51px'],
          mr: [null, 4, 0],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/increaseCapacity-icon.png",
            alt: "Increase Capacity Icon",
            width: 208,
            height: 208
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['288px', '472px', '250px', null, '289px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: ['20px', null, null, null, '24px'],
            lineHeight: ['28px', null, null, null, '32px'],
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: [2, 3],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.increaseCapacity",
              defaultMessage: [{
                "type": 0,
                "value": "Increase capacity"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: ['15px', '18px'],
            lineHeight: ['22px', '26px'],
            color: "black.700",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.increaseCapacity.description",
              defaultMessage: [{
                "type": 0,
                "value": "Open Collective makes it possible for you to offer more services to more projects in less time. Large numbers of transactions won’t overwhelm you, because the platform automates most of the work, and also collects any fund holding fees you set."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: ['column', 'row', 'column'],
        alignItems: ['flex-start', 'center', 'flex-start'],
        mb: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['132px', null, null, null, '208px'],
          height: ['132px', null, null, null, '208px'],
          mb: [2, null, '17px', null, '51px'],
          mr: [null, 4, 0],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/ABetterExperience-icon.png",
            alt: "A Better Experience Icon",
            width: 208,
            height: 208
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['288px', '472px', '250px', null, '289px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: ['20px', null, null, null, '24px'],
            lineHeight: ['28px', null, null, null, '32px'],
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: [2, 3],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.aBetterExperience",
              defaultMessage: [{
                "type": 0,
                "value": "A better experience"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: ['15px', '18px'],
            lineHeight: ['22px', '26px'],
            color: "black.700",
            fontWeight: "400",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.aBetterExperience.description",
              defaultMessage: [{
                "type": 0,
                "value": "Reporting is automatic and real-time, so everyone can see the up to date budget at any time. Projects can have more direct control over their funds, while fiscal sponsors can ensure everything is done according to their policies."
              }]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      mx: 2,
      mt: [2, '48px', null, null, '80px'],
      flexDirection: "column",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: ['column', 'row-reverse'],
        alignItems: "center",
        position: "relative",
        mr: [null, null, null, null, '178px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: ['83px', '79px', '115px', null, '147px'],
          height: ['68px', '65px', '94px', null, '120px'],
          position: "absolute",
          top: [null, 0, '265px', null, '290px'],
          left: ['0', '215px', '330px', null, '350px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/keepTrackBird.png",
            alt: "Bird illustration",
            width: 147,
            height: 120
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          mt: "27px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.keepTrack",
              defaultMessage: [{
                "type": 0,
                "value": "Keep track "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " of all the budgets"
              }],
              values: {
                lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
              }
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Keep track of all budgets Illustration",
            src: "/static/images/become-a-host/keepTrackOfBudget-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          mr: [null, '24px', '41px', null, '134px'],
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.keepTrack",
              defaultMessage: [{
                "type": 0,
                "value": "Keep track "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " of all the budgets"
              }],
              values: {
                lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
              }
            }), ' ']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.keepTrack.description",
              defaultMessage: [{
                "type": 0,
                "value": "Create Collectives for as many projects as you need, in a few clicks, at no extra cost. Each has its own page for fundraising, budget tracking, and community engagement. Incoming payments are added to the balance of the right Collective. No spreadsheets required!"
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        mt: ['64px', '48px', '58px', null, '94px'],
        display: "flex",
        flexDirection: ['column', 'row'],
        alignItems: ['center', 'flex-start', 'center'],
        position: "relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: ['71px', '85px', '115px', null, '126px'],
          height: ['44px', '52px', '71px', null, '78px'],
          position: "absolute",
          right: ['0', null, '124px', null, '28px'],
          top: [null, null, '65px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/easyExpenseBird.png",
            alt: "Bird illustration",
            width: 126,
            height: 78
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          mr: ['10px', 0],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.easyExpense",
              defaultMessage: [{
                "type": 0,
                "value": "Easy expense "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " management"
              }],
              values: {
                lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
              }
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Easy expense management Illustration",
            src: "/static/images/become-a-host/easyExpense-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          ml: [null, '24px', '41px', null, '96px'],
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.easyExpense",
              defaultMessage: [{
                "type": 0,
                "value": "Easy expense "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " management"
              }],
              values: {
                lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.easyExpense.description",
              defaultMessage: [{
                "type": 0,
                "value": "To withdraw funds, payees submit expenses through the platform, with associated invoices and receipts. Easily view and approve expenses through your admin dashboard—payment via bank transfer or Paypal is built-in, so you can pay in a single click."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        mt: ['35px', '48px', '58px', null, '94px'],
        display: "flex",
        flexDirection: ['column', 'row-reverse'],
        alignItems: "center",
        position: "relative",
        mr: [null, null, null, null, '178px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: ['88px', '105px', '122px', null, '156px'],
          height: ['44px', '52px', '61px', null, '78px'],
          position: "absolute",
          left: ['0', '150px', '200px'],
          top: [null, '-10px', '35px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/combineFundingBird.png",
            alt: "Bird illustration",
            width: 156,
            height: 78
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          mt: ['27px', 0],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.combineFunding",
              defaultMessage: [{
                "type": 0,
                "value": "Combine "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " funding sources"
              }],
              values: {
                lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
              }
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "Combine Funding sources Illustration",
            src: "/static/images/become-a-host/combineFunding-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          mr: [null, '24px', '41px', null, '134px'],
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.combineFunding",
              defaultMessage: [{
                "type": 0,
                "value": "Combine "
              }, {
                "type": 1,
                "value": "lineBreak"
              }, {
                "type": 0,
                "value": " funding sources"
              }],
              values: {
                lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.combineFunding.description",
              defaultMessage: [{
                "type": 0,
                "value": "Collectives can seek support through diverse channels while tracking everything in one budget. Crowdfunding, credit card payments, and event ticket sales are built-in, and you can easily credit funds coming in by any other means to the right budget."
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        mt: ['35px', '48px', '58px', null, '94px'],
        display: "flex",
        flexDirection: ['column', 'row'],
        alignItems: "center",
        position: "relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: ['77px', '91px', '106px', null, '136px'],
          height: ['31px', '37px', '43px', null, '55px'],
          position: "absolute",
          left: ['49px', '380px', '550px', null, '660px'],
          bottom: "0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/indepthReportBird1.png",
            alt: "Bird illustration",
            width: 136,
            height: 55
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: ['78px', '93px', '108px', null, '138px'],
          height: ['38px', '47px', '53px', null, '68px'],
          position: "absolute",
          right: ['42px', 0, '98px', null, 0],
          bottom: "0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            src: "/static/images/become-a-host/indepthReportBird2.png",
            alt: "Bird illustration",
            width: 138,
            height: 68
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "304px",
          mb: "24px",
          display: [null, 'none'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.inDepthReports",
              defaultMessage: [{
                "type": 0,
                "value": "In-depth reports"
              }]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mb: ['24px', 0],
          overflow: "auto",
          maxWidth: ['304px', '324px', '478px', null, '558px'],
          maxHeight: ['229px', '281px', '355px', null, '420px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-xs.png",
            display: [null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-sm.png",
            display: ['none', 'block', 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-md.png",
            display: ['none', null, 'block', null, 'none']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ScreenShotWrapper, {
            alt: "In-depth Reports Illustration",
            src: "/static/images/become-a-host/indepth-report-lg.png",
            display: ['none', null, null, null, 'block']
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: ['304px', '288px', '437px', null, '408px'],
          ml: [null, '24px', '41px', null, '96px'],
          textAlign: ['center', 'left'],
          mb: ['50px', null, 0],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H2, {
            fontSize: ['24px', null, null, null, '30px'],
            lineHeight: ['32px', null, null, null, '40px'],
            letterSpacing: "-0.008em",
            color: "primary.900",
            display: ['none', 'block'],
            mb: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.inDepthReports",
              defaultMessage: [{
                "type": 0,
                "value": "In-depth reports"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: ['16px', null, null, null, '18px'],
            lineHeight: ['24px', null, null, null, '26px'],
            color: "black.800",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "becomeAHost.benefit.inDepthReports.description",
              defaultMessage: [{
                "type": 0,
                "value": "No need to spend time creating reports for funders—it’s all documented automatically and transparently as you go. In addition, you'll receive a consolidated report every month with all transactions and documentation included. Your accountant will thank you!"
              }]
            })
          })]
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

/***/ 12301:
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
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu).withConfig({
  displayName: "WhoAreFiscalHostsSection__IconWrapper",
  componentId: "sc-si34bf-0"
})(["display:flex;justify-content:center;align-items:center;width:80px;height:80px;@media screen and (min-width:40em){width:88px;height:88px;}@media screen and (min-width:88em){width:99px;height:104px;}"]);
const features = [{
  id: 'nonprofits'
}, {
  id: 'networks'
}, {
  id: 'grantMakers'
}, {
  id: 'entity'
}, {
  id: 'fiscalSponsorshipService'
}];
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  'becomeAHost.networks': {
    id: "becomeAHost.networks",
    defaultMessage: [{
      "type": 0,
      "value": "Networks of groups or chapters"
    }]
  },
  'becomeAHost.networks.description': {
    id: "becomeAHost.networks.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who want to enable local fundraising while operating a single common legal entity, such as meetups and social movements."
    }]
  },
  'becomeAHost.nonprofits': {
    id: "becomeAHost.nonprofits",
    defaultMessage: [{
      "type": 0,
      "value": "Nonprofits and charities"
    }]
  },
  'becomeAHost.nonprofits.description': {
    id: "becomeAHost.nonprofits.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who want to enable unincorporated projects that further their mission areas to receive grants and donations under their umbrella."
    }]
  },
  'becomeAHost.entity': {
    id: "becomeAHost.entity",
    defaultMessage: [{
      "type": 0,
      "value": "Any entity with a bank account"
    }]
  },
  'becomeAHost.entity.description': {
    id: "becomeAHost.entity.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who runs multiple projects and wants to use the Open Collective platform features for transparent budget tracking, combining revenue streams, expense payment management, and community engagement."
    }]
  },
  'becomeAHost.grantMakers': {
    id: "becomeAHost.grantMakers",
    defaultMessage: [{
      "type": 0,
      "value": "Grantmakers and funding institutions"
    }]
  },
  'becomeAHost.grantMakers.description': {
    id: "becomeAHost.grantMakers.description",
    defaultMessage: [{
      "type": 0,
      "value": "Who want to lower the barriers for unincorporated projects and informal initiatives, while ensuring robust oversight."
    }]
  },
  'becomeAHost.fiscalSponsorshipService': {
    id: "becomeAHost.fiscalSponsorshipService",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal sponsorship service providers"
    }]
  },
  'becomeAHost.fiscalSponsorshipService.description': {
    id: "becomeAHost.fiscalSponsorshipService.description",
    defaultMessage: [{
      "type": 0,
      "value": "In their chosen geography or industry area."
    }]
  }
});

const WhoAreFiscalHosts = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    flexDirection: "column",
    alignItems: "center",
    px: "16px",
    mt: "80px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: ['column-reverse', 'row'],
      justifyContent: "center",
      alignItems: "center",
      textAlign: ['center', 'left'],
      mb: [4, null, null, null, '69px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: ['288px', '392px', '396px', null, '448px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_8__/* .SectionTitle */ .NZ, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "becomeAHost.whoAreFiscalHosts",
            defaultMessage: [{
              "type": 0,
              "value": "Who are Fiscal Hosts?"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        ml: [0, '17px', '86px', null, '77px'],
        mb: "23px",
        width: ['222.74px', null, null, null, '330px'],
        height: ['142.48px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          src: "/static/images/become-a-host/whoAreFiscalHost-illustration.png",
          alt: "Who are Fiscal Hosts illustration",
          width: 222.73,
          height: 142.33
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexWrap: "wrap",
      justifyContent: ['space-between', null, null, null, 'center'],
      width: [null, '648px', '704px', null, '1150px'],
      flexDirection: ['column', 'row'],
      children: features.map(feature => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        my: 3,
        mx: [null, '12px', 3, null, 4],
        ml: [null, feature.id === 'entity' || feature.id === 'networks' ? '12px' : 0, feature.id === 'entity' || feature.id === 'networks' ? '46px' : 0, null, feature.id === 'grantMakers' || feature.id === 'fiscalSponsorshipService' || feature.id === 'networks' ? '103px' : 0],
        mr: [null, feature.id === 'nonprofits' || feature.id === 'grantMakers' ? '12px' : 0, feature.id === 'nonprofits' || feature.id === 'grantMakers' ? '46px' : 0, null, 0],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(IconWrapper, {
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            src: `/static/images/become-a-host/${feature.id}-illustration.png`,
            alt: `${feature.id} illustration`,
            width: 1150,
            height: 1150
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          width: ['288px', '306px', null, null, '297px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H3, {
            color: "black.800",
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            children: intl.formatMessage(messages[`becomeAHost.${feature.id}`])
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          mt: 2,
          width: ['288px', '306px', null, null, '289px'],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.700",
            fontSize: ['16px', '18px'],
            lineHeight: ['24px', '26px'],
            fontWeight: "400",
            letterSpacing: "normal",
            children: [intl.formatMessage(messages[`becomeAHost.${feature.id}.description`]), ` `, feature.id === 'fiscalSponsorshipService' && intl.formatMessage({
              id: "Wd/w9L",
              defaultMessage: [{
                "type": 0,
                "value": "Learn more about "
              }, {
                "type": 8,
                "value": "fiscalHostingLink",
                "children": [{
                  "type": 0,
                  "value": "fiscal hosting"
                }]
              }, {
                "type": 0,
                "value": "."
              }]
            }, {
              fiscalHostingLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* .getI18nLink */ .fw)({
                as: _Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                href: '/fiscal-hosting'
              })
            })]
          })
        })]
      }, feature.id))
    })]
  });
};

WhoAreFiscalHosts.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhoAreFiscalHosts"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoAreFiscalHosts);

/***/ }),

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

/***/ 75136:
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
/* harmony import */ var _components_become_a_host_CaseStudiesSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28758);
/* harmony import */ var _components_become_a_host_FiscalSponsorshipSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73898);
/* harmony import */ var _components_become_a_host_WhatAreTheBenefitsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18822);
/* harmony import */ var _components_become_a_host_WhoAreFiscalHostsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12301);
/* harmony import */ var _components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78355);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_7__]);
_components_Page__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  defaultTitle: {
    id: "OC.tagline",
    defaultMessage: [{
      "type": 0,
      "value": "Make your community sustainable. Collect and spend money transparently."
    }]
  }
});

const BecomeAHost = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    description: formatMessage(messages.defaultTitle),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_become_a_host_FiscalSponsorshipSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_become_a_host_WhoAreFiscalHostsSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_become_a_host_WhatAreTheBenefitsSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_become_a_host_CaseStudiesSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
      page: "becomeAHost"
    })]
  });
};

BecomeAHost.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BecomeAHost"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BecomeAHost);
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7667,5106,5842,8355,4515], () => (__webpack_exec__(75136)));
module.exports = __webpack_exports__;

})();