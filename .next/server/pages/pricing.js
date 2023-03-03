"use strict";
(() => {
var exports = {};
exports.id = 9939;
exports.ids = [9939];
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

/***/ 99849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 41657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pricing)
});

// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__(1381);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@styled-icons/remix-line/ArrowDown"
const ArrowDown_namespaceObject = require("@styled-icons/remix-line/ArrowDown");
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
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/faqs/FAQ.js
var FAQ = __webpack_require__(99849);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/faqs/PricingFAQ.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const PricingFAQ = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* default */.ZP, _objectSpread(_objectSpread({
  withNewButtons: true
}, props), {}, {
  title: "FAQ's",
  titleProps: {
    color: '#0C2D66',
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '36px',
    letterSpacing: '-0.008em',
    marginBottom: '32px'
  },
  width: "100%",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "-0.008em",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "pricing.faq.collective.title",
          defaultMessage: [{
            "type": 0,
            "value": "What is a Collective?"
          }]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
        color: "black.800",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "OCFHostApplication.faq.collective.content",
          defaultMessage: [{
            "type": 0,
            "value": "A group seeking to raise and spend money transparently using the Open Collective platform, representing a community, project, or initiative."
          }]
        })
      })
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Separator */.Z0, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "-0.008em",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "pricing.faq.fiscalHost.title",
          defaultMessage: [{
            "type": 0,
            "value": "What is a Fiscal Host?"
          }]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
        color: "black.800",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "OCFHostApplication.faq.fiscalHost.content",
          defaultMessage: [{
            "type": 0,
            "value": "A Fiscal Host holds funds on behalf of Collectives, enabling them to operate using the Host's bank account and legal entity."
          }]
        })
      })
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Separator */.Z0, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "-0.008em",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "pricing.faq.platform.title",
          defaultMessage: [{
            "type": 0,
            "value": "How do platform tips work?"
          }]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
        color: "black.800",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "OCFHostApplication.faq.platform.content",
          defaultMessage: [{
            "type": 0,
            "value": "Platform Tips support development of the Open Collective software platform. Contributors to Collectives see the option to give a voluntary Platform Tip at checkout."
          }]
        })
      })
    })]
  })]
}));

PricingFAQ.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PricingFAQ"
};
/* harmony default export */ const faqs_PricingFAQ = (PricingFAQ);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(92129);
// EXTERNAL MODULE: ./components/marketing/Text.js
var marketing_Text = __webpack_require__(65106);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledHr.tsx
var StyledHr = __webpack_require__(173);
;// CONCATENATED MODULE: ./components/pricing/constants.js
const FISCAL_HOST_ACCESS = ['dashboard', 'outsideFunds', 'bankTransfer', 'creditCard'];
const COLLECTIVE_ACCESS = ['collectivePage', 'outsideFunds', 'bankTransfer', 'creditCard'];
const PLANS = [{
  id: 'start',
  fee: 'Free',
  actionLink: '/organizations/new',
  actionType: 'joinAsFiscalHost'
}, {
  id: 'grow',
  fee: '15%',
  actionLink: '/organizations/new',
  actionType: 'joinAsFiscalHost'
}, {
  id: 'scale',
  fee: 'Negotiable',
  actionLink: '/help',
  actionType: 'contactUs'
}];
const FEATURES = [{
  id: 'unlimitedCollectives',
  plans: ['start', 'grow', 'scale']
}, {
  id: 'addFunds',
  plans: ['start', 'grow', 'scale']
}, {
  id: 'configureHost',
  plans: ['grow', 'scale']
}];
;// CONCATENATED MODULE: ./components/pricing/ForCollectiveCard.js















const ListWrapper = external_styled_components_default()(Grid/* Box */.xu).withConfig({
  displayName: "ForCollectiveCard__ListWrapper",
  componentId: "sc-1wuus9h-0"
})(["list-style:none;padding-left:0;"]);
const ListItem = external_styled_components_default().li.withConfig({
  displayName: "ForCollectiveCard__ListItem",
  componentId: "sc-1wuus9h-1"
})(["font-size:13px;line-height:16px;color:", ";margin-top:15px;margin-bottom:15px;background:url('/static/images/pricing/checkMark.svg') no-repeat left center;padding-left:26px;@media screen and (min-width:64em){:first-of-type{margin-top:0;}}"], (0,theme_get_.themeGet)('colors.black.900'));
const FeeData = external_styled_components_default()(Text/* Span */.Dr).withConfig({
  displayName: "ForCollectiveCard__FeeData",
  componentId: "sc-1wuus9h-2"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";margin-right:8px;"], (0,theme_get_.themeGet)('colors.blue.700'));
