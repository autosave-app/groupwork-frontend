"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 19046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47667);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  'home.payment': {
    id: "ContributionFlow.Payment",
    defaultMessage: [{
      "type": 0,
      "value": "Payment"
    }]
  },
  'home.payment.description': {
    id: "home.payment.description",
    defaultMessage: [{
      "type": 0,
      "value": "Accept funds, transfer money, pay people and create invoices."
    }]
  },
  'home.fundraising': {
    id: "home.fundraising",
    defaultMessage: [{
      "type": 0,
      "value": "Fundraising"
    }]
  },
  'home.fundraising.description': {
    id: "home.fundraising.description",
    defaultMessage: [{
      "type": 0,
      "value": "Publicly display your budget and transactions to build trust from contributors and donors."
    }]
  },
  'home.communityEngagement': {
    id: "home.communityEngagement",
    defaultMessage: [{
      "type": 0,
      "value": "Community engagement"
    }]
  },
  'home.communityEngagement.description': {
    id: "home.communityEngagement.description",
    defaultMessage: [{
      "type": 0,
      "value": "Post updates, create events, connect your website, or use your Open Collective page with your custom url."
    }]
  },
  'home.reporting': {
    id: "home.reporting",
    defaultMessage: [{
      "type": 0,
      "value": "Reporting"
    }]
  },
  'home.reporting.description': {
    id: "home.reporting.description",
    defaultMessage: [{
      "type": 0,
      "value": "No more messy spreadsheets. Open Collective updates live to make reporting easy. Auditors and grantmakers love us!"
    }]
  },
  'home.accounting': {
    id: "home.accounting",
    defaultMessage: [{
      "type": 0,
      "value": "Accounting"
    }]
  },
  'home.accounting.description': {
    id: "home.accounting.description",
    defaultMessage: [{
      "type": 0,
      "value": "No need to balance your checkbook. It’s all accessible here on the platform."
    }]
  }
});
const features = ['payment', 'fundraising', 'communityEngagement', 'reporting', 'accounting'];

const CollaborateWithMoney = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    px: "16px",
    flexDirection: "column",
    alignItems: "center",
    my: "64px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        width: ['206px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          src: "/static/images/new-home/collaborate-withMoney-illustration.png",
          width: 239,
          height: 257
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        maxWidth: ['288px', '421px', '594px'],
        textAlign: ['center', 'left'],
        ml: [null, '40px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitle */ .NZ, {
          mb: ['8px', 3],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "home.collaborateWithMoney",
            defaultMessage: [{
              "type": 0,
              "value": "Collaborate with money"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_4__/* .SectionDescription */ .TI, {
          textAlign: ['center', 'left'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "home.collaborateWithMoney.description",
            defaultMessage: [{
              "type": 0,
              "value": "A shared account to fundraise and manage money, connect with your people, and more."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      flexWrap: "wrap",
      my: "48px",
      mb: [null, null, 0],
      maxWidth: ['288px', '724px', '1024px', null, '1280px'],
      justifyContent: "center",
      children: features.map(feature => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        mb: [4, null, '78px'],
        width: ['288px', '195px', '288px'],
        mx: [null, '12px', '23px', null, '56px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
          mb: "18px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            width: 56,
            height: 56,
            src: `/static/images/new-home/${feature}-icon.png`,
            alt: `${feature} illustration`
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.H5, {
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            color: "black.800",
            mb: 3,
            children: intl.formatMessage(messages[`home.${feature}`])
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
            fontSize: "18px",
            lineHeight: "26px",
            color: "black.700   ",
            children: intl.formatMessage(messages[`home.${feature}.description`])
          })]
        })]
      }, feature))
    })]
  });
};

CollaborateWithMoney.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollaborateWithMoney"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollaborateWithMoney);

/***/ }),

/***/ 4610:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const DedicatedTeam = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      px: "16px",
      mb: [0, '73px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        maxWidth: ['288px', '700px', '880px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
          textAlign: "center",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "home.weDedicatedTeam",
            defaultMessage: [{
              "type": 0,
              "value": "We are a dedicated team of people working to spread power and wealth"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        maxWidth: ['288px', '700px', '768px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
          textAlign: "center",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "home.weDedicatedTeam.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective is made possible by an international team of people who are committed to community-control of technology. Connect with us."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      width: 1,
      maxWidth: "100%",
      overflow: "hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        width: [1, '768px', '1024px', null, '1176px'],
        display: [null, 'flex'],
        my: ['24px', '70px'],
        position: "relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          width: [1, '292px', '400px'],
          left: ['15%', '50px'],
          position: "relative",
          top: ['30px', 0],
          zIndex: ['1', 'unset'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            width: 400,
            height: 269,
            src: "/static/images/new-home/team-picture-2.png"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          width: [1, '257px', '353px'],
          top: [null, '-63px'],
          right: ['13%', 0],
          position: "relative",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            width: 353,
            height: 237,
            src: "/static/images/new-home/team-picture-1.png"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          width: [1, '274px', '376px'],
          position: "relative",
          left: ['21%', '-40px'],
          top: ['-42px', 0],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            width: 376,
            height: 252,
            src: "/static/images/new-home/team-picture-3.png"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mb: ['40px', null, '102px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          href: "/contact",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            width: "142px",
            my: ['12px', null, 0],
            mr: [0, '24px'],
            buttonStyle: "marketing",
            whiteSpace: "nowrap",
            backgroundColor: "primary.900",
            fontSize: "16px",
            lineHeight: "20px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "krEziQ",
              defaultMessage: [{
                "type": 0,
                "value": "Get in touch"
              }]
            })
          })
        })
      })]
    })]
  });
};

DedicatedTeam.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DedicatedTeam"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DedicatedTeam);

/***/ }),

/***/ 36023:
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
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95134);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);















