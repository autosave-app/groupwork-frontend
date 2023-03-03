"use strict";
(() => {
var exports = {};
exports.id = 8655;
exports.ids = [8655];
exports.modules = {

/***/ 48155:
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
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29925);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.attrs({
  src: '/static/images/home/create-collective-bg-illustration.png'
}).withConfig({
  displayName: "CreateCollective__BackgroundImage",
  componentId: "sc-k1qmyl-0"
})(["position:absolute;z-index:-1;width:100%;height:100%;"]);
const BackgroundImageHover = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.attrs({
  src: '/static/images/home/create-collective-bg-illustration-hover.png'
}).withConfig({
  displayName: "CreateCollective__BackgroundImageHover",
  componentId: "sc-k1qmyl-1"
})(["position:absolute;z-index:-1;width:100%;height:100%;opacity:0;transition:opacity 0.2s;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu).withConfig({
  displayName: "CreateCollective__Wrapper",
  componentId: "sc-k1qmyl-2"
})(["position:relative;display:flex;align-items:center;justify-content:center;pointer-events:none;&:hover{", "{opacity:1;animation:", " 1s infinite;animation-delay:0.2s;}}"], BackgroundImageHover, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_6__/* .flicker */ .Uh)({
  minOpacity: 0.7
}));
const CreateCollectiveButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "CreateCollective__CreateCollectiveButton",
  componentId: "sc-k1qmyl-3"
})(["pointer-events:auto;"]);

const CreateCollective = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    mx: [3, 4],
    mt: [5, null, 2, null, 5],
    mb: [4, null, null, null, 5],
    display: "none",
    flexDirection: ['column', 'row'],
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      width: ['288px', '325px'],
      my: 2,
      textAlign: ['center', 'left'],
      mr: [null, 2],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H4, {
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "-0.8px",
        fontWeight: "bold",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "home.whatCanYouDoSection.areYouReady",
          defaultMessage: [{
            "type": 0,
            "value": "Are you ready to make your community sustainable?"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Wrapper, {
      width: ['288px', '283px'],
      height: ['288px', '294px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(BackgroundImage, {
        alt: ""
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(BackgroundImageHover, {
        alt: ""
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: "/create",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(CreateCollectiveButton, {
          buttonStyle: "dark",
          minWidth: '164px',
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

CreateCollective.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateCollective"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCollective);

/***/ }),

/***/ 23044:
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
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47667);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
















const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "FiscalHost__Wrapper",
  componentId: "sc-1bdtsnf-0"
})(["background-image:url('/static/images/home/fiscalhost-blue-bg-sm.png');background-size:100% 100%;@media screen and (min-width:52em){background-image:url('/static/images/home/fiscalhost-blue-bg-md.png');background-size:100% 100%;}@media screen and (min-width:88em){background-image:url('/static/images/home/fiscalhost-blue-bg-lg.png');background-size:100% 100%;}"]);
const LineBreak = styled_components__WEBPACK_IMPORTED_MODULE_3___default().br.withConfig({
  displayName: "FiscalHost__LineBreak",
  componentId: "sc-1bdtsnf-1"
})(["", ""], styled_system__WEBPACK_IMPORTED_MODULE_4__.display);
const FiscalHostCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "FiscalHost__FiscalHostCard",
  componentId: "sc-1bdtsnf-2"
})(["width:288px;height:160px;border:1px solid #e8e9eb;box-sizing:border-box;border-radius:8px;background:#fff;display:flex;flex-direction:column;align-items:flex-start;padding:10px 12px;@media screen and (min-width:40em){width:208px;height:226px;}@media screen and (min-width:64em){width:408px;height:96px;flex-direction:row;align-items:center;padding:12px 15px;}", ""], styled_system__WEBPACK_IMPORTED_MODULE_4__.background);
const DiscoverLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
  displayName: "FiscalHost__DiscoverLink",
  componentId: "sc-1bdtsnf-3"
})(["&:hover{color:#1a1e43;text-decoration:underline !important;}"]);
const CollectHostPageLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).withConfig({
  displayName: "FiscalHost__CollectHostPageLink",
  componentId: "sc-1bdtsnf-4"
})(["color:#141414;&:hover{text-decoration:underline !important;color:#141414;}"]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  OCF: {
    id: "OCF.description",
    defaultMessage: [{
      "type": 0,
      "value": "For US charity initiatives"
    }]
  },
  OSC: {
    id: "OSC.description",
    defaultMessage: [{
      "type": 0,
      "value": "For open source projects"
    }]
  },
  OCE: {
    id: "OCE.description",
    defaultMessage: [{
      "type": 0,
      "value": "For EU-based groups"
    }]
  }
});
const featuredHosts = [{
  id: 'OCF',
  name: 'Open Collective Foundation',
  collectivePageLink: '/foundation',
  imageUrl: 'https://images.opencollective.com/foundation/a7d522f/logo/256.png'
}, {
  id: 'OSC',
  name: 'Open Source Collective',
  collectivePageLink: '/opensource',
  imageUrl: 'https://images.opencollective.com/opensource/426badd/logo/256.png'
}, {
  id: 'OCE',
  name: 'Open Collective Europe',
  collectivePageLink: '/europe',
  imageUrl: 'https://images.opencollective.com/europe/019a512/logo/256.png'
}];

