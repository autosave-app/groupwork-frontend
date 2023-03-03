(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[280],{

/***/ 62074:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@hcaptcha/react-hcaptcha/dist/esm/utils.js
function generateQuery(params) {
  return Object.entries(params).filter(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    return value || value === false;
  }).map(function (_ref2) {
    var key = _ref2[0],
        value = _ref2[1];
    return encodeURIComponent(key) + "=" + encodeURIComponent(value);
  }).join("&");
}

;

;// CONCATENATED MODULE: ./node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js




var SCRIPT_ID = 'hcaptcha-api-script-id';
var HCAPTCHA_LOAD_FN_NAME = 'hcaptchaOnLoad'; // Prevent loading API script multiple times

var resolveFn;
var rejectFn;
var mountPromise = new Promise(function (resolve, reject) {
  resolveFn = resolve;
  rejectFn = reject;
}); // Generate hCaptcha API script

var mountCaptchaScript = function mountCaptchaScript(params) {
  if (params === void 0) {
    params = {};
  }

  if (document.getElementById(SCRIPT_ID)) {
    // API was already requested
    return mountPromise;
  } // Create global onload callback


  window[HCAPTCHA_LOAD_FN_NAME] = resolveFn;
  var domain = params.apihost || "https://js.hcaptcha.com";
  delete params.apihost;
  var script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = domain + "/1/api.js?render=explicit&onload=" + HCAPTCHA_LOAD_FN_NAME;
  script.async = true;

  script.onerror = function (event) {
    return rejectFn('script-error');
  };

  var query = generateQuery(params);
  script.src += query !== "" ? "&" + query : "";
  document.head.appendChild(script);
  return mountPromise;
};

var HCaptcha = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(HCaptcha, _React$Component);

  function HCaptcha(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // API Methods

    _this.renderCaptcha = _this.renderCaptcha.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.resetCaptcha = _this.resetCaptcha.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.removeCaptcha = _this.removeCaptcha.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.isReady = _this.isReady.bind((0,assertThisInitialized/* default */.Z)(_this)); // Event Handlers

    _this.loadCaptcha = _this.loadCaptcha.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleOnLoad = _this.handleOnLoad.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleSubmit = _this.handleSubmit.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleExpire = _this.handleExpire.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleError = _this.handleError.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleOpen = _this.handleOpen.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleClose = _this.handleClose.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this.handleChallengeExpired = _this.handleChallengeExpired.bind((0,assertThisInitialized/* default */.Z)(_this));
    var isApiReady = typeof hcaptcha !== 'undefined';
    _this.ref = /*#__PURE__*/react.createRef();
    _this.apiScriptRequested = false;
    _this.state = {
      isApiReady: isApiReady,
      isRemoved: false,
      elementId: props.id,
      captchaId: ''
    };
    return _this;
  }

  var _proto = HCaptcha.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // Once captcha is mounted intialize hCaptcha - hCaptcha
    var isApiReady = this.state.isApiReady;
    /*
     * Check if hCaptcha has already been loaded,
     * If Yes, render the captcha
     * If No, create script tag and wait to render the captcha
     */

    if (isApiReady) {
      this.renderCaptcha();
      return;
    }

    this.loadCaptcha();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var captchaId = this.state.captchaId;

    if (!this.isReady()) {
      return;
    } // Reset any stored variables / timers when unmounting


    hcaptcha.reset(captchaId);
    hcaptcha.remove(captchaId);
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // Prevent component re-rendering when these internal state variables are updated
    if (this.state.isApiReady !== nextState.isApiReady || this.state.isRemoved !== nextState.isRemoved) {
      return false;
    }

    return true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    // Prop Keys that could change
    var keys = ['sitekey', 'size', 'theme', 'tabindex', 'languageOverride', 'endpoint']; // See if any props changed during component update

    var match = keys.every(function (key) {
      return prevProps[key] === _this2.props[key];
    }); // If they have changed, remove current captcha and render a new one

    if (!match) {
      this.removeCaptcha(function () {
        _this2.renderCaptcha();
      });
    }
  };

  _proto.loadCaptcha = function loadCaptcha() {
    if (this.apiScriptRequested) {
      return;
    }

    var _this$props = this.props,
        apihost = _this$props.apihost,
        assethost = _this$props.assethost,
        endpoint = _this$props.endpoint,
        host = _this$props.host,
        imghost = _this$props.imghost,
        hl = _this$props.languageOverride,
        reCaptchaCompat = _this$props.reCaptchaCompat,
        reportapi = _this$props.reportapi,
        sentry = _this$props.sentry,
        custom = _this$props.custom;
    var mountParams = {
      apihost: apihost,
      assethost: assethost,
      endpoint: endpoint,
      hl: hl,
      host: host,
      imghost: imghost,
      recaptchacompat: reCaptchaCompat === false ? "off" : null,
      reportapi: reportapi,
      sentry: sentry,
      custom: custom
    };
    mountCaptchaScript(mountParams).then(this.handleOnLoad)["catch"](this.handleError);
    this.apiScriptRequested = true;
  };

  _proto.renderCaptcha = function renderCaptcha(onReady) {
    var isApiReady = this.state.isApiReady;
    if (!isApiReady) return;
    var renderParams = Object.assign({
      "open-callback": this.handleOpen,
      "close-callback": this.handleClose,
      "error-callback": this.handleError,
      "chalexpired-callback": this.handleChallengeExpired,
      "expired-callback": this.handleExpire,
      "callback": this.handleSubmit
    }, this.props, {
      hl: this.props.hl || this.props.languageOverride,
      languageOverride: undefined
    }); //Render hCaptcha widget and provide necessary callbacks - hCaptcha

    var captchaId = hcaptcha.render(this.ref.current, renderParams);
    this.setState({
      isRemoved: false,
      captchaId: captchaId
    }, function () {
      onReady && onReady();
    });
  };

  _proto.resetCaptcha = function resetCaptcha() {
    var captchaId = this.state.captchaId;

    if (!this.isReady()) {
      return;
    } // Reset captcha state, removes stored token and unticks checkbox


    hcaptcha.reset(captchaId);
  };

  _proto.removeCaptcha = function removeCaptcha(callback) {
    var captchaId = this.state.captchaId;

    if (!this.isReady()) {
      return;
    }

    this.setState({
      isRemoved: true
    }, function () {
      hcaptcha.remove(captchaId);
      callback && callback();
    });
  };

  _proto.handleOnLoad = function handleOnLoad() {
    var _this3 = this;

    this.setState({
      isApiReady: true
    }, function () {
      // render captcha and wait for captcha id
      _this3.renderCaptcha(function () {
        // trigger onLoad if it exists
        var onLoad = _this3.props.onLoad;
        if (onLoad) onLoad();
      });
    });
  };

  _proto.handleSubmit = function handleSubmit(event) {
    var onVerify = this.props.onVerify;
    var _this$state = this.state,
        isRemoved = _this$state.isRemoved,
        captchaId = _this$state.captchaId;
    if (typeof hcaptcha === 'undefined' || isRemoved) return;
    var token = hcaptcha.getResponse(captchaId); //Get response token from hCaptcha widget

    var ekey = hcaptcha.getRespKey(captchaId); //Get current challenge session id from hCaptcha widget

    onVerify(token, ekey); //Dispatch event to verify user response
  };

  _proto.handleExpire = function handleExpire() {
    var onExpire = this.props.onExpire;
    var captchaId = this.state.captchaId;

    if (!this.isReady()) {
      return;
    }

    hcaptcha.reset(captchaId); // If hCaptcha runs into error, reset captcha - hCaptcha

    if (onExpire) onExpire();
  };

  _proto.handleError = function handleError(event) {
    var onError = this.props.onError;
    var captchaId = this.state.captchaId;

    if (this.isReady()) {
      // If hCaptcha runs into error, reset captcha - hCaptcha
      hcaptcha.reset(captchaId);
    }

    if (onError) onError(event);
  };

  _proto.isReady = function isReady() {
    var _this$state2 = this.state,
        isApiReady = _this$state2.isApiReady,
        isRemoved = _this$state2.isRemoved;
    return isApiReady && !isRemoved;
  };

  _proto.handleOpen = function handleOpen() {
    if (!this.isReady() || !this.props.onOpen) {
      return;
    }

    this.props.onOpen();
  };

  _proto.handleClose = function handleClose() {
    if (!this.isReady() || !this.props.onClose) {
      return;
    }

    this.props.onClose();
  };

  _proto.handleChallengeExpired = function handleChallengeExpired() {
    if (!this.isReady() || !this.props.onChalExpired) {
      return;
    }

    this.props.onChalExpired();
  };

  _proto.execute = function execute(opts) {
    if (opts === void 0) {
      opts = null;
    }

    var captchaId = this.state.captchaId;

    if (!this.isReady()) {
      return;
    }

    if (opts && typeof opts !== "object") {
      opts = null;
    }

    return hcaptcha.execute(captchaId, opts);
  };

  _proto.setData = function setData(data) {
    var captchaId = this.state.captchaId;

    if (!this.isReady()) {
      return;
    }

    if (data && typeof data !== "object") {
      data = null;
    }

    hcaptcha.setData(captchaId, data);
  };

  _proto.getResponse = function getResponse() {
    return hcaptcha.getResponse(this.state.captchaId);
  };

  _proto.getRespKey = function getRespKey() {
    return hcaptcha.getRespKey(this.state.captchaId);
  };

  _proto.render = function render() {
    var elementId = this.state.elementId;
    return /*#__PURE__*/react.createElement("div", {
      ref: this.ref,
      id: elementId
    });
  };

  return HCaptcha;
}(react.Component);

