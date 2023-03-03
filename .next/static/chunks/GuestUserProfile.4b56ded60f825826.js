"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6724],{

/***/ 92873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59448);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11194);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84842);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);







var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
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

var GuestUserProfile = function GuestUserProfile(_ref) {
  var account = _ref.account;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  var title = intl.formatMessage(messages.title);
  var description = intl.formatMessage(messages.description);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Page__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    noRobots: true,
    title: title,
    description: description,
    collective: {
      account: account
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      my: [4, 5, 6],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_1__/* .GuestAvatar */ .DA, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
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
/* harmony default export */ __webpack_exports__["default"] = (GuestUserProfile);

/***/ })

}]);
//# sourceMappingURL=GuestUserProfile.4b56ded60f825826.js.map