(() => {
var exports = {};
exports.id = 8789;
exports.ids = [8789,4812];
exports.modules = {

/***/ 29363:
/***/ ((module) => {

module.exports = "/_next/static/images/acceptContributionsHostHoverIllustration-29960b9b5f47902ac962b60d5a853150.png";

/***/ }),

/***/ 3656:
/***/ ((module) => {

module.exports = "/_next/static/images/acceptContributionsHostIllustration-bd2c1a5de82edfbecddbdc126754b60e.png";

/***/ }),

/***/ 71540:
/***/ ((module) => {

module.exports = "/_next/static/images/acceptContributionsMyselfHoverIllustration-762b1695a23d6e7436fe932e63b2f5e7.png";

/***/ }),

/***/ 79280:
/***/ ((module) => {

module.exports = "/_next/static/images/acceptContributionsMyselfIllustration-76a5cce35340a71666796c1fee3dc040.png";

/***/ }),

/***/ 83987:
/***/ ((module) => {

module.exports = "/_next/static/images/acceptContributionsOrganizationHoverIllustration-5064071a3536c78ae1bfe75104222fdb.png";

/***/ }),

/***/ 5233:
/***/ ((module) => {

module.exports = "/_next/static/images/acceptContributionsSuccessIllustration-085a7f7f7c23c824d739868a20540b49.png";

/***/ }),

/***/ 89437:
/***/ ((module) => {

module.exports = "/_next/static/images/bankAccountIllustration-135cfd7867b07eaf96f8c6aa56266379.png";

/***/ }),

/***/ 32349:
/***/ ((module) => {

module.exports = "/_next/static/images/becomeFiscalHostIllustration-938614b8f2d9d49fa708972574b8a9dc.png";

/***/ }),

/***/ 38690:
/***/ ((module) => {

module.exports = "/_next/static/images/stripeIllustration-df74b8a1e963fac69da0a4568a9f8e97.png";

/***/ }),

/***/ 54812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37278);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84842);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78720);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_6__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__]);
([_Page__WEBPACK_IMPORTED_MODULE_6__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["LoggedInUser", "loadingLoggedInUser"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










/**
 * A wrapper around `Page` that will display a spinner while user is loading.
 * If authentication fails, users will be prompted with a form to login that will
 * redirect them to the correct page once they do.
 *
 * Unless a `noRobots={true}` is provided, pages wrapped with this helper will not be indexed
 * by default.
 *
 * ## Usage
 *
 * ```jsx
 * <AuthenticatedPage>
 *   {(LoggedInUser) => (
 *     <div>
 *       Hello {LoggedInUser.collective.name}!
 *     </div>
 *   )}
 * </AuthenticatedPage>
 * ```
 */




class AuthenticatedPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  renderContent(loadingLoggedInUser, LoggedInUser) {
    if (!LoggedInUser) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: "center",
        py: [5, null, 6],
        px: 2,
        children: loadingLoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            type: "warning",
            mb: 4,
            maxWidth: 400,
            withIcon: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "authorization.loginRequired",
              defaultMessage: [{
                "type": 0,
                "value": "You need to be logged in to continue."
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            defaultForm: "signin",
            disableSignup: this.props.disableSignup
          })]
        })
      });
    } else if (this.props.rootOnly && !LoggedInUser.isRoot) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          type: "warning",
          my: [5, 6, 7],
          maxWidth: 400,
          withIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "AuthenticatedPage.RootOnly",
            defaultMessage: [{
              "type": 0,
              "value": "This page is limited to site administrators"
            }]
          })
        })
      });
    } else if (typeof this.props.children === 'function') {
      return this.props.children(LoggedInUser);
    } else {
      return this.props.children;
    }
  }

  render() {
    const _this$props = this.props,
          {
      LoggedInUser,
      loadingLoggedInUser
    } = _this$props,
          pageProps = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Page__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      noRobots: true
    }, pageProps), {}, {
      children: this.renderContent(loadingLoggedInUser, LoggedInUser)
    }));
  }

}

AuthenticatedPage.__docgenInfo = {
  "description": "A wrapper around `Page` that will display a spinner while user is loading.\nIf authentication fails, users will be prompted with a form to login that will\nredirect them to the correct page once they do.\n\nUnless a `noRobots={true}` is provided, pages wrapped with this helper will not be indexed\nby default.\n\n## Usage\n\n```jsx\n<AuthenticatedPage>\n  {(LoggedInUser) => (\n    <div>\n      Hello {LoggedInUser.collective.name}!\n    </div>\n  )}\n</AuthenticatedPage>\n```",
  "methods": [{
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "loadingLoggedInUser",
      "type": null
    }, {
      "name": "LoggedInUser",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "AuthenticatedPage",
  "props": {
    "children": {
      "description": "A child renderer to call when user is properly authenticated",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "node"
        }]
      },
      "required": false
    },
    "disableSignup": {
      "description": "Whether user can signup on this page",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "rootOnly": {
      "description": "Whether this page is limited to root users",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_8__/* .withUser */ .ns)(AuthenticatedPage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 82497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const TranslatedTags = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ASSOCIATION */ .B3.ASSOCIATION]: {
    id: "collective.category.association",
    defaultMessage: [{
      "type": 0,
      "value": "Association"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COLLECTIVE */ .B3.COLLECTIVE]: {
    id: "Collective",
    defaultMessage: [{
      "type": 0,
      "value": "Collective"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.CONFERENCE */ .B3.CONFERENCE]: {
    id: "Tags.CONFERENCE",
    defaultMessage: [{
      "type": 0,
      "value": "Conference"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COOPERATIVE */ .B3.COOPERATIVE]: {
    id: "collective.category.coop",
    defaultMessage: [{
      "type": 0,
      "value": "Cooperative"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.OPEN_SOURCE */ .B3.OPEN_SOURCE]: {
    id: "Tags.OPEN_SOURCE",
    defaultMessage: [{
      "type": 0,
      "value": "Open source"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEDIA */ .B3.MEDIA]: {
    id: "Tags.MEDIA",
    defaultMessage: [{
      "type": 0,
      "value": "Media"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEETUP */ .B3.MEETUP]: {
    id: "collective.category.meetup",
    defaultMessage: [{
      "type": 0,
      "value": "Meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MOVEMENT */ .B3.MOVEMENT]: {
    id: "collective.category.movement",
    defaultMessage: [{
      "type": 0,
      "value": "Movement"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.POLITICS */ .B3.POLITICS]: {
    id: "Tags.POLITICS",
    defaultMessage: [{
      "type": 0,
      "value": "Politics"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.TECH_MEETUP */ .B3.TECH_MEETUP]: {
    id: "Tags.TECH_MEETUP",
    defaultMessage: [{
      "type": 0,
      "value": "Tech meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.US_NONPROFIT */ .B3.US_NONPROFIT]: {
    id: "Tags.US_NONPROFIT",
    defaultMessage: [{
      "type": 0,
      "value": "US nonprofit"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.EVENT */ .B3.EVENT]: {
    id: "ContributionType.Event",
    defaultMessage: [{
      "type": 0,
      "value": "Event"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.USER */ .B3.USER]: {
    id: "Tags.USER",
    defaultMessage: [{
      "type": 0,
      "value": "User"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ORGANIZATION */ .B3.ORGANIZATION]: {
    id: "Tags.ORGANIZATION",
    defaultMessage: [{
      "type": 0,
      "value": "Organization"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.FUND */ .B3.FUND]: {
    id: "Tags.FUND",
    defaultMessage: [{
      "type": 0,
      "value": "Fund"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.PROJECT */ .B3.PROJECT]: {
    id: "ContributionType.Project",
    defaultMessage: [{
      "type": 0,
      "value": "Project"
    }]
  }
});
/** Translates a list of tags */

class I18nCollectiveTags extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      intl,
      children,
      tags,
      ignoreUntranslated
    } = this.props;
    const tagsToTranslate = typeof tags === 'string' ? [tags] : tags;
    const processedTags = tagsToTranslate.map(tag => {
      if (TranslatedTags[tag]) {
        return {
          value: intl.formatMessage(TranslatedTags[tag]),
          isTranslated: true
        };
      } else {
        return {
          value: tag,
          isTranslated: false
        };
      }
    });
    return children(ignoreUntranslated ? processedTags.filter(t => t.isTranslated) : processedTags);
  }

}

_defineProperty(I18nCollectiveTags, "defaultProps", {
  ignoreUntranslated: false,

  /** Default renderer, will render a string list */
  children: tags => {
    return tags.map((tag, index, translatedTags) => {
      if (index === translatedTags.length - 1) {
        return tag.value;
      } else {
        return `${tag.value}, `;
      }
    });
  }
});

I18nCollectiveTags.__docgenInfo = {
  "description": "Translates a list of tags",
  "methods": [],
  "displayName": "I18nCollectiveTags",
  "props": {
    "ignoreUntranslated": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Ignore tags if translation is missing",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "tags => {\n  return tags.map((tag, index, translatedTags) => {\n    if (index === translatedTags.length - 1) {\n      return tag.value;\n    } else {\n      return `${tag.value}, `;\n    }\n  });\n}",
        "computed": false
      },
      "description": "A function used to render the tag",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "tags": {
      "description": "A tag or a list of tags",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "string"
          }
        }]
      },
      "required": true
    },
    "intl": {
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(I18nCollectiveTags));

/***/ }),

/***/ 41216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5700);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82497);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97619);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

const _excluded = ["collective", "tag", "bodyHeight", "children", "borderRadius", "showWebsite", "useLink"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const MaskSVG = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  width: "216",
  height: "94",
  fill: "none",
  version: "1.1",
  viewBox: "0 0 216 94"
}, props), {}, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("mask", {
      width: "218",
      height: "106",
      x: "-1",
      y: "-1",
      maskUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        fill: "#fff",
        d: "M0 8a8 8 0 018-8h200a8 8 0 018 8v95.719H0V8z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        stroke: "#141414",
        strokeOpacity: "0.08",
        d: "M216 104.219h.5V8A8.5 8.5 0 00208-.5H8A8.5 8.5 0 00-.5 8v96.219H216z"
      })]
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
      fill: "#fff",
      fillOpacity: "1",
      strokeWidth: "1.019",
      d: "M-29.076-51.033V94.016h350.922v-145.05zm7.889 10.678h320.992v122.23l-30.217.016C148.917 81.89 42.4 33.48-21.188-40.355z",
      clipPath: "none",
      opacity: "1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("g", {
      fillRule: "evenodd",
      stroke: "#000",
      clipRule: "evenodd",
      opacity: "0.256",
      transform: "translate(-.473 -2.219)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M154.819 85.253a1.097 1.097 0 10.242-2.18 1.097 1.097 0 10-.242 2.18z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M136.433 82.941a.825.825 0 10.184-1.64.825.825 0 00-.184 1.64z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M203.299 87.726a1.474 1.474 0 001.628-1.3 1.473 1.473 0 00-1.303-1.625 1.471 1.471 0 10-.325 2.925z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M114.367 70.557a1.883 1.883 0 002.08-1.66 1.881 1.881 0 00-1.665-2.076 1.88 1.88 0 10-.415 3.737z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M186.109 83.318a2.378 2.378 0 10.525-4.726 2.381 2.381 0 00-2.63 2.101 2.379 2.379 0 002.105 2.625z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M143.791 80.918a2.919 2.919 0 003.224-2.574 2.916 2.916 0 00-2.58-3.217 2.919 2.919 0 00-3.224 2.575 2.916 2.916 0 002.58 3.216z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M212.607 84.193a3.386 3.386 0 003.74-2.987 3.382 3.382 0 00-2.993-3.732 3.385 3.385 0 00-3.74 2.987 3.382 3.382 0 002.993 3.732z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M163.805 82.538c3.205.354 6.092-1.951 6.447-5.15a5.83 5.83 0 00-5.16-6.433c-3.205-.355-6.091 1.95-6.446 5.149a5.829 5.829 0 005.159 6.434z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M128.729 71.28c3.205.355 6.092-1.95 6.447-5.149a5.83 5.83 0 00-5.16-6.434 5.837 5.837 0 00-6.447 5.15 5.83 5.83 0 005.16 6.433z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M66.675 52.908a1.1 1.1 0 001.456-.543 1.1 1.1 0 00-2-.909 1.096 1.096 0 00.544 1.452z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M53.207 44.413a.824.824 0 10.685-1.5.824.824 0 10-.685 1.5z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M91.587 58.032c.946.43 2.063.013 2.494-.931a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.934 2.49z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M49.346 37.675c.947.43 2.064.013 2.495-.932a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.933 2.49z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M78.377 55.988a3.142 3.142 0 004.158-1.553 3.13 3.13 0 00-1.556-4.149 3.142 3.142 0 00-4.158 1.553 3.13 3.13 0 001.556 4.15z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M60.83 44.779a2.922 2.922 0 003.867-1.444 2.911 2.911 0 00-1.447-3.86 2.922 2.922 0 00-3.867 1.445 2.911 2.911 0 001.447 3.859z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M101.667 57.106a4.87 4.87 0 006.445-2.407 4.853 4.853 0 00-2.412-6.432 4.87 4.87 0 00-6.445 2.407 4.852 4.852 0 002.412 6.432z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M72.624 47.481a5.844 5.844 0 007.734-2.888 5.822 5.822 0 00-2.895-7.718 5.844 5.844 0 00-7.733 2.888 5.822 5.822 0 002.894 7.718z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M49.527 30.937a5.844 5.844 0 007.734-2.889 5.822 5.822 0 00-2.894-7.718 5.844 5.844 0 00-7.734 2.889 5.822 5.822 0 002.894 7.718z"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
      fill: "#000",
      stroke: "#d7dbe0",
      d: "M299.255-21.884v-.6c-21.806-.021-46.554-.047-72.687-.075-83.118-.088-180.234-.191-241.156-.192C7.777 6.713 53.995 31.648 99.682 50.092c46.031 18.583 91.412 30.534 111.052 33.881 13.3 2.267 32.194 2.943 49.455 2.397 8.627-.273 16.833-.85 23.715-1.684 6.667-.808 12.04-1.85 15.351-3.068V-18.991z",
      opacity: "0.063"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
      fill: "#000",
      stroke: "#c0c5cc",
      d: "M15.177 4.672c-12.039-9.276-19.48-21.62-16.53-37.18 12.985-.001 57.111-.049 108.753-.104l33.53-.037c65.42-.07 134.576-.14 164.911-.14v58.76c0 .942.247 2.058.644 3.295.4 1.243.963 2.642 1.62 4.158.513 1.185 1.08 2.438 1.675 3.75.937 2.067 1.942 4.283 2.904 6.614 3.141 7.611 5.693 16.147 3.643 23.681-2.028 7.45-8.62 14.098-24.231 17.838-15.628 3.744-40.181 4.537-77.885.323-37.237-4.162-66.277-17.735-90.837-31.272-5.346-2.946-10.491-5.898-15.464-8.75-6.43-3.688-12.57-7.211-18.484-10.344-10.503-5.563-20.374-9.944-30.062-11.925-15.249-3.119-32.031-9.301-44.187-18.667z",
      opacity: "0.06"
    })]
  })]
}));

const StyledBackgroundMask = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MaskSVG).withConfig({
  displayName: "StyledCollectiveCard__StyledBackgroundMask",
  componentId: "sc-10dx9zk-0"
})(["width:101%;height:102%;top:0;left:-1px;position:absolute;"]);

const getBackground = collective => {
  const parent = collective.parentCollective || collective.parent;
  const backgroundImage = collective.backgroundImageUrl || parent?.backgroundImageUrl;

  const primaryColor = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective.settings, 'collectivePage.primaryColor', '#1776E1');

  return backgroundImage ? `url(${backgroundImage}) 0 0 / cover no-repeat, ${primaryColor}` : primaryColor;
};

const CollectiveContainer = ({
  useLink,
  collective,
  children
}) => {
  if (useLink) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      collective: collective,
      children: children
    });
  } else {
    return children;
  }
};

/**
 * A card to show a collective that supports including a custom body.
 */
const StyledCollectiveCard = _ref => {
  let {
    collective,
    tag,
    bodyHeight,
    children,
    borderRadius,
    showWebsite,
    useLink
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    "data-cy": `${collective.slug}-collective-card`
  }, props), {}, {
    position: "relative",
    borderRadius: borderRadius,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "absolute",
      width: "95%",
      right: "0",
      pt: "41.25%",
      style: {
        background: getBackground(collective),
        filter: collective.isFrozen ? 'grayscale(1)' : undefined
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledBackgroundMask, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        height: 74,
        px: 3,
        pt: 26,
        style: {
          filter: collective.isFrozen ? 'grayscale(1)' : undefined
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          borderRadius: borderRadius,
          background: "white",
          width: 48,
          border: "3px solid white",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
              "data-cy": "collective-avatar",
              collective: collective,
              radius: 48
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: bodyHeight,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          p: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
              mt: 3,
              fontSize: "16px",
              fontWeight: "bold",
              color: "black.800",
              title: collective.name,
              truncateOverflow: true,
              children: collective.name
            })
          }), showWebsite && collective.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
            fontSize: "11px",
            fontWeight: "400",
            title: collective.website,
            truncateOverflow: true,
            mt: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              color: "black.600",
              href: collective.website,
              openInNewTabNoFollow: true,
              children: collective.website
            })
          }), collective.isFrozen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            display: "inline-block",
            variant: "rounded-right",
            my: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              tags: intl.formatMessage({
                id: "gDbURz",
                defaultMessage: [{
                  "type": 0,
                  "value": "This Collective is frozen"
                }]
              })
            })
          }) : tag === undefined ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            display: "inline-block",
            variant: "rounded-right",
            my: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              tags: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__/* .getCollectiveMainTag */ .CJ)(lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'host.id'), collective.tags, collective.type)
            })
          }) : tag]
        }), children]
      })]
    })]
  }));
};

