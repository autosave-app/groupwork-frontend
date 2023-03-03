"use strict";
exports.id = 5751;
exports.ids = [5751];
exports.modules = {

/***/ 69194:
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
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29925);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47667);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu).withConfig({
  displayName: "LearnMore__IconWrapper",
  componentId: "sc-up6kkt-0"
})(["display:flex;justify-content:center;align-items:center;width:56px;height:56px;@media screen and (min-width:88em){width:56px;height:56px;}"]);
const DonateButtonBGHover = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.attrs({
  src: '/static/images/home/donateButton-bg-withStar.png'
}).withConfig({
  displayName: "LearnMore__DonateButtonBGHover",
  componentId: "sc-up6kkt-1"
})(["position:absolute;z-index:-1;width:100%;height:100%;opacity:0;transition:opacity 0.2s;"]);
const DonateButtonBG = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.attrs({
  src: '/static/images/home/donateButton-bg.png'
}).withConfig({
  displayName: "LearnMore__DonateButtonBG",
  componentId: "sc-up6kkt-2"
})(["position:absolute;z-index:-1;width:100%;height:100%;"]);
const DonateButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu).withConfig({
  displayName: "LearnMore__DonateButtonWrapper",
  componentId: "sc-up6kkt-3"
})(["pointer-events:none;display:flex;align-items:center;justify-content:center;position:relative;&:hover{", "{opacity:1;animation:", " 1s infinite;animation-delay:0.2s;}}"], DonateButtonBGHover, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_7__/* .flicker */ .Uh)({
  minOpacity: 0.7
}));
const DonateButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "LearnMore__DonateButton",
  componentId: "sc-up6kkt-4"
})(["pointer-events:auto;"]);
const learningChannels = [{
  id: 'slack',
  name: 'Slack',
  link: 'https://slack.opencollective.com',
  desktopItemOrder: 2
}, {
  id: 'documentation',
  name: 'Documentation',
  link: 'https://docs.opencollective.com',
  desktopItemOrder: 1
}, {
  id: 'openSourceCode',
  name: 'Open Source code',
  link: 'https://github.com/opencollective/opencollective',
  desktopItemOrder: 4
}, {
  id: 'blog',
  name: 'Blog',
  link: 'https://blog.opencollective.com',
  desktopItemOrder: 3
}, {
  id: 'openFinances',
  name: 'Open Finances',
  link: 'https://opencollective.com/opencollective',
  desktopItemOrder: 5
}, {
  id: 'openCompany',
  name: 'Open Company',
  link: 'https://drive.opencollective.com',
  desktopItemOrder: 6
}];
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  'home.learnMore.documentation': {
    id: "home.learnMore.documentation",
    defaultMessage: [{
      "type": 0,
      "value": "Support your community with fundholding and fiscal sponsorship services."
    }]
  },
  'home.learnMore.documentation.buttonText': {
    id: "home.learnMore.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "View our documentation"
    }]
  },
  'home.learnMore.blog': {
    id: "home.learnMore.blog",
    defaultMessage: [{
      "type": 0,
      "value": "Case studies, news, and how groups around the world use Open Collective."
    }]
  },
  'home.learnMore.blog.buttonText': {
    id: "home.learnMore.blog.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "Visit our blog"
    }]
  },
  'home.learnMore.slack': {
    id: "home.learnMore.slack",
    defaultMessage: [{
      "type": 0,
      "value": "Come meet the team, chat with the community, and share your questions and stories."
    }]
  },
  'home.learnMore.slack.buttonText': {
    id: "home.learnMore.slack.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "Join our slack"
    }]
  },
  'home.learnMore.openSourceCode': {
    id: "home.learnMore.OpenSourceCode",
    defaultMessage: [{
      "type": 0,
      "value": "Our code is open source. You can contribute! Check it out on GitHub."
    }]
  },
  'home.learnMore.openSourceCode.buttonText': {
    id: "home.learnMore.openSourceCode.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "See our code base"
    }]
  },
  'home.learnMore.openFinances': {
    id: "home.learnMore.openFinances",
    defaultMessage: [{
      "type": 0,
      "value": "We operate as an Open Collective ourselves, with transparent budgets."
    }]
  },
  'home.learnMore.openFinances.buttonText': {
    id: "home.learnMore.openFinances.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "See our Collectives"
    }]
  },
  'home.learnMore.openCompany': {
    id: "home.learnMore.openCompany",
    defaultMessage: [{
      "type": 0,
      "value": "Our metrics, financials, and other documents are public."
    }]
  },
  'home.learnMore.openCompany.buttonText': {
    id: "home.learnMore.openCompany.buttonText",
    defaultMessage: [{
      "type": 0,
      "value": "See our public company"
    }]
  }
});

