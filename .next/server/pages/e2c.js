"use strict";
(() => {
var exports = {};
exports.id = 1838;
exports.ids = [1838];
exports.modules = {

/***/ 97049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_HorizontalScroller)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@styled-icons/material/ArrowBack"
var ArrowBack_ = __webpack_require__(38218);
;// CONCATENATED MODULE: external "@styled-icons/material/ArrowForward"
const ArrowForward_namespaceObject = require("@styled-icons/material/ArrowForward");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(93908);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);
;// CONCATENATED MODULE: ./lib/ui-utils.js


/**
 * A debouncer for scroll functions. It is configured to trigger on trailing and
 * leading calls with a max wait of 100 to ensure everything stays responsive.
 */
const debounceScroll = func => {
  return debounce_default()(func, 100, {
    maxWait: 100,
    leading: true,
    trailing: true
  });
};
// EXTERNAL MODULE: ./lib/withViewport.js
var withViewport = __webpack_require__(74387);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledRoundButton.js
var StyledRoundButton = __webpack_require__(90012);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/HorizontalScroller.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const RefContainer = external_styled_components_default().div.withConfig({
  displayName: "HorizontalScroller__RefContainer",
  componentId: "sc-1mtsz4p-0"
})(["display:flex;overflow-x:auto;scroll-behavior:smooth;max-width:100%;", ""], props => props.hideScrollbar && (0,external_styled_components_.css)(["scrollbar-width:none;-ms-overflow-style:none;overflow:-moz-scrollbars-none;&::-webkit-scrollbar{display:none;}"]));
const ControlsContainer = external_styled_components_default()(Grid/* Flex */.kC).withConfig({
  displayName: "HorizontalScroller__ControlsContainer",
  componentId: "sc-1mtsz4p-1"
})(["z-index:10;position:absolute;top:", ";pointer-events:none;justify-content:space-between;width:100%;"], props => props.controlsTopPosition ? `${props.controlsTopPosition}%` : '50%');
const ArrowContainer = external_styled_components_default()(StyledRoundButton/* default */.Z).withConfig({
  displayName: "HorizontalScroller__ArrowContainer",
  componentId: "sc-1mtsz4p-2"
})(["transition:opacity 0.25s ease-in,visibility 0.25s;visibility:", ";opacity:", ";pointer-events:auto;svg{height:40px;padding 7px;}"], props => props.isVisible ? 'visible' : 'hidden', props => props.isVisible ? '1' : '0');
/**
 * Helper to display a list of horizontally scrollable items, with two little
 * carets to navigate easily.
 */

class HorizontalScroller extends (external_react_default()).PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateScrollInfo", debounceScroll(() => {
      if (!this.ref.current) {
        return;
      }

      const {
        offsetWidth,
        scrollLeft,
        scrollWidth
      } = this.ref.current;
      this.setState({
        canGoPrev: scrollLeft > 0,
        canGoNext: scrollLeft + offsetWidth < scrollWidth
      });
    }));

    _defineProperty(this, "onPrevClick", () => {
      if (this.ref.current) {
        this.ref.current.scrollLeft -= this.getScrollDistance();
      }
    });

    _defineProperty(this, "onNextClick", () => {
      if (this.ref.current) {
        this.ref.current.scrollLeft += this.getScrollDistance();
      }
    });

    this.ref = /*#__PURE__*/external_react_default().createRef();
    this.state = {
      canGoPrev: false,
      canGoNext: false
    };
  }

  componentDidMount() {
    if (this.ref.current) {
      this.ref.current.addEventListener('scroll', this.updateScrollInfo, {
        passive: true
      });
      this.updateScrollInfo();
    }
  }

  componentDidUpdate() {
    this.updateScrollInfo();
  }

  componentWillUnmount() {
    if (this.ref.current) {
      this.ref.current.removeEventListener('scroll', this.updateScrollInfo);
    }
  }

  getScrollDistance() {
    const offsetWidth = this.ref.current.offsetWidth;

    if (this.props.getScrollDistance) {
      return this.props.getScrollDistance(offsetWidth);
    } else {
      // Default behavior: scroll by 75% of the full width
      const scrollPercentage = 0.75;
      return scrollPercentage * offsetWidth;
    }
  }

  render() {
    const {
      canGoPrev,
      canGoNext
    } = this.state;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      position: "relative",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ControlsContainer, {
        px: [2, null, 5],
        controlsTopPosition: this.props.controlsTopPosition,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ArrowContainer, {
          isVisible: canGoPrev,
          children: /*#__PURE__*/jsx_runtime_.jsx(ArrowBack_.ArrowBack, {
            onMouseDown: canGoPrev ? this.onPrevClick : undefined
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ArrowContainer, {
          isVisible: canGoNext,
          children: /*#__PURE__*/jsx_runtime_.jsx(ArrowForward_namespaceObject.ArrowForward, {
            onMouseDown: canGoNext ? this.onNextClick : undefined
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(RefContainer, _objectSpread(_objectSpread({}, this.props.containerProps), {}, {
        as: this.props.container,
        ref: this.ref,
        children: this.props.children
      }))]
    });
  }

} // We don't use the data from `withViewport`, but we use it to update the
// component when the window's width changes.


HorizontalScroller.__docgenInfo = {
  "description": "Helper to display a list of horizontally scrollable items, with two little\ncarets to navigate easily.",
  "methods": [{
    "name": "onPrevClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onNextClick",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getScrollDistance",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "HorizontalScroller",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "container": {
      "description": "Container component where the list (children) will be inserted",
      "type": {
        "name": "elementType"
      },
      "required": false
    },
    "containerProps": {
      "description": "Passed to `container`",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "getScrollDistance": {
      "description": "Callback to get the scrolled distance when we click on prev/next controllers",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "width": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "controlsTopPosition": {
      "description": "Set the top position of the arrows. Defaults 50%",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_HorizontalScroller = ((0,withViewport/* default */.ZP)(HorizontalScroller, {
  withWidth: true
}));

/***/ }),

/***/ 56687:
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
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65106);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const StyledIframe = styled_components__WEBPACK_IMPORTED_MODULE_2___default().iframe.withConfig({
  displayName: "ExitToCommunitySection__StyledIframe",
  componentId: "sc-1i3nixh-0"
})(["border:0.8px solid rgba(50,51,52,0.1);border-radius:16px;"]);

const ExitToCommunity = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: ['40px', '56px', null, null, '72px'],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mt: [3, 0],
        mb: "24px",
        width: ['288px', 1],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_5__/* .MainTitle */ .U3, {
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.title",
            defaultMessage: [{
              "type": 0,
              "value": "Exit to Community #E2C"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '650px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_5__/* .MainDescription */ .WC, {
          fontSize: "18px",
          lineHeight: "26px",
          textAlign: "center",
          fontWeight: "500",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.description",
            defaultMessage: [{
              "type": 0,
              "value": "Join us as we transition from a privately owned company to a structure that allows us to share power and revenue with you."
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        borderRadius: "16px",
        display: "flex",
        width: ['288px', '700px', '784px'],
        height: ['160px', '388px', '426px'],
        background: "black",
        mt: ['32px', '56px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledIframe, {
          title: "YouTube video",
          width: "100%",
          height: "100%",
          src: "https://www.youtube.com/embed/bbtQcW4E_RU",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })
      })]
    })
  });
};

ExitToCommunity.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExitToCommunity"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExitToCommunity);

/***/ }),