const FiscalHost = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(Wrapper, {
    mb: 5,
    pt: 4,
    mt: [null, null, null, null, 7],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      mx: [3, 4],
      flexDirection: "column",
      alignItems: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        flexDirection: ['column', null, null, 'row'],
        alignItems: "center",
        justifyContent: [null, null, 'space-around', null, 'center'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          color: "black.900",
          mr: [null, null, 3, null, 4],
          ml: [null, null, null, null, 4],
          alignItems: ['center', null, null, null, 'flex-start'],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            width: ['268px', '576px', null, '456px', '657px'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_9__/* .SectionTitle */ .NZ, {
              textAlign: ['center', null, 'left'],
              display: [null, null, null, null, 'none'],
              mt: [5, null, null, 0],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.fiscalHostSection.title",
                defaultMessage: [{
                  "type": 0,
                  "value": "Do you need a Fiscal Host for your community?"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_9__/* .SectionTitle */ .NZ, {
              display: ['none', null, null, null, 'block'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.fiscalHostSection.title.xl",
                defaultMessage: [{
                  "type": 0,
                  "value": "Do you need a Fiscal Host?"
                }]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            width: ['288px', '477px', null, '456px', '444px'],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_marketing_Text__WEBPACK_IMPORTED_MODULE_9__/* .SectionDescription */ .TI, {
              textAlign: ['center', null, 'left'],
              display: [null, null, null, null, 'none'],
              mt: 3,
              mb: [2, 3],
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.fiscalHostSection.explanation1",
                defaultMessage: [{
                  "type": 0,
                  "value": "Are you looking for somewhere to hold and distribute money for your project?"
                }]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(LineBreak, {
                display: [null, 'none']
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(LineBreak, {
                display: [null, 'none', 'block']
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__/* .Span */ .Dr, {
                children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "home.fiscalHostSection.weCanHelp",
                  defaultMessage: [{
                    "type": 0,
                    "value": "We can help!"
                  }]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_9__/* .SectionDescription */ .TI, {
              display: ['none', null, null, null, 'block'],
              color: "black.800",
              mt: 3,
              mb: [2, 4],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.fiscalHostSection.explanation2",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Hosts handle banking, taxes, accounting, legal, liability, and payments for you."
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          flexDirection: "column",
          mt: 3,
          width: 1,
          ml: [null, null, 3, null, 5],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.H5, {
            display: [null, null, null, null, 'none'],
            my: 2,
            textAlign: "left",
            color: "black.900",
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.6px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "home.OC.fiscalHosts",
              defaultMessage: [{
                "type": 0,
                "value": "These are our Fiscal Hosts:"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.H5, {
            display: ['none', null, null, null, 'block'],
            my: 2,
            textAlign: "left",
            color: "black.800",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "-0.6px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "home.OC.fiscalHosts.xl",
              defaultMessage: [{
                "type": 0,
                "value": "Find the right Fiscal Host for you:"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            display: "flex",
            flexDirection: ['column', 'row', null, 'column'],
            children: featuredHosts.map(host => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(FiscalHostCard, {
              mx: [null, 2, null, 0],
              my: 2,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                width: ['48px', null, null, '72px'],
                height: ['48px', null, null, '72px'],
                my: 2,
                mr: [null, null, null, 3],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                  src: host.imageUrl,
                  name: host.name,
                  backgroundColor: "transparent"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                display: [null, null, null, 'flex'],
                flexDirection: [null, null, null, 'column'],
                width: [1, null, null, '292px'],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(CollectHostPageLink, {
                  as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                  href: host.collectivePageLink,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.H3, {
                    fontSize: "20px",
                    lineHeight: "28px",
                    letterSpacing: "-0.6px",
                    children: host.name
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: ['space-between', null, null, 'normal'],
                  width: 1,
                  mt: [null, 3, null, 1],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.1px",
                    color: "black.800",
                    fontWeight: "500",
                    mr: [null, null, null, 3],
                    children: intl.formatMessage(messages[host.id])
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
                    my: [3, null, null, 0],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                      as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                      href: `${host.collectivePageLink}/apply`,
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      lineHeight: "21px",
                      letterSpacing: "-0.1px",
                      color: "#DC5F7D",
                      fontWeight: "500",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                        id: "home.fiscalHostSection.apply",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Apply "
                        }, {
                          "type": 1,
                          "value": "arrowIcon"
                        }],
                        values: {
                          arrowIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
                            size: "14"
                          })
                        }
                      })
                    })
                  })]
                })]
              })]
            }, host.id))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            my: 2,
            alignSelf: [null, 'center', null, 'flex-start'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(DiscoverLink, {
              as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
              href: "/search?isHost=true",
              fontSize: "15px",
              lineHeight: "23px",
              letterSpacing: "-0.12px",
              color: "#1A1E43",
              fontWeight: "500",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.fiscalHostSection.discoverMore",
                defaultMessage: [{
                  "type": 0,
                  "value": "Discover more "
                }, {
                  "type": 1,
                  "value": "arrowIcon"
                }],
                values: {
                  arrowIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
                    size: "15"
                  })
                }
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      mt: 4,
      p: 2,
      backgroundColor: "rgba(49, 50, 51, 0.6)",
      justifyContent: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        alignItems: "center",
        justifyContent: ['space-around', null, null, null, 'flex-start'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          width: ['72px', '81px'],
          height: ['48px', '54px'],
          ml: [null, null, null, null, 5],
          mr: [3, null, null, 4],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            width: 81,
            height: 54,
            src: "/static/images/home/umbrella-Illustration.png",
            alt: "Umbrella"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          display: ['block', 'flex'],
          alignItems: [null, 'center'],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            display: [null, null, 'flex'],
            mr: [null, 3],
            alignItems: [null, null, 'center'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.H3, {
              my: 2,
              mr: [null, null, 3],
              fontSize: ['20px', null, '24px'],
              lineHeight: ['28px', null, '32px'],
              letterSpacing: ['-0.6px', null, '-0.8px'],
              color: "white.full",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.becomeFiscalHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Become a Fiscal Host"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
              width: ['197px', '322px', null, '462px'],
              ml: [null, null, 3],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
                mb: 2,
                fontSize: ['13px', null, '14px'],
                lineHeight: ['19px', null, '21px'],
                letterSpacing: ['-0.08px', null, '-0.1px'],
                color: "white.full",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "home.learnMore.documentation",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Support your community with fundholding and fiscal sponsorship services."
                  }]
                })
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            openInNewTab: true,
            href: "https://docs.opencollective.com/help/fiscal-hosts/become-a-fiscal-host",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              my: 2,
              ml: [null, 3],
              border: "1px solid #C4C7CC",
              padding: "12px 20px",
              borderRadius: "100px",
              color: "black.700",
              whiteSpace: "nowrap",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.knowMore",
                defaultMessage: [{
                  "type": 0,
                  "value": "Know more"
                }]
              })
            })
          })]
        })]
      })
    })]
  });
};

