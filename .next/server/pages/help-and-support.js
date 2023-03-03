"use strict";
(() => {
var exports = {};
exports.id = 7364;
exports.ids = [7364];
exports.modules = {

/***/ 74770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ isEmptyValue),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41032);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2331);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["content", "collapsable", "maxHeight", "maxCollapsedHeight", "collapsePadding", "hideViewMoreLink"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * React-Quill usually saves something like `<p><br/></p` when saving with an empty
 * editor. This function tries to detect this and returns true if there's no real
 * text, image or iframe contents.
 */



const isEmptyValue = value => {
  if (!value) {
    return true;
  } else if (value.length > 50) {
    // Running the regex on long strings can be costly, and there's very few chances
    // to have a blank content with tons of empty markup.
    return false;
  } else if (/(<img)|(<iframe)|(<video)/.test(value)) {
    // If the content has no text but has an image or an iframe (video) then it's not blank
    return false;
  } else {
    // Strip all tags and check if there's something left
    const cleanStr = value.replace(/(<([^>]+)>)/gi, '');
    return cleanStr.length === 0;
  }
};
const ReadFullLink = styled_components__WEBPACK_IMPORTED_MODULE_5___default().a.withConfig({
  displayName: "HTMLContent__ReadFullLink",
  componentId: "sc-5326of-0"
})(["cursor:pointer;font-size:12px;> svg{vertical-align:baseline;}"]);
const InlineDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "HTMLContent__InlineDisplayBox",
  componentId: "sc-5326of-1"
})(["overflow-y:hidden;", ""], props => props.maxHeight && `max-height: ${props.maxHeight + 20}px;`);
const CollapsedDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "HTMLContent__CollapsedDisplayBox",
  componentId: "sc-5326of-2"
})(["overflow-y:hidden;", " -webkit-mask-image:linear-gradient(to bottom,black 50%,transparent 100%);mask-image:linear-gradient(to bottom,black 50%,transparent 100%);"], props => props.maxHeight && `max-height: ${props.maxCollapsedHeight + 20}px;`);
/**
 * `RichTextEditor`'s associate, this component will display raw HTML with some CSS
 * resets to ensure we don't mess with the styles. Content can be omitted if you're
 * just willing to take the styles, for example to match the content displayed in the
 * editor with how it's rendered on the page.
 *
 * ⚠️ Be careful! This component will pass content to `dangerouslySetInnerHTML` so
 * always ensure `content` is properly sanitized!
 */

