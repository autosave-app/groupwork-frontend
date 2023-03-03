"use strict";
(() => {
var exports = {};
exports.id = 1701;
exports.ids = [1701,4812];
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

/***/ }),

/***/ 50559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "n": () => (/* binding */ getSubscriptionStartDate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1808);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15078);
/* harmony import */ var _components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47483);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86501);
/* harmony import */ var _PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49160);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_10__]);
([_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__, _ToastProvider__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











/** Return the next charge date, or `undefined` if subscription is past due */



const getSubscriptionStartDate = order => {
  if (order.nextChargeDate && dayjs__WEBPACK_IMPORTED_MODULE_1___default()(order.nextChargeDate).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_1___default()())) {
    return order.nextChargeDate;
  }
};
const STRIPE = 'stripe';

const AddPaymentMethod = ({
  onStripeReady,
  onPaypalSuccess,
  setNewPaymentMethodInfo,
  order,
  isSubmitting
}) => {
  const host = order.toAccount.host;
  const hasStripe = host.supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.CREDIT_CARD */ .fY.CREDIT_CARD);
  const hasPaypal = host.supportedPaymentMethods.includes(_lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.PAYPAL */ .fY.PAYPAL);
  const defaultProvider = hasStripe && !hasPaypal ? STRIPE : null;
  const [selectedProvider, setSelectedProvider] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(defaultProvider);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .useToasts */ .e1)();

  if (!selectedProvider) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      children: [hasStripe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        buttonSize: "small",
        "data-cy": "add-pm-select-provider-credit-card-btn",
        onClick: () => setSelectedProvider(STRIPE),
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          size: 24
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "CreditCard",
          defaultMessage: [{
            "type": 0,
            "value": "Credit Card"
          }]
        })]
      }), host.paypalClientId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        totalAmount: order.totalAmount.valueInCents,
        currency: order.totalAmount.currency,
        interval: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_4__/* .getIntervalFromContributionFrequency */ .Pw)(order.frequency),
        host: host,
        collective: order.toAccount,
        tier: order.tier,
        style: {
          height: 45,
          size: 'small'
        },
        subscriptionStartDate: getSubscriptionStartDate(order),
        isSubmitting: isSubmitting,
        onError: e => addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          title: e.message
        }),
        onSuccess: ({
          subscriptionId
        }) => {
          onPaypalSuccess({
            service: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL,
            type: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_3__/* .PAYMENT_METHOD_TYPE.SUBSCRIPTION */ .td.SUBSCRIPTION,
            paypalInfo: {
              subscriptionId
            }
          });
        }
      })]
    });
  } else if (selectedProvider === STRIPE) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      name: "newCreditCardInfo",
      profileType: 'USER',
      onChange: setNewPaymentMethodInfo,
      onReady: onStripeReady,
      hasSaveCheckBox: false,
      isCompact: true
    });
  }
};

AddPaymentMethod.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddPaymentMethod",
  "props": {
    "setNewPaymentMethodInfo": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onStripeReady": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onPaypalSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isSubmitting": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "order": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "totalAmount": {
            "name": "object",
            "required": false
          },
          "frequency": {
            "name": "string",
            "required": false
          },
          "toAccount": {
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddPaymentMethod);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ addCreditCardMutation),
/* harmony export */   "SF": () => (/* binding */ confirmCreditCardMutation),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22265);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11515);
/* harmony import */ var _styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1808);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32651);
/* harmony import */ var _lib_payment_method_label__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51515);
/* harmony import */ var _lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91337);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79936);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88705);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29242);
/* harmony import */ var _StripeProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41499);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(173);
/* harmony import */ var _StyledRadioList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36718);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90012);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(31330);
/* harmony import */ var _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(50559);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_27__, _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__]);
([_ToastProvider__WEBPACK_IMPORTED_MODULE_27__, _AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































const PaymentMethodBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "UpdatePaymentMethodPopUp__PaymentMethodBox",
  componentId: "sc-1vnnhkx-0"
})(["border-top:1px solid ", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_10__.themeGet)('colors.black.300'));
const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.defineMessages)({
  updatePaymentMethod: {
    id: "subscription.menu.editPaymentMethod",
    defaultMessage: [{
      "type": 0,
      "value": "Update payment method"
    }]
  },
  addPaymentMethod: {
    id: "subscription.menu.addPaymentMethod",
    defaultMessage: [{
      "type": 0,
      "value": "Add new payment method"
    }]
  }
});
const paymentMethodFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  fragment UpdatePaymentMethodFragment on PaymentMethod {
    id
    name
    data
    service
    type
    balance {
      value
      valueInCents
      currency
    }
    account {
      id
    }
  }