FiscalHost.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FiscalHost"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiscalHost);

/***/ }),

/***/ 90443:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71792);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47667);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














const SustainTextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr).withConfig({
  displayName: "MakeCommunity__SustainTextWrapper",
  componentId: "sc-8xc843-0"
})(["background-image:url('/static/images/home/sustain-underline-sm.png');background-repeat:no-repeat;background-size:cover;background-position-y:10px;background-position-x:-12px;padding-right:12px;@media screen and (min-width:64em){background-image:url('/static/images/home/sustain-underline.png');background-repeat:no-repeat;background-size:cover;background-position-y:16px;background-position-x:-12px;}"]);

const MakeCommunity = () => {
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      mx: [3, 4],
      my: [null, 4, 5],
      flexDirection: ['column-reverse', 'row'],
      alignItems: ['center', 'flex-start', null, null, 'center'],
      justifyContent: [null, 'center'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: ['center', 'flex-start'],
        mr: [null, null, null, null, 3],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          width: [null, null, '458px', null, '558px'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .MainTitle */ .U3, {
            my: [3, null, 3],
            textAlign: ['center', 'left'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.makeCommunitySection.title.makeYourCommunity",
                defaultMessage: [{
                  "type": 0,
                  "value": "Make your community "
                }, {
                  "type": 1,
                  "value": "sustainable"
                }],
                values: {
                  sustainable: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(SustainTextWrapper, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                      id: "home.makeCommunitySection.title.sustain",
                      defaultMessage: [{
                        "type": 0,
                        "value": "sustainable"
                      }]
                    })
                  })
                }
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          width: ['288px', '306px', '342px', null, '558px'],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_marketing_Text__WEBPACK_IMPORTED_MODULE_7__/* .MainDescription */ .WC, {
            mt: 1,
            mb: 4,
            textAlign: ['center', 'left'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "home.makeCommunitySection.description",
              defaultMessage: [{
                "type": 0,
                "value": "Community is about trust and sharing. Open Collective lets you manage your finances so everyone can see where money comes from and where it goes."
              }]
            }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
              fontWeight: "bold",
              display: ['none', 'inline'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.makeCommunitySection.subTitle",
                defaultMessage: [{
                  "type": 0,
                  "value": "Collect and spend money transparently."
                }]
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          display: "flex",
          flexDirection: ['column', 'row'],
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            href: "/create",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              minWidth: 158,
              my: [2, null, 0],
              mr: [0, 3],
              buttonStyle: "marketing",
              whiteSpace: "nowrap",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Collective"
                }]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            onClick: () => setShowModal(true),
            my: [2, null, 0],
            minWidth: 158,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
              mr: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.makeCommunitySection.watchVideo",
                defaultMessage: [{
                  "type": 0,
                  "value": "Watch Video"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
              className: "arrowIcon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_boxicons_regular_RightArrow__WEBPACK_IMPORTED_MODULE_1__.RightArrow, {
                size: "14"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        mt: [5, 3],
        width: [1, null, '458px', null, '558px'],
        justifyContent: "center",
        alignItems: "center",
        ml: [null, null, null, null, 3],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          width: 558,
          height: 448,
          alt: "Make your community sustainable",
          src: "/static/images/home/makecommunity-section-illustration.png"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      flexDirection: ['column', 'row'],
      mx: [3, 4],
      my: [4, 5],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H2, {
        mb: 4,
        letterSpacing: ['-0.6px', '-0.8px'],
        fontSize: ['20px', '24px'],
        lineHeight: ['28px', '32px'],
        color: "primary.900",
        display: [null, 'none'],
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.whatIsGreatAboutOC",
          defaultMessage: [{
            "type": 0,
            "value": "What's great about Open Collective?"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: ['320px', '414px', '548px', null, '696px'],
        mr: [null, 3, null, null, 4],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          width: 696,
          height: 396,
          alt: "Make your community sustainable",
          src: "/static/images/home/whatisgreataboutOC-Illustration-2x.png"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: ['288px', '224px', '396px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H2, {
          mb: [null, 2],
          letterSpacing: [null, '-0.8px'],
          fontSize: [null, '24px'],
          lineHeight: [null, '32px'],
          color: "primary.900",
          display: ['none', 'block'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatIsGreatAboutOC",
            defaultMessage: [{
              "type": 0,
              "value": "What's great about Open Collective?"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          letterSpacing: ['-0.12px', '-0.16px', '-0.2px'],
          fontSize: ['15px', '16px', '18px'],
          lineHeight: ['23px', '24px', '27px'],
          color: "black.800",
          fontWeight: ['500', 'normal'],
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatIsGreatAboutOC.description",
            defaultMessage: [{
              "type": 0,
              "value": "Money management made simple, plus great tools for community engagement, budget reporting, and fiscal sponsorship."
            }]
          })
        })]
      })]
    }), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
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
          src: "https://www.youtube.com/embed/IBU5fSILAe8",
          frameBorder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })
      })
    })]
  });
};

