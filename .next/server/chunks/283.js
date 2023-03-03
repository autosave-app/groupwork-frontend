exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 64191:
/***/ ((module) => {

module.exports = "/_next/static/images/grant-animation-80f44cc9e0c84be4ac8cede79778bacb.gif";

/***/ }),

/***/ 89646:
/***/ ((module) => {

module.exports = "/_next/static/images/grant-88724b5d7fb1ef87ec017bd1561f0049.gif";

/***/ }),

/***/ 80011:
/***/ ((module) => {

module.exports = "/_next/static/images/invoice-animation-static-7d2e364d862b68365ce16d5ec80c28a5.jpg";

/***/ }),

/***/ 78293:
/***/ ((module) => {

module.exports = "/_next/static/images/invoice-animation-55433eff19a59893abf3966cd185dae7.gif";

/***/ }),

/***/ 86142:
/***/ ((module) => {

module.exports = "/_next/static/images/receipt-animation-static-2e1a1ab8c1ddff1f1f893a06bc0f10b7.jpg";

/***/ }),

/***/ 24396:
/***/ ((module) => {

module.exports = "/_next/static/images/receipt-animation-66f14349930a4b1d5eae7d019b0cacf7.gif";

/***/ }),

/***/ 85662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 41627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




/**
 * Displays a location object
 */




const LocationAddress = ({
  location,
  isLoading,
  showMessageIfEmpty
}) => {
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        height: "1em",
        mb: "0.5em"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        height: "1em",
        mb: "0.5em"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        height: "1em"
      })]
    });
  } else if (!location || !location.address && !location.country) {
    return !showMessageIfEmpty ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      fontStyle: "italic",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "LocationAddress.empty",
        defaultMessage: [{
          "type": 0,
          "value": "No address configured yet"
        }]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [location.address, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), location.country]
  });
};

LocationAddress.__docgenInfo = {
  "description": "Displays a location object",
  "methods": [],
  "displayName": "LocationAddress",
  "props": {
    "location": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
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
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showMessageIfEmpty": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationAddress);

/***/ }),

/***/ 37070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": () => (/* binding */ DROPZONE_ACCEPT_IMAGES),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bQ": () => (/* binding */ DROPZONE_ACCEPT_ALL)
/* harmony export */ });
/* unused harmony export DROPZONE_ACCEPT_PDF */
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86069);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83514);
/* harmony import */ var _styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57847);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46555);
/* harmony import */ var _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82055);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88705);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40486);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90998);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89669);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_8__, _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__]);
([uuid__WEBPACK_IMPORTED_MODULE_8__, _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const _excluded = ["onSuccess", "onReject", "children", "isLoading", "loadingProgress", "minHeight", "size", "fontSize", "mockImageGenerator", "accept", "minSize", "maxSize", "name", "error", "value", "isMulti", "kind"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const DROPZONE_ACCEPT_IMAGES = {
  'image/*': ['.jpeg', '.png']
};
const DROPZONE_ACCEPT_PDF = {
  'application/pdf': ['.pdf']
};
const DROPZONE_ACCEPT_ALL = _objectSpread(_objectSpread({}, DROPZONE_ACCEPT_IMAGES), DROPZONE_ACCEPT_PDF);
const Dropzone = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
  displayName: "StyledDropzone__Dropzone",
  componentId: "sc-979d5c-0"
})(["border:1px dashed #c4c7cc;border-radius:10px;text-align:center;background:white;display:flex;justify-content:center;align-items:center;overflow:hidden;", " ", " img{max-height:100%;max-width:100%;}"], props => props.onClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["cursor:pointer;&:hover:not(:disabled){background:#f9f9f9;border-color:", ";}&:focus{outline:0;border-color:", ";}"], props => props.theme.colors.primary[300], props => props.theme.colors.primary[500]), props => props.error && (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(["border:1px solid ", ";"], props.theme.colors.red[500]));
const ReplaceContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "StyledDropzone__ReplaceContainer",
  componentId: "sc-979d5c-1"
})(["box-sizing:border-box;background:rgba(49,50,51,0.5);color:#ffffff;cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:24px;padding:8px;margin-top:-24px;font-size:12px;line-height:1em;&:hover{background:rgba(49,50,51,0.6);}"]);
/**
 * A dropzone to upload one or multiple files
 */

const StyledDropzone = _ref => {
  let {
    onSuccess,
    onReject,
    children,
    isLoading,
    loadingProgress,
    minHeight,
    size,
    fontSize,
    mockImageGenerator,
    accept,
    minSize,
    maxSize,
    name,
    error,
    value,
    isMulti,
    kind
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const imgUploaderParams = {
    isMulti,
    mockImageGenerator,
    onSuccess,
    onReject,
    kind
  };
  const {
    uploadFiles,
    isUploading,
    uploadProgress
  } = (0,_lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_9__/* .useImageUploader */ .w)(imgUploaderParams);
  const dropzoneParams = {
    accept,
    minSize,
    maxSize,
    multiple: isMulti,
    onDrop: uploadFiles
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_5__.useDropzone)(dropzoneParams);
  minHeight = size || minHeight;
  const innerMinHeight = minHeight - 2; // -2 To account for the borders

  const dropProps = getRootProps();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(Dropzone, _objectSpread(_objectSpread(_objectSpread({}, props), value ? lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(dropProps, ['onClick']) : dropProps), {}, {
    minHeight: size || minHeight,
    size: size,
    error: error,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("input", _objectSpread({
      name: name
    }, getInputProps())), isLoading || isUploading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      size: "100%",
      minHeight: innerMinHeight,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        size: innerMinHeight,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          size: "70%"
        })
      }), isUploading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        fontSize: "9px",
        children: [uploadProgress, "%"]
      }), isLoading && !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(loadingProgress) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: [loadingProgress, "%"]
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      position: "relative",
      children: isDragActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "primary.500",
        fontSize: "12px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_4__.Download, {
            size: 20
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
          id: "StyledDropzone.DropMsg",
          defaultMessage: [{
            "type": 0,
            "value": "Drop "
          }, {
            "type": 6,
            "value": "count",
            "options": {
              "one": {
                "value": [{
                  "type": 0,
                  "value": "file"
                }]
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": "files"
                }]
              }
            },
            "offset": 0,
            "pluralType": "cardinal"
          }, {
            "type": 0,
            "value": " here"
          }],
          values: {
            count: isMulti ? 2 : 1
          }
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [!value ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__.P, {
          color: error ? 'red.500' : 'black.500',
          px: 2,
          fontSize: fontSize,
          children: error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_styled_icons_fa_solid_ExclamationCircle__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircle, {
              color: "#E03F6A",
              size: 16
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Text__WEBPACK_IMPORTED_MODULE_14__/* .Span */ .Dr, {
              fontWeight: 600,
              ml: 1,
              children: error
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("br", {})]
          }) : isMulti ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "DropZone.UploadBox",
            defaultMessage: [{
              "type": 0,
              "value": "Drag and drop one or multiple files or "
            }, {
              "type": 8,
              "value": "i18n-link",
              "children": [{
                "type": 0,
                "value": "click here to select"
              }]
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .getI18nLink */ .fw)()
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "DragAndDropOrClickToUpload",
            defaultMessage: [{
              "type": 0,
              "value": "Drag & drop or "
            }, {
              "type": 8,
              "value": "i18n-link",
              "children": [{
                "type": 0,
                "value": "click to upload"
              }]
            }],
            values: {
              'i18n-link': (0,_I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .getI18nLink */ .fw)()
            },
            tagName: "span"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            size: size,
            url: value,
            border: "none"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(ReplaceContainer, {
            onClick: dropProps.onClick,
            role: "button",
            tabIndex: 0,
            onKeyDown: event => {
              if (event.key === 'Enter') {
                event.preventDefault();
                dropProps.onClick();
              }
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
              id: "Image.Replace",
              defaultMessage: [{
                "type": 0,
                "value": "Replace"
              }]
            })
          })]
        }), children]
      })
    })]
  }));
};

StyledDropzone.defaultProps = {
  minHeight: 96,
  mockImageGenerator: () => `https://loremflickr.com/120/120?lock=${(0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)()}`,
  isMulti: true,
  fontSize: '14px'
};
StyledDropzone.__docgenInfo = {
  "description": "A dropzone to upload one or multiple files",
  "methods": [],
  "displayName": "StyledDropzone",
  "props": {
    "minHeight": {
      "defaultValue": {
        "value": "96",
        "computed": false
      },
      "description": "Min height of the container",
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
    "mockImageGenerator": {
      "defaultValue": {
        "value": "() => `https://loremflickr.com/120/120?lock=${uuid()}`",
        "computed": false
      },
      "description": "A function to generate mock images",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "isMulti": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "description": "Whether the dropzone should accept multiple files",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "fontSize": {
      "defaultValue": {
        "value": "'14px'",
        "computed": false
      },
      "description": "Font size used for the default messages",
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
    "onSuccess": {
      "description": "Called back with the uploaded files on success",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "name": {
      "description": "Name for the input",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "onReject": {
      "description": "Called back with the rejectd files",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "children": {
      "description": "Content to show inside the dropzone. Defaults to message \"Drag and drop one or...\"",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "isLoading": {
      "description": "Force loading state to be displayed",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loadingProgress": {
      "description": "Use this to override the loading progress indicator",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "size": {
      "description": "To have square container",
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }, {
          "name": "array"
        }]
      },
      "required": false
    },
    "accept": {
      "description": "Filetypes to accept",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "minSize": {
      "description": "Min file size",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "maxSize": {
      "description": "Max file size",
      "type": {
        "name": "number"
      },
      "required": false
    },
    "error": {
      "description": "A truthy/falsy value defining if the field has an error (ie. if it's required)",
      "type": {
        "name": "any"
      },
      "required": false
    },
    "required": {
      "description": "required field",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "value": {
      "description": "if set, the image will be displayed and a \"replace\" banner will be added",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "kind": {
      "description": "A unique identified for the category of uploaded files",
      "type": {
        "name": "string"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledDropzone);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 96682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82055);
/* harmony import */ var _lib_attachments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4131);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87268);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_3__, _lib_attachments__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_3__, _lib_attachments__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const AddNewAttachedFilesButton = ({
  disabled,
  mockImageGenerator,
  onSuccess
}) => {
  const {
    isUploading,
    uploadFiles
  } = (0,_lib_hooks_useImageUploader__WEBPACK_IMPORTED_MODULE_3__/* .useImageUploader */ .w)({
    isMulti: true,
    mockImageGenerator,
    onSuccess,
    kind: 'EXPENSE_ATTACHED_FILE'
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_dropzone__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, _lib_attachments__WEBPACK_IMPORTED_MODULE_4__/* .attachmentDropzoneParams */ .l), {}, {
    name: "addAttachedFile",
    disabled: disabled,
    multiple: true,
    onDrop: uploadFiles,
    children: ({
      getRootProps,
      getInputProps
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", _objectSpread(_objectSpread({}, getRootProps()), {}, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", _objectSpread({}, getInputProps())), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        buttonSize: "tiny",
        type: "button",
        minWidth: 135,
        "data-cy": "expense-add-item-btn",
        disabled: disabled,
        loading: isUploading,
        children: ["+\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "ExpenseForm.AddAttachedFile",
          defaultMessage: [{
            "type": 0,
            "value": "Add new document"
          }]
        })]
      })]
    }))
  }));
};

AddNewAttachedFilesButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AddNewAttachedFilesButton",
  "props": {
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onSuccess": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "mockImageGenerator": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNewAttachedFilesButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47869);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22642);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51561);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16159);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_5__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const AmountLine = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
  displayName: "ExpenseAmountBreakdown__AmountLine",
  componentId: "sc-1c1kak0-0"
})(["font-size:14px;line-height:20px;color:", ";white-space:nowrap;margin:0;margin-bottom:4px;padding-left:12px;"], props => props.theme.colors.black[900]);
const TotalAmountLine = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(AmountLine).withConfig({
  displayName: "ExpenseAmountBreakdown__TotalAmountLine",
  componentId: "sc-1c1kak0-1"
})(["font-size:16px;line-height:24px;font-weight:bold;"]);
/**
 * Displays the total amount for all the expense items.
 */

const ExpenseAmountBreakdown = ({
  items,
  currency,
  taxes,
  expenseTotalAmount
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const {
    hasTaxes,
    totalInvoiced,
    totalAmount
  } = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .computeExpenseAmounts */ .Fo)(items, taxes);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    textAlign: "right",
    children: [hasTaxes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "flex-end",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(AmountLine, {
        "data-cy": "expense-invoiced-amount",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          textTransform: "capitalize",
          mr: 3,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "L8seEc",
            defaultMessage: [{
              "type": 0,
              "value": "Subtotal"
            }]
          }), currency && ` (${currency})`]
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          amount: totalInvoiced,
          precision: 2,
          currency: currency,
          showCurrencyCode: false,
          amountStyles: null
        })]
      }), taxes.map(tax => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(AmountLine, {
        "data-cy": `tax-${tax.type}-expense-amount-line`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
          textTransform: "capitalize",
          mr: 3,
          children: [(0,_lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_4__/* .i18nTaxType */ .m)(intl, tax.type, 'short'), (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .isTaxRateValid */ .Ou)(tax.rate) && ` (${lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(tax.rate * 100, 2)}%)`]
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          amount: !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .isTaxRateValid */ .Ou)(tax.rate) ? null : (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .getTaxAmount */ .L0)(totalInvoiced, tax),
          precision: 2,
          currency: currency,
          showCurrencyCode: false,
          amountStyles: null
        })]
      }, tax.type)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        width: "100%",
        my: "12px",
        borderColor: "black.500",
        borderStyle: "dotted"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(TotalAmountLine, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
        textTransform: "capitalize",
        mr: 3,
        children: intl.formatMessage({
          id: "TotalAmount",
          defaultMessage: [{
            "type": 0,
            "value": "Total amount"
          }]
        })
      }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_10__/* .Span */ .Dr, {
        color: "black.500",
        fontSize: "16px",
        letterSpacing: 0,
        "data-cy": "expense-items-total-amount",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          amount: expenseTotalAmount ?? totalAmount,
          precision: 2,
          currency: currency,
          showCurrencyCode: false
        })
      })]
    })]
  });
};

ExpenseAmountBreakdown.__docgenInfo = {
  "description": "Displays the total amount for all the expense items.",
  "methods": [],
  "displayName": "ExpenseAmountBreakdown",
  "props": {
    "currency": {
      "description": "The currency of the collective",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "items": {
      "description": "Expense items",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "amount": {
              "name": "number",
              "required": false
            }
          }
        }
      },
      "required": true
    },
    "taxes": {
      "description": "Taxes applied to the expense",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "string",
              "required": false
            },
            "rate": {
              "name": "number",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "expenseTotalAmount": {
      "description": "Total amount coming from the expense",
      "type": {
        "name": "number"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ExpenseAmountBreakdown));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19878);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16159);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67001);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89669);
/* harmony import */ var _ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41016);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_5__, _ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__]);
([_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_5__, _ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const getFileName = (intl, idx, totalNbFiles) => {
  if (totalNbFiles === 1) {
    return intl.formatMessage({
      id: "File.AttachedFile",
      defaultMessage: [{
        "type": 0,
        "value": "Attached file"
      }]
    });
  } else {
    return intl.formatMessage({
      id: "A+AIST",
      defaultMessage: [{
        "type": 0,
        "value": "Attached file "
      }, {
        "type": 1,
        "value": "number"
      }]
    }, {
      number: idx + 1
    });
  }
};

const ExpenseAttachedFiles = ({
  files,
  onRemove,
  showInvoice,
  collective,
  expense
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
    flexWrap: "wrap",
    children: [showInvoice && [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].SETTLEMENT */ .Z.SETTLEMENT].includes(expense.type) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      mr: 3,
      mb: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        expense: expense,
        collective: collective,
        children: ({
          isLoading,
          downloadInvoice
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          onClick: downloadInvoice,
          isDownloading: isLoading,
          size: 88,
          showFileName: true,
          fileName: intl.formatMessage({
            id: "bWkdCF",
            defaultMessage: [{
              "type": 0,
              "value": "Download expense"
            }]
          })
        })
      })
    }), files.map((file, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
      mr: 3,
      mb: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        size: 88,
        url: file.url,
        fileName: file.name || getFileName(intl, idx, files.length),
        fileSize: file.info?.size,
        showFileName: true
      }), onRemove && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .xu, {
        ml: "4px",
        mt: "2px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          variant: "danger",
          fontSize: "12px",
          onClick: () => onRemove(idx),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "Remove",
            defaultMessage: [{
              "type": 0,
              "value": "Remove"
            }]
          })
        })
      })]
    }, file.id || file.url))]
  });
};

ExpenseAttachedFiles.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseAttachedFiles",
  "props": {
    "showInvoice": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "expense": {
      "description": "Required if showInvoice is true",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "collective": {
      "description": "Required if showInvoice is true",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "files": {
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
            "url": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": true
    },
    "onRemove": {
      "description": "If provided, a link to remove the file will be displayed",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseAttachedFiles);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_attachments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4131);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40777);
/* harmony import */ var _StyledDropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37070);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var _AddNewAttachedFilesButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96682);
/* harmony import */ var _ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99754);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_attachments__WEBPACK_IMPORTED_MODULE_3__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__, _StyledDropzone__WEBPACK_IMPORTED_MODULE_6__, _AddNewAttachedFilesButton__WEBPACK_IMPORTED_MODULE_9__, _ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_10__]);
([_lib_attachments__WEBPACK_IMPORTED_MODULE_3__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__, _StyledDropzone__WEBPACK_IMPORTED_MODULE_6__, _AddNewAttachedFilesButton__WEBPACK_IMPORTED_MODULE_9__, _ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const ExpenseAttachedFilesForm = ({
  onChange,
  disabled,
  defaultValue,
  title,
  description
}) => {
  const [files, setFiles] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_0___default()(defaultValue, 'url'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
      alignItems: "center",
      my: 16,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
        color: "black.600",
        fontSize: "16px",
        lineHeight: "21px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "OptionalFieldLabel",
          defaultMessage: [{
            "type": 1,
            "value": "field"
          }, {
            "type": 0,
            "value": " (optional)"
          }],
          values: {
            field: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
              color: "black.900",
              fontSize: "16px",
              fontWeight: "bold",
              children: title
            })
          }
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          color: "#969BA3",
          size: 12
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        flex: "1",
        borderColor: "black.300",
        mx: 2
      }), files?.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_AddNewAttachedFilesButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        disabled: disabled,
        onSuccess: newFiles => {
          const uploadedFiles = [...files, ...newFiles];
          setFiles(uploadedFiles);
          onChange(uploadedFiles);
        }
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
      fontSize: "13px",
      color: "black.600",
      mb: 16,
      children: description
    }), files?.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ExpenseAttachedFiles__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      files: files,
      onRemove: idx => {
        const updatedFiles = [...files];
        updatedFiles.splice(idx, 1);
        setFiles(updatedFiles);
        onChange(updatedFiles);
      }
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_StyledDropzone__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, _lib_attachments__WEBPACK_IMPORTED_MODULE_3__/* .attachmentDropzoneParams */ .l), {}, {
      name: "attachedFiles",
      kind: "EXPENSE_ATTACHED_FILE",
      disabled: disabled,
      minHeight: 72,
      onSuccess: uploadedFiles => {
        setFiles(uploadedFiles);
        onChange(uploadedFiles);
      }
    }))]
  });
};

ExpenseAttachedFilesForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseAttachedFilesForm",
  "props": {
    "defaultValue": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "url": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": false
    },
    "title": {
      "description": "",
      "type": {
        "name": "element"
      },
      "required": true
    },
    "description": {
      "description": "",
      "type": {
        "name": "element"
      },
      "required": true
    },
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseAttachedFilesForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dm": () => (/* binding */ prepareExpenseForSubmit),
/* harmony export */   "o0": () => (/* binding */ EXPENSE_FORM_STEPS)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22265);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81551);
/* harmony import */ var _styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56508);
/* harmony import */ var _lib_expenses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45624);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40986);
/* harmony import */ var _lib_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19123);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51048);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97079);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51561);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16159);
/* harmony import */ var _I18nAddressFields__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85662);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(40777);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(29242);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputTags__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(10732);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90998);
/* harmony import */ var _ExpenseAttachedFilesForm__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(46973);
/* harmony import */ var _ExpenseFormItems__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(78390);
/* harmony import */ var _ExpenseFormPayeeInviteNewStep__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(15098);
/* harmony import */ var _ExpenseFormPayeeSignUpStep__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2318);
/* harmony import */ var _ExpenseFormPayeeStep__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(32479);
/* harmony import */ var _ExpenseItemForm__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(42192);
/* harmony import */ var _ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(59390);
/* harmony import */ var _ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(7852);
/* harmony import */ var _ExpenseTypeRadioSelect__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(26239);
/* harmony import */ var _ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(88243);
/* harmony import */ var _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(60341);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_17__, _I18nAddressFields__WEBPACK_IMPORTED_MODULE_20__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__, _ExpenseAttachedFilesForm__WEBPACK_IMPORTED_MODULE_29__, _ExpenseFormItems__WEBPACK_IMPORTED_MODULE_30__, _ExpenseFormPayeeInviteNewStep__WEBPACK_IMPORTED_MODULE_31__, _ExpenseFormPayeeSignUpStep__WEBPACK_IMPORTED_MODULE_32__, _ExpenseFormPayeeStep__WEBPACK_IMPORTED_MODULE_33__, _ExpenseItemForm__WEBPACK_IMPORTED_MODULE_34__, _ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_35__, _ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_36__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_39__]);
([_lib_utils__WEBPACK_IMPORTED_MODULE_17__, _I18nAddressFields__WEBPACK_IMPORTED_MODULE_20__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__, _ExpenseAttachedFilesForm__WEBPACK_IMPORTED_MODULE_29__, _ExpenseFormItems__WEBPACK_IMPORTED_MODULE_30__, _ExpenseFormPayeeInviteNewStep__WEBPACK_IMPORTED_MODULE_31__, _ExpenseFormPayeeSignUpStep__WEBPACK_IMPORTED_MODULE_32__, _ExpenseFormPayeeStep__WEBPACK_IMPORTED_MODULE_33__, _ExpenseItemForm__WEBPACK_IMPORTED_MODULE_34__, _ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_35__, _ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_36__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_39__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







































const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.defineMessages)({
  descriptionPlaceholder: {
    id: "ExpenseForm.DescriptionPlaceholder",
    defaultMessage: [{
      "type": 0,
      "value": "Enter expense title here..."
    }]
  },
  grantSubjectPlaceholder: {
    id: "ExpenseForm.GrantSubjectPlaceholder",
    defaultMessage: [{
      "type": 0,
      "value": "e.g., research, software development, etc..."
    }]
  },
  addNewReceipt: {
    id: "ExpenseForm.AddReceipt",
    defaultMessage: [{
      "type": 0,
      "value": "Add new receipt"
    }]
  },
  addNewItem: {
    id: "ExpenseForm.AddLineItem",
    defaultMessage: [{
      "type": 0,
      "value": "Add new item"
    }]
  },
  addNewGrantItem: {
    id: "ExpenseForm.AddGrantItem",
    defaultMessage: [{
      "type": 0,
      "value": "Add grant item"
    }]
  },
  stepReceipt: {
    id: "ExpenseForm.StepExpense",
    defaultMessage: [{
      "type": 0,
      "value": "Upload one or multiple receipt"
    }]
  },
  stepInvoice: {
    id: "ExpenseForm.StepExpenseInvoice",
    defaultMessage: [{
      "type": 0,
      "value": "Set invoice details"
    }]
  },
  stepFundingRequest: {
    id: "ExpenseForm.StepExpenseFundingRequest",
    defaultMessage: [{
      "type": 0,
      "value": "Set grant details"
    }]
  },
  stepPayee: {
    id: "ExpenseForm.StepPayeeInvoice",
    defaultMessage: [{
      "type": 0,
      "value": "Payee information"
    }]
  },
  cancelEditExpense: {
    id: "ExpenseForm.CancelEditExpense",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel Edit"
    }]
  },
  confirmCancelEditExpense: {
    id: "ExpenseForm.ConfirmCancelEditExpense",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to cancel the edits?"
    }]
  },
  clearExpenseForm: {
    id: "ExpenseForm.ClearExpenseForm",
    defaultMessage: [{
      "type": 0,
      "value": "Clear Form"
    }]
  },
  confirmClearExpenseForm: {
    id: "ExpenseForm.ConfirmClearExpenseForm",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to clear the expense form?"
    }]
  }
});

const getDefaultExpense = collective => ({
  description: '',
  longDescription: '',
  items: [],
  attachedFiles: [],
  payee: null,
  payoutMethod: undefined,
  privateMessage: '',
  invoiceInfo: '',
  currency: collective.currency,
  taxes: null,
  payeeLocation: {
    address: '',
    country: null
  }
});
/**
 * Take the expense's data as generated by `ExpenseForm` and strips out all optional data
 * like URLs for items when the expense is an invoice.
 */


const prepareExpenseForSubmit = expenseData => {
  // The collective picker still uses API V1 for when creating a new profile on the fly
  const payeeIdField = typeof expenseData.payee?.id === 'string' ? 'id' : 'legacyId';
  const isInvoice = expenseData.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].INVOICE */ .Z.INVOICE;
  const isGrant = expenseData.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].GRANT */ .Z.GRANT;
  const payee = expenseData.payee?.isNewUser || expenseData.payee?.isInvite ? lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expenseData.payee, ['name', 'email', 'legalName', 'organization', 'newsletterOptIn']) : {
    [payeeIdField]: expenseData.payee.id
  };
  const payeeLocation = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .checkRequiresAddress */ .vr)(expenseData) ? lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expenseData.payeeLocation, ['address', 'country', 'structured']) : null;

  const payoutMethod = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expenseData.payoutMethod, ['id', 'name', 'data', 'isSaved', 'type']);

  if (payoutMethod.id === 'new') {
    payoutMethod.id = null;
  }

  return _objectSpread(_objectSpread({}, lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expenseData, ['id', 'description', 'longDescription', 'type', 'privateMessage', 'invoiceInfo', 'tags', 'currency'])), {}, {
    payee,
    payeeLocation,
    payoutMethod,
    attachedFiles: isInvoice ? expenseData.attachedFiles?.map(file => lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(file, ['id', 'url', 'name'])) : [],
    tax: expenseData.taxes?.filter(tax => !tax.isDisabled).map(tax => lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(tax, ['type', 'rate', 'idNumber'])),
    items: expenseData.items.map(item => {
      return lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(item, [...(item.__isNew ? [] : ['id']), // Omit item's ids that were created for keying purposes
      ...(isInvoice || isGrant ? [] : ['url']), // never submit URLs for invoices or requests
      'description', 'incurredAt', 'amount']);
    })
  });
};
/**
 * Validate the expense
 */