/***/ 67100:
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
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88705);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
  displayName: "InvestingInTheCommonsSection__ListItem",
  componentId: "sc-f3wfgv-0"
})(["margin-left:20px;padding-left:0;"]);
const ListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
  displayName: "InvestingInTheCommonsSection__ListWrapper",
  componentId: "sc-f3wfgv-1"
})(["padding-left:20px;"]);

const InvestingInTheCommons = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: ['56px', '80px', '104px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: ['288px', 1],
      mb: ['40px', '64px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "e2c.investingInCommons",
          defaultMessage: [{
            "type": 0,
            "value": "Investing in the commons"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: ['column', 'row-reverse'],
      alignItems: [null, 'center'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '330px', '416px'],
        height: ['288px', '354px'],
        mb: ['20px', 0],
        ml: [null, '40px', '56px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          alt: "Challenging business as usual",
          src: "/static/images/e2c/challengingBusiness-illustration.png",
          width: 416,
          height: 354
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "288px",
        textAlign: "center",
        mb: "24px",
        display: [null, 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H4, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.challengingBusiness",
            defaultMessage: [{
              "type": 0,
              "value": "Challenging business as usual"
            }]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '330px', '472px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H4, {
          mb: "24px",
          display: ['none', 'block'],
          fontSize: ['24px', '32px'],
          lineHeight: ['32px', '40px'],
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.challengingBusiness",
            defaultMessage: [{
              "type": 0,
              "value": "Challenging business as usual"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.challengingBusiness.description",
            defaultMessage: [{
              "type": 0,
              "value": "Many tech founders are forced to give away ownership and control to investors in order to get money as a start-up. "
            }, {
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "Open Collective is different."
              }]
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " We raised money from people who agreed: "
            }, {
              "type": 8,
              "value": "ul",
              "children": [{
                "type": 8,
                "value": "li",
                "children": [{
                  "type": 0,
                  "value": "Investors get paid back slowly and can’t make us exploit people to create huge profits."
                }]
              }, {
                "type": 0,
                "value": " "
              }, {
                "type": 8,
                "value": "li",
                "children": [{
                  "type": 0,
                  "value": "Investors do NOT control the platform."
                }]
              }]
            }],
            values: {
              li: listItem => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ListItem, {
                children: listItem
              }),
              ul: list => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ListWrapper, {
                children: list
              }),
              lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("br", {}),
              strong: _I18nFormatters__WEBPACK_IMPORTED_MODULE_5__/* .I18nBold */ .Gl
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      mt: "40px",
      alignItems: [null, 'center'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '330px', '416px'],
        height: ['288px', '354px'],
        mb: ['20px', 0],
        mr: [null, '40px', '56px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          alt: "Transparent finances",
          src: "/static/images/e2c/transparent-finance-illustration.png",
          width: 416,
          height: 354
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: "288px",
        textAlign: "center",
        mb: "24px",
        display: [null, 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H4, {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.transparentFinances",
            defaultMessage: [{
              "type": 0,
              "value": "Transparent finances"
            }]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', '330px', '472px'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H4, {
          mb: "24px",
          display: ['none', 'block'],
          fontSize: ['24px', '32px'],
          lineHeight: ['32px', '40px'],
          letterSpacing: "-0.008em",
          color: "primary.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.transparentFinances",
            defaultMessage: [{
              "type": 0,
              "value": "Transparent finances"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "18px",
          lineHeight: "26px",
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.transparentFinances.description",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective launched in 2016 and raised $3M of seed investment. The platform became profitable in 2020. "
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 1,
              "value": "lineBreak"
            }, {
              "type": 0,
              "value": " See our investors and term sheets "
            }, {
              "type": 8,
              "value": "link",
              "children": [{
                "type": 0,
                "value": "here"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("br", {}),
              link: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_5__/* .getI18nLink */ .fw)({
                openInNewTab: true,
                href: 'https://docs.opencollective.com/help/about/investors'
              })
            }
          })
        })]
      })]
    })]
  });
};

