(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8347],{

/***/ 3206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_contribution_flow; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/constants/payment-methods.js
var payment_methods = __webpack_require__(1808);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/contribution-flow/constants.js
var constants = __webpack_require__(1433);
// EXTERNAL MODULE: ./components/contribution-flow/ContributionBlocker.js
var ContributionBlocker = __webpack_require__(85839);
// EXTERNAL MODULE: ./components/contribution-flow/graphql/queries.js
var queries = __webpack_require__(19973);
// EXTERNAL MODULE: ./components/contribution-flow/index.js + 41 modules
var contribution_flow = __webpack_require__(54968);
// EXTERNAL MODULE: ./components/contribution-flow/utils.js + 2 modules
var contribution_flow_utils = __webpack_require__(45614);
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(53169);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Redirect.js





var Redirect = function Redirect(_ref) {
  var to = _ref.to;
  var router = (0,next_router.useRouter)();
  (0,react.useEffect)(function () {
    router.push(to);
  }, [to]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {});
};

Redirect.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Redirect",
  "props": {
    "to": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ var components_Redirect = (Redirect);
// EXTERNAL MODULE: ./components/StripeProvider.js
var StripeProvider = __webpack_require__(41499);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./pages/contribution-flow.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
























var NewContributionFlowPage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(NewContributionFlowPage, _React$Component);

  var _super = _createSuper(NewContributionFlowPage);

  function NewContributionFlowPage() {
    classCallCheck_default()(this, NewContributionFlowPage);

    return _super.apply(this, arguments);
  }

  createClass_default()(NewContributionFlowPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _router$query$step;

      this.loadExternalScripts();
      var _this$props = this.props,
          router = _this$props.router,
          data = _this$props.data;
      var account = data === null || data === void 0 ? void 0 : data.account;

      var queryParameters = _objectSpread({}, omit_default()(router.query, ['verb', 'step', 'collectiveSlug']));

      (0,url_helpers/* addParentToURLIfMissing */.Bc)(router, account, "/".concat(router.query.verb, "/").concat((_router$query$step = router.query.step) !== null && _router$query$step !== void 0 ? _router$query$step : ''), queryParameters);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var hostPath = 'data.account.host';

      if (get_default()(this.props, hostPath) !== get_default()(prevProps, hostPath)) {
        this.loadExternalScripts();
      }
    }
  }, {
    key: "loadExternalScripts",
    value: function loadExternalScripts() {
      var supportedPaymentMethods = get_default()(this.props.data, 'account.host.supportedPaymentMethods', []);

      if (supportedPaymentMethods.includes(payment_methods/* GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.CREDIT_CARD */.fY.CREDIT_CARD)) {
        this.props.loadStripe();
      }
    }
  }, {
    key: "getPageMetadata",
    value: function getPageMetadata() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          data = _this$props2.data;
      return (0,contribution_flow_utils/* getContributionFlowMetadata */.Kr)(intl, data === null || data === void 0 ? void 0 : data.account, data === null || data === void 0 ? void 0 : data.tier);
    }
  }, {
    key: "renderPageContent",
    value: function renderPageContent() {
      var _this$props3 = this.props,
          _this$props3$data = _this$props3.data,
          data = _this$props3$data === void 0 ? {} : _this$props3$data,
          paymentFlow = _this$props3.paymentFlow,
          LoggedInUser = _this$props3.LoggedInUser,
          error = _this$props3.error;
      var account = data.account,
          tier = data.tier;
      var isCrypto = paymentFlow === constants/* PAYMENT_FLOW.CRYPTO */.M7.CRYPTO;

      if (data.loading) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          py: [5, 6],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Loading/* default */.Z, {})
        });
      }

      var contributionBlocker = (0,ContributionBlocker/* getContributionBlocker */.Vx)(LoggedInUser, account, tier, Boolean(this.props.tierId), isCrypto);

      if (contributionBlocker) {
        if (contributionBlocker.reason === ContributionBlocker/* CONTRIBUTION_BLOCKER.NO_CUSTOM_CONTRIBUTION */.SG.NO_CUSTOM_CONTRIBUTION) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Redirect, {
            to: "".concat((0,url_helpers/* getCollectivePageRoute */.x0)(account), "/contribute")
          });
        }

        return /*#__PURE__*/(0,jsx_runtime.jsx)(ContributionBlocker/* default */.ZP, {
          blocker: contributionBlocker,
          account: account
        });
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(contribution_flow/* default */.Z, {
          collective: account,
          host: account.host,
          tier: tier,
          paymentFlow: paymentFlow,
          error: error
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;

      if (!data.loading && !data.account) {
        var error = data.error ? (0,errors/* getErrorFromGraphqlException */.H1)(data.error) : (0,errors/* generateNotFoundError */.mN)(this.props.collectiveSlug);
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
          error: error
        });
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, _objectSpread(_objectSpread({}, this.getPageMetadata()), {}, {
        showFooter: false,
        menuItemsV2: {
          solutions: false,
          product: false,
          company: false,
          docs: false
        },
        showSearch: false,
        children: this.renderPageContent()
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        // Route parameters
        collectiveSlug: query.eventSlug || query.collectiveSlug,
        tierId: parseInt(query.tierId) || null,
        paymentFlow: query.paymentFlow,
        // Query parameters
        error: query.error
      };
    }
  }]);

  return NewContributionFlowPage;
}(react.Component);

var addAccountData = (0,graphql/* graphql */.B)(queries/* contributionFlowAccountQuery */.T, {
  skip: function skip(props) {
    return Boolean(props.tierId);
  },
  options: function options(props) {
    return {
      variables: {
        collectiveSlug: props.collectiveSlug
      },
      context: helpers/* API_V2_CONTEXT */.T
    };
  }
});
var addAccountWithTierData = (0,graphql/* graphql */.B)(queries/* contributionFlowAccountWithTierQuery */.p, {
  skip: function skip(props) {
    return !props.tierId;
  },
  options: function options(props) {
    return {
      variables: {
        collectiveSlug: props.collectiveSlug,
        tier: {
          legacyId: props.tierId
        }
      },
      context: helpers/* API_V2_CONTEXT */.T
    };
  }
});
var addGraphql = (0,utils/* compose */.qC)(addAccountData, addAccountWithTierData);
NewContributionFlowPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query }",
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
  "displayName": "NewContributionFlowPage",
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
    }
  }
};
/* harmony default export */ var pages_contribution_flow = (addGraphql((0,UserProvider/* withUser */.ns)((0,injectIntl/* default */.ZP)((0,StripeProvider/* withStripeLoader */.kc)((0,next_router.withRouter)(NewContributionFlowPage))))));

/***/ }),

/***/ 40621:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/contribution-flow",
      function () {
        return __webpack_require__(3206);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [3662,6567,1512,8966,8027,5126,5490,2092,182,280,146,5813,4842,4154,1012,1861,7965,7653,6467,1448,6008,8092,9774,2888,179], function() { return __webpack_exec__(40621); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=contribution-flow-219f8c7e2bf3aab5.js.map