StyledCollectiveCard.defaultProps = {
  bodyHeight: 260,
  borderRadius: 16,
  useLink: true
};
StyledCollectiveCard.__docgenInfo = {
  "description": "A card to show a collective that supports including a custom body.",
  "methods": [],
  "displayName": "StyledCollectiveCard",
  "props": {
    "bodyHeight": {
      "defaultValue": {
        "value": "260",
        "computed": false
      },
      "description": "A fixed height for the content",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "borderRadius": {
      "defaultValue": {
        "value": "16",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "useLink": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "Displayed below the top header of the card",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "tag": {
      "description": "To replace the default tag. Set to `null` to hide tag",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "The collective to display",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "website": {
            "name": "string",
            "required": false
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "union",
                "value": [{
                  "name": "number"
                }, {
                  "name": "string"
                }],
                "required": false
              }
            },
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "isFrozen": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "showWebsite": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(StyledCollectiveCard));

/***/ }),

/***/ 44794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_fp_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43302);
/* harmony import */ var lodash_fp_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_boxicons_regular_PlusCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14722);
/* harmony import */ var _styled_icons_boxicons_regular_PlusCircle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_PlusCircle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56508);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11194);
/* harmony import */ var _collective_navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38208);
/* harmony import */ var _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71611);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69078);
/* harmony import */ var _CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34861);
/* harmony import */ var _expenses_PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38884);
/* harmony import */ var _faqs_FinancialContributionsFAQ__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20574);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(51927);
/* harmony import */ var _StripeOrBankAccountPicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(72233);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsOrganizationHoverIllustration_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(83987);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsOrganizationHoverIllustration_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_acceptContributionsOrganizationHoverIllustration_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_navbar__WEBPACK_IMPORTED_MODULE_15__, _CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__, _expenses_PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_19__]);
([_collective_navbar__WEBPACK_IMPORTED_MODULE_15__, _CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__, _expenses_PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























const {
  ORGANIZATION
} = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .CollectiveType */ .eV;
const CreateNewOrg = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC).withConfig({
  displayName: "AcceptContributionsOurselvesOrOrg__CreateNewOrg",
  componentId: "sc-lw6ce0-0"
})(["border:1px solid lightgray;border-radius:10px;padding:20px;cursor:pointer;"]);
const OrgCard = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC).withConfig({
  displayName: "AcceptContributionsOurselvesOrOrg__OrgCard",
  componentId: "sc-lw6ce0-1"
})(["cursor:pointer;border-radius:10px;&:hover{background:rgba(0,0,0,0.1);}"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_9___default().img.withConfig({
  displayName: "AcceptContributionsOurselvesOrOrg__Image",
  componentId: "sc-lw6ce0-2"
})(["@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);

class AcceptContributionsOurselvesOrOrg extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "addHost", async (collective, host) => {
      const collectiveInput = {
        slug: collective.slug
      };
      const hostInput = {
        slug: host.slug
      };

      try {
        await this.props.applyToHost({
          variables: {
            collective: collectiveInput,
            host: hostInput
          },
          refetchQueries: [{
            query: _collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_16__/* .collectivePageQuery */ .J,
            variables: {
              slug: this.props.collective.slug
            }
          }],
          awaitRefetchQueries: true
        });
      } catch (err) {
        const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .getErrorFromGraphqlException */ .H1)(err).message;
        throw new Error(errorMsg);
      }
    });

    _defineProperty(this, "submitBankAccountInformation", async payoutMethodData => {
      // prepare objects
      const account = {
        legacyId: this.state.organization ? this.state.organization.id : this.props.collective.id
      }; // try mutation

      try {
        await this.props.createPayoutMethod({
          variables: {
            payoutMethod: {
              data: _objectSpread(_objectSpread({}, payoutMethodData), {}, {
                isManualBankTransfer: true
              }),
              type: 'BANK_ACCOUNT'
            },
            account
          }
        });
        await this.props.editBankAccount({
          variables: {
            account,
            key: 'paymentMethods',
            value: {
              manual: {
                title: 'Bank transfer',
                features: {
                  recurring: false
                },
                instructions: _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .BANK_TRANSFER_DEFAULT_INSTRUCTIONS */ .kD
              }
            }
          }
        });
      } catch (err) {
        const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .getErrorFromGraphqlException */ .H1)(err).message;
        throw new Error(errorMsg);
      }
    });

    this.state = {
      loading: null,
      miniForm: false,
      organization: null
    };
  }

  componentDidMount() {
    this.loadHost();
  }

  componentDidUpdate() {
    this.loadHost();
  }

  loadHost() {
    if (!this.state.organization && this.props.collective.host) {
      this.setState({
        organization: this.props.collective.host
      });
    }
  } // GraphQL functions


  render() {
    const {
      collective,
      router,
      LoggedInUser
    } = this.props;
    const {
      error,
      miniForm,
      organization,
      loading
    } = this.state; // Get and filter orgs LoggedInUser is part of

    const memberships = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(LoggedInUser.memberOf.filter(m => m.role === 'ADMIN'), m => m.collective.id);

    const orgs = memberships.filter(m => m.collective.type === ORGANIZATION).sort((a, b) => {
      return a.collective.slug.localeCompare(b.collective.slug);
    }); // Form values and submit

    const initialValues = {
      data: {}
    };

    const submit = async values => {
      try {
        this.setState({
          loading: true
        });
        const {
          data
        } = values;
        await this.submitBankAccountInformation(data); // At this point, we don't need to do anything for Organization
        // they're supposed to be already a Fiscal Host with budget activated

        if (collective.type !== ORGANIZATION) {
          if (organization) {
            // Apply to the Host organization
            await this.addHost(collective, organization);
          } else {
            // Activate Self Hosting
            await this.addHost(collective, collective);
          }
        }

        await this.props.refetchLoggedInUser();
        await this.props.router.push(`/${this.props.collective.slug}/accept-financial-contributions/${this.props.router.query.path}/success`);
        window.scrollTo(0, 0);
      } catch (e) {
        this.setState({
          loading: false
        });
        this.setState({
          error: e
        });
      }
    };

    const host = organization ? organization : collective; // Conditional rendering

    const noOrganizationPicked = router.query.path === 'organization' && !organization;
    const organizationPicked = router.query.path === 'organization' && organization;
    const ableToChooseStripeOrBankAccount = organizationPicked && !router.query.method || ['myself', 'ourselves'].includes(router.query.path) && !router.query.method;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_collective_navbar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        collective: collective
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Box */ .xu, {
        mb: 2,
        mt: 5,
        mx: [2, 6],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.H1, {
          fontSize: ['20px', '32px'],
          lineHeight: ['24px', '36px'],
          fontWeight: "bold",
          color: "black.900",
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "acceptContributions.picker.header",
            defaultMessage: [{
              "type": 0,
              "value": "Accept financial contributions"
            }]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          maxWidth: '575px',
          my: 2,
          mx: [3, 0],
          children: noOrganizationPicked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(Image, {
              src: (_public_static_images_create_collective_acceptContributionsOrganizationHoverIllustration_png__WEBPACK_IMPORTED_MODULE_28___default()),
              alt: ""
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.H2, {
              fontSize: "20px",
              fontWeight: "bold",
              color: "black.900",
              textAlign: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                id: "acceptContributions.organization.subtitle",
                defaultMessage: [{
                  "type": 0,
                  "value": "Our Own Fiscal Host"
                }]
              })
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
              collective: organizationPicked ? organization : collective,
              radius: 64,
              mb: 2
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: "bold",
              mb: 3,
              children: organizationPicked ? organization.name : collective.name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.H2, {
              fontSize: "20px",
              fontWeight: "bold",
              color: "black.900",
              textAlign: "center",
              children: router.query.method === 'bank' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                id: "acceptContributions.addBankAccount",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add bank account"
                }]
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                id: "acceptContributions.howAreYouAcceptingContributions",
                defaultMessage: [{
                  "type": 0,
                  "value": "How are you accepting contributions?"
                }]
              })
            })]
          })
        }), noOrganizationPicked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 3,
          minWidth: '450px',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
            px: 3,
            width: "100%",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
              my: 2,
              fontSize: "12px",
              textTransform: "uppercase",
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                id: "acceptContributions.organization.myOrgs",
                defaultMessage: [{
                  "type": 0,
                  "value": "My organizations"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
              flexGrow: 1,
              alignItems: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                width: "100%",
                ml: 2
              })
            })]
          }), orgs.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
            px: 3,
            width: "100%",
            flexDirection: "column",
            children: orgs.map(org => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(OrgCard, {
              alignItems: "center",
              my: 2,
              onClick: () => this.setState({
                organization: org.collective
              }),
              "data-cy": "afc-organization-org-card",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
                radius: 56,
                collective: org.collective
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
                flexDirection: "column",
                ml: 3,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
                  color: "black.900",
                  mb: 1,
                  children: org.collective.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
                  color: "black.600",
                  children: ["@", org.collective.slug]
                })]
              })]
            }, org.collective.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
            px: 3,
            width: "100%",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
              my: 2,
              fontSize: "12px",
              textTransform: "uppercase",
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                id: "CollectivePicker.CreateNew",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create new"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
              flexGrow: 1,
              alignItems: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                width: "100%",
                ml: 2
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
            my: 2,
            px: 3,
            flexDirection: "column",
            width: "100%",
            children: miniForm ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_CreateCollectiveMiniForm__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              type: "ORGANIZATION",
              onCancel: () => this.setState({
                miniForm: false
              }),
              onSuccess: data => this.setState({
                organization: data
              }),
              LoggedInUser: LoggedInUser,
              addLoggedInUserAsAdmin: true,
              excludeAdminFields: true
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(CreateNewOrg, {
              alignItems: "center",
              onClick: () => this.setState({
                miniForm: true
              }),
              "data-cy": "afc-organization-create-new",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_styled_icons_boxicons_regular_PlusCircle__WEBPACK_IMPORTED_MODULE_5__.PlusCircle, {
                size: "24",
                color: "gray"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
                fontSize: "12px",
                color: "black.800",
                ml: 2,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "Organization.CreateNew",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Create new Organization"
                  }]
                })
              })]
            })
          })]
        }), router.query.method === 'bank' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
          flexDirection: ['column', 'row'],
          justifyContent: 'space-evenly',
          mx: [2, 4],
          my: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Box */ .xu, {
            width: 1 / 5,
            display: ['none', null, 'block']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
            width: [1, 1 / 2],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 3,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Box */ .xu, {
              alignItems: "center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
                color: "black.900",
                textAlign: "left",
                mt: [2, 3],
                fontWeight: "bold",
                fontSize: "14px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "paymentMethods.manual.HowDoesItWork",
                  defaultMessage: [{
                    "type": 0,
                    "value": "How does it work?"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
                color: "black.900",
                textAlign: "left",
                mt: [2, 3],
                fontSize: "14px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "acceptContributions.HowDoesItWork.details",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Financial contributors will be able to choose 'Bank transfer' as a payment method, and instructions will be emailed to them. You can confirm once you receive the money, and the funds will be credited to the Collective's balance. You can edit the bank transfer instructions in the 'receiving money' section of your settings."
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
                initialValues: initialValues,
                onSubmit: submit,
                children: formik => {
                  const {
                    handleSubmit
                  } = formik;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Box */ .xu, {
                      width: ['100%', '75%'],
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_expenses_PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        getFieldName: string => string // Fix currency if it was already linked to Stripe
                        ,
                        fixedCurrency: host.connectedAccounts?.find?.(ca => ca.service === 'stripe') && host.currency,
                        isNew: true
                      })
                    }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        type: "error",
                        flexGrow: 1,
                        withIcon: true,
                        mt: 3,
                        children: error.message
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
                      justifyContent: 'center',
                      mt: 3,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        fontSize: "13px",
                        minWidth: '85px',
                        minHeight: "36px",
                        type: "button",
                        onClick: () => {
                          this.props.router.push(`${this.props.collective.slug}/accept-financial-contributions/${this.props.router.query.path}`).then(() => window.scrollTo(0, 0));
                        },
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                          id: "actions.cancel",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Cancel"
                          }]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        fontSize: "13px",
                        minWidth: '85px',
                        minHeight: "36px",
                        ml: 2,
                        buttonStyle: "dark",
                        type: "submit",
                        loading: loading,
                        onSubmit: handleSubmit,
                        "data-cy": "afc-add-bank-info-submit",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                          id: "save",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Save"
                          }]
                        })
                      })]
                    })]
                  });
                }
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_21__/* .Flex */ .kC, {
            justifyContent: "center",
            width: [1, 1 / 3, 1 / 5],
            my: [3, 0],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_faqs_FinancialContributionsFAQ__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
              width: ['90%', '100%']
            })
          })]
        }), ableToChooseStripeOrBankAccount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StripeOrBankAccountPicker__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
          collective: collective,
          host: host,
          addHost: this.addHost
        })]
      })]
    });
  }

}

const createPayoutMethodMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation CreatePayoutMethod($payoutMethod: PayoutMethodInput!, $account: AccountReferenceInput!) {
    createPayoutMethod(payoutMethod: $payoutMethod, account: $account) {
      data
      id
      name
      type
    }
  }
`;
const addCreatePayoutMethodMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(createPayoutMethodMutation, {
  name: 'createPayoutMethod',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }
});
const editBankAccountMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation EditBankAccount($account: AccountReferenceInput!, $key: AccountSettingsKey!, $value: JSON!) {
    editAccountSetting(account: $account, key: $key, value: $value) {
      id
      settings
    }
  }
`;
const addEditBankAccountMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(editBankAccountMutation, {
  name: 'editBankAccount',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }
});
const applyToHostMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation ApplyToHost($collective: AccountReferenceInput!, $host: AccountReferenceInput!) {
    applyToHost(collective: $collective, host: $host) {
      id
      slug
      ... on AccountWithHost {
        host {
          id
          slug
        }
      }
    }
  }
`;
const addApplyToHostMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(applyToHostMutation, {
  name: 'applyToHost',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }
});

const inject = lodash_fp_compose__WEBPACK_IMPORTED_MODULE_1___default()(_UserProvider__WEBPACK_IMPORTED_MODULE_26__/* .withUser */ .ns, next_router__WEBPACK_IMPORTED_MODULE_7__.withRouter, addApplyToHostMutation, addEditBankAccountMutation, addCreatePayoutMethodMutation);

AcceptContributionsOurselvesOrOrg.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "loadHost",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "addHost",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "collective",
      "type": null
    }, {
      "name": "host",
      "type": null
    }],
    "returns": null
  }, {
    "name": "submitBankAccountInformation",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "payoutMethodData",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "AcceptContributionsOurselvesOrOrg",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "editBankAccount": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "createPayoutMethod": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "applyToHost": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inject(AcceptContributionsOurselvesOrOrg));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36422);
/* harmony import */ var _collective_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38208);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56562);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _HostsContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66954);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29363);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_images_create_collective_becomeFiscalHostIllustration_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32349);
/* harmony import */ var _public_static_images_create_collective_becomeFiscalHostIllustration_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_becomeFiscalHostIllustration_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_navbar__WEBPACK_IMPORTED_MODULE_4__, _HostsContainer__WEBPACK_IMPORTED_MODULE_11__]);
([_collective_navbar__WEBPACK_IMPORTED_MODULE_4__, _HostsContainer__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const FISCAL_HOST_LINK = 'https://docs.opencollective.com/help/fiscal-hosts/become-a-fiscal-host';
const FilterTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_StyledTag__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "ApplyToHost__FilterTag",
  componentId: "sc-1w60lty-0"
})(["font-size:14px;border-top-right-radius:50px;border-bottom-right-radius:50px;text-transform:none;display:flex;align-items:center;width:fit-content;cursor:pointer;"]);
const InterestedContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "ApplyToHost__InterestedContainer",
  componentId: "sc-1w60lty-1"
})(["box-shadow:0 1px 3px 2px rgba(46,77,97,0.1);border-radius:16px;"]);

class ApplyToHost extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "setTags", tag => {
      tag === 'all' ? this.setState({
        tags: null
      }) : this.setState({
        tags: [tag]
      });
    });

    _defineProperty(this, "getTags", tag => {
      // this will need to be updated if we decide to have more than one tag
      return tag === null ? 'all' : tag[0];
    });

    this.state = {
      tags: null
    };
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
      header: {
        id: "acceptContributions.picker.header",
        defaultMessage: [{
          "type": 0,
          "value": "Accept financial contributions"
        }]
      },
      applyToHost: {
        id: "collective.edit.host.findHost.title",
        defaultMessage: [{
          "type": 0,
          "value": "Apply to a Fiscal Host"
        }]
      },
      infoParagraph: {
        id: "fiscalHost.apply.info",
        defaultMessage: [{
          "type": 0,
          "value": "With this option, you don't need a legal entity and bank account for your project. The Fiscal Host will hold funds on your behalf, and take care of accounting, invoices, tax, admin, payments, and liability. Most Hosts charge a fee for this service (you'll have a chance to review these details before applying to join a Host)."
        }]
      },
      becomeHost: {
        id: "home.becomeFiscalHost",
        defaultMessage: [{
          "type": 0,
          "value": "Become a Fiscal Host"
        }]
      },
      interestedInHosting: {
        id: "fiscalHost.interestedInHosting",
        defaultMessage: [{
          "type": 0,
          "value": "Are you interested in fiscally hosting Collectives?"
        }]
      },
      seeMoreHosts: {
        id: "fiscalHost.seeMoreHosts",
        defaultMessage: [{
          "type": 0,
          "value": "See more Hosts"
        }]
      },
      allFiscalHosts: {
        id: "fiscalHost.allFiscalHosts",
        defaultMessage: [{
          "type": 0,
          "value": "All Fiscal Hosts"
        }]
      }
    });
    this.tagList = {
      all: props.intl.formatMessage(this.messages.allFiscalHosts),
      opensource: 'Open Source',
      // No need to translate
      'covid-19': 'COVID-19' // No need to translate

    };
  }

  render() {
    const {
      intl,
      onChange,
      collective
    } = this.props;
    const {
      tags
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_collective_navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        collective: collective
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: 4,
        mt: 5,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H1, {
          fontSize: ['20px', '32px'],
          lineHeight: ['24px', '36px'],
          fontWeight: "bold",
          color: "black.900",
          textAlign: "center",
          children: intl.formatMessage(this.messages.header)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        px: [1, null, 7],
        mb: 5,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          display: "flex",
          alignItems: ['center', 'flex-end'],
          flexDirection: ['column', null, 'row'],
          width: 1,
          px: [3, 5],
          my: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            alt: "",
            src: (_public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_12___default()),
            width: 160,
            height: 160
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            maxWidth: '480px',
            minWidth: '240px',
            ml: [0, 4],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H2, {
              fontSize: "20px",
              color: "black.900",
              textAlign: ['center', 'left'],
              my: [3, 0],
              children: intl.formatMessage(this.messages.applyToHost)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
              mb: 2,
              lineHeight: "24px",
              color: "black.700",
              children: intl.formatMessage(this.messages.infoParagraph)
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          px: [3, 5],
          my: 4,
          flexWrap: "wrap",
          children: Object.keys(this.tagList).map(tagKey => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(FilterTag, {
            px: 2,
            mr: 2,
            type: this.getTags(tags) === tagKey ? 'dark' : 'info',
            onClick: () => this.setTags(tagKey),
            children: this.tagList[tagKey]
          }, `${tagKey}-tag`))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          justifyContent: "space-between",
          alignItems: ['center', 'flex-start'],
          flexDirection: ['column', null, 'row'],
          display: "flex",
          width: 1,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_HostsContainer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            onChange: onChange,
            collective: collective,
            tags: tags
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(InterestedContainer, {
            display: "flex",
            flexDirection: ['column', 'row', 'column'],
            alignItems: "center",
            minHeight: [null, null, '750px'],
            maxWidth: ['288px', '768px', '264px'],
            minWidth: [null, null, '264px'],
            px: [4, 2],
            pt: [2, null, 6],
            pb: [4, 2, 0],
            mt: [4, 3, 5],
            mb: [4, 0],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
              order: [2, 1, 1],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H3, {
                fontSize: ['16px', '20px'],
                fontWeight: "500",
                lineHeight: ['24px', '24px'],
                color: "black.600",
                textAlign: "center",
                order: 2,
                py: [2, 0],
                children: intl.formatMessage(this.messages.interestedInHosting)
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
              order: [3, 2, 3],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                href: FISCAL_HOST_LINK,
                openInNewTab: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  buttonStyle: "dark",
                  mt: [2, 3],
                  mb: 3,
                  px: 3,
                  children: intl.formatMessage(this.messages.becomeHost)
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
              order: [1, 3, 2],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                alt: "",
                src: (_public_static_images_create_collective_becomeFiscalHostIllustration_png__WEBPACK_IMPORTED_MODULE_13___default()),
                width: 192,
                height: 192
              })
            })]
          })]
        })]
      })]
    });
  }

}

ApplyToHost.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "setTags",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "tag",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getTags",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "tag",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ApplyToHost",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(ApplyToHost));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _collective_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38208);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29363);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsHostIllustration_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3656);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsHostIllustration_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_acceptContributionsHostIllustration_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsMyselfHoverIllustration_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71540);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsMyselfHoverIllustration_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_acceptContributionsMyselfHoverIllustration_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsMyselfIllustration_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79280);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsMyselfIllustration_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_acceptContributionsMyselfIllustration_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_collective_navbar__WEBPACK_IMPORTED_MODULE_4__]);
_collective_navbar__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "ContributionCategoryPicker__Image",
  componentId: "sc-10zrd9r-0"
})(["position:absolute;@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);
const HoverImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "ContributionCategoryPicker__HoverImage",
  componentId: "sc-10zrd9r-1"
})(["position:absolute;opacity:0;&:hover{opacity:1;}@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);
const independentCollectiveMoreInfo = 'https://docs.opencollective.com/help/independent-collectives';
const applyFiscalHostMoreInfo = 'https://opencollective.com/fiscal-hosting';

class ContributionCategoryPicker extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
      header: {
        id: "acceptContributions.picker.header",
        defaultMessage: [{
          "type": 0,
          "value": "Accept financial contributions"
        }]
      },
      subtitle: {
        id: "acceptContributions.picker.subtitle",
        defaultMessage: [{
          "type": 0,
          "value": "Who will hold money on behalf of this Collective?"
        }]
      },
      ourselves: {
        id: "acceptContributions.picker.ourselves",
        defaultMessage: [{
          "type": 0,
          "value": "Independent Collective"
        }]
      },
      host: {
        id: "acceptContributions.picker.host",
        defaultMessage: [{
          "type": 0,
          "value": "Join a Fiscal Host"
        }]
      }
    });
  }

  render() {
    const {
      intl,
      router,
      collective
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_collective_navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        collective: collective
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        mb: 4,
        mt: 5,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H1, {
          fontSize: ['20px', '32px'],
          lineHeight: ['24px', '36px'],
          fontWeight: "bold",
          color: "black.900",
          textAlign: "center",
          children: intl.formatMessage(this.messages.header)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
          color: "black.600",
          textAlign: "center",
          mt: [2, 3],
          fontSize: ['12px', '14px'],
          children: intl.formatMessage(this.messages.subtitle)
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: [5, 6],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          alignItems: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: ['column', 'row'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              alignItems: "center",
              width: [null, 280, 312],
              mb: [2, 0],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
                  size: [192, 208, 256],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(Image, {
                    src: (_public_static_images_create_collective_acceptContributionsMyselfIllustration_png__WEBPACK_IMPORTED_MODULE_14___default()),
                    alt: intl.formatMessage(this.messages.ourselves)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(HoverImage, {
                    src: (_public_static_images_create_collective_acceptContributionsMyselfHoverIllustration_png__WEBPACK_IMPORTED_MODULE_13___default()),
                    alt: intl.formatMessage(this.messages.ourselves)
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  href: `/${router.query.slug}/accept-financial-contributions/ourselves`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    fontSize: "13px",
                    buttonStyle: "primary",
                    minHeight: "36px",
                    mt: [2, 4],
                    mb: 3,
                    minWidth: '145px',
                    "data-cy": "afc-picker-myself-button",
                    children: intl.formatMessage(this.messages.ourselves)
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
                  minHeight: 50,
                  px: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
                    color: "black.600",
                    textAlign: "center",
                    mt: [2, 3],
                    fontSize: ['12px', '14px'],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                      id: "acceptContributions.picker.ourselvesInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Simply connect a bank account to your Collective. You will be responsible for accounting, taxes, payments, and liability. Choose this option if you have a single Collective and want to hold funds for it yourself. "
                      }, {
                        "type": 8,
                        "value": "MoreInfoLink",
                        "children": [{
                          "type": 0,
                          "value": "More info"
                        }]
                      }],
                      values: {
                        MoreInfoLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_7__/* .getI18nLink */ .fw)({
                          href: independentCollectiveMoreInfo,
                          openInNewTab: true
                        })
                      }
                    })
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              borderLeft: ['none', '1px solid #E6E8EB'],
              borderTop: ['1px solid #E6E8EB', 'none'],
              alignItems: "center",
              width: [null, 280, 312],
              pt: [3, 0],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
                  size: [192, 208, 256],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(Image, {
                    src: (_public_static_images_create_collective_acceptContributionsHostIllustration_png__WEBPACK_IMPORTED_MODULE_12___default()),
                    alt: intl.formatMessage(this.messages.host)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(HoverImage, {
                    src: (_public_static_images_create_collective_acceptContributionsHostHoverIllustration_png__WEBPACK_IMPORTED_MODULE_11___default()),
                    alt: intl.formatMessage(this.messages.host)
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                  href: `/${router.query.slug}/accept-financial-contributions/host`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    fontSize: "13px",
                    buttonStyle: "primary",
                    minHeight: "36px",
                    mt: [2, 3],
                    mb: 3,
                    minWidth: '145px',
                    "data-cy": "afc-picker-host-button",
                    children: intl.formatMessage(this.messages.host)
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
                  minHeight: 50,
                  px: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
                    color: "black.600",
                    textAlign: "center",
                    mt: [2, 3],
                    fontSize: ['12px', '14px'],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                      id: "acceptContributions.picker.hostInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Apply to join a Fiscal Host, who will hold money on behalf of your Collective. Choose this option if you want someone else to take care of banking, accounting, taxes, payments, and liability. "
                      }, {
                        "type": 8,
                        "value": "MoreInfoLink",
                        "children": [{
                          "type": 0,
                          "value": "More info"
                        }]
                      }],
                      values: {
                        MoreInfoLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_7__/* .getI18nLink */ .fw)({
                          href: applyFiscalHostMoreInfo,
                          openInNewTab: true
                        })
                      }
                    })
                  })
                })]
              })
            })]
          })
        })
      })]
    });
  }

}

ContributionCategoryPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionCategoryPicker",
  "props": {
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(ContributionCategoryPicker)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_confettis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19196);
/* harmony import */ var _ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77596);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41216);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__]);
_ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["host", "collective", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  collectives: {
    id: "Collectives",
    defaultMessage: [{
      "type": 0,
      "value": "Collectives"
    }]
  },
  apply: {
    id: "Apply",
    defaultMessage: [{
      "type": 0,
      "value": "Apply"
    }]
  }
});

const HostCollectiveCard = _ref => {
  let {
    host,
    collective,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      collective: host,
      minWidth: 250,
      height: 350,
      position: "relative"
    }, props), {}, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        pl: 3,
        flexShrink: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          "data-cy": "caption",
          mb: 2,
          alignItems: "flex-end",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            fontSize: "16px",
            fontWeight: "bold",
            children: host.totalHostedCollectives || 0
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            ml: 2,
            fontSize: "12px",
            children: formatMessage(messages.collectives)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          buttonStyle: "dark",
          mt: [2, 3],
          mb: 2,
          px: 3,
          onClick: () => {
            setShowModal(true);
            onChange('chosenHost', host);
          },
          "data-cy": "afc-host-apply-button",
          children: formatMessage(messages.apply)
        })]
      })
    })), showModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ApplyToHostModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      hostSlug: host.slug,
      collective: collective,
      onClose: () => setShowModal(false),
      onSuccess: () => {
        return props.router.push(`${collective.slug}/accept-financial-contributions/host/success`).then(() => window.scrollTo(0, 0)).then(() => {
          (0,_lib_confettis__WEBPACK_IMPORTED_MODULE_3__/* .confettiFireworks */ .K)(5000, {
            zIndex: 3000
          });
        });
      }
    })]
  });
};

HostCollectiveCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HostCollectiveCard",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(HostCollectiveCard));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Hide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84582);
/* harmony import */ var _HorizontalScroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97049);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53169);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _HostCollectiveCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HostCollectiveCard__WEBPACK_IMPORTED_MODULE_12__]);
_HostCollectiveCard__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const LIMIT = 12; // nice round number to make even rows of 2, 3, 4

const AllCardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC).attrs({
  flexWrap: 'wrap',
  width: '90%',
  justifyContent: 'space-evenly'
}).withConfig({
  displayName: "HostsContainer__AllCardsContainer",
  componentId: "sc-149vkpn-0"
})([""]);
const AllCardsContainerMobile = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HostsContainer__AllCardsContainerMobile",
  componentId: "sc-149vkpn-1"
})(["display:flex;padding:16px;"]);
const CollectiveCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HostsContainer__CollectiveCardContainer",
  componentId: "sc-149vkpn-2"
})(["width:280px;padding:20px 15px;"]);

class HostsContainer extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
      seeMoreHosts: {
        id: "fiscalHost.seeMoreHosts",
        defaultMessage: [{
          "type": 0,
          "value": "See more Hosts"
        }]
      }
    });
  }

  render() {
    const {
      onChange,
      data,
      intl
    } = this.props;

    if (!data.hosts || !data.hosts.nodes) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        justifyContent: "center",
        width: "100%",
        py: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
      });
    }

    const hosts = [...data.hosts.nodes];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledFlex, {
      flexDirection: "column",
      flexGrow: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        md: true,
        lg: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_HorizontalScroller__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          container: AllCardsContainerMobile,
          children: hosts.map(host => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_HostCollectiveCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            host: host,
            collective: this.props.collective,
            onChange: onChange,
            style: {
              flexBasis: 250,
              height: 360,
              marginRight: 20,
              flexShrink: 0
            }
          }, host.legacyId))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Hide__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        xs: true,
        sm: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(AllCardsContainer, {
          children: hosts.map(host => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(CollectiveCardContainer, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_HostCollectiveCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              host: host,
              collective: this.props.collective,
              onChange: onChange,
              "data-cy": "afc-host-collective-card"
            }, host.legacyId)
          }, `${host.legacyId}-container`))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        justifyContent: "center",
        mt: [2, 0],
        width: ['100%', null, '90%'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          href: "/search?isHost=true",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            fontSize: "13px",
            buttonStyle: "dark",
            minHeight: "36px",
            mt: [2, 3],
            mb: 3,
            px: 4,
            children: intl.formatMessage(this.messages.seeMoreHosts)
          })
        })
      })]
    });
  }

}

const hostsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query AcceptFinancialContributionsHosts($tags: [String], $limit: Int) {
    hosts(tag: $tags, limit: $limit) {
      totalCount
      nodes {
        id
        legacyId
        createdAt
        settings
        type
        name
        slug
        description
        longDescription
        currency
        totalHostedCollectives
        hostFeePercent
      }
    }
  }
`;
const addHostsData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_3__.graphql)(hostsQuery, {
  options(props) {
    return {
      variables: {
        tags: props.tags,
        limit: LIMIT
      },
      context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
    };
  }

});
HostsContainer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HostsContainer",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "tags": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(addHostsData(HostsContainer)));

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC).withConfig({
  displayName: "HostsContainer___StyledFlex",
  componentId: "sc-149vkpn-3"
})({
  maxWidth: '100%'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ accept_financial_contributions_StripeOrBankAccountPicker)
});

