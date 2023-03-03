"use strict";
exports.id = 8101;
exports.ids = [8101];
exports.modules = {

/***/ 56562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Default to no custom loader, will use Squoosh in dev


let loader; // Overrides default loader from https://github.com/vercel/next.js/blob/218c6114c9f5ed5c6d65840037673c841f44536b/packages/next/client/image.tsx#L591
// to load images from a custom domain if provided

if (false) {}
/**
 * We delegate static images loading to Vercel, as it has static images optimizations
 * that would be difficult to match with Heroku (at the time of writing, the default loader
 * uses Squoosh, which is a pure-JS solution up to 25x slower than Sharp)
 */


const Image = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({
    loader: loader
  }, props));
};

Image.__docgenInfo = {
  "description": "We delegate static images loading to Vercel, as it has static images optimizations\nthat would be difficult to match with Heroku (at the time of writing, the default loader\nuses Squoosh, which is a pure-JS solution up to 25x slower than Sharp)",
  "methods": [],
  "displayName": "Image"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ 77777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JR": () => (/* binding */ useNewsAndUpdates),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kY": () => (/* binding */ withNewsAndUpdates)
/* harmony export */ });
/* unused harmony export NewsAndUpdatesContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const NewsAndUpdatesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  setShowNewsAndUpdates: () => {}
});

const NewsAndUpdatesProvider = ({
  children
}) => {
  const {
    0: showNewsAndUpdates,
    1: setShowNewsAndUpdates
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const context = {
    showNewsAndUpdates,
    setShowNewsAndUpdates
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(NewsAndUpdatesContext.Provider, {
    value: context,
    children: children
  });
};

const useNewsAndUpdates = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NewsAndUpdatesContext);
};
const withNewsAndUpdates = WrappedComponent => {
  const WithNewsAndUpdates = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(NewsAndUpdatesContext.Consumer, {
    children: context => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(WrappedComponent, _objectSpread(_objectSpread({}, context), props))
  });

  WithNewsAndUpdates.getInitialProps = WrappedComponent.getInitialProps;
  return WithNewsAndUpdates;
};
NewsAndUpdatesProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NewsAndUpdatesProvider",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsAndUpdatesProvider);

/***/ }),

/***/ 97274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "oi": () => (/* binding */ TextInput),
/* harmony export */   "z0": () => (/* binding */ SubmitInput)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45284);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16010);
/* harmony import */ var _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72991);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const getBorderColor = ({
  error,
  success
}) => {
  if (error) {
    return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.red.500');
  }

  if (success) {
    return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.green.300');
  }

  return (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.300');
};
/**
 * styled-component input tag using styled-system
 *
 * @see See [styled-system docs](https://github.com/jxnblk/styled-system/blob/master/docs/api.md) for usage of those props
 */


const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default().input.withConfig({
  displayName: "StyledInput",
  componentId: "sc-1mrlyq8-0"
})(["&:not([type='checkbox']):not([type='radio']):not([type='range']){min-height:36px;}", " ", " ", " ", " ", " ", " ", " ", " border-color:", ";border-style:", ";box-sizing:border-box;outline:none;", " &[type=radio]{cursor:pointer;}&[type='range']{cursor:grabbing;}&:disabled{background-color:", ";cursor:not-allowed;color:", ";}&:hover:not(:disabled){border-color:", ";}&:focus:not(:disabled){border-color:", ";}&::placeholder{color:", ";}&[type='date']{font-family:inherit;}"], styled_system__WEBPACK_IMPORTED_MODULE_4__.background, styled_system__WEBPACK_IMPORTED_MODULE_4__.border, styled_system__WEBPACK_IMPORTED_MODULE_4__.color, styled_system__WEBPACK_IMPORTED_MODULE_4__.layout, styled_system__WEBPACK_IMPORTED_MODULE_4__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_4__.typography, _lib_styled_system_custom_properties__WEBPACK_IMPORTED_MODULE_5__/* .overflow */ .tx, styled_system__WEBPACK_IMPORTED_MODULE_4__.space, getBorderColor, props => props.bare ? 'none' : 'solid', props => {
  if (props.withOutline) {
    return props.error ? (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["outline:1px dashed ", ";outline-offset:0.2em;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.red.300')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["&:focus{outline:1px dashed ", ";outline-offset:0.2em;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.200'));
  }
}, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.50'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.400'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.300'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.400'));
StyledInput.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  /** Show success state for field */
  success: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),

  /** true to hide styled borders */
  bare: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),

  /** if true, a default outline will be displayed when focused */
  withOutline: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),

  /** Scroll overflow */
  overflow: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['auto', 'hidden', 'scroll'])
}, (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default().background)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default().border)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default().color)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default().flexbox)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default().layout)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default().space)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_1___default().typography));
StyledInput.defaultProps = {
  border: '1px solid',
  borderColor: 'black.300',
  borderRadius: '4px',
  px: 3,
  py: 2,
  lineHeight: '1.5',
  fontSize: '14px'
};
const TextInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(StyledInput).withConfig({
  displayName: "StyledInput__TextInput",
  componentId: "sc-1mrlyq8-1"
})([""]);
TextInput.defaultProps = _objectSpread(_objectSpread({}, StyledInput.defaultProps), {}, {
  type: 'text'
});
const SubmitInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(StyledInput).withConfig({
  displayName: "StyledInput__SubmitInput",
  componentId: "sc-1mrlyq8-2"
})(["", ";", ";"], _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_6__/* .buttonStyle */ .jn, _lib_theme_variants_button__WEBPACK_IMPORTED_MODULE_6__/* .buttonSize */ .L8);
SubmitInput.defaultProps = {
  buttonStyle: 'primary',
  buttonSize: 'large',
  fontWeight: 'bold',
  type: 'submit',
  backgroundColor: 'colors.white.full'
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInput);

/***/ }),

/***/ 67001:
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



/**
 * A button element but with the styles of a anchor element (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
 */

const StyledLinkButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "StyledLinkButton",
  componentId: "sc-e9z9v0-0"
})(["background:none;border:none;padding:0;cursor:pointer;", " ", " :hover{color:", ";text-decoration:", ";}", ""], styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.typography, props => props.hoverColor, props => props.underlineOnHover ? 'underline' : undefined, (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.variant)({
  prop: 'variant',
  variants: {
    danger: {
      color: 'red.500',
      '&:hover': {
        color: 'red.400'
      }
    }
  }
}));
StyledLinkButton.defaultProps = {
  color: '#3385FF',
  hoverColor: '#797d80'
};
StyledLinkButton.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  hoverColor: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['danger']),
  underlineOnHover: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledLinkButton);

/***/ }),

