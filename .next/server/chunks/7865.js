"use strict";
exports.id = 7865;
exports.ids = [7865,5842,7027];
exports.modules = {

/***/ 46351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AutoCollapse)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41032);
/* harmony import */ var _styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2331);
/* harmony import */ var _styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const InlineDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "AutoCollapse__InlineDisplayBox",
  componentId: "sc-9fmepq-0"
})(["overflow-y:hidden;"]);
const CollapsedDisplayBox = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "AutoCollapse__CollapsedDisplayBox",
  componentId: "sc-9fmepq-1"
})(["overflow-y:hidden;", " -webkit-mask-image:linear-gradient(to bottom,black 50%,transparent 100%);mask-image:linear-gradient(to bottom,black 50%,transparent 100%);"], props => props.$maxCollapsedHeight && `max-height: ${props.$maxCollapsedHeight + 20}px;`);
/* The the padding to apply to the collapse blur; useful in the case of making sure only the blur effect is not applied unnecessarily. For
 * example maxCollapsedHeight=20 and collapsePadding=22 ensure that content is collapsed only when there's more than two lines and if there's
 * only two lines the blur effect is not applied.
 */

const COLLAPSE_PADDING = 20;

/**
 * Autocollapse component based on `components/HTMLContent.js`
 */
const AutoCollapse = ({
  children,
  maxCollapsedHeight
}) => {
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isCollapsed, setIsCollapsed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const contentRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  const DisplayBox = !isCollapsed || isOpen ? InlineDisplayBox : CollapsedDisplayBox;

  const toggleIsOpen = () => setOpen(!isOpen);

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (contentRef.current) {
      if (contentRef.current.clientHeight > maxCollapsedHeight + COLLAPSE_PADDING) {
        setIsCollapsed(true);
      }
    }
  }, [children]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(DisplayBox, {
      ref: contentRef,
      $maxCollapsedHeight: maxCollapsedHeight,
      children: children
    }), isCollapsed && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      as: "button",
      mt: 2,
      onClick: toggleIsOpen,
      role: "button",
      tabIndex: 0,
      onKeyDown: event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          toggleIsOpen();
        }
      },
      children: !isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "ExpandDescription",
          defaultMessage: [{
            "type": 0,
            "value": "Read full description"
          }]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_fa_solid_CaretDown__WEBPACK_IMPORTED_MODULE_1__.CaretDown, {
          size: "10px"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "W/V6+Y",
          defaultMessage: [{
            "type": 0,
            "value": "Collapse"
          }]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_fa_solid_CaretUp__WEBPACK_IMPORTED_MODULE_2__.CaretUp, {
          size: "10px"
        })]
      })
    })]
  });
};
AutoCollapse.__docgenInfo = {
  "description": "Autocollapse component based on `components/HTMLContent.js`",
  "methods": [],
  "displayName": "AutoCollapse",
  "props": {
    "children": {
      "required": true,
      "tsType": {
        "name": "ReactReactNode",
        "raw": "React.ReactNode"
      },
      "description": ""
    },
    "maxCollapsedHeight": {
      "required": true,
      "tsType": {
        "name": "number"
      },
      "description": ""
    }
  }
};

/***/ }),

/***/ 32827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gc": () => (/* binding */ isCaptchaEnabled)
/* harmony export */ });
/* unused harmony export PROVIDERS */
/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19358);
/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_toUpper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hcaptcha_react_hcaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42534);
/* harmony import */ var _hcaptcha_react_hcaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hcaptcha_react_hcaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3115);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sentry_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_env_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9269);
/* harmony import */ var _lib_hooks_useRecaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90281);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41433);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_10__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _excluded = ["onVerify", "onError"],
      _excluded2 = ["onVerify", "provider"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const PROVIDERS = {
  HCAPTCHA: 'HCAPTCHA',
  RECAPTCHA: 'RECAPTCHA'
};
const CAPTCHA_PROVIDER = PROVIDERS[lodash_toUpper__WEBPACK_IMPORTED_MODULE_0___default()((0,_lib_env_utils__WEBPACK_IMPORTED_MODULE_5__/* .getEnvVar */ .p)('CAPTCHA_PROVIDER'))] || PROVIDERS.HCAPTCHA;
const isCaptchaEnabled = () => {
  return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .parseToBoolean */ .DD)((0,_lib_env_utils__WEBPACK_IMPORTED_MODULE_5__/* .getEnvVar */ .p)('CAPTCHA_ENABLED'));
};

const ReCaptcha = _ref => {
  let {
    onVerify,
    onError
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    verify
  } = (0,_lib_hooks_useRecaptcha__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [verified, setVerified] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .useToasts */ .e1)();

  const handleClick = async () => {
    setLoading(true);

    try {
      const token = await verify();

      if (token) {
        onVerify({
          token
        });
        setVerified(true);
      }
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_10__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: e.message
      });
      onError?.(e);
    }

    setLoading(false);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    checked: verified,
    onChange: handleClick,
    isLoading: loading,
    size: 18,
    label: verified ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "Captcha.Button.Verified",
      defaultMessage: [{
        "type": 0,
        "value": "Verified Human."
      }]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "Captcha.Button.Verify",
      defaultMessage: [{
        "type": 0,
        "value": "I'm not a Robot."
      }]
    })
  }, props), {}, {
    disabled: verified
  }));
};

const Captcha = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((_ref2, captchaRef) => {
  let {
    onVerify,
    provider
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  const HCAPTCHA_SITEKEY = (0,_lib_env_utils__WEBPACK_IMPORTED_MODULE_5__/* .getEnvVar */ .p)('HCAPTCHA_SITEKEY');
  const RECAPTCHA_SITE_KEY = (0,_lib_env_utils__WEBPACK_IMPORTED_MODULE_5__/* .getEnvVar */ .p)('RECAPTCHA_SITE_KEY');

  const handleVerify = obj => {
    onVerify(_objectSpread(_objectSpread({}, obj), {}, {
      provider
    }));
  };

  const handleError = err => {
    _sentry_browser__WEBPACK_IMPORTED_MODULE_3__.captureException(err);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    onVerify(null);
  }, []);

  if (!isCaptchaEnabled()) {
    return null;
  }

  let captcha = null;

  if (provider === PROVIDERS.HCAPTCHA && HCAPTCHA_SITEKEY) {
    captcha = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_hcaptcha_react_hcaptcha__WEBPACK_IMPORTED_MODULE_2___default()), {
      ref: captchaRef,
      sitekey: HCAPTCHA_SITEKEY,
      onVerify: token => handleVerify({
        token
      }),
      onError: handleError
    });
  } else if (provider === PROVIDERS.RECAPTCHA && RECAPTCHA_SITE_KEY) {
    captcha = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ReCaptcha, _objectSpread({
      onVerify: handleVerify,
      onError: handleError
    }, props));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu, {
    "data-cy": "captcha",
    children: captcha
  });
});
Captcha.displayName = 'Captcha';
Captcha.defaultProps = {
  provider: CAPTCHA_PROVIDER
};
Captcha.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Captcha",
  "props": {
    "provider": {
      "defaultValue": {
        "value": "PROVIDERS[toUpper(getEnvVar('CAPTCHA_PROVIDER'))] || PROVIDERS.HCAPTCHA",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onVerify": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Captcha);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FH": () => (/* binding */ serializeAddress),
/* harmony export */   "H5": () => (/* binding */ SimpleLocationFieldRenderer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormikLocationFieldRenderer */
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59591);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2707);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29242);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87262);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66943);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shopify_address__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_14__]);
([_shopify_address__WEBPACK_IMPORTED_MODULE_9__, _StyledInputField__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const _excluded = ["info", "required", "value", "name", "label", "onChange", "id", "error"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/** Constants */

/** Countries present in InputTypeCountry dropdown but not Shopify's API.
 * All except Antarctica (AQ) are U.S. territories and use that address format.
 * The Shopify default address format is also U.S. format therefore for all
 * of these we use the U.S. default.
 * All language codes in locales.js are supported by the Shopify API 👍
 */


const missingCountries = ['AS', 'AQ', 'GU', 'MH', 'FM', 'MP', 'PW', 'PR', 'VI'];
const addressFormatter = new _shopify_address__WEBPACK_IMPORTED_MODULE_9__["default"]('EN');

const wrangleAddressData = addressInfo => {
  if (typeof addressInfo !== 'object') {
    return addressInfo;
  }

  const formLayout = addressInfo.formatting.edit;
  const necessaryFields = ['address1', 'address2', 'city', 'zip', 'province']; // Get form fields in correct order for the chosen country

  const matches = formLayout.match(/([A-Za-z])\w+/g).filter(match => necessaryFields.includes(match)); // Change field names to match https://github.com/Shopify/quilt/blob/master/packages/address/src/utilities.ts

  const mappedMatches = matches.map(match => {
    if (match === 'zip') {
      return 'postalCode';
    } else if (match === 'province') {
      return 'zone';
    } else {
      return match;
    }
  });
  const addressFormFields = Object.entries(addressInfo.labels).filter(entry => mappedMatches.includes(entry[0])).sort((a, b) => {
    return mappedMatches.indexOf(a[0]) - mappedMatches.indexOf(b[0]);
  }); // Check if we need to render drop-down list of "zones" (i.e. provinces, states, etc.)

  const zones = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(addressInfo, 'zones', []);

  if (mappedMatches.includes('zone') && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(zones)) {
    const zoneIndex = addressFormFields.find(idx => idx[0] === 'zone');
    zoneIndex.push(addressInfo.zones);
  }

  return addressFormFields;
};

const serializeAddress = address => {
  return Object.keys(address).sort().map(k => address[k]).join('\n');
};
/** Upon changing selectedCountry, if previous address fields are no longer needed,
 * it clears them i.e. changing from Canada to Germany in the Expense form we no
 * longer need 'zone' in our payeeLocation.address object.
 */

const getAddressFieldDifferences = (formAddressValues, addressFields) => {
  const addressFieldsArray = addressFields.map(field => field[0]);
  const differenceInAddressFields = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(Object.keys(formAddressValues).filter(key => !addressFieldsArray.includes(key)));

  if (differenceInAddressFields) {
    return lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(formAddressValues, addressFieldsArray);
  } else {
    return formAddressValues;
  }
};

const buildZoneOption = zone => {
  return {
    value: zone.name,
    label: `${lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(zone.name, {
      length: 30
    })} - ${zone.code}`
  };
};

const ZoneSelect = _ref => {
  let {
    info,
    required,
    value,
    name,
    label,
    onChange,
    id,
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const zones = info || [];
  const zoneOptions = react__WEBPACK_IMPORTED_MODULE_8___default().useMemo(() => lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(zones.map(buildZoneOption), 'label'), [zones]); // Reset zone if not supported

  react__WEBPACK_IMPORTED_MODULE_8___default().useEffect(() => {
    if (zoneOptions) {
      const formValueZone = value;

      if (formValueZone && !zoneOptions.find(option => option.value === formValueZone)) {
        onChange({
          target: {
            name: name,
            value: null
          }
        });
      }
    }
  }, [zoneOptions]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, _objectSpread({
    name,
    required
  }, props)), {}, {
    inputId: id,
    minWidth: 150,
    options: zoneOptions,
    error: error,
    placeholder: `Please select your ${label}` // TODO i18n
    ,
    "data-cy": `address-${name}` // TODO: Should not be locked on payee-address
    ,
    value: zoneOptions.find(option => option?.value === value) || null,
    onChange: v => {
      onChange({
        target: {
          name: name,
          value: v.value
        }
      });
    }
  }));
};

const FormikLocationFieldRenderer = ({
  name,
  label,
  required,
  prefix,
  info
}) => {
  const validate = required ? value => value ? undefined : `${label} is required` : undefined;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
    name: `${prefix}.${name}`,
    validate: validate,
    children: ({
      field,
      meta
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      name: field.name,
      label: label,
      labelFontSize: "13px",
      mt: 3,
      error: meta.error,
      children: inputProps => {
        switch (name) {
          case 'zone':
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(ZoneSelect, _objectSpread({
              id: inputProps.id,
              name: inputProps.name,
              required: required,
              label: label,
              info: info
            }, field));

          default:
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              error: meta.error,
              "data-cy": `address-${name}`
            }));
        }
      }
    })
  }, name);
};
const SimpleLocationFieldRenderer = ({
  name,
  label,
  required,
  prefix,
  value,
  info,
  onChange,
  fieldProps
}) => {
  const [isTouched, setIsTouched] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
  const error = required && isTouched && lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(value) ? `${label} is required` : undefined;
  const inputName = prefix ? `${prefix}.${name}` : name;

  const dispatchOnChange = e => {
    onChange(e);

    if (!isTouched) {
      setIsTouched(true);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    name: inputName,
    label: label,
    labelFontSize: "13px",
    mt: 3,
    error: error,
    required: required
  }, fieldProps), {}, {
    children: inputProps => {
      switch (name) {
        case 'zone':
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(ZoneSelect, {
            id: inputProps.id,
            name: inputProps.name,
            required: required,
            label: label,
            onChange: dispatchOnChange,
            error: error,
            info: info,
            value: value
          });

        default:
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
            value: value,
            error: error,
            onChange: dispatchOnChange,
            "data-cy": `address-${name}`
          }));
      }
    }
  }), name);
};

/**
 * This component aims to create a responsive address form based on the user's country that they select.
 * Shopify has a good article about internationalizing address forms: https://ux.shopify.com/designing-address-forms-for-everyone-everywhere-f481f6baf513
 * And they also have an API and npm package to tell you what address fields a country uses, and in what order https://github.com/Shopify/quilt/tree/master/packages/address
 * Additional material:
 * Shopify API country codes ("ISO 3166-1 alpha-2 country codes with some differences"): https://shopify.dev/docs/admin-api/graphql/reference/common-objects/countrycode
 * Shopify locale code uses ISO locale codes: https://shopify.dev/docs/admin-api/graphql/reference/translations/locale
 * How Etsy Localizes addresses https://codeascraft.com/2018/09/26/how-etsy-localizes-addresses/
 * Form i18n techniques https://medium.com/flexport-design/form-internationalization-techniques-3e4d394cd7e5
 */
const I18nAddressFields = ({
  selectedCountry,
  value,
  onCountryChange,
  required,
  prefix,
  onLoadError,
  Component,
  fieldProps
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.useIntl)();
  /** If country chosen from InputTypeCountry is one of missingCountries, use 'US' instead */

  const country = missingCountries.includes(selectedCountry) ? 'US' : selectedCountry;
  /** Prepare the address form data */

  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(null);
  const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(null);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(true);
  /** Pass user's chosen locale to AddressFormatter if present. */

  react__WEBPACK_IMPORTED_MODULE_8___default().useEffect(() => {
    if (intl.locale) {
      addressFormatter.updateLocale(intl.locale);
    }
  }, [intl.locale]);
  react__WEBPACK_IMPORTED_MODULE_8___default().useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await addressFormatter.getCountry(country);
        setData(lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(response, ['formatting', 'labels', 'optionalLabels', 'zones']));

        const countryInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(response, ['formatting', 'labels', 'optionalLabels', 'zones']);

        const addressFields = wrangleAddressData(countryInfo);
        setFields(addressFields);
        onCountryChange(getAddressFieldDifferences(value, addressFields));
      } catch (e) {
        onLoadError?.(); // eslint-disable-next-line no-console

        console.warn('Call to Shopify API failed. Falling back to plain address form. Error: ', e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCountry]);

  if (!selectedCountry) {
    return null;
  }

  if (loading || !fields) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      width: "100%",
      height: 163,
      mt: 3
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
    children: fields.map(([fieldName, fieldLabel, fieldInfo]) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(Component, {
      prefix: prefix,
      name: fieldName,
      label: fieldLabel,
      info: fieldInfo,
      value: value?.[fieldName],
      required: required === false ? false : !Object.keys(data?.optionalLabels).includes(fieldName),
      fieldProps: fieldProps,
      onChange: ({
        target: {
          name,
          value: fieldValue
        }
      }) => onCountryChange(lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_7___default()(value || {}), name, fieldValue))
    }, fieldName))
  });
};

I18nAddressFields.defaultProps = {
  Component: FormikLocationFieldRenderer // For legacy compatibility

};
I18nAddressFields.__docgenInfo = {
  "description": "This component aims to create a responsive address form based on the user's country that they select.\nShopify has a good article about internationalizing address forms: https://ux.shopify.com/designing-address-forms-for-everyone-everywhere-f481f6baf513\nAnd they also have an API and npm package to tell you what address fields a country uses, and in what order https://github.com/Shopify/quilt/tree/master/packages/address\nAdditional material:\nShopify API country codes (\"ISO 3166-1 alpha-2 country codes with some differences\"): https://shopify.dev/docs/admin-api/graphql/reference/common-objects/countrycode\nShopify locale code uses ISO locale codes: https://shopify.dev/docs/admin-api/graphql/reference/translations/locale\nHow Etsy Localizes addresses https://codeascraft.com/2018/09/26/how-etsy-localizes-addresses/\nForm i18n techniques https://medium.com/flexport-design/form-internationalization-techniques-3e4d394cd7e5",
  "methods": [],
  "displayName": "I18nAddressFields",
  "props": {
    "Component": {
      "defaultValue": {
        "value": "({ name, label, required, prefix, info }) => {\n  const validate = required ? value => (value ? undefined : `${label} is required`) : undefined;\n  return (\n    <Field key={name} name={`${prefix}.${name}`} validate={validate}>\n      {({ field, meta }) => (\n        <StyledInputField name={field.name} label={label} labelFontSize=\"13px\" mt={3} error={meta.error}>\n          {inputProps => {\n            switch (name) {\n              case 'zone':\n                return (\n                  <ZoneSelect\n                    id={inputProps.id}\n                    name={inputProps.name}\n                    required={required}\n                    label={label}\n                    info={info}\n                    {...field}\n                  />\n                );\n              default:\n                return <StyledInput {...inputProps} {...field} error={meta.error} data-cy={`address-${name}`} />;\n            }\n          }}\n        </StyledInputField>\n      )}\n    </Field>\n  );\n}",
        "computed": false
      },
      "description": "A function used to render the field",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "selectedCountry": {
      "description": "ISO country code passed down from ExpenseFormPayeeStep.",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "prefix": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "required": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "value": {
      "description": "String if using old address textarea; object if using new address fields.",
      "type": {
        "name": "union",
        "value": [{
          "name": "object"
        }, {
          "name": "string"
        }]
      },
      "required": false
    },
    "onCountryChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onLoadError": {
      "description": "Called when the call to the Shopify API fails",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "fieldProps": {
      "description": "Additional props to be passed to `Component`",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (I18nAddressFields);
FormikLocationFieldRenderer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FormikLocationFieldRenderer",
  "props": {
    "info": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "label": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "prefix": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "required": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "fieldProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
SimpleLocationFieldRenderer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SimpleLocationFieldRenderer",
  "props": {
    "info": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "label": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "prefix": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "required": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "fieldProps": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Steps)
/* harmony export */ });
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25359);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * A stepper component to manage state and validations for multi-steps processes.
 */
class Steps extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      /** A set of visited steps */
      visited: new Set([]),

      /** True if an async `validate` is currently running */
      isValidating: false
    });

    _defineProperty(this, "redirectIfStepIsInvalid", () => {
      const currentStep = this.getStepByName(this.props.currentStepName);
      const lastValidStep = this.getLastCompletedStep();
      const maxIdx = lastValidStep ? lastValidStep.index + 1 : 0;

      if (!currentStep || currentStep.index > maxIdx) {
        this.onInvalidStep(currentStep, lastValidStep);
      } else {
        this.props.steps.slice(0, currentStep.index + 1).map(this.markStepAsVisited);
      }
    });

    _defineProperty(this, "onInvalidStep", (step, lastValidStep) => {
      const firstStep = this.getStepByIndex(0);
      const targetStep = lastValidStep ? this.props.steps[lastValidStep.index + 1] : firstStep;
      return this.goToStep(targetStep, {
        ignoreValidation: true
      });
    });

    _defineProperty(this, "markStepAsVisited", step => {
      this.setState(state => ({
        visited: state.visited.add(step.name)
      }));
    });

    _defineProperty(this, "buildStep", (baseStep, index) => {
      return _objectSpread(_objectSpread({}, baseStep), {}, {
        index: index,
        isLastStep: index === this.props.steps.length - 1,
        isVisited: this.state.visited.has(baseStep.name)
      });
    });

    _defineProperty(this, "validateCurrentStep", async (action = null) => {
      const currentStep = this.getStepByName(this.props.currentStepName);

      if (!currentStep) {
        return false;
      } else if (currentStep.validate) {
        this.setState({
          isValidating: true
        });
        const result = await currentStep.validate(action);
        this.setState({
          isValidating: false
        });

        if (!result) {
          return false;
        }
      } else if (currentStep.isCompleted === false && action !== 'prev') {
        return false;
      }

      return true;
    });

    _defineProperty(this, "goNext", async () => {
      const currentStep = this.getStepByName(this.props.currentStepName);

      if (currentStep.index === this.props.steps.length - 1) {
        if (await this.validateCurrentStep()) {
          return this.props.onComplete();
        }
      } else {
        const nextStep = this.props.steps[currentStep.index + 1];
        this.goToStep(this.buildStep(nextStep, currentStep.index + 1));
      }

      return true;
    });

    _defineProperty(this, "goBack", () => {
      const currentStep = this.getStepByName(this.props.currentStepName);

      if (!currentStep || currentStep.index === 0) {
        return false;
      }

      const prevStep = this.props.steps[currentStep.index - 1];
      this.goToStep(this.buildStep(prevStep, currentStep.index - 1));
      return true;
    });

    _defineProperty(this, "goToStep", async (step, opts = {}) => {
      const currentStep = this.getStepByName(this.props.currentStepName);
      let ignoreValidation = opts.ignoreValidation;

      if (step.index < currentStep?.index) {
        opts.action = 'prev';

        if (!ignoreValidation) {
          // Ignore validation when going back if it's a new step
          const lastValidStep = this.getLastCompletedStep();
          const lastVisitedStep = this.getLastVisitedStep(lastValidStep);
          ignoreValidation = lastVisitedStep.index === currentStep.index;
        }
      }

      if (!ignoreValidation && !(await this.validateCurrentStep(opts.action))) {
        return false;
      }

      this.props.onStepChange(step);
      return true;
    });
  }

  componentDidMount() {
    if (!this.props.delayCompletionCheck) {
      this.redirectIfStepIsInvalid();
    }
  }

  componentDidUpdate(oldProps) {
    if (!this.props.delayCompletionCheck) {
      if (oldProps.delayCompletionCheck || oldProps.currentStepName !== this.props.currentStepName) {
        this.redirectIfStepIsInvalid();
      }
    }
  }

  getLastCompletedStep() {
    const {
      steps
    } = this.props;
    const firstInvalidStepIdx = steps.findIndex(step => !step.isCompleted);
    let lastValidStepIdx = firstInvalidStepIdx - 1;

    if (firstInvalidStepIdx === -1) {
      // No invalid step, last step is valid
      lastValidStepIdx = steps.length - 1;
    } else if (firstInvalidStepIdx === 0) {
      return null;
    }

    return this.buildStep(steps[lastValidStepIdx], lastValidStepIdx);
  }

  getLastVisitedStep(lastVisitedStep) {
    const lastVisitedStepIdx = lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_0___default()(this.props.steps, s => this.state.visited.has(s.name), lastVisitedStep && !lastVisitedStep.isLastStep ? lastVisitedStep.index + 1 : this.props.steps.length - 1);

    const returnedStepIdx = lastVisitedStepIdx === -1 ? 0 : lastVisitedStepIdx;
    return this.buildStep(this.props.steps[returnedStepIdx], returnedStepIdx);
  }

  getStepByIndex(stepIdx) {
    return stepIdx === -1 || stepIdx >= this.props.steps.length ? null : this.buildStep(this.props.steps[stepIdx], stepIdx);
  }

  getStepByName(stepName) {
    return this.getStepByIndex(this.props.steps.findIndex(s => s.name === stepName));
  }

  // --- Rendering ---
  render() {
    const currentStep = this.getStepByName(this.props.currentStepName); // Bad usage - `currentStepName` should always exist. We return null to
    // ensure this does not result in a crash, componentDidUpdate will take
    // care of the redirection.

    if (!currentStep) {
      return null;
    }

    const lastValidStep = this.getLastCompletedStep();
    const prevStep = this.getStepByIndex(currentStep.index - 1);
    const nextStep = this.getStepByIndex(currentStep.index + 1);
    return this.props.children({
      currentStep,
      prevStep,
      nextStep,
      lastValidStep,
      isValidating: this.state.isValidating,
      lastVisitedStep: this.getLastVisitedStep(lastValidStep),
      steps: this.props.steps.map(this.buildStep),
      goNext: this.goNext,
      goBack: currentStep.index > 0 ? this.goBack : undefined,
      goToStep: this.goToStep,
      isValidStep: lastValidStep ? lastValidStep.index + 1 >= currentStep.index : currentStep.index === 0
    });
  }

}
Steps.__docgenInfo = {
  "description": "A stepper component to manage state and validations for multi-steps processes.",
  "methods": [{
    "name": "redirectIfStepIsInvalid",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onInvalidStep",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "step",
      "type": null
    }, {
      "name": "lastValidStep",
      "type": null
    }],
    "returns": null
  }, {
    "name": "markStepAsVisited",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "step",
      "type": null
    }],
    "returns": null
  }, {
    "name": "buildStep",
    "docblock": "Build a step to be passed to children",
    "modifiers": [],
    "params": [{
      "name": "baseStep"
    }, {
      "name": "index"
    }],
    "returns": null,
    "description": "Build a step to be passed to children"
  }, {
    "name": "getLastCompletedStep",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getLastVisitedStep",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "lastVisitedStep",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getStepByIndex",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "stepIdx",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getStepByName",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "stepName",
      "type": null
    }],
    "returns": null
  }, {
    "name": "validateCurrentStep",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "action",
      "type": null
    }],
    "returns": null
  }, {
    "name": "goNext",
    "docblock": "Go to the next step. Will be blocked if current step is not validated.",
    "modifiers": ["async"],
    "params": [],
    "returns": null,
    "description": "Go to the next step. Will be blocked if current step is not validated."
  }, {
    "name": "goBack",
    "docblock": "Go to previous step. Will be blocked if current step is not validated.",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Go to previous step. Will be blocked if current step is not validated."
  }, {
    "name": "goToStep",
    "docblock": "Go to given step. Will be blocked if current step is not validated, unless\nif `opts.ignoreValidation` is true.",
    "modifiers": ["async"],
    "params": [{
      "name": "step"
    }, {
      "name": "opts"
    }],
    "returns": null,
    "description": "Go to given step. Will be blocked if current step is not validated, unless\nif `opts.ignoreValidation` is true."
  }],
  "displayName": "Steps",
  "props": {
    "steps": {
      "description": "The steps list",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "name": {
              "name": "string",
              "description": "The step name, **must be unique**.",
              "required": true
            },
            "validate": {
              "name": "func",
              "description": "A function triggered when leaving the step. Return false to abort.",
              "required": false
            },
            "isCompleted": {
              "name": "bool",
              "description": "A boolean indicating if the step has been completed",
              "required": false
            }
          }
        }
      },
      "required": true
    },
    "currentStepName": {
      "description": "The current step name. The step must be present in `steps`",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onStepChange": {
      "description": "Called to change step",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onComplete": {
      "description": "Called when the last step is submitted",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "children": {
      "description": "A function that gets passed everything needed to show the current step",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "delayCompletionCheck": {
      "description": "If false on initial mount, the check for steps completion (and thus the redirect) will be delayed until the flag becomes true",
      "type": {
        "name": "bool"
      },
      "required": true
    }
  }
};

/***/ }),

/***/ 65598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9443);
/* harmony import */ var _styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74387);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "StepsProgress__Circle",
  componentId: "sc-1xgfvkb-0"
})(["circle{fill:", ";stroke:#c4c7cc;stroke-width:1px;", " ", " ", "}text{font-size:14px;", "}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.white.full'), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["stroke:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;stroke-width:2px;&:hover{fill:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.100')), props => props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";&:hover{fill:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400'))), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["fill:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')));
const Bubble = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__Bubble",
  componentId: "sc-1xgfvkb-1"
})(["justify-content:center;align-items:center;flex:0 0 34px;height:34px;width:34px;border-radius:16px;cursor:default;color:#c4c7cc;background:", ";transition:box-shadow 0.3s,background 0.3s;z-index:2;", " ", " ", " ", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.white.full'), props => !props.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600')), props => !props.disabled && props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;&:hover{background:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.100')), props => props.checked && (props.disabled ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.500')) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:", ";&:hover{background:", ";})"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.600'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400'))), props => props.focus && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:0 0 0 4px ", ";"], props => props.theme.colors.primary[100]));
/**
 * Border generated with https://gigacore.github.io/demos/svg-stroke-dasharray-generator/
 * to have a consistent result across browsers.
 */

const SeparatorLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, _objectSpread(_objectSpread({
  alignItems: "center"
}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("svg", {
    width: "100%",
    height: "2",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("line", {
      strokeDasharray: "5%",
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "0"
    })
  })
}))).withConfig({
  displayName: "StepsProgress__SeparatorLine",
  componentId: "sc-1xgfvkb-2"
})(["height:100%;z-index:1;flex-grow:1;flex-shrink:1;line{stroke-width:1;stroke:#c4c7cc;transition:stroke 0.3s;}", " ", ""], props => props.active && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["line{stroke:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.400')), props => props.transparent && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["visibility:hidden;"]));
const StepMobile = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepMobile",
  componentId: "sc-1xgfvkb-3"
})(["width:100%;align-items:center;"]);
const StepsOuter = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsOuter",
  componentId: "sc-1xgfvkb-4"
})(["padding:12px 16px;@media (max-width:640px){background:#f5f7fa;}"]);
const StepsMobileLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__StepsMobileLeft",
  componentId: "sc-1xgfvkb-5"
})(["flex-grow:2;flex-direction:column;"]);
const StepsMobileRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress__StepsMobileRight",
  componentId: "sc-1xgfvkb-6"
})(["margin-left:auto;width:56px;height:56px;align-items:center;justify-content:center;flex-shrink:0;position:relative;"]);
const PieProgressWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "StepsProgress__PieProgressWrapper",
  componentId: "sc-1xgfvkb-7"
})(["left:0;position:absolute;top:0;width:100%;height:100%;z-index:0;"]);
const PieProgress = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieProgress",
  componentId: "sc-1xgfvkb-8"
})(["left:0;position:absolute;top:0;width:100%;height:100%;border-radius:50%;overflow:hidden;", " ", ""], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["clip:rect(0,", "px,", "px,", "px);"], props.pieSize, props.pieSize, props.pieSize / 2), props => props.progress && props.progress > 50 && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["clip:rect(auto,auto,auto,auto);"]));
const PieShadow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieShadow",
  componentId: "sc-1xgfvkb-9"
})(["width:100%;height:100%;", " border-radius:50%;"], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:", "px solid ", ";"], props.pieSize / 10, props.bgColor));
const PieHalfCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu).withConfig({
  displayName: "StepsProgress__PieHalfCircle",
  componentId: "sc-1xgfvkb-10"
})(["width:100%;height:100%;position:absolute;left:0;top:0;", " border-radius:50%;", ""], props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border:", "px solid #3498db;clip:rect(0,", "px,", "px,0);"], props.pieSize / 10, props.pieSize / 2, props.pieSize), props => props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500')));
const PieHalfCircleLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleLeft",
  componentId: "sc-1xgfvkb-11"
})(["", ""], props => props.progress && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transform:rotate(", "deg);"], props.progress * 3.6));
const PieHalfCircleRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PieHalfCircle).withConfig({
  displayName: "StepsProgress__PieHalfCircleRight",
  componentId: "sc-1xgfvkb-12"
})(["", ""], props => props.progress && props.progress > 50 ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transform:rotate(180deg);"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:none;"]));

const getBubbleContent = (idx, checked, disabled, focused, loading) => {
  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      color: checked ? '#FFFFFF' : 'primary.700',
      size: 14
    });
  } else if (checked) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_fa_solid_Check__WEBPACK_IMPORTED_MODULE_2__.Check, {
      color: "white",
      size: 14
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Circle, {
    disabled: disabled,
    checked: checked,
    focus: focused,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("circle", {
      cx: "50%",
      cy: "50%",
      r: "16px"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("text", {
      x: "50%",
      y: "51%",
      dominantBaseline: "middle",
      textAnchor: "middle",
      children: idx + 1
    })]
  });
};
/**
 * Shows numerated steps circles that can be clicked.
 */


const StepsProgress = ({
  steps,
  disabledStepNames,
  children,
  focus,
  loadingStep,
  onStepSelect,
  allCompleted,
  stepWidth,
  viewport
}) => {
  const focusIdx = focus ? steps.findIndex(step => step.name === focus.name) : -1;
  const mobileStepIdx = allCompleted ? steps.length - 1 : focusIdx > -1 ? focusIdx : 0;
  const mobileNextStepName = mobileStepIdx < steps.length - 1 ? steps[mobileStepIdx + 1].name : null;
  const mobileNextStepIdx = mobileNextStepName ? steps.findIndex(step => step.name === mobileNextStepName) : -1;
  const mobileNextStep = mobileNextStepIdx !== -1 && steps[mobileNextStepIdx];
  const progress = allCompleted ? 100 : 100 / steps.length * (mobileStepIdx + 1);
  const bgColor = '#D9DBDD';
  const pieSize = '56';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsOuter, {
    "data-cy": "steps-progress",
    children: [(viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      display: ['block', null, 'none'],
      width: "100%",
      "data-cy": "progress-destkop",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepMobile, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsMobileLeft, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.900",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "26px",
            mb: 1,
            children: steps[mobileStepIdx].label || steps[mobileStepIdx].name
          }), mobileNextStep && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.700",
            fontSize: "12px",
            lineHeight: "18px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "StepsProgress.mobile.next",
              defaultMessage: [{
                "type": 0,
                "value": "Next: "
              }, {
                "type": 1,
                "value": "stepName"
              }],
              values: {
                stepName: mobileNextStep.label || mobileNextStep.name
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StepsMobileRight, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PieProgressWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PieProgress, {
              progress: progress,
              pieSize: pieSize,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieHalfCircleLeft, {
                progress: progress,
                pieSize: pieSize
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieHalfCircleRight, {
                progress: progress,
                pieSize: pieSize
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PieShadow, {
              pieSize: pieSize,
              bgColor: bgColor
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
            color: "black.700",
            fontSize: "12px",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "StepsProgress.mobile.status",
              defaultMessage: [{
                "type": 1,
                "value": "from"
              }, {
                "type": 0,
                "value": " of "
              }, {
                "type": 1,
                "value": "to"
              }],
              values: {
                from: mobileStepIdx + 1,
                to: steps.length
              }
            })
          })]
        })]
      })
    }), (viewport !== _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.XSMALL */ .Pm.XSMALL || viewport === _lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* .VIEWPORTS.UNKNOWN */ .Pm.UNKNOWN) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      display: ['none', null, 'flex'],
      "data-cy": "progress-destkop",
      children: steps.map((step, idx) => {
        const stepName = step.name;
        const checked = idx < focusIdx || allCompleted;
        const focused = idx === focusIdx;
        const disabled = disabledStepNames.includes(stepName);
        const loading = loadingStep && stepName === loadingStep.name;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledFlex, {
          "data-cy": `progress-step-${stepName}`,
          flexDirection: "column",
          alignItems: "center",
          "data-disabled": disabled,
          $_css: stepWidth,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_StyledFlex2, {
            alignItems: "center",
            mb: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SeparatorLine, {
              active: checked || focused,
              transparent: idx === 0
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Bubble, {
              disabled: disabled,
              onClick: disabled ? undefined : onStepSelect && (() => onStepSelect(step)),
              checked: checked,
              focus: focused,
              children: getBubbleContent(idx, checked, disabled, focused, loading)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SeparatorLine, {
              active: checked,
              transparent: idx === steps.length - 1
            })]
          }), children && children({
            step,
            checked,
            focused
          })]
        }, stepName);
      })
    })]
  });
};

StepsProgress.defaultProps = {
  focused: null,
  loadingStep: null,
  disabledStepNames: [],
  stepWidth: '100%'
};
StepsProgress.__docgenInfo = {
  "description": "Shows numerated steps circles that can be clicked.",
  "methods": [],
  "displayName": "StepsProgress",
  "props": {
    "focused": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "required": false
    },
    "loadingStep": {
      "defaultValue": {
        "value": "null",
        "computed": false
      },
      "description": "Step will show a loading spinner",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "disabledStepNames": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "A list of steps that will be disabled (unclickable). Steps must exist in `steps`",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "stepWidth": {
      "defaultValue": {
        "value": "'100%'",
        "computed": false
      },
      "description": "Base step width",
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
    "steps": {
      "description": "The list of steps. Each step **must** be unique",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "custom",
          "raw": "stepType"
        }
      },
      "required": true
    },
    "children": {
      "description": "A renderer func. Gets passed an object like `{step, checked, focused}`",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "focus": {
      "description": "The currently focused step, or null if none focused yet",
      "type": {
        "name": "custom",
        "raw": "stepType"
      },
      "required": false
    },
    "onStepSelect": {
      "description": "Called when a step is clicked",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "allCompleted": {
      "description": "If true, all steps will be marked as completed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "viewport": {
      "description": "@ignore from withViewport",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(VIEWPORTS)"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withViewport__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(StepsProgress));

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex",
  componentId: "sc-1xgfvkb-13"
})(p => ({
  flexGrow: 1,
  flexBasis: p.$_css
}));

var _StyledFlex2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC).withConfig({
  displayName: "StepsProgress___StyledFlex2",
  componentId: "sc-1xgfvkb-14"
})({
  width: '100%'
});

/***/ }),

/***/ 84985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ OTHER_AMOUNT_KEY),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42038);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93129);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledButtonSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16738);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const getButtonDisplay = (index, options, isSelected) => {
  if (index === 0 || index === options.length - 1 || isSelected) {
    // Ensure first, last and selected values are always displayed
    return 'block';
  } else if (index < 2) {
    // Limit to 4 on medium screens
    return ['none', 'block'];
  } else if (index < 4) {
    // Limit to 3 on small screens
    return ['none', null, 'block'];
  } else {
    // Never show more than 5 options
    return 'none';
  }
};

const FONT_SIZES = ['15px', null, '20px'];
const LINE_HEIGHTS = ['23px', null, '28px'];
const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_4___default().span.withConfig({
  displayName: "StyledAmountPicker__ButtonText",
  componentId: "sc-8k7jl-0"
})(props => (0,_styled_system_css__WEBPACK_IMPORTED_MODULE_2__.css)({
  lineHeight: LINE_HEIGHTS,
  fontSize: props.isSelected ? FONT_SIZES : ['15px', null, '18px'],
  fontWeight: props.isSelected ? 500 : 400
}));
const OTHER_AMOUNT_KEY = 'other';
/**
 * A money amount picker that shows a button set to pick between presets.
 */

const StyledAmountPicker = ({
  presets,
  currency,
  value,
  onChange
}) => {
  const [isOtherSelected, setOtherSelected] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(() => !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(value) && !presets?.includes(value));
  const hasPresets = presets?.length > 0;
  const options = hasPresets ? [...presets, OTHER_AMOUNT_KEY] : [OTHER_AMOUNT_KEY];
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (value && !presets?.includes(value) && !isOtherSelected) {
      setOtherSelected(true);
    }
  }, [presets, value, isOtherSelected]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
    width: "100%",
    children: options.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledButtonSet__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      id: "amount",
      "data-cy": "amount-picker",
      role: "group",
      "aria-label": "Contribution amount",
      width: "100%",
      justifyContent: "center",
      items: options,
      buttonProps: {
        px: 2,
        py: '5px'
      },
      selected: value,
      buttonPropsBuilder: ({
        index,
        isSelected
      }) => ({
        display: getButtonDisplay(index, options, isSelected)
      }),
      onChange: value => {
        onChange(value);
        setOtherSelected(false);
      },
      children: ({
        item,
        isSelected
      }) => {
        switch (item) {
          case OTHER_AMOUNT_KEY:
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ButtonText, {
              isSelected: isSelected,
              "data-cy": "amount-picker-btn-other",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "contribution.amount.other.label",
                defaultMessage: [{
                  "type": 0,
                  "value": "Other"
                }]
              })
            });

          case 0:
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ButtonText, {
              isSelected: isSelected,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "Amount.Free",
                defaultMessage: [{
                  "type": 0,
                  "value": "Free"
                }]
              })
            });

          default:
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ButtonText, {
              isSelected: isSelected,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                value: item,
                currency: currency,
                formatWithSeparators: true,
                precision: "auto"
              })
            });
        }
      }
    })
  });
};

StyledAmountPicker.__docgenInfo = {
  "description": "A money amount picker that shows a button set to pick between presets.",
  "methods": [],
  "displayName": "StyledAmountPicker",
  "props": {
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "value": {
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "presets": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "number"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledAmountPicker);

/***/ }),

/***/ 90307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40986);
/* harmony import */ var _I18nAddressFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85662);
/* harmony import */ var _InputTypeCountry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32143);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87262);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93150);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_I18nAddressFields__WEBPACK_IMPORTED_MODULE_4__, _StyledInputField__WEBPACK_IMPORTED_MODULE_6__]);
([_I18nAddressFields__WEBPACK_IMPORTED_MODULE_4__, _StyledInputField__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const _excluded = ["id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const DEFAULT_LOCATION = {
  country: null,
  address: null,
  structured: null
};
/**
 * A component to input a location. It tries to use the structured address if available,
 * and fallbacks on the raw address if not.
 */

const StyledInputLocation = ({
  name,
  location,
  autoDetectCountry,
  labelFontSize,
  labelFontWeight,
  onChange,
  errors,
  prefix,
  required
}) => {
  const [useFallback, setUseFallback] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const forceLegacyFormat = Boolean(!location?.structured && location?.address);
  const hasCountry = Boolean(location?.country);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      name: `${prefix}country`,
      htmlFor: `${prefix}country`,
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "ExpenseForm.ChooseCountry",
        defaultMessage: [{
          "type": 0,
          "value": "Choose country"
        }]
      }),
      labelFontSize: labelFontSize,
      labelFontWeight: labelFontWeight,
      error: (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_3__/* .formatFormErrorMessage */ .$m)(intl, errors?.country),
      required: required,
      children: _ref => {
        let {
          id
        } = _ref,
            inputProps = _objectWithoutProperties(_ref, _excluded);

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_InputTypeCountry__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
          inputId: id,
          value: location?.country,
          autoDetect: autoDetectCountry,
          onChange: country => {
            onChange(_objectSpread(_objectSpread({}, location || DEFAULT_LOCATION), {}, {
              country
            }));

            if (setUseFallback) {
              setUseFallback(false);
            }
          }
        }));
      }
    }), hasCountry && !useFallback && !forceLegacyFormat ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_I18nAddressFields__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
      selectedCountry: location.country,
      value: location.structured || {},
      onLoadError: () => setUseFallback(true) // TODO convert from structured to raw
      ,
      Component: _I18nAddressFields__WEBPACK_IMPORTED_MODULE_4__/* .SimpleLocationFieldRenderer */ .H5,
      fieldProps: {
        labelFontSize,
        labelFontWeight
      },
      required: required,
      onCountryChange: structured => onChange(lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, location || DEFAULT_LOCATION), {}, {
        structured
      }), ['name', 'address', 'country', 'structured']))
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      name: `${prefix}${name}`,
      label: intl.formatMessage({
        id: "collective.address.label",
        defaultMessage: [{
          "type": 0,
          "value": "Address"
        }]
      }),
      required: true,
      mt: 3,
      labelFontSize: labelFontSize,
      labelFontWeight: labelFontWeight,
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, inputProps), {}, {
        disabled: !hasCountry,
        "data-cy": `${prefix}address`,
        minHeight: 100,
        placeholder: "P. Sherman 42\nWallaby Way\nSydney",
        defaultValue: location?.address || '',
        onChange: e => onChange(_objectSpread(_objectSpread({}, location || DEFAULT_LOCATION), {}, {
          address: e.target.value
        }))
      }))
    })]
  });
};

StyledInputLocation.defaultProps = {
  required: true,
  prefix: ''
};
StyledInputLocation.__docgenInfo = {
  "description": "A component to input a location. It tries to use the structured address if available,\nand fallbacks on the raw address if not.",
  "methods": [],
  "displayName": "StyledInputLocation",
  "props": {
    "required": {
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
    "prefix": {
      "defaultValue": {
        "value": "''",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "autoDetectCountry": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "labelFontWeight": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "labelFontSize": {
      "description": "",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "location": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "structured": {
            "name": "object",
            "required": false
          },
          "address": {
            "name": "string",
            "required": false
          },
          "country": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "errors": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledInputLocation);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fa_solid_Envelope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99493);
/* harmony import */ var _styled_icons_fa_solid_Envelope__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Envelope__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62131);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97274);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const Newsletter = ({
  defaultEmail
}) => {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        as: "form",
        action: "https://opencollective.us12.list-manage.com/subscribe/post?u=88fc8f0f3b646152f1cfe447a&id=475db6d2d7",
        method: "post",
        name: "mc-embedded-subscribe-form",
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          borderRadius: 10,
          border: "1px solid #9D9FA3",
          bg: "white.full",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
          width: [1, null, '400px'],
          pl: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
            color: "#5F617D",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_fa_solid_Envelope__WEBPACK_IMPORTED_MODULE_1__.Envelope, {
              size: "16"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            bare: true,
            fontSize: "14px",
            name: "EMAIL",
            defaultValue: defaultEmail || LoggedInUser?.email,
            px: 3,
            py: 2,
            minWidth: [50, 200],
            placeholder: "Enter your email address",
            type: "email",
            width: 1,
            color: "black.800"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            py: "10px",
            px: "14px",
            fontSize: "13px",
            lineHeight: "16px",
            name: "subscribe",
            type: "submit",
            borderRadius: "0 10px 10px 0",
            border: "none",
            borderLeft: "1px solid #9D9FA3",
            outline: "none",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "newsletter.subscribe",
              defaultMessage: [{
                "type": 0,
                "value": "Subscribe"
              }]
            })
          })]
        })
      })
    })
  });
};

Newsletter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Newsletter",
  "props": {
    "defaultEmail": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);

/***/ }),

/***/ 26555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47988);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const ChangeTierWarningModal = ({
  onClose,
  tierName,
  onConfirm
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: "100%",
    maxWidth: "570px",
    onClose: onClose,
    header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "Frequency.change",
      defaultMessage: [{
        "type": 0,
        "value": "Change frequency?"
      }]
    }),
    continueHandler: onConfirm,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__.P, {
      fontSize: "14px",
      lineHeight: "18px",
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "contribute.changeFrequency.warning",
        defaultMessage: [{
          "type": 0,
          "value": "If you change the frequency, you will not contribute to this specific "
        }, {
          "type": 1,
          "value": "tierName"
        }, {
          "type": 0,
          "value": " tier"
        }],
        values: {
          tierName: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("q", {
            children: tierName
          })
        }
      })
    })
  });
};

ChangeTierWarningModal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChangeTierWarningModal",
  "props": {
    "onClose": {
      "description": "handles how the modal is closed",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onConfirm": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "tierName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeTierWarningModal);

/***/ }),

/***/ 97208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51082);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const CollectiveTitleContainer = ({
  collective,
  useLink,
  children,
  linkColor
}) => {
  if (useLink) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      as: _Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
      href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getCollectivePageRoute */ .x0)(collective),
      color: linkColor,
      children: children
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: children
    });
  }
};

CollectiveTitleContainer.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollectiveTitleContainer",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "useLink": {
      "description": "",
      "type": {
        "name": "bool"
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
    "linkColor": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectiveTitleContainer);

/***/ }),

/***/ 19993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23672);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11194);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40242);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__]);
_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const {
  USER,
  ORGANIZATION,
  COLLECTIVE,
  FUND,
  EVENT,
  PROJECT
} = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType */ .eV;

const formatAccountName = (intl, account) => {
  return account.isIncognito ? intl.formatMessage({
    id: "profile.incognito",
    defaultMessage: [{
      "type": 0,
      "value": "Incognito"
    }]
  }) : lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(account.name, {
    length: 40
  });
};

const getProfileOptions = (intl, profiles) => {
  const getOptionFromAccount = value => ({
    [_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__/* .FLAG_COLLECTIVE_PICKER_COLLECTIVE */ .rA]: true,
    value,
    label: value.name
  });

  const sortOptions = options => lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(options, 'value.name');

  const profileOptions = profiles.map(getOptionFromAccount);

  const profilesByType = lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default()(profileOptions, p => p.value.type);

  const myself = profilesByType[USER] || [];
  const myOrganizations = sortOptions(profilesByType[ORGANIZATION] || []); // Add incognito profile entry if it doesn't exists

  const hasIncognitoProfile = profiles.some(p => p.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.USER */ .eV.USER && p.isIncognito);

  if (!hasIncognitoProfile) {
    myself.push(getOptionFromAccount({
      id: 'incognito',
      type: _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.USER */ .eV.USER,
      isIncognito: true,
      name: intl.formatMessage({
        id: "profile.incognito",
        defaultMessage: [{
          "type": 0,
          "value": "Incognito"
        }]
      })
    }));
  } // Add an entry for creating a new organization


  myOrganizations.push({
    label: intl.formatMessage({
      id: "organization.create",
      defaultMessage: [{
        "type": 0,
        "value": "Create Organization"
      }]
    }),
    // Not displayed, but useful for searching
    value: null,
    isDisabled: true,
    [_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__/* .FLAG_NEW_COLLECTIVE */ .yZ]: true,
    types: [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION],
    __background__: 'white'
  });
  const options = [{
    options: myself,
    label: intl.formatMessage({
      id: "YjO/0+",
      defaultMessage: [{
        "type": 0,
        "value": "Myself"
      }]
    })
  }, {
    options: myOrganizations,
    label: intl.formatMessage({
      id: "organization",
      defaultMessage: [{
        "type": 0,
        "value": "My Organizations"
      }]
    })
  }];

  if (profilesByType[COLLECTIVE]?.length) {
    options.push({
      options: sortOptions(profilesByType[COLLECTIVE]),
      label: intl.formatMessage({
        id: "collective",
        defaultMessage: [{
          "type": 0,
          "value": "My Collectives"
        }]
      })
    });
  }

  if (profilesByType[FUND]?.length) {
    options.push({
      options: sortOptions(profilesByType[FUND]),
      label: intl.formatMessage({
        id: "funds",
        defaultMessage: [{
          "type": 0,
          "value": "My Funds"
        }]
      })
    });
  }

  if (profilesByType[PROJECT]?.length) {
    options.push({
      options: sortOptions(profilesByType[PROJECT]),
      label: intl.formatMessage({
        id: "FVO2wx",
        defaultMessage: [{
          "type": 0,
          "value": "My Projects"
        }]
      })
    });
  }

  if (profilesByType[EVENT]?.length) {
    options.push({
      options: sortOptions(profilesByType[EVENT]),
      label: intl.formatMessage({
        id: "events",
        defaultMessage: [{
          "type": 0,
          "value": "My Events"
        }]
      })
    });
  }

  return options;
};

const formatProfileOption = (option, _, intl) => {
  const account = option.value;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
      collective: account,
      radius: 32
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_StyledFlex, {
      flexDirection: "column",
      ml: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "20px",
        color: "black.900",
        children: formatAccountName(intl, account)
      }), account.isIncognito ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
        fontSize: "12px",
        lineHeight: "18px",
        color: "black.700",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
          id: "104ECN",
          defaultMessage: [{
            "type": 0,
            "value": "Private contribution - Check privacy box for info"
          }]
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
        fontSize: "12px",
        lineHeight: "18px",
        color: "black.700",
        children: [account.type === 'USER' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "ContributionFlow.PersonalProfile",
            defaultMessage: [{
              "type": 0,
              "value": "Personal profile"
            }]
          }), ' - ']
        }), account.slug ? `@${account.slug}` : account.email || '']
      })]
    })]
  });
};

const ContributeProfilePicker = ({
  profiles,
  selectedProfile,
  onChange
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const getOptionsArgs = [intl, profiles];
  const options = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => getProfileOptions(...getOptionsArgs), getOptionsArgs);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
    "data-cy": "contribute-profile-picker",
    inputId: "contribute-profile-picker",
    collective: selectedProfile,
    addLoggedInUserAsAdmin: true,
    options: options,
    isSearchable: profiles.length > 8,
    creatable: true,
    excludeAdminFields: true,
    types: [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION],
    formatOptionLabel: formatProfileOption,
    onChange: ({
      value
    }) => onChange(value),
    styles: {
      menu: {
        borderRadius: '16px'
      },
      menuList: {
        padding: '8px'
      },
      control: {
        padding: '14px 16px',
        borderRadius: '8px'
      }
    }
  });
};

ContributeProfilePicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributeProfilePicker",
  "props": {
    "profiles": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "selectedProfile": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeProfilePicker);

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC).withConfig({
  displayName: "ContributeProfilePicker___StyledFlex",
  componentId: "sc-e1sxuw-0"
})({
  whiteSpace: 'initial'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SG": () => (/* binding */ CONTRIBUTION_BLOCKER),
/* harmony export */   "Vx": () => (/* binding */ getContributionBlocker),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_allowed_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99708);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5700);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36648);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92129);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);















const CONTRIBUTION_BLOCKER = {
  DISABLED: 'DISABLED',
  NO_HOST: 'NO_HOST',
  NOT_ACTIVE: 'NOT_ACTIVE',
  NO_PAYMENT_PROVIDER: 'NO_PAYMENT_PROVIDER',
  TIER_EMPTY: 'TIER_EMPTY',
  TIER_MISSING: 'TIER_MISSING',
  TIER_EXPIRED: 'TIER_EXPIRED',
  NO_CUSTOM_CONTRIBUTION: 'NO_CUSTOM_CONTRIBUTION',
  NO_CRYPTO_CONTRIBUTION: 'NO_CRYPTO_CONTRIBUTION'
};
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [CONTRIBUTION_BLOCKER.DISABLED]: {
    id: "ZN02TE",
    defaultMessage: [{
      "type": 0,
      "value": "This account cannot receive financial contributions at this time"
    }]
  },
  [CONTRIBUTION_BLOCKER.NO_HOST]: {
    id: "createOrder.missingHost",
    defaultMessage: [{
      "type": 0,
      "value": "This collective doesn't have a host and can't accept financial contributions"
    }]
  },
  [CONTRIBUTION_BLOCKER.NOT_ACTIVE]: {
    id: "createOrder.inactiveCollective",
    defaultMessage: [{
      "type": 0,
      "value": "This collective is not active and can't accept financial contributions"
    }]
  },
  [CONTRIBUTION_BLOCKER.TIER_MISSING]: {
    id: "createOrder.missingTier",
    defaultMessage: [{
      "type": 0,
      "value": "Oops! This tier doesn't exist or has been removed by the collective admins."
    }]
  },
  [CONTRIBUTION_BLOCKER.TIER_EXPIRED]: {
    id: "Tier.Past",
    defaultMessage: [{
      "type": 0,
      "value": "This tier is not active anymore."
    }]
  },
  [CONTRIBUTION_BLOCKER.TIER_EMPTY]: {
    id: "Tier.empty",
    defaultMessage: [{
      "type": 0,
      "value": "There are no more "
    }, {
      "type": 5,
      "value": "type",
      "options": {
        "TICKET": {
          "value": [{
            "type": 0,
            "value": "tickets"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "units"
          }]
        }
      }
    }, {
      "type": 0,
      "value": " for "
    }, {
      "type": 1,
      "value": "name"
    }]
  },
  [CONTRIBUTION_BLOCKER.NO_CUSTOM_CONTRIBUTION]: {
    id: "Tier.disableCustomContribution",
    defaultMessage: [{
      "type": 0,
      "value": "This collective requires you to select a tier to contribute."
    }]
  },
  [CONTRIBUTION_BLOCKER.NO_CRYPTO_CONTRIBUTION]: {
    id: "Tier.disableCryptoContribution",
    defaultMessage: [{
      "type": 0,
      "value": "This collective does not allow crypto contributions. Please select another tier."
    }]
  }
});

const tierHasFixedInterval = tier => tier?.interval && tier.interval !== 'flexible';
/**
 * From received params, see if there's anything preventing the contribution
 */


const getContributionBlocker = (loggedInUser, account, tier, shouldHaveTier, isCrypto = false) => {
  if (!account.host) {
    return {
      reason: CONTRIBUTION_BLOCKER.NO_HOST
    };
  } else if (!account.isActive) {
    return {
      reason: CONTRIBUTION_BLOCKER.NOT_ACTIVE
    };
  } else if (account.features[_lib_allowed_features__WEBPACK_IMPORTED_MODULE_2__/* .FEATURES.RECEIVE_FINANCIAL_CONTRIBUTIONS */ .h6.RECEIVE_FINANCIAL_CONTRIBUTIONS] === 'DISABLED') {
    return {
      reason: CONTRIBUTION_BLOCKER.DISABLED
    };
  } else if (tier?.availableQuantity === 0) {
    const intlParams = {
      type: tier.type,
      name: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("q", {
        children: tier.name
      })
    };
    return {
      reason: CONTRIBUTION_BLOCKER.TIER_EMPTY,
      intlParams,
      showOtherWaysToContribute: true
    };
  } else if (shouldHaveTier && !tier) {
    return {
      reason: CONTRIBUTION_BLOCKER.TIER_MISSING,
      type: 'warning',
      showOtherWaysToContribute: true
    };
  } else if (tier && (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_4__/* .isTierExpired */ .l_)(tier)) {
    return {
      reason: CONTRIBUTION_BLOCKER.TIER_EXPIRED,
      type: 'warning',
      showOtherWaysToContribute: true
    };
  } else if (account.settings.disableCryptoContributions && isCrypto) {
    return {
      reason: CONTRIBUTION_BLOCKER.NO_CRYPTO_CONTRIBUTION,
      type: 'warning',
      showOtherWaysToContribute: true
    };
  } else if (account.settings.disableCustomContributions && !isCrypto && !tier) {
    return {
      reason: CONTRIBUTION_BLOCKER.NO_CUSTOM_CONTRIBUTION,
      type: 'warning',
      showOtherWaysToContribute: true
    };
  } else if (!isCrypto && !account.host.supportedPaymentMethods?.length || tierHasFixedInterval(tier) && !(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__/* .canContributeRecurring */ .nu)(account, loggedInUser)) {
    return {
      reason: CONTRIBUTION_BLOCKER.NO_PAYMENT_PROVIDER,
      type: 'warning',
      showOtherWaysToContribute: true,
      content: paymentMethodUnavailableWarning(loggedInUser, account, tier)
    };
  } else {
    return null;
  }
};

const paymentMethodUnavailableWarning = (loggedInUser, account, tier) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("strong", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributionFlow.noSupportedPaymentMethods",
        defaultMessage: [{
          "type": 0,
          "value": "There is no payment provider available"
        }]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("br", {}), loggedInUser?.isHostAdmin(account) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      maxWidth: "400px",
      mt: 3,
      children: account.host.supportedPaymentMethods?.length && tierHasFixedInterval(tier) && !(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_3__/* .canContributeRecurring */ .nu)(account, loggedInUser) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
        lineHeight: "18px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "3RuqnL",
          defaultMessage: [{
            "type": 0,
            "value": "None of the payment providers currently active on your account supports recurring contributions. You can enable them by connecting Stripe or PayPal. Alternatively, you can remove the ability to contribute recurringly from the "
          }, {
            "type": 8,
            "value": "TiersLink",
            "children": [{
              "type": 0,
              "value": "tiers settings"
            }]
          }, {
            "type": 0,
            "value": "."
          }],
          values: {
            TiersLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_8__/* .getI18nLink */ .fw)({
              as: _Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
              href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getCollectivePageRoute */ .x0)(account)}/admin/tiers`
            })
          }
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        textAlign: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          href: `/${account.slug}/accept-financial-contributions/organization`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            buttonStyle: "primary",
            mt: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "contributions.startAccepting",
              defaultMessage: [{
                "type": 0,
                "value": "Start accepting contributions"
              }]
            })
          })
        })
      })
    })]
  });
};

const ContributionBlocker = ({
  account,
  blocker
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
    flexDirection: "column",
    alignItems: "center",
    py: [5, null, 6],
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      type: blocker.type || 'info',
      withIcon: true,
      maxWidth: 800,
      children: blocker.content || msg[blocker.reason] && intl.formatMessage(msg[blocker.reason], blocker.intlParams) || blocker.reason
    }), blocker.showOtherWaysToContribute && account && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_5__/* .getCollectivePageRoute */ .x0)(account)}/contribute`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        buttonStyle: "primary",
        buttonSize: "large",
        mt: 5,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "createOrder.backToTier",
          defaultMessage: [{
            "type": 0,
            "value": "View all the other ways to contribute"
          }]
        })
      })
    })]
  });
};

ContributionBlocker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionBlocker",
  "props": {
    "blocker": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "reason": {
            "name": "enum",
            "value": [{
              "value": "\"DISABLED\"",
              "computed": false
            }, {
              "value": "\"NOT_ACTIVE\"",
              "computed": false
            }, {
              "value": "\"NO_CRYPTO_CONTRIBUTION\"",
              "computed": false
            }, {
              "value": "\"NO_CUSTOM_CONTRIBUTION\"",
              "computed": false
            }, {
              "value": "\"NO_HOST\"",
              "computed": false
            }, {
              "value": "\"NO_PAYMENT_PROVIDER\"",
              "computed": false
            }, {
              "value": "\"TIER_EMPTY\"",
              "computed": false
            }, {
              "value": "\"TIER_EXPIRED\"",
              "computed": false
            }, {
              "value": "\"TIER_MISSING\"",
              "computed": false
            }],
            "required": true
          },
          "intlParams": {
            "name": "object",
            "required": false
          },
          "content": {
            "name": "node",
            "description": "To override the default message.",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "showOtherWaysToContribute": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "account": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributionBlocker);

/***/ }),

/***/ 78879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93129);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49160);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1433);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class ContributionFlowButtons extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isLoadingNext: false
    });

    _defineProperty(this, "goNext", async e => {
      e.preventDefault();

      if (this.props.goNext) {
        this.setState({
          isLoadingNext: true
        }, async () => {
          await this.props.goNext();
          this.setState({
            isLoadingNext: false
          });
        });
      }
    });
  }

  getStepLabel(step) {
    switch (step.name) {
      case _constants__WEBPACK_IMPORTED_MODULE_6__/* .STEPS.PROFILE */ .Ss.PROFILE:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributionFlow.YourInfo",
          defaultMessage: [{
            "type": 0,
            "value": "Your info"
          }]
        });

      case _constants__WEBPACK_IMPORTED_MODULE_6__/* .STEPS.PAYMENT */ .Ss.PAYMENT:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributionFlow.Payment",
          defaultMessage: [{
            "type": 0,
            "value": "Payment"
          }]
        });

      case _constants__WEBPACK_IMPORTED_MODULE_6__/* .STEPS.DETAILS */ .Ss.DETAILS:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributionFlow.Contribution",
          defaultMessage: [{
            "type": 0,
            "value": "Contribution"
          }]
        });
    }
  }

  render() {
    const {
      goBack,
      isValidating,
      nextStep,
      paypalButtonProps,
      currency,
      tier,
      isCrypto,
      stepDetails
    } = this.props;
    const totalAmount = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTotalAmount */ .aU)(stepDetails, this.props.stepSummary, isCrypto);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
      flexWrap: "wrap",
      justifyContent: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [goBack && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          mx: [1, null, 2],
          minWidth: !nextStep ? 185 : 145,
          onClick: goBack,
          color: "black.600",
          disabled: isValidating,
          "data-cy": "cf-prev-step",
          type: "button",
          mt: 2,
          children: ["\u2190", ' ', this.getStepLabel(this.props.prevStep) || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Pagination.Prev",
            defaultMessage: [{
              "type": 0,
              "value": "Previous"
            }]
          })]
        }), !paypalButtonProps || nextStep ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          mt: 2,
          mx: [1, null, 2],
          minWidth: !nextStep ? 185 : 145,
          buttonStyle: "primary",
          onClick: this.goNext,
          disabled: isCrypto && totalAmount <= 0,
          loading: isValidating || this.state.isLoadingNext,
          "data-cy": "cf-next-step",
          type: "submit",
          children: nextStep ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
            children: [this.getStepLabel(nextStep) || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "contribute.nextStep",
              defaultMessage: [{
                "type": 0,
                "value": "Next step"
              }]
            }), ' ', "\u2192"]
          }) : isCrypto ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "2LvZcu",
            defaultMessage: [{
              "type": 0,
              "value": "I've sent "
            }, {
              "type": 1,
              "value": "CryptoAmount"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 1,
              "value": "CryptoCurrency"
            }, {
              "type": 0,
              "value": " to this wallet address"
            }],
            values: {
              CryptoAmount: totalAmount,
              CryptoCurrency: currency
            }
          }) : tier?.type === 'TICKET' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "contribute.ticket",
            defaultMessage: [{
              "type": 0,
              "value": "Get "
            }, {
              "type": 5,
              "value": "quantity",
              "options": {
                "1": {
                  "value": [{
                    "type": 0,
                    "value": "ticket"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "tickets"
                  }]
                }
              }
            }],
            values: {
              quantity: stepDetails.quantity || 1
            }
          }) : totalAmount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "contribute.amount",
            defaultMessage: [{
              "type": 0,
              "value": "Contribute "
            }, {
              "type": 1,
              "value": "amount"
            }],
            values: {
              amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Currency__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                value: totalAmount,
                currency: currency,
                precision: "auto"
              })
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "contribute.submit",
            defaultMessage: [{
              "type": 0,
              "value": "Make contribution"
            }]
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
          mx: [1, null, 2],
          minWidth: 200,
          mt: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_PayWithPaypalButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, paypalButtonProps), {}, {
            isSubmitting: isValidating || this.state.isLoadingNext
          }))
        })]
      })
    });
  }

}

ContributionFlowButtons.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "goNext",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getStepLabel",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "step",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ContributionFlowButtons",
  "props": {
    "goNext": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "goBack": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "prevStep": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "nextStep": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "isValidating": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "paypalButtonProps": {
      "description": "If provided, the PayPal button will be displayed in place of the regular submit",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "stepDetails": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepSummary": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributionFlowButtons);

/***/ }),

/***/ 28980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51927);
/* harmony import */ var _CollectiveTitleContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97208);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












class NewContributionFlowHeader extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    const {
      collective,
      isEmbed
    } = this.props;
    const contributors = collective.contributors?.nodes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      flexDirection: ['column', null, 'row'],
      alignItems: "center",
      maxWidth: 500,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        mx: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
          collective: collective,
          radius: [65, null, 96]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_CollectiveTitleContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          useLink: !isEmbed,
          collective: collective,
          linkColor: "#333",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.H1, {
            textAlign: "center",
            fontSize: ['28px', null, '32px'],
            lineHeight: "40px",
            fontWeight: 500,
            title: collective.name,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "CreateOrder.Title",
              defaultMessage: [{
                "type": 0,
                "value": "Contribute to "
              }, {
                "type": 1,
                "value": "collective"
              }],
              values: {
                collective: lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(collective.name, {
                  length: 60
                })
              }
            })
          })
        }), contributors?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
            color: "black.500",
            py: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "NewContributionFlow.Join",
              defaultMessage: [{
                "type": 0,
                "value": "Join "
              }, {
                "type": 1,
                "value": "numberOfContributors"
              }, {
                "type": 0,
                "value": " other fellow contributors"
              }],
              values: {
                numberOfContributors: collective.contributors.totalCount
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
            alignItems: "center",
            children: [contributors.map(contributor => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
              mx: 1,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_3__/* .ContributorAvatar */ .BD, {
                contributor: contributor,
                radius: 24
              })
            }, contributor.id)), collective.contributors.totalCount > contributors.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              fontSize: "12px",
              color: "black.600",
              children: ["+ ", collective.contributors.totalCount - contributors.length]
            })]
          })]
        })]
      })]
    });
  }

}

NewContributionFlowHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NewContributionFlowHeader",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "contributors": {
            "name": "shape",
            "value": {
              "totalCount": {
                "name": "number",
                "required": false
              },
              "nodes": {
                "name": "arrayOf",
                "value": {
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
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "LoggedInUser": {
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
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_2__.injectIntl)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_7__/* .withUser */ .ns)(NewContributionFlowHeader)));

/***/ }),

/***/ 94226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_confettis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19196);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32651);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11194);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledInputField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87262);
/* harmony import */ var _components_StyledTextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93150);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_StyledInputField__WEBPACK_IMPORTED_MODULE_13__]);
_components_StyledInputField__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const PUBLIC_MESSAGE_MAX_LENGTH = 140; // Styled components

const PublicMessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_components_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
  displayName: "ContributionFlowPublicMessage__PublicMessageContainer",
  componentId: "sc-gd6end-0"
})(["display:flex;flex-direction:column;background:", ";border:1px solid ", ";border-radius:10px;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.white.full'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.400')); // GraphQL

const postContributionPublicMessageMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation NewContributionFlowEditPublicMessage(
    $fromAccount: AccountReferenceInput!
    $toAccount: AccountReferenceInput!
    $message: String
  ) {
    editPublicMessage(fromAccount: $fromAccount, toAccount: $toAccount, message: $message) {
      id
      publicMessage
    }
  }
`; // Messages

const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({
  publicMessagePlaceholder: {
    id: "contribute.publicMessage.placeholder",
    defaultMessage: [{
      "type": 0,
      "value": "Motivate others to contribute in 140 characters :) ..."
    }]
  }
});

const ContributionFlowPublicMessage = ({
  order,
  publicMessage
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const collective = order.toAccount;
  const stepProfile = order.fromAccount;
  const [isSubmitted, setSubmitted] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true); // GraphQL & data

  const [postPublicMessage] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(postContributionPublicMessageMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_8__/* .API_V2_CONTEXT */ .T
  }); // Formik

  const initialValues = {
    publicMessage: publicMessage || ''
  };

  const submitPublicMessage = async values => {
    const {
      publicMessage
    } = values;
    await postPublicMessage({
      variables: {
        fromAccount: {
          id: stepProfile.id
        },
        toAccount: {
          id: collective.id
        },
        message: publicMessage
      }
    }).then(() => {
      setSubmitted(true);
      (0,_lib_confettis__WEBPACK_IMPORTED_MODULE_7__/* .confettiFireworks */ .K)(3000);
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(PublicMessageContainer, {
    width: [1, '400px'],
    flexShrink: 1,
    height: 112,
    mt: 2,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
      initialValues: initialValues,
      onSubmit: submitPublicMessage,
      children: formik => {
        const {
          values,
          handleSubmit,
          isSubmitting,
          dirty
        } = formik;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_StyledInputField__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            name: "publicMessage",
            htmlFor: "publicMessage",
            disabled: isSubmitting,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(formik__WEBPACK_IMPORTED_MODULE_4__.Field, _objectSpread(_objectSpread({
              as: _components_StyledTextarea__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z
            }, inputProps), {}, {
              resize: "none",
              border: "none",
              withOutline: false,
              maxLength: PUBLIC_MESSAGE_MAX_LENGTH,
              minHeight: 75,
              fontSize: "14px",
              value: values.publicMessage,
              placeholder: intl.formatMessage(messages.publicMessagePlaceholder),
              onChange: e => {
                formik.setFieldValue('publicMessage', e.target.value);

                if (isSubmitted) {
                  setSubmitted(false);
                }
              }
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
            flexGrow: 1,
            mt: 1,
            px: 3,
            justifyContent: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
              alignItems: "center",
              justifyContent: "flex-start",
              minWidth: 0,
              mr: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Avatar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                collective: stepProfile,
                radius: 24
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
                flexDirection: "column",
                ml: 2,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                  fontSize: "10px",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                    id: "contribute.publicMessage.postingAs",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Posting as"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
                  minWidth: 0,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_15__.P, {
                    fontSize: "12px",
                    truncateOverflow: true,
                    title: stepProfile.name,
                    children: lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(stepProfile.name, {
                      length: 25
                    })
                  })
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
              alignItems: "center",
              justifyContent: "flex-end",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                buttonSize: "tiny",
                loading: isSubmitting,
                type: "submit",
                onSubmit: handleSubmit,
                disabled: isSubmitted,
                children: isSubmitted && dirty ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "saved",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Saved"
                  }]
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                  id: "contribute.publicMessage.post",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Post message"
                  }]
                })
              })
            })]
          })]
        });
      }
    })
  });
};

ContributionFlowPublicMessage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionFlowPublicMessage",
  "props": {
    "order": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "publicMessage": {
      "description": "",
      "type": {
        "name": "string"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_5__.injectIntl)(ContributionFlowPublicMessage));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51927);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30805);
/* harmony import */ var _StepCheckout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94706);
/* harmony import */ var _StepDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76559);
/* harmony import */ var _StepDetailsCrypto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48795);
/* harmony import */ var _StepPayment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95575);
/* harmony import */ var _StepProfile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56994);
/* harmony import */ var _StepSummary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17272);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StepDetails__WEBPACK_IMPORTED_MODULE_9__, _StepPayment__WEBPACK_IMPORTED_MODULE_11__, _StepProfile__WEBPACK_IMPORTED_MODULE_12__, _StepSummary__WEBPACK_IMPORTED_MODULE_13__]);
([_StepDetails__WEBPACK_IMPORTED_MODULE_9__, _StepPayment__WEBPACK_IMPORTED_MODULE_11__, _StepProfile__WEBPACK_IMPORTED_MODULE_12__, _StepSummary__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class ContributionFlowStepContainer extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderHeader", (step, LoggedInUser) => {
      const {
        intl
      } = this.props;

      if (step === 'profile' && !LoggedInUser) {
        return intl.formatMessage(this.headerMessages[`profile.guest`]);
      } else if (step === 'payment' && this.props.mainState.stepProfile.contributorRejectedCategories) {
        return intl.formatMessage(this.headerMessages.blockedContributor);
      } else if (this.headerMessages[step]) {
        return intl.formatMessage(this.headerMessages[step]);
      } else {
        return step;
      }
    });

    _defineProperty(this, "renderStep", step => {
      const {
        collective,
        mainState,
        tier,
        isEmbed,
        isCrypto,
        order
      } = this.props;
      const {
        stepProfile,
        stepDetails,
        stepSummary,
        stepPayment
      } = mainState;

      switch (step) {
        case 'details':
          return !isCrypto ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StepDetails__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            collective: collective,
            tier: tier,
            onChange: this.props.onChange,
            data: stepDetails,
            showPlatformTip: this.props.showPlatformTip,
            isEmbed: isEmbed
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StepDetailsCrypto__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            onChange: this.props.onChange,
            data: stepDetails,
            collective: collective
          });

        case 'profile':
          {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StepProfile__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              profiles: this.props.contributeProfiles,
              collective: collective,
              stepDetails: stepDetails,
              onChange: this.props.onChange,
              data: stepProfile,
              onSignInClick: this.props.onSignInClick,
              isEmbed: isEmbed
            });
          }

        case 'payment':
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StepPayment__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            collective: this.props.collective,
            stepDetails: this.props.mainState.stepDetails,
            stepProfile: this.props.mainState.stepProfile,
            stepSummary: this.props.mainState.stepSummary,
            onChange: this.props.onChange,
            stepPayment: stepPayment,
            onNewCardFormReady: this.props.onNewCardFormReady,
            isSubmitting: this.props.isSubmitting,
            isEmbed: isEmbed,
            isCrypto: isCrypto,
            disabledPaymentMethodTypes: this.props.disabledPaymentMethodTypes,
            hideCreditCardPostalCode: this.props.hideCreditCardPostalCode || Boolean(collective.settings?.hideCreditCardPostalCode)
          });

        case 'checkout':
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StepCheckout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            stepDetails: this.props.mainState.stepDetails,
            order: order
          });

        case 'summary':
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StepSummary__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            collective: collective,
            tier: tier,
            stepProfile: stepProfile,
            stepDetails: stepDetails,
            stepPayment: stepPayment,
            data: stepSummary,
            isCrypto: isCrypto,
            onChange: this.props.onChange,
            taxes: this.props.taxes,
            applyTaxes: true
          });

        default:
          return null;
      }
    });

    this.headerMessages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
      details: {
        id: "NewContributionFlow.ContributionDetailsTitle",
        defaultMessage: [{
          "type": 0,
          "value": "Contribution details"
        }]
      },
      profile: {
        id: "contribute.step.contributeAs",
        defaultMessage: [{
          "type": 0,
          "value": "Contribute as"
        }]
      },
      'profile.guest': {
        id: "NewContributionFlow.step.contributeAsGuest",
        defaultMessage: [{
          "type": 0,
          "value": "Contribute as a guest"
        }]
      },
      payment: {
        id: "NewContributionFlow.ChoosePaymentMethod",
        defaultMessage: [{
          "type": 0,
          "value": "Choose payment method"
        }]
      },
      summary: {
        id: "Summary",
        defaultMessage: [{
          "type": 0,
          "value": "Summary"
        }]
      },
      blockedContributor: {
        id: "NewContributionFlow.BlockedContributor.Header",
        defaultMessage: [{
          "type": 0,
          "value": "Unable to contribute"
        }]
      }
    });
  }

  render() {
    const {
      LoggedInUser,
      step,
      isEmbed
    } = this.props;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      p: [16, 32],
      mx: [16, 'none'],
      borderRadius: 15,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
        flexDirection: "column",
        alignItems: "center",
        children: [step.name !== 'checkout' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
          width: "100%",
          mb: 3,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__.H4, {
              fontSize: ['20px', '24px'],
              fontWeight: 500,
              py: 2,
              children: this.renderHeader(step.name, LoggedInUser)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              width: "100%",
              ml: 3,
              borderColor: "black.300"
            })
          }), !isEmbed && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_ShareButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
          })]
        }), this.renderStep(step.name)]
      })
    });
  }

}

ContributionFlowStepContainer.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "renderHeader",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "step",
      "type": null
    }, {
      "name": "LoggedInUser",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderStep",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "step",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ContributionFlowStepContainer",
  "props": {
    "intl": {
      "description": "",
      "type": {
        "name": "object"
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
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "showPlatformTip": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onNewCardFormReady": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onSignInClick": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabledPaymentMethodTypes": {
      "description": "",
      "type": {
        "name": "array"
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
    "hideCreditCardPostalCode": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "taxes": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "step": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "contributeProfiles": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "mainState": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "stepDetails": {
            "name": "object",
            "required": false
          },
          "stepProfile": {
            "name": "shape",
            "value": {
              "contributorRejectedCategories": {
                "name": "array",
                "required": false
              }
            },
            "required": false
          },
          "stepSummary": {
            "name": "object",
            "required": false
          },
          "stepPayment": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": false
    },
    "order": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_6__/* .withUser */ .ns)(ContributionFlowStepContainer)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_payment_method_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51515);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StepsProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65598);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1433);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);












 // Styles for the steps label rendered in StepsProgress



const StepLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr).withConfig({
  displayName: "ContributionFlowStepsProgress__StepLabel",
  componentId: "sc-vkv2j5-0"
})(["text-transform:uppercase;text-align:center;font-weight:500;font-size:14px;line-height:16px;letter-spacing:0.06em;margin-top:8px;margin-bottom:4px;"]);

const PrettyAmountFromStepDetails = ({
  stepDetails,
  currency,
  isFreeTier,
  isCrypto
}) => {
  if (stepDetails.amount || stepDetails.cryptoAmount) {
    const totalAmount = isCrypto ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(stepDetails, 'cryptoAmount', 0) : lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(stepDetails, 'amount', 0) + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(stepDetails, 'platformTip', 0);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      interval: stepDetails.interval,
      currency: currency,
      amount: totalAmount,
      abbreviateInterval: true,
      amountStyles: null,
      isCrypto: isCrypto
    });
  } else if (stepDetails.amount === 0 && isFreeTier) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "Amount.Free",
      defaultMessage: [{
        "type": 0,
        "value": "Free"
      }]
    });
  } else {
    return null;
  }
};

const StepInfo = ({
  step,
  stepProfile,
  stepDetails,
  stepPayment,
  stepSummary,
  isFreeTier,
  currency,
  isCrypto
}) => {
  if (step.name === _constants__WEBPACK_IMPORTED_MODULE_10__/* .STEPS.PROFILE */ .Ss.PROFILE) {
    if (stepProfile) {
      const mainInfo = stepProfile.id && stepProfile.name || (stepProfile.email ?? stepProfile.name);
      const fullDescription = [stepProfile.name, stepProfile.email].filter(Boolean).join(' · ');
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledP, {
        title: fullDescription,
        fontSize: "inherit",
        lineHeight: "inherit",
        truncateOverflow: true,
        children: mainInfo
      });
    }
  } else if (step.name === _constants__WEBPACK_IMPORTED_MODULE_10__/* .STEPS.DETAILS */ .Ss.DETAILS) {
    if (stepDetails) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(PrettyAmountFromStepDetails, {
          stepDetails: stepDetails,
          currency: currency,
          isFreeTier: isFreeTier,
          isCrypto: isCrypto
        }), !isNaN(stepDetails.quantity) && stepDetails.quantity > 1 && ` x ${stepDetails.quantity}`]
      });
    }
  } else if (step.name === _constants__WEBPACK_IMPORTED_MODULE_10__/* .STEPS.PAYMENT */ .Ss.PAYMENT) {
    if (isFreeTier && (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getTotalAmount */ .aU)(stepDetails, stepSummary) === 0) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "noPaymentRequired",
        defaultMessage: [{
          "type": 0,
          "value": "No payment required"
        }]
      });
    } else if (stepPayment?.key === _utils__WEBPACK_IMPORTED_MODULE_11__/* .NEW_CREDIT_CARD_KEY */ .u0) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "contribute.newcreditcard",
        defaultMessage: [{
          "type": 0,
          "value": "New credit/debit card"
        }]
      });
    } else {
      return !isCrypto && stepPayment?.paymentMethod && (0,_lib_payment_method_label__WEBPACK_IMPORTED_MODULE_4__/* .getPaymentMethodName */ .d0)(stepPayment.paymentMethod) || null;
    }
  } else if (step.name === _constants__WEBPACK_IMPORTED_MODULE_10__/* .STEPS.SUMMARY */ .Ss.SUMMARY) {
    return stepSummary?.countryISO || null;
  }

  return null;
};

const ContributionFlowStepsProgress = ({
  stepProfile,
  stepDetails,
  stepPayment,
  stepSummary,
  isSubmitted,
  loading,
  steps,
  currentStep,
  lastVisitedStep,
  goToStep,
  currency,
  isFreeTier,
  isCrypto
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StepsProgress__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    steps: steps,
    focus: currentStep,
    allCompleted: isSubmitted,
    onStepSelect: !loading && !isSubmitted ? goToStep : undefined,
    loadingStep: loading ? currentStep : undefined,
    disabledStepNames: steps.slice(lastVisitedStep.index + 1, steps.length).map(s => s.name),
    children: ({
      step
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(StepLabel, {
        color: currentStep.name === step.name ? 'primary.600' : 'black.700',
        children: step.label || step.name
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        fontSize: "13px",
        lineHeight: "20px",
        textAlign: "center",
        wordBreak: "break-word",
        children: step.isVisited && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(StepInfo, {
          step: step,
          stepProfile: stepProfile,
          stepDetails: stepDetails,
          stepPayment: stepPayment,
          stepSummary: stepSummary,
          isFreeTier: isFreeTier,
          currency: currency,
          isCrypto: isCrypto
        })
      })]
    })
  });
};

ContributionFlowStepsProgress.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionFlowStepsProgress",
  "props": {
    "steps": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": true
    },
    "currentStep": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "goToStep": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "stepProfile": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepDetails": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepPayment": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepSummary": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "isSubmitted": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "lastVisitedStep": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "isFreeTier": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributionFlowStepsProgress);

var _StyledP = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_9__.P).withConfig({
  displayName: "ContributionFlowStepsProgress___StyledP",
  componentId: "sc-vkv2j5-1"
})({
  maxWidth: 150
});

/***/ }),

/***/ 68843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_brands_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79368);
/* harmony import */ var _styled_icons_fa_brands_Facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3592);
/* harmony import */ var _styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14638);
/* harmony import */ var _styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24317);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91337);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97079);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69078);
/* harmony import */ var _components_edit_collective_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46217);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88705);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53169);
/* harmony import */ var _components_MessageBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37278);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51082);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90998);
/* harmony import */ var _components_UserProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(51927);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(92129);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(269);
/* harmony import */ var _ContributionFlowPublicMessage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(94226);
/* harmony import */ var _ContributorCardWithTier__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(38661);
/* harmony import */ var _success_illustration_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(69175);
/* harmony import */ var _SuccessCTA__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(29189);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContributionFlowPublicMessage__WEBPACK_IMPORTED_MODULE_28__, _ContributorCardWithTier__WEBPACK_IMPORTED_MODULE_29__]);
([_ContributionFlowPublicMessage__WEBPACK_IMPORTED_MODULE_28__, _ContributorCardWithTier__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































 // Styled components



const ContainerWithImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z).withConfig({
  displayName: "ContributionFlowSuccess__ContainerWithImage",
  componentId: "sc-2kaq5u-0"
})(["@media screen and (max-width:64em){background:url('/static/images/new-contribution-flow/NewContributionFlowSuccessPageBackgroundMobile.png');background-position:top;background-repeat:no-repeat;background-size:100% auto;}@media screen and (min-width:64em){background:url('/static/images/new-contribution-flow/NewContributionFlowSuccessPageBackgroundDesktop.png');background-position:left;background-repeat:no-repeat;background-size:auto 100%;background-size:cover;}"]);
const ShareLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_StyledLink__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z).withConfig({
  displayName: "ContributionFlowSuccess__ShareLink",
  componentId: "sc-2kaq5u-1"
})(["display:flex;justify-content:center;align-items:center;svg{margin-right:8px;}"]);
ShareLink.defaultProps = {
  buttonStyle: 'standard',
  buttonSize: 'medium',
  minWidth: 130,
  mx: 2,
  mb: 2,
  target: '_blank'
};
const BankTransferInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z).withConfig({
  displayName: "ContributionFlowSuccess__BankTransferInfoContainer",
  componentId: "sc-2kaq5u-2"
})(["border:1px solid ", ";border-radius:12px;background-color:white;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_8__.themeGet)('colors.black.400'));
const SuccessIllustration = styled_components__WEBPACK_IMPORTED_MODULE_1___default().img.attrs({
  src: _success_illustration_jpg__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z
}).withConfig({
  displayName: "ContributionFlowSuccess__SuccessIllustration",
  componentId: "sc-2kaq5u-3"
})(["max-width:100%;width:216px;margin:0 auto;margin-bottom:16px;"]);
const successMsgs = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  default: {
    id: "order.created.tweet",
    defaultMessage: [{
      "type": 0,
      "value": "I've just contributed to "
    }, {
      "type": 1,
      "value": "collective"
    }, {
      "type": 0,
      "value": ". Consider supporting them too — every little helps!"
    }]
  },
  event: {
    id: "order.created.tweet.event",
    defaultMessage: [{
      "type": 0,
      "value": "I'm attending "
    }, {
      "type": 1,
      "value": "event"
    }, {
      "type": 0,
      "value": ". Join me!"
    }]
  }
});

const isAccountFediverse = account => {
  return account && (account.tags?.includes('mastodon') || account.tags?.includes('fediverse') || (account.socialLinks || []).map(el => el.type).includes('MASTODON'));
};

const getMainTag = collective => {
  if (collective.host?.slug === 'opensource' || collective.tags?.includes('open source')) {
    return 'open source';
  } else if (collective.tags?.includes('covid-19')) {
    return 'covid-19';
  }
};

class ContributionFlowSuccess extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderCallsToAction", () => {
      const {
        LoggedInUser,
        data,
        isEmbed,
        router
      } = this.props;
      const callsToAction = [];

      const isGuest = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'order.fromAccount.isGuest');

      const email = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(router, 'query.email') ? decodeURIComponent(router.query.email) : null;

      if (!isEmbed) {
        if (!LoggedInUser) {
          if (isGuest) {
            callsToAction.unshift(_SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.JOIN */ .x.JOIN, _SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.GO_TO_PROFILE */ .x.GO_TO_PROFILE, _SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.NEWSLETTER */ .x.NEWSLETTER);
          } else {
            callsToAction.unshift(_SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.SIGN_IN */ .x.SIGN_IN, _SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.GO_TO_PROFILE */ .x.GO_TO_PROFILE, _SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.NEWSLETTER */ .x.NEWSLETTER);
          }
        } else {
          // all other logged in recurring/one time contributions
          callsToAction.unshift(_SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.GO_TO_PROFILE */ .x.GO_TO_PROFILE, _SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.BLOG */ .x.BLOG, _SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* .SUCCESS_CTA_TYPE.NEWSLETTER */ .x.NEWSLETTER);
        }
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
        flexDirection: "column",
        justifyContent: "center",
        p: 2,
        children: [callsToAction.length <= 2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(SuccessIllustration, {
          alt: ""
        }), callsToAction.map((type, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_SuccessCTA__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
          type: type,
          orderId: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'order.id'),
          email: email,
          account: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data, 'order.toAccount'),
          isPrimary: idx === 0
        }, type))]
      });
    });

    _defineProperty(this, "renderBankTransferInformation", () => {
      const instructions = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.toAccount.host.settings.paymentMethods.manual.instructions', null);

      const bankAccount = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.toAccount.host.bankAccount.data', null);

      const amount = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.amount.valueInCents', 0);

      const platformTipAmount = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.platformTipAmount.valueInCents', 0);

      const totalAmount = amount + platformTipAmount;

      const currency = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.amount.currency');

      const formattedAmount = (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_12__/* .formatCurrency */ .xG)(totalAmount, currency, {
        locale: this.props.intl.locale
      });
      const formatValues = {
        account: bankAccount ? (0,_components_edit_collective_utils__WEBPACK_IMPORTED_MODULE_18__/* .formatAccountDetails */ .H)(bankAccount) : '',
        reference: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.legacyId', null),
        amount: formattedAmount,
        collective: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.toAccount.name', null),
        // Deprecated but still needed for compatibility
        OrderId: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.props.data, 'order.legacyId', null)
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
        flexDirection: "column",
        justifyContent: "center",
        width: [1, 3 / 4],
        px: [4, 0],
        py: [2, 0],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          type: "warning",
          fontSize: "12px",
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
            id: "collective.user.orderProcessing.manual",
            defaultMessage: [{
              "type": 8,
              "value": "strong",
              "children": [{
                "type": 0,
                "value": "Your contribution is pending."
              }]
            }, {
              "type": 0,
              "value": " Please follow the payment instructions in the confirmation email to complete your transaction."
            }],
            values: _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP
          })
        }), instructions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(BankTransferInfoContainer, {
          my: 3,
          p: 4,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_24__.H3, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "NewContributionFlow.PaymentInstructions",
              defaultMessage: [{
                "type": 0,
                "value": "Payment instructions"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
            mt: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
              style: {
                whiteSpace: 'pre-wrap'
              },
              children: (0,_lib_payment_method_utils__WEBPACK_IMPORTED_MODULE_14__/* .formatManualInstructions */ .U8)(instructions, formatValues)
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
          px: 3,
          mt: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_24__.P, {
            fontSize: "16px",
            color: "black.700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "NewContributionFlow.InTheMeantime",
              defaultMessage: [{
                "type": 0,
                "value": "In the meantime, you can see what "
              }, {
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": " is up to "
              }, {
                "type": 8,
                "value": "CollectiveLink",
                "children": [{
                  "type": 0,
                  "value": "on their Collective page"
                }]
              }, {
                "type": 0,
                "value": "."
              }],
              values: {
                collective: this.props.data.order.toAccount.name,
                CollectiveLink: (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_20__/* .getI18nLink */ .fw)({
                  as: _Link__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
                  href: `/${this.props.data.order.toAccount.slug}`
                })
              }
            })
          })
        })]
      });
    });
  }

  renderInfoByPaymentMethod() {
    const {
      data
    } = this.props;
    const {
      order
    } = data;
    const isPendingBankTransfer = order?.status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_11__/* .ORDER_STATUS.PENDING */ .D.PENDING && !order.paymentMethod;

    if (isPendingBankTransfer) {
      return this.renderBankTransferInformation();
    } else {
      return this.renderCallsToAction();
    }
  }

  render() {
    const {
      LoggedInUser,
      collective,
      data,
      intl,
      isEmbed
    } = this.props;
    const {
      order
    } = data;
    const shareURL = `${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_16__/* .getWebsiteUrl */ .ls)()}/${collective.slug}`;
    const isProcessing = order?.status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_11__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING;
    const isFediverse = order && (isAccountFediverse(order.toAccount) || isAccountFediverse(order.toAccount.parent));

    if (!data.loading && !order) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
        justifyContent: "center",
        py: [5, 6],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_MessageBox__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          type: "warning",
          withIcon: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
            id: "Order.NotFound",
            defaultMessage: [{
              "type": 0,
              "value": "This order doesn't exist"
            }]
          })
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [!isEmbed && isProcessing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
        height: "120px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFC2",
        color: "#0C2D66",
        flexDirection: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_24__.P, {
          fontWeight: "700",
          fontSize: "14px",
          lineHeight: "20px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
            id: "RTyy4V",
            defaultMessage: [{
              "type": 0,
              "value": "Your Contribution is processing!"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
          mt: 1,
          maxWidth: "672px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_24__.P, {
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            textAlign: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
              id: "R1RQBD",
              defaultMessage: [{
                "type": 0,
                "value": "Your contribution will remain in processing state until it is completed from the payment processor's end. You will receive an email when it goes through successfully. No further action is required from your end."
              }]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          href: `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .getCollectivePageRoute */ .x0)(order.fromAccount)}/transactions`,
          fontWeight: "700",
          fontSize: "14px",
          lineHeight: "20px",
          textDecoration: "underline",
          color: "#0C2D66",
          mt: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
            id: "zG2d9i",
            defaultMessage: [{
              "type": 0,
              "value": "View Contribution!"
            }]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_StyledFlex, {
        width: 1,
        minHeight: "calc(100vh - 69px)",
        flexDirection: ['column', null, null, 'row'],
        justifyContent: [null, null, 'center'],
        "data-cy": "order-success",
        children: data.loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {})
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(ContainerWithImage, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: ['100%', null, null, '50%', '762px'],
            mb: [4, null, 0],
            flexShrink: 0,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              my: 4,
              width: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_24__.H3, {
                mb: 3,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                  id: "NewContributionFlow.Success.Header",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Thank you! 🎉"
                  }]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                mb: 3,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_24__.P, {
                  fontSize: "20px",
                  color: "black.700",
                  fontWeight: 500,
                  textAlign: "center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "NewContributionFlow.Success.NowSupporting",
                    defaultMessage: [{
                      "type": 0,
                      "value": "You are now supporting "
                    }, {
                      "type": 8,
                      "value": "link",
                      "children": [{
                        "type": 1,
                        "value": "collective"
                      }]
                    }, {
                      "type": 0,
                      "value": "."
                    }],
                    values: {
                      collective: order.toAccount.name,
                      link: isEmbed ? _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_20__/* .I18nBold */ .Gl : (0,_components_I18nFormatters__WEBPACK_IMPORTED_MODULE_20__/* .getI18nLink */ .fw)({
                        href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .getCollectivePageRoute */ .x0)(order.toAccount),
                        as: _Link__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z
                      })
                    }
                  })
                })
              }), isEmbed ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_ContributorCardWithTier__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                width: 250,
                height: 380,
                contribution: order,
                my: 2,
                useLink: false
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_StyledLink__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                as: _Link__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
                color: "black.800",
                href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .getCollectivePageRoute */ .x0)(order.toAccount),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_ContributorCardWithTier__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                  width: 250,
                  height: 380,
                  contribution: order,
                  my: 2,
                  useLink: false
                })
              }), !isEmbed && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                my: 4,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_Link__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                  href: {
                    pathname: '/search',
                    query: {
                      show: getMainTag(order.toAccount)
                    }
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_24__.P, {
                    color: "black.800",
                    fontWeight: 500,
                    textAlign: "center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                      id: "NewContributionFlow.Success.DiscoverMore",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Discover more Collectives like "
                      }, {
                        "type": 1,
                        "value": "collective"
                      }],
                      values: {
                        collective: order.toAccount.name
                      }
                    }), "\xA0\u2192"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
                justifyContent: "center",
                mt: 3,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(ShareLink, {
                  href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .tweetURL */ .Le)({
                    url: shareURL,
                    text: intl.formatMessage(order.toAccount.type === 'EVENT' ? successMsgs.event : successMsgs.default, {
                      collective: order.toAccount.name,
                      event: order.toAccount.name
                    })
                  }),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_brands_Twitter__WEBPACK_IMPORTED_MODULE_7__.Twitter, {
                    size: "1.2em",
                    color: "#4E5052"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "tweetIt",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Tweet it"
                    }]
                  })]
                }), !isFediverse && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(ShareLink, {
                  href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .facebookShareURL */ .VZ)({
                    u: shareURL
                  }),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_brands_Facebook__WEBPACK_IMPORTED_MODULE_5__.Facebook, {
                    size: "1.2em",
                    color: "#4E5052"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "shareIt",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Share it"
                    }]
                  })]
                }), isFediverse && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(ShareLink, {
                  href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_15__/* .mastodonShareURL */ .Ap)({
                    text: // eslint-disable-next-line prefer-template
                    intl.formatMessage(order.toAccount.type === 'EVENT' ? successMsgs.event : successMsgs.default, {
                      collective: order.toAccount.name,
                      event: order.toAccount.name
                    }) + ` ${shareURL}`
                  }),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_styled_icons_fa_brands_Mastodon__WEBPACK_IMPORTED_MODULE_6__.Mastodon, {
                    size: "1.2em",
                    color: "#4E5052"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "shareOnMastodon",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Share on Mastodon"
                    }]
                  })]
                })]
              }), LoggedInUser && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
                px: 1,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_ContributionFlowPublicMessage__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                  order: order,
                  publicMessage: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(order, 'membership.publicMessage')
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 1,
            children: this.renderInfoByPaymentMethod()
          })]
        })
      })]
    });
  }

} // GraphQL


const orderSuccessQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query NewContributionFlowOrderSuccess($order: OrderReferenceInput!) {
    order(order: $order) {
      id
      ...OrderSuccessFragment
    }
  }
  ${_graphql_fragments__WEBPACK_IMPORTED_MODULE_27__/* .orderSuccessFragment */ .vd}
`;
const addOrderSuccessQuery = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_4__.graphql)(orderSuccessQuery, {
  options: props => ({
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T,
    variables: {
      order: {
        id: props.router.query.OrderId
      }
    }
  })
});
ContributionFlowSuccess.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "renderCallsToAction",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderBankTransferInformation",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderInfoByPaymentMethod",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "ContributionFlowSuccess",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
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
    "intl": {
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
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_10__.injectIntl)((0,_components_UserProvider__WEBPACK_IMPORTED_MODULE_25__/* .withUser */ .ns)((0,next_router__WEBPACK_IMPORTED_MODULE_9__.withRouter)(addOrderSuccessQuery(ContributionFlowSuccess)))));

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC).withConfig({
  displayName: "ContributionFlowSuccess___StyledFlex",
  componentId: "sc-2kaq5u-4"
})({
  height: '100%'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80642);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15078);
/* harmony import */ var _lib_fees__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77769);
/* harmony import */ var _lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22642);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(173);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_15__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




















const AmountLine = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.attrs({
  'data-cy': 'ContributionSummary-AmountLine'
}).withConfig({
  displayName: "ContributionSummary__AmountLine",
  componentId: "sc-1odoaf2-0"
})(["display:flex;justify-content:space-between;font-weight:400;padding:7px 0;line-height:18px;color:#4e5052;", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_5__.color, styled_system__WEBPACK_IMPORTED_MODULE_5__.typography);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Text__WEBPACK_IMPORTED_MODULE_16__/* .Span */ .Dr).withConfig({
  displayName: "ContributionSummary__Label",
  componentId: "sc-1odoaf2-1"
})(["margin-right:4px;color:inherit;flex:0 1 70%;margin-right:8px;word-break:break-word;", ""], styled_system__WEBPACK_IMPORTED_MODULE_5__.flex);
Label.defaultProps = {
  fontWeight: 400
};
const Amount = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Text__WEBPACK_IMPORTED_MODULE_16__/* .Span */ .Dr).withConfig({
  displayName: "ContributionSummary__Amount",
  componentId: "sc-1odoaf2-2"
})(["flex:1 1 30%;text-align:right;"]);

const ContributionSummary = ({
  collective,
  stepDetails,
  stepSummary,
  stepPayment,
  currency,
  isCrypto,
  tier,
  renderTax
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const amount = isCrypto ? stepDetails.cryptoAmount : stepDetails.amount;
  const totalAmount = (0,_utils__WEBPACK_IMPORTED_MODULE_17__/* .getTotalAmount */ .aU)(stepDetails, stepSummary, isCrypto);
  const pmFeeInfo = (0,_lib_fees__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(stepPayment?.paymentMethod, totalAmount, currency);
  const platformTip = !isCrypto ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(stepDetails, 'platformTip', 0) : 0;
  const showQuantity = stepDetails.quantity > 1 || ['TICKET', 'PRODUCT'].includes(tier?.type);
  const contributionName = tier?.name ? `${collective.name} - "${tier.name}"` : collective.name;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    children: [stepDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [showQuantity && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(AmountLine, {
        color: "black.700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "contribution.quantity",
            defaultMessage: [{
              "type": 0,
              "value": "Quantity"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Amount, {
          children: stepDetails.quantity
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(AmountLine, {
        color: "black.700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "ContributionToProject",
            defaultMessage: [{
              "type": 0,
              "value": "Contribution to "
            }, {
              "type": 1,
              "value": "projectName"
            }],
            values: {
              projectName: contributionName
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Amount, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            amount: amount || 0,
            currency: currency,
            amountStyles: {
              color: 'black.700',
              fontWeight: 400
            },
            isCrypto: isCrypto
          })
        })]
      }), Boolean(stepSummary?.taxType) && (renderTax ? renderTax({
        AmountLine,
        Amount,
        Label
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(AmountLine, {
        color: "black.700",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(Label, {
          children: [(0,_lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_9__/* .i18nTaxType */ .m)(intl, stepSummary.taxType), " ", stepSummary.percentage, "%"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Amount, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            amount: stepSummary.amount,
            currency: currency,
            amountStyles: {
              color: 'black.700',
              fontWeight: 400
            }
          })
        })]
      })), Boolean(platformTip) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(AmountLine, {
        color: "black.700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "SupportProject",
            defaultMessage: [{
              "type": 0,
              "value": "Support "
            }, {
              "type": 1,
              "value": "projectName"
            }],
            values: {
              projectName: 'Open Collective'
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Amount, {
          "data-cy": "ContributionSummary-Tip",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            amount: platformTip,
            currency: currency,
            amountStyles: {
              color: 'black.700',
              fontWeight: 400
            }
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      borderColor: "black.500",
      my: 1
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(AmountLine, {
      color: "black.800",
      fontWeight: "500",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
        fontWeight: "500",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "TodaysCharge",
          defaultMessage: [{
            "type": 0,
            "value": "Today's charge"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Amount, {
        fontWeight: "700",
        "data-cy": "ContributionSummary-TodaysCharge",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          amount: totalAmount,
          currency: currency,
          amountStyles: null,
          isCrypto: isCrypto
        })
      })]
    }), Boolean(pmFeeInfo.fee) && !isCrypto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(AmountLine, {
        color: "black.700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
          children: pmFeeInfo.name ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "PaymentProviderFees.Label",
            defaultMessage: [{
              "type": 5,
              "value": "isExact",
              "options": {
                "false": {
                  "value": [{
                    "type": 0,
                    "value": "Estimated "
                  }]
                },
                "other": {
                  "value": []
                }
              }
            }, {
              "type": 1,
              "value": "providerName"
            }, {
              "type": 0,
              "value": " fees"
            }],
            values: {
              providerName: pmFeeInfo.name,
              isExact: pmFeeInfo.isExact
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "contribution.paymentFee",
            defaultMessage: [{
              "type": 0,
              "value": "Payment processor fee"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(Amount, {
          children: [!pmFeeInfo.isExact && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
            display: "inline-block",
            mr: 1,
            verticalAlign: "text-bottom",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              verticalAlign: "top",
              content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_16__/* .Span */ .Dr, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "Fees.ApproximationDisclaimer",
                  defaultMessage: [{
                    "type": 0,
                    "value": "This amount can vary due to currency exchange rates or depending on the selected service."
                  }]
                }), pmFeeInfo.aboutURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    href: pmFeeInfo.aboutURL,
                    openInNewTab: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "LearnMoreAboutServiceFees",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Learn more about "
                      }, {
                        "type": 1,
                        "value": "service"
                      }, {
                        "type": 0,
                        "value": " fees"
                      }],
                      values: {
                        service: pmFeeInfo.name
                      }
                    })
                  })]
                })]
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__.InfoCircle, {
                size: "16px",
                color: "#76777A"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            amount: pmFeeInfo.fee || null,
            currency: currency,
            amountStyles: {
              color: 'black.700',
              fontWeight: 400
            }
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(AmountLine, {
        color: "black.700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(Label, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "NetAmountFor",
            defaultMessage: [{
              "type": 0,
              "value": "Net amount for "
            }, {
              "type": 1,
              "value": "name"
            }],
            values: {
              name: collective.name
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(Amount, {
          children: [!pmFeeInfo.isExact && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
            display: "inline-block",
            mr: 1,
            verticalAlign: "text-bottom",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
              verticalAlign: "top",
              content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                id: "4oy6Z0",
                defaultMessage: [{
                  "type": 0,
                  "value": "Net Amount = Today's charge - Payment processor fee - Support Open Collective"
                }]
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__.InfoCircle, {
                size: "16px",
                color: "#76777A"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            amount: totalAmount - pmFeeInfo.fee - platformTip,
            currency: currency,
            amountStyles: null
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      borderColor: "black.500",
      my: 1
    }), stepDetails?.interval && stepDetails?.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__["default"].oneTime && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
      color: "black.700",
      fontSize: "11px",
      fontStyle: "italic",
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "ContributionSummary.NextCharge",
        defaultMessage: [{
          "type": 0,
          "value": "If you select PayPal, you will be charged on the same day each month. Otherwise the next charge will be on "
        }, {
          "type": 1,
          "value": "date"
        }, {
          "type": 0,
          "value": " and then the first day of "
        }, {
          "type": 5,
          "value": "interval",
          "options": {
            "month": {
              "value": [{
                "type": 0,
                "value": "each month"
              }]
            },
            "year": {
              "value": [{
                "type": 0,
                "value": "the same month each year"
              }]
            },
            "other": {
              "value": []
            }
          }
        }, {
          "type": 0,
          "value": ". You can cancel or edit this contribution by going to 'Manage Contributions'."
        }],
        values: {
          date: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
            value: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_7__/* .getNextChargeDate */ .B1)(new Date(), stepDetails.interval),
            day: "numeric",
            month: "long",
            year: "numeric"
          }),
          interval: stepDetails.interval
        }
      })
    })]
  });
};

ContributionSummary.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributionSummary",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "tier": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepDetails": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepSummary": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepPayment": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "renderTax": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributionSummary);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24317);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97079);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41216);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _StyledTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36422);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51927);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_11__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const _excluded = ["contribution"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const ContributorCardWithTier = _ref => {
  let {
    contribution
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const collective = contribution.toAccount;
  const pendingOrder = contribution.status === _lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.PENDING */ .D.PENDING;
  const tagMessages = {
    [_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.PENDING */ .D.PENDING]: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "NewContributionFlow.PendingContribution",
      defaultMessage: [{
        "type": 0,
        "value": "Pending contribution"
      }]
    }),
    [_lib_constants_order_status__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUS.PROCESSING */ .D.PROCESSING]: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
      id: "NewContributionFlow.ProcessingContribution",
      defaultMessage: [{
        "type": 0,
        "value": "Processing Payment"
      }]
    })
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledCollectiveCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
    collective: collective,
    tag: tagMessages[contribution.status] ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTag__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      display: "inline-block",
      textTransform: "uppercase",
      my: 2,
      type: "warning",
      children: tagMessages[contribution.status]
    }) : null,
    bodyHeight: 306,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
      flexDirection: "column",
      flexGrow: 1,
      justifyContent: "space-around",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
        px: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          color: "black.900",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "NewContributionFlow.NumberOfFinancialContributors",
            defaultMessage: [{
              "type": 1,
              "value": "contributors"
            }, {
              "type": 0,
              "value": " financial contributors"
            }],
            values: {
              contributors: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("span", {
                style: {
                  color: 'black.900'
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx("b", {
                  children: collective.contributors?.totalCount || 1
                })
              })
            }
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        width: "100%",
        mt: 3
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        height: 150,
        flexGrow: pendingOrder ? 1 : 0,
        justifyContent: "center",
        px: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          mb: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
            textTransform: "uppercase",
            fontSize: "10px",
            lineHeight: "14px",
            fontWeight: "400",
            color: "black.500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "membership.totalDonations.title",
              defaultMessage: [{
                "type": 0,
                "value": "Amount contributed"
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
            flexDirection: "column",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "bold",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                amount: !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(contribution.platformTipAmount?.valueInCents) ? contribution.amount.valueInCents + contribution.platformTipAmount.valueInCents : contribution.amount.valueInCents,
                currency: contribution.amount.currency,
                frequency: contribution.frequency
              })
            }), Boolean(contribution.platformTipAmount?.valueInCents) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
              content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: "Subscriptions.FeesOnTopTooltip",
                defaultMessage: [{
                  "type": 0,
                  "value": "Contribution plus Platform Tip"
                }]
              }),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
                fontSize: "12px",
                lineHeight: "20px",
                color: "primary.600",
                ml: 1,
                children: ["(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                  amount: contribution.amount.valueInCents,
                  currency: contribution.amount.currency,
                  showCurrencyCode: false,
                  precision: 2,
                  amountStyles: {
                    fontWeight: 'normal',
                    color: 'primary.600'
                  }
                }), ' ', "+", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                  amount: contribution.platformTipAmount.valueInCents,
                  currency: contribution.amount.currency,
                  showCurrencyCode: false,
                  precision: 2,
                  amountStyles: {
                    fontWeight: 'normal',
                    color: 'primary.600'
                  }
                }), ")"]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
          mb: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
            textTransform: "uppercase",
            fontSize: "10px",
            lineHeight: "14px",
            fontWeight: "400",
            color: "black.500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "To",
              defaultMessage: [{
                "type": 0,
                "value": "To"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_Text__WEBPACK_IMPORTED_MODULE_12__.P, {
            fontSize: "12px",
            fontWeight: "bold",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
              id: "NewContributionFlow.CollectiveAndTier",
              defaultMessage: [{
                "type": 1,
                "value": "collective"
              }, {
                "type": 0,
                "value": " - "
              }, {
                "type": 1,
                "value": "tier"
              }],
              values: {
                collective: collective.name,
                tier: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(contribution.tier?.name) || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                  id: "Member.Role.CONTRIBUTOR",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Contributor"
                  }]
                })
              }
            })
          })]
        })]
      })]
    })
  }));
};

ContributorCardWithTier.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ContributorCardWithTier",
  "props": {
    "contribution": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_UserProvider__WEBPACK_IMPORTED_MODULE_13__/* .withUser */ .ns)(ContributorCardWithTier));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ validateNewOrg)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87262);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_4__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  displayName: {
    id: "Fields.displayName",
    defaultMessage: [{
      "type": 0,
      "value": "Display name"
    }]
  },
  website: {
    id: "Fields.website",
    defaultMessage: [{
      "type": 0,
      "value": "Website"
    }]
  },
  twitterHandle: {
    id: "contributeAs.org.twitter",
    defaultMessage: [{
      "type": 0,
      "value": "Twitter (optional)"
    }]
  }
});
const validateNewOrg = values => {
  if (!values.name) {
    return false;
  } else if (values.website && !(0,validator__WEBPACK_IMPORTED_MODULE_2__.isURL)(values.website)) {
    return false;
  }

  return true;
};

const CreateOrganizationForm = ({
  values,
  onChange
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();

  const dispatchChange = field => e => onChange(_objectSpread(_objectSpread({}, values), {}, {
    [field]: e.target.value
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      autoFocus: true,
      name: "name",
      htmlFor: "name",
      label: formatMessage(msg.displayName),
      mt: 3,
      required: true,
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
        width: "100%",
        placeholder: "e.g., AirBnb, TripleByte",
        value: values.name,
        minLength: 2,
        onChange: dispatchChange('name')
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      name: "website",
      htmlFor: "website",
      inputType: "url",
      mt: 3,
      label: formatMessage(msg.website),
      required: false,
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
        placeholder: "e.g., opencollective.com",
        width: "100%",
        value: values.website,
        onChange: dispatchChange('website')
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      name: "twitterHandle",
      htmlFor: "twitterHandle",
      mt: 3,
      label: "Twitter",
      required: false,
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
        placeholder: "e.g., @opencollect",
        width: "100%",
        value: values.twitterHandle,
        onChange: dispatchChange('twitterHandle')
      }))
    })]
  });
};

CreateOrganizationForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateOrganizationForm",
  "props": {
    "values": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CreateOrganizationForm)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ PayWithStripeForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21825);
/* harmony import */ var _styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1808);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88705);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41433);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledTooltip__WEBPACK_IMPORTED_MODULE_8__]);
_StyledTooltip__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const StripePaymentMethodTypesWithMandate = ['bancontact'];
const StripeSEPAMandateMessage = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessage)({
  id: "Stripe.SEPA.Mandate",
  defaultMessage: [{
    "type": 0,
    "value": "By providing your payment information and confirming this payment, you authorise (A) OPENCOLLECTIVE INC and Stripe, our payment service provider and/or PPRO, its local service provider, to send instructions to your bank to debit your account and (B) your bank to debit your account in accordance with those instructions. As part of your rights, you are entitled to a refund from your bank under the terms and conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from the date on which your account was debited. Your rights are explained in a statement that you can obtain from your bank. You agree to receive notifications for future debits up to 2 days before they occur."
  }]
});

function StripeMandate() {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
    children: intl.formatMessage(StripeSEPAMandateMessage)
  });
}

function PayWithStripeForm({
  defaultIsSaved,
  hasSaveCheckBox,
  bilingDetails,
  paymentIntentId,
  paymentIntentClientSecret,
  onChange,
  stepDetails
}) {
  const [isSavedForLater, setIsSavedForLater] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(defaultIsSaved);
  const [stripePaymentMethodType, setStripePaymentMethodType] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useElements)();
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
  const onElementChange = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(event => {
    onChange({
      stepPayment: {
        key: _utils__WEBPACK_IMPORTED_MODULE_10__/* .STRIPE_PAYMENT_ELEMENT_KEY */ .W2,
        paymentMethod: {
          paymentIntentId,
          service: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_SERVICE.STRIPE */ .tp.STRIPE,
          type: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_4__/* .PAYMENT_METHOD_TYPE.PAYMENT_INTENT */ .td.PAYMENT_INTENT,
          isSavedForLater: defaultIsSaved
        },
        isCompleted: event.complete,
        stripeData: {
          stripe,
          elements,
          paymentIntentClientSecret
        }
      }
    });
    setStripePaymentMethodType(event?.value?.type);
  }, [onChange]);
  const onSavePaymentMethodToggle = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(({
    checked
  }) => {
    onChange(({
      stepPayment
    }) => ({
      stepPayment: _objectSpread(_objectSpread({}, stepPayment), {}, {
        paymentMethod: _objectSpread(_objectSpread({}, stepPayment.paymentMethod), {}, {
          isSavedForLater: checked
        })
      })
    }));
    setIsSavedForLater(checked);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.PaymentElement, {
      options: {
        paymentMethodOrder: ['card', 'apple_pay', 'google_pay'],
        defaultValues: {
          billingDetails: {
            name: bilingDetails?.name,
            email: bilingDetails?.email
          }
        }
      },
      onChange: onElementChange
    }), (stepDetails.interval || isSavedForLater) && StripePaymentMethodTypesWithMandate.includes(stripePaymentMethodType) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mt: 3,
      color: "black.600",
      fontWeight: "normal",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(StripeMandate, {})
    }), hasSaveCheckBox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      mt: 3,
      alignItems: "center",
      color: "black.700",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        defaultChecked: defaultIsSaved,
        name: "save",
        onChange: onSavePaymentMethodToggle,
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "paymentMethod.save",
          defaultMessage: [{
            "type": 0,
            "value": "Remember this payment method"
          }]
        })
      }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
          fontWeight: "normal",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
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
              LearnMoreLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* .getI18nLink */ .fw)({
                openInNewTab: true,
                href: 'https://docs.opencollective.com/help/product/security#payments-security'
              })
            }
          })
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_styled_icons_octicons_Question__WEBPACK_IMPORTED_MODULE_2__.Question, {
          size: "1.1em"
        })
      })]
    })]
  });
}
PayWithStripeForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PayWithStripeForm",
  "props": {
    "paymentIntentId": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "paymentIntentClientSecret": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "bilingDetails": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "email": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    },
    "defaultIsSaved": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hasSaveCheckBox": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "stepDetails": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "interval": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaymentMethodList)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97965);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62131);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79936);
/* harmony import */ var _lib_stripe_usePaymentIntent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48352);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37278);
/* harmony import */ var _MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68185);
/* harmony import */ var _NewCreditCardForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(86501);
/* harmony import */ var _StyledRadioList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36718);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _PayWithStripe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71303);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_18__, _PayWithStripe__WEBPACK_IMPORTED_MODULE_21__]);
([_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_18__, _PayWithStripe__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const paymentMethodsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query ContributionFlowPaymentMethods($slug: String) {
    account(slug: $slug) {
      id
      paymentMethods(
        type: [CREDITCARD, US_BANK_ACCOUNT, SEPA_DEBIT, BACS_DEBIT, GIFTCARD, PREPAID, COLLECTIVE]
        includeExpired: true
      ) {
        id
        name
        data
        service
        type
        expiryDate
        providerType
        sourcePaymentMethod {
          id
          name
          data
          service
          type
          expiryDate
          providerType
          balance {
            currency
          }
          limitedToHosts {
            id
            legacyId
            slug
          }
        }
        balance {
          valueInCents
          currency
        }
        account {
          id
          slug
          type
          name
          imageUrl
        }
        limitedToHosts {
          id
          legacyId
          slug
        }
      }
    }
  }
`;
const PaymentMethodBox = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
  displayName: "PaymentMethodList__PaymentMethodBox",
  componentId: "sc-h9ogia-0"
})(["display:flex;flex-direction:column;background:#ffffff;padding:16px;", ""], props => props.index && (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.css)(["border-top:1px solid ", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__.themeGet)('colors.black.200')));
function PaymentMethodList(props) {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  const {
    loading: loadingPaymentMethods,
    data: paymentMethodsData,
    error: paymentMethodsError
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(paymentMethodsQuery, {
    variables: {
      slug: props.fromAccount.slug
    },
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_9__/* .API_V2_CONTEXT */ .T,
    skip: !props.fromAccount.slug,
    fetchPolicy: 'no-cache'
  });
  const hostSupportedPaymentMethods = props.host?.supportedPaymentMethods ?? [];
  const [paymentIntent, stripe, loadingPaymentIntent] = (0,_lib_stripe_usePaymentIntent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)({
    skip: !hostSupportedPaymentMethods.includes(_lib_graphql_types_v2_graphql__WEBPACK_IMPORTED_MODULE_10__/* .PaymentMethodLegacyType.PAYMENT_INTENT */ .zY.PAYMENT_INTENT),
    amount: {
      valueInCents: props.stepDetails.amount,
      currency: props.stepDetails.currency
    },
    fromAccount: props.fromAccount.isGuest ? undefined : typeof props.fromAccount.id === 'string' ? {
      id: props.fromAccount.id
    } : {
      legacyId: props.fromAccount.id
    },
    toAccount: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(props.toAccount, 'id')
  });
  const paymentMethodOptions = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_22__/* .generatePaymentMethodOptions */ .oz)(intl, paymentMethodsData?.account?.paymentMethods ?? [], props.fromAccount, props.stepDetails, props.stepSummary, props.toAccount, props.isEmbed, props.disabledPaymentMethodTypes, paymentIntent);
  }, [paymentMethodsData?.account?.paymentMethods, props.fromAccount, props.stepDetails, props.stepSummary, props.toAccount, props.isEmbed, props.disabledPaymentMethodTypes, paymentIntent, intl]);
  const loading = loadingPaymentMethods || loadingPaymentIntent;
  const error = paymentMethodsError;
  const setNewPaymentMethod = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback((key, paymentMethod) => {
    return props.onChange({
      stepPayment: {
        key,
        paymentMethod,
        stripeData: paymentIntent ? {
          stripe,
          paymentIntentClientSecret: paymentIntent.client_secret
        } : undefined
      }
    });
  }, [props.onChange, stripe, paymentIntent]);
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    if (loading) {
      return;
    } else if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(paymentMethodOptions)) {
      return props.onChange({
        stepPayment: null
      });
    }

    if (!props.stepPayment || props.stepPayment.isKeyOnly) {
      // Select the option given in URL if it's available, otherwise select the first available option
      const keyToSelect = props.stepPayment?.key;
      const newOption = paymentMethodOptions.find(pm => !pm.disabled && (!keyToSelect || pm.key === keyToSelect));

      if (newOption) {
        setNewPaymentMethod(newOption.key, _objectSpread(_objectSpread({}, newOption.paymentMethod), {}, {
          paymentIntentId: paymentIntent?.id
        }));
      } else if (props.stepPayment) {
        props.onChange({
          stepPayment: null
        }); // Make sure we unselect the option if it's not available
      }
    }
  }, [paymentMethodOptions, props.stepPayment, loading, paymentIntent]);

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {});
  }

  if (error) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_MessageBoxGraphqlError__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      error: error
    });
  }

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(paymentMethodOptions)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      type: "warning",
      withIcon: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
        id: "NewContribute.noPaymentMethodsAvailable",
        defaultMessage: [{
          "type": 0,
          "value": "No payment methods available."
        }]
      })
    });
  }

  const list = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledRadioList__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
    id: "PaymentMethod",
    name: "PaymentMethod",
    keyGetter: "key",
    options: paymentMethodOptions,
    onChange: option => setNewPaymentMethod(option.key, _objectSpread(_objectSpread({}, option.value.paymentMethod), {}, {
      paymentIntentId: paymentIntent?.id
    })),
    value: props.stepPayment?.key || null,
    disabled: props.isSubmitting,
    containerProps: undefined,
    labelProps: undefined,
    radioSize: undefined,
    "data-cy": "PaymentMethodList",
    children: ({
      radio,
      checked,
      index,
      value
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(PaymentMethodBox, {
      index: index,
      disabled: value.disabled,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_StyledFlex, {
        alignItems: "center",
        $_css: value.disabled ? 'filter: grayscale(1) opacity(50%);' : undefined,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
          as: "span",
          mr: 3,
          flexWrap: "wrap",
          children: radio
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledFlex2, {
          mr: 3,
          children: value.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
          flexDirection: "column",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: 400,
            color: "black.900",
            children: value.title
          }), value.subtitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "black.500",
            children: value.subtitle
          })]
        })]
      }), value.key === _utils__WEBPACK_IMPORTED_MODULE_22__/* .NEW_CREDIT_CARD_KEY */ .u0 && checked && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        my: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.Elements, {
          stripe: (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_12__/* .getStripe */ .d2)(),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_NewCreditCardForm__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            name: _utils__WEBPACK_IMPORTED_MODULE_22__/* .NEW_CREDIT_CARD_KEY */ .u0,
            profileType: props.fromAccount?.type,
            hidePostalCode: props.hideCreditCardPostalCode,
            onReady: props.onNewCardFormReady,
            useLegacyCallback: false,
            onChange: paymentMethod => setNewPaymentMethod(_utils__WEBPACK_IMPORTED_MODULE_22__/* .NEW_CREDIT_CARD_KEY */ .u0, paymentMethod),
            error: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(props.stepPayment, 'paymentMethod?.stripeData?.error?.message'),
            defaultIsSaved: !props.fromAccount?.isGuest,
            hasSaveCheckBox: !props.fromAccount?.isGuest
          })
        })
      }), value.key === 'manual' && checked && value.instructions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        my: 3,
        color: "black.600",
        fontSize: "14px",
        children: value.instructions
      }), value.key === _utils__WEBPACK_IMPORTED_MODULE_22__/* .STRIPE_PAYMENT_ELEMENT_KEY */ .W2 && checked && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Box */ .xu, {
        my: 3,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_PayWithStripe__WEBPACK_IMPORTED_MODULE_21__/* .PayWithStripeForm */ .R, {
          bilingDetails: {
            name: props.fromAccount?.name,
            email: LoggedInUser?.email ?? props?.fromAccount?.email
          },
          stepDetails: props.stepDetails,
          paymentIntentId: paymentIntent.id,
          paymentIntentClientSecret: paymentIntent.client_secret,
          onChange: props.onChange,
          defaultIsSaved: !props.fromAccount?.isGuest,
          hasSaveCheckBox: !props.fromAccount?.isGuest
        })
      })]
    })
  });

  if (paymentIntent && stripe) {
    const options = {
      clientSecret: paymentIntent.client_secret,
      appearance: {
        theme: 'stripe',
        variables: {
          fontFamily: 'Inter, sans-serif'
        }
      },
      fonts: [{
        cssSrc: 'https://fonts.googleapis.com/css?family=Inter'
      }]
    };
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.Elements, {
      options: options,
      stripe: stripe,
      children: list
    });
  }

  return list;
}

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC).withConfig({
  displayName: "PaymentMethodList___StyledFlex",
  componentId: "sc-h9ogia-1"
})(["", ""], p => p.$_css);

var _StyledFlex2 = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC).withConfig({
  displayName: "PaymentMethodList___StyledFlex2",
  componentId: "sc-h9ogia-2"
})({
  flexBasis: '26px'
});

PaymentMethodList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PaymentMethodList",
  "props": {
    "host": {
      "required": true,
      "tsType": {
        "name": "Host"
      },
      "description": ""
    },
    "toAccount": {
      "required": true,
      "tsType": {
        "name": "Account"
      },
      "description": ""
    },
    "fromAccount": {
      "required": false,
      "tsType": {
        "name": "Individual"
      },
      "description": ""
    },
    "disabledPaymentMethodTypes": {
      "required": true,
      "tsType": {
        "name": "Array",
        "elements": [{
          "name": "string"
        }],
        "raw": "string[]"
      },
      "description": ""
    },
    "stepSummary": {
      "required": true,
      "tsType": {
        "name": "object"
      },
      "description": ""
    },
    "stepDetails": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "object",
        "raw": "{ amount: number; currency: string; interval?: string }",
        "signature": {
          "properties": [{
            "key": "amount",
            "value": {
              "name": "number",
              "required": true
            }
          }, {
            "key": "currency",
            "value": {
              "name": "string",
              "required": true
            }
          }, {
            "key": "interval",
            "value": {
              "name": "string",
              "required": false
            }
          }]
        }
      },
      "description": ""
    },
    "stepPayment": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "object",
        "raw": "{ key: string; isKeyOnly?: boolean }",
        "signature": {
          "properties": [{
            "key": "key",
            "value": {
              "name": "string",
              "required": true
            }
          }, {
            "key": "isKeyOnly",
            "value": {
              "name": "boolean",
              "required": false
            }
          }]
        }
      },
      "description": ""
    },
    "isEmbed": {
      "required": true,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "isSubmitting": {
      "required": true,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "hideCreditCardPostalCode": {
      "required": true,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    },
    "onNewCardFormReady": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    },
    "onChange": {
      "required": true,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "(any) => void",
        "signature": {
          "arguments": [{
            "name": "any"
          }],
          "return": {
            "name": "void"
          }
        }
      },
      "description": ""
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ DEFAULT_PLATFORM_TIP_PERCENTAGE),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17632);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54029);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var _fees_on_top_illustration_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83865);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  noThankYou: {
    id: "NoThankYou",
    defaultMessage: [{
      "type": 0,
      "value": "No thank you"
    }]
  },
  other: {
    id: "platformFee.Other",
    defaultMessage: [{
      "type": 0,
      "value": "Other"
    }]
  }
});
const Illustration = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.attrs({
  src: _fees_on_top_illustration_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
}).withConfig({
  displayName: "PlatformTipInput__Illustration",
  componentId: "sc-14lsmsl-0"
})(["width:40px;height:40px;"]);
const DEFAULT_PERCENTAGES = [0.1, 0.15, 0.2];
const DEFAULT_PLATFORM_TIP_INDEX = 1;
const DEFAULT_PLATFORM_TIP_PERCENTAGE = DEFAULT_PERCENTAGES[DEFAULT_PLATFORM_TIP_INDEX];

const getOptionFromPercentage = (amount, currency, percentage) => {
  const tipAmount = isNaN(amount) ? 0 : Math.round(amount * percentage);
  let label = `${tipAmount / 100} ${currency}`;

  if (tipAmount) {
    label += ` (${percentage * 100}%)`; // Don't show percentages of 0
  }

  return {
    // Value must be unique, so we set a special key if tipAmount is 0
    value: tipAmount || `${percentage}%`,
    tipAmount,
    percentage,
    currency,
    label
  };
};

const getOptions = (amount, currency, intl) => {
  return [...DEFAULT_PERCENTAGES.map(percentage => {
    return getOptionFromPercentage(amount, currency, percentage);
  }), {
    label: intl.formatMessage(msg.noThankYou),
    value: 0
  }, {
    label: intl.formatMessage(msg.other),
    value: 'CUSTOM'
  }];
};

const PlatformTipInput = ({
  currency,
  amount,
  quantity,
  value,
  onChange,
  isEmbed
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const orderAmount = amount * quantity;
  const options = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => getOptions(orderAmount, currency, intl), [orderAmount, currency]);

  const formatOptionLabel = option => {
    if (option.currency) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
        children: [(0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_4__/* .formatCurrency */ .xG)(option.tipAmount, option.currency, {
          locale: intl.locale
        }), ' ', Boolean(option.tipAmount) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_9__/* .Span */ .Dr, {
          color: "black.500",
          children: ["(", option.percentage * 100, "%)"]
        })]
      });
    } else {
      return option.label;
    }
  };

  const [selectedOption, setSelectedOption] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(options[DEFAULT_PLATFORM_TIP_INDEX]);
  const [isReady, setReady] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false); // Load initial value on mount

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
      const option = options.find(option => option.value === value) || options.find(option => option.value === 'CUSTOM');
      setSelectedOption(option);
    }

    setReady(true);
  }, []); // Dispatch new platform tip when amount changes

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (!isReady) {
      return;
    } else if (selectedOption.value === 0 && value) {
      onChange(0);
    } else if (selectedOption.percentage) {
      const newOption = getOptionFromPercentage(orderAmount, currency, selectedOption.percentage);

      if (newOption.tipAmount !== value) {
        onChange(newOption.tipAmount);
        setSelectedOption(newOption);
      }
    }
  }, [selectedOption, orderAmount, isReady]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    "data-cy": "PlatformTipInput",
    display: amount === 0 ? 'none' : 'block',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "21px",
      color: "black.900",
      my: 32,
      children: !isEmbed ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "platformFee.info",
        defaultMessage: [{
          "type": 0,
          "value": "Tips from contributors like you allow us to keep Open Collective free for Collectives. Thanks for any support!"
        }]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "pCwxIS",
        defaultMessage: [{
          "type": 0,
          "value": "Powered by Open Collective, a platform to raise and spend money in full transparency. Tips from contributors like you help keep this service free for Collectives. Thanks for any support!"
        }]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      justifyContent: "space-between",
      flexWrap: ['wrap', 'nowrap'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Illustration, {
          alt: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, {
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "18px",
          color: "black.900",
          mx: 10,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "platformFee.thankYou",
            defaultMessage: [{
              "type": 0,
              "value": "Thank you for your contribution:"
            }]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        inputId: "donation-percentage",
        "aria-label": "Donation percentage",
        width: "100%",
        maxWidth: ['100%', 190],
        mt: [2, 0],
        isSearchable: false,
        fontSize: "15px",
        options: options,
        onChange: setSelectedOption,
        formatOptionLabel: formatOptionLabel,
        value: selectedOption,
        disabled: !amount // Don't allow changing the platform tip if the amount is not set

      })]
    }), selectedOption.value === 'CUSTOM' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      justifyContent: "flex-end",
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        id: "feesOnTop",
        name: "platformTip",
        currency: currency,
        onChange: onChange,
        value: value
      })
    })]
  });
};

PlatformTipInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PlatformTipInput",
  "props": {
    "currency": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "amount": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "quantity": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "value": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlatformTipInput);

/***/ }),

/***/ 56878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47435);
/* harmony import */ var _styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88705);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const ProtectTransactionInfoBox = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "SafeTransactionMessage__ProtectTransactionInfoBox",
  componentId: "sc-xq4cm4-0"
})(["border-radius:8px;background-color:", ";border:1px solid ", ";padding:16px 12px;width:100%;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.blue.50'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.blue.600'));
const BlueCheckShield = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_styled_icons_boxicons_regular_CheckShield__WEBPACK_IMPORTED_MODULE_1__.CheckShield).withConfig({
  displayName: "SafeTransactionMessage__BlueCheckShield",
  componentId: "sc-xq4cm4-1"
})(["color:", ";"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.blue.500'));

const SafeTransactionMessage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ProtectTransactionInfoBox, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(BlueCheckShield, {
          size: 30
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        flexDirection: "column",
        ml: 22,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontWeight: "bold",
          fontSize: "12px",
          lineHeight: "20px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "NewContributionFlow.ProtectTransactionTitle",
            defaultMessage: [{
              "type": 0,
              "value": "We protect your transaction:"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "500",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "NewContributionFlow.ProtectTransactionDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Open Collective keeps your transaction safe. "
            }, {
              "type": 8,
              "value": "link",
              "children": [{
                "type": 0,
                "value": "Learn more"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              link: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* .getI18nLink */ .fw)({
                href: 'https://docs.opencollective.com/help/product/security#payments-security',
                openInNewTab: true
              })
            }
          })
        })]
      })]
    })
  });
};

SafeTransactionMessage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SafeTransactionMessage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SafeTransactionMessage);

/***/ }),

/***/ 30805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41844);
/* harmony import */ var _styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60225);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87268);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const ShareButton = () => {
  const {
    isCopied,
    copy
  } = (0,_lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    buttonSize: "tiny",
    onClick: () => copy(window.location.href),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_feather_Share2__WEBPACK_IMPORTED_MODULE_1__.Share2, {
      size: 12
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
      ml: 1,
      children: isCopied ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "Clipboard.Copied",
        defaultMessage: [{
          "type": 0,
          "value": "Copied!"
        }]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "GQNYob",
        defaultMessage: [{
          "type": 0,
          "value": "Share link"
        }]
      })
    })]
  });
};

ShareButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ShareButton"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);

/***/ }),

/***/ 31387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78720);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_2__]);
_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["onCancel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const SignInToContributeAsAnOrganization = _ref => {
  let {
    onCancel
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      type: "button",
      isBorderless: true,
      buttonStyle: "secondary",
      mb: 3,
      onClick: onCancel,
      children: ["\u2190", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "ContributionFlow.goBackToGuest",
        defaultMessage: [{
          "type": 0,
          "value": "Go back to contribute as a guest"
        }]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_SignInOrJoinFree__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, props), {}, {
      defaultForm: "signin",
      createProfileLabels: {
        personal: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributionFlow.CreateUserLabel",
          defaultMessage: [{
            "type": 0,
            "value": "Contribute as an individual"
          }]
        }),
        organization: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributionFlow.CreateOrganizationLabel",
          defaultMessage: [{
            "type": 0,
            "value": "Contribute as an organization"
          }]
        })
      }
    }))]
  });
};

SignInToContributeAsAnOrganization.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SignInToContributeAsAnOrganization",
  "props": {
    "onCancel": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInToContributeAsAnOrganization);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5889);
/* harmony import */ var _styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43860);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60225);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88705);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87268);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















const StepCheckout = ({
  stepDetails,
  order
}) => {
  const {
    isCopied,
    copy
  } = (0,_lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();

  const renderCryptoInformation = order => {
    const pledgeCurrency = order?.data?.thegivingblock?.pledgeCurrency;
    const depositAddress = order?.paymentMethod?.data?.depositAddress;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .kC, {
      flexDirection: "column",
      width: 1,
      mt: "24px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        type: "info",
        fontSize: "13px",
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "collective.user.orderProcessing.crypto",
          defaultMessage: [{
            "type": 8,
            "value": "strong",
            "children": [{
              "type": 0,
              "value": "Your contribution is pending."
            }]
          }, {
            "type": 0,
            "value": " We also sent you these details to your email. Once the transaction is completed you will receive a confirmation email with the details."
          }],
          values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP
        }), ` `, ['BTC', 'ETH', 'BCH', 'LTC', 'ZEC', 'DOGE'].includes(pledgeCurrency) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "23P2mL",
          defaultMessage: [{
            "type": 0,
            "value": "You can view the status of your transaction at the Blockchain explorer: "
          }, {
            "type": 1,
            "value": "link"
          }],
          values: {
            link: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
              openInNewTab: true,
              href: `https://blockchair.com/search?q=${depositAddress}`,
              children: `https://blockchair.com/search?q=${depositAddress}`
            })
          }
        })]
      })
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    width: 1,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
      textAlign: ['center'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "NewContribute.crypto.donationDescription",
        defaultMessage: [{
          "type": 0,
          "value": "Use the address below to donate "
        }, {
          "type": 1,
          "value": "amount"
        }, {
          "type": 0,
          "value": " from your wallet"
        }],
        values: {
          amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
            style: {
              color: 'black.900'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("b", {
              children: [stepDetails.cryptoAmount, " ", stepDetails.currency.value]
            })
          })
        }
      }), order?.paymentMethod?.data?.depositAddress && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((qrcode_react__WEBPACK_IMPORTED_MODULE_2___default()), {
          value: order.paymentMethod.data.depositAddress,
          imageSettings: {
            src: `/static/images/crypto-logos/${stepDetails.currency.value}.svg`,
            height: 40,
            width: 40,
            excavate: true
          },
          renderAs: "svg",
          size: 256,
          level: "L",
          includeMargin: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__.P, {
          mb: "16px",
          children: order.paymentMethod.data.depositAddress
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          onClick: () => copy(order.paymentMethod.data.depositAddress),
          disabled: isCopied,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Span */ .Dr, {
            mr: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "NewContribute.crypto.QRCodeCopyButton",
              defaultMessage: [{
                "type": 0,
                "value": "Click to copy wallet address"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_1__.Link, {
            size: "20px"
          })]
        }), renderCryptoInformation(order)]
      })]
    })
  });
};

StepCheckout.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepCheckout",
  "props": {
    "stepDetails": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "order": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepCheckout);

/***/ }),

/***/ 76559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80642);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12568);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17632);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62131);
/* harmony import */ var _lib_i18n_interval__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44583);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36648);
/* harmony import */ var _components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16738);
/* harmony import */ var _components_StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54029);
/* harmony import */ var _components_StyledInputField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87262);
/* harmony import */ var _AutoCollapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46351);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16159);
/* harmony import */ var _StyledAmountPicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84985);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(97274);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90998);
/* harmony import */ var _ChangeTierWarningModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(26555);
/* harmony import */ var _PlatformTipInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4770);
/* harmony import */ var _TierCustomFields__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(60002);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _TierCustomFields__WEBPACK_IMPORTED_MODULE_25__]);
([_components_StyledInputField__WEBPACK_IMPORTED_MODULE_14__, _TierCustomFields__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























const getCustomFields = (collective, tier) => {
  return [...(tier?.customFields || []), ...(collective.host?.settings?.contributionFlow?.customFields || [])];
};

const StepDetails = ({
  onChange,
  data,
  collective,
  tier,
  showPlatformTip,
  router,
  isEmbed
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const amount = data?.amount;
  const currency = tier?.amount.currency || collective.currency;
  const presets = (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_11__/* .getTierPresets */ .Vq)(tier, collective.type, currency);

  const getDefaultOtherAmountSelected = () => lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(amount) || !presets?.includes(amount);

  const [isOtherAmountSelected, setOtherAmountSelected] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(getDefaultOtherAmountSelected);
  const [temporaryInterval, setTemporaryInterval] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(undefined);
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
  const minAmount = (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_11__/* .getTierMinAmount */ .qt)(tier, currency);
  const hasQuantity = tier?.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_7__/* .TierTypes.TICKET */ .x$.TICKET && !tier.singleTicket || tier?.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_7__/* .TierTypes.PRODUCT */ .x$.PRODUCT;
  const isFixedContribution = tier?.amountType === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_7__/* .AmountTypes.FIXED */ .lX.FIXED;
  const customFields = getCustomFields(collective, tier);
  const selectedInterval = data?.interval;
  const supportsRecurring = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .canContributeRecurring */ .nu)(collective, LoggedInUser) && (!tier || tier?.interval);
  const isFixedInterval = tier?.interval && tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__["default"].flexible;

  const dispatchChange = (field, value) => {
    onChange({
      stepDetails: _objectSpread(_objectSpread({}, data), {}, {
        [field]: value
      }),
      stepSummary: null
    });
  }; // If an interval has been set (either from the tier defaults, or form an URL param) and the
  // collective doesn't support it, we reset the interval


  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    if (selectedInterval && !isFixedInterval && !supportsRecurring) {
      dispatchChange('interval', _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__["default"].oneTime);
    }
  }, [selectedInterval, isFixedInterval, supportsRecurring]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
    width: 1,
    children: [tier?.type === 'TICKET' && tier.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Container__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      mb: 4,
      whiteSpace: "pre-line",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_AutoCollapse__WEBPACK_IMPORTED_MODULE_15__/* .AutoCollapse */ .O, {
        maxCollapsedHeight: 125,
        children: tier.description
      })
    }), !isFixedInterval && supportsRecurring && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_StyledButtonSet__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      id: "interval",
      justifyContent: "center",
      mt: [4, 0],
      mb: "30px",
      items: [_lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__["default"].oneTime, _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__["default"].month, _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__["default"].year],
      selected: selectedInterval || null,
      buttonProps: {
        px: 2,
        py: '5px'
      },
      role: "group",
      "aria-label": "Amount types",
      onChange: interval => {
        if (tier && tier.interval !== _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_6__["default"].flexible) {
          setTemporaryInterval(interval);
        } else {
          dispatchChange('interval', interval);
        }
      },
      children: ({
        item,
        isSelected
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__/* .Span */ .Dr, {
        fontSize: isSelected ? '20px' : '18px',
        lineHeight: "28px",
        fontWeight: isSelected ? 500 : 400,
        children: (0,_lib_i18n_interval__WEBPACK_IMPORTED_MODULE_10__/* .i18nInterval */ .G)(intl, item)
      })
    }), !isFixedContribution ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      mb: "30px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_StyledAmountPicker__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        currency: currency,
        presets: presets,
        value: isOtherAmountSelected ? _StyledAmountPicker__WEBPACK_IMPORTED_MODULE_19__/* .OTHER_AMOUNT_KEY */ .R : data?.amount,
        onChange: value => {
          if (value === _StyledAmountPicker__WEBPACK_IMPORTED_MODULE_19__/* .OTHER_AMOUNT_KEY */ .R) {
            setOtherAmountSelected(true);
          } else {
            setOtherAmountSelected(false);
            dispatchChange('amount', value);
          }
        }
      }), isOtherAmountSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_StyledInputAmount__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          name: "custom-amount",
          type: "number",
          currency: currency,
          value: data?.amount,
          width: 1,
          min: minAmount,
          currencyDisplay: "full",
          prependProps: {
            color: 'black.500'
          },
          required: true,
          onChange: value => {
            dispatchChange('amount', value);
          }
        }), Boolean(minAmount) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Flex */ .kC, {
          fontSize: "14px",
          color: "black.800",
          flexDirection: "column",
          alignItems: "flex-end",
          mt: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "contribution.minimumAmount",
            defaultMessage: [{
              "type": 0,
              "value": "Minimum amount: "
            }, {
              "type": 1,
              "value": "minAmount"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 1,
              "value": "currency"
            }],
            values: {
              minAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatCurrency */ .xG)(minAmount, currency, {
                locale: intl.locale
              }),
              currency
            }
          })
        })]
      })]
    }) : tier.amount.valueInCents ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
        id: "contribute.tierDetails",
        defaultMessage: [{
          "type": 0,
          "value": "You’ll contribute "
        }, {
          "type": 1,
          "value": "amount"
        }, {
          "type": 5,
          "value": "interval",
          "options": {
            "month": {
              "value": [{
                "type": 0,
                "value": " monthly"
              }]
            },
            "year": {
              "value": [{
                "type": 0,
                "value": " yearly"
              }]
            },
            "other": {
              "value": []
            }
          }
        }, {
          "type": 0,
          "value": "."
        }],
        values: {
          interval: tier.interval ?? '',
          amount: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            amount: (0,_utils__WEBPACK_IMPORTED_MODULE_26__/* .getTotalAmount */ .aU)(data),
            currency: currency
          })
        }
      })
    }) : !hasQuantity ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "contribute.freeTier",
      defaultMessage: [{
        "type": 0,
        "value": "This is a free tier."
      }]
    }) : null, hasQuantity && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      mb: "30px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_StyledInputField__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        htmlFor: "quantity",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "contribution.quantity",
          defaultMessage: [{
            "type": 0,
            "value": "Quantity"
          }]
        }),
        labelFontSize: "16px",
        labelColor: "black.800",
        labelProps: {
          fontWeight: 500,
          lineHeight: '28px',
          mb: 1
        },
        error: Boolean(tier.availableQuantity !== null && data?.quantity > tier.availableQuantity),
        "data-cy": "contribution-quantity",
        required: true,
        children: fieldProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
          children: [tier.availableQuantity !== null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__.P, {
            fontSize: "11px",
            color: "#e69900",
            textTransform: "uppercase",
            fontWeight: "500",
            letterSpacing: "1px",
            mb: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "tier.limited",
              defaultMessage: [{
                "type": 0,
                "value": "LIMITED: "
              }, {
                "type": 1,
                "value": "availableQuantity"
              }, {
                "type": 0,
                "value": " LEFT OUT OF "
              }, {
                "type": 1,
                "value": "maxQuantity"
              }],
              values: tier
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, fieldProps), {}, {
            type: "number",
            min: 1,
            step: 1,
            max: tier.availableQuantity,
            value: data?.quantity,
            maxWidth: 80,
            fontSize: "15px",
            minWidth: 100,
            onChange: e => {
              const newValue = parseInt(e.target.value);
              dispatchChange('quantity', isNaN(newValue) ? null : newValue);
            }
          }))]
        })
      })
    }), (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .hostIsTaxDeductibleInTheUs */ .XA)(collective.host) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        borderColor: "black.300",
        mb: 16,
        mt: 32
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__.P, {
        fontSize: "14px",
        lineHeight: "20px",
        fontStyle: "italic",
        color: "black.500",
        letterSpacing: "0em",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "platformFee.taxDeductible",
          defaultMessage: [{
            "type": 0,
            "value": "This Collective's Fiscal Host is a registered 501(c)(3) non-profit organization. Your contribution will be tax-deductible in the US, to the extent allowed by the law."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        borderColor: "black.300",
        mt: 16,
        mb: 32
      })]
    }), showPlatformTip && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      mt: 28,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_PlatformTipInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        currency: currency,
        amount: data?.amount,
        value: data?.platformTip,
        quantity: data?.quantity,
        onChange: value => dispatchChange('platformTip', value),
        isEmbed: isEmbed
      })
    }), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(customFields) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_18__/* .Box */ .xu, {
      mt: 28,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_22__.H5, {
        fontSize: "20px",
        fontWeight: "normal",
        color: "black.800",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "OtherInfo",
          defaultMessage: [{
            "type": 0,
            "value": "Other information"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_TierCustomFields__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
        fields: customFields,
        data: data?.customData,
        onChange: customData => dispatchChange('customData', customData)
      })]
    }), temporaryInterval !== undefined && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ChangeTierWarningModal__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
      tierName: tier.name,
      onClose: () => setTemporaryInterval(undefined),
      onConfirm: () => {
        dispatchChange('interval', temporaryInterval);
        setTemporaryInterval(undefined);
        router.push(`/${collective.slug}/donate/details`);
      }
    })]
  });
};

StepDetails.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepDetails",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "showPlatformTip": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isEmbed": {
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
          "amount": {
            "name": "number",
            "required": false
          },
          "platformTip": {
            "name": "number",
            "required": false
          },
          "quantity": {
            "name": "number",
            "required": false
          },
          "interval": {
            "name": "string",
            "required": false
          },
          "customData": {
            "name": "object",
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
          "slug": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": false
          },
          "host": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    },
    "tier": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "amountType": {
            "name": "string",
            "required": false
          },
          "interval": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "name": {
            "name": "string",
            "required": false
          },
          "maxQuantity": {
            "name": "number",
            "required": false
          },
          "availableQuantity": {
            "name": "number",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(TierTypes)",
            "required": false
          },
          "customFields": {
            "name": "array",
            "required": false
          },
          "amount": {
            "name": "shape",
            "value": {
              "currency": {
                "name": "string",
                "required": false
              },
              "valueInCents": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          },
          "minAmount": {
            "name": "shape",
            "value": {
              "valueInCents": {
                "name": "number",
                "required": false
              }
            },
            "required": false
          },
          "singleTicket": {
            "name": "bool",
            "required": false
          }
        }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(StepDetails));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76918);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56562);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32631);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51082);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  cryptoCurrency: {
    id: "StepDetailsCrypto.cryptoCurrency",
    defaultMessage: [{
      "type": 0,
      "value": "Select your currency."
    }]
  },
  donationAmount: {
    id: "StepDetailsCrypto.donationAmount",
    defaultMessage: [{
      "type": 0,
      "value": "Enter donation amount."
    }]
  },
  invalidAmount: {
    id: "StepDetailsCrypto.invalidAmount",
    defaultMessage: [{
      "type": 0,
      "value": "Please select a valid currency amount."
    }]
  },
  lessThanMinimumAmount: {
    id: "StepDetailsCrypto.lessThanMinimumAmount",
    defaultMessage: [{
      "type": 1,
      "value": "cryptoCurrency"
    }, {
      "type": 0,
      "value": " has a minimum contribution amount of "
    }, {
      "type": 1,
      "value": "minimumAmount"
    }, {
      "type": 0,
      "value": ". Please select a higher amount."
    }]
  }
});
/*
 * Calculates the approximate value for 1 unit of a given crypto currency in the collective currency.
 * Uses the Cryptonator API (https://www.cryptonator.com/api/)
 */

const getCryptoExchangeRate = async (cryptoCurrency, collectiveCurrency) => {
  if (!cryptoCurrency || !collectiveCurrency) {
    return null;
  }

  try {
    const response = await fetch(`https://api.cryptonator.com/api/ticker/${cryptoCurrency}-${collectiveCurrency}`);
    const body = await response.json();

    if (!body.success || body.error !== '') {
      throw new Error(`Cryptonator Error: ${body.error}`);
    }

    return body.ticker.price;
  } catch (error) {
    // we don't want the user to see any errors; simply don't show the conversion amount
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};
/*
 * Validates the user entered crypto currency amount.
 *
 * 1) For invalid values such as negatives.
 * 2) For values less than the minimum allowed amount for the specified Crypto currency by The Giving Block.
 */


const validateCryptoCurrencyAmount = (touched, amount, minimumAmount, cryptoCurrency, intl) => {
  if (touched && amount <= 0) {
    return intl.formatMessage(messages['invalidAmount']);
  } else if (touched && amount < minimumAmount) {
    return intl.formatMessage(messages['lessThanMinimumAmount'], {
      cryptoCurrency,
      minimumAmount
    });
  }
};

const StepDetailsCrypto = ({
  onChange,
  data,
  collective
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const cryptoCurrency = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_constants__WEBPACK_IMPORTED_MODULE_11__/* .CRYPTO_CURRENCIES */ .eY, field => field.value === query.cryptoCurrency) || _constants__WEBPACK_IMPORTED_MODULE_11__/* .CRYPTO_CURRENCIES[0] */ .eY[0];
  const {
    0: selectedCryptoCurrency,
    1: setSelectedCryptoCurrency
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cryptoCurrency);
  const {
    0: amount,
    1: setAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.cryptoAmount);
  const {
    0: convertedAmount,
    1: setConvertedAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: cryptoExchangeRate,
    1: setCryptoExchangeRate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: touched,
    1: setTouched
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const collectiveCurrency = collective.currency;

  const dispatchChange = (field, value) => {
    onChange({
      stepDetails: _objectSpread(_objectSpread({}, data), {}, {
        [field]: value
      }),
      stepSummary: null
    });
  };

  const storeCryptoExchangeRate = async (cryptoCurrency, collectiveCurrency) => {
    const exchangeRate = await getCryptoExchangeRate(cryptoCurrency, collectiveCurrency);
    setCryptoExchangeRate(exchangeRate);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    storeCryptoExchangeRate(selectedCryptoCurrency.value, collectiveCurrency);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (cryptoExchangeRate) {
      setConvertedAmount(amount * cryptoExchangeRate);
    }
  }, [amount, cryptoExchangeRate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
    width: 1,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
      htmlFor: "crypto-currency",
      mb: 2,
      children: intl.formatMessage(messages['cryptoCurrency'])
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
      inputId: "crypto-currency",
      options: _constants__WEBPACK_IMPORTED_MODULE_11__/* .CRYPTO_CURRENCIES */ .eY,
      defaultValue: selectedCryptoCurrency,
      onChange: cryptoCurrency => {
        setSelectedCryptoCurrency(cryptoCurrency);
        storeCryptoExchangeRate(cryptoCurrency.value, collectiveCurrency);
        dispatchChange('currency', cryptoCurrency);
      },
      isSearchable: false,
      maxWidth: '100%',
      mb: 3
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
      htmlFor: "donation-amount",
      mb: 2,
      children: intl.formatMessage(messages['donationAmount'])
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      prepend: selectedCryptoCurrency.labelWithoutImage,
      type: "number",
      inputMode: "decimal",
      defaultValue: amount,
      onChange: ({
        target
      }) => {
        const amount = parseFloat(target.value);
        setAmount(amount);

        if (amount >= selectedCryptoCurrency.minDonation) {
          dispatchChange('cryptoAmount', amount);
        } else {
          dispatchChange('cryptoAmount', null);
        }
      },
      onBlur: () => setTouched(true),
      autoFocus: true,
      error: validateCryptoCurrencyAmount(touched, amount, selectedCryptoCurrency.minDonation, selectedCryptoCurrency.labelWithoutImage, intl)
    }), convertedAmount !== null && convertedAmount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
      mt: 2,
      children: ["~", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        amount: convertedAmount * 100,
        currency: collectiveCurrency,
        amountStyles: {
          fontWeight: '400'
        }
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      href: "https://www.thegivingblock.com/",
      openInNewTabNoFollow: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        pt: "36px",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: 500,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            pr: 1,
            children: "In partnership with"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            pt: "8px",
            style: {
              verticalAlign: 'middle'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              alt: "Giving Block Logo",
              width: 24,
              height: 24,
              src: "/static/images/giving-block-logo.svg"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            pl: 1,
            children: "The Giving Block"
          })]
        })
      })
    })]
  });
};

StepDetailsCrypto.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepDetailsCrypto",
  "props": {
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "data": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "amount": {
            "name": "union",
            "value": [{
              "name": "number"
            }, {
              "name": "string"
            }],
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "convertedAmount": {
            "name": "shape",
            "value": {
              "amount": {
                "name": "number",
                "required": false
              },
              "currency": {
                "name": "string",
                "required": false
              }
            },
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
          "currency": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepDetailsCrypto);

/***/ }),

/***/ 95575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62131);
/* harmony import */ var _lib_policies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43176);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37066);
/* harmony import */ var _PaymentMethodList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1909);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PaymentMethodList__WEBPACK_IMPORTED_MODULE_4__]);
_PaymentMethodList__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const StepPayment = ({
  stepDetails,
  stepProfile,
  stepPayment,
  stepSummary,
  collective,
  onChange,
  isSubmitting,
  isEmbed,
  hideCreditCardPostalCode,
  onNewCardFormReady,
  disabledPaymentMethodTypes
}) => {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();

  if ((0,_lib_policies__WEBPACK_IMPORTED_MODULE_6__/* .require2FAForAdmins */ .u)(stepProfile) && !LoggedInUser?.hasTwoFactorAuth) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_3__/* .TwoFactorAuthRequiredMessage */ .l, {
      borderWidth: 0,
      noTitle: true
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    width: 1,
    border: ['1px solid #DCDEE0', 'none'],
    borderRadius: 15,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_PaymentMethodList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      host: collective.host,
      toAccount: collective,
      fromAccount: stepProfile,
      disabledPaymentMethodTypes: disabledPaymentMethodTypes,
      stepSummary: stepSummary,
      stepDetails: stepDetails,
      stepPayment: stepPayment,
      isEmbed: isEmbed,
      isSubmitting: isSubmitting,
      hideCreditCardPostalCode: hideCreditCardPostalCode,
      onNewCardFormReady: onNewCardFormReady,
      onChange: onChange
    })
  });
};

StepPayment.defaultProps = {
  hideCreditCardPostalCode: false
};
StepPayment.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepPayment",
  "props": {
    "hideCreditCardPostalCode": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepDetails": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepPayment": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepProfile": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepSummary": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onNewCardFormReady": {
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
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "disabledPaymentMethodTypes": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepPayment);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62131);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62645);
/* harmony import */ var _StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17724);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_3__, _StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_4__]);
([_StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_3__, _StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const StepProfile = ({
  collective,
  stepDetails,
  profiles,
  onChange,
  data,
  onSignInClick,
  isEmbed
}) => {
  const {
    LoggedInUser
  } = (0,_lib_hooks_useLoggedInUser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
    width: 1,
    children: LoggedInUser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      profiles: profiles,
      onChange: onChange,
      collective: collective,
      data: data,
      stepDetails: stepDetails
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      stepDetails: stepDetails,
      data: data,
      onChange: onChange,
      onSignInClick: onSignInClick,
      isEmbed: isEmbed
    })
  });
};

StepProfile.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepProfile",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepDetails": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "amount": {
            "name": "number",
            "required": false
          },
          "interval": {
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onSignInClick": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "profiles": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepProfile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62645:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e": () => (/* binding */ validateGuestProfile)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88705);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40777);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputLocation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90307);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90998);
/* harmony import */ var _StepProfileInfoMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17007);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_11__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_12__]);
([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__, _StyledInputField__WEBPACK_IMPORTED_MODULE_11__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const validateGuestProfile = (stepProfile, stepDetails) => {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .contributionRequiresAddress */ .ci)(stepDetails)) {
    const {
      name,
      legalName
    } = stepProfile;
    const location = stepProfile.location || {};
    const hasNameOrLegalName = name || legalName;

    if (!hasNameOrLegalName || !location.country || !(location.address || location.structured)) {
      return false;
    }
  }

  if (!stepProfile.email || !(0,validator__WEBPACK_IMPORTED_MODULE_3__.isEmail)(stepProfile.email)) {
    return false;
  } else {
    return true;
  }
};

const getSignInLinkQueryParams = email => {
  const params = {
    next:  false ? 0 : ''
  };
  return email ? _objectSpread(_objectSpread({}, params), {}, {
    email
  }) : params;
};

const StepProfileGuestForm = ({
  stepDetails,
  onChange,
  data,
  isEmbed,
  onSignInClick
}) => {
  const totalAmount = (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .getTotalAmount */ .aU)(stepDetails);

  const dispatchChange = (field, value) => onChange({
    stepProfile: lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, data), {}, {
      isGuest: true
    }), field, value)
  });

  const dispatchGenericEvent = e => dispatchChange(e.target.name, e.target.value);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    border: "none",
    width: 1,
    pb: 3,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      htmlFor: "email",
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "nONnTw",
        defaultMessage: [{
          "type": 0,
          "value": "Your email"
        }]
      }),
      labelFontSize: "16px",
      labelFontWeight: "700",
      maxLength: "254",
      required: true,
      hint: !isEmbed && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "ucWzrM",
        defaultMessage: [{
          "type": 0,
          "value": "If you already have an account or want to contribute as an organization, "
        }, {
          "type": 8,
          "value": "SignInLink",
          "children": [{
            "type": 0,
            "value": "Sign in"
          }]
        }, {
          "type": 0,
          "value": "."
        }],
        values: {
          SignInLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* .getI18nLink */ .fw)({
            as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            href: {
              pathname: '/signin',
              query: getSignInLinkQueryParams(data?.email)
            },
            'data-cy': 'cf-profile-signin-btn',
            onClick: e => {
              e.preventDefault();
              e.stopPropagation();
              onSignInClick();
            }
          })
        }
      }),
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
        value: data?.email || '',
        placeholder: "tanderson@thematrix.com",
        type: "email",
        onChange: dispatchGenericEvent
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      my: "18px",
      borderColor: "black.300"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      htmlFor: "name",
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "vlKhIl",
        defaultMessage: [{
          "type": 0,
          "value": "Your name"
        }]
      }),
      labelFontSize: "16px",
      labelFontWeight: "700",
      required: false,
      hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "h1BHRl",
        defaultMessage: [{
          "type": 0,
          "value": "This is your display name or alias. Leave it in blank to appear as guest."
        }]
      }),
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
        value: data?.name || '',
        placeholder: "Thomas Anderson",
        onChange: dispatchGenericEvent,
        maxLength: "255"
      }))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      htmlFor: "legalName",
      label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "OozR1Y",
        defaultMessage: [{
          "type": 0,
          "value": "Legal name"
        }]
      }),
      labelFontSize: "16px",
      labelFontWeight: "700",
      isPrivate: true,
      required: totalAmount >= 25000 && !data?.name,
      mt: 20,
      hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "QLBxEF",
        defaultMessage: [{
          "type": 0,
          "value": "If different from your display name. Not public. Important for receipts, invoices, payments, and official documentation."
        }]
      }),
      children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
        value: data?.legalName || '',
        placeholder: "Thomas A. Anderson",
        onChange: dispatchGenericEvent,
        maxLength: "255"
      }))
    }), (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .contributionRequiresAddress */ .ci)(stepDetails) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
        alignItems: "center",
        my: "14px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "500",
          mr: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "collective.address.label",
            defaultMessage: [{
              "type": 0,
              "value": "Address"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__/* .Span */ .Dr, {
          mr: 2,
          lineHeight: "0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            size: "14px",
            tooltipProps: {
              containerLineHeight: '0'
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          my: "18px",
          borderColor: "black.300",
          width: "100%"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledInputLocation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        autoDetectCountry: true,
        location: data?.location,
        onChange: value => dispatchChange('location', value),
        labelFontSize: "16px",
        labelFontWeight: "700"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StepProfileInfoMessage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      isGuest: true,
      hasLegalNameField: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_13__.P, {
      color: "black.500",
      fontSize: "12px",
      mt: 4,
      "data-cy": "join-conditions",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
        id: "Amj+Gh",
        defaultMessage: [{
          "type": 0,
          "value": "By contributing, you agree to our "
        }, {
          "type": 8,
          "value": "TOSLink",
          "children": [{
            "type": 0,
            "value": "Terms of Service"
          }]
        }, {
          "type": 0,
          "value": " and "
        }, {
          "type": 8,
          "value": "PrivacyPolicyLink",
          "children": [{
            "type": 0,
            "value": "Privacy Policy"
          }]
        }, {
          "type": 0,
          "value": "."
        }],
        values: _I18nFormatters__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP
      })
    })]
  });
};

StepProfileGuestForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepProfileGuestForm",
  "props": {
    "stepDetails": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "amount": {
            "name": "number",
            "required": false
          },
          "interval": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    },
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onSignInClick": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "defaultEmail": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "defaultName": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepProfileGuestForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37278);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const StepProfileInfoMessage = ({
  hasLegalNameField,
  hasIncognito,
  isGuest
}) => {
  const nbItems = hasLegalNameField + hasIncognito + isGuest;
  const isList = nbItems > 1;
  const ItemContainer = isList ? 'li' : 'span';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    type: "info",
    fontSize: "12px",
    color: "black.800",
    my: 3,
    py: 2,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      fontSize: "12px",
      lineHeight: "18px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Text__WEBPACK_IMPORTED_MODULE_7__.P, {
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "18px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "XfsYgz",
          defaultMessage: [{
            "type": 0,
            "value": "About privacy"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        as: isList ? 'ul' : _Text__WEBPACK_IMPORTED_MODULE_7__.P,
        pl: isList ? '24px' : '0',
        mt: 2,
        fontSize: "12px",
        lineHeight: "18px",
        children: [isGuest && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ItemContainer, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "btt25R",
            defaultMessage: [{
              "type": 0,
              "value": "Every contribution must be linked to an email account for legal reasons. Please provide a valid email. We wont send any spam or advertising, pinky promise."
            }]
          })
        }), hasLegalNameField && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ItemContainer, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "pzNmU+",
            defaultMessage: [{
              "type": 0,
              "value": "You can leave the name field empty if you want to keep your contribution anonymous, only the host admins and the platform will have access to your email."
            }]
          })
        }), hasIncognito && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ItemContainer, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "LfwUBd",
            defaultMessage: [{
              "type": 0,
              "value": "When you contribute to a Collective we share your email address with the Administrators. If you wish to keep your contribution private choose the ‘incognito’ profile. Read our "
            }, {
              "type": 8,
              "value": "PrivacyPolicyLink",
              "children": [{
                "type": 0,
                "value": "privacy policy"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              PrivacyPolicyLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* .getI18nLink */ .fw)({
                href: '/privacypolicy',
                openInNewTab: true,
                as: _Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
              })
            }
          })
        })]
      })]
    })
  });
};

StepProfileInfoMessage.defaultProps = {
  hasLegalNameField: false,
  isGuest: false,
  hasIncognito: false
};
StepProfileInfoMessage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepProfileInfoMessage",
  "props": {
    "hasLegalNameField": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isGuest": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hasIncognito": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepProfileInfoMessage);

/***/ }),

/***/ 17724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ NEW_ORGANIZATION_KEY),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40777);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputLocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90307);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _ContributeProfilePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19993);
/* harmony import */ var _StepProfileInfoMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17007);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__, _StyledInputField__WEBPACK_IMPORTED_MODULE_6__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_7__, _ContributeProfilePicker__WEBPACK_IMPORTED_MODULE_9__]);
([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__, _StyledInputField__WEBPACK_IMPORTED_MODULE_6__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_7__, _ContributeProfilePicker__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const NEW_ORGANIZATION_KEY = 'newOrg';

const getProfileInfo = (stepProfile, profiles) => {
  if (stepProfile?.isIncognito) {
    const profileLocation = stepProfile.location || {};
    const isEmptyLocation = !profileLocation.address && !profileLocation.country && !profileLocation.structured;
    return {
      name: '',
      // Can't change name for incognito
      legalName: stepProfile.legalName ?? (profiles[0].legalName || profiles[0].name || ''),
      // Default to user's legal name
      location: (isEmptyLocation ? profiles[0].location : stepProfile.location) || {} // Default to user's location

    };
  } else {
    return {
      name: stepProfile?.name || '',
      legalName: stepProfile?.legalName || '',
      location: stepProfile?.location || {}
    };
  }
};

const StepProfileLoggedInForm = ({
  profiles,
  onChange,
  collective,
  data,
  stepDetails
}) => {
  const profileInfo = getProfileInfo(data, profiles);
  const isContributingFromSameHost = data?.host?.id === collective.host.legacyId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
      mb: 4,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ContributeProfilePicker__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        profiles: profiles,
        selectedProfile: data,
        onChange: profile => onChange({
          stepProfile: profile,
          stepPayment: null
        })
      })
    }), !isContributingFromSameHost && (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .contributionRequiresLegalName */ .Ak)(stepDetails) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [!data?.isIncognito && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        htmlFor: "name",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "vlKhIl",
          defaultMessage: [{
            "type": 0,
            "value": "Your name"
          }]
        }),
        labelFontSize: "16px",
        labelFontWeight: "700",
        hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "kFLEBd",
          defaultMessage: [{
            "type": 0,
            "value": "This is your display name or alias."
          }]
        }),
        children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
          value: profileInfo.name,
          placeholder: "Thomas Anderson",
          onChange: e => onChange({
            stepProfile: _objectSpread(_objectSpread({}, data), {}, {
              name: e.target.value
            })
          }),
          maxLength: "255"
        }))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        htmlFor: "legalName",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "OozR1Y",
          defaultMessage: [{
            "type": 0,
            "value": "Legal name"
          }]
        }),
        required: !profileInfo.name,
        labelFontSize: "16px",
        labelFontWeight: "700",
        isPrivate: true,
        mt: 20,
        hint: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "QLBxEF",
          defaultMessage: [{
            "type": 0,
            "value": "If different from your display name. Not public. Important for receipts, invoices, payments, and official documentation."
          }]
        }),
        children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
          value: profileInfo.legalName,
          placeholder: profileInfo.name,
          onChange: e => onChange({
            stepProfile: _objectSpread(_objectSpread({}, data), {}, {
              legalName: e.target.value
            })
          }),
          maxLength: "255"
        }))
      })]
    }), !isContributingFromSameHost && (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .contributionRequiresAddress */ .ci)(stepDetails) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC, {
        alignItems: "center",
        my: "14px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "500",
          mr: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "collective.address.label",
            defaultMessage: [{
              "type": 0,
              "value": "Address"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
          mr: 2,
          lineHeight: "0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            size: "14px",
            tooltipProps: {
              containerLineHeight: '0'
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          my: "18px",
          borderColor: "black.300",
          width: "100%"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StyledInputLocation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        autoDetectCountry: true,
        location: profileInfo.location,
        onChange: value => onChange({
          stepProfile: _objectSpread(_objectSpread({}, data), {}, {
            location: value
          })
        }),
        labelFontSize: "16px",
        labelFontWeight: "700"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_StepProfileInfoMessage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      hasIncognito: true
    })]
  });
};

StepProfileLoggedInForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StepProfileLoggedInForm",
  "props": {
    "data": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "stepDetails": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "profiles": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "object"
        }
      },
      "required": false
    },
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "host": {
            "name": "shape",
            "value": {
              "legacyId": {
                "name": "number",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepProfileLoggedInForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20384);
/* harmony import */ var _styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12568);
/* harmony import */ var _lib_custom_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28330);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _InputTypeCountry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32143);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97274);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90998);
/* harmony import */ var _ContributionSummary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(30590);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContributionSummary__WEBPACK_IMPORTED_MODULE_16__]);
_ContributionSummary__WEBPACK_IMPORTED_MODULE_16__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const ClickableLabel = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).attrs({
  display: 'inline-block',
  borderBottom: '1px dashed',
  borderColor: 'black.400',
  fontSize: '13px',
  color: 'black.500',
  cursor: 'pointer',
  mb: 2
}).withConfig({
  displayName: "StepSummary__ClickableLabel",
  componentId: "sc-m7ydqv-0"
})([""]);
/** Add missing fields to taxInfo and calculate tax amount */

const prepareTaxInfo = (taxes, userTaxInfo, amount, quantity, taxPercentage, hasForm) => {
  const isCountryRequired = taxes[0]?.type === _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.VAT;
  return _objectSpread(_objectSpread({}, userTaxInfo), {}, {
    taxType: taxes[0]?.type,
    percentage: taxPercentage,
    amount: Math.round(amount * quantity * (taxPercentage / 100)),
    isReady: Boolean(!hasForm && (!amount || !isCountryRequired || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(userTaxInfo, 'countryISO')))
  });
};

const getTaxPercentageForProfile = (taxes, tierType, hostCountry, collectiveCountry, profile) => {
  if (taxes.some(({
    type
  }) => type === _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.VAT)) {
    const originCountry = (0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.getVatOriginCountry)(tierType, hostCountry, collectiveCountry);
    return (0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.getVatPercentage)(tierType, originCountry, lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(profile, 'countryISO'), lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(profile, 'number'));
  } else if (taxes.some(({
    type
  }) => type === _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.GST)) {
    return _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.GST_RATE_PERCENT;
  } else {
    return 0;
  }
};

const COUNTRY_SELECT_STYLES = {
  dropdownIndicator: {
    paddingTop: 0,
    paddingBottom: 0
  },
  option: {
    fontSize: '12px',
    color: 'red'
  },
  control: {
    minHeight: '32px'
  }
};

const VATInputs = ({
  AmountLine,
  Amount,
  Label,
  currency,
  taxInfo,
  dispatchChange,
  setFormState,
  formState
}) => {
  const hasConfirmedTaxID = taxInfo.number && taxInfo.isReady;

  const vatShortLabel = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
    id: "tax.vatShort",
    defaultMessage: [{
      "type": 0,
      "value": "VAT"
    }]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(AmountLine, {
    my: 3,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
      flexDirection: "column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        alignItems: "center",
        flexWrap: "wrap",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(Label, {
          mr: 2,
          flex: "1 1 auto",
          children: vatShortLabel
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
          flex: "1 1 180px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_InputTypeCountry__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            inputId: "step-summary-location",
            minWidth: 100,
            maxWidth: 190,
            maxMenuHeight: 150,
            onChange: code => dispatchChange({
              countryISO: code,
              number: null
            }),
            value: taxInfo.countryISO,
            error: !taxInfo.countryISO,
            styles: COUNTRY_SELECT_STYLES,
            fontSize: "12px",
            autoDetect: true
          })
        })]
      }), taxInfo.countryISO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        mt: 2,
        children: [hasConfirmedTaxID && !formState.isEnabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__/* .Span */ .Dr, {
            mr: 3,
            children: taxInfo.number
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ClickableLabel, {
            onClick: () => {
              setFormState({
                isEnabled: true,
                error: false
              });
              dispatchChange(null, true);
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "contribute.changeTaxNumber",
              defaultMessage: [{
                "type": 0,
                "value": "Change "
              }, {
                "type": 1,
                "value": "taxName"
              }, {
                "type": 0,
                "value": " number"
              }],
              values: {
                taxName: vatShortLabel
              }
            })
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ClickableLabel, {
          onClick: () => {
            if (!formState.isEnabled) {
              setFormState({
                isEnabled: true,
                error: false
              });
              dispatchChange(null, true);
            }
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
            id: "contribute.enterTaxNumber",
            defaultMessage: [{
              "type": 0,
              "value": "Enter "
            }, {
              "type": 1,
              "value": "taxName"
            }, {
              "type": 0,
              "value": " number (if you have one)"
            }],
            values: {
              taxName: vatShortLabel
            }
          })
        }), formState.isEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
          flexDirection: "column",
          className: "cf-tax-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            display: "flex",
            alignItems: "center",
            ml: [null, null, '-24px'],
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__.Close, {
              "data-cy": "remove-vat-btn",
              size: 16,
              color: "#333333",
              cursor: "pointer",
              "aria-label": "Remove",
              onClick: () => {
                setFormState({
                  isEnabled: false,
                  error: false
                });
                dispatchChange({
                  number: null
                }, false);
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
              value: taxInfo.number || '',
              name: "taxIdNumber",
              mx: [1, 2],
              px: 2,
              py: 1,
              autoFocus: true,
              fontSize: "13px",
              required: true,
              maxWidth: 180,
              error: formState.error,
              onBlur: e => {
                const rawNumber = e.target.value;
                let error = false;
                let validationResult = (0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.checkVATNumberFormat)(rawNumber);

                if (!validationResult.isValid) {
                  // Try again with the country code
                  validationResult = (0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.checkVATNumberFormat)(`${taxInfo.countryISO}${rawNumber}`);

                  if (!validationResult.isValid) {
                    error = 'invalid';
                  }
                } else if (lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(validationResult, 'country.isoCode.short') !== taxInfo.countryISO) {
                  error = 'bad_country';
                }

                const number = !error ? validationResult.value : rawNumber;
                const hasError = Boolean(error);
                setFormState({
                  isEnabled: true,
                  error: error
                });
                dispatchChange({
                  number
                }, hasError);
              },
              onChange: e => {
                setFormState({
                  isEnabled: true,
                  error: false
                });
                dispatchChange({
                  number: e.target.value
                });
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              buttonSize: "tiny",
              disabled: formState.error,
              onClick: () => {
                setFormState({
                  isEnabled: false
                });
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
                id: "save",
                defaultMessage: [{
                  "type": 0,
                  "value": "Save"
                }]
              })
            })]
          }), formState.error === 'invalid' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__/* .Span */ .Dr, {
            mt: 1,
            fontSize: "12px",
            color: "red.500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "contribute.taxInfoInvalid",
              defaultMessage: [{
                "type": 0,
                "value": "Invalid "
              }, {
                "type": 1,
                "value": "taxName"
              }, {
                "type": 0,
                "value": " number"
              }],
              values: {
                taxName: vatShortLabel
              }
            })
          }), formState.error === 'bad_country' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Text__WEBPACK_IMPORTED_MODULE_15__/* .Span */ .Dr, {
            mt: 1,
            fontSize: "12px",
            color: "red.500",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, {
              id: "contribute.vatBadCountry",
              defaultMessage: [{
                "type": 0,
                "value": "The VAT number doesn't match the country"
              }]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(Amount, {
      pt: 2,
      ml: 2,
      "data-cy": "VAT-amount",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        amount: taxInfo.amount,
        currency: currency,
        amountStyles: {
          color: 'black.700',
          fontWeight: 400
        }
      })
    })]
  });
};

/**
 * Breakdowns a total amount to show the user where the money goes.
 */
const StepSummary = ({
  stepProfile,
  stepDetails,
  collective,
  stepPayment,
  isCrypto,
  applyTaxes,
  taxes,
  data,
  onChange,
  tier
}) => {
  const {
    amount,
    quantity
  } = stepDetails;
  const tierType = tier?.type;

  const hostCountry = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective.host, 'location.country');

  const collectiveCountry = collective.location.country || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(collective.parent, 'location.country');

  const currency = isCrypto ? stepDetails.currency.value : tier?.amount.currency || collective.currency;
  const {
    0: formState,
    1: setFormState
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    isEnabled: false,
    error: false
  });
  const taxPercentage = getTaxPercentageForProfile(taxes, tierType, hostCountry, collectiveCountry, data);
  const taxInfo = prepareTaxInfo(taxes, data, amount, quantity, taxPercentage, formState.isEnabled);
  const hasCustomTaxRenderer = taxInfo?.taxType === _opencollective_taxes__WEBPACK_IMPORTED_MODULE_3__.TaxType.VAT && applyTaxes && amount > 0; // Helper to prepare onChange data

  const dispatchChange = (newValues, hasFormParam) => {
    if (onChange) {
      const newTaxInfo = _objectSpread(_objectSpread({}, taxInfo), newValues);

      const percent = getTaxPercentageForProfile(taxes, tierType, hostCountry, collectiveCountry, newTaxInfo);
      const hasForm = hasFormParam === undefined ? formState.isEnabled : hasFormParam;
      return onChange({
        stepSummary: prepareTaxInfo(taxes, newTaxInfo, amount, quantity, percent, hasForm)
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(taxes)) {
      // Dispatch initial value on mount
      dispatchChange({
        countryISO: data?.countryISO || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(stepProfile, 'location.country'),
        number: data?.number || lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(stepProfile, 'settings.VAT.number')
      });
    } else if (!data?.isReady) {
      // Remove stepSummary if taxes are not applied
      onChange({
        stepSummary: {
          isReady: true
        }
      });
    }
  }, [taxes]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
    width: "100%",
    px: [0, null, null, 2],
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_ContributionSummary__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      collective: collective,
      stepDetails: stepDetails,
      stepSummary: data,
      stepPayment: stepPayment,
      currency: currency,
      isCrypto: isCrypto,
      tier: tier,
      renderTax: !hasCustomTaxRenderer ? null : ({
        Amount,
        Label,
        AmountLine
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(VATInputs, {
        currency: currency,
        dispatchChange: dispatchChange,
        setFormState: setFormState,
        formState: formState,
        taxInfo: taxInfo,
        Amount: Amount,
        Label: Label,
        AmountLine: AmountLine
      })
    })
  });
};

StepSummary.__docgenInfo = {
  "description": "Breakdowns a total amount to show the user where the money goes.",
  "methods": [],
  "displayName": "StepSummary",
  "props": {
    "stepDetails": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "amount": {
            "name": "number",
            "description": "The total amount without tax in cents",
            "required": true
          },
          "quantity": {
            "name": "number",
            "description": "Number of items to order",
            "required": false
          },
          "currency": {
            "name": "custom",
            "raw": "{\n  value: PropTypes.string,\n}",
            "description": "Currency of the order (for crypto flow)",
            "required": false
          }
        }
      },
      "required": false
    },
    "stepProfile": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "location": {
            "name": "shape",
            "value": {
              "country": {
                "name": "custom",
                "raw": "propTypeCountry",
                "required": false
              }
            },
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
          "currency": {
            "name": "string",
            "required": true
          },
          "hostFeePercent": {
            "name": "number",
            "description": "Host fees, as an integer percentage",
            "required": false
          },
          "platformFeePercent": {
            "name": "number",
            "description": "Platform fee",
            "required": false
          },
          "location": {
            "name": "shape",
            "value": {
              "country": {
                "name": "custom",
                "raw": "propTypeCountry",
                "required": false
              }
            },
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "location": {
                "name": "shape",
                "value": {
                  "country": {
                    "name": "custom",
                    "raw": "propTypeCountry",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "location": {
                "name": "shape",
                "value": {
                  "country": {
                    "name": "custom",
                    "raw": "propTypeCountry",
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
    },
    "stepPayment": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "applyTaxes": {
      "description": "If we need to activate tax for this order",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "data": {
      "description": "The tax identification information from user",
      "type": {
        "name": "shape",
        "value": {
          "countryISO": {
            "name": "string",
            "description": "Country ISO of the contributing profile. Used to see what taxes applies",
            "required": false
          },
          "number": {
            "name": "string",
            "description": "The tax identification numer",
            "required": false
          },
          "isReady": {
            "name": "bool",
            "description": "A flag to indicate if the form is ready to be submitted",
            "required": false
          },
          "amount": {
            "name": "number",
            "description": "The tax amount in cents",
            "required": false
          }
        }
      },
      "required": false
    },
    "tier": {
      "description": "Type of the tier. Used to check if taxes apply",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "enum",
            "computed": true,
            "value": "tiersTypes",
            "required": false
          },
          "amount": {
            "name": "shape",
            "value": {
              "currency": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "paymentMethod": {
      "description": "Payment method, used to generate label and payment fee",
      "type": {
        "name": "shape",
        "value": {
          "service": {
            "name": "string",
            "description": "Payment method service provider",
            "required": false
          },
          "type": {
            "name": "string",
            "description": "Payment method type",
            "required": false
          },
          "currency": {
            "name": "string",
            "description": "Payment method currency",
            "required": false
          }
        }
      },
      "required": false
    },
    "onChange": {
      "description": "Called with the step info as `{countryCode, taxInfoNumber, isValid}`",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "taxes": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "enum",
          "computed": true,
          "value": "Object.values(TaxType)"
        }
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepSummary);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ SUCCESS_CTA_TYPE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25896);
/* harmony import */ var _collectives_Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45842);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16159);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51082);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
const _excluded = ["type", "orderId", "email", "account"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const SUCCESS_CTA_TYPE = {
  NEWSLETTER: 'NEWSLETTER',
  BLOG: 'BLOG',
  JOIN: 'JOIN',
  SIGN_IN: 'SIGN_IN',
  GO_TO_PROFILE: 'GO_TO_PROFILE'
};
const headerMessages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  [SUCCESS_CTA_TYPE.JOIN]: {
    id: "collective.create.join",
    defaultMessage: [{
      "type": 0,
      "value": "Join Open Collective"
    }]
  },
  [SUCCESS_CTA_TYPE.SIGN_IN]: {
    id: "signIn",
    defaultMessage: [{
      "type": 0,
      "value": "Sign In"
    }]
  },
  [SUCCESS_CTA_TYPE.BLOG]: {
    id: "ReadOurStories",
    defaultMessage: [{
      "type": 0,
      "value": "Read our stories"
    }]
  },
  [SUCCESS_CTA_TYPE.NEWSLETTER]: {
    id: "home.joinUsSection.newsletter",
    defaultMessage: [{
      "type": 0,
      "value": "Subscribe to our newsletter"
    }]
  },
  [SUCCESS_CTA_TYPE.GO_TO_PROFILE]: {
    id: "iPy92R",
    defaultMessage: [{
      "type": 0,
      "value": "Go to "
    }, {
      "type": 1,
      "value": "accountName"
    }, {
      "type": 0,
      "value": "'s page"
    }]
  }
});
const contentMessages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  [SUCCESS_CTA_TYPE.JOIN]: {
    id: "NewContributionFlow.Success.CTA.Join.Content",
    defaultMessage: [{
      "type": 0,
      "value": "Create an account and show all your contributions."
    }]
  },
  [SUCCESS_CTA_TYPE.SIGN_IN]: {
    id: "NewContributionFlow.Success.CTA.SignIn.Content",
    defaultMessage: [{
      "type": 0,
      "value": "Sign in with your Open Collective account to edit your profile and manage your contributions."
    }]
  },
  [SUCCESS_CTA_TYPE.BLOG]: {
    id: "NewContributionFlow.Success.CTA.Read.Content",
    defaultMessage: [{
      "type": 0,
      "value": "Open Collective aims to foster transparency and sustainability in communities around the world. Here's how you can participate."
    }]
  },
  [SUCCESS_CTA_TYPE.NEWSLETTER]: {
    id: "home.joinUsSection.weNeedUpdate",
    defaultMessage: [{
      "type": 0,
      "value": "We send updates once a month."
    }]
  },
  [SUCCESS_CTA_TYPE.GO_TO_PROFILE]: {
    id: "/aBz/1",
    defaultMessage: [{
      "type": 0,
      "value": "Go to the public page of "
    }, {
      "type": 1,
      "value": "accountName"
    }, {
      "type": 0,
      "value": " on Open Collective"
    }]
  }
});
const CTAContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
  displayName: "SuccessCTA__CTAContainer",
  componentId: "sc-43rmdy-0"
})(["display:flex;justify-content:space-between;border:1px solid ", ";border-radius:10px;background-color:white;", " ", ""], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.black.400'), props => props.$isPrimary && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["border:1px solid ", ";h3,span{color:", ";word-break:break-word;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.800')), props => props.hoverable && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["&:hover{border:1px solid ", ";cursor:pointer;h3,span{color:", ";}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__.themeGet)('colors.primary.800')));

const SuccessCTAWrapper = _ref => {
  let {
    type,
    orderId,
    email,
    account
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  switch (type) {
    case SUCCESS_CTA_TYPE.JOIN:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread({
        as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        display: "block",
        "data-cy": "join-opencollective-link",
        href: {
          pathname: '/create-account/guest',
          query: {
            OrderId: orderId,
            email
          }
        },
        color: "black.800"
      }, props));

    case SUCCESS_CTA_TYPE.SIGN_IN:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread({
        as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        display: "block",
        color: "black.800",
        "data-cy": "success-signin-link",
        href: {
          pathname: '/signin',
          query: {
            email
          }
        }
      }, props));

    case SUCCESS_CTA_TYPE.BLOG:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread({
        href: "https://blog.opencollective.com",
        openInNewTab: true,
        color: "black.800"
      }, props));

    case SUCCESS_CTA_TYPE.GO_TO_PROFILE:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, _objectSpread({
        as: _Link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        href: (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getCollectivePageRoute */ .x0)(account),
        color: "black.800"
      }, props));

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), _objectSpread({}, props));
  }
};

const SuccessCTA = ({
  type,
  orderId,
  email,
  account,
  isPrimary
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const isNewsletter = type === SUCCESS_CTA_TYPE.NEWSLETTER;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    px: [3, 0],
    my: 3,
    maxWidth: 600,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SuccessCTAWrapper, {
      account: account,
      type: type,
      orderId: orderId,
      email: email,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(CTAContainer, {
        px: 4,
        py: 2,
        hoverable: !isNewsletter,
        $isPrimary: isPrimary,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          width: [isNewsletter ? 1 : 4 / 5, 4 / 5],
          my: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.H3, {
            mb: 3,
            color: "black.800",
            children: formatMessage(headerMessages[type], {
              accountName: account.name
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__.P, {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 300,
            color: "black.700",
            children: formatMessage(contentMessages[type], {
              accountName: account.name
            })
          }), isNewsletter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .xu, {
            mt: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_collectives_Newsletter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              defaultEmail: email
            })
          })]
        }), !isNewsletter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .kC, {
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
            fontSize: 40,
            children: "\u2192"
          })
        })]
      })
    })
  });
};

SuccessCTA.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SuccessCTA",
  "props": {
    "type": {
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"BLOG\"",
          "computed": false
        }, {
          "value": "\"GO_TO_PROFILE\"",
          "computed": false
        }, {
          "value": "\"JOIN\"",
          "computed": false
        }, {
          "value": "\"NEWSLETTER\"",
          "computed": false
        }, {
          "value": "\"SIGN_IN\"",
          "computed": false
        }]
      },
      "required": true
    },
    "orderId": {
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
    "isPrimary": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "account": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessCTA);

/***/ }),

/***/ 60002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87262);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93150);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_4__]);
_StyledInputField__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const TierCustomFields = ({
  fields,
  data,
  onChange
}) => {
  return fields.map((customField, idx) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z // eslint-disable-next-line react/no-array-index-key
    , {
      mt: 3,
      htmlFor: customField.name,
      label: customField.label,
      inputType: customField.type,
      required: customField.required,
      width: "100%",
      children: fieldProps => customField.type === 'textarea' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        autoSize: true
      }, fieldProps), {}, {
        onChange: ({
          target
        }) => onChange(_objectSpread(_objectSpread({}, data), {}, {
          [customField.name]: target.value
        })),
        maxHeight: 500,
        minHeight: 150
      })) : customField.type === 'separator' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        borderColor: "black.200",
        my: 2
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledStyledInput, _objectSpread(_objectSpread({}, fieldProps), {}, {
        width: 1,
        value: data?.[customField.name] || '',
        mt: customField.type === 'checkbox' ? '2px !important' : 0,
        placeholder: customField.placeholder,
        pattern: customField.pattern,
        onChange: e => onChange(_objectSpread(_objectSpread({}, data), {}, {
          [customField.name]: customField.type === 'checkbox' ? e.target.checked : e.target.value
        })),
        $_css: customField.type === 'checkbox' ? {
          flex: '0 0 1em'
        } : undefined
      }))
    }, `${idx}-${customField.name}`);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TierCustomFields);

var _StyledStyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_StyledInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP).withConfig({
  displayName: "TierCustomFields___StyledStyledInput",
  componentId: "sc-1f387h2-0"
})(["", ""], p => p.$_css);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ orderResponseFragment),
/* harmony export */   "RW": () => (/* binding */ contributionFlowAccountFieldsFragment),
/* harmony export */   "vd": () => (/* binding */ orderSuccessFragment)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const contributionFlowHostFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ContributionFlowHostFields on Host {
    id
    legacyId
    slug
    name
    settings
    contributionPolicy
    location {
      id
      country
    }
    paypalClientId
    supportedPaymentMethods
    payoutMethods {
      id
      name
      data
      type
    }
  }
`;
const contributionFlowAccountFieldsFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ContributionFlowAccountFields on Account {
    id
    legacyId
    slug
    type
    name
    currency
    settings
    twitterHandle
    description
    imageUrl(height: 192)
    backgroundImageUrl
    isHost
    isActive
    settings
    location {
      id
      country
    }
    features {
      id
      RECEIVE_FINANCIAL_CONTRIBUTIONS
    }
    ... on Organization {
      platformFeePercent
      platformContributionAvailable
      host {
        id
        ...ContributionFlowHostFields
      }
    }
    ... on AccountWithContributions {
      contributionPolicy
      platformFeePercent
      platformContributionAvailable
      contributors(limit: 6, roles: [BACKER, ATTENDEE]) {
        totalCount
        nodes {
          id
          name
          image
          collectiveSlug
        }
      }
    }
    ... on AccountWithHost {
      hostFeePercent
      host {
        id
        ...ContributionFlowHostFields
      }
    }
    ... on AccountWithParent {
      parent {
        id
        slug
        settings
        imageUrl
        backgroundImageUrl
        location {
          id
          country
        }
        ... on AccountWithContributions {
          contributionPolicy
        }
      }
    }
    ... on Event {
      endsAt
    }
  }
  ${contributionFlowHostFieldsFragment}
`;
const orderSuccessHostFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment OrderSuccessHostFragment on Host {
    id
    slug
    settings
    bankAccount {
      id
      name
      data
      type
    }
  }
`;
const orderSuccessFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment OrderSuccessFragment on Order {
    id
    legacyId
    status
    frequency
    data
    amount {
      value
      valueInCents
      currency
    }
    paymentMethod {
      id
      service
      type
      data
    }
    platformTipAmount {
      value
      valueInCents
      currency
    }
    tier {
      id
      name
    }
    membership {
      id
      publicMessage
    }
    fromAccount {
      id
      name
      type
      slug
      imageUrl(height: 48)
      ... on Individual {
        isGuest
      }
    }
    toAccount {
      id
      name
      slug
      tags
      type
      isHost
      settings
      socialLinks {
        type
      }
      ... on AccountWithContributions {
        # limit: 1 as current best practice to avoid the API fetching entries it doesn't need
        contributors(limit: 1, roles: [BACKER, ATTENDEE]) {
          totalCount
        }
      }
      ... on AccountWithParent {
        parent {
          id
          slug
          tags
          socialLinks {
            type
          }
        }
      }
      ... on AccountWithHost {
        host {
          id
          ...OrderSuccessHostFragment
        }
      }
      ... on Organization {
        host {
          id
          ...OrderSuccessHostFragment
        }
      }
    }
  }
  ${orderSuccessHostFragment}
`;
const orderResponseFragment = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment OrderResponseFragment on OrderWithPayment {
    guestToken
    order {
      id
      ...OrderSuccessFragment
    }
    stripeError {
      message
      account
      response
    }
  }
  ${orderSuccessFragment}
`;

/***/ }),

/***/ 19973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ contributionFlowAccountQuery),
/* harmony export */   "p": () => (/* binding */ contributionFlowAccountWithTierQuery)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(269);


const contributionFlowAccountQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query ContributionFlowAccountQuery($collectiveSlug: String!) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      ...ContributionFlowAccountFields
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .contributionFlowAccountFieldsFragment */ .RW}
`;
const contributionFlowAccountWithTierQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query ContributionFlowAccountWithTierQuery($collectiveSlug: String!, $tier: TierReferenceInput!) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      ...ContributionFlowAccountFields
    }
    tier(tier: $tier, throwIfMissing: false) {
      id
      legacyId
      type
      name
      slug
      description
      customFields
      availableQuantity
      singleTicket
      maxQuantity
      endsAt
      amount {
        valueInCents
        currency
      }
      amountType
      minimumAmount {
        valueInCents
        currency
      }
      interval
      presets
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__/* .contributionFlowAccountFieldsFragment */ .RW}
`;

/***/ }),

/***/ 32887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53493);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76918);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_intervals__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80642);
/* harmony import */ var _lib_constants_moderation_categories__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15084);
/* harmony import */ var _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1808);
/* harmony import */ var _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(12568);
/* harmony import */ var _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(33054);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(17632);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12136);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(47162);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(32651);
/* harmony import */ var _lib_graphql_mutations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(79618);
/* harmony import */ var _lib_guest_accounts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(37027);
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(79936);
/* harmony import */ var _lib_stripe_confirm_payment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(98221);
/* harmony import */ var _lib_tier_utils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(36648);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(97079);
/* harmony import */ var _pages_external_redirect__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(89412);
/* harmony import */ var _Captcha__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(32827);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(69078);
/* harmony import */ var _faqs_ContributeFAQ__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(43188);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(16159);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(53169);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(37278);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(26050);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(90998);
/* harmony import */ var _UserProvider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(51927);
/* harmony import */ var _graphql_fragments__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(269);
/* harmony import */ var _CollectiveTitleContainer__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(97208);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(1433);
/* harmony import */ var _ContributionFlowButtons__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(78879);
/* harmony import */ var _ContributionFlowHeader__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(28980);
/* harmony import */ var _ContributionFlowStepContainer__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(12646);
/* harmony import */ var _ContributionFlowStepsProgress__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(94554);
/* harmony import */ var _ContributionFlowSuccess__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(68843);
/* harmony import */ var _ContributionSummary__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(30590);
/* harmony import */ var _CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(63768);
/* harmony import */ var _PlatformTipInput__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(4770);
/* harmony import */ var _query_parameters__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(49297);
/* harmony import */ var _SafeTransactionMessage__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(56878);
/* harmony import */ var _SignInToContributeAsAnOrganization__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(31387);
/* harmony import */ var _StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(62645);
/* harmony import */ var _StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(17724);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(45614);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_external_redirect__WEBPACK_IMPORTED_MODULE_36__, _Captcha__WEBPACK_IMPORTED_MODULE_37__, _ContributionFlowStepContainer__WEBPACK_IMPORTED_MODULE_51__, _ContributionFlowSuccess__WEBPACK_IMPORTED_MODULE_53__, _ContributionSummary__WEBPACK_IMPORTED_MODULE_54__, _CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_55__, _SignInToContributeAsAnOrganization__WEBPACK_IMPORTED_MODULE_59__, _StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_60__, _StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_61__]);
([_pages_external_redirect__WEBPACK_IMPORTED_MODULE_36__, _Captcha__WEBPACK_IMPORTED_MODULE_37__, _ContributionFlowStepContainer__WEBPACK_IMPORTED_MODULE_51__, _ContributionFlowSuccess__WEBPACK_IMPORTED_MODULE_53__, _ContributionSummary__WEBPACK_IMPORTED_MODULE_54__, _CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_55__, _SignInToContributeAsAnOrganization__WEBPACK_IMPORTED_MODULE_59__, _StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_60__, _StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_61__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























































const StepsProgressBox = styled_components__WEBPACK_IMPORTED_MODULE_17___default()(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu).withConfig({
  displayName: "contribution-flow__StepsProgressBox",
  componentId: "sc-wwdulp-0"
})(["min-height:120px;max-width:450px;@media screen and (max-width:640px){width:100%;max-width:100%;}"]);
const STEP_LABELS = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__.defineMessages)({
  profile: {
    id: "menu.profile",
    defaultMessage: [{
      "type": 0,
      "value": "Profile"
    }]
  },
  details: {
    id: "Details",
    defaultMessage: [{
      "type": 0,
      "value": "Details"
    }]
  },
  payment: {
    id: "contribute.step.payment",
    defaultMessage: [{
      "type": 0,
      "value": "Payment info"
    }]
  },
  summary: {
    id: "Summary",
    defaultMessage: [{
      "type": 0,
      "value": "Summary"
    }]
  }
});
const OTHER_MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__.defineMessages)({
  tipAmountContributionWarning: {
    id: "Warning.TipAmountContributionWarning",
    defaultMessage: [{
      "type": 0,
      "value": "You are about to make a contribution of "
    }, {
      "type": 1,
      "value": "contributionAmount"
    }, {
      "type": 0,
      "value": " to "
    }, {
      "type": 1,
      "value": "accountName"
    }, {
      "type": 0,
      "value": " that includes a "
    }, {
      "type": 1,
      "value": "tipAmount"
    }, {
      "type": 0,
      "value": " tip to the Open Collective platform. The tip amount looks unusually high."
    }, {
      "type": 1,
      "value": "newLine"
    }, {
      "type": 1,
      "value": "newLine"
    }, {
      "type": 0,
      "value": "Are you sure you want to do this?"
    }]
  },
  pastEventWarning: {
    id: "Warning.PastEvent",
    defaultMessage: [{
      "type": 0,
      "value": "You're contributing to a past event."
    }]
  }
});

class ContributionFlow extends (react__WEBPACK_IMPORTED_MODULE_9___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "_getQueryParams", memoize_one__WEBPACK_IMPORTED_MODULE_14___default()(query => {
      return this.getQueryHelper().decode(query);
    }));

    _defineProperty(this, "getQueryParams", () => {
      return this._getQueryParams(this.props.router.query);
    });

    _defineProperty(this, "submitOrder", async () => {
      const {
        collective,
        host,
        tier
      } = this.props;
      const {
        stepDetails,
        stepProfile,
        stepSummary
      } = this.state;
      this.setState({
        error: null,
        isSubmitting: true
      });
      let fromAccount, guestInfo;

      if (stepProfile.isGuest) {
        guestInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(stepProfile, ['email', 'name', 'legalName', 'location', 'captcha']);
      } else {
        fromAccount = typeof stepProfile.id === 'string' ? {
          id: stepProfile.id
        } : {
          legacyId: stepProfile.id
        };
      }

      try {
        const totalAmount = (0,_utils__WEBPACK_IMPORTED_MODULE_62__/* .getTotalAmount */ .aU)(stepDetails, stepSummary);

        const skipTaxes = !totalAmount || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(this.getApplicableTaxes(collective, host, tier?.type));

        const response = await this.props.createOrder({
          variables: {
            order: {
              quantity: stepDetails.quantity,
              amount: this.props.paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO ? {
                valueInCents: 100
              } // Insert dummy value for crypto contribution until the transaction is reconciled
              : {
                valueInCents: stepDetails.amount
              },
              frequency: (0,_lib_constants_intervals__WEBPACK_IMPORTED_MODULE_20__.getGQLV2FrequencyFromInterval)(stepDetails.interval),
              guestInfo,
              fromAccount,
              fromAccountInfo: {
                location: lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(stepProfile.location, ['name', 'address', 'country', 'structured']),
                legalName: stepProfile.legalName,
                name: stepProfile.name
              },
              toAccount: lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(this.props.collective, ['id']),
              data: this.props.paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO ? {
                thegivingblock: {
                  pledgeAmount: stepDetails.cryptoAmount,
                  pledgeCurrency: stepDetails.currency.value
                }
              } : null,
              customData: stepDetails.customData,
              paymentMethod: await this.getPaymentMethod(),
              platformTipAmount: (0,_utils__WEBPACK_IMPORTED_MODULE_62__/* .getGQLV2AmountInput */ .DO)(stepDetails.platformTip, undefined),
              tier: this.props.tier && {
                legacyId: this.props.tier.legacyId
              },
              context: {
                isEmbed: this.props.isEmbed || false
              },
              tags: this.getQueryParams().tags,
              taxes: skipTaxes ? null : [{
                type: stepSummary.taxType,
                amount: (0,_utils__WEBPACK_IMPORTED_MODULE_62__/* .getGQLV2AmountInput */ .DO)(stepSummary.amount, 0),
                country: stepSummary.countryISO,
                idNumber: stepSummary.number
              }]
            }
          }
        });
        return this.handleOrderResponse(response.data.createOrder, stepProfile.email);
      } catch (e) {
        this.handleError();
        this.showError((0,_lib_errors__WEBPACK_IMPORTED_MODULE_26__/* .getErrorFromGraphqlException */ .H1)(e));
      }
    });

    _defineProperty(this, "handleOrderResponse", async ({
      order,
      stripeError,
      guestToken
    }, email) => {
      const {
        stepPayment
      } = this.state;

      if (guestToken && order) {
        (0,_lib_guest_accounts__WEBPACK_IMPORTED_MODULE_30__/* .setGuestToken */ .kG)(email, order.id, guestToken);
      }

      if (stepPayment?.paymentMethod?.service === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_SERVICE.STRIPE */ .tp.STRIPE && (stepPayment?.key === _utils__WEBPACK_IMPORTED_MODULE_62__/* .STRIPE_PAYMENT_ELEMENT_KEY */ .W2 || stepPayment.paymentMethod.type === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.US_BANK_ACCOUNT */ .td.US_BANK_ACCOUNT || stepPayment.paymentMethod.type === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.SEPA_DEBIT */ .td.SEPA_DEBIT)) {
        const {
          stripeData
        } = stepPayment;
        const baseRoute = this.props.collective.parent?.slug ? `${window.location.origin}/${this.props.collective.parent?.slug}/${(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_18__/* .getCollectiveTypeForUrl */ .rf)(this.props.collective)}/${this.props.collective.slug}` : `${window.location.origin}/${this.props.collective.slug}`;
        const returnUrl = `${baseRoute}/donate/success?OrderId=${order.id}`;

        try {
          await (0,_lib_stripe_confirm_payment__WEBPACK_IMPORTED_MODULE_32__/* .confirmPayment */ .B)(stripeData?.stripe, stripeData?.paymentIntentClientSecret, {
            returnUrl,
            elements: stripeData?.elements,
            type: stepPayment?.paymentMethod?.type,
            paymentMethodId: stepPayment?.paymentMethod?.data?.stripePaymentMethodId
          });
          this.setState({
            isSubmitted: true,
            isSubmitting: false
          });
          return this.handleSuccess(order);
        } catch (e) {
          this.setState({
            isSubmitting: false,
            error: e.message
          });
        }
      } else if (stripeError) {
        return this.handleStripeError(order, stripeError, email, guestToken);
      } else if (this.props.paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO) {
        this.setState({
          isSubmitted: true,
          isSubmitting: false,
          createdOrder: order
        });
      } else {
        return this.handleSuccess(order);
      }
    });

    _defineProperty(this, "handleError", message => {
      this.setState({
        isSubmitting: false,
        error: message
      });

      if ((0,_Captcha__WEBPACK_IMPORTED_MODULE_37__/* .isCaptchaEnabled */ .gc)() && !this.props.LoggedInUser) {
        this.setState({
          stepProfile: lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(this.state.stepProfile, 'captcha', null)
        });
        this.captchaRef?.current?.resetCaptcha();
      }
    });

    _defineProperty(this, "handleStripeError", async (order, stripeError, email, guestToken) => {
      const {
        message,
        account,
        response
      } = stripeError;

      if (!response) {
        this.handleError(message);
      } else if (response.paymentIntent) {
        const isAlipay = response.paymentIntent.allowed_source_types[0] === 'alipay';
        const stripe = await (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_31__/* .getStripe */ .d2)(null, account);
        const result = isAlipay ? await stripe.confirmAlipayPayment(response.paymentIntent.client_secret, {
          // eslint-disable-next-line camelcase
          return_url: `${window.location.origin}/api/services/stripe/alipay/callback?OrderId=${order.id}`
        }) : await stripe.handleCardAction(response.paymentIntent.client_secret);

        if (result.error) {
          this.handleError(result.error.message);
        } else if (result.paymentIntent && result.paymentIntent.status === 'requires_confirmation') {
          this.setState({
            isSubmitting: true,
            error: null
          });

          try {
            const response = await this.props.confirmOrder({
              variables: {
                order: {
                  id: order.id
                },
                guestToken
              }
            });
            return this.handleOrderResponse(response.data.confirmOrder, email);
          } catch (e) {
            this.handleError(e.message);
          }
        }
      }
    });

    _defineProperty(this, "handleSuccess", async order => {
      this.setState({
        isSubmitted: true,
        isSubmitting: false
      });
      this.props.refetchLoggedInUser(); // to update memberships

      const queryParams = this.getQueryParams();

      if ((0,_pages_external_redirect__WEBPACK_IMPORTED_MODULE_36__.isValidExternalRedirect)(queryParams.redirect)) {
        const url = new URL(queryParams.redirect);
        url.searchParams.set('orderId', order.legacyId);
        url.searchParams.set('orderIdV2', order.id);
        url.searchParams.set('status', order.status);

        const transaction = lodash_find__WEBPACK_IMPORTED_MODULE_8___default()(order.transactions, {
          type: _lib_constants_transactions__WEBPACK_IMPORTED_MODULE_24__/* .TransactionTypes.CREDIT */ .em.CREDIT
        });

        if (transaction) {
          url.searchParams.set('transactionid', transaction.legacyId);
          url.searchParams.set('transactionIdV2', transaction.id);
        }

        const verb = 'donate';
        const fallback = `/${this.props.collective.slug}/${verb}/success?OrderId=${order.id}`;

        if ((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .isTrustedRedirectHost */ .TD)(url.host)) {
          if (queryParams.shouldRedirectParent) {
            window.parent.location.href = url.href;
          } else {
            window.location.href = url.href;
          }
        } else {
          await this.props.router.push({
            pathname: '/external-redirect',
            query: {
              url: url.href,
              fallback,
              shouldRedirectParent: queryParams.shouldRedirectParent
            }
          });
          return this.scrollToTop();
        }
      } else {
        const email = this.state.stepProfile?.email;
        return this.pushStepRoute('success', {
          replace: false,
          query: {
            OrderId: order.id,
            email
          }
        });
      }
    });

    _defineProperty(this, "showError", error => {
      this.setState({
        error
      });
      this.scrollToTop();
    });

    _defineProperty(this, "getContributeProfiles", memoize_one__WEBPACK_IMPORTED_MODULE_14___default()(_utils__WEBPACK_IMPORTED_MODULE_62__/* .getContributeProfiles */ .E$));

    _defineProperty(this, "getPaymentMethod", async () => {
      const {
        stepPayment,
        stripe,
        stripeElements
      } = this.state;

      if (!stepPayment?.paymentMethod) {
        return null;
      }

      const paymentMethod = {
        // TODO: cleanup after this version is deployed in production
        // Migration Step 1
        // type: stepPayment.paymentMethod.providerType,
        // legacyType: stepPayment.paymentMethod.providerType,
        // service: stepPayment.paymentMethod.service,
        // newType: stepPayment.paymentMethod.type,
        // Migration Step 2
        legacyType: stepPayment.paymentMethod.providerType,
        service: stepPayment.paymentMethod.service,
        newType: stepPayment.paymentMethod.type // Migration Step 3
        // service: stepPayment.paymentMethod.service,
        // type: stepPayment.paymentMethod.type,

      }; // Payment Method already registered

      if (stepPayment.paymentMethod.id) {
        paymentMethod.id = stepPayment.paymentMethod.id; // New Credit Card
      } else if (stepPayment.key === _utils__WEBPACK_IMPORTED_MODULE_62__/* .NEW_CREDIT_CARD_KEY */ .u0) {
        const cardElement = stripeElements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_13__.CardElement);
        const {
          token
        } = await stripe.createToken(cardElement);
        const pm = (0,_lib_stripe__WEBPACK_IMPORTED_MODULE_31__/* .stripeTokenToPaymentMethod */ .kJ)(token);
        paymentMethod.name = pm.name;
        paymentMethod.isSavedForLater = stepPayment.paymentMethod.isSavedForLater;
        paymentMethod.creditCardInfo = _objectSpread({
          token: pm.token
        }, pm.data); // PayPal
      } else if (stepPayment.paymentMethod.service === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
        const paypalFields = ['token', 'data', 'orderId', 'subscriptionId'];
        paymentMethod.paypalInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(stepPayment.paymentMethod.paypalInfo, paypalFields); // Define the right type (doesn't matter that much today, but make it future proof)

        if (paymentMethod.paypalInfo.subscriptionId) {
          paymentMethod.type === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.SUBSCRIPTION */ .td.SUBSCRIPTION;
        }
      }

      if (stepPayment.paymentMethod.type === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.US_BANK_ACCOUNT */ .td.US_BANK_ACCOUNT || stepPayment.paymentMethod.type === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.SEPA_DEBIT */ .td.SEPA_DEBIT || stepPayment.paymentMethod.type === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.BACS_DEBIT */ .td.BACS_DEBIT || stepPayment.paymentMethod.type === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.PAYMENT_INTENT */ .td.PAYMENT_INTENT) {
        paymentMethod.paymentIntentId = stepPayment.paymentMethod.paymentIntentId;
        paymentMethod.isSavedForLater = stepPayment.paymentMethod.isSavedForLater;
      }

      return paymentMethod;
    });

    _defineProperty(this, "validateStepProfile", async action => {
      const {
        stepProfile,
        stepDetails,
        error
      } = this.state;

      if (error) {
        this.setState({
          error: null
        });
      }

      if (!this.checkFormValidity()) {
        return false;
      } // Can only ignore validation if going back


      if (!stepProfile) {
        return action === 'prev';
      } else if (stepProfile.isGuest) {
        return (0,_StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_60__/* .validateGuestProfile */ .e)(stepProfile, stepDetails);
      } // Check if we're creating a new profile


      if (stepProfile.id === 'incognito' || stepProfile.id === _StepProfileLoggedInForm__WEBPACK_IMPORTED_MODULE_61__/* .NEW_ORGANIZATION_KEY */ .X) {
        if (stepProfile.type === 'ORGANIZATION' && !(0,_CreateOrganizationForm__WEBPACK_IMPORTED_MODULE_55__/* .validateNewOrg */ .i)(stepProfile)) {
          return false;
        }

        this.setState({
          isSubmitting: true
        });

        try {
          const {
            data: result
          } = await this.props.createCollective(stepProfile);
          const createdProfile = result.createCollective;
          await this.props.refetchLoggedInUser();
          this.setState({
            stepProfile: createdProfile,
            isSubmitting: false
          });
        } catch (error) {
          this.setState({
            error: error.message,
            isSubmitting: false
          });
          window.scrollTo(0, 0);
          return false;
        }
      } // Check that the contributor is not blocked from contributing to the collective


      const containsRejectedCategories = this.getContributorRejectedCategories(stepProfile);

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(containsRejectedCategories)) {
        this.setState({
          stepProfile: _objectSpread(_objectSpread({}, this.state.stepProfile), {}, {
            contributorRejectedCategories: containsRejectedCategories
          })
        });
      }

      return true;
    });

    _defineProperty(this, "getContributorRejectedCategories", account => {
      const rejectedCategories = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(this.props.collective, 'settings.moderation.rejectedCategories', []);

      const contributorCategories = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(account, 'categories', []);

      if (rejectedCategories.length === 0 || contributorCategories.length === 0) {
        return [];
      } // Example:
      // MODERATION_CATEGORIES_ALIASES = ['CASINO_GAMBLING': ['casino', 'gambling'], 'VPN_PROXY': ['vpn', 'proxy']]
      // - when contributorCategories = ['CASINO_GAMBLING'], returns ['CASINO_GAMBLING']
      // - when contributorCategories = ['vpn'] or ['proxy'], returns ['VPN_PROXY']


      const contributorRejectedCategories = Object.keys(_lib_constants_moderation_categories__WEBPACK_IMPORTED_MODULE_21__/* .MODERATION_CATEGORIES_ALIASES */ .l).filter(key => {
        return contributorCategories.includes(key) || lodash_intersection__WEBPACK_IMPORTED_MODULE_6___default()(_lib_constants_moderation_categories__WEBPACK_IMPORTED_MODULE_21__/* .MODERATION_CATEGORIES_ALIASES */ .l[key], contributorCategories).length !== 0;
      });
      return lodash_intersection__WEBPACK_IMPORTED_MODULE_6___default()(rejectedCategories, contributorRejectedCategories);
    });

    _defineProperty(this, "onStepChange", async step => {
      this.setState({
        showSignIn: false
      }); // To create an order we need a payment method to be set. This is normally set at final stage but for crypto flow we
      // need to set this before the final step of the flow

      if (this.props.paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO) {
        this.setState({
          stepPayment: {
            key: 'crypto',
            paymentMethod: {
              service: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_SERVICE.THEGIVINGBLOCK */ .tp.THEGIVINGBLOCK,
              type: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.CRYPTO */ .td.CRYPTO
            }
          }
        });
      } // This checkout step is where the QR code is displayed for crypto


      if (step.name === 'checkout') {
        await this.submitOrder();
      }

      if (!this.state.error) {
        await this.pushStepRoute(step.name);
      }
    });

    _defineProperty(this, "pushStepRoute", async (stepName, {
      query: newQueryParams,
      replace = false
    } = {}) => {
      // Reset errors if any
      if (this.state.error) {
        this.setState({
          error: null
        });
      } // Navigate to the new route


      const {
        router
      } = this.props;
      const queryParams = this.getQueryParams();
      const queryHelper = this.getQueryHelper();
      const encodedQueryParams = newQueryParams || queryHelper.encode(queryParams);
      const route = this.getRoute(stepName === 'details' ? '' : stepName);
      const navigateFn = replace ? router.replace : router.push;
      await navigateFn({
        pathname: route,
        query: lodash_omitBy__WEBPACK_IMPORTED_MODULE_2___default()(encodedQueryParams, value => !value)
      }, null, {
        shallow: true
      });
      this.scrollToTop(); // Reinitialize form on success

      if (stepName === 'success') {
        this.setState({
          isSubmitted: false,
          isSubmitting: false,
          stepPayment: null
        });
      }
    });

    _defineProperty(this, "getQueryHelper", () => {
      return this.props.isEmbed ? _query_parameters__WEBPACK_IMPORTED_MODULE_57__/* .EmbedContributionFlowUrlQueryHelper */ .s_ : _query_parameters__WEBPACK_IMPORTED_MODULE_57__/* .ContributionFlowUrlQueryHelper */ .W6;
    });

    _defineProperty(this, "getRoute", step => {
      const {
        collective,
        tier,
        isEmbed,
        router
      } = this.props;
      const verb = router.query.verb || 'donate';
      const stepRoute = !step || step === _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.DETAILS */ .Ss.DETAILS ? '' : `/${step}`;

      if (isEmbed) {
        if (tier) {
          return `/embed${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.legacyId}${stepRoute}`;
        } else {
          return `/embed${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .getCollectivePageRoute */ .x0)(collective)}/donate${stepRoute}`;
        }
      } else if (tier) {
        if (tier.type === 'TICKET' && collective.parent) {
          return `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .getCollectivePageRoute */ .x0)(collective)}/order/${tier.legacyId}${stepRoute}`;
        } else {
          // Enforce "contribute" verb for ordering tiers
          return `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .getCollectivePageRoute */ .x0)(collective)}/contribute/${tier.slug}-${tier.legacyId}/checkout${stepRoute}`;
        }
      } else if (verb === 'contribute' || verb === 'new-contribute') {
        // Never use `contribute` as verb if not using a tier (would introduce a route conflict)
        return `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .getCollectivePageRoute */ .x0)(collective)}/donate${stepRoute}`;
      } else if (verb === 'donate' && this.props.paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO) {
        return `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .getCollectivePageRoute */ .x0)(collective)}/donate/crypto${stepRoute}`;
      }

      return `${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_34__/* .getCollectivePageRoute */ .x0)(collective)}/${verb}${stepRoute}`;
    });

    _defineProperty(this, "getRedirectUrlForSignIn", () => {
      if (true) {
        return undefined;
      } else {}
    });

    _defineProperty(this, "scrollToTop", () => {
      if (this.mainContainerRef.current) {
        this.mainContainerRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    });

    _defineProperty(this, "isFixedContribution", memoize_one__WEBPACK_IMPORTED_MODULE_14___default()(_lib_tier_utils__WEBPACK_IMPORTED_MODULE_33__/* .isFixedContribution */ .CE));

    _defineProperty(this, "getTierMinAmount", memoize_one__WEBPACK_IMPORTED_MODULE_14___default()(_lib_tier_utils__WEBPACK_IMPORTED_MODULE_33__/* .getTierMinAmount */ .qt));

    _defineProperty(this, "getApplicableTaxes", memoize_one__WEBPACK_IMPORTED_MODULE_14___default()(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_12__.getApplicableTaxes));

    _defineProperty(this, "checkFormValidity", () => {
      return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_35__/* .reportValidityHTML5 */ .CR)(this.formRef.current);
    });

    _defineProperty(this, "getCurrentStepName", () => {
      return this.props.router.query.step || _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.DETAILS */ .Ss.DETAILS;
    });

    _defineProperty(this, "cryptoOrderCompleted", () => {
      const {
        createdOrder
      } = this.state;
      this.pushStepRoute('success', {
        replace: false,
        query: {
          OrderId: createdOrder.id
        }
      });
    });

    this.mainContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createRef();
    this.formRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createRef();
    this.captchaRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createRef();
    const {
      collective: _collective,
      tier: _tier,
      LoggedInUser
    } = props;
    const isCryptoFlow = props.paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO;

    const _queryParams = this.getQueryParams();

    const currency = isCryptoFlow ? lodash_find__WEBPACK_IMPORTED_MODULE_8___default()(_constants__WEBPACK_IMPORTED_MODULE_48__/* .CRYPTO_CURRENCIES */ .eY, field => field.value === _queryParams.cryptoCurrency) || _constants__WEBPACK_IMPORTED_MODULE_48__/* .CRYPTO_CURRENCIES[0] */ .eY[0] : _tier?.amount?.currency || _collective.currency;
    const amount = _queryParams.amount || (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_33__/* .getDefaultTierAmount */ .x6)(_tier, _collective, currency);
    const quantity = _queryParams.quantity || 1;
    this.state = {
      error: null,
      stripe: null,
      stripeElements: null,
      isSubmitted: false,
      isSubmitting: false,
      showSignIn: false,
      createdOrder: null,
      forceSummaryStep: this.getCurrentStepName() !== _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.DETAILS */ .Ss.DETAILS,
      // If not starting the flow with the details step, we force the summary step to make sure contributors have an easy way to review their contribution
      // Steps data
      stepProfile: this.getDefaultStepProfile(),
      stepPayment: {
        key: _queryParams.paymentMethod,
        isKeyOnly: true // For the step payment to recognize if it needs to load the payment method

      },
      stepSummary: null,
      stepDetails: {
        quantity,
        interval: (0,_utils__WEBPACK_IMPORTED_MODULE_62__/* .isSupportedInterval */ .Hq)(_collective, _tier, LoggedInUser, _queryParams.interval) ? _queryParams.interval : (0,_lib_tier_utils__WEBPACK_IMPORTED_MODULE_33__/* .getDefaultInterval */ .Rx)(props.tier),
        amount,
        platformTip: this.canHavePlatformTips() ? Math.round(amount * quantity * _PlatformTipInput__WEBPACK_IMPORTED_MODULE_56__/* .DEFAULT_PLATFORM_TIP_PERCENTAGE */ .R) : 0,
        currency,
        cryptoAmount: _queryParams.cryptoAmount
      }
    };
  }

  componentDidUpdate(oldProps) {
    if (oldProps.LoggedInUser && !this.props.LoggedInUser) {
      // User has logged out, reset the state
      this.setState({
        stepProfile: null,
        stepSummary: null,
        stepPayment: null
      });
      this.pushStepRoute(_constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.PROFILE */ .Ss.PROFILE);
    } else if (!oldProps.LoggedInUser && this.props.LoggedInUser) {
      // User has logged in, reload the step profile
      this.setState({
        stepProfile: this.getDefaultStepProfile()
      }); // reset the state if it was a guest

      if (this.state.stepProfile.isGuest) {
        const previousEmail = this.state.stepProfile.email;
        const newStepProfile = this.getDefaultStepProfile();
        const hasChangedEmail = previousEmail && previousEmail !== newStepProfile.email;
        this.setState({
          stepProfile: newStepProfile,
          stepSummary: null,
          stepPayment: null
        });

        if (hasChangedEmail && ![_constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.DETAILS */ .Ss.DETAILS, _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.PROFILE */ .Ss.PROFILE].includes(this.state.step)) {
          this.pushStepRoute(_constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.PROFILE */ .Ss.PROFILE); // Force user to re-fill profile
        }
      }
    } else if (oldProps.loadingLoggedInUser && !this.props.loadingLoggedInUser) {
      // Login failed, reset the state to make sure we fallback on guest mode
      this.setState({
        stepProfile: this.getDefaultStepProfile()
      });
    } else if (!this.props.loadingLoggedInUser) {
      // Reflect state changes in the URL
      const currentStepName = this.getCurrentStepName();

      if (currentStepName !== _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.SUCCESS */ .Ss.SUCCESS) {
        const {
          stepDetails,
          stepProfile,
          stepPayment
        } = this.state;
        const currentUrlState = this.getQueryParams();
        const expectedUrlState = (0,_query_parameters__WEBPACK_IMPORTED_MODULE_57__/* .stepsDataToUrlParamsData */ .sF)(currentUrlState, stepDetails, stepProfile, stepPayment, this.props.paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO, this.props.isEmbed);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(currentUrlState, lodash_omitBy__WEBPACK_IMPORTED_MODULE_2___default()(expectedUrlState, (lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default())))) {
          const route = this.getRoute(currentStepName);
          const queryHelper = this.getQueryHelper();
          this.props.router.replace({
            pathname: route,
            query: lodash_omitBy__WEBPACK_IMPORTED_MODULE_2___default()(queryHelper.encode(expectedUrlState), (lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()))
          }, null, {
            scroll: false,
            shallow: true
          });
        }
      }
    }
  }

  getDefaultStepProfile() {
    const {
      LoggedInUser,
      loadingLoggedInUser,
      collective
    } = this.props;
    const profiles = this.getContributeProfiles(LoggedInUser, collective);
    const queryParams = this.getQueryParams(); // We want to wait for the user to be logged in before matching the profile

    if (loadingLoggedInUser) {
      return {
        slug: queryParams.contributeAs
      };
    } // If there's a default profile slug, enforce it


    if (queryParams.contributeAs) {
      const contributorProfile = profiles.find(({
        slug
      }) => slug === queryParams.contributeAs);

      if (contributorProfile) {
        return contributorProfile;
      }
    } // Otherwise to the logged-in user personal profile, if any


    if (profiles[0]) {
      return profiles[0];
    } // Otherwise, it's a guest contribution


    return {
      isGuest: true,
      email: queryParams.email || '',
      name: queryParams.name || '',
      legalName: queryParams.legalName || ''
    };
  }

  getEmailRedirectURL() {
    let currentPath = window.location.pathname;

    if (window.location.search) {
      currentPath = currentPath + window.location.search;
    } else {
      currentPath = `${currentPath}?`;
    }

    return encodeURIComponent(currentPath);
  }
  /** Validate step profile, create new incognito/org if necessary */


  canHavePlatformTips() {
    const {
      tier,
      collective
    } = this.props;

    if (!collective.platformContributionAvailable) {
      return false;
    } else if (!tier) {
      return true;
    } else if (tier.type === _lib_constants_tiers_types__WEBPACK_IMPORTED_MODULE_23__/* .TierTypes.TICKET */ .x$.TICKET) {
      return false;
    } else if (tier.amountType === 'FIXED' && !tier.amount.valueInCents) {
      return false; // No platform tips for free tiers
    } else {
      return true;
    }
  }

  /** Returns the steps list */
  getSteps() {
    const {
      intl,
      collective,
      host,
      tier,
      LoggedInUser,
      paymentFlow
    } = this.props;
    const {
      stepDetails,
      stepProfile,
      stepPayment,
      stepSummary
    } = this.state;
    const isFixedContribution = this.isFixedContribution(tier);
    const currency = tier?.amount.currency || collective.currency;
    const minAmount = this.getTierMinAmount(tier, currency);
    const noPaymentRequired = minAmount === 0 && (isFixedContribution || stepDetails?.amount === 0);
    const isStepProfileCompleted = Boolean(stepProfile && LoggedInUser || stepProfile?.isGuest && (0,_StepProfileGuestForm__WEBPACK_IMPORTED_MODULE_60__/* .validateGuestProfile */ .e)(stepProfile, stepDetails));
    const isCrypto = paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO;
    const steps = [{
      name: 'details',
      label: intl.formatMessage(STEP_LABELS.details),
      isCompleted: Boolean(stepDetails),
      validate: () => {
        if (isCrypto) {
          return true;
        } else if (!this.checkFormValidity() || !stepDetails || stepDetails.amount < minAmount || // Min amount is per-item, so we don't need to multiply by quantity
        !stepDetails.quantity) {
          return false;
        } else if (!lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(tier?.availableQuantity) && stepDetails.quantity > tier.availableQuantity) {
          return false;
        } else if (stepDetails.amount && stepDetails.platformTip && stepDetails.platformTip / (stepDetails.amount * stepDetails.quantity) >= 0.5) {
          return confirm(intl.formatMessage(OTHER_MESSAGES.tipAmountContributionWarning, {
            contributionAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_25__/* .formatCurrency */ .xG)((0,_utils__WEBPACK_IMPORTED_MODULE_62__/* .getTotalAmount */ .aU)(stepDetails, stepSummary), currency, {
              locale: intl.locale
            }),
            tipAmount: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_25__/* .formatCurrency */ .xG)(stepDetails.platformTip, currency, {
              locale: intl.locale
            }),
            accountName: collective.name,
            newLine: '\n'
          }));
        } else {
          return true;
        }
      }
    }, {
      name: 'profile',
      label: intl.formatMessage(STEP_LABELS.profile),
      isCompleted: isStepProfileCompleted,
      validate: this.validateStepProfile
    }]; // Show the summary step only if the order has tax

    if (!noPaymentRequired && (this.getApplicableTaxes(collective, host, tier?.type).length || this.state.forceSummaryStep)) {
      steps.push({
        name: 'summary',
        label: intl.formatMessage(STEP_LABELS.summary),
        isCompleted: noPaymentRequired || lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(stepSummary, 'isReady', false)
      });
    } // Hide step payment if using a free tier with fixed price
    // Also hide payment screen if using crypto payment method, we handle crypto flow in the `checkout` step below


    if (!noPaymentRequired && !isCrypto) {
      steps.push({
        name: 'payment',
        label: intl.formatMessage(STEP_LABELS.payment),
        isCompleted: !stepProfile?.contributorRejectedCategories && stepPayment?.isCompleted,
        validate: action => {
          if (action === 'prev') {
            return true;
          } else if (stepPayment?.isKeyOnly) {
            return false; // Need to redirect to the payment step to load the payment method
          } else if (stepPayment?.key === _utils__WEBPACK_IMPORTED_MODULE_62__/* .STRIPE_PAYMENT_ELEMENT_KEY */ .W2) {
            return stepPayment.isCompleted;
          } else {
            const isCompleted = Boolean(noPaymentRequired || stepPayment);

            if (!stepProfile.captcha && (0,_Captcha__WEBPACK_IMPORTED_MODULE_37__/* .isCaptchaEnabled */ .gc)() && !LoggedInUser && stepPayment?.key === _utils__WEBPACK_IMPORTED_MODULE_62__/* .NEW_CREDIT_CARD_KEY */ .u0) {
              this.showError(intl.formatMessage({
                id: "Rpq6pU",
                defaultMessage: [{
                  "type": 0,
                  "value": "Captcha is required."
                }]
              }));
              return false;
            } else if (isCompleted && stepPayment?.key === _utils__WEBPACK_IMPORTED_MODULE_62__/* .NEW_CREDIT_CARD_KEY */ .u0) {
              return stepPayment.paymentMethod?.stripeData?.complete;
            } else {
              return isCompleted;
            }
          }
        }
      });
    }

    if (isCrypto) {
      steps.push({
        name: 'checkout',
        label: intl.formatMessage(STEP_LABELS.payment),
        isCompleted: !stepProfile?.contributorRejectedCategories
      });
    }

    return steps;
  }

  getPaypalButtonProps({
    currency
  }) {
    const {
      stepPayment,
      stepDetails,
      stepSummary
    } = this.state;

    if (stepPayment?.paymentMethod?.service === _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
      const {
        host,
        collective,
        tier
      } = this.props;
      return {
        host: host,
        collective,
        tier,
        currency: currency,
        style: {
          size: 'responsive',
          height: 47
        },
        totalAmount: (0,_utils__WEBPACK_IMPORTED_MODULE_62__/* .getTotalAmount */ .aU)(stepDetails, stepSummary),
        interval: stepDetails?.interval,
        onClick: () => this.setState({
          isSubmitting: true
        }),
        onCancel: () => this.setState({
          isSubmitting: false
        }),
        onError: e => this.setState({
          isSubmitting: false,
          error: e.message
        }),
        // New callback, used by `PayWithPaypalButton`
        onSuccess: paypalInfo => {
          this.setState(state => ({
            stepPayment: _objectSpread(_objectSpread({}, state.stepPayment), {}, {
              paymentMethod: {
                service: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL,
                type: _lib_constants_payment_methods__WEBPACK_IMPORTED_MODULE_22__/* .PAYMENT_METHOD_TYPE.PAYMENT */ .td.PAYMENT,
                paypalInfo
              }
            })
          }), this.submitOrder);
        }
      };
    }
  }

  render() {
    const {
      collective,
      host,
      tier,
      LoggedInUser,
      loadingLoggedInUser,
      isEmbed,
      paymentFlow,
      error: backendError
    } = this.props;
    const {
      error,
      isSubmitted,
      isSubmitting,
      stepDetails,
      stepSummary,
      stepProfile,
      stepPayment
    } = this.state;
    const isCrypto = paymentFlow === _constants__WEBPACK_IMPORTED_MODULE_48__/* .PAYMENT_FLOW.CRYPTO */ .M7.CRYPTO;
    const isLoading = isCrypto ? isSubmitting : isSubmitted || isSubmitting;
    const pastEvent = collective.type === _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_19__/* .CollectiveType.EVENT */ .eV.EVENT && (0,_lib_events__WEBPACK_IMPORTED_MODULE_27__/* .isPastEvent */ .Up)(collective);
    const shouldDisplayCaptcha = (0,_Captcha__WEBPACK_IMPORTED_MODULE_37__/* .isCaptchaEnabled */ .gc)() && !LoggedInUser && stepPayment?.key === _utils__WEBPACK_IMPORTED_MODULE_62__/* .NEW_CREDIT_CARD_KEY */ .u0;
    const queryParams = this.getQueryParams();
    const currency = isCrypto ? queryParams.cryptoCurrency || stepDetails.currency.value : tier?.amount.currency || collective.currency;
    const currentStepName = this.getCurrentStepName();

    if (currentStepName === _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.SUCCESS */ .Ss.SUCCESS) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_ContributionFlowSuccess__WEBPACK_IMPORTED_MODULE_53__/* ["default"] */ .Z, {
        collective: collective
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Steps__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z, {
      steps: this.getSteps(),
      currentStepName: currentStepName,
      onStepChange: this.onStepChange,
      onComplete: isCrypto && isSubmitted ? this.cryptoOrderCompleted : this.submitOrder,
      delayCompletionCheck: Boolean(loadingLoggedInUser && stepProfile),
      children: ({
        steps,
        currentStep,
        lastVisitedStep,
        goNext,
        goBack,
        goToStep,
        prevStep,
        nextStep,
        isValidating,
        isValidStep
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: [3, 4, 5],
        mb: 4,
        "data-cy": "cf-content",
        ref: this.mainContainerRef,
        children: [!this.getQueryParams().hideHeader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {
          px: [2, 3],
          mb: 4,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_ContributionFlowHeader__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .Z, {
            collective: collective,
            isEmbed: isEmbed
          })
        }), !queryParams.hideSteps && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(StepsProgressBox, {
          mb: 3,
          width: [1.0, 0.8],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_ContributionFlowStepsProgress__WEBPACK_IMPORTED_MODULE_52__/* ["default"] */ .Z, {
            steps: steps,
            currentStep: currentStep,
            lastVisitedStep: lastVisitedStep,
            goToStep: goToStep,
            stepProfile: stepProfile,
            stepDetails: stepDetails,
            stepPayment: stepPayment,
            stepSummary: stepSummary,
            isCrypto: isCrypto,
            isSubmitted: this.state.isSubmitted,
            loading: isValidating || isLoading,
            currency: currency,
            isFreeTier: this.getTierMinAmount(tier, currency) === 0
          })
        }), currentStep.name !== _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.DETAILS */ .Ss.DETAILS && loadingLoggedInUser || !isValidStep ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {
          py: [4, 5],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {})
        }) : currentStep.name === _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.PROFILE */ .Ss.PROFILE && !LoggedInUser && this.state.showSignIn ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_SignInToContributeAsAnOrganization__WEBPACK_IMPORTED_MODULE_59__/* ["default"] */ .Z, {
          defaultEmail: stepProfile?.email,
          redirect: this.getRedirectUrlForSignIn(),
          onCancel: () => this.setState({
            showSignIn: false
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Grid */ .rj, {
          px: [2, 3],
          gridTemplateColumns: ['minmax(200px, 600px)', null, '0fr minmax(300px, 600px) 1fr', '1fr minmax(300px, 600px) 1fr'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {
            as: "form",
            ref: this.formRef,
            onSubmit: e => e.preventDefault(),
            maxWidth: "100%",
            children: [(error || backendError) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
              type: "error",
              withIcon: true,
              mb: 3,
              "data-cy": "contribution-flow-error",
              children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_26__/* .formatErrorMessage */ .jN)(this.props.intl, error) || backendError
            }), pastEvent && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .Z, {
              type: "warning",
              withIcon: true,
              mb: 3,
              "data-cy": "contribution-flow-warning",
              children: this.props.intl.formatMessage(OTHER_MESSAGES.pastEventWarning)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_ContributionFlowStepContainer__WEBPACK_IMPORTED_MODULE_51__/* ["default"] */ .Z, {
              collective: collective,
              tier: tier,
              mainState: this.state,
              onChange: data => this.setState(data),
              step: currentStep,
              isCrypto: isCrypto,
              showPlatformTip: this.canHavePlatformTips(),
              onNewCardFormReady: ({
                stripe,
                stripeElements
              }) => this.setState({
                stripe,
                stripeElements
              }),
              taxes: this.getApplicableTaxes(collective, host, tier?.type),
              onSignInClick: () => this.setState({
                showSignIn: true
              }),
              isEmbed: isEmbed,
              isSubmitting: isValidating || isLoading,
              order: this.state.createdOrder,
              disabledPaymentMethodTypes: queryParams.disabledPaymentMethodTypes,
              hideCreditCardPostalCode: queryParams.hideCreditCardPostalCode,
              contributeProfiles: this.getContributeProfiles(LoggedInUser, collective)
            }), !nextStep && shouldDisplayCaptcha && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Flex */ .kC, {
              mt: 40,
              justifyContent: "center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Captcha__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .ZP, {
                ref: this.captchaRef,
                onVerify: result => this.setState({
                  stepProfile: lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(stepProfile, 'captcha', result)
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {
              mt: 40,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_ContributionFlowButtons__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .Z, {
                goNext: goNext // for crypto flow the user should not be able to go back after the order is created at checkout step
                // we also don't want to show the back button when linking directly to the payment step with `hideSteps=true`
                ,
                goBack: isCrypto && currentStep.name === _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.CHECKOUT */ .Ss.CHECKOUT || queryParams.hideSteps && currentStep.name === _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.PAYMENT */ .Ss.PAYMENT ? null : goBack,
                step: currentStep,
                prevStep: prevStep,
                nextStep: nextStep,
                isValidating: isValidating || isLoading,
                paypalButtonProps: !nextStep ? this.getPaypalButtonProps({
                  currency
                }) : null,
                currency: currency,
                isCrypto: isCrypto,
                tier: tier,
                stepDetails: stepDetails,
                stepSummary: stepSummary
              })
            }), !isEmbed && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {
              textAlign: "center",
              mt: 5,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_CollectiveTitleContainer__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z, {
                collective: collective,
                useLink: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
                  id: "ContributionFlow.backToCollectivePage",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Back to Collective Page"
                  }]
                })
              })
            })]
          }), !queryParams.hideFAQ && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {
            minWidth: [null, '300px'],
            mt: [4, null, 0],
            ml: [0, 3, 4, 5],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_40__/* .Box */ .xu, {
              maxWidth: ['100%', null, 300],
              px: [1, null, 0],
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_SafeTransactionMessage__WEBPACK_IMPORTED_MODULE_58__/* ["default"] */ .Z, {}), currentStepName !== _constants__WEBPACK_IMPORTED_MODULE_48__/* .STEPS.SUMMARY */ .Ss.SUMMARY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
                fontSize: "12px",
                mt: 4,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_Text__WEBPACK_IMPORTED_MODULE_44__.P, {
                  fontWeight: "500",
                  fontSize: "inherit",
                  mb: 3,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedMessage, {
                    id: "ContributionSummary",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Contribution Summary"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_ContributionSummary__WEBPACK_IMPORTED_MODULE_54__/* ["default"] */ .Z, {
                  collective: collective,
                  stepDetails: stepDetails,
                  stepSummary: stepSummary,
                  stepPayment: stepPayment,
                  currency: currency,
                  isCrypto: isCrypto,
                  tier: tier
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__.jsx(_faqs_ContributeFAQ__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {
                collective: collective,
                mt: 4,
                titleProps: {
                  mb: 2
                },
                isCrypto: isCrypto
              })]
            })
          })]
        })]
      })
    });
  }

}

const addCreateOrderMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_11__.graphql)(_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql`
    mutation CreateOrder($order: OrderCreateInput!) {
      createOrder(order: $order) {
        ...OrderResponseFragment
      }
    }
    ${_graphql_fragments__WEBPACK_IMPORTED_MODULE_46__/* .orderResponseFragment */ .I}
  `, {
  name: 'createOrder',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_28__/* .API_V2_CONTEXT */ .T
  }
});
const addConfirmOrderMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_11__.graphql)(_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql`
    mutation ConfirmOrder($order: OrderReferenceInput!, $guestToken: String) {
      confirmOrder(order: $order, guestToken: $guestToken) {
        ...OrderResponseFragment
      }
    }
    ${_graphql_fragments__WEBPACK_IMPORTED_MODULE_46__/* .orderResponseFragment */ .I}
  `, {
  name: 'confirmOrder',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_28__/* .API_V2_CONTEXT */ .T
  }
});
ContributionFlow.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getQueryParams",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "submitOrder",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "handleOrderResponse",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "{ order, stripeError, guestToken }",
      "type": null
    }, {
      "name": "email",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleError",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "message",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleStripeError",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "order",
      "type": null
    }, {
      "name": "stripeError",
      "type": null
    }, {
      "name": "email",
      "type": null
    }, {
      "name": "guestToken",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handleSuccess",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "order",
      "type": null
    }],
    "returns": null
  }, {
    "name": "showError",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "error",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getDefaultStepProfile",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getPaymentMethod",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "getEmailRedirectURL",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "validateStepProfile",
    "docblock": "Validate step profile, create new incognito/org if necessary",
    "modifiers": ["async"],
    "params": [{
      "name": "action"
    }],
    "returns": null,
    "description": "Validate step profile, create new incognito/org if necessary"
  }, {
    "name": "getContributorRejectedCategories",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "account",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onStepChange",
    "docblock": "Steps component callback",
    "modifiers": ["async"],
    "params": [{
      "name": "step"
    }],
    "returns": null,
    "description": "Steps component callback"
  }, {
    "name": "pushStepRoute",
    "docblock": "Navigate to another step, ensuring all route params are preserved",
    "modifiers": ["async"],
    "params": [{
      "name": "stepName"
    }, {
      "name": "{ query: newQueryParams, replace = false }"
    }],
    "returns": null,
    "description": "Navigate to another step, ensuring all route params are preserved"
  }, {
    "name": "getQueryHelper",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getRoute",
    "docblock": "Get the route for the given step. Doesn't include query string.",
    "modifiers": [],
    "params": [{
      "name": "step"
    }],
    "returns": null,
    "description": "Get the route for the given step. Doesn't include query string."
  }, {
    "name": "getRedirectUrlForSignIn",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "scrollToTop",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "canHavePlatformTips",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "checkFormValidity",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getCurrentStepName",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getSteps",
    "docblock": "Returns the steps list",
    "modifiers": [],
    "params": [],
    "returns": null,
    "description": "Returns the steps list"
  }, {
    "name": "getPaypalButtonProps",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{ currency }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "cryptoOrderCompleted",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "ContributionFlow",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "platformContributionAvailable": {
            "name": "bool",
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "host": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "tier": {
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
    "createOrder": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "confirmOrder": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "loadingLoggedInUser": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isEmbed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "paymentFlow": {
      "description": "",
      "type": {
        "name": "string"
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
    "refetchLoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "LoggedInUser": {
      "description": "@ignore from withUser",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "createCollective": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_16__.injectIntl)((0,_UserProvider__WEBPACK_IMPORTED_MODULE_45__/* .withUser */ .ns)(addConfirmOrderMutation(addCreateOrderMutation((0,_lib_graphql_mutations__WEBPACK_IMPORTED_MODULE_29__/* .addCreateCollectiveMutation */ .Z)((0,next_router__WEBPACK_IMPORTED_MODULE_15__.withRouter)(ContributionFlow)))))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W6": () => (/* binding */ ContributionFlowUrlQueryHelper),
  "s_": () => (/* binding */ EmbedContributionFlowUrlQueryHelper),
  "sF": () => (/* binding */ stepsDataToUrlParamsData)
});

// EXTERNAL MODULE: external "lodash/pick"
var pick_ = __webpack_require__(84159);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick_);
// EXTERNAL MODULE: external "lodash/assign"
var assign_ = __webpack_require__(99226);
var assign_default = /*#__PURE__*/__webpack_require__.n(assign_);
// EXTERNAL MODULE: external "lodash/isNil"
var isNil_ = __webpack_require__(86069);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil_);
// EXTERNAL MODULE: external "lodash/has"
var has_ = __webpack_require__(98210);
var has_default = /*#__PURE__*/__webpack_require__.n(has_);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(42042);
// EXTERNAL MODULE: ./lib/currency-utils.js
var currency_utils = __webpack_require__(17632);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
;// CONCATENATED MODULE: ./lib/UrlQueryHelper.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * A tool to work with URL query parameters as generated by Next Router.
 */

class UrlQueryHelper {
  constructor(config) {
    this.config = config;
  }

  /**
   * Decode a query object as provided by router.query according to `config`
   * @param {object} queryObject
   */
  decode(queryObject) {
    const result = {};
    Object.entries(this.config).forEach(([key, param]) => {
      if (!has_default()(queryObject, key)) {
        return;
      } // Decode value


      const value = queryObject[key];
      const isAlias = param.type === 'alias';
      const targetKey = isAlias ? param.on : key;
      const fieldType = this.config[targetKey].type;
      const decoder = UrlQueryHelper.Decoders[fieldType];
      const decodedValue = decoder ? decoder(value) : value;
      result[targetKey] = param.modifier ? param.modifier(decodedValue) : decodedValue;
    });
    return result;
  }
  /**
   * Encode the values of `queryObject` to make it safe to pass in router.push
   * @param {object} queryObject
   */


  encode(queryObject) {
    const result = {};
    Object.entries(queryObject).forEach(([key, value]) => {
      const param = this.config[key];

      if (!param) {
        return;
      } // Encode value


      const isAlias = param.type === 'alias';
      const targetKey = isAlias ? param.on : key;
      const fieldType = this.config[targetKey].type;
      const encoder = UrlQueryHelper.Encoders[fieldType];
      const encodedValue = encoder ? encoder(value) : value; // If it's an aliased field, set the value on the referenced field

      result[targetKey] = encodedValue;
    });
    return result;
  }

}

_defineProperty(UrlQueryHelper, "Decoders", {
  /**
   * @param {string} str
   * @returns {number}
   */
  amount: str => {
    if (isNil_default()(str) || !str.length) {
      return null;
    } else {
      const result = (0,currency_utils/* floatAmountToCents */.VH)(parseFloat(str));
      return isNaN(result) ? null : result;
    }
  },

  /**
   * @param {string} str
   * @returns {boolean}
   */
  boolean: str => {
    return isNil_default()(str) || !str.length ? null : (0,utils/* parseToBoolean */.DD)(str, null);
  },

  /**
   * @param {string} str
   * @returns {string}
   */
  color: str => {
    if (!str) {
      return null;
    } else if (str.match(/^(?=\d*$)(?:.{3}|.{6}|.{8})$/)) {
      return `#${str}`; // Allow hex colors to be passed without the #
    } else {
      try {
        return (0,external_polished_.rgbToColorString)((0,external_polished_.parseToRgb)(str));
      } catch {// Ignore errors, will return null
      }
    }

    return null;
  },

  /**
   * @param {string} str
   * @returns {number}
   */
  integer: str => {
    if (isNil_default()(str) || !str.length) {
      return null;
    } else {
      const result = parseInt(str);
      return isNaN(result) || !Number.isSafeInteger(result) ? null : result;
    }
  },

  /**
   * @param {string} str
   * @returns {('month'|'year')}
   */
  interval: str => {
    if (!str) {
      return null;
    }

    const cleanStr = str.trim().replace(/ly$/, ''); // support for "monthly"/"yearly"

    return ['month', 'year', 'oneTime'].includes(cleanStr) ? cleanStr : null;
  },

  /**
   * @param {string} str
   * @returns {object}
   */
  json: str => {
    try {
      return JSON.parse(str);
    } catch (err) {
      return null;
    }
  },

  /**
   * @param {string} str
   * @returns {string[]}
   */
  stringArray: str => {
    return !str ? null : str.split(',');
  },

  /**
   * @param {string} str
   * @returns {number}
   */
  float: str => {
    if (isNil_default()(str) || !str.length) {
      return null;
    } else {
      const result = parseFloat(str);
      return isNaN(result) ? null : result;
    }
  }
});

_defineProperty(UrlQueryHelper, "Encoders", {
  /**
   * @param {number} value
   * @returns {string}
   */
  amount: value => (0,currency_utils/* centsAmountToFloat */.NP)(value)?.toString() || null,

  /**
   * @param {boolean} value
   * @returns {string}
   */
  boolean: value => value ? 'true' : 'false',

  /**
   * @param {number} value
   * @returns {number}
   */
  integer: value => value.toString(),

  /**
   * @param {object} str
   * @returns {string}
   */
  json: value => JSON.stringify(value),

  /**
   * @param {string[]} str
   * @returns {string}
   */
  stringArray: value => value.join(','),

  /**
   * @param {number} value
   * @returns {number}
   */
  float: value => value.toString()
});
;// CONCATENATED MODULE: ./components/contribution-flow/query-parameters.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { query_parameters_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function query_parameters_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * These attributes are documented using JSDoc to automatically generate
 * documentation for the contribution flow. You can re-generate them by running:
 * `npm run docs:generate:contribution-flow`
 */

const ContributionFlowUrlParametersConfig = {
  // ---- Public fields ----
  // -- Contribution

  /**
   * Default contribution amount
   * @example 42.42
   */
  amount: {
    type: 'amount'
  },

  /**
   * Default number of units (for products and tickets only)
   * @default 1
   * @example 5
   */
  quantity: {
    type: 'integer'
  },

  /**
   * The contribution interval (must be supported by the selected tier, if any)
   * @example 'month'
   */
  interval: {
    type: 'interval'
  },

  /**
   * ID of the payment method to use. Will fallback to another payment method if not available.
   */
  paymentMethod: {
    type: 'string'
  },
  // -- Profile

  /**
   * Slug of the default profile to use to contribute
   * @default Logged in user personal profile
   */
  contributeAs: {
    type: 'string'
  },

  /**
   * Guest contributions only: The email to use to contribute
   * @example test@opencollective.com
   */
  email: {
    type: 'string'
  },

  /**
   * Guest contributions only: The name to use to contribute
   * @example John Doe
   */
  name: {
    type: 'string'
  },

  /**
   * Guest contributions only: The legal name to use to contribute
   * @example John Doe
   */
  legalName: {
    type: 'string'
  },
  // -- Payment

  /** @private */
  hideCreditCardPostalCode: {
    type: 'boolean',
    static: true
  },

  /**
   * To disable specific payment method types
   * @example "MANUAL", "BANK_TRANSFER", "PAYMENT" (for PayPal)
   */
  disabledPaymentMethodTypes: {
    type: 'stringArray',
    static: true
  },
  // -- Success

  /**
   * The URL to redirect to after a successful contribution
   * @example https://www.example.com/thank-you
   */
  redirect: {
    type: 'string',
    static: true
  },
  // -- Misc metadata

  /** @private */
  customData: {
    type: 'json'
  },

  /**
   * Some tags to attach to the contribution
   * @example tag1,tag2
   */
  tags: {
    type: 'stringArray',
    static: true
  },

  /** To hide the steps on top. Will also hide the "previous" button on step payment */
  hideSteps: {
    type: 'boolean',
    static: true
  },
  // ---- Aliases for legacy compatibility ----

  /**
   * The default amount in cents
   * @deprecated Use `amount` instead
   * @example 4200
   */
  totalAmount: {
    type: 'alias',
    on: 'amount',
    modifier: value => Math.round(value / 100)
  },

  /** @deprecated Use `email` instead */
  defaultEmail: {
    type: 'alias',
    on: 'email'
  },

  /** @deprecated Use `name` instead */
  defaultName: {
    type: 'alias',
    on: 'name'
  },

  /** Cryptocurrency type; BTC, ETH etc **/
  cryptoCurrency: {
    type: 'string'
  },

  /** Cryptocurrency amount **/
  cryptoAmount: {
    type: 'float'
  }
};

const EmbedContributionFlowUrlParametersConfig = _objectSpread(_objectSpread({}, ContributionFlowUrlParametersConfig), {}, {
  /**
   * Whether we need to hide the right-column FAQ
   * @default false
   * @example true
   */
  hideFAQ: {
    type: 'boolean',
    static: true
  },

  /**
   * Whether we need to hide the contribution flow header
   * @default false
   * @example true
   */
  hideHeader: {
    type: 'boolean',
    static: true
  },

  /**
   * A custom color to use as the background color of the contribution flow
   * @example #ff0000
   */
  backgroundColor: {
    type: 'color',
    static: true
  },

  /**
   * Whether to use the collective theme (custom colors)
   * @default false
   * @example true
   */
  useTheme: {
    type: 'boolean',
    static: true
  },

  /**
   * Whether to redirect the parent of the iframe rather than the iframe itself. The `iframe` needs to have
   * its `sandbox` property set to `allow-top-navigation` for this to work.
   */
  shouldRedirectParent: {
    type: 'boolean',
    static: true
  }
}); // Params that are not meant to be changed during the flow and should be kept in the URL


const STATIC_PARAMS = Object.keys(ContributionFlowUrlParametersConfig).filter(key => ContributionFlowUrlParametersConfig[key].static);
const STATIC_PARAMS_EMBED = Object.keys(EmbedContributionFlowUrlParametersConfig).filter(key => EmbedContributionFlowUrlParametersConfig[key].static);
/**
 * Returns an un-sanitized version of the URL query parameters
 */

const stepsDataToUrlParamsData = (previousUrlParams, stepDetails, stepProfile, stepPayment, isCrypto, isEmbed) => {
  // Static params that are not meant to be changed during the flow
  const data = pick_default()(previousUrlParams, isEmbed ? STATIC_PARAMS_EMBED : STATIC_PARAMS); // Step details


  assign_default()(data, pick_default()(stepDetails, ['interval', 'quantity', 'customData']));

  if (isCrypto) {
    data.cryptoAmount = parseFloat(stepDetails.cryptoAmount) || previousUrlParams.cryptoAmount || 0;
    data.cryptoCurrency = stepDetails.currency?.value ? stepDetails.currency.value : previousUrlParams.cryptoCurrency;
  } else {
    data.amount = stepDetails.amount;
  } // Step profile


  if (stepProfile?.slug) {
    data.contributeAs = stepProfile.slug;
  } else {
    assign_default()(data, pick_default()(stepProfile, ['name', 'legalName', 'email']));
  } // Step payment


  if (stepPayment?.key) {
    data.paymentMethod = stepPayment.key;
  } // Remove entries that are set to their default values


  if (data.quantity === 1) {
    delete data.quantity;
  }

  return data;
};
const ContributionFlowUrlQueryHelper = new UrlQueryHelper(ContributionFlowUrlParametersConfig);
const EmbedContributionFlowUrlQueryHelper = new UrlQueryHelper(EmbedContributionFlowUrlParametersConfig);

/***/ }),

/***/ 45614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* binding */ NEW_CREDIT_CARD_KEY),
  "W2": () => (/* binding */ STRIPE_PAYMENT_ELEMENT_KEY),
  "ci": () => (/* binding */ contributionRequiresAddress),
  "Ak": () => (/* binding */ contributionRequiresLegalName),
  "oz": () => (/* binding */ generatePaymentMethodOptions),
  "E$": () => (/* binding */ getContributeProfiles),
  "Kr": () => (/* binding */ getContributionFlowMetadata),
  "DO": () => (/* binding */ getGQLV2AmountInput),
  "aU": () => (/* binding */ getTotalAmount),
  "Hq": () => (/* binding */ isSupportedInterval)
});

// EXTERNAL MODULE: external "lodash/uniqBy"
var uniqBy_ = __webpack_require__(69309);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy_);
// EXTERNAL MODULE: external "lodash/sortBy"
var sortBy_ = __webpack_require__(23672);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy_);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(89699);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: external "lodash/find"
var find_ = __webpack_require__(76918);
var find_default = /*#__PURE__*/__webpack_require__.n(find_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@styled-icons/fa-solid/CreditCard"
var CreditCard_ = __webpack_require__(55457);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/constants/collectives.js
var collectives = __webpack_require__(82525);
// EXTERNAL MODULE: ./lib/constants/intervals.js
var intervals = __webpack_require__(80642);
// EXTERNAL MODULE: ./lib/constants/payment-methods.js
var payment_methods = __webpack_require__(1808);
// EXTERNAL MODULE: ./lib/constants/roles.js
var roles = __webpack_require__(98216);
// EXTERNAL MODULE: ./lib/graphql/types/v2/graphql.ts
var graphql = __webpack_require__(97965);
// EXTERNAL MODULE: ./lib/payment_method_label.js
var payment_method_label = __webpack_require__(51515);
// EXTERNAL MODULE: ./lib/payment-method-utils.js
var payment_method_utils = __webpack_require__(91337);
;// CONCATENATED MODULE: ./lib/stripe/payment-methods.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
 // https://stripe.com/docs/api/payment_methods/create#create_payment_method-type

var StripePaymentMethod;

(function (StripePaymentMethod) {
  StripePaymentMethod["acss_debit"] = "acss_debit";
  StripePaymentMethod["afterpay_clearpay"] = "afterpay_clearpay";
  StripePaymentMethod["alipay"] = "alipay";
  StripePaymentMethod["au_becs_debit"] = "au_becs_debit";
  StripePaymentMethod["bacs_debit"] = "bacs_debit";
  StripePaymentMethod["bancontact"] = "bancontact";
  StripePaymentMethod["blik"] = "blik";
  StripePaymentMethod["boleto"] = "boleto";
  StripePaymentMethod["card"] = "card";
  StripePaymentMethod["customer_balance"] = "customer_balance";
  StripePaymentMethod["eps"] = "eps";
  StripePaymentMethod["fpx"] = "fpx";
  StripePaymentMethod["giropay"] = "giropay";
  StripePaymentMethod["grabpay"] = "grabpay";
  StripePaymentMethod["ideal"] = "ideal";
  StripePaymentMethod["klarna"] = "klarna";
  StripePaymentMethod["konbini"] = "konbini";
  StripePaymentMethod["link"] = "link";
  StripePaymentMethod["oxxo"] = "oxxo";
  StripePaymentMethod["p24"] = "p24";
  StripePaymentMethod["paynow"] = "paynow";
  StripePaymentMethod["pix"] = "pix";
  StripePaymentMethod["promptpay"] = "promptpay";
  StripePaymentMethod["sepa_debit"] = "sepa_debit";
  StripePaymentMethod["sofort"] = "sofort";
  StripePaymentMethod["us_bank_account"] = "us_bank_account";
  StripePaymentMethod["wechat_pay"] = "wechat_pay";
})(StripePaymentMethod || (StripePaymentMethod = {}));

const StripePaymentMethodsLabels = (0,external_react_intl_.defineMessages)({
  [StripePaymentMethod.acss_debit]: {
    id: "Stripe.PaymentMethod.Label.acss_debit",
    defaultMessage: [{
      "type": 0,
      "value": "ACSS Debit"
    }]
  },
  [StripePaymentMethod.afterpay_clearpay]: {
    id: "Stripe.PaymentMethod.Label.afterpay_clearpay",
    defaultMessage: [{
      "type": 0,
      "value": "Afterpay / Clearpay"
    }]
  },
  [StripePaymentMethod.alipay]: {
    id: "Stripe.PaymentMethod.Label.alipay",
    defaultMessage: [{
      "type": 0,
      "value": "Alipay"
    }]
  },
  [StripePaymentMethod.au_becs_debit]: {
    id: "Stripe.PaymentMethod.Label.au_becs_debit",
    defaultMessage: [{
      "type": 0,
      "value": "BECS Direct Debit"
    }]
  },
  [StripePaymentMethod.bacs_debit]: {
    id: "Stripe.PaymentMethod.Label.bacs_debit",
    defaultMessage: [{
      "type": 0,
      "value": "Bacs Direct Debit"
    }]
  },
  [StripePaymentMethod.bancontact]: {
    id: "Stripe.PaymentMethod.Label.bancontact",
    defaultMessage: [{
      "type": 0,
      "value": "Bancontact"
    }]
  },
  [StripePaymentMethod.blik]: {
    id: "Stripe.PaymentMethod.Label.blik",
    defaultMessage: [{
      "type": 0,
      "value": "BLIK"
    }]
  },
  [StripePaymentMethod.boleto]: {
    id: "Stripe.PaymentMethod.Label.boleto",
    defaultMessage: [{
      "type": 0,
      "value": "Boleto"
    }]
  },
  [StripePaymentMethod.card]: {
    id: "Stripe.PaymentMethod.Label.card",
    defaultMessage: [{
      "type": 0,
      "value": "Card"
    }]
  },
  [StripePaymentMethod.customer_balance]: {
    id: "Stripe.PaymentMethod.Label.customer_balance",
    defaultMessage: [{
      "type": 0,
      "value": "Stripe Balance"
    }]
  },
  [StripePaymentMethod.eps]: {
    id: "Stripe.PaymentMethod.Label.eps",
    defaultMessage: [{
      "type": 0,
      "value": "EPS"
    }]
  },
  [StripePaymentMethod.fpx]: {
    id: "Stripe.PaymentMethod.Label.fpx",
    defaultMessage: [{
      "type": 0,
      "value": "FPX"
    }]
  },
  [StripePaymentMethod.giropay]: {
    id: "Stripe.PaymentMethod.Label.giropay",
    defaultMessage: [{
      "type": 0,
      "value": "giropay"
    }]
  },
  [StripePaymentMethod.grabpay]: {
    id: "Stripe.PaymentMethod.Label.grabpay",
    defaultMessage: [{
      "type": 0,
      "value": "GrabPay"
    }]
  },
  [StripePaymentMethod.ideal]: {
    id: "Stripe.PaymentMethod.Label.ideal",
    defaultMessage: [{
      "type": 0,
      "value": "iDEAL"
    }]
  },
  [StripePaymentMethod.klarna]: {
    id: "Stripe.PaymentMethod.Label.klarna",
    defaultMessage: [{
      "type": 0,
      "value": "Klarna"
    }]
  },
  [StripePaymentMethod.konbini]: {
    id: "Stripe.PaymentMethod.Label.konbini",
    defaultMessage: [{
      "type": 0,
      "value": "Konbini"
    }]
  },
  [StripePaymentMethod.link]: {
    id: "Stripe.PaymentMethod.Label.link",
    defaultMessage: [{
      "type": 0,
      "value": "Link"
    }]
  },
  [StripePaymentMethod.oxxo]: {
    id: "Stripe.PaymentMethod.Label.oxxo",
    defaultMessage: [{
      "type": 0,
      "value": "OXXO"
    }]
  },
  [StripePaymentMethod.p24]: {
    id: "Stripe.PaymentMethod.Label.p24",
    defaultMessage: [{
      "type": 0,
      "value": "Przelewy24"
    }]
  },
  [StripePaymentMethod.paynow]: {
    id: "Stripe.PaymentMethod.Label.paynow",
    defaultMessage: [{
      "type": 0,
      "value": "PayNow"
    }]
  },
  [StripePaymentMethod.pix]: {
    id: "Stripe.PaymentMethod.Label.pix",
    defaultMessage: [{
      "type": 0,
      "value": "Pix"
    }]
  },
  [StripePaymentMethod.promptpay]: {
    id: "Stripe.PaymentMethod.Label.promptpay",
    defaultMessage: [{
      "type": 0,
      "value": "PromptPay"
    }]
  },
  [StripePaymentMethod.sepa_debit]: {
    id: "Stripe.PaymentMethod.Label.sepa_debit",
    defaultMessage: [{
      "type": 0,
      "value": "SEPA Direct Debit"
    }]
  },
  [StripePaymentMethod.sofort]: {
    id: "Stripe.PaymentMethod.Label.sofort",
    defaultMessage: [{
      "type": 0,
      "value": "Sofort"
    }]
  },
  [StripePaymentMethod.us_bank_account]: {
    id: "Stripe.PaymentMethod.Label.us_bank_account",
    defaultMessage: [{
      "type": 0,
      "value": "ACH Direct Debit"
    }]
  },
  [StripePaymentMethod.wechat_pay]: {
    id: "Stripe.PaymentMethod.Label.wechat_pay",
    defaultMessage: [{
      "type": 0,
      "value": "WeChat Pay"
    }]
  }
});
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/icons/CustomStyledIcon.js
var CustomStyledIcon = __webpack_require__(50333);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/icons/CreditCardInactive.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const CreditCardInactive = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CustomStyledIcon/* default */.Z, _objectSpread(_objectSpread({
    width: 26,
    height: 18,
    viewBox: "0 0 26 18",
    fill: "none"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "26",
      height: "18",
      rx: "3",
      fill: "#D5DAE0"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "18",
      y: "12",
      width: "4",
      height: "2",
      rx: "1",
      fill: "#A5ADB8"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "13",
      y: "12",
      width: "4",
      height: "2",
      rx: "1",
      fill: "#A5ADB8"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "8",
      y: "12",
      width: "4",
      height: "2",
      rx: "1",
      fill: "#A5ADB8"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "3",
      y: "12",
      width: "4",
      height: "2",
      rx: "1",
      fill: "#A5ADB8"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "3",
      y: "3",
      width: "8",
      height: "6",
      rx: "2",
      fill: "white"
    })]
  }));
};

CreditCardInactive.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreditCardInactive"
};
/* harmony default export */ const icons_CreditCardInactive = (CreditCardInactive);
;// CONCATENATED MODULE: ./components/contribution-flow/utils.js






function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? utils_ownKeys(Object(source), !0).forEach(function (key) { utils_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function utils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const NEW_CREDIT_CARD_KEY = 'newCreditCard';
const STRIPE_PAYMENT_ELEMENT_KEY = 'stripe-payment-element';
const PAYPAL_MAX_AMOUNT = 999999999; // See MAX_VALUE_EXCEEDED https://developer.paypal.com/api/rest/reference/orders/v2/errors/#link-createorder

const memberCanBeUsedToContribute = (member, account) => {
  if (member.role !== roles/* default.ADMIN */.Z.ADMIN) {
    return false;
  } else if ([collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE, collectives/* CollectiveType.FUND */.eV.FUND].includes(member.collective.type) && member.collective.host?.id !== account.host.legacyId) {
    // If the contributing account is fiscally hosted, the host must be the same as the one you're contributing to
    return false;
  } else {
    return true;
  }
};

const getContributeProfiles = (loggedInUser, collective) => {
  if (!loggedInUser) {
    return [];
  } else {
    const filteredMembers = loggedInUser.memberOf.filter(member => memberCanBeUsedToContribute(member, collective));

    const personalProfile = utils_objectSpread({
      email: loggedInUser.email,
      image: loggedInUser.image
    }, loggedInUser.collective);

    const contributorProfiles = [personalProfile];
    filteredMembers.forEach(member => {
      // Account can't contribute to itself
      if (member.collective.id !== collective.legacyId) {
        contributorProfiles.push(member.collective);
      }

      if (!isEmpty_default()(member.collective.children)) {
        const childrenOfSameHost = member.collective.children.filter(child => child.host.id === collective.host.legacyId);
        contributorProfiles.push(...childrenOfSameHost);
      }
    });
    return uniqBy_default()([personalProfile, ...contributorProfiles], 'id');
  }
};
const generatePaymentMethodOptions = (intl, paymentMethods, stepProfile, stepDetails, stepSummary, collective, isEmbed, disabledPaymentMethodTypes, paymentIntent) => {
  const supportedPaymentMethods = get_default()(collective, 'host.supportedPaymentMethods', []);

  const hostHasManual = supportedPaymentMethods.includes(payment_methods/* GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.BANK_TRANSFER */.fY.BANK_TRANSFER);
  const hostHasPaypal = supportedPaymentMethods.includes(payment_methods/* GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.PAYPAL */.fY.PAYPAL);
  const hostHasStripe = supportedPaymentMethods.includes(payment_methods/* GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.CREDIT_CARD */.fY.CREDIT_CARD);
  const totalAmount = getTotalAmount(stepDetails, stepSummary);

  const interval = get_default()(stepDetails, 'interval', null);

  const paymentMethodsOptions = paymentMethods.map(pm => ({
    id: pm.id,
    key: `pm-${pm.id}`,
    title: (0,payment_method_label/* getPaymentMethodName */.d0)(pm),
    subtitle: (0,payment_method_utils/* getPaymentMethodMetadata */.Og)(pm, totalAmount),
    icon: (0,payment_method_utils/* getPaymentMethodIcon */.AM)(pm, pm.account),
    disabled: (0,payment_method_utils/* isPaymentMethodDisabled */.DE)(pm, totalAmount),
    paymentMethod: pm
  }));

  let uniquePMs = uniqBy_default()(paymentMethodsOptions, 'id');

  uniquePMs = uniquePMs.filter(({
    paymentMethod
  }) => paymentMethod.type !== payment_methods/* PAYMENT_METHOD_TYPE.COLLECTIVE */.td.COLLECTIVE || collective.host.legacyId === stepProfile.host?.id);

  if (paymentIntent) {
    const allowedStripeTypes = [...paymentIntent.payment_method_types];

    if (allowedStripeTypes.includes('card')) {
      allowedStripeTypes.push('creditcard'); // we store this type as creditcard
    }

    uniquePMs = uniquePMs.filter(({
      paymentMethod
    }) => {
      if (paymentMethod.service !== graphql/* PaymentMethodService.STRIPE */.Xk.STRIPE) {
        return true;
      }

      return allowedStripeTypes.includes(paymentMethod.type.toLowerCase()) && (!paymentMethod?.data?.stripeAccount || paymentMethod?.data?.stripeAccount === paymentIntent.stripeAccount);
    });
  } else {
    uniquePMs = uniquePMs.filter(({
      paymentMethod
    }) => {
      if (paymentMethod.service !== graphql/* PaymentMethodService.STRIPE */.Xk.STRIPE) {
        return true;
      }

      return paymentMethod.type === graphql/* PaymentMethodType.CREDITCARD */.Lt.CREDITCARD && !paymentMethod?.data?.stripeAccount;
    });
  } // prepaid budget: limited to a specific host


  const matchesHostCollectiveIdPrepaid = prepaid => {
    const hostCollectiveLegacyId = get_default()(collective, 'host.legacyId');

    const prepaidLimitedToHostCollectiveIds = get_default()(prepaid, 'limitedToHosts');

    if (prepaidLimitedToHostCollectiveIds?.length) {
      return find_default()(prepaidLimitedToHostCollectiveIds, {
        legacyId: hostCollectiveLegacyId
      });
    } else {
      return prepaid.data?.HostCollectiveId && prepaid.data.HostCollectiveId === hostCollectiveLegacyId;
    }
  }; // gift card: can be limited to a specific host, see limitedToHosts


  const matchesHostCollectiveId = giftcard => {
    const hostCollectiveId = get_default()(collective, 'host.id');

    const giftcardLimitedToHostCollectiveIds = get_default()(giftcard, 'limitedToHosts');

    return find_default()(giftcardLimitedToHostCollectiveIds, {
      id: hostCollectiveId
    });
  };

  uniquePMs = uniquePMs.filter(({
    paymentMethod
  }) => {
    const sourcePaymentMethod = paymentMethod.sourcePaymentMethod || paymentMethod;
    const sourceType = sourcePaymentMethod.type;
    const isGiftCard = paymentMethod.type === payment_methods/* PAYMENT_METHOD_TYPE.GIFTCARD */.td.GIFTCARD;
    const isSourcePrepaid = sourceType === payment_methods/* PAYMENT_METHOD_TYPE.PREPAID */.td.PREPAID;
    const isSourceCreditCard = sourceType === payment_methods/* PAYMENT_METHOD_TYPE.CREDITCARD */.td.CREDITCARD;

    if (disabledPaymentMethodTypes?.includes(paymentMethod.type)) {
      return false;
    } else if (isGiftCard && paymentMethod.limitedToHosts) {
      return matchesHostCollectiveId(paymentMethod);
    } else if (isSourcePrepaid) {
      return matchesHostCollectiveIdPrepaid(sourcePaymentMethod);
    } else if (!hostHasStripe && isSourceCreditCard) {
      return false;
    } else {
      return true;
    }
  }); // Put disabled PMs at the end

  uniquePMs = sortBy_default()(uniquePMs, ['disabled', 'paymentMethod.providerType', 'id']);
  const balanceOnlyCollectiveTypes = [collectives/* CollectiveType.COLLECTIVE */.eV.COLLECTIVE, collectives/* CollectiveType.EVENT */.eV.EVENT, collectives/* CollectiveType.PROJECT */.eV.PROJECT, collectives/* CollectiveType.FUND */.eV.FUND]; // adding payment methods

  if (!balanceOnlyCollectiveTypes.includes(stepProfile.type)) {
    if (paymentIntent) {
      let availableMethodLabels = paymentIntent.payment_method_types.map(method => {
        return intl.formatMessage(StripePaymentMethodsLabels[method]);
      });

      if (availableMethodLabels.length > 3) {
        availableMethodLabels = [...availableMethodLabels.slice(0, 3), 'etc'];
      }

      const title = /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "jwtunf",
        defaultMessage: [{
          "type": 0,
          "value": "New payment method: "
        }, {
          "type": 1,
          "value": "methods"
        }],
        values: {
          methods: availableMethodLabels.join(', ')
        }
      });

      uniquePMs.unshift({
        key: STRIPE_PAYMENT_ELEMENT_KEY,
        title: title,
        icon: /*#__PURE__*/jsx_runtime_.jsx(CreditCard_.CreditCard, {
          color: "#c9ced4",
          size: '1.5em'
        }),
        paymentMethod: {
          service: payment_methods/* PAYMENT_METHOD_SERVICE.STRIPE */.tp.STRIPE,
          type: payment_methods/* PAYMENT_METHOD_TYPE.STRIPE_ELEMENTS */.td.STRIPE_ELEMENTS
        }
      });
    }

    const paymentIntentIncludesCard = paymentIntent && paymentIntent.payment_method_types.includes('card');

    if (hostHasStripe && !paymentIntentIncludesCard) {
      // New credit card
      uniquePMs.push({
        key: NEW_CREDIT_CARD_KEY,
        title: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "contribute.newcreditcard",
          defaultMessage: [{
            "type": 0,
            "value": "New credit/debit card"
          }]
        }),
        icon: /*#__PURE__*/jsx_runtime_.jsx(icons_CreditCardInactive, {})
      });
    } // Paypal


    if (hostHasPaypal && !disabledPaymentMethodTypes?.includes(payment_methods/* PAYMENT_METHOD_TYPE.PAYMENT */.td.PAYMENT)) {
      const isDisabled = totalAmount > PAYPAL_MAX_AMOUNT;
      uniquePMs.push({
        key: 'paypal',
        title: 'PayPal',
        disabled: isDisabled,
        subtitle: isDisabled ? 'Maximum amount exceeded' : null,
        paymentMethod: {
          service: payment_methods/* PAYMENT_METHOD_SERVICE.PAYPAL */.tp.PAYPAL,
          type: payment_methods/* PAYMENT_METHOD_TYPE.PAYMENT */.td.PAYMENT
        },
        icon: (0,payment_method_utils/* getPaymentMethodIcon */.AM)({
          service: payment_methods/* PAYMENT_METHOD_SERVICE.PAYPAL */.tp.PAYPAL,
          type: payment_methods/* PAYMENT_METHOD_TYPE.PAYMENT */.td.PAYMENT
        })
      });
    }

    if (interval === intervals["default"].oneTime && !isEmbed && supportedPaymentMethods.includes(payment_methods/* GQLV2_SUPPORTED_PAYMENT_METHOD_TYPES.ALIPAY */.fY.ALIPAY) && !disabledPaymentMethodTypes?.includes(payment_methods/* PAYMENT_METHOD_TYPE.ALIPAY */.td.ALIPAY)) {
      uniquePMs.push({
        key: 'alipay',
        paymentMethod: {
          service: payment_methods/* PAYMENT_METHOD_SERVICE.STRIPE */.tp.STRIPE,
          type: payment_methods/* PAYMENT_METHOD_TYPE.ALIPAY */.td.ALIPAY
        },
        title: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "Stripe.PaymentMethod.Label.alipay",
          defaultMessage: [{
            "type": 0,
            "value": "Alipay"
          }]
        }),
        icon: (0,payment_method_utils/* getPaymentMethodIcon */.AM)({
          service: payment_methods/* PAYMENT_METHOD_SERVICE.STRIPE */.tp.STRIPE,
          type: payment_methods/* PAYMENT_METHOD_TYPE.ALIPAY */.td.ALIPAY
        })
      });
    } // Manual (bank transfer)


    if (hostHasManual && intervals["default"].oneTime && !disabledPaymentMethodTypes?.includes(payment_methods/* PAYMENT_METHOD_TYPE.MANUAL */.td.MANUAL)) {
      uniquePMs.push({
        key: 'manual',
        title: get_default()(collective, 'host.settings.paymentMethods.manual.title', null) || /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "ycoJnS",
          defaultMessage: [{
            "type": 0,
            "value": "Bank transfer (manual)"
          }]
        }),
        paymentMethod: {
          service: payment_methods/* PAYMENT_METHOD_SERVICE.OPENCOLLECTIVE */.tp.OPENCOLLECTIVE,
          type: payment_methods/* PAYMENT_METHOD_TYPE.MANUAL */.td.MANUAL
        },
        icon: (0,payment_method_utils/* getPaymentMethodIcon */.AM)({
          service: payment_methods/* PAYMENT_METHOD_SERVICE.OPENCOLLECTIVE */.tp.OPENCOLLECTIVE,
          type: payment_methods/* PAYMENT_METHOD_TYPE.MANUAL */.td.MANUAL
        }),
        instructions: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "NewContributionFlow.bankInstructions",
          defaultMessage: [{
            "type": 0,
            "value": "Instructions to make a transfer will be given on the next page."
          }]
        })
      });
    }
  }

  return uniquePMs;
};
const getTotalAmount = (stepDetails, stepSummary = null, isCrypto = false) => {
  const quantity = get_default()(stepDetails, 'quantity', 1);

  const amount = isCrypto ? get_default()(stepDetails, 'cryptoAmount', 0) : get_default()(stepDetails, 'amount', 0);

  const taxAmount = get_default()(stepSummary, 'amount', 0);

  const platformFeeAmount = !isCrypto ? get_default()(stepDetails, 'platformTip', 0) : 0;
  return quantity * amount + platformFeeAmount + taxAmount;
};
const getGQLV2AmountInput = (valueInCents, defaultValue) => {
  if (valueInCents) {
    return {
      valueInCents
    };
  } else if (typeof defaultValue === 'number') {
    return {
      valueInCents: defaultValue
    };
  } else {
    return defaultValue;
  }
};

const getCanonicalURL = (collective, tier) => {
  if (!tier) {
    return `${(0,utils/* getWebsiteUrl */.ls)()}/${collective.slug}/donate`;
  } else if (collective.type === collectives/* CollectiveType.EVENT */.eV.EVENT) {
    const parentSlug = get_default()(collective.parent, 'slug', collective.slug);

    return `${(0,utils/* getWebsiteUrl */.ls)()}/${parentSlug}/events/${collective.slug}/order/${tier.id}`;
  } else {
    return `${(0,utils/* getWebsiteUrl */.ls)()}/${collective.slug}/contribute/${tier.slug}-${tier.id}/checkout`;
  }
};

const PAGE_META_MSGS = (0,external_react_intl_.defineMessages)({
  collectiveTitle: {
    id: "CreateOrder.Title",
    defaultMessage: [{
      "type": 0,
      "value": "Contribute to "
    }, {
      "type": 1,
      "value": "collective"
    }]
  },
  eventTitle: {
    id: "CreateOrder.TitleForEvent",
    defaultMessage: [{
      "type": 0,
      "value": "Order tickets for "
    }, {
      "type": 1,
      "value": "event"
    }]
  }
});
const getContributionFlowMetadata = (intl, account, tier) => {
  const baseMetadata = (0,collective_lib/* getCollectivePageMetadata */.Xq)(account);

  if (!account) {
    return utils_objectSpread(utils_objectSpread({}, baseMetadata), {}, {
      title: 'Contribute'
    });
  }

  return utils_objectSpread(utils_objectSpread({}, baseMetadata), {}, {
    canonicalURL: getCanonicalURL(account, tier),
    noRobots: false,
    title: account.type === collectives/* CollectiveType.EVENT */.eV.EVENT ? intl.formatMessage(PAGE_META_MSGS.eventTitle, {
      event: account.name
    }) : intl.formatMessage(PAGE_META_MSGS.collectiveTitle, {
      collective: account.name
    })
  });
};
const isSupportedInterval = (collective, tier, user, interval) => {
  // Interval must be set
  if (!interval) {
    return false;
  } // Enforce for fixed interval tiers


  const isFixedInterval = tier?.interval && tier.interval !== intervals["default"].flexible;

  if (isFixedInterval && tier.interval !== interval) {
    return false;
  } // If not fixed, one time is always supported


  if (interval === intervals["default"].oneTime) {
    return true;
  } // Enforce for recurring


  return (0,collective_lib/* canContributeRecurring */.nu)(collective, user);
};

const getTotalYearlyAmount = stepDetails => {
  const totalAmount = getTotalAmount(stepDetails);
  return totalAmount && stepDetails?.interval === intervals["default"].month ? totalAmount * 12 : totalAmount;
};
/**
 * Whether this contribution requires us to collect the address of the user
 */


const contributionRequiresAddress = stepDetails => {
  return stepDetails?.currency === 'USD' && getTotalYearlyAmount(stepDetails) >= 5000e2;
};
/**
 * Whether this contribution requires us to collect the address and legal name of the user
 */

const contributionRequiresLegalName = stepDetails => {
  return stepDetails?.currency === 'USD' && getTotalYearlyAmount(stepDetails) >= 500e2;
};

/***/ }),

/***/ 46217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ formatAccountDetails)
/* harmony export */ });
/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19358);
/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_toUpper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35007);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_1__);


const formatAccountDetails = payoutMethodData => {
  const ignoredKeys = ['type', 'isManualBankTransfer', 'currency'];
  const labels = {
    abartn: 'Routing Number: ',
    firstLine: ''
  };

  const formatKey = s => {
    if (labels[s] !== undefined) {
      return labels[s];
    }

    if (lodash_toUpper__WEBPACK_IMPORTED_MODULE_0___default()(s) === s) {
      return `${s}: `;
    }

    return `${lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default()(s)}: `;
  };

  const renderObject = (object, prefix = '') => Object.entries(object).sort(a => typeof a[1] === 'object' ? 1 : -1).reduce((acc, [key, value]) => {
    if (ignoredKeys.includes(key)) {
      return acc;
    }

    if (typeof value === 'object') {
      if (key === 'details') {
        return [...acc, ...renderObject(value, '')];
      }

      return [...acc, formatKey(key), ...renderObject(value, '  ')];
    }

    return [...acc, `${prefix}${formatKey(key)}${value}`];
  }, []);

  const lines = renderObject(payoutMethodData);
  return lines.join('\n');
};

/***/ }),

/***/ 43188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74770);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88705);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92129);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51082);
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99849);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
const _excluded = ["collective", "isCrypto"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/**
 * FAQ associated to the new contribution flow.
 */




const ContributeFAQ = _ref => {
  let {
    collective,
    isCrypto
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
    withBorderLeft: true,
    withNewButtons: true
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Entry */ .kS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .Dx, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "NewContributionFlow.FAQ.Secure.Title",
          defaultMessage: [{
            "type": 0,
            "value": "Is my contribution secure?"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
        children: isCrypto ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributeFAQ.Safe.Crypto",
          defaultMessage: [{
            "type": 0,
            "value": "Open Collective doesn't store any private information about your crypto wallet and relies on Giving Block to manage the crypto payments. If our systems are compromised your information is not at risk since we don't store any. For more information about the data that Giving Block stores please visit their "
          }, {
            "type": 8,
            "value": "PrivacyPolicy",
            "children": [{
              "type": 0,
              "value": "privacy policy"
            }]
          }, {
            "type": 0,
            "value": "."
          }],
          values: {
            PrivacyPolicy: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* .getI18nLink */ .fw)({
              openInNewTab: true,
              href: 'https://www.thegivingblock.com/privacypolicy'
            })
          }
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
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
            LearnMoreLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* .getI18nLink */ .fw)({
              openInNewTab: true,
              href: 'https://docs.opencollective.com/help/product/security#payments-security'
            })
          }
        })
      })]
    }), (collective.contributionPolicy || collective.parent?.contributionPolicy) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Entry */ .kS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .Dx, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributeFAQ.Policy.Title",
          defaultMessage: [{
            "type": 0,
            "value": "Does "
          }, {
            "type": 1,
            "value": "name"
          }, {
            "type": 0,
            "value": " have a contribution policy?"
          }],
          values: {
            name: collective.name
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
        children: [collective.contributionPolicy && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          fontSize: "13px",
          content: collective.contributionPolicy
        }), collective.parent?.contributionPolicy && collective.parent.contributionPolicy !== collective.contributionPolicy && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          fontSize: "13px",
          content: collective.parent?.contributionPolicy
        })]
      })]
    }), collective.host.contributionPolicy && collective.name !== collective.host.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Entry */ .kS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .Dx, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributeFAQ.Policy.Title",
          defaultMessage: [{
            "type": 0,
            "value": "Does "
          }, {
            "type": 1,
            "value": "name"
          }, {
            "type": 0,
            "value": " have a contribution policy?"
          }],
          values: {
            name: collective.host.name
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          fontSize: "13px",
          content: collective.host.contributionPolicy
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Entry */ .kS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .Dx, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "createProfile.faq.persoVSOrg.title",
          defaultMessage: [{
            "type": 0,
            "value": "What's the difference between an individual and an organization profile?"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "createProfile.faq.persoVsOrg.content",
          defaultMessage: [{
            "type": 0,
            "value": "Organizations represent a company or entity, while individual profiles represent a person. Organization profiles can have multiple team members (individual profiles) who have access to edit it and make financial contributions in its name. If a contribution or expense is for a company, it's important to use an organization profile so the correct billing information shows up on receipts and invoices. Organizations can also issue gift cards."
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Entry */ .kS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .Dx, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "Ntwzwf",
          defaultMessage: [{
            "type": 0,
            "value": "What information is shared with the Collectives?"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "LfwUBd",
          defaultMessage: [{
            "type": 0,
            "value": "When you contribute to a Collective we share your email address with the Administrators. If you wish to keep your contribution private choose the ‘incognito’ profile. Read our "
          }, {
            "type": 8,
            "value": "PrivacyPolicyLink",
            "children": [{
              "type": 0,
              "value": "privacy policy"
            }]
          }, {
            "type": 0,
            "value": "."
          }],
          values: {
            PrivacyPolicyLink: (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* .getI18nLink */ .fw)({
              href: '/privacypolicy',
              openInNewTab: true,
              as: _Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
            })
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Entry */ .kS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .Dx, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributeDetails.faq.isIncognito.title",
          defaultMessage: [{
            "type": 0,
            "value": "What is an incognito contribution?"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributeDetails.faq.isIncognito.content",
          defaultMessage: [{
            "type": 0,
            "value": "Publicly, the contribution amount and date will be visible in the transparent budget, but your identity will be obscured, appearing only as \"incognito\". The contribution will not be linked to your public profile."
          }]
        })
      })]
    }), isCrypto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Entry */ .kS, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Title */ .Dx, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributeDetails.faq.theGivingBlock.title",
          defaultMessage: [{
            "type": 0,
            "value": "What is The Giving Block?"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "ContributeDetails.faq.theGivingBlock.content",
          defaultMessage: [{
            "type": 0,
            "value": "We’ve partnered with The Giving Block to enable you to donate using your cryptocurrency. You will need to send your contribution to the wallet address generated by The Giving Block after filling in the form. Contributions are immediately settled in the currency of the Collective once confirmed by the ledger."
          }]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
      mt: 2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_StyledLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        as: _StyledLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        href: "https://docs.opencollective.com/help/financial-contributors/payments#financial-contribution-flow",
        openInNewTab: true,
        fontSize: "12px",
        color: "black.700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
          id: "moreInfo",
          defaultMessage: [{
            "type": 0,
            "value": "More info"
          }]
        }), "\xA0\u2192"]
      })
    })]
  }));
};

ContributeFAQ.__docgenInfo = {
  "description": "FAQ associated to the new contribution flow.",
  "methods": [],
  "displayName": "ContributeFAQ",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "name": {
            "name": "string",
            "required": false
          },
          "contributionPolicy": {
            "name": "string",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": false
              },
              "contributionPolicy": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "name": {
                "name": "string",
                "required": false
              },
              "contributionPolicy": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "isCrypto": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContributeFAQ);

/***/ }),

/***/ 99849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ Title),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "Z0": () => (/* binding */ Separator),
/* harmony export */   "ZP": () => (/* binding */ FAQ),
/* harmony export */   "kS": () => (/* binding */ Entry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87208);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29872);
/* harmony import */ var _styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["children"],
      _excluded2 = ["title", "children", "withBorderLeft", "withNewButtons", "titleProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











/** Main entry container */



const Entry = styled_components__WEBPACK_IMPORTED_MODULE_5___default().details.withConfig({
  displayName: "FAQ__Entry",
  componentId: "sc-1qzv7kx-0"
})(["&[open]{border-color:", ";summary::after{content:'\u2212';}}summary{padding-top:", "px;padding-bottom:", "px;font-size:13px;font-weight:500;color:", ";list-style:none;&:hover{color:", ";}button{display:none;}}summary:focus{outline:1px dashed ", ";outline-offset:", "px;}summary::after{content:'+';display:inline-block;padding-left:", "px;color:", ";font-weight:bold;}summary::-webkit-details-marker{display:none;}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.800'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.700'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.200'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.1'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('space.2'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.600'));
const CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "FAQ__CollapseBtn",
  componentId: "sc-1qzv7kx-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #dcdee0;svg{stroke-width:1.5;}[data-item='chevron-up']{margin-top:-5%;}[data-item='chevron-down']{margin-top:5%;}", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_6__.size, styled_system__WEBPACK_IMPORTED_MODULE_6__.space);
/** Entry title */

const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("summary", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(CollapseBtn, {
      size: 18,
      ml: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_ChevronUp_ChevronUp__WEBPACK_IMPORTED_MODULE_2__.ChevronUp, {
        size: "1em",
        "data-item": "chevron-up",
        style: {
          marginTop: -1
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_1__.ChevronDown, {
        size: "1em",
        "data-item": "chevron-down"
      })]
    })]
  }));
}).withConfig({
  displayName: "FAQ__Title",
  componentId: "sc-1qzv7kx-2"
})(["cursor:pointer;display:flex;justify-content:space-between;align-items:baseline;"]);
/** Entry content (hidden by default) */

const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .xu).withConfig({
  displayName: "FAQ__Content",
  componentId: "sc-1qzv7kx-3"
})([""]);
Content.defaultProps = {
  py: 2,
  fontSize: '13px',
  color: 'black.600'
};
const Separator = styled_components__WEBPACK_IMPORTED_MODULE_5___default().hr.withConfig({
  displayName: "FAQ__Separator",
  componentId: "sc-1qzv7kx-4"
})(["background:", ";width:100%;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.400'));
/** A simple wrapper to group entries */

const EntryContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "FAQ__EntryContainer",
  componentId: "sc-1qzv7kx-5"
})(["", "{", " ", "}"], Entry, props => props.withNewButtons ? (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["[data-item='chevron-up']{display:none;}&[open]{[data-item='chevron-up']{display:inline-block;}[data-item='chevron-down']{display:none;}}summary::after{display:none;}button{display:block;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["", "{display:none;}"], CollapseBtn), props => props.withBorderLeft && (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.css)(["border-left:1px solid #dcdee0;padding-left:8px;&:focus-within,&:hover{border-color:", ";}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.primary.500')));
/**
 * A small FAQ with expendable contents.
 */

class FAQ extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const _this$props = this.props,
          {
      title,
      children,
      withBorderLeft,
      withNewButtons,
      titleProps
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded2);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, props), {}, {
      children: [title !== null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__.P, _objectSpread(_objectSpread({
        fontWeight: "bold",
        mb: 1,
        color: "black.900"
      }, titleProps), {}, {
        children: title || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "FAQ",
          defaultMessage: [{
            "type": 0,
            "value": "FAQ"
          }]
        })
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(EntryContainer, {
        withBorderLeft: withBorderLeft,
        withNewButtons: withNewButtons,
        children: children
      })]
    }));
  }

}
FAQ.__docgenInfo = {
  "description": "A small FAQ with expendable contents.",
  "methods": [],
  "displayName": "FAQ",
  "props": {
    "children": {
      "description": "",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "title": {
      "description": "The title to display above entries. Set to null to disable it.",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "titleProps": {
      "description": "Props for styling the title",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "withBorderLeft": {
      "description": "If true, a border will be displayed on the left",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "withNewButtons": {
      "description": "If true, will display a button with a chevron instead of the `+` sign",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  },
  "composes": ["../Grid"]
};

/***/ }),

/***/ 19196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ confettiFireworks)
/* harmony export */ });
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Produce an animated fireworks with confettis popping all over the screen that slowly
 * fade out. For big celebrations, like a successful order or a collective freshly created.
 * Can only be used client-side.
 *
 * @param {number} durationInMilliseconds: duration for the full animation
 * @param {object} libConfettiParams: passed down to `canvas-confetti`
 */

const confettiFireworks = (durationInMilliseconds = 10000, libConfettiParams = {}) => {
  const animationEnd = Date.now() + durationInMilliseconds;

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const confettisParams = _objectSpread({
    disableForReducedMotion: true,
    // see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
  }, libConfettiParams);

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    } else {
      const particleCount = 50 * (timeLeft / durationInMilliseconds);
      canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount,
        origin: {
          x: randomInRange(0, 0.3),
          y: Math.random() - 0.2
        }
      }));
      canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, confettisParams), {}, {
        particleCount,
        origin: {
          x: randomInRange(0.7, 1),
          y: Math.random() - 0.2
        }
      }));
    }
  }, 250);
};

/***/ }),

/***/ 15084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ MODERATION_CATEGORIES),
/* harmony export */   "l": () => (/* binding */ MODERATION_CATEGORIES_ALIASES)
/* harmony export */ });
const MODERATION_CATEGORIES = {
  ADULT: 'Adult websites',
  AFFILIATE_REVIEW: 'Affiliate and review websites',
  // creating “review” pages for the sake of linking to Amazon
  CASINO_GAMBLING: 'Casinos and gambling',
  FINANCE_INSURANCE: 'Insurance & financial products (credit)',
  PHARMACY: 'Pharmacy products (weight loss, anti-aging)',
  SEO_AUDIENCE: 'SEO services & social media buying',
  // black-hat SEO services
  VPN_PROXY: 'VPN and proxy services',
  WRITER: 'Essay writing services'
};
const MODERATION_CATEGORIES_ALIASES = {
  ADULT: ['adult'],
  AFFILIATE_REVIEW: ['affiliate', 'review'],
  CASINO_GAMBLING: ['casino', 'gambling'],
  FINANCE_INSURANCE: ['finance', 'insurance', 'credit'],
  PHARMACY: ['pharmacy', 'pills', 'weightloss'],
  SEO_AUDIENCE: ['seo', 'audience'],
  VPN_PROXY: ['vpn', 'proxy'],
  WRITER: ['writer']
};

/***/ }),

/***/ 28330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export propTypeCountry */
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);

const propTypeCountry = (props, propName, componentName) => {
  if (props[propName] === undefined || props[propName] === null) {
    return false;
  }

  if (props[propName].length !== 2 || !isUppercase(props[propName])) {
    return new Error(`Invalid prop "${propName}" supplied to "${componentName}". Expected a two letters, uppercase country code.`);
  }

  return false;
};

/***/ }),

/***/ 77769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1808);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const PAYMENT_TYPES_WITHOUT_FEES = new Set([_constants_payment_methods__WEBPACK_IMPORTED_MODULE_2__/* .PAYMENT_METHOD_TYPE.PREPAID */ .td.PREPAID, _constants_payment_methods__WEBPACK_IMPORTED_MODULE_2__/* .PAYMENT_METHOD_TYPE.COLLECTIVE */ .td.COLLECTIVE]);
/**
 * A helper to return the fee for given payment method.
 *
 * @param {object} - The payment method
 * @param {number} - The amount to pay, in cents
 *
 * @return {object} paymentMethod
 *    - fee: The fee value. Will be 0 if there's no fee or if the payment method type is unknown.
 *    - feePercent: The fee value. Will be 0 if there's no fee or if the payment method type is unknown.
 *    - isExact: Will be true if there's no doubt about the result, false if it's not precise.
 *    - aboutURL: An URL to an help page to get more info about the fees for this payment method.
 */

const getPaymentMethodFees = (paymentMethod, amount, collectiveCurrency) => {
  const defaultFee = {
    fee: 0,
    feePercent: 0,
    isExact: false
  };

  if (!paymentMethod) {
    return defaultFee;
  }

  const sourcePm = paymentMethod.sourcePaymentMethod || paymentMethod;
  const currency = sourcePm.balance?.currency || paymentMethod.balance?.currency;

  if (sourcePm.type === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_2__/* .PAYMENT_METHOD_TYPE.CREDITCARD */ .td.CREDITCARD) {
    let stripeFeePercent = 0.029;

    if (currency === 'EUR') {
      stripeFeePercent = 0.014;
    } else if (!currency) {
      const country = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(sourcePm, 'data.country');

      if (country && (0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_1__.isMemberOfTheEuropeanUnion)(country)) {
        stripeFeePercent = 0.014;
      }
    }

    const fee = amount * stripeFeePercent + 30;
    return {
      name: 'Stripe',
      fee,
      feePercent: fee / amount * 100,
      aboutURL: 'https://stripe.com/pricing',
      // Can only be sure of the fee if we have the currency of the card and no currency conversion
      isExact: currency === collectiveCurrency
    };
  } else if (PAYMENT_TYPES_WITHOUT_FEES.has(sourcePm.type)) {
    return _objectSpread(_objectSpread({}, defaultFee), {}, {
      isExact: true
    });
  } else if (sourcePm.service === _constants_payment_methods__WEBPACK_IMPORTED_MODULE_2__/* .PAYMENT_METHOD_SERVICE.PAYPAL */ .tp.PAYPAL) {
    // Paypal fee depends on the country of the account, and we can't possibly
    // know this information in advance.
    const fee = amount * 0.039 + 30;
    return {
      name: 'PayPal',
      fee,
      feePercent: fee / amount * 100,
      isExact: false,
      aboutURL: 'https://www.paypal.com/webapps/mpp/paypal-fees'
    };
  }

  return defaultFee;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaymentMethodFees);

/***/ }),

/***/ 79618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ editCollectiveMutation),
/* harmony export */   "Z": () => (/* binding */ addCreateCollectiveMutation)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32651);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51719);




const createCollectiveMutation = _helpers__WEBPACK_IMPORTED_MODULE_2__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation CreateCollective($collective: CollectiveInputType!) {
    createCollective(collective: $collective) {
      id
      name
      slug
      type
      website
      twitterHandle
      isIncognito
    }
  }
`;
const editCollectiveMutation = _helpers__WEBPACK_IMPORTED_MODULE_2__/* .gqlV1 */ .N
/* GraphQL */
`
  mutation EditCollective($collective: CollectiveInputType!) {
    editCollective(collective: $collective) {
      id
      ...EditCollectivePageFields
    }
  }

  ${_queries__WEBPACK_IMPORTED_MODULE_3__/* .editCollectivePageFieldsFragment */ .s9}
`;
const addCreateCollectiveMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_1__.graphql)(createCollectiveMutation, {
  props: ({
    mutate
  }) => ({
    createCollective: async collective => {
      const CollectiveInputType = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(collective, ['slug', 'type', 'name', 'image', 'description', 'longDescription', 'location', 'privateInstructions', 'twitterHandle', 'githubHandle', 'website', 'tags', 'startsAt', 'endsAt', 'timezone', 'currency', 'quantity', 'HostCollectiveId', 'ParentCollectiveId', 'isIncognito', 'settings']);

      CollectiveInputType.tiers = (collective.tiers || []).map(tier => lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(tier, ['type', 'name', 'description', 'amount', 'maxQuantity']));
      CollectiveInputType.location = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(collective.location, ['name', 'address', 'lat', 'long', 'country']);
      return await mutate({
        variables: {
          collective: CollectiveInputType
        }
      });
    }
  })
});

/***/ }),

/***/ 37027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ removeGuestTokens),
/* harmony export */   "Lj": () => (/* binding */ getAllGuestEmails),
/* harmony export */   "kG": () => (/* binding */ setGuestToken)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18459);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35427);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Returns a map like { [email]: token }
 */

const getAllGuestTokens = () => {
  try {
    const localStorageValue = (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .getFromLocalStorage */ .fp)(_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .LOCAL_STORAGE_KEYS.GUEST_TOKENS */ .dA.GUEST_TOKENS);
    return JSON.parse(localStorageValue) || {};
  } catch (e) {
    return {};
  }
};

const normalizeGuestToken = (key, value) => {
  if (typeof value === 'string') {
    return {
      email: key,
      token: value
    };
  } else {
    return {
      email: value.email,
      token: value.email,
      orderId: key
    };
  }
};

const normalizeEmailForGuestToken = email => {
  return email.trim().toLowerCase();
};
/**
 * Returns all emails that were used to contribute as guest on this browser
 */


const getAllGuestEmails = () => {
  const guestTokens = getAllGuestTokens();
  const normalizedEntries = Object.entries(guestTokens).map(([key, value]) => normalizeGuestToken(key, value));
  const emails = normalizedEntries.map(e => e.email);
  return lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()(emails);
};
const removeGuestTokens = (emails = [], tokens = []) => {
  const allTokens = getAllGuestTokens();
  const normalizedEmails = emails?.map(normalizeEmailForGuestToken);

  const newTokens = lodash_omitBy__WEBPACK_IMPORTED_MODULE_1___default()(allTokens, (value, key) => {
    const {
      email,
      token
    } = normalizeGuestToken(key, value);

    if (normalizedEmails && normalizedEmails.includes(email)) {
      return true;
    } else if (tokens && tokens.includes(token)) {
      return true;
    } else {
      return false;
    }
  });

  (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .qQ)(_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .LOCAL_STORAGE_KEYS.GUEST_TOKENS */ .dA.GUEST_TOKENS, JSON.stringify(newTokens));
};
const setGuestToken = (email, orderId, token) => {
  const tokens = _objectSpread(_objectSpread({}, getAllGuestTokens()), {}, {
    [orderId]: {
      token,
      email: normalizeEmailForGuestToken(email)
    }
  });

  (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .qQ)(_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .LOCAL_STORAGE_KEYS.GUEST_TOKENS */ .dA.GUEST_TOKENS, JSON.stringify(tokens));
};

/***/ }),

/***/ 60225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A custom react hook to copy values to the clipboard
 *
 * @param timeout: time before the isCopied flag is reset
 */

const useClipboard = ({
  timeout = 3000
} = {}) => {
  const [isCopied, setCopied] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [updateCopyBtnTimeout, setUpdateCopyBtnTimeout] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  return {
    isCopied,
    copy: value => {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(value);
      setCopied(true);

      if (updateCopyBtnTimeout) {
        clearTimeout(updateCopyBtnTimeout);
      }

      const timeoutFn = setTimeout(() => {
        setCopied(false);
      }, timeout);
      setUpdateCopyBtnTimeout(timeoutFn);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClipboard);

/***/ }),

/***/ 90281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useRecaptcha)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./lib/env-utils.js
var env_utils = __webpack_require__(9269);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
;// CONCATENATED MODULE: ./lib/recaptcha.js



const getRecaptchaSiteKey = () => (0,env_utils/* getEnvVar */.p)('RECAPTCHA_SITE_KEY');

const getRecaptchaScriptUrl = () => {
  const apiKey = getRecaptchaSiteKey();

  if (!apiKey) {
    throw new Error("'RECAPTCHA_SITE_KEY' is undefined.");
  }

  return `https://www.google.com/recaptcha/api.js?render=${apiKey}`;
};

const RECAPTCHA_SCRIPT_ID = 'recaptcha';

const loadRecaptcha = async () => {
  if (true) {
    return;
  }

  if (typeof window.grecaptcha !== 'undefined') {
    return;
  }

  return (0,utils/* loadScriptAsync */.SH)(getRecaptchaScriptUrl(), {
    attrs: {
      id: RECAPTCHA_SCRIPT_ID
    }
  });
};

const getRecaptcha = async () => {
  await loadRecaptcha();
  return window.grecaptcha;
};

const unloadRecaptcha = () => {
  if (true) {
    return;
  } // Remove scripts


  document.getElementById(RECAPTCHA_SCRIPT_ID)?.remove();
  document.querySelectorAll('script[src^="https://www.gstatic.com/recaptcha"]').forEach(e => e.remove()); // Remove widget

  document.querySelectorAll('.grecaptcha-badge').forEach(e => e.remove()); // Remove global instance

  delete window.grecaptcha;
};


;// CONCATENATED MODULE: ./lib/hooks/useRecaptcha.js



const useRecaptcha = () => {
  const verify = async () => {
    const grecaptcha = await getRecaptcha();
    return new Promise(resolve => {
      grecaptcha.ready(() => {
        grecaptcha.execute(getRecaptchaSiteKey(), {
          action: 'submit'
        }).then(resolve);
      });
    });
  };

  external_react_default().useEffect(() => {
    loadRecaptcha();
    return () => unloadRecaptcha();
  }, []);
  return {
    verify
  };
};

/* harmony default export */ const hooks_useRecaptcha = (useRecaptcha);

/***/ }),

/***/ 44583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ i18nInterval)
/* harmony export */ });
const {
  defineMessages
} = __webpack_require__(13126);

const {
  default: INTERVALS
} = __webpack_require__(80642);

const msg = defineMessages({
  [INTERVALS.oneTime]: {
    id: "Frequency.OneTime",
    defaultMessage: [{
      "type": 0,
      "value": "One time"
    }]
  },
  [INTERVALS.month]: {
    id: "Frequency.Monthly",
    defaultMessage: [{
      "type": 0,
      "value": "Monthly"
    }]
  },
  [INTERVALS.year]: {
    id: "Frequency.Yearly",
    defaultMessage: [{
      "type": 0,
      "value": "Yearly"
    }]
  }
});
/**
 * Translate an interval (monthly, yearly, etc).
 */

const i18nInterval = (intl, interval) => {
  const i18nMsg = msg[interval];
  return i18nMsg ? intl.formatMessage(i18nMsg) : interval;
};

/***/ }),

/***/ 98221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ confirmPayment)
/* harmony export */ });
/* harmony import */ var _constants_payment_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1808);
/* eslint-disable camelcase */

async function confirmPayment(stripe, clientSecret, paymentData) {
  const confirmParams = paymentData?.paymentMethodId ? {
    payment_method: paymentData.paymentMethodId
  } : undefined;
  let paymentIntentResult;

  switch (paymentData.type) {
    case _constants_payment_methods__WEBPACK_IMPORTED_MODULE_0__/* .PAYMENT_METHOD_TYPE.US_BANK_ACCOUNT */ .td.US_BANK_ACCOUNT:
      {
        paymentIntentResult = await stripe.confirmUsBankAccountPayment(clientSecret, confirmParams);
        break;
      }

    case _constants_payment_methods__WEBPACK_IMPORTED_MODULE_0__/* .PAYMENT_METHOD_TYPE.SEPA_DEBIT */ .td.SEPA_DEBIT:
      {
        paymentIntentResult = await stripe.confirmSepaDebitPayment(clientSecret, confirmParams);
        break;
      }

    case _constants_payment_methods__WEBPACK_IMPORTED_MODULE_0__/* .PAYMENT_METHOD_TYPE.PAYMENT_INTENT */ .td.PAYMENT_INTENT:
      {
        paymentIntentResult = await stripe.confirmPayment({
          elements: paymentData.elements,
          confirmParams: {
            return_url: paymentData.returnUrl
          }
        });
        break;
      }

    default:
      {
        throw new Error(`Unsupported payment type ${paymentData.type}`);
      }
  }

  if (paymentIntentResult.error) {
    throw new Error(paymentIntentResult.error.message, {
      cause: paymentIntentResult.error
    });
  }

  return paymentIntentResult.paymentIntent;
}

/***/ }),

/***/ 48352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePaymentIntent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32651);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97079);




const createPaymentIntentMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation CreatePaymentIntent($paymentIntent: PaymentIntentInput!) {
    createPaymentIntent(paymentIntent: $paymentIntent) {
      id
      paymentIntentClientSecret
      stripeAccount
      stripeAccountPublishableSecret
    }
  }
`;
function usePaymentIntent({
  amount,
  fromAccount,
  toAccount,
  skip
}) {
  const apolloClient = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useApolloClient)();
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [stripe, setStripe] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [paymentIntent, setPaymentIntent] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    async function load() {
      if (typeof window.Stripe === 'undefined') {
        await (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .loadScriptAsync */ .SH)('https://js.stripe.com/v3/');
      }

      const createPaymentIntentResp = await apolloClient.mutate({
        mutation: createPaymentIntentMutation,
        context: _graphql_helpers__WEBPACK_IMPORTED_MODULE_2__/* .API_V2_CONTEXT */ .T,
        variables: {
          paymentIntent: {
            amount,
            fromAccount,
            toAccount
          }
        },
        errorPolicy: 'all'
      });

      if (createPaymentIntentResp.errors?.length > 0) {
        setError(new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloError({
          graphQLErrors: createPaymentIntentResp.errors
        }));
        setLoading(false);
        return;
      }

      const {
        paymentIntentClientSecret,
        stripeAccountPublishableSecret,
        stripeAccount
      } = createPaymentIntentResp.data?.createPaymentIntent ?? {};
      const stripe = window.Stripe(stripeAccountPublishableSecret, stripeAccount ? {
        stripeAccount
      } : {});
      setStripe(stripe);

      try {
        const paymentIntentResult = await stripe.retrievePaymentIntent(paymentIntentClientSecret);

        if (paymentIntentResult.error) {
          setError(new Error('Payment Intent Retrieve error', {
            cause: paymentIntentResult.error
          }));
        } else {
          paymentIntentResult.paymentIntent.stripeAccount = stripeAccount;
          setPaymentIntent(paymentIntentResult.paymentIntent);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    if (skip) {
      return;
    }

    setLoading(true);
    load();
    return () => {
      setLoading(false);
      setError(null);
      setPaymentIntent(null);
      setStripe(null);
    };
  }, [skip]);
  return [paymentIntent, stripe, loading, error];
}

/***/ }),

/***/ 74387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pm": () => (/* binding */ VIEWPORTS),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS, BREAKPOINTS, viewportIsAbove, isDesktopOrAbove, getViewportFromWidth */
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86646);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25359);
/* harmony import */ var lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74200);
/* harmony import */ var _theme_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Defines all the breakpoints names as passed by `withViewport`
 */


const VIEWPORTS = {
  XSMALL: 'XSMALL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  UNKNOWN: 'UNKNOWN'
}; // Please keep the same length for these two arrays

const BREAKPOINTS_NAMES = [VIEWPORTS.XSMALL, VIEWPORTS.SMALL, VIEWPORTS.MEDIUM, VIEWPORTS.LARGE];
const BREAKPOINTS_WIDTHS = BREAKPOINTS_NAMES.map((_, idx) => (0,_theme_helpers__WEBPACK_IMPORTED_MODULE_6__/* .emToPx */ .x8)(_theme_breakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[idx]));
const BREAKPOINTS = lodash_zipObject__WEBPACK_IMPORTED_MODULE_0___default()(BREAKPOINTS_NAMES, BREAKPOINTS_WIDTHS);
/**
 * Helper to check if a viewport is superior or equal to another one.
 * Always returns false for `UNKNOWN`
 *
 * @param {VIEWPORTS} viewport
 * @param {VIEWPORTS} breakpointName
 */

const viewportIsAbove = (viewport, breakpointName) => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(breakpointName);
};
/**
 * Returns true if viewport is not `UNKNOWN` and is >= desktop.
 *
 * @param {VIEWPORTS} viewport
 */

const isDesktopOrAbove = viewport => {
  return BREAKPOINTS_NAMES.indexOf(viewport) >= BREAKPOINTS_NAMES.indexOf(VIEWPORTS.MEDIUM);
};
/** Returns the name of the viewport (see `BREAKPOINTS_NAMES`) */

const getViewportFromWidth = width => {
  const breakpointIdx = lodash_findLastIndex__WEBPACK_IMPORTED_MODULE_2___default()(BREAKPOINTS_WIDTHS, b => width >= b);

  return breakpointIdx === -1 ? BREAKPOINTS_NAMES[0] : BREAKPOINTS_NAMES[breakpointIdx];
};
/** Function to build component's state */

const getStateBuilder = (withWidth, withHeight) => {
  if (withWidth && withHeight) {
    return (width, height, viewport) => ({
      width,
      height,
      viewport
    });
  } else if (withWidth) {
    return (width, height, viewport) => ({
      width,
      viewport
    });
  } else if (withHeight) {
    return (width, height, viewport) => ({
      height,
      viewport
    });
  } else {
    return (width, height, viewport) => ({
      viewport
    });
  }
};
/**
 * Watch window resize and provide info about the screen size. Has default to
 * properly render on SSR (customizable with `defaultViewport`).
 *
 * @param {ReactNode} ChildComponent
 * @param {object} options
 *  - `withWidth` (default: false) - pass the width of the window
 *  - `withHeight` (default: false) - pass the height of the window
 *  - `defaultViewport` (default: UNKNOWN) - if detection fails, fallback on this screen size
 */


const withViewport = (ChildComponent, options) => {
  const {
    withWidth,
    withHeight,
    defaultViewport = VIEWPORTS.UNKNOWN
  } = options || {};
  const buildState = getStateBuilder(withWidth || false, withHeight || false);
  return class Viewport extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
    // Default height usually doesn't matters much, so we use the width as default
    constructor(props) {
      super(props); // Always initialize without `window`, to make sure SSR and client render are the same
      // Could trigger "DOM not matching" errors otherwise

      _defineProperty(this, "doResize", () => {
        const viewport = getViewportFromWidth(window.innerWidth);
        const state = buildState(window.innerWidth, window.innerHeight, viewport);

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(this.state, state)) {
          this.setState(state);
        }
      });

      this.state = buildState(BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], BREAKPOINTS[defaultViewport] || BREAKPOINTS_WIDTHS[0], defaultViewport);
    }

    componentDidMount() {
      this.doResize();
      this.onResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.doResize, 500, {
        maxWait: 300
      });
      window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    render() {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ChildComponent, _objectSpread(_objectSpread({}, this.state), this.props));
    }

  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withViewport);

/***/ }),

/***/ 89412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isValidExternalRedirect": () => (/* binding */ isValidExternalRedirect)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25730);
/* harmony import */ var _styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25896);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69078);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92129);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53169);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84842);
/* harmony import */ var _components_StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _components_StyledCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19156);
/* harmony import */ var _components_StyledHr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(173);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Page__WEBPACK_IMPORTED_MODULE_12__]);
_components_Page__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















 // Make sure fallback is an internal link




const getFallback = fallback => {
  if (!fallback || !(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__/* .isRelativeHref */ .jz)(fallback)) {
    return '/';
  } else {
    return fallback;
  }
};

const isValidExternalRedirect = url => {
  const validationParams =  true ? {} : 0; // eslint-disable-line camelcase

  return url && (0,validator__WEBPACK_IMPORTED_MODULE_5__.isURL)(url, validationParams);
};

const shouldRedirectDirectly = urlStr => {
  try {
    const parsedUrl = new URL(urlStr);
    return (0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_6__/* .isTrustedRedirectHost */ .TD)(parsedUrl.host);
  } catch {
    return false;
  }
};
/**
 * A page to use whenever you need to redirect to a page that may be external to Open Collective.
 * The page displays a confirmation to make sure that user is aware of being redirected, to prevent
 * phishing attacks.
 */


const ExternalRedirectPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const [isReady, setReady] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [pendingAction, setPendingAction] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const query = router?.query || {};
  const fallback = getFallback(query.fallback);
  const shouldRedirectParent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .parseToBoolean */ .DD)(query.shouldRedirectParent);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    if (router && !query.url) {
      router.push(fallback);
    } else if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .isValidRelativeUrl */ .s5)(query.url)) {
      router.push(query.url);
    } else if (!isValidExternalRedirect(query.url)) {
      router.push(fallback);
    } else if (shouldRedirectDirectly(query.url)) {
      if (shouldRedirectParent) {
        window.parent.location.href = query.url;
      } else {
        router.push(query.url);
      }
    } else {
      setReady(true);
    }
  }, [router, query.url]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_Page__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .kC, {
      justifyContent: "center",
      alignItems: "center",
      py: [4, 5, 6],
      children: isReady ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_components_StyledCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        maxWidth: 450,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          p: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_16__.H3, {
            fontSize: "16px",
            lineHeight: "15px",
            fontWeight: "bold",
            my: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_styled_icons_fa_solid_ExclamationTriangle__WEBPACK_IMPORTED_MODULE_2__.ExclamationTriangle, {
              "data-type": "message-icon",
              size: "1em",
              color: "#CCCC18"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_StyledSpan, {
              ml: 2,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "PleaseBeCareful",
                defaultMessage: [{
                  "type": 0,
                  "value": "Please be careful"
                }]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_StyledHr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            my: 2,
            borderColor: "black.300"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
            fontSize: "14px",
            lineHeight: "20px",
            my: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "externalRedirect.message",
              defaultMessage: [{
                "type": 0,
                "value": "Your request is currently being redirected to "
              }, {
                "type": 1,
                "value": "redirect"
              }, {
                "type": 0,
                "value": ". For the safety and privacy of your Open Collective account, remember to never enter your credentials unless you're on the real Open Collective website."
              }],
              values: {
                redirect: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_16__/* .Strong */ .cK, {
                  wordBreak: "break-all",
                  children: query.url
                })
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "black.100",
          p: 1,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("a", {
            href: query.url,
            onClick: e => {
              setPendingAction('REDIRECT');

              if (shouldRedirectParent) {
                e.preventDefault();
                window.parent.location.href = query.url;
              }
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              buttonSize: "small",
              my: 2,
              minWidth: 140,
              buttonStyle: "primary",
              loading: pendingAction === 'REDIRECT',
              disabled: pendingAction,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "actions.continue",
                defaultMessage: [{
                  "type": 0,
                  "value": "Continue"
                }]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            href: fallback,
            onClick: () => setPendingAction('CANCEL'),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
              buttonSize: "small",
              m: 2,
              minWidth: 140,
              "data-cy": "confirmation-modal-cancel",
              loading: pendingAction === 'CANCEL',
              disabled: pendingAction,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                id: "actions.cancel",
                defaultMessage: [{
                  "type": 0,
                  "value": "Cancel"
                }]
              })
            })
          })]
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
    })
  });
};

ExternalRedirectPage.__docgenInfo = {
  "description": "A page to use whenever you need to redirect to a page that may be external to Open Collective.\nThe page displays a confirmation to make sure that user is aware of being redirected, to prevent\nphishing attacks.",
  "methods": [],
  "displayName": "ExternalRedirectPage"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalRedirectPage);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_Text__WEBPACK_IMPORTED_MODULE_16__/* .Span */ .Dr).withConfig({
  displayName: "external-redirect___StyledSpan",
  componentId: "sc-p3n8zd-0"
})({
  verticalAlign: 'middle'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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");

/***/ })

};
;