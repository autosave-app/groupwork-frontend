(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7491],{

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

/***/ 29032:
/***/ (function(module) {

module.exports = "/_next/static/images/pidgeon-0ed27f24287e8bd6972c57353f79abd7.png";

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

/***/ 21804:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createCompounder = __webpack_require__(35393);

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


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

/***/ 3522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ expense; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7980);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(85696);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49376);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(33227);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(88361);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(92191);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(85971);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52715);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(91193);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(930);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(92358);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);
// EXTERNAL MODULE: ./node_modules/lodash/update.js
var update = __webpack_require__(93425);
var update_default = /*#__PURE__*/__webpack_require__.n(update);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(45578);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(64721);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87794);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 13 modules
var lib = __webpack_require__(15020);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/graphql.js + 7 modules
var graphql = __webpack_require__(16608);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hoc/withApollo.js + 1 modules
var withApollo = __webpack_require__(14573);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(27484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(30845);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.js + 3 modules
var react_intl_lib = __webpack_require__(59448);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./lib/collective.lib.js
var collective_lib = __webpack_require__(5700);
// EXTERNAL MODULE: ./lib/constants/expense-status.ts
var expense_status = __webpack_require__(38083);
// EXTERNAL MODULE: ./lib/constants/expenseTypes.ts
var expenseTypes = __webpack_require__(19878);
// EXTERNAL MODULE: ./lib/errors/index.js + 1 modules
var errors = __webpack_require__(12136);
// EXTERNAL MODULE: ./lib/expenses.js
var expenses = __webpack_require__(45624);
// EXTERNAL MODULE: ./lib/graphql/helpers.js
var helpers = __webpack_require__(32651);
// EXTERNAL MODULE: ./lib/url-helpers.js
var url_helpers = __webpack_require__(25896);
// EXTERNAL MODULE: ./components/collective-navbar/index.js + 8 modules
var collective_navbar = __webpack_require__(99656);
// EXTERNAL MODULE: ./components/collective-navbar/constants.js
var constants = __webpack_require__(97585);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/conversations/CommentForm.js
var CommentForm = __webpack_require__(14193);
// EXTERNAL MODULE: ./components/conversations/graphql.js
var conversations_graphql = __webpack_require__(37436);
// EXTERNAL MODULE: ./components/conversations/Thread.js + 1 modules
var Thread = __webpack_require__(71133);
// EXTERNAL MODULE: ./components/ErrorPage.js
var ErrorPage = __webpack_require__(73908);
// EXTERNAL MODULE: ./components/expenses/ExpenseAttachedFiles.js
var ExpenseAttachedFiles = __webpack_require__(99754);
// EXTERNAL MODULE: ./components/expenses/ExpenseForm.js + 11 modules
var ExpenseForm = __webpack_require__(26004);
// EXTERNAL MODULE: ./components/expenses/ExpenseInfoSidebar.js + 2 modules
var ExpenseInfoSidebar = __webpack_require__(24018);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/@apollo/client/index.js
var client = __webpack_require__(46829);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(52015);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(65985);
// EXTERNAL MODULE: ./lib/hooks/useAsyncCall.js
var useAsyncCall = __webpack_require__(46233);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(97079);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledButton.tsx
var StyledButton = __webpack_require__(87268);
// EXTERNAL MODULE: ./components/StyledCard.tsx
var StyledCard = __webpack_require__(19156);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./public/static/images/pidgeon.png
var pidgeon = __webpack_require__(29032);
var pidgeon_default = /*#__PURE__*/__webpack_require__.n(pidgeon);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/expenses/ExpenseInviteNotificationBanner.js





var _templateObject;


















var resendDraftExpenseInviteMutation = (0,lib/* default */.ZP)(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  mutation ResendDraftExpenseInvite($expense: ExpenseReferenceInput!) {\n    resendDraftExpenseInvite(expense: $expense) {\n      id\n    }\n  }\n"])));
var PidgeonIllustration = styled_components_browser_esm/* default.img.attrs */.ZP.img.attrs({
  src: (pidgeon_default())
}).withConfig({
  displayName: "ExpenseInviteNotificationBanner__PidgeonIllustration",
  componentId: "sc-i0jwit-0"
})(["width:132px;height:132px;"]);

var ResendDraftInviteButton = function ResendDraftInviteButton(_ref) {
  var _data$resendDraftExpe;

  var expense = _ref.expense;

  var _useMutation = (0,client.useMutation)(resendDraftExpenseInviteMutation, {
    context: helpers/* API_V2_CONTEXT */.T
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 2),
      resendDraftInvite = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error,
      data = _useMutation2$.data;

  var success = !error && (data === null || data === void 0 ? void 0 : (_data$resendDraftExpe = data.resendDraftExpenseInvite) === null || _data$resendDraftExpe === void 0 ? void 0 : _data$resendDraftExpe.id);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
    buttonStyle: success ? 'successSecondary' : 'primary',
    buttonSize: "tiny",
    mr: 1,
    loading: loading,
    disabled: success,
    onClick: function onClick() {
      return resendDraftInvite({
        variables: {
          expense: pick_default()(expense, ['id', 'legacyId'])
        }
      });
    },
    children: success ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "ResendInviteSuccessful",
      defaultMessage: [{
        "type": 0,
        "value": "Invite sent"
      }]
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "ResendInvite",
      defaultMessage: [{
        "type": 0,
        "value": "Resend invite"
      }]
    })
  });
};

var ResendSignInEmailButton = function ResendSignInEmailButton(_ref2) {
  var createdUser = _ref2.createdUser;

  var _useAsyncCall = (0,useAsyncCall/* useAsyncCall */.N)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var userExists, redirect;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,api/* checkUserExistence */.Tl)(createdUser.email);

          case 2:
            userExists = _context.sent;

            if (!userExists) {
              _context.next = 10;
              break;
            }

            redirect = window.location.pathname + window.location.search;
            _context.next = 7;
            return (0,api/* signin */.xJ)({
              user: {
                email: createdUser.email
              },
              redirect: redirect,
              websiteUrl: (0,utils/* getWebsiteUrl */.ls)()
            });

          case 7:
            return _context.abrupt("return", _context.sent);

          case 10:
            throw Error('User does not exist.');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))),
      loading = _useAsyncCall.loading,
      call = _useAsyncCall.call,
      error = _useAsyncCall.error,
      data = _useAsyncCall.data;

  var success = !error && (data === null || data === void 0 ? void 0 : data.success);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
    buttonStyle: success ? 'successSecondary' : 'primary',
    buttonSize: "tiny",
    mr: 1,
    loading: loading,
    disabled: success,
    onClick: call,
    children: success ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "ResendEmailSuccessful",
      defaultMessage: [{
        "type": 0,
        "value": "Check your inbox!"
      }]
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "ResendEmail",
      defaultMessage: [{
        "type": 0,
        "value": "Resend email"
      }]
    })
  });
};