MakeCommunity.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MakeCommunity"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MakeCommunity);

/***/ }),

/***/ 33828:
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
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _StyledCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38104);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "OCUsers__Img",
  componentId: "sc-vd6l37-0"
})(["max-width:100%;"]);
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu).withConfig({
  displayName: "OCUsers__ImgWrapper",
  componentId: "sc-vd6l37-1"
})(["border-radius:8px;&:hover{box-shadow:0px 8px 12px rgba(20,20,20,0.16);}"]);
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  'home.OCusers.opensource': {
    id: "home.OCusers.opensource",
    defaultMessage: [{
      "type": 0,
      "value": "More than 2,500 open source communities use Open Collective to receive money from companies and individuals."
    }]
  },
  'home.OCusers.meetups': {
    id: "home.OCusers.meetups",
    defaultMessage: [{
      "type": 0,
      "value": "Nearly 100 chapters of Women Who Code use Open Collective to raise money locally and allocate funding throughout their network."
    }]
  },
  'home.OCusers.movements': {
    id: "home.OCusers.movements",
    defaultMessage: [{
      "type": 0,
      "value": "Many local XR groups are using Open Collective to be transparent, engage their communities, and cover their expenses."
    }]
  }
});
const users = [{
  id: 'opensource',
  name: 'Babel Collective',
  type: 'Open Source Projects',
  description: '',
  collectivePath: '/babel',
  learnMorePath: '/search?tag=open%20source',
  picture: '/static/images/home/oc-users-babel.png'
}, {
  id: 'meetups',
  name: 'Women Who Code',
  type: 'Meetups',
  description: 'We will never lock you in. Everything we do is open source.',
  collectivePath: '/wwcodeatl',
  learnMorePath: '/wwcodeinc',
  picture: '/static/images/home/oc-users-womenwhocode.png'
}, {
  id: 'movements',
  name: 'Extinction Rebellion Belgium',
  type: 'Movements',
  description: 'We will never lock you in. Everything we do is open source.',
  collectivePath: '/xr-belgium',
  learnMorePath: '/search?q=rebellion',
  picture: '/static/images/home/oc-users-extinctionrebllion.png'
}];