const HTMLContent = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ref => {
  let {
    content,
    collapsable = false,
    maxHeight,
    maxCollapsedHeight = 20,
    collapsePadding = 1,
    hideViewMoreLink = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isCollapsed, setIsCollapsed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const DisplayBox = !isCollapsed || isOpen ? InlineDisplayBox : CollapsedDisplayBox;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (collapsable && contentRef?.current?.clientHeight > maxCollapsedHeight + collapsePadding) {
      setIsCollapsed(true);
    }
  }, [content]);

  if (!content) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", _objectSpread({}, props));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(DisplayBox, _objectSpread({
      ref: contentRef,
      maxHeight: maxHeight,
      maxCollapsedHeight: maxCollapsedHeight,
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, props)), !isOpen && isCollapsed && !hideViewMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ReadFullLink, _objectSpread(_objectSpread({
      onClick: () => setOpen(true)
    }, props), {}, {
      role: "button",
      tabIndex: 0,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setOpen(true);
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "ExpandDescription",
        defaultMessage: [{
          "type": 0,
          "value": "Read full description"
        }]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__.CaretDown, {
        size: "10px"
      })]
    })), isOpen && isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ReadFullLink, _objectSpread(_objectSpread({
      onClick: () => setOpen(false)
    }, props), {}, {
      role: "button",
      tabIndex: 0,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setOpen(false);
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "W/V6+Y",
        defaultMessage: [{
          "type": 0,
          "value": "Collapse"
        }]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__.CaretUp, {
        size: "10px"
      })]
    }))]
  });
}).withConfig({
  displayName: "HTMLContent",
  componentId: "sc-5326of-3"
})(["width:100%;line-height:1.75em;overflow-wrap:break-word;h1,h2,h3{margin:0;font-weight:normal;text-align:left;}h3{font-size:1.25em;margin-bottom:0.25em;}figure{margin:0;&[data-trix-content-type='--embed-iframe-video']{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;iframe{position:absolute;top:0;left:0;width:100%;height:100%;}}&[data-trix-content-type='--embed-iframe-anchorFm']{iframe{min-height:300px;}}}img{max-width:100%;}.ql-align-center{text-align:center;}.ql-align-right{text-align:right;}.ql-align-left{text-align:left;}blockquote{font-size:1em;border-left:5px solid #e9e9e9;background:white;color:#757677;margin:0;padding:16px;}pre{font-size:0.85em;background:#f6f8fa;color:#333;border:none;padding:16px;font-family:monospace;overflow-x:auto;}", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_6__.typography, styled_system__WEBPACK_IMPORTED_MODULE_6__.space, props => {
  let primaryColor = props.theme.colors.primary[500];
  let secondaryColor = props.theme.colors.primary[400];
  const luminance = (0,polished__WEBPACK_IMPORTED_MODULE_3__.getLuminance)(primaryColor);

  if (luminance < 0 || luminance > 0.9) {
    return null;
  } else if (luminance < 0.06) {
    primaryColor = props.theme.colors.primary[400];
    secondaryColor = props.theme.colors.primary[200];
  } else if (luminance > 0.6) {
    primaryColor = props.theme.colors.primary[900];
    secondaryColor = props.theme.colors.primary[700];
  }

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["a{color:", ";&:hover{color:", ";}}"], primaryColor, secondaryColor);
});
HTMLContent.defaultProps = {
  fontSize: '14px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLContent);

/***/ }),

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

/***/ 62855:
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
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _NeedHelpSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50615);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














const TopicCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_StyledCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
  displayName: "BrowseTopicSection__TopicCard",
  componentId: "sc-1pzyd1-0"
})(["border-width:1px;border-color:transparent;&:focus,&:active,&:hover{border-color:#1869f5;}"]);
const topics = [{
  iconSrc: '/static/images/help-and-support/collectiveProfile-icon.png',
  id: 'collectiveProfiles',
  link: 'https://docs.opencollective.com/help/collectives/collectives'
}, {
  iconSrc: '/static/images/help-and-support/fiscalHosts-icon.png',
  id: 'fiscalHosts',
  link: 'https://docs.opencollective.com/help/fiscal-hosts/fiscal-hosts'
}, {
  iconSrc: '/static/images/help-and-support/contributions-icon.png',
  id: 'contributions',
  link: 'https://docs.opencollective.com/help/financial-contributors/financial-contributors'
}, {
  iconSrc: '/static/images/help-and-support/expenses-icon.png',
  id: 'expenses',
  link: 'https://docs.opencollective.com/help/expenses-and-getting-paid/expenses'
}, {
  iconSrc: '/static/images/help-and-support/projects-icon.png',
  id: 'projects',
  link: 'https://docs.opencollective.com/help/collectives/projects'
}, {
  iconSrc: '/static/images/help-and-support/security-icon.png',
  id: 'security',
  link: 'https://docs.opencollective.com/help/product/security'
}];
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  collectiveProfiles: {
    id: "helpAndSupport.collectiveProfiles",
    defaultMessage: [{
      "type": 0,
      "value": "Collective Profiles"
    }]
  },
  fiscalHosts: {
    id: "helpAndSupport.fiscalHosts",
    defaultMessage: [{
      "type": 0,
      "value": "Fiscal Hosts"
    }]
  },
  contributions: {
    id: "Contributions",
    defaultMessage: [{
      "type": 0,
      "value": "Contributions"
    }]
  },
  expenses: {
    id: "Expenses",
    defaultMessage: [{
      "type": 0,
      "value": "Expenses"
    }]
  },
  projects: {
    id: "Projects",
    defaultMessage: [{
      "type": 0,
      "value": "Projects"
    }]
  },
  security: {
    id: "Security",
    defaultMessage: [{
      "type": 0,
      "value": "Security"
    }]
  }
});