const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul.withConfig({
  displayName: "GetToKnowUsSection__ListContainer",
  componentId: "sc-kbqc2d-0"
})(["padding-left:20px;"]);
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_ListItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
  displayName: "GetToKnowUsSection__StyledListItem",
  componentId: "sc-kbqc2d-1"
})(["&::before{content:'\u2022 ';color:", ";font-weight:bold;display:inline-block;width:1em;margin-left:-1em;}a{text-decoration-color:", ";}a:hover{color:", ";text-decoration:underline;text-decoration-color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.600'));

const GetToKnowUs = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: "column",
    px: "16px",
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        maxWidth: ['288px', '700px', '880px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_9__/* .SectionTitle */ .NZ, {
          textAlign: "center",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.getToKnowUs",
            defaultMessage: [{
              "type": 0,
              "value": "Get to know us."
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        maxWidth: ['288px', '700px', '768px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_9__/* .SectionDescription */ .TI, {
          textAlign: "center",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.getToKnowUs.description",
            defaultMessage: [{
              "type": 0,
              "value": "Browse stories, blog posts, resources, and get support from the community."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      my: "32px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        maxWidth: ['288px', '342px', '470px', null, '536px'],
        py: "48px",
        px: "32px",
        border: "2px solid",
        borderColor: "primary.900",
        borderRadius: "16px",
        mb: [3, 0],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.H3, {
          fontSize: ['32px'],
          lineHeight: ['40px'],
          letterSpacing: ['-0.008em'],
          color: "primary.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.exploreAndLearn",
            defaultMessage: [{
              "type": 0,
              "value": "Explore and learn"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
          my: "24px",
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          fontWeight: "500",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "3XixSl",
            defaultMessage: [{
              "type": 0,
              "value": "Read more about how we operate and what projects we have for the present and future."
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(ListContainer, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            mb: "24px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "https://blog.opencollective.com",
              openInNewTab: true,
              textDecoration: "underline",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "AgyCr7",
                defaultMessage: [{
                  "type": 0,
                  "value": "Read our blog"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            color: "black.800",
            mb: "24px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "/e2c",
              textDecoration: "underline",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "WvqSvr",
                defaultMessage: [{
                  "type": 0,
                  "value": "Our exit strategy"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            mb: "24px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "/become-a-sponsor",
              textDecoration: "underline",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "oqqit/",
                defaultMessage: [{
                  "type": 0,
                  "value": "Info for financial sponsors"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            color: "black.800",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "https://blog.opencollective.com/tag/case-studies/",
              textDecoration: "underline",
              openInNewTab: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "POZqkv",
                defaultMessage: [{
                  "type": 0,
                  "value": "Case studies"
                }]
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        maxWidth: ['288px', '342px', '470px', null, '536px'],
        py: "48px",
        px: "32px",
        border: "2px solid",
        borderColor: "primary.900",
        borderRadius: "16px",
        ml: [null, 3],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.H3, {
          fontSize: ['32px'],
          lineHeight: ['40px'],
          letterSpacing: ['-0.008em'],
          color: "primary.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.helpAndSupport",
            defaultMessage: [{
              "type": 0,
              "value": "Help and support"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
          my: "24px",
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          fontWeight: "500",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "cI3CsE",
            defaultMessage: [{
              "type": 0,
              "value": "Learn more about how it all works: our philosophy and business model."
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(ListContainer, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            color: "black.800",
            mb: "24px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "/help",
              textDecoration: "underline",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "t/HtIc",
                defaultMessage: [{
                  "type": 0,
                  "value": "Visit the support page"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            color: "black.800",
            mb: "24px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "https://docs.opencollective.com",
              textDecoration: "underline",
              openInNewTab: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "wdcTBA",
                defaultMessage: [{
                  "type": 0,
                  "value": "Read through our documentation"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            color: "black.800",
            mb: "24px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "https://slack.opencollective.com/",
              textDecoration: "underline",
              openInNewTab: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "ZelEql",
                defaultMessage: [{
                  "type": 0,
                  "value": "Slack and email"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledListItem, {
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.008em",
            fontWeight: "500",
            color: "black.800",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              color: "black.800",
              href: "/pricing",
              textDecoration: "underline",
              openInNewTab: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "70Nuf5",
                defaultMessage: [{
                  "type": 0,
                  "value": "Pricing and Business Model"
                }]
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      justifyContent: "center",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: "16px",
        display: [null, 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          width: 288,
          height: 238,
          alt: "Exit to community illustration",
          src: "/static/images/new-home/e2c-illustration.png"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: "16px",
        display: ['none', 'block', 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          width: 392,
          height: 324,
          alt: "Exit to community illustration",
          src: "/static/images/new-home/e2c-illustration-sm.png"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: "16px",
        display: ['none', null, 'block'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          width: 558,
          height: 454,
          alt: "Exit to community illustration",
          src: "/static/images/new-home/e2c-illustration-lg.png"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        textAlign: ['center', 'left'],
        ml: [null, '24px'],
        width: ['288px', '318px', '472px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.H5, {
          mb: "16px",
          fontSize: ['20px', '32px', '40px'],
          lineHeight: ['28px', '40px', '48px'],
          fontWeight: "700",
          letterSpacing: ['-0.008em', null, '-0.04em'],
          color: "primary.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "r96v2J",
            defaultMessage: [{
              "type": 0,
              "value": "Where we're heading..."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
          fontSize: ['15px', '16px', '20px'],
          lineHeight: ['22px', '24px', '28px'],
          color: "black.800",
          letterSpacing: [null, null, '-0.008em'],
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "e2c.description",
            defaultMessage: [{
              "type": 0,
              "value": "Join us as we transition from a privately owned company to a structure that allows us to share power and revenue with you."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          display: ['none', null, 'block'],
          mt: "24px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            href: "/e2c",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              minWidth: "135px",
              my: ['12px', null, 0],
              buttonStyle: "marketing",
              whiteSpace: "nowrap",
              backgroundColor: "primary.900",
              fontSize: "16px",
              lineHeight: "20px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "TdTXXf",
                defaultMessage: [{
                  "type": 0,
                  "value": "Learn more"
                }]
              })
            })
          })
        })]
      })]
    })]
  });
};

GetToKnowUs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GetToKnowUs"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetToKnowUs);

/***/ }),

/***/ 50941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OpenCollectiveIsSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/fiscal-hosting/ApplyToFiscalHostSection.js
var ApplyToFiscalHostSection = __webpack_require__(84072);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/marketing/Text.js
var Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var components_Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/home/NetworkOfCollectives.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const StyledSvg = external_styled_components_default()(Grid/* Box */.xu).withConfig({
  shouldForwardProp: (prop, defaultFilter) => !Grid/* boxProps.propNames.includes */.q.propNames.includes(prop) && defaultFilter(prop)
}).withConfig({
  displayName: "NetworkOfCollectives__StyledSvg",
  componentId: "sc-18zdztk-0"
})(["#logoContainer{transform-origin:50% 50%;transition:0.3s;transform-box:fill-box;&:hover{transform:scale(1.3);transform-origin:50% 50%;transition:transform 300ms ease;}}.visible-sm{display:none;@media screen and (min-width:40em){display:inline;}}.visible-xs{@media screen and (min-width:40em){display:none;}}"]);
const collectives = [{
  id: 'oc',
  path: '/opencollective',
  image: {
    width: 256,
    height: 256,
    transform: 'translate(0.137734 0.131406) scale(0.00286316)',
    xlinkHref: '/static/images/new-home/open-collective-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "443",
        y: "134",
        width: "102",
        height: "102",
        rx: "51",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "443",
        y: "134",
        width: "102",
        height: "102",
        rx: "51",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M494 232C468.043 232 447 210.957 447 185H439C439 215.376 463.624 240 494 240V232ZM541 185C541 210.957 519.957 232 494 232V240C524.376 240 549 215.376 549 185H541ZM494 138C519.957 138 541 159.043 541 185H549C549 154.624 524.376 130 494 130V138ZM494 130C463.624 130 439 154.624 439 185H447C447 159.043 468.043 138 494 138V130Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "154",
        y: "174",
        width: "99",
        height: "99",
        rx: "49.5",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "154",
        y: "174",
        width: "99",
        height: "99",
        rx: "49.5",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M203.5 269C178.371 269 158 248.629 158 223.5H150C150 253.047 173.953 277 203.5 277V269ZM249 223.5C249 248.629 228.629 269 203.5 269V277C233.047 277 257 253.047 257 223.5H249ZM203.5 178C228.629 178 249 198.371 249 223.5H257C257 193.953 233.047 170 203.5 170V178ZM203.5 170C173.953 170 150 193.953 150 223.5H158C158 198.371 178.371 178 203.5 178V170Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'osc',
  path: '/opensource',
  image: {
    width: 794,
    height: 794,
    transform: 'translate(0 -0.000269401) scale(0.00125945)',
    xlinkHref: '/static/images/new-home/osc-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "360.515",
        y: "305.034",
        width: "64.6041",
        height: "64.5693",
        rx: "32.2846",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M392.817 365.603C377.193 365.603 364.515 352.937 364.515 337.318H356.515C356.515 357.361 372.78 373.603 392.817 373.603V365.603ZM421.119 337.318C421.119 352.937 408.441 365.603 392.817 365.603V373.603C412.853 373.603 429.119 357.361 429.119 337.318H421.119ZM392.817 309.034C408.441 309.034 421.119 321.7 421.119 337.318H429.119C429.119 317.276 412.853 301.034 392.817 301.034V309.034ZM392.817 301.034C372.78 301.034 356.515 317.276 356.515 337.318H364.515C364.515 321.7 377.193 309.034 392.817 309.034V301.034Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "126",
        y: "509",
        width: "62",
        height: "62",
        rx: "31",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M157 567C142.088 567 130 554.912 130 540H122C122 559.33 137.67 575 157 575V567ZM184 540C184 554.912 171.912 567 157 567V575C176.33 575 192 559.33 192 540H184ZM157 513C171.912 513 184 525.088 184 540H192C192 520.67 176.33 505 157 505V513ZM157 505C137.67 505 122 520.67 122 540H130C130 525.088 142.088 513 157 513V505Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'ocf',
  path: '/foundation',
  image: {
    width: 888,
    height: 888,
    transform: 'translate(0 -0.000269165) scale(0.00112613)',
    xlinkHref: '/static/images/new-home/ocf-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "208.695",
        y: "51.5992",
        width: "64.604",
        height: "64.5693",
        rx: "32.2846",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M240.997 112.169C225.373 112.169 212.695 99.5023 212.695 83.8839H204.695C204.695 103.926 220.961 120.169 240.997 120.169V112.169ZM269.299 83.8839C269.299 99.5023 256.621 112.169 240.997 112.169V120.169C261.034 120.169 277.299 103.926 277.299 83.8839H269.299ZM240.997 55.5992C256.621 55.5992 269.299 68.2655 269.299 83.8839H277.299C277.299 63.8416 261.034 47.5992 240.997 47.5992V55.5992ZM240.997 47.5992C220.961 47.5992 204.695 63.8416 204.695 83.8839H212.695C212.695 68.2655 225.373 55.5992 240.997 55.5992V47.5992Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "53",
        y: "209",
        width: "63",
        height: "62",
        rx: "31",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M84 213H85V205H84V213ZM85 267H84V275H85V267ZM84 267C69.0883 267 57 254.912 57 240H49C49 259.33 64.67 275 84 275V267ZM112 240C112 254.912 99.9117 267 85 267V275C104.33 275 120 259.33 120 240H112ZM85 213C99.9117 213 112 225.088 112 240H120C120 220.67 104.33 205 85 205V213ZM84 205C64.67 205 49 220.67 49 240H57C57 225.088 69.0883 213 84 213V205Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'socialChange',
  path: '/the-social-change-nest',
  image: {
    width: 516,
    height: 593,
    transform: 'translate(0 -0.0749213) scale(0.00193798)',
    xlinkHref: '/static/images/new-home/social-change-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "626.199",
        y: "129.89",
        width: "64.604",
        height: "64.5693",
        rx: "32.2846",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M658.501 190.459C642.877 190.459 630.199 177.793 630.199 162.174H622.199C622.199 182.216 638.464 198.459 658.501 198.459V190.459ZM686.803 162.174C686.803 177.793 674.125 190.459 658.501 190.459V198.459C678.538 198.459 694.803 182.216 694.803 162.174H686.803ZM658.501 133.89C674.125 133.89 686.803 146.556 686.803 162.174H694.803C694.803 142.132 678.538 125.89 658.501 125.89V133.89ZM658.501 125.89C638.464 125.89 622.199 142.132 622.199 162.174H630.199C630.199 146.556 642.877 133.89 658.501 133.89V125.89Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "226",
        y: "89",
        width: "62",
        height: "62",
        rx: "31",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M257 147C242.088 147 230 134.912 230 120H222C222 139.33 237.67 155 257 155V147ZM284 120C284 134.912 271.912 147 257 147V155C276.33 155 292 139.33 292 120H284ZM257 93C271.912 93 284 105.088 284 120H292C292 100.67 276.33 85 257 85V93ZM257 85C237.67 85 222 100.67 222 120H230C230 105.088 242.088 93 257 93V85Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'ocnz',
  path: '/ocnz',
  image: {
    width: 330,
    height: 316,
    transform: 'translate(-0.0218706) scale(0.00316285)',
    xlinkHref: '/static/images/new-home/oc-nz-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "396",
        y: "29",
        width: "64.6041",
        height: "64.5693",
        rx: "32.2846",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M428.302 89.5693C412.678 89.5693 400 76.903 400 61.2846H392C392 81.3269 408.265 97.5693 428.302 97.5693V89.5693ZM456.604 61.2846C456.604 76.903 443.926 89.5693 428.302 89.5693V97.5693C448.339 97.5693 464.604 81.3269 464.604 61.2846H456.604ZM428.302 33C443.926 33 456.604 45.6663 456.604 61.2846H464.604C464.604 41.2424 448.339 25 428.302 25V33ZM428.302 25C408.265 25 392 41.2424 392 61.2846H400C400 45.6663 412.678 33 428.302 33V25Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "53",
        y: "89",
        width: "62",
        height: "62",
        rx: "31",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M84 147C69.0883 147 57 134.912 57 120H49C49 139.33 64.67 155 84 155V147ZM111 120C111 134.912 98.9117 147 84 147V155C103.33 155 119 139.33 119 120H111ZM84 93C98.9117 93 111 105.088 111 120H119C119 100.67 103.33 85 84 85V93ZM84 85C64.67 85 49 100.67 49 120H57C57 105.088 69.0883 93 84 93V85Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'allforclimate',
  path: '/allforclimate',
  image: {
    width: 255,
    height: 255,
    transform: 'translate(0 -0.000269165) scale(0.00392157)',
    xlinkHref: '/static/images/new-home/allforclimate-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "229.692",
        y: "204.144",
        width: "64.604",
        height: "64.5693",
        rx: "32.2846",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M261.994 264.713C246.37 264.713 233.692 252.047 233.692 236.429H225.692C225.692 256.471 241.957 272.713 261.994 272.713V264.713ZM290.296 236.429C290.296 252.047 277.618 264.713 261.994 264.713V272.713C282.03 272.713 298.296 256.471 298.296 236.429H290.296ZM261.994 208.144C277.618 208.144 290.296 220.81 290.296 236.429H298.296C298.296 216.387 282.03 200.144 261.994 200.144V208.144ZM261.994 200.144C241.957 200.144 225.692 216.387 225.692 236.429H233.692C233.692 220.81 246.37 208.144 261.994 208.144V200.144Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "85",
        y: "402",
        width: "62",
        height: "62",
        rx: "31",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M116 460C101.088 460 89 447.912 89 433H81C81 452.33 96.67 468 116 468V460ZM143 433C143 447.912 130.912 460 116 460V468C135.33 468 151 452.33 151 433H143ZM116 406C130.912 406 143 418.088 143 433H151C151 413.67 135.33 398 116 398V406ZM116 398C96.67 398 81 413.67 81 433H89C89 418.088 101.088 406 116 406V398Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'fridayForFuture',
  path: '/fridaysforfuture-us',
  image: {
    width: 1200,
    height: 1200,
    transform: 'translate(0 -0.000269063) scale(0.000833333)',
    xlinkHref: '/static/images/new-home/friday-for-future-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "85.1399",
        y: "49.1779",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M107.751 90.3764C97.4764 90.3764 89.1399 82.0464 89.1399 71.7771H81.1399C81.1399 86.4703 93.0638 98.3764 107.751 98.3764V90.3764ZM126.363 71.7771C126.363 82.0464 118.026 90.3764 107.751 90.3764V98.3764C122.439 98.3764 134.363 86.4703 134.363 71.7771H126.363ZM107.751 53.1779C118.026 53.1779 126.363 61.5078 126.363 71.7771H134.363C134.363 57.0839 122.439 45.1779 107.751 45.1779V53.1779ZM107.751 45.1779C93.0638 45.1779 81.1399 57.0839 81.1399 71.7771H89.1399C89.1399 61.5078 97.4764 53.1779 107.751 53.1779V45.1779Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "16",
        y: "279",
        width: "44",
        height: "44",
        rx: "22",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M38 319C28.0589 319 20 310.941 20 301H12C12 315.359 23.6406 327 38 327V319ZM56 301C56 310.941 47.9411 319 38 319V327C52.3594 327 64 315.359 64 301H56ZM38 283C47.9411 283 56 291.059 56 301H64C64 286.641 52.3594 275 38 275V283ZM38 275C23.6406 275 12 286.641 12 301H20C20 291.059 28.0589 283 38 283V275Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'bushwick',
  path: '/bushwick-ayuda-mutua',
  image: {
    width: 322,
    height: 324,
    transform: 'translate(0.0737122 0.074456) scale(0.00267384)',
    xlinkHref: '/static/images/new-home/bushwick-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "144",
        y: "142",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "144",
        y: "142",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M166.611 183.199C156.337 183.199 148 174.869 148 164.599H140C140 179.292 151.924 191.199 166.611 191.199V183.199ZM185.223 164.599C185.223 174.869 176.886 183.199 166.611 183.199V191.199C181.299 191.199 193.223 179.292 193.223 164.599H185.223ZM166.611 146C176.886 146 185.223 154.33 185.223 164.599H193.223C193.223 149.906 181.299 138 166.611 138V146ZM166.611 138C151.924 138 140 149.906 140 164.599H148C148 154.33 156.337 146 166.611 146V138Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "72",
        y: "330",
        width: "44",
        height: "43",
        rx: "21.5",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "72",
        y: "330",
        width: "44",
        height: "43",
        rx: "21.5",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M93.5 334H94.5V326H93.5V334ZM94.5 369H93.5V377H94.5V369ZM93.5 369C83.835 369 76 361.165 76 351.5H68C68 365.583 79.4167 377 93.5 377V369ZM112 351.5C112 361.165 104.165 369 94.5 369V377C108.583 377 120 365.583 120 351.5H112ZM94.5 334C104.165 334 112 341.835 112 351.5H120C120 337.417 108.583 326 94.5 326V334ZM93.5 326C79.4167 326 68 337.417 68 351.5H76C76 341.835 83.835 334 93.5 334V326Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'extinctionRebellion',
  path: '/xr-belgium-legal',
  image: {
    width: 756,
    height: 756,
    transform: 'translate(0 -0.000269063) scale(0.00132275)',
    xlinkHref: '/static/images/new-home/extinction-rebellion-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "138",
        y: "260",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "138",
        y: "260",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M160.611 301.199C150.337 301.199 142 292.869 142 282.599H134C134 297.292 145.924 309.199 160.611 309.199V301.199ZM179.223 282.599C179.223 292.869 170.886 301.199 160.611 301.199V309.199C175.299 309.199 187.223 297.292 187.223 282.599H179.223ZM160.611 264C170.886 264 179.223 272.33 179.223 282.599H187.223C187.223 267.906 175.299 256 160.611 256V264ZM160.611 256C145.924 256 134 267.906 134 282.599H142C142 272.33 150.337 264 160.611 264V256Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "44",
        y: "504",
        width: "44",
        height: "43",
        rx: "21.5",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "44",
        y: "504",
        width: "44",
        height: "43",
        rx: "21.5",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M65.5 508H66.5V500H65.5V508ZM66.5 543H65.5V551H66.5V543ZM65.5 543C55.835 543 48 535.165 48 525.5H40C40 539.583 51.4167 551 65.5 551V543ZM84 525.5C84 535.165 76.165 543 66.5 543V551C80.5833 551 92 539.583 92 525.5H84ZM66.5 508C76.165 508 84 515.835 84 525.5H92C92 511.417 80.5833 500 66.5 500V508ZM65.5 500C51.4167 500 40 511.417 40 525.5H48C48 515.835 55.835 508 65.5 508V500Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'vue',
  path: '/vuejs',
  image: {
    width: 512,
    height: 512,
    transform: 'translate(0 -0.000269232) scale(0.00195312)',
    xlinkHref: '/static/images/new-home/vue-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "216.771",
        y: "364.76",
        width: "45.2229",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M239.382 405.959C229.107 405.959 220.771 397.629 220.771 387.36H212.771C212.771 402.053 224.695 413.959 239.382 413.959V405.959ZM257.994 387.36C257.994 397.629 249.657 405.959 239.382 405.959V413.959C254.07 413.959 265.994 402.053 265.994 387.36H257.994ZM239.382 368.76C249.657 368.76 257.994 377.09 257.994 387.36H265.994C265.994 372.666 254.07 360.76 239.382 360.76V368.76ZM239.382 360.76C224.695 360.76 212.771 372.666 212.771 387.36H220.771C220.771 377.09 229.107 368.76 239.382 368.76V360.76Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "53",
        y: "615",
        width: "44",
        height: "43",
        rx: "21.5",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M74.5 619H75.5V611H74.5V619ZM75.5 654H74.5V662H75.5V654ZM74.5 654C64.835 654 57 646.165 57 636.5H49C49 650.583 60.4167 662 74.5 662V654ZM93 636.5C93 646.165 85.165 654 75.5 654V662C89.5833 662 101 650.583 101 636.5H93ZM75.5 619C85.165 619 93 626.835 93 636.5H101C101 622.417 89.5833 611 75.5 611V619ZM74.5 611C60.4167 611 49 622.417 49 636.5H57C57 626.835 64.835 619 74.5 619V611Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'webpack',
  path: '/webpack',
  image: {
    width: 516,
    height: 516,
    transform: 'translate(0 -0.000269063) scale(0.00193798)',
    xlinkHref: '/static/images/new-home/webpack-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "500.221",
        y: "384.938",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M522.832 426.137C512.557 426.137 504.221 417.807 504.221 407.537H496.221C496.221 422.231 508.145 434.137 522.832 434.137V426.137ZM541.444 407.537C541.444 417.807 533.107 426.137 522.832 426.137V434.137C537.52 434.137 549.444 422.231 549.444 407.537H541.444ZM522.832 388.938C533.107 388.938 541.444 397.268 541.444 407.537H549.444C549.444 392.844 537.52 380.938 522.832 380.938V388.938ZM522.832 380.938C508.145 380.938 496.221 392.844 496.221 407.537H504.221C504.221 397.268 512.557 388.938 522.832 388.938V380.938Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "208",
        y: "587",
        width: "44",
        height: "44",
        rx: "22",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M230 627C220.059 627 212 618.941 212 609H204C204 623.359 215.641 635 230 635V627ZM248 609C248 618.941 239.941 627 230 627V635C244.359 635 256 623.359 256 609H248ZM230 591C239.941 591 248 599.059 248 609H256C256 594.641 244.359 583 230 583V591ZM230 583C215.641 583 204 594.641 204 609H212C212 599.059 220.059 591 230 591V583Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'babel',
  path: '/babel',
  image: {
    width: 512,
    height: 512,
    transform: 'translate(0 -0.000269063) scale(0.00195312)',
    xlinkHref: '/static/images/new-home/babel-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "338.711",
        y: "407.537",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M361.322 448.736C351.047 448.736 342.711 440.406 342.711 430.137H334.711C334.711 444.83 346.635 456.736 361.322 456.736V448.736ZM379.934 430.137C379.934 440.406 371.597 448.736 361.322 448.736V456.736C376.01 456.736 387.934 444.83 387.934 430.137H379.934ZM361.322 411.537C371.597 411.537 379.934 419.867 379.934 430.137H387.934C387.934 415.444 376.01 403.537 361.322 403.537V411.537ZM361.322 403.537C346.635 403.537 334.711 415.444 334.711 430.137H342.711C342.711 419.867 351.047 411.537 361.322 411.537V403.537Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "143",
        y: "631",
        width: "43",
        height: "43",
        rx: "21.5",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M164.5 670C154.835 670 147 662.165 147 652.5H139C139 666.583 150.417 678 164.5 678V670ZM182 652.5C182 662.165 174.165 670 164.5 670V678C178.583 678 190 666.583 190 652.5H182ZM164.5 635C174.165 635 182 642.835 182 652.5H190C190 638.417 178.583 627 164.5 627V635ZM164.5 627C150.417 627 139 638.417 139 652.5H147C147 642.835 154.835 635 164.5 635V627Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'nunheadKnocks',
  path: '/nunhead-knocks',
  image: {
    width: 400,
    height: 400,
    transform: 'translate(0 -0.000269232) scale(0.0025)',
    xlinkHref: '/static/images/new-home/nunhead-knocks-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "579.361",
        y: "34.6498",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M601.972 75.8483C591.697 75.8483 583.361 67.5183 583.361 57.249H575.361C575.361 71.9422 587.285 83.8483 601.972 83.8483V75.8483ZM620.584 57.249C620.584 67.5183 612.247 75.8483 601.972 75.8483V83.8483C616.66 83.8483 628.584 71.9422 628.584 57.249H620.584ZM601.972 38.6498C612.247 38.6498 620.584 46.9798 620.584 57.249H628.584C628.584 42.5559 616.66 30.6498 601.972 30.6498V38.6498ZM601.972 30.6498C587.285 30.6498 575.361 42.5559 575.361 57.249H583.361C583.361 46.9798 591.697 38.6498 601.972 38.6498V30.6498Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "148",
        y: "51",
        width: "43",
        height: "44",
        rx: "21.5",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M187 72.5V73.5H195V72.5H187ZM152 73.5V72.5H144V73.5H152ZM169.5 91C159.835 91 152 83.165 152 73.5H144C144 87.5833 155.417 99 169.5 99V91ZM187 73.5C187 83.165 179.165 91 169.5 91V99C183.583 99 195 87.5833 195 73.5H187ZM169.5 55C179.165 55 187 62.835 187 72.5H195C195 58.4167 183.583 47 169.5 47V55ZM169.5 47C155.417 47 144 58.4167 144 72.5H152C152 62.835 159.835 55 169.5 55V47Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'oxfordAid',
  path: '/oxford-mutual-aid',
  image: {
    width: 300,
    height: 190,
    transform: 'translate(-0.28905) scale(0.00526033)',
    xlinkHref: '/static/images/new-home/oxford-aid-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "761.867",
        y: "37.8783",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "761.867",
        y: "37.8783",
        width: "45.2228",
        height: "45.1985",
        rx: "22.5993",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M784.479 79.0768C774.204 79.0768 765.867 70.7468 765.867 60.4775H757.867C757.867 75.1707 769.791 87.0768 784.479 87.0768V79.0768ZM803.09 60.4775C803.09 70.7468 794.754 79.0768 784.479 79.0768V87.0768C799.166 87.0768 811.09 75.1707 811.09 60.4775H803.09ZM784.479 41.8783C794.754 41.8783 803.09 50.2083 803.09 60.4775H811.09C811.09 45.7844 799.166 33.8783 784.479 33.8783V41.8783ZM784.479 33.8783C769.791 33.8783 757.867 45.7844 757.867 60.4775H765.867C765.867 50.2083 774.204 41.8783 784.479 41.8783V33.8783Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "230",
        y: "4",
        width: "43",
        height: "43",
        rx: "21.5",
        fill: "white"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "230",
        y: "4",
        width: "43",
        height: "43",
        rx: "21.5",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M251.5 43C241.835 43 234 35.165 234 25.5H226C226 39.5833 237.417 51 251.5 51V43ZM269 25.5C269 35.165 261.165 43 251.5 43V51C265.583 51 277 39.5833 277 25.5H269ZM251.5 8C261.165 8 269 15.835 269 25.5H277C277 11.4167 265.583 0 251.5 0V8ZM251.5 0C237.417 0 226 11.4167 226 25.5H234C234 15.835 241.835 8 251.5 8V0Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'wordpress',
  path: '/wordpress',
  image: {
    width: 4096,
    height: 4096,
    transform: 'translate(0 -0.000268928) scale(0.000244141)',
    xlinkHref: '/static/images/new-home/wordpress-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "566.44",
        y: "307.455",
        width: "64.604",
        height: "64.5693",
        rx: "32.2846",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M598.742 368.024C583.118 368.024 570.44 355.358 570.44 339.74H562.44C562.44 359.782 578.706 376.024 598.742 376.024V368.024ZM627.044 339.74C627.044 355.358 614.366 368.024 598.742 368.024V376.024C618.779 376.024 635.044 359.782 635.044 339.74H627.044ZM598.742 311.455C614.366 311.455 627.044 324.121 627.044 339.74H635.044C635.044 319.697 618.779 303.455 598.742 303.455V311.455ZM598.742 303.455C578.706 303.455 562.44 319.697 562.44 339.74H570.44C570.44 324.121 583.118 311.455 598.742 311.455V303.455Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "213",
        y: "470",
        width: "62",
        height: "63",
        rx: "31",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M271 501V502H279V501H271ZM217 502V501H209V502H217ZM244 529C229.088 529 217 516.912 217 502H209C209 521.33 224.67 537 244 537V529ZM271 502C271 516.912 258.912 529 244 529V537C263.33 537 279 521.33 279 502H271ZM244 474C258.912 474 271 486.088 271 501H279C279 481.67 263.33 466 244 466V474ZM244 466C224.67 466 209 481.67 209 501H217C217 486.088 229.088 474 244 474V466Z",
        fill: "white"
      })]
    })]
  })
}, {
  id: 'oce',
  path: '/europe',
  image: {
    width: 366,
    height: 328,
    transform: 'translate(-0.0940322 -0.0371346) scale(0.00317229)',
    xlinkHref: '/static/images/new-home/oce-logo.png'
  },
  render: id => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-sm",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "721.49",
        y: "265.485",
        width: "64.6041",
        height: "64.5693",
        rx: "32.2847",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M753.792 326.054C738.168 326.054 725.49 313.388 725.49 297.77H717.49C717.49 317.812 733.755 334.054 753.792 334.054V326.054ZM782.094 297.77C782.094 313.388 769.416 326.054 753.792 326.054V334.054C773.829 334.054 790.094 317.812 790.094 297.77H782.094ZM753.792 269.485C769.416 269.485 782.094 282.151 782.094 297.77H790.094C790.094 277.727 773.829 261.485 753.792 261.485V269.485ZM753.792 261.485C733.755 261.485 717.49 277.727 717.49 297.77H725.49C725.49 282.151 738.168 269.485 753.792 269.485V261.485Z",
        fill: "white"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      className: "visible-xs",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        x: "235",
        y: "301",
        width: "62",
        height: "62",
        rx: "31",
        fill: `url(#${id})`
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M266 359C251.088 359 239 346.912 239 332H231C231 351.33 246.67 367 266 367V359ZM293 332C293 346.912 280.912 359 266 359V367C285.33 367 301 351.33 301 332H293ZM266 305C280.912 305 293 317.088 293 332H301C301 312.67 285.33 297 266 297V305ZM266 297C246.67 297 231 312.67 231 332H239C239 317.088 251.088 305 266 305V297Z",
        fill: "white"
      })]
    })]
  })
}];

const NetworkOfCollectives = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
    maxWidth: "100vw",
    overflowX: "hidden",
    position: "relative",
    children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      display: "inline-block",
      minWidth: "100%",
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: [0, '-50px', 0],
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledSvg, {
          as: "svg",
          width: ['320px', '890px'],
          height: ['724px', '489px'],
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            className: "visible-sm",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M237.767 384.938L387.164 340.547",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M113.404 74.1985L240.997 86.3052",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M241 86L161 167",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M262 236L159 287",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M491.338 184.773L261.993 236.429",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M494 186L421 57",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M658.501 167.017L784.479 61.2846",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M360.515 430.137L395.239 343.775",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M522.025 403.502L395.239 343.775",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M579.361 310.684L491.338 183.159",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M653.656 141.996L601.972 57.249",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M491.338 186.388L392.817 343.775",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M493.761 184.773L240.997 83.8839",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M493.761 183.159L661.731 163.788",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M491.338 184.773L752.177 296.155",
              stroke: "white",
              strokeWidth: "4"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            className: "visible-xs",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M81 637L148 549",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M44 301L85 240",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M81 240L94 352",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M113 427L66 526",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M201 225L116 433",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M201 223L85 240",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M203 224L85 120",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M253 127L254 26",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M165 653L156 552",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M230 609L172 552",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M237 468L201 222",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M257 120L170 73",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M201 225L160 547",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M203 222L257 120",
              stroke: "white",
              strokeWidth: "4"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M201 223L273 337",
              stroke: "white",
              strokeWidth: "4"
            })]
          }), collectives.map(({
            id,
            path,
            render,
            image
          }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: path,
              xlinkHref: path,
              children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                id: "logoContainer",
                children: render(id)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
              children: /*#__PURE__*/jsx_runtime_.jsx("pattern", {
                id: id,
                patternContentUnits: "objectBoundingBox",
                width: "1",
                height: "1",
                children: /*#__PURE__*/jsx_runtime_.jsx("image", _objectSpread({}, image))
              })
            })]
          }, id))]
        })
      })
    })
  });
};

NetworkOfCollectives.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NetworkOfCollectives"
};
/* harmony default export */ const home_NetworkOfCollectives = (NetworkOfCollectives);
;// CONCATENATED MODULE: ./components/home/OpenCollectiveIsSection.js














const OvalShapeWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "OpenCollectiveIsSection__OvalShapeWrapper",
  componentId: "sc-1tbfwfj-0"
})(["background-image:url('/static/images/new-home/oval-bg.svg');background-repeat:no-repeat;background-size:cover;border-bottom-right-radius:30px;border-bottom-left-radius:30px;background-position-x:center;"]);

