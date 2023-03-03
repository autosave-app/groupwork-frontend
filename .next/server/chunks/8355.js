"use strict";
exports.id = 8355;
exports.ids = [8355];
exports.modules = {

/***/ 74655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "SectionSubtitle__SectionTitle",
  componentId: "sc-17f29hb-0"
})(["word-break:break-word;letter-spacing:-0.016px;", " ", " ", " ", " @media screen and (min-width:88em){font-size:24px;line-height:32px;letter-spacing:-0.8px;}"], styled_system__WEBPACK_IMPORTED_MODULE_1__.color, styled_system__WEBPACK_IMPORTED_MODULE_1__.display, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.typography);
SectionTitle.defaultProps = {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  color: 'black.700',
  mb: 3,
  mt: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

/***/ }),

/***/ 78355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TE": () => (/* binding */ JoinUsWrapper),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mi": () => (/* binding */ JoinUsActionContainer)
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
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45842);
/* harmony import */ var _SectionSubtitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74655);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const JoinUsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "JoinUs__JoinUsWrapper",
  componentId: "sc-1sbifn6-0"
})(["background:", ";background-size:100% 100%;a{color:#fff;}.linkWrapper:hover{background-color:#ffffff;}@media screen and (min-width:64em){background:", ";background-size:100% 100%;}@media screen and (min-width:88em){background:", ";background-size:100% 100%;}"], props => props.page && props.page === 'becomeAHost' ? `url('/static/images/home/joinus-green-bg-sm.png')` : props.page && props.page === 'fiscalHosting' ? `url('/static/images/home/fiscalhost-blue-bg-sm.png')` : `url('/static/images/home/joinus-pink-bg-sm.png')`, props => props.page && props.page === 'becomeAHost' ? `url('/static/images/home/joinus-green-bg-md.png')` : props.page && props.page === 'fiscalHosting' ? `url('/static/images/home/fiscalhost-blue-bg-md.png')` : `url('/static/images/home/joinus-pink-bg-md.png')`, props => props.page && props.page === 'becomeAHost' ? `url('/static/images/home/joinus-green-bg-lg.png')` : props.page && props.page === 'fiscalHosting' ? `url('/static/images/home/fiscalhost-blue-bg-lg.png')` : `url('/static/images/home/joinus-pink-bg-lg.png')`);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
  displayName: "JoinUs__Wrapper",
  componentId: "sc-1sbifn6-1"
})(["display:flex;justify-content:space-between;align-items:center;border-radius:8px;padding:16px;background-color:rgba(255,255,255,0.7);@media screen and (min-width:52em){padding:24px 32px;}&:focus-within{background-color:#ffffff;}"]);
const JoinUsActionContainer = ({
  title,
  description,
  link
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    href: link,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Wrapper, {
      color: "black.900",
      className: "linkWrapper",
      my: [1, 3, 4],
      width: ['288px', '436px', '569px', null, '594px'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: ['192px', 1],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
          fontSize: ['24px', null, '32px'],
          textAlign: "left",
          lineHeight: ['25px', null, '40px'],
          letterSpacing: ['-0.08px', null, '-1.2px'],
          mb: 2,
          fontWeight: "bold",
          color: "primary.900",
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "15px",
          color: "black.700",
          lineHeight: "23px",
          letterSpacing: "-0.12px",
          children: description
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        className: "arrowWrapper",
        color: "black.900",
        fontWeight: "bold",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
          size: '24'
        })
      })]
    })
  });
};

const JoinUs = ({
  page
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(JoinUsWrapper, {
  py: [5, null, null, 4],
  width: 1,
  page: page,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    mx: [3, 4],
    flexDirection: ['column', null, null, 'row'],
    color: "black.900",
    alignItems: 'center',
    justifyContent: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      my: [2, 3, null, 5],
      width: [null, '438px', '569px', '335px', '309px'],
      mr: [null, null, null, 5],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H1, {
        mb: 2,
        mt: [5, null, null, 0],
        fontSize: ['32px', '40px', null, '52px'],
        lineHeight: ['40px', '48px', null, '56px'],
        letterSpacing: ['-1.2px', '-1.6px', null, '-2px'],
        color: "primary.900",
        textAlign: ['center', null, 'left'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.joinUsSection.title",
          defaultMessage: [{
            "type": 0,
            "value": "Join the movement"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        my: (null, null, null, null, 3),
        width: ['288px', '438px', null, '335px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_SectionSubtitle__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          fontSize: ['20px', null, null, '24px'],
          lineHeight: ['28px', null, null, '32px'],
          letterSpacing: ['-0.6px', null, null, '-0.8px'],
          color: ['black.800', null, null, 'black.900'],
          textAlign: ['center', null, 'left'],
          children: page === 'becomeAHost' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "becomeAHost.joinUsSection.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective makes fiscal sponsorship shine. Grantees and project participants will love the simplicity and accessibility, and you’ll love the huge reduction of overheads."
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "Jzh8eo",
            defaultMessage: [{
              "type": 0,
              "value": "Collective finances. Collective technology. Collective power."
            }]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      ml: [null, null, null, 3, 6],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(JoinUsActionContainer, {
        link: page === 'becomeAHost' ? '/organizations/new' : '/create',
        title: page === 'becomeAHost' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "Y0G9KM",
          defaultMessage: [{
            "type": 0,
            "value": "Join as a Fiscal Host"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "uw0ZU2",
          defaultMessage: [{
            "type": 0,
            "value": "Get started now free!"
          }]
        }),
        description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.joinUsSection.getStarted",
          defaultMessage: [{
            "type": 0,
            "value": "Get started now!"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(JoinUsActionContainer, {
        link: "https://blog.opencollective.com/tag/case-studies/",
        title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "ReadOurStories",
          defaultMessage: [{
            "type": 0,
            "value": "Read our stories"
          }]
        }),
        description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home.joinUsSection.ourStories",
          defaultMessage: [{
            "type": 0,
            "value": "Open Collective aims to foster transparency and sustainability in communities around the world, see how you could."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Wrapper, {
        color: "black.900",
        width: ['288px', '436px', '569px', null, '594px'],
        className: "newsletterWrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
            fontSize: ['24px', null, '32px'],
            textAlign: "left",
            lineHeight: ['25px', null, '40px'],
            letterSpacing: ['-0.08px', null, '-1.2px'],
            mb: 2,
            fontWeight: "bold",
            color: "primary.900",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "home.joinUsSection.newsletter",
              defaultMessage: [{
                "type": 0,
                "value": "Subscribe to our newsletter"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
            mb: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
              fontSize: ['15px', null, '15px'],
              lineHeight: ['23px', null, '25px'],
              letterSpacing: "-0.12px",
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "home.joinUsSection.weNeedUpdate",
                defaultMessage: [{
                  "type": 0,
                  "value": "We send updates once a month."
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Newsletter__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})]
        })
      })]
    })]
  })
});

JoinUs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JoinUs",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JoinUs);
JoinUsActionContainer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JoinUsActionContainer",
  "props": {
    "title": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "description": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "link": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};

/***/ })

};
;