const validateExpense = (intl, expense) => {
  const isCardCharge = expense.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].CHARGE */ .Z.CHARGE;

  if (expense.payee?.isInvite) {
    return expense.payee.id ? (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_13__/* .requireFields */ .ay)(expense, ['description', 'payee', 'payee.id']) : (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_13__/* .requireFields */ .ay)(expense, ['description', 'payee', 'payee.name', 'payee.email']);
  }

  const errors = isCardCharge ? {} : (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_13__/* .requireFields */ .ay)(expense, ['description', 'payee', 'payoutMethod', 'currency']);

  if (expense.items.length > 0) {
    const itemsErrors = expense.items.map(item => (0,_ExpenseItemForm__WEBPACK_IMPORTED_MODULE_34__/* .validateExpenseItem */ .ay)(expense, item));
    const hasErrors = itemsErrors.some(errors => !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(errors));

    if (hasErrors) {
      errors.items = itemsErrors;
    }
  }

  if (expense.taxes?.length) {
    const taxesErrors = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .validateExpenseTaxes */ ._D)(intl, expense.taxes);

    if (taxesErrors) {
      errors['taxes'] = taxesErrors;
    }
  }

  if (expense.payoutMethod && // CHARGE expenses have VirtualCard and do not have PayoutMethod
  isCardCharge) {
    const payoutMethodErrors = (0,_PayoutMethodForm__WEBPACK_IMPORTED_MODULE_39__/* .validatePayoutMethod */ .$)(expense.payoutMethod);

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(payoutMethodErrors)) {
      errors.payoutMethod = payoutMethodErrors;
    }
  }

  if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .checkRequiresAddress */ .vr)(expense)) {
    Object.assign(errors, (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_13__/* .requireFields */ .ay)(expense, ['payeeLocation.country', 'payeeLocation.address']));
  }

  return errors;
};

const setLocationFromPayee = (formik, payee) => {
  formik.setFieldValue('payeeLocation.country', payee.location.country || null);
  formik.setFieldValue('payeeLocation.address', payee.location.address || '');
  formik.setFieldValue('payeeLocation.structured', payee.location.structured);
};

const HiddenFragment = styled_components__WEBPACK_IMPORTED_MODULE_8___default().div.withConfig({
  displayName: "ExpenseForm__HiddenFragment",
  componentId: "sc-1nv6sft-0"
})(["display:", ";"], ({
  show
}) => show ? 'block' : 'none');
const EXPENSE_FORM_STEPS = {
  PAYEE: 'PAYEE',
  EXPENSE: 'EXPENSE'
};

const checkAddressValuesAreCompleted = values => {
  if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .checkRequiresAddress */ .vr)(values)) {
    return values.payeeLocation?.country && values.payeeLocation?.address;
  }

  return true;
};

const getDefaultStep = (defaultStep, stepOneCompleted, isCreditCardCharge) => {
  // Card Charges take priority here because they are technically incomplete.
  if (isCreditCardCharge) {
    return EXPENSE_FORM_STEPS.EXPENSE;
  } else if (!stepOneCompleted) {
    return EXPENSE_FORM_STEPS.PAYEE;
  } else {
    return defaultStep || EXPENSE_FORM_STEPS.PAYEE;
  }
};

const ExpenseFormBody = ({
  formik,
  payoutProfiles,
  collective,
  expense,
  autoFocusTitle,
  onCancel,
  formPersister,
  loggedInAccount,
  loading,
  expensesTags,
  shouldLoadValuesFromPersister,
  isDraft,
  defaultStep
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  const {
    formatMessage
  } = intl;
  const formRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef();
  const {
    values,
    handleChange,
    errors,
    setValues,
    dirty,
    touched,
    resetForm,
    setErrors
  } = formik;
  const hasBaseFormFieldsCompleted = values.type && values.description;
  const isInvite = values.payee?.isInvite;
  const isNewUser = !values.payee?.id;
  const isReceipt = values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].RECEIPT */ .Z.RECEIPT;
  const isGrant = values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].GRANT */ .Z.GRANT;
  const isCreditCardCharge = values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].CHARGE */ .Z.CHARGE;
  const supportedExpenseTypes = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => (0,_lib_expenses__WEBPACK_IMPORTED_MODULE_12__/* .getSupportedExpenseTypes */ .ip)(collective), [collective]);
  const isRecurring = expense && expense.recurringExpense !== null;
  const stepOneCompleted = values.payoutMethod && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()((0,_lib_utils__WEBPACK_IMPORTED_MODULE_16__/* .flattenObjectDeep */ .Mc)(lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(errors, 'payoutMethod.data.currency'))) && checkAddressValuesAreCompleted(values);
  const stepTwoCompleted = isInvite ? true : (stepOneCompleted || isCreditCardCharge) && hasBaseFormFieldsCompleted && values.items.length > 0;
  const availableCurrencies = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .getSupportedCurrencies */ ._Y)(collective, values.payoutMethod);
  const [step, setStep] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(() => getDefaultStep(defaultStep, stepOneCompleted, isCreditCardCharge)); // Only true when logged in and drafting the expense

  const [isOnBehalf, setOnBehalf] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
  const [showResetModal, setShowResetModal] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
  const editingExpense = expense !== undefined; // Scroll to top when step changes

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    const boundingRect = formRef.current?.getBoundingClientRect();

    if (boundingRect) {
      const elemTop = boundingRect.top + window.scrollY;
      window.scroll({
        top: elemTop - 75
      });
    }
  }, [step]); // When user logs in we set its account as the default payout profile if not yet defined

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (values?.draft?.payee && !loggedInAccount && !isRecurring) {
      formik.setFieldValue('payee', _objectSpread(_objectSpread({}, values.draft.payee), {}, {
        isInvite: false,
        isNewUser: true
      }));
    } // If creating a new expense or completing an expense submitted on your behalf, automatically select your default profile.
    else if (!isOnBehalf && (isDraft || !values.payee) && loggedInAccount && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(payoutProfiles)) {
      const defaultProfile = values.payee && payoutProfiles.find(p => p.slug === values.payee.slug) || lodash_first__WEBPACK_IMPORTED_MODULE_3___default()(payoutProfiles);

      formik.setFieldValue('payee', defaultProfile);
    } // Update the form state with private fields that were refeched after the user was authenticated


    if (isDraft && loggedInAccount) {
      const privateFields = ['payoutMethod', 'invoiceInfo'];

      for (const field of privateFields) {
        if (!values[field] && expense[field]) {
          formik.setFieldValue(field, expense[field]);
        }
      }
    }
  }, [payoutProfiles, loggedInAccount]); // Pre-fill address based on the payout profile

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (!values.payeeLocation?.address && values.payee?.location) {
      setLocationFromPayee(formik, values.payee);
    }
  }, [values.payee]); // Return to Payee step if type is changed and reset some values

  const previousType = (0,_lib_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_14__/* .usePrevious */ .D)(values.type);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (!isCreditCardCharge && previousType && values.type !== previousType) {
      setStep(EXPENSE_FORM_STEPS.PAYEE);
      setOnBehalf(false);

      if (!isDraft && values.payee?.isInvite) {
        formik.setFieldValue('payee', null);
      } // Only invoices can have taxes


      if (values.taxes?.length && !values.taxes[0].isDisabled && values.type !== _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].INVOICE */ .Z.INVOICE) {
        formik.setFieldValue('taxes', [_objectSpread(_objectSpread({}, values.taxes[0]), {}, {
          isDisabled: true
        })]);
      }
    }
  }, [values.type]);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (values.payeeLocation?.structured) {
      formik.setFieldValue('payeeLocation.address', (0,_I18nAddressFields__WEBPACK_IMPORTED_MODULE_20__/* .serializeAddress */ .FH)(values.payeeLocation.structured));
    }
  }, [values.payeeLocation]);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    // If the currency is not supported anymore, we need to do something
    if (!loading && (!values.currency || !availableCurrencies.includes(values.currency))) {
      const hasItemsWithAmounts = values.items.some(item => Boolean(item.amount));

      if (!hasItemsWithAmounts) {
        // If no items have amounts yet, we can safely set the default currency
        formik.setFieldValue('currency', availableCurrencies[0]);
      } else if (values.currency) {
        // If there are items with amounts, we need to reset the currency
        formik.setFieldValue('currency', null);
      }
    }
  }, [loading, values.payoutMethod]); // Load values from localstorage

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (shouldLoadValuesFromPersister && formPersister && !dirty && !isDraft) {
      const formValues = formPersister.loadValues();

      if (formValues) {
        // Reset payoutMethod if host is no longer connected to TransferWise
        if (formValues.payoutMethod?.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && !collective.host?.transferwise) {
          formValues.payoutMethod = undefined;
        }

        setValues(lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(formValues, // Omit deprecated fields, otherwise it will prevent expense submission
        ['location', 'privateInfo']));
      }
    }
  }, [formPersister, dirty]); // Save values in localstorage

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (dirty && formPersister) {
      formPersister.saveValues(values);
    }
  }, [formPersister, dirty, values]);
  let payeeForm;

  if (loading) {
    payeeForm = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
      height: 32
    });
  } else if (isDraft && !loggedInAccount) {
    payeeForm = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseFormPayeeSignUpStep__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z, {
      collective: collective,
      formik: formik,
      onCancel: onCancel,
      onNext: () => setStep(EXPENSE_FORM_STEPS.EXPENSE)
    });
  } else if (isOnBehalf === true && isNewUser) {
    payeeForm = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseFormPayeeInviteNewStep__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
      collective: collective,
      formik: formik,
      onBack: () => {
        setStep(EXPENSE_FORM_STEPS.PAYEE);
        setOnBehalf(false);
        formik.setFieldValue('payee', null);
        formik.setFieldValue('payoutMethod', null);
        formik.setFieldValue('payeeLocation', null);
      },
      onNext: () => {
        formik.setFieldValue('payee', _objectSpread(_objectSpread({}, values.payee), {}, {
          isInvite: true
        }));
        const errors = (0,_ExpenseFormPayeeInviteNewStep__WEBPACK_IMPORTED_MODULE_31__/* .validateExpenseFormPayeeInviteNewStep */ .y)(formik.values);

        if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(errors)) {
          formik.setErrors(errors);
        } else {
          setStep(EXPENSE_FORM_STEPS.EXPENSE);
        }
      },
      payoutProfiles: payoutProfiles
    });
  } else {
    payeeForm = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseFormPayeeStep__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z, {
      collective: collective,
      formik: formik,
      isOnBehalf: isOnBehalf,
      onCancel: onCancel,
      handleClearPayeeStep: () => setShowResetModal(true),
      payoutProfiles: payoutProfiles,
      loggedInAccount: loggedInAccount,
      onChange: payee => {
        setOnBehalf(payee.isInvite);
      },
      onNext: () => {
        const shouldSkipValidation = isOnBehalf && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(values.payoutMethod);

        const validation = !shouldSkipValidation && (0,_PayoutMethodForm__WEBPACK_IMPORTED_MODULE_39__/* .validatePayoutMethod */ .$)(values.payoutMethod);

        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(validation)) {
          setStep(EXPENSE_FORM_STEPS.EXPENSE);
        } else {
          setErrors({
            payoutMethod: validation
          });
        }
      },
      editingExpense: editingExpense,
      resetDefaultStep: () => setStep(EXPENSE_FORM_STEPS.PAYEE),
      formPersister: formPersister,
      getDefaultExpense: getDefaultExpense,
      onInvite: isInvite => {
        setOnBehalf(isInvite);
        formik.setFieldValue('payeeLocation', {});
        formik.setFieldValue('payee', {});
        formik.setFieldValue('payoutMethod', {});
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
    ref: formRef,
    children: [!isCreditCardCharge && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseTypeRadioSelect__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
      name: "type",
      onChange: handleChange,
      value: values.type,
      supportedExpenseTypes: supportedExpenseTypes
    }), isRecurring && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseRecurringBanner__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z, {
      expense: expense
    }), values.type && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
      mt: 4,
      p: [16, 16, 32],
      overflow: "initial",
      children: step === EXPENSE_FORM_STEPS.PAYEE ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
          alignItems: "center",
          mb: 16,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
            color: "black.900",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bold",
            children: formatMessage(msg.stepPayee)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
            ml: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              size: 12,
              color: "#969BA3",
              tooltipProps: {
                display: 'flex'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            flex: "1",
            borderColor: "black.300",
            mx: 2
          })]
        }), payeeForm]
      }) : step === EXPENSE_FORM_STEPS.EXPENSE ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
          alignItems: "center",
          mb: 10,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
            as: "label",
            htmlFor: "expense-description",
            color: "black.900",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: "bold",
            children: values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].GRANT */ .Z.GRANT ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "Expense.EnterRequestSubject",
              defaultMessage: [{
                "type": 0,
                "value": "Enter grant subject "
              }, {
                "type": 8,
                "value": "small",
                "children": [{
                  "type": 0,
                  "value": "(Public)"
                }]
              }],
              values: {
                small(msg) {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "black.600",
                    fontStyle: "italic",
                    children: msg
                  });
                }

              }
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
              id: "Expense.EnterExpenseTitle",
              defaultMessage: [{
                "type": 0,
                "value": "Expense title "
              }, {
                "type": 8,
                "value": "small",
                "children": [{
                  "type": 0,
                  "value": "(Public)"
                }]
              }],
              values: {
                small(msg) {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "black.600",
                    fontStyle: "italic",
                    children: msg
                  });
                }

              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            flex: "1",
            borderColor: "black.300",
            ml: 2
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__.P, {
          fontSize: "12px",
          color: "black.600",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
            id: "Expense.PrivacyWarning",
            defaultMessage: [{
              "type": 0,
              "value": "This information is public. Do not put any private details in this field."
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
          as: _StyledInput__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP,
          autoFocus: autoFocusTitle,
          border: "0",
          error: errors.description,
          fontSize: "24px",
          id: "expense-description",
          maxLength: 255,
          mt: 3,
          name: "description",
          px: 2,
          py: 1,
          width: "100%",
          withOutline: true,
          placeholder: values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].GRANT */ .Z.GRANT ? formatMessage(msg.grantSubjectPlaceholder) : formatMessage(msg.descriptionPlaceholder)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(HiddenFragment, {
          show: hasBaseFormFieldsCompleted || isInvite,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
            alignItems: "flex-start",
            mt: 3,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseTypeTag__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
              type: values.type,
              mr: "4px"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledInputTags__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
              suggestedTags: expensesTags,
              onChange: tags => {
                formik.setFieldValue('tags', tags.map(t => t.value.toLowerCase()));
              },
              value: values.tags
            })]
          }), values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].INVOICE */ .Z.INVOICE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
            my: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseAttachedFilesForm__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "UploadInvoice",
                defaultMessage: [{
                  "type": 0,
                  "value": "Upload invoice"
                }]
              }),
              description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "UploadInvoiceDescription",
                defaultMessage: [{
                  "type": 0,
                  "value": "If you already have an invoice document, you can upload it here."
                }]
              }),
              onChange: files => formik.setFieldValue('attachedFiles', files),
              defaultValue: values.attachedFiles
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
            alignItems: "center",
            my: 24,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
              color: "black.900",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "bold",
              children: formatMessage(isReceipt ? msg.stepReceipt : isGrant ? msg.stepFundingRequest : msg.stepInvoice)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
              flex: "1",
              borderColor: "black.300",
              mx: 2
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              buttonSize: "tiny",
              type: "button",
              onClick: () => (0,_ExpenseFormItems__WEBPACK_IMPORTED_MODULE_30__/* .addNewExpenseItem */ .Y)(formik),
              minWidth: 135,
              "data-cy": "expense-add-item-btn",
              disabled: isCreditCardCharge,
              children: ["+\xA0", formatMessage(isReceipt ? msg.addNewReceipt : isGrant ? msg.addNewGrantItem : msg.addNewItem)]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.FieldArray, {
              name: "items",
              children: fieldsArrayProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseFormItems__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, _objectSpread(_objectSpread({}, fieldsArrayProps), {}, {
                collective: collective,
                availableCurrencies: availableCurrencies
              }))
            })
          }), values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].GRANT */ .Z.GRANT && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
            my: 40,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpenseAttachedFilesForm__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "UploadDocumentation",
                defaultMessage: [{
                  "type": 0,
                  "value": "Upload documentation"
                }]
              }),
              description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "UploadDocumentationDescription",
                defaultMessage: [{
                  "type": 0,
                  "value": "If you want to include any documentation, you can upload it here."
                }]
              }),
              onChange: files => formik.setFieldValue('attachedFiles', files),
              defaultValue: values.attachedFiles
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            flex: "1",
            mt: 4,
            borderColor: "black.300"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Flex */ .kC, {
            mt: 3,
            flexWrap: "wrap",
            alignItems: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              type: "button",
              width: ['100%', 'auto'],
              mx: [2, 0],
              mr: [null, 3],
              mt: 2,
              whiteSpace: "nowrap",
              "data-cy": "expense-back",
              onClick: () => {
                if (isCreditCardCharge) {
                  onCancel();
                } else {
                  setStep(EXPENSE_FORM_STEPS.PAYEE);
                }
              },
              children: ["\u2190\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "Back",
                defaultMessage: [{
                  "type": 0,
                  "value": "Back"
                }]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              type: "submit",
              width: ['100%', 'auto'],
              mx: [2, 0],
              mr: [null, 3],
              mt: 2,
              whiteSpace: "nowrap",
              "data-cy": "expense-summary-btn",
              buttonStyle: "primary",
              disabled: !stepTwoCompleted || !formik.isValid,
              loading: formik.isSubmitting,
              children: [isInvite && !isDraft ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "Expense.SendInvite",
                defaultMessage: [{
                  "type": 0,
                  "value": "Send Invite"
                }]
              }) : isCreditCardCharge ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "Expense.SaveReceipt",
                defaultMessage: [{
                  "type": 0,
                  "value": "Save Receipt"
                }]
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {
                id: "Pagination.Next",
                defaultMessage: [{
                  "type": 0,
                  "value": "Next"
                }]
              }), "\xA0\u2192"]
            }), errors.payoutMethod?.data?.currency && touched.items?.some?.(i => i.amount) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_19__/* .Box */ .xu, {
              mx: [2, 0],
              mt: 2,
              color: "red.500",
              fontSize: "12px",
              letterSpacing: 0,
              children: errors.payoutMethod.data.currency.toString()
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
              flex: "1",
              borderColor: "white.full",
              mx: 2
            }), showResetModal ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, _objectSpread({
              onClose: () => setShowResetModal(false),
              header: editingExpense ? formatMessage(msg.cancelEditExpense) : formatMessage(msg.clearExpenseForm),
              body: editingExpense ? formatMessage(msg.confirmCancelEditExpense) : formatMessage(msg.confirmClearExpenseForm),
              continueHandler: () => {
                if (editingExpense) {
                  onCancel();
                } else {
                  setStep(EXPENSE_FORM_STEPS.PAYEE);
                  resetForm({
                    values: getDefaultExpense(collective)
                  });

                  if (formPersister) {
                    formPersister.clearValues();
                    window.scrollTo(0, 0);
                  }
                }

                setShowResetModal(false);
              }
            }, editingExpense && {
              continueLabel: formatMessage({
                id: "b++lom",
                defaultMessage: [{
                  "type": 0,
                  "value": "Yes, cancel editing"
                }]
              }),
              cancelLabel: formatMessage({
                id: "fIsGOi",
                defaultMessage: [{
                  "type": 0,
                  "value": "No, continue editing"
                }]
              })
            })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              type: "button",
              buttonStyle: "borderless",
              width: ['100%', 'auto'],
              color: "red.500",
              mt: 1,
              mx: [2, 0],
              mr: [null, 3],
              whiteSpace: "nowrap",
              onClick: () => setShowResetModal(true),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_5__.Undo, {
                size: 11
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_Text__WEBPACK_IMPORTED_MODULE_28__/* .Span */ .Dr, {
                mx: 1,
                children: formatMessage(editingExpense ? msg.cancelEditExpense : msg.clearExpenseForm)
              })]
            })]
          })]
        })]
      }) : null
    }), step === EXPENSE_FORM_STEPS.EXPENSE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
      mt: 4,
      p: [16, 24, 32],
      overflow: "initial",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(_ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
        expense: formik.values,
        host: collective.host,
        borderless: true,
        collective: collective
      })
    })]
  });
};

/**
 * Main create expense form
 */
const ExpenseForm = ({
  onSubmit,
  collective,
  expense,
  originalExpense,
  payoutProfiles,
  autoFocusTitle,
  onCancel,
  validateOnChange,
  formPersister,
  loggedInAccount,
  loading,
  expensesTags,
  shouldLoadValuesFromPersister,
  defaultStep
}) => {
  const isDraft = expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_9__/* ["default"].DRAFT */ .Z.DRAFT;
  const [hasValidate, setValidate] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(validateOnChange && !isDraft);
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();

  const initialValues = _objectSpread(_objectSpread({}, getDefaultExpense(collective)), expense);

  const validate = expenseData => validateExpense(intl, expenseData);

  if (isDraft) {
    initialValues.items = expense.draft.items;
    initialValues.taxes = expense.draft.taxes;
    initialValues.attachedFiles = expense.draft.attachedFiles;
    initialValues.payoutMethod = expense.draft.payoutMethod;
    initialValues.payeeLocation = expense.draft.payeeLocation;
    initialValues.payee = expense.recurringExpense ? expense.payee : expense.draft.payee;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
    initialValues: initialValues,
    validate: hasValidate && validate,
    onSubmit: async (values, formik) => {
      // We initially let the browser do the validation. Then once users try to submit the
      // form at least once, we validate on each change to make sure they fix all the errors.
      const errors = validate(values);

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(errors)) {
        setValidate(true);
        formik.setErrors(errors);
      } else {
        return onSubmit(values);
      }
    },
    children: formik => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx(ExpenseFormBody, {
      formik: formik,
      payoutProfiles: payoutProfiles,
      collective: collective,
      expense: originalExpense,
      autoFocusTitle: autoFocusTitle,
      onCancel: onCancel,
      formPersister: formPersister,
      loggedInAccount: loggedInAccount,
      expensesTags: expensesTags,
      loading: loading,
      shouldLoadValuesFromPersister: shouldLoadValuesFromPersister,
      isDraft: isDraft,
      defaultStep: defaultStep
    })
  });
};

ExpenseForm.defaultProps = {
  validateOnChange: false
};
ExpenseForm.__docgenInfo = {
  "description": "Main create expense form",
  "methods": [],
  "displayName": "ExpenseForm",
  "props": {
    "validateOnChange": {
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
    "onSubmit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "autoFocusTitle": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "shouldLoadValuesFromPersister": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onCancel": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "formPersister": {
      "description": "To save draft of form values",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "loggedInAccount": {
      "description": "",
      "type": {
        "name": "object"
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
    "expensesTags": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "defaultStep": {
      "description": "Defines the default selected step, if accessible (previous steps need to be completed)",
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"EXPENSE\"",
          "computed": false
        }, {
          "value": "\"PAYEE\"",
          "computed": false
        }]
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
          "slug": {
            "name": "string",
            "required": true
          },
          "host": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              },
              "transferwise": {
                "name": "shape",
                "value": {
                  "availableCurrencies": {
                    "name": "arrayOf",
                    "value": {
                      "name": "object"
                    },
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          },
          "isApproved": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": true
    },
    "expense": {
      "description": "If editing",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(expenseTypes)",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "status": {
            "name": "string",
            "required": false
          },
          "payee": {
            "name": "object",
            "required": false
          },
          "draft": {
            "name": "object",
            "required": false
          },
          "recurringExpense": {
            "name": "object",
            "required": false
          },
          "items": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "url": {
                  "name": "string",
                  "required": false
                }
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "originalExpense": {
      "description": "To reset form",
      "type": {
        "name": "shape",
        "value": {
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(expenseTypes)",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "status": {
            "name": "string",
            "required": false
          },
          "payee": {
            "name": "object",
            "required": false
          },
          "draft": {
            "name": "object",
            "required": false
          },
          "payoutMethod": {
            "name": "object",
            "required": false
          },
          "items": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "url": {
                  "name": "string",
                  "required": false
                }
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "payoutProfiles": {
      "description": "Payout profiles that user has access to",
      "type": {
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
            },
            "slug": {
              "name": "string",
              "required": false
            },
            "location": {
              "name": "shape",
              "value": {
                "address": {
                  "name": "string",
                  "required": false
                },
                "country": {
                  "name": "string",
                  "required": false
                }
              },
              "required": false
            },
            "payoutMethods": {
              "name": "arrayOf",
              "value": {
                "name": "shape",
                "value": {
                  "id": {
                    "name": "string",
                    "required": false
                  },
                  "type": {
                    "name": "enum",
                    "computed": true,
                    "value": "Object.values(PayoutMethodType)",
                    "required": false
                  },
                  "name": {
                    "name": "string",
                    "required": false
                  },
                  "data": {
                    "name": "object",
                    "required": false
                  }
                }
              },
              "required": false
            }
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo(ExpenseForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ addNewExpenseItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42558);
/* harmony import */ var _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46555);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19878);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22642);
/* harmony import */ var _lib_attachments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4131);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88705);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41433);
/* harmony import */ var _StyledDropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37070);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(173);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90998);
/* harmony import */ var _ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46115);
/* harmony import */ var _ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48652);
/* harmony import */ var _ExpenseItemForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(42192);
/* harmony import */ var _ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1868);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__, _lib_attachments__WEBPACK_IMPORTED_MODULE_9__, _StyledDropzone__WEBPACK_IMPORTED_MODULE_14__, _ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_17__, _ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_18__, _ExpenseItemForm__WEBPACK_IMPORTED_MODULE_19__, _ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_20__]);
([uuid__WEBPACK_IMPORTED_MODULE_4__, _lib_attachments__WEBPACK_IMPORTED_MODULE_9__, _StyledDropzone__WEBPACK_IMPORTED_MODULE_14__, _ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_17__, _ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_18__, _ExpenseItemForm__WEBPACK_IMPORTED_MODULE_19__, _ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















/** Init a new expense item with default attributes */




const newExpenseItem = attrs => _objectSpread({
  id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
  // we generate it here to properly key lists, but it won't be submitted to API
  incurredAt: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_6__/* .toIsoDateStr */ .fM)(new Date()),
  description: '',
  amount: null,
  url: '',
  __isNew: true
}, attrs);
/** Converts a list of filenames to expense item objects */


const filesListToItems = files => files.map(({
  url
}) => newExpenseItem({
  url
}));
/** Helper to add a new item to the form */


const addNewExpenseItem = (formik, defaultValues) => {
  formik.setFieldValue('items', [...(formik.values.items || []), newExpenseItem(defaultValues)]);
};

class ExpenseFormItems extends (react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      uploadErrors: null
    });

    _defineProperty(this, "remove", item => {
      const idx = this.props.form.values.items.findIndex(a => a.id === item.id);

      if (idx !== -1) {
        this.props.remove(idx);
      }
    });

    _defineProperty(this, "onCurrencyChange", async newCurrency => {
      /* If we are calling setFieldValue in response to a field change and has validations
       * we should set the field to touched; https://github.com/jaredpalmer/formik/issues/2059
       */
      await this.props.form.setFieldValue('currency', newCurrency);
      this.props.form.setFieldTouched('currency', true);
    });
  }

  componentDidMount() {
    const {
      values
    } = this.props.form;

    if ([_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].GRANT */ .Z.GRANT].includes(values.type)) {
      this.addDefaultItem();
    }
  }

  componentDidUpdate(oldProps) {
    const {
      values,
      touched
    } = this.props.form;

    if (oldProps.form.values.type !== values.type) {
      if ([_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].GRANT */ .Z.GRANT].includes(values.type)) {
        this.addDefaultItem();
      } else if (!touched.items && values.items?.length === 1) {
        const firstItem = values.items[0];

        if (!firstItem.url && !firstItem.description && !firstItem.amount) {
          this.props.remove(0);
        }
      }
    }
  }

  addDefaultItem() {
    const {
      values
    } = this.props.form;

    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(values.items)) {
      this.props.push(newExpenseItem());
    }
  }

  renderErrors() {
    const {
      uploadErrors
    } = this.state;

    if (!uploadErrors?.length) {
      return null;
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        type: "error",
        withIcon: true,
        mb: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx("strong", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "FilesUploadFailed",
            defaultMessage: [{
              "type": 6,
              "value": "count",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "The file"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 7
                  }, {
                    "type": 0,
                    "value": " files"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " failed to upload"
            }],
            values: {
              count: uploadErrors.length
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
          mt: 1,
          pl: 22,
          children: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .formatErrorMessage */ .jN)(this.props.intl, uploadErrors[0]?.message)
        })]
      });
    }
  }

  getApplicableTaxType() {
    const {
      collective,
      form
    } = this.props;

    if (form.values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].INVOICE */ .Z.INVOICE) {
      if ((0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.accountHasVAT)(collective, collective.host)) {
        return _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.TaxType.VAT;
      } else if ((0,_opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.accountHasGST)(collective.host || collective)) {
        return _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.TaxType.GST;
      }
    }
  }

  renderTaxFormFields(taxType, isOptional) {
    switch (taxType) {
      case _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.TaxType.VAT:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_ExpenseVATFormikFields__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          formik: this.props.form,
          isOptional: isOptional
        });

      case _opencollective_taxes__WEBPACK_IMPORTED_MODULE_2__.TaxType.GST:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_ExpenseGSTFormikFields__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          formik: this.props.form,
          isOptional: isOptional
        });

      default:
        return `Tax not supported: ${taxType}`;
    }
  }

  hasTaxFields(taxType) {
    if (!taxType) {
      return false;
    }

    const {
      values
    } = this.props.form;

    if (!values.taxes) {
      // If tax is not initialized (create expense) we render the fields by default
      return true;
    } else {
      // If tax is initialized (edit expense) we render the fields only if there are values
      return values.taxes[0] && !values.taxes[0].isDisabled;
    }
  }

  render() {
    const {
      availableCurrencies
    } = this.props;
    const {
      values,
      errors,
      setFieldValue
    } = this.props.form;
    const requireFile = (0,_lib_attachments__WEBPACK_IMPORTED_MODULE_9__/* .attachmentRequiresFile */ .x)(values.type);
    const isGrant = values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].GRANT */ .Z.GRANT;
    const isCreditCardCharge = values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].CHARGE */ .Z.CHARGE;
    const items = values.items || [];
    const hasItems = items.length > 0;

    if (!hasItems && requireFile) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [this.renderErrors(), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledDropzone__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, _lib_attachments__WEBPACK_IMPORTED_MODULE_9__/* .attachmentDropzoneParams */ .l), {}, {
          kind: "EXPENSE_ITEM",
          "data-cy": "expense-multi-attachments-dropzone",
          onSuccess: files => filesListToItems(files).map(this.props.push),
          onReject: uploadErrors => this.setState({
            uploadErrors
          }),
          mockImageGenerator: index => `https://loremflickr.com/120/120/invoice?lock=${index}`,
          mb: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__.P, {
            color: "black.700",
            mt: 1,
            px: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "MultipleAttachmentsDropzone.UploadWarning",
              defaultMessage: [{
                "type": 8,
                "value": "i18n-bold",
                "children": [{
                  "type": 0,
                  "value": "Important"
                }]
              }, {
                "type": 0,
                "value": ": Expenses will not be paid without a valid receipt."
              }],
              values: {
                'i18n-bold': _I18nFormatters__WEBPACK_IMPORTED_MODULE_11__/* .I18nBold */ .Gl
              }
            })
          })
        }))]
      });
    }

    const onRemove = requireFile || items.length > 1 ? this.remove : null;
    const taxType = this.getApplicableTaxType();
    const hasTaxFields = this.hasTaxFields(taxType);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
      children: [this.renderErrors(), items.map((attachment, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_ExpenseItemForm__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
        attachment: attachment,
        currency: values.currency,
        name: `items[${index}]`,
        errors: errors,
        onRemove: onRemove,
        requireFile: requireFile,
        requireDate: !isGrant,
        isRichText: isGrant,
        onUploadError: e => this.setState({
          uploadErrors: [e]
        }),
        isOptional: values.payee?.isInvite,
        editOnlyDescriptiveInfo: isCreditCardCharge,
        hasMultiCurrency: !index && availableCurrencies?.length > 1 // Only display currency picker for the first item
        ,
        availableCurrencies: availableCurrencies,
        onCurrencyChange: async value => await this.onCurrencyChange(value),
        isLastItem: index === items.length - 1
      }, `item-${attachment.id}`)), taxType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
          alignItems: "center",
          mt: 24,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Text__WEBPACK_IMPORTED_MODULE_16__/* .Span */ .Dr, {
            color: "black.900",
            fontSize: "16px",
            lineHeight: "21px",
            fontWeight: "bold",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "9WIrrf",
              defaultMessage: [{
                "type": 0,
                "value": "Tax and Total"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            flex: "1",
            borderColor: "black.300",
            mx: 2
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
          mt: "8px",
          display: "inline-block",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            name: `tax-${taxType}`,
            checked: hasTaxFields,
            onChange: ({
              checked
            }) => {
              // Using "isDisabled" flag rather than removing to preserve data when enabled/disabled
              if (checked) {
                const tax = _objectSpread(_objectSpread({}, values.taxes?.[0]), {}, {
                  type: taxType,
                  isDisabled: false
                });

                setFieldValue('taxes', [tax]);
              } else {
                setFieldValue('taxes.0.isDisabled', true);
              }
            },
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
              id: "0JzeTD",
              defaultMessage: [{
                "type": 0,
                "value": "Apply "
              }, {
                "type": 1,
                "value": "taxName"
              }],
              values: {
                taxName: (0,_lib_i18n_taxes__WEBPACK_IMPORTED_MODULE_8__/* .i18nTaxType */ .m)(this.props.intl, taxType)
              }
            })
          })
        })]
      }), taxType && !hasTaxFields && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        borderColor: "black.300",
        borderStyle: "dotted",
        mb: 24,
        mt: 24
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .kC, {
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        mt: 24,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
          flexBasis: ['100%', null, null, '50%'],
          mb: 3,
          children: hasTaxFields && this.renderTaxFormFields(taxType, Boolean(values.payee?.isInvite))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .xu, {
          mb: 3,
          ml: [0, null, null, 4],
          flexBasis: ['100%', null, null, 'auto'],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx(_ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            currency: values.currency,
            items: items,
            taxes: values.taxes
          })
        })]
      })]
    });
  }

}

