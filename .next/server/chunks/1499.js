"use strict";
exports.id = 1499;
exports.ids = [1499];
exports.modules = {

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

/***/ })

};
;