"use strict";
(() => {
var exports = {};
exports.id = 2176;
exports.ids = [2176];
exports.modules = {

/***/ 1259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "Body__Main",
  componentId: "sc-1ucxino-0"
})(["border-top:1px solid rgb(232,233,235);"]);
class Body extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Main, {
      children: children
    });
  }

}
Body.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Body",
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

/***/ }),

/***/ 54963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ RobotsDetector),
/* harmony export */   "P": () => (/* binding */ isSuspiciousUserAgent)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * We don't have much information about the robots invalidating our sign in tokens yet,
 * except that they use older versions of Chrome.
 */
const isSuspiciousUserAgent = userAgent => {
  if (!userAgent) {
    return false;
  }

  const chromeVersionRegex = /Chrome\/(\d+)/;
  const regexResult = userAgent.match(chromeVersionRegex);

  if (!regexResult) {
    // Not Chrome
    return false;
  }

  const chromeVersion = parseInt(regexResult[1]);
  return chromeVersion <= 72;
};
/**
 * JS client-side robot detector
 */

class RobotsDetector {
  constructor() {
    _defineProperty(this, "watchEvent", lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(() => {
      this.callback?.();
      this.stopListening();
    }, 1000, {
      trailing: false
    }));

    this.isListening = false;
    this.callback = null;
  }

  startListening(callback) {
    this.callback = callback;

    if (!this.isListening) {
      this.isListening = true;
      RobotsDetector.WATCHED_EVENTS.forEach(event => {
        document.addEventListener(event, this.watchEvent);
      });
    }
  }

  stopListening() {
    if (this.isListening) {
      this.isListening = false;
      RobotsDetector.WATCHED_EVENTS.forEach(event => {
        document.removeEventListener(event, this.watchEvent);
      });
    }
  }
  /**
   * Watch for human activity. As soon as something is detected, stop listening & call `callback`
   */


}

_defineProperty(RobotsDetector, "WATCHED_EVENTS", ['mousemove', 'keydown', 'touchstart']);

/***/ }),

/***/ 42218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9941);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_robots_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54963);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97079);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1259);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42352);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53169);
/* harmony import */ var _components_LoadingGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19306);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78720);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_9__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_9__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















class SigninPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  static getInitialProps({
    query: {
      token,
      next,
      form,
      email
    },
    req
  }) {
    // Decode next URL if URI encoded
    if (next && next.startsWith('%2F')) {
      next = decodeURIComponent(next);
    }

    next = next && (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__/* .isValidRelativeUrl */ .s5)(next) ? next : null;
    email = email && decodeURIComponent(email);
    return {
      token,
      next,
      form: form || 'signin',
      isSuspiciousUserAgent: (0,_lib_robots_detector__WEBPACK_IMPORTED_MODULE_5__/* .isSuspiciousUserAgent */ .P)(req?.get('User-Agent')),
      email: email && (0,validator__WEBPACK_IMPORTED_MODULE_4__.isEmail)(email) ? email : null
    };
  }

  constructor(props) {
    super(props);
    this.robotsDetector = new _lib_robots_detector__WEBPACK_IMPORTED_MODULE_5__/* .RobotsDetector */ .J();
    this.state = {
      error: null,
      success: null,
      isRobot: props.isSuspiciousUserAgent,
      redirecting: false
    };
  }

  componentDidMount() {
    if (this.state.isRobot) {
      this.robotsDetector.startListening(() => this.setState({
        isRobot: false
      }));
    } else {
      this.initialize();
    }
  }

  async componentDidUpdate(oldProps, oldState) {
    const wasConnected = !oldProps.LoggedInUser && this.props.LoggedInUser;

    if (oldState.isRobot && !this.state.isRobot) {
      this.initialize();
    } else if (wasConnected && !this.props.errorLoggedInUser && this.props.form !== 'create-account') {
      // --- User logged in ---
      this.setState({
        success: true,
        redirecting: true
      }); // Avoid redirect loop: replace '/signin' redirects by '/'

      const {
        next
      } = this.props;
      const redirect = next && (next.match(/^\/?signin[?/]?/) || next.match(/^\/?reset-password[?/]?/)) ? null : next;
      await this.props.router.replace(redirect || '/');
      window.scroll(0, 0);
    } else if (this.props.token && oldProps.token !== this.props.token) {
      // --- There's a new token in town 🤠 ---
      const user = await this.props.login(this.props.token);

      if (!user) {
        this.setState({
          error: 'Token rejected'
        });
      }
    }
  }

  componentWillUnmount() {
    this.robotsDetector.stopListening();
  }

  async initialize() {
    if (this.props.token) {
      let user;

      try {
        user = await this.props.login(this.props.token); // If given token is invalid, try to login with the old one

        if (!user) {
          user = await this.props.login();
        } // If there's no user at this point, there's no chance we can login


        if (!user) {
          this.setState({
            error: 'Token rejected'
          });
        }
      } catch (err) {
        this.setState({
          error: err.message || err
        });
      }
    } else {
      this.props.login();
    }
  }

  getRoutes() {
    const {
      next
    } = this.props;
    const routes = {
      signin: '/signin',
      join: '/create-account'
    };

    if (!next) {
      return routes;
    } else {
      const urlParams = `?next=${encodeURIComponent(next)}`;
      return lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(routes, route => `${route}${urlParams}`);
    }
  }

  renderContent() {
    const {
      loadingLoggedInUser,
      errorLoggedInUser,
      token,
      next,
      form,
      LoggedInUser
    } = this.props;

    if (this.state.isRobot && token) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        pb: 3,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          fontSize: "30px",
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
            role: "img",
            "aria-label": "Robot Emoji",
            children: "\uD83E\uDD16"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          mb: 5,
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "checkingBrowser",
            defaultMessage: [{
              "type": 0,
              "value": "Your browser is being verified. If this message doesn't disappear, try to move your mouse or to touch your screen for mobile."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})]
      });
    } else if ((loadingLoggedInUser || this.state.success) && token) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {});
    } else if (!loadingLoggedInUser && LoggedInUser && form === 'create-account') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        type: "warning",
        withIcon: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "createAccount.alreadyLoggedIn",
          defaultMessage: [{
            "type": 0,
            "value": "It seems like you're already signed in as \""
          }, {
            "type": 1,
            "value": "email"
          }, {
            "type": 0,
            "value": "\". If you want to create a new account, please log out first."
          }],
          values: {
            email: LoggedInUser.email
          }
        })
      });
    }

    const error = errorLoggedInUser || this.state.error;

    if (loadingLoggedInUser || this.state.redirecting || token && !error) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_LoadingGrid__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {});
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [error && !error.includes('Two-factor authentication is enabled') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        mb: 4,
        "data-cy": "signin-message-box",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("strong", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "login.failed",
            defaultMessage: [{
              "type": 0,
              "value": "Sign In failed: "
            }, {
              "type": 1,
              "value": "message"
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              message: error
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("br", {}), !error?.includes('Two-factor authentication') && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "login.askAnother",
          defaultMessage: [{
            "type": 0,
            "value": "You can ask for a new sign in link using the form below."
          }]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        email: this.props.email,
        redirect: next || '/',
        form: form,
        routes: this.getRoutes()
      })]
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "LoginPage",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        title: this.props.form === 'signin' ? 'Sign In' : 'Create Account',
        description: "Create your profile on Open Collective and show the world the open collectives that you are contributing to.",
        menuItems: {
          solutions: false,
          product: false,
          company: false,
          docs: false
        },
        showSearch: false,
        showProfileAndChangelogMenu: false
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          my: [4, 6],
          p: 2,
          children: this.renderContent()
        })
      })]
    });
  }

}

SigninPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { token, next, form, email }, req }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "initialize",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "getRoutes",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "SigninPage",
  "props": {
    "form": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'signin'",
          "computed": false
        }, {
          "value": "'create-account'",
          "computed": false
        }]
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
    "email": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "next": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "login": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "errorLoggedInUser": {
      "description": "",
      "type": {
        "name": "string"
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
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isSuspiciousUserAgent": {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_15__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(SigninPage)));
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

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

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

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

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

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

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

/***/ 39131:
/***/ ((module) => {

module.exports = require("lodash/compact");

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

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 9941:
/***/ ((module) => {

module.exports = require("lodash/mapValues");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

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

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,3169,9156,7262,1433,8720], () => (__webpack_exec__(42218)));
module.exports = __webpack_exports__;

})();