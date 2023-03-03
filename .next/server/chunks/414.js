"use strict";
exports.id = 414;
exports.ids = [414,9936,6718,1499];
exports.modules = {

/***/ 82497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82525);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const TranslatedTags = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ASSOCIATION */ .B3.ASSOCIATION]: {
    id: "collective.category.association",
    defaultMessage: [{
      "type": 0,
      "value": "Association"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COLLECTIVE */ .B3.COLLECTIVE]: {
    id: "Collective",
    defaultMessage: [{
      "type": 0,
      "value": "Collective"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.CONFERENCE */ .B3.CONFERENCE]: {
    id: "Tags.CONFERENCE",
    defaultMessage: [{
      "type": 0,
      "value": "Conference"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.COOPERATIVE */ .B3.COOPERATIVE]: {
    id: "collective.category.coop",
    defaultMessage: [{
      "type": 0,
      "value": "Cooperative"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.OPEN_SOURCE */ .B3.OPEN_SOURCE]: {
    id: "Tags.OPEN_SOURCE",
    defaultMessage: [{
      "type": 0,
      "value": "Open source"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEDIA */ .B3.MEDIA]: {
    id: "Tags.MEDIA",
    defaultMessage: [{
      "type": 0,
      "value": "Media"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MEETUP */ .B3.MEETUP]: {
    id: "collective.category.meetup",
    defaultMessage: [{
      "type": 0,
      "value": "Meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.MOVEMENT */ .B3.MOVEMENT]: {
    id: "collective.category.movement",
    defaultMessage: [{
      "type": 0,
      "value": "Movement"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.POLITICS */ .B3.POLITICS]: {
    id: "Tags.POLITICS",
    defaultMessage: [{
      "type": 0,
      "value": "Politics"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.TECH_MEETUP */ .B3.TECH_MEETUP]: {
    id: "Tags.TECH_MEETUP",
    defaultMessage: [{
      "type": 0,
      "value": "Tech meetup"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.US_NONPROFIT */ .B3.US_NONPROFIT]: {
    id: "Tags.US_NONPROFIT",
    defaultMessage: [{
      "type": 0,
      "value": "US nonprofit"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.EVENT */ .B3.EVENT]: {
    id: "ContributionType.Event",
    defaultMessage: [{
      "type": 0,
      "value": "Event"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.USER */ .B3.USER]: {
    id: "Tags.USER",
    defaultMessage: [{
      "type": 0,
      "value": "User"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.ORGANIZATION */ .B3.ORGANIZATION]: {
    id: "Tags.ORGANIZATION",
    defaultMessage: [{
      "type": 0,
      "value": "Organization"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.FUND */ .B3.FUND]: {
    id: "Tags.FUND",
    defaultMessage: [{
      "type": 0,
      "value": "Fund"
    }]
  },
  [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_2__/* .CollectiveCategory.PROJECT */ .B3.PROJECT]: {
    id: "ContributionType.Project",
    defaultMessage: [{
      "type": 0,
      "value": "Project"
    }]
  }
});
/** Translates a list of tags */

class I18nCollectiveTags extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      intl,
      children,
      tags,
      ignoreUntranslated
    } = this.props;
    const tagsToTranslate = typeof tags === 'string' ? [tags] : tags;
    const processedTags = tagsToTranslate.map(tag => {
      if (TranslatedTags[tag]) {
        return {
          value: intl.formatMessage(TranslatedTags[tag]),
          isTranslated: true
        };
      } else {
        return {
          value: tag,
          isTranslated: false
        };
      }
    });
    return children(ignoreUntranslated ? processedTags.filter(t => t.isTranslated) : processedTags);
  }

}

_defineProperty(I18nCollectiveTags, "defaultProps", {
  ignoreUntranslated: false,

  /** Default renderer, will render a string list */
  children: tags => {
    return tags.map((tag, index, translatedTags) => {
      if (index === translatedTags.length - 1) {
        return tag.value;
      } else {
        return `${tag.value}, `;
      }
    });
  }
});

I18nCollectiveTags.__docgenInfo = {
  "description": "Translates a list of tags",
  "methods": [],
  "displayName": "I18nCollectiveTags",
  "props": {
    "ignoreUntranslated": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Ignore tags if translation is missing",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "defaultValue": {
        "value": "tags => {\n  return tags.map((tag, index, translatedTags) => {\n    if (index === translatedTags.length - 1) {\n      return tag.value;\n    } else {\n      return `${tag.value}, `;\n    }\n  });\n}",
        "computed": false
      },
      "description": "A function used to render the tag",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "tags": {
      "description": "A tag or a list of tags",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "arrayOf",
          "value": {
            "name": "string"
          }
        }]
      },
      "required": true
    },
    "intl": {
      "description": "@ignore",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(I18nCollectiveTags));

/***/ }),

/***/ 86501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22133);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21825);
/* harmony import */ var _styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1808);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41433);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const StyledCardElement = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement).withConfig({
  displayName: "NewCreditCardForm__StyledCardElement",
  componentId: "sc-1uxtg2h-0"
})(["min-width:200px;max-width:450px;max-height:55px;margin:0px;border-width:1px;border-style:solid;border-color:rgb(204,204,204);border-image:initial;padding:1rem;border-radius:3px;"]);
StyledCardElement.defaultProps = {
  style: {
    base: {
      fontSize: '14px',
      color: '#313233'
    }
  }
};

class NewCreditCardFormWithoutStripe extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: null,
      showAllErrors: false
    });

    _defineProperty(this, "onCheckboxChange", e => {
      if (this.props.useLegacyCallback) {
        this.props.onChange(e);
      } else {
        this.setState(({
          value
        }) => ({
          value: _objectSpread(_objectSpread({}, value), {}, {
            isSavedForLater: e.checked
          })
        }), () => this.props.onChange(this.state.value));
      }
    });

    _defineProperty(this, "onCardChange", e => {
      const {
        useLegacyCallback,
        onChange,
        defaultIsSaved
      } = this.props;
      this.setState({
        showAllErrors: false
      });

      if (useLegacyCallback) {
        onChange({
          name,
          type: 'StripeCreditCard',
          value: e
        });
      } else {
        this.setState(({
          value
        }) => ({
          value: _objectSpread(_objectSpread({}, value), {}, {
            service: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__/* .PAYMENT_METHOD_SERVICE.STRIPE */ .tp.STRIPE,
            type: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_6__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD,
            isSavedForLater: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(value?.isSavedForLater) || value.isSavedForLater ? defaultIsSaved : false,
            stripeData: e
          })
        }), () => onChange(this.state.value));
      }
    });
  }

  componentDidMount() {
    if (this.props.onReady && this.props.stripe) {
      this.props.onReady({
        stripe: this.props.stripe,
        stripeElements: this.props.stripeElements
      });
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.onReady && !oldProps.stripe && this.props.stripe) {
      this.props.onReady({
        stripe: this.props.stripe,
        stripeElements: this.props.stripeElements
      });
    }
  }

  getError() {
    if (this.props.error) {
      return this.props.error;
    } else if (this.state.showAllErrors && this.state.value?.stripeData) {
      const {
        stripeData
      } = this.state.value;

      if (!stripeData.complete) {
        if (!this.props.hidePostalCode && !stripeData.value?.postalCode) {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "NewCreditCardForm.PostalCode",
            defaultMessage: [{
              "type": 0,
              "value": "Credit card ZIP code and CVC are required"
            }]
          });
        }
      }
    }
  }

  render() {
    const {
      hasSaveCheckBox,
      hidePostalCode,
      defaultIsSaved
    } = this.props;
    const error = this.getError();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexDirection: "column",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(StyledCardElement, {
        options: {
          hidePostalCode
        },
        onReady: input => input.focus(),
        onChange: this.onCardChange,
        onBlur: () => this.setState({
          showAllErrors: true
        })
      }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
        display: "block",
        color: "red.500",
        pt: 2,
        fontSize: "10px",
        children: error
      }), hasSaveCheckBox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
        mt: 3,
        alignItems: "center",
        color: "black.700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          defaultChecked: defaultIsSaved,
          name: "save",
          onChange: this.onCheckboxChange,
          label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "paymentMethod.save",
            defaultMessage: [{
              "type": 0,
              "value": "Remember this payment method"
            }]
          })
        }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
            fontWeight: "normal",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "ContributeFAQ.Safe",
              defaultMessage: [{
                "type": 0,
                "value": "Open Collective doesn't store sensitive payment data (e.g. Credit Card numbers), instead relying on our payment processor, Stripe, a secure solution that is widely adopted. If our systems are compromised, your payment information is not at risk, because we simply don't store it. "
              }, {
                "type": 8,
                "value": "LearnMoreLink",
                "children": [{
                  "type": 0,
                  "value": "Learn more"
                }]
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                LearnMoreLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)({
                  openInNewTab: true,
                  href: 'https://docs.opencollective.com/help/product/security#payments-security'
                })
              }
            })
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_3__.Question, {
            size: "1.1em"
          })
        })]
      })]
    });
  }

}

_defineProperty(NewCreditCardFormWithoutStripe, "defaultProps", {
  hasSaveCheckBox: true,
  hidePostalCode: false,
  defaultIsSaved: true
});