/***/ 71792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* binding */ CollectiveModalHeader),
/* harmony export */   "L8": () => (/* binding */ ModalReferenceContext),
/* harmony export */   "Tw": () => (/* binding */ CloseIcon),
/* harmony export */   "ZA": () => (/* binding */ ModalOverlay),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fe": () => (/* binding */ ModalBody),
/* harmony export */   "mz": () => (/* binding */ ModalFooter),
/* harmony export */   "xB": () => (/* binding */ ModalHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45284);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92869);
/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34487);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _StyledKeyframes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29925);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67001);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var _WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84906);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
const _excluded = ["children", "onClose", "hideCloseIcon"],
      _excluded2 = ["collective", "customText"],
      _excluded3 = ["children", "isFullWidth", "showDivider", "dividerMargin"],
      _excluded4 = ["children", "onClose", "usePortal", "hasUnsavedChanges", "trapFocus", "ignoreEscapeKey"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC).withConfig({
  displayName: "StyledModal__Wrapper",
  componentId: "sc-fwgedt-0"
})(["position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:", ";justify-content:center;align-items:center;"], props => props.zindex || 3000);
const Modal = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).attrs(props => ({
  maxWidth: props.maxWidth || '95%',
  maxHeight: props.maxHeight || '97%'
})).withConfig({
  displayName: "StyledModal__Modal",
  componentId: "sc-fwgedt-1"
})(["border:1px solid rgba(9,10,10,0.12);border-radius:8px;overflow-y:auto;z-index:3000;", ";", ";", ";@media (max-width:", "){max-height:90vh;}"], styled_system__WEBPACK_IMPORTED_MODULE_9__.space, styled_system__WEBPACK_IMPORTED_MODULE_9__.background, styled_system__WEBPACK_IMPORTED_MODULE_9__.overflow, (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)('breakpoints.0'));
Modal.defaultProps = {
  background: 'white',
  padding: '20px'
};
const GlobalModalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.createGlobalStyle)(["body{overflow:hidden;}"]);
const ModalOverlay = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
  displayName: "StyledModal__ModalOverlay",
  componentId: "sc-fwgedt-2"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:2500;display:block;animation:", " 0.25s;will-change:opacity;"], _StyledKeyframes__WEBPACK_IMPORTED_MODULE_14__/* .fadeIn */ .Ji);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
  displayName: "StyledModal__Header",
  componentId: "sc-fwgedt-3"
})(["font-size:20px;color:#090a0a;font-weight:600;display:flex;text-shadow:none;justify-content:space-between;align-items:flex-start;"]);
const ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z).withConfig({
  displayName: "StyledModal__ModalBody",
  componentId: "sc-fwgedt-4"
})([""]);
ModalBody.defaultProps = {
  mt: '10px',
  mb: '30px'
};
ModalBody.propTypes = _objectSpread({
  /** width of the modal component */
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** height of the modal component */
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** children */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
}, (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3___default().space));
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
  displayName: "StyledModal__Divider",
  componentId: "sc-fwgedt-5"
})(["", " width:100%;height:1px;background-color:#e1e4e6;", ""], styled_system__WEBPACK_IMPORTED_MODULE_9__.margin, props => props.isFullWidth && (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.css)(["margin-left:-20px;width:calc(100% + 40px);"]));
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_2__.Times).withConfig({
  displayName: "StyledModal__CloseIcon",
  componentId: "sc-fwgedt-6"
})(["height:12px;width:12px;color:#76777a;vertical-align:middle;cursor:pointer;"]);
const ModalHeader = _ref => {
  let {
    children,
    onClose,
    hideCloseIcon
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(Header, _objectSpread(_objectSpread({}, props), {}, {
    children: [children || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {}), !hideCloseIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__/* .Span */ .Dr, {
      style: {
        alignItems: 'center',
        display: 'flex'
      },
      ml: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        type: "button",
        onClick: onClose,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(CloseIcon, {})
      })
    })]
  }));
};
ModalHeader.displayName = 'Header';
/**
 * A special header that displays collective name + avatar in the header.
 */

const CollectiveModalHeader = _ref2 => {
  let {
    collective,
    customText
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(ModalHeader, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        collective: collective,
        radius: 40
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "bold",
        ml: 3,
        children: customText || collective.name
      })]
    })
  }));
};
CollectiveModalHeader.displayName = 'Header';
const ModalFooter = _ref3 => {
  let {
    children,
    isFullWidth,
    showDivider,
    dividerMargin
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    children: [showDivider && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Divider, {
      margin: dividerMargin,
      isFullWidth: isFullWidth
    }), children]
  }));
};
ModalFooter.defaultProps = {
  dividerMargin: '2rem 0',
  showDivider: true
};

const DefaultTrapContainer = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx((focus_trap_react__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread({
    focusTrapOptions: {
      clickOutsideDeactivates: true
    }
  }, props));
};

const ModalReferenceContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
/**
 * Modal component. Will pass down additional props to `ModalWrapper`, which is
 * a styled `Container`.
 */

const StyledModal = _ref4 => {
  let {
    children,
    onClose,
    usePortal = true,
    hasUnsavedChanges = undefined,
    trapFocus = false,
    ignoreEscapeKey = false
  } = _ref4,
      props = _objectWithoutProperties(_ref4, _excluded4);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const modalRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const TrapContainer = trapFocus ? DefaultTrapContainer : (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);
  const closeHandler = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    if (hasUnsavedChanges && !confirm(intl.formatMessage({
      id: "srNsR3",
      defaultMessage: [{
        "type": 0,
        "value": "You have unsaved changes. Are you sure you want to close this?"
      }]
    }))) {
      return;
    }

    onClose();
  }, [hasUnsavedChanges, onClose]);
  const onEscape = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(() => {
    if (!ignoreEscapeKey) {
      closeHandler();
    }
  }, [closeHandler]); // Closes the modal upon the `ESC` key press.

  (0,_lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)({
    callback: onEscape,
    keyMatch: _lib_hooks_useKeyboardKey__WEBPACK_IMPORTED_MODULE_10__/* .ESCAPE_KEY */ .O_
  });

  if (usePortal === false) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(GlobalModalStyle, {}), hasUnsavedChanges && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        hasUnsavedChanges: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Wrapper, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(TrapContainer, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Modal, _objectSpread(_objectSpread({
            ref: modalRef
          }, props), {}, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(ModalReferenceContext.Provider, {
              value: modalRef,
              children: react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
                if (child?.type?.displayName === 'Header') {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
                    onClose: closeHandler
                  });
                }

                return child;
              })
            })
          }))
        })
      })]
    });
  }

  if (typeof document !== 'undefined') {
    return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_6__.createPortal)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(GlobalModalStyle, {}), hasUnsavedChanges && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_WarnIfUnsavedChanges__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        hasUnsavedChanges: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(Wrapper, {
        zindex: props.zindex,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(TrapContainer, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Modal, _objectSpread(_objectSpread({
            ref: modalRef
          }, props), {}, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(ModalReferenceContext.Provider, {
              value: modalRef,
              children: react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, child => {
                if (child?.type?.displayName === 'Header') {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
                    onClose: closeHandler
                  });
                }

                return child;
              })
            })
          }))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(ModalOverlay, {
          role: "button",
          tabIndex: 0,
          onClick: closeHandler,
          onKeyDown: event => {
            if (event.key === 'Escape') {
              event.preventDefault();
              onEscape();
            }
          }
        })]
      })]
    }), document.body);
  } else {
    return null;
  }
};

StyledModal.defaultProps = {
  usePortal: true,
  trapFocus: false,
  hasUnsavedChanges: false
};
/** @component */

StyledModal.__docgenInfo = {
  "description": "Modal component. Will pass down additional props to `ModalWrapper`, which is\na styled `Container`.",
  "methods": [],
  "displayName": "StyledModal",
  "props": {
    "usePortal": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "whether to render the modal at the root with a portal",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hasUnsavedChanges": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "if true, a confirmation will be displayed if user tries to close the modal or leave the page",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "trapFocus": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "set this to true if the modal contains a form or buttons",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "ignoreEscapeKey": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "whether to ignore the escape key",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "width": {
      "description": "width of the modal component",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "height": {
      "description": "height of the modal component",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "maxWidth": {
      "description": "width of the modal component",
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
    "maxWeight": {
      "description": "height of the modal component",
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
    "minWidth": {
      "description": "width of the modal component",
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
    "minWeight": {
      "description": "height of the modal component",
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
    "zindex": {
      "description": "zindex of the modal component",
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
    "onClose": {
      "description": "handles how the modal is closed",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "children": {
      "description": "children",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledModal);
ModalHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Header",
  "props": {
    "children": {
      "required": false,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": "children",
      "type": {
        "name": "node"
      }
    },
    "onClose": {
      "required": false,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": "handles how the modal is closed",
      "type": {
        "name": "func"
      }
    },
    "hideCloseIcon": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": "",
      "type": {
        "name": "bool"
      }
    }
  }
};
CollectiveModalHeader.__docgenInfo = {
  "description": "A special header that displays collective name + avatar in the header.",
  "methods": [],
  "displayName": "Header",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "customText": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
ModalFooter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalFooter",
  "props": {
    "dividerMargin": {
      "defaultValue": {
        "value": "'2rem 0'",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "string"
      },
      "description": "",
      "type": {
        "name": "string"
      }
    },
    "showDivider": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": "",
      "type": {
        "name": "bool"
      }
    },
    "children": {
      "required": false,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": "",
      "type": {
        "name": "node"
      }
    },
    "isFullWidth": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": "",
      "type": {
        "name": "bool"
      }
    }
  }
};

/***/ }),

/***/ 90012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87268);



/**
 * A round button with content centered. Accepts all props from `StyledButton`
 */

const StyledRoundButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_StyledButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).attrs({
  p: 0,
  textAlign: 'center'
}).withConfig({
  displayName: "StyledRoundButton",
  componentId: "sc-1oml9xa-0"
})(["line-height:1;"]);
StyledRoundButton.propTypes = {
  /** From styled-system: accepts any css 'width' value */
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)])
};
StyledRoundButton.defaultProps = {
  size: 42
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledRoundButton);

/***/ }),