const FeeDataNoWrap = external_styled_components_default()(FeeData).withConfig({
  displayName: "ForCollectiveCard__FeeDataNoWrap",
  componentId: "sc-1wuus9h-3"
})(["white-space:nowrap;margin-right:0px;"]);
const FeeDescription = external_styled_components_default()(FeeData).withConfig({
  displayName: "ForCollectiveCard__FeeDescription",
  componentId: "sc-1wuus9h-4"
})(["color:", ";"], (0,theme_get_.themeGet)('colors.black.900'));
const AccessToWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "ForCollectiveCard__AccessToWrapper",
  componentId: "sc-1wuus9h-5"
})([":nth-child(1),:nth-child(2){margin-bottom:46px;}"]);
const Card = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "ForCollectiveCard__Card",
  componentId: "sc-1wuus9h-6"
})(["@media screen and (min-width:52em){width:700px;}@media screen and (min-width:64em){width:832px;}@media screen and (min-width:88em){width:862px;}"]);
const messages = (0,external_react_intl_.defineMessages)({
  'pricing.collectivePage': {
    id: "pricing.collectivePage",
    defaultMessage: [{
      "type": 0,
      "value": "Collective page"
    }]
  },
  'pricing.collectivePage.description': {
    id: "pricing.collectivePage.description",
    defaultMessage: [{
      "type": 0,
      "value": "A public page for your community to receive payments, manage expenses, and update supporters, transparent by design."
    }]
  },
  'pricing.outsideFunds': {
    id: "pricing.outsideFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Outside funds"
    }]
  },
  'pricing.outsideFunds.description': {
    id: "SqpA8z",
    defaultMessage: [{
      "type": 0,
      "value": "Manually credit Collective budgets with funds received outside the platform (e.g., cash, historical transactions, or third party channels like a shop)."
    }]
  },
  'pricing.bankTransfer': {
    id: "pricing.bankTransfer",
    defaultMessage: [{
      "type": 0,
      "value": "Bank transfer payments"
    }]
  },
  'pricing.bankTransfer.description': {
    id: "LnnC1J",
    defaultMessage: [{
      "type": 0,
      "value": "Automatically provide wire instructions and a reference number for tracking transactions."
    }]
  },
  'pricing.creditCard': {
    id: "pricing.creditCard",
    defaultMessage: [{
      "type": 0,
      "value": "Credit card processing"
    }]
  },
  'pricing.creditCard.description': {
    id: "uM2WZi",
    defaultMessage: [{
      "type": 0,
      "value": "Receive financial contributions via credit card, automatically updating your budget for transparent tracking. *Stripe fees apply"
    }]
  }
});

const ForCollectiveCard = () => {
  const intl = (0,external_react_intl_.useIntl)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
    padding: ['24px', null, '32px'],
    width: ['288px', '636px'],
    borderRadius: "8px",
    border: "1px solid #DCDEE0",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      justifyContent: "center",
      alignItems: "center",
      mb: ['32px', '35px'],
      children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        width: "72px",
        height: "72px",
        mr: "16px",
        children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
          src: "/static/images/pricing/for-collective-illustration.png",
          alt: "Collective Illustration",
          width: 72,
          height: 72
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        width: [null, '500px', '672px', null, '702px'],
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H3, {
          fontSize: ['18px', '20px'],
          lineHeight: ['26px', '28px'],
          color: "primary.900",
          fontWeight: "500",
          letterSpacing: [null, '-0.008em'],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.forCollective",
            defaultMessage: [{
              "type": 0,
              "value": "For Collectives"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledHr/* default */.Z, {
          my: "8px"
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.800",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.forCollective.description",
            defaultMessage: [{
              "type": 0,
              "value": "Bring your initiative to life"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: ['flex-start', null, 'center'],
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        mr: [null, '41px', '72px'],
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H5, {
          fontSize: ['18px', '20px'],
          lineHeight: ['26px', '28px'],
          letterSpacing: [null, '-0.008em'],
          color: "primary.900",
          mb: "16px",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.forCollective.fees.header",
            defaultMessage: [{
              "type": 0,
              "value": "We help you thrive"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          mb: "16px",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FeeDescription, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.platformFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "fee"
                }, {
                  "type": 0,
                  "value": " No fees on incoming payments"
                }],
                values: {
                  fee: /*#__PURE__*/jsx_runtime_.jsx(FeeData, {
                    children: "$0"
                  })
                }
              }), ' ', "\xB9"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
            my: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FeeDescription, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.payoutFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "fee"
                }, {
                  "type": 0,
                  "value": " No fees on outgoing payments"
                }],
                values: {
                  fee: /*#__PURE__*/jsx_runtime_.jsx(FeeData, {
                    children: "$0"
                  })
                }
              }), ' ', "\xB9"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
            my: 3,
            children: /*#__PURE__*/jsx_runtime_.jsx(FeeDescription, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.forCollective.hostFees",
                defaultMessage: [{
                  "type": 8,
                  "value": "Fee",
                  "children": [{
                    "type": 0,
                    "value": "Host fees"
                  }]
                }, {
                  "type": 0,
                  "value": " may apply depending on your "
                }, {
                  "type": 8,
                  "value": "FiscalHostLink",
                  "children": [{
                    "type": 0,
                    "value": "Fiscal Host"
                  }]
                }],
                values: {
                  Fee: msg => /*#__PURE__*/jsx_runtime_.jsx(FeeDataNoWrap, {
                    children: msg
                  }),
                  FiscalHostLink: (0,I18nFormatters/* getI18nLink */.fw)({
                    href: 'https://opencollective.com/fiscal-hosting',
                    openInNewTab: true
                  })
                }
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "black.700",
          children: ["(1)", ' ', /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.notes.paymentProcessor",
            defaultMessage: [{
              "type": 0,
              "value": "Payment processor fees apply when using "
            }, {
              "type": 8,
              "value": "stripeLink",
              "children": []
            }, {
              "type": 0,
              "value": ", "
            }, {
              "type": 8,
              "value": "paypalLink",
              "children": []
            }, {
              "type": 0,
              "value": ", or "
            }, {
              "type": 8,
              "value": "transferwiseLink",
              "children": []
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              stripeLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://stripe.com/pricing',
                openInNewTab: true,
                children: 'Stripe'
              }),
              paypalLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://paypal.com/pricing',
                openInNewTab: true,
                children: 'PayPal'
              }),
              transferwiseLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://wise.com/pricing',
                openInNewTab: true,
                children: 'Wise'
              })
            }
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ListWrapper, {
          as: "ul",
          mt: ['32px', 0],
          children: [/*#__PURE__*/jsx_runtime_.jsx(ListItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "DDNNLJ",
              defaultMessage: [{
                "type": 0,
                "value": "Fundraising and crowdfunding features"
              }]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "pricing.addFunds",
              defaultMessage: [{
                "type": 0,
                "value": "Manually add funds from other channels"
              }]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "GuPr/j",
              defaultMessage: [{
                "type": 0,
                "value": "Community engagement tools"
              }]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "YhM3lt",
              defaultMessage: [{
                "type": 0,
                "value": "Transparent budget"
              }]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ListItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "zixHKi",
              defaultMessage: [{
                "type": 0,
                "value": "Expense payouts in local currencies"
              }]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
          display: "flex",
          flexDirection: ['column', null, null, null, 'row'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: "/create",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
              buttonStyle: "primary",
              width: ['224px', '226px', null, '237px', '160px'],
              py: "8px",
              my: "8px",
              px: [null, null, '16px'],
              whiteSpace: "nowrap",
              mr: [null, null, null, null, 2],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "home.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Collective"
                }]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: "/search?isHost=true",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
              buttonStyle: "secondary",
              py: "8px",
              px: "16px",
              my: "8px",
              whiteSpace: "nowrap",
              width: ['224px', '226px', null, '237px', '139px'],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "join.findAFiscalHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Find a Fiscal Host"
                }]
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
      mt: "40px",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.06em",
      color: "black.900",
      textTransform: "uppercase",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "pricing.forCollective.accessTo",
        defaultMessage: [{
          "type": 0,
          "value": "You will also have access to"
        }]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(StyledHr/* default */.Z, {
      mt: "8px"
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      mt: "32px",
      justifyContent: "space-between",
      children: COLLECTIVE_ACCESS.map(access => /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AccessToWrapper, {
          display: "flex",
          flexDirection: ['column', 'row', 'column'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
            mb: "12px",
            width: access === 'collectivePage' ? '32px' : null,
            height: access === 'collectivePage' ? '32px' : null,
            mr: [null, '13px'],
            children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
              src: `/static/images/pricing/${access}-icon.${access === 'collectivePage' ? 'png' : 'svg'}`,
              alt: "Icon",
              width: 32,
              height: 32
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
            width: ['112px', '230px', '176px'],
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
              fontSize: "15px",
              lineHeight: "22px",
              color: "black.900",
              fontWeight: "500",
              mb: "8px",
              children: intl.formatMessage(messages[`pricing.${access}`])
            }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
              fontSize: "13px",
              lineHeight: "16px",
              color: "black.900",
              children: intl.formatMessage(messages[`pricing.${access}.description`])
            })]
          })]
        })
      }, access))
    })]
  });
};

ForCollectiveCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ForCollectiveCard"
};
/* harmony default export */ const pricing_ForCollectiveCard = (ForCollectiveCard);
;// CONCATENATED MODULE: ./components/pricing/ForFiscalHostCard.js















const ForFiscalHostCard_ListWrapper = external_styled_components_default()(Grid/* Box */.xu).withConfig({
  displayName: "ForFiscalHostCard__ListWrapper",
  componentId: "sc-wp4jiz-0"
})(["list-style:none;padding-left:0;"]);
const ForFiscalHostCard_ListItem = external_styled_components_default().li.withConfig({
  displayName: "ForFiscalHostCard__ListItem",
  componentId: "sc-wp4jiz-1"
})(["font-size:13px;line-height:16px;color:", ";margin-top:19px;margin-bottom:19px;background:", ";padding-left:26px;:first-of-type,:last-of-type{margin-top:0;margin-bottom:0;}"], props => props.uncheck ? (0,theme_get_.themeGet)('colors.black.500') : (0,theme_get_.themeGet)('colors.black.900'), props => props.uncheck ? "url('/static/images/pricing/minusIcon.svg') no-repeat left center" : "url('/static/images/pricing/checkMark.svg') no-repeat left center");
const ForFiscalHostCard_FeeData = external_styled_components_default()(Text/* Span */.Dr).withConfig({
  displayName: "ForFiscalHostCard__FeeData",
  componentId: "sc-wp4jiz-2"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";margin-right:8px;"], (0,theme_get_.themeGet)('colors.blue.700'));
const ForFiscalHostCard_FeeDescription = external_styled_components_default()(Text.P).withConfig({
  displayName: "ForFiscalHostCard__FeeDescription",
  componentId: "sc-wp4jiz-3"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";"], (0,theme_get_.themeGet)('colors.black.900'));
const ForFiscalHostCard_AccessToWrapper = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "ForFiscalHostCard__AccessToWrapper",
  componentId: "sc-wp4jiz-4"
})([":nth-child(1),:nth-child(2){margin-bottom:46px;}"]);
const ForFiscalHostCard_Card = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "ForFiscalHostCard__Card",
  componentId: "sc-wp4jiz-5"
})(["@media screen and (min-width:52em){width:700px;}@media screen and (min-width:64em){width:832px;}@media screen and (min-width:88em){width:862px;}"]);
const ForFiscalHostCard_messages = (0,external_react_intl_.defineMessages)({
  'pricing.dashboard': {
    id: "cpa6/N",
    defaultMessage: [{
      "type": 0,
      "value": "Host Admin Dashboard"
    }]
  },
  'pricing.dashboard.description': {
    id: "HostDashboard.description",
    defaultMessage: [{
      "type": 0,
      "value": "Easily manage budgets and expenses across all your Collectives, including automated credit card payments through Stripe and one-click payouts via Paypal and Wise."
    }]
  },
  'pricing.outsideFunds': {
    id: "pricing.outsideFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Outside funds"
    }]
  },
  'pricing.outsideFunds.description': {
    id: "wdqJMo",
    defaultMessage: [{
      "type": 0,
      "value": "Manually credit Collective budgets with funds received outside the platform, such as other e-commerce or fundraising tools."
    }]
  },
  'pricing.bankTransfer': {
    id: "pricing.bankTransfer",
    defaultMessage: [{
      "type": 0,
      "value": "Bank transfer payments"
    }]
  },
  'pricing.bankTransfer.description': {
    id: "2oHG9J",
    defaultMessage: [{
      "type": 0,
      "value": "Automatically provide wire instructions and a reference number for tracking. Confirm receipt of funds with one click."
    }]
  },
  'pricing.creditCard': {
    id: "pricing.creditCard",
    defaultMessage: [{
      "type": 0,
      "value": "Credit card processing"
    }]
  },
  'pricing.creditCard.description': {
    id: "nQw9Hb",
    defaultMessage: [{
      "type": 0,
      "value": "Receive financial contributions via credit card, automatically updating each Collective budget. *Stripe fees apply"
    }]
  },
  'pricing.plan.start': {
    id: "table.head.start",
    defaultMessage: [{
      "type": 0,
      "value": "Start"
    }]
  },
  'pricing.plan.grow': {
    id: "table.head.grow",
    defaultMessage: [{
      "type": 0,
      "value": "Grow"
    }]
  },
  'pricing.plan.scale': {
    id: "table.head.scale",
    defaultMessage: [{
      "type": 0,
      "value": "Scale"
    }]
  },
  'pricing.start.fee': {
    id: "pricing.start.fee",
    defaultMessage: [{
      "type": 0,
      "value": "No host fees. No charge"
    }]
  },
  'pricing.start.feeNote': {
    id: "pricing.start.feeNote",
    defaultMessage: [{
      "type": 0,
      "value": "You wont be able to charge Collectives or set any Host Fee."
    }]
  },
  'pricing.grow.fee': {
    id: "pricing.grow.fee",
    defaultMessage: [{
      "type": 0,
      "value": "Of the revenue your organization makes through Host Fees ¹"
    }]
  },
  'pricing.grow.feeNote': {
    id: "pricing.grow.feeNote",
    defaultMessage: [{
      "type": 0,
      "value": "Only if you charge for your services"
    }]
  },
  'pricing.scale.fee': {
    id: "pricing.scale.fee",
    defaultMessage: [{
      "type": 0,
      "value": "Shared revenue with Open Collective"
    }]
  },
  'pricing.scale.feeNote': {
    id: "pricing.scale.feeNote",
    defaultMessage: [{
      "type": 0,
      "value": "Depends on volume and amount of transactions"
    }]
  },
  'pricing.unlimitedCollectives': {
    id: "pricing.unlimitedCollectives",
    defaultMessage: [{
      "type": 0,
      "value": "Unlimited Collectives"
    }]
  },
  'pricing.addFunds': {
    id: "pricing.addFunds",
    defaultMessage: [{
      "type": 0,
      "value": "Manually add funds from other channels"
    }]
  },
  'pricing.configureHost': {
    id: "pricing.configureHost",
    defaultMessage: [{
      "type": 0,
      "value": "Ability to configure Host Fees"
    }]
  }
});

