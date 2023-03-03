"use strict";
exports.id = 4711;
exports.ids = [4711];
exports.modules = {

/***/ 34711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




/** Returns info about email's provider, or null if unknown provider */



const getProvider = email => {
  const providers = [{
    name: 'Gmail',
    regexp: /@gmail\.com$/,
    link: 'https://mail.google.com/mail/u/2/#advanced-search/subject=Open+Collective%3A+Sign+In&amp;subset=all&amp;within=2d'
  }, {
    name: 'Outlook',
    regexp: /@(outlook|hotmail)\.(.+)$/,
    link: 'https://outlook.live.com/mail/inbox'
  }];
  return providers.find(provider => provider.regexp.test(email));
};
/**
 * If email is recognized as a known provider (GMail/Hotmail), a button will be displayed
 * with a link to directly open user's inbox. Otherwise, this will return null;
 */


const OpenEmailProviderButton = ({
  email,
  children
}) => {
  const provider = getProvider(email);
  return !provider ? null : children( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    mt: "24px",
    mb: "24px",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      "data-cy": "open-inbox-link",
      href: provider.link,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "EDXxE/",
        defaultMessage: [{
          "type": 0,
          "value": "Go to your mail"
        }]
      })
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenEmailProviderButton);

/***/ })

};
;