/***/ 31330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ withToasts),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "do": () => (/* binding */ TOAST_TYPE),
/* harmony export */   "e1": () => (/* binding */ useToasts)
/* harmony export */ });
/* unused harmony export ToastContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46555);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let TOAST_TYPE;

(function (TOAST_TYPE) {
  TOAST_TYPE["ERROR"] = "ERROR";
  TOAST_TYPE["SUCCESS"] = "SUCCESS";
  TOAST_TYPE["INFO"] = "INFO";
})(TOAST_TYPE || (TOAST_TYPE = {}));

const ToastContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

const createToast = params => {
  return _objectSpread(_objectSpread({}, params), {}, {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),
    type: params.type || TOAST_TYPE.INFO,
    createdAt: Date.now()
  });
};
/**
 * A global state to store toast notifications that are persisted across the app
 */


const ToastProvider = ({
  children
}) => {
  const {
    0: toasts,
    1: setToasts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const context = {
    toasts,

    /** Use this helper to add multiple toasts at once */
    addToasts: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(toastsParams => setToasts([...toasts, ...toastsParams.map(createToast)]), [toasts]),

    /** To add a single toast */
    addToast: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(params => setToasts([...toasts, createToast(params)]), [toasts]),

    /** To remove displayed toasts */
    removeToasts: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(filterFunc => {
      const newToasts = toasts.filter(toast => !filterFunc(toast));

      if (newToasts.length !== toasts.length) {
        setToasts(newToasts);
      }
    }, [toasts])
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ToastContext.Provider, {
    value: context,
    children: children
  });
};

/**
 * An helper to use the toasts provider with hooks
 */
const useToasts = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ToastContext);
};
const withToasts = WrappedComponent => {
  const WithToasts = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ToastContext.Consumer, {
    children: context => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(WrappedComponent, _objectSpread(_objectSpread({}, context), props))
  });

  WithToasts.getInitialProps = WrappedComponent.getInitialProps;
  return WithToasts;
};
ToastProvider.__docgenInfo = {
  "description": "A global state to store toast notifications that are persisted across the app",
  "methods": [],
  "displayName": "ToastProvider",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastProvider);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "St": () => (/* binding */ UserContext),
  "ZP": () => (/* binding */ components_UserProvider),
  "ns": () => (/* binding */ withUser)
});

// UNUSED EXPORTS: UserConsumer

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(40113);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/client/react/hoc"
var hoc_ = __webpack_require__(95159);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@sentry/browser"
var browser_ = __webpack_require__(3115);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(99344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./lib/graphql/queries.js
var queries = __webpack_require__(51719);
// EXTERNAL MODULE: ./lib/local-storage.ts
var local_storage = __webpack_require__(35427);
// EXTERNAL MODULE: external "lodash/uniqBy"
var uniqBy_ = __webpack_require__(69309);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy_);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/constants/roles.js
var roles = __webpack_require__(98216);
;// CONCATENATED MODULE: ./lib/LoggedInUser.js




/**
 * Represent the current logged in user. Includes methods to check permissions.
 */

class LoggedInUser {
  constructor(data) {
    Object.assign(this, data);

    if (this.memberOf) {
      // Build a map of roles like { [collectiveSlug]: [ADMIN, BACKER...] }
      this.roles = this.memberOf.reduce((roles, member) => {
        if (member.collective) {
          roles[member.collective.slug] = roles[member.collective.slug] || [];
          roles[member.collective.slug].push(member.role);
        }

        return roles;
      }, {});
    }
  }

}
/**
 * hasRole if LoggedInUser has one of the roles for the given collective
 */


LoggedInUser.prototype.hasRole = function (roles, collective) {
  if (!collective || !this.roles[collective.slug]) {
    return false;
  } else if (typeof roles === 'string') {
    return this.roles[collective.slug].includes(roles);
  } else {
    return this.roles[collective.slug].some(role => roles.includes(role));
  }
};
/**
 * isAdminOfCollective if LoggedInUser is
 * - its own USER collective
 * - is admin of the collective
 * - is host of the collective
 */


LoggedInUser.prototype.isAdminOfCollective = function (collective) {
  if (!collective) {
    return false;
  } else if (collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT) {
    return this.canEditEvent(collective);
  } else if (collective.type === collectives/* CollectiveType.PROJECT */.eV.PROJECT) {
    return this.canEditProject(collective);
  } else {
    return collective.id === this.CollectiveId || collective.slug === get_default()(this, 'collective.slug') || this.hasRole(roles/* default.ADMIN */.Z.ADMIN, collective);
  }
};
/**
 * isAdminOfCollectiveOrHost if LoggedInUser is
 * - its own USER collective
 * - is admin of the collective
 * - is host of the collective
 */


LoggedInUser.prototype.isAdminOfCollectiveOrHost = function (collective) {
  if (!collective) {
    return false;
  } else if (this.isAdminOfCollective(collective)) {
    return true;
  } else {
    return this.hasRole([roles/* default.HOST */.Z.HOST, roles/* default.ADMIN */.Z.ADMIN], collective) || this.isHostAdmin(collective);
  }
};
/**
 * Has access to admin panel if admin or accountant
 */


LoggedInUser.prototype.canSeeAdminPanel = function (collective) {
  return this.hasRole([roles/* default.ADMIN */.Z.ADMIN, roles/* default.ACCOUNTANT */.Z.ACCOUNTANT], collective);
};
/**
 * CanEditComment if LoggedInUser is
 * - creator of the comment
 * - is admin or host of the collective
 */


LoggedInUser.prototype.canEditComment = function (comment) {
  if (!comment) {
    return false;
  }

  return this.hasRole([roles/* default.HOST */.Z.HOST, roles/* default.ADMIN */.Z.ADMIN], comment.account) || this.isHostAdmin(comment.account) || this.isSelf(comment.fromAccount) || this.canEditEvent(comment.account);
};
/**
 * Returns true if passed collective is the user collective
 */


LoggedInUser.prototype.isSelf = function (collective) {
  if (!collective || !collective.id) {
    return false;
  } else {
    return collective.id === this.CollectiveId || collective.slug === this.collective.slug;
  }
};
/**
 * CanEditEvent if LoggedInUser is
 * - admin of the event
 * - admin of the parent collective
 */


LoggedInUser.prototype.canEditEvent = function (event) {
  if (!event) {
    return false;
  } else if (event.type !== collectives/* CollectiveType.EVENT */.eV.EVENT) {
    return false;
  }

  const parent = event.parentCollective || event.parent;
  return this.hasRole(roles/* default.ADMIN */.Z.ADMIN, parent) || this.hasRole(roles/* default.ADMIN */.Z.ADMIN, event);
};
/**
 * CanEditProject if LoggedInUser is
 * - admin of the project
 * - admin of the parent collective
 */


LoggedInUser.prototype.canEditProject = function (project) {
  if (!project) {
    return false;
  } else if (project.type !== collectives/* CollectiveType.PROJECT */.eV.PROJECT) {
    return false;
  }

  const parent = project.parentCollective || project.parent;
  return this.hasRole(roles/* default.ADMIN */.Z.ADMIN, parent) || this.hasRole(roles/* default.ADMIN */.Z.ADMIN, project);
};
/**
 * Returns true if user can edit this update
 */


LoggedInUser.prototype.canEditUpdate = function (update) {
  if (!update) {
    return false;
  } else if (this.isAdminOfCollectiveOrHost(update.fromAccount)) {
    return true; // if admin of collective author
  } else if (this.isAdminOfCollectiveOrHost(update.account)) {
    return true;
  }
};
/**
 * List all the hosts this user belongs to and is admin of
 */


LoggedInUser.prototype.hostsUserIsAdminOf = function () {
  const collectives = this.memberOf.filter(m => m.collective.isHost).filter(m => this.hasRole(roles/* default.ADMIN */.Z.ADMIN, m.collective)).map(m => m.collective);
  return uniqBy_default()(collectives, 'id');
};

LoggedInUser.prototype.isHostAdmin = function (collective) {
  if (!collective || !collective.host) {
    return false;
  } else {
    return this.hasRole(roles/* default.ADMIN */.Z.ADMIN, collective.host) || this.hasRole(roles/* default.HOST */.Z.HOST, collective);
  }
};

/* harmony default export */ const lib_LoggedInUser = (LoggedInUser);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./lib/hooks/withLoggedInUser.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const maybeRefreshAccessToken = async currentToken => {
  const decodeResult = external_jsonwebtoken_default().decode(currentToken);

  if (!decodeResult) {
    return null;
  } // Update token if it expires in less than a month


  const shouldUpdate = external_dayjs_default()(decodeResult.exp * 1000).subtract(1, 'month').isBefore(new Date());

  if (shouldUpdate) {
    // call to API again to exchange for long term token or 2FA token
    const res = await (0,api/* refreshToken */.g$)(currentToken);
    const {
      token,
      error
    } = res;

    if (error) {
      return null;
    } else if (token) {
      (0,local_storage/* setLocalStorage */.qQ)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN, token);
      return token;
    }
  }

  return currentToken;
};