const OpenCollectiveIs = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    mt: "48px",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
      px: "16px",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        width: ['288px', 1],
        mb: "135px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* SectionTitle */.NZ, {
          textAlign: "center",
          mb: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "home.OCIs",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective is"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Text/* SectionDescription */.TI, {
          textAlign: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "home.OCIs.description",
            defaultMessage: [{
              "type": 0,
              "value": "…an open finances platform for communities."
            }]
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OvalShapeWrapper, {
      minHeight: "500px",
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadiusTop: true,
      pb: "48px",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        top: "-87px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          width: "176px",
          height: "176px",
          backgroundColor: "white.full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          borderRadius: "100px",
          border: "4px solid",
          borderColor: "primary.900",
          children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
            width: 128,
            height: 128,
            src: "/static/images/new-home/opencollective-logo.png"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          width: ['288px', '588px', '760px'],
          textAlign: "center",
          mt: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
            letterSpacing: ['-0.008em', null, '-0.04em'],
            fontSize: ['24px', '32px', '40px'],
            lineHeight: ['32px', '40px', '48px'],
            textAlign: "center",
            color: "white.full",
            fontWeight: "700",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "N5fOog",
              defaultMessage: [{
                "type": 0,
                "value": "And a network of fiscal hosts that enable over 15,000 collectives around the world to spend and raise $35M a year."
              }]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        position: "relative",
        maxWidth: "100%",
        top: "-40px",
        children: /*#__PURE__*/jsx_runtime_.jsx(home_NetworkOfCollectives, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
        flexDirection: "column",
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          width: ['288px', 1],
          children: /*#__PURE__*/jsx_runtime_.jsx(components_Text.H3, {
            letterSpacing: ['-0.008em', null, '-0.04em'],
            fontSize: ['24px', '32px', '40px'],
            lineHeight: ['32px', '40px', '48px'],
            textAlign: "center",
            color: "white.full",
            mb: 4,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "fiscalHosting.applyToFiscalHost",
              defaultMessage: [{
                "type": 0,
                "value": "Apply to one of our Fiscal Hosts"
              }]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          display: [null, 'none'],
          width: "300px",
          children: /*#__PURE__*/jsx_runtime_.jsx(ApplyToFiscalHostSection/* ApplyToHostMobileCarousel */.H3, {
            color: "white.full"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          display: ['none', 'block'],
          width: "100%",
          children: /*#__PURE__*/jsx_runtime_.jsx(ApplyToFiscalHostSection/* ApplyToHostGrid */.a5, {
            color: "white.full"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
          as: Link/* default */.Z,
          buttonStyle: "standard",
          mt: "48px",
          mb: "64px",
          buttonSize: "medium",
          href: "/search?isHost=true",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "home.discoverMoreHome",
            defaultMessage: [{
              "type": 0,
              "value": "Discover More Hosts"
            }]
          })
        })]
      })]
    })]
  });
};