InvestingInTheCommons.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InvestingInTheCommons"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestingInTheCommons);

/***/ }),

/***/ 95878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_collectives_SectionSubtitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74655);
/* harmony import */ var _collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78355);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const JoinTheMovement = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_3__/* .JoinUsWrapper */ .TE, {
  py: [5, null, null, 4],
  width: 1,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
    mx: [3, 4],
    flexDirection: ['column', null, null, 'row'],
    color: "black.900",
    alignItems: 'center',
    justifyContent: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      display: "flex",
      flexDirection: "column",
      alignItems: ['center', null, 'flex-start'],
      my: [2, 3, null, 5],
      mr: [null, null, null, 5],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        width: [null, '408px', '569px', '335px', '406px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.H1, {
          mb: 2,
          mt: [5, null, null, 0],
          fontSize: ['32px', '40px', null, '52px'],
          lineHeight: ['40px', '48px', null, '56px'],
          letterSpacing: ['-1.2px', '-1.6px', null, '-2px'],
          textAlign: ['center', null, 'left'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.joinTheMovement",
            defaultMessage: [{
              "type": 0,
              "value": "Join the movement and support us"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        my: (null, null, null, null, 3),
        width: ['288px', '438px', null, '335px', '400px'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_collectives_SectionSubtitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          fontSize: ['20px', null, null, '24px'],
          lineHeight: ['28px', null, null, '32px'],
          letterSpacing: ['-0.6px', null, null, '-0.8px'],
          color: ['black.800', null, null, 'black.900'],
          textAlign: ['center', null, 'left'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "home.joinUsSection.subtitle",
            defaultMessage: [{
              "type": 0,
              "value": "Be part of the new generation of communities."
            }]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
            display: ['none', 'inline-block'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "wESAjS",
              defaultMessage: [{
                "type": 0,
                "value": "There are a couple of ways for you to contribute:"
              }]
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      ml: [null, null, null, 3, 6],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        mb: "16px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_3__/* .JoinUsActionContainer */ .mi, {
          link: "https://opencollective.com/comms-docs/projects/e2c",
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "financialContributions",
            defaultMessage: [{
              "type": 0,
              "value": "Financial contributions"
            }]
          }),
          description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "vbFuLO",
            defaultMessage: [{
              "type": 0,
              "value": "Get a tax-deductible receipt with your donation"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_collectives_sections_JoinUs__WEBPACK_IMPORTED_MODULE_3__/* .JoinUsActionContainer */ .mi, {
        link: "mailto:pia@opencollective.com",
        title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "helpResearch",
          defaultMessage: [{
            "type": 0,
            "value": "Help us with research"
          }]
        }),
        description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "E+4HIb",
          defaultMessage: [{
            "type": 0,
            "value": "Email us and find how you can contribute with your time to add to the research about sharing ownership within organizations."
          }]
        })
      })]
    })]
  })
});