const withLoggedInUser = WrappedComponent => {
  var _class;

  return _class = class withLoggedInUser extends (external_react_default()).Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "getLoggedInUserFromServer", () => {
        return this.props.client.query({
          query: queries/* loggedInUserQuery */.Dx,
          fetchPolicy: 'network-only'
        }).then(result => {
          if (result.data?.LoggedInUser) {
            const user = result.data.LoggedInUser;
            browser_.configureScope(scope => {
              scope.setUser({
                id: user.id,
                email: user.email,
                slug: user.collective?.slug,
                CollectiveId: user.collective?.id
              });
            });
            return new lib_LoggedInUser(user);
          } else {
            browser_.configureScope(scope => {
              scope.setUser(null);
            });
            return null;
          }
        });
      });

      _defineProperty(this, "getLoggedInUser", async (options = {}) => {
        const {
          token = null,
          twoFactorAuthenticatorCode,
          recoveryCode
        } = options; // only Client Side for now

        if (true) {
          return null;
        }

        if (token) {
          // Ensure token is valid
          const decodeResult = external_jsonwebtoken_default().decode(token);

          if (!decodeResult || !decodeResult.exp) {
            throw new Error('Invalid token');
          } // We received directly a 'twofactorauth' prompt after login in with password


          if (decodeResult.scope === 'twofactorauth' && !twoFactorAuthenticatorCode && !recoveryCode) {
            (0,local_storage/* setLocalStorage */.qQ)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN, token);
            throw new Error('Two-factor authentication is enabled on this account. Please enter the code');
          }
          /**
           * If we're logging in with a token, 2 things may happen:
           * 1 It has scope of 'login' and there is no two factor authentication code passed into
           * the function. We should call maybeRefreshAccessToken. If the user has no 2FA enabled,
           * we exchange for a long term token and log in. If they do have 2FA enabled, we prompt
           * them to enter the 6-digit code.
           * 2 This function is then called again and token has scope 'twofactorauth' and we also
           * get the code, so we call exchangeTwoFactorAuthenticationToken.
           */


          let newToken;

          if (twoFactorAuthenticatorCode) {
            newToken = await (0,api/* refreshTokenWithTwoFactorCode */.UY)(token, twoFactorAuthenticatorCode);
            (0,local_storage/* setLocalStorage */.qQ)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN, newToken);
          } else if (recoveryCode) {
            newToken = await (0,api/* refreshTokenWithTwoFactorRecoveryCode */.Vc)(token, recoveryCode);
            (0,local_storage/* setLocalStorage */.qQ)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN, newToken);
          } else {
            // Used for the first exchange of the login token
            newToken = await maybeRefreshAccessToken(token);

            if (newToken) {
              const decodedNewToken = external_jsonwebtoken_default().decode(newToken);

              if (decodedNewToken.scope === 'twofactorauth') {
                throw new Error('Two-factor authentication is enabled on this account. Please enter the code');
              }
            }
          }

          if (!newToken) {
            throw new Error('Invalid token');
          } else if ((0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN) !== newToken) {
            (0,local_storage/* setLocalStorage */.qQ)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN, newToken);
          }
        } else {
          const localStorageToken = (0,local_storage/* getFromLocalStorage */.fp)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN);

          if (!localStorageToken) {
            return null;
          }

          const decodedLocalStorageToken = external_jsonwebtoken_default().decode(localStorageToken);

          if (decodedLocalStorageToken.scope === 'twofactorauth') {
            return null;
          } // refresh Access Token in the background if needed


          await maybeRefreshAccessToken(localStorageToken);
        } // Synchronously


        return this.getLoggedInUserFromServer();
      });
    }

    static async getInitialProps(context) {
      return typeof WrappedComponent.getInitialProps === 'function' ? await WrappedComponent.getInitialProps(context) : {};
    }

    render() {
      return /*#__PURE__*/jsx_runtime_.jsx(WrappedComponent, _objectSpread({
        getLoggedInUser: this.getLoggedInUser
      }, this.props));
    }

  }, _defineProperty(_class, "displayName", `withLoggedInUser(${WrappedComponent.displayName})`), _class;
};

/* harmony default export */ const hooks_withLoggedInUser = (withLoggedInUser);
;// CONCATENATED MODULE: ./components/UserProvider.js


function UserProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function UserProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? UserProvider_ownKeys(Object(source), !0).forEach(function (key) { UserProvider_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : UserProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function UserProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const UserContext = /*#__PURE__*/external_react_default().createContext({
  loadingLoggedInUser: true,
  errorLoggedInUser: null,
  LoggedInUser: null,

  logout() {},

  login() {},

  refetchLoggedInUser() {}

});

class UserProvider extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    UserProvider_defineProperty(this, "state", {
      loadingLoggedInUser: true,
      LoggedInUser: null,
      errorLoggedInUser: null,
      enforceTwoFactorAuthForLoggedInUser: null
    });

    UserProvider_defineProperty(this, "checkLogin", event => {
      if (event.key === 'LoggedInUser') {
        if (event.oldValue && !event.newValue) {
          return this.setState({
            LoggedInUser: null
          });
        }

        if (!event.oldValue && event.newValue) {
          const {
            value
          } = JSON.parse(event.newValue);
          return this.setState({
            LoggedInUser: new lib_LoggedInUser(value)
          });
        }

        const {
          value: oldValue
        } = JSON.parse(event.oldValue);
        const {
          value
        } = JSON.parse(event.newValue);

        if (!isEqual_default()(oldValue, value)) {
          this.setState({
            LoggedInUser: new lib_LoggedInUser(value)
          });
        }
      }
    });

    UserProvider_defineProperty(this, "logout", async () => {
      (0,local_storage/* removeFromLocalStorage */.bZ)(local_storage/* LOCAL_STORAGE_KEYS.ACCESS_TOKEN */.dA.ACCESS_TOKEN);
      await this.props.client.resetStore();
      this.setState({
        LoggedInUser: null,
        errorLoggedInUser: null
      });
    });

    UserProvider_defineProperty(this, "login", async (token, options = {}) => {
      const {
        getLoggedInUser
      } = this.props;
      const {
        twoFactorAuthenticatorCode,
        recoveryCode
      } = options;

      try {
        const LoggedInUser = token ? await getLoggedInUser({
          token,
          twoFactorAuthenticatorCode,
          recoveryCode
        }) : await getLoggedInUser();
        this.setState({
          loadingLoggedInUser: false,
          errorLoggedInUser: null,
          LoggedInUser,
          enforceTwoFactorAuthForLoggedInUser: false
        });
        return LoggedInUser;
      } catch (error) {
        // If token from localStorage is invalid or expired, delete it
        if (!token && ['Invalid token', 'Expired token'].includes(error.message)) {
          this.logout();
        } // Store the error


        this.setState({
          loadingLoggedInUser: false,
          errorLoggedInUser: error.message
        });

        if (error.message.includes('Two-factor authentication is enabled')) {
          this.setState({
            enforceTwoFactorAuthForLoggedInUser: true
          });
          throw new Error(error.message);
        }

        if (error.type === 'too_many_requests') {
          this.setState({
            enforceTwoFactorAuthForLoggedInUser: false
          });
          throw new Error(error.message);
        } // We don't want to catch "Two-factor authentication code failed. Please try again" here


        if (error.type === 'unauthorized' && error.message.includes('Cannot use this token')) {
          this.setState({
            enforceTwoFactorAuthForLoggedInUser: false
          });
          throw new Error(error.message);
        }
      }
    });

    UserProvider_defineProperty(this, "refetchLoggedInUser", async () => {
      const {
        getLoggedInUser
      } = this.props;

      try {
        const LoggedInUser = await getLoggedInUser();
        this.setState({
          errorLoggedInUser: null,
          loadingLoggedInUser: false,
          LoggedInUser
        });
      } catch (error) {
        this.setState({
          loadingLoggedInUser: false,
          errorLoggedInUser: error
        });
      }

      return true;
    });
  }

  async componentDidMount() {
    window.addEventListener('storage', this.checkLogin); // Disable auto-login on SignIn page

    if (this.props.skipRouteCheck || (router_default()).pathname !== '/signin') {
      await this.login();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.checkLogin);
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(UserContext.Provider, {
      value: UserProvider_objectSpread(UserProvider_objectSpread({}, this.state), {}, {
        logout: this.logout,
        login: this.login,
        refetchLoggedInUser: this.refetchLoggedInUser
      }),
      children: this.props.children
    });
  }

}

