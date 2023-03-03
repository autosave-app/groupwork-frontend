"use strict";
(() => {
var exports = {};
exports.id = 1640;
exports.ids = [1640];
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

/***/ 34485:
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
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const MoreFeatures = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
  mt: [null, null, null, null, '180px'],
  mb: "80px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mx: 3,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mb: ['24px', 3, null, null, '24px'],
      width: ['288px', 1],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitle */ .NZ, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "howItWorks.muchMore",
          defaultMessage: [{
            "type": 0,
            "value": "And so much more!"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: ['288px', 1],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_5__/* .SectionDescription */ .TI, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "home.weAreOpenSection.subtitle",
          defaultMessage: [{
            "type": 0,
            "value": "We not only help you be transparent, we are too!"
          }]
        })
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    mx: 3,
    gridGap: ['48px', '72px 40px', '72px 112px', null, '124px 112px'],
    placeSelf: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: ['center', null, null, 'flex-start'],
    mt: ['27px', '56px', null, null, '69px'],
    maxWidth: "1200px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "56px",
        height: "56px",
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          src: `/static/images/how-it-works/event-illustration.png`,
          alt: "Event Icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "288px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "black.800",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Events",
            defaultMessage: [{
              "type": 0,
              "value": "Events"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.700",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.events.description",
            defaultMessage: [{
              "type": 0,
              "value": "Host online or offline events, with ticket sale revenue going straight to your transparent budget."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "56px",
        height: "56px",
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          src: `/static/images/how-it-works/projects-illustration.png`,
          alt: "Event Icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "288px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "black.800",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Projects",
            defaultMessage: [{
              "type": 0,
              "value": "Projects"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.700",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.projects.description",
            defaultMessage: [{
              "type": 0,
              "value": "Manage a grant or raise money for a specific purpose, with flexible tools for segregating your budget."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "56px",
        height: "56px",
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          src: `/static/images/how-it-works/virtualCard-illustration.png`,
          alt: "Event Icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "288px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "black.800",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "VirtualCards.Title",
            defaultMessage: [{
              "type": 0,
              "value": "Virtual Cards"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.700",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.virtualCards.description",
            defaultMessage: [{
              "type": 0,
              "value": "Spend money anywhere you’d use a credit or debit card online, linked directly to your Open Collective funds (this beta feature is only available to certain fiscal hosts)."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "56px",
        height: "56px",
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          src: `/static/images/how-it-works/embeddable-illustration.png`,
          alt: "Event Icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "288px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "black.800",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.embeddable",
            defaultMessage: [{
              "type": 0,
              "value": "Embeddable"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.700",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.embeddable.description",
            defaultMessage: [{
              "type": 0,
              "value": "You can display the Open Collective contribution component directly on your own website, meaning people don’t need to leave your page to pay."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "56px",
        height: "56px",
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          src: `/static/images/how-it-works/extraSecurity-illustration.png`,
          alt: "Event Icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "288px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "black.800",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.extraSecurity",
            defaultMessage: [{
              "type": 0,
              "value": "Extra security"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.700",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.extraSecurity.description",
            defaultMessage: [{
              "type": 0,
              "value": "Optional 2-factor authentication. As a tool for managing money, we take security very seriously."
            }]
          })
        })]
      })]
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    mt: "74px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      width: "100%",
      buttonStyle: "marketingSecondary",
      buttonSize: "medium",
      href: "https://docs.opencollective.com/help/",
      fontWeight: "500",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "TdTXXf",
        defaultMessage: [{
          "type": 0,
          "value": "Learn more"
        }]
      })
    })
  })]
});

MoreFeatures.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MoreFeatures"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreFeatures);

/***/ }),

/***/ 67658:
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
  displayName: "HowOCIsDifferentSection__Title",
  componentId: "sc-1445zeb-0"
})(["font-size:20px;line-height:28px;letter-spacing:-0.008em;font-weight:bold;margin-bottom:16px;margin-top:16px;color:", ";", " @media screen and (min-width:40em){font-size:24px;line-height:32px;}@media screen and (min-width:88em){font-size:32px;line-height:40px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.900'), styled_system__WEBPACK_IMPORTED_MODULE_4__.display);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_8__.P).withConfig({
  displayName: "HowOCIsDifferentSection__Description",
  componentId: "sc-1445zeb-1"
})(["font-size:15px;line-height:22px;letter-spacing:-0.12px;color:", ";font-weight:500;", " @media screen and (min-width:40em){font-size:18px;line-height:26px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.800'), styled_system__WEBPACK_IMPORTED_MODULE_4__.display);

const HowOCIsDifferent = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    mx: [3, 4],
    my: 4,
    mt: ['88px', null, '120px'],
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      width: ['288px', '100%'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitle */ .NZ, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "howItWorks.HowOCIsDifferent.title",
          defaultMessage: [{
            "type": 0,
            "value": "Open Collective is different"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      mt: ['94px', null, '54px'],
      mb: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '392px', null, null, '558px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 558,
          height: 418,
          src: "/static/images/how-it-works/transparentByDesign-illustration.png",
          alt: "Transparent by design"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        ml: [null, 2, null, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "howItWorks.transparentByDesign",
            defaultMessage: [{
              "type": 0,
              "value": "Transparent by design"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "howItWorks.transparentByDesign.description",
            defaultMessage: [{
              "type": 0,
              "value": "The first thing you’ll notice is transparency—everyone can see where money comes from and where it goes—but it doesn’t end there..."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      my: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row-reverse'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '392px', null, null, '558px'],
        ml: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 558,
          height: 429,
          src: "/static/images/how-it-works/builtWithResilient-illustration.png",
          alt: "Built with resilience in mind"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        mr: [null, 2, null, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "howItWorks.builtWithResilient",
            defaultMessage: [{
              "type": 0,
              "value": "Built with resilience in mind"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "howItWorks.builtWithResilient.description",
            defaultMessage: [{
              "type": 0,
              "value": "Unlike other crowdfunding platforms, Open Collective is designed for ongoing collaborations. That means your funding and community of support doesn’t disappear after a single campaign, or if the initial organizers move on."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      my: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '392px', null, null, '558px'],
        height: [null, '323px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 555,
          height: 452,
          src: '/static/images/how-it-works/openIsBetter-illustration.png',
          alt: "Open is better"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        ml: [null, 4, 0, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "howItWorks.openIsBetter",
            defaultMessage: [{
              "type": 0,
              "value": "Open is better"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "howItWorks.openIsBetter.description",
            defaultMessage: [{
              "type": 0,
              "value": "Our code is fully transparent and open source, just like our budget. You own your data: we’ll never sell it or lock you in."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      my: ['16px', null, null, null, '32px'],
      flexDirection: ['column', 'row-reverse'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '392px', null, null, '558px'],
        height: [null, '323px'],
        ml: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          width: 555,
          height: 452,
          src: '/static/images/how-it-works/moneyManagement-illustration.png',
          alt: "Hassle-free money management"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        width: ['288px', '264px', '358px', null, '472px'],
        textAlign: ['center', 'left'],
        mr: [null, 4, 0, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "howItWorks.moneyManagement",
            defaultMessage: [{
              "type": 0,
              "value": "Hassle-free money management"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowOCIsDifferent);

/***/ }),

/***/ 76688:
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
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const HowOCWorks = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: ['column', null, 'row-reverse'],
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: 4,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mt: [3, 0],
      mb: [3, null, null, null, '24px'],
      width: ['288px', '676px', '413px', null, '555px'],
      display: [null, null, 'none'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .MainTitle */ .U3, {
        textAlign: ['center', null, 'left'],
        whiteSpace: [null, null, 'pre-line'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "OC.howItWorks",
          defaultMessage: [{
            "type": 0,
            "value": "How Open Collective works"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      ml: [null, '6px', '40px', null, '84px'],
      width: ['288px', '306px', '458px', null, '558px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        alt: "How Open Collective works",
        src: "/static/images/how-it-works/howItWorks-illustration.png",
        width: 558,
        height: 462
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: ['center', null, 'flex-start'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mt: [3, 0],
        mb: [3, null, null, null, '24px'],
        width: ['288px', '344px', '413px', null, '555px'],
        display: ['none', null, 'block'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .MainTitle */ .U3, {
          textAlign: ['center', null, 'left'],
          whiteSpace: [null, null, 'pre-line'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "OC.howItWorks",
            defaultMessage: [{
              "type": 0,
              "value": "How Open Collective works"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '676px', '458px', null, '558px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
          fontSize: ['15px', '18px'],
          lineHeight: ['22px', '26px'],
          textAlign: ['center', 'left'],
          fontWeight: "500",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "howItWorks.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective enables all kinds of groups to raise, manage, and spend money transparently. Our open source software platform engages contributors and supporters, automates admin, and helps you tell your story."
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: "/create",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          minWidth: 158,
          mt: ['56px', '24px'],
          buttonStyle: "marketing",
          whiteSpace: "nowrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowOCWorks);

/***/ }),

/***/ 64432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89457);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "MoreAboutFHSection__Wrapper",
  componentId: "sc-by6m1c-0"
})(["display:flex;justify-content:space-between;align-items:center;border-radius:8px;padding:25px 36px;background-color:rgba(255,255,255,0.9);border:1px solid #dcdde0;&:hover{border:1px solid #297eff;color:#1041a3;h3{color:#1041a3;}}"]);

const MoreAboutFiscalHosting = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: [4, '100px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mb: ['24px', '56px'],
      width: ['288px', 1],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitle */ .NZ, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "howItWorks.moreAboutFiscalHosting",
          defaultMessage: [{
            "type": 0,
            "value": "More about fiscal hosting"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexDirection: ['column', null, 'row'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        href: "/fiscal-hosting",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Wrapper, {
          color: "black.900",
          mb: [3, null, 0],
          width: ['288px', '400px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            width: [null, '266px'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
              fontSize: ['24px', '32px'],
              textAlign: ['center', 'left'],
              lineHeight: ['32px', '40px'],
              letterSpacing: "-0.008em",
              mb: 2,
              fontWeight: "bold",
              color: "black.800",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "howItWorks.fiscalHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "About how fiscal hosting works"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            display: ['none', 'inline-block'],
            className: "arrowWrapper",
            fontWeight: "bold",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
              size: '24'
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        href: "/become-a-host",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Wrapper, {
          color: "black.900",
          ml: [null, null, 3],
          width: ['288px', '400px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            width: [null, '266px'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
              fontSize: ['24px', '32px'],
              textAlign: ['center', 'left'],
              lineHeight: ['32px', '40px'],
              letterSpacing: "-0.008em",
              mb: 2,
              fontWeight: "bold",
              color: "black.800",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "howItWorks.becomeHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "About becoming a fiscal host"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            display: ['none', 'inline-block'],
            className: "arrowWrapper",
            fontWeight: "bold",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreAboutFiscalHosting);

/***/ }),

/***/ 47587:
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
/* harmony import */ var _components_collectives_sections_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88579);
/* harmony import */ var _components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78355);
/* harmony import */ var _components_how_it_works_AndSoMuchMoreSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34485);
/* harmony import */ var _components_how_it_works_HowOCIsDifferentSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67658);
/* harmony import */ var _components_how_it_works_HowOCWorksSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76688);
/* harmony import */ var _components_how_it_works_MoreAboutFHSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64432);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_8__]);
_components_Page__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
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

const HowItWorks = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    description: formatMessage(messages.defaultTitle),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_how_it_works_HowOCWorksSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_how_it_works_HowOCIsDifferentSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_how_it_works_MoreAboutFHSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_collectives_sections_Features__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      sectionTitle: formatMessage(messages.feature),
      sectionSubtitle: formatMessage(messages['feature.subtitle'])
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_how_it_works_AndSoMuchMoreSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {})]
  });
};

HowItWorks.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowItWorks"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowItWorks);
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

/***/ 22198:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowRight");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7667,5106,5842,8355,4515,8579], () => (__webpack_exec__(47587)));
module.exports = __webpack_exports__;

})();