JoinTheMovement.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "JoinTheMovement"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JoinTheMovement);

/***/ }),

/***/ 51087:
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
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65106);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const OCIsATechPlatform = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: ['56px', '80px', '104px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: ['288px', '698px', '832px', null, '1088px'],
      mb: "40px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitle */ .NZ, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "e2c.OCIsATechPlatform",
          defaultMessage: [{
            "type": 0,
            "value": "Today, Open Collective is a tech platform that enables a network of:"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      display: ['block', 'flex', 'none'],
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      overflowX: "scroll",
      mb: "40px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "700px",
        height: "408px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          alt: "Challenging business as usual",
          src: "/static/images/e2c/network.png",
          width: 700,
          height: 408
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: [null, null, '956px', null, '1088px'],
      mb: "40px",
      display: ['none', null, 'block'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        alt: "Challenging business as usual",
        src: "/static/images/e2c/network-lg.png",
        width: 1088,
        height: 408
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: ['288px', '588px', '685px'],
      mb: "24px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H2, {
        letterSpacing: ['-0.008em', '-0.04em'],
        fontSize: ['32px', '40px'],
        lineHeight: ['40px', '48px'],
        textAlign: "center",
        color: "black.900",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "e2c.OCstat",
          defaultMessage: [{
            "type": 0,
            "value": "600+ nonprofits, co-ops, and fiscal hosts to support 7000+ groups to raise and spend $35 million each year with full transparency"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: "194px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        buttonStyle: "marketingSecondary",
        buttonSize: "medium",
        href: "/search",
        fontWeight: "500",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "e2c.browseCollectives",
          defaultMessage: [{
            "type": 0,
            "value": "Browse Collectives"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      my: ['56px', '80px', '104px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        src: "/static/images/e2c/oc-logo-illustration.png",
        width: 88,
        height: 87
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: ['288px', '100%', '784px'],
      mt: "55px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H2, {
        letterSpacing: "-0.008em",
        fontSize: ['28px', '32px'],
        lineHeight: ['32px', '40px'],
        textAlign: "center",
        color: "black.900",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "e2c.howCanWeRepay",
          defaultMessage: [{
            "type": 0,
            "value": "How can we repay our investors, support our founders, and practice financial self-determination? "
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 0,
            "value": "How can we future-proof our mission?"
          }],
          values: {
            lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("br", {})
          }
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      width: ['286px', '432px'],
      height: ['168px', '317px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        src: "/static/images/e2c/e2c-logo-illustration.png",
        width: 431,
        height: 317
      })
    })]
  });
};

OCIsATechPlatform.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OCIsATechPlatform"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OCIsATechPlatform);

/***/ }),

