"use strict";
exports.id = 4829;
exports.ids = [4829];
exports.modules = {

/***/ 1549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1259);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11333);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42352);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_5__, _Header__WEBPACK_IMPORTED_MODULE_7__]);
([_Footer__WEBPACK_IMPORTED_MODULE_5__, _Header__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












class IncognitoUserCollective extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.classNames = ['UserCollectivePage'];
    this.messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
      'incognito.title': {
        id: "UserCollective.incognito.title",
        defaultMessage: [{
          "type": 0,
          "value": "Incognito user"
        }]
      },
      'incognito.description': {
        id: "UserCollective.incognito.description",
        defaultMessage: [{
          "type": 0,
          "value": "This user has decided to remain incognito"
        }]
      }
    });
  }

  render() {
    const {
      intl,
      collective
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('UserCollectivePage'),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        title: intl.formatMessage(this.messages['incognito.title']),
        description: intl.formatMessage(this.messages['incognito.description']),
        collective: {
          collective
        },
        noRobots: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Body__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          my: 4,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* .IncognitoAvatar */ .u5, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.H1, {
            fontSize: "2rem",
            children: intl.formatMessage(this.messages['incognito.title'])
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
            children: intl.formatMessage(this.messages['incognito.description'])
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
            children: "\xAF\\_(\u30C4)_/\xAF"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
    });
  }

}

IncognitoUserCollective.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "IncognitoUserCollective",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(IncognitoUserCollective));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;