const NewCreditCardForm = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.ElementsConsumer, {
  children: ({
    stripe,
    elements
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(NewCreditCardFormWithoutStripe, _objectSpread({
    stripe: stripe,
    stripeElements: elements
  }, props))
});

NewCreditCardForm.defaultProps = {
  useLegacyCallback: true
};
NewCreditCardForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NewCreditCardForm",
  "props": {
    "useLegacyCallback": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.injectIntl)(NewCreditCardForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PayWithPaypalButton)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(29114);
// EXTERNAL MODULE: external "@apollo/client/react/hoc"
var hoc_ = __webpack_require__(95159);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./lib/constants/intervals.js
var intervals = __webpack_require__(80642);
// EXTERNAL MODULE: ./lib/env-utils.js
var env_utils = __webpack_require__(9269);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(40113);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
;// CONCATENATED MODULE: ./lib/paypal.js


let latestPayPalParams = {};
/**
 * Unlike the previous SDK, we need to pass some info about the contribution
 * when we load the script, which implies that we have to reload it when one of the parameters
 * changes.
 */

const mustReloadScript = params => {
  return !isEqual_default()(params, latestPayPalParams);
};
/**
 * New PayPal SDK
 *
 * @param params {object}:
 *    - clientId {string}
 *    - currency {string}
 *    - intent {capture|subscription}
 */


const getPaypal = async params => {
  if (typeof window.paypal === 'undefined' || mustReloadScript(params)) {
    // Remove existing script if there's one
    document.querySelectorAll('script[src^="https://www.paypal.com/sdk/js"]').forEach(node => node.remove());
    window.paypal = null; // Load new script

    const url = new URL('https://www.paypal.com/sdk/js');
    url.searchParams.set('client-id', params.clientId);
    url.searchParams.set('currency', params.currency);
    url.searchParams.set('intent', params.intent);
    url.searchParams.set('disable-funding', 'credit,card');
    url.searchParams.set('vault', 'true');
    await (0,utils/* loadScriptAsync */.SH)(url.href, {
      attrs: {
        'data-csp-nonce': window.__NEXT_DATA__.cspNonce
      }
    });
    latestPayPalParams = params;
  }

  return window.paypal;
};


// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/PayWithPaypalButton.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const PaypalButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "PayWithPaypalButton__PaypalButtonContainer",
  componentId: "sc-5g5lrk-0"
})(["", ""], props => props.isLoading && (0,external_styled_components_.css)([".paypal-buttons{display:none !important;}"]));
/**
 * Encapsulate Paypal button logic so we don't have to deal with refs in parent
 * components.
 */

class PayWithPaypalButton extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "isRecurring", () => {
      return [intervals["default"].month, intervals["default"].year].includes(this.props.interval);
    });

    this.paypalTarget = /*#__PURE__*/external_react_default().createRef();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(oldProps) {
    if (Boolean(this.props.interval) !== Boolean(oldProps.interval) || Boolean(oldProps.data?.loading) !== Boolean(this.props.data?.loading) || this.props.currency !== oldProps.currency) {
      this.initialize();
    }
  }

  async initialize() {
    if (!this.state.isLoading) {
      this.setState({
        isLoading: true
      });
    } // If using subscriptions, wait for to plan to be loaded


    const isRecurring = this.isRecurring();

    if (isRecurring && (this.props.data?.loading || !this.props.data?.paypalPlan)) {
      return;
    } // Make sure we cleanup any pre-existing button


    this.paypalTarget.current.innerHTML = ''; // Initialize button

    const {
      host,
      currency
    } = this.props;
    const clientId = host.paypalClientId;
    const intent = isRecurring ? 'subscription' : 'authorize';
    const paypal = await getPaypal({
      clientId,
      currency,
      intent
    });
    const options = this.getOptions();
    paypal.Buttons(options).render(this.paypalTarget.current);
    this.setState({
      isLoading: false
    });
  }

  getOptions() {
    const options = {
      env: (0,env_utils/* getEnvVar */.p)('PAYPAL_ENVIRONMENT'),
      style: _objectSpread(_objectSpread({}, PayWithPaypalButton.defaultStyle), this.props.style),
      onError: () => this.props.onError?.({
        message: this.props.intl.formatMessage({
          id: "PyJNQd",
          defaultMessage: [{
            "type": 0,
            "value": "There was an error while initializing the PayPal checkout"
          }]
        })
      })
    };
    /* eslint-disable camelcase */

    if (this.isRecurring()) {
      options.intent = 'subscription';

      options.createSubscription = (data, actions) => {
        return actions.subscription.create({
          plan_id: this.props.data.paypalPlan.id,
          start_time: this.props.subscriptionStartDate,
          application_context: {
            brand_name: `${this.props.collective.name} - Open Collective`,
            locale: this.props.intl.locale,
            shipping_preference: 'NO_SHIPPING',
            user_action: 'CONTINUE'
          }
        });
      };

      options.onApprove = data => {
        this.props.onSuccess({
          subscriptionId: data.subscriptionID
        });
      };
    } else {
      options.intent = 'authorize';

      options.createOrder = (data, actions) => {
        return actions.order.create({
          intent: 'AUTHORIZE',
          application_context: {
            brand_name: `${this.props.collective.name} - Open Collective`,
            locale: this.props.intl.locale,
            shipping_preference: 'NO_SHIPPING',
            user_action: 'CONTINUE'
          },
          purchase_units: [{
            amount: {
              value: (this.props.totalAmount / 100).toString(),
              currency_code: this.props.currency
            }
          }]
        });
      };

      options.onApprove = result => {
        this.props.onSuccess({
          orderId: result.orderID
        });
      };
    }
    /* eslint-enable camelcase */


    return options;
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PaypalButtonContainer, {
      "data-cy": "paypal-container",
      isLoading: this.state.isLoading || this.props.isSubmitting,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        "data-cy": "paypal-target",
        ref: this.paypalTarget
      }), this.state.isLoading ? /*#__PURE__*/jsx_runtime_.jsx(LoadingPlaceholder/* default */.Z, {
        height: (this.props.style?.height || 47) + 3,
        minWidth: "70px",
        borderRadius: 100
      }) : this.props.isSubmitting ? /*#__PURE__*/jsx_runtime_.jsx(StyledButton/* default */.Z, {
        height: this.props.style?.height || 47,
        p: 0,
        minWidth: "70px",
        width: "100%",
        buttonStyle: "primary",
        background: "#0070ba",
        loading: true
      }) : null]
    });
  }

}

_defineProperty(PayWithPaypalButton, "defaultStyle", {
  color: 'blue',
  tagline: false,
  label: 'pay',
  shape: 'pill',
  layout: 'horizontal'
});

const paypalPlanQuery = client_.gql`
  query PaypalPlanQuery(
    $account: AccountReferenceInput!
    $tier: TierReferenceInput
    $amount: AmountInput!
    $frequency: ContributionFrequency!
  ) {
    paypalPlan(account: $account, tier: $tier, amount: $amount, frequency: $frequency) {
      id
    }
  }
`;
const addPaypalPlan = (0,hoc_.graphql)(paypalPlanQuery, {
  // We only need a plan if using an interval
  skip: props => !props.interval || props.interval === intervals["default"].oneTime,
  options: props => ({
    context: helpers/* API_V2_CONTEXT */.T,
    variables: {
      account: {
        id: props.collective.id
      },
      tier: props.tier ? {
        id: props.tier.id
      } : null,
      frequency: (0,intervals.getGQLV2FrequencyFromInterval)(props.interval),
      amount: {
        valueInCents: props.totalAmount,
        currency: props.currency
      }
    }
  })
});
PayWithPaypalButton.__docgenInfo = {
  "description": "Encapsulate Paypal button logic so we don't have to deal with refs in parent\ncomponents.",
  "methods": [{
    "name": "isRecurring",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "initialize",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "getOptions",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "PayWithPaypalButton",
  "props": {
    "totalAmount": {
      "description": "Total amount to pay in cents",
      "type": {
        "name": "number"
      },
      "required": true
    },
    "currency": {
      "description": "The currency used for this order",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "interval": {
      "description": "",
      "type": {
        "name": "string"
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
    "onSuccess": {
      "description": "Called when user authorize the payment with a payment method generated from PayPal data",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onCancel": {
      "description": "Called when user cancel paypal flow",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onError": {
      "description": "Called when an error is thrown during paypal flow",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onClick": {
      "description": "Called when the button is clicked",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "style": {
      "description": "Styles to apply to the button. See https://developer.paypal.com/docs/checkout/how-to/customize-button/#button-styles",
      "type": {
        "name": "shape",
        "value": {
          "color": {
            "name": "enum",
            "value": [{
              "value": "'gold'",
              "computed": false
            }, {
              "value": "'blue'",
              "computed": false
            }, {
              "value": "'silver'",
              "computed": false
            }, {
              "value": "'white'",
              "computed": false
            }, {
              "value": "'black'",
              "computed": false
            }],
            "required": false
          },
          "shape": {
            "name": "enum",
            "value": [{
              "value": "'pill'",
              "computed": false
            }, {
              "value": "'rect'",
              "computed": false
            }],
            "required": false
          },
          "size": {
            "name": "enum",
            "value": [{
              "value": "'small'",
              "computed": false
            }, {
              "value": "'medium'",
              "computed": false
            }, {
              "value": "'large'",
              "computed": false
            }, {
              "value": "'responsive'",
              "computed": false
            }],
            "required": false
          },
          "height": {
            "name": "number",
            "required": false
          },
          "label": {
            "name": "enum",
            "value": [{
              "value": "'checkout'",
              "computed": false
            }, {
              "value": "'credit'",
              "computed": false
            }, {
              "value": "'pay'",
              "computed": false
            }, {
              "value": "'buynow'",
              "computed": false
            }, {
              "value": "'paypal'",
              "computed": false
            }, {
              "value": "'installment'",
              "computed": false
            }],
            "required": false
          },
          "tagline": {
            "name": "bool",
            "required": false
          },
          "layout": {
            "name": "enum",
            "value": [{
              "value": "'horizontal'",
              "computed": false
            }, {
              "value": "'vertical'",
              "computed": false
            }],
            "required": false
          },
          "funding": {
            "name": "shape",
            "value": {
              "allowed": {
                "name": "array",
                "required": false
              },
              "disallowed": {
                "name": "array",
                "required": false
              }
            },
            "required": false
          },
          "fundingicons": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    },
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "legacyId": {
            "name": "number",
            "required": false
          },
          "paypalClientId": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          }
        }
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
    "intl": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "subscriptionStartDate": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_PayWithPaypalButton = (addPaypalPlan((0,external_react_intl_.injectIntl)(PayWithPaypalButton)));

/***/ }),

/***/ 41499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kc": () => (/* binding */ withStripeLoader)
/* harmony export */ });
/* unused harmony export StripeLoaderContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79936);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const StripeLoaderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  isStripeLoaded: false,

  loadStripe() {}

});
/**
 * A wrapPropTypesper around StriperProvider context that loads the external script
 * on the client.
 */

class StripeProvider extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadStripe", async () => {
      if (this.state.loading || this.state.isStripeLoaded) {
        return;
      }

      this.setState({
        loading: true
      });
      const stripe = await (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_2__/* .getStripe */ .d2)(this.props.token);
      this.setState({
        stripe,
        loading: false,
        isStripeLoaded: true
      });
    });

    this.state = {
      loading: false,
      stripe: null
    };
  }

  async componentDidMount() {
    if (this.props.loadOnMount) {
      await this.loadStripe();
    }
  }
  /**
   * Loads stripe asynchronously, then update the Stripe context
   */


  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StripeLoaderContext.Provider, {
      value: {
        loadStripe: this.loadStripe,
        isStripeLoaded: this.state.isStripeLoaded
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.Elements, _objectSpread({
        stripe: this.state.stripe
      }, this.props))
    });
  }

}