ExpenseFormItems.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "addDefaultItem",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "remove",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "item",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderErrors",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "onCurrencyChange",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "newCurrency",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getApplicableTaxType",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderTaxFormFields",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "taxType",
      "type": null
    }, {
      "name": "isOptional",
      "type": null
    }],
    "returns": null
  }, {
    "name": "hasTaxFields",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "taxType",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "ExpenseFormItems",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "availableCurrencies": {
      "description": "",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "push": {
      "description": "Array helper as provided by formik",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "remove": {
      "description": "Array helper as provided by formik",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "form": {
      "description": "Formik",
      "type": {
        "name": "shape",
        "value": {
          "values": {
            "name": "object",
            "required": true
          },
          "touched": {
            "name": "object",
            "required": false
          },
          "errors": {
            "name": "object",
            "required": false
          },
          "setFieldValue": {
            "name": "func",
            "required": false
          },
          "setFieldTouched": {
            "name": "func",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_3__.injectIntl)(ExpenseFormItems));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "y": () => (/* binding */ validateExpenseFormPayeeInviteNewStep)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3350);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40986);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97079);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(75667);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32631);
/* harmony import */ var _StyledInputLocation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90307);
/* harmony import */ var _StyledLinkButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67001);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90998);
/* harmony import */ var _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(60341);
/* harmony import */ var _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(19410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_22__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_26__, _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_27__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_19__, _StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_22__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_26__, _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  accountType: {
    id: "ExpenseForm.inviteeLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Who will receive the money for this expense?"
    }]
  },
  nameLabel: {
    id: "ContactName",
    defaultMessage: [{
      "type": 0,
      "value": "Contact name"
    }]
  },
  emailTitle: {
    id: "User.EmailAddress",
    defaultMessage: [{
      "type": 0,
      "value": "Email address"
    }]
  },
  payoutOptionLabel: {
    id: "ExpenseForm.PayoutOptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Payout method"
    }]
  },
  invoiceInfo: {
    id: "ExpenseForm.InvoiceInfo",
    defaultMessage: [{
      "type": 0,
      "value": "Additional invoice information"
    }]
  },
  invoiceInfoPlaceholder: {
    id: "ExpenseForm.InvoiceInfoPlaceholder",
    defaultMessage: [{
      "type": 0,
      "value": "Tax ID, VAT number, etc. This information will be printed on your invoice."
    }]
  },
  country: {
    id: "ExpenseForm.ChooseCountry",
    defaultMessage: [{
      "type": 0,
      "value": "Choose country"
    }]
  },
  address: {
    id: "ExpenseForm.AddressLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Physical address"
    }]
  },
  recipientNoteLabel: {
    id: "ExpenseForm.RecipientNoteLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Add a note for the recipient"
    }]
  },
  additionalInfo: {
    id: "ExpenseForm.inviteAdditionalInfo",
    defaultMessage: [{
      "type": 0,
      "value": "Want to enter payout details, such as a PayPal address or bank account?"
    }]
  },
  orgNameLabel: {
    id: "ExpenseForm.inviteeOrgNameLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What's the name of the organization?"
    }]
  },
  orgSlugLabel: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  orgSlugErrorTaken: {
    id: "createCollective.form.error.slug.taken",
    defaultMessage: [{
      "type": 0,
      "value": "URL already taken"
    }]
  },
  orgWebsiteLabel: {
    id: "createOrg.form.websiteLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Organization website"
    }]
  },
  orgDescriptionLabel: {
    id: "ExpenseForm.inviteOrgDescriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Organization description"
    }]
  }
});
const PAYEE_TYPE = {
  USER: 'USER',
  ORG: 'ORG'
};
const Fieldset = styled_components__WEBPACK_IMPORTED_MODULE_7___default().fieldset.withConfig({
  displayName: "ExpenseFormPayeeInviteNewStep__Fieldset",
  componentId: "sc-1vjey42-0"
})(["border:none;padding:0;margin:0;"]);
const RadioOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().label.withConfig({
  displayName: "ExpenseFormPayeeInviteNewStep__RadioOptionContainer",
  componentId: "sc-1vjey42-1"
})(["align-items:center;display:flex;flex:1 1 50%;font-size:14px;font-weight:normal;line-height:20px;margin:0px;padding:6px 16px;cursor:pointer;:not(:last-child){@media (max-width:", "){border-bottom:1px solid #dcdee0;}@media (min-width:", "){border-right:1px solid #dcdee0;}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)('breakpoints.0'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.themeGet)('breakpoints.0'));
const validateExpenseFormPayeeInviteNewStep = values => {
  const errors = (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .requireFields */ .ay)(values, ['payee.name', 'payee.email']);

  if (!lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(errors, 'payee.email')) {
    (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .verifyEmailPattern */ .Sn)(errors, values, 'payee.email');
  }

  return errors;
};

const ExpenseFormPayeeInviteNewStep = ({
  formik,
  collective,
  onBack,
  onNext
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    formatMessage
  } = intl;
  const {
    values,
    touched,
    errors
  } = formik;
  const setPayoutMethod = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback(({
    value
  }) => formik.setFieldValue('payoutMethod', value), []);
  const [payeeType, setPayeeType] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(PAYEE_TYPE.USER);
  const [showAdditionalInfo, setAdditionalInfo] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(values.payeeLocation) || !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(values.payoutMethod));
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    if (values.payee?.organization?.name && !touched.payee?.organization?.slug) {
      const slug = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__/* .suggestSlug */ .e4)(values.payee.organization.name);

      if (values.payee.organization.slug !== slug) {
        formik.setFieldValue('payee.organization.slug', (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_8__/* .suggestSlug */ .e4)(values.payee.organization.name));
      }
    }
  }, [values.payee?.organization?.name]);
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    if (payeeType === PAYEE_TYPE.USER) {
      formik.setFieldValue('payee', lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(values.payee, ['organization']));
    }
  }, [payeeType]);

  const changePayeeType = e => {
    e.stopPropagation();
    setPayeeType(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
      label: formatMessage(msg.accountType),
      labelFontSize: "13px",
      mt: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(Fieldset, {
          onChange: changePayeeType,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
            flexDirection: ['column', 'row'],
            overflow: "hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(RadioOptionContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === PAYEE_TYPE.USER,
                  value: PAYEE_TYPE.USER,
                  onChange: changePayeeType,
                  "data-cy": "payee-type-user"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
                children: "Personal Account"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(RadioOptionContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === PAYEE_TYPE.ORG,
                  value: PAYEE_TYPE.ORG,
                  onChange: changePayeeType,
                  "data-cy": "payee-type-org"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
                children: "Organization Account"
              })]
            })]
          })
        })
      })
    }), payeeType === PAYEE_TYPE.ORG && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Grid */ .rj, {
        gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
        gridColumnGap: [null, 2, null, 3],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
          name: "payee.organization.name",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.orgNameLabel),
            labelFontSize: "13px",
            mt: 3,
            required: true,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              placeholder: "e.g., Airbnb, Salesforce"
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
          name: "payee.organization.slug",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            mt: 3,
            labelFontSize: "13px",
            error: errors.payee?.organization?.slug,
            name: field.name,
            label: formatMessage(msg.orgSlugLabel),
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              prepend: "opencollective.com/"
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
          name: "payee.organization.website",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.orgWebsiteLabel),
            labelFontSize: "13px",
            required: false,
            mt: 3,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              prepend: "https://"
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
          name: "payee.organization.description",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.orgDescriptionLabel),
            labelFontSize: "13px",
            required: false,
            mt: 3,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              placeholder: ""
            }))
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Grid */ .rj, {
      gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
      gridColumnGap: [null, 2, null, 3],
      gridAutoFlow: "dense",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          name: "payee.name",
          htmlFor: "payee.name",
          required: true,
          label: formatMessage(msg.nameLabel),
          labelFontSize: "13px",
          mt: 3,
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread({}, field))
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputFormikField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          name: "payee.email",
          htmlFor: "payee.email",
          label: formatMessage(msg.emailTitle),
          required: true,
          labelFontSize: "13px",
          mt: 3,
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
            type: "email"
          }))
        })
      }), !showAdditionalInfo ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
        gridColumn: [null, '1 / span 2'],
        mt: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          type: "info",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
            fontSize: "12px",
            children: formatMessage(msg.additionalInfo)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Text__WEBPACK_IMPORTED_MODULE_25__.P, {
            fontSize: "12px",
            mt: 2,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledLinkButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              onClick: () => setAdditionalInfo(true),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
                id: "ExpenseForm.inviteAdditionalInfoBtn",
                defaultMessage: [{
                  "type": 0,
                  "value": "Add payout details"
                }]
              })
            })
          })]
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputLocation__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            onChange: values => {
              formik.setFieldValue('payeeLocation', values);
            },
            location: values.payeeLocation,
            errors: errors.payeeLocation,
            required: false
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
            name: "payoutMethod",
            children: ({
              field
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
              name: field.name,
              htmlFor: "payout-method",
              flex: "1",
              mt: 3,
              required: false,
              label: formatMessage(msg.payoutOptionLabel),
              labelFontSize: "13px",
              error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .isErrorType */ .kY)(errors.payoutMethod, _lib_errors__WEBPACK_IMPORTED_MODULE_10__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED) ? (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatFormErrorMessage */ .$m)(intl, errors.payoutMethod) : null,
              children: ({
                id,
                error
              }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                inputId: id,
                error: error,
                onChange: setPayoutMethod,
                payoutMethod: values.payoutMethod,
                payoutMethods: _lib_constants_utils__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY_ARRAY */ .L,
                payee: values.payee,
                disabled: !values.payee,
                collective: collective
              })
            })
          }), values.payoutMethod && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
            name: "payoutMethod",
            children: ({
              field,
              meta
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
              mt: 3,
              flex: "1",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_PayoutMethodForm__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                fieldsPrefix: "payoutMethod",
                payoutMethod: field.value,
                host: collective.host,
                errors: meta.error,
                required: false
              })
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.FastField, {
          name: "invoiceInfo",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.invoiceInfo),
            labelFontSize: "13px",
            required: false,
            mt: 3,
            gridColumn: 1,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, _objectSpread(_objectSpread(_objectSpread({
              as: _StyledTextarea__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z
            }, inputProps), field), {}, {
              minHeight: 80,
              placeholder: formatMessage(msg.invoiceInfoPlaceholder)
            }))
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
        name: "recipientNote",
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          name: field.name,
          label: formatMessage(msg.recipientNoteLabel),
          labelFontSize: "13px",
          required: false,
          mt: 3,
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, _objectSpread(_objectSpread(_objectSpread({
            as: _StyledTextarea__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z
          }, inputProps), field), {}, {
            minHeight: 80
          }))
        })
      })
    }), values.payee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        flex: "1",
        mt: 4,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [onBack && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-cancel",
          onClick: () => {
            onBack?.();
          },
          children: ["\u2190\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "Back",
            defaultMessage: [{
              "type": 0,
              "value": "Back"
            }]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-next",
          buttonStyle: "primary",
          onClick: e => {
            const isFormValid = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .reportValidityHTML5 */ .CR)(e.target.form);
            const errors = validateExpenseFormPayeeInviteNewStep(values);

            if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(errors)) {
              formik.setErrors(errors);
            } else if (isFormValid) {
              onNext();
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
            id: "Pagination.Next",
            defaultMessage: [{
              "type": 0,
              "value": "Next"
            }]
          }), "\xA0\u2192"]
        })]
      })]
    })]
  });
};