const User = ({
  id,
  name,
  picture,
  type,
  collectivePath
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mx: [null, 3, 3],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ImgWrapper, {
      width: [1, '205px', null, '288px', '368px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: collectivePath,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Img, {
          alt: name,
          src: picture,
          width: "100%"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: [1, '206px', null, '288px', '368px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
        fontSize: ['15px', '18px'],
        lineHeight: ['23px', '27px'],
        color: "black.600",
        lineSpacing: ['-0.12px', '-0.2px'],
        fontWeight: "normal",
        mt: 24,
        mb: 12,
        children: type
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mb: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
          fontSize: ['15px', '24px'],
          lineHeight: ['23px', '32px'],
          color: "black.800",
          letterSpacing: ['-0.12px', '-0.8px'],
          fontWeight: "bold",
          wordWrap: "break-word",
          textAlign: "left",
          children: name
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        my: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
          fontSize: ['15px', '16px', null, null, '18px'],
          textAlign: "left",
          lineHeight: ['25px', '24px', null, null, '27px'],
          letterSpacing: ['-0.016em', '-0.16px', null, null, '-0.2px'],
          color: "black.600",
          children: intl.formatMessage(messages[`home.OCusers.${id}`])
        })
      })]
    })]
  });
};

const OCUsers = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    my: 4,
    flexDirection: "column",
    mx: [3, 4],
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
      textAlign: "center",
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "vnfbPl",
        defaultMessage: [{
          "type": 0,
          "value": "Who is using Open Collective?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      width: ['286px', '548px', null, '768px', '991px'],
      mb: 4,
      textAlign: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
        textAlign: "center",
        mb: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "home.OCUsersSection.subtitle",
          defaultMessage: [{
            "type": 0,
            "value": "Communities around the world are using Open Collective. Find out more about them!"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledCarousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      options: users,
      display: [null, 'none'],
      width: 1,
      children: users.map(user => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(User, _objectSpread({}, user), user.id))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        display: ['none', 'flex'],
        children: users.map(user => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(User, _objectSpread({}, user))
        }, user.id))
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mt: 4,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        as: _Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        buttonStyle: "standard",
        buttonSize: "medium",
        href: "/search",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "home.discover",
          defaultMessage: [{
            "type": 0,
            "value": "Discover more"
          }]
        })
      })
    })]
  });
};