// EXTERNAL MODULE: external "lodash/has"
var has_ = __webpack_require__(98210);
var has_default = /*#__PURE__*/__webpack_require__.n(has_);
// EXTERNAL MODULE: external "lodash/find"
var find_ = __webpack_require__(76918);
var find_default = /*#__PURE__*/__webpack_require__.n(find_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "@apollo/client/react/hoc"
var hoc_ = __webpack_require__(95159);
;// CONCATENATED MODULE: external "@styled-icons/boxicons-regular/CheckboxChecked"
const CheckboxChecked_namespaceObject = require("@styled-icons/boxicons-regular/CheckboxChecked");
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(19099);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./public/static/images/create-collective/bankAccountIllustration.png
var bankAccountIllustration = __webpack_require__(89437);
var bankAccountIllustration_default = /*#__PURE__*/__webpack_require__.n(bankAccountIllustration);
// EXTERNAL MODULE: ./public/static/images/create-collective/stripeIllustration.png
var stripeIllustration = __webpack_require__(38690);
var stripeIllustration_default = /*#__PURE__*/__webpack_require__.n(stripeIllustration);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/accept-financial-contributions/StripeOrBankAccountPicker.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const Image = external_styled_components_default().img.withConfig({
  displayName: "StripeOrBankAccountPicker__Image",
  componentId: "sc-1jntfj4-0"
})(["@media screen and (min-width:52em){height:256px;width:256px;}@media screen and (max-width:40em){height:192px;width:192px;}@media screen and (min-width:40em) and (max-width:52em){height:208px;width:208px;}"]);
const ConnectedAccountCard = external_styled_components_default()(Grid/* Flex */.kC).withConfig({
  displayName: "StripeOrBankAccountPicker__ConnectedAccountCard",
  componentId: "sc-1jntfj4-1"
})(["box-shadow:0 1px 3px 2px rgba(46,77,97,0.1);border-radius:16px;"]);
const GreenCheckbox = external_styled_components_default()(CheckboxChecked_namespaceObject.CheckboxChecked).withConfig({
  displayName: "StripeOrBankAccountPicker__GreenCheckbox",
  componentId: "sc-1jntfj4-2"
})(["color:", ";"], (0,theme_get_.themeGet)('colors.green.700'));

class StripeOrBankAccountPicker extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "connectStripe", async () => {
      const service = 'stripe';

      try {
        const json = await (0,api/* connectAccount */.Yn)(this.props.host.id, service);
        window.location.href = json.redirectUrl;
      } catch (err) {
        // TODO: this should be reported to the user
        // eslint-disable-next-line no-console
        console.error(`>>> /api/connected-accounts/${service} error`, err);
      }
    });

    this.state = {
      buttonLoading: false
    };
    this.messages = (0,external_react_intl_.defineMessages)({
      addBankAccount: {
        id: "acceptContributions.addBankAccount",
        defaultMessage: [{
          "type": 0,
          "value": "Add bank account"
        }]
      },
      connectService: {
        id: "C9HmCs",
        defaultMessage: [{
          "type": 0,
          "value": "Connect "
        }, {
          "type": 1,
          "value": "service"
        }]
      }
    });
  }

  render() {
    const {
      router,
      addHost,
      collective,
      intl,
      data
    } = this.props;
    const {
      buttonLoading
    } = this.state;
    const {
      loading,
      host
    } = data;

    if (loading) {
      return /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        pb: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {})
      });
    }

    const isBankAccountAlreadyThere = has_default()(host, 'settings.paymentMethods.manual');

    const stripeAccount = find_default()(host.connectedAccounts, {
      service: 'stripe'
    });

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      my: 5,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        alignItems: "center",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: ['column', 'row'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            alignItems: "center",
            width: [null, 280, 312],
            mb: [2, 0],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Image, {
                src: (stripeIllustration_default()),
                alt: intl.formatMessage(this.messages.connectService, {
                  service: 'Stripe'
                })
              }), stripeAccount ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(ConnectedAccountCard, {
                width: 2 / 3,
                px: 2,
                mt: [2, 3],
                mb: 3,
                alignItems: "center",
                justifyContent: "space-around",
                children: [/*#__PURE__*/jsx_runtime_.jsx(GreenCheckbox, {
                  size: 30
                }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
                  flexDirection: "column",
                  minHeight: '47px',
                  justifyContent: "space-evenly",
                  children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
                    fontWeight: "bold",
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                      id: "acceptContributions.stripeConnected",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Stripe connected"
                      }]
                    })
                  })
                })]
              }) : /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
                fontSize: "13px",
                buttonStyle: "dark",
                minHeight: "36px",
                mt: [2, 3],
                mb: 3,
                minWidth: '145px',
                onClick: async () => {
                  await addHost(collective, host);
                  this.connectStripe();
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "C9HmCs",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Connect "
                  }, {
                    "type": 1,
                    "value": "service"
                  }],
                  values: {
                    service: 'Stripe'
                  }
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
                minHeight: 50,
                px: 3,
                children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
                  color: "black.600",
                  textAlign: "center",
                  mt: [2, 3],
                  fontSize: ['12px', '14px'],
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                    id: "acceptContributions.stripe.info",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Accept contributions via credit card. The budget will update automatically."
                    }]
                  })
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
            borderLeft: ['none', '1px solid #E6E8EB'],
            borderTop: ['1px solid #E6E8EB', 'none'],
            alignItems: "center",
            width: [null, 280, 312],
            mb: [2, 0],
            pt: [3, 0],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Image, {
                src: (bankAccountIllustration_default()),
                alt: intl.formatMessage(this.messages.addBankAccount)
              }), isBankAccountAlreadyThere ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(ConnectedAccountCard, {
                width: 2 / 3,
                px: 2,
                mt: [2, 3],
                mb: 3,
                alignItems: "center",
                justifyContent: "space-around",
                children: [/*#__PURE__*/jsx_runtime_.jsx(GreenCheckbox, {
                  size: 30
                }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
                  flexDirection: "column",
                  minHeight: '47px',
                  justifyContent: "space-evenly",
                  children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
                    fontWeight: "bold",
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                      id: "acceptContributions.bankAccountSetUp",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Bank account set up"
                      }]
                    })
                  })
                })]
              }) : /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                href: `/${router.query.slug}/accept-financial-contributions/${router.query.path}/bank`,
                children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
                  fontSize: "13px",
                  buttonStyle: "dark",
                  minHeight: "36px",
                  mt: [2, 3],
                  mb: 3,
                  minWidth: '145px',
                  "data-cy": "afc-add-bank-button",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                    id: "acceptContributions.addBankAccount",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Add bank account"
                    }]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
                minHeight: 50,
                px: 3,
                children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
                  color: "black.600",
                  textAlign: "center",
                  mt: [2, 3],
                  fontSize: ['12px', '14px'],
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                    id: "acceptContributions.bankAccount.info",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Accept contributions via bank transfer. The budget will update when you confirm receipt of funds."
                    }]
                  })
                })
              })]
            })
          })]
        })
      }), (isBankAccountAlreadyThere || stripeAccount) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledButton/* default */.Z, {
        fontSize: "13px",
        minHeight: "36px",
        mt: 4,
        minWidth: '145px',
        loading: buttonLoading,
        onClick: async () => {
          this.setState({
            buttonLoading: true
          });
          await addHost(collective, host);
          await this.props.router.push(`/${router.query.slug}/accept-financial-contributions/${router.query.path}/success`);
          window.scrollTo(0, 0);
        },
        "data-cy": "afc-finish-button",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "Finish",
          defaultMessage: [{
            "type": 0,
            "value": "Finish"
          }]
        }), "\xA0\u2192"]
      })]
    });
  }

} // We query on "account" and not "host" because the account is not necessarily an host yet