const {
  Consumer: UserConsumer
} = UserContext;

const withUser = WrappedComponent => {
  const WithUser = props => /*#__PURE__*/jsx_runtime_.jsx(UserConsumer, {
    children: context => /*#__PURE__*/jsx_runtime_.jsx(WrappedComponent, UserProvider_objectSpread(UserProvider_objectSpread({}, context), props))
  });

  WithUser.getInitialProps = async context => {
    return WrappedComponent.getInitialProps ? await WrappedComponent.getInitialProps(context) : {};
  };

  return WithUser;
};

UserProvider.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "checkLogin",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "event",
      "type": null
    }],
    "returns": null
  }, {
    "name": "logout",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "login",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "token",
      "type": null
    }, {
      "name": "options",
      "type": null
    }],
    "returns": null
  }, {
    "name": "refetchLoggedInUser",
    "docblock": "Same as `login` but skip loading the user from localStorage cache. Note\nthat Apollo keeps a local cache too, so you should first use\n[refetchQueries](https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-mutation-options-refetchQueries)\nif you really need to be up-to-date with server.",
    "modifiers": ["async"],
    "params": [],
    "returns": null,
    "description": "Same as `login` but skip loading the user from localStorage cache. Note\nthat Apollo keeps a local cache too, so you should first use\n[refetchQueries](https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-mutation-options-refetchQueries)\nif you really need to be up-to-date with server."
  }],
  "displayName": "UserProvider",
  "props": {
    "getLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "token": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "client": {
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
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "skipRouteCheck": {
      "description": "If not used inside of NextJS (ie. in styleguide), the code that checks if we are\non `/signin` that uses `Router` will crash. Setting this prop bypass this behavior.",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_UserProvider = ((0,hoc_.withApollo)(hooks_withLoggedInUser(UserProvider)));


/***/ }),

/***/ 84906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * A component to warn users if they try to leave with unsaved data. Just set
 * `hasUnsavedChanges` to true when this is the case and this component will block any
 * attempt to leave the page.
 */

class WarnIfUnsavedChanges extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "messages", (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
      warning: {
        id: "WarningUnsavedChanges",
        defaultMessage: [{
          "type": 0,
          "value": "You have unsaved changes. Are you sure you want to leave this page?"
        }]
      }
    }));

    _defineProperty(this, "routeChangeStart", () => {
      const {
        hasUnsavedChanges,
        intl
      } = this.props;

      if (hasUnsavedChanges && !confirm(intl.formatMessage(this.messages.warning))) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default().router.abortComponentLoad();
        next_router__WEBPACK_IMPORTED_MODULE_1___default().router.events.emit('routeChangeError'); // For NProgress to stop the loading indicator

        throw new _lib_errors__WEBPACK_IMPORTED_MODULE_3__/* .IgnorableError */ .SC('Abort page navigation');
      }
    });

    _defineProperty(this, "beforeunload", e => {
      const {
        hasUnsavedChanges,
        intl
      } = this.props;

      if (hasUnsavedChanges) {
        e.preventDefault();
        const message = intl.formatMessage(this.messages.warning);
        e.returnValue = message;
        return message;
      }
    });
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload);
    next_router__WEBPACK_IMPORTED_MODULE_1___default().router.events.on('routeChangeStart', this.routeChangeStart);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeunload);
    next_router__WEBPACK_IMPORTED_MODULE_1___default().router.events.off('routeChangeStart', this.routeChangeStart);
  }

  render() {
    return this.props.children || null;
  }

}

WarnIfUnsavedChanges.__docgenInfo = {
  "description": "A component to warn users if they try to leave with unsaved data. Just set\n`hasUnsavedChanges` to true when this is the case and this component will block any\nattempt to leave the page.",
  "methods": [{
    "name": "routeChangeStart",
    "docblock": "NextJS doesn't yet provide a nice way to abort page loading. We're stuck with throwing\nan error, which will produce an error in dev but should work fine in prod.",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "NextJS doesn't yet provide a nice way to abort page loading. We're stuck with throwing\nan error, which will produce an error in dev but should work fine in prod."
  }, {
    "name": "beforeunload",
    "docblock": "Triggered when closing tabs",
    "modifiers": [],
    "params": [{
      "name": "e"
    }],
    "returns": null,
    "description": "Triggered when closing tabs"
  }],
  "displayName": "WarnIfUnsavedChanges",
  "props": {
    "hasUnsavedChanges": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(WarnIfUnsavedChanges));

/***/ }),

/***/ 5824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AS": () => (/* binding */ collectiveNavbarFieldsFragment),
/* harmony export */   "Ju": () => (/* binding */ updatesFieldsFragment),
/* harmony export */   "Sm": () => (/* binding */ contributeCardProjectFieldsFragment),
/* harmony export */   "bt": () => (/* binding */ contributeCardEventFieldsFragment),
/* harmony export */   "d8": () => (/* binding */ contributeCardTierFieldsFragment),
/* harmony export */   "oE": () => (/* binding */ processingOrderFragment),
/* harmony export */   "wF": () => (/* binding */ contributorsFieldsFragment)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32651);


/**
 * Fields fetched for updates
 */

const updatesFieldsFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment UpdatesFields on UpdateType {
    id
    slug
    title
    summary
    createdAt
    publishedAt
    isPrivate
    userCanSeeUpdate
    fromCollective {
      id
      type
      name
      slug
      imageUrl
    }
  }
`;
/**
 * Fields fetched for contributors
 */

const contributorsFieldsFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment ContributorsFields on Contributor {
    id
    name
    roles
    isAdmin
    isCore
    isBacker
    since
    image
    description
    collectiveSlug
    totalAmountDonated
    type
    publicMessage
    isIncognito
    isGuest
    tiersIds
    collectiveId
  }
`;
/**
 * Fields fetched for all possible collective page features
 */

const collectiveNavbarFieldsFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment NavbarFields on CollectiveFeatures {
    id
    ABOUT
    CONNECTED_ACCOUNTS
    RECEIVE_FINANCIAL_CONTRIBUTIONS
    RECURRING_CONTRIBUTIONS
    EVENTS
    PROJECTS
    USE_EXPENSES
    RECEIVE_EXPENSES
    USE_EXPENSES
    COLLECTIVE_GOALS
    TOP_FINANCIAL_CONTRIBUTORS
    CONVERSATIONS
    UPDATES
    TEAM
    CONTACT_FORM
    RECEIVE_HOST_APPLICATIONS
    HOST_DASHBOARD
    TRANSACTIONS
    REQUEST_VIRTUAL_CARDS
  }
`;
const contributeCardContributorFieldsFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment ContributeCardContributorFields on Contributor {
    id
    image(height: 64)
    collectiveSlug
    name
    type
    isGuest
  }
`;
const contributeCardTierFieldsFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment ContributeCardTierFields on Tier {
    id
    name
    slug
    description
    useStandalonePage
    goal
    interval
    currency
    amount
    minimumAmount
    button
    amountType
    endsAt
    type
    maxQuantity
    stats {
      id
      availableQuantity
      totalDonated
      totalRecurringDonations
      contributors {
        id
        all
        users
        organizations
      }
    }
    contributors(limit: $nbContributorsPerContributeCard) {
      id
      ...ContributeCardContributorFields
    }
  }
  ${contributeCardContributorFieldsFragment}
`;
const contributeCardEventFieldsFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment ContributeCardEventFields on Event {
    id
    slug
    name
    description
    image
    isActive
    startsAt
    endsAt
    backgroundImageUrl(height: 208)
    tiers {
      id
      type
    }
    contributors(limit: $nbContributorsPerContributeCard, roles: [BACKER, ATTENDEE]) {
      id
      ...ContributeCardContributorFields
    }
    stats {
      id
      backers {
        id
        all
        users
        organizations
      }
    }
  }
  ${contributeCardContributorFieldsFragment}
`;
const contributeCardProjectFieldsFragment = _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_1__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment ContributeCardProjectFields on Project {
    id
    slug
    name
    description
    image
    isActive
    isArchived
    backgroundImageUrl(height: 208)
    contributors(limit: $nbContributorsPerContributeCard, roles: [BACKER]) {
      id
      ...ContributeCardContributorFields
    }
    stats {
      id
      backers {
        id
        all
        users
        organizations
      }
    }
  }
  ${contributeCardContributorFieldsFragment}