/***/ 24746:
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
/* harmony import */ var _collectives_Newsletter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45842);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _HorizontalScroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97049);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65106);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const blogEntries = [{
  imageSrc: '/static/images/e2c/blog-1.png',
  title: `Early musings on "Exit to Community" for Open Collective`,
  link: 'https://blog.opencollective.com/exit-to-community/',
  date: 'Oct 18 2021'
}, {
  imageSrc: '/static/images/e2c/blog-2.png',
  title: `Pathways for Open Collective’s “Exit to Community”`,
  link: 'https://blog.opencollective.com/exit-to-community-part-2/',
  date: 'Oct 24 2021'
}, {
  imageSrc: '/static/images/e2c/blog-3.png',
  title: `Building Capacity for Exit to Community`,
  link: 'https://blog.opencollective.com/e2c-capacity-building/',
  date: 'Mar 7 2022'
}, {
  imageSrc: '/static/images/e2c/blog-4.png',
  title: `Deep dive: community stewardship of Open Collective through a Perpetual Purpose Trust`,
  link: 'https://blog.opencollective.com/ppt/',
  date: 'Mar 10 2022'
}];
const ResourceContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "ResourcesSection__ResourceContainer",
  componentId: "sc-199086i-0"
})(["overflow-x:auto;padding:0 16px;max-width:100%;width:300px;@media screen and (min-width:40em){width:768px;justify-content:flex-start;}@media screen and (min-width:52em){width:956px;}@media screen and (min-width:64em){width:1200px;}"]);

const ResourcesSection = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: ['column'],
      justifyContent: "center",
      alignItems: "center",
      mt: ['25px', null, '42px'],
      mb: ['51px', '96px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: "72px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_8__/* .SectionTitle */ .NZ, {
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.resources",
            defaultMessage: [{
              "type": 0,
              "value": "Resources"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HorizontalScroller__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        container: ResourceContainer,
        controlsTopPosition: 30,
        containerProps: {
          hideScrollbar: true
        },
        children: blogEntries.map(blogEntry => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          display: "flex",
          flexDirection: "column",
          minWidth: ['288px', '276px', '380px', null, '360px'],
          mx: ['8px', '20px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            width: ['224px', '100%'],
            mb: "32px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              alt: `${blogEntry.title} picture`,
              src: blogEntry.imageSrc,
              width: 349,
              height: 356
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            mb: "24px",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.06em",
              fontWeight: "500",
              color: "black.900",
              textTransform: "uppercase",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                  id: "Hbj3Si",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Blog Entry"
                  }]
                })
              }), ' ', "\u2022 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
                children: blogEntry.date
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            href: blogEntry.link,
            openInNewTab: true,
            textDecoration: "underline",
            textDecorationColor: "#141415",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
              width: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
                textDecoration: "underline",
                fontSize: "24px",
                lineHeight: "32px",
                letterSpacing: "-0.008em",
                color: "black.900",
                fontWeight: "500",
                children: blogEntry.title
              })
            })
          })]
        }, blogEntry.link))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(LearnWithUs, {})]
  });
};

const LearnWithUs = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  px: "16px",
  mb: "58px",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: ['column', 'row'],
    alignItems: "center",
    justifyContent: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      width: ['288px', '330px', '458px', null, '524px'],
      mb: ['40px', 0],
      mr: [null, '40px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        alt: "Challenging business as usual",
        src: "/static/images/e2c/learnMore-illustration.png",
        width: 416,
        height: 354
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      width: ['288px', '330px', '458px', null, '524px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H2, {
        letterSpacing: "-0.008em",
        fontSize: "32px",
        lineHeight: "40px",
        color: "primary.900",
        mb: "24px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "e2c.learnWithUs",
          defaultMessage: [{
            "type": 0,
            "value": "Learn with us"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
        fontSize: "18px",
        lineHeight: "26px",
        color: "black.800",
        fontWeight: "500",
        mb: "24px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "e2c.learnWithUs.description",
          defaultMessage: [{
            "type": 0,
            "value": "Sign up to be notified of live conversations with our CEO Pia Mancini, Open Collective hosts, and admins from our 7000 collectives about ways to transition from a privately owned company to a structure that allows us to share power and revenue with you."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_collectives_Newsletter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})]
    })]
  })
});