const BrowseTopics = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      flexDirection: "column",
      px: "16px",
      alignItems: "center",
      my: "120px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        width: [null, '568px', '864px', null, '1020px'],
        alignItems: "center",
        mb: ['24px', '48px'],
        justifyContent: "space-between",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "helpAndSupport.browseTopics",
              defaultMessage: [{
                "type": 0,
                "value": "Browse Topics"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          display: ['none', 'inline-block'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            href: "https://docs.opencollective.com",
            openInNewTab: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              minWidth: 110,
              buttonStyle: "marketing",
              whiteSpace: "nowrap",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                id: "helpAndSupport.viewAll",
                defaultMessage: [{
                  "type": 0,
                  "value": "View All"
                }]
              })
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .rj, {
        justifyContent: "center",
        alignItems: "center",
        width: ['100%', '568px', '864px', null, null, '1020px'],
        gridTemplateColumns: [null, 'repeat(2, 288px)', 'repeat(3, 272px)', null, `repeat(3, 320px)`],
        gridGap: ['30px', null, '24px'],
        children: topics.map(({
          id,
          iconSrc,
          link
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          href: link,
          openInNewTab: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(TopicCard, {
            width: ['288px', null, '272px', null, '320px'],
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0px 8px 20px rgba(41, 41, 42, 0.07)",
            borderWidth: "0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "32px",
              letterSpacing: "-0.008em",
              color: "black.900",
              mb: "24px",
              children: formatMessage(messages[id])
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                width: 64,
                height: 64,
                src: iconSrc,
                alt: `${id} illustration`
              })
            })]
          })
        }, id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        mt: "24px",
        display: [null, 'none'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            minWidth: 288,
            my: [2, null, 0],
            mr: [0, 3],
            buttonStyle: "marketing",
            whiteSpace: "nowrap",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "helpAndSupport.viewAll",
              defaultMessage: [{
                "type": 0,
                "value": "View All"
              }]
            })
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_NeedHelpSection__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "helpAndSupport.contactDescription",
        defaultMessage: [{
          "type": 0,
          "value": "Couldn’t find what you were looking for?"
        }]
      }),
      actions: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: "/contact",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          minWidth: 134,
          buttonStyle: "marketing",
          whiteSpace: "nowrap",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "contactUs",
            defaultMessage: [{
              "type": 0,
              "value": "Contact us"
            }]
          })
        })
      })
    })]
  });
};

BrowseTopics.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BrowseTopics"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowseTopics);

/***/ }),

