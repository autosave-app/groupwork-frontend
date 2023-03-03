(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7961],{

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

/***/ 79400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ Undo; }
/* harmony export */ });
/* unused harmony export UndoDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Undo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
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
    d: "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2l17.6-17.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3-163.8-62.5-226.3 0L125.7 160z"
  }));
});
Undo.displayName = 'Undo';
var UndoDimensions = {
  height: 512,
  width: 512
};

/***/ }),

/***/ 60257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ Check; }
/* harmony export */ });
/* unused harmony export CheckDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Check = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Check.displayName = 'Check';
var CheckDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 40932:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ Edit; }
/* harmony export */ });
/* unused harmony export EditDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Edit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
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
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }));
});
Edit.displayName = 'Edit';
var EditDimensions = {
  height: 24,
  width: 24
};

/***/ }),

/***/ 76899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ Flag; }
/* harmony export */ });
/* unused harmony export FlagDimensions */
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54142);



var Flag = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
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
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: 4,
    x2: 4,
    y1: 22,
    y2: 15
  }));
});
Flag.displayName = 'Flag';
var FlagDimensions = {
  height: 24,
  width: 24
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

/***/ 89464:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(18674);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

module.exports = escapeHtmlChar;


/***/ }),

/***/ 83729:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(18674);

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

module.exports = unescapeHtmlChar;


/***/ }),

/***/ 7187:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var escapeHtmlChar = __webpack_require__(89464),
    toString = __webpack_require__(79833);

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;


/***/ }),

/***/ 23493:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var debounce = __webpack_require__(23279),
    isObject = __webpack_require__(13218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 27955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(79833),
    unescapeHtmlChar = __webpack_require__(83729);

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

module.exports = unescape;


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
//# sourceMappingURL=7961-32ebfb80eebbcbf7.js.map