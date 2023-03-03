"use strict";
(() => {
var exports = {};
exports.id = 8452;
exports.ids = [8452];
exports.modules = {

/***/ 35415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42352);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_3__]);
_components_Header__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["body > div:first-child{height:100%;}"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "EmbeddedPage__Main",
  componentId: "sc-3msj52-0"
})(["margin:0;padding:0;height:100%;", ""], styled_system__WEBPACK_IMPORTED_MODULE_2__.color);
/**
 * A special component to render embedded pages, that makes sure we add the "no-robot" meta
 * and that the footer/topbar will not be displayed, while preserving the normal DOM structure
 * and meta.
 */

const EmbeddedPage = ({
  children,
  description,
  title,
  canonicalURL,
  collective,
  backgroundColor
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(GlobalStyles, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      title: title,
      description: description,
      canonicalURL: canonicalURL,
      collective: collective,
      withTopBar: false,
      noRobots: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Main, {
      backgroundColor: backgroundColor,
      children: children
    })]
  });
};

EmbeddedPage.defaultProps = {
  background: 'white'
};
EmbeddedPage.__docgenInfo = {
  "description": "A special component to render embedded pages, that makes sure we add the \"no-robot\" meta\nand that the footer/topbar will not be displayed, while preserving the normal DOM structure\nand meta.",
  "methods": [],
  "displayName": "EmbeddedPage",
  "props": {
    "background": {
      "defaultValue": {
        "value": "'white'",
        "computed": false
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
    "description": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "backgroundColor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "canonicalURL": {
      "description": "",
      "type": {
        "name": "string"
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
    "title": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_4__/* .withUser */ .ns)(EmbeddedPage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10773:
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



const RadialIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RadialIconContainer",
  componentId: "sc-ob2yke-0"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.flex, styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.border);
RadialIconContainer.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  bg: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)])
};
RadialIconContainer.defaultProps = {
  color: '#ffffff'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadialIconContainer);

/***/ }),

/***/ 15822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ ApplicationApproveScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65985);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46233);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62131);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56562);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97619);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37278);
/* harmony import */ var _RadialIconContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10773);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__]);
_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const TopAvatarsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "ApplicationApproveScreen__TopAvatarsContainer",
  componentId: "sc-8fvz3d-0"
})(["display:flex;justify-content:center;align-items:center;position:absolute;top:-48px;left:0;width:100%;gap:28px;"]);
const SCOPES = {
  email: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "bU8NRa",
      defaultMessage: [{
        "type": 0,
        "value": "Access your email address."
      }]
    })
  },
  incognito: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "u1mbsP",
      defaultMessage: [{
        "type": 0,
        "value": "Access your incognito account."
      }]
    })
  },
  account: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "kIXYNi",
      defaultMessage: [{
        "type": 0,
        "value": "Manage your account, collectives and organizations."
      }]
    })
  },
  expenses: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "SQT1u9",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage expenses, payout methods."
      }]
    })
  },
  orders: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "Ny7kBI",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage contributions, payment methods."
      }]
    })
  },
  transactions: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "zu5ckP",
      defaultMessage: [{
        "type": 0,
        "value": "Refund and reject recorded transactions."
      }]
    })
  },
  virtualCards: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "n8EhFC",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage virtual cards."
      }]
    })
  },
  updates: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "USDg2A",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage updates."
      }]
    })
  },
  conversations: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "udDupO",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage conversations."
      }]
    })
  },
  webhooks: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "m2cP6g",
      defaultMessage: [{
        "type": 0,
        "value": "Create and manage webhooks."
      }]
    })
  },
  host: {
    label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "iHkkt+",
      defaultMessage: [{
        "type": 0,
        "value": "Administrate fiscal hosts."
      }]
    })
  }
  /* We disable those scopes for now */

  /*
  applications: {
    label: <FormattedMessage defaultMessage="Create and manage OAuth applications." />,
  },
  connectedAccounts: {
    label: <FormattedMessage defaultMessage="Create and manage connected accounts." />,
  },
  root: {
    label: <FormattedMessage defaultMessage="Perform critical administrative operations. " />,
  },
  */

};