/***/ 44742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89457);
/* harmony import */ var _styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65985);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40986);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62131);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37278);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59139);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19156);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32631);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RichTextEditor__WEBPACK_IMPORTED_MODULE_14__, _StyledInputField__WEBPACK_IMPORTED_MODULE_18__]);
([_RichTextEditor__WEBPACK_IMPORTED_MODULE_14__, _StyledInputField__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { ArrowLeft2 } from '@styled-icons/icomoon/ArrowLeft2';












 // import Link from '../Link';












const validate = values => {
  const errors = {};
  const {
    name,
    topic,
    email,
    message,
    link
  } = values;

  if (!name) {
    errors.name = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  }

  if (!topic) {
    errors.topic = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  }

  if (!email) {
    errors.email = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  } else if (!(0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidEmail */ .vV)(email)) {
    errors.email = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
  }

  if (link && !(0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(link)) {
    errors.link = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
  }

  if (!message) {
    errors.message = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  }

  return errors;
};

const ContactForm = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
  const {
    0: submitError,
    1: setSubmitError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    getFieldProps,
    handleSubmit,
    errors,
    touched,
    setFieldValue
  } = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: {
      name: '',
      email: '',
      topic: '',
      message: '',
      link: ''
    },
    validate,
    onSubmit: values => {
      setIsSubmitting(true);
      (0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .sendContactMessage */ .Ww)(values).then(() => {
        setIsSubmitting(false);
        return router.push('/contact/success');
      }).catch(error => {
        setIsSubmitting(false);
        setSubmitError(error.message || 'An error occur submitting this issue, try again');
      });
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (LoggedInUser) {
      setFieldValue('name', LoggedInUser.collective.name);
      setFieldValue('email', LoggedInUser.email);
    }
  }, [LoggedInUser]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: "16px",
    mt: "48px",
    mb: "120px",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        height: "825px",
        width: "825px",
        position: "absolute",
        backgroundImage: [null, "url('/static/images/help-and-support/contactForm-illustrations.png')"],
        backgroundRepeat: "no-repeat",
        backgroundSize: [null, 'contain', 'contain'],
        display: ['none', 'block'],
        top: "-200px",
        left: "-75px"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        padding: [null, '32px'],
        boxShadow: [null, '0px 0px 15px 10px rgba(13, 67, 97, 0.05)'],
        borderRadius: [null, '8px'],
        borderWidth: "0",
        width: ['288px', '510px'],
        zIndex: "999",
        children: [submitError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            type: "error",
            withIcon: true,
            mb: [1, 3],
            children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .i18nGraphqlException */ .t2)(intl, submitError)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("form", {
          onSubmit: handleSubmit,
          children: [!LoggedInUser && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
              mb: "28px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "vlKhIl",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Your name"
                  }]
                }),
                labelFontWeight: "700",
                labelProps: {
                  lineHeight: '24px',
                  fontSize: '16px'
                }
              }, getFieldProps('name')), {}, {
                error: touched.name && (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, errors.name),
                children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                  placeholder: "Enter your first name",
                  width: "100%"
                }))
              }))
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
              mb: "28px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "nONnTw",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Your email"
                  }]
                }),
                labelFontWeight: "700",
                labelProps: {
                  lineHeight: '24px',
                  fontSize: '16px'
                }
              }, getFieldProps('email')), {}, {
                error: touched.email && (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, errors.email),
                hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "helpAndSupport.email.description",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Enter the email ID used for the concerned issue"
                  }]
                }),
                children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                  placeholder: "e.g. johndoe@gmail.com",
                  width: "100%"
                }))
              }))
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
            mb: "28px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, _objectSpread(_objectSpread({
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "helpAndSupport.contactForm.topicRequest",
                defaultMessage: [{
                  "type": 0,
                  "value": "What's the topic of your request?"
                }]
              })
            }, getFieldProps('topic')), {}, {
              labelFontWeight: "700",
              labelProps: {
                lineHeight: '24px',
                fontSize: '16px'
              },
              error: touched.topic && (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, errors.topic),
              hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "helpAndSupport.topicRequest.description",
                defaultMessage: [{
                  "type": 0,
                  "value": "Enter the topic of your concern."
                }]
              }),
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
                placeholder: "e.g. Transactions, profile",
                width: "100%"
              }))
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
            mb: "28px",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "700",
              mb: "8px",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "helpAndSupport.contactForm.message",
                defaultMessage: [{
                  "type": 0,
                  "value": "What's your message?"
                }]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_RichTextEditor__WEBPACK_IMPORTED_MODULE_14__["default"], {
              error: touched.message && (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, errors.message),
              inputName: "message",
              onChange: e => setFieldValue('message', e.target.value),
              withBorders: true,
              version: "simplified",
              editorMinHeight: "20rem"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
              mt: "6px",
              fontSize: "13px",
              lineHeight: "20px",
              color: "black.700",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "helpAndSupport.message.description",
                defaultMessage: [{
                  "type": 0,
                  "value": "Please give as much information as possible for a quicker resolution"
                }]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
            mb: "28px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, _objectSpread(_objectSpread({
              label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "helpAndSupport.contactForm.link",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add a link with files or something additional"
                }]
              })
            }, getFieldProps('link')), {}, {
              error: touched.link && (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, errors.link),
              labelFontWeight: "700",
              labelProps: {
                lineHeight: '24px',
                fontSize: '16px'
              },
              required: false,
              hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "helpAndSupport.link.description",
                defaultMessage: [{
                  "type": 0,
                  "value": "We encourage you to include files or images in a cloud drive link."
                }]
              }),
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, _objectSpread(_objectSpread({
                prepend: "https://",
                type: "url"
              }, inputProps), {}, {
                placeholder: "yourdrive.com",
                width: "100%"
              }))
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
            display: "flex",
            flexDirection: ['column', 'row-reverse'],
            justifyContent: [null, 'space-between'],
            alignItems: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              type: "submit",
              width: ['288px', '151px'],
              buttonSize: "medium",
              buttonStyle: "marketing",
              mb: ['24px', 0],
              loading: isSubmitting,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "KmbUa3",
                defaultMessage: [{
                  "type": 0,
                  "value": "Submit Issue"
                }]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
                ml: ['10px', '5px'],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
                  size: "14px"
                })
              })]
            })
          })]
        })]
      })]
    })
  });
};

ContactForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContactForm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45449:
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
/* harmony import */ var _collectives_Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45842);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "ContactUsSuccess__Wrapper",
  componentId: "sc-1u1e9gp-0"
})(["display:flex;justify-content:space-between;align-items:center;border-radius:8px;background-color:rgba(255,255,255,0.9);border:1px solid #eaeaec;padding:24px 36px;&:hover{border-color:#297eff;h3,svg{color:#1041a3;}}"]);

const ContactUsSuccess = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  px: "16px",
  mt: ['32px', '48px'],
  mb: "120px",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    alignItems: "center",
    width: ['288px', '404px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
      width: [null, '96px'],
      height: [null, '96px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alt: "How Open Collective works",
        src: "/static/images/help-and-support/success-illustration.png",
        width: 96,
        height: 96
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
      ml: ['4px', 3],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H2, {
        fontSize: ['24px', '32px'],
        lineHeight: ['32px', '40px'],
        letterSpacing: "-0.008em",
        color: "primary.900",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "helpAndSupport.messageConfirmation",
          defaultMessage: [{
            "type": 0,
            "value": "We’ve received your message. ✅"
          }]
        })
      })
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
    my: "18px",
    width: ['288px', '404px'],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
      fontSize: ['16px', '18px'],
      lineHeight: ['24px', '26px'],
      color: "black.800",
      textAlign: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "helpAndSupport.description",
        defaultMessage: [{
          "type": 0,
          "value": "Our support team is available from Monday to Friday. Please expect a response within 3 business days."
        }]
      })
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    mt: "32px",
    flexDirection: "column",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      href: "https://slack.opencollective.com/",
      openInNewTab: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Wrapper, {
        color: "black.900",
        className: "linkWrapper",
        my: [3, null, 4],
        width: ['288px', '520px'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          width: ['184px', 1],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H3, {
            fontSize: "24px",
            textAlign: "left",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            mb: 2,
            color: "black.800",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "helpAndSupport.joinCommunity",
              defaultMessage: [{
                "type": 0,
                "value": "Join our slack community"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            fontSize: "15px",
            color: "black.700",
            lineHeight: "22px",
            textDecoration: "underline",
            children: "https://slack.opencollective.com/"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          className: "arrowWrapper",
          color: "black.900",
          fontWeight: "bold",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
            size: '24'
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      href: "https://github.com/opencollective",
      openInNewTab: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Wrapper, {
        color: "black.900",
        className: "linkWrapper",
        my: [3, null, 4],
        width: ['288px', '520px'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          width: ['184px', 1],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H3, {
            fontSize: "24px",
            textAlign: "left",
            lineHeight: "32px",
            letterSpacing: "-0.008em",
            mb: 2,
            color: "black.800",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "helpAndSupport.bugs",
              defaultMessage: [{
                "type": 0,
                "value": "Bugs & feature requests"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            fontSize: "15px",
            color: "black.700",
            lineHeight: "22px",
            textDecoration: "underline",
            children: "https://github.com/opencollective"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          className: "arrowWrapper",
          color: "black.900",
          fontWeight: "bold",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
            size: '24'
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Wrapper, {
      color: "black.900",
      width: ['288px', '520px'],
      className: "newsletterWrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.H3, {
          fontSize: "24px",
          textAlign: "left",
          lineHeight: "32px",
          letterSpacing: "-0.008em",
          mb: 2,
          color: "black.800",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "home.joinUsSection.newsletter",
            defaultMessage: [{
              "type": 0,
              "value": "Subscribe to our newsletter"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            fontSize: ['15px', null, '15px'],
            lineHeight: ['22px', null, '25px'],
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "home.joinUsSection.weNeedUpdate",
              defaultMessage: [{
                "type": 0,
                "value": "We send updates once a month."
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_collectives_Newsletter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
      })
    })]
  })]
});

ContactUsSuccess.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContactUsSuccess"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUsSuccess);

/***/ }),

/***/ 53046:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const HowCanWeHelp = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    flexDirection: ['column', null, null, null, 'row'],
    justifyContent: "center",
    alignItems: "center",
    px: "16px",
    mt: "22px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        alt: "How Open Collective works",
        src: "/static/images/help-and-support/top-illustration.png",
        width: 286,
        height: 200
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: ['center', null, null, null, 'flex-start'],
      ml: [null, null, null, null, '34px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        mb: [3, '24px'],
        width: ['288px', '576px', '685px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_4__/* .MainTitle */ .U3, {
          textAlign: ['center', null, null, null, 'left'],
          whiteSpace: [null, null, 'pre-line'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "helpAndSupport.title",
            defaultMessage: [{
              "type": 0,
              "value": "Hi, How can we help?"
            }]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        width: ['288px', '597px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_4__/* .MainDescription */ .WC, {
          textAlign: ['center', null, null, null, 'left'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "helpAndSupport.description",
            defaultMessage: [{
              "type": 0,
              "value": "Our support team is available from Monday to Friday. Please expect a response within 3 business days."
            }]
          })
        })
      })]
    })]
  });
};