OCUsers.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OCUsers"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OCUsers);

/***/ }),

/***/ 70142:
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
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var _HomeNextIllustration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47667);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_7__.H3).withConfig({
  displayName: "WhatCanYouDo__Title",
  componentId: "sc-1i9594t-0"
})(["font-size:20px;line-height:28px;letter-spacing:-0.6px;font-weight:bold;margin-bottom:16px;margin-top:16px;color:", ";", " @media screen and (min-width:40em){font-size:24px;line-height:32px;letter-spacing:-0.8px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.900'), styled_system__WEBPACK_IMPORTED_MODULE_4__.display);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Text__WEBPACK_IMPORTED_MODULE_7__.P).withConfig({
  displayName: "WhatCanYouDo__Description",
  componentId: "sc-1i9594t-1"
})(["font-size:15px;line-height:23px;letter-spacing:-0.12px;color:", ";font-weight:500;margin-top:10px;", " @media screen and (min-width:40em){font-size:16px;line-height:24px;letter-spacing:-0.16px;}@media screen and (min-width:88em){font-size:18px;line-height:27px;letter-spacing:-0.2px;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.700'), styled_system__WEBPACK_IMPORTED_MODULE_4__.display);

const WhatCanYouDo = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    mx: [3, 4],
    my: 4,
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "home.whatCanYouDoSection.title",
        defaultMessage: [{
          "type": 0,
          "value": "What can you do with Open Collective?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      width: ['288px', '548px', '708px', null, '755px'],
      textAlign: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
        color: "black.700",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.whatCanYouDoSection.subTitle",
          defaultMessage: [{
            "type": 0,
            "value": "Accept donations and sponsorships, celebrate your supporters, pay expenses, and keep everyone up to date — all in one place."
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      my: "32px",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
        textAlign: "center",
        display: ['block', 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.whatCanYouDoSection.collectMoney",
          defaultMessage: [{
            "type": 0,
            "value": "Collect Money"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: [null, '390px', '488px', null, '558px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          width: 558,
          height: 418,
          src: "/static/images/home/collectmoney-illustration-lg.png",
          alt: "Collect money"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: [null, '224px', '274px', null, '408px'],
        textAlign: "left",
        ml: [null, 2, null, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          display: ['none', 'block'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatCanYouDoSection.collectMoney",
            defaultMessage: [{
              "type": 0,
              "value": "Collect Money"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatCanYouDoSection.collectMoney.longDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Receive funds by credit card, Paypal, or bank transfer, and record everything in your transparent budget. Define different ways people can contribute with customizable tiers and rewards."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      my: "32px",
      flexDirection: ['column', 'row-reverse'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
        textAlign: "center",
        display: ['block', 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.whatCanYouDoSection.spendMoney",
          defaultMessage: [{
            "type": 0,
            "value": "Spend Money"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: [null, '390px', '488px', null, '558px'],
        ml: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          width: 558,
          height: 429,
          src: "/static/images/home/spendmoney-illustration-lg.png",
          alt: "Spend money"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: [null, '224px', '274px', null, '408px'],
        textAlign: "left",
        mr: [null, 2, null, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          display: ['none', 'block'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatCanYouDoSection.spendMoney",
            defaultMessage: [{
              "type": 0,
              "value": "Spend Money"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatCanYouDoSection.spendMoney.longDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Anyone in your community can submit expenses. Once approved, pay in one click with Paypal or bank transfer. All transactions are public in your transparent budget (with personal information kept private)."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      my: "32px",
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: [null, 'space-between', null, 'center'],
      width: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
        textAlign: "center",
        display: ['block', 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.whatCanYouDoSection.manageMoney",
          defaultMessage: [{
            "type": 0,
            "value": "Manage Money"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: [null, '390px', '488px', null, '558px'],
        mr: [null, null, 3, null, 5],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          width: 558,
          height: 350,
          src: "/static/images/home/managemoney-illustration-lg.png",
          alt: "Manage money"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: [null, '224px', '274px', null, '408px'],
        textAlign: "left",
        ml: [null, 4, 0, 5],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Title, {
          display: ['none', 'block'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatCanYouDoSection.manageMoney",
            defaultMessage: [{
              "type": 0,
              "value": "Manage Money"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Description, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.whatCanYouDoSection.manageMoney.longDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Create Collectives for different projects for easy budget tracking. No need for messy spreadsheets! Automatic monthly reports make accounting a breeze."
            }]
          })
        })]
      })]
    })]
  });
};

WhatCanYouDo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhatCanYouDo"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatCanYouDo);

/***/ }),

/***/ 7321:
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
/* harmony import */ var _components_collectives_sections_CreateCollective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48155);
/* harmony import */ var _components_collectives_sections_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88579);
/* harmony import */ var _components_collectives_sections_FiscalHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23044);
/* harmony import */ var _components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78355);
/* harmony import */ var _components_collectives_sections_LearnMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69194);
/* harmony import */ var _components_collectives_sections_MakeCommunity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90443);
/* harmony import */ var _components_collectives_sections_OCUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33828);
/* harmony import */ var _components_collectives_sections_WeAreOpen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67712);
/* harmony import */ var _components_collectives_sections_WhatCanYouDo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70142);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_11__]);
_components_Page__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  defaultTitle: {
    id: "OC.tagline",
    defaultMessage: [{
      "type": 0,
      "value": "Make your community sustainable. Collect and spend money transparently."
    }]
  }
});

const CollectivesPage = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    description: formatMessage(messages.defaultTitle),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_MakeCommunity__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_WhatCanYouDo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_Features__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_FiscalHost__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_CreateCollective__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_OCUsers__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_WeAreOpen__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_LearnMore__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {})]
  });
};

CollectivesPage.getInitialProps = ({
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

CollectivesPage.__docgenInfo = {
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
  "displayName": "CollectivesPage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectivesPage);
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7667,5106,5842,8355,4515,8579,5751], () => (__webpack_exec__(7321)));
module.exports = __webpack_exports__;

})();