`;
const processingOrderFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ProcessingOrderFields on Order {
    id
    legacyId
    nextChargeDate
    paymentMethod {
      id
      service
      name
      type
      expiryDate
      data
      balance {
        value
        valueInCents
        currency
      }
    }
    amount {
      value
      valueInCents
      currency
    }
    totalAmount {
      value
      valueInCents
      currency
    }
    status
    description
    createdAt
    frequency
    tier {
      id
      name
    }
    totalDonations {
      value
      valueInCents
      currency
    }
    fromAccount {
      id
      name
      slug
      isIncognito
      type
    }
    toAccount {
      id
      slug
      name
      type
      description
      tags
      imageUrl
      settings
      ... on AccountWithHost {
        host {
          id
          slug
          paypalClientId
          supportedPaymentMethods
        }
      }
      ... on Organization {
        host {
          id
          slug
          paypalClientId
          supportedPaymentMethods
        }
      }
    }
    platformTipAmount {
      value
      valueInCents
    }
  }
`;

/***/ }),

/***/ 65985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DL": () => (/* binding */ disconnectAccount),
/* harmony export */   "Pj": () => (/* binding */ addAuthTokenToHeader),
/* harmony export */   "Tl": () => (/* binding */ checkUserExistence),
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "UG": () => (/* binding */ getGithubRepos),
/* harmony export */   "UY": () => (/* binding */ refreshTokenWithTwoFactorCode),
/* harmony export */   "Vc": () => (/* binding */ refreshTokenWithTwoFactorRecoveryCode),
/* harmony export */   "WD": () => (/* binding */ fetchFromPDFService),
/* harmony export */   "Ww": () => (/* binding */ sendContactMessage),
/* harmony export */   "Yn": () => (/* binding */ connectAccount),
/* harmony export */   "Z4": () => (/* binding */ uploadImageWithXHR),
/* harmony export */   "Zu": () => (/* binding */ fetchCSVFileFromRESTService),
/* harmony export */   "g$": () => (/* binding */ refreshToken),
/* harmony export */   "ws": () => (/* binding */ upload),
/* harmony export */   "xJ": () => (/* binding */ signin)
/* harmony export */ });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69031);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12136);
/* harmony import */ var _export_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15985);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35427);
/* harmony import */ var _url_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25896);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97079);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// NOTE: it seems we need it otherwise Cypress mocks (cy.route) will not work







const queryString = params => {
  return Object.keys(params).map(k => `${k}=${encodeURIComponent(params[k])}`).join('&');
};
/**
 * The Promise returned from fetch() won't reject on HTTP error status. We
 * need to throw an error ourselves.
 */


function checkResponseStatus(response) {
  const {
    status
  } = response;

  if (status >= 200 && status < 300) {
    return response.json();
  } else {
    return response.json() // Text errors
    .catch(() => {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }) // JSON errors
    .then(json => {
      const error = new _errors__WEBPACK_IMPORTED_MODULE_1__/* .ApiError */ .MS(json.error);
      error.json = json;
      error.response = response;
      throw error;
    });
  }
}

function addAuthTokenToHeader(obj = {}) {
  const accessToken = (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .getFromLocalStorage */ .fp)(_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN);

  if (!accessToken) {
    return obj;
  }

  return _objectSpread({
    Authorization: `Bearer ${accessToken}`
  }, obj);
}

const getFormDataForFile = (file, kind) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('Content-Type', file.type);
  formData.append('kind', kind);
  formData.append('fileName', file.name);
  return formData;
};
/**
 * Uploads the given image.
 */


function upload(file, kind) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const formData = getFormDataForFile(file, kind);
  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('/api/images', {
    method: 'post',
    headers: addAuthTokenToHeader(),
    body: formData
  }).then(checkResponseStatus).then(json => {
    return json.url;
  });
}
/**
 * Similar to `upload` but uses XHR, which gives us the ability
 * to watch for upload progress (not yet supported by fetch).
 *
 * @param `onProgress` - function called with upload progress as a number [0-100]
 * @param mockImage - An image to return in test environments
 */

function uploadImageWithXHR(file, kind, {
  onProgress,
  onSuccess,
  onFailure,
  mockImage
}) {
  return new Promise((resolve, reject) => {
    if (window.location.hostname === 'localhost' && mockImage) {
      if (mockImage === true) {
        mockImage = 'https://d.pr/free/i/OlQVIb+';
      }

      const timeToWait = 2500;
      const nbIterations = 10; // 10%

      const interval = timeToWait / nbIterations;
      setTimeout(() => resolve(mockImage), timeToWait);
      (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .repeatWithInterval */ .ex)(nbIterations, interval, nbIterationsLeft => {
        onProgress((nbIterations - nbIterationsLeft) / nbIterations * 100);
      });
      return;
    } // Get file content into FileData


    const formData = getFormDataForFile(file, kind); // Build request

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/images', true);
    xhr.setRequestHeader('Authorization', addAuthTokenToHeader().Authorization);

    if (onProgress) {
      const minProgress = 5;
      onProgress(minProgress);

      xhr.upload.onprogress = event => {
        if (event.lengthComputable) {
          const progress = event.loaded / event.total * 100;
          onProgress(Math.max(progress, minProgress));
        }
      };
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        if (onProgress) {
          onProgress(100);
        }

        if (onSuccess) {
          onSuccess(JSON.parse(xhr.responseText).url);
        }

        resolve(JSON.parse(xhr.responseText).url);
      } else {
        reject();

        if (onFailure) {
          onFailure();
        }
      }
    };

    xhr.send(formData);
  });
}
function connectAccount(CollectiveId, service, options = {}) {
  const params = _objectSpread({
    redirect: options.redirect || window.location.href.replace(/\?.*/, ''),
    CollectiveId
  }, options);

  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`/api/connected-accounts/${service}/oauthUrl?${queryString(params)}`, {
    method: 'get',
    headers: addAuthTokenToHeader()
  }).then(checkResponseStatus);
}
function disconnectAccount(collectiveId, service) {
  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`/api/connected-accounts/${service}/disconnect/${collectiveId}`, {
    method: 'delete',
    headers: addAuthTokenToHeader()
  }).then(checkResponseStatus);
}
function checkUserExistence(email) {
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .isValidEmail */ .vV)(email)) {
    return Promise.resolve(false);
  }

  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`/api/users/exists?email=${encodeURIComponent(email)}`).then(checkResponseStatus).then(json => Boolean(json.exists));
}
function signin(parameters) {
  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('/api/users/signin', {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, addAuthTokenToHeader()), {}, {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(parameters)
  }).then(checkResponseStatus);
}
async function refreshToken(currentToken) {
  const response = await cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('/api/users/update-token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${currentToken}`
    }
  });

  try {
    return await response.json();
  } catch (error) {
    return {
      error: response.statusText
    };
  }
}
async function refreshTokenWithTwoFactorCode(currentToken, twoFactorAuthenticatorCode) {
  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('/api/users/two-factor-auth', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${currentToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      twoFactorAuthenticatorCode
    })
  }).then(checkResponseStatus).then(result => result.token);
}
async function refreshTokenWithTwoFactorRecoveryCode(currentToken, twoFactorAuthenticationRecoveryCode) {
  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('/api/users/two-factor-auth', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${currentToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      twoFactorAuthenticationRecoveryCode
    })
  }).then(checkResponseStatus).then(result => result.token);
}
/**
 * Fetch the given file from `path`. Must be a local path, otherwise
 * `options.allowExternal` must be explicitely set. You should be **extremely**
 * careful when using this as an attacker abusing from this option could
 * be able to fetch arbitrary files to our servers.
 *
 * @param options {Object}
 *  - format {string} Format of the file to get (currently supports csv and blob)
 *  - allowExtenal {string} An external URL from which get is allowed to fetch
 */

function get(path, options = {}) {
  const {
    allowExternal,
    format
  } = options;

  if (!(0,_url_helpers__WEBPACK_IMPORTED_MODULE_4__/* .isRelativeHref */ .jz)(path) && (!allowExternal || !path.startsWith(allowExternal))) {
    throw new Error('Can only get resources with a relative path');
  }

  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(path, {
    method: 'get',
    headers: addAuthTokenToHeader()
  }).then(response => {
    if (format === 'csv') {
      return response.text();
    }

    if (format === 'blob') {
      return response.blob();
    }

    return checkResponseStatus(response);
  });
}
/**
 * Fetch a file from PDF service.
 */