const {
  Consumer: StripeConsumer
} = StripeLoaderContext;
const withStripeLoader = WrappedComponent => {
  const withStripeLoader = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StripeConsumer, {
    children: context => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(WrappedComponent, _objectSpread(_objectSpread({}, context), props))
  });

  withStripeLoader.getInitialProps = async context => {
    return WrappedComponent.getInitialProps ? await WrappedComponent.getInitialProps(context) : {};
  };

  return withStripeLoader;
};
StripeProvider.__docgenInfo = {
  "description": "A wrapPropTypesper around StriperProvider context that loads the external script\non the client.",
  "methods": [{
    "name": "loadStripe",
    "docblock": "Loads stripe asynchronously, then update the Stripe context",
    "modifiers": ["async"],
    "params": [],
    "returns": null,
    "description": "Loads stripe asynchronously, then update the Stripe context"
  }],
  "displayName": "StripeProvider",
  "props": {
    "loadOnMount": {
      "description": "If we should automatically load stripe JS on mount (useful for styledguidest)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "token": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeProvider);

/***/ }),

/***/ 41216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5700);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82497);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97619);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19156);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36422);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

const _excluded = ["collective", "tag", "bodyHeight", "children", "borderRadius", "showWebsite", "useLink"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const MaskSVG = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  width: "216",
  height: "94",
  fill: "none",
  version: "1.1",
  viewBox: "0 0 216 94"
}, props), {}, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("mask", {
      width: "218",
      height: "106",
      x: "-1",
      y: "-1",
      maskUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        fill: "#fff",
        d: "M0 8a8 8 0 018-8h200a8 8 0 018 8v95.719H0V8z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        stroke: "#141414",
        strokeOpacity: "0.08",
        d: "M216 104.219h.5V8A8.5 8.5 0 00208-.5H8A8.5 8.5 0 00-.5 8v96.219H216z"
      })]
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
      fill: "#fff",
      fillOpacity: "1",
      strokeWidth: "1.019",
      d: "M-29.076-51.033V94.016h350.922v-145.05zm7.889 10.678h320.992v122.23l-30.217.016C148.917 81.89 42.4 33.48-21.188-40.355z",
      clipPath: "none",
      opacity: "1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("g", {
      fillRule: "evenodd",
      stroke: "#000",
      clipRule: "evenodd",
      opacity: "0.256",
      transform: "translate(-.473 -2.219)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M154.819 85.253a1.097 1.097 0 10.242-2.18 1.097 1.097 0 10-.242 2.18z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M136.433 82.941a.825.825 0 10.184-1.64.825.825 0 00-.184 1.64z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M203.299 87.726a1.474 1.474 0 001.628-1.3 1.473 1.473 0 00-1.303-1.625 1.471 1.471 0 10-.325 2.925z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M114.367 70.557a1.883 1.883 0 002.08-1.66 1.881 1.881 0 00-1.665-2.076 1.88 1.88 0 10-.415 3.737z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M186.109 83.318a2.378 2.378 0 10.525-4.726 2.381 2.381 0 00-2.63 2.101 2.379 2.379 0 002.105 2.625z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M143.791 80.918a2.919 2.919 0 003.224-2.574 2.916 2.916 0 00-2.58-3.217 2.919 2.919 0 00-3.224 2.575 2.916 2.916 0 002.58 3.216z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M212.607 84.193a3.386 3.386 0 003.74-2.987 3.382 3.382 0 00-2.993-3.732 3.385 3.385 0 00-3.74 2.987 3.382 3.382 0 002.993 3.732z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M163.805 82.538c3.205.354 6.092-1.951 6.447-5.15a5.83 5.83 0 00-5.16-6.433c-3.205-.355-6.091 1.95-6.446 5.149a5.829 5.829 0 005.159 6.434z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M128.729 71.28c3.205.355 6.092-1.95 6.447-5.149a5.83 5.83 0 00-5.16-6.434 5.837 5.837 0 00-6.447 5.15 5.83 5.83 0 005.16 6.433z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M66.675 52.908a1.1 1.1 0 001.456-.543 1.1 1.1 0 00-2-.909 1.096 1.096 0 00.544 1.452z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M53.207 44.413a.824.824 0 10.685-1.5.824.824 0 10-.685 1.5z",
        opacity: "0.4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M91.587 58.032c.946.43 2.063.013 2.494-.931a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.934 2.49z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M49.346 37.675c.947.43 2.064.013 2.495-.932a1.878 1.878 0 00-.933-2.49 1.885 1.885 0 00-2.495.932 1.878 1.878 0 00.933 2.49z",
        opacity: "0.56"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M78.377 55.988a3.142 3.142 0 004.158-1.553 3.13 3.13 0 00-1.556-4.149 3.142 3.142 0 00-4.158 1.553 3.13 3.13 0 001.556 4.15z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M60.83 44.779a2.922 2.922 0 003.867-1.444 2.911 2.911 0 00-1.447-3.86 2.922 2.922 0 00-3.867 1.445 2.911 2.911 0 001.447 3.859z",
        opacity: "0.8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M101.667 57.106a4.87 4.87 0 006.445-2.407 4.853 4.853 0 00-2.412-6.432 4.87 4.87 0 00-6.445 2.407 4.852 4.852 0 002.412 6.432z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M72.624 47.481a5.844 5.844 0 007.734-2.888 5.822 5.822 0 00-2.895-7.718 5.844 5.844 0 00-7.733 2.888 5.822 5.822 0 002.894 7.718z"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
        d: "M49.527 30.937a5.844 5.844 0 007.734-2.889 5.822 5.822 0 00-2.894-7.718 5.844 5.844 0 00-7.734 2.889 5.822 5.822 0 002.894 7.718z"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
      fill: "#000",
      stroke: "#d7dbe0",
      d: "M299.255-21.884v-.6c-21.806-.021-46.554-.047-72.687-.075-83.118-.088-180.234-.191-241.156-.192C7.777 6.713 53.995 31.648 99.682 50.092c46.031 18.583 91.412 30.534 111.052 33.881 13.3 2.267 32.194 2.943 49.455 2.397 8.627-.273 16.833-.85 23.715-1.684 6.667-.808 12.04-1.85 15.351-3.068V-18.991z",
      opacity: "0.063"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("path", {
      fill: "#000",
      stroke: "#c0c5cc",
      d: "M15.177 4.672c-12.039-9.276-19.48-21.62-16.53-37.18 12.985-.001 57.111-.049 108.753-.104l33.53-.037c65.42-.07 134.576-.14 164.911-.14v58.76c0 .942.247 2.058.644 3.295.4 1.243.963 2.642 1.62 4.158.513 1.185 1.08 2.438 1.675 3.75.937 2.067 1.942 4.283 2.904 6.614 3.141 7.611 5.693 16.147 3.643 23.681-2.028 7.45-8.62 14.098-24.231 17.838-15.628 3.744-40.181 4.537-77.885.323-37.237-4.162-66.277-17.735-90.837-31.272-5.346-2.946-10.491-5.898-15.464-8.75-6.43-3.688-12.57-7.211-18.484-10.344-10.503-5.563-20.374-9.944-30.062-11.925-15.249-3.119-32.031-9.301-44.187-18.667z",
      opacity: "0.06"
    })]
  })]
}));

const StyledBackgroundMask = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MaskSVG).withConfig({
  displayName: "StyledCollectiveCard__StyledBackgroundMask",
  componentId: "sc-10dx9zk-0"
})(["width:101%;height:102%;top:0;left:-1px;position:absolute;"]);

const getBackground = collective => {
  const parent = collective.parentCollective || collective.parent;
  const backgroundImage = collective.backgroundImageUrl || parent?.backgroundImageUrl;

  const primaryColor = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective.settings, 'collectivePage.primaryColor', '#1776E1');

  return backgroundImage ? `url(${backgroundImage}) 0 0 / cover no-repeat, ${primaryColor}` : primaryColor;
};

const CollectiveContainer = ({
  useLink,
  collective,
  children
}) => {
  if (useLink) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      collective: collective,
      children: children
    });
  } else {
    return children;
  }
};

/**
 * A card to show a collective that supports including a custom body.
 */
