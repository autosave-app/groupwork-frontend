"use strict";
(() => {
var exports = {};
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectiveThemeProvider)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12154);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50529);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * A special `ThemeProvider` that plugs the custom collective theme, defined by the color
 * from `collective.settings.collectivePage.primaryColor`.
 */


class CollectiveThemeProvider extends (react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      newPrimaryColor: null
    });

    _defineProperty(this, "adjustColorContrast", color => {
      const contrast = (0,polished__WEBPACK_IMPORTED_MODULE_5__.getContrast)(color, '#fff');

      if (contrast >= 7) {
        return color;
      } else {
        const contrastDiff = (7 - contrast) / 21;
        return (0,polished__WEBPACK_IMPORTED_MODULE_5__.darken)(contrastDiff, color);
      }
    });

    _defineProperty(this, "getTheme", memoize_one__WEBPACK_IMPORTED_MODULE_4___default()(primaryColor => {
      if (!primaryColor) {
        return _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
      } else if (!(0,validator__WEBPACK_IMPORTED_MODULE_7__.isHexColor)(primaryColor)) {
        // eslint-disable-next-line no-console
        console.warn(`Invalid custom color: ${primaryColor}`);
        return _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z;
      } else {
        const adjustedPrimary = this.adjustColorContrast(primaryColor);
        const luminance = (0,polished__WEBPACK_IMPORTED_MODULE_5__.getLuminance)(adjustedPrimary); // Allow a deviation to up to 20% of the default luminance. Don't apply this to really
        // dark colors (luminance < 0.05)

        const luminanceAdjustment = luminance < 0.05 ? -0.1 : luminance / 5;

        const adjustLuminance = value => (0,polished__WEBPACK_IMPORTED_MODULE_5__.setLightness)(lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(value + luminanceAdjustment, 0, 0.97), adjustedPrimary);

        return (0,_lib_theme__WEBPACK_IMPORTED_MODULE_8__/* .generateTheme */ .I)({
          colors: _objectSpread(_objectSpread({}, _lib_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"].colors */ .Z.colors), {}, {
            primary: {
              900: adjustLuminance(0.1),
              800: adjustLuminance(0.2),
              700: adjustLuminance(0.3),
              600: adjustLuminance(0.42),
              500: adjustLuminance(0.5),
              400: adjustLuminance(0.6),
              300: adjustLuminance(0.65),
              200: adjustLuminance(0.72),
              100: adjustLuminance(0.92),
              50: adjustLuminance(0.97),
              base: primaryColor
            }
          })
        });
      }
    }));

    _defineProperty(this, "onPrimaryColorChange", lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(newPrimaryColor => {
      this.setState({
        newPrimaryColor
      });
    }, 2000));
  }

  render() {
    const {
      collective,
      children
    } = this.props;

    const primaryColor = this.state.newPrimaryColor || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective, 'settings.collectivePage.primaryColor');

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
      theme: this.getTheme(primaryColor),
      children: typeof children === 'function' ? children({
        onPrimaryColorChange: this.onPrimaryColorChange
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
        children: children
      })
    });
  }

}
CollectiveThemeProvider.__docgenInfo = {
  "description": "A special `ThemeProvider` that plugs the custom collective theme, defined by the color\nfrom `collective.settings.collectivePage.primaryColor`.",
  "methods": [{
    "name": "adjustColorContrast",
    "docblock": "Ensures that the contrast is at least 7/1, as recommended by the [W3c](https://webaim.org/articles/contrast)",
    "modifiers": [],
    "params": [{
      "name": "color"
    }],
    "returns": null,
    "description": "Ensures that the contrast is at least 7/1, as recommended by the [W3c](https://webaim.org/articles/contrast)"
  }],
  "displayName": "CollectiveThemeProvider",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "node"
        }, {
          "name": "func"
        }]
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "settings": {
            "name": "shape",
            "value": {
              "collectivePage": {
                "name": "shape",
                "value": {
                  "primaryColor": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    }
  }
};

/***/ }),

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

