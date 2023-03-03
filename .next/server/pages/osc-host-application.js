"use strict";
(() => {
var exports = {};
exports.id = 8816;
exports.ids = [8816];
exports.modules = {

/***/ 29242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29925);




const AnimateBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{background-position:-100% 0;}100%{background-position:100% 0;}"]);
/**
 * A loading container that will show an animated block instead of a blank space.
 */

const LoadingPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LoadingPlaceholder",
  componentId: "sc-bny1ps-0"
})(["animation:", " 1s linear infinite,", " 1s linear infinite;background:linear-gradient(to right,#eee 2%,#ddd 18%,#eee 33%);background-size:200%;width:100%;", " ", " ", ""], AnimateBackground, (0,_StyledKeyframes__WEBPACK_IMPORTED_MODULE_3__/* .flicker */ .Uh)({
  minOpacity: 0.8
}), styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space);
LoadingPlaceholder.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)])
};
LoadingPlaceholder.defaultProps = {
  height: '100%',
  borderRadius: '2%'
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPlaceholder);

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

/***/ 63107:
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
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51082);
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99849);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * FAQ associated to the `GithubRepositories` component.
 */




const GithubRepositoriesFAQ = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
  withBorderLeft: true,
  withNewButtons: true
}, props), {}, {
  titleProps: {
    fontSize: '16px',
    mb: 2
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Entry */ .kS, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .Dx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "GithubRepositories.faq.host.title",
        defaultMessage: [{
          "type": 0,
          "value": "Who will hold money for my Collective?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "GithubRepositories.faq.host.content",
        defaultMessage: [{
          "type": 0,
          "value": "Open Source Collective 501(c)(6) is a US non-profit that was created to serve as Fiscal Host (aka fiscal sponsor) to open source projects using Open Collective. Learn more about OSC at https://oscollective.org."
        }]
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Entry */ .kS, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .Dx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "GithubRepositories.faq.cost.title",
        defaultMessage: [{
          "type": 0,
          "value": "What is the cost?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "GithubRepositories.faq.cost.content",
        defaultMessage: [{
          "type": 0,
          "value": "The fee is 10% of funds raised. This fee covers overheads like accounting, banking, legal, admin, and liability, so you don't have to set up your own foundation or take risk on personally."
        }]
      })
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    mt: 3,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      href: "https://docs.oscollective.org/faq",
      background: "#f3f1fe",
      padding: "8px 16px",
      borderRadius: "100px",
      fontWeight: "500",
      openInNewTab: true,
      color: "#6F5AFA",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "moreInfo",
        defaultMessage: [{
          "type": 0,
          "value": "More info"
        }]
      }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
        size: "13px"
      })]
    })
  })]
}));

GithubRepositoriesFAQ.__docgenInfo = {
  "description": "FAQ associated to the `GithubRepositories` component.",
  "methods": [],
  "displayName": "GithubRepositoriesFAQ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GithubRepositoriesFAQ);

/***/ }),

/***/ 14574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _components_StyledTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36422);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88609);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Admin = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_StyledTag__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).attrs({
  variant: 'rounded-right'
}).withConfig({
  displayName: "OnboardingProfileCard__Admin",
  componentId: "sc-shs4i4-0"
})([""]);

class OnboardingProfileCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      collective,
      removeAdmin,
      isPending
    } = this.props;
    const {
      name
    } = collective;

    const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Admin, {
      closeButtonProps: removeAdmin ? {
        onClick: () => {
          removeAdmin(collective);
        }
      } : null,
      "data-cy": "remove-user",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          radius: 16,
          collective: collective
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          fontSize: "12px",
          ml: 2,
          "data-cy": "name-of-admins",
          children: name
        })]
      })
    });

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      my: 1,
      mr: 2,
      children: isPending ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "onboarding.admins.pending",
          defaultMessage: [{
            "type": 0,
            "value": "Pending approval"
          }]
        }),
        children: content
      }) : content
    });
  }

}

OnboardingProfileCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OnboardingProfileCard",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "adminCollective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "removeAdmin": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isPending": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingProfileCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50567);
/* harmony import */ var _styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89457);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spdx_license_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84103);
/* harmony import */ var spdx_license_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spdx_license_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32651);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5993);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47667);
/* harmony import */ var _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52903);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88705);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37278);
/* harmony import */ var _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14574);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(32631);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51082);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(66943);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(90998);
/* harmony import */ var _CollapseSection__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(1126);
/* harmony import */ var _ProjectTypeSelect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(67873);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_15__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_21__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__, _CollapseSection__WEBPACK_IMPORTED_MODULE_32__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_15__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_21__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__, _CollapseSection__WEBPACK_IMPORTED_MODULE_32__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





































const createCollectiveMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation CreateCollective(
    $collective: CollectiveCreateInput!
    $host: AccountReferenceInput
    $user: IndividualCreateInput
    $message: String
    $applicationData: JSON
    $inviteMembers: [InviteMemberInput]
  ) {
    createCollective(
      collective: $collective
      host: $host
      user: $user
      message: $message
      applicationData: $applicationData
      inviteMembers: $inviteMembers
    ) {
      id
      slug
      isApproved
      host {
        id
        slug
      }
    }
  }
`;
const applyToHostMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ApplyToHost(
    $collective: AccountReferenceInput!
    $host: AccountReferenceInput!
    $message: String
    $applicationData: JSON
    $inviteMembers: [InviteMemberInput]
  ) {
    applyToHost(
      collective: $collective
      host: $host
      message: $message
      applicationData: $applicationData
      inviteMembers: $inviteMembers
    ) {
      id
      slug
      ... on AccountWithHost {
        isApproved
        host {
          id
          slug
        }
      }
    }
  }
`;
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  nameLabel: {
    id: "createCollective.form.nameLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Collective name"
    }]
  },
  suggestedLabel: {
    id: "createCollective.form.suggestedLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Suggested"
    }]
  },
  descriptionLabel: {
    id: "createCollective.form.descriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your Collective do?"
    }]
  },
  tagsLabel: {
    id: "Tags",
    defaultMessage: [{
      "type": 0,
      "value": "Tags"
    }]
  },
  descriptionHint: {
    id: "createCollective.form.descriptionHint",
    defaultMessage: [{
      "type": 0,
      "value": "Write a short description (150 characters max)"
    }]
  },
  descriptionPlaceholder: {
    id: "create.collective.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Making the world a better place"
    }]
  },
  errorSlugHyphen: {
    id: "createCollective.form.error.slug.hyphen",
    defaultMessage: [{
      "type": 0,
      "value": "Collective slug URL cannot start or end with a hyphen"
    }]
  },
  name: {
    id: "OCFHostApplication.name.label",
    defaultMessage: [{
      "type": 0,
      "value": "Your Name"
    }]
  },
  email: {
    id: "Form.yourEmail",
    defaultMessage: [{
      "type": 0,
      "value": "Your email address"
    }]
  },
  slug: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  repositoryUrl: {
    id: "HostApplication.form.RepositoryUrlLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Your Repository or Organization"
    }]
  },
  repositoryLicense: {
    id: "HostApplication.form.license",
    defaultMessage: [{
      "type": 0,
      "value": "License"
    }]
  },
  tellUsMoreLabel: {
    id: "HostApplication.form.tellUsMoreLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Tell us a little about your project, what you're working on and what you need from us."
    }]
  },
  tellUsMorePlaceholder: {
    id: "HostApplication.form.tellUsMorePlaceHolder",
    defaultMessage: [{
      "type": 0,
      "value": "Please include all the info you think is valuable of your Collective"
    }]
  },
  tellUsMoreHelpText: {
    id: "HostApplication.form.tellUsMoreHelpText",
    defaultMessage: [{
      "type": 0,
      "value": "We want to know more about you and how we can help you."
    }]
  },
  linksToPreviousEvents: {
    id: "HostApplication.form.linksToPreviousEvents",
    defaultMessage: [{
      "type": 0,
      "value": "Links to previous events (if any)"
    }]
  },
  linksToPreviousEventsPlaceholder: {
    id: "HostApplication.form.linksToPreviousEventsPlaceholder",
    defaultMessage: [{
      "type": 0,
      "value": "Enter URL of previous events."
    }]
  },
  linksToPreviousEventsHelpText: {
    id: "HostApplication.form.linksToPreviousEventsHelpText",
    defaultMessage: [{
      "type": 0,
      "value": "YouTube, Discord, Disqus, Meetup, Eventbrite events etc are all welcome. We just want to understand your community presence."
    }]
  },
  amountOfMembers: {
    id: "HostApplication.form.amountOfMembers",
    defaultMessage: [{
      "type": 0,
      "value": "How many members do you have?"
    }]
  },
  extraLicenseInfo: {
    id: "HostApplication.form.extraLicenseInfo",
    defaultMessage: [{
      "type": 0,
      "value": "Extra information about your license(s)"
    }]
  },
  extraLicenseInfoHelpText: {
    id: "HostApplication.form.extraLicenseInfoHelpText",
    defaultMessage: [{
      "type": 0,
      "value": "If your license is unrecognized or have more than one license, add information here"
    }]
  },
  publicInformation: {
    id: "HostApplication.form.publicInformation",
    defaultMessage: [{
      "type": 0,
      "value": "This information is public. Please do not add any personal information such as names or addresses in this field."
    }]
  },
  aboutYourCommunityTitle: {
    id: "HostApplication.form.aboutYourCommunity",
    defaultMessage: [{
      "type": 0,
      "value": "About your Community "
    }, {
      "type": 1,
      "value": "optional"
    }]
  },
  aboutYourCommunitySubtitle: {
    id: "HostApplication.form.aboutYourCommunity.subtitle",
    defaultMessage: [{
      "type": 0,
      "value": "If applicable, please share information about your community and your events so we can properly consider your application."
    }]
  },
  aboutYourCodeTitle: {
    id: "HostApplication.form.code",
    defaultMessage: [{
      "type": 0,
      "value": "About your Code "
    }, {
      "type": 1,
      "value": "optional"
    }]
  },
  aboutYourCodeSubtitle: {
    id: "HostApplication.form.code.subtitle",
    defaultMessage: [{
      "type": 0,
      "value": "If a codebase is central to your community's work please share information about your code and license so we can properly consider your application."
    }]
  }
});

