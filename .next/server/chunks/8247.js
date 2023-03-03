"use strict";
exports.id = 8247;
exports.ids = [8247];
exports.modules = {

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

/***/ 372:
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










const OCFHostApplicationFAQ = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
  withBorderLeft: true,
  withNewButtons: true
}, props), {}, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Entry */ .kS, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .Dx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.faq.informationUsage.title",
        defaultMessage: [{
          "type": 0,
          "value": "How is this information used?"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.faq.informationUsage.content",
        defaultMessage: [{
          "type": 0,
          "value": "This application opens the conversation between your initiative and our team, so please provide us with as many details as you can. If there is sufficient information provided in your application, you may get accepted very quickly!"
        }]
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Entry */ .kS, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Title */ .Dx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.faq.missionImpact.title",
        defaultMessage: [{
          "type": 0,
          "value": "About our mission impact areas"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OCFHostApplication.faq.missionImpact.content",
        defaultMessage: [{
          "type": 8,
          "value": "b",
          "children": [{
            "type": 0,
            "value": "Increasing access to educational resources and training:"
          }]
        }, {
          "type": 0,
          "value": " With the advance of technology and the movement towards a society where people work together to enhance and develop the future, there has been an increase in the number of organizations and groups that are coming together to promote education. "
        }, {
          "type": 1,
          "value": "lineBreak"
        }, {
          "type": 1,
          "value": "lineBreak"
        }, {
          "type": 0,
          "value": " "
        }, {
          "type": 8,
          "value": "b",
          "children": [{
            "type": 0,
            "value": "Creating a positive social impact:"
          }]
        }, {
          "type": 0,
          "value": " Sponsor’s social impact purpose is aimed at finding ways to (i) eliminate prejudice and discrimination; (ii) combat community deterioration; (iii) decrease juvenile delinquency; (iv) serve the less fortunate or distressed; (v) serve to prevent animal or child cruelty; or (vi) create a positive impact on society. "
        }, {
          "type": 1,
          "value": "lineBreak"
        }, {
          "type": 1,
          "value": "lineBreak"
        }, {
          "type": 0,
          "value": " "
        }, {
          "type": 8,
          "value": "b",
          "children": [{
            "type": 0,
            "value": "Developing tools to improve civic participation within cities or communities:"
          }]
        }, {
          "type": 0,
          "value": " Sponsor host projects aimed at fostering civic participation, democratic debate and rebuilding community ties and strengths."
        }],
        values: {
          // eslint-disable-next-line react/display-name
          b: chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("b", {
            children: chunks
          }),
          lineBreak: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {})
        }
      })
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
    mt: 3,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      href: "https://docs.opencollective.foundation/faq/basic-faq",
      background: "#F5FAFF",
      padding: "8px 16px",
      borderRadius: "100px",
      fontWeight: "500",
      openInNewTab: true,
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

OCFHostApplicationFAQ.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OCFHostApplicationFAQ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OCFHostApplicationFAQ);

/***/ }),

/***/ 48247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "d": () => (/* binding */ APPLICATION_DATA_AMOUNT_FIELDS)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_boxicons_solid_Lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42126);
/* harmony import */ var _styled_icons_boxicons_solid_Lock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_solid_Lock__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50567);
/* harmony import */ var _styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89457);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83002);
/* harmony import */ var _styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82525);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17632);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13124);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5993);
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47667);
/* harmony import */ var _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52903);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69078);
/* harmony import */ var _faqs_OCFHostApplicationFAQ__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(372);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(92129);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(29242);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(37278);
/* harmony import */ var _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14574);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(87268);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(41433);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(32631);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(93150);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(90998);
/* harmony import */ var _OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(58689);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_18__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_20__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_28__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_37__]);
([_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_18__, _CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_20__, _onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_28__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_37__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









































const createCollectiveMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
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
      host {
        id
        slug
      }
    }
  }
`;
const applyToHostMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
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
        host {
          id
          slug
        }
      }
    }
  }
`;
const APPLICATION_DATA_AMOUNT_FIELDS = ['totalAmountRaised', 'totalAmountToBeRaised'];