HowCanWeHelp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowCanWeHelp"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowCanWeHelp);

/***/ }),

/***/ 65086:
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
/* harmony import */ var _collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47667);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65106);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const HowOCWorks = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
  flexDirection: "column",
  px: 3,
  alignItems: "center",
  my: "58px",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    textAlign: "center",
    mb: 3,
    width: ['304px', '660px', 1, null, '1152px'],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "helpAndSupport.howOCWorks",
        defaultMessage: [{
          "type": 0,
          "value": "This is how Open Collective works"
        }]
      })
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    textAlign: "center",
    width: ['288px', '660px', '768px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
      mb: "24px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "helpAndSupport.howOCWorks.description",
        defaultMessage: [{
          "type": 0,
          "value": "Open Collective enables all kinds of collaborative groups, initiatives, and projects to raise, manage, and spend money transparently."
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      href: "/how-it-works",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
        color: "ocBrandColors.600",
        fontSize: "16px",
        lineHeight: "24px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          defaultMessage: [{
            "type": 0,
            "value": "How it works"
          }],
          id: "howItWorks"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
        ml: "8px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
          color: "#1869F5",
          size: "18"
        })
      })]
    })]
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    display: ['none', 'block', null, null, 'none'],
    mt: "16px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      src: "/static/images/help-and-support/transparency-illustration.png",
      alt: "How open collective illustration",
      width: 660,
      height: 390
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
    display: ['none', null, null, null, 'block'],
    mt: "16px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      src: "/static/images/help-and-support/transparency-illustration-lg.png",
      alt: "How open collective illustration",
      width: 862,
      height: 441
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
    flexDirection: ['column', null, 'row'],
    alignItems: "center",
    my: ['56px', null, '127px'],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      order: [null, 1],
      display: [null, null, 'none'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
        mb: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "helpAndSupport.getToKnowUs",
          defaultMessage: [{
            "type": 0,
            "value": "Get to know us!"
          }]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mt: "16px",
      order: [null, 3],
      width: ['216px', '320px', '448px'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        src: "/static/images/help-and-support/getToKnowUs-illustration.png",
        alt: "How open collective illustration",
        width: 448,
        height: 365
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      textAlign: ['center', null, 'left'],
      width: ['288px', '660px', '417px'],
      order: [null, 2],
      mr: [null, null, '72px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitle */ .NZ, {
        mb: 3,
        display: ['none', null, 'block'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "helpAndSupport.getToKnowUs",
          defaultMessage: [{
            "type": 0,
            "value": "Get to know us!"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_6__/* .SectionDescription */ .TI, {
        mb: ['16px', '24px'],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "helpAndSupport.getToKnowUs.description",
          defaultMessage: [{
            "type": 0,
            "value": "We know making the case up the chain is not always easy. For all you heroes inside companies, we put together some resources to help you succeed."
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: "/how-it-works",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
          color: "ocBrandColors.600",
          fontSize: "16px",
          lineHeight: "24px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            defaultMessage: [{
              "type": 0,
              "value": "Know more about us"
            }],
            id: "knowMoreAboutUs"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Span */ .Dr, {
          ml: "8px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styled_icons_icomoon_ArrowRight2__WEBPACK_IMPORTED_MODULE_1__.ArrowRight2, {
            color: "#1869F5",
            size: "18"
          })
        })]
      })]
    })]
  })]
});