const useApplicationMutation = canApplyWithCollective => (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(canApplyWithCollective ? applyToHostMutation : createCollectiveMutation, {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_12__/* .API_V2_CONTEXT */ .T
});

const ApplicationForm = ({
  LoggedInUser,
  loadingLoggedInUser,
  initialValues,
  setInitialValues,
  loadingCollective,
  canApplyWithCollective,
  router,
  collective: collectiveWithSlug,
  host,
  refetchLoggedInUser,
  popularTags
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const [submitApplication, {
    loading: submitting,
    error
  }] = useApplicationMutation(canApplyWithCollective);
  const {
    0: codeSectionExpanded,
    1: setCodeSectionExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: communitySectionExpanded,
    1: setCommunitySectionExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      typeOfProject
    } = initialValues?.applicationData || {};
    setCodeSectionExpanded(typeOfProject === 'CODE');
  }, [initialValues?.applicationData?.typeOfProject]);

  const validate = values => {
    const errors = (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .requireFields */ .ay)(values, ['user.name', 'user.email', 'collective.name', 'collective.slug', 'message', 'collective.description', 'applicationData.typeOfProject']);
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .verifyEmailPattern */ .Sn)(errors, values, 'user.email');
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .verifyFieldLength */ .zy)(intl, errors, values, 'collective.description', 1, 150);
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .verifyURLPattern */ .zO)(errors, values, 'applicationData.repositoryUrl');
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .verifyChecked */ .Yy)(errors, values, 'termsOfServiceOC');
    return errors;
  };

  const submit = async ({
    user,
    collective,
    applicationData,
    inviteMembers,
    message
  }) => {
    const variables = {
      collective: _objectSpread({}, canApplyWithCollective ? {
        id: collectiveWithSlug.id,
        slug: collectiveWithSlug.slug
      } : _objectSpread(_objectSpread({}, collective), {}, {
        repositoryUrl: applicationData.repositoryUrl
      })),
      host: {
        legacyId: _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_9__/* .OPENSOURCE_COLLECTIVE_ID */ .kp
      },
      user,
      applicationData,
      inviteMembers: inviteMembers.map(invite => _objectSpread(_objectSpread({}, invite), {}, {
        memberAccount: {
          legacyId: invite.memberAccount.id
        }
      })),
      message
    };
    const response = await submitApplication({
      variables
    });
    const resCollective = response.data.createCollective || response.data.applyToHost;

    if (resCollective) {
      if (resCollective.isApproved) {
        await refetchLoggedInUser();
        await router.push(`/${resCollective.slug}/onboarding`);
      } else {
        await router.push('/opensource/apply/success');
      }

      window.scrollTo(0, 0);
    }
  };

  if (error) {
    // Scroll the user to the top in order to see the error message
    window.scrollTo(0, 0);
  } // Turn licenses into an array and sort them on label/name


  const spdxLicenseList = Object.keys((spdx_license_list__WEBPACK_IMPORTED_MODULE_7___default())).map(key => ({
    label: (spdx_license_list__WEBPACK_IMPORTED_MODULE_7___default())[key].name,
    value: key,
    key
  })).sort((a, b) => a.label.localeCompare(b.label));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mt: ['24px', '48px'],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
        flexDirection: ['column', 'row'],
        alignItems: "center",
        justifyContent: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
          width: '160px',
          height: '160px',
          mb: "24px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            alt: "Open Source Collective logotype",
            src: "/static/images/osc-logo.png",
            width: 160,
            height: 160
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
          textAlign: ['center', 'left'],
          width: ['288px', '488px'],
          mb: 4,
          ml: [null, '24px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.H1, {
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "-0.008em",
            color: "black.900",
            textAlign: ['center', 'left'],
            mb: "14px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "HostApplication.header",
              defaultMessage: [{
                "type": 0,
                "value": "Apply with your Collective"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "HostApplication.form.subheading",
              defaultMessage: [{
                "type": 0,
                "value": "Introduce your Collective, please incude as much context as possible so we can give you the best service we can! Have doubts? "
              }, {
                "type": 1,
                "value": "faqLink"
              }],
              values: {
                faqLink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                  href: "https://docs.oscollective.org/faq/general",
                  openInNewTab: true,
                  color: "purple.500",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                    id: "HostApplication.form.readFaqs",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Read our FAQs"
                    }]
                  })
                })
              }
            })
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
      justifyContent: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
        flexDirection: "column",
        flex: '1',
        maxWidth: "993px",
        children: [error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            type: "error",
            withIcon: true,
            mb: [1, 3],
            children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .i18nGraphqlException */ .t2)(intl, error)
          })
        }), loadingCollective ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          width: ['256px', '484px', '664px'],
          height: 463,
          mb: 4,
          mt: [3, 0],
          mr: [null, '36px', null, null, '102px'],
          borderRadius: "8px"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
          initialValues: initialValues,
          onSubmit: submit,
          validate: validate,
          children: formik => {
            const {
              values,
              touched,
              setFieldValue,
              setValues,
              handleSubmit
            } = formik;

            const handleSlugChange = e => {
              if (!touched.slug) {
                setFieldValue('collective.slug', (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__/* .suggestSlug */ .e4)(e.target.value));
              }
            };

            if (!loadingLoggedInUser && LoggedInUser && !values.user.name && !values.user.email) {
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                user: {
                  name: LoggedInUser.collective.name,
                  email: LoggedInUser.email
                }
              }, collectiveWithSlug && {
                collective: {
                  name: collectiveWithSlug.name,
                  slug: collectiveWithSlug.slug,
                  description: collectiveWithSlug.description
                }
              }));
            }

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
              "data-cy": "ccf-form",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                justifyContent: "center",
                flexDirection: "column",
                mb: 4,
                mt: [3, 0],
                border: "1px solid #DCDEE0",
                padding: ['16px', '32px'],
                display: "flex",
                borderRadius: "8px",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
                  alignItems: "center",
                  justifyContent: "stretch",
                  gap: 12,
                  mb: 3,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.H4, {
                    fontSize: "18px",
                    lineHeight: "24px",
                    color: "black.900",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "HostApplication.form.mainInfo",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Main info"
                      }]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    flex: "1"
                  })]
                }), !LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Grid */ .rj, {
                  gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                  gridGap: 3,
                  py: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      label: intl.formatMessage(messages.name),
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      disabled: !!LoggedInUser,
                      name: "user.name",
                      htmlFor: "name",
                      my: 2,
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, _objectSpread({
                        type: "text",
                        placeholder: "Thomas Anderson",
                        px: "7px"
                      }, field))
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      label: intl.formatMessage(messages.email),
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      disabled: !!LoggedInUser,
                      name: "user.email",
                      htmlFor: "email",
                      type: "email",
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, _objectSpread({
                        type: "email",
                        placeholder: "tanderson@gmail.com",
                        px: "7px"
                      }, field))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                      fontSize: "11px",
                      lineHeight: "16px",
                      color: "black.600",
                      mt: "6px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "OCFHostApplication.applicationForm.emailInstruction",
                        defaultMessage: [{
                          "type": 0,
                          "value": "We will use this email to create your account."
                        }]
                      })
                    })]
                  })]
                }), !canApplyWithCollective && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Grid */ .rj, {
                    gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                    gridGap: 3,
                    mb: 3,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        label: intl.formatMessage(messages.nameLabel),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "collective.name",
                        htmlFor: "initiativeName",
                        required: true,
                        onChange: handleSlugChange,
                        children: ({
                          field
                        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .ZP, _objectSpread({
                          type: "text",
                          placeholder: "e.g Agora Collective",
                          px: "7px"
                        }, field))
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        label: intl.formatMessage(messages.slug),
                        helpText: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                          id: "03Q893",
                          defaultMessage: [{
                            "type": 0,
                            "value": "This can be edited later"
                          }]
                        }),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "collective.slug",
                        htmlFor: "slug",
                        required: true,
                        children: ({
                          field
                        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                          prepend: "opencollective.com/",
                          type: "url",
                          placeholder: "agora"
                        }, field), {}, {
                          onChange: e => setFieldValue('collective.slug', e.target.value),
                          prependProps: {
                            color: '#9D9FA3'
                          }
                        }))
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                        fontSize: "11px",
                        lineHeight: "16px",
                        color: "black.600",
                        mt: "6px",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                          id: "createCollective.form.suggestedLabel",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Suggested"
                          }]
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    mb: 3,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      name: "collective.description",
                      htmlFor: "description",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.descriptionLabel),
                      required: true,
                      "data-cy": "ccf-form-description",
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                        rows: 3,
                        width: "100%",
                        maxLength: 150,
                        showCount: true,
                        placeholder: intl.formatMessage(messages.descriptionPlaceholder)
                      }))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "black.600",
                      mt: "6px",
                      children: intl.formatMessage(messages.descriptionHint)
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      name: "collective.tags",
                      htmlFor: "tags",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.tagsLabel),
                      "data-cy": "ccf-form-tags",
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                        defaultValue: field.value,
                        onChange: tags => {
                          setFieldValue('collective.tags', tags.map(t => t.value));
                        },
                        suggestedTags: popularTags
                      }))
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                  mb: 3,
                  mt: '40px',
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
                    alignItems: "center",
                    justifyContent: "stretch",
                    gap: 12,
                    mb: 3,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.H4, {
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "black.900",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "HostApplication.form.typeOfProject",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Type of Project"
                        }]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                      flex: "1"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                    fontSize: "14px",
                    lineHeight: "20px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "HostApplication.form.typeOfProject.description",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Open Source Collective hosts open source software projects and adjacent communities (meetup groups, educational programs and mentorship schemes etc). What is the primary focus of your project?"
                      }]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  name: "applicationData.typeOfProject",
                  htmlFor: "typeOfProject",
                  required: true,
                  children: ({
                    field
                  }) => {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_ProjectTypeSelect__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                      onChange: e => {
                        const {
                          value
                        } = e.target;

                        if (value === 'COMMUNITY') {
                          setCommunitySectionExpanded(true);

                          if (!values.applicationData.repositoryUrl) {
                            setCodeSectionExpanded(false);
                          }
                        } else if (value === 'CODE') {
                          setCodeSectionExpanded(true);
                          setCommunitySectionExpanded(false);
                        }

                        setFieldValue('applicationData.typeOfProject', value);
                      }
                    }));
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_CollapseSection__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                  title: intl.formatMessage(messages.aboutYourCodeTitle, {
                    optional: values.applicationData.typeOfProject === 'COMMUNITY' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_31__/* .Span */ .Dr, {
                      fontWeight: 400,
                      color: "black.700",
                      children: ["(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "forms.optional",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Optional"
                        }]
                      }), ")"]
                    }) : null
                  }),
                  isExpanded: codeSectionExpanded,
                  toggleExpanded: () => setCodeSectionExpanded(!codeSectionExpanded),
                  imageSrc: "/static/images/night-sky.png",
                  subtitle: intl.formatMessage(messages.aboutYourCodeSubtitle),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Grid */ .rj, {
                    gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                    gridGap: 3,
                    pt: 2,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        label: intl.formatMessage(messages.repositoryUrl),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "applicationData.repositoryUrl",
                        htmlFor: "repositoryUrl",
                        required: values.applicationData.typeOfProject === 'CODE' || undefined,
                        children: ({
                          field
                        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                          type: "url",
                          placeholder: "https://github.com"
                        }, field), {}, {
                          onChange: e => setFieldValue('applicationData.repositoryUrl', e.target.value)
                        }))
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                        fontSize: "13px",
                        lineHeight: "20px",
                        color: "black.600",
                        mt: "6px",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                          id: "HostApplication.repositoryUrlHint",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Can be GitHub, GitLab or any URL"
                          }]
                        })
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      label: intl.formatMessage(messages.repositoryLicense),
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      name: "applicationData.licenseSpdxId",
                      htmlFor: "licenseSpdxId",
                      children: ({
                        field
                      }) => {
                        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
                          inputId: field.id,
                          options: spdxLicenseList
                        }, field), {}, {
                          value: spdxLicenseList.find(option => option.value === field.value),
                          onChange: ({
                            value
                          }) => {
                            setFieldValue('applicationData.licenseSpdxId', value);
                          }
                        }));
                      }
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    mt: 20,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      name: "applicationData.extraLicenseInfo",
                      htmlFor: "extraLicenseInformation",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.extraLicenseInfo),
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                        rows: 4,
                        placeholder: intl.formatMessage(messages.extraLicenseInfoHelpText)
                      }))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "black.700",
                      mt: 2,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, _objectSpread({}, messages.extraLicenseInfoHelpText))
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_CollapseSection__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
                  title: intl.formatMessage(messages.aboutYourCommunityTitle, {
                    optional: values.applicationData.typeOfProject === 'CODE' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_31__/* .Span */ .Dr, {
                      fontWeight: 400,
                      color: "black.700",
                      children: ["(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "forms.optional",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Optional"
                        }]
                      }), ")"]
                    }) : null
                  }),
                  isExpanded: communitySectionExpanded,
                  toggleExpanded: () => setCommunitySectionExpanded(!communitySectionExpanded),
                  imageSrc: "/static/images/community.png",
                  subtitle: intl.formatMessage(messages.aboutYourCommunitySubtitle),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Grid */ .rj, {
                    gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
                    gridGap: 3,
                    pt: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        label: intl.formatMessage(messages.amountOfMembers),
                        labelFontSize: "16px",
                        labelProps: {
                          fontWeight: '600'
                        },
                        name: "applicationData.amountOfMembers",
                        htmlFor: "amountOfMembers",
                        required: values.applicationData.typeOfProject === 'COMMUNITY' || undefined,
                        children: ({
                          field
                        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                          placeholder: "0-10"
                        }, field), {}, {
                          onChange: e => setFieldValue('applicationData.amountOfMembers', e.target.value)
                        }))
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    mt: 20,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      name: "applicationData.previousEvents",
                      htmlFor: "previousEvents",
                      labelFontSize: "16px",
                      labelProps: {
                        fontWeight: '600'
                      },
                      label: intl.formatMessage(messages.linksToPreviousEvents),
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                        rows: 4,
                        placeholder: intl.formatMessage(messages.linksToPreviousEventsPlaceholder)
                      }))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "black.700",
                      mt: 2,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, _objectSpread({}, messages.linksToPreviousEventsHelpText))
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
                  alignItems: "center",
                  justifyContent: "stretch",
                  gap: 12,
                  mt: 32,
                  mb: 3,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.H4, {
                    fontSize: "18px",
                    lineHeight: "24px",
                    color: "black.900",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "HostApplication.form.team",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Your team"
                      }]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                    flex: "1"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                  mb: 2,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_31__.H4, {
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "black.800",
                    mb: 0,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "AddedAdministrators",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Added Administrators"
                      }]
                    }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__/* .Span */ .Dr, {
                      fontWeight: "300",
                      fontSize: "11px",
                      color: "black.700",
                      letterSpacing: "0.06em",
                      children: ` (${1 + values.inviteMembers?.length}/${host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins})`
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
                    width: "100%",
                    flexWrap: "wrap",
                    "data-cy": "profile-card",
                    children: [LoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                      collective: LoggedInUser.collective
                    }, LoggedInUser.collective.id) : values.user?.name && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                      collective: values.user
                    }, "0"), values.inviteMembers?.map(invite => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                      collective: invite.memberAccount,
                      removeAdmin: () => setFieldValue('inviteMembers', values.inviteMembers.filter(i => i.memberAccount.id !== invite.memberAccount.id))
                    }, invite.memberAccount.id))]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.H4, {
                      mt: 2,
                      fontSize: "16px",
                      color: "black.800",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                        id: "InviteAdministrators",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Invite Administrators"
                        }]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                      inputId: "onboarding-admin-picker",
                      creatable: true,
                      collective: null,
                      types: ['USER'],
                      "data-cy": "admin-picker",
                      filterResults: collectives => collectives.filter(collective => !values.inviteMembers.some(invite => invite.memberAccount.id === collective.id)),
                      onChange: option => {
                        setFieldValue('inviteMembers', [...values.inviteMembers, {
                          role: 'ADMIN',
                          memberAccount: option.value
                        }]);
                      }
                    })]
                  }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    type: "info",
                    mt: 3,
                    fontSize: "13px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "GTK0Wf",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Your selected Fiscal Host requires you to add a minimum of "
                      }, {
                        "type": 6,
                        "value": "numberOfAdmins",
                        "options": {
                          "one": {
                            "value": [{
                              "type": 7
                            }, {
                              "type": 0,
                              "value": " admin"
                            }]
                          },
                          "other": {
                            "value": [{
                              "type": 7
                            }, {
                              "type": 0,
                              "value": " admins"
                            }]
                          }
                        },
                        "offset": 0,
                        "pluralType": "cardinal"
                      }, {
                        "type": 0,
                        "value": ". You can manage your admins from the Collective Settings."
                      }],
                      values: host.policies.COLLECTIVE_MINIMUM_ADMINS
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                  mt: 24,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                    name: "message",
                    htmlFor: "apply-create-message",
                    required: true,
                    labelFontSize: "16px",
                    labelProps: {
                      fontWeight: '600'
                    },
                    label: intl.formatMessage(messages.tellUsMoreLabel),
                    "data-cy": "ccf-form-message",
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                      rows: 6,
                      placeholder: intl.formatMessage(messages.tellUsMorePlaceholder)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "black.700",
                    mt: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, _objectSpread({}, messages.tellUsMoreHelpText))
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                  mb: 2,
                  mt: 40,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                  display: "flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  my: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                    mr: 3,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                      name: "termsOfServiceOC",
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        size: "16px",
                        name: field.name,
                        required: field.required,
                        checked: field.value,
                        onChange: ({
                          checked
                        }) => setFieldValue(field.name, checked),
                        error: field.error,
                        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Text__WEBPACK_IMPORTED_MODULE_31__.P, {
                          ml: 1,
                          fontSize: "12px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          color: "black.800",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                            id: "OC.tos.label",
                            defaultMessage: [{
                              "type": 0,
                              "value": "I agree with the "
                            }, {
                              "type": 8,
                              "value": "TOSLink",
                              "children": [{
                                "type": 0,
                                "value": "terms of service"
                              }]
                            }, {
                              "type": 0,
                              "value": " of Open Collective."
                            }],
                            values: {
                              TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_18__/* .getI18nLink */ .fw)({
                                href: '/tos',
                                color: '#6F5AFA',
                                openInNewTab: true,
                                onClick: e => e.stopPropagation() // don't check the checkbox when clicking on the link

                              })
                            }
                          })
                        })
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
                justifyContent: "center",
                mb: 48,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Grid */ .rj, {
                  gridTemplateColumns: ['1fr', '1fr 1fr'],
                  gridGap: '32px',
                  maxWidth: 672,
                  px: 48,
                  flex: "1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    buttonStyle: "purpleSecondary",
                    buttonSize: "large",
                    textAlign: "center",
                    onClick: () => {
                      setInitialValues(_objectSpread(_objectSpread({}, initialValues), values));
                      window && window.history.back();
                    },
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_2__.ArrowLeft2, {
                      size: "14px"
                    }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "Back",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Back"
                      }]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    type: "submit",
                    textAlign: "center",
                    buttonSize: "large",
                    buttonStyle: "purple",
                    onSubmit: handleSubmit,
                    loading: submitting,
                    "data-cy": "ccf-form-submit",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                      id: "actions.submitApplication",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Submit application"
                      }]
                    }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_3__.ArrowRight2, {
                      size: "14px"
                    })]
                  })]
                })
              })]
            });
          }
        })]
      })
    })]
  });
};

ApplicationForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationForm",
  "props": {
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
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "initialValues": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "setInitialValues": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "isAdmin": {
            "name": "bool",
            "required": false
          },
          "description": {
            "name": "custom",
            "raw": "PropTypes.description",
            "required": false
          }
        }
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          },
          "policies": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "popularTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "loadingCollective": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "canApplyWithCollective": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_5__.withRouter)(ApplicationForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87208);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29872);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85598);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56562);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_animate_height__WEBPACK_IMPORTED_MODULE_3__]);
react_animate_height__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "CollapseSection__Content",
  componentId: "sc-1ks032i-0"
})(["opacity:", ";transition:opacity 0.5s;"], props => props.isExpanded ? '1' : '0');

const CollapseSection = ({
  title,
  isExpanded,
  toggleExpanded,
  subtitle,
  imageSrc,
  children
}) => {
  const {
    0: height,
    1: setHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isExpanded ? 'auto' : 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setHeight(isExpanded ? 'auto' : 0);
  }, [isExpanded]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      mt: 32,
      gridGap: "12px",
      alignItems: "flex-start",
      mb: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Image__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        src: imageSrc,
        width: 48,
        height: 48
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        flex: "1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "stretch",
          gap: 12,
          mb: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.H4, {
            fontSize: "18px",
            lineHeight: "24px",
            color: "black.900",
            children: title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            flex: "1"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            buttonSize: "tiny",
            type: "button",
            onClick: toggleExpanded,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
              alignItems: "center",
              gridGap: "8px",
              children: isExpanded ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__.ChevronUp, {
                  size: 16
                }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "ShowLess",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Show Less"
                  }]
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
                  size: 16
                }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "Expand",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Expand"
                  }]
                })]
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          color: "black.700",
          children: subtitle
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_animate_height__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "example-panel",
      duration: 500,
      height: height // see props documentation below
      ,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Content, {
        isExpanded: isExpanded,
        children: children
      })
    })]
  });
};