const hostQuery = client_.gql`
  query AcceptFinancialContributionsHost($slug: String!) {
    host: account(slug: $slug) {
      id
      slug
      connectedAccounts {
        id
        service
      }
      settings
    }
  }
`;
const addHostData = (0,hoc_.graphql)(hostQuery, {
  options: props => ({
    context: helpers/* API_V2_CONTEXT */.T,
    variables: {
      slug: props.host.slug
    }
  })
});
StripeOrBankAccountPicker.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "connectStripe",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }],
  "displayName": "StripeOrBankAccountPicker",
  "props": {
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "addHost": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const accept_financial_contributions_StripeOrBankAccountPicker = ((0,external_react_intl_.injectIntl)((0,router_.withRouter)(addHostData(StripeOrBankAccountPicker))));

/***/ }),

/***/ 35534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56562);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsSuccessIllustration_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5233);
/* harmony import */ var _public_static_images_create_collective_acceptContributionsSuccessIllustration_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_create_collective_acceptContributionsSuccessIllustration_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);















const TIERS_INFO_LINK = 'https://docs.opencollective.com/help/collectives/tiers-goals';
const SmallExternalLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
  displayName: "SuccessPage__SmallExternalLink",
  componentId: "sc-zsxpss-0"
})(["font-size:13px;"]);
SmallExternalLink.defaultProps = {
  openInNewTab: true
};

class SuccessPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      collective,
      chosenHost,
      router
    } = this.props;
    const {
      path
    } = router.query;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        justifyContent: 'center',
        alignItems: 'center',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          mb: 4,
          mt: 5,
          mx: [2, 6],
          maxWidth: '575px',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H1, {
            fontSize: ['20px', '32px'],
            lineHeight: ['24px', '36px'],
            fontWeight: "bold",
            color: "black.900",
            textAlign: "center",
            children: path === 'host' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "acceptContributions.myselfSuccess",
              defaultMessage: [{
                "type": 0,
                "value": "You have applied to be hosted by "
              }, {
                "type": 1,
                "value": "hostName"
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                hostName: chosenHost.name
              }
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "acceptContributions.success.nowAcceptingContributions",
              defaultMessage: [{
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": " is now accepting financial contributions!"
              }],
              values: {
                collective: collective.name
              }
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          maxWidth: '575px',
          my: 3,
          mx: [3, 0],
          children: path === 'host' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
              collective: chosenHost,
              radius: 64,
              mb: 2
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: "bold",
              mb: 4,
              children: chosenHost.name
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
              fontSize: "16px",
              lineHeight: "24px",
              color: "black.600",
              textAlign: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "acceptContributions.notifiedWhen",
                defaultMessage: [{
                  "type": 0,
                  "value": "You will be notified when "
                }, {
                  "type": 1,
                  "value": "hostName"
                }, {
                  "type": 0,
                  "value": " has approved or rejected your application. Contribution tiers will go live once you have an active Fiscal Host."
                }],
                values: {
                  hostName: chosenHost.name
                }
              })
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            color: "black.600",
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "acceptContributions.success.toConsider",
              defaultMessage: [{
                "type": 0,
                "value": "A few things to consider:"
              }]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          flexDirection: ['column', 'row'],
          justifyContent: "center",
          alignItems: "center",
          mx: [2, 4, 0],
          my: [2, 4],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            alt: "",
            src: (_public_static_images_create_collective_acceptContributionsSuccessIllustration_png__WEBPACK_IMPORTED_MODULE_12___default()),
            width: 264,
            height: 352
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
            flexDirection: "column",
            ml: [0, 4, 4],
            mx: [2, 0],
            mt: [4, 0],
            maxWidth: '475px',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H2, {
              fontSize: "13px",
              fontWeight: "bold",
              color: "black.800",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "tiers.about",
                defaultMessage: [{
                  "type": 0,
                  "value": "Set up contribution tiers"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
              fontSize: "13px",
              lineHeight: "20px",
              mb: 3,
              color: "black.800",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "acceptContributions.tiers.paragraphOne",
                defaultMessage: [{
                  "type": 0,
                  "value": "Customize your contribution tiers with different names, amounts, frequencies (one-time, monthly, or yearly), goals, and rewards. "
                }, {
                  "type": 1,
                  "value": "knowMore"
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  knowMore: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(SmallExternalLink, {
                    href: TIERS_INFO_LINK,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                      id: "tiers.knowMore",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Learn about tiers"
                      }]
                    })
                  })
                }
              })
            }), path === 'organization' && collective.slug !== collective.host.slug && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H2, {
                fontSize: "13px",
                fontWeight: "bold",
                color: "black.800",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "AdminPanel.FiscalHostSettings",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Fiscal Host Settings"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
                fontSize: "13px",
                lineHeight: "20px",
                mb: 1,
                color: "black.800",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "acceptContributions.success.hostSettingsInfo",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Add or manage payment methods in your Fiscal Host settings. "
                  }, {
                    "type": 1,
                    "value": "takeMeThere"
                  }, {
                    "type": 0,
                    "value": "."
                  }],
                  values: {
                    takeMeThere: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                      href: `/${collective.host.slug}/admin/fiscal-hosting`,
                      "data-cy": "afc-success-host-settings-link",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                        id: "takeMeThere",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Take me there"
                        }]
                      })
                    })
                  }
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          flexDirection: ['column', 'row'],
          justifyContent: "center",
          alignItems: "center",
          my: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            href: `/${collective.slug}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              buttonStyle: "standard",
              mt: [2, 3],
              mb: [3, 2],
              px: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "updatePaymentMethod.form.updatePaymentMethodSuccess.btn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Go to profile page"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            href: `/${collective.slug}/admin/tiers`,
            "data-cy": "afc-success-host-tiers-link",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
              buttonStyle: "dark",
              mt: [2, 3],
              mb: [3, 2],
              ml: [null, 3],
              px: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "createCustomTiers",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create your own tiers"
                }]
              })
            })
          })]
        })]
      })]
    });
  }

}

SuccessPage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SuccessPage",
  "props": {
    "chosenHost": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(SuccessPage));

/***/ }),

/***/ 47908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AcceptContributionsOurselvesOrOrg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44794);
/* harmony import */ var _ApplyToHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71444);
/* harmony import */ var _ContributionCategoryPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40698);
/* harmony import */ var _SuccessPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AcceptContributionsOurselvesOrOrg__WEBPACK_IMPORTED_MODULE_2__, _ApplyToHost__WEBPACK_IMPORTED_MODULE_3__, _ContributionCategoryPicker__WEBPACK_IMPORTED_MODULE_4__]);
([_AcceptContributionsOurselvesOrOrg__WEBPACK_IMPORTED_MODULE_2__, _ApplyToHost__WEBPACK_IMPORTED_MODULE_3__, _ContributionCategoryPicker__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class AcceptFinancialContributions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", (key, value) => {
      this.setState({
        [key]: value
      });
    });

    this.state = {
      chosenHost: null
    };
  }

  render() {
    const {
      router
    } = this.props;
    const {
      chosenHost
    } = this.state;
    const {
      path,
      state,
      message
    } = router.query;

    if (!path) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ContributionCategoryPicker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        collective: this.props.collective
      });
    }

    if (state || message === 'StripeAccountConnected') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SuccessPage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        chosenHost: chosenHost,
        collective: this.props.collective
      });
    }

    if (path === 'host') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ApplyToHost__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        collective: this.props.collective,
        onChange: this.handleChange
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_AcceptContributionsOurselvesOrOrg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        collective: this.props.collective
      });
    }
  }

}

AcceptFinancialContributions.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "handleChange",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "key",
      "type": null
    }, {
      "name": "value",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "AcceptFinancialContributions",
  "props": {
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(AcceptFinancialContributions));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export msg */
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51546);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57153);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88705);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37278);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87262);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66943);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40486);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const _excluded = ["field"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const formatStringOptions = strings => strings.map(s => ({
  label: s,
  value: s
}));

const formatTransferWiseSelectOptions = values => values.map(({
  key,
  name
}) => ({
  label: name,
  value: key
}));

const TW_API_COLLECTIVE_SLUG = "opencollective-host";
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
  currency: {
    id: "Currency",
    defaultMessage: [{
      "type": 0,
      "value": "Currency"
    }]
  }
});
const requiredFieldsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query PayoutBankInformationRequiredFields($slug: String, $currency: String!, $accountDetails: JSON) {
    host(slug: $slug) {
      id
      transferwise {
        id
        requiredFields(currency: $currency, accountDetails: $accountDetails) {
          type
          title
          fields {
            name
            group {
              key
              name
              type
              required
              example
              validationRegexp
              refreshRequirementsOnChange
              valuesAllowed {
                key
                name
              }
            }
          }
        }
      }
    }
  }
`;
const CUSTOM_METHOD_LABEL_BY_CURRENCY = {
  // Here I'm using the same wording Wise uses on their documentation
  USD: {
    requiredFields: {
      // No need to internationalize this, since the form is generated by Wise API and it is always in English
      label: "Where's your bank account located?",
      options: {
        aba: 'In the US',
        // eslint-disable-next-line camelcase
        swift_code: 'Outside the US'
      }
    }
  }
};

const Input = ({
  input,
  getFieldName,
  disabled,
  currency,
  loading,
  refetch,
  formik,
  host
}) => {
  const isAccountHolderName = input.key === 'accountHolderName';
  const fieldName = isAccountHolderName ? getFieldName(`data.${input.key}`) : getFieldName(`data.details.${input.key}`);
  const required = disabled ? false : input.required;
  let validate = required ? value => value ? undefined : `${input.name} is required` : undefined;

  if (input.type === 'text') {
    if (input.validationRegexp) {
      validate = value => {
        const matches = new RegExp(input.validationRegexp).test(value); // TODO(intl): This should be internationalized, ideally with `formatFormErrorMessage`

        if (!value && required) {
          return `${input.name} is required`;
        } else if (!matches && value) {
          return input.validationError || `Invalid ${input.name}`;
        }
      };
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
        name: fieldName,
        validate: validate,
        children: ({
          field,
          meta
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          label: input.name,
          labelFontSize: "13px",
          required: required,
          hideOptionalLabel: disabled,
          error: (meta.touched || disabled) && meta.error,
          hint: input.hint,
          children: () => {
            const inputValue = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, field.name);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
                placeholder: input.example,
                error: (meta.touched || disabled) && meta.error,
                disabled: disabled,
                width: "100%",
                value: inputValue || ''
              })), isAccountHolderName && inputValue && inputValue.match(/^[^\s]{1}\b/) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                mt: 2,
                fontSize: "12px",
                type: "warning",
                withIcon: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "Warning.AccountHolderNameNotValid",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Full names for personal recipients. They must include more than one name, and both first and last name must have more than one character."
                  }]
                })
              })]
            });
          }
        })
      })
    }, input.key);
  } else if (input.type === 'date') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
        name: fieldName,
        validate: validate,
        children: ({
          field,
          meta
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          label: input.name,
          labelFontSize: "13px",
          required: required,
          hideOptionalLabel: disabled,
          error: (meta.touched || disabled) && meta.error,
          hint: input.hint,
          children: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
            type: "date",
            error: (meta.touched || disabled) && meta.error,
            disabled: disabled,
            width: "100%",
            value: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, field.name) || ''
          }))
        })
      })
    }, input.key);
  } else if (input.type === 'radio' || input.type === 'select') {
    const options = formatTransferWiseSelectOptions(input.valuesAllowed || []);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
        name: fieldName,
        validate: validate,
        children: ({
          field,
          meta
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          label: input.name,
          labelFontSize: "13px",
          required: required,
          hideOptionalLabel: disabled,
          error: (meta.touched || disabled) && meta.error,
          children: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
            inputId: field.name,
            disabled: disabled,
            error: (meta.touched || disabled) && meta.error,
            isLoading: loading && !options.length,
            name: field.name,
            options: options,
            value: options.find(c => c.value === lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, field.name)) || null,
            onChange: ({
              value
            }) => {
              formik.setFieldValue(field.name, value);

              if (input.refreshRequirementsOnChange) {
                refetch({
                  slug: host ? host.slug : TW_API_COLLECTIVE_SLUG,
                  currency,
                  accountDetails: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({}, formik.values), field.name, value), getFieldName('data'))
                });
              }
            }
          })
        })
      })
    });
  } else {
    return null;
  }
};

const FieldGroup = _ref => {
  let {
    field
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
    flex: "1",
    children: field.group.map(input => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(Input, _objectSpread({
      input: input
    }, props), input.key))
  });
};

