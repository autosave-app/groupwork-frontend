"use strict";
exports.id = 2143;
exports.ids = [2143];
exports.modules = {

/***/ 32143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_InputTypeCountry)
});

// EXTERNAL MODULE: external "lodash/orderBy"
var orderBy_ = __webpack_require__(49949);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy_);
// EXTERNAL MODULE: external "lodash/isUndefined"
var isUndefined_ = __webpack_require__(22133);
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "country-currency-emoji-flags"
var external_country_currency_emoji_flags_ = __webpack_require__(28992);
// EXTERNAL MODULE: external "memoize-one"
var external_memoize_one_ = __webpack_require__(17809);
var external_memoize_one_default = /*#__PURE__*/__webpack_require__.n(external_memoize_one_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
;// CONCATENATED MODULE: ./lib/geolocation_api.js
/**
 * Fetch user geolocation from third party API. It is only meant to be used on
 * client side. If called from server side, this function returns null;
 *
 * @returns countryCode: {string} two-letters ISO code or null if any error occurs
 */
const fetchGeoLocation = async () => {
  if (true) {
    return null;
  }

  try {
    const response = await fetch('https://wtfismyip.com/json');
    const body = await response.json();
    return body.YourFuckingCountryCode;
  } catch (e) {
    // Ignore errors
    return null;
  }
};

/* harmony default export */ const geolocation_api = (fetchGeoLocation);
// EXTERNAL MODULE: ./lib/i18n/index.js
var i18n = __webpack_require__(78080);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledSelect.tsx
var StyledSelect = __webpack_require__(66943);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/InputTypeCountry.js


const _excluded = ["defaultValue", "value", "intl", "onChange", "locale", "name", "inputId"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class InputTypeCountry extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getOptions", external_memoize_one_default()(locale => {
      const options = Object.keys(external_country_currency_emoji_flags_.countryData).map(code => {
        return {
          value: code,
          country: this.countryNames.of(code),
          label: this.generateCountryLabel(locale, code)
        };
      });
      return [...this.props.customOptions, ...orderBy_default()(options, 'country')];
    }));

    _defineProperty(this, "getSelectedOption", external_memoize_one_default()((locale, country) => {
      if (!country) {
        return null;
      }

      const code = country.toUpperCase();
      const customOption = this.props.customOptions.find(customOption => customOption.value === code);
      return customOption || {
        value: code,
        label: this.generateCountryLabel(locale, code)
      };
    }));

    this.countryNames = (0,i18n/* getIntlDisplayNames */._)(props.intl.locale, 'region');
  }

  async componentDidMount() {
    if (this.props.autoDetect && !this.props.value && !this.props.defaultValue) {
      const country = await geolocation_api(); // Country may have been changed by the user by the time geolocation API respond

      if (country && !this.props.value && !this.props.defaultValue) {
        this.props.onChange(country);
      }
    }
  }

  generateCountryLabel(locale, countryCode) {
    const countryName = this.countryNames.of(countryCode);
    const emoji = (0,external_country_currency_emoji_flags_.getEmojiByCountryCode)(countryCode);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Flex */.kC, {
      fontSize: this.props.fontSize,
      lineHeight: "20px",
      fontWeight: "500",
      title: countryName,
      children: [emoji && /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
        children: emoji
      }), "\xA0\xA0", /*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
        color: "black.800",
        children: countryName
      })]
    });
  }

  filterOptions(candidate, input) {
    if (input) {
      return candidate.data.country?.toLowerCase()?.includes(input.toLowerCase()) || candidate.data.value?.toLowerCase() === input.toLowerCase();
    }

    return true;
  }

  render() {
    const _this$props = this.props,
          {
      defaultValue,
      value,
      intl,
      onChange,
      locale,
      name,
      inputId
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/jsx_runtime_.jsx(StyledSelect/* default */.ZP, _objectSpread({
      name: name,
      inputId: inputId,
      minWidth: 150,
      options: this.getOptions(locale || intl.locale, defaultValue),
      filterOption: this.filterOptions,
      onChange: ({
        value
      }) => onChange(value),
      value: !isUndefined_default()(value) ? this.getSelectedOption(locale || intl.locale, value) : undefined,
      defaultValue: defaultValue ? this.getSelectedOption(locale || intl.locale, defaultValue) : undefined,
      placeholder: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
        id: "InputTypeCountry.placeholder",
        defaultMessage: [{
          "type": 0,
          "value": "Please select your country"
        }]
      }),
      "data-cy": "country-select"
    }, props));
  }

}

_defineProperty(InputTypeCountry, "defaultProps", {
  name: 'country',
  customOptions: [],
  fontSize: '14px'
});

InputTypeCountry.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "generateCountryLabel",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "locale",
      "type": null
    }, {
      "name": "countryCode",
      "type": null
    }],
    "returns": null
  }, {
    "name": "filterOptions",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "candidate",
      "type": null
    }, {
      "name": "input",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "InputTypeCountry",
  "props": {
    "name": {
      "defaultValue": {
        "value": "'country'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "customOptions": {
      "defaultValue": {
        "value": "[]",
        "computed": false
      },
      "description": "Custom options *",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "label": {
              "name": "node",
              "required": false
            },
            "value": {
              "name": "any",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "inputId": {
      "description": "The id of the search input",
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
    "locale": {
      "description": "To force a specific locale",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "value": {
      "description": "Use this to control the component state",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "mode": {
      "description": "Switch between display modes",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'select'",
          "computed": false
        }, {
          "value": "'underlined'",
          "computed": false
        }]
      },
      "required": false
    },
    "autoDetect": {
      "description": "If true, we'll try to autodetect country form the IP",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "intl": {
      "description": "From injectIntl",
      "type": {
        "name": "object"
      },
      "required": true
    },
    "required": {
      "description": "Is this input required?",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const components_InputTypeCountry = ((0,external_react_intl_.injectIntl)(InputTypeCountry));

/***/ }),

/***/ 78080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getIntlDisplayNames)
/* harmony export */ });
/**
 * A dummy polyfill for `Intl.DisplayNames`. If falling back to the default string is not an acceptable option
 * feel free to add a [real polyfill](https://formatjs.io/docs/polyfills/intl-displaynames/) and remove this helper.
 */
const getIntlDisplayNames = (locale, type) => {
  try {
    return new Intl.DisplayNames(locale, {
      type
    });
  } catch {
    return {
      of: str => str
    };
  }
};

/***/ })

};
;