OpenCollectiveIs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OpenCollectiveIs"
};
/* harmony default export */ const OpenCollectiveIsSection = (OpenCollectiveIs);

/***/ }),

/***/ 59641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RaiseMoneySection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: external "@styled-icons/fa-solid/ArrowRight"
const ArrowRight_namespaceObject = require("@styled-icons/fa-solid/ArrowRight");
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(19099);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/collectives/HomeNextIllustration.js
var HomeNextIllustration = __webpack_require__(47667);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/marketing/Text.js
var Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var components_Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/home/RaiseMoneySection.js















const LinkContainer = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "RaiseMoneySection__LinkContainer",
  componentId: "sc-1immx5p-0"
})(["&:hover{background:", ";}"], (0,theme_get_.themeGet)('colors.primary.50'));
const LearnMoreLink = external_styled_components_default()(StyledLink/* default */.Z).withConfig({
  displayName: "RaiseMoneySection__LearnMoreLink",
  componentId: "sc-1immx5p-1"
})(["&:hover{color:", ";text-decoration-color:", ";}"], (0,theme_get_.themeGet)('colors.black.800'), (0,theme_get_.themeGet)('colors.primary.600'));
const StyledDescription = external_styled_components_default()(components_Text.P).withConfig({
  displayName: "RaiseMoneySection__StyledDescription",
  componentId: "sc-1immx5p-2"
})(["a{text-decoration-color:", ";}a:hover{color:", ";text-decoration-color:", ";}"], (0,theme_get_.themeGet)('colors.black.500'), (0,theme_get_.themeGet)('colors.black.800'), (0,theme_get_.themeGet)('colors.primary.600'));

