"use strict";
exports.id = 4812;
exports.ids = [4812];
exports.modules = {

/***/ 54812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37278);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84842);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78720);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Page__WEBPACK_IMPORTED_MODULE_6__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__]);
([_Page__WEBPACK_IMPORTED_MODULE_6__, _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["LoggedInUser", "loadingLoggedInUser"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










/**
 * A wrapper around `Page` that will display a spinner while user is loading.
 * If authentication fails, users will be prompted with a form to login that will
 * redirect them to the correct page once they do.
 *
 * Unless a `noRobots={true}` is provided, pages wrapped with this helper will not be indexed
 * by default.
 *
 * ## Usage
 *
 * ```jsx
 * <AuthenticatedPage>
 *   {(LoggedInUser) => (
 *     <div>
 *       Hello {LoggedInUser.collective.name}!
 *     </div>
 *   )}
 * </AuthenticatedPage>
 * ```
 */




class AuthenticatedPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  renderContent(loadingLoggedInUser, LoggedInUser) {
    if (!LoggedInUser) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: "center",
        py: [5, null, 6],
        px: 2,
        children: loadingLoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            type: "warning",
            mb: 4,
            maxWidth: 400,
            withIcon: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "authorization.loginRequired",
              defaultMessage: [{
                "type": 0,
                "value": "You need to be logged in to continue."
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            defaultForm: "signin",
            disableSignup: this.props.disableSignup
          })]
        })
      });
    } else if (this.props.rootOnly && !LoggedInUser.isRoot) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          type: "warning",
          my: [5, 6, 7],
          maxWidth: 400,
          withIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "AuthenticatedPage.RootOnly",
            defaultMessage: [{
              "type": 0,
              "value": "This page is limited to site administrators"
            }]
          })
        })
      });
    } else if (typeof this.props.children === 'function') {
      return this.props.children(LoggedInUser);
    } else {
      return this.props.children;
    }
  }

  render() {
    const _this$props = this.props,
          {
      LoggedInUser,
      loadingLoggedInUser
    } = _this$props,
          pageProps = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Page__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
      noRobots: true
    }, pageProps), {}, {
      children: this.renderContent(loadingLoggedInUser, LoggedInUser)
    }));
  }

}

AuthenticatedPage.__docgenInfo = {
  "description": "A wrapper around `Page` that will display a spinner while user is loading.\nIf authentication fails, users will be prompted with a form to login that will\nredirect them to the correct page once they do.\n\nUnless a `noRobots={true}` is provided, pages wrapped with this helper will not be indexed\nby default.\n\n## Usage\n\n```jsx\n<AuthenticatedPage>\n  {(LoggedInUser) => (\n    <div>\n      Hello {LoggedInUser.collective.name}!\n    </div>\n  )}\n</AuthenticatedPage>\n```",
  "methods": [{
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "loadingLoggedInUser",
      "type": null
    }, {
      "name": "LoggedInUser",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "AuthenticatedPage",
  "props": {
    "children": {
      "description": "A child renderer to call when user is properly authenticated",
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "node"
        }]
      },
      "required": false
    },
    "disableSignup": {
      "description": "Whether user can signup on this page",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "rootOnly": {
      "description": "Whether this page is limited to root users",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loadingLoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_8__/* .withUser */ .ns)(AuthenticatedPage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;