ExpenseFormPayeeInviteNewStep.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseFormPayeeInviteNewStep",
  "props": {
    "formik": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "payoutProfiles": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "onBack": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onNext": {
      "description": "",
      "type": {
        "name": "func"
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
          "type": {
            "name": "string",
            "required": true
          },
          "host": {
            "name": "shape",
            "value": {
              "transferwise": {
                "name": "shape",
                "value": {
                  "availableCurrencies": {
                    "name": "arrayOf",
                    "value": {
                      "name": "object"
                    },
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseFormPayeeInviteNewStep);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3350);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40986);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32651);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97079);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16159);
/* harmony import */ var _LoginBtn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22777);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(87268);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputGroup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32631);
/* harmony import */ var _StyledInputLocation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90307);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(93150);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(90998);
/* harmony import */ var _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(60341);
/* harmony import */ var _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(19410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_23__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_25__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_28__, _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_29__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_23__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_25__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_28__, _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























const validateSlugQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query ValidateSlugQuery($slug: String) {
    account(slug: $slug, throwIfMissing: false) {
      id
      slug
    }
  }
`;
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
  nameLabel: {
    id: "ExpenseForm.inviteeLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Who will receive the money for this expense?"
    }]
  },
  legalName: {
    id: "LegalName",
    defaultMessage: [{
      "type": 0,
      "value": "Legal Name"
    }]
  },
  emailLabel: {
    id: "Form.yourEmail",
    defaultMessage: [{
      "type": 0,
      "value": "Your email address"
    }]
  },
  orgNameLabel: {
    id: "ExpenseForm.inviteeOrgNameLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What's the name of the organization?"
    }]
  },
  orgSlugLabel: {
    id: "createCollective.form.slugLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Set your URL"
    }]
  },
  orgSlugErrorTaken: {
    id: "createCollective.form.error.slug.taken",
    defaultMessage: [{
      "type": 0,
      "value": "URL already taken"
    }]
  },
  orgWebsiteLabel: {
    id: "createOrg.form.websiteLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Organization website"
    }]
  },
  orgDescriptionLabel: {
    id: "ExpenseForm.inviteeOrgDescriptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "What does your organization do?"
    }]
  },
  payoutOptionLabel: {
    id: "ExpenseForm.PayoutOptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Payout method"
    }]
  },
  invoiceInfo: {
    id: "ExpenseForm.InvoiceInfo",
    defaultMessage: [{
      "type": 0,
      "value": "Additional invoice information"
    }]
  },
  invoiceInfoPlaceholder: {
    id: "ExpenseForm.InvoiceInfoPlaceholder",
    defaultMessage: [{
      "type": 0,
      "value": "Tax ID, VAT number, etc. This information will be printed on your invoice."
    }]
  },
  country: {
    id: "ExpenseForm.ChooseCountry",
    defaultMessage: [{
      "type": 0,
      "value": "Choose country"
    }]
  },
  address: {
    id: "ExpenseForm.AddressLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Physical address"
    }]
  }
});
const PAYEE_TYPE = {
  USER: 'USER',
  ORG: 'ORG'
};
const Fieldset = styled_components__WEBPACK_IMPORTED_MODULE_9___default().fieldset.withConfig({
  displayName: "ExpenseFormPayeeSignUpStep__Fieldset",
  componentId: "sc-110c70w-0"
})(["border:none;padding:0;margin:0;"]);
const RadioOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_9___default().label.withConfig({
  displayName: "ExpenseFormPayeeSignUpStep__RadioOptionContainer",
  componentId: "sc-110c70w-1"
})(["align-items:center;display:flex;flex:1 1 50%;font-size:14px;font-weight:normal;line-height:20px;margin:0px;padding:6px 16px;cursor:pointer;:not(:last-child){@media (max-width:", "){border-bottom:1px solid #dcdee0;}@media (min-width:", "){border-right:1px solid #dcdee0;}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__.themeGet)('breakpoints.0'), (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_6__.themeGet)('breakpoints.0'));

const throttledSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()((searchFunc, variables) => {
  return searchFunc({
    variables
  });
}, 750);

const ExpenseFormPayeeSignUpStep = ({
  formik,
  collective,
  onCancel,
  onNext
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)();
  const {
    formatMessage
  } = intl;
  const {
    values,
    touched,
    errors
  } = formik;
  const stepOneCompleted = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()((0,_lib_utils__WEBPACK_IMPORTED_MODULE_16__/* .flattenObjectDeep */ .Mc)((0,_PayoutMethodForm__WEBPACK_IMPORTED_MODULE_28__/* .validatePayoutMethod */ .$)(values.payoutMethod))) && (values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].RECEIPT */ .Z.RECEIPT || values.payoutMethod && values.payeeLocation?.country && values.payeeLocation?.address);
  const setPayoutMethod = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback(({
    value
  }) => formik.setFieldValue('payoutMethod', value), []);
  const [payeeType, setPayeeType] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(values.payee?.organization ? PAYEE_TYPE.ORG : PAYEE_TYPE.USER);
  const [validateSlug, {
    data: existingSlugAccount
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useLazyQuery)(validateSlugQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_15__/* .API_V2_CONTEXT */ .T
  });

  const changePayeeType = e => {
    e.stopPropagation();
    setPayeeType(e.target.value);
  };

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (values.payee?.organization?.name && !touched.payee?.organization?.slug) {
      const slug = (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__/* .suggestSlug */ .e4)(values.payee.organization.name);

      if (values.payee.organization.slug !== slug) {
        formik.setFieldValue('payee.organization.slug', (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_10__/* .suggestSlug */ .e4)(values.payee.organization.name));
      }
    }
  }, [values.payee?.organization?.name]);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (payeeType === PAYEE_TYPE.USER) {
      formik.setFieldValue('payee', lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(values.payee, ['organization']));
    } else if (payeeType === PAYEE_TYPE.ORG && values.draft?.payee?.organization) {
      formik.setFieldValue('payee', _objectSpread(_objectSpread({}, values.payee), {}, {
        organization: values.draft.payee.organization
      }));
    }
  }, [payeeType]); // Slug Validation

  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    if (values.payee?.organization?.slug) {
      throttledSearch(validateSlug, {
        slug: values.payee.organization.slug
      });
    }
  }, [values.payee?.organization?.slug]);

  const handleSlugValidation = async value => {
    if (value === existingSlugAccount?.account?.slug) {
      return formatMessage(msg.orgSlugErrorTaken);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
      label: "How you will receive the money of this expense?",
      labelFontSize: "13px",
      mt: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(Fieldset, {
          onChange: changePayeeType,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
            flexDirection: ['column', 'row'],
            overflow: "hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(RadioOptionContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === PAYEE_TYPE.USER,
                  value: PAYEE_TYPE.USER,
                  onChange: changePayeeType
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                children: "Personal Account"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(RadioOptionContainer, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                alignSelf: ['center', 'baseline', null, 'center'],
                mr: "16px",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx("input", {
                  type: "radio",
                  name: "payeeType",
                  checked: payeeType === PAYEE_TYPE.ORG,
                  value: PAYEE_TYPE.ORG,
                  onChange: changePayeeType
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
                children: "Organization Account"
              })]
            })]
          })
        })
      })
    }), payeeType === PAYEE_TYPE.ORG && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Grid */ .rj, {
        gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
        gridColumnGap: [null, 2, null, 3],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payee.organization.name",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.orgNameLabel),
            labelFontSize: "13px",
            mt: 3,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              placeholder: "e.g., Airbnb, Salesforce"
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payee.organization.slug",
          validate: handleSlugValidation,
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            mt: 3,
            labelFontSize: "13px",
            error: errors.payee?.organization?.slug,
            name: field.name,
            label: formatMessage(msg.orgSlugLabel),
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              prepend: "opencollective.com/"
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payee.organization.website",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.orgWebsiteLabel),
            labelFontSize: "13px",
            mt: 3,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputGroup__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              prepend: "http://"
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payee.organization.description",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.orgDescriptionLabel),
            labelFontSize: "13px",
            mt: 3,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              placeholder: ""
            }))
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Grid */ .rj, {
      gridTemplateColumns: ['100%', 'calc(50% - 8px) calc(50% - 8px)'],
      gridColumnGap: [null, 2, null, 3],
      gridAutoFlow: "dense",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payee.name",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.nameLabel),
            labelFontSize: "13px",
            mt: 3,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), field))
          })
        }), payeeType === PAYEE_TYPE.ORG && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__/* .Span */ .Dr, {
          fontSize: "11px",
          lineHeight: "16px",
          color: "black.600",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "ExpenseForm.SignUp.OrgAdminNote",
            defaultMessage: [{
              "type": 0,
              "value": "You need to be an admin of the Organization to submit expenses."
            }]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payee.email",
          required: true,
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.emailLabel),
            labelFontSize: "13px",
            error: errors.payee?.email,
            mt: 3,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
              type: "email"
            }))
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__/* .Span */ .Dr, {
          fontSize: "11px",
          lineHeight: "16px",
          color: "black.600",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "ExpenseForm.SignUp.SignIn",
            defaultMessage: [{
              "type": 0,
              "value": "We will use this email to create your account. If you already have an account "
            }, {
              "type": 1,
              "value": "loginLink"
            }, {
              "type": 0,
              "value": "."
            }],
            values: {
              loginLink: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_LoginBtn__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                asLink: true
              })
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: payeeType === PAYEE_TYPE.ORG ? 'payee.organization.legalName' : 'payee.legalName',
            children: ({
              field
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
              name: field.name,
              isPrivate: true,
              required: false,
              label: formatMessage(msg.legalName),
              labelFontSize: "13px",
              mt: 3,
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), field))
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Text__WEBPACK_IMPORTED_MODULE_27__/* .Span */ .Dr, {
            fontSize: "11px",
            lineHeight: "16px",
            color: "black.600",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "editCollective.legalName.description",
              defaultMessage: [{
                "type": 0,
                "value": "Legal names are private and used in receipts, tax forms, payment details on expenses, and other non-public contexts. Legal names are only visible to admins."
              }]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
          mt: 3,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputLocation__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            onChange: values => {
              formik.setFieldValue('payeeLocation', values);
            },
            location: values.payeeLocation,
            errors: errors.payeeLocation,
            required: true
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payoutMethod",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            name: field.name,
            htmlFor: "payout-method",
            flex: "1",
            mt: 3,
            label: formatMessage(msg.payoutOptionLabel),
            labelFontSize: "13px",
            error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .isErrorType */ .kY)(errors.payoutMethod, _lib_errors__WEBPACK_IMPORTED_MODULE_13__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED) ? (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_14__/* .formatFormErrorMessage */ .$m)(intl, errors.payoutMethod) : null,
            children: ({
              id,
              error
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              inputId: id,
              error: error,
              onChange: setPayoutMethod,
              payoutMethod: values.payoutMethod,
              payoutMethods: _lib_constants_utils__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY_ARRAY */ .L,
              payee: values.payee,
              disabled: !values.payee,
              collective: collective
            })
          })
        }), values.payoutMethod && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
          name: "payoutMethod",
          children: ({
            field,
            meta
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Box */ .xu, {
            mt: 3,
            flex: "1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_PayoutMethodForm__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
              fieldsPrefix: "payoutMethod",
              payoutMethod: field.value,
              host: collective.host,
              errors: meta.error
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.FastField, {
        name: "invoiceInfo",
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          name: field.name,
          label: formatMessage(msg.invoiceInfo),
          labelFontSize: "13px",
          required: false,
          mt: 3,
          gridColumn: 1,
          children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, _objectSpread(_objectSpread(_objectSpread({
            as: _StyledTextarea__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z
          }, inputProps), field), {}, {
            minHeight: 80,
            placeholder: formatMessage(msg.invoiceInfoPlaceholder)
          }))
        })
      })]
    }), values.payee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
        flex: "1",
        mt: 4,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_17__/* .Flex */ .kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [onCancel && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-cancel",
          disabled: !stepOneCompleted,
          onClick: () => {
            onCancel?.();
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-next",
          buttonStyle: "primary",
          disabled: !stepOneCompleted,
          onClick: async () => {
            const allErrors = await formik.validateForm();

            const errors = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(allErrors, ['payee', 'payoutMethod', 'payeeLocation']), ['payoutMethod.data.currency']);

            if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()((0,_lib_utils__WEBPACK_IMPORTED_MODULE_16__/* .flattenObjectDeep */ .Mc)(errors))) {
              onNext?.();
            } else {
              // We use set touched here to display errors on fields that are not dirty.
              formik.setTouched(errors);
              formik.setErrors(errors);
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_30__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "Pagination.Next",
            defaultMessage: [{
              "type": 0,
              "value": "Next"
            }]
          }), "\xA0\u2192"]
        })]
      })]
    })]
  });
};

ExpenseFormPayeeSignUpStep.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseFormPayeeSignUpStep",
  "props": {
    "formik": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "onCancel": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onNext": {
      "description": "",
      "type": {
        "name": "func"
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
          "type": {
            "name": "string",
            "required": true
          },
          "host": {
            "name": "shape",
            "value": {
              "transferwise": {
                "name": "shape",
                "value": {
                  "availableCurrencies": {
                    "name": "arrayOf",
                    "value": {
                      "name": "object"
                    },
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseFormPayeeSignUpStep);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22265);
/* harmony import */ var lodash_first__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_first__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81551);
/* harmony import */ var _styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56508);
/* harmony import */ var _lib_constants_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3350);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40986);
/* harmony import */ var _lib_policies__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(43176);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97079);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51561);
/* harmony import */ var _CollectivePicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(40242);
/* harmony import */ var _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5993);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(87268);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(87262);
/* harmony import */ var _StyledInputLocation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90307);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(93150);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(90998);
/* harmony import */ var _TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(37066);
/* harmony import */ var _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(60341);
/* harmony import */ var _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(19410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_19__, _CollectivePicker__WEBPACK_IMPORTED_MODULE_20__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_21__, _StyledInputField__WEBPACK_IMPORTED_MODULE_28__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_29__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_31__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_34__, _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_35__]);
([_lib_utils__WEBPACK_IMPORTED_MODULE_19__, _CollectivePicker__WEBPACK_IMPORTED_MODULE_20__, _CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_21__, _StyledInputField__WEBPACK_IMPORTED_MODULE_28__, _StyledInputLocation__WEBPACK_IMPORTED_MODULE_29__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_31__, _PayoutMethodForm__WEBPACK_IMPORTED_MODULE_34__, _PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_35__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


































const {
  INDIVIDUAL,
  ORGANIZATION,
  COLLECTIVE,
  FUND,
  EVENT,
  PROJECT
} = _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__/* .CollectiveType */ .eV;
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({
  payeeLabel: {
    id: "ExpenseForm.payeeLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Who is being paid for this expense?"
    }]
  },
  payoutOptionLabel: {
    id: "ExpenseForm.PayoutOptionLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Payout method"
    }]
  },
  invoiceInfo: {
    id: "ExpenseForm.InvoiceInfo",
    defaultMessage: [{
      "type": 0,
      "value": "Additional invoice information"
    }]
  },
  invoiceInfoPlaceholder: {
    id: "ExpenseForm.InvoiceInfoPlaceholder",
    defaultMessage: [{
      "type": 0,
      "value": "Tax ID, VAT number, etc. This information will be printed on your invoice."
    }]
  },
  country: {
    id: "ExpenseForm.ChooseCountry",
    defaultMessage: [{
      "type": 0,
      "value": "Choose country"
    }]
  },
  address: {
    id: "ExpenseForm.AddressLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Physical address"
    }]
  },
  cancelEditExpense: {
    id: "ExpenseForm.CancelEditExpense",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel Edit"
    }]
  },
  confirmCancelEditExpense: {
    id: "ExpenseForm.ConfirmCancelEditExpense",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to cancel the edits?"
    }]
  },
  clearExpenseForm: {
    id: "ExpenseForm.ClearExpenseForm",
    defaultMessage: [{
      "type": 0,
      "value": "Clear Form"
    }]
  },
  confirmClearExpenseForm: {
    id: "ExpenseForm.ConfirmClearExpenseForm",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to clear the expense form?"
    }]
  }
});

const setLocationFromPayee = (formik, payee) => {
  formik.setFieldValue('payeeLocation.country', payee?.location?.country || null);
  formik.setFieldValue('payeeLocation.address', payee?.location?.address || '');
  formik.setFieldValue('payeeLocation.structured', payee?.location?.structured);
};

const getPayoutMethodsFromPayee = payee => {
  const payoutMethods = (lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(payee, 'payoutMethods') || _lib_constants_utils__WEBPACK_IMPORTED_MODULE_15__/* .EMPTY_ARRAY */ .L).filter(({
    isSaved
  }) => isSaved); // If the Payee is active (can manage a budget and has a balance). This is usually:
  // - a "Collective" family (Collective, Fund, Event, Project) with an host or Self Hosted
  // - an "Host" Organization with budget activated (new default)

  if (payee?.isActive) {
    if (!payoutMethods.find(pm => pm.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_14__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE)) {
      payoutMethods.push({
        id: 'new',
        data: {},
        type: _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_14__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE,
        isSaved: true
      });
    }
  } // If the Payee is in the "Collective" family (Collective, Fund, Event, Project)
  // But not the Host itself (Self Hosted)
  // Then we should add BANK_ACCOUNT and PAYPAL of the Host as an option


  if (payee && _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__/* .AccountTypesWithHost.includes */ .Zs.includes(payee.type) && payee.id !== payee.host?.id) {
    const hostPayoutMethods = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(payee, 'host.payoutMethods') || _lib_constants_utils__WEBPACK_IMPORTED_MODULE_15__/* .EMPTY_ARRAY */ .L;
    let hostSuitablePayoutMethods = hostPayoutMethods.filter(payoutMethod => payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_14__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT).filter(payoutMethod => !payoutMethod.name || payoutMethod.name.includes('Collectives account') || payoutMethod.name.includes('Main account'));

    if (hostSuitablePayoutMethods.length === 0) {
      hostSuitablePayoutMethods = hostPayoutMethods.filter(payoutMethod => payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_14__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL);
    }

    payoutMethods.push(...hostSuitablePayoutMethods.map(payoutMethod => _objectSpread(_objectSpread({}, payoutMethod), {}, {
      isDeletable: false
    })));
  }

  return payoutMethods.length > 0 ? payoutMethods : _lib_constants_utils__WEBPACK_IMPORTED_MODULE_15__/* .EMPTY_ARRAY */ .L;
};

const refreshPayoutProfile = (formik, payoutProfiles) => {
  const payee = formik.values.payee ? payoutProfiles.find(profile => profile.id === formik.values.payee.id) : lodash_first__WEBPACK_IMPORTED_MODULE_5___default()(payoutProfiles);
  formik.setValues(_objectSpread(_objectSpread({}, formik.values), {}, {
    draft: lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(formik.values.draft, ['payee']),
    payee
  }));
};

const getPayeeOptions = (intl, payoutProfiles) => {
  const profileOptions = payoutProfiles.map(value => ({
    value,
    label: value.name,
    [_CollectivePicker__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_COLLECTIVE_PICKER_COLLECTIVE */ .rA]: true
  }));

  const profilesByType = lodash_groupBy__WEBPACK_IMPORTED_MODULE_3___default()(profileOptions, p => p.value.type);

  const myself = profilesByType[INDIVIDUAL] || [];
  const myOrganizations = profilesByType[ORGANIZATION] || [];
  myOrganizations.push({
    label: null,
    value: null,
    isDisabled: true,
    [_CollectivePicker__WEBPACK_IMPORTED_MODULE_20__/* .FLAG_NEW_COLLECTIVE */ .yZ]: true,
    types: [_lib_constants_collectives__WEBPACK_IMPORTED_MODULE_12__/* .CollectiveType.ORGANIZATION */ .eV.ORGANIZATION],
    __background__: 'white'
  });
  const payeeOptions = [{
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
    payeeOptions.push({
      options: profilesByType[COLLECTIVE],
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
    payeeOptions.push({
      options: profilesByType[FUND],
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
    payeeOptions.push({
      options: profilesByType[PROJECT],
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
    payeeOptions.push({
      options: profilesByType[EVENT],
      label: intl.formatMessage({
        id: "events",
        defaultMessage: [{
          "type": 0,
          "value": "My Events"
        }]
      })
    });
  }

  return payeeOptions;
};

const checkStepOneCompleted = (values, isOnBehalf, isMissing2FA) => {
  if (isMissing2FA) {
    return false;
  } else if (isOnBehalf) {
    return Boolean(values.payee);
  } else if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()((0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .flattenObjectDeep */ .Mc)((0,_PayoutMethodForm__WEBPACK_IMPORTED_MODULE_34__/* .validatePayoutMethod */ .$)(values.payoutMethod)))) {
    return false; // There are some errors in the form
  } else if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_19__/* .checkRequiresAddress */ .vr)(values)) {
    // Require an address for non-receipt expenses
    return Boolean(values.payoutMethod && values.payeeLocation?.country && values.payeeLocation?.address);
  } else {
    return true;
  }
};

const ExpenseFormPayeeStep = ({
  formik,
  payoutProfiles,
  collective,
  onCancel,
  onNext,
  onInvite,
  onChange,
  isOnBehalf,
  loggedInAccount,
  editingExpense,
  resetDefaultStep,
  formPersister,
  getDefaultExpense
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.useIntl)();
  const {
    formatMessage
  } = intl;
  const {
    values,
    errors
  } = formik;
  const isMissing2FA = (0,_lib_policies__WEBPACK_IMPORTED_MODULE_37__/* .require2FAForAdmins */ .u)(values.payee) && !loggedInAccount?.hasTwoFactorAuth;
  const stepOneCompleted = checkStepOneCompleted(values, isOnBehalf, isMissing2FA);
  const allPayoutMethods = react__WEBPACK_IMPORTED_MODULE_6___default().useMemo(() => getPayoutMethodsFromPayee(values.payee), [values.payee, loggedInAccount]);
  const [showResetModal, setShowResetModal] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
  const onPayoutMethodRemove = react__WEBPACK_IMPORTED_MODULE_6___default().useCallback(() => refreshPayoutProfile(formik, payoutProfiles), [payoutProfiles]);
  const setPayoutMethod = react__WEBPACK_IMPORTED_MODULE_6___default().useCallback(({
    value
  }) => formik.setFieldValue('payoutMethod', value), []);
  const payeeOptions = react__WEBPACK_IMPORTED_MODULE_6___default().useMemo(() => getPayeeOptions(intl, payoutProfiles), [payoutProfiles]);
  const requiresAddress = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_19__/* .checkRequiresAddress */ .vr)(values);
  const canInvite = !values?.status;
  const collectivePick = canInvite ? ({
    id
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_CollectivePickerAsync__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
    inputId: id,
    "data-cy": "select-expense-payee",
    isSearchable: true,
    collective: values.payee,
    onChange: ({
      value
    }) => {
      if (value) {
        const existingProfile = payoutProfiles.find(p => p.slug === value.slug);
        const isNewlyCreatedProfile = value.members?.some(m => m.role === 'ADMIN' && m.member.slug === loggedInAccount.slug);

        const payee = existingProfile || _objectSpread(_objectSpread({}, lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(value, ['id', 'name', 'slug', 'email', 'type'])), {}, {
          isInvite: !isNewlyCreatedProfile
        });

        if (isNewlyCreatedProfile) {
          payee.payoutMethods = [];
        }

        formik.setFieldValue('payee', payee);
        formik.setFieldValue('payoutMethod', null);
        setLocationFromPayee(formik, payee);
        onChange(payee);
      }
    },
    styles: {
      menu: {
        borderRadius: '16px'
      },
      menuList: {
        padding: '8px'
      }
    },
    emptyCustomOptions: payeeOptions,
    customOptionsPosition: _CollectivePicker__WEBPACK_IMPORTED_MODULE_20__/* .CUSTOM_OPTIONS_POSITION.BOTTOM */ .W1.BOTTOM,
    getDefaultOptions: build => values.payee && build(values.payee),
    invitable: true,
    onInvite: onInvite,
    LoggedInUser: loggedInAccount,
    addLoggedInUserAsAdmin: true,
    excludeAdminFields: true
  }) : ({
    id
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_CollectivePicker__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP, {
    inputId: id,
    customOptions: payeeOptions,
    getDefaultOptions: build => values.payee && build(values.payee),
    "data-cy": "select-expense-payee",
    isSearchable: true,
    collective: values.payee,
    onChange: ({
      value
    }) => {
      formik.setFieldValue('payee', value);
      formik.setFieldValue('payoutMethod', null);
      setLocationFromPayee(formik, value);
      onChange(value);
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
      flexDirection: ['column', 'row'],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
        mr: [null, 2, null, 4],
        flexGrow: "1",
        flexBasis: "50%",
        maxWidth: [null, null, '60%'],
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
          name: "payee",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
            name: field.name,
            label: formatMessage(msg.payeeLabel),
            labelFontSize: "13px",
            flex: "1",
            mt: 3,
            children: collectivePick
          })
        }), !isMissing2FA && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
          children: [values.payee?.legalName && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
            name: "legalName",
            children: ({
              field
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(_StyledInputField__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
              name: field.name,
              label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                  id: "LegalName",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Legal Name"
                  }]
                }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z, {
                  content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                    id: "ExpenseForm.legalName.tooltip",
                    defaultMessage: [{
                      "type": 0,
                      "value": "The legal name of the payee. This can be changed in your profile settings."
                    }]
                  }),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_7__.InfoCircle, {
                    size: 16
                  })
                })]
              }),
              labelFontSize: "13px",
              flex: "1",
              mt: 3,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .ZP, {
                value: values.payee.legalName,
                disabled: true
              }), values.payoutMethod?.data?.accountHolderName && values.payee.legalName && !(0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_11__/* .compareNames */ .dj)(values.payoutMethod.data.accountHolderName, values.payee.legalName) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                mt: 2,
                fontSize: "12px",
                type: "warning",
                withIcon: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
                  id: "Warning.LegalNameNotMatchBankAccountName",
                  defaultMessage: [{
                    "type": 0,
                    "value": "The legal name should match the bank account holder name in most cases. Otherwise payments may be delayed. If the payment is to an organization, please select or create that organization's profile instead of your individual profile as the payee."
                  }]
                })
              })]
            })
          }), requiresAddress && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
            mt: 3,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledInputLocation__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              onChange: values => {
                formik.setFieldValue('payeeLocation', values);
              },
              location: values.payeeLocation,
              errors: errors.payeeLocation
            })
          }), values.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_13__/* ["default"].INVOICE */ .Z.INVOICE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(formik__WEBPACK_IMPORTED_MODULE_9__.FastField, {
            name: "invoiceInfo",
            children: ({
              field
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
              name: field.name,
              label: formatMessage(msg.invoiceInfo),
              labelFontSize: "13px",
              required: false,
              mt: 3,
              children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(formik__WEBPACK_IMPORTED_MODULE_9__.Field, _objectSpread(_objectSpread(_objectSpread({
                as: _StyledTextarea__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z
              }, inputProps), field), {}, {
                minHeight: 80,
                placeholder: formatMessage(msg.invoiceInfoPlaceholder)
              }))
            })
          })]
        })]
      }), !isOnBehalf && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
        flexGrow: "1",
        flexBasis: "50%",
        display: values.payee ? 'block' : 'none',
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
          name: "payoutMethod",
          children: ({
            field
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
            name: field.name,
            htmlFor: "payout-method",
            flex: "1",
            mt: 3,
            label: formatMessage(msg.payoutOptionLabel),
            labelFontSize: "13px",
            error: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_16__/* .isErrorType */ .kY)(errors.payoutMethod, _lib_errors__WEBPACK_IMPORTED_MODULE_16__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED) ? (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_17__/* .formatFormErrorMessage */ .$m)(intl, errors.payoutMethod) : null,
            children: ({
              id,
              error
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_PayoutMethodSelect__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
              inputId: id,
              error: error,
              onChange: setPayoutMethod,
              onRemove: onPayoutMethodRemove,
              payoutMethod: values.payoutMethod,
              payoutMethods: allPayoutMethods,
              payee: values.payee,
              disabled: !values.payee || isMissing2FA,
              collective: collective
            })
          })
        }), values.payoutMethod && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
          name: "payoutMethod",
          children: ({
            field,
            meta
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Box */ .xu, {
            mt: 3,
            flex: "1",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_PayoutMethodForm__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
              fieldsPrefix: "payoutMethod",
              payoutMethod: field.value,
              host: collective.host,
              errors: meta.error
            })
          })
        })]
      })]
    }), isMissing2FA && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_TwoFactorAuthRequiredMessage__WEBPACK_IMPORTED_MODULE_33__/* .TwoFactorAuthRequiredMessage */ .l, {
      mt: 4
    }), values.payee && !isMissing2FA && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
        flex: "1",
        mt: 4,
        borderColor: "black.300"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
        mt: 3,
        flexWrap: "wrap",
        children: [onCancel && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-cancel",
          onClick: () => {
            onCancel?.();
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
            id: "actions.cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel"
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
          type: "button",
          width: ['100%', 'auto'],
          mx: [2, 0],
          mr: [null, 3],
          mt: 2,
          whiteSpace: "nowrap",
          "data-cy": "expense-next",
          buttonStyle: "primary",
          disabled: !stepOneCompleted,
          onClick: async () => {
            const allErrors = await formik.validateForm(); // Get the relevant errors for the payee step, ignores data.currency in the because it is related to expense amount.

            const errors = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(allErrors, ['payee', 'payoutMethod', 'payeeLocation']), ['payoutMethod.data.currency']);

            if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()((0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .flattenObjectDeep */ .Mc)(errors))) {
              onNext?.();
            } else {
              // We use set touched here to display errors on fields that are not dirty.
              // eslint-disable-next-line no-console
              console.log('ExpenseFormPayeeStep > Validation failed', errors);
              formik.setTouched(errors);
              formik.setErrors(errors);
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__.FormattedMessage, {
            id: "Pagination.Next",
            defaultMessage: [{
              "type": 0,
              "value": "Next"
            }]
          }), "\xA0\u2192"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          flex: "1",
          borderColor: "white.full",
          mx: 2
        }), showResetModal ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, _objectSpread({
          onClose: () => setShowResetModal(false),
          header: editingExpense ? formatMessage(msg.cancelEditExpense) : formatMessage(msg.clearExpenseForm),
          body: editingExpense ? formatMessage(msg.confirmCancelEditExpense) : formatMessage(msg.confirmClearExpenseForm),
          continueHandler: () => {
            if (editingExpense) {
              onCancel();
            } else {
              resetDefaultStep();
              formik.resetForm({
                values: getDefaultExpense(collective)
              });

              if (formPersister) {
                formPersister.clearValues();
                window.scrollTo(0, 0);
              }
            }

            setShowResetModal(false);
          }
        }, editingExpense && {
          continueLabel: formatMessage({
            id: "b++lom",
            defaultMessage: [{
              "type": 0,
              "value": "Yes, cancel editing"
            }]
          }),
          cancelLabel: formatMessage({
            id: "fIsGOi",
            defaultMessage: [{
              "type": 0,
              "value": "No, continue editing"
            }]
          })
        })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_23__/* .Flex */ .kC, {
          float: "right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            type: "button",
            buttonStyle: "borderless",
            width: ['100%', 'auto'],
            color: "red.500",
            mt: 1,
            mx: [2, 0],
            mr: [null, 3],
            whiteSpace: "nowrap",
            onClick: () => setShowResetModal(true),
            float: "right",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_styled_icons_fa_solid_Undo__WEBPACK_IMPORTED_MODULE_8__.Undo, {
              size: 11
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx(_Text__WEBPACK_IMPORTED_MODULE_32__/* .Span */ .Dr, {
              mx: 1,
              children: formatMessage(editingExpense ? msg.cancelEditExpense : msg.clearExpenseForm)
            })]
          })
        })]
      })]
    })]
  });
};

ExpenseFormPayeeStep.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseFormPayeeStep",
  "props": {
    "formik": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "editingExpense": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "resetDefaultStep": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "formPersister": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "getDefaultExpense": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "payoutProfiles": {
      "description": "",
      "type": {
        "name": "array"
      },
      "required": false
    },
    "onCancel": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "handleClearPayeeStep": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onNext": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onInvite": {
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
    "isOnBehalf": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "loggedInAccount": {
      "description": "",
      "type": {
        "name": "object"
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
          "type": {
            "name": "string",
            "required": true
          },
          "host": {
            "name": "shape",
            "value": {
              "transferwise": {
                "name": "shape",
                "value": {
                  "availableCurrencies": {
                    "name": "arrayOf",
                    "value": {
                      "name": "object"
                    },
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "settings": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseFormPayeeStep);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ expenses_ExpenseInfoSidebar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
// EXTERNAL MODULE: ./lib/constants/currency-precision.js
var currency_precision = __webpack_require__(19377);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(69078);
// EXTERNAL MODULE: ./components/Grid.ts
var Grid = __webpack_require__(16159);
// EXTERNAL MODULE: ./components/StyledLink.tsx
var StyledLink = __webpack_require__(51082);
// EXTERNAL MODULE: ./components/faqs/FAQ.js
var FAQ = __webpack_require__(99849);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./components/faqs/CreateExpenseFAQ.js
const _excluded = ["defaultOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const CreateExpenseFAQ = _ref => {
  let {
    defaultOpen
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* default */.ZP, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.getPaid",
          defaultMessage: [{
            "type": 0,
            "value": "How do I get paid from a Collective?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.getPaidDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Submit an expense and provide your payment information."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.howAreApproved",
          defaultMessage: [{
            "type": 0,
            "value": "How are expenses approved?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.howAreApprovedDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Collective admins are notified when an expense is submitted, and they can approve or reject it."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.isItPublic",
          defaultMessage: [{
            "type": 0,
            "value": "Is my private data made public?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.isItPublicDetails",
          defaultMessage: [{
            "type": 0,
            "value": "No. Only the expense amount and description are public. Attachments, payment info, emails and addresses are only visible to you and the admins."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.whenPaid",
          defaultMessage: [{
            "type": 0,
            "value": "When will I get paid?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CreateExpenseFAQ.whenPaidDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Payments are processed by the Collective's Fiscal Host, the organization that hold funds on their behalf. Many Fiscal Hosts pay expenses weekly, but each one is different."
          }]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FAQ/* Entry */.kS, {
      open: defaultOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(FAQ/* Title */.Dx, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "FpmEYP",
          defaultMessage: [{
            "type": 0,
            "value": "Why do you need my legal name?"
          }]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(FAQ/* Content */.VY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "ntqqkx",
          defaultMessage: [{
            "type": 0,
            "value": "The display name is public and the legal name is private, appearing on receipts, invoices, and other official documentation used for tax and accounting purposes."
          }]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      mt: 2,
      pl: 2,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledLink/* default */.Z, {
        as: StyledLink/* default */.Z,
        href: "https://docs.opencollective.com/help/expenses-and-getting-paid/submitting-expenses",
        openInNewTab: true,
        fontSize: "12px",
        color: "black.700",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
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

CreateExpenseFAQ.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CreateExpenseFAQ",
  "props": {
    "defaultOpen": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const faqs_CreateExpenseFAQ = (CreateExpenseFAQ);
// EXTERNAL MODULE: ./components/FormattedMoneyAmount.js
var FormattedMoneyAmount = __webpack_require__(27596);
// EXTERNAL MODULE: ./components/LinkCollective.js
var LinkCollective = __webpack_require__(97619);
// EXTERNAL MODULE: ./components/LoadingPlaceholder.tsx
var LoadingPlaceholder = __webpack_require__(29242);
// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__(90998);
// EXTERNAL MODULE: ./components/Collapse.tsx
var Collapse = __webpack_require__(90175);
// EXTERNAL MODULE: ./components/HTMLContent.js
var HTMLContent = __webpack_require__(74770);
;// CONCATENATED MODULE: ./components/expenses/ExpandableExpensePolicies.js
const ExpandableExpensePolicies_excluded = ["host", "collective"];

function ExpandableExpensePolicies_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ExpandableExpensePolicies_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExpandableExpensePolicies_ownKeys(Object(source), !0).forEach(function (key) { ExpandableExpensePolicies_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExpandableExpensePolicies_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ExpandableExpensePolicies_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ExpandableExpensePolicies_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ExpandableExpensePolicies_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ExpandableExpensePolicies_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const ExpandableExpensePolicies = _ref => {
  let {
    host,
    collective
  } = _ref,
      props = ExpandableExpensePolicies_objectWithoutProperties(_ref, ExpandableExpensePolicies_excluded);

  const hostPolicy = host?.expensePolicy;
  const parentPolicy = collective?.parent?.expensePolicy;
  const accountPolicy = collective?.expensePolicy;

  if (!accountPolicy && !parentPolicy && !hostPolicy) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, ExpandableExpensePolicies_objectSpread(ExpandableExpensePolicies_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Collapse/* default */.Z, {
      defaultIsOpen: true,
      title: /*#__PURE__*/jsx_runtime_.jsx(Text.H5, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "ExpensePolicies",
          defaultMessage: [{
            "type": 0,
            "value": "Expense policies"
          }]
        })
      }),
      children: [hostPolicy && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(HTMLContent/* default */.Z, {
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: hostPolicy
        })
      }), parentPolicy && collective.parent.id !== host?.id && parentPolicy !== accountPolicy && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(HTMLContent/* default */.Z, {
          "data-cy": "expense-policy-html",
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: parentPolicy
        })
      }), accountPolicy && collective.id !== host?.id && /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        mb: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx(HTMLContent/* default */.Z, {
          "data-cy": "expense-policy-html",
          fontSize: "12px",
          color: "black.800",
          lineHeight: "20px",
          content: accountPolicy
        })
      })]
    })
  }));
};

ExpandableExpensePolicies.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpandableExpensePolicies",
  "props": {
    "collective": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "expensePolicy": {
            "name": "string",
            "required": false
          },
          "parent": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "expensePolicy": {
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
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "expensePolicy": {
            "name": "string",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const expenses_ExpandableExpensePolicies = (ExpandableExpensePolicies);
;// CONCATENATED MODULE: ./components/expenses/ExpenseInfoSidebar.js











/**
 * Provide some info (ie. collective balance, tags, policies, etc.) for the expense pages
 * in a sidebar.
 */




const ExpenseInfoSidebar = ({
  isLoading,
  host,
  collective,
  children
}) => {
  const balanceWithBlockedFunds = collective?.stats.balanceWithBlockedFunds;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
    width: "100%",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
      display: ['none', 'block'],
      children: [/*#__PURE__*/jsx_runtime_.jsx(Text.H5, {
        mb: 3,
        textTransform: "capitalize",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
          id: "CollectiveBalance",
          defaultMessage: [{
            "type": 5,
            "value": "type",
            "options": {
              "COLLECTIVE": {
                "value": [{
                  "type": 0,
                  "value": "Collective balance"
                }]
              },
              "EVENT": {
                "value": [{
                  "type": 0,
                  "value": "Event balance"
                }]
              },
              "ORGANIZATION": {
                "value": [{
                  "type": 0,
                  "value": "Organization balance"
                }]
              },
              "FUND": {
                "value": [{
                  "type": 0,
                  "value": "Fund balance"
                }]
              },
              "PROJECT": {
                "value": [{
                  "type": 0,
                  "value": "Project balance"
                }]
              },
              "other": {
                "value": [{
                  "type": 0,
                  "value": "Account balance"
                }]
              }
            }
          }],
          values: {
            type: collective?.type || '' // collective can be null when it's loading

          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        borderLeft: "1px solid",
        borderColor: "black.300",
        pl: 3,
        fontSize: "20px",
        color: "black.500",
        "data-cy": "collective-balance",
        children: isLoading && !balanceWithBlockedFunds ? /*#__PURE__*/jsx_runtime_.jsx(LoadingPlaceholder/* default */.Z, {
          height: 28,
          width: 75
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* Box */.xu, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(FormattedMoneyAmount/* default */.Z, {
            currency: balanceWithBlockedFunds.currency,
            amount: balanceWithBlockedFunds.valueInCents,
            amountStyles: {
              color: 'black.800'
            },
            precision: currency_precision/* CurrencyPrecision.DEFAULT */.E.DEFAULT
          }), host && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text.P, {
            fontSize: "11px",
            color: "black.600",
            mt: 2,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* Span */.Dr, {
              fontSize: "9px",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "black.500",
              letterSpacing: "0.06em",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "Fiscalhost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host"
                }]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(LinkCollective/* default */.Z, {
              collective: host,
              children: collective?.isActive ? host.name : /*#__PURE__*/jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                id: "Fiscalhost.pending",
                defaultMessage: [{
                  "type": 1,
                  "value": "host"
                }, {
                  "type": 0,
                  "value": " (pending)"
                }],
                values: {
                  host: host.name
                }
              })
            })]
          })]
        })
      })]
    }), children && /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      my: 50,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(expenses_ExpandableExpensePolicies, {
      host: host,
      collective: collective,
      mt: 50
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* Box */.xu, {
      mt: [0, 50],
      children: /*#__PURE__*/jsx_runtime_.jsx(faqs_CreateExpenseFAQ, {
        withBorderLeft: true,
        withNewButtons: true,
        titleProps: {
          fontSize: '20px',
          fontWeight: 500,
          mb: 3
        }
      })
    })]
  });
};

ExpenseInfoSidebar.__docgenInfo = {
  "description": "Provide some info (ie. collective balance, tags, policies, etc.) for the expense pages\nin a sidebar.",
  "methods": [],
  "displayName": "ExpenseInfoSidebar",
  "props": {
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "children": {
      "description": "To render custom content inside the sidebar",
      "type": {
        "name": "node"
      },
      "required": false
    },
    "collective": {
      "description": "Must be provided if isLoading is false",
      "type": {
        "name": "shape",
        "value": {
          "id": {
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
          "parent": {
            "name": "object",
            "required": false
          },
          "isActive": {
            "name": "bool",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "balanceWithBlockedFunds": {
                "name": "shape",
                "value": {
                  "valueInCents": {
                    "name": "number",
                    "required": true
                  },
                  "currency": {
                    "name": "string",
                    "required": true
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
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const expenses_ExpenseInfoSidebar = (/*#__PURE__*/external_react_default().memo(ExpenseInfoSidebar));

/***/ }),

/***/ 42192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ay": () => (/* binding */ validateExpenseItem)
/* harmony export */ });
/* unused harmony export msg */
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98013);
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92349);
/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_escape__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19878);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40986);
/* harmony import */ var _lib_attachments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4131);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40777);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59139);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87268);
/* harmony import */ var _StyledDropzone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37070);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(173);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputAmount__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54029);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_attachments__WEBPACK_IMPORTED_MODULE_11__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_13__, _RichTextEditor__WEBPACK_IMPORTED_MODULE_14__, _StyledDropzone__WEBPACK_IMPORTED_MODULE_16__, _StyledInputField__WEBPACK_IMPORTED_MODULE_20__]);
([_lib_attachments__WEBPACK_IMPORTED_MODULE_11__, _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_13__, _RichTextEditor__WEBPACK_IMPORTED_MODULE_14__, _StyledDropzone__WEBPACK_IMPORTED_MODULE_16__, _StyledInputField__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  previewImgAlt: {
    id: "ExpenseReceiptImagePreview.Alt",
    defaultMessage: [{
      "type": 0,
      "value": "Expense receipt preview"
    }]
  },
  descriptionLabel: {
    id: "Fields.description",
    defaultMessage: [{
      "type": 0,
      "value": "Description"
    }]
  },
  amountLabel: {
    id: "Fields.amount",
    defaultMessage: [{
      "type": 0,
      "value": "Amount"
    }]
  },
  dateLabel: {
    id: "expense.incurredAt",
    defaultMessage: [{
      "type": 0,
      "value": "Date"
    }]
  },
  removeReceipt: {
    id: "expense.RemoveReceipt",
    defaultMessage: [{
      "type": 0,
      "value": "Remove receipt"
    }]
  },
  removeItem: {
    id: "expense.RemoveItem",
    defaultMessage: [{
      "type": 0,
      "value": "Remove item"
    }]
  },
  receiptRequired: {
    id: "expense.ReceiptRequired",
    defaultMessage: [{
      "type": 0,
      "value": "Receipt required"
    }]
  }
});
/** Validates a single expense item, one field at a time (doesn't return multiple errors) */

const validateExpenseItem = (expense, item) => {
  const requiredFields = ['description', 'amount'];

  if (expense.type !== _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].GRANT */ .Z.GRANT) {
    requiredFields.push('incurredAt');
  }

  const errors = (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_10__/* .requireFields */ .ay)(item, requiredFields);

  if (isNaN(item.amount)) {
    errors.amount = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
  }

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(errors)) {
    return errors;
  } // Attachment URL


  if ((0,_lib_attachments__WEBPACK_IMPORTED_MODULE_11__/* .attachmentRequiresFile */ .x)(expense.type)) {
    if (!item.url) {
      errors.url = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
    } else if (!(0,validator__WEBPACK_IMPORTED_MODULE_7__.isURL)(item.url)) {
      errors.url = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN);
    }
  } // Show the expense currency errors on the amount field, since it's displayed next to it


  if (!expense.currency) {
    errors.amount = (0,_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED);
  }

  return errors;
};

const AttachmentLabel = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_21__/* .Span */ .Dr, {
  fontSize: "13px",
  whiteSpace: "nowrap",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {
    id: "Expense.Attachment",
    defaultMessage: [{
      "type": 0,
      "value": "Attachment"
    }]
  }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    color: "#969BA3"
  })]
});
/**
 * Form for a single attachment. Must be used with Formik.
 */


const ExpenseItemForm = ({
  attachment,
  errors,
  onRemove,
  onUploadError,
  currency,
  requireFile,
  requireDate,
  isRichText,
  name,
  isOptional,
  editOnlyDescriptiveInfo,
  hasMultiCurrency,
  availableCurrencies,
  onCurrencyChange,
  isLastItem
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
  const {
    formatMessage
  } = intl;
  const attachmentKey = `attachment-${attachment.id || attachment.url}`;

  const getFieldName = field => `${name}.${field}`;

  const getError = field => (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_10__/* .formatFormErrorMessage */ .$m)(intl, lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(errors, getFieldName(field)));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
    mb: 18,
    "data-cy": "expense-attachment-form",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
      flexWrap: "wrap",
      children: [requireFile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.FastField, {
        name: getFieldName('url'),
        children: ({
          field,
          form,
          meta
        }) => {
          const hasValidUrl = field.value && (0,validator__WEBPACK_IMPORTED_MODULE_7__.isURL)(field.value);
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            mr: [1, 4],
            mt: 2,
            htmlFor: attachmentKey,
            label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(AttachmentLabel, {}),
            "data-cy": "attachment-url-field",
            required: !isOptional,
            error: meta.error?.type !== _lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED && (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_10__/* .formatFormErrorMessage */ .$m)(intl, meta.error),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledDropzone__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, _lib_attachments__WEBPACK_IMPORTED_MODULE_11__/* .attachmentDropzoneParams */ .l), {}, {
              kind: "EXPENSE_ITEM",
              "data-cy": `${field.name}-dropzone`,
              name: field.name,
              isMulti: false,
              error: meta.error?.type === _lib_errors__WEBPACK_IMPORTED_MODULE_9__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED ? formatMessage(msg.receiptRequired) : meta.error,
              onSuccess: ({
                url
              }) => form.setFieldValue(field.name, url),
              mockImageGenerator: () => `https://loremflickr.com/120/120/invoice?lock=${attachmentKey}`,
              fontSize: "13px",
              size: [84, 112],
              value: hasValidUrl && field.value,
              onReject: onUploadError
            }))
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Box */ .xu, {
        flex: "1 1",
        minWidth: 170,
        mt: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          name: getFieldName('description'),
          error: getError('description'),
          htmlFor: `${attachmentKey}-description`,
          label: formatMessage(msg.descriptionLabel),
          labelFontSize: "13px",
          required: !isOptional,
          children: inputProps => isRichText ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, _objectSpread(_objectSpread({
            as: _RichTextEditor__WEBPACK_IMPORTED_MODULE_14__["default"]
          }, inputProps), {}, {
            inputName: inputProps.name,
            withBorders: true,
            version: "simplified"
          })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
            name: inputProps.name,
            children: ({
              field,
              form: {
                setFieldValue
              }
            }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, inputProps), {}, {
              value: lodash_unescape__WEBPACK_IMPORTED_MODULE_0___default()(field.value),
              onChange: e => setFieldValue(inputProps.name, lodash_escape__WEBPACK_IMPORTED_MODULE_3___default()(e.target.value))
            }))
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
          justifyContent: "flex-end",
          flexDirection: ['column', 'row'],
          children: [requireDate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            name: getFieldName('incurredAt'),
            error: getError('incurredAt'),
            htmlFor: `${attachmentKey}-incurredAt`,
            inputType: "date",
            required: !isOptional,
            label: formatMessage(msg.dateLabel),
            labelFontSize: "13px",
            flex: requireFile ? '1 1 44%' : '1 1 50%',
            mt: 3,
            mr: [0, '8px'],
            disabled: editOnlyDescriptiveInfo,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, _objectSpread(_objectSpread({
              maxHeight: 39
            }, inputProps), {}, {
              children: ({
                field
              }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP, _objectSpread(_objectSpread(_objectSpread({}, inputProps), field), {}, {
                value: typeof field.value === 'string' ? field.value.split('T')[0] : field.value
              }))
            }))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            name: getFieldName('amount'),
            error: getError('amount'),
            htmlFor: `${attachmentKey}-amount`,
            label: formatMessage(msg.amountLabel),
            required: !isOptional,
            labelFontSize: "13px",
            inputType: "number",
            flex: "1 1 30%",
            minWidth: 150,
            maxWidth: ['100%', '40%'],
            mt: 3,
            disabled: editOnlyDescriptiveInfo,
            children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {
              name: inputProps.name,
              children: ({
                field,
                form: {
                  setFieldValue
                }
              }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledInputAmount__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, _objectSpread(_objectSpread(_objectSpread({}, field), inputProps), {}, {
                currency: currency,
                currencyDisplay: "CODE",
                min: isOptional ? undefined : 1,
                maxWidth: "100%",
                placeholder: "0.00",
                onChange: (value, e) => setFieldValue(e.target.name, value),
                onCurrencyChange: onCurrencyChange,
                hasCurrencyPicker: hasMultiCurrency || !currency // Makes sure user can re-select currency after a reset
                ,
                availableCurrencies: availableCurrencies
              }))
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_12__/* .Flex */ .kC, {
      alignItems: "center",
      mt: 3,
      children: [onRemove && !editOnlyDescriptiveInfo && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        type: "button",
        buttonStyle: "dangerSecondary",
        buttonSize: "tiny",
        isBorderless: true,
        ml: -10,
        onClick: () => onRemove(attachment),
        children: formatMessage(requireFile ? msg.removeReceipt : msg.removeItem)
      }), !isLastItem && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        flex: "1",
        borderStyle: "dashed",
        borderColor: "black.200"
      })]
    })]
  });
};