const RaiseMoney = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    mt: "72px",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "100%",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        mb: "50px",
        px: "16px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* SectionTitle */.NZ, {
          textAlign: "center",
          mb: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "home.raiseMoney",
            defaultMessage: [{
              "type": 0,
              "value": "Raise money with full transparency"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Text/* SectionDescription */.TI, {
          textAlign: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "home.raiseMoney.description",
            defaultMessage: [{
              "type": 0,
              "value": "We do the paperwork so you can focus on your mission."
            }]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
        justifyContent: "center",
        width: "100vw",
        maxWidth: "100%",
        overflow: "hidden",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
          width: ['100vw', '768px', '1024px', null, '1280px'],
          height: ['495px', '256px', '347px'],
          display: [null, 'flex'],
          position: "relative",
          overflow: "hidden",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            width: ['181px', null, '250px'],
            left: ['0', '3%', '5%'],
            position: "absolute",
            top: [null, '20%'],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Link/* default */.Z, {
              href: "/climatesessions",
              children: [/*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: ['none', 'block'],
                width: 250,
                height: 168,
                src: "/static/images/new-home/team-picture-4.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: [null, 'none'],
                width: 373,
                height: 274,
                src: "/static/images/new-home/team-picture-4-xs.png"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            width: ['183px', null, '250px'],
            left: ['10%', '12%', '18%'],
            position: "absolute",
            top: ['30%', '50%'],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Link/* default */.Z, {
              href: "/fnb_raleigh",
              children: [/*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: ['none', 'block'],
                width: 250,
                height: 168,
                src: "/static/images/new-home/team-picture-5.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: [null, 'none'],
                width: 384,
                height: 277,
                src: "/static/images/new-home/team-picture-5-xs.png"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            width: ['174px', null, '250px'],
            right: ['0', '48%', '49%'],
            position: "absolute",
            top: ['5%', '0'],
            zIndex: "1",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Link/* default */.Z, {
              href: "/tiwaiwakanz",
              children: [/*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: [null, 'none'],
                width: 361,
                height: 304,
                src: "/static/images/new-home/team-picture-6-xs.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: ['none', 'block'],
                width: 250,
                height: 168,
                src: "/static/images/new-home/team-picture-6.png"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            width: ['106px', null, '250px'],
            left: ['0', '40%', '46%'],
            position: "absolute",
            bottom: ['25%', '0'],
            zIndex: "1",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Link/* default */.Z, {
              href: "/lovewins",
              children: [/*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: [null, 'none'],
                width: 235,
                height: 258,
                src: "/static/images/new-home/team-picture-7-xs.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: ['none', 'block'],
                width: 250,
                height: 168,
                src: "/static/images/new-home/team-picture-7.png"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            width: ['152px', null, '250px'],
            right: ['0', '24.5%'],
            position: "absolute",
            top: ['45%', '8%'],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Link/* default */.Z, {
              href: "/readingredkitchen",
              children: [/*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: [null, 'none'],
                width: 303,
                height: 262,
                src: "/static/images/new-home/team-picture-8-xs.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: ['none', 'block'],
                width: 250,
                height: 168,
                src: "/static/images/new-home/team-picture-8.png"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            width: ['228px', null, '250px'],
            bottom: ['0', '8%'],
            position: "absolute",
            left: ['20%', '66%', '70.5%'],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Link/* default */.Z, {
              href: "/the-light-inside-film",
              children: [/*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: [null, 'none'],
                width: 483,
                height: 333,
                src: "/static/images/new-home/team-picture-9-xs.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                display: ['none', 'block'],
                width: 250,
                height: 168,
                src: "/static/images/new-home/team-picture-9.png"
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        maxWidth: ['288px', '701px'],
        mt: "35px",
        px: "16px",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledDescription, {
          fontSize: ['18px', '20px'],
          letterSpacing: [null, '-0.008em'],
          lineHeight: ['26px', '28px'],
          textAlign: 'center',
          color: "black.800",
          fontWeight: "500",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "home.raiseMoney.description2",
            defaultMessage: [{
              "type": 0,
              "value": "Whether you're a "
            }, {
              "type": 8,
              "value": "mutualAidLink",
              "children": [{
                "type": 0,
                "value": "mutual aid group"
              }]
            }, {
              "type": 0,
              "value": ", a "
            }, {
              "type": 8,
              "value": "communityLink",
              "children": [{
                "type": 0,
                "value": "community initiative"
              }]
            }, {
              "type": 0,
              "value": ", an "
            }, {
              "type": 8,
              "value": "opensourceLink",
              "children": [{
                "type": 0,
                "value": "open-source software project"
              }]
            }, {
              "type": 0,
              "value": ", or a "
            }, {
              "type": 8,
              "value": "climateLink",
              "children": [{
                "type": 0,
                "value": "climate change activist"
              }]
            }, {
              "type": 0,
              "value": ", Open Collective helps groups unlock access to money."
            }],
            values: {
              u: I18nFormatters/* I18nUnderline */.lK,
              mutualAidLink: (0,I18nFormatters/* getI18nLink */.fw)({
                as: Link/* default */.Z,
                href: '/fnb_raleigh',
                textDecoration: 'underline',
                color: 'black.800'
              }),
              communityLink: (0,I18nFormatters/* getI18nLink */.fw)({
                as: Link/* default */.Z,
                href: '/lovewins',
                textDecoration: 'underline',
                color: 'black.800'
              }),
              opensourceLink: (0,I18nFormatters/* getI18nLink */.fw)({
                as: Link/* default */.Z,
                href: '/webpack',
                textDecoration: 'underline',
                color: 'black.800'
              }),
              climateLink: (0,I18nFormatters/* getI18nLink */.fw)({
                as: Link/* default */.Z,
                href: '/climatesessions',
                textDecoration: 'underline',
                color: 'black.800'
              })
            }
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        px: "16px",
        children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
          href: "/search?q=&type=COLLECTIVE",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkContainer, {
            mt: "72px",
            maxWidth: ['288px', '700px', '956px', null, '1200px'],
            padding: ['24px', '32px', '46px 56px'],
            border: "2px solid",
            borderColor: "primary.900",
            borderRadius: "16px",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
              maxWidth: [null, '572px', '756px', null, '1000px'],
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
                fontSize: ['24px', '32px', '40px'],
                lineHeight: ['32px', '40px', '48px'],
                letterSpacing: ['-0.008em', null, '-0.04em'],
                color: "primary.900",
                textAlign: "left",
                fontWeight: "700",
                mb: ['16px', '24px'],
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "home.stat",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Over 15,000 groups around the world raised and managed USD $35M last year"
                  }]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
              display: "flex",
              alignItems: ['center', 'flex-start'],
              justifyContent: "space-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
                maxWidth: ['184px', '572px', '756px'],
                children: /*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
                  fontSize: ['18px', '20px'],
                  letterSpacing: [null, '-0.008em'],
                  lineHeight: ['26px', '28px'],
                  textAlign: "left",
                  color: "black.800",
                  fontWeight: "500",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                    id: "home.stat.checkout",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Check out these amazing Collectives and connect with them."
                    }]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(ArrowRight_namespaceObject.ArrowRight, {
                size: '40px',
                color: "#0C2D66"
              })]
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      alignItems: "center",
      mt: "72px",
      px: "16px",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "center",
        flexDirection: ['column', 'row'],
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          width: ['288px', '338px', '478px', null, '558px'],
          mr: [null, '24px'],
          children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
            width: 558,
            height: 418,
            src: "/static/images/new-home/fiscal-hosting-illustration.png",
            alt: "Fiscal hosting"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_Text.H3, {
            fontSize: ['24px', '32px', '40px'],
            lineHeight: ['32px', '40px', '48px'],
            letterSpacing: ['-0.008em', null, '-0.04em'],
            color: "primary.900",
            fontWeight: "700",
            textDecoration: [null, null, 'underline'],
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "fiscalHosting",
              defaultMessage: [{
                "type": 0,
                "value": "Fiscal hosting"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
            maxWidth: ['288px', '338px', '478px'],
            mt: ['16px', '24px'],
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
              fontSize: ['15px', '18px', '20px'],
              lineHeight: ['22px', '26px', '28px'],
              fontWeight: "500",
              color: "black.800",
              letterSpacing: [null, null, '-0.008em'],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "home.fiscalHosting.description",
                defaultMessage: [{
                  "type": 0,
                  "value": "Operate under the umbrella of an established legal entity, so you don’t have to incorporate your own. A Host can take care of accounting, taxes, banking, and non-profit status."
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(LearnMoreLink, {
              as: Link/* default */.Z,
              textDecoration: "underline",
              color: "black.800",
              href: "/fiscal-hosting",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
                mt: "24px",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "yOzWJD",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Learn more about fiscal hosting"
                  }]
                })
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "center",
        flexDirection: ['column', 'row-reverse'],
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          width: ['288px', '338px', '478px', null, '558px'],
          mr: [null, '24px'],
          children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
            width: 558,
            height: 418,
            src: "/static/images/new-home/shared-account-illustration.png",
            alt: "Fiscal hosting"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_Text.H3, {
            fontSize: ['24px', '32px', '40px'],
            lineHeight: ['32px', '40px', '48px'],
            letterSpacing: ['-0.008em', null, '-0.04em'],
            color: "primary.900",
            fontWeight: "700",
            textDecoration: [null, null, 'underline'],
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "home.sharedAccount",
              defaultMessage: [{
                "type": 0,
                "value": "Shared account"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
            maxWidth: ['288px', '338px', '478px'],
            mt: ['16px', '24px'],
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
              fontSize: ['15px', '18px', '20px'],
              lineHeight: ['22px', '26px', '28px'],
              fontWeight: "500",
              color: "black.800",
              letterSpacing: [null, null, '-0.008em'],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "home.sharedAccount.description",
                defaultMessage: [{
                  "type": 0,
                  "value": "Manage your budget together. Transparency builds trust and accountability, and no individual has to take on all the responsibility."
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(LearnMoreLink, {
              as: Link/* default */.Z,
              textDecoration: "underline",
              color: "black.800",
              href: "/collectives",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
                mt: "24px",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "yKF8y5",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Learn more about creating a Collective"
                  }]
                })
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
        justifyContent: "center",
        flexDirection: ['column', 'row'],
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          width: ['288px', '338px', '478px', null, '558px'],
          mr: [null, '24px'],
          children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
            width: 558,
            height: 418,
            src: "/static/images/new-home/powerfulTool-illustration.png",
            alt: "Fiscal hosting"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          textAlign: ['center', 'left'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_Text.H3, {
            fontSize: ['24px', '32px', '40px'],
            lineHeight: ['32px', '40px', '48px'],
            letterSpacing: ['-0.008em', null, '-0.04em'],
            color: "primary.900",
            fontWeight: "700",
            textDecoration: [null, null, 'underline'],
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "home.powerfulMoneyTools",
              defaultMessage: [{
                "type": 0,
                "value": "Powerful money tools"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
            maxWidth: ['288px', '338px', '478px'],
            mt: ['16px', '24px'],
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
              fontSize: ['15px', '18px', '20px'],
              lineHeight: ['22px', '26px', '28px'],
              fontWeight: "500",
              color: "black.800",
              letterSpacing: [null, null, '-0.008em'],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "home.powerfulMoneyTools.description",
                defaultMessage: [{
                  "type": 0,
                  "value": "Pay expenses, receive donations, manage grants, sell event tickets, get a virtual card linked to your balance, and more!"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(LearnMoreLink, {
              as: Link/* default */.Z,
              textDecoration: "underline",
              color: "black.800",
              href: "/how-it-works",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Text.P, {
                mt: "24px",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "sgLhGq",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Learn more about how the platform works"
                  }]
                })
              })
            })]
          })]
        })]
      })]
    })]
  });
};

