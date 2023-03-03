"use strict";
(() => {
var exports = {};
exports.id = 8006;
exports.ids = [8006];
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

/***/ 8634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ PasswordStrengthBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ReactPasswordStrengthBar = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 98355, 23)), {
  loadableGenerated: {
    modules: ["../components/PasswordStrengthBar.tsx -> " + 'react-password-strength-bar']
  }
});
/**
 * A wrapper around react-password-strength-bar to plug our custom styles and logic.
 * Loads the library dynamically to avoid bloating the bundle size.
 */

const PasswordStrengthBar = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ReactPasswordStrengthBar, _objectSpread(_objectSpread({}, props), {}, {
    style: {
      visibility: props.password ? 'visible' : 'hidden'
    },
    shortScoreWord: intl.formatMessage({
      id: "FormError.minLength",
      defaultMessage: [{
        "type": 0,
        "value": "The value is too short"
      }]
    }),
    scoreWords: [intl.formatMessage({
      id: "Password.weak",
      defaultMessage: [{
        "type": 0,
        "value": "Weak"
      }]
    }), intl.formatMessage({
      id: "Password.weak",
      defaultMessage: [{
        "type": 0,
        "value": "Weak"
      }]
    }), intl.formatMessage({
      id: "Password.fair",
      defaultMessage: [{
        "type": 0,
        "value": "Fair"
      }]
    }), intl.formatMessage({
      id: "Password.good",
      defaultMessage: [{
        "type": 0,
        "value": "Good"
      }]
    }), intl.formatMessage({
      id: "Password.strong",
      defaultMessage: [{
        "type": 0,
        "value": "Strong"
      }]
    })]
  }));
};
PasswordStrengthBar.__docgenInfo = {
  "description": "A wrapper around react-password-strength-bar to plug our custom styles and logic.\nLoads the library dynamically to avoid bloating the bundle size.",
  "methods": [],
  "displayName": "PasswordStrengthBar"
};

/***/ }),

/***/ 44006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11194);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1259);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42352);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88705);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56562);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37278);
/* harmony import */ var _components_PasswordStrengthBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8634);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97274);
/* harmony import */ var _components_StyledInputField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87262);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_12__, _components_StyledInputField__WEBPACK_IMPORTED_MODULE_19__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_12__, _components_StyledInputField__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























class ResetPasswordPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static getInitialProps({
    query: {
      token
    }
  }) {
    return {
      token
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      /* Password management state */
      passwordLoading: false,
      passwordError: null,
      password: '',
      passwordScore: null
    };
  }

  async submitResetPassword() {
    const {
      password,
      passwordScore
    } = this.state;

    if (passwordScore <= 1) {
      this.setState({
        passwordError: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "C2rcD0",
          defaultMessage: [{
            "type": 0,
            "value": "Password is too weak. Try to use more characters or use a password manager to generate a strong one."
          }]
        }),
        showError: true
      });
      return;
    }

    this.setState({
      passwordLoading: true
    });

    try {
      const result = await this.props.resetPassword({
        variables: {
          password
        }
      });

      if (result.data.setPassword.token) {
        await this.props.login(result.data.setPassword.token);
      }

      await this.props.refetchLoggedInUser();
      await this.props.router.push({
        pathname: '/reset-password/completed'
      });
    } catch (error) {
      const errorMessage = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(this.props.intl, error);
      this.setState({
        passwordError: errorMessage,
        showError: true,
        passwordLoading: false
      });
    }
  }

  render() {
    const {
      password,
      passwordLoading,
      passwordError,
      showError
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        menuItems: {
          solutions: false,
          product: false,
          company: false,
          docs: false
        },
        showSearch: false,
        showProfileAndChangelogMenu: false
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Body__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "center",
          my: [4, 6],
          p: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
              maxWidth: 390,
              px: ['20px', 0],
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                justifyContent: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  src: "/static/images/oc-logo-watercolor-256.png",
                  height: 128,
                  width: 128
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.H1, {
                fontWeight: 700,
                fontSize: "32px",
                mb: 12,
                mt: 3,
                textAlign: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "xl27nc",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Reset Password"
                  }]
                })
              }), !this.props.data?.loggedInAccount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                type: "error",
                withIcon: true,
                my: 5,
                children: this.props.data.error ? (0,_lib_errors__WEBPACK_IMPORTED_MODULE_5__/* .i18nGraphqlException */ .t2)(this.props.intl, this.props.data.error) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                  id: "LeOcpF",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Something went wrong while trying to reset your password. Please try again or "
                  }, {
                    "type": 8,
                    "value": "SupportLink",
                    "children": [{
                      "type": 0,
                      "value": "contact support"
                    }]
                  }, {
                    "type": 0,
                    "value": " if the problem persists."
                  }],
                  values: _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP
                })
              }), this.props.data?.loggedInAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                as: "form",
                method: "POST",
                noValidate: true,
                "data-cy": "resetPassword-form",
                onSubmit: event => {
                  event.preventDefault();
                  this.submitResetPassword();
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                  my: 4,
                  justifyContent: "center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                    collective: this.props.data.loggedInAccount,
                    radius: 40,
                    mr: 2
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                      color: "black.800",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "20px",
                      children: this.props.data.loggedInAccount.name
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
                      mt: "2px",
                      wordBreak: "break-all",
                      color: "black.700",
                      fontSize: "13px",
                      children: this.props.data.loggedInAccount.email
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
                  style: {
                    display: 'none'
                  },
                  id: "email",
                  readOnly: true,
                  autoComplete: "email",
                  name: "email",
                  value: this.props.data.loggedInAccount.email,
                  type: "email"
                }), showError && passwordError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                  type: "error",
                  withIcon: true,
                  my: 2,
                  children: passwordError
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                  labelFontWeight: 600,
                  labelFontSize: "13px",
                  alignItems: "left",
                  width: "100%",
                  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "Ev6SEF",
                    defaultMessage: [{
                      "type": 0,
                      "value": "New Password"
                    }]
                  }),
                  htmlFor: "new-password",
                  my: 2,
                  helpText: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "qaIW32",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Strong password recommended. Short or weak one restricted. "
                    }, {
                      "type": 8,
                      "value": "link",
                      "children": [{
                        "type": 0,
                        "value": "The strength of a password is a function of length, complexity, and unpredictability."
                      }]
                    }],
                    values: {
                      link: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_13__/* .getI18nLink */ .fw)({
                        href: 'https://en.wikipedia.org/wiki/Password_strength',
                        openInNewTab: true
                      })
                    }
                  }),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, {
                    fontSize: "14px",
                    id: "new-password",
                    autoComplete: "new-password",
                    type: "password",
                    width: 1,
                    autoFocus: true,
                    required: true,
                    onChange: ({
                      target
                    }) => {
                      this.setState({
                        password: target.value,
                        passwordError: target.validationMessage,
                        showError: false
                      });
                    },
                    onKeyDown: e => {
                      // See https://github.com/facebook/react/issues/6368
                      if (e.key === ' ') {
                        e.preventDefault();
                      } else if (e.key === 'Enter') {
                        this.setState({
                          passwordError: e.target.validationMessage,
                          showError: true
                        });
                      }
                    },
                    onBlur: () => this.setState({
                      showError: true
                    }),
                    onInvalid: event => {
                      event.preventDefault();
                      this.setState({
                        passwordError: event.target.validationMessage
                      });
                    }
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_PasswordStrengthBar__WEBPACK_IMPORTED_MODULE_16__/* .PasswordStrengthBar */ ._, {
                  password: password,
                  onChangeScore: passwordScore => {
                    this.setState({
                      passwordScore
                    });
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                  justifyContent: "center",
                  mb: "24px",
                  mt: "26px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    buttonStyle: "primary",
                    fontWeight: "500",
                    disabled: !password,
                    loading: passwordLoading,
                    minWidth: 157,
                    type: "submit",
                    whiteSpace: "nowrap",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                      id: "actions.continue",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Continue"
                      }]
                    })
                  })
                })]
              })]
            })
          })
        })
      })]
    });
  }

}

const resetPasswordMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ResetPassword($password: String!) {
    setPassword(password: $password) {
      individual {
        id
      }
      token
    }
  }
`;
const resetPasswordAccountQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query ResetPasswordAccount {
    loggedInAccount {
      id
      type
      slug
      name
      email
      imageUrl
    }
  }
`;
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .compose */ .qC)((0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(resetPasswordMutation, {
  name: 'resetPassword',
  options: props => {
    return {
      context: _objectSpread(_objectSpread({}, _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T), {}, {
        headers: {
          authorization: `Bearer ${props.token}`
        }
      })
    };
  }
}), (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(resetPasswordAccountQuery, {
  options: props => {
    return {
      context: _objectSpread(_objectSpread({}, _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_6__/* .API_V2_CONTEXT */ .T), {}, {
        headers: {
          authorization: `Bearer ${props.token}`
        }
      })
    };
  }
}));
ResetPasswordPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { token } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "submitResetPassword",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }],
  "displayName": "ResetPasswordPage",
  "props": {
    "token": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "resetPassword": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "login": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "refetchLoggedInUser": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_21__/* .withUser */ .ns)(addGraphql(ResetPasswordPage)))));
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

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

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

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 98355:
/***/ ((module) => {

module.exports = require("react-password-strength-bar");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,5152,7079,2328,5656,8101,2352,7278,7262], () => (__webpack_exec__(44006)));
module.exports = __webpack_exports__;

})();