`;
const paymentMethodsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  query UpdatePaymentMethodPopUpPaymentMethod($accountId: String!, $orderId: String!) {
    account(id: $accountId) {
      id
      paymentMethods(type: [CREDITCARD, GIFTCARD, PREPAID, COLLECTIVE]) {
        id
        ...UpdatePaymentMethodFragment
      }
    }
    order(order: { id: $orderId }) {
      id
      paymentMethod {
        id
        ...UpdatePaymentMethodFragment
      }
    }
  }
  ${paymentMethodFragment}
`;
const updatePaymentMethodMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  mutation UpdatePaymentMethod(
    $order: OrderReferenceInput!
    $paymentMethod: PaymentMethodReferenceInput
    $paypalSubscriptionId: String
  ) {
    updateOrder(order: $order, paymentMethod: $paymentMethod, paypalSubscriptionId: $paypalSubscriptionId) {
      id
      status
      paymentMethod {
        id
        service
        name
        type
        data
        expiryDate
        balance {
          value
          valueInCents
          currency
        }
      }
    }
  }
`;
const paymentMethodResponseFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  fragment paymentMethodResponseFragment on CreditCardWithStripeError {
    paymentMethod {
      id
    }
    stripeError {
      message
      response
    }
  }
`;
const addCreditCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  mutation AddCreditCardRecurringContributions(
    $creditCardInfo: CreditCardCreateInput!
    $name: String!
    $account: AccountReferenceInput!
  ) {
    addCreditCard(creditCardInfo: $creditCardInfo, name: $name, account: $account) {
      ...paymentMethodResponseFragment
    }
  }
  ${paymentMethodResponseFragment}
`;
const confirmCreditCardMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql`
  mutation ConfirmCreditCardRecurringContributions($paymentMethod: PaymentMethodReferenceInput!) {
    confirmCreditCard(paymentMethod: $paymentMethod) {
      ...paymentMethodResponseFragment
    }
  }
  ${paymentMethodResponseFragment}