var ExpenseInviteNotificationBanner = function ExpenseInviteNotificationBanner(props) {
  var _props$createdUser, _props$expense$draft, _props$expense$draft$, _props$expense$draft2, _props$expense$draft3, _props$expense$draft4, _props$expense$draft5;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCard/* default */.Z, {
    py: 3,
    px: "26px",
    mb: 4,
    borderStyle: 'solid',
    "data-cy": "expense-draft-banner",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PidgeonIllustration, {
        alt: ""
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        ml: [0, 2],
        maxWidth: "448px",
        flexDirection: "column",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
          mb: "10px",
          fontWeight: "500",
          children: props.createdUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "VerifyEmailAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Verify your email address"
            }]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "InviteOnItsWay",
            defaultMessage: [{
              "type": 0,
              "value": "Your invite is on its way"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          lineHeight: "20px",
          children: props.createdUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "VerifyEmailInstructions",
            defaultMessage: [{
              "type": 0,
              "value": "A verification email has been sent to "
            }, {
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": ". Click the link to complete submitting this expense. If you have not received the email, please check your spam."
            }],
            values: {
              email: ((_props$createdUser = props.createdUser) === null || _props$createdUser === void 0 ? void 0 : _props$createdUser.email) || ((_props$expense$draft = props.expense.draft) === null || _props$expense$draft === void 0 ? void 0 : (_props$expense$draft$ = _props$expense$draft.payee) === null || _props$expense$draft$ === void 0 ? void 0 : _props$expense$draft$.name)
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "Expense.InviteIsOnItsWay.Description",
            defaultMessage: [{
              "type": 0,
              "value": "An invitation to submit this expense has been sent to "
            }, {
              "type": 1,
              "value": "email"
            }, {
              "type": 0,
              "value": ". Once they confirm and finish the process, it will appear on the expenses list."
            }],
            values: {
              email: ((_props$expense$draft2 = props.expense.draft) === null || _props$expense$draft2 === void 0 ? void 0 : (_props$expense$draft3 = _props$expense$draft2.payee) === null || _props$expense$draft3 === void 0 ? void 0 : _props$expense$draft3.email) || ((_props$expense$draft4 = props.expense.draft) === null || _props$expense$draft4 === void 0 ? void 0 : (_props$expense$draft5 = _props$expense$draft4.payee) === null || _props$expense$draft5 === void 0 ? void 0 : _props$expense$draft5.name)
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
          mt: "10px",
          children: [props.createdUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(ResendSignInEmailButton, {
            createdUser: props.createdUser
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ResendDraftInviteButton, {
            expense: props.expense
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
            href: "/help",
            buttonStyle: "standard",
            buttonSize: "tiny",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "error.contactSupport",
              defaultMessage: [{
                "type": 0,
                "value": "Contact support"
              }]
            })
          })]
        })]
      })]
    })
  });
};

ExpenseInviteNotificationBanner.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseInviteNotificationBanner",
  "props": {
    "createdUser": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": true
    }
  }
};
/* harmony default export */ var expenses_ExpenseInviteNotificationBanner = (ExpenseInviteNotificationBanner);
// EXTERNAL MODULE: ./components/MessageBox.tsx + 2 modules
var MessageBox = __webpack_require__(86702);
;// CONCATENATED MODULE: ./components/expenses/ExpenseMissingReceiptNotificationBanner.js









var ExpenseMissingReceiptNotificationBanner = function ExpenseMissingReceiptNotificationBanner(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
    py: 3,
    px: "26px",
    mb: 4,
    type: "warning",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
        ml: [0, 2],
        flexDirection: "column",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H4, {
          mb: "10px",
          fontWeight: "500",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "AttachReceipt",
            defaultMessage: [{
              "type": 0,
              "value": "Submit receipt"
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          lineHeight: "20px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "AttachReceiptInstructions",
            defaultMessage: [{
              "type": 0,
              "value": "This expense was automatically created by charging a linked credit card. To complete the process, add a description and upload the receipt. All charges must have receipts."
            }]
          })
        }), props.onEdit && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
          mt: "10px",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
            buttonSize: "tiny",
            mr: 1,
            onClick: props.onEdit,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
              id: "Expense.edit",
              defaultMessage: [{
                "type": 0,
                "value": "Edit expense"
              }]
            })
          })
        })]
      })
    })
  });
};

ExpenseMissingReceiptNotificationBanner.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseMissingReceiptNotificationBanner",
  "props": {
    "onEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_ExpenseMissingReceiptNotificationBanner = (ExpenseMissingReceiptNotificationBanner);
// EXTERNAL MODULE: ./components/expenses/ExpenseNotesForm.js
var ExpenseNotesForm = __webpack_require__(12426);
// EXTERNAL MODULE: ./components/expenses/ExpenseRecurringBanner.js
var ExpenseRecurringBanner = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/expenses/ExpenseSummary.js + 1 modules
var ExpenseSummary = __webpack_require__(2781);
// EXTERNAL MODULE: ./components/expenses/graphql/fragments.ts
var fragments = __webpack_require__(17738);
// EXTERNAL MODULE: ./components/expenses/MobileCollectiveInfoStickyBar.js
var MobileCollectiveInfoStickyBar = __webpack_require__(74448);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3323);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
;// CONCATENATED MODULE: ./components/icons/PrivateLockIcon.png
/* harmony default export */ var PrivateLockIcon = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./components/expenses/PrivateCommentsMessage.js


var _excluded = ["isAllowed", "isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











var PrivateCommentsMessage_PrivateLockIcon = styled_components_browser_esm/* default.img.attrs */.ZP.img.attrs({
  src: PrivateLockIcon
}).withConfig({
  displayName: "PrivateCommentsMessage__PrivateLockIcon",
  componentId: "sc-j2cs7v-0"
})(["width:32px;height:32px;margin-left:8px;"]);

var PrivateCommentsMessage = function PrivateCommentsMessage(_ref) {
  var isAllowed = _ref.isAllowed,
      isLoading = _ref.isLoading,
      props = objectWithoutProperties_default()(_ref, _excluded);

  if (isLoading) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
      height: 76,
      borderRadius: 8
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, _objectSpread(_objectSpread({
    type: "info"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
      alignItems: "center",
      my: 1,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PrivateCommentsMessage_PrivateLockIcon, {
        alt: ""
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
        ml: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontWeight: "bold",
          fontSize: "12px",
          lineHeight: "20px",
          children: isAllowed ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "PrivateCommentsMessage.Allowed",
            defaultMessage: [{
              "type": 0,
              "value": "Your comments are private."
            }]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "PrivateCommentsMessage.NotAllowed",
            defaultMessage: [{
              "type": 0,
              "value": "Comments are private."
            }]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text.P, {
          fontSize: "12px",
          lineHeight: "18px",
          children: isAllowed ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "PrivateCommentsMessage.AllowedDetails",
            defaultMessage: [{
              "type": 0,
              "value": "Expenses comments are private, because they sometimes contain confidential information such as payment details. Only the expense submitter and the admins can see them."
            }]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
            id: "PrivateCommentsMessage.NotAllowedDetails",
            defaultMessage: [{
              "type": 0,
              "value": "You must be signed in as an admin or the expense submitter to read comments on an expense."
            }]
          })
        })]
      })]
    })
  }));
};