CollapseSection.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapseSection",
  "props": {
    "title": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "subtitle": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "imageSrc": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": true
    },
    "isExpanded": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": true
    },
    "toggleExpanded": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapseSection);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65985);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47667);
/* harmony import */ var _faqs_GithubRepositoriesFAQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63107);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87262);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90998);
/* harmony import */ var _GithubRepositories__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51080);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_12__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















class ConnectGithub extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      loadingRepos: false,
      repositories: [],
      error: null
    };
  }

  async componentDidMount() {
    this.setState({
      loadingRepos: true
    });

    try {
      const repositories = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__/* .getGithubRepos */ .UG)(this.props.router.query.token);

      if (repositories.length !== 0) {
        this.setState({
          repositories,
          loadingRepos: false
        });
      } else {
        this.setState({
          loadingRepos: false,
          error: "We couldn't find any repositories with at least 100 stars linked to this account"
        });
      }
    } catch (error) {
      this.setState({
        loadingRepos: false,
        error: error.toString()
      });
    }
  }

  render() {
    const {
      repositories,
      loadingRepos,
      error
    } = this.state;
    const {
      query
    } = this.props.router;
    const nextLinkPath = query.collectiveSlug ? `/opensource/apply/form?collectiveSlug=${query.collectiveSlug}` : '/opensource/apply/form';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      m: [3, 0],
      mb: 4,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        flexDirection: "column",
        my: [2, 4],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          flexDirection: ['column', 'row'],
          alignItems: "center",
          justifyContent: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            width: '160px',
            height: '160px',
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              alt: "Open Source Collective logotype",
              src: "/static/images/osc-logo.png",
              width: 160,
              height: 160
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            textAlign: ['center', 'left'],
            width: ['288px', '404px'],
            ml: [null, '24px'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__.H1, {
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "-0.008em",
              color: "black.900",
              textAlign: ['center', 'left'],
              mb: "14px",
              "data-cy": "connect-github-header",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "openSourceApply.GithubRepositories.title",
                defaultMessage: [{
                  "type": 0,
                  "value": "Pick a repository"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "collective.subtitle.seeRepo",
                defaultMessage: [{
                  "type": 0,
                  "value": "Don't see the repository you're looking for? "
                }, {
                  "type": 1,
                  "value": "helplink"
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  helplink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    href: "https://docs.opencollective.com/help/collectives/osc-verification",
                    openInNewTab: true,
                    color: "purple.500",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                      id: "getHelp",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Get help"
                      }]
                    })
                  })
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "kwIdJS",
                defaultMessage: [{
                  "type": 0,
                  "value": "Want to apply using an "
                }, {
                  "type": 8,
                  "value": "AltVerificationLink",
                  "children": [{
                    "type": 0,
                    "value": "alternative verification criteria"
                  }]
                }, {
                  "type": 0,
                  "value": "? "
                }, {
                  "type": 8,
                  "value": "ApplyLink",
                  "children": [{
                    "type": 0,
                    "value": "Click here"
                  }]
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  ApplyLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_7__/* .getI18nLink */ .fw)({
                    as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                    href: {
                      pathname: `/opensource/create/form`,
                      query: {
                        hostTos: true
                      }
                    },
                    color: 'purple.500'
                  }),
                  AltVerificationLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_7__/* .getI18nLink */ .fw)({
                    openInNewTab: true,
                    href: 'https://www.oscollective.org/#criteria',
                    color: 'purple.500'
                  })
                }
              })
            })]
          })]
        })
      }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          type: "error",
          withIcon: true,
          mb: [1, 3],
          children: error
        })
      }), loadingRepos && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        pb: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
      }), repositories.length !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        justifyContent: "center",
        px: [2, 4],
        width: 1,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Grid */ .rj, {
          gridTemplateColumns: ['1fr', 'repeat(4, minmax(0, 1fr))'],
          gridGap: '48px',
          maxWidth: "1200px",
          position: "relative",
          flexGrow: 1,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
            gridColumn: [null, '1/4', '1/4', '2/4'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              htmlFor: "collective",
              children: fieldProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_GithubRepositories__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, fieldProps), {}, {
                repositories: repositories,
                setGithubInfo: githubInfo => this.props.setGithubInfo(githubInfo)
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Grid */ .rj, {
              gridTemplateColumns: ['1fr', 'repeat(2, minmax(0, 1fr))'],
              gridGap: '32px',
              my: 4,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                buttonStyle: "purpleSecondary",
                buttonSize: "large",
                textAlign: "center",
                onClick: () => window && window.history.back(),
                children: ["\u2190\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "Back",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Back"
                  }]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                textAlign: "center",
                buttonSize: "large",
                buttonStyle: "purple",
                disabled: this.props.nextDisabled,
                onClick: () => {
                  this.props.router.push(nextLinkPath);
                },
                "data-cy": "connect-github-continue",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "Pagination.Next",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Next"
                  }]
                }), " \xA0\u2192"]
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_faqs_GithubRepositoriesFAQ__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            display: ['none', 'block'],
            width: 1,
            flexGrow: 1,
            alignSelf: "flex-start",
            position: "sticky",
            top: 0,
            pt: 3
          })]
        })
      })]
    });
  }

}