HowOCWorks.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HowOCWorks"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HowOCWorks);

/***/ }),

/***/ 50615:
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
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const NeedHelp = ({
  title,
  description,
  actions
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    flexDirection: "column",
    pt: "16px",
    pb: "56px",
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    px: "16px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      position: [null, 'absolute'],
      top: "-19px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_collectives_HomeNextIllustration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        width: 70,
        height: 75,
        src: "/static/images/help-and-support/needHelp-illustration.png",
        alt: `Need help illustration`
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      width: ['288px', '100%'],
      my: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__.P, {
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "-0.008em",
        color: "black.900",
        textAlign: "center",
        children: title ? title : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "helpAndSupport.needHelp",
          defaultMessage: [{
            "type": 0,
            "value": "Need help?"
          }]
        })
      })
    }), description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      width: ['288px', '100%'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Text__WEBPACK_IMPORTED_MODULE_4__.P, {
        fontSize: "15px",
        lineHeight: "22px",
        color: "black.700",
        textAlign: "center",
        children: description
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      my: "16px",
      children: actions
    })]
  });
};

NeedHelp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NeedHelp",
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
    "actions": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NeedHelp);

/***/ }),

/***/ 99490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);
/* harmony import */ var _marketing_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65106);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const WeAreHereIfYouWantToTalk = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
  flexDirection: "column",
  px: 3,
  alignItems: "center",
  my: "58px",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
    textAlign: "center",
    mb: "40px",
    width: ['256px', '660px', '768px'],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_marketing_Text__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitle */ .NZ, {
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "helpAndSupport.weAreHere",
        defaultMessage: [{
          "type": 0,
          "value": "We’re here if you want to talk!"
        }]
      })
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
    flexDirection: ['column', 'row'],
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      as: _StyledLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
      href: "https://slack.opencollective.com/",
      borderWidth: "0px",
      boxShadow: ['0px 1px 4px 1px rgba(49, 50, 51, 0.1)', 'unset'],
      padding: ['16px', 0],
      openInNewTab: true,
      mb: ['40px', 0],
      textAlign: "center",
      width: ['288px', '296px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
        fontSize: "24px",
        lineHeight: "32px",
        color: "black.800",
        letterSpacing: "-0.008em",
        mb: "6px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "helpAndSupport.joinCommunity",
          defaultMessage: [{
            "type": 0,
            "value": "Join our slack community"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
        fontSize: "16px",
        lineHeight: "24px",
        color: "black.700",
        children: "https://slack.opencollective.com/"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
      width: "2px",
      height: "64px",
      backgroundColor: "#1869F5",
      mx: "40px",
      display: ['none', 'inline-block']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
      href: "https://github.com/opencollective",
      borderWidth: "0px",
      boxShadow: ['0px 1px 4px 1px rgba(49, 50, 51, 0.1)', 'unset'],
      padding: ['16px', 0],
      openInNewTab: true,
      textAlign: "center",
      width: ['288px', '296px'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.H3, {
        fontSize: "24px",
        lineHeight: "32px",
        color: "black.800",
        letterSpacing: "-0.008em",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "helpAndSupport.bugs",
          defaultMessage: [{
            "type": 0,
            "value": "Bugs & feature requests"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
        fontSize: "16px",
        lineHeight: "24px",
        color: "black.700",
        children: "https://github.com/opencollective"
      })]
    })]
  })]
});