PrivateCommentsMessage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PrivateCommentsMessage",
  "props": {
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isAllowed": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ var expenses_PrivateCommentsMessage = (PrivateCommentsMessage);
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
// EXTERNAL MODULE: ./components/I18nFormatters.js
var I18nFormatters = __webpack_require__(88705);
// EXTERNAL MODULE: ./components/icons/CommentIcon.js
var CommentIcon = __webpack_require__(6845);
// EXTERNAL MODULE: ./components/icons/PrivateInfoIcon.js
var PrivateInfoIcon = __webpack_require__(40777);
// EXTERNAL MODULE: ./components/LinkCollective.js
var components_LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(84842);
// EXTERNAL MODULE: ./components/StyledCheckbox.js
var StyledCheckbox = __webpack_require__(41433);
// EXTERNAL MODULE: ./components/ToastProvider.tsx
var ToastProvider = __webpack_require__(31330);
// EXTERNAL MODULE: ./components/UserProvider.js + 2 modules
var UserProvider = __webpack_require__(51927);
;// CONCATENATED MODULE: ./pages/expense.js



















var expense_templateObject, _templateObject2, _templateObject3;

function expense_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function expense_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? expense_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : expense_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable graphql/template-strings */



















































var getVariableFromProps = function getVariableFromProps(props) {
  var firstOfCurrentYear = dayjs_min_default()(new Date(new Date().getFullYear(), 0, 1)).utc(true).toISOString();
  return {
    legacyExpenseId: props.legacyExpenseId,
    draftKey: props.draftKey,
    totalPaidExpensesDateFrom: firstOfCurrentYear
  };
};

var messages = (0,react_intl_lib.defineMessages)({
  title: {
    id: "ExpensePage.title",
    defaultMessage: [{
      "type": 1,
      "value": "title"
    }, {
      "type": 0,
      "value": " · Expense #"
    }, {
      "type": 1,
      "value": "id"
    }]
  }
});
var expensePageQuery = (0,lib/* default */.ZP)(expense_templateObject || (expense_templateObject = taggedTemplateLiteral_default()(["\n  query ExpensePage($legacyExpenseId: Int!, $draftKey: String, $offset: Int, $totalPaidExpensesDateFrom: DateTime) {\n    expense(expense: { legacyId: $legacyExpenseId }, draftKey: $draftKey) {\n      id\n      ...ExpensePageExpenseFields\n      comments(limit: 100, offset: $offset) {\n        totalCount\n        nodes {\n          id\n          ...CommentFields\n        }\n      }\n    }\n\n    # As it uses a dedicated variable this needs to be separated from the ExpensePageExpenseFields fragment\n    expensePayeeStats: expense(expense: { legacyId: $legacyExpenseId }) {\n      id\n      payee {\n        id\n        stats {\n          id\n          totalPaidInvoices: totalPaidExpenses(expenseType: [INVOICE], dateFrom: $totalPaidExpensesDateFrom) {\n            valueInCents\n            currency\n          }\n          totalPaidReceipts: totalPaidExpenses(expenseType: [RECEIPT], dateFrom: $totalPaidExpensesDateFrom) {\n            valueInCents\n            currency\n          }\n          totalPaidGrants: totalPaidExpenses(expenseType: [GRANT], dateFrom: $totalPaidExpensesDateFrom) {\n            valueInCents\n            currency\n          }\n        }\n      }\n    }\n\n    loggedInAccount {\n      id\n      ...LoggedInAccountExpensePayoutFields\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n"])), fragments/* loggedInAccountExpensePayoutFieldsFragment */.sU, fragments/* expensePageExpenseFieldsFragment */.Wg, conversations_graphql/* commentFieldsFragment */.Y6);
var editExpenseMutation = (0,lib/* default */.ZP)(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  mutation EditExpense($expense: ExpenseUpdateInput!, $draftKey: String) {\n    editExpense(expense: $expense, draftKey: $draftKey) {\n      id\n      ...ExpensePageExpenseFields\n    }\n  }\n\n  ", "\n"])), fragments/* expensePageExpenseFieldsFragment */.Wg);
var verifyExpenseMutation = (0,lib/* default */.ZP)(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  mutation VerifyExpense($expense: ExpenseReferenceInput!, $draftKey: String) {\n    verifyExpense(expense: $expense, draftKey: $draftKey) {\n      id\n      ...ExpensePageExpenseFields\n    }\n  }\n\n  ", "\n"])), fragments/* expensePageExpenseFieldsFragment */.Wg);

var PrivateNoteLabel = function PrivateNoteLabel() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Text/* Span */.Dr, {
    fontSize: "12px",
    color: "black.700",
    fontWeight: "bold",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
      id: "Expense.PrivateNote",
      defaultMessage: [{
        "type": 0,
        "value": "Private note"
      }]
    }), "\xA0\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(PrivateInfoIcon/* default */.Z, {
      color: "#969BA3"
    })]
  });
};

var PAGE_STATUS = {
  VIEW: 1,
  EDIT: 2,
  EDIT_SUMMARY: 3
};
var SIDE_MARGIN_WIDTH = 'calc((100% - 1200px) / 2)';