ConnectGithub.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ConnectGithub",
  "props": {
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "setGithubInfo": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "nextDisabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(ConnectGithub));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ osc_host_application_GithubRepositories)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: external "@styled-icons/octicons/Search"
const Search_namespaceObject = require("@styled-icons/octicons/Search");
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(19099);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledInput.tsx
var StyledInput = __webpack_require__(97274);
// EXTERNAL MODULE: ./components/StyledRadioList.js
var StyledRadioList = __webpack_require__(36718);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "@styled-icons/fa-brands/Github"
var Github_ = __webpack_require__(45933);
;// CONCATENATED MODULE: external "@styled-icons/fa-solid/Star"
const Star_namespaceObject = require("@styled-icons/fa-solid/Star");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/osc-host-application/GithubRepositoryEntry.js









const RepositoryEntry = ({
  radio,
  value
}) => {
  const {
    type
  } = value.owner;
  const repositoryTypeName = type === 'User' ? 'Personal Repo' : 'Organization Repo';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
        alignItems: "center",
        flexGrow: "1",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
          mr: 4,
          children: radio
        }), /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
          mr: 3,
          color: "black.300",
          children: /*#__PURE__*/jsx_runtime_.jsx(Github_.Github, {
            size: 40
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          flexDirection: "column",
          flex: "1",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
            fontWeight: 500,
            fontSize: "1.4rem",
            children: value.full_name
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
            justifyContent: "space-between",
            flexGrow: "1",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
              textTransform: "uppercase",
              fontWeight: 600,
              color: "black.500",
              fontSize: "1rem",
              mt: 2,
              letterSpacing: "0.4px",
              children: repositoryTypeName
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
              display: ['block', null, 'none'],
              ml: 3,
              mr: 1,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
                gap: 4,
                color: "black.600",
                mt: 1,
                alignItems: "center",
                children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  lineHeight: "1.4rem",
                  children: value.stargazers_count
                }), /*#__PURE__*/jsx_runtime_.jsx(Star_namespaceObject.Star, {
                  size: 12
                })]
              })
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        display: ['none', null, 'block'],
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
          gap: 4,
          color: "black.600",
          mt: 1,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
            fontWeight: 600,
            fontSize: "1.2rem",
            lineHeight: "1.4rem",
            children: value.stargazers_count
          }), /*#__PURE__*/jsx_runtime_.jsx(Star_namespaceObject.Star, {
            size: 12
          })]
        })
      })]
    }), value.description && /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
      color: "black.700",
      fontSize: "1.2rem",
      lineHeight: "1.8rem",
      fontWeight: "400",
      width: 1,
      ml: 4,
      mt: 3,
      px: 2,
      children: value.description
    })]
  });
};

RepositoryEntry.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RepositoryEntry",
  "props": {
    "radio": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "description": {
            "name": "string",
            "required": false
          },
          "owner": {
            "name": "object",
            "required": false
          },
          "stargazers_count": {
            "name": "number",
            "required": false
          },
          "full_name": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "checked": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const GithubRepositoryEntry = (RepositoryEntry);
;// CONCATENATED MODULE: ./components/osc-host-application/GithubRepositories.js
const _excluded = ["repositories", "setGithubInfo"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const SearchIcon = external_styled_components_default()(Search_namespaceObject.Search).withConfig({
  displayName: "GithubRepositories__SearchIcon",
  componentId: "sc-1gcx3g7-0"
})(["color:", ";"], (0,theme_get_.themeGet)('colors.black.300'));
const RepositoryEntryContainer = external_styled_components_default()(Container/* default */.Z).withConfig({
  displayName: "GithubRepositories__RepositoryEntryContainer",
  componentId: "sc-1gcx3g7-1"
})(["cursor:pointer;border-bottom:1px solid ", ";&:hover{background:", ";}"], (0,theme_get_.themeGet)('colors.black.200'), (0,theme_get_.themeGet)('colors.black.50'));
const messages = (0,external_react_intl_.defineMessages)({
  filterByName: {
    id: "Filter.ByName",
    defaultMessage: [{
      "type": 0,
      "value": "Filter by name"
    }]
  }
});
/**
 * Component for displaying list of public repositories
 */

const GithubRepositories = _ref => {
  let {
    repositories,
    setGithubInfo
  } = _ref,
      fieldProps = _objectWithoutProperties(_ref, _excluded);

  const {
    formatMessage
  } = (0,external_react_intl_.useIntl)();
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)();

  if (search) {
    const test = new RegExp((0,utils/* escapeInput */.nL)(search), 'i');
    repositories = repositories.filter(repository => repository.name.match(test));
  }

  const showSearch = true; // repositories.length >= 5;

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledCard/* default */.Z, {
      children: [showSearch && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        display: "flex",
        borderBottom: "1px solid",
        borderColor: "black.200",
        px: [2, 4],
        py: 1,
        alignItems: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(SearchIcon, {
          size: "16"
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledInput/* default */.ZP, {
          bare: true,
          type: "text",
          fontSize: "14px",
          lineHeight: "20px",
          placeholder: formatMessage(messages.filterByName),
          onChange: ({
            target
          }) => {
            setSearch(target.value);
          },
          ml: 2
        })]
      }), repositories.length === 0 && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        my: 3,
        children: /*#__PURE__*/jsx_runtime_.jsx(Text.H4, {
          textAlign: "center",
          fontSize: "1.4rem",
          color: "black.400",
          children: "No repository match"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        maxHeight: "420px",
        overflow: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(StyledRadioList/* default */.ZP, _objectSpread(_objectSpread({}, fieldProps), {}, {
          options: repositories,
          onChange: ({
            value
          }) => {
            setGithubInfo({
              handle: `${value.owner.login}/${value.name}`,
              licenseSpdxId: value.license?.spdx_id
            });
          },
          keyGetter: "name",
          children: ({
            value,
            radio
          }) => {
            return /*#__PURE__*/jsx_runtime_.jsx(RepositoryEntryContainer, {
              px: [2, 4],
              py: 3,
              children: /*#__PURE__*/jsx_runtime_.jsx(GithubRepositoryEntry, {
                radio: radio,
                value: value
              })
            });
          }
        }))
      })]
    })
  });
};