const DetailsForm = ({
  disabled,
  getFieldName,
  formik,
  host,
  currency
}) => {
  const {
    loading,
    error,
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(requiredFieldsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T,
    // A) If `fixedCurrency` was passed in PayoutBankInformationForm (2) (3)
    //    then `host` is not set and we'll use the Platform Wise account
    // B) If `host` is set, we expect to be in 2 cases:
    //      * The Collective Host has Wise configured and we should be able to fetch `requiredFields` from it
    //      * The Collective Host doesn't have Wise configured and `host` is already switched to the Platform account
    variables: {
      slug: host ? host.slug : TW_API_COLLECTIVE_SLUG,
      currency
    }
  }); // Make sure we load the form data on initial load. Otherwise certain form fields such
  // as the state field in the "Recipient's Address" section might not be visible on first load
  // and only be visible after the user reselect the country.

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    refetch({
      accountDetails: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, getFieldName('data'))
    });
  }, []);

  if (loading && !data) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {});
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "error",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "PayoutBankInformationForm.Error.RequiredFields",
        defaultMessage: [{
          "type": 0,
          "value": "There was an error fetching the required fields"
        }]
      }), error.message && `: ${error.message}`]
    });
  } // If at this point we don't have `requiredFields` available,
  // we can display an error message, Wise is likely not configured on the platform


  if (!data?.host?.transferwise?.requiredFields) {
    if (false) {} else {
      // eslint-disable-next-line no-console
      console.warn('Could not fetch requiredFields through Wise.');
      return;
    }
  }

  const transactionTypeValues = data.host.transferwise.requiredFields.map(rf => ({
    label: CUSTOM_METHOD_LABEL_BY_CURRENCY?.[currency]?.requiredFields?.options?.[rf.type] || rf.title,
    value: rf.type
  })); // Some currencies offer different methods for the transaction
  // e.g., USD allows ABA and SWIFT transactions.

  const availableMethods = data.host.transferwise.requiredFields.find(method => method.type === lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, getFieldName(`data.type`)));

  const [addressFields, otherFields] = lodash_partition__WEBPACK_IMPORTED_MODULE_1___default()(availableMethods?.fields, field => field.group.every(g => g.key.includes('address.')));

  const transactionMethodFieldName = getFieldName('data.type');

  const transactionMethod = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, transactionMethodFieldName);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
    flexDirection: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
      name: getFieldName('data.type'),
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: field.name,
        label: CUSTOM_METHOD_LABEL_BY_CURRENCY?.[currency]?.requiredFields?.label || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "PayoutBankInformationForm.TransactionMethod",
          defaultMessage: [{
            "type": 0,
            "value": "Transaction Method"
          }]
        }),
        labelFontSize: "13px",
        mt: 3,
        mb: 2,
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
          inputId: id,
          name: field.name,
          onChange: ({
            value
          }) => {
            const {
              type,
              currency
            } = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, getFieldName(`data`));

            formik.setFieldValue(getFieldName('data'), {
              type,
              currency
            });
            formik.setFieldValue(field.name, value);
          },
          options: transactionTypeValues,
          value: transactionTypeValues.find(method => method.value === availableMethods?.type) || null,
          disabled: disabled
        })
      })
    }), transactionMethod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        mt: 3,
        flex: "1",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          fontSize: "14px",
          fontWeight: "bold",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayoutBankInformationForm.AccountInfo",
            defaultMessage: [{
              "type": 0,
              "value": "Account Information"
            }]
          })
        })
      }), otherFields.map(field => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(FieldGroup, {
        currency: currency,
        disabled: disabled,
        field: field,
        formik: formik,
        getFieldName: getFieldName,
        host: host,
        loading: loading,
        refetch: refetch
      }, lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(field.name)))]
    }), Boolean(addressFields.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        mt: 3,
        flex: "1",
        fontSize: "14px",
        fontWeight: "bold",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          mr: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayoutBankInformationForm.RecipientAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Recipient's Address"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayoutBankInformationForm.HolderAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Bank account holder address (not the bank address)"
            }]
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6__.Info, {
            size: 16
          })
        })]
      }), addressFields.map(field => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(FieldGroup, {
        currency: currency,
        disabled: disabled,
        field: field,
        formik: formik,
        getFieldName: getFieldName,
        host: host,
        loading: loading,
        refetch: refetch
      }, lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(field.name)))]
    })]
  });
};

const availableCurrenciesQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query PayoutBankInformationAvailableCurrencies($slug: String, $ignoreBlockedCurrencies: Boolean) {
    host(slug: $slug) {
      id
      slug
      currency
      transferwise {
        id
        availableCurrencies(ignoreBlockedCurrencies: $ignoreBlockedCurrencies)
      }
    }
  }