const StyledCollectiveCard = _ref => {
  let {
    collective,
    tag,
    bodyHeight,
    children,
    borderRadius,
    showWebsite,
    useLink
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    "data-cy": `${collective.slug}-collective-card`
  }, props), {}, {
    position: "relative",
    borderRadius: borderRadius,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "absolute",
      width: "95%",
      right: "0",
      pt: "41.25%",
      style: {
        background: getBackground(collective),
        filter: collective.isFrozen ? 'grayscale(1)' : undefined
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StyledBackgroundMask, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      position: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        height: 74,
        px: 3,
        pt: 26,
        style: {
          filter: collective.isFrozen ? 'grayscale(1)' : undefined
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          borderRadius: borderRadius,
          background: "white",
          width: 48,
          border: "3px solid white",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
              "data-cy": "collective-avatar",
              collective: collective,
              radius: 48
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: bodyHeight,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          p: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(CollectiveContainer, {
            useLink: useLink,
            collective: collective,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
              mt: 3,
              fontSize: "16px",
              fontWeight: "bold",
              color: "black.800",
              title: collective.name,
              truncateOverflow: true,
              children: collective.name
            })
          }), showWebsite && collective.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
            fontSize: "11px",
            fontWeight: "400",
            title: collective.website,
            truncateOverflow: true,
            mt: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              color: "black.600",
              href: collective.website,
              openInNewTabNoFollow: true,
              children: collective.website
            })
          }), collective.isFrozen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            display: "inline-block",
            variant: "rounded-right",
            my: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              tags: intl.formatMessage({
                id: "gDbURz",
                defaultMessage: [{
                  "type": 0,
                  "value": "This Collective is frozen"
                }]
              })
            })
          }) : tag === undefined ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            display: "inline-block",
            variant: "rounded-right",
            my: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_I18nCollectiveTags__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              tags: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_4__/* .getCollectiveMainTag */ .CJ)(lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(collective, 'host.id'), collective.tags, collective.type)
            })
          }) : tag]
        }), children]
      })]
    })]
  }));
};

StyledCollectiveCard.defaultProps = {
  bodyHeight: 260,
  borderRadius: 16,
  useLink: true
};
StyledCollectiveCard.__docgenInfo = {
  "description": "A card to show a collective that supports including a custom body.",
  "methods": [],
  "displayName": "StyledCollectiveCard",
  "props": {
    "bodyHeight": {
      "defaultValue": {
        "value": "260",
        "computed": false
      },
      "description": "A fixed height for the content",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "borderRadius": {
      "defaultValue": {
        "value": "16",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "useLink": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "Displayed below the top header of the card",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "tag": {
      "description": "To replace the default tag. Set to `null` to hide tag",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "The collective to display",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": true
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "backgroundImageUrl": {
            "name": "string",
            "required": false
          },
          "website": {
            "name": "string",
            "required": false
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "union",
                "value": [{
                  "name": "number"
                }, {
                  "name": "string"
                }],
                "required": false
              }
            },
            "required": false
          },
          "parentCollective": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "backgroundImageUrl": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "isFrozen": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "showWebsite": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)(StyledCollectiveCard));

/***/ }),

/***/ 36718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getKeyExtractor, getItems */
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22133);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76918);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);


const _excluded = ["children", "id", "name", "onChange", "options", "keyGetter", "disabled", "containerProps", "labelProps", "radioSize", "data-cy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Returns a function that will return a unique key from iteratee. As we rely on
 * <input/> only a string key is valid.
 *
 * @param {array|object} options: an options iterable
 * @param {string|function} keyGetter: a key to get value from, or an extract func
 */



const getKeyExtractor = (options, keyGetter) => {
  if (typeof keyGetter === 'function') {
    return item => keyGetter(item).toString();
  } else if (typeof keyGetter === 'string') {
    return item => item[keyGetter].toString();
  } else if (Array.isArray(options)) {
    return item => item.toString();
  } else {
    return (_item, key) => key.toString();
  }
};
const RadioInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default().input.withConfig({
  displayName: "StyledRadioList__RadioInput",
  componentId: "sc-vf87vx-0"
})(["", " &[type='radio']{margin:0;cursor:pointer;&:focus{outline:none;filter:drop-shadow(0px 0px 4px ", ");}}"], styled_system__WEBPACK_IMPORTED_MODULE_4__.size, props => props.theme.colors.primary[500]);
/**
 * Convert a list of items to an object like {key, value} to be used in selects
 * and other lists.
 *
 * @param {object[] | string[]} options a list of items to transform to be used in list
 * @param {string | func} key a string to get the unique key from objects, or
 *  a function that get passed the object and returns a key. If not passed, the
 *  JSON representation of the item will be used. This can have very bad performances
 *  impact, so we should avoid using it.
 */

const getItems = (options, keyGetter) => {
  const keyExtractor = getKeyExtractor(options, keyGetter);
  return Object.keys(options).reduce((items, key) => items.concat({
    key: keyExtractor(options[key], key),
    value: options[key]
  }), []);
};
const RadioListContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
  displayName: "StyledRadioList__RadioListContainer",
  componentId: "sc-vf87vx-1"
})(["& > *:first-child > *{border-radius:15px 15px 0 0;}& > *:last-child > *{border-radius:0 0 15px 15px;}"]);
/**
 * Component for controlling a list of radio inputs
 */

const StyledRadioList = _ref => {
  let {
    children,
    id,
    name,
    onChange,
    options,
    keyGetter,
    disabled,
    containerProps,
    labelProps,
    radioSize,
    'data-cy': dataCy
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: localStateSelected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.defaultValue);
  const keyExtractor = getKeyExtractor(options, keyGetter);
  const items = getItems(options, keyExtractor);
  const defaultValueStr = props.defaultValue !== undefined && props.defaultValue.toString();
  const checkedItem = !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(props.value) ? props.value : localStateSelected;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RadioListContainer, _objectSpread(_objectSpread({
    id: id,
    as: "fieldset",
    border: "none",
    m: 0,
    p: 0,
    "data-cy": dataCy
  }, containerProps), {}, {
    children: items.map(({
      value,
      key
    }, index) => {
      const isDisabled = disabled || value && value.disabled; // disable a specific option or entire options

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        as: "label",
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        htmlFor: id && key + id,
        width: 1,
        m: 0,
        disabled: isDisabled
      }, labelProps), {}, {
        children: children({
          checked: key === checkedItem,
          index,
          key,
          value,
          radio: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RadioInput, {
            type: "radio",
            name: name,
            id: id && key + id,
            value: key,
            size: radioSize,
            defaultChecked: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(props.defaultValue) ? undefined : defaultValueStr === key,
            checked: lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(props.value) ? undefined : props.value === key,
            disabled: isDisabled // disable a specific option or entire options
            ,
            "data-cy": "radio-select",
            onChange: event => {
              event.stopPropagation();
              const target = event.target;

              const selectedItem = lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(items, item => item.key === target.value);

              onChange({
                type: 'fieldset',
                name,
                key: selectedItem.key,
                value: selectedItem.value
              });
              setSelected(target.value);
            }
          })
        })
      }), key);
    })
  }));
};

const defaultChild = ({
  value,
  radio
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
  mb: 2,
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
    as: "span",
    mr: 2,
    children: radio
  }), value]
});

StyledRadioList.defaultProps = {
  children: defaultChild,
  onChange: () => {} // noop

};
StyledRadioList.displayName = 'StyledRadioList';
StyledRadioList.__docgenInfo = {
  "description": "Component for controlling a list of radio inputs",
  "methods": [],
  "displayName": "StyledRadioList",
  "props": {
    "children": {
      "defaultValue": {
        "value": "({ value, radio }) => (\n  <Box mb={2}>\n    <Box as=\"span\" mr={2}>\n      {radio}\n    </Box>\n    {value}\n  </Box>\n)",
        "computed": false
      },
      "description": "render function used to display an option\n@param {Object} props - Properties use for rendering each radio input\n@param {*} props.key - unqiue key for the option derived from `options`\n@param {*} props.value - value for the option derived from `options`\n@param {boolean} props.checked - true if the radio item is selected\n@param {number} props.index - order index of the option\n@param {Component} props.radio - radio input component",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      },
      "description": "event handler for when a selection is made",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "shape",
          "value": "PropTypes.shape()",
          "computed": true
        }]
      },
      "required": false
    },
    "id": {
      "description": "element id for forms",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "name": {
      "description": "element name for radio inputs",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
      "description": "for controlled components",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }, {
          "name": "object"
        }]
      },
      "required": false
    },
    "options": {
      "description": "list or map of options to display",
      "type": {
        "name": "union",
        "value": [{
          "name": "arrayOf",
          "value": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }, {
              "name": "shape",
              "value": "PropTypes.shape()",
              "computed": true
            }]
          }
        }, {
          "name": "objectOf",
          "value": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }, {
              "name": "shape",
              "value": "PropTypes.shape()",
              "computed": true
            }]
          }
        }]
      },
      "required": true
    },
    "keyGetter": {
      "description": "A key name of a getter function to extract the unique key from option",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "func"
        }]
      },
      "required": false
    },
    "containerProps": {
      "description": "To pass to the fieldset container",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "labelProps": {
      "description": "To pass to the label container",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "disabled": {
      "description": "If true, user won't be able to interact with the element",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "radioSize": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "data-cy": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledRadioList);

/***/ }),