GithubRepositories.__docgenInfo = {
  "description": "Component for displaying list of public repositories",
  "methods": [],
  "displayName": "GithubRepositories",
  "props": {
    "repositories": {
      "description": "List of public repositories",
      "type": {
        "name": "array"
      },
      "required": true
    },
    "setGithubInfo": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const osc_host_application_GithubRepositories = (GithubRepositories);

/***/ }),

/***/ 67873:
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
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56562);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const ProjectTypeOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "ProjectTypeSelect__ProjectTypeOptionContainer",
  componentId: "sc-ye95hq-0"
})(["display:flex;align-items:baseline;padding:15px 16px;margin-bottom:0;cursor:pointer;background:white;justify-content:flex-start;flex:1;border-top:1px solid #dcdee0;border-left:1px solid #dcdee0;margin-top:-1px;margin-left:-1px;input[type='radio']{margin-right:4px;}"]);

const ProjectTypeOption = ({
  name,
  value,
  label,
  description,
  isChecked,
  onChange,
  iconSrc
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ProjectTypeOptionContainer, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      mr: 2,
      alignSelf: 'center',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
        type: "radio",
        name: name,
        value: value,
        checked: isChecked,
        onChange: onChange
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      mr: 3,
      flexShrink: "0",
      alignSelf: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        src: iconSrc,
        width: 48,
        height: 48
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
        fontSize: "16px",
        fontWeight: "bold",
        mb: 2,
        children: label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
        fontSize: "12px",
        color: "black.600",
        fontWeight: "normal",
        children: description
      })]
    })]
  });
};

const Fieldset = styled_components__WEBPACK_IMPORTED_MODULE_2___default().fieldset.withConfig({
  displayName: "ProjectTypeSelect__Fieldset",
  componentId: "sc-ye95hq-1"
})(["border:none;padding:0;margin:0;"]);
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  code: {
    id: "HostApplication.ProjectTypeSelect.code",
    defaultMessage: [{
      "type": 0,
      "value": "Code"
    }]
  },
  codeDescription: {
    id: "HostApplication.ProjectTypeSelect.codeDescription",
    defaultMessage: [{
      "type": 0,
      "value": "My project is primarily concerned with the development and maintenance of a specific codebase."
    }]
  },
  community: {
    id: "community",
    defaultMessage: [{
      "type": 0,
      "value": "Community"
    }]
  },
  communityDescription: {
    id: "HostApplication.ProjectTypeSelect.communityDescription",
    defaultMessage: [{
      "type": 0,
      "value": "My project is not strongly associated with a specific codebase."
    }]
  }
});

const ProjectTypeSelect = ({
  name,
  value,
  onChange,
  error
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Fieldset, {
        onChange: onChange,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
          flexDirection: ['column', 'row'],
          overflow: "hidden",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ProjectTypeOption, {
            name: name,
            value: "CODE",
            label: intl.formatMessage(msg.code),
            description: intl.formatMessage(msg.codeDescription),
            isChecked: value === 'CODE',
            onChange: onChange,
            iconSrc: "/static/images/night-sky.png"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ProjectTypeOption, {
            name: name,
            value: "COMMUNITY",
            label: intl.formatMessage(msg.community),
            description: intl.formatMessage(msg.communityDescription),
            isChecked: value === 'COMMUNITY',
            onChange: onChange,
            iconSrc: "/static/images/community.png"
          })]
        })
      })
    }), error]
  });
};

ProjectTypeSelect.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProjectTypeSelect",
  "props": {
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'CODE'",
          "computed": false
        }, {
          "value": "'COMMUNITY'",
          "computed": false
        }]
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
    "error": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ProjectTypeSelect));

/***/ }),

/***/ 42594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ osc_host_application_TermsOfFiscalSponsorship)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: ./lib/local-storage.ts
var local_storage = __webpack_require__(35427);
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
// EXTERNAL MODULE: ./components/MessageBox.tsx + 1 modules
var MessageBox = __webpack_require__(37278);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/osc-host-application/ApplicationDescription.js







const ApplicationDescription = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(Text.P, {
    mb: 3,
    fontSize: "15px",
    lineHeight: "22px",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
      id: "createcollective.opensource.p1",
      defaultMessage: [{
        "type": 0,
        "value": "You're creating software. You don't want to worry about creating a legal entity or bank account, taxes, invoices, and a bunch of other admin. Let us take care of all that, so you can stay focused on your project."
      }]
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
    mb: 3,
    fontSize: "15px",
    lineHeight: "22px",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
      id: "createcollective.opensource.p2",
      defaultMessage: [{
        "type": 0,
        "value": "We have created the "
      }, {
        "type": 1,
        "value": "osclink"
      }, {
        "type": 0,
        "value": ", a non-profit umbrella organization, to serve the open source community. To join, you need to meet our "
      }, {
        "type": 1,
        "value": "criterialink"
      }, {
        "type": 0,
        "value": "."
      }],
      values: {
        osclink: /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
          href: "https://opencollective.com/opensource",
          openInNewTab: true,
          color: "purple.500",
          children: "Open Source Collective"
        }),
        criterialink: /*#__PURE__*/jsx_runtime_.jsx(StyledLink/* default */.Z, {
          href: "https://www.oscollective.org/#criteria",
          openInNewTab: true,
          color: "purple.500",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "verificationCriteria",
            defaultMessage: [{
              "type": 0,
              "value": "verification criteria"
            }]
          })
        })
      }
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
    mb: 3,
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "22px",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
      id: "createcollective.opensource.p3",
      defaultMessage: [{
        "type": 0,
        "value": "Fees: 10% of funds raised."
      }]
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
    mb: 3,
    fontSize: "15px",
    lineHeight: "22px",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
      id: "createcollective.opensource.p4",
      defaultMessage: [{
        "type": 0,
        "value": "Our fees cover operating costs like accounting, payments, tax reporting, invoices, legal liability, use of the Open Collective Platform, and providing support. We also run a range of initiatives to support a sustainable and healthy open source ecosystem. Join us!"
      }]
    })
  })]
});

ApplicationDescription.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationDescription"
};
/* harmony default export */ const osc_host_application_ApplicationDescription = (ApplicationDescription);
;// CONCATENATED MODULE: ./components/osc-host-application/TermsOfFiscalSponsorship.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const messages = (0,external_react_intl_.defineMessages)({
  acceptTermsOfFiscalSponsorship: {
    id: "createCollective.acceptTermsOfFiscalSponsorship",
    defaultMessage: [{
      "type": 0,
      "value": "Please accept the terms of fiscal sponsorship"
    }]
  }
});
const FISCAL_SPONSOR_TERMS = 'https://docs.google.com/document/u/1/d/e/2PACX-1vQbiyK2Fe0jLdh4vb9BfHY4bJ1LCo4Qvy0jg9P29ZkiC8y_vKJ_1fNgIbV0p6UdvbcT8Ql1gVto8bf9/pub';