`;
/**
 * Form for payout bank information. Must be used with Formik.
 *
 * The main goal is to use this component in the Expense Flow (1) but it's also reused in:
 *
 * - Collective onboarding, AcceptContributionsOurselvesOrOrg.js (2)
 * - In Collective/Host settings -> Receiving Money, BankTransfer.js (3)
 *
 * In (1) we pass the host where the expense is submitted and fixedCurrency is never set.
 *   * If Wise is configured on that host, `availableCurrencies` should normally be available.
 *   * If it's not, we'll have to fetch `availableCurrencies` from the Platform Wise account
 *
 * In (2) and (3), we never pass an `host` and `fixedCurrency` is sometimes set.
 *   * If `fixedCurrency` is set, we don't need `availableCurrencies`
 *   * If `fixedCurrency` is not set, we'll fetch `availableCurrencies` from the Platform Wise account
 */

const PayoutBankInformationForm = ({
  isNew,
  getFieldName,
  host,
  fixedCurrency,
  ignoreBlockedCurrencies,
  optional
}) => {
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(availableCurrenciesQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: TW_API_COLLECTIVE_SLUG,
      ignoreBlockedCurrencies
    },
    // Skip fetching/loading if the currency is fixed (2) (3)
    // Or if availableCurrencies is already available. Expense Flow + Host with Wise configured (1)
    skip: Boolean(fixedCurrency || host?.transferwise?.availableCurrencies)
  });
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormikContext)();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)(); // Display spinner if loading

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {});
  } // Fiscal Host with Wise configured (1) OR Platform account as fallback (1) or default (2) (3)
  // NOTE: If `fixedCurrency is set`, `wiseHost` will be null (at least today)


  const wiseHost = data?.host || host;
  const availableCurrencies = wiseHost?.transferwise?.availableCurrencies;
  let currencies;

  if (fixedCurrency) {
    currencies = formatStringOptions([fixedCurrency]);
  } else if (availableCurrencies) {
    currencies = formatStringOptions(availableCurrencies.map(c => c.code));
  } else {
    // If at this point we don't have `fixedCurrency` or `availableCurrencies`,
    // we can display an error message, Wise is likely not configured on the platform
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "warning",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "v2j/7L",
        defaultMessage: [{
          "type": 0,
          "value": "An error ocurred while preparing the form for bank accounts. Please contact "
        }, {
          "type": 8,
          "value": "I18nSupportLink",
          "children": [{
            "type": 0,
            "value": "support"
          }]
        }],
        values: {
          I18nSupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .I18nSupportLink */ .wl
        }
      })
    });
  }

  if (optional) {
    currencies.unshift({
      label: 'No selection',
      value: null
    });
  }

  const currencyFieldName = getFieldName('data.currency');

  const selectedCurrency = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, currencyFieldName);

  const validateCurrencyMinimumAmount = () => {
    // Skip if currency is fixed (2) (3)
    // or if `availableCurrencies` is not set (but we're not supposed to be there anyway)
    if (fixedCurrency || !availableCurrencies) {
      return;
    } // Only validate minimum amount if the form has items


    if (formik?.values?.items?.length > 0) {
      const invoiceTotalAmount = formik.values.items.reduce((amount, attachment) => amount + (attachment.amount || 0), 0);
      const minAmountForSelectedCurrency = availableCurrencies.find(c => c.code === selectedCurrency)?.minInvoiceAmount * 100;

      if (invoiceTotalAmount < minAmountForSelectedCurrency) {
        return formatMessage({
          id: "AzGwgz",
          defaultMessage: [{
            "type": 0,
            "value": "The minimum amount for transferring to "
          }, {
            "type": 1,
            "value": "selectedCurrency"
          }, {
            "type": 0,
            "value": " is "
          }, {
            "type": 1,
            "value": "minAmountForSelectedCurrency"
          }]
        }, {
          selectedCurrency,
          minAmountForSelectedCurrency: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(minAmountForSelectedCurrency, wiseHost.currency)
        });
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
      name: currencyFieldName,
      validate: validateCurrencyMinimumAmount,
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: field.name,
        label: formatMessage(msg.currency),
        labelFontSize: "13px",
        mt: 3,
        mb: 2,
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
          inputId: id,
          name: field.name,
          onChange: ({
            value
          }) => {
            formik.setFieldValue(getFieldName('data'), {});
            formik.setFieldValue(field.name, value);
          },
          options: currencies,
          value: currencies.find(c => c.label === selectedCurrency) || null,
          disabled: Boolean(fixedCurrency && !optional) || !isNew
        })
      })
    }), selectedCurrency && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(DetailsForm, {
      currency: selectedCurrency,
      disabled: !isNew,
      formik: formik,
      getFieldName: getFieldName,
      host: wiseHost
    }), !selectedCurrency && !currencies?.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "error",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "PayoutBankInformationForm.Error.AvailableCurrencies",
        defaultMessage: [{
          "type": 0,
          "value": "There was an error loading available currencies for this host"
        }]
      }), "."]
    })]
  });
};

PayoutBankInformationForm.__docgenInfo = {
  "description": "Form for payout bank information. Must be used with Formik.\n\nThe main goal is to use this component in the Expense Flow (1) but it's also reused in:\n\n- Collective onboarding, AcceptContributionsOurselvesOrOrg.js (2)\n- In Collective/Host settings -> Receiving Money, BankTransfer.js (3)\n\nIn (1) we pass the host where the expense is submitted and fixedCurrency is never set.\n  * If Wise is configured on that host, `availableCurrencies` should normally be available.\n  * If it's not, we'll have to fetch `availableCurrencies` from the Platform Wise account\n\nIn (2) and (3), we never pass an `host` and `fixedCurrency` is sometimes set.\n  * If `fixedCurrency` is set, we don't need `availableCurrencies`\n  * If `fixedCurrency` is not set, we'll fetch `availableCurrencies` from the Platform Wise account",
  "methods": [],
  "displayName": "PayoutBankInformationForm",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "transferwise": {
            "name": "shape",
            "value": {
              "availableCurrencies": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
                },
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "isNew": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "optional": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "ignoreBlockedCurrencies": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "getFieldName": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "fixedCurrency": {
      "description": "Enforces a fixedCurrency",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "errors": {
      "description": "A map of errors for this object",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "formik": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayoutBankInformationForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "Z0": () => (/* binding */ Separator),
/* harmony export */   "ZP": () => (/* binding */ FAQ),
/* harmony export */   "kS": () => (/* binding */ Entry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87208);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29872);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["children"],
      _excluded2 = ["title", "children", "withBorderLeft", "withNewButtons", "titleProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











/** Main entry container */



const Entry = styled_components__WEBPACK_IMPORTED_MODULE_5___default().details.withConfig({
  displayName: "FAQ__Entry",
  componentId: "sc-1qzv7kx-0"
})(["&[open]{border-color:", ";summary::after{content:'\u2212';}}summary{padding-top:", "px;padding-bottom:", "px;font-size:13px;font-weight:500;color:", ";list-style:none;&:hover{color:", ";}button{display:none;}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;color:", ";font-weight:bold;}summary::-webkit-details-marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.1'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.600'));
const CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "FAQ__CollapseBtn",
  componentId: "sc-1qzv7kx-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_6__.size, styled_system__WEBPACK_IMPORTED_MODULE_6__.space);
/** Entry title */

const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("summary", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(CollapseBtn, {
      size: 18,
      ml: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__.ChevronUp, {
        size: "1em",
        "data-item": "chevron-up",
        style: {
          marginTop: -1
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
        size: "1em",
        "data-item": "chevron-down"
      })]
    })]
  }));
}).withConfig({
  displayName: "FAQ__Title",
  componentId: "sc-1qzv7kx-2"
})(["cursor:pointer;display:flex;justify-content:space-between;align-items:baseline;"]);
/** Entry content (hidden by default) */

const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu).withConfig({
  displayName: "FAQ__Content",
  componentId: "sc-1qzv7kx-3"
})([""]);
Content.defaultProps = {
  py: 2,
  fontSize: '13px',
  color: 'black.600'
};
const Separator = styled_components__WEBPACK_IMPORTED_MODULE_5___default().hr.withConfig({
  displayName: "FAQ__Separator",
  componentId: "sc-1qzv7kx-4"
})(["background:", ";width:100%;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.400'));
/** A simple wrapper to group entries */

const EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "FAQ__EntryContainer",
  componentId: "sc-1qzv7kx-5"
})(["", "{", " ", "}"], Entry, props => props.withNewButtons ? (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["[data-item='chevron-up']{display:none;}&[open]{[data-item='chevron-up']{display:inline-block;}[data-item='chevron-down']{display:none;}}summary::after{display:none;}button{display:block;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["", "{display:none;}"], CollapseBtn), props => props.withBorderLeft && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["border-left:1px solid #dcdee0;padding-left:8px;&:focus-within,&:hover{border-color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500')));
/**
 * A small FAQ with expendable contents.
 */

class FAQ extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const _this$props = this.props,
          {
      title,
      children,
      withBorderLeft,
      withNewButtons,
      titleProps
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded2);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
      children: [title !== null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, _objectSpread(_objectSpread({
        fontWeight: "bold",
        mb: 1,
        color: "black.900"
      }, titleProps), {}, {
        children: title || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "FAQ",
          defaultMessage: [{
            "type": 0,
            "value": "FAQ"
          }]
        })
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(EntryContainer, {
        withBorderLeft: withBorderLeft,
        withNewButtons: withNewButtons,
        children: children
      })]
    }));
  }

}
FAQ.__docgenInfo = {
  "description": "A small FAQ with expendable contents.",
  "methods": [],
  "displayName": "FAQ",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "title": {
      "description": "The title to display above entries. Set to null to disable it.",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "titleProps": {
      "description": "Props for styling the title",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "withBorderLeft": {
      "description": "If true, a border will be displayed on the left",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "withNewButtons": {
      "description": "If true, will display a button with a chevron instead of the `+` sign",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["../Grid"]
};

/***/ }),

/***/ 20574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88705);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51082);
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99849);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const FinancialContributionsFAQ = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, props), {}, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Entry */ .kS, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .Dx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "paymentMethods.manual.HowDoesItWork",
        defaultMessage: [{
          "type": 0,
          "value": "How does it work?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "acceptContributions.FAQ.howDoesItWorkDetails",
        defaultMessage: [{
          "type": 0,
          "value": "Payment instructions are automatically sent to contributors via email. Once the funds are received, the admin can confirm the transaction and the amount will be credited to the budget."
        }]
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Entry */ .kS, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .Dx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "acceptContributions.FAQ.moneyNotReceived",
        defaultMessage: [{
          "type": 0,
          "value": "What happens if the money is never received?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "acceptContributions.FAQ.moneyNotReceivedDetails",
        defaultMessage: [{
          "type": 0,
          "value": "Nothing happens if the funds are never confirmed as received. The transaction will stay pending and not be added to the budget. Admins can mark pending transactions as expired to cancel them if it's not likely the money will ever arrive."
        }]
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Entry */ .kS, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .Dx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "acceptContributions.FAQ.idNotIncluded",
        defaultMessage: [{
          "type": 0,
          "value": "What happens if the reference ID is not included?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "acceptContributions.FAQ.idNotIncludedDetails",
        defaultMessage: [{
          "type": 0,
          "value": "If the unique ID is not included, it can be hard to find and confirm a transaction. If you sent the money but it has not been confirmed, "
        }, {
          "type": 8,
          "value": "SupportLink",
          "children": [{
            "type": 0,
            "value": "contact support"
          }]
        }, {
          "type": 0,
          "value": " and we will help track it down."
        }],
        values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP
      })
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
    mt: 2,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      as: _StyledLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
      href: "https://docs.opencollective.com/help/fiscal-hosts/become-a-fiscal-host",
      openInNewTab: true,
      fontSize: "12px",
      color: "black.700",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "moreInfo",
        defaultMessage: [{
          "type": 0,
          "value": "More info"
        }]
      }), "\xA0\u2192"]
    })
  })]
}));

FinancialContributionsFAQ.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FinancialContributionsFAQ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinancialContributionsFAQ);

/***/ }),

/***/ 19196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ confettiFireworks)
/* harmony export */ });
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Produce an animated fireworks with confettis popping all over the screen that slowly
 * fade out. For big celebrations, like a successful order or a collective freshly created.
 * Can only be used client-side.
 *
 * @param {number} durationInMilliseconds: duration for the full animation
 * @param {object} libConfettiParams: passed down to `canvas-confetti`
 */

const confettiFireworks = (durationInMilliseconds = 10000, libConfettiParams = {}) => {
  const animationEnd = Date.now() + durationInMilliseconds;

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const confettisParams = _objectSpread({
    disableForReducedMotion: true,
    // see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
  }, libConfettiParams);

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    } else {
      const particleCount = 50 * (timeLeft / durationInMilliseconds);
      canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount,
        origin: {
          x: randomInRange(0, 0.3),
          y: Math.random() - 0.2
        }
      }));
      canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount,
        origin: {
          x: randomInRange(0.7, 1),
          y: Math.random() - 0.2
        }
      }));
    }
  }, 250);
};

/***/ }),

/***/ 42639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_accept_financial_contributions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47908);
/* harmony import */ var _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54812);
/* harmony import */ var _components_collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71611);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73908);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53169);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_accept_financial_contributions_index_js__WEBPACK_IMPORTED_MODULE_2__, _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_3__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__]);
([_components_accept_financial_contributions_index_js__WEBPACK_IMPORTED_MODULE_2__, _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_3__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











class AcceptFinancialContributionsPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static async getInitialProps({
    query
  }) {
    return {
      slug: query.slug
    };
  }

  render() {
    const {
      data
    } = this.props;

    if (!data.loading && (!data || data.error)) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        data: data
      });
    }

    const collective = data && data.Collective;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      children: data.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        py: [5, 6],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_accept_financial_contributions_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        collective: collective
      })
    });
  }

}

const addCollectivePageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(_components_collective_page_graphql_queries__WEBPACK_IMPORTED_MODULE_4__/* .collectivePageQuery */ .J, {
  options: props => ({
    variables: {
      slug: props.slug
    }
  })
});
AcceptFinancialContributionsPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static", "async"],
    "params": [{
      "name": "{ query }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "AcceptFinancialContributionsPage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_8__/* .withUser */ .ns)(addCollectivePageData(AcceptFinancialContributionsPage)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 72743:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react/components");

/***/ }),

/***/ 95159:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/react/hoc");

/***/ }),

/***/ 42558:
/***/ ((module) => {

"use strict";
module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/browser");

/***/ }),

/***/ 33244:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 58847:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

/***/ }),

/***/ 18022:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/ChevronDown");

/***/ }),

/***/ 28054:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/ChevronRight");

/***/ }),

/***/ 52160:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/ChevronUp");

/***/ }),

/***/ 93842:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Envelope");

/***/ }),

/***/ 51104:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Exit");

/***/ }),

/***/ 10054:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 24594:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 46529:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 14722:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/PlusCircle");

/***/ }),

/***/ 43891:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 99232:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 60270:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 45933:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 3592:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Mastodon");

/***/ }),

/***/ 54427:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 81594:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Ban");

/***/ }),

/***/ 19153:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Bars");

/***/ }),

/***/ 41032:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 55457:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 63387:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

/***/ }),

/***/ 83514:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/ExclamationCircle");

/***/ }),

/***/ 25730:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/ExclamationTriangle");

/***/ }),

/***/ 86954:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/InfoCircle");

/***/ }),

/***/ 87584:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 77192:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 26201:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 8866:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Calendar");

/***/ }),

/***/ 89711:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 57847:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 40710:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 67520:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 62556:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 72142:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 38218:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/ArrowBack");

/***/ }),

/***/ 80950:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/AttachMoney");

/***/ }),

/***/ 20384:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 6534:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 33651:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/material/ShowChart");

/***/ }),

/***/ 80924:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 38164:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-icons/remix-line/Stack");

/***/ }),

/***/ 45284:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

"use strict";
module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 45245:
/***/ ((module) => {

"use strict";
module.exports = require("canvas-confetti");

/***/ }),

/***/ 28992:
/***/ ((module) => {

"use strict";
module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

"use strict";
module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

"use strict";
module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 28109:
/***/ ((module) => {

"use strict";
module.exports = require("file-saver");

/***/ }),

/***/ 92869:
/***/ ((module) => {

"use strict";
module.exports = require("focus-trap-react");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

"use strict";
module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/assign");

/***/ }),

/***/ 12154:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 39131:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/compact");

/***/ }),

/***/ 93908:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ 90857:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/endsWith");

/***/ }),

/***/ 76918:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/first");

/***/ }),

/***/ 58579:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatten");

/***/ }),

/***/ 43302:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/fp/compose");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 98210:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/has");

/***/ }),

/***/ 41238:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/includes");

/***/ }),

/***/ 53493:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/intersection");

/***/ }),

/***/ 52626:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/invert");

/***/ }),

/***/ 89699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 77876:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isError");

/***/ }),

/***/ 86069:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNil");

/***/ }),

/***/ 48524:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNull");

/***/ }),

/***/ 75795:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 51546:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/kebabCase");

/***/ }),

/***/ 83824:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/last");

/***/ }),

/***/ 53707:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/map");

/***/ }),

/***/ 36625:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ 63901:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/orderBy");

/***/ }),

/***/ 96839:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/padStart");

/***/ }),

/***/ 32027:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/partition");

/***/ }),

/***/ 84159:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pick");

/***/ }),

/***/ 20808:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pickBy");

/***/ }),

/***/ 47869:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/round");

/***/ }),

/***/ 24298:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/set");

/***/ }),

/***/ 71156:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/startCase");

/***/ }),

/***/ 79800:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sumBy");

/***/ }),

/***/ 75142:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/truncate");

/***/ }),

/***/ 18459:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 73022:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/upperCase");

/***/ }),

/***/ 57260:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/values");

/***/ }),

/***/ 22217:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/without");

/***/ }),

/***/ 86646:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/zipObject");

/***/ }),

/***/ 17809:
/***/ ((module) => {

"use strict";
module.exports = require("memoize-one");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 42042:
/***/ ((module) => {

"use strict";
module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 13126:
/***/ ((module) => {

"use strict";
module.exports = require("react-intl");

/***/ }),

/***/ 42932:
/***/ ((module) => {

"use strict";
module.exports = require("react-popper");

/***/ }),

/***/ 35073:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollchor");

/***/ }),

/***/ 61929:
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ 37597:
/***/ ((module) => {

"use strict";
module.exports = require("react-text-mask");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

"use strict";
module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

"use strict";
module.exports = require("styled-system");

/***/ }),

/***/ 71564:
/***/ ((module) => {

"use strict";
module.exports = require("validator");

/***/ }),

/***/ 46555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,8720,7772,8208], () => (__webpack_exec__(42639)));
module.exports = __webpack_exports__;

})();