/***/ 1433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M7": () => (/* binding */ PAYMENT_FLOW),
/* harmony export */   "Ss": () => (/* binding */ STEPS),
/* harmony export */   "eY": () => (/* binding */ CRYPTO_CURRENCIES)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56562);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const STEPS = {
  PROFILE: 'profile',
  DETAILS: 'details',
  PAYMENT: 'payment',
  SUMMARY: 'summary',
  SUCCESS: 'success',
  CHECKOUT: 'checkout'
};
const PAYMENT_FLOW = {
  CRYPTO: 'crypto'
};
const CRYPTO_CURRENCIES = [{
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BTC (Bitcoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BTC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BTC (Bitcoin)"
    })]
  }),
  labelWithoutImage: 'BTC (Bitcoin)',
  value: 'BTC',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ETH (Ethereum)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ETH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ETH (Ethereum)"
    })]
  }),
  labelWithoutImage: 'ETH (Ethereum)',
  value: 'ETH',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BCH (Bitcoin Cash)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BCH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BCH (Bitcoin Cash)"
    })]
  }),
  labelWithoutImage: 'BCH (Bitcoin Cash)',
  value: 'BCH',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LTC (Litecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LTC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LTC (Litecoin)"
    })]
  }),
  labelWithoutImage: 'LTC (Litecoin)',
  value: 'LTC',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ZEC (Zcash)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ZEC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ZEC (Zcash)"
    })]
  }),
  labelWithoutImage: 'ZEC (Zcash)',
  value: 'ZEC',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LINK (Chainlink)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LINK.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LINK (Chainlink)"
    })]
  }),
  labelWithoutImage: 'LINK (Chainlink)',
  value: 'LINK',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BAT (Basic Attention Token)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BAT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BAT (Basic Attention Token)"
    })]
  }),
  labelWithoutImage: 'BAT (Basic Attention Token)',
  value: 'BAT',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "DAI (Dai)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/DAI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "DAI (Dai)"
    })]
  }),
  labelWithoutImage: 'DAI (Dai)',
  value: 'DAI',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "OXT (Orchid)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/OXT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "OXT (Orchid)"
    })]
  }),
  labelWithoutImage: 'OXT (Orchid)',
  value: 'OXT',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "STORJ (Storj)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/STORJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "STORJ (Storj)"
    })]
  }),
  labelWithoutImage: 'STORJ (Storj)',
  value: 'STORJ',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "AMP (Amp)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/AMP.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "AMP (Amp)"
    })]
  }),
  labelWithoutImage: 'AMP (Amp)',
  value: 'AMP',
  minDonation: 10
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ZRX (Ox)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ZRX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ZRX (Ox)"
    })]
  }),
  labelWithoutImage: 'ZRX (Ox)',
  value: 'ZRX',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "DOGE (Dogecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/DOGE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "DOGE (Dogecoin)"
    })]
  }),
  labelWithoutImage: 'DOGE (Dogecoin)',
  value: 'DOGE',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "COMP (Compound)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/COMP.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "COMP (Compound)"
    })]
  }),
  labelWithoutImage: 'COMP (Compound)',
  value: 'COMP',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SNX (Synthetix)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SNX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SNX (Synthetix)"
    })]
  }),
  labelWithoutImage: 'SNX (Synthetix)',
  value: 'SNX',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "AAVE (Aave)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/AAVE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "AAVE (Aave)"
    })]
  }),
  labelWithoutImage: 'AAVE (Aave)',
  value: 'AAVE',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "GRT (The Graph)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/GRT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "GRT (The Graph)"
    })]
  }),
  labelWithoutImage: 'GRT (The Graph)',
  value: 'GRT',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BNT (Bancor)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BNT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BNT (Bancor)"
    })]
  }),
  labelWithoutImage: 'BNT (Bancor)',
  value: 'BNT',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SUSHI (SushiSwap)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SUSHI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SUSHI (SushiSwap)"
    })]
  }),
  labelWithoutImage: 'SUSHI (SushiSwap)',
  value: 'SUSHI',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "UNI (Uniswap)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/UNI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "UNI (Uniswap)"
    })]
  }),
  labelWithoutImage: 'UNI (Uniswap)',
  value: 'UNI',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MATIC (Polygon)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MATIC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MATIC (Polygon)"
    })]
  }),
  labelWithoutImage: 'MATIC (Polygon)',
  value: 'MATIC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "GUSD (Gemini Dollar)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/GUSD.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "GUSD (Gemini Dollar)"
    })]
  }),
  labelWithoutImage: 'GUSD (Gemini Dollar)',
  value: 'GUSD',
  minDonation: 0.000001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "CRV (Curve DAO Token)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/CRV.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "CRV (Curve DAO Token)"
    })]
  }),
  labelWithoutImage: 'CRV (Curve DAO Token)',
  value: 'CRV',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "1INCH (1inch)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/1INCH.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "1INCH (1inch)"
    })]
  }),
  labelWithoutImage: '1INCH (1inch)',
  value: '1INCH',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BAL (Balancer)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BAL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BAL (Balancer)"
    })]
  }),
  labelWithoutImage: 'BAL (Balancer)',
  value: 'BAL',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "UMA (UMA)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/UMA.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "UMA (UMA)"
    })]
  }),
  labelWithoutImage: 'UMA (UMA)',
  value: 'UMA',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "YFI (Yearn Finance)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/YFI.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "YFI (Yearn Finance)"
    })]
  }),
  labelWithoutImage: 'YFI (Yearn Finance)',
  value: 'YFI',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ALCX (Alchemix)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ALCX.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ALCX (Alchemix)"
    })]
  }),
  labelWithoutImage: 'ALCX (Alchemix)',
  value: 'ALCX',
  minDonation: 0.00001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SAND (Sandbox)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SAND.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SAND (Sandbox)"
    })]
  }),
  labelWithoutImage: 'SAND (Sandbox)',
  value: 'SAND',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "INJ (Injective Protocol)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/INJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "INJ (Injective Protocol)"
    })]
  }),
  labelWithoutImage: 'INJ (Injective Protocol)',
  value: 'INJ',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "PAXG (PAX Gold)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/PAXG.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "PAXG (PAX Gold)"
    })]
  }),
  labelWithoutImage: 'PAXG (PAX Gold)',
  value: 'PAXG',
  minDonation: 0.0001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ENJ (Enjin Coin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ENJ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ENJ (Enjin Coin)"
    })]
  }),
  labelWithoutImage: 'ENJ (Enjin Coin)',
  value: 'ENJ',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "FIL (Filecoin)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/FIL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "FIL (Filecoin)"
    })]
  }),
  labelWithoutImage: 'FIL (Filecoin)',
  value: 'FIL',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "ANKR (Ankr)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/ANKR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "ANKR (Ankr)"
    })]
  }),
  labelWithoutImage: 'ANKR (Ankr)',
  value: 'ANKR',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "XTZ (Tezos)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/XTZ.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "XTZ (Tezos)"
    })]
  }),
  labelWithoutImage: 'XTZ (Tezos)',
  value: 'XTZ',
  minDonation: 0.02
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MKR (Maker)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MKR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MKR (Maker)"
    })]
  }),
  labelWithoutImage: 'MKR (Maker)',
  value: 'MKR',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LRC (Loopring)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LRC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LRC (Loopring)"
    })]
  }),
  labelWithoutImage: 'LRC (Loopring)',
  value: 'LRC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "BOND (BarnBridge)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/BOND.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "BOND (BarnBridge)"
    })]
  }),
  labelWithoutImage: 'BOND (BarnBridge)',
  value: 'BOND',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "SKL (Skale)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/SKL.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "SKL (Skale)"
    })]
  }),
  labelWithoutImage: 'SKL (Skale)',
  value: 'SKL',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MIR (Mirror Protocol)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MIR.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MIR (Mirror Protocol)"
    })]
  }),
  labelWithoutImage: 'MIR (Mirror Protocol)',
  value: 'MIR',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "LPT (Livepeer)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/LPT.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "LPT (Livepeer)"
    })]
  }),
  labelWithoutImage: 'LPT (Livepeer)',
  value: 'LPT',
  minDonation: 0.001
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "MANA (Mana)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/MANA.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "MANA (Mana)"
    })]
  }),
  labelWithoutImage: 'MANA (Mana)',
  value: 'MANA',
  minDonation: 1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "FTM (Fantom)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/FTM.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "FTM (Fantom)"
    })]
  }),
  labelWithoutImage: 'FTM (Fantom)',
  value: 'FTM',
  minDonation: 0.03
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "KNC (Kyber)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/KNC.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "KNC (Kyber)"
    })]
  }),
  labelWithoutImage: 'KNC (Kyber)',
  value: 'KNC',
  minDonation: 0.1
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "CUBE (Cube)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/CUBE.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "CUBE (Cube)"
    })]
  }),
  labelWithoutImage: 'CUBE (Cube)',
  value: 'CUBE',
  minDonation: 0.01
}, {
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .kC, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      alt: "REN (Ren)",
      width: 18,
      height: 18,
      src: "/static/images/crypto-logos/REN.svg"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      ml: 2,
      children: "REN (Ren)"
    })]
  }),
  labelWithoutImage: 'REN (Ren)',
  value: 'REN',
  minDonation: 0.1
}];

/***/ }),

/***/ 43385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["width", "height", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const PayPal = _ref => {
  let {
    width,
    height,
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_CustomStyledIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    width: size || width || 21,
    height: height || size || 24,
    viewBox: "0 0 21 24",
    fill: "none"
  }, props), {}, {
    color: "blue",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.5384 6.09749C18.8345 4.23054 18.5364 2.96019 17.515 1.80957C16.3906 0.542724 14.3592 0 11.7602 0H4.2158C3.68455 0 3.23226 0.382151 3.14949 0.900957L0.0080496 20.5971C-0.053923 20.9857 0.249824 21.337 0.647754 21.337H5.30521L4.9838 23.3526C4.92957 23.6926 5.19527 24 5.54346 24H9.4692C9.93386 24 10.3295 23.6657 10.4019 23.2119L10.4404 23.0147L11.18 18.3779L11.2277 18.1217C11.3 17.6679 11.6956 17.3336 12.1603 17.3336H12.7476C16.5508 17.3336 19.5287 15.8058 20.3989 11.3877C20.7625 9.54141 20.5745 8.00045 19.613 6.91715C19.3222 6.58942 18.9604 6.31853 18.5384 6.09749Z",
      fill: "#E0E4EB"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.7472 6.12364C19.0466 4.24868 18.7451 2.97289 17.7123 1.81734C16.5751 0.545053 14.5209 0 11.8926 0H4.26327C3.72604 0 3.26865 0.38379 3.18496 0.904822L0.00814024 20.6854C-0.0545302 21.0757 0.252638 21.4286 0.655048 21.4286H5.36495L6.54813 14.0621L6.51144 14.293C6.59514 13.7721 7.04867 13.3883 7.58577 13.3883H9.82432C14.2207 13.3883 17.6632 11.6345 18.6691 6.56236C18.6989 6.41216 18.7243 6.26669 18.7472 6.12364Z",
      fill: "#C4C9D1"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.81914 6.14861C7.86944 5.83513 8.07422 5.57859 8.35005 5.44877C8.47539 5.3898 8.61544 5.35701 8.76235 5.35701H14.7427C15.4512 5.35701 16.1117 5.40248 16.7157 5.49803C16.8884 5.52529 17.0563 5.55673 17.2194 5.59222C17.3826 5.62785 17.5409 5.66752 17.6943 5.71165C17.771 5.73351 17.8463 5.75659 17.9205 5.78074C18.2169 5.8775 18.493 5.99153 18.7472 6.12364C19.0466 4.24868 18.7451 2.97289 17.7123 1.81734C16.5751 0.545053 14.5209 0 11.8926 0H4.26327C3.72604 0 3.26865 0.38379 3.18496 0.904822L0.00814024 20.6854C-0.0545302 21.0757 0.252638 21.4286 0.655048 21.4286H5.36495L7.81914 6.14861Z",
      fill: "#CFD2D7"
    })]
  }));
};