/***/ 26689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1808);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97079);
/* harmony import */ var _components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(325);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1433);
/* harmony import */ var _components_contribution_flow_ContributionBlocker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85839);
/* harmony import */ var _components_contribution_flow_graphql_queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19973);
/* harmony import */ var _components_contribution_flow_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32887);
/* harmony import */ var _components_contribution_flow_query_parameters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49297);
/* harmony import */ var _components_contribution_flow_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45614);
/* harmony import */ var _components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35415);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(73908);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16159);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53169);
/* harmony import */ var _components_StripeProvider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(41499);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_contribution_flow_index__WEBPACK_IMPORTED_MODULE_15__, _components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_18__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__]);
([_components_contribution_flow_index__WEBPACK_IMPORTED_MODULE_15__, _components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_18__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























class EmbedContributionFlowPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  static getInitialProps({
    query,
    res
  }) {
    if (res) {
      res.removeHeader('X-Frame-Options');
    }

    return {
      // Route parameters
      collectiveSlug: query.eventSlug || query.collectiveSlug,
      tierId: parseInt(query.tierId) || null,
      // Query parameters
      error: query.error,
      queryParams: _components_contribution_flow_query_parameters__WEBPACK_IMPORTED_MODULE_16__/* .EmbedContributionFlowUrlQueryHelper.decode */ .s_.decode(query)
    };
  }

  componentDidMount() {
    this.loadExternalScripts();
    const {
      router,
      data
    } = this.props;
    const account = data?.account;
    const path = router.asPath;
    const rawPath = path.replace(new RegExp(`^/embed/${account?.slug}/`), '/');
    (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_8__/* .addParentToURLIfMissing */ .Bc)(router, account, rawPath, null, {
      prefix: '/embed'
    });
  }

  componentDidUpdate(prevProps) {
    const hostPath = 'data.account.host';

    if (lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props, hostPath) !== lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(prevProps, hostPath)) {
      this.loadExternalScripts();
    }
  }

  loadExternalScripts() {
    const supportedPaymentMethods = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'account.host.supportedPaymentMethods', []);

    if (supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_5__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.CREDIT_CARD */ .fY.CREDIT_CARD)) {
      this.props.loadStripe();
    }
  }

  getPageMetadata() {
    const {
      intl,
      data
    } = this.props;
    return _objectSpread(_objectSpread({}, (0,_components_contribution_flow_utils__WEBPACK_IMPORTED_MODULE_17__/* .getContributionFlowMetadata */ .Kr)(intl, data?.account, data?.tier)), {}, {
      canonicalURL: null
    });
  }

  renderPageContent() {
    const {
      data = {},
      paymentFlow,
      LoggedInUser
    } = this.props;
    const {
      account,
      tier
    } = data;
    const isCrypto = paymentFlow === _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_12__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO;

    if (data.loading) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        py: [5, 6],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {})
      });
    }

    const contributionBlocker = (0,_components_contribution_flow_ContributionBlocker__WEBPACK_IMPORTED_MODULE_13__/* .getContributionBlocker */ .Vx)(LoggedInUser, account, tier, Boolean(this.props.tierId), isCrypto);

    if (contributionBlocker) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_contribution_flow_ContributionBlocker__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        blocker: contributionBlocker,
        account: account
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_20__/* .Box */ .xu, {
        height: "100%",
        pt: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_contribution_flow_index__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          isEmbed: true,
          collective: account,
          host: account.host,
          tier: tier,
          error: this.props.error
        })
      });
    }
  }

  render() {
    const {
      data,
      queryParams
    } = this.props;

    if (!data.loading && !data.account) {
      const error = data.error ? (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .getErrorFromGraphqlException */ .H1)(data.error) : (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .generateNotFoundError */ .mN)(this.props.collectiveSlug);
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        error: error
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_CollectiveThemeProvider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        collective: queryParams.useTheme ? data.account : null,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_24__.jsx(_components_EmbeddedPage__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          backgroundColor: queryParams.backgroundColor,
          children: this.renderPageContent()
        })
      });
    }
  }

}

