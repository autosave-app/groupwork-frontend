"use strict";
exports.id = 9156;
exports.ids = [9156];
exports.modules = {

/***/ 19156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45284);
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * A simple styled-component to contain content in a card UI using styled-system.
 *
 * @see See [styled-system docs](https://github.com/jxnblk/styled-system/blob/master/docs/api.md) for usage of those props
 */
const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "StyledCard",
  componentId: "sc-1i2xrph-0"
})((0,styled_system__WEBPACK_IMPORTED_MODULE_2__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_2__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_2__.typography, styled_system__WEBPACK_IMPORTED_MODULE_2__.background, styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.shadow, styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.position, styled_system__WEBPACK_IMPORTED_MODULE_2__.space));
StyledCard.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().flexbox)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().typography)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().background)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().border)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().shadow)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().color)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().layout)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().space)), (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default().position));
StyledCard.defaultProps = {
  bg: 'white.full',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'black.300',
  borderRadius: '8px',
  overflowX: 'hidden',
  overflowY: 'hidden'
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledCard);

/***/ })

};
;