PayPal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PayPal",
  "props": {
    "width": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "height": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    },
    "size": {
      "description": "",
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayPal);

/***/ }),

/***/ 12568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lX": () => (/* binding */ AmountTypes),
/* harmony export */   "x$": () => (/* binding */ TierTypes)
/* harmony export */ });
const TierTypes = {
  TICKET: 'TICKET',
  TIER: 'TIER',
  MEMBERSHIP: 'MEMBERSHIP',
  PRODUCT: 'PRODUCT',
  SERVICE: 'SERVICE',
  DONATION: 'DONATION'
};
const AmountTypes = {
  FIXED: 'FIXED',
  FLEXIBLE: 'FLEXIBLE'
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Object.values(TierTypes));

/***/ }),

/***/ 91337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ getPaymentMethodIcon),
/* harmony export */   "DE": () => (/* binding */ isPaymentMethodDisabled),
/* harmony export */   "Og": () => (/* binding */ getPaymentMethodMetadata),
/* harmony export */   "U8": () => (/* binding */ formatManualInstructions),
/* harmony export */   "qi": () => (/* binding */ hasPaypalPreApprovalExpired)
/* harmony export */ });
/* unused harmony exports getPaymentMethodBalance, isPaymentMethodExpired, paymentMethodTypeHasBalance */
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_solid_Bank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39553);
/* harmony import */ var _styled_icons_boxicons_solid_Bank__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_solid_Bank__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60270);
/* harmony import */ var _styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_fa_brands_ApplePay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97244);
/* harmony import */ var _styled_icons_fa_brands_ApplePay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_ApplePay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_brands_GooglePay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38254);
/* harmony import */ var _styled_icons_fa_brands_GooglePay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_GooglePay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63387);
/* harmony import */ var _styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_fa_solid_MoneyCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64965);
/* harmony import */ var _styled_icons_fa_solid_MoneyCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_MoneyCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11194);
/* harmony import */ var _components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47483);
/* harmony import */ var _components_icons_GiftCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19740);
/* harmony import */ var _components_icons_PayPal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43385);
/* harmony import */ var _components_LinkCollective__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97619);
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1808);
/* harmony import */ var _currency_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17632);
/* harmony import */ var _payment_method_label__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51515);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);

















/** Minimum usable balance for gift card and collective to collective */


const MIN_GIFT_CARD_BALANCE = 50;
const getPaymentMethodIcon = (pm, collective, size) => {
  const type = pm.type;
  const service = pm.service;

  if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD) {
    const walletType = pm?.data?.wallet?.type;

    if (walletType === 'google_pay') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_brands_GooglePay__WEBPACK_IMPORTED_MODULE_5__.GooglePay, {
        size: size
      });
    } else if (walletType === 'apple_pay') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_brands_ApplePay__WEBPACK_IMPORTED_MODULE_4__.ApplePay, {
        size: size
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_icons_CreditCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      size: size
    });
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_icons_GiftCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      size: size
    });
  } else if (service === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_icons_PayPal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      size: size
    });
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.PREPAID */ .td.PREPAID) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_solid_MoneyCheck__WEBPACK_IMPORTED_MODULE_7__.MoneyCheck, {
      width: "26px",
      height: "18px",
      size: size
    });
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.COLLECTIVE */ .td.COLLECTIVE && collective) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
      collective: collective,
      size: size || '3.6rem'
    });
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.MANUAL */ .td.MANUAL) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_solid_ExchangeAlt__WEBPACK_IMPORTED_MODULE_6__.ExchangeAlt, {
      color: "#c9ced4",
      size: size || '1.5em'
    });
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.ALIPAY */ .td.ALIPAY) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_brands_Alipay__WEBPACK_IMPORTED_MODULE_3__.Alipay, {
      width: "26px",
      height: "18px",
      color: "#c9ced4",
      size: size || '1.5em'
    });
  } else if ([_constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.US_BANK_ACCOUNT */ .td.US_BANK_ACCOUNT, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.SEPA_DEBIT */ .td.SEPA_DEBIT, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.BACS_DEBIT */ .td.BACS_DEBIT, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.BANCONTACT */ .td.BANCONTACT].includes(type)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_boxicons_solid_Bank__WEBPACK_IMPORTED_MODULE_2__.Bank, {
      size: size
    });
  }
};
/** An helper that adds compatibility between GQLV1 and V2 */

const getPaymentMethodBalance = pm => {
  if (typeof pm.balance === 'number') {
    return pm.balance;
  } else if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(pm.balance?.valueInCents)) {
    return pm.balance.valueInCents;
  } else if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(pm.balance?.value)) {
    return pm.balance.value * 100;
  } else {
    return NaN;
  }
};
const isPaymentMethodExpired = pm => {
  return pm.expiryDate && new Date(pm.expiryDate) < new Date();
};
const paymentMethodTypeHasBalance = type => {
  return [_constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.COLLECTIVE */ .td.COLLECTIVE, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.PREPAID */ .td.PREPAID].includes(type);
};
const isPaymentMethodDisabled = (pm, totalAmount) => {
  if (isPaymentMethodExpired(pm)) {
    return true;
  } else if (paymentMethodTypeHasBalance(pm.type)) {
    const balance = getPaymentMethodBalance(pm);

    if (pm.type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD && balance < MIN_GIFT_CARD_BALANCE) {
      return true;
    } else if (balance < totalAmount) {
      return true;
    }
  }

  return false;
};
/** Returns payment method's subtitles */

const getPaymentMethodMetadata = (pm, totalAmount) => {
  // TODO formatCurrency locale
  const balance = getPaymentMethodBalance(pm);
  const currency = pm.currency || pm.balance?.currency;
  const type = pm.type;
  const service = pm.service;

  if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD) {
    const expiryDate = (0,_payment_method_label__WEBPACK_IMPORTED_MODULE_16__/* .paymentMethodExpiration */ .HR)(pm);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
      id: "ContributePayment.expiresOn",
      defaultMessage: [{
        "type": 0,
        "value": "Expires on "
      }, {
        "type": 1,
        "value": "expiryDate"
      }],
      values: {
        expiryDate
      }
    });
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD && balance < MIN_GIFT_CARD_BALANCE) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
      id: "ContributePayment.unusableBalance",
      defaultMessage: [{
        "type": 1,
        "value": "balance"
      }, {
        "type": 0,
        "value": " left, balance less than "
      }, {
        "type": 1,
        "value": "minBalance"
      }, {
        "type": 0,
        "value": " cannot be used."
      }],
      values: {
        balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatCurrency */ .xG)(balance, currency),
        minBalance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatCurrency */ .xG)(MIN_GIFT_CARD_BALANCE, currency)
      }
    });
  } else if (isPaymentMethodExpired(pm)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
      id: "PaymentMethodExpiredOn",
      defaultMessage: [{
        "type": 0,
        "value": "Expired on "
      }, {
        "type": 1,
        "value": "expiryDate"
      }],
      values: {
        expiryDate: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedDate, {
          value: pm.expiryDate,
          day: "numeric",
          month: "long",
          year: "numeric"
        })
      }
    });
  } else if (paymentMethodTypeHasBalance(pm.type)) {
    if (balance < totalAmount) {
      return type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_TYPE.COLLECTIVE */ .td.COLLECTIVE ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "contribute.lowCollectiveBalance",
        defaultMessage: [{
          "type": 0,
          "value": "The balance of this collective is too low ("
        }, {
          "type": 1,
          "value": "balance"
        }, {
          "type": 0,
          "value": "). Add funds to "
        }, {
          "type": 1,
          "value": "collective"
        }, {
          "type": 0,
          "value": " by making a financial contribution to it first."
        }],
        values: {
          collective: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_LinkCollective__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            collective: pm.account
          }),
          balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatCurrency */ .xG)(balance, currency)
        }
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "PaymentMethod.BalanceTooLow",
        defaultMessage: [{
          "type": 0,
          "value": "The balance ("
        }, {
          "type": 1,
          "value": "balance"
        }, {
          "type": 0,
          "value": ") is too low"
        }],
        values: {
          balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatCurrency */ .xG)(balance, currency)
        }
      });
    } else if (pm.expiryDate) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "ContributePayment.balanceAndExpiry",
        defaultMessage: [{
          "type": 1,
          "value": "balance"
        }, {
          "type": 0,
          "value": " left, expires on "
        }, {
          "type": 1,
          "value": "expiryDate"
        }],
        values: {
          expiryDate: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedDate, {
            value: pm.expiryDate,
            day: "numeric",
            month: "long",
            year: "numeric"
          }),
          balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatCurrency */ .xG)(balance, currency)
        }
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "ContributePayment.balanceLeft",
        defaultMessage: [{
          "type": 1,
          "value": "balance"
        }, {
          "type": 0,
          "value": " left"
        }],
        values: {
          balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatCurrency */ .xG)(balance, currency)
        }
      });
    }
  } else if (service === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_14__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
    return pm.name;
  } else {
    return null;
  }
};
const hasPaypalPreApprovalExpired = paymentMethod => {
  return new Date(paymentMethod.expiryDate) - new Date() <= 0;
};
/**
 * From `api/server/lib/payments.js`
 *
 * @param {string} instructions
 * @param {object} values
 */

const formatManualInstructions = (instructions, values) => {
  if (!instructions) {
    return '';
  } else {
    return instructions.replace(/{([\s\S]+?)}/g, (match, key) => {
      if (key && !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(values[key])) {
        return values[key];
      } else {
        return match;
      }
    });
  }
};
getPaymentMethodIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "getPaymentMethodIcon"
};
getPaymentMethodMetadata.__docgenInfo = {
  "description": "Returns payment method's subtitles",
  "methods": [],
  "displayName": "getPaymentMethodMetadata"
};