ExpenseItemForm.defaultProps = {
  isOptional: false
};
ExpenseItemForm.whyDidYouRender = true;
ExpenseItemForm.__docgenInfo = {
  "description": "Form for a single attachment. Must be used with Formik.",
  "methods": [],
  "displayName": "ExpenseItemForm",
  "props": {
    "isOptional": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "description": "Whether this whole item is optional",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "currency": {
      "description": "The currency of the collective",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "name": {
      "description": "ReactHookForm key",
      "type": {
        "name": "string"
      },
      "required": true
    },
    "onRemove": {
      "description": "Called when clicking on remove",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "errors": {
      "description": "A map of errors for this object",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "requireFile": {
      "description": "Whether a file is required for this attachment type",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "requireDate": {
      "description": "Whether a date is required for this expense type",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hasMultiCurrency": {
      "description": "Whether this item is the first in the list",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isRichText": {
      "description": "True if description is HTML",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onUploadError": {
      "description": "Called when an attachment upload fails",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onCurrencyChange": {
      "description": "For multi-currency expenses: called when the expense's currency changes",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "availableCurrencies": {
      "description": "For multi-currency expenses",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "attachment": {
      "description": "the attachment data",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "url": {
            "name": "string",
            "required": false
          },
          "description": {
            "name": "string",
            "required": false
          },
          "incurredAt": {
            "name": "string",
            "required": false
          },
          "amount": {
            "name": "number",
            "required": false
          }
        }
      },
      "required": true
    },
    "editOnlyDescriptiveInfo": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLastItem": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo(ExpenseItemForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather_Check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55904);
/* harmony import */ var _styled_icons_feather_Check__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Check__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87208);
/* harmony import */ var _styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57847);
/* harmony import */ var _styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91090);
/* harmony import */ var _styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_icons_feather_Flag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42948);
/* harmony import */ var _styled_icons_feather_Flag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Flag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5889);
/* harmony import */ var _styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19878);
/* harmony import */ var _lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60225);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25896);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16159);
/* harmony import */ var _PopupMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66152);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87268);
/* harmony import */ var _ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41016);
/* harmony import */ var _MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77959);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_17__, _MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_18__]);
([_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_17__, _MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["expense", "collective", "onError", "onEdit", "isDisabled", "linkAction"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






















const Action = styled_components__WEBPACK_IMPORTED_MODULE_9___default().button.withConfig({
  displayName: "ExpenseMoreActionsButton__Action",
  componentId: "sc-17zb0qa-0"
})(["", " padding:16px;cursor:pointer;line-height:16px;font-size:14px;font-weight:500;border:none;background:transparent;outline:none;text-align:inherit;text-transform:capitalize;color:", ";:hover{color:", ";}:focus{color:", ";text-decoration:underline;}&[disabled]{color:", ";}> svg{margin-right:14px;}"], styled_system__WEBPACK_IMPORTED_MODULE_10__.margin, props => props.theme.colors.black[900], props => props.theme.colors.black[700], props => props.theme.colors.black[700], props => props.theme.colors.black[600]);
/**
 * Admin buttons for the expense, displayed in a React fragment to let parent
 * in control of the layout.
 */

const ExpenseMoreActionsButton = _ref => {
  let {
    expense,
    collective,
    onError,
    onEdit,
    isDisabled,
    linkAction
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [showMarkAsIncompleteModal, setMarkAsIncompleteModal] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    isCopied,
    copy
  } = (0,_lib_hooks_useClipboard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const permissions = expense?.permissions;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_PopupMenu__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      placement: "bottom-start",
      Button: ({
        onClick
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_StyledButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, _objectSpread(_objectSpread({
        "data-cy": "more-actions",
        onClick: onClick,
        buttonSize: "small",
        minWidth: 140,
        flexGrow: 1
      }, props), {}, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "S8/4ZI",
          defaultMessage: [{
            "type": 0,
            "value": "More actions"
          }]
        }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styled_icons_feather_ChevronDown_ChevronDown__WEBPACK_IMPORTED_MODULE_2__.ChevronDown, {
          size: "20px"
        })]
      })),
      children: ({
        setOpen
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_14__/* .Flex */ .kC, {
        flexDirection: "column",
        children: [permissions?.canMarkAsIncomplete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(Action, {
          onClick: () => {
            setMarkAsIncompleteModal(true);
            setOpen(false);
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styled_icons_feather_Flag__WEBPACK_IMPORTED_MODULE_5__.Flag, {
            size: 14
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "actions.markAsIncomplete",
            defaultMessage: [{
              "type": 0,
              "value": "Mark as Incomplete"
            }]
          })]
        }), permissions?.canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(Action, {
          "data-cy": "edit-expense-btn",
          onClick: onEdit,
          disabled: isDisabled,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styled_icons_feather_Edit__WEBPACK_IMPORTED_MODULE_4__.Edit, {
            size: "16px"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "Edit",
            defaultMessage: [{
              "type": 0,
              "value": "Edit"
            }]
          })]
        }), permissions?.canSeeInvoiceInfo && expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_11__/* ["default"].INVOICE */ .Z.INVOICE && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_ExpenseInvoiceDownloadHelper__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
          expense: expense,
          collective: collective,
          onError: onError,
          children: ({
            isLoading,
            downloadInvoice
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(Action, {
            loading: isLoading,
            onClick: downloadInvoice,
            disabled: isDisabled,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styled_icons_feather_Download__WEBPACK_IMPORTED_MODULE_3__.Download, {
              size: "16px"
            }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "loading",
              defaultMessage: [{
                "type": 0,
                "value": "loading"
              }]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
              id: "Download",
              defaultMessage: [{
                "type": 0,
                "value": "Download"
              }]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(Action, {
          onClick: () => linkAction === 'link' ? router.push(`${(0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_13__/* .getCollectivePageRoute */ .x0)(collective)}/expenses/${expense.legacyId}`) : copy(window.location.href),
          disabled: isDisabled,
          children: [isCopied ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styled_icons_feather_Check__WEBPACK_IMPORTED_MODULE_1__.Check, {
            size: "16px"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_styled_icons_feather_Link__WEBPACK_IMPORTED_MODULE_6__.Link, {
            size: "16px"
          }), isCopied ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "Clipboard.Copied",
            defaultMessage: [{
              "type": 0,
              "value": "Copied!"
            }]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "CopyLink",
            defaultMessage: [{
              "type": 0,
              "value": "Copy link"
            }]
          })]
        })]
      })
    }), showMarkAsIncompleteModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_MarkExpenseAsIncompleteModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      expense: expense,
      onClose: () => setMarkAsIncompleteModal(false)
    })]
  });
};

ExpenseMoreActionsButton.defaultProps = {
  linkAction: 'copy'
};
ExpenseMoreActionsButton.__docgenInfo = {
  "description": "Admin buttons for the expense, displayed in a React fragment to let parent\nin control of the layout.",
  "methods": [],
  "displayName": "ExpenseMoreActionsButton",
  "props": {
    "linkAction": {
      "defaultValue": {
        "value": "'copy'",
        "computed": false
      },
      "description": "",
      "type": {
        "name": "enum",
        "value": [{
          "value": "'link'",
          "computed": false
        }, {
          "value": "'copy'",
          "computed": false
        }]
      },
      "required": false
    },
    "isDisabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": true
          },
          "legacyId": {
            "name": "number",
            "required": true
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(expenseTypes)",
            "required": false
          },
          "permissions": {
            "name": "shape",
            "value": {
              "canEdit": {
                "name": "bool",
                "required": false
              },
              "canSeeInvoiceInfo": {
                "name": "bool",
                "required": false
              },
              "canMarkAsIncomplete": {
                "name": "bool",
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
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "parent": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "onError": {
      "description": "Called with an error if anything wrong happens",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onEdit": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseMoreActionsButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40777);
/* harmony import */ var _RichTextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59139);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87262);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__, _RichTextEditor__WEBPACK_IMPORTED_MODULE_4__, _StyledInputField__WEBPACK_IMPORTED_MODULE_5__]);
([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__, _RichTextEditor__WEBPACK_IMPORTED_MODULE_4__, _StyledInputField__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  notesPlaceholder: {
    id: "ExpenseSummary.addNotesLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Add notes"
    }]
  }
});

const PrivateNoteLabel = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Span */ .Dr, {
    color: "black.700",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "ExpenseSummary.addNotesLabel",
      defaultMessage: [{
        "type": 0,
        "value": "Add notes"
      }]
    }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      color: "#969BA3"
    })]
  });
};

const ExpenseNotesForm = ({
  onChange,
  disabled,
  defaultValue,
  hideLabel
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    htmlFor: "expense-privateMessage-input",
    name: "privateMessage",
    required: false,
    label: hideLabel ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(PrivateNoteLabel, {}),
    labelProps: {
      fontWeight: '500',
      fontSize: '13px'
    },
    children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
      mt: 2,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_RichTextEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
        withBorders: true,
        version: "simplified",
        id: inputProps.id,
        inputName: inputProps.name,
        placeholder: formatMessage(msg.notesPlaceholder),
        minHeight: 72,
        onChange: onChange,
        disabled: disabled,
        defaultValue: defaultValue,
        fontSize: "13px",
        "data-cy": "ExpenseNotesEditor"
      })
    })
  });
};

ExpenseNotesForm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseNotesForm",
  "props": {
    "defaultValue": {
      "description": "",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "disabled": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "hideLabel": {
      "description": "",
      "type": {
        "name": "bool"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseNotesForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10054);
/* harmony import */ var _styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5700);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56508);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40777);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29242);
/* harmony import */ var _LocationAddress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41627);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51082);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27824);
/* harmony import */ var _PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9215);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_14__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_19__, _PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__]);
([_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_14__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_19__, _PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const CreatedByUserLink = ({
  account
}) => {
  return /*#__PURE__*/_jsx(LinkCollective, {
    collective: account,
    children: /*#__PURE__*/_jsx(Span, {
      color: "black.800",
      fontWeight: 500,
      textDecoration: "none",
      children: account ? account.name : /*#__PURE__*/_jsx(FormattedMessage, {
        id: "profile.incognito",
        defaultMessage: [{
          "type": 0,
          "value": "Incognito"
        }]
      })
    })
  });
};

const PrivateInfoColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu).attrs({
  mx: [0, '8px'],
  flexBasis: [0, '200px']
}).withConfig({
  displayName: "ExpensePayeeDetails__PrivateInfoColumn",
  componentId: "sc-1vg1wbt-0"
})(["margin-top:42px;padding-top:16px;border-top:1px solid ", ";", " flex:1 1;min-width:200px;"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_3__.themeGet)('colors.black.300'), ({
  borderless
}) => borderless ? 'border-top: none; padding-top: 0; margin-top: 0;' : '');
const PrivateInfoColumnHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_20__.H4).attrs({
  fontSize: '10px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: 'black.500',
  mb: 2,
  letterSpacing: 0,
  lineHeight: '15px'
}).withConfig({
  displayName: "ExpensePayeeDetails__PrivateInfoColumnHeader",
  componentId: "sc-1vg1wbt-1"
})([""]);

const PayeeTotalPayoutSumTooltip = ({
  stats
}) => {
  const currentYear = new Date().getFullYear().toString();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
    content: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
      id: "uF45hs",
      defaultMessage: [{
        "type": 0,
        "value": "Total expense payouts ("
      }, {
        "type": 1,
        "value": "currentYear"
      }, {
        "type": 0,
        "value": "): Invoices: "
      }, {
        "type": 1,
        "value": "totalPaidInvoices"
      }, {
        "type": 0,
        "value": "; Receipts: "
      }, {
        "type": 1,
        "value": "totalPaidReceipts"
      }, {
        "type": 0,
        "value": "; Grants: "
      }, {
        "type": 1,
        "value": "totalPaidGrants"
      }],
      values: {
        totalPaidInvoices: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          amount: stats.totalPaidInvoices.valueInCents,
          currency: stats.totalPaidInvoices.currency,
          precision: 2,
          amountStyles: null
        }),
        totalPaidReceipts: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          amount: stats.totalPaidReceipts.valueInCents,
          currency: stats.totalPaidReceipts.currency,
          precision: 2,
          amountStyles: null
        }),
        totalPaidGrants: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          amount: stats.totalPaidGrants.valueInCents,
          currency: stats.totalPaidGrants.currency,
          precision: 2,
          amountStyles: null
        }),
        currentYear: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
          children: currentYear
        })
      }
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_2__.InfoCircle, {
      size: 16
    })
  });
};

