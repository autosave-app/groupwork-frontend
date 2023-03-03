"use strict";
exports.id = 6724;
exports.ids = [6724];
exports.modules = {

/***/ 92873:
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
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11194);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_4__]);
_Page__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  title: {
    id: "profile.guest",
    defaultMessage: [{
      "type": 0,
      "value": "Guest"
    }]
  },
  description: {
    id: "GuestProfile.description",
    defaultMessage: [{
      "type": 0,
      "value": "This contributor has not joined Open Collective yet"
    }]
  }
});

const GuestUserProfile = ({
  account
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const title = intl.formatMessage(messages.title);
  const description = intl.formatMessage(messages.description);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    noRobots: true,
    title: title,
    description: description,
    collective: {
      account
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      my: [4, 5, 6],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_2__/* .GuestAvatar */ .DA, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
        children: description
      })]
    })
  });
};

GuestUserProfile.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "GuestUserProfile",
  "props": {
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuestUserProfile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;