const getGithubConnectUrl = collectiveSlug => {
  const urlParams = new URLSearchParams(_objectSpread({
    context: 'createCollective'
  }, collectiveSlug ? {
    CollectiveId: collectiveSlug
  } : null));
  const accessToken = (0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN);

  if (accessToken) {
    urlParams.set('access_token', accessToken);
  }

  return `/api/connected-accounts/github?${urlParams.toString()}`;
};

const TermsOfFiscalSponsorship = ({
  checked,
  onChecked
}) => {
  const {
    formatMessage
  } = (0,external_react_intl_.useIntl)();
  const router = (0,router_.useRouter)();
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)();
  const {
    collectiveSlug
  } = router.query;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mt: ['24px', '48px'],
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      flexDirection: ['column', 'row'],
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
        width: '160px',
        height: '160px',
        mb: "24px",
        children: /*#__PURE__*/jsx_runtime_.jsx(HomeNextIllustration/* default */.Z, {
          alt: "Open Source Collective logotype",
          src: "/static/images/osc-logo.png",
          width: 160,
          height: 160
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
        textAlign: ['center', 'left'],
        width: ['288px', '488px'],
        mb: 4,
        ml: [null, '24px'],
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H1, {
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "-0.008em",
          color: "black.900",
          textAlign: ['center', 'left'],
          mb: "14px",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "HostApplication.header",
            defaultMessage: [{
              "type": 0,
              "value": "Apply with your Collective"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "black.700",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "collective.subtitle.opensource",
            defaultMessage: [{
              "type": 0,
              "value": "Open source projects are invited to join the Open Source Collective Fiscal Host."
            }]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
      width: ['288px', '672px'],
      children: [/*#__PURE__*/jsx_runtime_.jsx(osc_host_application_ApplicationDescription, {}), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "center",
        mb: 4,
        mt: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
          mr: 3,
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledCheckbox/* default */.Z, {
            name: "TOSAgreement",
            checked: checked,
            onChange: ({
              checked
            }) => onChecked(checked),
            label: /*#__PURE__*/jsx_runtime_.jsx(Text.P, {
              ml: 1,
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "400",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "OCFHostApplication.tosCheckBoxLabel",
                defaultMessage: [{
                  "type": 0,
                  "value": "I agree with the "
                }, {
                  "type": 8,
                  "value": "TOSLink",
                  "children": [{
                    "type": 0,
                    "value": "terms of fiscal sponsorship"
                  }]
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  TOSLink: (0,I18nFormatters/* getI18nLink */.fw)({
                    href: FISCAL_SPONSOR_TERMS,
                    openInNewTabNoFollow: true,
                    onClick: e => e.stopPropagation(),
                    // don't check the checkbox when clicking on the link
                    color: 'purple.500'
                  })
                }
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
      width: ['288px', '672px'],
      mb: "100px",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Grid */.rj, {
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gridGap: '32px',
        mb: 4,
        children: [/*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
          textAlign: "center",
          buttonSize: "large",
          buttonStyle: "purple",
          onClick: () => {
            if (!checked) {
              setError(formatMessage(messages.acceptTermsOfFiscalSponsorship));
            } else {
              window.location.href = getGithubConnectUrl(collectiveSlug);
            }
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
            id: "createcollective.opensource.VerifyGithub",
            defaultMessage: [{
              "type": 0,
              "value": "Verify using GitHub"
            }]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
          href: {
            pathname: `/opensource/apply/form`,
            query: _objectSpread({}, collectiveSlug && {
              collectiveSlug
            })
          },
          onClick: e => {
            if (!checked) {
              e.preventDefault();
              setError(formatMessage(messages.acceptTermsOfFiscalSponsorship));
            }
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
            textAlign: "center",
            buttonSize: "large",
            buttonStyle: "purpleSecondary",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
              id: "createcollective.opensource.ManualVerification",
              defaultMessage: [{
                "type": 0,
                "value": "Request manual verification"
              }]
            })
          })
        })]
      }), error && /*#__PURE__*/jsx_runtime_.jsx(Grid/* Flex */.kC, {
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/jsx_runtime_.jsx(MessageBox/* default */.Z, {
          type: "error",
          withIcon: true,
          mb: [1, 3],
          children: error
        })
      })]
    })]
  });
};

TermsOfFiscalSponsorship.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TermsOfFiscalSponsorship",
  "props": {
    "checked": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onChecked": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const osc_host_application_TermsOfFiscalSponsorship = (TermsOfFiscalSponsorship);

/***/ }),

/***/ 71586:
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
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47667);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const Link = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_StyledLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).withConfig({
  displayName: "YourInitiativeIsNearlyThere__Link",
  componentId: "sc-bch789-0"
})(["margin-left:8px;margin-right:8px;color:#313233;text-decoration:underline !important;font-weight:400;"]);

const YourInitiativeIsNearlyThere = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  mt: ['24px', '48px'],
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    mb: [null, 3],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: ['288px', '360px'],
      height: ('128px', '160px'),
      mb: "24px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alt: "Open Source Collective logotype",
        src: "/static/images/osc-logo.png",
        width: 240,
        height: 240
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      textAlign: "center",
      width: ['288px', '404px'],
      mb: "14px",
      ml: [null, '24px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H1, {
        fontSize: "32px",
        lineHeight: "40px",
        letterSpacing: "-0.008em",
        color: "black.900",
        textAlign: "center",
        mb: "14px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "OCFHostApplication.yourInitiativeIsNearlyThere",
          defaultMessage: [{
            "type": 0,
            "value": "Your initiative is nearly there!"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        color: "black.800",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "HostApplication.yourInitiativeIsNearlyThere.description",
          defaultMessage: [{
            "type": 0,
            "value": "We will review it and let you know by mail if we need you for anything during the process. "
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 1,
            "value": "lineBreak"
          }, {
            "type": 0,
            "value": " In the meantime, you can use these useful links."
          }],
          values: {
            lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "home",
          defaultMessage: [{
            "type": 0,
            "value": "Home"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "/help",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "community.support",
          defaultMessage: [{
            "type": 0,
            "value": "Support"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "https://slack.opencollective.com/",
        children: "Slack"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Link, {
        href: "https://blog.opencollective.com/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "company.blog",
          defaultMessage: [{
            "type": 0,
            "value": "Blog"
          }]
        })
      })]
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    my: "48px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      color: "black.800",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.partnerProjects",
        defaultMessage: [{
          "type": 0,
          "value": "These projects are trusting us:"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      display: "flex",
      alignItems: "center",
      justifyContent: ['flex-start', 'center'],
      mt: 4,
      width: ['288px', '672px'],
      overflow: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "208px",
        height: "204px",
        borderRadius: "12px",
        border: "1px solid #E8E9EB",
        padding: "16px",
        flexDirection: "column",
        mr: "24px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "80px",
          height: "80px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            alt: "Chrome logo",
            src: "/static/images/ocf-host-application/chrome-logo.png",
            width: 80,
            height: 80
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "176px",
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: "20px",
            color: "black.900",
            lineHeight: "28px",
            my: 2,
            children: "Chrome's Web Fund"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "14px",
            color: "black.800",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "OCFHostApplication.weAreAFund",
              defaultMessage: [{
                "type": 0,
                "value": "We are a fund"
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "208px",
        height: "204px",
        borderRadius: "12px",
        border: "1px solid #E8E9EB",
        padding: "16px",
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "80px",
          height: "80px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            alt: "CVKey logo",
            src: "/static/images/ocf-host-application/cvKey-logo.png",
            width: 80,
            height: 80
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "176px",
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: "20px",
            color: "black.900",
            lineHeight: "28px",
            my: 2,
            children: "CVKey Project Fund"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "14px",
            color: "black.800",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "OCFHostApplication.weAreAFund",
              defaultMessage: [{
                "type": 0,
                "value": "We are a fund"
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "208px",
        height: "204px",
        borderRadius: "12px",
        border: "1px solid #E8E9EB",
        padding: "16px",
        flexDirection: "column",
        ml: "24px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "80px",
          height: "80px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            alt: "WTV logo",
            src: "/static/images/ocf-host-application/wtv-logo.svg",
            width: 80,
            height: 80
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
          width: "176px",
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H3, {
            fontSize: "20px",
            color: "black.900",
            lineHeight: "28px",
            my: 2,
            children: "#Walkthevote Project"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            fontSize: "16px",
            color: "black.800",
            lineHeight: "20px",
            fontWeight: "500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "OCFHostApplication.weAreAFund",
              defaultMessage: [{
                "type": 0,
                "value": "We are a fund"
              }]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      my: "40px",
      href: "https://docs.oscollective.org/" // width={['286px', '215px']}
      ,
      buttonStyle: "purple",
      buttonSize: "medium",
      openInNewTab: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.visitDocumentation",
        defaultMessage: [{
          "type": 0,
          "value": "Visit the documentation "
        }, {
          "type": 1,
          "value": "arrowRight"
        }],
        values: {
          arrowRight: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
            size: "14px"
          })
        }
      })
    })]
  })]
});

YourInitiativeIsNearlyThere.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "YourInitiativeIsNearlyThere"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YourInitiativeIsNearlyThere);