const ForFiscalHosts = () => {
  const intl = (0,external_react_intl_.useIntl)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ForFiscalHostCard_Card, {
    padding: ['24px', null, '32px'],
    width: ['288px', '636px'],
    borderRadius: "8px",
    border: "1px solid #DCDEE0",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      justifyContent: "center",
      alignItems: "center",
      mb: "32px",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        width: "72px",
        height: "72px",
        mr: "16px",
        children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
          src: "/static/images/pricing/for-fiscalHost-illustration.png",
          alt: "FiscalHost Illustration",
          width: 72,
          height: 72
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        width: [null, '500px', '672px', null, '702px'],
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H3, {
          fontSize: ['18px', '20px'],
          lineHeight: ['26px', '28px'],
          fontWeight: "500",
          letterSpacing: [null, '-0.00em'],
          color: "primary.900",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.fiscalHost",
            defaultMessage: [{
              "type": 0,
              "value": "For Fiscal Hosts"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledHr/* default */.Z, {
          my: "8px"
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.800",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.forFiscalHost.description",
            defaultMessage: [{
              "type": 0,
              "value": "We succeed when you succeed"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Text.H5, {
      fontSize: ['18px', '20px'],
      lineHeight: ['26px', '28px'],
      fontWeight: "500",
      letterSpacing: "-0.008emd",
      color: "primary.900",
      mb: "16px",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "pricing.forFiscalHost.fees.header",
        defaultMessage: [{
          "type": 0,
          "value": "Free if you don't have revenue, sharing if you do"
        }]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: ['flex-start', 'center'],
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        mr: [null, '33px', '72px'],
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          mb: "16px",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
            mb: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ForFiscalHostCard_FeeDescription, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.noHostFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "fee"
                }, {
                  "type": 0,
                  "value": " if you don't charge Host Fees to your Collectives"
                }],
                values: {
                  fee: /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_FeeData, {
                    children: "$0"
                  })
                }
              }), ' ', "\xB9"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
            my: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ForFiscalHostCard_FeeDescription, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.hostFees",
                defaultMessage: [{
                  "type": 1,
                  "value": "revshare"
                }, {
                  "type": 0,
                  "value": " Platform Share of your Host Fee revenue"
                }],
                values: {
                  revshare: /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_FeeData, {
                    children: "15%"
                  })
                }
              }), ' ', "\xB2"]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "black.700",
          children: ["(1)", ' ', /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.notes.paymentProcessor",
            defaultMessage: [{
              "type": 0,
              "value": "Payment processor fees apply when using "
            }, {
              "type": 8,
              "value": "stripeLink",
              "children": []
            }, {
              "type": 0,
              "value": ", "
            }, {
              "type": 8,
              "value": "paypalLink",
              "children": []
            }, {
              "type": 0,
              "value": ", or "
            }, {
              "type": 8,
              "value": "transferwiseLink",
              "children": []
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              stripeLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://stripe.com/pricing',
                openInNewTab: true,
                children: 'Stripe'
              }),
              paypalLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://paypal.com/pricing',
                openInNewTab: true,
                children: 'PayPal'
              }),
              transferwiseLink: (0,I18nFormatters/* getI18nLink */.fw)({
                href: 'https://wise.com/pricing',
                openInNewTab: true,
                children: 'Wise'
              })
            }
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          color: "black.700",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.platformShareBreakdown",
            defaultMessage: [{
              "type": 0,
              "value": "(2) If your Host Fee is 10% and your Collectives bring in $1,000, the Host gets $100 and $15 (15%) is the Platform Share."
            }]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ForFiscalHostCard_ListWrapper, {
        as: "ul",
        mt: ['16px', 0],
        children: [/*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "hQGJj5",
            defaultMessage: [{
              "type": 0,
              "value": "Each Collective gets its own fundraising page"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.accounting",
            defaultMessage: [{
              "type": 0,
              "value": "No more messy spreadsheets! It's all automated, and your accountant will thank you"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "czGYFp",
            defaultMessage: [{
              "type": 0,
              "value": "Manually add funds from other channels, accurately tracking all budgets"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "CWdtPd",
            defaultMessage: [{
              "type": 0,
              "value": "Community engagement features"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "PJubm9",
            defaultMessage: [{
              "type": 0,
              "value": "Financial tracking and transparency means reporting writes itself"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard_ListItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "whNhSE",
            defaultMessage: [{
              "type": 0,
              "value": "Expense management and one-click payouts via Paypal and Wise"
            }]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
      justifyContent: ['center', 'left'],
      alignItems: ['flex-start', 'center'],
      mt: 10,
      children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
        href: "/organizations/new",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
          px: 3,
          py: 2,
          buttonStyle: "primary",
          width: "160px",
          whiteSpace: "nowrap",
          mb: 4,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "home.createHost",
            defaultMessage: [{
              "type": 0,
              "value": "Create a Fiscal Host"
            }]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
      mt: "40px",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.06em",
      color: "black.900",
      textTransform: "uppercase",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "pricing.forCollective.accessTo",
        defaultMessage: [{
          "type": 0,
          "value": "You will also have access to"
        }]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(StyledHr/* default */.Z, {
      mt: "8px"
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
      flexWrap: "wrap",
      mt: "32px",
      justifyContent: "space-between",
      children: FISCAL_HOST_ACCESS.map(access => /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ForFiscalHostCard_AccessToWrapper, {
          display: "flex",
          flexDirection: ['column', 'row', 'column'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
            mb: "12px",
            mr: [null, '13px'],
            size: ['32px', null, '40px'],
            children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
              src: `/static/images/pricing/${access}-icon.svg`,
              alt: "Icon",
              width: 40,
              height: 40
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
            width: ['112px', '230px', '176px'],
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
              fontSize: "15px",
              lineHeight: "22px",
              color: "black.900",
              fontWeight: "500",
              mb: "8px",
              children: intl.formatMessage(ForFiscalHostCard_messages[`pricing.${access}`])
            }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
              fontSize: "13px",
              lineHeight: "16px",
              color: "black.900",
              children: intl.formatMessage(ForFiscalHostCard_messages[`pricing.${access}.description`])
            })]
          })]
        })
      }, access))
    })]
  });
};

ForFiscalHosts.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ForFiscalHosts"
};
/* harmony default export */ const ForFiscalHostCard = (ForFiscalHosts);
// EXTERNAL MODULE: ./components/collectives/HomeIllustration.js + 1 modules
var HomeIllustration = __webpack_require__(42815);
;// CONCATENATED MODULE: ./components/pricing/PlatformTip.js
function PlatformTip_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function PlatformTip_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PlatformTip_ownKeys(Object(source), !0).forEach(function (key) { PlatformTip_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PlatformTip_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function PlatformTip_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const PlatformTip = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, PlatformTip_objectSpread(PlatformTip_objectSpread({
    my: "16px",
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    border: "1px solid #C2E2FF",
    borderRadius: "8px"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HomeIllustration/* default */.Z, {
      src: "/static/images/pricing/platform-tip.svg"
    }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
      fontSize: "12px",
      lineHeight: "18px",
      color: "black.800",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "pricing.platformTips",
        defaultMessage: [{
          "type": 8,
          "value": "strong",
          "children": [{
            "type": 0,
            "value": "Platform Tips"
          }]
        }, {
          "type": 8,
          "value": "br",
          "children": []
        }, {
          "type": 0,
          "value": "Open Collective is supported by voluntary contributions called Platform Tips, optionally added at checkout, which enable us to keep building the software without charging Collectives directly."
        }],
        values: {
          a: (0,I18nFormatters/* getI18nLink */.fw)({
            href: 'https://docs.opencollective.com/help/financial-contributors/financial-contributors',
            openInNewTab: true
          }),
          strong: I18nFormatters/* I18nBold */.Gl,
          // eslint-disable-next-line react/display-name
          br: () => /*#__PURE__*/jsx_runtime_.jsx("br", {})
        }
      })
    })]
  }));
};