ResourcesSection.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ResourcesSection"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResourcesSection);

/***/ }),

/***/ 8500:
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
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const WhatDoesE2CMean = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    my: ['56px', '80px', '104px'],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: ['column', null, 'row-reverse'],
      justifyContent: "center",
      alignItems: "center",
      maxWidth: [null, null, null, null, '1088px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        width: ['288px', 1],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.H2, {
          letterSpacing: "-0.04em",
          fontSize: ['32px', '40px'],
          lineHeight: ['40px', '48px'],
          textAlign: ['center', null, 'left'],
          color: "primary.900",
          display: [null, null, 'none'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "e2c.whatDoesE2CMean",
            defaultMessage: [{
              "type": 0,
              "value": "What does exit to community mean?"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        my: ['31px', null, 0],
        ml: [null, null, '32px'],
        width: ['288px', '516px', '534px'],
        minWidth: [null, null, '534px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          alt: "How Open Collective works",
          src: "/static/images/e2c/whatDoesE2CMean-illustration.png",
          width: 534,
          height: 357
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: ['center', null, 'flex-start'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          width: "346px",
          display: ['none', null, 'block'],
          mb: "32px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.H2, {
            letterSpacing: "-0.04em",
            fontSize: "40px",
            lineHeight: "48px",
            textAlign: ['center', null, 'left'],
            color: "primary.900",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "e2c.whatDoesE2CMean",
              defaultMessage: [{
                "type": 0,
                "value": "What does exit to community mean?"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          width: ['288px', '606px', '346px', null, '522px'],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__.P, {
            fontSize: ['18px', '20px'],
            lineHeight: ['26px', '28px'],
            fontWeight: "500",
            color: "black.800",
            letterSpacing: "-0.008em",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "e2c.whatDoesE2CMean.description",
              defaultMessage: [{
                "type": 0,
                "value": "Exit to Community (E2C) is an effort to develop alternatives to the standard model of the startup “exit.” Rather than simply aiming for an acquisition by a more established company or a public stock offering, startups can mature into ownership by their community of stakeholders."
              }]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
              mt: "16px",
              display: "block",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("strong", {
                children: "- Nathan Schneider"
              }), ",", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
                textDecoration: "underline",
                children: "Director of the Media Enterprise Design Lab"
              })]
            })]
          })
        })]
      })]
    })
  });
};

WhatDoesE2CMean.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WhatDoesE2CMean"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatDoesE2CMean);

/***/ }),

/***/ 74387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pm": () => (/* binding */ VIEWPORTS),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS, BREAKPOINTS, viewportIsAbove, isDesktopOrAbove, getViewportFromWidth */
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86646);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25359);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74200);
/* harmony import */ var _theme_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Defines all the breakpoints names as passed by `withViewport`
 */


const VIEWPORTS = {
  XSMALL: 'XSMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  UNKNOWN: 'UNKNOWN'
}; // Please keep the same length for these two arrays

const BREAKPOINTS_NAMES = [VIEWPORTS.XSMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM, VIEWPORTS.LARGE];
const BREAKPOINTS_WIDTHS = BREAKPOINTS_NAMES.map((_, idx) => (0,_theme_helpers__WEBPACK_IMPORTED_MODULE_6__/* .emToPx */ .x8)(_theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[idx]));
const BREAKPOINTS = lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default()(BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS);
/**
 * Helper to check if a viewport is superior or equal to another one.
 * Always returns false for `UNKNOWN`
 *
 * @param {VIEWPORTS} viewport
 * @param {VIEWPORTS} breakpointName
 */

const viewportIsAbove = (viewport, breakpointName) => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(breakpointName);
};
/**
 * Returns true if viewport is not `UNKNOWN` and is >= desktop.
 *
 * @param {VIEWPORTS} viewport
 */