RaiseMoney.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RaiseMoney"
};
/* harmony default export */ const RaiseMoneySection = (RaiseMoney);

/***/ }),

/***/ 24559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_RightArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17569);
/* harmony import */ var _styled_icons_boxicons_regular_RightArrow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_RightArrow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















const TheFutureIsCollective = () => {
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      justifyContent: "center",
      alignItems: "center",
      px: "16px",
      mt: "40px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_8__/* .MainTitle */ .U3, {
            fontSize: ['52px', '64px', '72px'],
            lineHeight: ['56px', '80px', '88px'],
            letterSpacing: ['-0.04em', '0.012em', null],
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "home.futureIsCollective",
              defaultMessage: [{
                "type": 0,
                "value": "The future is collective"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          my: [4, '40px'],
          maxWidth: ['288px', '608px', '768px', null, '896px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_8__/* .MainDescription */ .WC, {
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "home.futureIsCollective.description",
              defaultMessage: [{
                "type": 0,
                "value": "Open Collective is a "
              }, {
                "type": 8,
                "value": "b",
                "children": [{
                  "type": 0,
                  "value": "legal and financial"
                }]
              }, {
                "type": 0,
                "value": " toolbox for grassroots groups. It’s a "
              }, {
                "type": 8,
                "value": "b",
                "children": [{
                  "type": 0,
                  "value": "fundraising + legal status + money management"
                }]
              }, {
                "type": 0,
                "value": " platform for your community. What do you want to do?"
              }],
              values: {
                b: _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* .I18nBold */ .Gl
              }
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          mb: "40px",
          display: "flex",
          flexDirection: ['column', 'row'],
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            href: "/create",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              minWidth: ['288px', '125px'],
              my: ['12px', null, 0],
              mr: [0, '24px'],
              buttonStyle: "marketing",
              whiteSpace: "nowrap",
              backgroundColor: "primary.900",
              fontSize: "16px",
              lineHeight: "20px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.startNow",
                defaultMessage: [{
                  "type": 0,
                  "value": "Start Now"
                }]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            onClick: () => setShowModal(true),
            my: ['12px', null, 0],
            minWidth: ['288px', '196px'],
            fontSize: "16px",
            lineHeight: "20px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
              mr: '14px',
              textDecoration: "underline",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.makeCommunitySection.watchVideo",
                defaultMessage: [{
                  "type": 0,
                  "value": "Watch Video"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
              className: "arrowIcon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_boxicons_regular_RightArrow__WEBPACK_IMPORTED_MODULE_1__.RightArrow, {
                size: "15"
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: [null, 'none'],
          width: 320,
          height: 589,
          alt: "The future is collective.",
          src: "/static/images/new-home/budget-illustration-mobile.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: ['none', 'block', 'none'],
          width: 768,
          height: 431,
          alt: "The future is collective.",
          src: "/static/images/new-home/budget-illustration.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: ['none', null, 'block', null, 'none'],
          width: 978,
          height: 610,
          alt: "The future is collective.",
          src: "/static/images/new-home/budget-illustration.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: ['none', null, null, null, 'block'],
          width: 1014,
          height: 619,
          alt: "The future is collective.",
          src: "/static/images/new-home/budget-illustration.png"
        })]
      })
    }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
      padding: "0",
      background: "transparent",
      width: [1, null, '670px', null, '770px'],
      onClose: () => setShowModal(false),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        display: "flex",
        width: 1,
        height: 400,
        maxWidth: 712,
        background: "black",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("iframe", {
          title: "YouTube video",
          width: "100%",
          height: "400px",
          src: "https://www.youtube-nocookie.com/embed/IBU5fSILAe8",
          frameBorder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })
      })
    })]
  });
};