PlatformTip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PlatformTip"
};
/* harmony default export */ const pricing_PlatformTip = (PlatformTip);
;// CONCATENATED MODULE: ./components/pricing/Tabs.js








const Tab = external_styled_components_default().button.withConfig({
  displayName: "Tabs__Tab",
  componentId: "sc-vifjww-0"
})(["font-size:15px;line-height:22px;color:", ";padding:0;margin-left:8px;margin-right:8px;font-weight:", ";background:none;border:none;white-space:nowrap;text-transform:capitalize;cursor:pointer;&:focus{outline:none;}@media screen and (min-width:64em){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;}"], (0,theme_get_.themeGet)('colors.black.800'), props => props.active ? 'bold' : 'normal');

const Tabs = ({
  activeTab
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
  display: "flex",
  px: ['16px', null, null, 0],
  py: ['15px', null, null, 0],
  pt: [null, null, null, 3],
  width: [null, '636px', null, '113px'],
  background: "white",
  justifyContent: ['center', 'flex-start'],
  alignItems: ['center', null, null, 'flex-start'],
  flexDirection: [null, null, null, 'column'],
  children: [/*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
    href: "#collective",
    children: /*#__PURE__*/jsx_runtime_.jsx(Tab, {
      active: activeTab === 'collective',
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "pricing.forCollective",
        defaultMessage: [{
          "type": 0,
          "value": "For Collectives"
        }]
      })
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
    href: "#fiscalHost",
    children: /*#__PURE__*/jsx_runtime_.jsx(Tab, {
      active: activeTab === 'fiscalHost',
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "pricing.forFiscalHost",
        defaultMessage: [{
          "type": 0,
          "value": "For fiscal hosts"
        }]
      })
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
    href: "#faq",
    children: /*#__PURE__*/jsx_runtime_.jsx(Tab, {
      active: activeTab === 'faq',
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "FAQ",
        defaultMessage: [{
          "type": 0,
          "value": "FAQ"
        }]
      })
    })
  })]
});

Tabs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tabs",
  "props": {
    "activeTab": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const pricing_Tabs = (Tabs);
;// CONCATENATED MODULE: ./components/pricing/index.js


function pricing_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function pricing_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? pricing_ownKeys(Object(source), !0).forEach(function (key) { pricing_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pricing_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function pricing_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["html{scroll-behavior:smooth;}"]);
const TopBackgroundIllustration = external_styled_components_default()(Grid/* Box */.xu).withConfig({
  displayName: "pricing__TopBackgroundIllustration",
  componentId: "sc-q2fe6o-0"
})(["background:url('/static/images/pricing/pricing-page-top-bg.png') no-repeat;background-size:100%;position:absolute;top:-110px;z-index:-99;width:100%;height:434px;@media screen and (min-width:40em){background:url('/static/images/pricing/pricing-page-top-sm-bg.png') no-repeat;background-size:100%;}@media screen and (min-width:64em){background:url('/static/images/pricing/pricing-page-top-md-bg.png') no-repeat;background-size:100%;top:-90px;height:500px;}@media screen and (min-width:88em){background:url('/static/images/pricing/pricing-page-top-lg-bg.png') no-repeat;background-size:100%;top:-110px;height:600px;width:1200px;background-position:center;left:0;right:0;margin-right:auto;margin-left:auto;}"]);
const pricing_ListWrapper = external_styled_components_default()(Grid/* Box */.xu).withConfig({
  displayName: "pricing__ListWrapper",
  componentId: "sc-q2fe6o-1"
})(["list-style:none;padding-left:10px;"]);
const pricing_ListItem = external_styled_components_default().li.withConfig({
  displayName: "pricing__ListItem",
  componentId: "sc-q2fe6o-2"
})(["font-weight:500;font-size:15px;line-height:22px;color:", ";margin-top:16px;margin-bottom:16px;::before{content:'\u2022';color:", ";display:inline-block;width:1em;margin-left:-1em;}"], (0,theme_get_.themeGet)('colors.black.900'), (0,theme_get_.themeGet)('colors.blue.700'));
const pricing_Card = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "pricing__Card",
  componentId: "sc-q2fe6o-3"
})(["width:288px;padding:24px;@media screen and (min-width:40em){width:308px;}@media screen and (min-width:52em){width:380px;}@media screen and (min-width:64em){width:468px;padding:32px 36px;}@media screen and (min-width:88em){width:486px;}"]);