const isDesktopOrAbove = viewport => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(VIEWPORTS.MEDIUM);
};
/** Returns the name of the viewport (see `BREAKPOINTS_NAMES`) */

const getViewportFromWidth = width => {
  const breakpointIdx = lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default()(BREAKPOINTS_WIDTHS, b => width >= b);

  return breakpointIdx === -1 ? BREAKPOINTS_NAMES[0] : BREAKPOINTS_NAMES[breakpointIdx];
};
/** Function to build component's state */

const getStateBuilder = (withWidth, withHeight) => {
  if (withWidth && withHeight) {
    return (width, height, viewport) => ({
      width,
      height,
      viewport
    });
  } else if (withWidth) {
    return (width, height, viewport) => ({
      width,
      viewport
    });
  } else if (withHeight) {
    return (width, height, viewport) => ({
      height,
      viewport
    });
  } else {
    return (width, height, viewport) => ({
      viewport
    });
  }
};
/**
 * Watch window resize and provide info about the screen size. Has default to
 * properly render on SSR (customizable with `defaultViewport`).
 *
 * @param {ReactNode} ChildComponent
 * @param {object} options
 *  - `withWidth` (default: false) - pass the width of the window
 *  - `withHeight` (default: false) - pass the height of the window
 *  - `defaultViewport` (default: UNKNOWN) - if detection fails, fallback on this screen size
 */


const withViewport = (ChildComponent, options) => {
  const {
    withWidth,
    withHeight,
    defaultViewport = VIEWPORTS.UNKNOWN
  } = options || {};
  const buildState = getStateBuilder(withWidth || false, withHeight || false);
  return class Viewport extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
    // Default height usually doesn't matters much, so we use the width as default
    constructor(props) {
      super(props); // Always initialize without `window`, to make sure SSR and client render are the same
      // Could trigger "DOM not matching" errors otherwise

      _defineProperty(this, "doResize", () => {
        const viewport = getViewportFromWidth(window.innerWidth);
        const state = buildState(window.innerWidth, window.innerHeight, viewport);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(this.state, state)) {
          this.setState(state);
        }
      });

      this.state = buildState(BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], defaultViewport);
    }

    componentDidMount() {
      this.doResize();
      this.onResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.doResize, 500, {
        maxWait: 300
      });
      window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    render() {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ChildComponent, _objectSpread(_objectSpread({}, this.state), this.props));
    }

  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withViewport);

/***/ }),

/***/ 83156:
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
/* harmony import */ var _components_collectives_sections_LearnMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69194);
/* harmony import */ var _components_collectives_sections_WeAreOpen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67712);
/* harmony import */ var _components_e2c_ExitToCommunitySection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56687);
/* harmony import */ var _components_e2c_InvestingInTheCommonsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67100);
/* harmony import */ var _components_e2c_JoinTheMovementSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95878);
/* harmony import */ var _components_e2c_OCIsATechPlatformSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51087);
/* harmony import */ var _components_e2c_ResourcesSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24746);
/* harmony import */ var _components_e2c_WhatDoesE2CMeanSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8500);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_10__]);
_components_Page__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  defaultTitle: {
    id: "OC.e2c",
    defaultMessage: [{
      "type": 0,
      "value": "Exit to Community"
    }]
  }
});

const E2C = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    description: formatMessage(messages.defaultTitle),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_e2c_ExitToCommunitySection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_e2c_WhatDoesE2CMeanSection__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_e2c_InvestingInTheCommonsSection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_e2c_OCIsATechPlatformSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_e2c_ResourcesSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_collectives_sections_WeAreOpen__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_collectives_sections_LearnMore__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      page: "e2c"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_e2c_JoinTheMovementSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})]
  });
};

E2C.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "E2C"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (E2C);
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

/***/ 38218:
/***/ ((module) => {

module.exports = require("@styled-icons/material/ArrowBack");

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

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

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

/***/ 86646:
/***/ ((module) => {

module.exports = require("lodash/zipObject");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7667,5106,5842,8355,5751], () => (__webpack_exec__(83156)));
module.exports = __webpack_exports__;

})();