`;
const mutationOptions = {
  context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T
};

const sortAndFilterPaymentMethods = (paymentMethods, contribution, addedPaymentMethod, existingPaymentMethod) => {
  if (!paymentMethods) {
    return null;
  }

  const minBalance = contribution.amount.valueInCents;

  const uniquePMs = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(paymentMethods, 'id');

  const getIsDisabled = pm => pm.balance.valueInCents < minBalance; // Make sure we always include the current payment method


  if (existingPaymentMethod && !uniquePMs.some(pm => pm.id === existingPaymentMethod.id)) {
    uniquePMs.unshift(existingPaymentMethod);
  }

  uniquePMs.sort((pm1, pm2) => {
    // Put disabled PMs at the end
    if (getIsDisabled(pm1) && !getIsDisabled(pm2)) {
      return 1;
    } else if (getIsDisabled(pm2) && !getIsDisabled(pm1)) {
      return -1;
    } // If we've just added a PM, put it at the top of the list


    if (addedPaymentMethod) {
      if (addedPaymentMethod.id === pm1.id) {
        return -1;
      } else if (addedPaymentMethod.id === pm2.id) {
        return 1;
      }
    } // Put the PM that matches this recurring contribution just after the newly added


    if (existingPaymentMethod) {
      if (existingPaymentMethod.id === pm1.id) {
        return -1;
      } else if (existingPaymentMethod.id === pm2.id) {
        return 1;
      }
    }

    return 0;
  });
  return uniquePMs.map(pm => ({
    key: `pm-${pm.id}`,
    title: (0,_lib_payment_method_label__WEBPACK_IMPORTED_MODULE_15__/* .getPaymentMethodName */ .d0)(pm),
    subtitle: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__/* .getPaymentMethodMetadata */ .Og)(pm),
    icon: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_16__/* .getPaymentMethodIcon */ .AM)(pm),
    paymentMethod: pm,
    disabled: getIsDisabled(pm),
    id: pm.id,
    CollectiveId: pm.account?.id
  }));
};

const useUpdatePaymentMethod = contribution => {
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .useToasts */ .e1)();
  const [submitUpdatePaymentMethod, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(updatePaymentMethodMutation, mutationOptions);
  return {
    isSubmitting: loading,
    updatePaymentMethod: async paymentMethod => {
      const hasUpdate = !contribution.paymentMethod || paymentMethod.id !== contribution.paymentMethod.id;

      try {
        if (hasUpdate) {
          const variables = {
            order: {
              id: contribution.id
            }
          };

          if (paymentMethod.service === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_12__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
            variables.paypalSubscriptionId = paymentMethod.paypalInfo.subscriptionId;
          } else {
            variables.paymentMethod = {
              id: paymentMethod.value ? paymentMethod.value.id : paymentMethod.id
            };
          }

          await submitUpdatePaymentMethod({
            variables
          });
        }

        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
          message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "subscription.createSuccessUpdated",
            defaultMessage: [{
              "type": 0,
              "value": "Your recurring contribution has been "
            }, {
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "updated"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP
          })
        });
      } catch (error) {
        const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .getErrorFromGraphqlException */ .H1)(error).message;
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: errorMsg
        });
        return false;
      }
    }
  };
};

const UpdatePaymentMethodPopUp = ({
  contribution,
  onCloseEdit,
  loadStripe,
  account
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.useIntl)();
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .useToasts */ .e1)(); // state management

  const {
    0: showAddPaymentMethod,
    1: setShowAddPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: selectedPaymentMethod,
    1: setSelectedPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: loadingSelectedPaymentMethod,
    1: setLoadingSelectedPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const {
    0: stripe,
    1: setStripe
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: stripeElements,
    1: setStripeElements
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: newPaymentMethodInfo,
    1: setNewPaymentMethodInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: addedPaymentMethod,
    1: setAddedPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: addingPaymentMethod,
    1: setAddingPaymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    isSubmitting,
    updatePaymentMethod
  } = useUpdatePaymentMethod(contribution); // GraphQL mutations and queries

  const {
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(paymentMethodsQuery, {
    variables: {
      accountId: account.id,
      orderId: contribution.id
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_14__/* .API_V2_CONTEXT */ .T,
    fetchPolicy: 'network-only'
  });
  const [submitAddPaymentMethod] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(addCreditCardMutation, mutationOptions);
  const [submitConfirmPaymentMethodMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(confirmCreditCardMutation, mutationOptions);

  const handleAddPaymentMethodResponse = async response => {
    const {
      paymentMethod,
      stripeError
    } = response;

    if (stripeError) {
      return handleStripeError(paymentMethod, stripeError);
    } else {
      return handleSuccess(paymentMethod);
    }
  };

  const handleStripeError = async (paymentMethod, stripeError) => {
    const {
      message,
      response
    } = stripeError;

    if (!response) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: message
      });
      setAddingPaymentMethod(false);
      return false;
    }

    const stripe = await (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_17__/* .getStripe */ .d2)();
    const result = await stripe.handleCardSetup(response.setupIntent.client_secret);

    if (result.error) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: result.error.message
      });
      setAddingPaymentMethod(false);
      return false;
    } else {
      try {
        const response = await submitConfirmPaymentMethodMutation({
          variables: {
            paymentMethod: {
              id: paymentMethod.id
            }
          }
        });
        return handleSuccess(response.data.confirmCreditCard.paymentMethod);
      } catch (error) {
        addToast({
          type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: error.message
        });
        setAddingPaymentMethod(false);
        return false;
      }
    }
  };

  const handleSuccess = paymentMethod => {
    setAddingPaymentMethod(false);
    refetch();
    setAddedPaymentMethod(paymentMethod);
    setShowAddPaymentMethod(false);
    setLoadingSelectedPaymentMethod(true);
  }; // load stripe on mount


  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    loadStripe();
  }, []); // data handling

  const paymentMethods = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, 'account.paymentMethods', null);

  const existingPaymentMethod = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, 'order.paymentMethod', null);

  const filterPaymentMethodsParams = [paymentMethods, contribution, addedPaymentMethod, existingPaymentMethod];
  const paymentOptions = react__WEBPACK_IMPORTED_MODULE_6___default().useMemo(() => sortAndFilterPaymentMethods(...filterPaymentMethodsParams), filterPaymentMethodsParams);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!paymentOptions) {
      return;
    }

    if (selectedPaymentMethod === null && contribution.paymentMethod) {
      setSelectedPaymentMethod(lodash_first__WEBPACK_IMPORTED_MODULE_4___default()(paymentOptions.filter(option => option.id === contribution.paymentMethod.id)));
    } else if (addedPaymentMethod) {
      setSelectedPaymentMethod(paymentOptions.find(option => option.id === addedPaymentMethod.id));
    }

    setLoadingSelectedPaymentMethod(false);
  }, [paymentOptions, addedPaymentMethod]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      px: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
        my: 2,
        fontSize: "12px",
        textTransform: "uppercase",
        color: "black.700",
        children: showAddPaymentMethod ? intl.formatMessage(messages.addPaymentMethod) : intl.formatMessage(messages.updatePaymentMethod)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%",
          mx: 2
        })
      }), showAddPaymentMethod ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_styled_icons_boxicons_regular_Lock__WEBPACK_IMPORTED_MODULE_9__.Lock, {
        size: 20
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        size: 24,
        onClick: () => setShowAddPaymentMethod(true),
        "data-cy": "recurring-contribution-add-pm-button",
        children: "+"
      })]
    }), showAddPaymentMethod ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      px: 1,
      pt: 2,
      pb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_AddPaymentMethod__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
        order: contribution,
        isSubmitting: isSubmitting,
        setNewPaymentMethodInfo: setNewPaymentMethodInfo,
        onStripeReady: ({
          stripe,
          stripeElements
        }) => {
          setStripe(stripe);
          setStripeElements(stripeElements);
        },
        onPaypalSuccess: async paypalPaymentMethod => {
          await updatePaymentMethod(paypalPaymentMethod);
          onCloseEdit();
        }
      })
    }) : loadingSelectedPaymentMethod ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
      height: 100
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledRadioList__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .ZP, {
      id: "PaymentMethod",
      name: `${contribution.id}-PaymentMethod`,
      keyGetter: "key",
      options: paymentOptions,
      onChange: setSelectedPaymentMethod,
      value: selectedPaymentMethod?.key,
      children: ({
        radio,
        value: {
          title,
          subtitle,
          icon
        }
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(PaymentMethodBox, {
        minHeight: 50,
        py: 2,
        bg: "white.full",
        "data-cy": "recurring-contribution-pm-box",
        px: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
            as: "span",
            mr: 3,
            flexWrap: "wrap",
            children: radio
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledFlex, {
            mr: 2,
            children: icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
            flexDirection: "column",
            width: "100%",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
              fontSize: "12px",
              fontWeight: subtitle ? 600 : 400,
              color: "black.900",
              overflowWrap: "anywhere",
              children: title
            }), subtitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Text__WEBPACK_IMPORTED_MODULE_26__.P, {
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "18px",
              color: "black.500",
              overflowWrap: "anywhere",
              children: subtitle
            })]
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        flexGrow: 1,
        alignItems: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          width: "100%"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
      flexGrow: 1 / 4,
      width: 1,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 50,
      children: showAddPaymentMethod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          minWidth: 75,
          onClick: () => {
            setNewPaymentMethodInfo(null);
            onCloseEdit();
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          ml: 2,
          minWidth: 75,
          buttonSize: "tiny",
          buttonStyle: "secondary",
          disabled: newPaymentMethodInfo ? !newPaymentMethodInfo.value?.complete : true,
          type: "submit",
          loading: addingPaymentMethod,
          "data-cy": "recurring-contribution-submit-pm-button",
          onClick: async () => {
            setAddingPaymentMethod(true);

            if (!stripe) {
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
                  id: "Stripe.Initialization.Error",
                  defaultMessage: [{
                    "type": 0,
                    "value": "There was a problem initializing the payment form. Please reload the page and try again."
                  }]
                })
              });
              setAddingPaymentMethod(false);
              return false;
            }

            const cardElement = stripeElements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__.CardElement);
            const {
              token,
              error
            } = await stripe.createToken(cardElement);

            if (error) {
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: error.message
              });
              return false;
            }

            const newStripePaymentMethod = (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_17__/* .stripeTokenToPaymentMethod */ .kJ)(token);

            const newCreditCardInfo = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(newStripePaymentMethod.data, lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(newStripePaymentMethod, ['token']));

            try {
              const res = await submitAddPaymentMethod({
                variables: {
                  creditCardInfo: newCreditCardInfo,
                  name: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(newStripePaymentMethod, 'name'),
                  account: {
                    id: account.id
                  }
                }
              });
              return handleAddPaymentMethodResponse(res.data.addCreditCard);
            } catch (error) {
              const errorMsg = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .getErrorFromGraphqlException */ .H1)(error).message;
              addToast({
                type: _ToastProvider__WEBPACK_IMPORTED_MODULE_27__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
                message: errorMsg
              });
              setAddingPaymentMethod(false);
              return false;
            }
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "save",
            defaultMessage: [{
              "type": 0,
              "value": "Save"
            }]
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          buttonSize: "tiny",
          minWidth: 75,
          onClick: onCloseEdit,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          ml: 2,
          minWidth: 75,
          buttonSize: "tiny",
          buttonStyle: "secondary",
          loading: isSubmitting,
          "data-cy": "recurring-contribution-update-pm-button",
          onClick: () => updatePaymentMethod(selectedPaymentMethod).then(onCloseEdit),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedMessage, {
            id: "actions.update",
            defaultMessage: [{
              "type": 0,
              "value": "Update"
            }]
          })
        })]
      })
    })]
  });
};

UpdatePaymentMethodPopUp.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UpdatePaymentMethodPopUp",
  "props": {
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "contribution": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "onCloseEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "loadStripe": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_StripeProvider__WEBPACK_IMPORTED_MODULE_21__/* .withStripeLoader */ .kc)(UpdatePaymentMethodPopUp));

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC).withConfig({
  displayName: "UpdatePaymentMethodPopUp___StyledFlex",
  componentId: "sc-1vnnhkx-1"
})({
  flexBasis: '26px'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9941);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92476);
/* harmony import */ var _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54812);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11194);
/* harmony import */ var _components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38208);
/* harmony import */ var _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24839);
/* harmony import */ var _components_collective_page_SectionTitle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27132);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(69078);
/* harmony import */ var _components_ErrorPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(73908);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(16159);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(53169);
/* harmony import */ var _components_recurring_contributions_graphql_queries__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(19471);
/* harmony import */ var _components_recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(91849);
/* harmony import */ var _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(78720);
/* harmony import */ var _components_StyledHr__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(173);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_15__, _components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_21__, _components_recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_26__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_27__]);
([_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_15__, _components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__, _components_ErrorPage__WEBPACK_IMPORTED_MODULE_21__, _components_recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_26__, _components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default()(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z).withConfig({
  displayName: "manage-contributions__MainContainer",
  componentId: "sc-12bawki-0"
})(["max-width:", "px;margin:0 auto;"], _components_collective_page_constants__WEBPACK_IMPORTED_MODULE_18__/* .Dimensions.MAX_SECTION_WIDTH */ .Db.MAX_SECTION_WIDTH);
const MenuEntry = styled_components__WEBPACK_IMPORTED_MODULE_11___default()(_components_Link__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).withConfig({
  displayName: "manage-contributions__MenuEntry",
  componentId: "sc-12bawki-1"
})(["display:flex;align-items:center;background:white;padding:8px 12px;cursor:pointer;background:none;color:inherit;border:none;font:inherit;outline:inherit;width:100%;text-align:left;border-radius:8px;font-size:13px;", " &:hover{background:#f9f9f9;}"], props => props.$isActive && (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.css)({
  fontWeight: 800,
  backgroundColor: 'primary.100'
}));

class ManageContributionsPage extends (react__WEBPACK_IMPORTED_MODULE_5___default().Component) {
  static getInitialProps({
    query: {
      slug
    }
  }) {
    return {
      slug
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "getAdministratedAccounts", memoize_one__WEBPACK_IMPORTED_MODULE_8___default()(loggedInUser => {
      // Personal profile already includes incognito contributions
      const adminMemberships = loggedInUser?.memberOf?.filter(m => m.role === 'ADMIN' && !m.collective.isIncognito);

      const uniqMemberships = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(adminMemberships, 'collective.id');

      const groupedMemberships = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(uniqMemberships, 'collective.type');

      return lodash_mapValues__WEBPACK_IMPORTED_MODULE_2___default()(groupedMemberships, memberships => lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(memberships, 'collective.name'));
    }));
  }

  componentDidUpdate() {
    const {
      slug,
      data,
      router
    } = this.props;

    if (data && !data.loading && !data.account && slug?.startsWith('guest-')) {
      // We used to send links like `/guest-12345/recurring-contributions` by email, which caused troubles when updating the slug.
      // This redirect ensures compatibility with old links byt redirecting them to the unified page.
      // See https://github.com/opencollective/opencollective/issues/4876
      router.replace('/manage-contributions');
    }
  }

  render() {
    const {
      slug,
      data,
      intl,
      loadingLoggedInUser,
      LoggedInUser
    } = this.props;

    if (!data?.loading && !loadingLoggedInUser && LoggedInUser) {
      if (!data || data.error) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          data: data
        });
      } else if (!data.account) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_ErrorPage__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_12__/* .generateNotFoundError */ .mN)(slug),
          log: false
        });
      }
    }

    const collective = data && data.account;
    const canEditCollective = Boolean(LoggedInUser?.isAdminOfCollective(collective));
    const recurringContributions = collective && collective.orders;
    const groupedAdminOf = this.getAdministratedAccounts(LoggedInUser);
    const isAdminOfGroups = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(groupedAdminOf);
    const mainGridColumns = isAdminOfGroups ? ['1fr', '250px 1fr'] : ['1fr'];
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      disableSignup: true,
      children: loadingLoggedInUser || data?.loading && !isAdminOfGroups ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        py: [5, 6],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {})
      }) : !LoggedInUser || !data.loading && !canEditCollective ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        p: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_29__.P, {
          p: 2,
          fontSize: "16px",
          textAlign: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
            id: "RecurringContributions.permissionError",
            defaultMessage: [{
              "type": 0,
              "value": "You need to be logged in as the admin of this account to view this page."
            }]
          })
        }), !LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .ZP, {})]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_collective_navbar__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          collective: collective
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(MainContainer, {
          py: [3, 4],
          px: [2, 3, 4],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_collective_page_SectionTitle__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            textAlign: "left",
            mb: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "ManageContributions.Title",
              defaultMessage: [{
                "type": 0,
                "value": "Manage contributions"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Grid */ .rj, {
            gridTemplateColumns: mainGridColumns,
            gridGap: 32,
            mt: 4,
            children: [isAdminOfGroups && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(MenuEntry, {
                href: "/manage-contributions",
                $isActive: !slug || slug === LoggedInUser.collective.slug,
                onClick: () => {},
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
                  collective: LoggedInUser.collective,
                  size: 32
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                  ml: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "ContributionFlow.PersonalProfile",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Personal profile"
                    }]
                  })
                })]
              }), Object.entries(groupedAdminOf).map(([collectiveType, members]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_22__/* .Flex */ .kC, {
                  alignItems: "center",
                  px: 2,
                  mt: 3,
                  mb: 2,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                    fontWeight: "bold",
                    color: "black.700",
                    fontSize: "14px",
                    children: (0,_lib_i18n_collective_type__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(intl, collectiveType, 2)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                    ml: 2,
                    width: "100%",
                    borderColor: "black.300"
                  })]
                }), members.map(m => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(MenuEntry, {
                  href: `/${m.collective.slug}/manage-contributions`,
                  title: m.collective.name,
                  $isActive: slug === m.collective.slug,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
                    collective: m.collective,
                    size: 32
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_29__/* .Span */ .Dr, {
                    ml: 3,
                    truncateOverflow: true,
                    children: m.collective.name
                  })]
                }, m.id))]
              }, collectiveType))]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_recurring_contributions_RecurringContributionsContainer__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, {
              recurringContributions: recurringContributions,
              account: collective,
              isLoading: data.loading,
              displayFilters: true
            })]
          })]
        })]
      })
    });
  }

}

const addManageContributionsPageData = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__.graphql)(_components_recurring_contributions_graphql_queries__WEBPACK_IMPORTED_MODULE_25__/* .manageContributionsQuery */ .B, {
  skip: props => !props.LoggedInUser,
  options: props => ({
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T,
    variables: {
      // If slug is passed in the URL (e.g. /facebook/manage-contributions), use it.
      // Otherwise, use the slug of the LoggedInUser.
      slug: props.slug || props.LoggedInUser?.collective?.slug
    }
  })
});
ManageContributionsPage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { slug } }",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ManageContributionsPage",
  "props": {
    "slug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "tab": {
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
    "LoggedInUser": {
      "description": "",
      "type": {
        "name": "object"
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
    "router": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_9__.withRouter)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_30__/* .withUser */ .ns)((0,react_intl__WEBPACK_IMPORTED_MODULE_10__.injectIntl)(addManageContributionsPageData(ManageContributionsPage)))));
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

/***/ 33244:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillCheck");

/***/ }),

/***/ 7257:
/***/ ((module) => {

module.exports = require("@styled-icons/bootstrap/ShieldFillExclamation");

/***/ }),

/***/ 58847:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Check");

/***/ }),

/***/ 60080:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CheckCircle");

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

/***/ 77603:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/CreditCard");

/***/ }),

/***/ 95255:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Dollar");

/***/ }),

/***/ 93842:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/DotsVerticalRounded");

/***/ }),

/***/ 95019:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Envelope");

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

/***/ 11515:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Lock");

/***/ }),

/***/ 24594:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/MinusCircle");

/***/ }),

/***/ 46529:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Planet");

/***/ }),

/***/ 23263:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Plus");

/***/ }),

/***/ 43891:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Receipt");

/***/ }),

/***/ 60476:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Support");

/***/ }),

/***/ 99232:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/Undo");

/***/ }),

/***/ 9126:
/***/ ((module) => {

module.exports = require("@styled-icons/boxicons-regular/XCircle");

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

/***/ 54427:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Paypal");

/***/ }),

/***/ 64374:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Slack");

/***/ }),

/***/ 14638:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-brands/Twitter");

/***/ }),

/***/ 81594:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Ban");

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

/***/ 87584:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/MoneyCheckAlt");

/***/ }),

/***/ 77192:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Plus");

/***/ }),

/***/ 26201:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Redo");

/***/ }),

/***/ 97881:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/Times");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("@styled-icons/fa-solid/University");

/***/ }),

/***/ 56758:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/AlertTriangle");

/***/ }),

/***/ 62941:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowLeft");

/***/ }),

/***/ 22198:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ArrowRight");

/***/ }),

/***/ 61975:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Calendar");

/***/ }),

/***/ 89711:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown");

/***/ }),

/***/ 87208:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronDown/ChevronDown");

/***/ }),

/***/ 76841:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp");

/***/ }),

/***/ 29872:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/ChevronUp/ChevronUp");

/***/ }),

/***/ 57847:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Download");

/***/ }),

/***/ 40710:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/FileText");

/***/ }),

/***/ 57153:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Info");

/***/ }),

/***/ 67520:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Maximize2");

/***/ }),

/***/ 75827:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/MessageSquare");

/***/ }),

/***/ 62556:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/PlusCircle");

/***/ }),

/***/ 52021:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Settings");

/***/ }),

/***/ 72142:
/***/ ((module) => {

module.exports = require("@styled-icons/feather/Trash2");

/***/ }),

/***/ 73949:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/Blog");

/***/ }),

/***/ 21522:
/***/ ((module) => {

module.exports = require("@styled-icons/icomoon/PriceTags");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("@styled-icons/ionicons-solid/Expand");

/***/ }),

/***/ 80950:
/***/ ((module) => {

module.exports = require("@styled-icons/material/AttachMoney");

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

/***/ 33651:
/***/ ((module) => {

module.exports = require("@styled-icons/material/Settings");

/***/ }),

/***/ 95830:
/***/ ((module) => {

module.exports = require("@styled-icons/material/ShowChart");

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

/***/ 38164:
/***/ ((module) => {

module.exports = require("@styled-icons/remix-line/Stack");

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

/***/ 28109:
/***/ ((module) => {

module.exports = require("file-saver");

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

/***/ 90857:
/***/ ((module) => {

module.exports = require("lodash/endsWith");

/***/ }),

/***/ 76918:
/***/ ((module) => {

module.exports = require("lodash/find");

/***/ }),

/***/ 25359:
/***/ ((module) => {

module.exports = require("lodash/findLastIndex");

/***/ }),

/***/ 22265:
/***/ ((module) => {

module.exports = require("lodash/first");

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

/***/ 41238:
/***/ ((module) => {

module.exports = require("lodash/includes");

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

/***/ 48524:
/***/ ((module) => {

module.exports = require("lodash/isNull");

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

/***/ 53707:
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ 9941:
/***/ ((module) => {

module.exports = require("lodash/mapValues");

/***/ }),

/***/ 36625:
/***/ ((module) => {

module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

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

/***/ 71156:
/***/ ((module) => {

module.exports = require("lodash/size");

/***/ }),

/***/ 23672:
/***/ ((module) => {

module.exports = require("lodash/sortBy");

/***/ }),

/***/ 35007:
/***/ ((module) => {

module.exports = require("lodash/startCase");

/***/ }),

/***/ 79800:
/***/ ((module) => {

module.exports = require("lodash/sumBy");

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

/***/ 73022:
/***/ ((module) => {

module.exports = require("lodash/upperCase");

/***/ }),

/***/ 57260:
/***/ ((module) => {

module.exports = require("lodash/values");

/***/ }),

/***/ 22217:
/***/ ((module) => {

module.exports = require("lodash/without");

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

/***/ 37597:
/***/ ((module) => {

module.exports = require("react-text-mask");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5675,7079,2328,5656,8101,2352,7278,5582,3169,3908,4842,9156,7262,1433,1808,1012,2631,7619,7632,2143,986,242,3129,8185,5993,7965,9468,8720,7772,8208,414,9528], () => (__webpack_exec__(78246)));
module.exports = __webpack_exports__;

})();