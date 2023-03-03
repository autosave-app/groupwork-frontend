"use strict";
exports.id = 6886;
exports.ids = [6886];
exports.modules = {

/***/ 26886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98210);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A background for the gift card redeem(ed) pages
 */

const HappyBackground = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HappyBackground",
  componentId: "sc-f9mmp6-0"
})(["width:100%;background-position:center top;background-repeat:no-repeat;background-size:cover;clip-path:ellipse(125% 100% at 50% 0%);padding-bottom:165px;", ""], ({
  theme,
  collective
}) => {
  if (!collective || !lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'settings.collectivePage.primaryColor')) {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:url('/static/images/redeem-hero.svg'),radial-gradient(#8a00df,#2e0044);"]);
  } else {
    return (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["background:url('/static/images/redeem-hero.svg'),radial-gradient(", ",", ");"], theme.colors.primary[500], theme.colors.primary[900]);
  }
});
HappyBackground.propTypes = {
  /** On optional collective with settings to get the primary color */
  collective: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    settings: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  })
};
/** @component */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HappyBackground);

/***/ })

};
;