/* harmony default export */ var esm = (HCaptcha);

/***/ }),

/***/ 73930:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AddressFormatter; }
});

;// CONCATENATED MODULE: ./node_modules/@shopify/address-consts/build/esm/index.mjs
let FieldName;

(function (FieldName) {
  FieldName["FirstName"] = "firstName";
  FieldName["LastName"] = "lastName";
  FieldName["Country"] = "country";
  FieldName["City"] = "city";
  FieldName["PostalCode"] = "zip";
  FieldName["Zone"] = "province";
  FieldName["Address1"] = "address1";
  FieldName["Address2"] = "address2";
  FieldName["Phone"] = "phone";
  FieldName["Company"] = "company";
})(FieldName || (FieldName = {}));

const GRAPHQL_ENDPOINT = 'https://atlas.shopifysvc.com/graphql';
let GraphqlOperationName;

(function (GraphqlOperationName) {
  GraphqlOperationName["Countries"] = "countries";
  GraphqlOperationName["Country"] = "country";
})(GraphqlOperationName || (GraphqlOperationName = {}));

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};



;// CONCATENATED MODULE: ./node_modules/@shopify/address/build/esm/utilities.mjs


const FIELD_REGEXP = /({\w+})/g;
const FIELDS_MAPPING = {
  '{firstName}': FieldName.FirstName,
  '{lastName}': FieldName.LastName,
  '{country}': FieldName.Country,
  '{city}': FieldName.City,
  '{zip}': FieldName.PostalCode,
  '{province}': FieldName.Zone,
  '{address1}': FieldName.Address1,
  '{address2}': FieldName.Address2,
  '{phone}': FieldName.Phone,
  '{company}': FieldName.Company
};
/*
 * Returns empty string if all replacement fields are empty.
 */