TheFutureIsCollective.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TheFutureIsCollective"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheFutureIsCollective);

/***/ }),

/***/ 9131:
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
/* harmony import */ var _components_home_CollaborateWithMoneySection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19046);
/* harmony import */ var _components_home_DedicatedTeamSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4610);
/* harmony import */ var _components_home_GetToKnowUsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36023);
/* harmony import */ var _components_home_OpenCollectiveIsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50941);
/* harmony import */ var _components_home_RaiseMoneySection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59641);
/* harmony import */ var _components_home_TheFutureIsCollectiveSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24559);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_9__]);
_components_Page__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

 // import Banner from '../components/collectives/Banner';











const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  defaultTitle: {
    id: "TZ9FXt",
    defaultMessage: [{
      "type": 0,
      "value": "Raise and spend money with full transparency."
    }]
  },
  defaultDescription: {
    id: "LrBotK",
    defaultMessage: [{
      "type": 0,
      "value": "Open Collective is a legal and financial toolbox for groups. It’s a fundraising + legal status + money management platform for your community. What do you want to do?"
    }]
  }
});

const HomePage = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    metaTitle: formatMessage(messages.defaultTitle),
    title: formatMessage(messages.defaultTitle),
    description: formatMessage(messages.defaultDescription),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_home_TheFutureIsCollectiveSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_home_RaiseMoneySection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_home_OpenCollectiveIsSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_home_CollaborateWithMoneySection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_home_DedicatedTeamSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_home_GetToKnowUsSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {})]
  });
};

HomePage.getInitialProps = ({
  req,
  res
}) => {
  if (res && req && (req.language || req.locale === 'en')) {
    res.set('Cache-Control', 'public, s-maxage=3600');
  }

  let skipDataFromTree = false; // If on server side

  if (req) {
    skipDataFromTree = true;
  }

  return {
    skipDataFromTree
  };
};

HomePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ req, res }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "HomePage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
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

/***/ 17569:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/RightArrow");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7667,5106,5842,8355,4515,4072], () => (__webpack_exec__(9131)));
module.exports = __webpack_exports__;

})();