const ExpensePayeeDetails = ({
  expense,
  host,
  isLoading,
  borderless,
  isLoadingLoggedInUser,
  isDraft,
  collective
}) => {
  const payeeLocation = expense?.payeeLocation || expense?.draft?.payeeLocation;
  const payee = isDraft ? expense?.draft?.payee : expense?.payee;
  const payeeStats = payee && !isDraft ? payee.stats : null; // stats not available for drafts

  const isInvoice = expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].INVOICE */ .Z.INVOICE;
  const isCharge = expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_8__/* ["default"].CHARGE */ .Z.CHARGE;
  const isPaid = expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_7__/* ["default"].PAID */ .Z.PAID;
  const displayedHost = expense?.host ?? host;
  return isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
    height: 150,
    mt: 3
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
    flexDirection: ['column', 'row'],
    alignItems: ['stretch', 'flex-start'],
    flexWrap: ['nowrap', 'wrap', null, 'nowrap'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(PrivateInfoColumn, {
      "data-cy": "expense-summary-payee",
      borderless: borderless,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(PrivateInfoColumnHeader, {
        children: isPaid ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "Expense.PaidTo",
          defaultMessage: [{
            "type": 0,
            "value": "Paid to"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "Expense.PayTo",
          defaultMessage: [{
            "type": 0,
            "value": "Pay to"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        collective: payee,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
          alignItems: "center",
          fontSize: "12px",
          children: [!payee.slug ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
            name: payee.organization?.name || payee.name,
            radius: 24,
            backgroundColor: "blue.100",
            color: "blue.400"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
            collective: payee,
            radius: 24
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_StyledFlex, {
            flexDirection: "column",
            ml: 2,
            mr: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
              color: "black.900",
              fontWeight: "bold",
              truncateOverflow: true,
              children: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .formatAccountName */ .XN)(payee.organization?.name || payee.name, payee.organization?.legalName || payee.legalName)
            }), payee.type !== _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_6__/* .CollectiveType.VENDOR */ .eV.VENDOR && (payee.organization?.slug || payee.slug) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
              color: "black.900",
              fontSize: "11px",
              truncateOverflow: true,
              children: ["@", payee.organization?.slug || payee.slug]
            })]
          }), payeeStats && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(PayeeTotalPayoutSumTooltip, {
            stats: payeeStats
          })]
        })
      }), payeeLocation && isInvoice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        whiteSpace: "pre-wrap",
        fontSize: "11px",
        lineHeight: "16px",
        mt: 2,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_LocationAddress__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          location: payeeLocation,
          isLoading: isLoadingLoggedInUser
        })
      }), payee.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        mt: 2,
        fontSize: "11px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          href: payee.website,
          openInNewTab: true,
          children: payee.website
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(PrivateInfoColumn, {
      mr: 0,
      borderless: borderless,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(PrivateInfoColumnHeader, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "expense.payoutMethod",
          defaultMessage: [{
            "type": 0,
            "value": "payout method"
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        fontSize: "12px",
        color: "black.600",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          mb: 3,
          "data-cy": "expense-summary-payout-method-type",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            type: !expense.payoutMethod?.type && (expense.draft || expense.payee.isInvite) ? expense.draft?.payoutMethod?.type || _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_9__/* .INVITE */ .FZ : isCharge ? _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_9__/* .VIRTUAL_CARD */ .vi : expense.payoutMethod?.type,
            name: expense?.virtualCard?.name && `${expense.virtualCard.name} Card (${expense.virtualCard.last4})`
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx("div", {
          "data-cy": "expense-summary-payout-method-data",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            payoutMethod: expense.draft?.payoutMethod ?? expense.payoutMethod,
            isLoading: isLoadingLoggedInUser
          })
        }), expense.invoiceInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          mt: 3,
          "data-cy": "expense-summary-invoice-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            fontSize: "11px",
            fontWeight: "500",
            mb: 2,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "ExpenseForm.InvoiceInfo",
              defaultMessage: [{
                "type": 0,
                "value": "Additional invoice information"
              }]
            }), "\xA0\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_icons_PrivateInfoIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              color: "#969BA3"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
            fontSize: "11px",
            lineHeight: "16px",
            whiteSpace: "pre-wrap",
            children: expense.invoiceInfo
          })]
        })]
      })]
    }), displayedHost && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(PrivateInfoColumn, {
      "data-cy": "expense-summary-host",
      borderless: borderless,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(PrivateInfoColumnHeader, {
        children: isPaid ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "expense.PaidFromFiscalhost",
          defaultMessage: [{
            "type": 0,
            "value": "Paid from Fiscal Host"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "expense.PayFromFiscalhost",
          defaultMessage: [{
            "type": 0,
            "value": "Pay from Fiscal Host"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        collective: displayedHost,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
            collective: displayedHost,
            radius: 24
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
            ml: 2,
            color: "black.900",
            fontSize: "12px",
            fontWeight: "bold",
            truncateOverflow: true,
            children: collective?.isActive ? (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .formatAccountName */ .XN)(displayedHost.name, displayedHost.legalName) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "Fiscalhost.pending",
              defaultMessage: [{
                "type": 1,
                "value": "host"
              }, {
                "type": 0,
                "value": " (pending)"
              }],
              values: {
                host: (0,_lib_collective_lib__WEBPACK_IMPORTED_MODULE_5__/* .formatAccountName */ .XN)(displayedHost.name, displayedHost.legalName)
              }
            })
          })]
        })
      }), displayedHost.location && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        whiteSpace: "pre-wrap",
        fontSize: "11px",
        mt: 2,
        children: displayedHost.location.address
      }), displayedHost.website && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        mt: 2,
        fontSize: "11px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          href: displayedHost.website,
          openInNewTab: true,
          children: displayedHost.website
        })
      })]
    })]
  });
};

ExpensePayeeDetails.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpensePayeeDetails",
  "props": {
    "isLoading": {
      "description": "Set this to true if the expense is not loaded yet",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isDraft": {
      "description": "Set this to true if this shoud use information from expense.draft property",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoadingLoggedInUser": {
      "description": "Set this to true if the logged in user is currenltly loading",
      "type": {
        "name": "bool"
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
            "required": true
          },
          "name": {
            "name": "string",
            "required": true
          },
          "legalName": {
            "name": "string",
            "required": false
          },
          "slug": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": true
          },
          "website": {
            "name": "string",
            "required": false
          },
          "location": {
            "name": "shape",
            "value": {
              "address": {
                "name": "string",
                "required": false
              },
              "country": {
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
    "expense": {
      "description": "Must be provided if isLoading is false",
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
          "description": {
            "name": "string",
            "required": false
          },
          "longDescription": {
            "name": "string",
            "required": false
          },
          "currency": {
            "name": "string",
            "required": false
          },
          "invoiceInfo": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "status": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(expenseStatus)",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(expenseTypes)",
            "required": false
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "requiredLegalDocuments": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "draft": {
            "name": "shape",
            "value": {
              "payee": {
                "name": "object",
                "required": false
              },
              "payeeLocation": {
                "name": "object",
                "required": false
              },
              "payoutMethod": {
                "name": "object",
                "required": false
              }
            },
            "required": false
          },
          "payee": {
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
              },
              "name": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": false
              },
              "type": {
                "name": "string",
                "required": false
              },
              "isAdmin": {
                "name": "bool",
                "required": false
              },
              "isInvite": {
                "name": "bool",
                "required": false
              },
              "stats": {
                "name": "shape",
                "value": {
                  "totalPaidInvoices": {
                    "name": "shape",
                    "value": {
                      "valueInCents": {
                        "name": "number",
                        "required": false
                      },
                      "currency": {
                        "name": "string",
                        "required": false
                      }
                    },
                    "required": true
                  },
                  "totalPaidReceipts": {
                    "name": "shape",
                    "value": {
                      "valueInCents": {
                        "name": "number",
                        "required": false
                      },
                      "currency": {
                        "name": "string",
                        "required": false
                      }
                    },
                    "required": true
                  },
                  "totalPaidGrants": {
                    "name": "shape",
                    "value": {
                      "valueInCents": {
                        "name": "number",
                        "required": false
                      },
                      "currency": {
                        "name": "string",
                        "required": false
                      }
                    },
                    "required": true
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "payeeLocation": {
            "name": "shape",
            "value": {
              "address": {
                "name": "string",
                "required": false
              },
              "country": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "createdByAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": false
              },
              "type": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
              "name": {
                "name": "string",
                "required": true
              },
              "legalName": {
                "name": "string",
                "required": false
              },
              "slug": {
                "name": "string",
                "required": true
              },
              "type": {
                "name": "string",
                "required": true
              },
              "website": {
                "name": "string",
                "required": false
              },
              "location": {
                "name": "shape",
                "value": {
                  "address": {
                    "name": "string",
                    "required": false
                  },
                  "country": {
                    "name": "string",
                    "required": false
                  }
                },
                "required": false
              }
            },
            "required": false
          },
          "payoutMethod": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "type": {
                "name": "enum",
                "computed": true,
                "value": "Object.values(PayoutMethodType)",
                "required": false
              },
              "data": {
                "name": "object",
                "required": false
              }
            },
            "required": false
          },
          "virtualCard": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "name": {
                "name": "string",
                "required": false
              },
              "last4": {
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
    "borderless": {
      "description": "Disable border and paiding in styled card, usefull for modals",
      "type": {
        "name": "bool"
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
            "required": true
          },
          "isActive": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpensePayeeDetails);

var _StyledFlex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC).withConfig({
  displayName: "ExpensePayeeDetails___StyledFlex",
  componentId: "sc-1vg1wbt-2"
})({
  overflow: 'hidden'
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15078);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12136);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8480);
/* harmony import */ var _lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25896);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69078);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37278);
/* harmony import */ var _StyledButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87268);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97274);
/* harmony import */ var _StyledLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51082);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71792);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90998);
/* harmony import */ var _ToastProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(31330);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToastProvider__WEBPACK_IMPORTED_MODULE_19__]);
_ToastProvider__WEBPACK_IMPORTED_MODULE_19__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






















const deleteExpenseMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  mutation DeleteExpense($expense: ExpenseReferenceInput!) {
    deleteExpense(expense: $expense) {
      id
    }
  }
`;

const ExpenseRecurringEditModal = ({
  onClose,
  expense
}) => {
  const {
    recurringExpense
  } = expense;
  const [deleteExpense, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(deleteExpenseMutation, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_7__/* .API_V2_CONTEXT */ .T
  });
  const {
    addToast
  } = (0,_ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const handleDeletion = async () => {
    try {
      await deleteExpense({
        variables: {
          expense: lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(expense, ['id'])
        }
      });
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.SUCCESS */ ["do"].SUCCESS,
        message: intl.formatMessage({
          id: "KYXMJ6",
          defaultMessage: [{
            "type": 0,
            "value": "Expense deleted"
          }]
        })
      });
      router.push((0,_lib_url_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getCollectivePageRoute */ .x0)(expense.account));
      onClose();
    } catch (e) {
      addToast({
        type: _ToastProvider__WEBPACK_IMPORTED_MODULE_19__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
        message: (0,_lib_errors__WEBPACK_IMPORTED_MODULE_6__/* .i18nGraphqlException */ .t2)(intl, e)
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
    role: "alertdialog",
    width: "432px",
    onClose: onClose,
    padding: "auto",
    px: 4,
    py: "20px",
    trapFocus: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_16__/* .ModalHeader */ .xB, {
      onClose: onClose,
      children: "Recurring Expense Setting"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_16__/* .ModalBody */ .fe, {
      pt: 2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
        flexDirection: 'column',
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
          color: "black.700",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          mt: 0,
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Expense.Recurring.Edit.Description",
            defaultMessage: [{
              "type": 0,
              "value": "Once the frequency and end date are set, you can't edit them. You can always cancel the recurring expense and submit a new one."
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
            color: "black.700",
            fontWeight: "600",
            fontSize: "13px",
            lineHeight: "16px",
            mt: 2,
            mb: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "Frequency",
              defaultMessage: [{
                "type": 0,
                "value": "Frequency"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP, {
            inputId: "recurring-frequency",
            menuPlacement: "auto",
            isSearchable: false,
            value: _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_8__/* .RecurringIntervalOptions.find */ .wx.find(option => option.value === recurringExpense.interval),
            options: _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_8__/* .RecurringIntervalOptions */ .wx,
            disabled: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
            color: "black.700",
            fontWeight: "600",
            fontSize: "13px",
            lineHeight: "16px",
            mt: 2,
            mb: 1,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
              id: "EndDate",
              defaultMessage: [{
                "type": 0,
                "value": "End Date"
              }]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
            type: "date",
            inputId: "recurring-end-date",
            menuPlacement: "auto",
            isSearchable: false,
            height: "38px",
            width: "100%",
            value: recurringExpense.endsAt && (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .toIsoDateStr */ .fM)((0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .getDateFromValue */ .j9)(recurringExpense.endsAt)),
            disabled: true
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledModal__WEBPACK_IMPORTED_MODULE_16__/* .ModalFooter */ .mz, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: ['center'],
        flexWrap: "Wrap",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          mx: 20,
          my: 1,
          autoFocus: true,
          minWidth: 140,
          buttonStyle: "dangerSecondary",
          buttonSize: "small",
          onClick: handleDeletion,
          disabled: loading,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Expense.Recurring.Edit.Cancel",
            defaultMessage: [{
              "type": 0,
              "value": "Cancel Recurring Expense"
            }]
          })
        })
      })
    })]
  });
};

const ExpenseRecurringBanner = ({
  expense
}) => {
  const {
    recurringExpense
  } = expense;
  const [isEditModalOpen, setEditModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      mt: 4,
      type: "warning",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
        color: "black.800",
        fontWeight: "700",
        fontSize: "13px",
        lineHeight: "20px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "Expense.Recurring.EditWarning.Title",
          defaultMessage: [{
            "type": 0,
            "value": "This is a recurring expense."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
        color: "black.800",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "20px",
        mt: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
          id: "Expense.Recurring.EditWarning.Description",
          defaultMessage: [{
            "type": 0,
            "value": "Any changes you make to this expense will apply to future recurrences."
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_18__.P, {
        color: "black.800",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        mt: 1,
        children: ["(", _lib_i18n_expense__WEBPACK_IMPORTED_MODULE_8__/* .RecurringExpenseIntervals */ .Bh[recurringExpense.interval], recurringExpense.endsAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
          children: [",\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Expense.Recurring.EditWarning.Ends",
            defaultMessage: [{
              "type": 0,
              "value": "ends "
            }, {
              "type": 3,
              "value": "endsAt",
              "style": "medium"
            }],
            values: {
              endsAt: (0,_lib_date_utils__WEBPACK_IMPORTED_MODULE_5__/* .getDateFromValue */ .j9)(recurringExpense.endsAt)
            }
          })]
        }), ") \xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledLink__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          color: "black.800",
          onClick: () => setEditModal(true),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
            id: "Expense.Recurring.Edit",
            defaultMessage: [{
              "type": 0,
              "value": "Edit details"
            }]
          })
        })]
      })]
    }), isEditModalOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(ExpenseRecurringEditModal, {
      onClose: () => setEditModal(false),
      expense: expense
    })]
  });
};

ExpenseRecurringBanner.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ExpenseRecurringBanner",
  "props": {
    "expense": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "account": {
            "name": "shape",
            "value": {
              "slug": {
                "name": "string",
                "required": true
              },
              "type": {
                "name": "string",
                "required": true
              }
            },
            "required": false
          },
          "recurringExpense": {
            "name": "custom",
            "raw": "recurringExpensePropType",
            "required": false
          }
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseRecurringBanner);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "w": () => (/* binding */ SummaryHeader)
/* harmony export */ });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41238);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19099);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38083);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19878);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56508);
/* harmony import */ var _lib_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51048);
/* harmony import */ var _AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66337);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11194);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16159);
/* harmony import */ var _HTMLContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74770);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29242);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19156);
/* harmony import */ var _StyledHr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(173);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14540);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89669);
/* harmony import */ var _ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(46115);
/* harmony import */ var _ExpenseMoreActionsButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(44587);
/* harmony import */ var _ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59390);
/* harmony import */ var _ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(66300);
/* harmony import */ var _ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(94833);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_9__, _Tags__WEBPACK_IMPORTED_MODULE_19__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_21__, _ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_22__, _ExpenseMoreActionsButton__WEBPACK_IMPORTED_MODULE_23__, _ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_24__, _ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_25__, _ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_26__]);
([_AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_9__, _Tags__WEBPACK_IMPORTED_MODULE_19__, _UploadedFilePreview__WEBPACK_IMPORTED_MODULE_21__, _ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_22__, _ExpenseMoreActionsButton__WEBPACK_IMPORTED_MODULE_23__, _ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_24__, _ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_25__, _ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const _excluded = ["expense", "collective", "host", "isLoading", "isLoadingLoggedInUser", "isEditing", "borderless", "canEditTags", "suggestedTags", "showProcessButtons", "onClose", "onDelete", "onEdit"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





























const SummaryHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_Text__WEBPACK_IMPORTED_MODULE_20__.H1).withConfig({
  displayName: "ExpenseSummary__SummaryHeader",
  componentId: "sc-1kqwm8i-0"
})(["> a{color:inherit;text-decoration:underline;:hover{color:", ";}}"], (0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.themeGet)('colors.black.600'));

const CreatedByUserLink = ({
  account
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    collective: account,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
      color: "black.800",
      fontWeight: 500,
      textDecoration: "none",
      children: account ? account.name : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
        id: "profile.incognito",
        defaultMessage: [{
          "type": 0,
          "value": "Incognito"
        }]
      })
    })
  });
};

/**
 * Last step of the create expense flow, shows the summary of the expense with
 * the ability to submit it.
 */
const ExpenseSummary = _ref => {
  let {
    expense,
    collective,
    host,
    isLoading,
    isLoadingLoggedInUser,
    isEditing,
    borderless,
    canEditTags,
    suggestedTags,
    showProcessButtons,
    onClose,
    onDelete,
    onEdit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isReceipt = expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].RECEIPT */ .Z.RECEIPT;
  const isCreditCardCharge = expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].CHARGE */ .Z.CHARGE;
  const isGrant = expense?.type === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].GRANT */ .Z.GRANT;
  const existsInAPI = expense && (expense.id || expense.legacyId);
  const createdByAccount = expense?.requestedByAccount || expense?.createdByAccount || {};
  const expenseItems = expense?.items.length > 0 ? expense.items : expense?.draft?.items || [];
  const expenseTaxes = expense?.taxes?.length > 0 ? expense.taxes : expense?.draft?.taxes || [];
  const isMultiCurrency = expense?.amountInAccountCurrency && expense.amountInAccountCurrency.currency !== expense.currency;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_StyledCard__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    p: borderless ? 0 : [16, 24, 32],
    mb: borderless ? [4, 0] : 0,
    borderStyle: borderless ? 'none' : 'solid'
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      flexDirection: ['column-reverse', 'row'],
      alignItems: ['stretch', 'center'],
      justifyContent: "space-between",
      "data-cy": "expense-title",
      mb: 3,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        mr: [0, 2],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.H4, {
          fontWeight: "500",
          "data-cy": "expense-description",
          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            height: 32,
            minWidth: 250
          }) : expense.description
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        mb: [3, 0],
        justifyContent: ['space-between', 'flex-end'],
        alignItems: "center",
        children: expense?.status && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ExpenseStatusTag__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            display: "block",
            status: expense.status,
            letterSpacing: "0.8px",
            fontWeight: "600",
            fontSize: "10px",
            showTaxFormTag: lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(expense.requiredLegalDocuments, 'US_TAX_FORM'),
            showTaxFormMsg: expense.payee.isAdmin
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Tags__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
      expense: expense,
      isLoading: isLoading,
      canEdit: canEditTags,
      suggestedTags: suggestedTags
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      alignItems: "center",
      mt: 3,
      children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        height: 24,
        width: 200
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          collective: createdByAccount,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
            collective: createdByAccount,
            size: 24
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
          ml: 2,
          fontSize: "12px",
          color: "black.600",
          "data-cy": "expense-author",
          children: expense.requestedByAccount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Expense.RequestedByOnDate",
            defaultMessage: [{
              "type": 0,
              "value": "Invited by "
            }, {
              "type": 1,
              "value": "name"
            }, {
              "type": 0,
              "value": " on "
            }, {
              "type": 3,
              "value": "date",
              "style": "long"
            }],
            values: {
              name: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(CreatedByUserLink, {
                account: createdByAccount
              }),
              date: new Date(expense.createdAt)
            }
          }) : expense.createdAt ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Expense.SubmittedByOnDate",
            defaultMessage: [{
              "type": 0,
              "value": "Submitted by "
            }, {
              "type": 1,
              "value": "name"
            }, {
              "type": 0,
              "value": " on "
            }, {
              "type": 3,
              "value": "date",
              "style": "long"
            }],
            values: {
              name: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(CreatedByUserLink, {
                account: createdByAccount
              }),
              date: new Date(expense.createdAt)
            }
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Expense.SubmittedBy",
            defaultMessage: [{
              "type": 0,
              "value": "Submitted by "
            }, {
              "type": 1,
              "value": "name"
            }],
            values: {
              name: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(CreatedByUserLink, {
                account: createdByAccount
              })
            }
          })
        })]
      })
    }), isGrant && expense.longDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        alignItems: "center",
        mt: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
          fontWeight: "bold",
          fontSize: "16px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "Expense.RequestDescription",
            defaultMessage: [{
              "type": 0,
              "value": "Request Description"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          flex: "1 1",
          borderColor: "black.300",
          ml: 2
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
        mt: 4,
        children: expense.longDescription
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      my: 4,
      alignItems: "center",
      children: [isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        height: 20,
        maxWidth: 150
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
        fontWeight: "bold",
        fontSize: "16px",
        children: isReceipt || isCreditCardCharge ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Expense.AttachedReceipts",
          defaultMessage: [{
            "type": 0,
            "value": "Attached receipts"
          }]
        }) : isGrant ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Expense.RequestDetails",
          defaultMessage: [{
            "type": 0,
            "value": "Request Details"
          }]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
          id: "Expense.InvoiceItems",
          defaultMessage: [{
            "type": 0,
            "value": "Invoice items"
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
        flex: "1 1",
        borderColor: "black.300",
        ml: 2
      })]
    }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
      height: 68,
      mb: 3
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
      "data-cy": "expense-summary-items",
      children: expenseItems.map(attachment => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
          my: 24,
          flexWrap: "wrap",
          children: [(isReceipt || attachment.url) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Box */ .xu, {
            mr: 3,
            mb: 3,
            width: ['100%', 'auto'],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_UploadedFilePreview__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
              url: attachment.url,
              isLoading: isLoading || isLoadingLoggedInUser,
              isPrivate: !attachment.url && !isLoading,
              size: [640, 48],
              maxHeight: 48
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
            justifyContent: "space-between",
            alignItems: "baseline",
            flex: "1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
              flexDirection: "column",
              justifyContent: "center",
              flexGrow: "1",
              children: [attachment.description ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_HTMLContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                content: attachment.description,
                fontSize: "12px",
                color: "black.900",
                collapsable: true,
                fontWeight: "500",
                maxCollapsedHeight: 100,
                collapsePadding: 22
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
                color: "black.500",
                fontStyle: "italic",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "NoDescription",
                  defaultMessage: [{
                    "type": 0,
                    "value": "No description provided"
                  }]
                })
              }), !isGrant && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
                mt: 1,
                fontSize: "12px",
                color: "black.500",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                  id: "withColon",
                  defaultMessage: [{
                    "type": 1,
                    "value": "item"
                  }, {
                    "type": 0,
                    "value": ":"
                  }],
                  values: {
                    item: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                      id: "expense.incurredAt",
                      defaultMessage: [{
                        "type": 0,
                        "value": "Date"
                      }]
                    })
                  }
                }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
                  value: attachment.incurredAt,
                  dateStyle: "long",
                  timeZone: "UTC"
                }), ' ']
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__.P, {
              fontSize: 15,
              color: "black.600",
              mt: 2,
              textAlign: "right",
              ml: 3,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                amount: attachment.amount,
                currency: expense.currency,
                amountStyles: _objectSpread(_objectSpread({}, _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_12__/* .DEFAULT_AMOUNT_STYLES */ .a), {}, {
                  fontWeight: '500'
                }),
                precision: 2
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_StyledHr__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          borderStyle: "dotted"
        })]
      }, attachment.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
      flexDirection: "column",
      alignItems: "flex-end",
      mt: 4,
      mb: 2,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        alignItems: "center",
        children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          height: 18,
          width: 150
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ExpenseAmountBreakdown__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
          currency: expense.currency,
          items: expenseItems,
          taxes: expenseTaxes,
          expenseTotalAmount: isEditing ? null : expense.amount
        })
      }), isMultiCurrency && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        alignItems: "center",
        mt: 2,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          fontSize: "12px",
          fontWeight: "500",
          mr: 3,
          whiteSpace: "nowrap",
          color: "black.600",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
            id: "4Wdhe4",
            defaultMessage: [{
              "type": 0,
              "value": "Accounted as ("
            }, {
              "type": 1,
              "value": "currency"
            }, {
              "type": 0,
              "value": "):"
            }],
            values: {
              currency: expense.amountInAccountCurrency.currency
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          color: "black.600",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_AmountWithExchangeRateInfo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            amount: expense.amountInAccountCurrency
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ExpensePayeeDetails__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
      isLoading: isLoading,
      host: host,
      expense: expense,
      collective: collective,
      isDraft: !isEditing && expense?.status === _lib_constants_expense_status__WEBPACK_IMPORTED_MODULE_5__/* ["default"].DRAFT */ .Z.DRAFT
    }), !isEditing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      display: "flex",
      width: 1,
      justifyContent: "space-between",
      flexDirection: ['column-reverse', null, 'row'],
      alignItems: "flex-end",
      borderTop: "1px solid #DCDEE0",
      mt: 4,
      pt: 12,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ExpenseMoreActionsButton__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
        onEdit: onEdit,
        expense: expense,
        mt: ['16px', null, '8px']
      }), Boolean(showProcessButtons && existsInAPI && collective && (0,_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_26__/* .hasProcessButtons */ .HF)(expense?.permissions)) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_13__/* .Flex */ .kC, {
        flexWrap: "wrap",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ProcessExpenseButtons__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .ZP, {
          expense: expense,
          permissions: expense?.permissions,
          collective: collective,
          host: host,
          onDelete: () => {
            onDelete?.(expense);
            onClose?.();
          },
          displayMarkAsIncomplete: true
        })
      })]
    })]
  }));
};

ExpenseSummary.__docgenInfo = {
  "description": "Last step of the create expense flow, shows the summary of the expense with\nthe ability to submit it.",
  "methods": [],
  "displayName": "ExpenseSummary",
  "props": {
    "isLoading": {
      "description": "Set this to true if the expense is not loaded yet",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "isLoadingLoggedInUser": {
      "description": "Set this to true if the logged in user is currenltly loading",
      "type": {
        "name": "bool"
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
            "required": true
          },
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
          "website": {
            "name": "string",
            "required": false
          },
          "location": {
            "name": "shape",
            "value": {
              "address": {
                "name": "string",
                "required": false
              },
              "country": {
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
    "expense": {
      "description": "Must be provided if isLoading is false",
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
          "description": {
            "name": "string",
            "required": true
          },
          "longDescription": {
            "name": "string",
            "required": false
          },
          "amount": {
            "name": "number",
            "required": true
          },
          "currency": {
            "name": "string",
            "required": true
          },
          "invoiceInfo": {
            "name": "string",
            "required": false
          },
          "createdAt": {
            "name": "string",
            "required": false
          },
          "status": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(expenseStatus)",
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(expenseTypes)",
            "required": true
          },
          "tags": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "requiredLegalDocuments": {
            "name": "arrayOf",
            "value": {
              "name": "string"
            },
            "required": false
          },
          "amountInAccountCurrency": {
            "name": "custom",
            "raw": "AmountPropTypeShape",
            "required": false
          },
          "items": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "id": {
                  "name": "string",
                  "required": false
                },
                "incurredAt": {
                  "name": "string",
                  "required": false
                },
                "description": {
                  "name": "string",
                  "required": false
                },
                "amount": {
                  "name": "number",
                  "required": true
                },
                "url": {
                  "name": "string",
                  "required": false
                }
              }
            },
            "required": true
          },
          "taxes": {
            "name": "arrayOf",
            "value": {
              "name": "shape",
              "value": {
                "type": {
                  "name": "string",
                  "required": false
                },
                "rate": {
                  "name": "number",
                  "required": false
                }
              }
            },
            "required": true
          },
          "payee": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
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
              "isAdmin": {
                "name": "bool",
                "required": false
              }
            },
            "required": true
          },
          "payeeLocation": {
            "name": "shape",
            "value": {
              "address": {
                "name": "string",
                "required": false
              },
              "country": {
                "name": "string",
                "required": false
              }
            },
            "required": false
          },
          "createdByAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
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
              }
            },
            "required": false
          },
          "requestedByAccount": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": true
              },
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
              }
            },
            "required": false
          },
          "payoutMethod": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "type": {
                "name": "enum",
                "computed": true,
                "value": "Object.values(PayoutMethodType)",
                "required": false
              },
              "data": {
                "name": "object",
                "required": false
              }
            },
            "required": false
          },
          "draft": {
            "name": "shape",
            "value": {
              "items": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "id": {
                      "name": "string",
                      "required": false
                    },
                    "incurredAt": {
                      "name": "string",
                      "required": false
                    },
                    "description": {
                      "name": "string",
                      "required": false
                    },
                    "amount": {
                      "name": "number",
                      "required": true
                    },
                    "url": {
                      "name": "string",
                      "required": false
                    }
                  }
                },
                "required": false
              },
              "taxes": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "type": {
                      "name": "string",
                      "required": false
                    },
                    "rate": {
                      "name": "number",
                      "required": false
                    }
                  }
                },
                "required": true
              }
            },
            "required": false
          },
          "permissions": {
            "name": "shape",
            "value": {
              "canSeeInvoiceInfo": {
                "name": "bool",
                "required": false
              },
              "canDelete": {
                "name": "bool",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": false
    },
    "canEditTags": {
      "description": "Whether current user can edit the tags",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "suggestedTags": {
      "description": "If canEdit is true, this array is used to display suggested tags",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": false
    },
    "isEditing": {
      "description": "Whether or not this is being displayed for an edited Expense",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "showProcessButtons": {
      "description": "Whether to show the process buttons (Approve, Pay, etc)",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collective": {
      "description": "The account where the expense has been submitted, required to display the process actions",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "borderless": {
      "description": "Disable border and paiding in styled card, usefull for modals",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "onClose": {
      "description": "Passed down from ExpenseModal",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onEdit": {
      "description": "Passed down from pages/expense.js",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "onDelete": {
      "description": "Passed down from either ExpenseModal or pages/expense.js",
      "type": {
        "name": "func"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpenseSummary);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19878);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16159);
/* harmony import */ var _StyledCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19156);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90998);
/* harmony import */ var _public_static_images_grant_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89646);
/* harmony import */ var _public_static_images_grant_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_grant_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_images_grant_animation_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64191);
/* harmony import */ var _public_static_images_grant_animation_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_grant_animation_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_static_images_invoice_animation_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78293);
/* harmony import */ var _public_static_images_invoice_animation_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_invoice_animation_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_static_images_invoice_animation_static_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80011);
/* harmony import */ var _public_static_images_invoice_animation_static_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_invoice_animation_static_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_images_receipt_animation_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24396);
/* harmony import */ var _public_static_images_receipt_animation_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_receipt_animation_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_images_receipt_animation_static_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86142);
/* harmony import */ var _public_static_images_receipt_animation_static_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_receipt_animation_static_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);















const ExpenseTypeLabels = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].INVOICE */ .Z.INVOICE]: {
    id: "Expense.Type.Invoice",
    defaultMessage: [{
      "type": 0,
      "value": "Invoice"
    }]
  },
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECEIPT */ .Z.RECEIPT]: {
    id: "ExpenseForm.ReceiptLabel",
    defaultMessage: [{
      "type": 0,
      "value": "Reimbursement"
    }]
  },
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].GRANT */ .Z.GRANT]: {
    id: "ExpenseForm.Type.Request",
    defaultMessage: [{
      "type": 0,
      "value": "Request Grant"
    }]
  }
});
const ExpenseTypeDescription = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECEIPT */ .Z.RECEIPT]: {
    id: "ExpenseForm.ReceiptDescription",
    defaultMessage: [{
      "type": 0,
      "value": "Get reimbursed for a purchase already made."
    }]
  },
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].INVOICE */ .Z.INVOICE]: {
    id: "ExpenseForm.InvoiceDescription",
    defaultMessage: [{
      "type": 0,
      "value": "Bill for your time or a service."
    }]
  },
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].GRANT */ .Z.GRANT]: {
    id: "ExpenseForm.FundingRequestDescription",
    defaultMessage: [{
      "type": 0,
      "value": "Request a grant for your project or initiative."
    }]
  }
});
const TypeIllustration = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.attrs({
  alt: ''
}).withConfig({
  displayName: "ExpenseTypeRadioSelect__TypeIllustration",
  componentId: "sc-2dfms8-0"
})(["width:48px;height:48px;"]);
const StaticTypeIllustration = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(TypeIllustration).withConfig({
  displayName: "ExpenseTypeRadioSelect__StaticTypeIllustration",
  componentId: "sc-2dfms8-1"
})(["position:absolute;background:white;"]);
const ExpenseTypeOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "ExpenseTypeRadioSelect__ExpenseTypeOptionContainer",
  componentId: "sc-2dfms8-2"
})(["display:flex;align-items:baseline;padding:15px 16px;margin-bottom:0;cursor:pointer;background:white;justify-content:flex-start;flex:1;border-top:1px solid #dcdee0;border-left:1px solid #dcdee0;margin-top:-1px;margin-left:-1px;input[type='radio']{margin-right:4px;}&:hover{", "{opacity:0;}}"], StaticTypeIllustration);
const illustrations = {
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].INVOICE */ .Z.INVOICE]: (_public_static_images_invoice_animation_gif__WEBPACK_IMPORTED_MODULE_9___default()),
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECEIPT */ .Z.RECEIPT]: (_public_static_images_receipt_animation_gif__WEBPACK_IMPORTED_MODULE_11___default()),
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].GRANT */ .Z.GRANT]: (_public_static_images_grant_animation_gif__WEBPACK_IMPORTED_MODULE_8___default())
};
const staticIllustrations = {
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].INVOICE */ .Z.INVOICE]: (_public_static_images_invoice_animation_static_jpg__WEBPACK_IMPORTED_MODULE_10___default()),
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECEIPT */ .Z.RECEIPT]: (_public_static_images_receipt_animation_static_jpg__WEBPACK_IMPORTED_MODULE_12___default()),
  [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].GRANT */ .Z.GRANT]: (_public_static_images_grant_gif__WEBPACK_IMPORTED_MODULE_7___default())
};

const ExpenseTypeOption = ({
  name,
  type,
  isChecked,
  onChange
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  const illustrationSrc = illustrations[type] || (_public_static_images_receipt_animation_gif__WEBPACK_IMPORTED_MODULE_11___default());
  const staticIllustrationSrc = staticIllustrations[type] || (_public_static_images_receipt_animation_static_jpg__WEBPACK_IMPORTED_MODULE_12___default());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(ExpenseTypeOptionContainer, {
    "data-cy": `radio-expense-type-${type}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      alignSelf: ['center', 'baseline', null, 'center'],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("input", {
        type: "radio",
        name: name,
        value: type,
        checked: isChecked,
        onChange: onChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      mx: 2,
      size: 48,
      alignSelf: "center",
      display: ['block', 'none', null, 'block'],
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StaticTypeIllustration, {
        src: staticIllustrationSrc
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(TypeIllustration, {
        src: illustrationSrc
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
        fontSize: "16px",
        fontWeight: "bold",
        mb: 2,
        children: formatMessage(ExpenseTypeLabels[type])
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
          mr: 1,
          size: 48,
          alignSelf: "center",
          display: ['none', 'block', null, 'none'],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(StaticTypeIllustration, {
            src: staticIllustrationSrc
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(TypeIllustration, {
            src: illustrationSrc
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Text__WEBPACK_IMPORTED_MODULE_6__.P, {
          fontSize: "12px",
          color: "black.600",
          fontWeight: "normal",
          children: formatMessage(ExpenseTypeDescription[type])
        })]
      })]
    })]
  });
};