/***/ }),

/***/ 51515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FF": () => (/* binding */ paymentMethodLabelWithIcon),
/* harmony export */   "HR": () => (/* binding */ paymentMethodExpiration),
/* harmony export */   "d0": () => (/* binding */ getPaymentMethodName),
/* harmony export */   "uB": () => (/* binding */ paymentMethodLabel)
/* harmony export */ });
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96839);
/* harmony import */ var lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_padStart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1808);
/* harmony import */ var _currency_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17632);



/**
 * Functions for generating internationalized payment method labels.
 *
 * The fact that we use these labels inside `<select/>` options prevent us
 * from implementing this as a React component as for now React does not
 * support having components inside `<option/>` tags, even if the component
 * returns only strings.
 *
 * [This message](https://github.com/facebook/react/issues/13586#issuecomment-419490956)
 * explains why its not supported (though it has been in the past) and why
 * it may not be in a near future.
 *
 */




const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  GIFTCARD: {
    id: "paymentMethods.labelGiftCard",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 1,
      "value": "expiration"
    }, {
      "type": 0,
      "value": " ("
    }, {
      "type": 1,
      "value": "balance"
    }, {
      "type": 0,
      "value": " left)"
    }]
  },
  CREDITCARD: {
    id: "paymentMethods.labelCreditCard",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " "
    }, {
      "type": 1,
      "value": "expiration"
    }]
  },
  PREPAID: {
    id: "paymentMethods.labelPrepaid",
    defaultMessage: [{
      "type": 1,
      "value": "name"
    }, {
      "type": 0,
      "value": " ("
    }, {
      "type": 1,
      "value": "balance"
    }, {
      "type": 0,
      "value": " left)"
    }]
  },
  COLLECTIVE: {
    id: "paymentMethods.labelCollective",
    defaultMessage: [{
      "type": 1,
      "value": "balance"
    }, {
      "type": 0,
      "value": " available"
    }]
  },
  unavailable: {
    id: "paymentMethods.labelUnavailable",
    defaultMessage: [{
      "type": 0,
      "value": "(payment method info not available)"
    }]
  }
});
/**
 * Generate a pretty string for payment method expiryDate or return an empty
 * string if payment method has no expiry date.
 * @param {PaymentMethod} pm
 */

function paymentMethodExpiration(pm) {
  /* The expiryDate field will show up for prepaid cards */
  return pm.expiryDate ? dayjs__WEBPACK_IMPORTED_MODULE_2___default()(pm.expiryDate).format('MM/YYYY') : lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(pm, 'data.expMonth') || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(pm, 'data.expYear') ? `${lodash_padStart__WEBPACK_IMPORTED_MODULE_0___default()(lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(pm, 'data.expMonth'), 2, '0')}/${lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(pm, 'data.expYear')}` : '';
}
/**
 * Format a credit card brand for label, truncating the name if too long
 * or using abreviations like "AMEX" for American Express.
 * @param {string} brand
 */

function formatCreditCardBrand(brand) {
  brand = brand.toUpperCase();

  if (brand === 'UNKNOWN') {
    return null;
  } else if (brand === 'AMERICAN EXPRESS') {
    return 'AMEX';
  } else if (brand.length > 10) {
    brand = `${brand.slice(0, 8)}...`;
  }

  return brand;
}
/**
 * Format payment method name
 */


const getPaymentMethodName = ({
  name,
  data,
  service,
  type
}) => {
  if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD) {
    return name?.replace('card from', 'Gift Card from') || 'Gift card';
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.PREPAID */ .td.PREPAID) {
    return `Prepaid: ${name}`;
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD) {
    const brand = data && data.brand && formatCreditCardBrand(data.brand);
    return `${brand || 'Credit card'} **** ${name || ''}`;
  } else if (service === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
    return 'PayPal';
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.MANUAL */ .td.MANUAL) {
    return 'Bank transfer';
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.ALIPAY */ .td.ALIPAY) {
    return 'Alipay';
  } else if (!type || type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.PAYMENT_INTENT */ .td.PAYMENT_INTENT) {
    return '';
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.SEPA_DEBIT */ .td.SEPA_DEBIT) {
    return `SEPA ${name}`;
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.US_BANK_ACCOUNT */ .td.US_BANK_ACCOUNT) {
    return `ACH ${name}`;
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.BACS_DEBIT */ .td.BACS_DEBIT) {
    return `Bacs ${name}`;
  } else if (type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.BANCONTACT */ .td.BANCONTACT) {
    return `Bancontact ${name}`;
  } else {
    return name || `${service} - ${type}`;
  }
};
/**
 * Generate a pretty label for given payment method or return its name if type
 * is unknown.
 *
 * @param {react-intl} intl the intl provider as given to your component by injectIntl
 * @param {PaymentMethod} paymentMethod
 * @param {string} collectiveName an optional name to prefix the payment method
 */

function paymentMethodLabel(intl, paymentMethod, collectiveName = null) {
  const {
    balance,
    currency
  } = paymentMethod;
  const name = getPaymentMethodName(paymentMethod);
  let label = null;

  if (paymentMethod.type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD) {
    const expiryDate = paymentMethodExpiration(paymentMethod);
    label = intl.formatMessage(messages.GIFTCARD, {
      name,
      balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .formatCurrency */ .xG)(balance, currency, {
        locale: intl.locale
      }),
      expiration: `- exp ${expiryDate}`
    });
  } else if (paymentMethod.type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.PREPAID */ .td.PREPAID) {
    label = intl.formatMessage(messages.PREPAID, {
      name,
      balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .formatCurrency */ .xG)(balance, currency, {
        locale: intl.locale
      })
    });
  } else if (paymentMethod.type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD) {
    const expiryDate = paymentMethodExpiration(paymentMethod);
    label = intl.formatMessage(messages.CREDITCARD, {
      name,
      expiration: `- exp ${expiryDate}`
    });
  } else if (paymentMethod.type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.COLLECTIVE */ .td.COLLECTIVE) {
    label = intl.formatMessage(messages.COLLECTIVE, {
      name,
      balance: (0,_currency_utils__WEBPACK_IMPORTED_MODULE_5__/* .formatCurrency */ .xG)(balance, currency, {
        locale: intl.locale
      })
    });
  } else if (!name) {
    label = intl.formatMessage(messages.unavailable);
  } else {
    label = name;
  }

  return collectiveName ? `${collectiveName} - ${label}` : label;
}
/**
 * Get the UTF8 icon associated with given payment method
 * @param {PaymentMethod} paymentMethod
 */

function paymentMethodUnicodeIcon(paymentMethod) {
  switch (paymentMethod.type) {
    case _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD:
      return '💳';

    case _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.GIFTCARD */ .td.GIFTCARD:
      return '🎁';

    case _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.PREPAID */ .td.PREPAID:
      return paymentMethod.currency === 'EUR' ? '💶' : '💵';

    case _constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.COLLECTIVE */ .td.COLLECTIVE:
      return '💸';

    default:
      return '💰';
  }
}
/**
 * Generate a label for given payment method as a string.
 *
 * @param {react-intl} intl the intl provider as given to your component by injectIntl
 * @param {PaymentMethod} paymentMethod
 * @param {string} collectiveName an optional name to prefix the payment method
 */


function paymentMethodLabelWithIcon(intl, paymentMethod, collectiveName = null) {
  const icon = paymentMethodUnicodeIcon(paymentMethod);
  const label = paymentMethodLabel(intl, paymentMethod, collectiveName);
  return `${icon}\xA0\xA0${label}`;
}

/***/ }),

/***/ 79936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d2": () => (/* binding */ getStripe),
/* harmony export */   "kJ": () => (/* binding */ stripeTokenToPaymentMethod)
/* harmony export */ });
/* unused harmony exports getStripeToken, isValidCard */
/* harmony import */ var payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42863);
/* harmony import */ var payment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(payment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9269);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97079);



const stripeInstances = {};

const getStripe = async (token, stripeAccount) => {
  const instanceId = stripeAccount || 'default';

  if (!stripeInstances[instanceId]) {
    const stripeKey = token || (0,_env_utils__WEBPACK_IMPORTED_MODULE_1__/* .getEnvVar */ .p)('STRIPE_KEY');

    if (stripeKey) {
      if (typeof window.Stripe === 'undefined') {
        await (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .loadScriptAsync */ .SH)('https://js.stripe.com/v3/');
      }

      stripeInstances[instanceId] = window.Stripe(stripeKey, stripeAccount ? {
        stripeAccount
      } : {});
    } else {
      throw new Error("'STRIPE_KEY' is undefined.");
    }
  }

  return stripeInstances[instanceId];
};

const getStripeToken = (type = 'cc', data) => {
  // for testing only
  const TEST_ENVIRONMENT =  false && (0);

  if (TEST_ENVIRONMENT) {
    return Promise.resolve({
      token: 'tok_bypassPending',

      /* eslint-disable camelcase */
      card: {
        last4: 4242,
        exp_month: 11,
        exp_year: 23,
        brand: 'visa',
        country: 'us',
        funding: 'credit',
        address_zip: 10014
      }
      /* eslint-enable camelcase */

    });
  }

  switch (type) {
    case 'cc':
      // credit card
      return getStripe().then(stripe => stripe.createToken(data)).then(res => {
        if (res.error) {
          throw new Error(res.error.message);
        }

        return {
          token: res.token.id,
          card: res.token.card
        };
      });
  }
};
/**
 * Convert a stripe token as returned by `createToken` into a PaymentMethod object.
 */


const stripeTokenToPaymentMethod = ({
  id,
  card
}) => {
  return {
    name: card.last4,
    token: id,
    service: 'STRIPE',
    type: 'CREDITCARD',
    data: {
      fullName: card.full_name,
      expMonth: card.exp_month,
      expYear: card.exp_year,
      brand: card.brand,
      country: card.country,
      funding: card.funding,
      zip: card.address_zip,
      fingerprint: card.fingerprint
    }
  };
};