const fetchAuthorize = (application, redirectUri = null, state = null, scope = null) => {
  const authorizeParams = new URLSearchParams({
    /* eslint-disable camelcase */
    response_type: 'code',
    client_id: application.clientId,
    redirect_uri: redirectUri || application.redirectUri,
    state
    /* eslint-enable camelcase */

  });

  if (scope) {
    authorizeParams.set('scope', scope);
  }

  return fetch(`/api/oauth/authorize?${authorizeParams.toString()}`, {
    method: 'POST',
    redirect: 'manual',
    headers: _objectSpread(_objectSpread({}, (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__/* .addAuthTokenToHeader */ .Pj)()), {}, {
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  });
};

const ApplicationApproveScreen = ({
  application,
  redirectUri,
  autoApprove,
  state,
  scope
}) => {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const [isRedirecting, setRedirecting] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(autoApprove);
  const {
    call: callAuthorize,
    loading,
    error
  } = (0,_lib_hooks_useAsyncCall__WEBPACK_IMPORTED_MODULE_7__/* .useAsyncCall */ .N)(async () => {
    let response = null;

    try {
      response = await fetchAuthorize(application, redirectUri, state, scope);
    } catch {
      setRedirecting(false); // To show errors with autoApprove

      throw (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .formatErrorType */ .Wi)(intl, _lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .ERROR.NETWORK */ .pn.NETWORK);
    }

    const body = await response.json();

    if (response.ok) {
      setRedirecting(true);

      if (autoApprove) {
        setTimeout(() => {
          return router.push(body['redirect_uri']);
        }, 1000);
      } else {
        return router.push(body['redirect_uri']);
      }
    } else {
      setRedirecting(false); // To show errors with autoApprove

      throw new Error(body['error_description'] || body['error']);
    }
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (autoApprove) {
      callAuthorize();
    }
  }, []);
  const requestedScopes = scope?.split(',').filter(scope => SCOPES[scope]);
  const filteredScopes = Object.entries(SCOPES).filter(([scope]) => requestedScopes && requestedScopes.includes(scope));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    position: "relative",
    mt: "48px",
    width: "100%",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      maxWidth: "520px",
      width: "100%",
      px: 24,
      py: 32,
      m: "0 auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(TopAvatarsContainer, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          flex: "0 0 96px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            collective: application.account,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
              size: 96,
              collective: application.account
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_RadialIconContainer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          flex: "0 0 40px",
          height: "40px",
          bg: "#29cc75",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_1__.Check, {
            width: "18px",
            height: "15px"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          flex: "0 0 96px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            src: "/static/images/oc-oauth-connect-logo.png",
            height: 96,
            width: 96
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        pt: 56,
        children: isRedirecting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontSize: "16px",
            fontWeight: "500",
            mb: 4,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "ET/GW3",
              defaultMessage: [{
                "type": 0,
                "value": "Redirecting…"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
            fontWeight: "700",
            fontSize: "24px",
            textAlign: "center",
            color: "black.900",
            mb: 32,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "kP5Eb7",
              defaultMessage: [{
                "type": 1,
                "value": "applicationName"
              }, {
                "type": 0,
                "value": " wants permission to:"
              }],
              values: {
                applicationName: application.name
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
            alignItems: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
              collective: LoggedInUser.collective,
              size: 32
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
              fontSize: "16px",
              color: "black.700",
              ml: 3,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "+cR4M7",
                defaultMessage: [{
                  "type": 0,
                  "value": "Verify your identity on "
                }, {
                  "type": 1,
                  "value": "service"
                }],
                values: {
                  service: 'Open Collective'
                }
              }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("strong", {
                children: ["(", LoggedInUser.collective.name, ")"]
              })]
            })]
          }), filteredScopes.map(([scope, {
            label
          }]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
            alignItems: "center",
            mt: 26,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Image__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              src: "/static/images/stars-exchange-rounded.png",
              width: 32,
              height: 32
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
              fontSize: "16px",
              color: "black.700",
              ml: 3,
              children: label
            })]
          }, scope)), filteredScopes.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            type: "info",
            mt: 40,
            fontSize: "13px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "FmF1MA",
              defaultMessage: [{
                "type": 0,
                "value": "These permissions are granted to all the accounts you're administrating, including your personal profile."
              }]
            })
          }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            type: "error",
            withIcon: true,
            mt: 3,
            children: error.toString()
          })]
        })
      })]
    }), !isRedirecting && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      mt: 24,
      justifyContent: "center",
      gap: "24px",
      flexWrap: "wrap",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        minWidth: 175,
        onClick: () => window.history.back(),
        disabled: loading,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "actions.cancel",
          defaultMessage: [{
            "type": 0,
            "value": "Cancel"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        minWidth: 175,
        buttonStyle: "primary",
        loading: loading,
        onClick: callAuthorize,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "QwnGVY",
          defaultMessage: [{
            "type": 0,
            "value": "Authorize"
          }]
        })
      })]
    })]
  });
};
ApplicationApproveScreen.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ApplicationApproveScreen",
  "props": {
    "application": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "clientId": {
            "name": "string",
            "required": true
          },
          "redirectUri": {
            "name": "string",
            "required": true
          },
          "account": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "slug": {
                "name": "string",
                "required": true
              }
            },
            "required": true
          }
        }
      },
      "required": true
    },
    "redirectUri": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "state": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "scope": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "autoApprove": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useAsyncCall)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31330);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useAsyncCall = (fn, {
  useErrorToast = false
} = {}) => {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const {
    addToast
  } = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const callWith = (...args) => async () => {
    setLoading(true);
    setError();
    setData();

    try {
      const response = await fn(...args);
      setData(response);
    } catch (e) {
      setError(e); // eslint-disable-next-line no-console

      console.error(e);

      if (useErrorToast) {
        addToast({
          type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_2__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: (0,_errors__WEBPACK_IMPORTED_MODULE_3__/* .formatErrorMessage */ .jN)(intl, e)
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const call = (...args) => callWith(...args)();

  return {
    loading,
    call,
    callWith,
    data,
    error
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88898:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77047);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32651);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62131);
/* harmony import */ var _components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35415);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37278);
/* harmony import */ var _components_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68185);
/* harmony import */ var _components_oauth_ApplicationApproveScreen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15822);
/* harmony import */ var _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78720);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_7__, _components_oauth_ApplicationApproveScreen__WEBPACK_IMPORTED_MODULE_12__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__]);
([_components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_7__, _components_oauth_ApplicationApproveScreen__WEBPACK_IMPORTED_MODULE_12__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const applicationQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query OAuthAuthorization($clientId: String!) {
    application(clientId: $clientId) {
      id
      name
      clientId
      redirectUri
      account {
        id
        name
        slug
        type
        imageUrl(height: 192)
      }
      oAuthAuthorization {
        id
        expiresAt
        scope
      }
    }
  }
`; // See https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1

const REQUIRED_URL_PARAMS = ['response_type', 'client_id'];

const isValidAuthorization = (authorization, requestedScopes) => {
  return authorization && new Date(authorization.expiresAt) > new Date() && lodash_difference__WEBPACK_IMPORTED_MODULE_0___default()(requestedScopes, authorization.scope).length === 0;
};

const OAuthAuthorizePage = () => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    loadingLoggedInUser,
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  const missingParams = REQUIRED_URL_PARAMS.filter(key => !query[key]);
  const skipQuery = missingParams.length;
  const queryVariables = {
    clientId: query['client_id']
  };
  const queryParams = {
    skip: skipQuery,
    variables: queryVariables,
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_5__/* .API_V2_CONTEXT */ .T
  };
  const {
    data,
    error,
    loading: isLoadingAuthorization
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(applicationQuery, queryParams);
  const isLoading = loadingLoggedInUser || isLoadingAuthorization;
  const requestedScopes = query.scope ? query.scope.split(',').map(s => s.trim()) : [];
  const hasExistingAuthorization = isValidAuthorization(data?.application?.oAuthAuthorization, requestedScopes);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    title: "Authorize application",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      justifyContent: "center",
      alignItems: "center",
      py: [90, null, null, 180],
      px: 2,
      children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}) : !LoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        isOAuth: true,
        oAuthApplication: data?.application
      }) : missingParams.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        withIcon: true,
        type: "error",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "evYyQx",
          defaultMessage: [{
            "type": 0,
            "value": "Missing parameters: "
          }, {
            "type": 1,
            "value": "parameters"
          }],
          values: {
            parameters: missingParams.join(', ')
          }
        })
      }) : query['response_type'] !== 'code' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        withIcon: true,
        type: "error",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "mGSAXe",
          defaultMessage: [{
            "type": 1,
            "value": "field"
          }, {
            "type": 0,
            "value": " has invalid value \""
          }, {
            "type": 1,
            "value": "value"
          }, {
            "type": 0,
            "value": "\". Expected: \""
          }, {
            "type": 1,
            "value": "expected"
          }, {
            "type": 0,
            "value": "\""
          }],
          values: {
            field: 'response_type',
            value: query['response_type'],
            expected: 'code'
          }
        })
      }) : error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        error: error
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_oauth_ApplicationApproveScreen__WEBPACK_IMPORTED_MODULE_12__/* .ApplicationApproveScreen */ .$, {
        application: data.application,
        redirectUri: query['redirect_uri'],
        autoApprove: hasExistingAuthorization,
        state: query['state'],
        scope: query['scope']
      })
    })
  });
};

OAuthAuthorizePage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OAuthAuthorizePage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OAuthAuthorizePage);
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

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

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

/***/ 77047:
/***/ ((module) => {

module.exports = require("lodash/difference");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,3169,9156,7262,1433,7619,8185,8720], () => (__webpack_exec__(88898)));
module.exports = __webpack_exports__;

})();