const Fieldset = styled_components__WEBPACK_IMPORTED_MODULE_2___default().fieldset.withConfig({
  displayName: "ExpenseTypeRadioSelect__Fieldset",
  componentId: "sc-2dfms8-3"
})(["border:none;padding:0;margin:0;"]);
const BASE_EXPENSE_TYPES = [_lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].INVOICE */ .Z.INVOICE, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECEIPT */ .Z.RECEIPT, _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].GRANT */ .Z.GRANT];
/**
 * To select expense's type.
 *
 * Using `StyledRadioList` should have been the default choice, but unfortunately
 * IE & Chrome don't support using `flex` on fieldset yet, so we have to create a custom
 * layout. See https://github.com/w3c/csswg-drafts/issues/321
 */

const ExpenseTypeRadioSelect = ({
  name,
  onChange,
  value,
  supportedExpenseTypes
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_StyledCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Fieldset, {
      onChange: onChange,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
        flexDirection: ['column', 'row'],
        overflow: "hidden",
        children: BASE_EXPENSE_TYPES.filter(type => supportedExpenseTypes.includes(type)).map(type => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ExpenseTypeOption, {
          name: name,
          type: type,
          isChecked: value === type,
          onChange: onChange
        }, type))
      })
    })
  });
};

ExpenseTypeRadioSelect.defaultProps = {
  name: 'expense-type'
};
ExpenseTypeRadioSelect.__docgenInfo = {
  "description": "To select expense's type.\n\nUsing `StyledRadioList` should have been the default choice, but unfortunately\nIE & Chrome don't support using `flex` on fieldset yet, so we have to create a custom\nlayout. See https://github.com/w3c/csswg-drafts/issues/321",
  "methods": [],
  "displayName": "ExpenseTypeRadioSelect",
  "props": {
    "name": {
      "defaultValue": {
        "value": "'expense-type'",
        "computed": false
      },
      "description": "The name of the input in the DOM",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "value": {
      "description": "Default value",
      "type": {
        "name": "enum",
        "computed": true,
        "value": "Object.values(expenseTypes)"
      },
      "required": false
    },
    "onChange": {
      "description": "A function called with the new value when it changes",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "supportedExpenseTypes": {
      "description": "Supported expense types",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "string"
        }
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ExpenseTypeRadioSelect));

/***/ }),

/***/ 74448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19377);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69078);
/* harmony import */ var _FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27596);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16159);
/* harmony import */ var _LinkCollective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97619);
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29242);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);









/**
 * Displays info about the collective (balance and host on mobile) for the create
 * expense page.
 */




const MobileCollectiveInfoStickyBar = ({
  isLoading,
  collective,
  host
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    borderLeft: "8px solid",
    borderColor: "green.600",
    px: 3,
    py: "13px",
    width: "100%",
    display: ['block', 'none'],
    position: "sticky",
    bg: "white.full",
    borderTop: "1px solid #EDEDED",
    bottom: 0,
    zIndex: 9,
    height: 72,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .kC, {
      justifyContent: "space-between",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        minWidth: 135,
        flex: "1 1 45%",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
          fontSize: "12px",
          fontWeight: "bold",
          color: "black.900",
          mb: 1,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "CollectiveBalance",
            defaultMessage: [{
              "type": 5,
              "value": "type",
              "options": {
                "COLLECTIVE": {
                  "value": [{
                    "type": 0,
                    "value": "Collective balance"
                  }]
                },
                "EVENT": {
                  "value": [{
                    "type": 0,
                    "value": "Event balance"
                  }]
                },
                "ORGANIZATION": {
                  "value": [{
                    "type": 0,
                    "value": "Organization balance"
                  }]
                },
                "FUND": {
                  "value": [{
                    "type": 0,
                    "value": "Fund balance"
                  }]
                },
                "PROJECT": {
                  "value": [{
                    "type": 0,
                    "value": "Project balance"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "Account balance"
                  }]
                }
              }
            }],
            values: {
              type: collective?.type || '' // collective can be null when it's loading

            }
          })
        }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          height: 16,
          width: 75
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Span */ .Dr, {
          color: "black.500",
          fontSize: "16px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_FormattedMoneyAmount__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            currency: collective.stats.balanceWithBlockedFunds.currency,
            amount: collective.stats.balanceWithBlockedFunds.valueInCents,
            precision: _lib_constants_currency_precision__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyPrecision.DEFAULT */ .E.DEFAULT
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        flex: "0 0 5%"
      }), host && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .xu, {
        flex: "1 1 45%",
        maxWidth: "45%",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
          color: "black.600",
          fontSize: "11px",
          lineHeight: "17px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
            id: "withColon",
            defaultMessage: [{
              "type": 1,
              "value": "item"
            }, {
              "type": 0,
              "value": ":"
            }],
            values: {
              item: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
                id: "Fiscalhost",
                defaultMessage: [{
                  "type": 0,
                  "value": "Fiscal Host"
                }]
              })
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_LinkCollective__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          collective: host,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Text__WEBPACK_IMPORTED_MODULE_8__.P, {
            color: "black.600",
            fontSize: "11px",
            fontWeight: "bold",
            truncateOverflow: true,
            maxWidth: 135,
            children: collective?.isActive ? host.name : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
              id: "Fiscalhost.pending",
              defaultMessage: [{
                "type": 1,
                "value": "host"
              }, {
                "type": 0,
                "value": " (pending)"
              }],
              values: {
                host: host.name
              }
            })
          })
        })]
      })]
    })
  });
};

MobileCollectiveInfoStickyBar.__docgenInfo = {
  "description": "Displays info about the collective (balance and host on mobile) for the create\nexpense page.",
  "methods": [],
  "displayName": "MobileCollectiveInfoStickyBar",
  "props": {
    "isLoading": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "collective": {
      "description": "Must be provided if `isLoading` is false",
      "type": {
        "name": "shape",
        "value": {
          "currency": {
            "name": "string",
            "required": true
          },
          "type": {
            "name": "string",
            "required": false
          },
          "isActive": {
            "name": "bool",
            "required": false
          },
          "stats": {
            "name": "shape",
            "value": {
              "balanceWithBlockedFunds": {
                "name": "shape",
                "value": {
                  "valueInCents": {
                    "name": "number",
                    "required": true
                  },
                  "currency": {
                    "name": "string",
                    "required": true
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
    "host": {
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
          }
        }
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(MobileCollectiveInfoStickyBar));

/***/ }),

/***/ 38884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export msg */
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51546);
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57153);
/* harmony import */ var _styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17632);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32651);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16159);
/* harmony import */ var _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88705);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37278);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87262);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66943);
/* harmony import */ var _StyledSpinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40486);
/* harmony import */ var _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88609);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90998);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_15__, _StyledTooltip__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const _excluded = ["field"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const formatStringOptions = strings => strings.map(s => ({
  label: s,
  value: s
}));

const formatTransferWiseSelectOptions = values => values.map(({
  key,
  name
}) => ({
  label: name,
  value: key
}));

const TW_API_COLLECTIVE_SLUG = "opencollective-host";
const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({
  currency: {
    id: "Currency",
    defaultMessage: [{
      "type": 0,
      "value": "Currency"
    }]
  }
});
const requiredFieldsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query PayoutBankInformationRequiredFields($slug: String, $currency: String!, $accountDetails: JSON) {
    host(slug: $slug) {
      id
      transferwise {
        id
        requiredFields(currency: $currency, accountDetails: $accountDetails) {
          type
          title
          fields {
            name
            group {
              key
              name
              type
              required
              example
              validationRegexp
              refreshRequirementsOnChange
              valuesAllowed {
                key
                name
              }
            }
          }
        }
      }
    }
  }
`;
const CUSTOM_METHOD_LABEL_BY_CURRENCY = {
  // Here I'm using the same wording Wise uses on their documentation
  USD: {
    requiredFields: {
      // No need to internationalize this, since the form is generated by Wise API and it is always in English
      label: "Where's your bank account located?",
      options: {
        aba: 'In the US',
        // eslint-disable-next-line camelcase
        swift_code: 'Outside the US'
      }
    }
  }
};

const Input = ({
  input,
  getFieldName,
  disabled,
  currency,
  loading,
  refetch,
  formik,
  host
}) => {
  const isAccountHolderName = input.key === 'accountHolderName';
  const fieldName = isAccountHolderName ? getFieldName(`data.${input.key}`) : getFieldName(`data.details.${input.key}`);
  const required = disabled ? false : input.required;
  let validate = required ? value => value ? undefined : `${input.name} is required` : undefined;

  if (input.type === 'text') {
    if (input.validationRegexp) {
      validate = value => {
        const matches = new RegExp(input.validationRegexp).test(value); // TODO(intl): This should be internationalized, ideally with `formatFormErrorMessage`

        if (!value && required) {
          return `${input.name} is required`;
        } else if (!matches && value) {
          return input.validationError || `Invalid ${input.name}`;
        }
      };
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
        name: fieldName,
        validate: validate,
        children: ({
          field,
          meta
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          label: input.name,
          labelFontSize: "13px",
          required: required,
          hideOptionalLabel: disabled,
          error: (meta.touched || disabled) && meta.error,
          hint: input.hint,
          children: () => {
            const inputValue = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, field.name);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
                placeholder: input.example,
                error: (meta.touched || disabled) && meta.error,
                disabled: disabled,
                width: "100%",
                value: inputValue || ''
              })), isAccountHolderName && inputValue && inputValue.match(/^[^\s]{1}\b/) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                mt: 2,
                fontSize: "12px",
                type: "warning",
                withIcon: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
                  id: "Warning.AccountHolderNameNotValid",
                  defaultMessage: [{
                    "type": 0,
                    "value": "Full names for personal recipients. They must include more than one name, and both first and last name must have more than one character."
                  }]
                })
              })]
            });
          }
        })
      })
    }, input.key);
  } else if (input.type === 'date') {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
        name: fieldName,
        validate: validate,
        children: ({
          field,
          meta
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          label: input.name,
          labelFontSize: "13px",
          required: required,
          hideOptionalLabel: disabled,
          error: (meta.touched || disabled) && meta.error,
          hint: input.hint,
          children: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, _objectSpread(_objectSpread({}, field), {}, {
            type: "date",
            error: (meta.touched || disabled) && meta.error,
            disabled: disabled,
            width: "100%",
            value: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, field.name) || ''
          }))
        })
      })
    }, input.key);
  } else if (input.type === 'radio' || input.type === 'select') {
    const options = formatTransferWiseSelectOptions(input.valuesAllowed || []);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
      mt: 2,
      flex: "1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
        name: fieldName,
        validate: validate,
        children: ({
          field,
          meta
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          label: input.name,
          labelFontSize: "13px",
          required: required,
          hideOptionalLabel: disabled,
          error: (meta.touched || disabled) && meta.error,
          children: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
            inputId: field.name,
            disabled: disabled,
            error: (meta.touched || disabled) && meta.error,
            isLoading: loading && !options.length,
            name: field.name,
            options: options,
            value: options.find(c => c.value === lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, field.name)) || null,
            onChange: ({
              value
            }) => {
              formik.setFieldValue(field.name, value);

              if (input.refreshRequirementsOnChange) {
                refetch({
                  slug: host ? host.slug : TW_API_COLLECTIVE_SLUG,
                  currency,
                  accountDetails: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({}, formik.values), field.name, value), getFieldName('data'))
                });
              }
            }
          })
        })
      })
    });
  } else {
    return null;
  }
};

const FieldGroup = _ref => {
  let {
    field
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
    flex: "1",
    children: field.group.map(input => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(Input, _objectSpread({
      input: input
    }, props), input.key))
  });
};

const DetailsForm = ({
  disabled,
  getFieldName,
  formik,
  host,
  currency
}) => {
  const {
    loading,
    error,
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(requiredFieldsQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T,
    // A) If `fixedCurrency` was passed in PayoutBankInformationForm (2) (3)
    //    then `host` is not set and we'll use the Platform Wise account
    // B) If `host` is set, we expect to be in 2 cases:
    //      * The Collective Host has Wise configured and we should be able to fetch `requiredFields` from it
    //      * The Collective Host doesn't have Wise configured and `host` is already switched to the Platform account
    variables: {
      slug: host ? host.slug : TW_API_COLLECTIVE_SLUG,
      currency
    }
  }); // Make sure we load the form data on initial load. Otherwise certain form fields such
  // as the state field in the "Recipient's Address" section might not be visible on first load
  // and only be visible after the user reselect the country.

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    refetch({
      accountDetails: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, getFieldName('data'))
    });
  }, []);

  if (loading && !data) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {});
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "error",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "PayoutBankInformationForm.Error.RequiredFields",
        defaultMessage: [{
          "type": 0,
          "value": "There was an error fetching the required fields"
        }]
      }), error.message && `: ${error.message}`]
    });
  } // If at this point we don't have `requiredFields` available,
  // we can display an error message, Wise is likely not configured on the platform


  if (!data?.host?.transferwise?.requiredFields) {
    if (false) {} else {
      // eslint-disable-next-line no-console
      console.warn('Could not fetch requiredFields through Wise.');
      return;
    }
  }

  const transactionTypeValues = data.host.transferwise.requiredFields.map(rf => ({
    label: CUSTOM_METHOD_LABEL_BY_CURRENCY?.[currency]?.requiredFields?.options?.[rf.type] || rf.title,
    value: rf.type
  })); // Some currencies offer different methods for the transaction
  // e.g., USD allows ABA and SWIFT transactions.

  const availableMethods = data.host.transferwise.requiredFields.find(method => method.type === lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, getFieldName(`data.type`)));

  const [addressFields, otherFields] = lodash_partition__WEBPACK_IMPORTED_MODULE_1___default()(availableMethods?.fields, field => field.group.every(g => g.key.includes('address.')));

  const transactionMethodFieldName = getFieldName('data.type');

  const transactionMethod = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, transactionMethodFieldName);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Flex */ .kC, {
    flexDirection: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
      name: getFieldName('data.type'),
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: field.name,
        label: CUSTOM_METHOD_LABEL_BY_CURRENCY?.[currency]?.requiredFields?.label || /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
          id: "PayoutBankInformationForm.TransactionMethod",
          defaultMessage: [{
            "type": 0,
            "value": "Transaction Method"
          }]
        }),
        labelFontSize: "13px",
        mt: 3,
        mb: 2,
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
          inputId: id,
          name: field.name,
          onChange: ({
            value
          }) => {
            const {
              type,
              currency
            } = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, getFieldName(`data`));

            formik.setFieldValue(getFieldName('data'), {
              type,
              currency
            });
            formik.setFieldValue(field.name, value);
          },
          options: transactionTypeValues,
          value: transactionTypeValues.find(method => method.value === availableMethods?.type) || null,
          disabled: disabled
        })
      })
    }), transactionMethod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        mt: 3,
        flex: "1",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__.P, {
          fontSize: "14px",
          fontWeight: "bold",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayoutBankInformationForm.AccountInfo",
            defaultMessage: [{
              "type": 0,
              "value": "Account Information"
            }]
          })
        })
      }), otherFields.map(field => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(FieldGroup, {
        currency: currency,
        disabled: disabled,
        field: field,
        formik: formik,
        getFieldName: getFieldName,
        host: host,
        loading: loading,
        refetch: refetch
      }, lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(field.name)))]
    }), Boolean(addressFields.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_11__/* .Box */ .xu, {
        mt: 3,
        flex: "1",
        fontSize: "14px",
        fontWeight: "bold",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_Text__WEBPACK_IMPORTED_MODULE_19__/* .Span */ .Dr, {
          mr: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayoutBankInformationForm.RecipientAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Recipient's Address"
            }]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledTooltip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
            id: "PayoutBankInformationForm.HolderAddress",
            defaultMessage: [{
              "type": 0,
              "value": "Bank account holder address (not the bank address)"
            }]
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_styled_icons_feather_Info__WEBPACK_IMPORTED_MODULE_6__.Info, {
            size: 16
          })
        })]
      }), addressFields.map(field => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(FieldGroup, {
        currency: currency,
        disabled: disabled,
        field: field,
        formik: formik,
        getFieldName: getFieldName,
        host: host,
        loading: loading,
        refetch: refetch
      }, lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(field.name)))]
    })]
  });
};

const availableCurrenciesQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query PayoutBankInformationAvailableCurrencies($slug: String, $ignoreBlockedCurrencies: Boolean) {
    host(slug: $slug) {
      id
      slug
      currency
      transferwise {
        id
        availableCurrencies(ignoreBlockedCurrencies: $ignoreBlockedCurrencies)
      }
    }
  }
`;
/**
 * Form for payout bank information. Must be used with Formik.
 *
 * The main goal is to use this component in the Expense Flow (1) but it's also reused in:
 *
 * - Collective onboarding, AcceptContributionsOurselvesOrOrg.js (2)
 * - In Collective/Host settings -> Receiving Money, BankTransfer.js (3)
 *
 * In (1) we pass the host where the expense is submitted and fixedCurrency is never set.
 *   * If Wise is configured on that host, `availableCurrencies` should normally be available.
 *   * If it's not, we'll have to fetch `availableCurrencies` from the Platform Wise account
 *
 * In (2) and (3), we never pass an `host` and `fixedCurrency` is sometimes set.
 *   * If `fixedCurrency` is set, we don't need `availableCurrencies`
 *   * If `fixedCurrency` is not set, we'll fetch `availableCurrencies` from the Platform Wise account
 */

const PayoutBankInformationForm = ({
  isNew,
  getFieldName,
  host,
  fixedCurrency,
  ignoreBlockedCurrencies,
  optional
}) => {
  const {
    data,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(availableCurrenciesQuery, {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_10__/* .API_V2_CONTEXT */ .T,
    variables: {
      slug: TW_API_COLLECTIVE_SLUG,
      ignoreBlockedCurrencies
    },
    // Skip fetching/loading if the currency is fixed (2) (3)
    // Or if availableCurrencies is already available. Expense Flow + Host with Wise configured (1)
    skip: Boolean(fixedCurrency || host?.transferwise?.availableCurrencies)
  });
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormikContext)();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)(); // Display spinner if loading

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSpinner__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {});
  } // Fiscal Host with Wise configured (1) OR Platform account as fallback (1) or default (2) (3)
  // NOTE: If `fixedCurrency is set`, `wiseHost` will be null (at least today)


  const wiseHost = data?.host || host;
  const availableCurrencies = wiseHost?.transferwise?.availableCurrencies;
  let currencies;

  if (fixedCurrency) {
    currencies = formatStringOptions([fixedCurrency]);
  } else if (availableCurrencies) {
    currencies = formatStringOptions(availableCurrencies.map(c => c.code));
  } else {
    // If at this point we don't have `fixedCurrency` or `availableCurrencies`,
    // we can display an error message, Wise is likely not configured on the platform
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "warning",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "v2j/7L",
        defaultMessage: [{
          "type": 0,
          "value": "An error ocurred while preparing the form for bank accounts. Please contact "
        }, {
          "type": 8,
          "value": "I18nSupportLink",
          "children": [{
            "type": 0,
            "value": "support"
          }]
        }],
        values: {
          I18nSupportLink: _I18nFormatters__WEBPACK_IMPORTED_MODULE_12__/* .I18nSupportLink */ .wl
        }
      })
    });
  }

  if (optional) {
    currencies.unshift({
      label: 'No selection',
      value: null
    });
  }

  const currencyFieldName = getFieldName('data.currency');

  const selectedCurrency = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formik.values, currencyFieldName);

  const validateCurrencyMinimumAmount = () => {
    // Skip if currency is fixed (2) (3)
    // or if `availableCurrencies` is not set (but we're not supposed to be there anyway)
    if (fixedCurrency || !availableCurrencies) {
      return;
    } // Only validate minimum amount if the form has items


    if (formik?.values?.items?.length > 0) {
      const invoiceTotalAmount = formik.values.items.reduce((amount, attachment) => amount + (attachment.amount || 0), 0);
      const minAmountForSelectedCurrency = availableCurrencies.find(c => c.code === selectedCurrency)?.minInvoiceAmount * 100;

      if (invoiceTotalAmount < minAmountForSelectedCurrency) {
        return formatMessage({
          id: "AzGwgz",
          defaultMessage: [{
            "type": 0,
            "value": "The minimum amount for transferring to "
          }, {
            "type": 1,
            "value": "selectedCurrency"
          }, {
            "type": 0,
            "value": " is "
          }, {
            "type": 1,
            "value": "minAmountForSelectedCurrency"
          }]
        }, {
          selectedCurrency,
          minAmountForSelectedCurrency: (0,_lib_currency_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatCurrency */ .xG)(minAmountForSelectedCurrency, wiseHost.currency)
        });
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
      name: currencyFieldName,
      validate: validateCurrencyMinimumAmount,
      children: ({
        field
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        name: field.name,
        label: formatMessage(msg.currency),
        labelFontSize: "13px",
        mt: 3,
        mb: 2,
        children: ({
          id
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
          inputId: id,
          name: field.name,
          onChange: ({
            value
          }) => {
            formik.setFieldValue(getFieldName('data'), {});
            formik.setFieldValue(field.name, value);
          },
          options: currencies,
          value: currencies.find(c => c.label === selectedCurrency) || null,
          disabled: Boolean(fixedCurrency && !optional) || !isNew
        })
      })
    }), selectedCurrency && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(DetailsForm, {
      currency: selectedCurrency,
      disabled: !isNew,
      formik: formik,
      getFieldName: getFieldName,
      host: wiseHost
    }), !selectedCurrency && !currencies?.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      fontSize: "12px",
      type: "error",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedMessage, {
        id: "PayoutBankInformationForm.Error.AvailableCurrencies",
        defaultMessage: [{
          "type": 0,
          "value": "There was an error loading available currencies for this host"
        }]
      }), "."]
    })]
  });
};