function renderLineTemplate(country, template, address) {
  const result = template.match(FIELD_REGEXP);
  let line = template;

  if (!result) {
    return '';
  }

  let lineIsEmpty = true;
  result.forEach(key => {
    const addressKey = key.replace('{', '').replace('}', '');

    if (address[addressKey]) {
      lineIsEmpty = false;
    }

    switch (addressKey) {
      case FieldName.Country:
        line = line.replace(`{${FieldName.Country}}`, country.name);
        break;

      case FieldName.Zone:
        line = line.replace(`{${FieldName.Zone}}`, address.province ? getZone(country.zones, address.province).name : '');
        break;

      default:
        line = line.replace(key, address[addressKey] || '');
        break;
    }
  });

  if (lineIsEmpty) {
    return '';
  } else {
    return line.trim().replace('  ', ' ');
  }
}

function getZone(zones, zoneCode) {
  return zones.find(zone => zone.code === zoneCode) || {
    name: '',
    code: ''
  };
}



;// CONCATENATED MODULE: ./node_modules/@shopify/address/build/esm/format.mjs


const LINE_DELIMITER = '_';
const DEFAULT_FORM_LAYOUT = '{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{country}{province}{zip}_{phone}';
const DEFAULT_SHOW_LAYOUT = '{lastName} {firstName}_{company}_{address1} {address2}_{city} {province} {zip}_{country}_{phone}';
/**
 * When it's time to render any address, use this function so that it's properly
 * formatted for the country's locale.
 *
 * ```typescript
 * ['Shopify', 'Lindenstraße 9-14', '10969 Berlin', 'Germany'];
 * ```
 * @returns all lines of a formatted address as an array of strings.
 */