const useApplicationMutation = canApplyWithCollective => (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(canApplyWithCollective ? applyToHostMutation : createCollectiveMutation, {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_16__/* .API_V2_CONTEXT */ .T
});

const prepareApplicationData = applicationData => {
  const formattedApplicationData = _objectSpread({}, applicationData);

  APPLICATION_DATA_AMOUNT_FIELDS.forEach(key => {
    if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(applicationData[key])) {
      formattedApplicationData[key] = (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_13__/* .formatCurrency */ .xG)(applicationData[key], 'USD');
    }
  });
  return formattedApplicationData;
};

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
  popularTags
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.useIntl)();
  const [submitApplication, {
    loading: submitting,
    error
  }] = useApplicationMutation(canApplyWithCollective);

  const slugAlreadyExists = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(error, 'graphQLErrors.0.extensions.extraInfo.slugExists');

  const validate = values => {
    const errors = (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_15__/* .requireFields */ .ay)(values, ['user.name', 'user.email', 'collective.name', 'collective.slug', 'collective.description', 'applicationData.location', 'applicationData.initiativeDuration', 'applicationData.expectedFundingPartner', 'applicationData.missionImpactExplanation', 'applicationData.websiteAndSocialLinks']);
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_15__/* .verifyEmailPattern */ .Sn)(errors, values, 'user.email'); // verifyFieldLength(intl, errors, values, 'collective.name', 1, 50);
    // verifyFieldLength(intl, errors, values, 'collective.slug', 1, 30);

    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_15__/* .verifyFieldLength */ .zy)(intl, errors, values, 'collective.description', 1, 250);
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_15__/* .verifyFieldLength */ .zy)(intl, errors, values, 'applicationData.missionImpactExplanation', 1, 250);
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_15__/* .verifyChecked */ .Yy)(errors, values, 'termsOfServiceOC');
    return errors;
  };

  const submit = async ({
    user,
    collective,
    applicationData,
    inviteMembers
  }) => {
    const variables = _objectSpread({
      collective,
      host: {
        legacyId: _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__/* .OPENCOLLECTIVE_FOUNDATION_ID */ .SQ
      },
      user,
      applicationData: prepareApplicationData(applicationData),
      inviteMembers: inviteMembers.map(invite => _objectSpread(_objectSpread({}, invite), {}, {
        memberAccount: {
          legacyId: invite.memberAccount.id
        }
      }))
    }, canApplyWithCollective && {
      collective: {
        id: collectiveWithSlug.id,
        slug: collectiveWithSlug.slug
      }
    });

    const response = await submitApplication({
      variables
    });

    if (response.data.createCollective || response.data.applyToHost) {
      await router.push('/foundation/apply/success');
      window.scrollTo(0, 0);
    }
  };

  if (error) {
    // Scroll the user to the top in order to see the error message
    window.scrollTo(0, 0);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mt: ['24px', '48px'],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
        flexDirection: ['column', 'row'],
        alignItems: "center",
        justifyContent: "center",
        mb: [null, 3],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
          width: '160px',
          height: '160px',
          mb: "24px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            alt: "OCF Application form illustration",
            src: "/static/images/ocf-host-application/ocf-applicationForm-illustration.png",
            width: 160,
            height: 160
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
          textAlign: ['center', 'left'],
          width: ['256px', '404px'],
          mb: 4,
          ml: [null, '24px'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.H1, {
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "-0.008em",
            color: "black.900",
            textAlign: ['center', 'left'],
            mb: "14px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "OCFHostApplication.title",
              defaultMessage: [{
                "type": 0,
                "value": "Apply with your initiative"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "500",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "OCFHostApplication.applicationForm.description",
              defaultMessage: [{
                "type": 0,
                "value": "Grantees and project participants will love the simplicity and accessibility, and you’ll love how much your overhead is reduced."
              }]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      alignItems: ['center', 'flex-start'],
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        children: [error && !slugAlreadyExists && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            type: "error",
            withIcon: true,
            mb: [1, 3],
            children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_14__/* .i18nGraphqlException */ .t2)(intl, error)
          })
        }), loadingCollective ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          width: ['256px', '484px', '664px'],
          height: 463,
          mb: 4,
          mt: [3, 0],
          mr: [null, '36px', null, null, '102px'],
          borderRadius: "8px"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(formik__WEBPACK_IMPORTED_MODULE_8__.Formik, {
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
                setFieldValue('collective.slug', (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_11__/* .suggestSlug */ .e4)(e.target.value));
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

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_8__.Form, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                justifyContent: "center",
                flexDirection: "column",
                alignItems: ['center', 'flex-start'],
                mb: 4,
                mt: [3, 0],
                border: "1px solid #DCDEE0",
                padding: "32px 16px",
                display: "flex",
                borderRadius: "8px",
                mr: [null, '36px', null, null, '102px'],
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '484px', '664px'],
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.H4, {
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "black.900",
                      mb: 2,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                        id: "OCFHostApplication.applicationForm.title",
                        defaultMessage: [{
                          "type": 0,
                          "value": "About you and your initiative "
                        }, {
                          "type": 1,
                          "value": "padlock"
                        }, {
                          "type": 0,
                          "value": " "
                        }, {
                          "type": 1,
                          "value": "questionMark"
                        }],
                        values: {
                          padlock: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_boxicons_solid_Lock__WEBPACK_IMPORTED_MODULE_4__.Lock, {
                            size: "12px",
                            color: "#9D9FA3"
                          }),
                          questionMark: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                              id: "4LURx9",
                              defaultMessage: [{
                                "type": 0,
                                "value": "Tell us more about your collective. This information is private and only used for internal purposes."
                              }]
                            }),
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_remix_line_Question__WEBPACK_IMPORTED_MODULE_7__.Question, {
                              size: "13px",
                              color: "#DADADA"
                            })
                          })
                        }
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                      display: ['none', 'flex'],
                      width: [null, '219px', '383px']
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "black.600",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "OCFHostApplication.applicationForm.instruction",
                      defaultMessage: [{
                        "type": 0,
                        "value": "All fields are mandatory."
                      }]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '234px', '324px'],
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'location'),
                    labelFontSize: "13px",
                    labelColor: "#4E5052",
                    labelProps: {
                      fontWeight: '600',
                      lineHeight: '16px'
                    },
                    required: true,
                    htmlFor: "location",
                    name: "applicationData.location",
                    my: 3,
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
                      type: "text",
                      placeholder: "Walnut, CA",
                      px: "7px"
                    }))
                  })
                }), !LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                  flexDirection: ['column', 'row'],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    mr: [null, 3],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'name'),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      disabled: !!LoggedInUser,
                      name: "user.name",
                      htmlFor: "name",
                      width: ['256px', '234px', '324px'],
                      my: 2,
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, _objectSpread({
                        type: "text",
                        placeholder: "Thomas Anderson",
                        px: "7px"
                      }, field))
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    my: 2,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'email'),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      disabled: !!LoggedInUser,
                      name: "user.email",
                      htmlFor: "email",
                      type: "email",
                      width: ['256px', '234px', '324px'],
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, _objectSpread({
                        type: "email",
                        placeholder: "tanderson@gmail.com",
                        px: "7px"
                      }, field))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                      fontSize: "11px",
                      lineHeight: "16px",
                      color: "black.600",
                      mt: "6px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                        id: "OCFHostApplication.applicationForm.emailInstruction",
                        defaultMessage: [{
                          "type": 0,
                          "value": "We will use this email to create your account."
                        }]
                      })
                    })]
                  })]
                }), !canApplyWithCollective && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                  flexDirection: ['column', 'row'],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    my: 2,
                    mr: [null, 3],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'initiativeName'),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      name: "collective.name",
                      htmlFor: "initiativeName",
                      required: true,
                      onChange: handleSlugChange,
                      width: ['256px', '234px', '324px'],
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, _objectSpread({
                        type: "text",
                        placeholder: "Agora Collective",
                        px: "7px"
                      }, field))
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    width: ['256px', '234px', '324px'],
                    my: 2,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'slug'),
                      helpText: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                        id: "03Q893",
                        defaultMessage: [{
                          "type": 0,
                          "value": "This can be edited later"
                        }]
                      }),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      name: "collective.slug",
                      htmlFor: "slug",
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                        prepend: "opencollective.com/",
                        type: "url",
                        placeholder: "agora"
                      }, field), {}, {
                        onChange: e => setFieldValue('collective.slug', e.target.value),
                        px: "7px",
                        prependProps: {
                          color: '#9D9FA3',
                          fontSize: '13px',
                          lineHeight: '16px'
                        }
                      }))
                    }), slugAlreadyExists ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                      fontSize: "10px",
                      color: "red.600",
                      mt: "6px",
                      children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_14__/* .i18nGraphqlException */ .t2)(intl, error)
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                      fontSize: "11px",
                      lineHeight: "16px",
                      color: "black.600",
                      mt: "6px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                        id: "createCollective.form.suggestedLabel",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Suggested"
                        }]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                  flexDirection: ['column', 'row'],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    mr: [null, 3],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'initiativeDuration'),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      name: "applicationData.initiativeDuration",
                      htmlFor: "initiativeDuration",
                      required: true,
                      width: ['256px', '234px', '324px'],
                      my: 2,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
                        type: "text",
                        placeholder: "New initiatives are welcome!"
                      }, field), {}, {
                        px: "7px"
                      }))
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    width: ['256px', '234px', '324px'],
                    my: 2,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'totalAmountRaised'),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      name: "applicationData.totalAmountRaised",
                      htmlFor: "totalAmountRaised",
                      children: ({
                        form,
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                        id: field.id,
                        currency: "USD",
                        px: "7px",
                        placeholder: "It's fine if you're just starting out.",
                        error: field.error,
                        value: field.value,
                        maxWidth: "100%",
                        onChange: value => form.setFieldValue(field.name, value),
                        onBlur: () => form.setFieldTouched(field.name, true)
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                      fontSize: "11px",
                      lineHeight: "16px",
                      color: "black.600",
                      mt: "6px",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                        id: "OCFHostApplication.applicationForm.totalAmountRaisedInstruction",
                        defaultMessage: [{
                          "type": 0,
                          "value": "If you haven't please type 0."
                        }]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                  flexDirection: ['column', 'row'],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    width: ['256px', '234px', '324px'],
                    my: 2,
                    mr: [null, 3],
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'totalAmountToBeRaised'),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      name: "applicationData.totalAmountToBeRaised",
                      htmlFor: "totalAmountToBeRaised",
                      required: true,
                      children: ({
                        field,
                        form
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
                        id: field.id,
                        placeholder: "Be as ambitious as you want.",
                        currency: "USD",
                        px: "7px",
                        error: field.error,
                        value: field.value,
                        maxWidth: "100%",
                        onChange: value => form.setFieldValue(field.name, value),
                        onBlur: () => form.setFieldTouched(field.name, true)
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    width: ['256px', '234px', '324px'],
                    my: 2,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'expectedFundingPartner'),
                      labelFontSize: "13px",
                      labelColor: "#4E5052",
                      labelProps: {
                        fontWeight: '600',
                        lineHeight: '16px'
                      },
                      name: "applicationData.expectedFundingPartner",
                      htmlFor: "expectedFundingPartner",
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
                        type: "text",
                        placeholder: "An idea of your ideal partners."
                      }, field), {}, {
                        px: "7px"
                      }))
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '484px', '663px'],
                  my: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'initiativeDescription'),
                    labelFontSize: "13px",
                    labelColor: "#4E5052",
                    labelProps: {
                      fontWeight: '600',
                      lineHeight: '16px'
                    },
                    name: "collective.description",
                    htmlFor: "initiativeDescription",
                    required: true,
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      placeholder: "We make sandwiches and give them to our neighbors in an outdoor community fridge. We collaborate with other organizations to figure out what the best flavor sandwich is."
                    }, field), {}, {
                      px: "7px"
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                    fontSize: "11px",
                    lineHeight: "16px",
                    color: "black.600",
                    mt: "6px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "OCFHostApplication.applicationForm.whatDoesInitiativeDoInstruction",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Write a short description of your initiative (250 characters max)"
                      }]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '484px', '663px'],
                  my: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'missionImpactExplanation'),
                    labelFontSize: "13px",
                    labelColor: "#4E5052",
                    labelProps: {
                      fontWeight: '600',
                      lineHeight: '16px'
                    },
                    name: "applicationData.missionImpactExplanation",
                    htmlFor: "missionImpactExplanation",
                    required: true,
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      placeholder: "We create a positive social impact and combat community deterioration by providing access to the best sandwiches to our neighbors and building a strong community around our love of sandwiches."
                    }, field), {}, {
                      px: "7px"
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                    fontSize: "11px",
                    lineHeight: "16px",
                    color: "black.600",
                    mt: "6px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "OCFHostApplication.applicationForm.missionInstruction",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Check the sidebar for more info (250 characters max)"
                      }]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '484px', '663px'],
                  my: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    name: "collective.tags",
                    htmlFor: "tags",
                    labelFontSize: "13px",
                    labelColor: "#4E5052",
                    labelProps: {
                      fontWeight: '600',
                      lineHeight: '16px'
                    },
                    label: intl.formatMessage({
                      id: "Tags",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Tags"
                      }]
                    }),
                    "data-cy": "ccf-form-tags",
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_CollectiveTagsInput__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, field), {}, {
                      defaultValue: field.value,
                      onChange: tags => {
                        setFieldValue('collective.tags', tags.map(t => t.value));
                      },
                      suggestedTags: popularTags
                    }))
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '484px', '663px'],
                  my: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#4E5052",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "onboarding.admins.header",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Add administrators"
                      }]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                    mt: 1,
                    width: "100%",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                      my: 2,
                      fontSize: "9px",
                      textTransform: "uppercase",
                      color: "black.700",
                      letterSpacing: "0.06em",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                        id: "AddedAdministrators",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Added Administrators"
                        }]
                      }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS && ` (${1 + values.inviteMembers?.length}/${host.policies.COLLECTIVE_MINIMUM_ADMINS.numberOfAdmins})`]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                      flexGrow: 1,
                      alignItems: "center",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        width: "100%",
                        ml: 2
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                    width: "100%",
                    flexWrap: "wrap",
                    "data-cy": "profile-card",
                    children: [LoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                      collective: LoggedInUser.collective
                    }, LoggedInUser.collective.id) : values.user?.name && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                      collective: values.user
                    }, "0"), values.inviteMembers?.map(invite => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_onboarding_modal_OnboardingProfileCard__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                      collective: invite.memberAccount,
                      removeAdmin: () => setFieldValue('inviteMembers', values.inviteMembers.filter(i => i.memberAccount.id !== invite.memberAccount.id))
                    }, invite.memberAccount.id))]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                    mt: 1,
                    width: "100%",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                      my: 2,
                      fontSize: "9px",
                      textTransform: "uppercase",
                      color: "black.700",
                      letterSpacing: "0.06em",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                        id: "InviteAdministrators",
                        defaultMessage: [{
                          "type": 0,
                          "value": "Invite Administrators"
                        }]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                      flexGrow: 1,
                      alignItems: "center",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                        width: "100%",
                        ml: 2
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
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
                    })
                  }), host?.policies?.COLLECTIVE_MINIMUM_ADMINS && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                    type: "info",
                    mt: 3,
                    fontSize: "13px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
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
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '484px', '663px'],
                  my: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    label: (0,_lib_i18n_ocf_form__WEBPACK_IMPORTED_MODULE_17__/* .i18nOCFApplicationFormLabel */ .R)(intl, 'websiteAndSocialLinks'),
                    labelFontSize: "13px",
                    labelColor: "#4E5052",
                    labelProps: {
                      fontWeight: '600',
                      lineHeight: '16px'
                    },
                    name: "applicationData.websiteAndSocialLinks",
                    htmlFor: "websiteAndSocialLinks",
                    required: true,
                    children: ({
                      field
                    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                      type: "text"
                    }, field), {}, {
                      px: "7px"
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                    fontSize: "11px",
                    lineHeight: "16px",
                    color: "black.600",
                    mt: "6px",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "OCFHostApplication.applicationForm.websiteInstruction",
                      defaultMessage: [{
                        "type": 0,
                        "value": "If you have something to send us, please upload it to a storage service (Dropbox, Drive) and paste the sharing link here."
                      }]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                  width: ['256px', '484px', '663px'],
                  mb: 2,
                  mt: "20px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Container__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                  width: ['256px', '484px', '663px'],
                  display: "flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  my: 2,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
                    mr: 3,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                      name: "termsOfServiceOC",
                      required: true,
                      children: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                        background: "#396C6F",
                        size: "16px",
                        name: field.name,
                        required: field.required,
                        checked: field.value,
                        onChange: ({
                          checked
                        }) => setFieldValue(field.name, checked),
                        error: field.error,
                        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_38__.P, {
                          ml: 1,
                          fontSize: "12px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          color: "black.800",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
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
                              TOSLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_24__/* .getI18nLink */ .fw)({
                                href: '/tos',
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
                flexDirection: ['column', 'row'],
                alignItems: "center",
                alignSelf: [null, 'flex-start'],
                justifyContent: "center",
                mb: "40px",
                mt: [null, 3],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Link__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                  href: "/foundation/apply/fees",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    type: "button",
                    mb: [3, 0],
                    width: ['286px', '120px'],
                    mr: [null, 3],
                    onClick: () => setInitialValues(_objectSpread(_objectSpread({}, initialValues), values)),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_icomoon_ArrowLeft2__WEBPACK_IMPORTED_MODULE_5__.ArrowLeft2, {
                      size: "14px"
                    }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "Back",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Back"
                      }]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_OCFPrimaryButton__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                  width: ['286px', '120px'],
                  type: "submit",
                  onSubmit: handleSubmit,
                  loading: submitting,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "Apply",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Apply"
                    }]
                  }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_6__.ArrowRight2, {
                    size: "14px"
                  })]
                })]
              })]
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
          width: "1px",
          solid: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_faqs_OCFHostApplicationFAQ__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          width: ['256px', '148px', '194px', null, '239px']
        })]
      })]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_9__.withRouter)(ApplicationForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ i18nOCFApplicationFormLabel)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const i18nLabels = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  location: {
    id: "OCFHostApplication.location.label",
    defaultMessage: [{
      "type": 0,
      "value": "Your Location"
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
  initiativeName: {
    id: "OCFHostApplication.initiativeName.label",
    defaultMessage: [{
      "type": 0,
      "value": "What is the name of your initiative?"
    }]
  },
  slug: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  initiativeDuration: {
    id: "OCFHostApplication.initiativeDuration.label",
    defaultMessage: [{
      "type": 0,
      "value": "How long has your initiative been running?"
    }]
  },
  totalAmountRaised: {
    id: "OCFHostApplication.totalAmountRaised.label",
    defaultMessage: [{
      "type": 0,
      "value": "If you have begun fundraising, how much money have you raised so far?"
    }]
  },
  totalAmountToBeRaised: {
    id: "OCFHostApplication.totalAmountToBeRaised.label",
    defaultMessage: [{
      "type": 0,
      "value": "How much money do you want to fundraise?"
    }]
  },
  expectedFundingPartner: {
    id: "OCFHostApplication.expectedFundingPartner.label",
    defaultMessage: [{
      "type": 0,
      "value": "Who do you expect to fund you?"
    }]
  },
  initiativeDescription: {
    id: "OCFHostApplication.initiativeDescription.label",
    defaultMessage: [{
      "type": 0,
      "value": "What does your initiative do? (Please describe how you plan to use raised funds)"
    }]
  },
  missionImpactExplanation: {
    id: "OCFHostApplication.missionImpactExplanation.label",
    defaultMessage: [{
      "type": 0,
      "value": "Please explain how your initiative furthers one or more of our mission impact areas:"
    }]
  },
  websiteAndSocialLinks: {
    id: "OCFHostApplication.websiteAndSocialLinks.label",
    defaultMessage: [{
      "type": 0,
      "value": "Website and / or social media links:"
    }]
  }
});
const i18nOCFApplicationFormLabel = (intl, name) => {
  return i18nLabels[name] ? intl.formatMessage(i18nLabels[name]) : name;
};

/***/ })

};
;