/***/ }),

/***/ 69312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82525);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _components_osc_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13429);
/* harmony import */ var _components_osc_host_application_ConnectGithub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64392);
/* harmony import */ var _components_osc_host_application_TermsOfFiscalSponsorship__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42594);
/* harmony import */ var _components_osc_host_application_YourInitiativeIsNearlyThere__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71586);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84842);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31330);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_osc_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_7__, _components_osc_host_application_ConnectGithub__WEBPACK_IMPORTED_MODULE_8__, _components_Page__WEBPACK_IMPORTED_MODULE_11__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__]);
([_components_osc_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_7__, _components_osc_host_application_ConnectGithub__WEBPACK_IMPORTED_MODULE_8__, _components_Page__WEBPACK_IMPORTED_MODULE_11__, _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const oscCollectiveApplicationQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query OscCollectiveApplicationPage($slug: String) {
    account(slug: $slug) {
      id
      slug
      description
      name
      type
      isAdmin
      ... on AccountWithHost {
        host {
          id
          name
        }
      }
    }
  }
`;
const oscHostApplicationPageQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query OscHostApplicationPage {
    account(slug: "opensource") {
      id
      slug
      policies {
        COLLECTIVE_MINIMUM_ADMINS {
          numberOfAdmins
        }
      }
    }
    tagStats(host: { slug: "opensource" }, limit: 6) {
      nodes {
        id
        tag
      }
    }
  }
`;
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  'error.title': {
    id: "error.title",
    defaultMessage: [{
      "type": 0,
      "value": "Validation Failed"
    }]
  },
  'error.unauthorized.description': {
    id: "error.unauthorized.description",
    defaultMessage: [{
      "type": 0,
      "value": "You have to be an admin of "
    }, {
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " to apply with this initiative."
    }]
  },
  'error.existingHost.description': {
    id: "error.existingHost.description",
    defaultMessage: [{
      "type": 0,
      "value": "This collective is already hosted by "
    }, {
      "type": 1,
      "value": "hostName"
    }, {
      "type": 0,
      "value": "."
    }]
  }
});
const formValues = {
  user: {
    name: '',
    email: ''
  },
  collective: {
    name: '',
    slug: '',
    description: '',
    tags: []
  },
  applicationData: {
    typeOfProject: null,
    repositoryUrl: '',
    licenseSpdxId: null,
    extraLicenseInfo: '',
    amountOfMembers: '',
    linksToPreviousEvents: ''
  },
  termsOfServiceOC: false,
  inviteMembers: []
};

const formatNameFromSlug = repoName => {
  // replaces dash and underscore with space, then capitalises the words
  return repoName.replace(/[-_]/g, ' ').replace(/(?:^|\s)\S/g, words => words.toUpperCase());
};

const OSCHostApplication = ({
  loadingLoggedInUser,
  LoggedInUser,
  refetchLoggedInUser
}) => {
  const {
    0: checkedTermsOfFiscalSponsorship,
    1: setCheckedTermsOfFiscalSponsorship
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: initialValues,
    1: setInitialValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formValues);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    addToast
  } = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .useToasts */ .e1)();
  const step = router.query.step || 'intro';
  const collectiveSlug = router.query.collectiveSlug;
  const {
    data: hostData
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(oscHostApplicationPageQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T
  });
  const {
    data,
    loading: loadingCollective
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(oscCollectiveApplicationQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: collectiveSlug
    },
    skip: !(LoggedInUser && collectiveSlug && step === 'form'),
    onError: error => {
      addToast({
        type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        title: intl.formatMessage(messages['error.title']),
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(intl, error)
      });
    }
  });
  const collective = data?.account;
  const canApplyWithCollective = collective && collective.isAdmin && collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .CollectiveType.COLLECTIVE */ .eV.COLLECTIVE;
  const hasHost = collective && collective?.host?.id;
  const popularTags = hostData?.tagStats.nodes.map(({
    tag
  }) => tag).filter(tag => !_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_4__/* .IGNORED_TAGS.includes */ .bR.includes(tag));
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (collectiveSlug && collective && (!canApplyWithCollective || hasHost)) {
      addToast({
        type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_12__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        title: intl.formatMessage(messages['error.title']),
        message: hasHost ? intl.formatMessage(messages['error.existingHost.description'], {
          hostName: collective.host.name
        }) : intl.formatMessage(messages['error.unauthorized.description'], {
          name: collective.name
        })
      });
    }
  }, [collectiveSlug, collective]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    title: "Open Source Collective application",
    children: [step === 'intro' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_osc_host_application_TermsOfFiscalSponsorship__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      checked: checkedTermsOfFiscalSponsorship,
      onChecked: setCheckedTermsOfFiscalSponsorship
    }), step === 'pick-repo' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_osc_host_application_ConnectGithub__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      setGithubInfo: ({
        handle,
        licenseSpdxId
      } = {}) => {
        const [owner, repo] = handle?.split('/') || [];
        setInitialValues(_objectSpread(_objectSpread({}, initialValues), {}, {
          collective: _objectSpread(_objectSpread({}, initialValues.collective), {}, {
            name: handle ? formatNameFromSlug(repo ?? owner) : '',
            slug: handle ? repo ?? owner : ''
          }),
          applicationData: _objectSpread(_objectSpread({}, initialValues.applicationData), {}, {
            typeOfProject: handle ? 'CODE' : null,
            repositoryUrl: handle ? `https://github.com/${handle}` : '',
            licenseSpdxId,
            useGithubValidation: true
          })
        }));
      },
      router: router,
      nextDisabled: !initialValues.applicationData.repositoryUrl
    }), step === 'form' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_osc_host_application_ApplicationForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      initialValues: initialValues,
      setInitialValues: setInitialValues,
      loadingLoggedInUser: loadingLoggedInUser,
      LoggedInUser: LoggedInUser,
      collective: collective,
      host: hostData?.account,
      loadingCollective: loadingCollective,
      canApplyWithCollective: canApplyWithCollective && !hasHost,
      refetchLoggedInUser: refetchLoggedInUser,
      popularTags: popularTags
    }), step === 'success' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_osc_host_application_YourInitiativeIsNearlyThere__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})]
  });
};

OSCHostApplication.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OSCHostApplication",
  "props": {
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
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_13__/* .withUser */ .ns)(OSCHostApplication));
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

/***/ 13831:
/***/ ((module) => {

module.exports = require("@dnd-kit/core");

/***/ }),

/***/ 99565:
/***/ ((module) => {

module.exports = require("@dnd-kit/sortable");

/***/ }),

/***/ 92813:
/***/ ((module) => {

module.exports = require("@dnd-kit/utilities");

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

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 50567:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/ArrowLeft2");

/***/ }),

/***/ 89457:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/ArrowRight2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

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

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 70154:
/***/ ((module) => {

module.exports = require("load-script");

/***/ }),

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

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

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

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

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

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

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

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

/***/ 31325:
/***/ ((module) => {

module.exports = require("react-select/creatable");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 84103:
/***/ ((module) => {

module.exports = require("spdx-license-list");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ 85598:
/***/ ((module) => {

module.exports = import("react-animate-height");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,2143,986,242,5993,7667,2903,6718], () => (__webpack_exec__(69312)));
module.exports = __webpack_exports__;

})();