var ExpensePage = /*#__PURE__*/function (_React$Component) {
  inherits_default()(ExpensePage, _React$Component);

  var _super = _createSuper(ExpensePage);

  function ExpensePage(props) {
    var _this$props$data$expe3;

    var _this;

    classCallCheck_default()(this, ExpensePage);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "onSummarySubmit", /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _this$props$data$expe, _this$props$data$expe2, editedExpense, createdUser;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({
                isSubmitting: true,
                error: null
              });

              editedExpense = _this.state.editedExpense;

              if (!editedExpense.payee.id && _this.state.newsletterOptIn) {
                editedExpense.payee.newsletterOptIn = _this.state.newsletterOptIn;
              }

              _context.next = 6;
              return _this.props.editExpense({
                variables: {
                  expense: (0,ExpenseForm/* prepareExpenseForSubmit */.dm)(editedExpense),
                  draftKey: ((_this$props$data$expe = _this.props.data.expense) === null || _this$props$data$expe === void 0 ? void 0 : _this$props$data$expe.status) === expense_status/* default.DRAFT */.Z.DRAFT ? _this.props.draftKey : null
                }
              });

            case 6:
              if (!(((_this$props$data$expe2 = _this.props.data.expense) === null || _this$props$data$expe2 === void 0 ? void 0 : _this$props$data$expe2.type) === expenseTypes/* default.CHARGE */.Z.CHARGE)) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return _this.props.data.refetch();

            case 9:
              createdUser = editedExpense === null || editedExpense === void 0 ? void 0 : editedExpense.payee;

              _this.setState({
                status: PAGE_STATUS.VIEW,
                isSubmitting: false,
                editedExpense: undefined,
                error: null,
                createdUser: createdUser
              });

              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);

              _this.setState({
                error: (0,errors/* getErrorFromGraphqlException */.H1)(_context.t0),
                isSubmitting: false
              });

              _this.scrollToExpenseTop();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "onNotesChanges", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState(function (state) {
        return {
          editedExpense: expense_objectSpread(expense_objectSpread({}, state.editedExpense), {}, defineProperty_default()({}, name, value))
        };
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getSuggestedTags", (0,memoize_one_esm/* default */.Z)(collective_lib/* getSuggestedTags */.P5));

    defineProperty_default()(assertThisInitialized_default()(_this), "onCommentAdded", function (comment) {
      // Add comment to cache if not already fetched
      var _this$clonePageQueryC = _this.clonePageQueryCacheData(),
          _this$clonePageQueryC2 = slicedToArray_default()(_this$clonePageQueryC, 3),
          data = _this$clonePageQueryC2[0],
          query = _this$clonePageQueryC2[1],
          variables = _this$clonePageQueryC2[2];

      update_default()(data, 'expense.comments.nodes', function (comments) {
        return uniqBy_default()([].concat(toConsumableArray_default()(comments), [comment]), 'id');
      });

      update_default()(data, 'expense.comments.totalCount', function (totalCount) {
        return totalCount + 1;
      });

      _this.props.client.writeQuery({
        query: query,
        variables: variables,
        data: data
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onCommentDeleted", function (comment) {
      var _this$clonePageQueryC3 = _this.clonePageQueryCacheData(),
          _this$clonePageQueryC4 = slicedToArray_default()(_this$clonePageQueryC3, 3),
          data = _this$clonePageQueryC4[0],
          query = _this$clonePageQueryC4[1],
          variables = _this$clonePageQueryC4[2];

      update_default()(data, 'expense.comments.nodes', function (comments) {
        return comments.filter(function (c) {
          return c.id !== comment.id;
        });
      });

      update_default()(data, 'expense.comments.totalCount', function (totalCount) {
        return totalCount - 1;
      });

      _this.props.client.writeQuery({
        query: query,
        variables: variables,
        data: data
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "fetchMore", /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var _this$props, legacyExpenseId, draftKey, data;

      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props = _this.props, legacyExpenseId = _this$props.legacyExpenseId, draftKey = _this$props.draftKey, data = _this$props.data; // refetch before fetching more as comments added to the cache can change the offset

              _context2.next = 3;
              return data.refetch();

            case 3:
              _context2.next = 5;
              return data.fetchMore({
                variables: {
                  legacyExpenseId: legacyExpenseId,
                  draftKey: draftKey,
                  offset: get_default()(data, 'expense.comments.nodes', []).length
                },
                updateQuery: function updateQuery(prev, _ref3) {
                  var fetchMoreResult = _ref3.fetchMoreResult;

                  if (!fetchMoreResult) {
                    return prev;
                  }

                  var newValues = {};
                  newValues.expense = expense_objectSpread(expense_objectSpread({}, prev.expense), {}, {
                    comments: expense_objectSpread(expense_objectSpread({}, fetchMoreResult.expense.comments), {}, {
                      nodes: [].concat(toConsumableArray_default()(prev.expense.comments.nodes), toConsumableArray_default()(fetchMoreResult.expense.comments.nodes))
                    })
                  });
                  return Object.assign({}, prev, newValues);
                }
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "getThreadItems", (0,memoize_one_esm/* default */.Z)(function (comments, activities) {
      return sortBy_default()([].concat(toConsumableArray_default()(comments || []), toConsumableArray_default()(activities)), 'createdAt');
    }));

    defineProperty_default()(assertThisInitialized_default()(_this), "onEditBtnClick", /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _this.setState(function () {
                return {
                  status: PAGE_STATUS.EDIT,
                  editedExpense: _this.props.data.expense
                };
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    defineProperty_default()(assertThisInitialized_default()(_this), "onDelete", /*#__PURE__*/function () {
      var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee4(expense) {
        var _collective$parent, _collective$parent2;

        var collective, parentCollectiveSlugRoute, collectiveType, collectiveTypeRoute;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                collective = expense.account;
                parentCollectiveSlugRoute = (_collective$parent = collective.parent) !== null && _collective$parent !== void 0 && _collective$parent.slug ? "".concat((_collective$parent2 = collective.parent) === null || _collective$parent2 === void 0 ? void 0 : _collective$parent2.slug, "/") : '';
                collectiveType = collective.parent ? (0,collective_lib/* getCollectiveTypeForUrl */.rf)(collective) : undefined;
                collectiveTypeRoute = collectiveType ? "".concat(collectiveType, "/") : '';
                return _context4.abrupt("return", _this.props.router.replace("".concat(parentCollectiveSlugRoute).concat(collectiveTypeRoute).concat(collective.slug, "/expenses")));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }());

    _this.expenseTopRef = /*#__PURE__*/react.createRef();
    _this.state = {
      hasRefetchedDataForUser: Boolean(props.LoggedInUser),
      // If the page is loaded directly with a logged in user, we can consider the query was already authenticated
      error: null,
      status: _this.props.draftKey && ((_this$props$data$expe3 = _this.props.data.expense) === null || _this$props$data$expe3 === void 0 ? void 0 : _this$props$data$expe3.status) === expense_status/* default.DRAFT */.Z.DRAFT ? PAGE_STATUS.EDIT : PAGE_STATUS.VIEW,
      editedExpense: null,
      isSubmitting: false,
      isPoolingEnabled: true,
      tos: false,
      newsletterOptIn: false,
      createdUser: null
    };
    _this.pollingInterval = 60;
    _this.pollingTimeout = null;
    _this.pollingStarted = false;
    _this.pollingPaused = false;
    _this.handlePolling = debounce_default()(_this.handlePolling.bind(assertThisInitialized_default()(_this)), 100);
    return _this;
  }

  createClass_default()(ExpensePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$data$expe4,
          _this2 = this,
          _expense$permissions,
          _expense$createdByAcc,
          _this$props$LoggedInU,
          _this$props$LoggedInU2;

      var _this$props2 = this.props,
          router = _this$props2.router,
          data = _this$props2.data,
          legacyExpenseId = _this$props2.legacyExpenseId;
      var account = data === null || data === void 0 ? void 0 : data.account;
      (0,url_helpers/* addParentToURLIfMissing */.Bc)(router, account, "/expenses/".concat(legacyExpenseId));
      var shouldEditDraft = ((_this$props$data$expe4 = this.props.data.expense) === null || _this$props$data$expe4 === void 0 ? void 0 : _this$props$data$expe4.status) === expense_status/* default.DRAFT */.Z.DRAFT && this.props.draftKey;

      if (shouldEditDraft) {
        this.setState(function () {
          return {
            status: PAGE_STATUS.EDIT,
            editedExpense: _this2.props.data.expense,
            isPoolingEnabled: false
          };
        });
      }

      var expense = data === null || data === void 0 ? void 0 : data.expense;

      if ((expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.UNVERIFIED */.Z.UNVERIFIED && expense !== null && expense !== void 0 && (_expense$permissions = expense.permissions) !== null && _expense$permissions !== void 0 && _expense$permissions.canEdit && this.props.LoggedInUser && (expense === null || expense === void 0 ? void 0 : (_expense$createdByAcc = expense.createdByAccount) === null || _expense$createdByAcc === void 0 ? void 0 : _expense$createdByAcc.slug) === ((_this$props$LoggedInU = this.props.LoggedInUser) === null || _this$props$LoggedInU === void 0 ? void 0 : (_this$props$LoggedInU2 = _this$props$LoggedInU.collective) === null || _this$props$LoggedInU2 === void 0 ? void 0 : _this$props$LoggedInU2.slug)) {
        this.handleExpenseVerification();
      }

      this.handlePolling();
      document.addEventListener('mousemove', this.handlePolling);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps, oldState) {
      var _this$props$data, _expense$permissions2, _expense$items;

      // Refetch data when users are logged in to make sure they can see the private info
      if (!oldProps.LoggedInUser && this.props.LoggedInUser) {
        this.refetchDataForUser();
      } // Automatically edit expense if missing receipt


      var expense = (_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data.expense;
      var isMissingReceipt = (expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.PAID */.Z.PAID && (expense === null || expense === void 0 ? void 0 : expense.type) === expenseTypes/* default.CHARGE */.Z.CHARGE && (expense === null || expense === void 0 ? void 0 : (_expense$permissions2 = expense.permissions) === null || _expense$permissions2 === void 0 ? void 0 : _expense$permissions2.canEdit) && (expense === null || expense === void 0 ? void 0 : (_expense$items = expense.items) === null || _expense$items === void 0 ? void 0 : _expense$items.every(function (item) {
        return !item.url;
      }));

      if (this.props.edit && isMissingReceipt && this.state.status !== PAGE_STATUS.EDIT) {
        this.onEditBtnClick();
        this.props.router.replace(document.location.pathname);
      } // Scroll to expense's top when changing status


      if (oldState.status !== this.state.status) {
        this.scrollToExpenseTop();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props$data2;

      if ((_this$props$data2 = this.props.data) !== null && _this$props$data2 !== void 0 && _this$props$data2.stopPolling) {
        this.props.data.stopPolling();
      }

      document.removeEventListener('mousemove', this.handlePolling);
    }
  }, {
    key: "handlePolling",
    value: function handlePolling() {
      var _this3 = this;

      if (this.state.isPoolingEnabled) {
        if (!this.pollingStarted) {
          var _this$props$data4;

          if (this.pollingPaused) {
            var _this$props$data3;

            // The polling was paused, so we immediately refetch
            if ((_this$props$data3 = this.props.data) !== null && _this$props$data3 !== void 0 && _this$props$data3.refetch) {
              this.props.data.refetch();
            }

            this.pollingPaused = false;
          }

          if ((_this$props$data4 = this.props.data) !== null && _this$props$data4 !== void 0 && _this$props$data4.startPolling(this.pollingInterval * 1000)) {
            this.props.data.stopPolling();
          }

          this.pollingStarted = true;
        }

        clearTimeout(this.pollingTimeout);
        this.pollingTimeout = setTimeout(function () {
          var _this3$props$data;

          // No mouse movement was detected since 60sec, we stop polling
          if ((_this3$props$data = _this3.props.data) !== null && _this3$props$data !== void 0 && _this3$props$data.stopPolling) {
            _this3.props.data.stopPolling();
          }

          _this3.pollingStarted = false;
          _this3.pollingPaused = true;
        }, this.pollingInterval * 1000);
      }
    }
  }, {
    key: "refetchDataForUser",
    value: function () {
      var _refetchDataForUser = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee5() {
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.setState({
                  hasRefetchedDataForUser: false
                });
                _context5.next = 4;
                return this.props.data.refetch();

              case 4:
                _context5.prev = 4;
                this.setState({
                  hasRefetchedDataForUser: true
                });
                return _context5.finish(4);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0,, 4, 7]]);
      }));

      function refetchDataForUser() {
        return _refetchDataForUser.apply(this, arguments);
      }

      return refetchDataForUser;
    }()
  }, {
    key: "handleExpenseVerification",
    value: function () {
      var _handleExpenseVerification = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        var _this$props$data5;

        var expense, _this$props3, parentCollectiveSlug, collectiveSlug, legacyExpenseId, data, parentCollectiveSlugRoute, collectiveType, collectiveTypeRoute;

        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                expense = (_this$props$data5 = this.props.data) === null || _this$props$data5 === void 0 ? void 0 : _this$props$data5.expense;
                _context6.next = 3;
                return this.props.verifyExpense({
                  variables: {
                    expense: {
                      id: expense.id
                    }
                  }
                });

              case 3:
                _this$props3 = this.props, parentCollectiveSlug = _this$props3.parentCollectiveSlug, collectiveSlug = _this$props3.collectiveSlug, legacyExpenseId = _this$props3.legacyExpenseId, data = _this$props3.data;
                parentCollectiveSlugRoute = parentCollectiveSlug ? "".concat(parentCollectiveSlug, "/") : '';
                collectiveType = parentCollectiveSlug ? (0,collective_lib/* getCollectiveTypeForUrl */.rf)(data === null || data === void 0 ? void 0 : data.account) : undefined;
                collectiveTypeRoute = collectiveType ? "".concat(collectiveType, "/") : '';
                _context6.next = 9;
                return this.props.router.push("".concat(parentCollectiveSlugRoute).concat(collectiveTypeRoute).concat(collectiveSlug, "/expenses/").concat(legacyExpenseId));

              case 9:
                this.props.data.refetch();
                this.props.addToast({
                  type: ToastProvider/* TOAST_TYPE.SUCCESS */["do"].SUCCESS,
                  title: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Expense.Submitted",
                    defaultMessage: [{
                      "type": 0,
                      "value": "Expense submitted"
                    }]
                  }),
                  message: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                    id: "Expense.SuccessPage",
                    defaultMessage: [{
                      "type": 0,
                      "value": "You can edit or review updates on this page."
                    }]
                  })
                });
                window.scrollTo(0, 0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function handleExpenseVerification() {
        return _handleExpenseVerification.apply(this, arguments);
      }

      return handleExpenseVerification;
    }()
  }, {
    key: "scrollToExpenseTop",
    value: function scrollToExpenseTop() {
      if (this.expenseTopRef.current) {
        this.expenseTopRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, {
    key: "getPageMetaData",
    value: function getPageMetaData(expense) {
      var _this$props4 = this.props,
          intl = _this$props4.intl,
          legacyExpenseId = _this$props4.legacyExpenseId;
      var baseMetadata = (0,collective_lib/* getCollectivePageMetadata */.Xq)(expense === null || expense === void 0 ? void 0 : expense.account);

      if (expense !== null && expense !== void 0 && expense.description) {
        return expense_objectSpread(expense_objectSpread({}, baseMetadata), {}, {
          title: intl.formatMessage(messages.title, {
            id: legacyExpenseId,
            title: expense.description
          })
        });
      } else {
        return baseMetadata;
      }
    }
  }, {
    key: "clonePageQueryCacheData",
    value: function clonePageQueryCacheData() {
      var client = this.props.client;
      var query = expensePageQuery;
      var variables = getVariableFromProps(this.props);

      var data = cloneDeep_default()(client.readQuery({
        query: query,
        variables: variables
      }));

      return [data, query, variables];
    }
  }, {
    key: "render",
    value: function render() {
      var _data$expensePayeeSta,
          _data$expensePayeeSta2,
          _expense$attachedFile,
          _expense$permissions3,
          _expense$items2,
          _ref6,
          _this4 = this,
          _expense$comments2;

      var _this$props5 = this.props,
          collectiveSlug = _this$props5.collectiveSlug,
          data = _this$props5.data,
          LoggedInUser = _this$props5.LoggedInUser,
          loadingLoggedInUser = _this$props5.loadingLoggedInUser,
          intl = _this$props5.intl;
      var _this$state = this.state,
          hasRefetchedDataForUser = _this$state.hasRefetchedDataForUser,
          error = _this$state.error,
          status = _this$state.status,
          editedExpense = _this$state.editedExpense;
      var isRefetchingDataForUser = LoggedInUser && !hasRefetchedDataForUser;

      if (!data.loading && !isRefetchingDataForUser) {
        if (!data || data.error) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
            data: data
          });
        } else if (!data.expense) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
            error: (0,errors/* generateNotFoundError */.mN)(null),
            log: false
          });
        } else if (!data.expense.account || this.props.collectiveSlug !== data.expense.account.slug) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorPage/* default */.Z, {
            error: (0,errors/* generateNotFoundError */.mN)(collectiveSlug),
            log: false
          });
        }
      }

      var expense = cloneDeep_default()(data.expense);

      if (expense && (_data$expensePayeeSta = data.expensePayeeStats) !== null && _data$expensePayeeSta !== void 0 && (_data$expensePayeeSta2 = _data$expensePayeeSta.payee) !== null && _data$expensePayeeSta2 !== void 0 && _data$expensePayeeSta2.stats) {
        var _data$expensePayeeSta3, _data$expensePayeeSta4;

        expense.payee.stats = (_data$expensePayeeSta3 = data.expensePayeeStats) === null || _data$expensePayeeSta3 === void 0 ? void 0 : (_data$expensePayeeSta4 = _data$expensePayeeSta3.payee) === null || _data$expensePayeeSta4 === void 0 ? void 0 : _data$expensePayeeSta4.stats;
      }

      var loggedInAccount = data.loggedInAccount;
      var collective = expense === null || expense === void 0 ? void 0 : expense.account;
      var host = collective === null || collective === void 0 ? void 0 : collective.host;
      var canSeeInvoiceInfo = expense === null || expense === void 0 ? void 0 : expense.permissions.canSeeInvoiceInfo;
      var isInvoiceOrSettlement = [expenseTypes/* default.INVOICE */.Z.INVOICE, expenseTypes/* default.SETTLEMENT */.Z.SETTLEMENT].includes(expense === null || expense === void 0 ? void 0 : expense.type);
      var isDraft = (expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.DRAFT */.Z.DRAFT;
      var hasAttachedFiles = isInvoiceOrSettlement && canSeeInvoiceInfo || (expense === null || expense === void 0 ? void 0 : (_expense$attachedFile = expense.attachedFiles) === null || _expense$attachedFile === void 0 ? void 0 : _expense$attachedFile.length) > 0;

      var showTaxFormMsg = includes_default()(expense === null || expense === void 0 ? void 0 : expense.requiredLegalDocuments, 'US_TAX_FORM');

      var isMissingReceipt = (expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.PAID */.Z.PAID && (expense === null || expense === void 0 ? void 0 : expense.type) === expenseTypes/* default.CHARGE */.Z.CHARGE && (expense === null || expense === void 0 ? void 0 : (_expense$permissions3 = expense.permissions) === null || _expense$permissions3 === void 0 ? void 0 : _expense$permissions3.canEdit) && (expense === null || expense === void 0 ? void 0 : (_expense$items2 = expense.items) === null || _expense$items2 === void 0 ? void 0 : _expense$items2.every(function (item) {
        return !item.url;
      }));
      var isRecurring = expense === null || expense === void 0 ? void 0 : expense.recurringExpense;
      var skipSummary = isMissingReceipt && status === PAGE_STATUS.EDIT;
      var payoutProfiles = (0,expenses/* getPayoutProfiles */.rX)(loggedInAccount);
      var threadItems;

      if (expense) {
        var _expense$comments;

        threadItems = this.getThreadItems((_expense$comments = expense.comments) === null || _expense$comments === void 0 ? void 0 : _expense$comments.nodes, expense.activities);
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, expense_objectSpread(expense_objectSpread({
        collective: collective,
        canonicalURL: "".concat((0,url_helpers/* getCollectivePageCanonicalURL */.Bu)(collective), "/expense")
      }, this.getPageMetaData(expense)), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(collective_navbar/* default */.Z, {
          collective: collective,
          isLoading: !collective,
          selectedCategory: constants/* NAVBAR_CATEGORIES.BUDGET */.t.BUDGET,
          callsToAction: {
            hasSubmitExpense: status === PAGE_STATUS.VIEW
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
          flexDirection: ['column', 'row'],
          px: [2, 3, 4],
          py: [0, 5],
          mt: 3,
          "data-cy": "expense-page-content",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: SIDE_MARGIN_WIDTH
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
            flex: "1 1 650px",
            minWidth: 300,
            maxWidth: [null, null, null, 792],
            mr: [null, 2, 3, 4],
            px: 2,
            ref: this.expenseTopRef,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseSummary/* SummaryHeader */.w, {
              fontSize: "24px",
              lineHeight: "32px",
              mb: 24,
              py: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "ExpenseSummaryTitle",
                defaultMessage: [{
                  "type": 5,
                  "value": "type",
                  "options": {
                    "CHARGE": {
                      "value": [{
                        "type": 0,
                        "value": "Charge"
                      }]
                    },
                    "INVOICE": {
                      "value": [{
                        "type": 0,
                        "value": "Invoice"
                      }]
                    },
                    "RECEIPT": {
                      "value": [{
                        "type": 0,
                        "value": "Receipt"
                      }]
                    },
                    "GRANT": {
                      "value": [{
                        "type": 0,
                        "value": "Grant"
                      }]
                    },
                    "SETTLEMENT": {
                      "value": [{
                        "type": 0,
                        "value": "Settlement"
                      }]
                    },
                    "other": {
                      "value": [{
                        "type": 0,
                        "value": "Expense"
                      }]
                    }
                  }
                }, {
                  "type": 0,
                  "value": " Summary to "
                }, {
                  "type": 8,
                  "value": "LinkCollective",
                  "children": [{
                    "type": 1,
                    "value": "collectiveName"
                  }]
                }],
                values: {
                  type: (_ref6 = editedExpense || expense) === null || _ref6 === void 0 ? void 0 : _ref6.type,
                  collectiveName: collective === null || collective === void 0 ? void 0 : collective.name,
                  LinkCollective: function LinkCollective(text) {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(components_LinkCollective/* default */.Z, {
                      collective: collective,
                      children: text
                    });
                  }
                }
              })
            }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
              type: "error",
              withIcon: true,
              mb: 4,
              children: (0,errors/* formatErrorMessage */.jN)(intl, error)
            }), showTaxFormMsg && /*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
              type: "warning",
              withIcon: true,
              mb: 4,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                id: "expenseNeedsTaxFormMessage.msg",
                defaultMessage: [{
                  "type": 0,
                  "value": "We need your tax information before we can pay you. You will receive an email with a link to fill out a form. If you have not received the email within 24 hours, check your spam, then contact "
                }, {
                  "type": 8,
                  "value": "I18nSupportLink",
                  "children": [{
                    "type": 0,
                    "value": "support"
                  }]
                }, {
                  "type": 0,
                  "value": ". Questions? See "
                }, {
                  "type": 8,
                  "value": "Link",
                  "children": [{
                    "type": 0,
                    "value": "help docs about taxes"
                  }]
                }, {
                  "type": 0,
                  "value": "."
                }],
                values: {
                  I18nSupportLink: I18nFormatters/* I18nSupportLink */.wl,
                  Link: (0,I18nFormatters/* getI18nLink */.fw)({
                    href: 'https://docs.opencollective.com/help/expenses-and-getting-paid/tax-information',
                    openInNewTab: true
                  })
                }
              })
            }), status === PAGE_STATUS.VIEW && ((expense === null || expense === void 0 ? void 0 : expense.status) === expense_status/* default.UNVERIFIED */.Z.UNVERIFIED && this.state.createdUser || isDraft && !isRecurring) && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseInviteNotificationBanner, {
              expense: expense,
              createdUser: this.state.createdUser
            }), isMissingReceipt && /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_ExpenseMissingReceiptNotificationBanner, {
              onEdit: status !== PAGE_STATUS.EDIT && this.onEditBtnClick
            }), status !== PAGE_STATUS.EDIT && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
              mb: 3,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseSummary/* default */.Z, {
                expense: status === PAGE_STATUS.EDIT_SUMMARY ? editedExpense : expense,
                host: host,
                isLoading: !expense,
                isEditing: status === PAGE_STATUS.EDIT_SUMMARY,
                isLoadingLoggedInUser: loadingLoggedInUser || isRefetchingDataForUser,
                collective: collective,
                onEdit: this.onEditBtnClick,
                onDelete: this.onDelete,
                suggestedTags: this.getSuggestedTags(collective),
                canEditTags: get_default()(expense, 'permissions.canEditTags', false),
                showProcessButtons: true
              }), status !== PAGE_STATUS.EDIT_SUMMARY && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [hasAttachedFiles && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledCard/* default */.Z, {
                  mt: "32px",
                  p: "32px",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
                    fontSize: "16px",
                    fontWeight: "700",
                    mb: 3,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "Downloads",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Downloads"
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseAttachedFiles/* default */.Z, {
                    files: expense.attachedFiles,
                    collective: collective,
                    expense: expense,
                    showInvoice: canSeeInvoiceInfo
                  })]
                }), (expense === null || expense === void 0 ? void 0 : expense.privateMessage) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
                  mt: 4,
                  pb: 4,
                  borderBottom: "1px solid #DCDEE0",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text.H5, {
                    fontSize: "16px",
                    mb: 3,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "expense.notes",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Notes"
                      }]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(PrivateNoteLabel, {
                    mb: 2
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(HTMLContent/* default */.Z, {
                    color: "black.700",
                    mt: 1,
                    fontSize: "13px",
                    content: expense.privateMessage
                  })]
                })]
              }), status === PAGE_STATUS.EDIT_SUMMARY && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Box */.xu, {
                mt: 24,
                children: [isDraft && !loggedInAccount && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MessageBox/* default */.Z, {
                    type: "info",
                    fontSize: "12px",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "Expense.SignUpInfoBox",
                      defaultMessage: [{
                        "type": 0,
                        "value": "You need to create an account to receive a payment from "
                      }, {
                        "type": 1,
                        "value": "collectiveName"
                      }, {
                        "type": 0,
                        "value": ", by clicking 'Join and Submit' you agree to create an account on Open Collective."
                      }],
                      values: {
                        collectiveName: collective.name
                      }
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    mt: 3,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
                      name: "tos",
                      label: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                        id: "TOSAndPrivacyPolicyAgreement",
                        defaultMessage: [{
                          "type": 0,
                          "value": "I agree with the "
                        }, {
                          "type": 1,
                          "value": "toslink"
                        }, {
                          "type": 0,
                          "value": " and "
                        }, {
                          "type": 1,
                          "value": "privacylink"
                        }, {
                          "type": 0,
                          "value": " of Open Collective."
                        }],
                        values: {
                          toslink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                            href: "/tos",
                            openInNewTab: true,
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "tos",
                              defaultMessage: [{
                                "type": 0,
                                "value": "terms of service"
                              }]
                            })
                          }),
                          privacylink: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink/* default */.Z, {
                            href: "/privacypolicy",
                            openInNewTab: true,
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                              id: "privacypolicy",
                              defaultMessage: [{
                                "type": 0,
                                "value": "privacy policy"
                              }]
                            })
                          })
                        }
                      }),
                      required: true,
                      onChange: function onChange(_ref7) {
                        var checked = _ref7.checked;

                        _this4.setState({
                          tos: checked
                        });
                      }
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                    mt: 3,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox/* default */.Z, {
                      name: "newsletterOptIn",
                      label: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                          id: "cNkrNr",
                          defaultMessage: [{
                            "type": 0,
                            "value": "Subscribe to our monthly newsletter"
                          }]
                        }), "."]
                      }),
                      required: true,
                      onChange: function onChange(_ref8) {
                        var checked = _ref8.checked;

                        _this4.setState({
                          newsletterOptIn: checked
                        });
                      }
                    })
                  })]
                }), !isDraft && /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseNotesForm/* default */.Z, {
                  onChange: this.onNotesChanges,
                  defaultValue: expense.privateMessage
                }), isRecurring && /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseRecurringBanner/* default */.Z, {
                  expense: expense
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
                  flexWrap: "wrap",
                  mt: 4,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton/* default */.Z, {
                    mt: 2,
                    minWidth: 175,
                    width: ['100%', 'auto'],
                    mx: [2, 0],
                    mr: [null, 3],
                    whiteSpace: "nowrap",
                    "data-cy": "edit-expense-btn",
                    onClick: function onClick() {
                      return _this4.setState({
                        status: PAGE_STATUS.EDIT
                      });
                    },
                    disabled: this.state.isSubmitting,
                    children: ["\u2190 ", /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "Expense.edit",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Edit expense"
                      }]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButton/* default */.Z, {
                    buttonStyle: "primary",
                    mt: 2,
                    minWidth: 175,
                    width: ['100%', 'auto'],
                    mx: [2, 0],
                    mr: [null, 3],
                    whiteSpace: "nowrap",
                    "data-cy": "save-expense-btn",
                    onClick: this.onSummarySubmit,
                    loading: this.state.isSubmitting,
                    disabled: isDraft ? !loggedInAccount && !this.state.tos : false,
                    children: isDraft && !loggedInAccount ? /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "Expense.JoinAndSubmit",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Join and Submit"
                      }]
                    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(message/* default */.Z, {
                      id: "SaveChanges",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Save changes"
                      }]
                    })
                  })]
                })]
              })]
            }), status === PAGE_STATUS.EDIT && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: 3,
              children: data.loading || loadingLoggedInUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingPlaceholder/* default */.Z, {
                width: "100%",
                height: 400
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseForm/* default */.ZP, {
                collective: collective,
                loading: data.loading || loadingLoggedInUser || isRefetchingDataForUser,
                expense: editedExpense || expense,
                originalExpense: expense,
                expensesTags: this.getSuggestedTags(collective),
                payoutProfiles: payoutProfiles,
                loggedInAccount: loggedInAccount,
                onCancel: function onCancel() {
                  return _this4.setState({
                    status: PAGE_STATUS.VIEW,
                    editedExpense: null
                  });
                },
                onSubmit: function onSubmit(editedExpense) {
                  if (skipSummary) {
                    _this4.setState({
                      editedExpense: editedExpense
                    });

                    return _this4.onSummarySubmit();
                  } else {
                    _this4.setState({
                      editedExpense: editedExpense,
                      status: PAGE_STATUS.EDIT_SUMMARY
                    });
                  }
                },
                validateOnChange: true,
                disableSubmitIfUntouched: true
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              my: 4,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(expenses_PrivateCommentsMessage, {
                isAllowed: expense === null || expense === void 0 ? void 0 : expense.permissions.canComment,
                isLoading: loadingLoggedInUser || isRefetchingDataForUser
              })
            }), expense && /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              mb: 3,
              pt: 3,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Thread/* default */.Z, {
                collective: collective,
                hasMore: ((_expense$comments2 = expense.comments) === null || _expense$comments2 === void 0 ? void 0 : _expense$comments2.totalCount) > threadItems.length,
                items: threadItems,
                fetchMore: this.fetchMore,
                onCommentDeleted: this.onCommentDeleted
              })
            }), (expense === null || expense === void 0 ? void 0 : expense.permissions.canComment) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Flex */.kC, {
              mt: "40px",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                display: ['none', null, 'block'],
                flex: "0 0",
                p: 3,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(CommentIcon/* default */.Z, {
                  size: 24,
                  color: "lightgrey"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
                flex: "1 1",
                maxWidth: [null, null, 'calc(100% - 56px)'],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(CommentForm/* default */.Z, {
                  id: "new-comment-on-expense",
                  ExpenseId: expense && expense.id,
                  disabled: !expense,
                  onSuccess: this.onCommentAdded
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Flex */.kC, {
            flex: "1 1",
            justifyContent: ['center', null, 'flex-start', 'flex-end'],
            pt: 80,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
              minWidth: 270,
              width: ['100%', null, null, 275],
              px: 2,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExpenseInfoSidebar/* default */.Z, {
                isLoading: data.loading || loadingLoggedInUser || isRefetchingDataForUser,
                collective: collective,
                host: host
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* Box */.xu, {
            width: SIDE_MARGIN_WIDTH
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(MobileCollectiveInfoStickyBar/* default */.Z, {
          isLoading: data.loading || loadingLoggedInUser || isRefetchingDataForUser,
          collective: collective,
          host: host
        })]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref9) {
      var _ref9$query = _ref9.query,
          parentCollectiveSlug = _ref9$query.parentCollectiveSlug,
          collectiveSlug = _ref9$query.collectiveSlug,
          ExpenseId = _ref9$query.ExpenseId,
          key = _ref9$query.key,
          edit = _ref9$query.edit;
      return {
        parentCollectiveSlug: parentCollectiveSlug,
        collectiveSlug: collectiveSlug,
        edit: edit,
        draftKey: key,
        legacyExpenseId: parseInt(ExpenseId)
      };
    }
  }]);

  return ExpensePage;
}(react.Component);

var addExpensePageData = (0,graphql/* graphql */.B)(expensePageQuery, {
  options: function options(props) {
    return {
      variables: getVariableFromProps(props),
      context: helpers/* API_V2_CONTEXT */.T
    };
  }
});
var addEditExpenseMutation = (0,graphql/* graphql */.B)(editExpenseMutation, {
  name: 'editExpense',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
var addVerifyExpenseMutation = (0,graphql/* graphql */.B)(verifyExpenseMutation, {
  name: 'verifyExpense',
  options: {
    context: helpers/* API_V2_CONTEXT */.T
  }
});
ExpensePage.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "getInitialProps",
    "docblock": null,
    "modifiers": ["static"],
    "params": [{
      "name": "{ query: { parentCollectiveSlug, collectiveSlug, ExpenseId, key, edit } }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "handlePolling",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "refetchDataForUser",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "handleExpenseVerification",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onSummarySubmit",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onNotesChanges",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "scrollToExpenseTop",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "getPageMetaData",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "expense",
      "type": null
    }],
    "returns": null
  }, {
    "name": "clonePageQueryCacheData",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onCommentAdded",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "comment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "onCommentDeleted",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "comment",
      "type": null
    }],
    "returns": null
  }, {
    "name": "fetchMore",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onEditBtnClick",
    "docblock": null,
    "modifiers": ["async"],
    "params": [],
    "returns": null
  }, {
    "name": "onDelete",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "expense",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ExpensePage",
  "props": {
    "collectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "parentCollectiveSlug": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "legacyExpenseId": {
      "description": "",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "draftKey": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "edit": {
      "description": "",
      "type": {
        "name": "string"
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
    "client": {
      "description": "@ignore from withApollo",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "data": {
      "description": "from withData",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "editExpense": {
      "description": "from addEditExpenseMutation",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "verifyExpense": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "addToast": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "intl": {
      "description": "from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "expensesTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": false
            },
            "tag": {
              "name": "string",
              "required": false
            }
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
/* harmony default export */ var expense = ((0,injectIntl/* default */.ZP)((0,ToastProvider/* withToasts */.CP)(addVerifyExpenseMutation(addExpensePageData((0,withApollo/* withApollo */.C)((0,UserProvider/* withUser */.ns)((0,router.withRouter)(addEditExpenseMutation(ExpensePage)))))))));

/***/ }),

/***/ 91927:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/expense",
      function () {
        return __webpack_require__(3522);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [3662,5328,6567,1512,8966,8027,5126,5490,2092,9158,468,8881,146,5813,4842,4154,1012,1861,7965,4691,7653,6467,1448,4944,9656,984,2750,9774,2888,179], function() { return __webpack_exec__(91927); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=expense-4706d56b33e07978.js.map