const LearnMore = ({
  page
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    mx: [3, 4],
    my: 4,
    display: [null, 'flex'],
    flexDirection: [null, 'column'],
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      width: [null, '650px', '704px', null, '1150px'],
      display: "flex",
      flexDirection: ['column', 'row'],
      alignItems: ['center', null, null, null, 'baseline'],
      my: 4,
      ml: [3, 0],
      flexWrap: [null, 'wrap'],
      justifyContent: "space-between",
      children: learningChannels.map(channel => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          my: [2, null, null, null, 4],
          order: [null, channel.desktopItemOrder],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(IconWrapper, {
            my: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              width: 60,
              height: 60,
              src: `/static/images/home/${channel.id}-illustration.png`,
              alt: `${channel.id} illustration`
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
            width: ['288px', '306px', null, null, '289px'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H3, {
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: "-0.6px",
              mb: 2,
              color: "black.800",
              children: channel.name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
              color: ['black.700', 'black.600', 'black.700'],
              fontSize: ['15px', '16px', null, null, '18px'],
              lineHeight: ['23px', '24px', null, null, '27px'],
              letterSpacing: ['-0.12px', '-0.16px'],
              mb: 3,
              children: intl.formatMessage(messages[`home.learnMore.${channel.id}`])
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              href: channel.link,
              color: page === 'e2c' ? 'ocBrands.600' : '#DC5F7D',
              fontSize: "15px",
              lineHeight: "23px",
              letterSpacing: "-0.12px",
              my: 2,
              children: [intl.formatMessage(messages[`home.learnMore.${channel.id}.buttonText`]), "\xA0\u2192"]
            })]
          })]
        })
      }, channel.id))
    }), page !== 'e2c' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '332px', null, null, '360px'],
        textAlign: ['center', 'left'],
        mr: [null, 4],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H3, {
          color: "primary.900",
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "-0.12px",
          my: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "home.contributeToPlatform",
            defaultMessage: [{
              "type": 0,
              "value": "Contribute to the platform!"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
          color: "black.700",
          fontSize: "18px",
          lineHeight: "27px",
          letterSpacing: "-0.2px",
          my: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "home.contributeToPlatform.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective is free for charitable initiatives. We rely on generosity of contributors like you to make this possible."
            }]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(DonateButtonWrapper, {
        width: "287px",
        height: "300px",
        my: 3,
        ml: [null, 4],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(DonateButtonBG, {
          alt: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(DonateButtonBGHover, {
          alt: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          href: "/opencollective/donate",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(DonateButton, {
            buttonStyle: "marketing",
            minWidth: 97,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "home.donate",
              defaultMessage: [{
                "type": 0,
                "value": "Donate"
              }]
            })
          })
        })]
      })]
    })]
  });
};

LearnMore.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LearnMore",
  "props": {
    "page": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearnMore);

/***/ }),

/***/ 67712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65106);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47667);
/* harmony import */ var _SectionSubtitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74655);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const WeAreOpen = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
  display: "flex",
  flexDirection: ['column', 'row'],
  alignItems: "center",
  justifyContent: "center",
  mx: [3, 4],
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    width: [1, '392px', null, null, '657px'],
    mr: [null, 2, 5],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      textAlign: ['center', 'left'],
      width: ['288px', 1],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitle */ .NZ, {
        mb: 3,
        color: "black.800",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "home.weAreOpenSection.title",
          defaultMessage: [{
            "type": 0,
            "value": "We are open in every way"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      display: ['block', 'none'],
      my: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        width: 224,
        height: 144,
        src: "/static/images/home/weareopen-illustration-md.png",
        alt: "We are open in every way"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      my: 2,
      width: ['288px', 1],
      textAlign: ['center', 'left'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SectionSubtitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        color: ['black.600', 'black.700'],
        fontSize: ['16px', '20px'],
        lineHeight: ['24px', '28px'],
        letterSpacing: ['-0.16px', '-0.6px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "home.weAreOpenSection.subtitle",
          defaultMessage: [{
            "type": 0,
            "value": "We not only help you be transparent, we are too!"
          }]
        })
      })
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    display: ['none', 'block'],
    width: ['224px', null, null, null, '336px'],
    height: ['144px', null, null, null, '216px'],
    my: 5,
    ml: [null, null, 5],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      width: 336,
      height: 216,
      src: "/static/images/home/weareopen-illustration-md.png",
      alt: "We are open in every way"
    })
  })]
});

WeAreOpen.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WeAreOpen"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeAreOpen);

/***/ })

};
;