PayoutBankInformationForm.__docgenInfo = {
  "description": "Form for payout bank information. Must be used with Formik.\n\nThe main goal is to use this component in the Expense Flow (1) but it's also reused in:\n\n- Collective onboarding, AcceptContributionsOurselvesOrOrg.js (2)\n- In Collective/Host settings -> Receiving Money, BankTransfer.js (3)\n\nIn (1) we pass the host where the expense is submitted and fixedCurrency is never set.\n  * If Wise is configured on that host, `availableCurrencies` should normally be available.\n  * If it's not, we'll have to fetch `availableCurrencies` from the Platform Wise account\n\nIn (2) and (3), we never pass an `host` and `fixedCurrency` is sometimes set.\n  * If `fixedCurrency` is set, we don't need `availableCurrencies`\n  * If `fixedCurrency` is not set, we'll fetch `availableCurrencies` from the Platform Wise account",
  "methods": [],
  "displayName": "PayoutBankInformationForm",
  "props": {
    "host": {
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
            "required": false
          },
          "transferwise": {
            "name": "shape",
            "value": {
              "availableCurrencies": {
                "name": "arrayOf",
                "value": {
                  "name": "object"
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
    "isNew": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "optional": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "ignoreBlockedCurrencies": {
      "description": "",
      "type": {
        "name": "bool"
      },
      "required": false
    },
    "getFieldName": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "fixedCurrency": {
      "description": "Enforces a fixedCurrency",
      "type": {
        "name": "string"
      },
      "required": false
    },
    "errors": {
      "description": "A map of errors for this object",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "formik": {
      "description": "",
      "type": {
        "name": "object"
      },
      "required": false
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayoutBankInformationForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ validatePayoutMethod),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71564);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56508);
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12136);
/* harmony import */ var _lib_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40986);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16159);
/* harmony import */ var _StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41433);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97274);
/* harmony import */ var _StyledInputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87262);
/* harmony import */ var _StyledTextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93150);
/* harmony import */ var _PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38884);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledInputField__WEBPACK_IMPORTED_MODULE_12__, _PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_14__]);
([_StyledInputField__WEBPACK_IMPORTED_MODULE_12__, _PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.defineMessages)({
  paypalEmail: {
    id: "Paypal.Email",
    defaultMessage: [{
      "type": 0,
      "value": "PayPal email"
    }]
  },
  content: {
    id: "editCollective.menu.info",
    defaultMessage: [{
      "type": 0,
      "value": "Info"
    }]
  },
  savePayout: {
    id: "ExpenseForm.SavePayout",
    defaultMessage: [{
      "type": 0,
      "value": "Save this info for future payouts"
    }]
  }
});
/** Use this function to validate the payout method */

const validatePayoutMethod = payoutMethod => {
  const errors = {};

  if (!payoutMethod || !payoutMethod.type) {
    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, 'type', (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));
  } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL) {
    const email = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(payoutMethod, 'data.email');

    if (!email) {
      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, 'data.email', (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));
    } else if (!(0,validator__WEBPACK_IMPORTED_MODULE_5__.isEmail)(email)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, 'data.email', (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_PATTERN */ .pn.FORM_FIELD_PATTERN));
    }
  } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT) {
    if (!payoutMethod.data.currency) {
      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, 'data.currency', (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));
    }

    if (!payoutMethod.data.accountHolderName) {
      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, 'data.accountHolderName', (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_REQUIRED */ .pn.FORM_FIELD_REQUIRED));
    }
  } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.OTHER */ .Nk.OTHER) {
    const content = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(payoutMethod, 'data.content');

    if (!content) {
      lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, 'data.content', (0,_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .createError */ .Tr)(_lib_errors__WEBPACK_IMPORTED_MODULE_7__/* .ERROR.FORM_FIELD_MIN_LENGTH */ .pn.FORM_FIELD_MIN_LENGTH));
    }
  }

  return errors;
};
/**
 * A form to fill infos for a new payout method or to edit an existing one.
 * This component is **fully controlled**, you need to call `validatePayoutMethod`
 * to proceed with the validation and pass the result with the `errors` prop.
 */

const PayoutMethodForm = ({
  payoutMethod,
  fieldsPrefix,
  host,
  required
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
  const {
    formatMessage
  } = intl;
  const isNew = !payoutMethod.id;
  const fixedPrefix = fieldsPrefix ? `${fieldsPrefix}.` : '';

  const getFieldName = field => `${fixedPrefix}${field}`;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
    children: [payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      name: getFieldName('data.email'),
      children: ({
        field,
        meta
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        name: field.name,
        type: "email",
        error: (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, meta.error),
        label: formatMessage(msg.paypalEmail),
        labelFontSize: "13px",
        disabled: !isNew,
        required: required !== false,
        children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
          placeholder: "e.g., yourname@yourhost.com"
        }, inputProps), field))
      })
    }), payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.OTHER */ .Nk.OTHER && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      name: getFieldName('data.content'),
      children: ({
        field,
        meta
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledInputField__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        name: field.name,
        error: (0,_lib_form_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatFormErrorMessage */ .$m)(intl, meta.error),
        label: formatMessage(msg.content),
        labelFontSize: "13px",
        disabled: !isNew,
        "data-cy": "payout-other-info",
        required: required !== false,
        children: inputProps => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledTextarea__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, _objectSpread(_objectSpread({
          minHeight: 100
        }, inputProps), field))
      })
    }), payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_6__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_PayoutBankInformationForm__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
      isNew: isNew,
      getFieldName: getFieldName,
      host: host,
      optional: required === false
    }), isNew && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .xu, {
      mt: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
        name: getFieldName('isSaved'),
        children: ({
          field
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_StyledCheckbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, _objectSpread({
          label: formatMessage(msg.savePayout),
          fontSize: "13px",
          checked: field.value
        }, field))
      })
    })]
  });
};

PayoutMethodForm.__docgenInfo = {
  "description": "A form to fill infos for a new payout method or to edit an existing one.\nThis component is **fully controlled**, you need to call `validatePayoutMethod`\nto proceed with the validation and pass the result with the `errors` prop.",
  "methods": [],
  "displayName": "PayoutMethodForm",
  "props": {
    "host": {
      "description": "",
      "type": {
        "name": "shape",
        "value": {
          "slug": {
            "name": "string",
            "required": true
          }
        }
      },
      "required": false
    },
    "payoutMethod": {
      "description": "Set this to nil to create a new one",
      "type": {
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
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(PayoutMethodType)",
            "required": true
          },
          "data": {
            "name": "object",
            "required": false
          }
        }
      },
      "required": true
    },
    "fieldsPrefix": {
      "description": "Base name of the field in the form",
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
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(PayoutMethodForm));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51858);
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95159);
/* harmony import */ var _apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97881);
/* harmony import */ var _styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17809);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(memoize_one__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82525);
/* harmony import */ var _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56508);
/* harmony import */ var _lib_constants_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3350);
/* harmony import */ var _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32651);
/* harmony import */ var _lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17133);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47988);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16159);
/* harmony import */ var _MessageBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37278);
/* harmony import */ var _StyledRoundButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90012);
/* harmony import */ var _StyledSelect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66943);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90998);
/* harmony import */ var _PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27824);
/* harmony import */ var _PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9215);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__]);
_PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const _excluded = ["payoutMethods", "defaultPayoutMethod", "payoutMethod", "payee", "collective"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const newPayoutMethodMsg = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  [_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL]: {
    id: "PayoutMethod.New.PayPal",
    defaultMessage: [{
      "type": 0,
      "value": "New PayPal account"
    }]
  },
  [_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT]: {
    id: "PayoutMethod.New.BankAccount",
    defaultMessage: [{
      "type": 0,
      "value": "New bank account"
    }]
  },
  [_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER]: {
    id: "PayoutMethod.New.Other",
    defaultMessage: [{
      "type": 0,
      "value": "New custom payout method"
    }]
  },
  _default: {
    id: "PayoutMethod.New.default",
    defaultMessage: [{
      "type": 0,
      "value": "New "
    }, {
      "type": 1,
      "value": "pmType"
    }]
  }
});
const MAX_PAYOUT_OPTION_DATA_LENGTH = 20;
const payoutMethodLabels = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.defineMessages)({
  accountBalance: {
    id: "PayoutMethod.AccountBalance",
    defaultMessage: [{
      "type": 0,
      "value": "Open Collective (Account Balance)"
    }]
  }
});
/**
 * An overset of `StyledSelect` specialized for payout methods. Accepts all the props
 * from `StyledSelect`.
 */

class PayoutMethodSelect extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      removingPayoutMethod: null
    });

    _defineProperty(this, "getPayoutMethodLabel", payoutMethod => {
      if (payoutMethod.id) {
        if (payoutMethod.name) {
          return payoutMethod.name;
        } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE) {
          return this.props.intl.formatMessage(payoutMethodLabels.accountBalance);
        } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL) {
          return `PayPal - ${lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(payoutMethod.data, 'email')}`;
        } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT) {
          if (payoutMethod.data.details?.IBAN) {
            return `IBAN ${payoutMethod.data.details.IBAN}`;
          } else if (payoutMethod.data.details?.accountNumber) {
            return `A/N ${payoutMethod.data.details.accountNumber}`;
          } else if (payoutMethod.data.details?.clabe) {
            return `Clabe ${payoutMethod.data.details.clabe}`;
          } else if (payoutMethod.data.details?.bankgiroNumber) {
            return `BankGiro ${payoutMethod.data.details.bankgiroNumber}`;
          } else {
            return `${payoutMethod.data.accountHolderName} (${payoutMethod.data.currency})`;
          }
        } else if (payoutMethod.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER) {
          const content = payoutMethod.data?.content?.replace(/\n|\t/g, ' ');
          const i18nType = (0,_lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(this.props.intl, payoutMethod.type);
          return content ? `${i18nType} - ${lodash_truncate__WEBPACK_IMPORTED_MODULE_0___default()(content, {
            length: MAX_PAYOUT_OPTION_DATA_LENGTH
          })}` : i18nType;
        } else {
          return (0,_lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(this.props.intl, payoutMethod.type);
        }
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
            fontWeight: "bold",
            color: "green.600",
            mr: 1,
            children: "+"
          }), "\xA0", newPayoutMethodMsg[payoutMethod.type] ? this.props.intl.formatMessage(newPayoutMethodMsg[payoutMethod.type]) : this.props.intl.formatMessage(newPayoutMethodMsg._default, {
            type: payoutMethod.type
          })]
        });
      }
    });

    _defineProperty(this, "getPayoutMethodTitle", pm => {
      if (pm.type === _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER && pm.data?.content?.length > MAX_PAYOUT_OPTION_DATA_LENGTH) {
        return pm.data.content;
      }
    });

    _defineProperty(this, "formatOptionLabel", ({
      value
    }, {
      context
    }) => {
      const isMenu = context === 'menu';
      const isDeletable = value.isDeletable === undefined ? value.type !== _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE : value.isDeletable;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Flex */ .kC, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Text__WEBPACK_IMPORTED_MODULE_20__/* .Span */ .Dr, {
          fontSize: isMenu ? '13px' : '14px',
          children: this.getPayoutMethodLabel(value)
        }), isMenu && value.id && isDeletable && this.props.onRemove && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledRoundButton__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
          size: 20,
          ml: 2,
          type: "button",
          flex: "0 0 20px",
          buttonStyle: "dangerSecondary",
          isBorderless: true,
          onClick: e => {
            e.stopPropagation();
            this.setState({
              removingPayoutMethod: value
            });
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_styled_icons_fa_solid_Times__WEBPACK_IMPORTED_MODULE_7__.Times, {
            size: 10
          })
        })]
      });
    });

    _defineProperty(this, "getOptionFromPayoutMethod", pm => ({
      value: pm,
      title: this.getPayoutMethodTitle(pm)
    }));

    _defineProperty(this, "getOptions", memoize_one__WEBPACK_IMPORTED_MODULE_8___default()((host, payoutMethods, payee) => {
      let payerHostSupportedPayoutMethods;

      if (host) {
        payerHostSupportedPayoutMethods = host.supportedPayoutMethods || _lib_constants_utils__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY_ARRAY */ .L;
      } else {
        // For collectives without a host, we allow expenses to be submitted with the "Other"/"Custom" payout method
        // This is mostly for people trying out the platform
        payerHostSupportedPayoutMethods = [_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER, _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.BANK_ACCOUNT */ .Nk.BANK_ACCOUNT];
      }

      const payeeIsSelfHosted = payee && payee.id === payee.host?.id;
      const payeeIsCollectiveFamilyType = payee && _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AccountTypesWithHost.includes */ .Zs.includes(payee.type);
      const payeeIsSameHost = payee && host && payee.host?.id === host.id;
      let pmTypes;

      if (payeeIsSameHost) {
        pmTypes = [_lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE];
      } else {
        pmTypes = payerHostSupportedPayoutMethods // Credit Card (Virtual Card) is generally not a Payout Method acceptable on the Frontend
        .filter(type => type !== _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.CREDIT_CARD */ .Nk.CREDIT_CARD) // Account Balance is not possible on different Hosts
        .filter(type => type !== _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE); // Other not available for regular Collectives, Funds, Projects, Events

        if (payeeIsCollectiveFamilyType && !payeeIsSelfHosted) {
          pmTypes = pmTypes.filter(type => type !== _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER);
        }
      } // No "New" Payout Methods for Collectives unless Self Hosted
      // TODO: maybe we should not filter when the loggedInAccount is an admin of the payee's host


      const creatablePmTypes = payeeIsCollectiveFamilyType && !payeeIsSelfHosted ? [] : pmTypes.filter(pmType => pmType !== _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.ACCOUNT_BALANCE */ .Nk.ACCOUNT_BALANCE);

      const groupedPms = lodash_groupBy__WEBPACK_IMPORTED_MODULE_2___default()(payoutMethods, 'type');

      return pmTypes.map(pmType => ({
        label: (0,_lib_i18n_payout_method_type__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(this.props.intl, pmType),
        options: [// Add existing payout methods for this type
        ...lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(groupedPms, pmType, []).map(this.getOptionFromPayoutMethod), // Add "+ Create new ..." for this payment type
        creatablePmTypes.includes(pmType) ? this.getOptionFromPayoutMethod({
          type: pmType,
          isSaved: true,
          data: this.getDefaultData(pmType)
        }) : null].filter(option => option !== null)
      }));
    }));
  }

  getDefaultData(payoutMethodType) {
    switch (payoutMethodType) {
      case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.PAYPAL */ .Nk.PAYPAL:
        return {
          email: ''
        };

      case _lib_constants_payout_method__WEBPACK_IMPORTED_MODULE_11__/* .PayoutMethodType.OTHER */ .Nk.OTHER:
        return {
          content: ''
        };

      default:
        return {};
    }
  }

  async removePayoutMethod(payoutMethod) {
    await this.props.removePayoutMethod({
      variables: {
        id: payoutMethod.id
      }
    });
    this.setState({
      removingPayoutMethod: null
    });
    this.props.onRemove(payoutMethod);

    if (this.props.payoutMethod?.id === payoutMethod.id) {
      this.props.onChange({
        value: null
      });
    }
  }

  render() {
    const _this$props = this.props,
          {
      payoutMethods,
      defaultPayoutMethod,
      payoutMethod,
      payee,
      collective
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    const {
      removingPayoutMethod
    } = this.state;
    const value = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(payoutMethod) && this.getOptionFromPayoutMethod(payoutMethod);
    const payeeIsCollectiveFamilyType = payee && _lib_constants_collectives__WEBPACK_IMPORTED_MODULE_10__/* .AccountTypesWithHost.includes */ .Zs.includes(payee.type);
    const payeeIsSameHost = payee && payee.host?.id === collective.host?.id;
    const styledSelectOptions = this.getOptions(collective.host, payoutMethods, payee);
    const hasSuitablePayoutMethodOption = styledSelectOptions.find(({
      options
    }) => options.length > 0) ? true : false;

    if (payeeIsCollectiveFamilyType && !payeeIsSameHost) {
      if (!collective?.host?.isTrustedHost) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          type: "error",
          mt: 2,
          mb: 3,
          fontSize: "12px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
            id: "GiJCGt",
            defaultMessage: [{
              "type": 0,
              "value": "This Expense is between different Hosts but the Payer Host is not allowed for this yet."
            }]
          }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
            id: "ZbcLMU",
            defaultMessage: [{
              "type": 0,
              "value": "If it's an issue, contact the Host or Open Collective support."
            }]
          })]
        });
      }

      if (!hasSuitablePayoutMethodOption) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_MessageBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          type: "error",
          mt: 2,
          mb: 3,
          fontSize: "12px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
            id: "eKwDAi",
            defaultMessage: [{
              "type": 0,
              "value": "This Expense is between different Hosts but the recipient Host doesn't have a suitable Payout Method available ("
            }, {
              "type": 1,
              "value": "payoutMethodTypes"
            }, {
              "type": 0,
              "value": ")."
            }],
            values: {
              payoutMethodTypes: Object.values(styledSelectOptions).map(option => option.label).join(', ')
            }
          }), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
            id: "ZbcLMU",
            defaultMessage: [{
              "type": 0,
              "value": "If it's an issue, contact the Host or Open Collective support."
            }]
          })]
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
      children: [payeeIsCollectiveFamilyType && !payeeIsSameHost && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_MessageBox__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
        type: "warning",
        mt: 2,
        mb: 3,
        fontSize: "12px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "EgEmmA",
          defaultMessage: [{
            "type": 0,
            "value": "This Expense is between different Hosts. Pick a Payout Method from the recipient Host."
          }]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_StyledSelect__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, _objectSpread(_objectSpread({
        inputId: "payout-method-select",
        "data-cy": "payout-method-select"
      }, props), {}, {
        options: styledSelectOptions,
        defaultValue: defaultPayoutMethod ? this.getOptionFromPayoutMethod(defaultPayoutMethod) : undefined,
        value: typeof value === 'undefined' ? undefined : value,
        formatOptionLabel: this.formatOptionLabel,
        isSearchable: false
      })), removingPayoutMethod && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        isDanger: true,
        type: "remove",
        onClose: () => this.setState({
          removingPayoutMethod: null
        }),
        continueHandler: () => this.removePayoutMethod(removingPayoutMethod),
        header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedMessage, {
          id: "PayoutMethod.RemoveWarning",
          defaultMessage: [{
            "type": 0,
            "value": "Remove this payout method?"
          }]
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_Grid__WEBPACK_IMPORTED_MODULE_16__/* .Box */ .xu, {
          mb: 2,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_PayoutMethodTypeWithIcon__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            type: removingPayoutMethod.type
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx(_PayoutMethodData__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
          payoutMethod: removingPayoutMethod
        })]
      })]
    });
  }

}

const removePayoutMethodMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  mutation RemovePayoutMethod($id: String!) {
    removePayoutMethod(payoutMethodId: $id) {
      id
      isSaved
    }
  }
`;
const addRemovePayoutMethodMutation = (0,_apollo_client_react_hoc__WEBPACK_IMPORTED_MODULE_6__.graphql)(removePayoutMethodMutation, {
  name: 'removePayoutMethod',
  options: {
    context: _lib_graphql_helpers__WEBPACK_IMPORTED_MODULE_13__/* .API_V2_CONTEXT */ .T
  }
});
PayoutMethodSelect.__docgenInfo = {
  "description": "An overset of `StyledSelect` specialized for payout methods. Accepts all the props\nfrom `StyledSelect`.",
  "methods": [{
    "name": "getPayoutMethodLabel",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "payoutMethod",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getPayoutMethodTitle",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "pm",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getDefaultData",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "payoutMethodType",
      "type": null
    }],
    "returns": null
  }, {
    "name": "removePayoutMethod",
    "docblock": null,
    "modifiers": ["async"],
    "params": [{
      "name": "payoutMethod",
      "type": null
    }],
    "returns": null
  }, {
    "name": "formatOptionLabel",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{ value }",
      "type": null
    }, {
      "name": "{ context }",
      "type": null
    }],
    "returns": null
  }, {
    "name": "getOptionFromPayoutMethod",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "pm",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "PayoutMethodSelect",
  "props": {
    "intl": {
      "description": "@ignore from injectIntl",
      "type": {
        "name": "object"
      },
      "required": false
    },
    "removePayoutMethod": {
      "description": "@ignore from mutation",
      "type": {
        "name": "func"
      },
      "required": false
    },
    "payoutMethod": {
      "description": "Use this prop to control the component",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }],
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(PayoutMethodType)",
            "required": false
          }
        }
      },
      "required": false
    },
    "payoutMethods": {
      "description": "The payout methods",
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "id": {
              "name": "union",
              "value": [{
                "name": "string"
              }, {
                "name": "number"
              }],
              "required": false
            },
            "type": {
              "name": "enum",
              "computed": true,
              "value": "Object.values(PayoutMethodType)",
              "required": false
            }
          }
        }
      },
      "required": false
    },
    "defaultPayoutMethod": {
      "description": "Default value",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "union",
            "value": [{
              "name": "string"
            }, {
              "name": "number"
            }],
            "required": false
          },
          "type": {
            "name": "enum",
            "computed": true,
            "value": "Object.values(PayoutMethodType)",
            "required": false
          }
        }
      },
      "required": false
    },
    "collective": {
      "description": "The Collective paying the expense",
      "type": {
        "name": "shape",
        "value": {
          "host": {
            "name": "shape",
            "value": {
              "id": {
                "name": "string",
                "required": false
              },
              "connectedAccounts": {
                "name": "arrayOf",
                "value": {
                  "name": "shape",
                  "value": {
                    "service": {
                      "name": "string",
                      "required": false
                    }
                  }
                },
                "required": false
              },
              "supportedPayoutMethods": {
                "name": "array",
                "required": false
              },
              "isTrustedHost": {
                "name": "bool",
                "required": false
              }
            },
            "required": false
          }
        }
      },
      "required": true
    },
    "payee": {
      "description": "The Acccount being paid with the expense",
      "type": {
        "name": "shape",
        "value": {
          "id": {
            "name": "string",
            "required": false
          },
          "type": {
            "name": "string",
            "required": false
          },
          "host": {
            "name": "shape",
            "value": {
              "id": {
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
    "onChange": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    },
    "onRemove": {
      "description": "",
      "type": {
        "name": "func"
      },
      "required": true
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo((0,react_intl__WEBPACK_IMPORTED_MODULE_9__.injectIntl)(addRemovePayoutMethodMutation(PayoutMethodSelect))));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ attachmentDropzoneParams),
/* harmony export */   "x": () => (/* binding */ attachmentRequiresFile)
/* harmony export */ });
/* harmony import */ var _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19878);
/* harmony import */ var _StyledDropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37070);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StyledDropzone__WEBPACK_IMPORTED_MODULE_1__]);
_StyledDropzone__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const attachmentDropzoneParams = {
  accept: _StyledDropzone__WEBPACK_IMPORTED_MODULE_1__/* .DROPZONE_ACCEPT_ALL */ .bQ,
  minSize: 1024,
  // in bytes, =1ko
  maxSize: 10000 * 1024 // in bytes, =10mo

};
/**
 * Returns true if the attachment require adding a file
 */

const attachmentRequiresFile = expenseType => {
  return expenseType === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_0__/* ["default"].RECEIPT */ .Z.RECEIPT || expenseType === _lib_constants_expenseTypes__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CHARGE */ .Z.CHARGE;
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 82055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useImageUploader)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88705);
/* harmony import */ var _components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31330);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65985);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97079);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__]);
_components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const msg = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.defineMessages)({
  invalidFiles: {
    id: "StyledDropzone.InvalidFiles",
    defaultMessage: [{
      "type": 0,
      "value": "The following "
    }, {
      "type": 6,
      "value": "count",
      "options": {
        "one": {
          "value": [{
            "type": 0,
            "value": "file is"
          }]
        },
        "other": {
          "value": [{
            "type": 0,
            "value": "files are"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }, {
      "type": 0,
      "value": " not valid: "
    }, {
      "type": 1,
      "value": "files"
    }]
  }
});
/** Fets the average progress from a list of upload progress */

const getUploadProgress = uploadProgressList => {
  if (!uploadProgressList || uploadProgressList.length === 0) {
    return 0;
  } else {
    const totalUploadProgress = uploadProgressList.reduce((total, current) => total + current, 0);
    return Math.trunc(totalUploadProgress / uploadProgressList.length);
  }
};

const useImageUploader = ({
  isMulti,
  mockImageGenerator,
  onSuccess,
  onReject,
  kind
}) => {
  const [isUploading, setUploading] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [uploadProgressList, setUploadProgressList] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  const {
    addToast
  } = (0,_components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__/* .useToasts */ .e1)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  return {
    isUploading,
    uploadProgress: getUploadProgress(uploadProgressList),
    uploadFiles: react__WEBPACK_IMPORTED_MODULE_2___default().useCallback(async (acceptedFiles, rejectedFiles) => {
      setUploading(true);
      const filesToUpload = isMulti ? acceptedFiles : [acceptedFiles[0]];
      const results = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .allSettled */ .Lu)(filesToUpload.map((file, index) => (0,_api__WEBPACK_IMPORTED_MODULE_6__/* .uploadImageWithXHR */ .Z4)(file, kind, {
        mockImage: mockImageGenerator && mockImageGenerator(index),
        onProgress: progress => {
          const newProgressList = [...uploadProgressList];
          newProgressList.splice(index, 0, progress);
          setUploadProgressList(newProgressList);
        }
      })));
      setUploading(false);
      const successes = [];
      const failures = [];
      results.forEach((result, index) => {
        const fileInfo = lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(filesToUpload[index], ['name', 'size', 'type']);

        if (result.status === 'fulfilled') {
          successes.push(_objectSpread({
            url: result.value
          }, fileInfo));
        } else {
          failures.push(_objectSpread({
            message: result.reason
          }, fileInfo));
        }
      });

      if (onSuccess && successes.length > 0) {
        await onSuccess(isMulti ? successes : successes[0]);
      }

      if (onReject && failures.length > 0) {
        onReject(isMulti ? failures : failures[0]);
      }

      if (rejectedFiles?.length) {
        const baseMsg = intl.formatMessage(msg.invalidFiles, _objectSpread(_objectSpread({}, _components_I18nFormatters__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP), {}, {
          count: rejectedFiles.length,
          files: rejectedFiles.map(({
            file
          }) => file.name).join(', ')
        }));
        const errorMsg = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(rejectedFiles[0], 'errors.0.message') || '';
        addToast({
          type: _components_ToastProvider__WEBPACK_IMPORTED_MODULE_5__/* .TOAST_TYPE.ERROR */ ["do"].ERROR,
          message: `${baseMsg}. ${errorMsg}`
        });
      }
    }, [isMulti, onSuccess, onReject, mockImageGenerator, uploadProgressList])
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Holds the previous value. Useful to reproduce a `componentDidUpdate(prevProps)` behavior
 * in a hook component.
 */

const usePrevious = value => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};

/***/ })

};
;