WeAreHereIfYouWantToTalk.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WeAreHereIfYouWantToTalk"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeAreHereIfYouWantToTalk);

/***/ }),

/***/ 72004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CustomScrollbarCSS)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A custom scrollbar for Chrome, more prettier than the system one.
 */

const CustomScrollbarCSS = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media (pointer:fine){&::-webkit-scrollbar{height:8px;margin:0 16px;}&::-webkit-scrollbar-thumb{background:#d1d1d3;border-radius:16px;&:hover{background:#aaa;}}&::-webkit-scrollbar-track{background:#f2f3f4;border-radius:20px;}&::-webkit-scrollbar-button{color:white;}}"]);

/***/ }),

/***/ 69396:
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
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _components_help_and_support_BrowseTopicSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62855);
/* harmony import */ var _components_help_and_support_ContactSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44742);
/* harmony import */ var _components_help_and_support_ContactUsSuccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45449);
/* harmony import */ var _components_help_and_support_HowCanWeHelpSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53046);
/* harmony import */ var _components_help_and_support_HowOCWorksSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65086);
/* harmony import */ var _components_help_and_support_NeedHelpSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50615);
/* harmony import */ var _components_help_and_support_WeAreHereSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99490);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92129);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84842);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_help_and_support_ContactSection__WEBPACK_IMPORTED_MODULE_4__, _components_Page__WEBPACK_IMPORTED_MODULE_11__]);
([_components_help_and_support_ContactSection__WEBPACK_IMPORTED_MODULE_4__, _components_Page__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // import SearchTopics from '../components/help-and-support/SearchTopicsSection';








const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  defaultTitle: {
    id: "OC.helpAndSupport",
    defaultMessage: [{
      "type": 0,
      "value": "How can we help?"
    }]
  }
});

const renderFormContent = formConfirmation => {
  if (formConfirmation === 'success') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_ContactUsSuccess__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_HowCanWeHelpSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_ContactSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_WeAreHereSection__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_NeedHelpSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "helpAndSupport.waitForAnswer",
        defaultMessage: [{
          "type": 0,
          "value": "Don’t want to wait for an answer?"
        }]
      }),
      description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "helpAndSupport.waitForAnser.description",
        defaultMessage: [{
          "type": 0,
          "value": "Visit our Documentation page to explore topics and find answers to your questions."
        }]
      }),
      actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
        flexDirection: ['column', 'row'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          href: "/help",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            minWidth: 208,
            buttonStyle: "marketingSecondary",
            whiteSpace: "nowrap",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "helpAndSupport.visitHelp",
              defaultMessage: [{
                "type": 0,
                "value": "Visit Help & Support"
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          href: "https://docs.opencollective.com/",
          buttonSize: "medium",
          minWidth: 208,
          buttonStyle: "marketing",
          mt: ['16px', 0],
          ml: [0, '16px'],
          openInNewTab: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "helpAndSupport.viewDocumentation",
            defaultMessage: [{
              "type": 0,
              "value": "View Documentation"
            }]
          })
        })]
      })
    })]
  });
};

const HelpAndSupport = ({
  action,
  formConfirmation
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
    description: formatMessage(messages.defaultTitle),
    children: action === 'contact' ? renderFormContent(formConfirmation) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_HowCanWeHelpSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_BrowseTopicSection__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_HowOCWorksSection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_help_and_support_WeAreHereSection__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})]
    })
  });
};

HelpAndSupport.getInitialProps = async ctx => _objectSpread({}, ctx.query);

HelpAndSupport.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "ctx",
      "optional": false,
      "type": null
    }],
    "returns": null
  }],
  "displayName": "HelpAndSupport",
  "props": {
    "action": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "formConfirmation": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelpAndSupport);
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

/***/ 41032:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretUp");

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

/***/ 42038:
/***/ ((module) => {

module.exports = require("@styled-system/css");

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

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

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

/***/ 71564:
/***/ ((module) => {

module.exports = require("validator");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,2631,986,7667,5106,5842,9139], () => (__webpack_exec__(69396)));
module.exports = __webpack_exports__;

})();