const addAccountData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(_components_contribution_flow_graphql_queries__WEBPACK_IMPORTED_MODULE_14__/* .contributionFlowAccountQuery */ .T, {
  skip: props => Boolean(props.tierId),
  options: props => ({
    variables: {
      collectiveSlug: props.collectiveSlug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  })
});
const addAccountWithTierData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_2__.graphql)(_components_contribution_flow_graphql_queries__WEBPACK_IMPORTED_MODULE_14__/* .contributionFlowAccountWithTierQuery */ .p, {
  skip: props => !props.tierId,
  options: props => ({
    variables: {
      collectiveSlug: props.collectiveSlug,
      tier: {
        legacyId: props.tierId
      }
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  })
});
const addGraphql = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .compose */ .qC)(addAccountData, addAccountWithTierData);
EmbedContributionFlowPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query, res }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "loadExternalScripts",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getPageMetadata",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderPageContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "EmbedContributionFlowPage",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "paymentFlow": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "tierId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "error": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "loading": {
            "name": "bool",
            "required": false
          },
          "error": {
            "name": "any",
            "required": false
          },
          "account": {
            "name": "object",
            "required": false
          },
          "tier": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loadStripe": {
      "description": "",
      "type": {
        "name": "func"
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
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "queryParams": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "useTheme": {
            "name": "bool",
            "required": false
          },
          "backgroundColor": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addGraphql((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_23__/* .withUser */ .ns)((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)((0,_components_StripeProvider__WEBPACK_IMPORTED_MODULE_22__/* .withStripeLoader */ .kc)((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(EmbedContributionFlowPage))))));
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

/***/ 42534:
/***/ ((module) => {

module.exports = require("@hcaptcha/react-hcaptcha");

/***/ }),

/***/ 42558:
/***/ ((module) => {

module.exports = require("@opencollective/taxes");

/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 64515:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 47435:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CheckShield");

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

/***/ 10054:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/InfoCircle");

/***/ }),

/***/ 99812:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/LoaderAlt");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 39553:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-solid/Bank");

/***/ }),

/***/ 60270:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Alipay");

/***/ }),

/***/ 97244:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/ApplePay");

/***/ }),

/***/ 79368:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Facebook");

/***/ }),

/***/ 45933:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Github");

/***/ }),

/***/ 38254:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/GooglePay");

/***/ }),

/***/ 3592:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Mastodon");

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

/***/ 41032:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretDown");

/***/ }),

/***/ 2331:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CaretUp");

/***/ }),

/***/ 9443:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Check");

/***/ }),

/***/ 62876:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CheckCircle");

/***/ }),

/***/ 55457:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/CreditCard");

/***/ }),

/***/ 99493:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Envelope");

/***/ }),

/***/ 63387:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/ExchangeAlt");

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

/***/ 64965:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/MoneyCheck");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

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

/***/ 5889:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Link");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 41844:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Share2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 20384:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Close");

/***/ }),

/***/ 6534:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Lock");

/***/ }),

/***/ 34427:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Mail");

/***/ }),

/***/ 80924:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Mail");

/***/ }),

/***/ 21825:
/***/ ((module) => {

module.exports = require("@styled-icons/octicons/Question");

/***/ }),

/***/ 83002:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Question");

/***/ }),

/***/ 42038:
/***/ ((module) => {

module.exports = require("@styled-system/css");

/***/ }),

/***/ 45284:
/***/ ((module) => {

module.exports = require("@styled-system/prop-types");

/***/ }),

/***/ 19099:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 45245:
/***/ ((module) => {

module.exports = require("canvas-confetti");

/***/ }),

/***/ 68887:
/***/ ((module) => {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 28992:
/***/ ((module) => {

module.exports = require("country-currency-emoji-flags");

/***/ }),

/***/ 69031:
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ 71934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

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

/***/ 99226:
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ 12154:
/***/ ((module) => {

module.exports = require("lodash/clamp");

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

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 58579:
/***/ ((module) => {

module.exports = require("lodash/flatten");

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

/***/ 53493:
/***/ ((module) => {

module.exports = require("lodash/intersection");

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

/***/ 86069:
/***/ ((module) => {

module.exports = require("lodash/isNil");

/***/ }),

/***/ 75795:
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 83824:
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ 604:
/***/ ((module) => {

module.exports = require("lodash/min");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 96839:
/***/ ((module) => {

module.exports = require("lodash/padStart");

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

/***/ 47869:
/***/ ((module) => {

module.exports = require("lodash/round");

/***/ }),

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 19358:
/***/ ((module) => {

module.exports = require("lodash/toUpper");

/***/ }),

/***/ 75142:
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ 51858:
/***/ ((module) => {

module.exports = require("lodash/truncate");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

/***/ }),

/***/ 86646:
/***/ ((module) => {

module.exports = require("lodash/zipObject");

/***/ }),

/***/ 17809:
/***/ ((module) => {

module.exports = require("memoize-one");

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

/***/ 42863:
/***/ ((module) => {

module.exports = require("payment");

/***/ }),

/***/ 42042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 43860:
/***/ ((module) => {

module.exports = require("qrcode.react");

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

/***/ 61929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

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

/***/ 2707:
/***/ ((module) => {

module.exports = import("@shopify/address");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,7965,9468,8720,414,7865], () => (__webpack_exec__(26689)));
module.exports = __webpack_exports__;

})();