function formatAddress(address, country) {
  const layout = country.formatting.show || DEFAULT_SHOW_LAYOUT;
  return layout.split(LINE_DELIMITER).map(lineTemplate => renderLineTemplate(country, lineTemplate, address).trim());
}
/**
 * In an edit form, this function can be used to properly order all the input
 * fields.
 *
 * ```typescript
 * [
 *   ['firstName', 'lastName'],
 *   ['company'],
 *   ['address1'],
 *   ['address2'],
 *   ['city'],
 *   ['country', 'province', 'zip'],
 *   ['phone'],
 * ];
 * ```
 */

function buildOrderedFields(country) {
  const format = country ? country.formatting.edit : DEFAULT_FORM_LAYOUT;
  return format.split(LINE_DELIMITER).map(lineTemplate => {
    const result = lineTemplate.match(FIELD_REGEXP);

    if (!result) {
      return [];
    }

    return result.map(field => FIELDS_MAPPING[field]);
  });
}



;// CONCATENATED MODULE: ./node_modules/@shopify/address/build/esm/graphqlQuery.mjs
const query = `
query countries($locale: SupportedLocale!) {
  countries(locale: $locale) {
    name
    code
    continent
    phoneNumberPrefix
    autocompletionField
    provinceKey
    labels {
      address1
      address2
      city
      company
      country
      firstName
      lastName
      phone
      postalCode
      zone
    }
    optionalLabels {
      address2
    }
    formatting {
      edit
      show
    }
    zones {
      name
      code
    }
  }
}

query country($countryCode: SupportedCountry!, $locale: SupportedLocale!) {
  country(countryCode: $countryCode, locale: $locale) {
    name
    code
    continent
    phoneNumberPrefix
    autocompletionField
    provinceKey
    labels {
      address1
      address2
      city
      company
      country
      firstName
      lastName
      phone
      postalCode
      zone
    }
    optionalLabels {
      address2
    }
    formatting {
      edit
      show
    }
    zones {
      name
      code
    }
  }
}
`;
var query$1 = query;



;// CONCATENATED MODULE: ./node_modules/@shopify/address/build/esm/loader.mjs



const loadCountries = memoizeAsync(async locale => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      query: query$1,
      operationName: GraphqlOperationName.Countries,
      variables: {
        locale: locale.replace(/-/, '_').toUpperCase()
      }
    })
  });
  const countries = await response.json();

  if (!('data' in countries) && 'errors' in countries) {
    throw new CountryLoaderError(countries);
  }

  return countries.data.countries;
});
const loadCountry = memoizeAsync(async (locale, countryCode) => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      query: query$1,
      operationName: GraphqlOperationName.Country,
      variables: {
        countryCode,
        locale: locale.replace(/-/, '_').toUpperCase()
      }
    })
  });
  const country = await response.json();

  if (!('data' in country) && 'errors' in country) {
    throw new CountryLoaderError(country);
  }

  return country.data.country;
});
class CountryLoaderError extends Error {
  constructor(errors) {
    const errorMessage = errors.errors.map(error => error.message).join('; ');
    super(errorMessage);
  }

}

function memoizeAsync(asyncFunction) {
  const cache = {};
  return (...args) => {
    const stringifiedArgs = JSON.stringify(args);

    if (!cache[stringifiedArgs]) {
      cache[stringifiedArgs] = asyncFunction.apply(this, args);
    }

    return cache[stringifiedArgs];
  };
}



;// CONCATENATED MODULE: ./node_modules/@shopify/address/build/esm/AddressFormatter.mjs



const ORDERED_COUNTRIES_CACHE = new Map();
class AddressFormatter {
  /**
   * Useful in tests or any situation where the cache has undesirable
   * side-effects.
   */
  static resetCache() {
    ORDERED_COUNTRIES_CACHE.clear();
  }

  constructor(locale) {
    this.locale = locale;
    this.locale = locale;
  }

  updateLocale(locale) {
    this.locale = locale;
  }