const isValidCard = card => {
  if (typeof card.cvc !== 'string') {
    card.cvc = `${card.cvc}`;
  }

  return card && card.cvc && card.cvc.length >= 3 && card.exp_month && card.exp_year && Payment.fns.validateCardNumber(card.number);
};



/***/ }),

/***/ 36648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CE": () => (/* binding */ isFixedContribution),
/* harmony export */   "Rx": () => (/* binding */ getDefaultInterval),
/* harmony export */   "SM": () => (/* binding */ sortTiersForCollective),
/* harmony export */   "Vq": () => (/* binding */ getTierPresets),
/* harmony export */   "Zq": () => (/* binding */ TIERS_ORDER_KEY),
/* harmony export */   "hs": () => (/* binding */ DEFAULT_MINIMUM_AMOUNT),
/* harmony export */   "l_": () => (/* binding */ isTierExpired),
/* harmony export */   "pP": () => (/* binding */ DEFAULT_PRESETS),
/* harmony export */   "qt": () => (/* binding */ getTierMinAmount),
/* harmony export */   "rm": () => (/* binding */ getCollectiveContributionCardsOrder),
/* harmony export */   "x6": () => (/* binding */ getDefaultTierAmount)
/* harmony export */ });
/* unused harmony exports DEFAULT_FUNDS_PRESETS, sortTiers */
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(604);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1433);
/* harmony import */ var _constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);
/* harmony import */ var _constants_intervals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80642);
/* harmony import */ var _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12568);









const TIERS_ORDER_KEY = 'collectivePage.tiersOrder';
const DEFAULT_PRESETS = [500, 1000, 2000, 5000];
const DEFAULT_FUNDS_PRESETS = [100000, 200000, 500000, 1000000];
const DEFAULT_MINIMUM_AMOUNT = 100;
/**
 * Generated from the following query, using rounded number to make sure we don't suggest odd amounts.
 *
 * ```sql
 * WITH uniq_currencies AS (
 *     SELECT DISTINCT "to"
 *     FROM "CurrencyExchangeRates"
 *     WHERE "from" = 'USD'
 * ) SELECT uc."to", (
 *     -- Keep only first digit from number (e.g. 4 -> 4, 89 -> 80, 1337 -> 1000)
 *     SELECT LEFT(rate::TEXT, 1)::integer * POW(10, LENGTH(CAST(ROUND(rate) AS TEXT)) - 1)
 *     FROM "CurrencyExchangeRates" e WHERE e.from = 'USD' AND e.to = uc.to ORDER BY e."createdAt" DESC LIMIT 1
 *   ) AS rate
 * FROM uniq_currencies uc
 * ORDER BY rate DESC
 * ```
 */

const CURRENCY_ADJUSTMENT_RATES = {
  STD: 20000,
  VND: 20000,
  LAK: 10000,
  IDR: 10000,
  SLL: 10000,
  UZS: 10000,
  GNF: 8000,
  PYG: 6000,
  KHR: 4000,
  MGA: 4000,
  UGX: 3000,
  COP: 3000,
  MNT: 3000,
  TZS: 2000,
  CDF: 2000,
  BIF: 2000,
  MWK: 1000,
  KRW: 1000,
  LBP: 1000,
  MMK: 1000,
  RWF: 1000,
  CLP: 800,
  XAF: 600,
  XOF: 600,
  CRC: 600,
  SOS: 500,
  KZT: 400,
  KMF: 400,
  AMD: 400,
  NGN: 400,
  AOA: 400,
  HUF: 300,
  LKR: 300,
  MRO: 300,
  GYD: 200,
  PKR: 200,
  YER: 200,
  DJF: 100,
  JPY: 100,
  RSD: 100,
  KES: 100,
  XPF: 100,
  NPR: 100,
  ALL: 100,
  HTG: 100,
  VUV: 100,
  ISK: 100,
  JMD: 100,
  LRD: 100,
  CVE: 100,
  DZD: 100,
  ARS: 100,
  BDT: 90,
  SEK: 90,
  MAD: 90,
  AFN: 80,
  KGS: 70,
  INR: 70,
  RUB: 60,
  MZN: 60,
  PHP: 50,
  GMD: 50,
  DOP: 50,
  MKD: 50,
  ETB: 50,
  UYU: 40,
  MUR: 40,
  NIO: 30,
  THB: 30,
  HNL: 20,
  TWD: 20,
  CZK: 20,
  UAH: 20,
  SRD: 20,
  LSL: 10,
  ZAR: 10,
  SZL: 10,
  MVR: 10,
  ZMW: 10,
  NAD: 10,
  EGP: 10,
  MDL: 10,
  TJS: 10,
  MXN: 10,
  SCR: 10,
  TRY: 10,
  BWP: 10,
  NOK: 9,
  MOP: 8,
  SBD: 8,
  HKD: 7,
  HRK: 7,
  GTQ: 7,
  TTD: 6,
  CNY: 6,
  BOB: 6,
  DKK: 6,
  RON: 4,
  BRL: 4,
  MYR: 4,
  PLN: 4,
  PEN: 3,
  PGK: 3,
  SAR: 3,
  BYN: 3,
  AED: 3,
  ILS: 3,
  QAR: 3,
  BBD: 2,
  TOP: 2,
  FJD: 2,
  GEL: 2,
  BZD: 2,
  XCD: 2,
  WST: 2
};
/**
 * Get the min authorized amount for order, in cents.
 * ⚠️ Only work with data from GQLV2.
 */

const getTierMinAmount = (tier, currency) => {
  const rate = CURRENCY_ADJUSTMENT_RATES[currency] || 1;

  if (!tier) {
    // When making a donation, min amount is $1
    return DEFAULT_MINIMUM_AMOUNT * rate;
  } else if (tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FIXED */ .lX.FIXED) {
    return tier.amount?.valueInCents || 0;
  } else if (tier.minimumAmount.valueInCents !== null) {
    return tier.minimumAmount.valueInCents;
  } else if (tier.presets?.length && lodash_min__WEBPACK_IMPORTED_MODULE_2___default()(tier.presets) === 0) {
    return 0;
  } else {
    return DEFAULT_MINIMUM_AMOUNT * rate;
  }
};

const adaptPresetsForCurrency = (presets, currency) => {
  const rate = CURRENCY_ADJUSTMENT_RATES[currency];
  return !rate ? presets : presets.map(amount => Math.round(amount * rate));
};
/**
 * Get the presets for a given tier, or the default presets
 * ⚠️ Only work with data from GQLV2.
 */


const getTierPresets = (tier, collectiveType, currency) => {
  if (tier?.presets?.length > 0) {
    return tier.presets;
  } else if (collectiveType === _constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.FUND */ .eV.FUND) {
    return adaptPresetsForCurrency(DEFAULT_FUNDS_PRESETS, currency);
  } else if (!tier) {
    return adaptPresetsForCurrency(DEFAULT_PRESETS, currency);
  }

  const minAmount = getTierMinAmount(tier, currency);

  if (minAmount === 0) {
    return [0, 500, 1500, 5000];
  } else if (minAmount < 1000) {
    return [minAmount, 1000, 2500, 5000];
  } else {
    const roundAmount = amount => {
      const amountSize = amount.toString().length;
      const roundingFactor = Math.pow(10, amountSize - 1);
      return Math.round(Math.round(amount / roundingFactor) * roundingFactor);
    };

    return lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([minAmount, roundAmount(minAmount * 2), roundAmount(minAmount * 3), roundAmount(minAmount * 5)]);
  }
};
/**
 * Returns the default selected amount from a tier.
 * ⚠️ Only work with data from GQLV2.
 */

const getDefaultTierAmount = (tier, collective, currency) => {
  if (tier && !lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(tier.amount?.valueInCents)) {
    return tier.amount.valueInCents;
  } else if (getTierMinAmount(tier, currency) === 0) {
    // Free tiers are free per default, even when user can make a donation
    return 0;
  } else {
    const presets = getTierPresets(tier, collective.type, currency);
    return presets[Math.floor(presets.length / 2)];
  }
};
/** Returns true if the price and interval of the current contribution cannot be changed */

const isFixedContribution = tier => {
  const forceInterval = Boolean(tier);
  const forceAmount = tier && tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FIXED */ .lX.FIXED;
  const isFlexible = tier && tier.amountType === _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .AmountTypes.FLEXIBLE */ .lX.FLEXIBLE;
  return !isFlexible && forceInterval && forceAmount;
};
const isTierExpired = tier => {
  return tier?.endsAt && new Date(tier.endsAt) < new Date();
};
const getCollectiveContributionCardsOrder = collective => {
  return lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective.settings, TIERS_ORDER_KEY, []);
};
const sortTiers = (baseTiers, orderKeys, hasCustomContribution, hasCryptoContribution) => {
  const tiers = baseTiers.filter(tier => tier.type !== _constants_tiers_types__WEBPACK_IMPORTED_MODULE_8__/* .TierTypes.TICKET */ .x$.TICKET);

  if (hasCustomContribution) {
    tiers.push('custom');
  }

  if (hasCryptoContribution) {
    tiers.push('crypto');
  }

  return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(tiers, tier => {
    const itemKey = tier === 'custom' || tier === _components_contribution_flow_constants__WEBPACK_IMPORTED_MODULE_5__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO ? tier : tier.id;
    const index = orderKeys.findIndex(key => key === itemKey);
    return index === -1 ? Infinity : index; // put unsorted tiers at the end
  });
};
const sortTiersForCollective = (collective, baseTiers) => {
  const orderKeys = getCollectiveContributionCardsOrder(collective);
  const hasCustomContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective, 'settings.disableCustomContributions', false);
  const hasCryptoContribution = !lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(collective, 'settings.disableCryptoContributions', true);
  return sortTiers(baseTiers, orderKeys, hasCustomContribution, hasCryptoContribution);
};
const getDefaultInterval = tier => {
  if (!tier?.interval) {
    return _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].oneTime;
  } else if (tier.interval === _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].flexible) {
    return _constants_intervals__WEBPACK_IMPORTED_MODULE_7__["default"].month;
  } else {
    return tier.interval;
  }
};

/***/ })

};
;