async function fetchFromPDFService(url) {
  if (!url.startsWith("https://pdf-staging.opencollective.com")) {
    throw new Error('PDF service URL is not properly set');
  }

  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
    method: 'get',
    headers: addAuthTokenToHeader()
  }).then(response => {
    const {
      status
    } = response;

    if (status >= 200 && status < 300) {
      return response.blob();
    } else {
      return response.json().then(json => {
        const error = new Error();
        throw Object.assign(error, json);
      });
    }
  });
}
/**
 * Fetch a CSV file, usually from the REST service
 */

async function fetchCSVFileFromRESTService(url, filename, {
  isAuthenticated = true
} = {}) {
  const fetchParams = {
    method: 'GET'
  };

  if (isAuthenticated) {
    const accessToken = (0,_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .getFromLocalStorage */ .fp)(_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .LOCAL_STORAGE_KEYS.ACCESS_TOKEN */ .dA.ACCESS_TOKEN);
    fetchParams.headers = {
      Authorization: `Bearer ${accessToken}`
    };
  }

  let response;

  try {
    response = await cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, fetchParams);
  } catch {
    throw (0,_errors__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .Tr)(_errors__WEBPACK_IMPORTED_MODULE_1__/* .ERROR.NETWORK */ .pn.NETWORK);
  }

  const content = response && (await response.text());

  if (!response?.ok) {
    throw new _errors__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .Tr(_errors__WEBPACK_IMPORTED_MODULE_1__/* .ERROR.UNKNOWN */ .pn.UNKNOWN, {
      message: content
    });
  }

  return (0,_export_file__WEBPACK_IMPORTED_MODULE_2__/* .exportFile */ .WD)('text/csv;charset=utf-8', `${filename}.csv`, content);
}
function getGithubRepos(token) {
  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`/api/github-repositories?access_token=${token}`).then(checkResponseStatus);
}
function sendContactMessage(body) {
  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()('/contact/send-message', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(checkResponseStatus);
}

/***/ }),

/***/ 15985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ exportMembers),
/* harmony export */   "WD": () => (/* binding */ exportFile),
/* harmony export */   "en": () => (/* binding */ exportRSVPs)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65985);

function exportFile(mimeType, filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', `data:${mimeType},${encodeURIComponent(text)}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function json2csv(json) {
  const lines = [`"${Object.keys(json[0]).join('","')}"`];
  json.forEach(row => {
    lines.push(`"${Object.values(row).map(td => {
      if (typeof td === 'string') {
        return td.replace(/"/g, '""').replace(/\n/g, '  ');
      } else {
        return `${td || ''}`;
      }
    }).join('","')}"`);
  });
  return lines.join('\n');
}

function formatDate(d) {
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  return [d.getFullYear(), mm < 10 ? `0${mm}` : mm, dd < 10 ? `0${dd}` : dd].join('-');
}

async function exportRSVPs(event) {
  const date = formatDate(new Date());
  const rows = event.orders.map(r => {
    return {
      createdAt: formatDate(new Date(r.createdAt)),
      tier: r.tier && r.tier.name,
      status: r.status,
      quantity: r.quantity,
      name: r.fromCollective.name,
      company: r.fromCollective.company,
      email: r.fromCollective.email,
      twitter: r.fromCollective.twitterHandle && `https://twitter.com/${r.fromCollective.twitterHandle}`,
      description: r.description || r.fromCollective.description
    };
  });
  const csv = json2csv(rows);
  return exportFile('text/plain;charset=utf-8', `${date.replace('-', '')}-${event.parentCollective.slug}-${event.slug}.csv`, csv);
}
async function exportMembers(collectiveSlug, tierSlug, options = {
  type: 'all'
}) {
  let path = `/${collectiveSlug}`;
  path += tierSlug ? `/tiers/${tierSlug}/` : '/members/';
  let selector;

  if (options.type === 'USER') {
    selector = 'users';
  } else if (options.type.match(/ORGANIZATION/)) {
    selector = 'organizations';
  } else {
    selector = 'all';
  }

  options.format = options.format || 'csv';
  path += `${selector}.${options.format}`;
  const csv = await (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(path, options);
  const date = formatDate(new Date());
  return exportFile('text/plain;charset=utf-8', `${date.replace(/-/g, '')}${path.replace(/\//g, '-')}`, csv);
}

/***/ }),

/***/ 51719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ loggedInUserQuery),
/* harmony export */   "TS": () => (/* binding */ addCollectiveNavbarData),
/* harmony export */   "cd": () => (/* binding */ editCollectivePageQuery),
/* harmony export */   "ky": () => (/* binding */ transactionsQuery),
/* harmony export */   "pY": () => (/* binding */ legacyCollectiveQuery),
/* harmony export */   "s9": () => (/* binding */ editCollectivePageFieldsFragment)
/* harmony export */ });
/* unused harmony exports transactionFieldsFragment, collectiveNavbarQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5824);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32651);




const transactionFieldsFragment = _helpers__WEBPACK_IMPORTED_MODULE_3__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment TransactionFields on Transaction {
    id
    uuid
    description
    createdAt
    type
    amount
    currency
    hostCurrency
    hostCurrencyFxRate
    netAmountInCollectiveCurrency(fetchHostFee: true)
    hostFeeInHostCurrency(fetchHostFee: true)
    platformFeeInHostCurrency
    taxAmount
    paymentProcessorFeeInHostCurrency
    paymentMethod {
      id
      service
      type
      name
      data
    }
    collective {
      id
      slug
      name
      type
      imageUrl
      isIncognito
    }
    fromCollective {
      id
      name
      slug
      path
      type
      imageUrl
      isIncognito
    }
    usingGiftCardFromCollective {
      id
      slug
      name
      type
    }
    host {
      id
      slug
      name
      currency
      hostFeePercent
      type
    }
    ... on Expense {
      expense {
        id
        tags
      }
    }
    ... on Order {
      createdAt
      subscription {
        id
        interval
      }
    }
  }
`;
const transactionsQuery = _helpers__WEBPACK_IMPORTED_MODULE_3__/* .gqlV1 */ .N
/* GraphQL */
`
  query Transactions(
    $CollectiveId: Int!
    $type: String
    $limit: Int
    $offset: Int
    $dateFrom: String
    $dateTo: String
    $kinds: [String]
  ) {
    allTransactions(
      CollectiveId: $CollectiveId
      type: $type
      limit: $limit
      offset: $offset
      dateFrom: $dateFrom
      dateTo: $dateTo
      kinds: $kinds
    ) {
      id
      ...TransactionFields
      refundTransaction {
        id
        ...TransactionFields
      }
    }
  }

  ${transactionFieldsFragment}
`;
const loggedInUserQuery = _helpers__WEBPACK_IMPORTED_MODULE_3__/* .gqlV1 */ .N
/* GraphQL */
`
  query LoggedInUser {
    LoggedInUser {
      id
      email
      image
      isLimited
      CollectiveId
      hasSeenLatestChangelogEntry
      hasTwoFactorAuth
      hasPassword
      isRoot
      collective {
        id
        name
        legalName
        type
        slug
        imageUrl
        settings
        currency
        categories
        location {
          id
          address
          country
          structured
        }
      }
      memberOf {
        id
        role
        collective {
          id
          slug
          type
          isIncognito
          name
          currency
          isHost
          endsAt
          imageUrl
          categories
          isArchived
          policies {
            REQUIRE_2FA_FOR_ADMINS
          }
          parentCollective {
            id
            policies {
              REQUIRE_2FA_FOR_ADMINS
            }
          }
          host {
            id
          }
          settings
          location {
            id
            address
            country
            structured
          }
          children {
            id
            slug
            type
            name
            isActive
            imageUrl
            host {
              id
            }
          }
        }
      }
    }
  }
`;
const editCollectivePageFieldsFragment = _helpers__WEBPACK_IMPORTED_MODULE_3__/* .gqlV1 */ .N
/* GraphQL */
`
  fragment EditCollectivePageFields on CollectiveInterface {
    id
    type
    slug
    isActive
    isIncognito
    startsAt
    endsAt
    timezone
    host {
      id
      createdAt
      slug
      name
      legalName
      currency
      settings
      description
      website
      twitterHandle
      imageUrl
      backgroundImage
      hostCollective {
        id
        slug
        name
        currency
      }
      location {
        id
        country
      }
      stats {
        id
        collectives {
          id
          hosted
        }
      }
    }
    name
    legalName
    company
    image # We still query 'image' because it's required for the edition
    imageUrl
    backgroundImage
    description
    longDescription
    location {
      id
      name
      address
      country
      lat
      long
    }
    privateInstructions
    tags
    twitterHandle
    repositoryUrl
    website
    socialLinks {
      type
      url
    }
    currency
    settings
    createdAt
    isActive
    isArchived
    isApproved
    isDeletable
    isHost
    hostFeePercent
    expensePolicy
    contributionPolicy
    stats {
      id
      yearlyBudget
      balance
      backers {
        id
        all
      }
      totalAmountSpent
    }
    tiers {
      id
      slug
      type
      name
      description
      useStandalonePage
      longDescription
      amount
      presets
      amountType
      minimumAmount
      goal
      interval
      currency
      maxQuantity
      button
      stats {
        id
        availableQuantity
      }
      data
    }
    members(roles: ["ADMIN", "MEMBER", "HOST"]) {
      id
      createdAt
      since
      role
      description
      stats {
        id
        totalDonations
      }
      tier {
        id
        name
      }
      member {
        id
        name
        imageUrl
        slug
        twitterHandle
        description
        ... on User {
          email
        }
      }
    }
    paymentMethods(type: ["CREDITCARD", "GIFTCARD", "PREPAID"], hasBalanceAboveZero: true) {
      id
      uuid
      name
      data
      monthlyLimitPerMember
      service
      type
      balance
      currency
      expiryDate
      orders(hasActiveSubscription: true) {
        id
      }
    }
    # limit: 1 as current best practice to avoid the API fetching entries it doesn't need
    createdGiftCards(limit: 1) {
      total
    }
    connectedAccounts {
      id
      service
      username
      createdAt
      settings
      updatedAt
    }
    plan {
      id
      hostDashboard
      hostedCollectives
      hostFees
      hostFeeSharePercent
      manualPayments
      name
    }
    parentCollective {
      id
      slug
      name
      currency
      imageUrl
      backgroundImage
      settings
    }
    features {
      id
      ...NavbarFields
      VIRTUAL_CARDS
    }
  }
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_2__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const editCollectivePageQuery = _helpers__WEBPACK_IMPORTED_MODULE_3__/* .gqlV1 */ .N
/* GraphQL */
`
  query EditCollectivePage($slug: String) {
    Collective(slug: $slug) {
      id
      ...EditCollectivePageFields
    }
  }

  ${editCollectivePageFieldsFragment}