  async getCountry(countryCode) {
    const country = this.loadCountryFromCache(countryCode);
    if (country) return country;
    return loadCountry(this.locale, countryCode);
  }

  async getCountries() {
    const cachedCountries = ORDERED_COUNTRIES_CACHE.get(this.locale);
    if (cachedCountries) return cachedCountries;
    const countries = await loadCountries(this.locale);
    ORDERED_COUNTRIES_CACHE.set(this.locale, countries);
    return countries;
  }
  /* Returns the address ordered in an array based based on the country code
   * Eg.:
   *   [
   *     'Shopify',
   *     'First Name Last Name',
   *     'Address 1',
   *     'address2',
   *     'Montréal',
   *     'Canada Quebec H2J 4B7',
   *     '514 444 3333'
   *   ]
   */


  async format(address) {
    const country = await this.getCountry(address.country);
    return formatAddress(address, country);
  }
  /* Returns an array that shows how to order fields based on the country code
   * Eg.:
   *   [
   *     ['company'],
   *     ['firstName', 'lastName'],
   *     ['address1'],
   *     ['address2'],
   *     ['city'],
   *     ['country', 'province', 'zip'],
   *     ['phone']
   *   ]
   */


  async getOrderedFields(countryCode) {
    const country = await this.getCountry(countryCode);
    return buildOrderedFields(country);
  }

  loadCountryFromCache(countryCode) {
    const cachedCountries = ORDERED_COUNTRIES_CACHE.get(this.locale);
    if (!cachedCountries) return null;
    return cachedCountries.find(({
      code
    }) => code === countryCode);
  }

}




/***/ }),

/***/ 72137:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ Facebook; }
/* harmony export */ });
/* unused harmony export FacebookDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Facebook = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 512 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
  }));
});
Facebook.displayName = 'Facebook';
var FacebookDimensions = {
  height: 512,
  width: 512
};

/***/ }),

/***/ 30898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ Envelope; }
/* harmony export */ });
/* unused harmony export EnvelopeDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Envelope = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 512 512"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z"
  }));
});
Envelope.displayName = 'Envelope';
var EnvelopeDimensions = {
  height: 512,
  width: 512
};

/***/ }),

/***/ 96002:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ Link; }
/* harmony export */ });
/* unused harmony export LinkDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke": "currentColor",
    "strokeLinecap": "round",
    "strokeLinejoin": "round"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  }));
});
Link.displayName = 'Link';
var LinkDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 6575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ Share2; }
/* harmony export */ });
/* unused harmony export Share2Dimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Share2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke": "currentColor",
    "strokeLinecap": "round",
    "strokeLinejoin": "round"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 18,
    cy: 5,
    r: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 6,
    cy: 12,
    r: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 18,
    cy: 19,
    r: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: 8.59,
    x2: 15.42,
    y1: 13.51,
    y2: 17.49
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: 15.41,
    x2: 8.59,
    y1: 6.51,
    y2: 10.49
  }));
});
Share2.displayName = 'Share2';
var Share2Dimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 22439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
// canvas-confetti v1.6.0 built on 2022-10-24T21:26:41.619Z
var module = {};

// source content
(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;
            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI && CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.wobble += fetti.wobbleSpeed;
    fetti.velocity *= fetti.decay;
    fetti.tiltAngle += 0.1;
    fetti.tiltSin = Math.sin(fetti.tiltAngle);
    fetti.tiltCos = Math.cos(fetti.tiltAngle);
    fetti.random = Math.random() + 2;
    fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
    fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
    context.beginPath();

    if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === 'star') {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;

      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = fetti.x + Math.cos(rot) * innerRadius;
        y = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          document.body.removeChild(canvas);
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize) {
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  // Make default export lazy to defer worker creation until called.
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }

  module.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function() {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module, false));

// end source content

/* harmony default export */ __webpack_exports__["Z"] = (module.exports);
var create = module.exports.create;


/***/ }),

/***/ 20640:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(11742);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 1757:
/***/ (function(module) {

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

module.exports = baseZipObject;


/***/ }),

/***/ 7287:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(34865),
    baseZipObject = __webpack_require__(1757);

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;


/***/ }),

/***/ 11742:
/***/ (function(module) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);
//# sourceMappingURL=280-31445dbc03e66f77.js.map