const Pricing = () => {
  const [activeTab, setActiveTab] = external_react_default().useState('');
  const tabRef = external_react_default().useRef(null);
  const sectionContainerRef = external_react_default().useRef(null);

  const handleOnScroll = throttle_default()(() => {
    if (!(tabRef.current && tabRef.current.getBoundingClientRect().top <= 0)) {
      return;
    }

    let currentTab = activeTab;
    const distanceThreshold = 200;
    const breakpoint = window.scrollY + distanceThreshold;

    for (const section of sectionContainerRef.current.children) {
      if (breakpoint >= section.offsetTop) {
        currentTab = section.id;
      }
    }

    if (activeTab !== currentTab) {
      setActiveTab(currentTab);
    }
  }, 100);

  external_react_default().useEffect(() => {
    window.addEventListener('scroll', handleOnScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleOnScroll);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(TopBackgroundIllustration, {}), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
      px: "16px",
      pt: "20px",
      pb: ['40px', '20px'],
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: ['288px', '636px', '956px', null, '992px'],
        children: [/*#__PURE__*/jsx_runtime_.jsx(marketing_Text/* MainTitle */.U3, {
          mb: "14px",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "pricing.title",
            defaultMessage: [{
              "type": 0,
              "value": "Our Pricing Structure"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          width: ['288px', '404px'],
          children: /*#__PURE__*/jsx_runtime_.jsx(marketing_Text/* MainDescription */.WC, {
            color: "black.700",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "pricing.description",
              defaultMessage: [{
                "type": 0,
                "value": "The platform supports sustainability for communities, and communities support sustainability for the platform."
              }]
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      display: "flex",
      px: "16px",
      mb: "20px",
      flexDirection: ['column', 'row'],
      alignItems: ['center', 'baseline', 'flex-start'],
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(pricing_Card, {
        border: "1px solid #DCDEE0",
        borderRadius: "8px",
        mb: ['20px', 0],
        mr: [null, '10px'],
        minHeight: "500px",
        background: "white",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['column', 'row'],
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
            width: "144px",
            height: "144px",
            display: ['none', null, 'block'],
            mr: [null, null, '24px'],
            children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
              src: "/static/images/pricing/for-collective-illustration.png",
              alt: "For Collective",
              width: 144,
              height: 144
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
            width: [null, null, '228px', null, '246px'],
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
              fontSize: ['18px', '20px'],
              lineHeight: ['26px', '28px'],
              letterSpacing: [null, '-0.008em'],
              fontWeight: "500",
              color: "primary.900",
              mb: "8px",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.forCollective",
                defaultMessage: [{
                  "type": 0,
                  "value": "For Collectives"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(StyledHr/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
              width: "144px",
              height: "144px",
              my: "8px",
              display: [null, null, 'none'],
              children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                src: "/static/images/pricing/for-collective-illustration.png",
                alt: "For Collective",
                width: 144,
                height: 144
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
              mt: "8px",
              mb: "16px",
              children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "400",
                color: "black.800",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "pricing.collectiveCard.description",
                  defaultMessage: [{
                    "type": 8,
                    "value": "strong",
                    "children": [{
                      "type": 0,
                      "value": "Collect, spend and manage money transparently."
                    }]
                  }, {
                    "type": 0,
                    "value": " Connect your bank account as an "
                  }, {
                    "type": 8,
                    "value": "IndependentCollectiveLink",
                    "children": [{
                      "type": 0,
                      "value": "Independent Collective"
                    }]
                  }, {
                    "type": 0,
                    "value": ", or apply to a "
                  }, {
                    "type": 8,
                    "value": "FiscalHostLink",
                    "children": [{
                      "type": 0,
                      "value": "Fiscal Host"
                    }]
                  }, {
                    "type": 0,
                    "value": "."
                  }],
                  values: pricing_objectSpread(pricing_objectSpread({}, I18nFormatters/* default */.ZP), {}, {
                    IndependentCollectiveLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      href: 'https://docs.opencollective.com/help/independent-collectives',
                      openInNewTab: true
                    }),
                    FiscalHostLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      href: 'https://opencollective.com/fiscal-hosting',
                      openInNewTab: true
                    })
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          minHeight: ['252px', null, '150px'],
          mb: [null, null, '24px'],
          mt: [null, null, '24px', '40px'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            fontWeight: "500",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "pricing.collectiveCard.free",
              defaultMessage: [{
                "type": 0,
                "value": "Free – forever"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(pricing_ListWrapper, {
            as: "ul",
            children: [/*#__PURE__*/jsx_runtime_.jsx(pricing_ListItem, {
              fontSize: "15px",
              lineHeight: "22px",
              fontWeight: "500",
              color: "black.900",
              my: "8px",
              listStyle: "circle",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.collectiveCard.unlimited",
                defaultMessage: [{
                  "type": 0,
                  "value": "Unlimited access to all features"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(pricing_ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.collectiveCard.noFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "No fees if you hold money in your own bank account"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(pricing_ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.collectiveCard.hostFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host fees may apply, if you opt to join one"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
          display: "flex",
          flexDirection: ['column', null, 'row'],
          alignItems: ['center', null, 'flex-start'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: "/create",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
              buttonStyle: "primary",
              width: ['224px', null, '160px'],
              py: "8px",
              px: [null, null, 3],
              my: "8px",
              whiteSpace: "nowrap",
              mr: [null, null, 3],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "home.create",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Collective"
                }]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: "#collective",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledButton/* default */.Z, {
              width: ['224px', null, '139px'],
              py: "8px",
              my: "8px",
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "TdTXXf",
                defaultMessage: [{
                  "type": 0,
                  "value": "Learn more"
                }]
              }), " ", /*#__PURE__*/jsx_runtime_.jsx(ArrowDown_namespaceObject.ArrowDown, {
                size: "13px"
              }), ' ']
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(pricing_Card, {
        border: "1px solid #DCDEE0",
        borderRadius: "8px",
        ml: [null, '10px'],
        minHeight: "500px",
        background: "white",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['column', null, 'row'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
            width: "144px",
            height: "144px",
            display: ['none', null, 'block'],
            mr: [null, null, '24px'],
            children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
              src: "/static/images/pricing/for-fiscalHost-illustration.png",
              alt: "For FiscalHost",
              width: 144,
              height: 144
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
            width: [null, null, '228px', null, '246px'],
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
              fontSize: ['18px', '20px'],
              lineHeight: ['26px', '28px'],
              letterSpacing: [null, '-0.008em'],
              fontWeight: "500",
              color: "primary.900",
              mb: "8px",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.fiscalHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "For Fiscal Hosts"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(StyledHr/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
              width: "144px",
              height: "144px",
              my: "8px",
              display: [null, null, 'none'],
              children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
                src: "/static/images/pricing/for-fiscalHost-illustration.png",
                alt: "For FiscalHost",
                width: 144,
                height: 144
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
              mt: "8px",
              mb: "16px",
              children: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "400",
                color: "black.800",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                  id: "pricing.fiscalHostCard.description",
                  defaultMessage: [{
                    "type": 0,
                    "value": "As a "
                  }, {
                    "type": 8,
                    "value": "FiscalHostLink",
                    "children": [{
                      "type": 0,
                      "value": "Fiscal Host"
                    }]
                  }, {
                    "type": 0,
                    "value": ", you hold funds on behalf of Collectives. "
                  }, {
                    "type": 8,
                    "value": "strong",
                    "children": [{
                      "type": 0,
                      "value": "You decide what fees to charge"
                    }]
                  }, {
                    "type": 0,
                    "value": " (if any), and share revenue with the platform."
                  }],
                  values: {
                    strong: I18nFormatters/* I18nBold */.Gl,
                    FiscalHostLink: (0,I18nFormatters/* getI18nLink */.fw)({
                      href: 'https://opencollective.com/become-a-fiscal-host',
                      openInNewTab: true
                    })
                  }
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          minHeight: ['252px', null, '150px'],
          mb: [null, null, '24px'],
          mt: [null, null, '24px', '40px'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            color: "primary.900",
            fontWeight: "500",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "pricing.fiscalHost.weSucceed",
              defaultMessage: [{
                "type": 0,
                "value": "We succeed if you succeed"
              }]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(pricing_ListWrapper, {
            as: "ul",
            children: [/*#__PURE__*/jsx_runtime_.jsx(pricing_ListItem, {
              fontSize: "15px",
              lineHeight: "22px",
              fontWeight: "500",
              color: "black.900",
              my: "8px",
              listStyle: "circle",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.fiscalHost.unlimited",
                defaultMessage: [{
                  "type": 0,
                  "value": "Host unlimited Collectives and access all features"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(pricing_ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.fiscalHost.noFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "FREE if you don't charge Host Fees"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(pricing_ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "pricing.fiscalHost.hostFees",
                defaultMessage: [{
                  "type": 0,
                  "value": "15% revenue share with the platform if you charge Host Fees"
                }]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
          display: "flex",
          flexDirection: ['column', null, 'row'],
          alignItems: ['center', null, 'flex-start'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: "/organizations/new",
            children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
              buttonStyle: "primary",
              width: ['224px', null, '160px'],
              py: "8px",
              px: [null, null, 3],
              my: "8px",
              whiteSpace: "nowrap",
              mr: [null, null, 3],
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "home.createHost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Create a Fiscal Host"
                }]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: "#fiscalHost",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledButton/* default */.Z, {
              width: ['224px', null, '139px'],
              py: "8px",
              my: "8px",
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "TdTXXf",
                defaultMessage: [{
                  "type": 0,
                  "value": "Learn more"
                }]
              }), " ", /*#__PURE__*/jsx_runtime_.jsx(ArrowDown_namespaceObject.ArrowDown, {
                size: "13px"
              }), ' ']
            })
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      display: "flex",
      justifyContent: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(pricing_PlatformTip, {
        width: ['300px', '640px', '780px', '960px', '1000px']
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', null, null, 'row-reverse'],
      justifyContent: "center",
      alignItems: [null, null, 'center', 'flex-start'],
      children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        zIndex: "999",
        position: "sticky",
        top: "0",
        display: "flex",
        justifyContent: "center",
        borderBottom: ['1px solid rgba(49, 50, 51, 0.1)', null, null, 'none'],
        ref: tabRef,
        width: [1, null, null, 'fit-content'],
        background: "white",
        children: /*#__PURE__*/jsx_runtime_.jsx(pricing_Tabs, {
          activeTab: activeTab
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        ref: sectionContainerRef,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          id: "collective",
          pt: ['64px', null, null, 3],
          display: "flex",
          px: "16px",
          flexDirection: "column",
          alignItems: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(pricing_ForCollectiveCard, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          id: "fiscalHost",
          pt: ['64px', null, null, 3],
          display: "flex",
          px: "16px",
          flexDirection: "column",
          alignItems: "center",
          my: [null, null, null, 4],
          children: /*#__PURE__*/jsx_runtime_.jsx(ForFiscalHostCard, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
          id: "faq",
          pt: ['64px', null, null, 3],
          display: "flex",
          px: "16px",
          alignItems: "center",
          justifyContent: "center",
          mb: ['72px', null, null, '120px'],
          width: ['288px', '636px', '700px', '832px', '862px'],
          marginLeft: "auto",
          marginRight: "auto",
          children: /*#__PURE__*/jsx_runtime_.jsx(faqs_PricingFAQ, {})
        })]
      })]
    })]
  });
};

Pricing.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Pricing"
};
/* harmony default export */ const pricing = (Pricing);

/***/ }),

/***/ 60433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PricingPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84842);
/* harmony import */ var _components_pricing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41657);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_1__]);
_components_Page__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




class PricingPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static getInitialProps({
    query
  }) {
    return {
      tab: query.tab || ''
    };
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_pricing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
  }

}
PricingPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "PricingPage",
  "props": {
    "tab": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
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

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,7667,5106], () => (__webpack_exec__(60433)));
module.exports = __webpack_exports__;

})();