`;
const legacyCollectiveQuery = _helpers__WEBPACK_IMPORTED_MODULE_3__/* .gqlV1 */ .N
/* GraphQL */
`
  query LegacyCollective($slug: String) {
    Collective(slug: $slug) {
      id
      isActive
      isPledged
      type
      slug
      path
      name
      company
      imageUrl
      backgroundImage
      description
      longDescription
      location {
        id
        name
        address
        country
        lat
        long
      }
      twitterHandle
      githubHandle
      repositoryUrl
      website
      currency
      settings
      createdAt
      stats {
        id
        balance
        yearlyBudget
        backers {
          id
          all
          users
          organizations
          collectives
        }
        collectives {
          id
          hosted
          memberOf
        }
        transactions {
          id
          all
        }
        expenses {
          id
          all
        }
        updates
        events
        totalAmountSpent
        totalAmountReceived
      }
      tiers {
        id
        slug
        type
        name
        description
        useStandalonePage
        button
        amount
        amountType
        minimumAmount
        presets
        interval
        currency
        maxQuantity
        stats {
          id
          totalOrders
          totalActiveDistinctOrders
          availableQuantity
        }
        orders(limit: 30, isActive: true) {
          id
          fromCollective {
            id
            slug
            type
            name
            imageUrl
            website
            isIncognito
          }
        }
      }
      isHost
      hostFeePercent
      canApply
      isArchived
      isFrozen
      isApproved
      host {
        id
        slug
        name
        imageUrl
        features {
          id
          CONTACT_FORM
        }
      }
      members {
        id
        role
        createdAt
        since
        description
        member {
          id
          description
          name
          slug
          type
          imageUrl
          backgroundImage
          isIncognito
          company
        }
      }
      ... on User {
        isIncognito
        memberOf(limit: 60) {
          id
          role
          createdAt
          stats {
            id
            totalDonations
          }
          collective {
            id
            name
            currency
            slug
            path
            type
            imageUrl
            backgroundImage
            description
            longDescription
            parentCollective {
              id
              slug
            }
          }
        }
      }
      ... on Organization {
        memberOf(limit: 60) {
          id
          role
          createdAt
          stats {
            id
            totalDonations
          }
          collective {
            id
            name
            currency
            slug
            path
            type
            imageUrl
            backgroundImage
            description
            longDescription
            parentCollective {
              id
              slug
            }
          }
        }
      }
    }
  }
`;
const collectiveNavbarQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query CollectiveNavbar($slug: String!) {
    account(slug: $slug) {
      id
      legacyId
      type
      slug
      name
      imageUrl(height: 256)
      ... on Event {
        parent {
          id
          slug
        }
      }
      ... on Project {
        parent {
          id
          slug
        }
      }
      features {
        id
        ...NavbarFields
      }
    }
  }
  ${_components_collective_page_graphql_fragments__WEBPACK_IMPORTED_MODULE_2__/* .collectiveNavbarFieldsFragment */ .AS}
`;
const addCollectiveNavbarData = component => {
  return (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(collectiveNavbarQuery, {
    options: {
      context: _helpers__WEBPACK_IMPORTED_MODULE_3__/* .API_V2_CONTEXT */ .T
    }
  })(component);
};

/***/ }),

/***/ 34487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O_": () => (/* binding */ ESCAPE_KEY),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "q7": () => (/* binding */ ENTER_KEY)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useKeyboardKey = ({
  callback,
  keyMatch
}) => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const onKeyDown = event => {
      let isRecognizedKey = false;

      if ('key' in event) {
        isRecognizedKey = event.key === keyMatch.key || event.key === keyMatch.keyName;
      } else {
        isRecognizedKey = event.keyCode === keyMatch.keyCode;
      }

      if (isRecognizedKey) {
        callback();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [callback, keyMatch]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useKeyboardKey);
const ESCAPE_KEY = {
  key: 'Escape',
  keyName: 'Esc',
  keyCode: 27
};
const ENTER_KEY = {
  key: 'Enter',
  keyName: 'Enter',
  keyCode: 13
};

/***/ }),

/***/ 62131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51927);



const useLoggedInUser = () => react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_components_UserProvider__WEBPACK_IMPORTED_MODULE_1__/* .UserContext */ .St);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoggedInUser);

/***/ }),

/***/ 35427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bZ": () => (/* binding */ removeFromLocalStorage),
/* harmony export */   "dA": () => (/* binding */ LOCAL_STORAGE_KEYS),
/* harmony export */   "fp": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "qQ": () => (/* binding */ setLocalStorage)
/* harmony export */ });
/**
 * A map of keys used for local storage.
 */
const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  GUEST_TOKENS: 'guestTokens',
  HOST_DASHBOARD_FILTER_PREFERENCES: 'hostDashBoardFilterPreferences'
}; // The below helpers use a try-catch to gracefully fallback in these scenarios:
// - SSR (server-side rendering), where the emulated context might not have localStorage.
// - Some robots and crawlers (like Google), although these usually either don't execute JS,
//   or do so in a modern engine with supported (but ignored) localStorage.
// - Private browsing mode. Here, localStorage methods may throw exceptions.
// - Regular browsing mode, if the user configured the browser to require permission before
//   storing data. If the current site isn't yet whitelisted and JS attempts to access
//   window.localStorage, an exception is thrown. Even `if (window.localStorage)` crashes.
// - Regular browsing mode, where localStorage is full. In those cases, localStorage.setItem()
//   will throw an exception.

/**
 * A helper to get a value from localStorage.
 * Returns the value, or null if no value exists or if storage is unavailable.
 */

const getFromLocalStorage = key => {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    return null;
  }
};
/**
 * A helper to set a value in localStorage.
 * Ignores errors about full, disallowed or unsupported storage.
 */

const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {// Ignore errors
  }
};
/**
 * A helper to remove an entry in localStorage.
 * Ignores errors about full, disallowed or unsupported storage.
 */

const removeFromLocalStorage = key => {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {// Ignore errors
  }
};

/***/ })

};
;